# Mohamed Elsawy Portfolio (Vite + React + TypeScript)

Live (after GH Pages deploy): https://mosawy.github.io/portfolio/

## Local development

```bash
npm ci
npm start
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages on every push to `main`.

1. Ensure the code is pushed to the repo `mosawy/portfolio`.
2. In GitHub, go to Settings → Pages and ensure the source is set to "GitHub Actions" (the workflow will configure the rest).
3. The action `.github/workflows/deploy.yml` builds the app and publishes `dist/`.
4. Your site will be available at: `https://mosawy.github.io/portfolio/`.

If you rename the repo or use a different path, update:
- Vite base in `vite.config.ts` (production `base: "/<repo-name>/"`).
- React Router `basename={import.meta.env.BASE_URL}` in `src/App.tsx`.

## Tech stack

- Vite, React, TypeScript
- Tailwind CSS, shadcn/ui
- React Router, TanStack Query

## Notes

- The Vite base is set to `/portfolio/` in production, so assets and routes work on GitHub Pages.
- The router uses `import.meta.env.BASE_URL` so navigation works under the subpath.
