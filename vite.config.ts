import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 4096, // inline small assets as base64
    rollupOptions: {
      output: {
        // Split heavy vendor libs into their own chunk for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom')
            ) {
              return 'vendor'
            }
          }
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? 'asset'
          const parts = name.split('.')
          const ext = parts[parts.length - 1]
          // Put images in assets/ with hash for cache busting
          if (/png|jpe?g|gif|svg|webp|ico/i.test(ext)) {
            return `assets/[name]-[hash][extname]`
          }
          return `[name]-[hash][extname]`
        },
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})