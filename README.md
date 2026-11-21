# Point of Attention UI

Libreria componenti standalone per il visualizzatore 3D dei difetti (*Point of Attention*), distribuita come package indipendenti per ciascun framework.

## Package

| Pacchetto | Ecosystem | Tipo | Nome pubblicato |
|---|---|---|---|
| `packages/core` | TypeScript/Three.js | engine core | `@point-of-attention-ui/core` |
| `packages/react` | React >=17 | wrapper | `@point-of-attention-ui/react` |
| `packages/vue` | Vue 3 | wrapper | `@point-of-attention-ui/vue` |
| `packages/angular` | Angular >=17 | wrapper | `@point-of-attention-ui/angular` |
| `packages/blazor` | .NET / Blazor | wrapper | `PointOfAttention.UI.Blazor` (NuGet) |

## Convenzione di naming

- Scope npm unico: `@point-of-attention-ui/*`
- Package NuGet: `PointOfAttention.UI.Blazor`
- Ogni wrapper dipende dal package core `@point-of-attention-ui/core`

## Script

```
npm install
npm run build
npm test
npm run pack
```
