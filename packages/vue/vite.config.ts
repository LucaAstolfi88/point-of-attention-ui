import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'import-library-styles',
      generateBundle(_options, bundle) {
        const entry = Object.values(bundle).find(
          asset => asset.type === 'chunk' && asset.isEntry
        );
        if (entry?.type === 'chunk') {
          entry.code = `import './style.css';\n${entry.code}`;
        }
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PointOfAttentionVue',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@point-of-attention-ui/core',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
  },
});
