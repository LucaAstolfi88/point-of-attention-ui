import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.POAUI_DEMO_BASE ?? (command === 'serve' ? '/' : '/point-of-attention-ui/react/'),
  publicDir: '../assets',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}));
