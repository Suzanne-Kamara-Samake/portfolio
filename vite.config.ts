import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    tailwindcss(),
  ],
  
  build: {
    // Optimiser la production
    minify: 'terser',
    rollupOptions: {
      output: {
        // Chunking stratégie pour lazy loading
        manualChunks: {
          'about': ['/src/template/About Me/index.js'],
          'contact': ['/src/template/Contact/index.js'],
          'construction': ['/src/template/EnCoursConstruction/index.js'],
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  
  // Optimisations de dev
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
  }
})

