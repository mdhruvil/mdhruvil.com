export type Project = {
  name: string;
  url: string;
  summary: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Gitflare",
    url: "https://github.com/mdhruvil/gitflare",
    summary: "self-hosted GitHub alternative on Cloudflare",
    stack: ["tanstack start", "workers", "durable objects", "d1"],
  },
  {
    name: "deplit",
    url: "https://github.com/mdhruvil/deplit",
    summary: "my attempt at building Vercel",
    stack: ["react", "hono", "trpc", "docker", "azure", "d1"],
  },
  {
    name: "Vibe",
    url: "https://github.com/mdhruvil/vibe",
    summary: "vibecoding tool that deploys sites to Appwrite",
    stack: ["next.js", "drizzle", "containers", "durable objects"],
  },
];
