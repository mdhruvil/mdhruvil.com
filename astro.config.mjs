// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { rehypeHeadingIds, unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import { opensInNewTab } from "./src/lib/links.ts";

/**
 * Gives markdown links the same new-tab rule as the components.
 * @returns {(tree: any) => void}
 */
function rehypeNewTabLinks() {
  /** @param {any} node */
  const visit = (node) => {
    const href = node.properties?.href;
    if (
      node.tagName === "a" &&
      typeof href === "string" &&
      opensInNewTab(href)
    ) {
      node.properties.target = "_blank";
      node.properties.rel = ["noopener"];
    }
    node.children?.forEach(visit);
  };
  return visit;
}

// https://astro.build/config
export default defineConfig({
  site: "https://mdhruvil.com",
  output: "static",
  compressHTML: true,
  session: false,
  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "node",
  }),
  integrations: [
    expressiveCode({
      themes: ["catppuccin-mocha"],
      styleOverrides: { codeFontFamily: "var(--font-mono)" },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
    processor: unified({
      rehypePlugins: [rehypeHeadingIds, rehypeNewTabLinks],
      remarkPlugins: [remarkToc],
    }),
  },
});
