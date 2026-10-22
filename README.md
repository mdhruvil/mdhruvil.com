# mdhruvil.com

Personal site. Astro + Tailwind, served by Cloudflare Workers.

## Run

```sh
pnpm install
pnpm run dev       # cf dev
pnpm run check     # types, lint, format
pnpm run test
pnpm run build
```

Node and pnpm versions are pinned in `.node-version` and `package.json`.

## Layout

```
src/
  data/        site, work and project content (edit these to update the site)
  components/  one component per file
  layouts/     page shells
  lib/         plain TS helpers, tested next to their source (*.test.ts)
  pages/       routes
  styles/      Tailwind theme (catppuccin mocha) and the few custom utilities
```

Conventions: kebab-case file names, camelCase in code, PascalCase for types
and component imports. Styling stays in Tailwind classes.

## Footer

The footer reads edge data from the `Server-Timing` header set by a Cloudflare
transform rule on mdhruvil.com (`cache`, `ray`, `rtt`, `qrtt`) via
`performance.getEntriesByType("navigation")`. No extra requests. Without the
header (local dev, preview URLs) it shows `local`.

The commit SHA and date are baked in at build time from
`WORKERS_CI_COMMIT_SHA`, falling back to `git`.

## Deploy

Workers Builds runs `pnpm run deploy` on `main` and `pnpm run deploy:preview`
on other branches. Set `PNPM_VERSION=12.8.1` in the build variables.

`/resume.pdf` and `/resume.png` are the only on-demand routes. They stream the
latest GitHub release assets, built from `resume.typ` by the workflow in
`.github/workflows` on commits starting with `resume`.
