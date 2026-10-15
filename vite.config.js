import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // GitHub Pages serves project sites from `/<repo>/`, so every asset URL needs
  // that prefix. Override it per-environment with VITE_BASE_PATH (e.g. `/` for a
  // user/org page).
  const base = env.VITE_BASE_PATH ?? '/AetherExpressive/';

  return {
    base,
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      strictPort: true,
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'credentialless'
      }
    }
  };
});