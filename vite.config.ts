import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // База для GitHub Pages проекта в репозитории "face2face"
  base: '/face2face/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
