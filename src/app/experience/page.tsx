// Experience page ("/experience").
// Shows a timeline of milestones from src/data/experience.ts, oldest
// first.

import { Timeline } from "@/components/timeline";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="flex-1 px-6 py-20 sm:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
          Experience
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
          My Journey
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          From my first line of code to where I am today.
        </p>

        <div className="mt-12 max-w-2xl">
          <Timeline items={experience} />
        </div>
      </div>
    </div>
  );
}
