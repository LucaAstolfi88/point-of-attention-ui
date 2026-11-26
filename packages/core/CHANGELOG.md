# Changelog

All notable changes to `@point-of-attention-ui/core` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-26

First release of the framework-agnostic 3D defect viewer engine built on Three.js.

### Added

- `WarningViewerEngine`: loads GLB/GLTF models and lets users mark defects on the model surface.
- Defect management API: add, get, update, remove and clear defects, plus undo/redo.
- Defect markers with severity levels (`info`, `warning`, `error`) and configurable marker shapes and palettes.
- Model part visibility control (`setPartsVisibility`, `setPartVisible`, `getParts`).
- Camera helpers: standard views (front, back, left, right, top, bottom), `zoomToFit` and `flyToDefect`.
- Highlight mode, heat map mode and read-only mode.
- Snapshot capture (`captureSnapshot`, `generateCameraImages`) and snapshot report generation (`generateSnapshotReport`).
- Built-in UI localisation (`it`, `en`) that can be overridden per locale.
- ES module build (`dist/index.js`), UMD build (`dist/point-of-attention-ui.core.umd.js`), TypeScript declarations and stylesheet (`dist/point-of-attention-ui.css`).
