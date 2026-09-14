// Projects page ("/projects").
// Shows every project from src/data/projects.ts as a responsive grid of
// cards — one column on mobile, more as the screen gets wider.

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex-1 px-6 py-20 sm:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
          Things I&apos;ve built
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          A few projects I&apos;ve worked on, with the stack behind each one.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
