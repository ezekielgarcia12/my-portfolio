// A single certification's row: title, issuing organization, the year it
// was issued, and an optional link to view the credential. Used by the
// Certifications section to render each entry from
// src/data/certifications.ts as one full-width row in a vertical stack.
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
  const { title, issuer, issued, credentialUrl } = cert;

  return (
    // The row itself: icon on the left, details in the middle, and (from
    // `sm:` up) the credential link pushed to the right edge. The
    // hover:border/shadow pair is the same "highlight" treatment used on
    // ProjectCard and RecommendationCard, so hovering any card reads as the
    // same interaction.
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:border-red-200 hover:shadow-md sm:p-5 dark:border-zinc-900 dark:bg-zinc-950 dark:hover:border-red-900/50">
      {/* Icon in a small tinted square. shrink-0 stops it from being
          squeezed when the title next to it is long. */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/40">
        <Award className="h-5 w-5 text-red-600 dark:text-red-400" />
      </div>

      {/* On mobile the link stacks under the details; from `sm:` up the
          two sit side by side with the link on the right. min-w-0 lets
          long titles wrap instead of overflowing the row. */}
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-black dark:text-white">
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
            {issuer} &middot; {issued}
          </p>
        </div>

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            View credential
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
