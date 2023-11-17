import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    open: false,
  },
  build: {
    rollupOptions: {
      // fix vitepress to build appear error for import node packages
      external: ['path', 'fs'],
    },
  },
});
