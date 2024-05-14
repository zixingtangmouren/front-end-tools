import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import scanUselessFiles from 'vite-plugin-scan-useless-files';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    scanUselessFiles({
      targetDir: __dirname,
    }),
  ],
});
