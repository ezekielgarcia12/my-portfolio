// A single testimonial: the quote, plus who said it and how they know
// you. Used by the Recommendations page to render each entry from
// src/data/recommendations.ts.
import { Quote } from "lucide-react";
import type { Recommendation } from "@/data/recommendations";

// "Maria Santos" -> "MS", used as the avatar since there's no photo for
// each recommender.
function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function RecommendationCard({ rec }: { rec: Recommendation }) {
  const { name, role, quote } = rec;

  return (
    // break-inside-avoid stops the masonry column layout (see
    // recommendations-section.tsx) from splitting a single card across two
    // columns. mb-5 is the vertical spacing between cards stacked in the
    // same column — CSS columns only support column-gap, not row-gap, so
    // this has to live on each card instead of the parent's `gap-5`. The
    // hover:border/shadow pair is the same "highlight" treatment used on
    // ProjectCard and CertificationCard, so hovering any card in any of
    // the three masonry sections reads as the same interaction.
    <div className="mb-5 flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 break-inside-avoid transition-all hover:border-red-200 hover:shadow-md dark:border-zinc-900 dark:bg-zinc-950 dark:hover:border-red-900/50">
      <Quote className="h-5 w-5 text-red-600 dark:text-red-400" />

      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
          {getInitials(name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-black dark:text-white">
            {name}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
