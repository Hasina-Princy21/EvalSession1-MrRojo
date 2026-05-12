import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost/api', // Remplace par l'URL de ton backend
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/api/, '')
        }
      },
    },
  },
  plugins: [react()],
})
