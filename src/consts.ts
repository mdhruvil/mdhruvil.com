// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = "Dhruvil M.";
export const SITE_DESCRIPTION = "Welcome to my website!";

export type WorkExp = {
  companyName: string;
  companyLink: string;
  role: string;
  period: string;
  achievments: string[];
};

export const workExp: WorkExp[] = [
  {
    companyName: "puch.ai",
    companyLink: "https://puch.ai",
    role: "ai intern",
    period: "July 2025 - Aug 2025",
    achievments: [
      "worked on vibecoding and implemented initial prototype for global caching and versioning for vibecoded sites",
      "added image output support for MCP client",
      "improved reminder tool to improve accuracy of delivery",
      "developed grafana dashboard for monitoring",
    ],
  },
  {
    companyName: "slidesai.io",
    companyLink: "https://slidesai.io",
    role: "full-stack development intern",
    period: "Jul 2024 - Aug 2024",
    achievments: [
      "revamped the entire google workspace add-on ui",
      "migrated all microservices from node.js v12 to v18",
      "implemented elastic APM across all microservices",
    ],
  },
  {
    companyName: "allevents",
    companyLink: "https://allevents.in",
    role: "full-stack development intern",
    period: "Apr 2024 - Jul 2024",
    achievments: [
      "built an internal event management dashboard ",
      `contributed to the development of the "Things to Do" activity page`,
    ],
  },
];

export type Project = {
  name: string;
  liveLink: string;
  repoLink: string;
  description: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    name: "Gitflare",
    liveLink: "https://gitflare.mdhruvil.com",
    repoLink: "https://github.com/mdhruvil/gitflare",
    description:
      "A self-hosted GitHub alternative built to run on serverless platforms. Built on top of Cloudflare Workers, Durable Objects and Cloudflare D1.",
    techStack: [
      "tanstack start",
      "cloudflare workers",
      "cloudflare durable objects",
      "cloudflare d1",
    ],
  },
  {
    name: "deplit",
    liveLink: "https://deplit.tech",
    repoLink: "https://github.com/mdhruvil/deplit",
    description:
      "My attempt to create Vercel. Supports static sites, global CDN, preview deployments, instant rollbacks and custom subdomain for projects. ",
    techStack: [
      "docker",
      "azure",
      "cloudflare workers",
      "cloudflare D1",
      "react",
      "hono",
      "trpc",
    ],
  },
  {
    name: "Vibe",
    liveLink: "https://youtu.be/RY-2LNRveK8",
    repoLink: "https://github.com/mdhruvil/vibe",
    description:
      "Vibe is a vibecoding tool similar to v0, lovable etc that lets users vibecode apps and deploy them directly to their Appwrite account.",
    techStack: [
      "docker",
      "cloudflare containers",
      "cloudflare durable objects",
      "cloudflare d1",
      "hono",
      "tRPC",
      "drizzle orm",
      "next.js",
    ],
  },
];
