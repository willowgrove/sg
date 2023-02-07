import {defineConfig} from 'vite';
import glob from 'tiny-glob/sync';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: glob('src/**/!(*.style|*.d).ts'),
      formats: ['es'],
    },
    rollupOptions: {
      // external: /^lit/,
    },
  },
});
