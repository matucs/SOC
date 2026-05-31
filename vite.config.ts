import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/SOC/',
  plugins: [react(), tailwindcss()].flat(),

  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },

  server: {
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/app/**/*.tsx',
        './src/components/**/*.tsx',
      ],
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'zustand', 'date-fns'],
  },

  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'react';
        },
      },
    },
  },
});
