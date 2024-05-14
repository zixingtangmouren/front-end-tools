// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-plugin-scan-useless-files',
      // the proper extensions will be added
      fileName: 'vite-plugin-scan-useless-files',
    },
  },
});
