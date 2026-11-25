import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

/** Shared external list */
const external = (id) => id === 'three' || id.startsWith('three/');

// Treeshaking options
const treeshake = {
  moduleSideEffects: false,
  propertyReadSideEffects: false,
  tryCatchDeoptimization: false
};

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
    treeshake,
    plugins: [
      typescript({ 
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationMap: true
      }),
      terser({
        compress: {
          passes: 2,
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.debug', 'console.info']
        },
        mangle: {
          properties: {
            regex: /^_[^_]/,
          }
        },
        output: {
          comments: false
        }
      })
    ],
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
    treeshake,
    plugins: [
      nodeResolve(), 
      typescript({ tsconfig: './tsconfig.json' }),
      terser({
        compress: {
          passes: 2,
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.debug', 'console.info']
        },
        mangle: {
          properties: {
            regex: /^_[^_]/,
          }
        },
        output: {
          comments: false
        }
      })
    ],
  },
];
