import type { SelectionOption, WarningViewerOptions } from '@point-of-attention-ui/core';
import { WarningViewerEngine } from '@point-of-attention-ui/core';
/**
 * Imperative hook: gives full control over the engine.
 */
export declare function useWarningViewer(options: WarningViewerOptions): {
    containerRef: import("react").RefObject<HTMLDivElement>;
    engineRef: import("react").MutableRefObject<WarningViewerEngine | null>;
    addWarning: (option: SelectionOption) => import("@point-of-attention-ui/core").WarningDefect | null | undefined;
    setCameraView: (direction: string) => void | undefined;
    setPartVisible: (meshName: string, visible: boolean) => void | undefined;
    generateCameraImages: () => string[];
};
