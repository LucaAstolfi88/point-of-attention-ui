import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningViewerComponent } from '@point-of-attention-ui/angular';
import { AppComponent } from './app.component';

/* Mock the real 3D viewer — Three.js/WebGL cannot run in the Karma
   headless browser, and the app only needs to verify layout wiring. */
@Component({
  selector: 'lib-warning-viewer',
  standalone: true,
  template: '<div class="warning-viewer-mock"></div>',
})
class MockWarningViewerComponent {
  @Input() modelUrl!: string;
  @Input() defects: unknown[] = [];
  @Input() partsVisibility: unknown[] = [];
  @Input() selectionOptions: unknown[] = [];
  @Input() locale: unknown;
  @Input() backgroundColor: unknown;
  @Output() defectsChange = new EventEmitter<unknown[]>();
  @Output() modelLoaded = new EventEmitter<unknown[]>();
  @Output() modelLoadError = new EventEmitter<unknown>();
  @Output() snapshotReport = new EventEmitter<unknown>();
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .overrideComponent(AppComponent, {
        remove: { imports: [WarningViewerComponent] },
        add: { imports: [MockWarningViewerComponent] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders the setup screen with preset scenario menu', () => {
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.demo-setup')).toBeTruthy();
    expect(host.querySelector('.scenario-menu')?.textContent).toContain('Muscle Car');
    expect(host.querySelector('.scenario-menu')?.textContent).toContain('Van');
    expect(host.querySelector('.scenario-menu')?.textContent).toContain('Watch');
    expect(host.querySelector('.scenario-menu input[type="file"]')).toBeTruthy();
  });

  it('opens the demo and renders the viewer and details panel', async () => {
    await component.startDemo(component.modelLibrary[0], component.modelLibrary[0].scenarios[0]);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.modelUrl).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.warning-viewer-mock')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.app-sidebar')).toBeTruthy();
  });

  it('collapses and expands the details panel', () => {
    component.modelUrl = 'assets/models/Van.glb';
    component.panelOpen = true;
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.app-sidebar .sidebar-body')).toBeTruthy();
    expect(host.querySelector('.app-sidebar--collapsed')).toBeFalsy();

    host.querySelector<HTMLButtonElement>('.panel-collapse-btn')!.click();
    fixture.detectChanges();
    expect(host.querySelector('.app-sidebar .sidebar-body')).toBeFalsy();
    expect(host.querySelector('.app-sidebar--collapsed')).toBeTruthy();
    expect(host.querySelector('.panel-collapse-btn')?.getAttribute('aria-expanded')).toBe('false');

    host.querySelector<HTMLButtonElement>('.panel-collapse-btn')!.click();
    fixture.detectChanges();
    expect(host.querySelector('.app-sidebar .sidebar-body')).toBeTruthy();
  });

  it('keeps the analytics panel collapsible', () => {
    component.modelUrl = 'assets/models/Van.glb';
    component.panelOpen = true;
    component.page = 'analytics';
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.analytics-summary')).toBeTruthy();
    expect(host.querySelector('.sidebar-header .sidebar-title')?.textContent).toContain('Analytics');

    host.querySelector<HTMLButtonElement>('.panel-collapse-btn')!.click();
    fixture.detectChanges();
    expect(host.querySelector('.analytics-summary')).toBeFalsy();
    expect(host.querySelector('.app-sidebar--collapsed')).toBeTruthy();
  });

  it('collapses and expands the scenario menu', () => {
    const host = fixture.nativeElement as HTMLElement;
    component.scenarioMenuOpen = true;
    fixture.detectChanges();
    expect(host.querySelector('.scenario-sidebar--collapsed')).toBeFalsy();

    host.querySelector<HTMLButtonElement>('.menu-collapse-btn')!.click();
    fixture.detectChanges();
    expect(component.scenarioMenuOpen).toBe(false);
    expect(host.querySelector('.scenario-sidebar--collapsed')).toBeTruthy();
    expect(host.querySelector('.menu-collapse-btn')?.getAttribute('aria-expanded')).toBe('false');
  });

  it('shows an error when opening an upload without a file', () => {
    component.startUploadedDemo();
    fixture.detectChanges();

    expect(component.error).toContain('GLB file');
    expect(component.modelUrl).toBeFalsy();
  });

  it('resets to the setup screen when changing model', () => {
    component.modelUrl = 'assets/models/Van.glb';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.demo-setup')).toBeFalsy();

    component.changeDemo();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.demo-setup')).toBeTruthy();
    expect(component.modelUrl).toBeFalsy();
  });
});
