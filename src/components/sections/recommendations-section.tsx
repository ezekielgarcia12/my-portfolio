// Recommendations section — every testimonial from
// src/data/recommendations.ts as a masonry layout: cards flow into
// columns (one on mobile, more as the screen gets wider) and stack top to
// bottom within each column, packing tightly instead of all lining up to
// the height of the tallest card in a row like a regular grid would.

import { ArrowUpRight } from "lucide-react";
import { RecommendationCard } from "@/components/recommendation-card";
import { recommendations } from "@/data/recommendations";

// Where visitors can submit their own testimonial — a Google Form, not a
// backend endpoint, so this stays fine for Phase 1 (frontend only).
const TESTIMONIAL_FORM_URL = "https://forms.gle/6VawYynvsXoV3g1m9";

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

      {/* justify-between puts the button on the far right, inline with
          the description, instead of stacked below it. */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          A few words from people I&apos;ve worked with.
        </p>

        <a
          href={TESTIMONIAL_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit shrink-0 items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400"
        >
          Submit a testimonial
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

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
