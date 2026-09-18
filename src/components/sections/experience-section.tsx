// Experience section — a timeline of milestones from src/data/experience.ts,
// oldest first.

import { Timeline } from "@/components/timeline";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-900"
    >
      <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
        Experience
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        My Journey
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
        From my first line of code to where I am today.
      </p>

      <div className="mt-8 max-w-2xl">
        <Timeline items={experience} />
      </div>
    </section>
  );
}
