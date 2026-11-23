import type { ModelPartVisibility, SelectionOption, SelectionRequest, SnapshotReport, WarningDefect, WarningViewerLocale } from '@point-of-attention-ui/core';
import { WarningViewerEngine } from '@point-of-attention-ui/core';
/** Import shared modal stylesheet (customisable via CSS custom properties) */
import '@point-of-attention-ui/core/point-of-attention-ui.css';
export interface WarningViewerHandle {
    engine: () => WarningViewerEngine | null;
}
export interface WarningViewerProps {
    /** INPUT 3: URL (or data URI) of the 3D model (.glb/.gltf). */
    modelUrl: string;
    /** INPUT 1: list of defects already present. */
    defects?: WarningDefect[];
    /** INPUT 2: visibility of the model parts. */
    partsVisibility?: ModelPartVisibility[];
    /** Available defect-type options shown in the selection modal. */
    selectionOptions?: SelectionOption[];
    backgroundColor?: number;
    style?: React.CSSProperties;
    className?: string;
    /**
     * UI locale.
     * - `'it'` (default) — Italian
     * - `'en'` — English
     * - A custom `WarningViewerLocale` object for any other language.
     */
    locale?: string | WarningViewerLocale;
    /** Called whenever the defect list changes (add/remove). */
    onDefectsChange?: (defects: WarningDefect[]) => void;
    onModelLoaded?: (parts: {
        name: string;
        visible: boolean;
    }[]) => void;
    onModelLoadError?: (error: unknown) => void;
    /**
     * Called automatically after every defect add / change with the full
     * snapshot report (top, front, isometric, left, right, back).
     */
    onSnapshotReport?: (report: SnapshotReport) => void;
    /**
     * Custom renderer for the selection modal.
     * If omitted a minimal built-in modal is shown.
     */
    renderSelectionModal?: (props: {
        request: SelectionRequest;
        locale: WarningViewerLocale;
        onConfirm: (option: SelectionOption) => void;
        onCancel: () => void;
    }) => React.ReactNode;
}
/**
 * React wrapper for the PointOfAttention 3D point-of-attention viewer.
 *
 * @example
 * ```tsx
 * <WarningViewer
 *   modelUrl="assets/models/example.glb"
 *   defects={defects}
 *   partsVisibility={partsVisibility}
 *   selectionOptions={[
 *     { id: 'crack', label: 'Crack', severity: 'error' },
 *     { id: 'scratch', label: 'Scratch', severity: 'warning' },
 *   ]}
 *   locale="en"
 *   onDefectsChange={setDefects}
 *   onSnapshotReport={(r) => console.log('Report:', r)}
 * />
 * ```
 */
export declare const WarningViewer: import("react").ForwardRefExoticComponent<WarningViewerProps & import("react").RefAttributes<WarningViewerHandle>>;
