# Repository Guidelines

## Project Structure & Module Organization
- `src/`: React app source (entry: `main.jsx`, root component: `App.jsx`).
  - `src/components/ui/`: Small UI primitives (`button.jsx`, `card.jsx`, `dialog.jsx`).
- `public/`: Static assets served at root (`/images`, `/music`).
- `index.html`: Vite HTML entry.
- Config: `vite.config.js` (alias `@` -> `src`), `tailwind.config.js`, `postcss.config.js`.
- Containerization: `Dockerfile`, `nginx.conf`, `deploy.sh`.

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server (hot reload).
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Preview the production build locally.
- `npm run docker:build`: Build Docker image `physio_fun`.
- `npm run docker:run`: Run container on `:5173` (served by nginx).
- Example: `npm ci && npm run build && npm run preview`.

## Coding Style & Naming Conventions
- Language: React 18 + JSX, TailwindCSS for styling, Framer Motion for motion.
- Imports: Prefer alias `@/…` for files under `src/`.
- Components: PascalCase export names; UI primitives live in `src/components/ui` with concise, focused props.
- Files: Use `.jsx`. Keep modules small and single‑purpose.
- Formatting: 2‑space indent, single quotes, no trailing semicolons (match existing files).
- Assets: Reference via `/images/...` and `/music/...` (from `public/`).

## Testing Guidelines
- Currently no test suite. If adding tests:
  - Use Vitest + React Testing Library.
  - Place files under `src/__tests__/` or alongside as `*.test.jsx`.
  - Aim for component behavior tests and basic accessibility (roles/labels).
  - Add `"test": "vitest"` to `package.json` and run `npx vitest`.

## Commit & Pull Request Guidelines
- Commits: Short, imperative, lowercase summaries (e.g., `add crane exercise`). Group related changes.
- Branches: Use descriptive names (e.g., `feat/new-exercise-crane`, `fix/dialog-close`).
- PRs must include:
  - Clear description of change and motivation; link issues if any.
  - Screenshots/GIFs for UI changes; note any new assets under `public/`.
  - Local verification steps (e.g., `npm run dev`, `npm run build`).

## Security & Configuration Tips
- Vite dev server allows specific hosts via `vite.config.js` (`server.allowedHosts`). Keep as needed for your domain.
- Do not commit secrets; static assets belong in `public/` only.
- For deployment, prefer the provided `Dockerfile` and `deploy.sh` to ensure nginx SPA routing (`/index.html` fallback).

