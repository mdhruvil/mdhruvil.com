// @ts-check
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://mdhruvil.github.io",
  integrations: [expressiveCode(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
    rehypePlugins: [rehypeHeadingIds],
    remarkPlugins: [remarkToc],
  },
});
