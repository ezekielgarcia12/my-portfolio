// A single project's row: name, description, tech stack badges, and
// optional links to the repo and/or live site. Used by the Projects section
// to render each entry from src/data/projects.ts as one full-width row in
// a vertical stack.
import { ArrowUpRight, Rocket } from "lucide-react";
import { Badge } from "@/components/badge";
import { GitHubIcon } from "@/components/icons/social-icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, company, description, stack, stackVersions, repoUrl, liveUrl } = project;

  return (
    // The row itself: icon on the left, everything else to its right.
    // The hover:border/shadow pair is the same "highlight" treatment used
    // on CertificationCard and RecommendationCard, so hovering any card
    // reads as the same interaction.
    <div className="flex gap-4 rounded-2xl border border-zinc-100 bg-white p-5 transition-all hover:border-red-200 hover:shadow-md sm:p-6 dark:border-zinc-900 dark:bg-zinc-950 dark:hover:border-red-900/50">
      {/* Icon in a small tinted square. shrink-0 stops it from being
          squeezed when the text next to it is long. */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/40">
        <Rocket className="h-5 w-5 text-red-600 dark:text-red-400" />
      </div>

      {/* min-w-0 lets long text wrap inside this flex child instead of
          pushing the row wider than the screen. */}
      <div className="min-w-0 flex-1">
        {/* Header: title + company on the left. On small screens the links
            drop below; from `sm:` up they sit on the right of the header. */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {title}
            </h3>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
              {company}
            </p>
          </div>

          {(repoUrl || liveUrl) && (
            <div className="flex shrink-0 items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
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

        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        {/* Most projects have one stack (`stack`). A few went through more
            than one (e.g. a legacy-to-modern migration) and use
            `stackVersions` instead — see projects.ts — so each version gets
            its own labeled row of badges. */}
        {stackVersions ? (
          <div className="mt-4 space-y-3">
            {stackVersions.map((version) => (
              <div key={version.label}>
                <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
                  {version.label}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {version.items.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack?.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
