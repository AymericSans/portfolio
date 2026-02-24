export const portfolio = {
  name: "Aymeric",
  title: "AI Product Designer",
  tagline: "I design AI products that people actually understand.",
  email: "you@example.com",
  location: "Paris, France",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  about: `I'm a Senior Product Designer specializing in AI-powered products. At LightOn, I shape the developer experience and enterprise search tools for a European sovereign AI platform. I work at the intersection of complex AI capabilities and intuitive design — making sure cutting-edge technology feels simple, useful, and human.`,
  skills: [
    "Product Design",
    "AI/LLM UX",
    "API Developer Experience",
    "Design Systems",
    "Prototyping",
    "Figma",
    "DX",
    "API Design",
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
