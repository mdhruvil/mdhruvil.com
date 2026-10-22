export type Link = {
  label: string;
  href: string;
  /** copied to the clipboard on click instead of following href */
  copy?: string;
};

export const site = {
  name: "Dhruvil M.",
  description: "Works on Artifacts at Cloudflare, Bengaluru.",
  // plain text, with links inline
  bio: [
    "Hi, I’m Dhruvil. I studied electronics, ended up writing software, and now work on ",
    {
      label: "Artifacts",
      href: "https://www.cloudflare.com/products/artifacts/",
    },
    " at Cloudflare in Bengaluru. I like knowing how the things I use work under the hood. Most of my projects started as “okay, but what’s actually happening here?” and turned into me building my own version. Lately I’ve been into serverless: how far you can push it, and what breaks when you do.",
  ] as (string | Link)[],
  url: "https://mdhruvil.com",
  repo: "https://github.com/mdhruvil/mdhruvil.com",
  email: "hey@mdhruvil.com",
  themeColor: "#181825",
};

export const navLinks: Link[] = [
  { label: "/blog", href: "/blog" },
  { label: "/resume", href: "/resume.pdf" },
];

export const socialLinks: Link[] = [
  { label: "github", href: "https://github.com/mdhruvil" },
  { label: "x", href: "https://x.com/mdhruvill" },
  { label: "linkedin", href: "https://www.linkedin.com/in/mdhruvil/" },
  { label: "email", href: `mailto:${site.email}`, copy: site.email },
];
