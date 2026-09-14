// Recommendations page ("/recommendations").
// Shows every testimonial from src/data/recommendations.ts as a
// responsive grid of cards — one column on mobile, more as the screen
// gets wider.

import { RecommendationCard } from "@/components/recommendation-card";
import { recommendations } from "@/data/recommendations";

export default function RecommendationsPage() {
  return (
    <div className="flex-1 px-6 py-20 sm:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
          Recommendations
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
          What people say
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          A few words from people I&apos;ve worked with.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec) => (
            <RecommendationCard key={rec.name} rec={rec} />
          ))}
        </div>
      </div>
    </div>
  );
}
