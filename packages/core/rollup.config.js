import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** Shared external list */
const external = (id) => id === 'three' || id.startsWith('three/');

export default [
  // ── ESM bundle (npm package consumers) ──
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    external,
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
  // ── UMD bundle (Blazor / CDN consumers) ──
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/point-of-attention-ui.core.umd.js',
      format: 'umd',
      name: 'PointOfAttentionUiCore',
      globals: { three: 'THREE' },
      exports: 'named',
      sourcemap: true,
    },
    plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.json' })],
  },
];
