# WarningViewerEngine API Reference

The `WarningViewerEngine` is the core class that powers Point of Attention UI. This reference documents all public methods, properties, and events available in the engine.

## Constructor

```typescript
new WarningViewerEngine(container: HTMLElement, options: WarningViewerOptions)
```

Creates a new instance of the 3D defect viewer engine.

### Parameters

- `container`: HTML element that will host the 3D viewer
- `options`: Configuration options for the viewer

### Example

```typescript
const container = document.getElementById('viewer-container');
const engine = new WarningViewerEngine(container, {
  modelUrl: 'path/to/model.glb',
  defects: [],
  partsVisibility: [],
  onDefectsChanged: (defects) => console.log('Defects updated:', defects),
  onModelLoaded: (parts) => console.log('Model loaded:', parts),
  onModelLoadError: (error) => console.error('Load error:', error),
  onSnapshotReport: (report) => console.log('Snapshot report:', report)
});
```

## Properties

### isModelLoading
```typescript
readonly isModelLoading: boolean
```
Indicates whether a model is currently loading.

### isModelLoaded
```typescript
readonly isModelLoaded: boolean
```
Indicates whether a model has been successfully loaded.

## Methods

### setDefects
```typescript
setDefects(defects: WarningDefect[]): void
```
Replace the current list of defects with a new list.

#### Parameters
- `defects`: Array of defect objects to display

### getDefects
```typescript
getDefects(): WarningDefect[]
```
Returns a copy of the current defects list.

### getDefectById
```typescript
getDefectById(id: string): WarningDefect | undefined
```
Find a defect by its ID.

#### Parameters
- `id`: The unique identifier of the defect

#### Returns
The defect object if found, otherwise undefined.

### removeDefect
```typescript
removeDefect(id: string): boolean
```
Remove a defect by its ID.

#### Parameters
- `id`: The unique identifier of the defect to remove

#### Returns
True if the defect was found and removed, false otherwise.

### updateDefect
```typescript
updateDefect(id: string, changes: Partial<WarningDefect>): boolean
```
Update properties of an existing defect.

#### Parameters
- `id`: The unique identifier of the defect to update
- `changes`: Partial defect object with properties to update

#### Returns
True if the defect was found and updated, false otherwise.

### clearAllDefects
```typescript
clearAllDefects(): void
```
Remove all defects from the viewer.

### addWarning
```typescript
addWarning(option: SelectionOption): WarningDefect | null
```
Add a new defect based on a selection option.

#### Parameters
- `option`: The selection option describing the defect type

#### Returns
The newly created defect object, or null if creation failed.

### setModelUrl
```typescript
setModelUrl(url: string): void
```
Load a new 3D model from the specified URL.

#### Parameters
- `url`: URL or data URI of the 3D model file (.glb/.gltf)

### setPartsVisibility
```typescript
setPartsVisibility(parts: ModelPartVisibility[]): void
```
Update the visibility of model components.

#### Parameters
- `parts`: Array of part visibility configurations

### setPartVisible
```typescript
setPartVisible(meshName: string, visible: boolean): void
```
Set the visibility of a specific model component.

#### Parameters
- `meshName`: Name of the mesh/component
- `visible`: Whether the component should be visible

### getParts
```typescript
getParts(): ViewerPart[]
```
Get information about all model components.

#### Returns
Array of viewer part objects with name and visibility status.

### setCameraView
```typescript
setCameraView(direction: string): void
```
Position the camera to a predefined view.

#### Parameters
- `direction`: One of 'front', 'back', 'left', 'right', 'top', 'bottom'

### zoomToFit
```typescript
zoomToFit(): void
```
Adjust camera to fit the entire model in view.

### flyToDefect
```typescript
flyToDefect(id: string): void
```
Animate the camera to focus on a specific defect.

#### Parameters
- `id`: The unique identifier of the defect to focus on

### undo
```typescript
undo(): void
```
Revert the last defect-related action.

### redo
```typescript
redo(): void
```
Reapply the last undone defect-related action.

### setHeatMap
```typescript
setHeatMap(enabled: boolean): void
```
Enable or disable the heat map visualization.

#### Parameters
- `enabled`: Whether to show the heat map

### addDistributedWarnings
```typescript
addDistributedWarnings(count: number): WarningDefect[]
```
Automatically distribute a specified number of defects across the model.

#### Parameters
- `count`: Number of defects to generate

#### Returns
Array of newly created defect objects.

### generateSnapshotReport
```typescript
generateSnapshotReport(): SnapshotReport
```
Generate a snapshot report from the current view.

#### Returns
Snapshot report containing images from multiple camera angles.

### setReadOnly
```typescript
setReadOnly(readOnly: boolean): void
```
Enable or disable read-only mode.

#### Parameters
- `readOnly`: Whether to enable read-only mode

### setHighlightMode
```typescript
setHighlightMode(enabled: boolean): void
```
Enable or disable highlight mode for model components.

#### Parameters
- `enabled`: Whether to enable highlight mode

### dispose
```typescript
dispose(): void
```
Clean up resources and remove event listeners. Call this when destroying the viewer.

## Events

The engine emits various events during operation. These are configured through the `WarningViewerOptions`:

### onDefectsChanged
```typescript
onDefectsChanged?: (defects: WarningDefect[]) => void
```
Called whenever the defect list changes (add/remove/update).

### onModelLoaded
```typescript
onModelLoaded?: (parts: ViewerPart[]) => void
```
Called after the model and its parts are loaded.

### onModelLoadError
```typescript
onModelLoadError?: (error: unknown) => void
```
Called when the model fails to load.

### onSnapshotReport
```typescript
onSnapshotReport?: (report: SnapshotReport) => void
```
Called automatically after every defect add/change with the full snapshot report.

### onSelectionRequest
```typescript
onSelectionRequest?: (request: SelectionRequest) => void
```
Called when a mesh is clicked/tapped to request defect selection.

## Types

### WarningViewerOptions
```typescript
interface WarningViewerOptions {
  modelUrl: string;
  defects?: WarningDefect[];
  partsVisibility?: ModelPartVisibility[];
  backgroundColor?: number;
  markerShape?: MarkerShape;
  palette?: DefectPalette;
  rayLength?: number;
  pulseOnSelect?: boolean;
  onSelectionRequest?: (request: SelectionRequest) => void;
  getSelectionOptions?: () => SelectionOption[];
  onDefectsChanged?: (defects: WarningDefect[]) => void;
  onModelLoaded?: (parts: ViewerPart[]) => void;
  onModelLoadError?: (error: unknown) => void;
  onSnapshotReport?: (report: SnapshotReport) => void;
}
```

### WarningDefect
```typescript
interface WarningDefect {
  id: string;
  label?: string;
  meshName?: string;
  position?: Vec3;
  orientation?: Vec3;
  cameraPosition?: Vec3;
  cameraQuaternion?: Quat;
  severity?: Severity;
  metadata?: Record<string, unknown>;
}
```

### SelectionOption
```typescript
interface SelectionOption {
  id: string;
  label: string;
  severity?: Severity;
}
```

### SelectionRequest
```typescript
interface SelectionRequest {
  id: string;
  meshName: string | null;
  point: Vec3;
  normal: Vec3;
  cameraPosition: Vec3;
  cameraQuaternion: Quat;
  options: SelectionOption[];
}
```

### SnapshotReport
```typescript
interface SnapshotReport {
  id: string;
  defects: WarningDefect[];
  images: SnapshotImage[];
  generatedAt: string;
}
```

## Usage Examples

### Basic Setup
```typescript
const container = document.getElementById('viewer');
const engine = new WarningViewerEngine(container, {
  modelUrl: 'assets/models/product.glb',
  defects: [],
  onDefectsChanged: (defects) => {
    console.log(`Now showing ${defects.length} defects`);
  },
  onModelLoaded: (parts) => {
    console.log(`Model loaded with ${parts.length} parts`);
  }
});
```

### Adding Defects Programmatically
```typescript
// Add a specific defect
const defect = engine.addWarning({
  id: 'scratch-001',
  label: 'Scratch',
  severity: 'warning'
});

// Add distributed defects
const distributedDefects = engine.addDistributedWarnings(10);
console.log(`Added ${distributedDefects.length} defects`);
```

### Controlling Model Visibility
```typescript
// Get all model parts
const parts = engine.getParts();

// Hide a specific part
engine.setPartVisible('Door_Left', false);

// Update multiple parts at once
engine.setPartsVisibility([
  { meshName: 'Door_Left', visible: false },
  { meshName: 'Door_Right', visible: true }
]);
```

### Managing Defects
```typescript
// Get current defects
const currentDefects = engine.getDefects();

// Remove a specific defect
engine.removeDefect('defect-123');

// Clear all defects
engine.clearAllDefects();

// Update a defect
engine.updateDefect('defect-456', {
  severity: 'error',
  label: 'Critical Scratch'
});
```

### Camera Controls
```typescript
// Set predefined views
engine.setCameraView('front');
engine.setCameraView('isometric');

// Zoom to fit model
engine.zoomToFit();

// Focus on specific defect
engine.flyToDefect('defect-789');
```

### Cleanup
```typescript
// When component is destroyed
engine.dispose();
```

## Best Practices

1. **Always dispose**: Call `dispose()` when removing the viewer to prevent memory leaks
2. **Batch updates**: Use `setDefects()` for bulk updates rather than multiple `addWarning()` calls
3. **Handle errors**: Implement `onModelLoadError` to gracefully handle loading failures
4. **Optimize performance**: Limit frequent calls to methods that trigger re-renders
5. **Use readonly mode**: For viewing-only scenarios, enable readonly mode to prevent accidental edits

This API provides complete control over the 3D defect inspection experience, enabling integration with any application architecture.