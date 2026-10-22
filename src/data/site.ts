export type Link = {
  label: string;
  href: string;
};

export const site = {
  name: "Dhruvil Moradiya",
  description: "Fullstack developer from Bengaluru, India.",
  bio: "Fullstack developer from Bengaluru, India. I build web applications end to end and care most about the parts you don’t see — making them efficient, scalable and easy to work on. Always learning, always improving the craft.",
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
  { label: "email", href: `mailto:${site.email}` },
];
