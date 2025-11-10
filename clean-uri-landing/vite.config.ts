import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server:
    mode === 'development'
      ? {
          proxy: {
            '/api/shorten': {
              target: 'https://cleanuri.com/api/v1',
              changeOrigin: true,
              rewrite: path => path.replace(/^\/api\/shorten/, '/shorten'),
            },
          },
        }
      : undefined,
}));
