// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      watch: {
        ignored: ["!**/node_modules/autopreview/**"],
      },
    },
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    optimizeDeps: {
      exclude: ["autopreview"],
    },
  }

  if (command !== 'serve') {
    config.base = '/calculators/'
  }

  return config
})