# Quick Start Guide

Get up and running with Point of Attention UI in minutes. This guide will walk you through installing the library and creating your first defect inspection application.

## Prerequisites

Before you begin, ensure you have:
- Node.js 16+ installed
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Basic knowledge of your chosen framework (React, Vue, Angular, or Blazor)

## Installation

### For Web Frameworks (React, Vue, Angular)

1. Create a new project or navigate to your existing project directory
2. Install the core package and your framework wrapper:

```bash
# For React
npm install @point-of-attention-ui/core @point-of-attention-ui/react

# For Vue
npm install @point-of-attention-ui/core @point-of-attention-ui/vue

# For Angular
npm install @point-of-attention-ui/core @point-of-attention-ui/angular
```

### For Blazor

Add the NuGet package to your Blazor project:
```xml
<PackageReference Include="PointOfAttention.UI.Blazor" Version="1.0.0" />
```

## Your First Component

### React Example

```jsx
import React, { useState } from 'react';
import { WarningViewer } from '@point-of-attention-ui/react';
import '@point-of-attention-ui/core/point-of-attention-ui.css';

function DefectInspector() {
  const [defects, setDefects] = useState([]);
  const [modelUrl] = useState('path/to/your/model.glb');

  const selectionOptions = [
    { id: 'scratch', label: 'Scratch', severity: 'warning' },
    { id: 'dent', label: 'Dent', severity: 'error' },
    { id: 'rust', label: 'Rust', severity: 'error' },
  ];

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <WarningViewer
        modelUrl={modelUrl}
        defects={defects}
        selectionOptions={selectionOptions}
        onDefectsChange={setDefects}
        locale="en"
      />
    </div>
  );
}

export default DefectInspector;
```

### Vue Example

```vue
<template>
  <div style="width: 100%; height: 600px;">
    <WarningViewer
      :model-url="modelUrl"
      :defects="defects"
      :selection-options="selectionOptions"
      @defects-change="handleDefectsChange"
      locale="en"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { WarningViewer } from '@point-of-attention-ui/vue';
import '@point-of-attention-ui/core/point-of-attention-ui.css';

const defects = ref([]);
const modelUrl = ref('path/to/your/model.glb');

const selectionOptions = [
  { id: 'scratch', label: 'Scratch', severity: 'warning' },
  { id: 'dent', label: 'Dent', severity: 'error' },
  { id: 'rust', label: 'Rust', severity: 'error' },
];

function handleDefectsChange(newDefects) {
  defects.value = newDefects;
}
</script>
```

### Angular Example

```typescript
import { Component } from '@angular/core';
import { WarningViewerComponent } from '@point-of-attention-ui/angular';
import { WarningDefect } from '@point-of-attention-ui/core';

@Component({
  selector: 'app-defect-inspector',
  template: `
    <div style="width: 100%; height: 600px;">
      <lib-warning-viewer
        [modelUrl]="modelUrl"
        [defects]="defects"
        [selectionOptions]="selectionOptions"
        (defectsChange)="onDefectsChange($event)"
        locale="en">
      </lib-warning-viewer>
    </div>
  `,
  imports: [WarningViewerComponent]
})
export class DefectInspectorComponent {
  modelUrl = 'path/to/your/model.glb';
  defects: WarningDefect[] = [];

  selectionOptions = [
    { id: 'scratch', label: 'Scratch', severity: 'warning' },
    { id: 'dent', label: 'Dent', severity: 'error' },
    { id: 'rust', label: 'Rust', severity: 'error' },
  ];

  onDefectsChange(defects: WarningDefect[]) {
    this.defects = defects;
  }
}
```

### Blazor Example

```razor
@page "/defect-inspector"
@using PointOfAttention.UI.Blazor

<div style="width: 100%; height: 600px;">
    <WarningViewer 
        ModelUrl="@modelUrl"
        Defects="@defects"
        SelectionOptions="@selectionOptions"
        DefectsChanged="OnDefectsChanged"
        Locale="locale" />
</div>

@code {
    private string modelUrl = "path/to/your/model.glb";
    private List<WarningDefect> defects = new();
    
    private readonly ViewerLocale locale = new() { 
        ModalTitle = "Select defect", 
        ModalPartLabel = "Part:", 
        ModalCancel = "Cancel" 
    };

    private readonly List<SelectionOption> selectionOptions = new()
    {
        new() { Id = "scratch", Label = "Scratch", Severity = "warning" },
        new() { Id = "dent", Label = "Dent", Severity = "error" },
        new() { Id = "rust", Label = "Rust", Severity = "error" },
    };

    private void OnDefectsChanged(List<WarningDefect> newDefects)
    {
        defects = newDefects;
        StateHasChanged();
    }
}
```

## Preparing Your 3D Model

Ensure your 3D model meets our [requirements](models/requirements.md):

1. Convert to GLB format for optimal performance
2. Ensure proper UV mapping on all surfaces
3. Name individual mesh components appropriately
4. Optimize polygon count for your target platform

## Running Your Application

### Development Server

For web frameworks:
```bash
npm start
# or
npm run dev
```

For Blazor:
```bash
dotnet run
```

Visit `http://localhost:XXXX` in your browser to see your defect inspector in action.

## Interacting with the Viewer

1. **Rotate Model**: Click and drag to rotate the 3D model
2. **Zoom**: Scroll wheel or pinch gesture
3. **Pan**: Right-click and drag or two-finger drag
4. **Mark Defects**: Click on any surface to open the defect selection modal
5. **Inspect Defects**: Click on defect markers to view details
6. **Generate Reports**: Defect changes automatically generate snapshot reports

## Next Steps

- Explore [customization options](customization/styling.md) to match your brand
- Learn about [advanced features](features/advanced.md) like heat maps and analytics
- Check out our [API reference](api/engine.md) for complete documentation
- Review [best practices](best-practices.md) for optimal performance

## Need Help?

If you encounter any issues:
1. Check the [troubleshooting guide](troubleshooting.md)
2. Review the [FAQ](faq.md)
3. [Submit an issue](https://github.com/LucaAstolfi88/point-of-attention-ui/issues) on GitHub

Happy coding with Point of Attention UI!