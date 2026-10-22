export type Role = {
  title: string;
  period: string;
};

export type Job = {
  company: string;
  roles: Role[];
  highlights: string[];
};

export const jobs: Job[] = [
  {
    company: "cloudflare",
    roles: [
      { title: "systems engineer", period: "jun 2026 — now" },
      { title: "software engineer intern", period: "feb — jun 2026" },
    ],
    highlights: [
      "designed and implemented a proof-of-concept git hosting service built on Cloudflare Artifacts",
      "architected and built internal AI tooling used by 3,300+ employees daily",
      "migrated 27,000+ sessions from legacy AI tooling with zero downtime and no data loss",
    ],
  },
  {
    company: "puch.ai",
    roles: [{ title: "ai intern", period: "jul — aug 2025" }],
    highlights: [
      "worked on vibecoding and implemented initial prototype for global caching and versioning for vibecoded sites",
      "added image output support for MCP client",
      "improved reminder tool to improve accuracy of delivery",
      "developed grafana dashboard for monitoring",
    ],
  },
  {
    company: "slidesai.io",
    roles: [{ title: "full-stack intern", period: "jul — aug 2024" }],
    highlights: [
      "revamped the entire google workspace add-on ui",
      "migrated all microservices from node.js v12 to v18",
      "implemented elastic APM across all microservices",
    ],
  },
  {
    company: "allevents",
    roles: [{ title: "full-stack intern", period: "apr — jul 2024" }],
    highlights: [
      "built an internal event management dashboard",
      'contributed to the development of the "Things to Do" activity page',
    ],
  },
];
