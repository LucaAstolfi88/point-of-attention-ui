/**
 * Shared contracts for the PointOfAttention UI component libraries.
 * These types are framework-agnostic and are reused by the
 * React, Vue, Angular and Blazor wrappers.
 */
export interface Vec3 {
    x: number;
    y: number;
    z: number;
}
export interface Quat {
    x: number;
    y: number;
    z: number;
    w: number;
}
export type Severity = 'info' | 'warning' | 'error';
/**
 * Shape used to draw a defect marker (decal) on the model surface.
 */
export type MarkerShape = 'circle' | 'square' | 'diamond' | 'triangle' | 'hexagon';
/**
 * Overridable color palette for defect severity levels.
 * Colors are CSS color strings (hex, rgb(), hsl(), named, ...).
 */
export interface DefectPalette {
    info?: string;
    warning?: string;
    error?: string;
    /** Fallback used when the severity is missing or unknown. */
    default?: string;
}
/**
 * An option the user can pick from the modal after clicking a mesh point.
 */
export interface SelectionOption {
    id: string;
    label: string;
    severity?: Severity;
}
/**
 * Emitted by the engine when the user clicks a mesh point (not dragging).
 * The host must open a modal showing `options` and call either
 * `engine.addWarning(option)` to confirm or `engine.cancelSelection()` to
 * abort.
 */
export interface SelectionRequest {
    id: string;
    meshName: string | null;
    point: Vec3;
    normal: Vec3;
    cameraPosition: Vec3;
    cameraQuaternion: Quat;
    options: SelectionOption[];
}
export type SnapshotView = 'top' | 'front' | 'isometric' | 'left' | 'right' | 'back';
/**
 * A single snapshot image (base64 PNG) taken from a specific camera view.
 */
export interface SnapshotImage {
    view: SnapshotView;
    /** Base64-encoded PNG data URI. */
    dataUri: string;
    /** ISO timestamp of when the snapshot was taken. */
    capturedAt: string;
}
/**
 * Full snapshot report generated after every defect add / change.
 * Contains the complete defect list at that moment plus images from:
 * top, front, isometric (3/4), left, right, back.
 */
export interface SnapshotReport {
    /** Unique report id. */
    id: string;
    /** The defect list at the moment the report was generated. */
    defects: WarningDefect[];
    /** Snapshot images (top, front, isometric, left, right, back). */
    images: SnapshotImage[];
    /** ISO timestamp of report generation. */
    generatedAt: string;
}
/**
 * A defect (point of attention) anchored to the 3D model.
 *
 * `position` and `orientation` are the placement of the decal on the mesh.
 * When a defect is created at runtime by the user, the engine fills in
 * `position`, `orientation`, `cameraPosition` and `cameraQuaternion` so the
 * whole list can be round-tripped (persisted and reloaded) without loss.
 */
export interface WarningDefect {
    /** Stable identifier of the defect. */
    id: string;
    /** Label shown in the viewer (defaults to a progressive alphabet letter). */
    label?: string;
    /** Name of the mesh of the model the defect is anchored to. */
    meshName?: string;
    /** 3D position of the defect on the model surface. */
    position?: Vec3;
    /** Euler angles (radians) orienting the decal on the surface. */
    orientation?: Vec3;
    /** Camera pose saved when the defect was created (used for "fly to"). */
    cameraPosition?: Vec3;
    cameraQuaternion?: Quat;
    severity?: Severity;
    /** Free-form fields used by the detail table. */
    metadata?: Record<string, unknown>;
}
/**
 * Controls the visibility of a single part (mesh) of the 3D model.
 */
export interface ModelPartVisibility {
    /** Name of the mesh inside the GLB. */
    meshName: string;
    visible: boolean;
}
export interface WarningViewerOptions {
    /** INPUT 3: URL (or data URI) of the 3D model (.glb/.gltf). */
    modelUrl: string;
    /** INPUT 1: list of defects already present, rendered on load. */
    defects?: WarningDefect[];
    /** INPUT 2: visibility of the model parts. */
    partsVisibility?: ModelPartVisibility[];
    /** Canvas clear color (number, e.g. 0xe1e2e2). */
    backgroundColor?: number;
    /** Shape of the defect marker/decal (default 'circle'). */
    markerShape?: MarkerShape;
    /** Optional severity→color palette override. */
    palette?: DefectPalette;
    /** Leader-line (ray) length as a factor of the model size (default 0.7). */
    rayLength?: number;
    /** Play a pulse animation on the defect marker when selected (default true). */
    pulseOnSelect?: boolean;
    /**
     * Emitted when a mesh is clicked/tapped (not dragging).
     * The host should open a modal with the returned options and call
     * `engine.addWarning(option)` or `engine.cancelSelection()`.
     */
    onSelectionRequest?: (request: SelectionRequest) => void;
    /**
     * Called by the engine to retrieve the list of options to show in the
     * selection modal. The host should return the available defect types.
     */
    getSelectionOptions?: () => SelectionOption[];
    /** Emitted whenever the defect list changes (add/remove). */
    onDefectsChanged?: (defects: WarningDefect[]) => void;
    /** Emitted after the model and its parts are loaded. */
    onModelLoaded?: (parts: ViewerPart[]) => void;
    /** Emitted when the model fails to load. */
    onModelLoadError?: (error: unknown) => void;
    /**
     * Emitted automatically after every defect add / change with the full
     * snapshot report (top, front, isometric, left, right, back).
     */
    onSnapshotReport?: (report: SnapshotReport) => void;
}
export interface ViewerPart {
    name: string;
    visible: boolean;
}
export interface CameraViewOrientation {
    direction: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom';
}
