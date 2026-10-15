# Aether Expressive

A design system site built with **React + Tailwind CSS**, deployed automatically to GitHub Pages.

Live: **https://ngbcoder.github.io/AetherExpressive/**

## Stack

| Tool         | Version | Purpose                    |
| ------------ | ------- | -------------------------- |
| React        | 19      | UI (plain JavaScript, JSX) |
| react-router | 7       | Routing                    |
| Tailwind CSS | 4       | Styling                   |
| Vite         | 8       | Dev server + build        |
| oxlint       | 1       | Linting                   |

This is a **JavaScript** project — no TypeScript. Source lives in `src/**/*.jsx`.

## Commands

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to
GitHub Pages. The Pages build source is set to **GitHub Actions**, so no manual
configuration is needed after the first deploy.

### Base path

GitHub Pages serves project sites from `/<repo>/`, so `vite.config.js` sets `base` to
`/AetherExpressive/`. Override it when needed:

```bash
# user/org site, e.g. ngbcoder.github.io
VITE_BASE_PATH=/ npm run build
```

If you rename the repo, update `base` in `vite.config.js` to match, or assets 404.

## Client-side routing

GitHub Pages has no server-side rewrite, so a deep link such as
`/AetherExpressive/ALittleSofterALotMoreExpressive_` returns a 404 before React boots.
`public/404.html` handles this:

1. stashes the requested path in `sessionStorage`,
2. redirects the browser to the SPA entry point,
3. `src/main.jsx` restores the path via `history.replaceState` before React mounts.

`BrowserRouter` also gets `basename={import.meta.env.BASE_URL}` in `src/App.jsx` so it
resolves routes under the `/AetherExpressive/` prefix.

## Styling

Tailwind v4 is configured **in CSS** — there is no `tailwind.config.js` and no
`postcss.config.js`. `src/index.css` is a single line:

```css
@import 'tailwindcss';
```

That one import brings in the default theme, preflight and utilities.

> **Don't paste `@tailwind base;` / `@tailwind components;` / `@tailwind utilities;` into
> `src/index.css`.** Those are v3 directives. Under v4 they are silently ignored, so no
> theme is loaded and every colour utility (`bg-violet-600`, `text-slate-900`, …) fails to
> generate — the page builds fine but renders unstyled.

Custom tokens go in an `@theme` block:

```css
@theme {
  --color-accent: oklch(0.65 0.25 300);
}
```

which becomes `text-accent`, `bg-accent`, `border-accent`, etc.

## Layout of the page component

`src/pages/ALittleSofterALotMoreExpressive_/index.jsx` is a large, mostly-static
specimen page.

Text that needs a line break uses real newlines plus Tailwind's `whitespace-pre-line`
on the containing element. A literal `\n` inside JSX text is **not** a line break — it
renders as the characters `\` and `n`.