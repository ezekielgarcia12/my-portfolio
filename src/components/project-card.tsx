// A single project's card: name, description, tech stack badges, and
// optional links to the repo and/or live site. Used by the Projects page
// to render each entry from src/data/projects.ts.
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/badge";
import { GitHubIcon } from "@/components/icons/social-icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, repoUrl, liveUrl } = project;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-zinc-100 p-6 transition-colors hover:border-zinc-200 dark:border-zinc-900 dark:hover:border-zinc-800">
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {(repoUrl || liveUrl) && (
        <div className="mt-5 flex items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-black dark:hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-black dark:hover:text-white"
            >
              Live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
