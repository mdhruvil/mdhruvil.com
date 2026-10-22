import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "mdhruvil-com",
    compatibilityDate: "2026-10-02",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      notFoundHandling: "none",
      htmlHandling: "drop-trailing-slash",
    },
    previewUrls: true,
    workersDev: false,
    domains: [
      "mdhruvil.com",
      { hostname: "previews.mdhruvil.com", production: false, previews: true },
    ],
  },
});
