# Point of Attention UI

Standalone component library for the 3D defect viewer (*Point of Attention*), distributed as independent packages for each framework.

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-orange?style=flat-square&logo=buy-me-a-coffee)](https://buymeacoffee.com/lucaastolfi88)

## Use cases

Point of Attention UI lets operators mark, review and report defects directly on a 3D model of the product. Typical uses:

- **Production defect tracking** on the shop floor, with defects linked to the exact location on the part.
- **Manufacturing Execution Systems (MES)** integration, where defect records and snapshot reports feed production quality data.
- **Used-object inspection**: record defects, scratches or alterations on a used item when it is bought or returned, with photographic snapshots as evidence.
- **Visual inspection and quality control** workflows that need auditable, repeatable defect documentation.

## Packages

| Package | Ecosystem | Type | Published name |
|---|---|---|---|
| `packages/core` | TypeScript/Three.js | engine core | `@point-of-attention-ui/core` |
| `packages/react` | React >=17 | wrapper | `@point-of-attention-ui/react` |
| `packages/vue` | Vue 3 | wrapper | `@point-of-attention-ui/vue` |
| `packages/angular` | Angular >=17 | wrapper | `@point-of-attention-ui/angular` |
| `packages/blazor` | .NET / Blazor | wrapper | `PointOfAttention.UI.Blazor` (NuGet) |

## Naming convention

- Single npm scope: `@point-of-attention-ui/*`
- NuGet package: `PointOfAttention.UI.Blazor`
- Each wrapper depends on the `@point-of-attention-ui/core` package

## Scripts

```
npm install
npm run build
npm test
npm run pack
```

## Build, test and run the demos

From PowerShell, run:

```powershell
.\scripts\run-demos.ps1
```

The script installs dependencies, builds the core and the selected stacks, runs the tests and starts each demo in a separate window. React, Vue, Angular and Blazor use ports 4173, 4174, 4200 and 5175 respectively.

To limit the stacks or skip individual steps:

```powershell
.\scripts\run-demos.ps1 -Stack React,Vue
.\scripts\run-demos.ps1 -SkipInstall -SkipTests
.\scripts\run-demos.ps1 -NoStart
```

Equivalent via npm:

```powershell
npm run demos
```

## Documentation

See the [`docs/`](docs/README.md) folder for the full documentation (quick start, API reference, styling and features).

## License

See [LICENSE](LICENSE).
