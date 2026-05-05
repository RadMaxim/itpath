// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',           // корень проекта (где лежит index.html)
  build: {
    outDir: 'dist',     // папка для собранных файлов
    rollupOptions: {
      input: './index.html',  // точка входа
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});