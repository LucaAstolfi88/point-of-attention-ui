import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { DecalGeometry } from './vendor/DecalGeometry.js';
import type {
  DefectPalette,
  MarkerShape,
  ModelPartVisibility,
  SelectionOption,
  SelectionRequest,
  Severity,
  SnapshotImage,
  SnapshotReport,
  SnapshotView,
  ViewerPart,
  WarningDefect,
  WarningViewerOptions,
} from './contracts';

const DEFAULT_PALETTE: Required<DefectPalette> = {
  info: '#2196f3',
  warning: '#ff9800',
  error: '#f44336',
  default: '#f44336',
};

const POINTER_TAP_MOVEMENT_THRESHOLD_SQUARED = 64;

/** 0 → 'A', 1 → 'B', … 25 → 'Z', 26 → 'AA', 27 → 'AB', … */
function toAlphabetLabel(index: number): string {
  let label = '';
  let n = index + 1;
  while (n > 0) {
    n--;
    label = String.fromCharCode(65 + (n % 26)) + label;
    n = Math.floor(n / 26);
  }
  return label;
}

/** Resolve the color for a severity, applying the user palette on top of defaults. */
function resolveSeverityColor(
  severity: Severity | undefined,
  palette: DefectPalette
): string {
  switch (severity) {
    case 'info':    return palette.info ?? DEFAULT_PALETTE.info;
    case 'warning': return palette.warning ?? DEFAULT_PALETTE.warning;
    case 'error':   return palette.error ?? DEFAULT_PALETTE.error;
    default:        return palette.default ?? DEFAULT_PALETTE.default;
  }
}

/** Draw a marker shape centered in a `size`×`size` canvas context. */
function drawMarkerShape(
  ctx: CanvasRenderingContext2D,
  shape: MarkerShape,
  size: number
): void {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;
  ctx.beginPath();
  switch (shape) {
    case 'square':
      ctx.rect(0, 0, size, size);
      break;
    case 'diamond':
      ctx.moveTo(cx, 0);
      ctx.lineTo(size, cy);
      ctx.lineTo(cx, size);
      ctx.lineTo(0, cy);
      break;
    case 'triangle':
      ctx.moveTo(cx, 0);
      ctx.lineTo(size, size);
      ctx.lineTo(0, size);
      break;
    case 'hexagon':
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      break;
    case 'circle':
    default:
      ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
      break;
  }
  ctx.closePath();
}

interface RenderedDefect {
  defect: WarningDefect;
  decal: THREE.Mesh;
  line: THREE.Line;
  label: THREE.Sprite;
}

interface PendingSelection {
  point: THREE.Vector3;
  normal: THREE.Vector3;
  mesh: THREE.Mesh;
  meshName: string;
}

function cloneDefects(defects: WarningDefect[]): WarningDefect[] {
  return defects.map(defect => ({
    ...defect,
    position: defect.position ? { ...defect.position } : undefined,
    orientation: defect.orientation ? { ...defect.orientation } : undefined,
    cameraPosition: defect.cameraPosition ? { ...defect.cameraPosition } : undefined,
    cameraQuaternion: defect.cameraQuaternion ? { ...defect.cameraQuaternion } : undefined,
    metadata: defect.metadata ? { ...defect.metadata } : undefined,
  }));
}

function defectsEqual(left: WarningDefect[], right: WarningDefect[]): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

/** Generate a short unique id. */
function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function toVec3(v: THREE.Vector3) {
  return { x: v.x, y: v.y, z: v.z };
}
function toQuat(q: THREE.Quaternion) {
  return { x: q.x, y: q.y, z: q.z, w: q.w };
}

/**
 * Framework-agnostic 3D point-of-attention/defect viewer engine based on Three.js.
 */
export class WarningViewerEngine {
  private readonly container: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly renderCamera: THREE.PerspectiveCamera;
  private snapshotCanvas: HTMLCanvasElement | null = null;
  private snapshotRenderer: THREE.WebGLRenderer | null = null;
  private controls!: OrbitControls;

  private readonly raycaster = new THREE.Raycaster();
  private readonly mouse = new THREE.Vector2();
  private readonly mouseHelper: THREE.Mesh;
  private readonly line: THREE.Line;

  private componentGroup: THREE.Group | null = null;
  private modelCenter = new THREE.Vector3();
  private modelSize = 100;

  private defects: WarningDefect[] = [];
  private renderedDefects: RenderedDefect[] = [];
  private warningCount = 0;

  private isLoading = false;
  private loadingProgress = 0;
  private loadingState: 'idle' | 'loading' | 'processing' | 'complete' = 'idle';
  private isDragging = false;
  private pointerDownPos: { x: number; y: number } | null = null;
  private activePointerId: number | null = null;
  private disposed = false;
  private rafId = 0;
  private resizeObserver: ResizeObserver | null = null;
  
  // Throttling and debouncing timers
  private resizeTimeoutId: number | null = null;
  private pointerMoveTimeoutId: number | null = null;
  private renderThrottleId: number | null = null;

  private pendingSelection: PendingSelection | null = null;

  private readOnly = false;
  private highlightMode = false;
  private highlightedMesh: THREE.Mesh | null = null;
  private heatMapMode = false;
  private heatMapDecals: THREE.Mesh[] = [];

  private undoStack: WarningDefect[][] = [];
  private redoStack: WarningDefect[][] = [];

  private readonly options: WarningViewerOptions & {
    defects: WarningDefect[];
    partsVisibility: ModelPartVisibility[];
    backgroundColor: number;
    markerShape: MarkerShape;
    palette: DefectPalette;
    rayLength: number;
    pulseOnSelect: boolean;
  };

  // Object pools for frequently created objects
  private readonly geometryPool: THREE.BufferGeometry[] = [];
  private readonly materialPool: THREE.Material[] = [];
  private readonly texturePool: THREE.Texture[] = [];
  private readonly meshPool: THREE.Object3D[] = []; // holds pooled Mesh / Line / Sprite objects

  constructor(container: HTMLElement, options: WarningViewerOptions) {
    this.container = container;
    this.options = {
      ...options,
      defects: options.defects ?? [],
      partsVisibility: options.partsVisibility ?? [],
      backgroundColor: options.backgroundColor ?? 0xe1e2e2,
      markerShape: options.markerShape ?? 'circle',
      palette: options.palette ?? {},
      rayLength: options.rayLength ?? 0.7,
      pulseOnSelect: options.pulseOnSelect ?? true,
    };
    this.defects = this.options.defects.slice();
    this.warningCount = this.defects.length;

    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = 'block';
    container.appendChild(this.canvas);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    this.renderCamera = new THREE.PerspectiveCamera(45, 1, 1, 1000);

    this.mouseHelper = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 10),
      new THREE.MeshNormalMaterial()
    );
    this.mouseHelper.visible = false;
    this.scene.add(this.mouseHelper);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    this.line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial());

    this.isLoading = true;
    this.initThree();
    this.bindEvents();
    this.startResizeObserver();
    this.loadModel(this.options.modelUrl);
    this.animate();
  }

  get isModelLoading(): boolean { return this.isLoading; }
  get isModelLoaded(): boolean { return !!this.componentGroup; }
  hasWarning(): boolean { return this.defects.length > 0; }

  setDefects(defects: WarningDefect[]): void {
    const nextDefects = defects ?? [];
    if (defectsEqual(this.defects, nextDefects)) return;
    this.saveUndoState();
    this.defects = cloneDefects(nextDefects);
    this.warningCount = this.defects.length;
    this.rerenderDefects();
    this.generateSnapshotReport();
  }

  getDefects(): WarningDefect[] {
    return cloneDefects(this.defects);
  }

  getDefectById(id: string): WarningDefect | undefined {
    return this.defects.find(d => d.id === id);
  }

  removeDefect(id: string): boolean {
    const idx = this.defects.findIndex(d => d.id === id);
    if (idx === -1) return false;
    this.saveUndoState();
    this.defects.splice(idx, 1);
    this.rerenderDefects();
    this.options.onDefectsChanged?.(this.defects.slice());
    this.generateSnapshotReport();
    return true;
  }

  updateDefect(id: string, changes: Partial<WarningDefect>): boolean {
    const defect = this.defects.find(d => d.id === id);
    if (!defect) return false;
    this.saveUndoState();
    Object.assign(defect, changes);
    this.rerenderDefects();
    this.options.onDefectsChanged?.(this.defects.slice());
    this.generateSnapshotReport();
    return true;
  }

  clearAllDefects(): void {
    if (this.defects.length === 0) return;
    this.saveUndoState();
    this.defects = [];
    this.warningCount = 0;
    this.rerenderDefects();
    this.options.onDefectsChanged?.(this.defects.slice());
    this.generateSnapshotReport();
  }

  addWarning(option: SelectionOption): WarningDefect | null {
    if (this.readOnly) return null;
    if (!this.pendingSelection || !this.componentGroup) return null;
    this.saveUndoState();
    this.warningCount++;
    const number = this.warningCount;
    const label = toAlphabetLabel(number - 1);
    const { point, normal, mesh, meshName } = this.pendingSelection;
    const orientation = this.mouseHelper.rotation.clone();
    const size = new THREE.Vector3().setScalar(this.modelSize * 0.05);
    const severityColor = resolveSeverityColor(option.severity, this.options.palette);
    const decalTexture = this.createDecalTexture(label, severityColor, this.options.markerShape);
    const material = new THREE.MeshPhongMaterial({
      map: decalTexture, transparent: true, depthTest: true, depthWrite: true,
      polygonOffset: true, polygonOffsetFactor: -5,
    });
    const decal = new THREE.Mesh(new DecalGeometry(mesh, point, orientation, size), material);
    decal.userData = { meshParent: mesh };
    this.scene.add(decal);

    const surfacePoint = this.computeSurfacePoint(point);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([point, surfacePoint]);
    const lineMaterial = new THREE.LineDashedMaterial({ color: 0x000000, dashSize: 3, gapSize: 1 });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.computeLineDistances();
    this.scene.add(line);

    const labelSprite = this.createLabel(label, surfacePoint);
    labelSprite.userData = {
      cameraPosition: this.camera.position.clone(),
      cameraQuaternion: this.camera.quaternion.clone(),
    };
    this.scene.add(labelSprite);

    const defect: WarningDefect = {
      id: `defect-${uid()}`,
      label,
      meshName,
      position: toVec3(point),
      orientation: { x: orientation.x, y: orientation.y, z: orientation.z },
      cameraPosition: toVec3(this.camera.position),
      cameraQuaternion: toQuat(this.camera.quaternion),
      severity: option.severity ?? 'error',
      metadata: { optionId: option.id, optionLabel: option.label },
    };

    this.renderedDefects.push({ defect, decal, line, label: labelSprite });
    this.defects.push(defect);
    this.pendingSelection = null;
    this.options.onDefectsChanged?.(this.defects.slice());
    this.generateSnapshotReport();
    return defect;
  }

  cancelSelection(): void {
    this.pendingSelection = null;
  }

  setPartsVisibility(parts: ModelPartVisibility[]): void {
    this.options.partsVisibility = parts ?? [];
    this.applyPartsVisibility();
  }

  setPartVisible(meshName: string, visible: boolean): void {
    if (!this.componentGroup) return;
    this.componentGroup.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh && obj.name === meshName) {
        obj.visible = visible;
        this.renderedDefects
          .filter(d => d.defect.meshName === meshName)
          .forEach(d => {
            d.decal.visible = visible;
            d.line.visible = visible;
            d.label.visible = visible;
          });
      }
    });
  }

  getParts(): ViewerPart[] {
    if (!this.componentGroup) return [];
    const parts: ViewerPart[] = [];
    this.componentGroup.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh) {
        parts.push({ name: obj.name, visible: obj.visible });
      }
    });
    return parts;
  }

  setModelUrl(url: string): void {
    this.options.modelUrl = url;
    this.loadModel(url);
  }

  setCameraView(direction: string): void {
    const distance = this.modelSize * 2;
    const center = this.modelCenter;
    switch (direction) {
      case 'Front': this.camera.position.copy(center).add(new THREE.Vector3(0, 0, distance)); break;
      case 'Back':  this.camera.position.copy(center).add(new THREE.Vector3(0, 0, -distance)); break;
      case 'Left':  this.camera.position.copy(center).add(new THREE.Vector3(-distance, 0, 0)); break;
      case 'Right': this.camera.position.copy(center).add(new THREE.Vector3(distance, 0, 0)); break;
      case 'Top':   this.camera.position.copy(center).add(new THREE.Vector3(0, distance, 0)); break;
      case 'Bottom':this.camera.position.copy(center).add(new THREE.Vector3(0, -distance, 0)); break;
      default: return;
    }
    this.controls.target.copy(center);
    this.camera.lookAt(center);
    this.camera.zoom = 1;
    this.camera.updateProjectionMatrix();
    this.controls.update();
  }

  flyToDefect(id: string): void {
    const defect = this.defects.find(d => d.id === id);
    if (!defect?.cameraPosition || !defect?.cameraQuaternion) return;
    const targetPos = new THREE.Vector3(defect.cameraPosition.x, defect.cameraPosition.y, defect.cameraPosition.z);
    const targetQuat = new THREE.Quaternion(defect.cameraQuaternion.x, defect.cameraQuaternion.y, defect.cameraQuaternion.z, defect.cameraQuaternion.w);
    this.animateCameraToTarget(this.camera, targetPos, targetQuat, 1000);
  }

  zoomToFit(): void {
    if (!this.componentGroup) return;
    const distance = this.modelSize * 2;
    this.controls.target.copy(this.modelCenter);
    this.camera.position.copy(this.modelCenter).add(new THREE.Vector3(distance * 0.5, distance * 0.3, distance));
    this.camera.zoom = 1;
    this.camera.lookAt(this.modelCenter);
    this.camera.updateProjectionMatrix();
    this.controls.update();
  }

  undo(): boolean {
    if (this.undoStack.length === 0) return false;
    this.redoStack.push(cloneDefects(this.defects));
    this.defects = cloneDefects(this.undoStack.pop()!);
    this.warningCount = this.defects.length;
    this.rerenderDefects();
    this.options.onDefectsChanged?.(cloneDefects(this.defects));
    this.generateSnapshotReport();
    return true;
  }

  redo(): boolean {
    if (this.redoStack.length === 0) return false;
    this.undoStack.push(cloneDefects(this.defects));
    this.defects = cloneDefects(this.redoStack.pop()!);
    this.warningCount = this.defects.length;
    this.rerenderDefects();
    this.options.onDefectsChanged?.(cloneDefects(this.defects));
    this.generateSnapshotReport();
    return true;
  }

  setReadOnly(readOnly: boolean): void {
    this.readOnly = readOnly;
  }

  setHighlightMode(enabled: boolean): void {
    this.highlightMode = enabled;
    if (!enabled && this.highlightedMesh) {
      this.resetMeshHighlight(this.highlightedMesh);
      this.highlightedMesh = null;
    }
  }

  setHeatMap(enabled: boolean): void {
    this.heatMapMode = enabled;
    this.applyHeatMap();
  }

  addDistributedWarnings(count: number): WarningDefect[] {
    if (!this.componentGroup || count <= 0) return [];
    const meshes: THREE.Mesh[] = [];
    this.componentGroup.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh && obj.visible) meshes.push(obj as THREE.Mesh);
    });
    const options = this.options.getSelectionOptions?.() ?? [];
    if (meshes.length === 0 || options.length === 0) return [];
    this.saveUndoState();
    const generated: WarningDefect[] = [];
    for (let i = 0; i < count; i++) {
      const mesh = meshes[i % meshes.length];
      const positionAttribute = mesh.geometry.getAttribute('position');
      const normalAttribute = mesh.geometry.getAttribute('normal');
      if (!positionAttribute || positionAttribute.count === 0) continue;
      const vertexIndex = (i * 37 + 11) % positionAttribute.count;
      const point = new THREE.Vector3().fromBufferAttribute(positionAttribute, vertexIndex).applyMatrix4(mesh.matrixWorld);
      const normal = normalAttribute
        ? new THREE.Vector3().fromBufferAttribute(normalAttribute, vertexIndex).transformDirection(mesh.matrixWorld).normalize()
        : point.clone().sub(this.modelCenter).normalize();
      const rotation = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      const option = options[i % options.length];
      const number = ++this.warningCount;
      const label = toAlphabetLabel(number - 1);
      const orientation = new THREE.Euler().setFromQuaternion(rotation);
      generated.push({
        id: `defect-${uid()}`,
        label,
        meshName: mesh.name || 'Unnamed mesh',
        position: toVec3(point),
        orientation: { x: orientation.x, y: orientation.y, z: orientation.z },
        cameraPosition: toVec3(this.camera.position),
        cameraQuaternion: toQuat(this.camera.quaternion),
        severity: option.severity ?? 'warning',
        metadata: { optionId: option.id, optionLabel: option.label, generated: true },
      });
    }
    this.defects.push(...generated);
    this.rerenderDefects();
    this.options.onDefectsChanged?.(cloneDefects(this.defects));
    this.generateSnapshotReport();
    return cloneDefects(generated);
  }

  generateCameraImages(): string[] {
    if (!this.componentGroup) return [];
    
    // Reduce image quality for mobile devices to save memory
    const isMobile = this.isMobileDevice();
    const canvasWidth = isMobile ? 512 : 1024;
    const canvasHeight = isMobile ? 384 : 768;
    
    const positions: Array<[number, number, number]> = [
      [84.33, 76.3, 97.79],
      [-57.5, -33.95, -37.94],
    ];
    const { canvas, renderer } = this.getSnapshotRenderer(canvasWidth, canvasHeight);
    const images: string[] = [];
    
    try {
      positions.forEach(pos => {
        this.renderCamera.copy(this.camera);
        this.renderCamera.position.set(pos[0], pos[1], pos[2]);
        this.renderCamera.lookAt(new THREE.Vector3(0, 0, 0));
        this.renderCamera.zoom = 0.6;
        this.renderCamera.updateProjectionMatrix();
        renderer.setClearColor(0xe1e2e2, 0.6);
        renderer.render(this.scene, this.renderCamera);
        
        // Use lower quality for mobile devices
        const quality = isMobile ? 0.8 : 0.92;
        images.push(canvas.toDataURL('image/png', quality));
      });
    } finally {
      this.renderCamera.copy(this.camera);
    }
    return images;
  }

  captureSnapshot(view: SnapshotView): string {
    return this.captureSnapshotInternal(view);
  }

  generateSnapshotReport(): void {
    if (!this.options.onSnapshotReport) return;
    if (!this.componentGroup) return;
    const views: SnapshotView[] = ['top', 'front', 'isometric', 'left', 'right', 'back'];
    const capturedAt = new Date().toISOString();
    const images: SnapshotImage[] = views.map(view => ({
      view,
      dataUri: this.captureSnapshotInternal(view),
      capturedAt,
    }));
    const report: SnapshotReport = {
      id: `report-${uid()}`,
      defects: cloneDefects(this.defects),
      images,
      generatedAt: capturedAt,
    };
    this.options.onSnapshotReport(report);
  }

  dispose(): void {
    this.clearHeatMapDecals();
    this.disposed = true;
    cancelAnimationFrame(this.rafId);
    this.stopResizeObserver();
    this.unbindEvents();
    this.controls.dispose();
    this.scene.traverse(obj => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh || (obj as THREE.Sprite).isSprite) {
        mesh.geometry?.dispose?.();
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(material)) { material.forEach(m => m.dispose()); }
        else { material?.dispose?.(); }
      }
    });
    this.snapshotRenderer?.dispose();
    this.snapshotRenderer?.forceContextLoss();
    this.snapshotRenderer = null;
    this.snapshotCanvas = null;
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    
    // Dispose pooled objects
    this.disposePooledObjects();
    
    this.canvas.remove();
  }

  private captureSnapshotInternal(view: SnapshotView): string {
    if (!this.componentGroup) return '';
    
    // Reduce snapshot quality for mobile devices to save memory
    const isMobile = this.isMobileDevice();
    const canvasWidth = isMobile ? 512 : 1024;
    const canvasHeight = isMobile ? 384 : 768;
    
    const { canvas, renderer } = this.getSnapshotRenderer(canvasWidth, canvasHeight);
    const savedPos = this.camera.position.clone();
    const savedQuat = this.camera.quaternion.clone();
    const savedZoom = this.camera.zoom;
    
    try {
      const distance = this.modelSize * 2;
      const center = this.modelCenter;
      switch (view) {
        case 'top':       this.camera.position.set(0, distance, 0); break;
        case 'front':     this.camera.position.set(0, 0, distance); break;
        case 'back':      this.camera.position.set(0, 0, -distance); break;
        case 'left':      this.camera.position.set(-distance, 0, 0); break;
        case 'right':     this.camera.position.set(distance, 0, 0); break;
        case 'isometric': this.camera.position.set(distance, distance, distance); break;
      }
      this.camera.position.add(center);
      this.camera.lookAt(center);
      this.camera.zoom = 1;
      this.camera.updateProjectionMatrix();
      renderer.setClearColor(this.options.backgroundColor, 0.6);
      renderer.render(this.scene, this.camera);
      
      // Use lower quality for mobile devices
      const quality = isMobile ? 0.8 : 0.92;
      return canvas.toDataURL('image/png', quality);
    } finally {
      this.camera.position.copy(savedPos);
      this.camera.quaternion.copy(savedQuat);
      this.camera.zoom = savedZoom;
      this.camera.updateProjectionMatrix();
    }
  }

  private getSnapshotRenderer(width: number, height: number): {
    canvas: HTMLCanvasElement;
    renderer: THREE.WebGLRenderer;
  } {
    if (!this.snapshotCanvas || !this.snapshotRenderer) {
      this.snapshotCanvas = document.createElement('canvas');
      this.snapshotRenderer = new THREE.WebGLRenderer({
        canvas: this.snapshotCanvas,
        antialias: true,
        preserveDrawingBuffer: true,
      });
    }
    this.snapshotRenderer.setSize(width, height);
    return { canvas: this.snapshotCanvas, renderer: this.snapshotRenderer };
  }

  private saveUndoState(): void {
    this.undoStack.push(cloneDefects(this.defects));
    this.redoStack = [];
    if (this.undoStack.length > 50) this.undoStack.shift();
  }

  private initThree(): void {
    const { clientWidth, clientHeight } = this.container;
    
    // Adaptive rendering quality based on device capabilities
    const isMobile = this.isMobileDevice();
    const maxPixelRatio = isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;
    const powerPreference = isMobile ? "low-power" : "high-performance";
    
    this.renderer.setPixelRatio(maxPixelRatio);
    this.renderer.setSize(clientWidth || 1, clientHeight || 1);
    this.renderer.setClearColor(this.options.backgroundColor, 0.6);
    
    // Enable performance optimizations
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    
    this.camera.position.z = 150;
    this.renderCamera.position.setZ(150);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 50;
    this.controls.maxDistance = 150;
    
    // No damping: with inertia enabled the model keeps rotating after the
    // pointer is released (a "spin"). Rotation stops as soon as the drag ends.
    this.controls.enableDamping = false;
    
    this.scene.add(new THREE.AmbientLight(0x404040));
    const dirLight1 = new THREE.DirectionalLight(0xffddcc, 3);
    dirLight1.position.set(1, 0.75, 0.5);
    this.scene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0xccccff, 3);
    dirLight2.position.set(-1, 0.75, -0.5);
    this.scene.add(dirLight2);
  }

  private loadModel(url: string): void {
    this.isLoading = true;
    this.loadingState = 'loading';
    this.loadingProgress = 0;
    
    // Emit initial loading state
    if (this.options.onModelLoadError) {
      // We can use this callback to emit loading progress if needed
    }
    
    const loader = new GLTFLoader();
    loader.load(
      url,
      gltf => {
        // Ignore late loads from a disposed engine (e.g. React StrictMode
        // double-mount) or from a superseded model URL.
        if (this.disposed || url !== this.options.modelUrl) return;
        
        this.loadingState = 'processing';
        this.loadingProgress = 90;
        
        this.clearHeatMapDecals();
        if (this.componentGroup) {
          this.componentGroup.traverse(obj => {
            if ((obj as THREE.Mesh).isMesh) {
              (obj as THREE.Mesh).geometry?.dispose?.();
              const mat = (obj as THREE.Mesh).material;
              if (Array.isArray(mat)) mat.forEach(m => m.dispose());
              else mat?.dispose?.();
            }
          });
          this.scene.remove(this.componentGroup);
        }
        this.componentGroup = gltf.scene;
        this.componentGroup.scale.set(6, 6, 6);
        this.scene.add(this.componentGroup);
        this.componentGroup.updateMatrixWorld(true);
        const bounds = new THREE.Box3().setFromObject(this.componentGroup);
        bounds.getCenter(this.modelCenter);
        const dimensions = bounds.getSize(new THREE.Vector3());
        this.modelSize = Math.max(dimensions.x, dimensions.y, dimensions.z) || 1;
        this.camera.near = this.modelSize / 1000;
        this.camera.far = this.modelSize * 100;
        this.controls.minDistance = this.modelSize * 0.1;
        this.controls.maxDistance = this.modelSize * 20;
        this.zoomToFit();
        this.isLoading = false;
        this.loadingState = 'complete';
        this.loadingProgress = 100;
        this.applyPartsVisibility();
        this.rerenderDefects();
        this.options.onModelLoaded?.(this.getParts());
        this.applyHeatMap();
        this.generateSnapshotReport();
      },
      progress => {
        // Progress callback - update loading progress
        if (progress.total > 0) {
          this.loadingProgress = Math.round((progress.loaded / progress.total) * 80);
        }
      },
      error => {
        if (this.disposed || url !== this.options.modelUrl) return;
        this.isLoading = false;
        this.loadingState = 'idle';
        this.loadingProgress = 0;
        this.options.onModelLoadError?.(error);
      }
    );
  }

  private applyPartsVisibility(): void {
    if (!this.componentGroup) return;
    const map = new Map<string, boolean>(
      this.options.partsVisibility.map(p => [p.meshName, p.visible])
    );
    this.componentGroup.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh && map.has(obj.name)) {
        obj.visible = map.get(obj.name)!;
      }
    });
  }

  private findMeshByName(name?: string): THREE.Mesh | null {
    if (!name || !this.componentGroup) return null;
    let found: THREE.Mesh | null = null;
    this.componentGroup.traverse(obj => {
      if (!found && (obj as THREE.Mesh).isMesh && obj.name === name) {
        found = obj as THREE.Mesh;
      }
    });
    return found;
  }

  private rerenderDefects(): void {
    this.renderedDefects.forEach(d => {
      this.scene.remove(d.decal);
      this.scene.remove(d.line);
      this.scene.remove(d.label);
      
      // Return objects to pools
      if (d.decal.geometry) {
        this.returnObjectToPool(this.geometryPool, d.decal.geometry, (geom) => geom.dispose());
      }
      if (d.decal.material) {
        const material = d.decal.material as THREE.Material;
        this.returnObjectToPool(this.materialPool, material, (mat) => mat.dispose());
      }
      
      // Dispose line geometry and material
      if (d.line.geometry) {
        this.returnObjectToPool(this.geometryPool, d.line.geometry, (geom) => geom.dispose());
      }
      if (d.line.material) {
        const material = d.line.material as THREE.Material;
        this.returnObjectToPool(this.materialPool, material, (mat) => mat.dispose());
      }
      
      // Dispose label material and texture
      const labelMaterial = d.label.material as THREE.SpriteMaterial;
      if (labelMaterial.map) {
        this.returnObjectToPool(this.texturePool, labelMaterial.map, (tex) => tex.dispose());
      }
      this.returnObjectToPool(this.materialPool, labelMaterial, (mat) => mat.dispose());
    });
    this.renderedDefects = [];
    this.defects.forEach(defect => this.renderDefect(defect));
    this.applyHeatMap();
  }

  private clearHeatMapDecals(): void {
    this.heatMapDecals.forEach(decal => {
      this.scene.remove(decal);
      
      // Return objects to pools instead of disposing
      if (decal.geometry) {
        this.returnObjectToPool(this.geometryPool, decal.geometry, (geom) => geom.dispose());
      }
      const material = decal.material as THREE.MeshBasicMaterial;
      if (material.map) {
        this.returnObjectToPool(this.texturePool, material.map, (tex) => tex.dispose());
      }
      this.returnObjectToPool(this.materialPool, material, (mat) => mat.dispose());
    });
    this.heatMapDecals = [];
  }

  private applyHeatMap(): void {
    this.clearHeatMapDecals();
    if (!this.heatMapMode) return;
    if (!this.componentGroup) return;
    this.defects.forEach(defect => {
      const mesh = this.findMeshByName(defect.meshName);
      if (!mesh || !defect.position) return;
      const position = new THREE.Vector3(defect.position.x, defect.position.y, defect.position.z);
      const orientation = defect.orientation
        ? new THREE.Euler(defect.orientation.x, defect.orientation.y, defect.orientation.z)
        : new THREE.Euler();
      const size = new THREE.Vector3().setScalar(this.modelSize * 0.16);
      const material = new THREE.MeshBasicMaterial({
        map: this.createHeatMapTexture(),
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -6,
        blending: THREE.AdditiveBlending,
      });
      const decal = new THREE.Mesh(new DecalGeometry(mesh, position, orientation, size), material);
      decal.renderOrder = 2;
      this.scene.add(decal);
      this.heatMapDecals.push(decal);
    });
  }

  private createHeatMapTexture(): THREE.Texture {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255, 45, 45, 0.9)');
    gradient.addColorStop(0.32, 'rgba(255, 120, 30, 0.65)');
    gradient.addColorStop(0.68, 'rgba(255, 220, 30, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 220, 30, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private renderDefect(defect: WarningDefect): void {
    if (!this.componentGroup) return;
    const mesh = this.findMeshByName(defect.meshName);
    if (!mesh || !defect.position) return;
    const position = new THREE.Vector3(defect.position.x, defect.position.y, defect.position.z);
    const orientation = defect.orientation
      ? new THREE.Euler(defect.orientation.x, defect.orientation.y, defect.orientation.z)
      : new THREE.Euler();
    const size = new THREE.Vector3().setScalar(this.modelSize * 0.05);
    const color = resolveSeverityColor(defect.severity, this.options.palette);
    const decalTexture = this.createDecalTexture(defect.label ?? '', color, this.options.markerShape);
    
    // Use pooled material
    const material = this.getObjectFromPool(
      this.materialPool,
      THREE.MeshPhongMaterial,
      () => new THREE.MeshPhongMaterial({
        map: decalTexture, transparent: true, depthTest: true, depthWrite: true,
        polygonOffset: true, polygonOffsetFactor: -5,
      })
    ) as THREE.MeshPhongMaterial;
    
    if (material.map !== decalTexture) {
      material.map = decalTexture;
      material.transparent = true;
      material.depthTest = true;
      material.depthWrite = true;
      material.polygonOffset = true;
      material.polygonOffsetFactor = -5;
      material.needsUpdate = true;
    }
    
    // Use pooled geometry
    const decalGeometry = this.getObjectFromPool(
      this.geometryPool,
      DecalGeometry,
      () => new DecalGeometry(mesh, position, orientation, size)
    );
    
    const decal = this.createPooledMesh(decalGeometry, material);
    decal.userData = { meshParent: mesh };
    this.scene.add(decal);
    
    const surfacePoint = this.computeSurfacePoint(position);
    
    // Use pooled line geometry and material
    const lineGeometry = this.createPooledGeometry();
    lineGeometry.setFromPoints([position, surfacePoint]);
    
    const lineMaterial = this.getObjectFromPool(
      this.materialPool,
      THREE.LineDashedMaterial,
      () => new THREE.LineDashedMaterial({ color: 0x000000, dashSize: 3, gapSize: 1 })
    ) as THREE.LineDashedMaterial;

    const line = this.getObjectFromPool(
      this.meshPool,
      THREE.Line,
      () => new THREE.Line(lineGeometry, lineMaterial)
    ) as THREE.Line;
    
    line.geometry = lineGeometry;
    line.material = lineMaterial;
    line.computeLineDistances();
    this.scene.add(line);
    
    const label = this.createLabel(defect.label ?? '', surfacePoint);
    label.userData = {
      cameraPosition: defect.cameraPosition
        ? new THREE.Vector3(defect.cameraPosition.x, defect.cameraPosition.y, defect.cameraPosition.z)
        : this.camera.position.clone(),
      cameraQuaternion: defect.cameraQuaternion
        ? new THREE.Quaternion(defect.cameraQuaternion.x, defect.cameraQuaternion.y, defect.cameraQuaternion.z, defect.cameraQuaternion.w)
        : this.camera.quaternion.clone(),
    };
    this.scene.add(label);
    this.renderedDefects.push({ defect, decal, line, label });
  }

  private computeSurfacePoint(position: THREE.Vector3): THREE.Vector3 {
    const direction = position.clone().sub(this.modelCenter).normalize();
    return direction.multiplyScalar(this.modelSize * this.options.rayLength).add(this.modelCenter);
  }

  private createDecalTexture(text: string, color: string, shape: MarkerShape): THREE.Texture {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d')!;
    drawMarkerShape(context, shape, size);
    context.fillStyle = color;
    context.fill();
    const fontSize = text.length > 1 ? (size * 55) / 100 : (size * 80) / 100;
    context.font = fontSize + 'px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, size / 2, size / 2);
    
    // Use pooled texture if available, otherwise create new
    const texture = this.getObjectFromPool(this.texturePool, THREE.CanvasTexture, () => new THREE.CanvasTexture(canvas));
    if (texture instanceof THREE.CanvasTexture) {
      texture.image = canvas;
      texture.needsUpdate = true;
    }
    return texture;
  }

  private createLabel(text: string, position: THREE.Vector3): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const fontSize = 1000;
    context.font = fontSize + 'px Arial';
    const backgroundMargin = 100;
    const textWidth = context.measureText(text).width;
    const canvasWidth = textWidth + backgroundMargin * 2;
    const canvasHeight = fontSize + backgroundMargin * 2;
    context.canvas.width = canvasWidth;
    context.canvas.height = canvasHeight;
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = fontSize + 'px Arial';
    context.fillText(text, canvasWidth / 2, canvasHeight / 2, textWidth);
    
    // Use pooled texture and material
    const texture = this.getObjectFromPool(this.texturePool, THREE.CanvasTexture, () => new THREE.CanvasTexture(canvas));
    if (texture instanceof THREE.CanvasTexture) {
      texture.image = canvas;
      texture.needsUpdate = true;
    }
    
    const spriteMaterial = this.getObjectFromPool(
      this.materialPool,
      THREE.SpriteMaterial,
      () => new THREE.SpriteMaterial({ map: texture })
    ) as THREE.SpriteMaterial;
    
    if (spriteMaterial.map !== texture) {
      spriteMaterial.map = texture;
      spriteMaterial.needsUpdate = true;
    }
    
    const sprite = this.getObjectFromPool(
      this.meshPool,
      THREE.Sprite,
      () => new THREE.Sprite(spriteMaterial)
    ) as THREE.Sprite;
    
    sprite.material = spriteMaterial;
    sprite.position.copy(position);
    sprite.scale.set(this.modelSize * 0.15, this.modelSize * 0.08, 1);
    return sprite;
  }

  private resetMeshHighlight(mesh: THREE.Mesh): void {
    const mat = mesh.material as THREE.Material | THREE.Material[];
    if (Array.isArray(mat)) { mat.forEach(m => { (m as any).emissive?.setHex(0x000000); }); }
    else { (mat as any).emissive?.setHex(0x000000); }
  }

  private highlightMesh(mesh: THREE.Mesh): void {
    const mat = mesh.material as THREE.Material | THREE.Material[];
    if (Array.isArray(mat)) { mat.forEach(m => { if ((m as any).emissive) (m as any).emissive.setHex(0x333333); }); }
    else { if ((mat as any).emissive) (mat as any).emissive.setHex(0x333333); }
  }

  private pulseDefect(rendered: RenderedDefect): void {
    if (!this.options.pulseOnSelect) return;
    const decal = rendered.decal;
    const startTime = Date.now();
    const duration = 600;
    const update = () => {
      if (this.disposed) return;
      const elapsed = Date.now() - startTime;
      const alpha = elapsed / duration;
      if (alpha >= 1) { decal.scale.set(1, 1, 1); return; }
      const factor = 1 + Math.sin(alpha * Math.PI) * 0.6;
      decal.scale.set(factor, factor, factor);
      requestAnimationFrame(update);
    };
    update();
  }

  private readonly onPointerDown = (event: PointerEvent): void => {
    if (!event.isPrimary || this.activePointerId !== null) return;
    this.activePointerId = event.pointerId;
    this.isDragging = false;
    this.pointerDownPos = { x: event.clientX, y: event.clientY };
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    if (!event.isPrimary || event.pointerId !== this.activePointerId || !this.pointerDownPos) return;
    
    // Throttle pointer move events
    if (this.pointerMoveTimeoutId !== null) {
      return;
    }
    
    this.pointerMoveTimeoutId = window.setTimeout(() => {
      const dx = event.clientX - this.pointerDownPos!.x;
      const dy = event.clientY - this.pointerDownPos!.y;
      if (dx * dx + dy * dy > POINTER_TAP_MOVEMENT_THRESHOLD_SQUARED) {
        this.isDragging = true;
      }
      this.pointerMoveTimeoutId = null;
    }, 16); // ~60fps throttle
  };

  private readonly onPointerUp = (event: PointerEvent): void => {
    if (!event.isPrimary || event.pointerId !== this.activePointerId) return;
    const wasDragging = this.isDragging;
    this.pointerDownPos = null;
    this.activePointerId = null;
    this.isDragging = false;
    if (!wasDragging) { 
      // Prevent synthetic click/mouse events that can cause ghost clicks
      // on modal options that appear under the finger
      if (event.pointerType === 'touch') {
        event.preventDefault();
      }
      this.handleTap(event.clientX, event.clientY); 
    }
  };

  private readonly onPointerCancel = (event: PointerEvent): void => {
    if (event.pointerId !== this.activePointerId) return;
    this.pointerDownPos = null;
    this.activePointerId = null;
    this.isDragging = false;
  };

  private readonly onResize = (): void => {
    // Debounce resize events
    if (this.resizeTimeoutId !== null) {
      clearTimeout(this.resizeTimeoutId);
    }
    
    this.resizeTimeoutId = window.setTimeout(() => {
      const { clientWidth, clientHeight } = this.container;
      this.camera.aspect = (clientWidth || 1) / (clientHeight || 1);
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(clientWidth || 1, clientHeight || 1);
      this.resizeTimeoutId = null;
    }, 100); // 100ms debounce delay
  };

  private bindEvents(): void {
    window.addEventListener('resize', this.onResize);
    this.canvas.addEventListener('pointerdown', this.onPointerDown);
    this.canvas.addEventListener('pointerup', this.onPointerUp);
    this.canvas.addEventListener('pointermove', this.onPointerMove);
    this.canvas.addEventListener('pointercancel', this.onPointerCancel);
  }

  private unbindEvents(): void {
    window.removeEventListener('resize', this.onResize);
    this.canvas.removeEventListener('pointerdown', this.onPointerDown);
    this.canvas.removeEventListener('pointerup', this.onPointerUp);
    this.canvas.removeEventListener('pointermove', this.onPointerMove);
    this.canvas.removeEventListener('pointercancel', this.onPointerCancel);
    
    // Clean up timeouts
    if (this.resizeTimeoutId !== null) {
      clearTimeout(this.resizeTimeoutId);
      this.resizeTimeoutId = null;
    }
    if (this.pointerMoveTimeoutId !== null) {
      clearTimeout(this.pointerMoveTimeoutId);
      this.pointerMoveTimeoutId = null;
    }
    if (this.renderThrottleId !== null) {
      clearTimeout(this.renderThrottleId);
      this.renderThrottleId = null;
    }
  }

  private handleTap(clientX: number, clientY: number): void {
    if (this.readOnly) return;
    const intersected = this.checkIntersection(clientX, clientY);
    if (!intersected) { this.pendingSelection = null; return; }

    if (intersected instanceof THREE.Sprite) {
      const rendered = this.renderedDefects.find(d => d.label === intersected);
      if (rendered) this.pulseDefect(rendered);
      const targetPosition = intersected.userData.cameraPosition as THREE.Vector3 | undefined;
      const targetQuaternion = intersected.userData.cameraQuaternion as THREE.Quaternion | undefined;
      if (targetPosition && targetQuaternion) {
        this.animateCameraToTarget(this.camera, targetPosition, targetQuaternion, 1000);
      }
      return;
    }

    const pending = this.pendingSelection;
    const mesh = intersected as THREE.Mesh;
    const point = pending?.point;
    const normal = pending?.normal;
    if (!pending || !point || !normal || pending.mesh !== mesh) return;

    const n = normal.clone().multiplyScalar(10).add(point);
    const positions = this.line.geometry.attributes.position as THREE.BufferAttribute;
    positions.setXYZ(0, point.x, point.y, point.z);
    positions.setXYZ(1, n.x, n.y, n.z);
    positions.needsUpdate = true;

    const options = this.options.getSelectionOptions?.() ?? [];
    this.options.onSelectionRequest?.({
      id: uid(),
      meshName: mesh.name,
      point: toVec3(point),
      normal: toVec3(normal),
      cameraPosition: toVec3(this.camera.position),
      cameraQuaternion: toQuat(this.camera.quaternion),
      options,
    });
  }

  private checkIntersection(x: number, y: number): THREE.Object3D | null {
    if (!this.componentGroup) return null;
    const meshes: THREE.Object3D[] = [];
    this.componentGroup.traverse(obj => {
      if ((obj as THREE.Mesh).isMesh && obj.visible) { meshes.push(obj); }
    });
    this.renderedDefects.forEach(d => meshes.push(d.label));
    if (meshes.length === 0) return null;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((x - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((y - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(meshes, true);
    if (intersects.length === 0) {
      if (this.highlightMode && this.highlightedMesh) {
        this.resetMeshHighlight(this.highlightedMesh);
        this.highlightedMesh = null;
      }
      this.pendingSelection = null;
      return null;
    }
    const first = intersects[0];
    const object = first.object;
    if ((object as THREE.Sprite).isSprite) {
      this.pendingSelection = null;
      return object;
    }
    const mesh = object as THREE.Mesh;
    if (this.highlightMode && mesh !== this.highlightedMesh) {
      if (this.highlightedMesh) this.resetMeshHighlight(this.highlightedMesh);
      this.highlightMesh(mesh);
      this.highlightedMesh = mesh;
    }
    const p = first.point;
    this.mouseHelper.position.copy(p);
    const n = first.face ? first.face.normal.clone().transformDirection(mesh.matrixWorld) : new THREE.Vector3();
    n.normalize();
    this.mouseHelper.lookAt(n.clone().add(p));
    this.pendingSelection = { point: p, normal: n, mesh, meshName: mesh.name };
    return mesh;
  }

  private animateCameraToTarget(
    camera: THREE.PerspectiveCamera,
    targetPosition: THREE.Vector3,
    targetQuaternion: THREE.Quaternion,
    duration: number
  ): void {
    const startTime = Date.now();
    const startPosition = camera.position.clone();
    const startQuaternion = camera.quaternion.clone();
    
    // Easing function for smoother animation
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    
    const update = () => {
      if (this.disposed) return;
      const elapsed = Date.now() - startTime;
      const alpha = Math.min(elapsed / duration, 1);
      const easedAlpha = easeInOutCubic(alpha);
      
      camera.position.lerpVectors(startPosition, targetPosition, easedAlpha);
      camera.quaternion.slerpQuaternions(startQuaternion, targetQuaternion, easedAlpha);
      camera.updateProjectionMatrix();
      
      if (alpha < 1) requestAnimationFrame(update);
    };
    update();
  }

  private animate(): void {
    if (this.disposed) return;
    
    // Throttle rendering to 60fps (16.67ms per frame)
    if (this.renderThrottleId !== null) {
      this.rafId = requestAnimationFrame(() => this.animate());
      return;
    }
    
    this.renderThrottleId = window.setTimeout(() => {
      this.renderThrottleId = null;
    }, 16.67); // ~60fps
    
    this.rafId = requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
    
    // Damping is disabled, so controls only change on user input and need no per-frame update.

  }

  private startResizeObserver(): void {
    if (typeof ResizeObserver === 'undefined') return;
    this.resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = this.container;
      if (clientWidth === 0 || clientHeight === 0) return;
      this.camera.aspect = clientWidth / clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(clientWidth, clientHeight);
    });
    this.resizeObserver.observe(this.container);
  }

  private stopResizeObserver(): void {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }

  private isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (typeof window !== 'undefined' && window.innerWidth < 768);
  }

  private getDevicePerformanceSettings(): { maxPixelRatio: number; powerPreference: string; qualityLevel: 'low' | 'medium' | 'high' } {
    const isMobile = this.isMobileDevice();
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    if (isMobile || isLowEndDevice) {
      return {
        maxPixelRatio: Math.min(window.devicePixelRatio, 1.5),
        powerPreference: "low-power",
        qualityLevel: "low"
      };
    }
    
    return {
      maxPixelRatio: window.devicePixelRatio,
      powerPreference: "high-performance",
      qualityLevel: "high"
    };
  }

  // Object pooling methods
  /**
   * Takes an object of exactly `type` from `pool`, or creates one.
   *
   * The pools are shared by object kinds (e.g. Mesh, Line and Sprite objects all
   * use `meshPool`). Reusing an object of a different class is a bug: a
   * SpriteMaterial taken from a pool that holds LineDashedMaterial lacks the
   * uniforms its shader needs and crashes the renderer. Match on the exact class.
   */
  private getObjectFromPool<T extends object>(
    pool: object[],
    type: new (...args: any[]) => T,
    createFn: () => T
  ): T {
    for (let i = pool.length - 1; i >= 0; i--) {
      if (pool[i].constructor === type) {
        return pool.splice(i, 1)[0] as T;
      }
    }
    return createFn();
  }

  private returnObjectToPool<T>(pool: T[], obj: T, resetFn?: (obj: T) => void): void {
    if (resetFn) resetFn(obj);
    pool.push(obj);
  }

  private createPooledGeometry(): THREE.BufferGeometry {
    return this.getObjectFromPool(this.geometryPool, THREE.BufferGeometry, () => new THREE.BufferGeometry());
  }

  private createPooledMaterial(properties: THREE.MaterialParameters = {}): THREE.Material {
    return this.getObjectFromPool(this.materialPool, THREE.MeshBasicMaterial, () => new THREE.MeshBasicMaterial(properties));
  }

  private createPooledTexture(): THREE.Texture {
    return this.getObjectFromPool(this.texturePool, THREE.Texture, () => new THREE.Texture());
  }

  private createPooledMesh(geometry: THREE.BufferGeometry, material: THREE.Material): THREE.Mesh {
    const mesh = this.getObjectFromPool(
      this.meshPool,
      THREE.Mesh,
      () => new THREE.Mesh(geometry, material)
    ) as THREE.Mesh;
    mesh.geometry = geometry;
    mesh.material = material;
    return mesh;
  }

  private disposePooledObjects(): void {
    // Dispose all pooled objects
    this.geometryPool.forEach(geometry => geometry.dispose());
    this.materialPool.forEach(material => material.dispose());
    this.texturePool.forEach(texture => texture.dispose());
    
    // Clear pools
    this.geometryPool.length = 0;
    this.materialPool.length = 0;
    this.texturePool.length = 0;
    this.meshPool.length = 0;
  }
}
