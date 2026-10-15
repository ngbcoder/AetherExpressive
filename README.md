# Aether Expressive

A React + TypeScript + Tailwind CSS site, deployed automatically to GitHub Pages.

## Stack

| Tool           | Version | Purpose                       |
| -------------- | ------- | ----------------------------- |
| React          | 19      | UI                            |
| TypeScript     | 6       | Types                         |
| Vite           | 8       | Dev server + build            |
| Tailwind CSS   | 4       | Styling (CSS-first config)    |
| oxlint         | 1       | Linting                       |

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build locally
npm run lint
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to GitHub Pages.

One-time setup in **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.

The live URL will be `https://ngbcoder.github.io/AetherExpressive/`.

### Base path

GitHub Pages serves project sites from `/<repo>/`, so `vite.config.ts` sets `base` to `/AetherExpressive/`. Override it with an environment variable when needed:

```bash
# user/org site, e.g. ngbcoder.github.io
VITE_BASE_PATH=/ npm run build

# custom domain pointing at a subpath
VITE_BASE_PATH=/blog/ npm run build
```

If you rename the repo, update `base` in `vite.config.ts` to match the new name, or asset URLs will 404.

## Styling

Tailwind v4 is configured with CSS, not `tailwind.config.js`. Design tokens live in the `@theme` block at the top of `src/index.css`:

```css
@theme {
  --color-accent: oklch(0.65 0.25 300);
}
```

That token becomes `text-accent`, `bg-accent`, `border-accent`, and so on. Add new tokens there rather than reaching for arbitrary values in JSX.