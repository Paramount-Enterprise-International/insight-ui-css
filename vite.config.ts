// vite.config.ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'], // modern ESM is best for web components
      fileName: () => 'insight.js', // <-- exact JS filename
      name: 'InsightUI', // only used if you later add 'umd'
    },
    target: 'es2022',
    sourcemap: false,

    // keep the bundle as one JS + one CSS
    cssCodeSplit: false,
    rollupOptions: {
      // bundle everything into the single entry
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        entryFileNames: 'insight.js', // <-- JS name
        chunkFileNames: 'insight.js',
        assetFileNames: 'insight.[ext]', // <-- CSS name becomes insight.css
      },

      // Choose ONE strategy below:

      // (A) Self-contained: bundle 'lit' inside insight.js
      // external: [],

      // (B) Externalize lit (if host already has it)
      // external: ['lit', 'lit/decorators.js'],
    },
  },
});
