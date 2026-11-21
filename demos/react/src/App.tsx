import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  WarningViewer,
  type WarningViewerHandle,
} from '@point-of-attention-ui/react';
import type {
  WarningDefect,
  ModelPartVisibility,
  SelectionOption,
  SnapshotReport,
  ViewerPart,
} from '@point-of-attention-ui/core';
import modelLibrary from '../../assets/models.json';

type ScenarioKind = 'empty' | 'preset' | 'high-poly' | 'high-warnings';
interface DemoScenario {
  id: ScenarioKind;
  label: string;
  badge?: string;
  warningCount?: number;
}
interface DemoModel {
  id: string;
  label: string;
  scenarios: DemoScenario[];
}

function buildModelUrl(baseUrl: string, modelId: string, useAssetsPrefix = false) {
  const prefix = useAssetsPrefix ? 'assets/models' : 'models';
  return `${baseUrl}${prefix}/${modelId}.glb`;
}

/* Defect-type options shown in the selection modal. */
const SELECTION_OPTIONS: SelectionOption[] = [
  { id: 'scratch', label: 'Scratch', severity: 'warning' },
  { id: 'dent', label: 'Dent', severity: 'error' },
  { id: 'rust', label: 'Rust', severity: 'error' },
  { id: 'crack', label: 'Crack', severity: 'error' },
  { id: 'misalignment', label: 'Misalignment', severity: 'info' },
  { id: 'wear', label: 'Wear', severity: 'warning' },
  { id: 'corrosion', label: 'Corrosion', severity: 'error' },
  { id: 'leakage', label: 'Leakage', severity: 'error' },
  { id: 'contamination', label: 'Contamination', severity: 'warning' },
  { id: 'missing-part', label: 'Missing part', severity: 'error' },
];

const CAMERA_VIEWS = ['Front', 'Back', 'Left', 'Right', 'Top', 'Bottom'] as const;
const MODEL_LIBRARY = modelLibrary as DemoModel[];

/* ── App ── */
export default function App() {
  const viewerRef = useRef<WarningViewerHandle>(null);
  const [defects, setDefects] = useState<WarningDefect[]>([]);
  const [partsVisibility, setPartsVisibility] = useState<ModelPartVisibility[]>([]);
  const [parts, setParts] = useState<ViewerPart[]>([]);
  const [reports, setReports] = useState<SnapshotReport[]>([]);
  const [showReports, setShowReports] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [scenarioMenuOpen, setScenarioMenuOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeModelId, setActiveModelId] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState('Demo');
  const [page, setPage] = useState<'viewer' | 'analytics'>('viewer');
  const pendingWarningCount = useRef(0);

  useEffect(() => () => {
    if (activeUrl?.startsWith('blob:')) URL.revokeObjectURL(activeUrl);
  }, [activeUrl]);

  async function startDemo(asset: DemoModel, demoScenario: DemoScenario) {
    setError(null);
    try {
      let initial: WarningDefect[] = [];
      if (demoScenario.id === 'preset') {
        const response = await fetch(`${import.meta.env.BASE_URL}scenarios.json`);
        if (!response.ok) throw new Error(`Could not load scenarios (${response.status})`);
        const scenarios: Record<string, WarningDefect[]> = await response.json();
        initial = scenarios[asset.id] ?? [];
      }
      pendingWarningCount.current = initial.length === 0
        ? (demoScenario.warningCount ?? 0)
        : 0;
      const nextUrl = buildModelUrl(import.meta.env.BASE_URL, asset.id);
      setReports([]);
      if (nextUrl === activeUrl) {
        viewerRef.current?.engine()?.setDefects(initial);
        if (pendingWarningCount.current > 0) {
          viewerRef.current?.engine()?.addDistributedWarnings(pendingWarningCount.current);
          pendingWarningCount.current = 0;
        }
      }
      setDefects(nextUrl === activeUrl
        ? (viewerRef.current?.engine()?.getDefects() ?? initial)
        : initial);
      if (nextUrl !== activeUrl) {
        setParts([]);
        setPartsVisibility([]);
      }
      if (nextUrl !== activeUrl) setLoading(true);
      setPage('viewer');
      setActiveModelId(asset.id);
      setActiveLabel(`${asset.label} — ${demoScenario.label}`);
      setActiveUrl(nextUrl);
    } catch (err) {
      setError(String(err));
    }
  }

  function startUploadedDemo() {
    if (!file) {
      setError('Choose a GLB file first.');
      return;
    }
    setError(null);
    pendingWarningCount.current = 0;
    setDefects([]);
    setParts([]);
    setPartsVisibility([]);
    setReports([]);
    setLoading(true);
    setPage('viewer');
    setActiveModelId(null);
    setActiveLabel(`${file.name} — Uploaded model`);
    setActiveUrl(URL.createObjectURL(file));
  }

  const handleDefectsChange = useCallback((d: WarningDefect[]) => {
    setDefects(d);
  }, []);

  const handleModelLoaded = useCallback((p: ViewerPart[]) => {
    setParts(p);
    setPartsVisibility(p.map(part => ({ meshName: part.name, visible: true })));
    setLoading(false);
    if (pendingWarningCount.current > 0) {
      viewerRef.current?.engine()?.addDistributedWarnings(pendingWarningCount.current);
      pendingWarningCount.current = 0;
    }
  }, []);

  const handleModelLoadError = useCallback((err: unknown) => {
    if (activeModelId) {
      const primaryUrl = buildModelUrl(import.meta.env.BASE_URL, activeModelId);
      if (activeUrl === primaryUrl) {
        setError(null);
        setLoading(true);
        setActiveUrl(buildModelUrl(import.meta.env.BASE_URL, activeModelId, true));
        return;
      }
    }
    setError(String(err));
    setLoading(false);
  }, [activeModelId, activeUrl]);

  const handleSnapshotReport = useCallback((report: SnapshotReport) => {
    setReports([report]);
  }, []);

  const togglePart = useCallback((meshName: string, visible: boolean) => {
    setPartsVisibility(prev =>
      prev.map(p => (p.meshName === meshName ? { ...p, visible } : p))
    );
    viewerRef.current?.engine()?.setPartVisible(meshName, visible);
  }, []);

  const handleCameraView = useCallback((view: string) => {
    viewerRef.current?.engine()?.setCameraView(view);
  }, []);

  const handleClearAll = useCallback(() => {
    viewerRef.current?.engine()?.clearAllDefects();
  }, []);

  const handleUndo = useCallback(() => {
    viewerRef.current?.engine()?.undo();
  }, []);

  const handleRedo = useCallback(() => {
    viewerRef.current?.engine()?.redo();
  }, []);

  const handleZoomToFit = useCallback(() => {
    viewerRef.current?.engine()?.zoomToFit();
  }, []);

  const typeStats = useMemo(() => {
    const counts = new Map<string, number>();
    defects.forEach(defect => {
      const type = String(defect.metadata?.optionLabel ?? defect.label ?? 'Unclassified');
      counts.set(type, (counts.get(type) ?? 0) + 1);
    });
    return [...counts].map(([label, count]) => ({ label, count }));
  }, [defects]);

  const componentStats = useMemo(() => {
    const counts = new Map<string, number>();
    defects.forEach(defect => {
      const component = defect.meshName ?? 'Unassigned';
      counts.set(component, (counts.get(component) ?? 0) + 1);
    });
    return [...counts]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count);
  }, [defects]);

  const maxTypeCount = Math.max(1, ...typeStats.map(item => item.count));
  const maxComponentCount = Math.max(1, ...componentStats.map(item => item.count));

  useEffect(() => {
    viewerRef.current?.engine()?.setHeatMap(page === 'analytics');
  }, [page, activeUrl]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">
          Point of Attention — {activeUrl ? activeLabel : 'Demo'}
          <span className="app-badge">React</span>
        </h1>
        <div className="app-header-actions">
          {activeUrl && (
            <button
              className="toolbar-btn"
              onClick={() => setShowDetails(v => !v)}
              aria-pressed={showDetails}
            >
              {showDetails ? 'Hide details' : 'Show details'}
            </button>
          )}
          {activeUrl && <button className="toolbar-btn" onClick={() => { setActiveUrl(null); setActiveModelId(null); setError(null); setPage('viewer'); }}>Close demo</button>}
          <a
            className="app-link"
            href="https://github.com/LucaAstolfi88/point-of-attention-ui"
            target="_blank"
            rel="noopener"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {activeUrl && <div className="app-toolbar">
        <div className="toolbar-group">
          <span className="toolbar-label">Camera:</span>
          {CAMERA_VIEWS.map(view => (
            <button
              key={view}
              className="toolbar-btn"
              onClick={() => handleCameraView(view)}
            >
              {view}
            </button>
          ))}
          <button className="toolbar-btn toolbar-btn--accent" onClick={handleZoomToFit}>
            Zoom Fit
          </button>
        </div>
        <div className="toolbar-group">
          <button className="toolbar-btn" onClick={handleUndo} title="Undo">
            ↩ Undo
          </button>
          <button className="toolbar-btn" onClick={handleRedo} title="Redo">
            ↪ Redo
          </button>
          <button className="toolbar-btn toolbar-btn--danger" onClick={handleClearAll}>
            ✕ Clear All
          </button>
        </div>
        <div className="toolbar-group">
          <span className="toolbar-stat">
            Defects: <strong>{defects.length}</strong>
          </span>
          <span className="toolbar-stat">
            Parts: <strong>{parts.length}</strong>
          </span>
        </div>
      </div>}

      <div className="app-main">
        <aside className={`scenario-sidebar${scenarioMenuOpen ? '' : ' scenario-sidebar--collapsed'}`}>
          <button
            className="menu-collapse-btn"
            type="button"
            aria-label={scenarioMenuOpen ? 'Collapse scenario menu' : 'Expand scenario menu'}
            aria-expanded={scenarioMenuOpen}
            onClick={() => setScenarioMenuOpen(open => !open)}
          >
            <span aria-hidden="true">{scenarioMenuOpen ? '‹' : '›'}</span>
          </button>
          <nav className="scenario-menu" aria-label="Demo scenarios" hidden={!scenarioMenuOpen}>
            <div className="menu-heading">
              <h2 className="sidebar-title">Demo scenarios</h2>
            </div>
            {MODEL_LIBRARY.map(asset => (
              <details className="scenario-model" key={asset.id} open>
                <summary>{asset.label}</summary>
                {asset.scenarios.map(item => (
                  <button
                    key={`${asset.id}-${item.id}`}
                    className={`scenario-button${activeLabel === `${asset.label} — ${item.label}` ? ' scenario-button--active' : ''}`}
                    onClick={() => startDemo(asset, item)}
                  >
                    <span>{item.label}</span>
                    {item.badge && <small>{item.badge}</small>}
                  </button>
                ))}
              </details>
            ))}
            <details className="scenario-model" open>
              <summary>Custom model</summary>
              <label className="upload-button">
                Upload new model
                <input
                  type="file"
                  accept=".glb,.gltf"
                  onChange={event => setFile(event.target.files?.[0] ?? null)}
                />
              </label>
              {file && <button className="scenario-button" onClick={startUploadedDemo}>Open {file.name}</button>}
            </details>
          </nav>
          {error && !activeUrl && <p role="alert" className="scenario-error">{error}</p>}
        </aside>

        {activeUrl ? <>
        <div className="app-viewer">
          {loading && (
            <div className="app-overlay">
              <div className="spinner" />
              <p>Loading model…</p>
            </div>
          )}
          {error && (
            <div className="app-overlay app-overlay--error">
              <p>⚠️ Failed to load model: {error}</p>
            </div>
          )}
          <WarningViewer
            ref={viewerRef}
            modelUrl={activeUrl}
            defects={defects}
            partsVisibility={partsVisibility}
            selectionOptions={SELECTION_OPTIONS}
            locale="en"
            onDefectsChange={handleDefectsChange}
            onModelLoaded={handleModelLoaded}
            onModelLoadError={handleModelLoadError}
            onSnapshotReport={handleSnapshotReport}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {activeUrl && <div className="page-tabs" role="tablist" aria-label="Viewer pages">
          <button className={page === 'viewer' ? 'active' : ''} onClick={() => setPage('viewer')}>Inspection</button>
          <button className={page === 'analytics' ? 'active' : ''} onClick={() => setPage('analytics')}>Analytics</button>
        </div>}

        {showDetails && page === 'viewer' && <aside className="app-sidebar">
          <section className="sidebar-section">
            <h2 className="sidebar-title">Parts Visibility</h2>
            {parts.length === 0 && (
              <p className="sidebar-empty">Loading parts…</p>
            )}
            <ul className="part-list">
              {parts.map(part => {
                const vis = partsVisibility.find(
                  p => p.meshName === part.name
                )?.visible ?? true;
                return (
                  <li key={part.name} className="part-item">
                    <label className="part-label">
                      <input
                        type="checkbox"
                        checked={vis}
                        onChange={e => togglePart(part.name, e.target.checked)}
                      />
                      <span className={vis ? '' : 'part-label--hidden'}>
                        {part.name}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">
              Defects ({defects.length})
            </h2>
            {defects.length === 0 && (
              <p className="sidebar-empty">
                Click on the model to add defects.
              </p>
            )}
            <ul className="defect-list">
              {defects.map(d => {
                const sevClass = `defect-severity defect-severity--${d.severity ?? 'error'}`;
                return (
                  <li key={d.id} className="defect-item">
                    <span className={sevClass} />
                    <span className="defect-label">{String(d.metadata?.optionLabel ?? d.label ?? '')}</span>
                    <span className="defect-part">{d.meshName}</span>
                    <button
                      className="defect-remove"
                      onClick={() => viewerRef.current?.engine()?.removeDefect(d.id)}
                      title="Remove"
                    >
                      ✕
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">
              <button
                className="sidebar-toggle"
                onClick={() => setShowReports(r => !r)}
              >
                Snapshots ({reports.length}) {showReports ? '▾' : '▸'}
              </button>
            </h2>
            {showReports && reports.length === 0 && (
              <p className="sidebar-empty">
                Add a defect to generate the first snapshot report.
              </p>
            )}
            {showReports &&
              reports.map(report => (
                <div key={report.id} className="report-card">
                  <time className="report-time">
                    {new Date(report.generatedAt).toLocaleTimeString()}
                  </time>
                  <div className="report-images">
                    {report.images.map(img => (
                      <figure key={img.view} className="report-figure">
                        <img
                          src={img.dataUri}
                          alt={`${img.view} view`}
                          className="report-thumb"
                        />
                        <figcaption>{img.view}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
          </section>
        </aside>}
        {page === 'analytics' && <aside className="app-sidebar analytics-panel">
          <section className="analytics-summary">
            <span>Total warnings</span>
            <strong>{defects.length}</strong>
            <small>{componentStats.length} affected components</small>
          </section>
          <section className="sidebar-section">
            <h2 className="sidebar-title">Warnings by type</h2>
            {typeStats.length === 0 && <p className="sidebar-empty">No warnings recorded.</p>}
            {typeStats.map(item => (
              <div className="stat-row" key={item.label}>
                <div><span>{item.label}</span><strong>{item.count}</strong></div>
                <div className="stat-track"><span style={{ width: `${item.count / maxTypeCount * 100}%` }} /></div>
              </div>
            ))}
          </section>
          <section className="sidebar-section">
            <h2 className="sidebar-title">Surface heat map</h2>
            <div className="heat-legend"><span>Low</span><i /><span>High</span></div>
            {componentStats.map(item => (
              <div className="heat-row" key={item.label}>
                <span>{item.label || 'Unnamed surface'}</span>
                <strong style={{ opacity: 0.35 + item.count / maxComponentCount * 0.65 }}>{item.count}</strong>
              </div>
            ))}
          </section>
        </aside>}
        </> : <main className="demo-setup">
          <h2>Inspection workspace</h2>
          <p>Select a preset scenario from the left menu or upload a GLB model.</p>
        </main>}
      </div>
    </div>
  );
}
