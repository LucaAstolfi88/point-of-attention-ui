import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ModelPartVisibility,
  SelectionOption,
  SelectionRequest,
  SnapshotReport,
  ViewerPart,
  WarningDefect,
  WarningViewerEngine,
  WarningViewerLocale,
  resolveLocale,
} from '@point-of-attention-ui/core';

@Component({
  selector: 'lib-warning-viewer',
  standalone: true,
  template: `
    <div #container class="warning-viewer"></div>
    @if (selection) {
      <div class="warning-modal-backdrop" role="dialog" aria-modal="true" (click)="cancelSelection()">
        <div class="warning-modal" (click)="$event.stopPropagation()">
          <h3 class="warning-modal-title">{{ resolvedLocale.modal.title }}</h3>
          @if (selection.meshName) {
            <p>{{ resolvedLocale.modal.partLabel }} {{ selection.meshName }}</p>
          }
          <div class="warning-modal-options">
            @for (option of selection.options; track option.id) {
              <button type="button" (click)="confirmSelection(option)">{{ option.label }}</button>
            }
          </div>
          <button type="button" class="warning-modal-cancel" (click)="cancelSelection()">
            {{ resolvedLocale.modal.cancel }}
          </button>
        </div>
      </div>
    }
  `,
  styles: [`
    :host, .warning-viewer { display: block; width: 100%; height: 100%; position: relative; }
  `],
})
export class WarningViewerComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) modelUrl = '';
  @Input() defects: WarningDefect[] = [];
  @Input() partsVisibility: ModelPartVisibility[] = [];
  @Input() selectionOptions: SelectionOption[] = [];
  @Input() locale: string | WarningViewerLocale = 'it';
  @Input() backgroundColor?: number;

  @Output() defectsChange = new EventEmitter<WarningDefect[]>();
  @Output() modelLoaded = new EventEmitter<ViewerPart[]>();
  @Output() modelLoadError = new EventEmitter<unknown>();
  @Output() snapshotReport = new EventEmitter<SnapshotReport>();

  @ViewChild('container') private container?: ElementRef<HTMLDivElement>;

  selection: SelectionRequest | null = null;
  private engine?: WarningViewerEngine;

  get resolvedLocale(): WarningViewerLocale {
    return resolveLocale(this.locale);
  }

  ngAfterViewInit(): void {
    this.engine = new WarningViewerEngine(this.container!.nativeElement, {
      modelUrl: this.modelUrl,
      defects: this.defects,
      partsVisibility: this.partsVisibility,
      backgroundColor: this.backgroundColor,
      getSelectionOptions: () => this.selectionOptions,
      onSelectionRequest: request => { this.selection = request; },
      onDefectsChanged: defects => this.defectsChange.emit(defects),
      onModelLoaded: parts => this.modelLoaded.emit(parts),
      onModelLoadError: error => this.modelLoadError.emit(error),
      onSnapshotReport: report => this.snapshotReport.emit(report),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.engine) return;
    if (changes['modelUrl'] && !changes['modelUrl'].firstChange) {
      this.engine.setModelUrl(this.modelUrl);
    }
    if (changes['defects']) this.engine.setDefects(this.defects);
    if (changes['partsVisibility']) this.engine.setPartsVisibility(this.partsVisibility);
  }

  confirmSelection(option: SelectionOption): void {
    this.engine?.addWarning(option);
    this.selection = null;
  }

  cancelSelection(): void {
    this.engine?.cancelSelection();
    this.selection = null;
  }

  setDefects(defects: WarningDefect[]): void { this.engine?.setDefects(defects); }
  addDistributedWarnings(count: number): void { this.engine?.addDistributedWarnings(count); }
  setPartVisible(name: string, visible: boolean): void { this.engine?.setPartVisible(name, visible); }
  setCameraView(view: string): void { this.engine?.setCameraView(view); }
  setHeatMap(enabled: boolean): void { this.engine?.setHeatMap(enabled); }
  zoomToFit(): void { this.engine?.zoomToFit(); }
  undo(): void { this.engine?.undo(); }
  redo(): void { this.engine?.redo(); }
  removeDefect(id: string): void { this.engine?.removeDefect(id); }
  clearAllDefects(): void { this.engine?.clearAllDefects(); }

  ngOnDestroy(): void {
    this.engine?.dispose();
    this.engine = undefined;
  }
}
