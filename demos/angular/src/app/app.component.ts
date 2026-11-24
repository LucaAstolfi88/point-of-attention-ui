import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { WarningViewerComponent } from '@point-of-attention-ui/angular';
import type { ModelPartVisibility, SelectionOption, SnapshotReport, ViewerPart, WarningDefect } from '@point-of-attention-ui/core';
import modelLibrary from '../../../assets/models.json';

type ScenarioKind = 'empty' | 'preset' | 'high-poly' | 'high-warnings';
interface DemoScenario { id: ScenarioKind; label: string; badge?: string; warningCount?: number }
interface DemoModel { id: string; label: string; scenarios: DemoScenario[] }
interface Statistic { label: string; count: number }

const MODEL_LIBRARY = modelLibrary as DemoModel[];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WarningViewerComponent],
  template: `
    <header><h1>Point of Attention — {{ modelUrl ? activeLabel : 'Demo' }} <span>Angular</span></h1></header>
    <nav *ngIf="modelUrl">
      <button (click)="showDetails = !showDetails">{{ showDetails ? 'Hide details' : 'Show details' }}</button>
      <button (click)="changeDemo()">Close demo</button>
      <button *ngFor="let view of cameraViews" (click)="setCameraView(view)">{{ view }}</button>
      <button (click)="zoomToFit()">Zoom Fit</button>
      <button (click)="undo()">Undo</button>
      <button (click)="redo()">Redo</button>
      <button (click)="clearAll()">Clear All</button>
      <button (click)="setPage('viewer')">Inspection</button>
      <button (click)="setPage('analytics')">Analytics</button>
      <span>Defects: {{ defects.length }} · Parts: {{ parts.length }}</span>
    </nav>
    <div class="workspace">
      <aside class="scenario-menu" [class.collapsed]="!scenarioMenuOpen">
        <button class="menu-collapse-btn" type="button"
          [attr.aria-expanded]="scenarioMenuOpen"
          [attr.aria-label]="scenarioMenuOpen ? 'Collapse scenario menu' : 'Expand scenario menu'"
          (click)="scenarioMenuOpen = !scenarioMenuOpen">{{ scenarioMenuOpen ? '‹' : '›' }}</button>
        <div *ngIf="scenarioMenuOpen" class="scenario-menu-content">
        <h2>Demo scenarios</h2>
        <details *ngFor="let asset of modelLibrary" open>
          <summary>{{ asset.label }}</summary>
          <button
            *ngFor="let item of asset.scenarios"
            [class.active]="activeLabel === asset.label + ' — ' + item.label"
            (click)="startDemo(asset, item)"
          >{{ item.label }} <small *ngIf="item.badge">{{ item.badge }}</small></button>
        </details>
        <details open>
          <summary>Custom model</summary>
          <label class="upload-button">Upload new model <input type="file" accept=".glb,.gltf" (change)="selectFile($event)"></label>
          <button *ngIf="file" (click)="startUploadedDemo()">Open {{ file.name }}</button>
        </details>
        <p *ngIf="error && !modelUrl" role="alert">{{ error }}</p>
        </div>
      </aside>
    <main *ngIf="modelUrl">
      <section class="viewer">
        <lib-warning-viewer
          [modelUrl]="modelUrl"
          [defects]="defects"
          [partsVisibility]="partsVisibility"
          [selectionOptions]="selectionOptions"
          [locale]="'en'"
          (defectsChange)="onDefectsChanged($event)"
          (modelLoaded)="onModelLoaded($event)"
          (modelLoadError)="onModelLoadError($event)"
          (snapshotReport)="onSnapshotReport($event)"
        />
      </section>
      <aside *ngIf="showDetails && page === 'viewer'" class="viewer-details">
        <p *ngIf="error" role="alert">{{ error }}</p>
        <h2>Parts Visibility</h2>
        <label *ngFor="let part of parts">
          <input type="checkbox" [checked]="visible(part.name)" (change)="togglePart(part.name, $any($event.target).checked)">
          {{ part.name }}
        </label>
        <h2>Defects ({{ defects.length }})</h2>
        <p *ngIf="!defects.length">Click on the model to add defects.</p>
        <ul><li *ngFor="let defect of defects">{{ defect.metadata?.['optionLabel'] || defect.label }} — {{ defect.meshName }} <button (click)="removeDefect(defect.id)">Remove</button></li></ul>
        <h2>Snapshots ({{ reports.length }})</h2>
        <div *ngFor="let report of reports" class="report">
          <img *ngFor="let image of report.images" [src]="image.dataUri" [alt]="image.view">
        </div>
      </aside>
      <aside *ngIf="page === 'analytics'" class="analytics-panel">
        <div class="analytics-summary"><span>Total warnings</span><strong>{{ defects.length }}</strong><small>{{ componentStats.length }} affected components</small></div>
        <h2>Warnings by type</h2>
        <p *ngIf="!typeStats.length">No warnings recorded.</p>
        <div *ngFor="let item of typeStats" class="stat-row">
          <div><span>{{ item.label }}</span><strong>{{ item.count }}</strong></div>
          <div class="stat-track"><span [style.width.%]="item.count / maxCount(typeStats) * 100"></span></div>
        </div>
        <h2>Surface heat map</h2>
        <div class="heat-legend"><span>Low</span><i></i><span>High</span></div>
        <div *ngFor="let item of componentStats" class="heat-row"><span>{{ item.label }}</span><strong>{{ item.count }}</strong></div>
      </aside>
    </main>
    <main *ngIf="!modelUrl" class="demo-setup">
      <h2>Inspection workspace</h2>
      <p>Select a preset scenario from the left menu or upload a GLB model.</p>
    </main>
    </div>
  `,
  styles: [`
    /* Import shared demo shell styles */
    @import '../../../assets/demo-shell.css';
    
    :host { display:flex; height:100vh; flex-direction:column; background:#1a1a2e; color:#e0e0e0; font:14px Arial,sans-serif }
    header, nav { padding:12px 20px; background:#16213e } h1 { margin:0; font-size:20px } h1 span { color:#dd0031; font-size:14px }
    nav { display:flex; flex-wrap:wrap; align-items:center; gap:8px; background:#0f3460 }
    button { padding:6px 12px; cursor:pointer; color:#e0e0e0; background:#1a1a2e; border:1px solid #533483; border-radius:4px }
    nav span { margin-left:auto } main { display:flex; flex:1; min-height:0 } .viewer { flex:1; min-width:0 }
    lib-warning-viewer { display:block; width:100%; height:100% } aside { width:300px; overflow:auto; padding:16px; border-left:1px solid #0f3460 }
    h2 { margin:14px 0 8px; font-size:14px } aside label { display:block; margin:6px 0 } .report { display:grid; grid-template-columns:repeat(2,1fr); gap:4px }
    .report img { width:100% }
    .workspace { display:flex; flex:1; min-height:0; overflow:hidden }
    .scenario-menu { width:230px; flex-shrink:0; border-right:1px solid #0f3460; position:relative; padding-top:46px; }
    .scenario-menu.collapsed { width:48px; padding:8px; }
    .scenario-menu-content { display:flex; flex-direction:column; gap:14px }
    .scenario-menu details { display:flex; flex-direction:column; gap:5px }
    .scenario-menu summary { font-size:13px; margin:4px 0; cursor:pointer; font-weight:600 }
    .scenario-menu button { display:flex; justify-content:space-between; text-align:left }
    .scenario-menu button.active { border-color:#e94560; color:#e94560 }
    .scenario-menu small { font-size:10px; color:#e94560; text-transform:uppercase }
    .upload-button input { display:none }
    .upload-button { padding:9px 10px; border:1px dashed #533483; border-radius:4px; color:#e94560; cursor:pointer; text-align:center }
    .menu-collapse-btn { position:absolute; top:8px; right:8px; width:32px; height:32px; padding:0; justify-content:center !important; align-items:center }
    .demo-setup { display:flex; flex:1; flex-direction:column; align-items:flex-start; gap:18px; padding:32px }
    .demo-setup label { display:flex; flex-direction:column; gap:8px }
    .demo-setup select, .demo-setup input { padding:8px; max-width:100% }
    .analytics-panel { display:flex; flex-direction:column; gap:14px }
    .analytics-summary { display:grid; gap:4px; padding:18px; border:1px solid #533483; border-radius:8px; background:#16213e }
    .analytics-summary strong { color:#e94560; font-size:28px }
    .stat-row { display:grid; gap:5px }
    .stat-row > div:first-child { display:flex; justify-content:space-between }
    .stat-track { height:6px; overflow:hidden; background:#0f3460; border-radius:999px }
    .stat-track span { display:block; height:100%; background:#e94560 }
    .heat-legend { display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:8px }
    .heat-legend i { height:8px; border-radius:999px; background:linear-gradient(90deg,#2563eb,#ef4444) }
    .heat-row { display:flex; justify-content:space-between; gap:10px; padding:6px 8px; background:#16213e; border-radius:4px }
    @media (max-width:1024px) { aside { width:280px } }
    @media (max-width:768px) {
      header, nav { padding:8px 12px }
      h1 { font-size:16px }
      nav { flex-wrap:nowrap; overflow-x:auto; -webkit-overflow-scrolling:touch }
      button { white-space:nowrap }
      main { flex-direction:column }
      .workspace { flex-direction:column; overflow:auto }
      .scenario-menu { width:100%; max-height:42vh; border-right:0; border-bottom:1px solid #0f3460 }
      .scenario-menu.collapsed { width:100%; min-height:48px; max-height:48px; padding:8px 12px }
      .viewer { min-height:48vh; min-height:48dvh }
      aside { width:100%; border-left:none; border-top:1px solid #0f3460; max-height:48vh; max-height:48dvh }
      .demo-setup { padding:20px 16px }
    }
  `],
})
export class AppComponent implements OnDestroy {
  @ViewChild(WarningViewerComponent) private viewer?: WarningViewerComponent;
  constructor(private readonly zone: NgZone) {}

  modelUrl = '';
  model = MODEL_LIBRARY[0].id;
  readonly modelLibrary = MODEL_LIBRARY;
  activeScenario: ScenarioKind = 'empty';
  activeLabel = 'Demo';
  page: 'viewer' | 'analytics' = 'viewer';
  pendingWarningCount = 0;
  activeModelId: string | null = null;
  retryingModelFallback = false;
  file: File | null = null;
  error = '';
  readonly cameraViews = ['Front', 'Back', 'Left', 'Right', 'Top', 'Bottom'];
  readonly selectionOptions: SelectionOption[] = [
    { id: 'scratch', label: 'Scratch', severity: 'warning' },
    { id: 'dent', label: 'Dent', severity: 'error' },
    { id: 'rust', label: 'Rust', severity: 'error' },
    { id: 'crack', label: 'Crack', severity: 'error' },
    { id: 'misalignment', label: 'Misalignment', severity: 'info' },
  ];
  defects: WarningDefect[] = [];
  partsVisibility: ModelPartVisibility[] = [];
  parts: ViewerPart[] = [];
  reports: SnapshotReport[] = [];
  showDetails = true;
  scenarioMenuOpen = true;

  selectFile(event: Event): void {
    this.file = (event.target as HTMLInputElement).files?.[0] ?? null;
  }

  get typeStats(): Statistic[] {
    const counts = new Map<string, number>();
    this.defects.forEach(defect => {
      const label = String(defect.metadata?.['optionLabel'] ?? defect.label ?? 'Unclassified');
      counts.set(label, (counts.get(label) ?? 0) + 1);
    });
    return [...counts].map(([label, count]) => ({ label, count }));
  }

  get componentStats(): Statistic[] {
    const counts = new Map<string, number>();
    this.defects.forEach(defect => {
      const label = defect.meshName ?? 'Unassigned';
      counts.set(label, (counts.get(label) ?? 0) + 1);
    });
    return [...counts].map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count);
  }

  async startDemo(asset: DemoModel = MODEL_LIBRARY[0], demoScenario: DemoScenario = asset.scenarios[0]): Promise<void> {
    this.error = '';
    try {
      let initial: WarningDefect[] = [];
      if (demoScenario.id === 'preset') {
        const response = await fetch(`${document.baseURI}assets/scenarios.json`);
        if (!response.ok) throw new Error(`Could not load scenarios (${response.status})`);
        const scenarios: Record<string, WarningDefect[]> = await response.json();
        initial = scenarios[asset.id] ?? [];
      }
      this.zone.run(() => {
        const nextUrl = this.buildModelUrl(asset.id, true);
        const reuseEngine = nextUrl === this.modelUrl;
        this.reports = [];
        if (reuseEngine) {
          // The engine instance is reused when only the scenario changes.
          this.viewer?.setDefects(initial);
        }
        this.model = asset.id;
        this.activeModelId = asset.id;
        this.retryingModelFallback = false;
        this.pendingWarningCount = initial.length === 0 ? (demoScenario.warningCount ?? 0) : 0;
        this.defects = initial;
        if (!reuseEngine) {
          this.parts = [];
          this.partsVisibility = [];
        }
        this.activeScenario = demoScenario.id;
        this.activeLabel = `${asset.label} — ${demoScenario.label}`;
        this.page = 'viewer';
        this.modelUrl = nextUrl;
        if (reuseEngine && this.pendingWarningCount > 0 && this.viewer) {
          this.viewer.addDistributedWarnings(this.pendingWarningCount);
          this.pendingWarningCount = 0;
        }
      });
    } catch (error) {
      this.zone.run(() => { this.error = String(error); });
    }
  }

  startUploadedDemo(): void {
      if (!this.file) {
        this.error = 'Choose a GLB file first.';
        return;
      }
      this.pendingWarningCount = 0;
      this.defects = [];
      this.parts = [];
      this.partsVisibility = [];
      this.reports = [];
      this.activeScenario = 'empty';
      this.activeModelId = null;
      this.retryingModelFallback = false;
      this.activeLabel = `${this.file.name} — Uploaded model`;
      this.page = 'viewer';
      this.modelUrl = URL.createObjectURL(this.file);
  }

  changeDemo(): void {
    if (this.modelUrl.startsWith('blob:')) URL.revokeObjectURL(this.modelUrl);
    this.modelUrl = '';
    this.activeModelId = null;
    this.retryingModelFallback = false;
    this.error = '';
    this.page = 'viewer';
  }

  ngOnDestroy(): void { this.changeDemo(); }
  onModelLoadError(error: unknown): void {
    this.zone.run(() => {
      if (this.activeModelId && !this.retryingModelFallback && this.modelUrl === this.buildModelUrl(this.activeModelId, true)) {
        this.retryingModelFallback = true;
        this.error = '';
        this.modelUrl = this.buildModelUrl(this.activeModelId, false);
        return;
      }
      this.error = `Failed to load model: ${String(error)}`;
    });
  }
  onDefectsChanged(defects: WarningDefect[]): void { this.zone.run(() => { this.defects = defects; }); }

  onSnapshotReport(report: SnapshotReport): void {
    this.zone.run(() => { this.reports = [report]; });
  }

  onModelLoaded(parts: ViewerPart[]): void {
    this.zone.run(() => {
      this.parts = parts;
      this.partsVisibility = parts.map(part => ({ meshName: part.name, visible: true }));
      if (this.pendingWarningCount > 0) {
        this.viewer?.addDistributedWarnings(this.pendingWarningCount);
        this.pendingWarningCount = 0;
      }
    });
  }

  setPage(page: 'viewer' | 'analytics'): void {
    this.page = page;
    this.viewer?.setHeatMap(page === 'analytics');
  }

  maxCount(items: Statistic[]): number {
    return Math.max(1, ...items.map(item => item.count));
  }

  visible(name: string): boolean {
    return this.partsVisibility.find(part => part.meshName === name)?.visible ?? true;
  }

  togglePart(name: string, visible: boolean): void {
    this.partsVisibility = this.partsVisibility.map(part => part.meshName === name ? { ...part, visible } : part);
    this.viewer?.setPartVisible(name, visible);
  }

  setCameraView(view: string): void { this.viewer?.setCameraView(view); }
  zoomToFit(): void { this.viewer?.zoomToFit(); }
  undo(): void { this.viewer?.undo(); }
  redo(): void { this.viewer?.redo(); }
  removeDefect(id: string): void { this.viewer?.removeDefect(id); }
  clearAll(): void { this.viewer?.clearAllDefects(); }

  private buildModelUrl(modelId: string, useAssetsPrefix: boolean): string {
    const prefix = useAssetsPrefix ? 'assets/models' : 'models';
    return `${document.baseURI}${prefix}/${modelId}.glb`;
  }
}
