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

## 🚀 Tech Stack & Architecture

### Core Technologies

| Technology                                       | Purpose               | Version  |
| ------------------------------------------------ | --------------------- | -------- |
| [**Astro**](https://astro.build)                 | Static Site Generator | `^5.2.2` |
| [**TypeScript**](https://www.typescriptlang.org) | Type Safety           | Latest   |
| [**Tailwind CSS**](https://tailwindcss.com)      | Utility-First Styling | `^4.0.2` |
| [**MDX**](https://mdxjs.com)                     | Enhanced Markdown     | `^4.0.8` |

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

## 🏃‍♂️ Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `18.0.0` or higher ([Download here](https://nodejs.org/))
- **pnpm** (recommended) or npm package manager
  ```bash
  npm install -g pnpm
  ```

### One-Click Setup

Get up and running in less than 2 minutes:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/mdhruvil/mdhruvil.com.git
cd mdhruvil.com

# 2️⃣ Install dependencies
pnpm install

# 3️⃣ Start development server
pnpm dev

# 🎉 Open http://localhost:4321 in your browser
```

## 📜 Available Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `pnpm dev`      | Start development server  |
| `pnpm build`    | Build for production      |
| `pnpm preview`  | Preview production build  |
| `pnpm prettier` | Format code with Prettier |

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
