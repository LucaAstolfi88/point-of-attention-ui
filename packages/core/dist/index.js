import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';

const DEFAULT_PALETTE = {
    info: '#2196f3',
    warning: '#ff9800',
    error: '#f44336',
    default: '#f44336',
};
const POINTER_TAP_MOVEMENT_THRESHOLD_SQUARED = 64;
/** 0 → 'A', 1 → 'B', … 25 → 'Z', 26 → 'AA', 27 → 'AB', … */
function toAlphabetLabel(index) {
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
function resolveSeverityColor(severity, palette) {
    switch (severity) {
        case 'info': return palette.info ?? DEFAULT_PALETTE.info;
        case 'warning': return palette.warning ?? DEFAULT_PALETTE.warning;
        case 'error': return palette.error ?? DEFAULT_PALETTE.error;
        default: return palette.default ?? DEFAULT_PALETTE.default;
    }
}
/** Draw a marker shape centered in a `size`×`size` canvas context. */
function drawMarkerShape(ctx, shape, size) {
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
                if (i === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            break;
        case 'circle':
        default:
            ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
            break;
    }
    ctx.closePath();
}
function cloneDefects(defects) {
    return defects.map(defect => ({
        ...defect,
        position: defect.position ? { ...defect.position } : undefined,
        orientation: defect.orientation ? { ...defect.orientation } : undefined,
        cameraPosition: defect.cameraPosition ? { ...defect.cameraPosition } : undefined,
        cameraQuaternion: defect.cameraQuaternion ? { ...defect.cameraQuaternion } : undefined,
        metadata: defect.metadata ? { ...defect.metadata } : undefined,
    }));
}
function defectsEqual(left, right) {
    return JSON.stringify(left) === JSON.stringify(right);
}
/** Generate a short unique id. */
function uid() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function toVec3(v) {
    return { x: v.x, y: v.y, z: v.z };
}
function toQuat(q) {
    return { x: q.x, y: q.y, z: q.z, w: q.w };
}
/**
 * Framework-agnostic 3D point-of-attention/defect viewer engine based on Three.js.
 */
class WarningViewerEngine {
    constructor(container, options) {
        this.snapshotCanvas = null;
        this.snapshotRenderer = null;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.componentGroup = null;
        this.modelCenter = new THREE.Vector3();
        this.modelSize = 100;
        this.defects = [];
        this.renderedDefects = [];
        this.warningCount = 0;
        this.isLoading = false;
        this.isDragging = false;
        this.pointerDownPos = null;
        this.activePointerId = null;
        this.disposed = false;
        this.rafId = 0;
        this.resizeObserver = null;
        this.pendingSelection = null;
        this.readOnly = false;
        this.highlightMode = false;
        this.highlightedMesh = null;
        this.heatMapMode = false;
        this.heatMapDecals = [];
        this.undoStack = [];
        this.redoStack = [];
        this.onPointerDown = (event) => {
            if (!event.isPrimary || this.activePointerId !== null)
                return;
            this.activePointerId = event.pointerId;
            this.isDragging = false;
            this.pointerDownPos = { x: event.clientX, y: event.clientY };
        };
        this.onPointerMove = (event) => {
            if (!event.isPrimary || event.pointerId !== this.activePointerId || !this.pointerDownPos)
                return;
            const dx = event.clientX - this.pointerDownPos.x;
            const dy = event.clientY - this.pointerDownPos.y;
            if (dx * dx + dy * dy > POINTER_TAP_MOVEMENT_THRESHOLD_SQUARED) {
                this.isDragging = true;
            }
        };
        this.onPointerUp = (event) => {
            if (!event.isPrimary || event.pointerId !== this.activePointerId)
                return;
            const wasDragging = this.isDragging;
            this.pointerDownPos = null;
            this.activePointerId = null;
            this.isDragging = false;
            if (!wasDragging) {
                this.handleTap(event.clientX, event.clientY);
            }
        };
        this.onPointerCancel = (event) => {
            if (event.pointerId !== this.activePointerId)
                return;
            this.pointerDownPos = null;
            this.activePointerId = null;
            this.isDragging = false;
        };
        this.onResize = () => {
            const { clientWidth, clientHeight } = this.container;
            this.camera.aspect = (clientWidth || 1) / (clientHeight || 1);
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(clientWidth || 1, clientHeight || 1);
        };
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
        this.mouseHelper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 10), new THREE.MeshNormalMaterial());
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
    get isModelLoading() { return this.isLoading; }
    get isModelLoaded() { return !!this.componentGroup; }
    hasWarning() { return this.defects.length > 0; }
    setDefects(defects) {
        const nextDefects = defects ?? [];
        if (defectsEqual(this.defects, nextDefects))
            return;
        this.saveUndoState();
        this.defects = cloneDefects(nextDefects);
        this.warningCount = this.defects.length;
        this.rerenderDefects();
        this.generateSnapshotReport();
    }
    getDefects() {
        return cloneDefects(this.defects);
    }
    getDefectById(id) {
        return this.defects.find(d => d.id === id);
    }
    removeDefect(id) {
        const idx = this.defects.findIndex(d => d.id === id);
        if (idx === -1)
            return false;
        this.saveUndoState();
        this.defects.splice(idx, 1);
        this.rerenderDefects();
        this.options.onDefectsChanged?.(this.defects.slice());
        this.generateSnapshotReport();
        return true;
    }
    updateDefect(id, changes) {
        const defect = this.defects.find(d => d.id === id);
        if (!defect)
            return false;
        this.saveUndoState();
        Object.assign(defect, changes);
        this.rerenderDefects();
        this.options.onDefectsChanged?.(this.defects.slice());
        this.generateSnapshotReport();
        return true;
    }
    clearAllDefects() {
        if (this.defects.length === 0)
            return;
        this.saveUndoState();
        this.defects = [];
        this.warningCount = 0;
        this.rerenderDefects();
        this.options.onDefectsChanged?.(this.defects.slice());
        this.generateSnapshotReport();
    }
    addWarning(option) {
        if (this.readOnly)
            return null;
        if (!this.pendingSelection || !this.componentGroup)
            return null;
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
        const defect = {
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
    cancelSelection() {
        this.pendingSelection = null;
    }
    setPartsVisibility(parts) {
        this.options.partsVisibility = parts ?? [];
        this.applyPartsVisibility();
    }
    setPartVisible(meshName, visible) {
        if (!this.componentGroup)
            return;
        this.componentGroup.traverse(obj => {
            if (obj.isMesh && obj.name === meshName) {
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
    getParts() {
        if (!this.componentGroup)
            return [];
        const parts = [];
        this.componentGroup.traverse(obj => {
            if (obj.isMesh) {
                parts.push({ name: obj.name, visible: obj.visible });
            }
        });
        return parts;
    }
    setModelUrl(url) {
        this.options.modelUrl = url;
        this.loadModel(url);
    }
    setCameraView(direction) {
        const distance = this.modelSize * 2;
        const center = this.modelCenter;
        switch (direction) {
            case 'Front':
                this.camera.position.copy(center).add(new THREE.Vector3(0, 0, distance));
                break;
            case 'Back':
                this.camera.position.copy(center).add(new THREE.Vector3(0, 0, -distance));
                break;
            case 'Left':
                this.camera.position.copy(center).add(new THREE.Vector3(-distance, 0, 0));
                break;
            case 'Right':
                this.camera.position.copy(center).add(new THREE.Vector3(distance, 0, 0));
                break;
            case 'Top':
                this.camera.position.copy(center).add(new THREE.Vector3(0, distance, 0));
                break;
            case 'Bottom':
                this.camera.position.copy(center).add(new THREE.Vector3(0, -distance, 0));
                break;
            default: return;
        }
        this.controls.target.copy(center);
        this.camera.lookAt(center);
        this.camera.zoom = 1;
        this.camera.updateProjectionMatrix();
        this.controls.update();
    }
    flyToDefect(id) {
        const defect = this.defects.find(d => d.id === id);
        if (!defect?.cameraPosition || !defect?.cameraQuaternion)
            return;
        const targetPos = new THREE.Vector3(defect.cameraPosition.x, defect.cameraPosition.y, defect.cameraPosition.z);
        const targetQuat = new THREE.Quaternion(defect.cameraQuaternion.x, defect.cameraQuaternion.y, defect.cameraQuaternion.z, defect.cameraQuaternion.w);
        this.animateCameraToTarget(this.camera, targetPos, targetQuat, 1000);
    }
    zoomToFit() {
        if (!this.componentGroup)
            return;
        const distance = this.modelSize * 2;
        this.controls.target.copy(this.modelCenter);
        this.camera.position.copy(this.modelCenter).add(new THREE.Vector3(distance * 0.5, distance * 0.3, distance));
        this.camera.zoom = 1;
        this.camera.lookAt(this.modelCenter);
        this.camera.updateProjectionMatrix();
        this.controls.update();
    }
    undo() {
        if (this.undoStack.length === 0)
            return false;
        this.redoStack.push(cloneDefects(this.defects));
        this.defects = cloneDefects(this.undoStack.pop());
        this.warningCount = this.defects.length;
        this.rerenderDefects();
        this.options.onDefectsChanged?.(cloneDefects(this.defects));
        this.generateSnapshotReport();
        return true;
    }
    redo() {
        if (this.redoStack.length === 0)
            return false;
        this.undoStack.push(cloneDefects(this.defects));
        this.defects = cloneDefects(this.redoStack.pop());
        this.warningCount = this.defects.length;
        this.rerenderDefects();
        this.options.onDefectsChanged?.(cloneDefects(this.defects));
        this.generateSnapshotReport();
        return true;
    }
    setReadOnly(readOnly) {
        this.readOnly = readOnly;
    }
    setHighlightMode(enabled) {
        this.highlightMode = enabled;
        if (!enabled && this.highlightedMesh) {
            this.resetMeshHighlight(this.highlightedMesh);
            this.highlightedMesh = null;
        }
    }
    setHeatMap(enabled) {
        this.heatMapMode = enabled;
        this.applyHeatMap();
    }
    addDistributedWarnings(count) {
        if (!this.componentGroup || count <= 0)
            return [];
        const meshes = [];
        this.componentGroup.traverse(obj => {
            if (obj.isMesh && obj.visible)
                meshes.push(obj);
        });
        const options = this.options.getSelectionOptions?.() ?? [];
        if (meshes.length === 0 || options.length === 0)
            return [];
        this.saveUndoState();
        const generated = [];
        for (let i = 0; i < count; i++) {
            const mesh = meshes[i % meshes.length];
            const positionAttribute = mesh.geometry.getAttribute('position');
            const normalAttribute = mesh.geometry.getAttribute('normal');
            if (!positionAttribute || positionAttribute.count === 0)
                continue;
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
    generateCameraImages() {
        if (!this.componentGroup)
            return [];
        const canvasWidth = 1024;
        const canvasHeight = 768;
        const positions = [
            [84.33, 76.3, 97.79],
            [-57.5, -33.95, -37.94],
        ];
        const { canvas, renderer } = this.getSnapshotRenderer(canvasWidth, canvasHeight);
        const images = [];
        try {
            positions.forEach(pos => {
                this.renderCamera.copy(this.camera);
                this.renderCamera.position.set(pos[0], pos[1], pos[2]);
                this.renderCamera.lookAt(new THREE.Vector3(0, 0, 0));
                this.renderCamera.zoom = 0.6;
                this.renderCamera.updateProjectionMatrix();
                renderer.setClearColor(0xe1e2e2, 0.6);
                renderer.render(this.scene, this.renderCamera);
                images.push(canvas.toDataURL());
            });
        }
        finally {
            this.renderCamera.copy(this.camera);
        }
        return images;
    }
    captureSnapshot(view) {
        return this.captureSnapshotInternal(view);
    }
    generateSnapshotReport() {
        if (!this.options.onSnapshotReport)
            return;
        if (!this.componentGroup)
            return;
        const views = ['top', 'front', 'isometric', 'left', 'right', 'back'];
        const capturedAt = new Date().toISOString();
        const images = views.map(view => ({
            view,
            dataUri: this.captureSnapshotInternal(view),
            capturedAt,
        }));
        const report = {
            id: `report-${uid()}`,
            defects: cloneDefects(this.defects),
            images,
            generatedAt: capturedAt,
        };
        this.options.onSnapshotReport(report);
    }
    dispose() {
        this.clearHeatMapDecals();
        this.disposed = true;
        cancelAnimationFrame(this.rafId);
        this.stopResizeObserver();
        this.unbindEvents();
        this.controls.dispose();
        this.scene.traverse(obj => {
            const mesh = obj;
            if (mesh.isMesh || obj.isSprite) {
                mesh.geometry?.dispose?.();
                const material = mesh.material;
                if (Array.isArray(material)) {
                    material.forEach(m => m.dispose());
                }
                else {
                    material?.dispose?.();
                }
            }
        });
        this.snapshotRenderer?.dispose();
        this.snapshotRenderer?.forceContextLoss();
        this.snapshotRenderer = null;
        this.snapshotCanvas = null;
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.canvas.remove();
    }
    captureSnapshotInternal(view) {
        if (!this.componentGroup)
            return '';
        const canvasWidth = 1024;
        const canvasHeight = 768;
        const { canvas, renderer } = this.getSnapshotRenderer(canvasWidth, canvasHeight);
        const savedPos = this.camera.position.clone();
        const savedQuat = this.camera.quaternion.clone();
        const savedZoom = this.camera.zoom;
        try {
            const distance = this.modelSize * 2;
            const center = this.modelCenter;
            switch (view) {
                case 'top':
                    this.camera.position.set(0, distance, 0);
                    break;
                case 'front':
                    this.camera.position.set(0, 0, distance);
                    break;
                case 'back':
                    this.camera.position.set(0, 0, -distance);
                    break;
                case 'left':
                    this.camera.position.set(-distance, 0, 0);
                    break;
                case 'right':
                    this.camera.position.set(distance, 0, 0);
                    break;
                case 'isometric':
                    this.camera.position.set(distance, distance, distance);
                    break;
            }
            this.camera.position.add(center);
            this.camera.lookAt(center);
            this.camera.zoom = 1;
            this.camera.updateProjectionMatrix();
            renderer.setClearColor(this.options.backgroundColor, 0.6);
            renderer.render(this.scene, this.camera);
            return canvas.toDataURL('image/png');
        }
        finally {
            this.camera.position.copy(savedPos);
            this.camera.quaternion.copy(savedQuat);
            this.camera.zoom = savedZoom;
            this.camera.updateProjectionMatrix();
        }
    }
    getSnapshotRenderer(width, height) {
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
    saveUndoState() {
        this.undoStack.push(cloneDefects(this.defects));
        this.redoStack = [];
        if (this.undoStack.length > 50)
            this.undoStack.shift();
    }
    initThree() {
        const { clientWidth, clientHeight } = this.container;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(clientWidth || 1, clientHeight || 1);
        this.renderer.setClearColor(this.options.backgroundColor, 0.6);
        this.camera.position.z = 150;
        this.renderCamera.position.setZ(150);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minDistance = 50;
        this.controls.maxDistance = 150;
        this.scene.add(new THREE.AmbientLight(0x404040));
        const dirLight1 = new THREE.DirectionalLight(0xffddcc, 3);
        dirLight1.position.set(1, 0.75, 0.5);
        this.scene.add(dirLight1);
        const dirLight2 = new THREE.DirectionalLight(0xccccff, 3);
        dirLight2.position.set(-1, 0.75, -0.5);
        this.scene.add(dirLight2);
    }
    loadModel(url) {
        this.isLoading = true;
        const loader = new GLTFLoader();
        loader.load(url, gltf => {
            this.clearHeatMapDecals();
            if (this.componentGroup) {
                this.componentGroup.traverse(obj => {
                    if (obj.isMesh) {
                        obj.geometry?.dispose?.();
                        const mat = obj.material;
                        if (Array.isArray(mat))
                            mat.forEach(m => m.dispose());
                        else
                            mat?.dispose?.();
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
            this.applyPartsVisibility();
            this.rerenderDefects();
            this.options.onModelLoaded?.(this.getParts());
            this.applyHeatMap();
            this.generateSnapshotReport();
        }, undefined, error => {
            this.isLoading = false;
            this.options.onModelLoadError?.(error);
        });
    }
    applyPartsVisibility() {
        if (!this.componentGroup)
            return;
        const map = new Map(this.options.partsVisibility.map(p => [p.meshName, p.visible]));
        this.componentGroup.traverse(obj => {
            if (obj.isMesh && map.has(obj.name)) {
                obj.visible = map.get(obj.name);
            }
        });
    }
    findMeshByName(name) {
        if (!name || !this.componentGroup)
            return null;
        let found = null;
        this.componentGroup.traverse(obj => {
            if (!found && obj.isMesh && obj.name === name) {
                found = obj;
            }
        });
        return found;
    }
    rerenderDefects() {
        this.renderedDefects.forEach(d => {
            this.scene.remove(d.decal);
            this.scene.remove(d.line);
            this.scene.remove(d.label);
        });
        this.renderedDefects = [];
        this.defects.forEach(defect => this.renderDefect(defect));
        this.applyHeatMap();
    }
    clearHeatMapDecals() {
        this.heatMapDecals.forEach(decal => {
            this.scene.remove(decal);
            decal.geometry.dispose();
            const material = decal.material;
            material.map?.dispose();
            material.dispose();
        });
        this.heatMapDecals = [];
    }
    applyHeatMap() {
        this.clearHeatMapDecals();
        if (!this.heatMapMode)
            return;
        if (!this.componentGroup)
            return;
        this.defects.forEach(defect => {
            const mesh = this.findMeshByName(defect.meshName);
            if (!mesh || !defect.position)
                return;
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
    createHeatMapTexture() {
        const size = 128;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
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
    renderDefect(defect) {
        if (!this.componentGroup)
            return;
        const mesh = this.findMeshByName(defect.meshName);
        if (!mesh || !defect.position)
            return;
        const position = new THREE.Vector3(defect.position.x, defect.position.y, defect.position.z);
        const orientation = defect.orientation
            ? new THREE.Euler(defect.orientation.x, defect.orientation.y, defect.orientation.z)
            : new THREE.Euler();
        const size = new THREE.Vector3().setScalar(this.modelSize * 0.05);
        const color = resolveSeverityColor(defect.severity, this.options.palette);
        const decalTexture = this.createDecalTexture(defect.label ?? '', color, this.options.markerShape);
        const material = new THREE.MeshPhongMaterial({
            map: decalTexture, transparent: true, depthTest: true, depthWrite: true,
            polygonOffset: true, polygonOffsetFactor: -5,
        });
        const decal = new THREE.Mesh(new DecalGeometry(mesh, position, orientation, size), material);
        decal.userData = { meshParent: mesh };
        this.scene.add(decal);
        const surfacePoint = this.computeSurfacePoint(position);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([position, surfacePoint]);
        const lineMaterial = new THREE.LineDashedMaterial({ color: 0x000000, dashSize: 3, gapSize: 1 });
        const line = new THREE.Line(lineGeometry, lineMaterial);
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
    computeSurfacePoint(position) {
        const direction = position.clone().sub(this.modelCenter).normalize();
        return direction.multiplyScalar(this.modelSize * this.options.rayLength).add(this.modelCenter);
    }
    createDecalTexture(text, color, shape) {
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        drawMarkerShape(context, shape, size);
        context.fillStyle = color;
        context.fill();
        const fontSize = text.length > 1 ? (size * 55) / 100 : (size * 80) / 100;
        context.font = fontSize + 'px Arial';
        context.fillStyle = 'white';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, size / 2, size / 2);
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    }
    createLabel(text, position) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
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
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(this.modelSize * 0.15, this.modelSize * 0.08, 1);
        return sprite;
    }
    resetMeshHighlight(mesh) {
        const mat = mesh.material;
        if (Array.isArray(mat)) {
            mat.forEach(m => { m.emissive?.setHex(0x000000); });
        }
        else {
            mat.emissive?.setHex(0x000000);
        }
    }
    highlightMesh(mesh) {
        const mat = mesh.material;
        if (Array.isArray(mat)) {
            mat.forEach(m => { if (m.emissive)
                m.emissive.setHex(0x333333); });
        }
        else {
            if (mat.emissive)
                mat.emissive.setHex(0x333333);
        }
    }
    pulseDefect(rendered) {
        if (!this.options.pulseOnSelect)
            return;
        const decal = rendered.decal;
        const startTime = Date.now();
        const duration = 600;
        const update = () => {
            if (this.disposed)
                return;
            const elapsed = Date.now() - startTime;
            const alpha = elapsed / duration;
            if (alpha >= 1) {
                decal.scale.set(1, 1, 1);
                return;
            }
            const factor = 1 + Math.sin(alpha * Math.PI) * 0.6;
            decal.scale.set(factor, factor, factor);
            requestAnimationFrame(update);
        };
        update();
    }
    bindEvents() {
        window.addEventListener('resize', this.onResize);
        this.canvas.addEventListener('pointerdown', this.onPointerDown);
        this.canvas.addEventListener('pointerup', this.onPointerUp);
        this.canvas.addEventListener('pointermove', this.onPointerMove);
        this.canvas.addEventListener('pointercancel', this.onPointerCancel);
    }
    unbindEvents() {
        window.removeEventListener('resize', this.onResize);
        this.canvas.removeEventListener('pointerdown', this.onPointerDown);
        this.canvas.removeEventListener('pointerup', this.onPointerUp);
        this.canvas.removeEventListener('pointermove', this.onPointerMove);
        this.canvas.removeEventListener('pointercancel', this.onPointerCancel);
    }
    handleTap(clientX, clientY) {
        if (this.readOnly)
            return;
        const intersected = this.checkIntersection(clientX, clientY);
        if (!intersected) {
            this.pendingSelection = null;
            return;
        }
        if (intersected instanceof THREE.Sprite) {
            const rendered = this.renderedDefects.find(d => d.label === intersected);
            if (rendered)
                this.pulseDefect(rendered);
            const targetPosition = intersected.userData.cameraPosition;
            const targetQuaternion = intersected.userData.cameraQuaternion;
            if (targetPosition && targetQuaternion) {
                this.animateCameraToTarget(this.camera, targetPosition, targetQuaternion, 1000);
            }
            return;
        }
        const pending = this.pendingSelection;
        const mesh = intersected;
        const point = pending?.point;
        const normal = pending?.normal;
        if (!pending || !point || !normal || pending.mesh !== mesh)
            return;
        const n = normal.clone().multiplyScalar(10).add(point);
        const positions = this.line.geometry.attributes.position;
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
    checkIntersection(x, y) {
        if (!this.componentGroup)
            return null;
        const meshes = [];
        this.componentGroup.traverse(obj => {
            if (obj.isMesh && obj.visible) {
                meshes.push(obj);
            }
        });
        this.renderedDefects.forEach(d => meshes.push(d.label));
        if (meshes.length === 0)
            return null;
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
        if (object.isSprite) {
            this.pendingSelection = null;
            return object;
        }
        const mesh = object;
        if (this.highlightMode && mesh !== this.highlightedMesh) {
            if (this.highlightedMesh)
                this.resetMeshHighlight(this.highlightedMesh);
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
    animateCameraToTarget(camera, targetPosition, targetQuaternion, duration) {
        const startTime = Date.now();
        const startPosition = camera.position.clone();
        const startQuaternion = camera.quaternion.clone();
        const lerp = (start, end, alpha) => start + (end - start) * alpha;
        const update = () => {
            if (this.disposed)
                return;
            const elapsed = Date.now() - startTime;
            const alpha = Math.min(elapsed / duration, 1);
            camera.position.x = lerp(startPosition.x, targetPosition.x, alpha);
            camera.position.y = lerp(startPosition.y, targetPosition.y, alpha);
            camera.position.z = lerp(startPosition.z, targetPosition.z, alpha);
            camera.quaternion.copy(startQuaternion).slerp(targetQuaternion, alpha);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            camera.updateProjectionMatrix();
            if (alpha < 1)
                requestAnimationFrame(update);
        };
        update();
    }
    animate() {
        if (this.disposed)
            return;
        this.rafId = requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
    startResizeObserver() {
        if (typeof ResizeObserver === 'undefined')
            return;
        this.resizeObserver = new ResizeObserver(() => {
            const { clientWidth, clientHeight } = this.container;
            if (clientWidth === 0 || clientHeight === 0)
                return;
            this.camera.aspect = clientWidth / clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(clientWidth, clientHeight);
        });
        this.resizeObserver.observe(this.container);
    }
    stopResizeObserver() {
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
    }
}

/**
 * i18n — Localisation strings for the PointOfAttention UI.
 *
 * All built-in modal and UI strings are configurable per locale.
 * The host app picks a locale (default: 'it') or passes a custom
 * `WarningViewerLocale` object.
 */
/** Built-in locales. */
const builtIn = {
    it: {
        modal: {
            title: 'Seleziona difetto',
            partLabel: 'Parte:',
            cancel: 'Annulla',
        },
    },
    en: {
        modal: {
            title: 'Select defect',
            partLabel: 'Part:',
            cancel: 'Cancel',
        },
    },
};
/**
 * Resolves a locale code or custom locale object into a concrete
 * `WarningViewerLocale`.
 *
 * - If a string code is provided, looks up the built-in locale dictionary.
 * - If an object is provided, returns it directly (allows full customization).
 * - Falls back to the built-in English locale when the code is unknown.
 * - Defaults to Italian (`'it'`) for backward compatibility when omitted.
 */
function resolveLocale(locale) {
    if (typeof locale === 'object' && locale !== null)
        return locale;
    const code = locale ?? 'it';
    return builtIn[code] ?? builtIn['it'];
}

export { WarningViewerEngine, resolveLocale };
//# sourceMappingURL=index.js.map
