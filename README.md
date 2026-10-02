<div align="center">

# 🚀 Dhruvil M. - Portfolio Website

_A modern, minimalist portfolio website built with Astro_

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-mdhruvil.com-brightgreen?style=for-the-badge)](https://mdhruvil.com)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

![Portfolio Preview](https://mdhruvil.com/og.png)

</div>

---

Credits:
[https://www.nexxel.dev/](https://www.nexxel.dev/) for inspiration

## ⌨️ Keyboard Shortcuts

Navigate the site using these keyboard shortcuts:

- `h` - Home page
- `b` - Blog page
- `p` - Projects page
- `r` - Resume (opens in new tab)
- `e` - Copy email to clipboard
- `g` - GitHub profile (when on links section)
- `l` - LinkedIn profile (when on links section)

## Tech stack and architecture

Astro builds the portfolio, blog, feeds, and custom 404 as static assets. The
official Cloudflare Workers adapter runs only `/resume.pdf` and `/resume.png` on
demand. These endpoints stream the latest GitHub release assets with no caching.
Missing upstream resume assets return an empty 404, an accepted limitation of the
current Astro beta. Other missing pages use the existing branded 404.

Cloudflare project settings live in `cloudflare.config.ts`. Sessions are disabled
and images are optimized at build time, so deployment does not need SESSION KV
or production IMAGES bindings. The adapter owns the Worker entrypoint and writes
Build Output under `.cloudflare/output/v0/`.

The approved beta ranges are Astro `^7.4.0-beta.1`, Cloudflare adapter
`^15.0.0-beta.1`, MDX `^8.0.3-beta.0`, and local `cf` CLI `^1.0.0-beta.12`.
All direct dependencies use caret ranges; `pnpm-lock.yaml` records the tested
exact versions. Expressive Code's Astro peer metadata excludes this prerelease
under standard semver, although content and build checks pass. pnpm's peer check
does not flag that prerelease mismatch. TypeScript stays on 6 because
`@astrojs/check` does not yet support TypeScript 7.

The compatibility date is `2026-10-02`, the validation machine's UTC date.
workerd rejected October 3 as a future date.

### Key Integrations

- 🎨 **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** - MDX component support
- 🗺️ **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation
- 📡 **[@astrojs/rss](https://docs.astro.build/en/guides/integrations-guide/rss/)** - RSS feed generation
- ✨ **[astro-expressive-code](https://expressive-code.com)** - Advanced syntax highlighting
- 📝 **[remark-toc](https://github.com/remarkjs/remark-toc)** - Table of contents generation
- 📖 **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful prose styling
- 🔤 **[JetBrains Mono Variable](https://www.jetbrains.com/mono/)** - Developer-optimized font

## 📁 Project Structure

```
/
├── public/
│   └── og.png              # Open Graph image
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections (hero, experience, etc.)
│   │   ├── navbar.astro    # Navigation with keyboard shortcuts
│   │   └── ...
│   ├── content/
│   │   └── blog/           # Blog posts in MDX format
│   ├── layouts/
│   │   ├── base-layout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── blog/           # Blog pages
│   │   ├── projects.astro  # Projects showcase
│   │   └── ...
│   ├── styles/
│   │   └── global.css      # Global styles with Tailwind
│   ├── consts.ts           # Site configuration and data
│   └── content.config.ts   # Content collections config
├── astro.config.mjs        # Astro configuration
└── package.json
```

## Quick start

Use Node `24.21.0`, recorded in `.node-version`. The supported Node range is
`^22.18.0 || ^24.11.0 || >=26.0.0`. The project selects pnpm `12.8.1` through
`packageManager`; no global tool upgrade is required.

```bash
git clone https://github.com/mdhruvil/mdhruvil.com.git
cd mdhruvil.com
npx --yes pnpm@12.8.1 install --frozen-lockfile
npx --yes pnpm@12.8.1 run dev
```

Vite+ is a project dev dependency. With a global `vp` already available, use
`vp install --frozen-lockfile`. Without one, use `pnpm exec vp` in place of `vp`
after bootstrapping with the selected pnpm. If your global pnpm is older, use
`npx --yes pnpm@12.8.1 exec vp`.

## Available scripts

| Command                   | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `vp run dev`              | Local `cf dev`, which delegates to Astro                      |
| `vp run build`            | Local `cf build`, which delegates to Astro                    |
| `vp run preview`          | Preview the production build locally, build first             |
| `vp run format`           | Oxfmt plus whole-file Astro formatting with Prettier          |
| `vp run format:check`     | Check both formatter groups                                   |
| `vp run check`            | Generate types, sync Astro, check formatting, lint, and types |
| `vp run test`             | Run the focused resume helper tests                           |
| `pnpm run cf-typegen`     | Generate `.cloudflare/types` with local `cf workers types`    |
| `pnpm run cf:version`     | Print the local Cloudflare CLI version                        |
| `pnpm run deploy:dry-run` | Build and validate locally, no upload or credentials          |
| `pnpm run deploy`         | Real production deployment, requires authorization            |
| `pnpm run dev:resume`     | Watch the Typst resume                                        |
| `pnpm run build:resume`   | Compile the Typst resume                                      |

Local Typst output goes to `.resume/resume.pdf`. Do not generate `resume.pdf` or
`resume.png` in the project root during development. Astro's dev route guard
blocks browser navigations to root files before endpoint routing, and other
requests can serve those files instead of the GitHub-backed endpoints. The
GitHub release workflow still publishes assets named `resume.pdf` and `resume.png`.

Use `vp run dev/build/preview`, not bare `vp dev/build/preview`, which are Vite
built-ins. `pnpm run` launches the same scripts. Package scripts call `cf`
directly and resolve the project-local binary. Bare `cf` in an ordinary terminal
still needs PATH or global setup. For direct CLI troubleshooting, use
`./node_modules/.bin/cf`; there are no `vp exec cf` wrappers.

Oxfmt handles supported files and sorts Tailwind classes using
`src/styles/global.css`. It excludes `.astro` files and generated output.
Prettier and its Astro/Tailwind plugins format only `src/**/*.astro`, including
frontmatter, scripts, and styles. Bare `vp fmt` does not format Astro components.
`astro check` supplies Astro-specific diagnostics alongside Vite+'s native checks.

The current `cf` beta cannot forward dev arguments. To choose a host or port,
use `pnpm run astro dev --host 127.0.0.1 --port 4321` directly. Astro starts
background servers when it detects a coding agent; stop those with
`pnpm run astro dev stop` or `pnpm run astro preview stop`.

Builds currently emit a Rolldown warning about MDX's `use astro:head-inject`
directive. The preview smoke checks confirm the blog's code styles, images, TOC,
and hashed assets are present. Desktop/mobile visual and keyboard checks still
need a browser before production rollout.

### Deployment and updates

No production deployment or remote pipeline change is part of this migration.
Before rollout, confirm that Workers Builds or your existing pipeline uses the
new scripts, installs dev dependencies, selects the supported Node/pnpm, and
preserves the actual custom-domain routing. `cf deploy` builds first; do not add a
second build wrapper. A prebuilt deploy must use the mode recorded in
`.cloudflare/output/v0/config.json`, normally `production`.

`cf` uses its own credentials rather than Wrangler's login. When authorized,
authenticate with `./node_modules/.bin/cf auth login` and inspect them with
`./node_modules/.bin/cf auth whoami`. Automation can use `CLOUDFLARE_API_TOKEN`
and `CLOUDFLARE_ACCOUNT_ID`; never commit tokens.

Dependency updates require refreshing and committing the lockfile, then repeating
the checks, tests, build, dry run, and preview smoke tests. Carets do not track
every future beta or major. Update Astro/adapter/MDX beta trains together and use
coordinated Vite+ migrations. Keep Vite+ and its Vite core alias on the same
release, and restore caret ranges if its migrator writes exact pins. Do not
independently upgrade Vite+'s bundled formatter/linter. The workspace includes
version-specific release-age exceptions for the approved freshly published
packages, not a blanket bypass of pnpm's build approvals.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you find any bugs or have suggestions for improvements, please open an issue.

## 📞 Contact

- **Email**: hey@mdhruvil.com
- **LinkedIn**: [mdhruvil](https://www.linkedin.com/in/mdhruvil/)
- **GitHub**: [mdhruvil](https://github.com/mdhruvil)

---

Built with ❤️ using Astro and modern web technologies.
