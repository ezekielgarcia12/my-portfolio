// Tech Stack section — a grid of tech icons grouped by category. Split out
// from the About section so it gets its own nav entry (see NAV_LINKS in
// sidebar.tsx). Content comes from src/data/tech-stack.ts so it can be
// edited without touching this file.

import { TechIcon } from "@/components/tech-icon";
import { techStack } from "@/data/tech-stack";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-900"
    >
      <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
        Tech Stack
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        Tools &amp; Technologies
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
        Tools and technologies I use regularly.
      </p>

      <div className="mt-6 space-y-6">
        {techStack.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
              {group.category}
            </h3>
            <div className="mt-2 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
              {group.items.map((tech) => (
                <TechIcon
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  fallback={
                    tech.fallbackIcon && (
                      <tech.fallbackIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
