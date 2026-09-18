// A single card in the About Me masonry grid — the same border/hover/
// spacing treatment as ProjectCard, CertificationCard, and
// RecommendationCard, so it reads as the same card system. Used by
// about-section.tsx once per subsection (Personality, Interests, etc.).
export function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    // break-inside-avoid + mb-5: same masonry-column requirements as the
    // other cards — see recommendation-card.tsx for why.
    <div className="mb-5 break-inside-avoid rounded-2xl border border-zinc-100 p-6 transition-all hover:border-red-200 hover:shadow-md dark:border-zinc-900 dark:hover:border-red-900/50">
      <h3 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
