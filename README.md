# Portfolio / CV (Static Site)

A **print-friendly, single-page developer portfolio** built with [Astro](https://astro.build/). All résumé content lives in one **`cv.json`** file, so you can update your profile without touching layout code. The site ships as **static HTML**—fast, cheap to host, and easy to deploy anywhere.

## What this project does

- Renders a **one-page CV / portfolio** with sections such as hero, about, experience, education, technical & soft skills, and projects.
- Uses **`cv.json`** as the single source of truth (TypeScript path alias `@cv`).
- Supports **light and dark** appearance via a theme toggle (preference is persisted in `localStorage`).
- Includes **keyboard shortcuts** for navigation and actions (powered by [hotkeypad](https://www.npmjs.com/package/hotkeypad)).
- Is **optimized for printing** (`@media print` styles, layout tweaks, and optional section visibility) so you can save a clean PDF from the browser.

## Tech stack

| Layer | Technology |
|--------|---------------|
| Framework | [Astro 4](https://astro.build/) (static `output`) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) with `@astrojs/tailwind` |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Content | JSON (`cv.json`), inspired by [JSON Resume](https://jsonresume.org/schema/)-style structure |
| Tooling | `@astrojs/check`, Prettier (+ Astro & Tailwind plugins) |

## Project layout (essentials)

- **`cv.json`** — Your name, links, work history, skills, projects, etc.
- **`public/themes/themes.css`** — Design tokens (light/dark palettes, semantic colors consumed as `text-skin-*`, `bg-skin-*`, etc.).
- **`tailwind.config.mjs`** — Maps CSS variables to Tailwind `skin` colors.
- **`src/pages/index.astro`** — Page shell; composes section components.
- **`src/components/sections/`** — Hero, About, Experience, Education, skills, projects.
- **`src/components/KeyboardManager.astro`** — Global hotkeys.

## Getting started

**Requirements:** [Node.js](https://nodejs.org/) (LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production build

```bash
npm run build
```

Static assets are written to **`dist/`**. Preview locally with:

```bash
npm run preview
```

## Customization

1. **Content** — Edit **`cv.json`** (and keep types in mind via `src/cv.d.ts` if you extend fields).
2. **Themes** — Adjust colors in **`public/themes/themes.css`**. Optional `basics.theme` values in `cv.json` still target the nested `[data-theme="..."]` blocks if you use them.
3. **Sections / layout** — Tweak Astro components under **`src/components`** and the grid in **`src/pages/index.astro`**.

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` / `npm start` | Development server (default port `4321`). |
| `npm run build` | Type-check with Astro Check, then build to `./dist/`. |
| `npm run preview` | Serve the production build locally. |