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
