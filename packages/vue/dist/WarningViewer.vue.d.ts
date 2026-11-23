import { WarningViewerEngine } from '@point-of-attention-ui/core';
import type { WarningViewerLocale, ModelPartVisibility, SelectionOption, SnapshotReport, ViewerPart, WarningDefect } from '@point-of-attention-ui/core';
/** Import shared modal stylesheet (customisable via CSS custom properties) */
import '@point-of-attention-ui/core/point-of-attention-ui.css';
type __VLS_Props = {
    /** INPUT 3: URL (or data URI) of the 3D model. */
    modelUrl: string;
    /** INPUT 1: list of defects already present. */
    defects?: WarningDefect[];
    /** INPUT 2: visibility of the model parts. */
    partsVisibility?: ModelPartVisibility[];
    /** Available defect-type options shown in the selection modal. */
    selectionOptions?: SelectionOption[];
    backgroundColor?: number;
    /**
     * UI locale.
     * - `'it'` (default) — Italian
     * - `'en'` — English
     * - A custom `WarningViewerLocale` object for any other language.
     */
    locale?: string | WarningViewerLocale;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    engine: () => WarningViewerEngine | null;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "defects-change": (defects: WarningDefect[]) => any;
    "model-loaded": (parts: ViewerPart[]) => any;
    "model-load-error": (error: unknown) => any;
    "snapshot-report": (report: SnapshotReport) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onDefects-change"?: ((defects: WarningDefect[]) => any) | undefined;
    "onModel-loaded"?: ((parts: ViewerPart[]) => any) | undefined;
    "onModel-load-error"?: ((error: unknown) => any) | undefined;
    "onSnapshot-report"?: ((report: SnapshotReport) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
