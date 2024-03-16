import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Add other external dependencies here if needed
    },
    terserOptions: {
      compress: {
        // Exclude 'scroll-lock' from the build
        drop_console: true,
        // Add other exclusions if needed
        // ...
      },
    },
  },
});
