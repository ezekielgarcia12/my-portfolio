// A single project's card: name, description, tech stack badges, and
// optional links to the repo and/or live site. Used by the Projects page
// to render each entry from src/data/projects.ts.
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/badge";
import { GitHubIcon } from "@/components/icons/social-icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, company, description, stack, stackVersions, repoUrl, liveUrl } = project;

  return (
    // break-inside-avoid + mb-5: same masonry-column requirements as
    // RecommendationCard — see the comment there for why. The
    // hover:border/shadow pair is the same "highlight" treatment used on
    // CertificationCard and RecommendationCard, so hovering any card in
    // any of the three masonry sections reads as the same interaction.
    <div className="mb-5 flex flex-col rounded-2xl border border-zinc-100 p-6 break-inside-avoid transition-all hover:border-red-200 hover:shadow-md dark:border-zinc-900 dark:hover:border-red-900/50">
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
        {company}
      </p>
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
