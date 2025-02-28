// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://mdhruvil.github.io",
  redirects: {
    "/resume":
      "https://docs.google.com/document/d/1tDJ9bKlYkeekRE0KtiqJWGPXz3gQl5LFuLADH3j4BwU/edit?usp=sharing",
  },
  integrations: [expressiveCode(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
});
