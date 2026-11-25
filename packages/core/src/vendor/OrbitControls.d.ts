import { Camera, EventDispatcher, MOUSE, TOUCH, Vector3 } from 'three';

/** Type surface of the vendored three@0.160 OrbitControls (depends only on 'three'). */
export class OrbitControls extends EventDispatcher<{ change: object; start: object; end: object }> {
  constructor(object: Camera, domElement?: HTMLElement | null);

  object: Camera;
  domElement: HTMLElement | null;
  enabled: boolean;
  target: Vector3;
  cursor: Vector3;

  minDistance: number;
  maxDistance: number;
  minZoom: number;
  maxZoom: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  minAzimuthAngle: number;
  maxAzimuthAngle: number;

  enableDamping: boolean;
  dampingFactor: number;
  enableZoom: boolean;
  zoomSpeed: number;
  enableRotate: boolean;
  rotateSpeed: number;
  enablePan: boolean;
  panSpeed: number;
  screenSpacePanning: boolean;
  keyPanSpeed: number;
  zoomToCursor: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
  mouseButtons: Partial<{ LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }>;
  touches: Partial<{ ONE: TOUCH; TWO: TOUCH }>;

  update(deltaTime?: number | null): boolean;
  dispose(): void;
  listenToKeyEvents(domElement: HTMLElement): void;
  stopListenToKeyEvents(): void;
  saveState(): void;
  reset(): void;
  getPolarAngle(): number;
  getAzimuthalAngle(): number;
  getDistance(): number;
}
