import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: process.env.POAUI_DEMO_BASE ?? (command === 'serve' ? '/' : '/point-of-attention-ui/vue/'),
  publicDir: '../assets',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}));
