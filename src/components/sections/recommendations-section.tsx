// Recommendations section — every testimonial from
// src/data/recommendations.ts as a masonry layout: cards flow into
// columns (one on mobile, more as the screen gets wider) and stack top to
// bottom within each column, packing tightly instead of all lining up to
// the height of the tallest card in a row like a regular grid would.

import { RecommendationCard } from "@/components/recommendation-card";
import { recommendations } from "@/data/recommendations";

export function RecommendationsSection() {
  return (
    <section
      id="recommendations"
      className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-900"
    >
      <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
        Recommendations
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        What people say
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
        A few words from people I&apos;ve worked with.
      </p>

      {/* CSS multi-column layout, not `grid` — that's what gives the
          masonry effect (cards packed by column instead of forced into
          equal-height rows). `columns-*` controls how many columns; `gap-5`
          is the space between columns. Row spacing can't be a `gap` here
          (columns only support column-gap, not row-gap), so each card
          gets its own `mb-5` instead — see recommendation-card.tsx. */}
      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.name} rec={rec} />
        ))}
      </div>
    </section>
  );
}
