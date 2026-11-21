import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useMemo,
} from 'react';
import type {
  ModelPartVisibility,
  SelectionOption,
  SelectionRequest,
  SnapshotReport,
  WarningDefect,
  WarningViewerLocale,
} from '@point-of-attention-ui/core';
import { WarningViewerEngine, resolveLocale } from '@point-of-attention-ui/core';

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
  onModelLoaded?: (parts: { name: string; visible: boolean }[]) => void;
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
export const WarningViewer = forwardRef<WarningViewerHandle, WarningViewerProps>(
  function WarningViewer(props, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<WarningViewerEngine | null>(null);
    const handlersRef = useRef(props);
    const previousModelUrl = useRef(props.modelUrl);
    handlersRef.current = props;

    // Resolve locale once
    const loc = useMemo(() => resolveLocale(props.locale), [props.locale]);

    // Selection modal state
    const [selection, setSelection] = useState<SelectionRequest | null>(null);

    const handleConfirm = useCallback(
      (option: SelectionOption) => {
        engineRef.current?.addWarning(option);
        setSelection(null);
      },
      []
    );

    const handleCancel = useCallback(() => {
      engineRef.current?.cancelSelection();
      setSelection(null);
    }, []);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const engine = new WarningViewerEngine(container, {
        modelUrl: props.modelUrl,
        defects: props.defects,
        partsVisibility: props.partsVisibility,
        backgroundColor: props.backgroundColor,

        getSelectionOptions: () => handlersRef.current.selectionOptions ?? [],
        onSelectionRequest: (req) => setSelection(req),

        onDefectsChanged: (d) => handlersRef.current.onDefectsChange?.(d),
        onModelLoaded: (p) => handlersRef.current.onModelLoaded?.(p),
        onModelLoadError: (e) => handlersRef.current.onModelLoadError?.(e),
        onSnapshotReport: (r) => handlersRef.current.onSnapshotReport?.(r),
      });
      engineRef.current = engine;

      return () => {
        engine.dispose();
        engineRef.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => { engineRef.current?.setDefects(props.defects ?? []); }, [props.defects]);
    useEffect(() => { engineRef.current?.setPartsVisibility(props.partsVisibility ?? []); }, [props.partsVisibility]);
    useEffect(() => {
      if (props.modelUrl && props.modelUrl !== previousModelUrl.current) {
        engineRef.current?.setModelUrl(props.modelUrl);
      }
      previousModelUrl.current = props.modelUrl;
    }, [props.modelUrl]);

    useImperativeHandle(ref, () => ({ engine: () => engineRef.current }), []);

    return (
      <>
        <div
          ref={containerRef}
          className={`warning-viewer ${props.className ?? ''}`}
          style={{ width: '100%', height: '100%', position: 'relative', ...props.style }}
        />

        {selection &&
          (props.renderSelectionModal ? (
            props.renderSelectionModal({
              request: selection,
              locale: loc,
              onConfirm: handleConfirm,
              onCancel: handleCancel,
            })
          ) : (
            <div
              className="warning-modal-backdrop"
              role="dialog"
              aria-modal="true"
              onClick={handleCancel}
            >
              <div className="warning-modal" onClick={(e) => e.stopPropagation()}>
                <h3 className="warning-modal-title">{loc.modal.title}</h3>
                {selection.meshName && (
                  <small className="warning-modal-subtitle">{loc.modal.partLabel} {selection.meshName}</small>
                )}
                <ul className="warning-modal-options">
                  {selection.options.map((opt) => (
                    <li key={opt.id} className="warning-modal-option">
                      <button
                        className="warning-modal-option-btn"
                        onClick={() => handleConfirm(opt)}
                      >
                        {opt.severity && (
                          <span className={`warning-modal-severity-dot warning-modal-severity-dot--${opt.severity}`} />
                        )}
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="warning-modal-cancel" onClick={handleCancel}>
                  {loc.modal.cancel}
                </button>
              </div>
            </div>
          ))}
      </>
    );
  }
);
