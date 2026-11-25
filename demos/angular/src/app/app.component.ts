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

/** True on phones / narrow tablets, where the menu is a drawer and the panel a bottom sheet. */
const isCompact = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

/*
 * Layout and component styles come from the shared demo-shell.css, which is
 * registered as a global stylesheet in angular.json ("styles").
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WarningViewerComponent],
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="app-header-lead">
          <button class="icon-btn menu-toggle" type="button"
            aria-label="Toggle scenario menu" aria-controls="scenario-menu"
            [attr.aria-expanded]="scenarioMenuOpen"
            (click)="scenarioMenuOpen = !scenarioMenuOpen"><span aria-hidden="true">☰</span></button>
          <h1 class="app-title">
            <span class="app-title-text">Point of Attention — {{ modelUrl ? activeLabel : 'Demo' }}</span>
            <span class="app-badge">Angular</span>
          </h1>
        </div>
        <div class="app-header-actions">
          <button *ngIf="modelUrl" class="toolbar-btn" type="button" (click)="changeDemo()">Close demo</button>
          <a class="app-link" href="https://github.com/LucaAstolfi88/point-of-attention-ui" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </header>

      <div *ngIf="modelUrl" class="app-toolbar">
        <div class="page-tabs" role="tablist" aria-label="Viewer pages">
          <button role="tab" type="button" [attr.aria-selected]="page === 'viewer'" [class.active]="page === 'viewer'" (click)="setPage('viewer')">Inspection</button>
          <button role="tab" type="button" [attr.aria-selected]="page === 'analytics'" [class.active]="page === 'analytics'" (click)="setPage('analytics')">Analytics</button>
        </div>
        <div class="toolbar-group">
          <span class="toolbar-label">Camera:</span>
          <button *ngFor="let view of cameraViews" class="toolbar-btn" type="button" (click)="setCameraView(view)">{{ view }}</button>
          <button class="toolbar-btn toolbar-btn--accent" type="button" (click)="zoomToFit()">Zoom Fit</button>
        </div>
        <div class="toolbar-group">
          <button class="toolbar-btn" type="button" title="Undo" (click)="undo()">↩ Undo</button>
          <button class="toolbar-btn" type="button" title="Redo" (click)="redo()">↪ Redo</button>
          <button class="toolbar-btn toolbar-btn--danger" type="button" (click)="clearAll()">✕ Clear All</button>
        </div>
        <div class="toolbar-group">
          <span class="toolbar-stat">Defects: <strong>{{ defects.length }}</strong></span>
          <span class="toolbar-stat">Parts: <strong>{{ parts.length }}</strong></span>
        </div>
      </div>

      <div class="app-main">
        <button *ngIf="scenarioMenuOpen" type="button" class="drawer-backdrop"
          aria-label="Close scenario menu" (click)="scenarioMenuOpen = false"></button>

        <aside id="scenario-menu" class="scenario-sidebar" [class.scenario-sidebar--collapsed]="!scenarioMenuOpen">
          <div class="scenario-sidebar-head">
            <h2 class="sidebar-title">Demo scenarios</h2>
            <button class="menu-collapse-btn" type="button"
              [attr.aria-expanded]="scenarioMenuOpen"
              [attr.aria-label]="scenarioMenuOpen ? 'Collapse scenario menu' : 'Expand scenario menu'"
              (click)="scenarioMenuOpen = !scenarioMenuOpen"><span class="chev" aria-hidden="true">›</span></button>
          </div>
          <nav class="scenario-menu" aria-label="Demo scenarios">
            <details *ngFor="let asset of modelLibrary" class="scenario-model" open>
              <summary>{{ asset.label }}</summary>
              <button *ngFor="let item of asset.scenarios" type="button" class="scenario-button"
                [class.scenario-button--active]="activeLabel === asset.label + ' — ' + item.label"
                (click)="pickScenario(asset, item)">
                <span>{{ item.label }}</span>
                <small *ngIf="item.badge">{{ item.badge }}</small>
              </button>
            </details>
            <details class="scenario-model" open>
              <summary>Custom model</summary>
              <label class="upload-button">Upload new model
                <input type="file" accept=".glb,.gltf" (change)="selectFile($event)">
              </label>
              <button *ngIf="file" type="button" class="scenario-button" (click)="openUpload()">Open {{ file.name }}</button>
            </details>
          </nav>
          <p *ngIf="error && !modelUrl" role="alert" class="scenario-error">{{ error }}</p>
        </aside>

        <div *ngIf="modelUrl" class="app-stage">
          <div class="app-viewer">
            <div *ngIf="error" class="app-overlay app-overlay--error"><p>⚠️ {{ error }}</p></div>
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
          </div>

          <aside id="details-panel" class="app-sidebar" [class.app-sidebar--collapsed]="!panelOpen" [attr.aria-label]="panelTitle">
            <div class="sidebar-header">
              <h2 class="sidebar-title">
                {{ panelTitle }}
                <span class="sidebar-count" [attr.aria-label]="defects.length + ' defects'">{{ defects.length }}</span>
              </h2>
              <button class="panel-collapse-btn" type="button" aria-controls="details-panel"
                [attr.aria-expanded]="panelOpen"
                [attr.aria-label]="(panelOpen ? 'Collapse ' : 'Expand ') + panelTitle.toLowerCase() + ' panel'"
                (click)="panelOpen = !panelOpen"><span class="chev" aria-hidden="true">›</span></button>
            </div>

            <ng-container *ngIf="panelOpen">
              <div *ngIf="page === 'viewer'" class="sidebar-body">
                <section class="sidebar-section">
                  <h3 class="sidebar-title">Parts Visibility</h3>
                  <p *ngIf="!parts.length" class="sidebar-empty">Loading parts…</p>
                  <ul class="part-list">
                    <li *ngFor="let part of parts" class="part-item">
                      <label class="part-label">
                        <input type="checkbox" [checked]="visible(part.name)" (change)="togglePart(part.name, $any($event.target).checked)">
                        <span [class.part-label--hidden]="!visible(part.name)">{{ part.name }}</span>
                      </label>
                    </li>
                  </ul>
                </section>

                <section class="sidebar-section">
                  <h3 class="sidebar-title">Defects ({{ defects.length }})</h3>
                  <p *ngIf="!defects.length" class="sidebar-empty">Tap or click on the model to add defects.</p>
                  <ul class="defect-list">
                    <li *ngFor="let defect of defects" class="defect-item">
                      <span class="defect-severity" [ngClass]="'defect-severity--' + (defect.severity || 'error')"></span>
                      <span class="defect-label">{{ defect.metadata?.['optionLabel'] || defect.label }}</span>
                      <span class="defect-part">{{ defect.meshName }}</span>
                      <button class="defect-remove" type="button" title="Remove"
                        [attr.aria-label]="'Remove ' + (defect.metadata?.['optionLabel'] || defect.label || 'defect')"
                        (click)="removeDefect(defect.id)">✕</button>
                    </li>
                  </ul>
                </section>

                <section class="sidebar-section">
                  <h3 class="sidebar-title">
                    <button class="sidebar-toggle" type="button" [attr.aria-expanded]="showReports" (click)="showReports = !showReports">
                      Snapshots ({{ reports.length }}) {{ showReports ? '▾' : '▸' }}
                    </button>
                  </h3>
                  <ng-container *ngIf="showReports">
                    <p *ngIf="!reports.length" class="sidebar-empty">Add a defect to generate the first snapshot report.</p>
                    <div *ngFor="let report of reports" class="report-card">
                      <time class="report-time">{{ report.generatedAt | date: 'mediumTime' }}</time>
                      <div class="report-images">
                        <figure *ngFor="let image of report.images" class="report-figure">
                          <img class="report-thumb" [src]="image.dataUri" [alt]="image.view + ' view'">
                          <figcaption>{{ image.view }}</figcaption>
                        </figure>
                      </div>
                    </div>
                  </ng-container>
                </section>
              </div>

              <div *ngIf="page === 'analytics'" class="sidebar-body">
                <section class="analytics-summary">
                  <span>Total warnings</span>
                  <strong>{{ defects.length }}</strong>
                  <small>{{ componentStats.length }} affected components</small>
                </section>
                <section class="sidebar-section">
                  <h3 class="sidebar-title">Warnings by type</h3>
                  <p *ngIf="!typeStats.length" class="sidebar-empty">No warnings recorded.</p>
                  <div *ngFor="let item of typeStats" class="stat-row">
                    <div><span>{{ item.label }}</span><strong>{{ item.count }}</strong></div>
                    <div class="stat-track"><span [style.width.%]="item.count / maxCount(typeStats) * 100"></span></div>
                  </div>
                </section>
                <section class="sidebar-section">
                  <h3 class="sidebar-title">Surface heat map</h3>
                  <div class="heat-legend"><span>Low</span><i></i><span>High</span></div>
                  <div *ngFor="let item of componentStats" class="heat-row">
                    <span>{{ item.label || 'Unnamed surface' }}</span><strong>{{ item.count }}</strong>
                  </div>
                </section>
              </div>
            </ng-container>
          </aside>
        </div>

        <main *ngIf="!modelUrl" class="demo-setup">
          <h2>Inspection workspace</h2>
          <p>Select a preset scenario from the menu or upload a GLB model.</p>
          <button class="toolbar-btn toolbar-btn--accent mobile-only" type="button" (click)="scenarioMenuOpen = true">Browse scenarios</button>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    .app-badge { background: #dd0031; }
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
  showReports = false;
  // Details / analytics panel: open on desktop, collapsed bottom sheet on phones.
  panelOpen = !isCompact();
  scenarioMenuOpen = true;

  get panelTitle(): string { return this.page === 'analytics' ? 'Analytics' : 'Details'; }

  selectFile(event: Event): void {
    this.file = (event.target as HTMLInputElement).files?.[0] ?? null;
  }

  pickScenario(asset: DemoModel, scenario: DemoScenario): void {
    void this.startDemo(asset, scenario);
    if (isCompact()) this.scenarioMenuOpen = false;
  }

  openUpload(): void {
    this.startUploadedDemo();
    if (isCompact()) this.scenarioMenuOpen = false;
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
