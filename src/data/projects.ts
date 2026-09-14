// The project list shown on the Projects page ("/projects").
// It's a stand-in for a real database — see AGENTS.md, Phase 1 has no
// backend. To add a project, just add another object to this array.

export type Project = {
  title: string;
  description: string;
  // The tech stack used, shown as small badges on the project card.
  stack: string[];
  // Optional links — leave either one out if it doesn't apply yet.
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Site",
    description:
      "This site — a personal portfolio built to showcase projects and learn Next.js from the ground up.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Project Two",
    description:
      "Replace this with a short summary of what the project does and the problem it solves.",
    stack: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "Another placeholder — swap in a real project, or delete this entry if you don't need it yet.",
    stack: ["Laravel", "MySQL"],
    liveUrl: "https://example.com",
  },
];
