# Point of Attention UI Documentation

Welcome to the official documentation for Point of Attention UI, a framework-agnostic 3D defect viewer library for visual inspection workflows.

## Table of Contents

- [Overview](#overview)
- [Quick Start](quickstart.md)
- [Installation](#installation)
- [Core Concepts](#core-concepts)
- [Features Overview](features/overview.md)
- [API Reference](#api-reference)
- [Framework Integration](#framework-integration)
- [3D Model Requirements](models/requirements.md)
- [Customization](#customization)
- [Best Practices](#best-practices)

## Overview

Point of Attention UI is a powerful library that enables developers to integrate interactive 3D defect marking capabilities into their applications. It provides a consistent API across multiple frameworks including React, Vue, Angular, and Blazor.

Key features include:
- Interactive 3D model visualization
- Defect marking with customizable markers
- Automatic snapshot generation
- Multi-framework support
- Responsive design for desktop and mobile
- Touch-friendly interface
- Heat map visualization
- Collaboration tools
- Reporting capabilities
- Mobile optimization

## Getting Started

To get started with Point of Attention UI, check out our [Installation Guide](installation.md) and [Quick Start](quickstart.md) documentation.

## Installation

Point of Attention UI is available as separate packages for each framework:

### Core Package
```bash
npm install @point-of-attention-ui/core
```

### Framework Wrappers
```bash
# React
npm install @point-of-attention-ui/react

# Vue
npm install @point-of-attention-ui/vue

# Angular
npm install @point-of-attention-ui/angular
```

### Blazor
For Blazor applications, install the NuGet package:
```
Install-Package PointOfAttention.UI.Blazor
```

## Core Concepts

Understanding the core concepts will help you make the most of Point of Attention UI:

### 1. 3D Model Visualization
The library loads and displays 3D models in GLB/GLTF format, allowing users to interact with and inspect the model from all angles.

### 2. Defect Marking
Users can click/tap on the model surface to mark defects. The library provides a modal interface for selecting defect types and severities.

### 3. Snapshot Generation
Automatic generation of inspection snapshots from multiple camera angles for documentation and reporting.

### 4. Part Visibility Control
Control the visibility of individual model components for focused inspection.

## API Reference

For detailed API documentation, see:
- [WarningViewerEngine API](api/engine.md)
- [Component Props/Attributes](api/components.md)
- [Events and Callbacks](api/events.md)

## Framework Integration

Learn how to integrate Point of Attention UI with your preferred framework:
- [React Integration](frameworks/react.md)
- [Vue Integration](frameworks/vue.md)
- [Angular Integration](frameworks/angular.md)
- [Blazor Integration](frameworks/blazor.md)

## 3D Model Requirements

For optimal performance and defect marking accuracy, your 3D models should meet specific requirements. See [3D Model Requirements](models/requirements.md) for detailed specifications.

## Customization

Point of Attention UI offers extensive customization options:
- [Styling Guide](customization/styling.md)
- [Marker Shapes](customization/markers.md)
- [Color Palettes](customization/colors.md)
- [Localization](customization/localization.md)

## Best Practices

Follow our [Best Practices](best-practices.md) guide to ensure optimal performance and user experience.

## Support

If you encounter any issues or have questions, please check our [Troubleshooting Guide](troubleshooting.md) or [submit an issue](https://github.com/LucaAstolfi88/point-of-attention-ui/issues) on GitHub.

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-orange?style=flat-square&logo=buy-me-a-coffee)](https://buymeacoffee.com/lucaastolfi88)

Happy coding!