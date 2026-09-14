// A single certification's card: title, issuing organization, the year it
// was issued, and an optional link to view the credential. Used by the
// Certifications page to render each entry from src/data/certifications.ts.
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
  const { title, issuer, issued, credentialUrl } = cert;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-zinc-100 p-6 transition-colors hover:border-zinc-200 dark:border-zinc-900 dark:hover:border-zinc-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
        <Award className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-1 flex-1 text-sm text-zinc-500 dark:text-zinc-400">
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
