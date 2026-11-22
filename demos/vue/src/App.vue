<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue';
import { WarningViewer } from '@point-of-attention-ui/vue';
import type {
  WarningDefect,
  ModelPartVisibility,
  SelectionOption,
  SnapshotReport,
  ViewerPart,
} from '@point-of-attention-ui/core';
import modelLibrary from '../../assets/models.json';

type ScenarioKind = 'empty' | 'preset' | 'high-poly' | 'high-warnings';
interface DemoScenario { id: ScenarioKind; label: string; badge?: string; warningCount?: number }
interface DemoModel { id: string; label: string; scenarios: DemoScenario[] }

function buildModelUrl(baseUrl: string, modelId: string, useAssetsPrefix = false) {
  const prefix = useAssetsPrefix ? 'assets/models' : 'models';
  return `${baseUrl}${prefix}/${modelId}.glb`;
}

const SELECTION_OPTIONS: SelectionOption[] = [
  { id: 'scratch', label: 'Scratch', severity: 'warning' },
  { id: 'dent', label: 'Dent', severity: 'error' },
  { id: 'rust', label: 'Rust', severity: 'error' },
  { id: 'crack', label: 'Crack', severity: 'error' },
  { id: 'misalignment', label: 'Misalignment', severity: 'info' },
];

const CAMERA_VIEWS = ['Front', 'Back', 'Left', 'Right', 'Top', 'Bottom'] as const;
const MODEL_LIBRARY = modelLibrary as DemoModel[];

const viewerRef = ref<InstanceType<typeof WarningViewer> | null>(null);
const defects = ref<WarningDefect[]>([]);
const partsVisibility = ref<ModelPartVisibility[]>([]);
const parts = ref<ViewerPart[]>([]);
const reports = ref<SnapshotReport[]>([]);
const showReports = ref(false);
const showDetails = ref(true);
const scenarioMenuOpen = ref(true);
const loading = ref(true);
const error = ref<string | null>(null);
const file = ref<File | null>(null);
const activeUrl = ref<string | null>(null);
const activeModel = ref<DemoModel | null>(null);
const activeLabel = ref('Demo');
const page = ref<'viewer' | 'analytics'>('viewer');
const pendingWarningCount = ref(0);

watch(activeUrl, (_, previous) => { if (previous?.startsWith('blob:')) URL.revokeObjectURL(previous); });
onBeforeUnmount(() => { if (activeUrl.value?.startsWith('blob:')) URL.revokeObjectURL(activeUrl.value); });

async function startDemo(asset: DemoModel, demoScenario: DemoScenario) {
  error.value = null;
  try {
    let initial: WarningDefect[] = [];
    if (demoScenario.id === 'preset') {
      const response = await fetch(`${import.meta.env.BASE_URL}scenarios.json`);
      if (!response.ok) throw new Error(`Could not load scenarios (${response.status})`);
      const scenarios: Record<string, WarningDefect[]> = await response.json();
      initial = scenarios[asset.id] ?? [];
    }
    pendingWarningCount.value = initial.length === 0 ? (demoScenario.warningCount ?? 0) : 0;
    const nextUrl = buildModelUrl(import.meta.env.BASE_URL, asset.id);
    reports.value = [];
    if (nextUrl === activeUrl.value) {
      viewerRef.value?.engine()?.setDefects(initial);
      if (pendingWarningCount.value > 0) {
        viewerRef.value?.engine()?.addDistributedWarnings(pendingWarningCount.value);
        pendingWarningCount.value = 0;
      }
    }
    defects.value = nextUrl === activeUrl.value
      ? (viewerRef.value?.engine()?.getDefects() ?? initial)
      : initial;
    if (nextUrl !== activeUrl.value) {
      parts.value = [];
      partsVisibility.value = [];
    }
    if (nextUrl !== activeUrl.value) loading.value = true;
    page.value = 'viewer';
    activeModel.value = asset;
    activeLabel.value = `${asset.label} — ${demoScenario.label}`;
    activeUrl.value = nextUrl;
  } catch (err) {
    error.value = String(err);
  }
}

function startUploadedDemo() {
  if (!file.value) {
    error.value = 'Choose a GLB file first.';
    return;
  }
  pendingWarningCount.value = 0;
  error.value = null;
  defects.value = [];
  parts.value = [];
  partsVisibility.value = [];
  reports.value = [];
  loading.value = true;
  page.value = 'viewer';
  activeModel.value = null;
  activeLabel.value = `${file.value.name} — Uploaded model`;
  activeUrl.value = URL.createObjectURL(file.value);
}

function closeDemo() {
  activeUrl.value = null;
  activeModel.value = null;
  error.value = null;
  page.value = 'viewer';
}

const sortedReports = computed(() => reports.value);
const typeStats = computed(() => aggregateDefects('type'));
const componentStats = computed(() => [...aggregateDefects('component')].sort((a, b) => b.count - a.count));
const maxTypeCount = computed(() => Math.max(1, ...typeStats.value.map(item => item.count)));
const maxComponentCount = computed(() => Math.max(1, ...componentStats.value.map(item => item.count)));

function aggregateDefects(field: 'type' | 'component') {
  const counts = new Map<string, number>();
  defects.value.forEach(defect => {
    const label = field === 'type'
      ? String(defect.metadata?.optionLabel ?? defect.label ?? 'Unclassified')
      : defect.meshName ?? 'Unassigned';
    counts.set(label, (counts.get(label) ?? 0) + 1);
  });
  return [...counts].map(([label, count]) => ({ label, count }));
}

function onDefectsChange(d: WarningDefect[]) { defects.value = d; }

function onModelLoaded(p: ViewerPart[]) {
  parts.value = p;
  partsVisibility.value = p.map(part => ({ meshName: part.name, visible: true }));
  loading.value = false;
  if (pendingWarningCount.value > 0) {
    viewerRef.value?.engine()?.addDistributedWarnings(pendingWarningCount.value);
    pendingWarningCount.value = 0;
  }
}

function onModelLoadError(err: unknown) {
  if (activeModel.value) {
    const primaryUrl = buildModelUrl(import.meta.env.BASE_URL, activeModel.value.id);
    if (activeUrl.value === primaryUrl) {
      error.value = null;
      loading.value = true;
      activeUrl.value = buildModelUrl(import.meta.env.BASE_URL, activeModel.value.id, true);
      return;
    }
  }
  error.value = String(err);
  loading.value = false;
}

function onSnapshotReport(report: SnapshotReport) {
  reports.value = [report];
}

function togglePart(meshName: string, visible: boolean) {
  partsVisibility.value = partsVisibility.value.map(p =>
    p.meshName === meshName ? { ...p, visible } : p
  );
  viewerRef.value?.engine()?.setPartVisible(meshName, visible);
}

function setCameraView(view: string) { viewerRef.value?.engine()?.setCameraView(view); }
function clearAll() { viewerRef.value?.engine()?.clearAllDefects(); }
function undo() { viewerRef.value?.engine()?.undo(); }
function redo() { viewerRef.value?.engine()?.redo(); }
function zoomToFit() { viewerRef.value?.engine()?.zoomToFit(); }
function removeDefect(id: string) { viewerRef.value?.engine()?.removeDefect(id); }

watch([page, activeUrl], () => {
  viewerRef.value?.engine()?.setHeatMap(page.value === 'analytics');
});
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <h1 class="app-title">
        Point of Attention — {{ activeUrl ? activeLabel : 'Demo' }}
        <span class="app-badge">Vue</span>
      </h1>
      <div class="app-header-actions">
        <button v-if="activeUrl" class="toolbar-btn" @click="showDetails = !showDetails" :aria-pressed="showDetails">
          {{ showDetails ? 'Hide details' : 'Show details' }}
        </button>
        <button v-if="activeUrl" class="toolbar-btn" @click="closeDemo">Close demo</button>
        <a
          class="app-link"
          href="https://github.com/LucaAstolfi88/point-of-attention-ui"
          target="_blank"
          rel="noopener"
        >
          GitHub ↗
        </a>
      </div>
    </header>

    <div class="workspace">
      <aside class="scenario-sidebar" :class="{ 'scenario-sidebar--collapsed': !scenarioMenuOpen }">
        <button
          class="menu-collapse-btn"
          type="button"
          :aria-label="scenarioMenuOpen ? 'Collapse scenario menu' : 'Expand scenario menu'"
          :aria-expanded="scenarioMenuOpen"
          @click="scenarioMenuOpen = !scenarioMenuOpen"
        >
          <span aria-hidden="true">{{ scenarioMenuOpen ? '‹' : '›' }}</span>
        </button>
        <nav v-show="scenarioMenuOpen" class="scenario-menu" aria-label="Demo scenarios">
          <div class="menu-heading"><h2 class="sidebar-title">Demo scenarios</h2></div>
          <details v-for="asset in MODEL_LIBRARY" :key="asset.id" class="scenario-model" open>
            <summary>{{ asset.label }}</summary>
            <button
              v-for="item in asset.scenarios"
              :key="`${asset.id}-${item.id}`"
              class="scenario-button"
              :class="{ 'scenario-button--active': activeLabel === `${asset.label} — ${item.label}` }"
              @click="startDemo(asset, item)"
            >
              <span>{{ item.label }}</span>
              <small v-if="item.badge">{{ item.badge }}</small>
            </button>
          </details>
          <details class="scenario-model" open>
            <summary>Custom model</summary>
            <label class="upload-button">
              Upload new model
              <input type="file" accept=".glb,.gltf" @change="file = ($event.target as HTMLInputElement).files?.[0] ?? null" />
            </label>
            <button v-if="file" class="scenario-button" @click="startUploadedDemo">Open {{ file.name }}</button>
          </details>
        </nav>
        <p v-if="error && !activeUrl" role="alert" class="scenario-error">{{ error }}</p>
      </aside>
    <div v-if="activeUrl" class="workspace-content">
      <div class="page-tabs" role="tablist" aria-label="Viewer pages">
        <button :class="{ active: page === 'viewer' }" @click="page = 'viewer'">Inspection</button>
        <button :class="{ active: page === 'analytics' }" @click="page = 'analytics'">Analytics</button>
      </div>
      <div class="app-toolbar">
        <div class="toolbar-group">
          <span class="toolbar-label">Camera:</span>
          <button
            v-for="view in CAMERA_VIEWS"
            :key="view"
            class="toolbar-btn"
            @click="setCameraView(view)"
          >
            {{ view }}
          </button>
          <button class="toolbar-btn toolbar-btn--accent" @click="zoomToFit">
            Zoom Fit
          </button>
        </div>
        <div class="toolbar-group">
          <button class="toolbar-btn" @click="undo" title="Undo">↩ Undo</button>
          <button class="toolbar-btn" @click="redo" title="Redo">↪ Redo</button>
          <button class="toolbar-btn toolbar-btn--danger" @click="clearAll">
            ✕ Clear All
          </button>
        </div>
        <div class="toolbar-group">
          <span class="toolbar-stat">Defects: <strong>{{ defects.length }}</strong></span>
          <span class="toolbar-stat">Parts: <strong>{{ parts.length }}</strong></span>
        </div>
      </div>

      <div class="app-main">
        <div class="app-viewer">
          <div v-if="loading" class="app-overlay">
            <div class="spinner" />
            <p>Loading model…</p>
          </div>
          <div v-if="error" class="app-overlay app-overlay--error">
            <p>⚠️ Failed to load model: {{ error }}</p>
          </div>
          <WarningViewer
            ref="viewerRef"
            :modelUrl="activeUrl"
            :defects="defects"
            :partsVisibility="partsVisibility"
            :selectionOptions="SELECTION_OPTIONS"
            locale="en"
            @defects-change="onDefectsChange"
            @model-loaded="onModelLoaded"
            @model-load-error="onModelLoadError"
            @snapshot-report="onSnapshotReport"
            style="width:100%;height:100%"
          />
        </div>

        <aside v-if="showDetails && page === 'viewer'" class="app-sidebar">
        <section class="sidebar-section">
          <h2 class="sidebar-title">Parts Visibility</h2>
          <p v-if="parts.length === 0" class="sidebar-empty">Loading parts…</p>
          <ul class="part-list">
            <li v-for="part in parts" :key="part.name" class="part-item">
              <label class="part-label">
                <input
                  type="checkbox"
                  :checked="partsVisibility.find(p => p.meshName === part.name)?.visible ?? true"
                  @change="togglePart(part.name, ($event.target as HTMLInputElement).checked)"
                />
                <span :class="{ 'part-label--hidden': !(partsVisibility.find(p => p.meshName === part.name)?.visible ?? true) }">
                  {{ part.name }}
                </span>
              </label>
            </li>
          </ul>
        </section>

        <section class="sidebar-section">
          <h2 class="sidebar-title">Defects ({{ defects.length }})</h2>
          <p v-if="defects.length === 0" class="sidebar-empty">
            Click on the model to add defects.
          </p>
          <ul class="defect-list">
            <li v-for="d in defects" :key="d.id" class="defect-item">
              <span :class="`defect-severity defect-severity--${d.severity ?? 'error'}`" />
              <span class="defect-label">{{ d.metadata?.optionLabel ?? d.label }}</span>
              <span class="defect-part">{{ d.meshName }}</span>
              <button class="defect-remove" @click="removeDefect(d.id)" title="Remove">✕</button>
            </li>
          </ul>
        </section>

        <section class="sidebar-section">
          <h2 class="sidebar-title">
            <button class="sidebar-toggle" @click="showReports = !showReports">
              Snapshots ({{ reports.length }}) {{ showReports ? '▾' : '▸' }}
            </button>
          </h2>
          <p v-if="showReports && reports.length === 0" class="sidebar-empty">
            Add a defect to generate the first snapshot report.
          </p>
          <div
            v-if="showReports"
            v-for="report in sortedReports"
            :key="report.id"
            class="report-card"
          >
            <time class="report-time">
              {{ new Date(report.generatedAt).toLocaleTimeString() }}
            </time>
            <div class="report-images">
              <figure v-for="img in report.images" :key="img.view" class="report-figure">
                <img :src="img.dataUri" :alt="`${img.view} view`" class="report-thumb" />
                <figcaption>{{ img.view }}</figcaption>
              </figure>
            </div>
          </div>
        </section>
        </aside>
        <aside v-if="page === 'analytics'" class="app-sidebar analytics-panel">
        <section class="analytics-summary">
          <span>Total warnings</span>
          <strong>{{ defects.length }}</strong>
          <small>{{ componentStats.length }} affected components</small>
        </section>
        <section class="sidebar-section">
          <h2 class="sidebar-title">Warnings by type</h2>
          <p v-if="typeStats.length === 0" class="sidebar-empty">No warnings recorded.</p>
          <div v-for="item in typeStats" :key="item.label" class="stat-row">
            <div><span>{{ item.label }}</span><strong>{{ item.count }}</strong></div>
            <div class="stat-track"><span :style="{ width: `${item.count / maxTypeCount * 100}%` }" /></div>
          </div>
        </section>
        <section class="sidebar-section">
          <h2 class="sidebar-title">Surface heat map</h2>
          <div class="heat-legend"><span>Low</span><i /><span>High</span></div>
          <div v-for="item in componentStats" :key="item.label" class="heat-row">
            <span>{{ item.label || 'Unnamed surface' }}</span>
            <strong :style="{ opacity: 0.35 + item.count / maxComponentCount * 0.65 }">{{ item.count }}</strong>
          </div>
        </section>
        </aside>
      </div>
    </div>
    <main v-else class="demo-setup">
      <h2>Inspection workspace</h2>
      <p>Select a preset scenario from the left menu or upload a GLB model.</p>
    </main>
    </div>
  </div>
</template>

<style>
/* ── Reset & base ── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #app {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  background: #1a1a2e;
  color: #e0e0e0;
}

.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}
.demo-setup { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; padding: 32px; }
.demo-setup label { display: flex; flex-direction: column; gap: 8px; }
.demo-setup select, .demo-setup input { padding: 8px; max-width: 100%; }

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #16213e;
  border-bottom: 1px solid #0f3460;
  flex-shrink: 0;
}

.app-title {
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-icon { font-size: 1.4rem; }

.app-badge {
  font-size: 0.7rem;
  background: #42b883;
  color: #fff;
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.app-header-actions { display: flex; gap: 12px; }

.app-link {
  color: #e94560;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.app-link:hover { text-decoration: underline; }

.app-toolbar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 20px;
  background: #0f3460;
  border-bottom: 1px solid #16213e;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.toolbar-group { display: flex; align-items: center; gap: 6px; }

.toolbar-label { font-size: 0.8rem; color: #a0a0b0; margin-right: 4px; }

.toolbar-btn {
  padding: 4px 12px;
  min-height: 36px;
  background: #1a1a2e;
  border: 1px solid #533483;
  color: #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.15s;
}

.toolbar-btn:hover { background: #533483; }

.toolbar-btn--accent { border-color: #e94560; color: #e94560; }

.toolbar-btn--accent:hover { background: #e94560; color: #fff; }

.toolbar-btn--danger { border-color: #c0392b; color: #e74c3c; }

.toolbar-btn--danger:hover { background: #c0392b; color: #fff; }

.toolbar-stat { font-size: 0.8rem; color: #a0a0b0; }

.toolbar-stat strong { color: #e94560; }

.workspace, .app-main { display: flex; flex: 1; overflow: hidden; position: relative; }
.workspace-content {
  display: flex;
  flex: 1;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
  position: relative;
}
.scenario-sidebar {
  width: 230px;
  background: #1a1a2e;
  border-right: 1px solid #0f3460;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
  position: relative;
  transition: width .2s ease, padding .2s ease;
}
.scenario-sidebar--collapsed { width: 48px; padding: 8px; overflow: visible; }
.menu-collapse-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  z-index: 2;
  border: 1px solid #533483;
  border-radius: 6px;
  background: #16213e;
  color: #fff;
  cursor: pointer;
}
.menu-heading { min-height: 28px; padding-right: 36px; }
.scenario-menu, .scenario-model { display: flex; flex-direction: column; gap: 6px; }
.scenario-menu { gap: 16px; }
.scenario-model summary { font-size: .82rem; color: #e0e0e0; margin-bottom: 5px; cursor: pointer; font-weight: 600; user-select: none; }
.scenario-button { display: flex; justify-content: space-between; text-align: left; }
.scenario-button { min-height: 40px; }
.scenario-button--active { background: #16213e; border-color: #e94560; color: #e94560; }
.scenario-button small { color: #e94560; font-size: .62rem; text-transform: uppercase; }
.upload-button {
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 10px;
  border: 1px dashed #533483;
  border-radius: 4px;
  color: #e94560;
  cursor: pointer;
  text-align: center;
}
.upload-button input { display: none; }
.scenario-error { color: #e74c3c; font-size: .8rem; }
.page-tabs {
  position: absolute;
  top: 12px;
  left: 246px;
  z-index: 20;
  display: flex;
  background: rgba(15, 52, 96, .92);
  border-radius: 6px;
  overflow: hidden;
}
.page-tabs button { border: 0; border-radius: 0; background: transparent; }
.page-tabs button.active { background: #e94560; color: #fff; }

.app-viewer { flex: 1; position: relative; background: #16213e; }

.app-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: rgba(22, 33, 62, 0.85);
  z-index: 10;
  color: #a0a0b0;
  font-size: 0.95rem;
}

.app-overlay--error { color: #e74c3c; }

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #0f3460;
  border-top-color: #e94560;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.app-sidebar {
  width: 320px;
  background: #1a1a2e;
  border-left: 1px solid #0f3460;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
}

.sidebar-section { display: flex; flex-direction: column; gap: 8px; }

.sidebar-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #a0a0b0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-toggle {
  all: unset;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: #a0a0b0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-toggle:hover { color: #e94560; }

.sidebar-empty { font-size: 0.8rem; color: #6a6a7a; font-style: italic; }

.part-list { list-style: none; display: flex; flex-direction: column; gap: 4px; max-height: 200px; overflow-y: auto; }

.part-item { font-size: 0.78rem; }

.part-label { display: flex; align-items: center; gap: 6px; cursor: pointer; }

.part-label input[type="checkbox"] { accent-color: #e94560; }

.part-label--hidden { text-decoration: line-through; opacity: 0.4; }

.defect-list { list-style: none; display: flex; flex-direction: column; gap: 4px; max-height: 220px; overflow-y: auto; }

.defect-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: #16213e;
  border-radius: 4px;
  font-size: 0.78rem;
}

.defect-severity { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.defect-severity--info { background: #2196f3; }
.defect-severity--warning { background: #ff9800; }
.defect-severity--error { background: #f44336; }

.defect-label { flex: 1; font-weight: 500; }

.defect-part {
  color: #a0a0b0;
  font-size: 0.7rem;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.defect-remove { all: unset; cursor: pointer; color: #e74c3c; font-size: 0.7rem; padding: 2px; border-radius: 2px; }

.defect-remove:hover { background: #c0392b; color: #fff; }

.report-card { background: #16213e; border-radius: 6px; padding: 8px; margin-bottom: 8px; }

.report-time { font-size: 0.7rem; color: #a0a0b0; display: block; margin-bottom: 6px; }

.report-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; }

.report-figure { margin: 0; }

.report-thumb { width: 100%; height: auto; border-radius: 3px; border: 1px solid #0f3460; }

.report-figure figcaption { font-size: 0.6rem; text-align: center; color: #6a6a7a; text-transform: capitalize; }

.analytics-panel { gap: 24px; }
.analytics-summary { display: grid; gap: 4px; padding: 18px; border: 1px solid #533483; border-radius: 8px; background: #16213e; }
.analytics-summary span, .analytics-summary small { color: #a0a0b0; }
.analytics-summary strong { color: #e94560; font-size: 2rem; }
.stat-row { display: grid; gap: 5px; margin-bottom: 4px; font-size: .78rem; }
.stat-row > div:first-child { display: flex; justify-content: space-between; }
.stat-track { height: 6px; overflow: hidden; background: #0f3460; border-radius: 999px; }
.stat-track span { display: block; height: 100%; background: #e94560; }
.heat-legend { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; font-size: .68rem; color: #a0a0b0; }
.heat-legend i { height: 8px; border-radius: 999px; background: linear-gradient(90deg, #2563eb, #ef4444); }
.heat-row { display: flex; justify-content: space-between; gap: 10px; padding: 6px 8px; background: #16213e; border-radius: 4px; font-size: .75rem; }
.heat-row strong { color: #ef4444; }

@media (max-width: 1024px) {
  .app-sidebar { width: 280px; }
}

@media (max-width: 768px) {
  .app-header { padding: 8px 12px; }
  .app-title { font-size: 1rem; }
  .app-header-actions { gap: 8px; }
  .app-toolbar {
    padding: 6px 10px;
    gap: 8px;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .toolbar-btn { padding: 6px 10px; white-space: nowrap; }
  .app-main { flex-direction: column; }
  .workspace { flex-direction: column; overflow: auto; }
  .scenario-sidebar { width: 100%; max-height: 38dvh; border-right: 0; border-bottom: 1px solid #0f3460; }
  .scenario-sidebar--collapsed { width: 100%; min-height: 48px; max-height: 48px; padding: 8px 12px; }
  .workspace-content { min-height: 0; }
  .page-tabs { top: 8px; left: 12px; }
  .demo-setup { padding: 20px 16px; }
  .app-viewer { min-height: 48vh; min-height: 48dvh; }
  .app-sidebar {
    width: 100%;
    border-left: none;
    border-top: 1px solid #0f3460;
    max-height: 48vh;
    max-height: 48dvh;
    flex-shrink: 0;
  }
  .report-images { grid-template-columns: repeat(2, 1fr); }
}
</style>
