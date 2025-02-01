const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
