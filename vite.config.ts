import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "typescript/no-floating-promises": "error",
    },
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: [
      "dist/**",
      ".astro/**",
      ".wrangler/**",
      ".cloudflare/**",
      ".resume/**",
    ],
  },
  fmt: {
    arrowParens: "always",
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 2,
    sortPackageJson: false,
    sortTailwindcss: {
      stylesheet: "./src/styles/global.css",
    },
    ignorePatterns: [
      "**/*.astro",
      "dist/**",
      ".astro/**",
      ".wrangler/**",
      ".cloudflare/**",
      ".resume/**",
      "pnpm-lock.yaml",
    ],
  },
});
