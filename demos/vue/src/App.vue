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
/** True on phones / narrow tablets, where the menu is a drawer and the panel a bottom sheet. */
const isCompact = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

// Details / analytics panel: open on desktop, collapsed bottom sheet on phones.
const panelOpen = ref(!isCompact());
const scenarioMenuOpen = ref(true);
const panelTitle = computed(() => (page.value === 'analytics' ? 'Analytics' : 'Details'));

function onPickScenario(asset: DemoModel, scenario: DemoScenario) {
  void startDemo(asset, scenario);
  if (isCompact()) scenarioMenuOpen.value = false;
}

function onOpenUpload() {
  startUploadedDemo();
  if (isCompact()) scenarioMenuOpen.value = false;
}
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
      <div class="app-header-lead">
        <button
          class="icon-btn menu-toggle"
          type="button"
          aria-label="Toggle scenario menu"
          aria-controls="scenario-menu"
          :aria-expanded="scenarioMenuOpen"
          @click="scenarioMenuOpen = !scenarioMenuOpen"
        >
          <span aria-hidden="true">☰</span>
        </button>
        <h1 class="app-title">
          <span class="app-title-text">Point of Attention — {{ activeUrl ? activeLabel : 'Demo' }}</span>
          <span class="app-badge">Vue</span>
        </h1>
      </div>
      <div class="app-header-actions">
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

    <div v-if="activeUrl" class="app-toolbar">
      <div class="page-tabs" role="tablist" aria-label="Viewer pages">
        <button role="tab" :aria-selected="page === 'viewer'" :class="{ active: page === 'viewer' }" @click="page = 'viewer'">Inspection</button>
        <button role="tab" :aria-selected="page === 'analytics'" :class="{ active: page === 'analytics' }" @click="page = 'analytics'">Analytics</button>
      </div>
      <div class="toolbar-group">
        <span class="toolbar-label">Camera:</span>
        <button v-for="view in CAMERA_VIEWS" :key="view" class="toolbar-btn" @click="setCameraView(view)">
          {{ view }}
        </button>
        <button class="toolbar-btn toolbar-btn--accent" @click="zoomToFit">Zoom Fit</button>
      </div>
      <div class="toolbar-group">
        <button class="toolbar-btn" @click="undo" title="Undo">↩ Undo</button>
        <button class="toolbar-btn" @click="redo" title="Redo">↪ Redo</button>
        <button class="toolbar-btn toolbar-btn--danger" @click="clearAll">✕ Clear All</button>
      </div>
      <div class="toolbar-group">
        <span class="toolbar-stat">Defects: <strong>{{ defects.length }}</strong></span>
        <span class="toolbar-stat">Parts: <strong>{{ parts.length }}</strong></span>
      </div>
    </div>

    <div class="app-main">
      <button
        v-if="scenarioMenuOpen"
        type="button"
        class="drawer-backdrop"
        aria-label="Close scenario menu"
        @click="scenarioMenuOpen = false"
      />
      <aside
        id="scenario-menu"
        class="scenario-sidebar"
        :class="{ 'scenario-sidebar--collapsed': !scenarioMenuOpen }"
      >
        <div class="scenario-sidebar-head">
          <h2 class="sidebar-title">Demo scenarios</h2>
          <button
            class="menu-collapse-btn"
            type="button"
            :aria-label="scenarioMenuOpen ? 'Collapse scenario menu' : 'Expand scenario menu'"
            :aria-expanded="scenarioMenuOpen"
            @click="scenarioMenuOpen = !scenarioMenuOpen"
          >
            <span class="chev" aria-hidden="true">›</span>
          </button>
        </div>
        <nav class="scenario-menu" aria-label="Demo scenarios">
          <details v-for="asset in MODEL_LIBRARY" :key="asset.id" class="scenario-model" open>
            <summary>{{ asset.label }}</summary>
            <button
              v-for="item in asset.scenarios"
              :key="`${asset.id}-${item.id}`"
              class="scenario-button"
              :class="{ 'scenario-button--active': activeLabel === `${asset.label} — ${item.label}` }"
              @click="onPickScenario(asset, item)"
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
            <button v-if="file" class="scenario-button" @click="onOpenUpload">Open {{ file.name }}</button>
          </details>
        </nav>
        <p v-if="error && !activeUrl" role="alert" class="scenario-error">{{ error }}</p>
      </aside>

      <div v-if="activeUrl" class="app-stage">
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

        <aside
          id="details-panel"
          class="app-sidebar"
          :class="{ 'app-sidebar--collapsed': !panelOpen }"
          :aria-label="panelTitle"
        >
          <div class="sidebar-header">
            <h2 class="sidebar-title">
              {{ panelTitle }}
              <span class="sidebar-count" :aria-label="`${defects.length} defects`">{{ defects.length }}</span>
            </h2>
            <button
              class="panel-collapse-btn"
              type="button"
              aria-controls="details-panel"
              :aria-label="panelOpen ? `Collapse ${panelTitle.toLowerCase()} panel` : `Expand ${panelTitle.toLowerCase()} panel`"
              :aria-expanded="panelOpen"
              @click="panelOpen = !panelOpen"
            >
              <span class="chev" aria-hidden="true">›</span>
            </button>
          </div>

          <template v-if="panelOpen">
            <div v-if="page === 'viewer'" class="sidebar-body">
              <section class="sidebar-section">
                <h3 class="sidebar-title">Parts Visibility</h3>
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
                <h3 class="sidebar-title">Defects ({{ defects.length }})</h3>
                <p v-if="defects.length === 0" class="sidebar-empty">Tap or click on the model to add defects.</p>
                <ul class="defect-list">
                  <li v-for="d in defects" :key="d.id" class="defect-item">
                    <span :class="`defect-severity defect-severity--${d.severity ?? 'error'}`" />
                    <span class="defect-label">{{ d.metadata?.optionLabel ?? d.label }}</span>
                    <span class="defect-part">{{ d.meshName }}</span>
                    <button
                      class="defect-remove"
                      :aria-label="`Remove ${d.metadata?.optionLabel ?? d.label ?? 'defect'}`"
                      title="Remove"
                      @click="removeDefect(d.id)"
                    >✕</button>
                  </li>
                </ul>
              </section>

              <section class="sidebar-section">
                <h3 class="sidebar-title">
                  <button class="sidebar-toggle" :aria-expanded="showReports" @click="showReports = !showReports">
                    Snapshots ({{ reports.length }}) {{ showReports ? '▾' : '▸' }}
                  </button>
                </h3>
                <p v-if="showReports && reports.length === 0" class="sidebar-empty">
                  Add a defect to generate the first snapshot report.
                </p>
                <template v-if="showReports">
                  <div v-for="report in sortedReports" :key="report.id" class="report-card">
                    <time class="report-time">{{ new Date(report.generatedAt).toLocaleTimeString() }}</time>
                    <div class="report-images">
                      <figure v-for="img in report.images" :key="img.view" class="report-figure">
                        <img :src="img.dataUri" :alt="`${img.view} view`" class="report-thumb" />
                        <figcaption>{{ img.view }}</figcaption>
                      </figure>
                    </div>
                  </div>
                </template>
              </section>
            </div>

            <div v-else class="sidebar-body">
              <section class="analytics-summary">
                <span>Total warnings</span>
                <strong>{{ defects.length }}</strong>
                <small>{{ componentStats.length }} affected components</small>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-title">Warnings by type</h3>
                <p v-if="typeStats.length === 0" class="sidebar-empty">No warnings recorded.</p>
                <div v-for="item in typeStats" :key="item.label" class="stat-row">
                  <div><span>{{ item.label }}</span><strong>{{ item.count }}</strong></div>
                  <div class="stat-track"><span :style="{ width: `${item.count / maxTypeCount * 100}%` }" /></div>
                </div>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-title">Surface heat map</h3>
                <div class="heat-legend"><span>Low</span><i /><span>High</span></div>
                <div v-for="item in componentStats" :key="item.label" class="heat-row">
                  <span>{{ item.label || 'Unnamed surface' }}</span>
                  <strong :style="{ opacity: 0.35 + item.count / maxComponentCount * 0.65 }">{{ item.count }}</strong>
                </div>
              </section>
            </div>
          </template>
        </aside>
      </div>

      <main v-else class="demo-setup">
        <h2>Inspection workspace</h2>
        <p>Select a preset scenario from the menu or upload a GLB model.</p>
        <button class="toolbar-btn toolbar-btn--accent mobile-only" @click="scenarioMenuOpen = true">
          Browse scenarios
        </button>
      </main>
    </div>
  </div>
</template>

<style>
/* All layout and component styles live in the shared stylesheet. */
@import '../../assets/demo-shell.css';

.app-badge { background: #42b883; color: #08261a; }
</style>
