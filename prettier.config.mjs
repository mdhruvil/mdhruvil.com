/** @type {import('prettier').Config} */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/global.css",
  astroCompressHTML: "html",
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};

export default config;
