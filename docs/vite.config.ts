import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';

export default defineConfig({
  server: {
    host: true,
    open: false,
  },
  build: {
    rollupOptions: {
      // fix vitepress to build appear error for import node packages
      external: ['path', 'fs'],
      plugins: [
        alias({
          // deal with package mapping problem
          entries: [{ find: '@flypeng/tool/browser', replacement: '../dist/browser/index.esm.js' }],
        }),
      ],
    },
  },
});
