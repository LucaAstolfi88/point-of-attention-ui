import { WarningViewerEngine } from '@point-of-attention-ui/core';
import type { SelectionOption, WarningViewerOptions } from '@point-of-attention-ui/core';
export declare function useWarningViewer(options: WarningViewerOptions): {
    containerRef: import("vue").Ref<HTMLDivElement | null, HTMLDivElement | null>;
    engine: () => WarningViewerEngine | null;
    addWarning: (option: SelectionOption) => import("@point-of-attention-ui/core").WarningDefect | null | undefined;
    setCameraView: (direction: string) => void | undefined;
    setPartVisible: (meshName: string, visible: boolean) => void | undefined;
    generateCameraImages: () => string[];
};
