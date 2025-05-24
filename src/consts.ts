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
    name: "deplit",
    liveLink: "https://deplit.tech",
    repoLink: "https://github.com/mdhruvil/deplit", // Added repoLink
    description:
      "My attempt to create Vercel. Supports static sites, global CDN, preview deployments, instant rollbacks and custom subdomain for projects. ",
    techStack: [
      "Docker",
      "Azure",
      "Cloudflare Workers",
      "Cloudflare D1",
      "React",
      "Hono",
      "tRPC",
    ],
  },
  {
    name: "college connect",
    liveLink: "https://cc.mdhruvil.codes",
    repoLink: "https://github.com/mdhruvil/college-connect",
    description:
      "a PWA to increase campus engagement and help students make meaningful connections at universities.",
    techStack: ["next.js", "tailwindcss", "typescript", "tRPC", "drizzle orm"],
  },
  {
    name: "triveni ldce",
    liveLink: "https://trivenildce.vercel.app",
    repoLink: "https://github.com/JeelGajera/trivenildce",
    description:
      "led a team to develop a website for Triveni 2k24, a national-level fest, optimizing user experience and enhancing event visibility.",
    techStack: ["next.js", "tailwindcss", "typescript", "keystatic cms"],
  },
];
