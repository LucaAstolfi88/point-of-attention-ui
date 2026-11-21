import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
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
      name: 'PointOfAttentionReact',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@point-of-attention-ui/core',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
  },
});
