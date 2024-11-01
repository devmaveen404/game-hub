import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'
import type { Plugin } from 'vite'

// Custom plugin to integrate connect-history-api-fallback
function historyFallback(): Plugin {
  return {
    name: 'single-page-app-fallback',
    configureServer(server) {
      server.middlewares.use(
        history({
          // Options (optional): specify which paths to ignore, if any
          // e.g., `rewrites: [{ from: /\/api/, to: '/index.html' }]`
        })
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), historyFallback()],
})
