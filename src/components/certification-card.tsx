// A single certification's card: title, issuing organization, the year it
// was issued, and an optional link to view the credential. Used by the
// Certifications page to render each entry from src/data/certifications.ts.
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
  const { title, issuer, issued, credentialUrl } = cert;

  return (
    // break-inside-avoid + mb-5: same masonry-column requirements as
    // RecommendationCard — see the comment there for why. The
    // hover:border/shadow pair is the same "highlight" treatment used on
    // ProjectCard and RecommendationCard, so hovering any card in any of
    // the three masonry sections reads as the same interaction.
    <div className="mb-5 flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 break-inside-avoid transition-all hover:border-red-200 hover:shadow-md dark:border-zinc-900 dark:bg-zinc-950 dark:hover:border-red-900/50">
      <Award className="h-5 w-5 text-red-600 dark:text-red-400" />

      <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {issuer} &middot; {issued}
      </p>

      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          View credential
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
