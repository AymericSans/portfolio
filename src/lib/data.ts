export const portfolio = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "I build fast, accessible web experiences.",
  email: "you@example.com",
  location: "San Francisco, CA",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  about: `I'm a full-stack developer with a passion for crafting clean, performant
applications. I focus on the intersection of great engineering and great design,
building products that are both technically sound and delightful to use.`,
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "AWS",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web app that solves a real problem. Built with Next.js, PostgreSQL, and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://example.com",
    repo: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "An open-source CLI tool with thousands of downloads. Automates repetitive tasks for developers.",
    tags: ["Node.js", "TypeScript", "CLI"],
    repo: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A real-time collaborative editor using WebSockets and CRDTs. Supports offline-first editing.",
    tags: ["React", "WebSockets", "CRDTs"],
    href: "https://example.com",
    repo: "https://github.com/yourusername/project-three",
  },
];
