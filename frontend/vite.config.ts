import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use VITE_BASE_PATH env var if set (for different deployment targets)
  // Default to '/' for Vercel, use '/beyond_medispa_new_site/' for GitHub Pages
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~backend/client': path.resolve(__dirname, './client'),
      '~backend': path.resolve(__dirname, '../backend'),
    },
  },
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
