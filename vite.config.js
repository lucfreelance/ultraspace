import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ico-loader',
      enforce: 'pre',
      transform(src, id) {
        if (id.endsWith('.ico')) {
          return `export default import.meta.ROLLUP_FILE_URL_${this.emitFile({
            type: 'asset',
            source: src,
          })}`;
        }
      },
    },
  ],
  build: {
    // Otras configuraciones de construcción aquí...
  },
});
