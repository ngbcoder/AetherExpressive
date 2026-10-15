import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // GitHub Pages serves project sites from `/<repo>/`, so every asset URL needs
  // that prefix. Override it per-environment with VITE_BASE_PATH (e.g. `/` for a
  // user/org page, or `https://cdn.example.com/app/` for a custom domain).
  const base = env.VITE_BASE_PATH ?? '/AetherExpressive/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})