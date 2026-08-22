import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works both at a domain root and under a
// GitHub Pages project subpath (e.g. /person-website-v2/).
export default defineConfig({
  base: './',
  // Only index.html is an app entry; reference/ holds the original
  // single-file build and must stay out of the dependency scan.
  optimizeDeps: { entries: ['index.html'] },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
