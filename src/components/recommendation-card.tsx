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
    <div className="flex h-full flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-900">
      <Quote className="h-5 w-5 text-red-600 dark:text-red-400" />

      <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
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
