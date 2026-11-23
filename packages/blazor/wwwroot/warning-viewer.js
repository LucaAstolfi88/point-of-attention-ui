const engines = new WeakMap();
let corePromise;

function loadCore() {
  corePromise ??= new Promise((resolve, reject) => {
    const existing = globalThis.PointOfAttentionUiCore;
    if (existing) {
      resolve(existing);
      return;
    }

    const script = document.createElement('script');
    script.src = '_content/PointOfAttention.UI.Blazor/point-of-attention-ui.core.umd.js';
    script.onload = () => resolve(globalThis.PointOfAttentionUiCore);
    script.onerror = () => reject(new Error('Could not load the Point of Attention core bundle.'));
    document.head.appendChild(script);
  });
  return corePromise;
}

export async function initialize(element, modelUrl, defects, partsVisibility, selectionOptions, dotnet) {
  const core = await loadCore();
  const engine = new core.WarningViewerEngine(element, {
    modelUrl,
    defects,
    partsVisibility,
    getSelectionOptions: () => element.__selectionOptions ?? [],
    onSelectionRequest: request => dotnet.invokeMethodAsync('OnSelectionRequested', request),
    onDefectsChanged: items => dotnet.invokeMethodAsync('OnDefectsChanged', items),
    onModelLoaded: parts => dotnet.invokeMethodAsync('OnModelLoaded', parts),
    onModelLoadError: error => dotnet.invokeMethodAsync('OnModelLoadError', String(error)),
    onSnapshotReport: report => dotnet.invokeMethodAsync('OnSnapshotReport', report),
  });
  element.__selectionOptions = selectionOptions ?? [];
  engines.set(element, engine);
}

export function setDefects(element, defects) { engines.get(element)?.setDefects(defects); }
export function setPartsVisibility(element, parts) { engines.get(element)?.setPartsVisibility(parts); }
export function setSelectionOptions(element, options) { element.__selectionOptions = options ?? []; }
export function addWarning(element, option) { engines.get(element)?.addWarning(option); }
export function cancelSelection(element) { engines.get(element)?.cancelSelection(); }
export function setModelUrl(element, url) { engines.get(element)?.setModelUrl(url); }
export function addDistributedWarnings(element, count) { engines.get(element)?.addDistributedWarnings(count); }
export function setCameraView(element, view) { engines.get(element)?.setCameraView(view); }
export function zoomToFit(element) { engines.get(element)?.zoomToFit(); }
export function undo(element) { engines.get(element)?.undo(); }
export function redo(element) { engines.get(element)?.redo(); }
export function clearAllDefects(element) { engines.get(element)?.clearAllDefects(); }
export function setHeatMap(element, enabled) { engines.get(element)?.setHeatMap(enabled); }

export function dispose(element) {
  engines.get(element)?.dispose();
  engines.delete(element);
}
