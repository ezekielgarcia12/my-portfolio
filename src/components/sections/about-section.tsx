// About Me section — location, personality type, plus a handful of
// smaller subsections (how I work, what I'm exploring, languages,
// non-technical interests), each shown as its own card in a masonry
// layout — see recommendations-section.tsx for why `columns`, not
// `grid`. Content comes from src/data/about.ts so it can be edited
// without touching this file.

import { AboutCard } from "@/components/about-card";
import { Badge } from "@/components/badge";
import {
  currentlyExploring,
  howIWork,
  languages,
  location,
  nonTechnicalSide,
  others,
  personality,
} from "@/data/about";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-900"
    >
      <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
        About Me
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        A bit more about me
      </h2>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AboutCard title="Where I'm Based">
          <Badge>{location}</Badge>
        </AboutCard>

        <AboutCard title="My Personality">
          <div className="flex flex-wrap gap-2">
            <Badge>MBTI: {personality.mbti}</Badge>
            {personality.traits.map((trait) => (
              <Badge key={trait.code}>{trait.label}</Badge>
            ))}
          </div>

          {/* One sentence crediting both sources, each name linking out
              to the test it came from — assumes personality.references
              always has exactly these two entries, in this order. */}
          <p className="mt-4 border-t border-zinc-100 pt-3 text-xs text-zinc-500 dark:border-zinc-900 dark:text-zinc-400">
            These results are based on the{" "}
            <a
              href={personality.references[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:text-black dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white"
            >
              {personality.references[0].label}
            </a>{" "}
            and the{" "}
            <a
              href={personality.references[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:text-black dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white"
            >
              {personality.references[1].label}
            </a>
            .
          </p>
        </AboutCard>

        <AboutCard title="How I Work">
          <div className="flex flex-wrap gap-2">
            {howIWork.map((step) => (
              <Badge key={step}>{step}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Non-technical Side">
          <div className="flex flex-wrap gap-2">
            {nonTechnicalSide.map((thing) => (
              <Badge key={thing}>{thing}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Currently Exploring">
          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Languages">
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge key={lang}>{lang}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Others">
          <div className="flex flex-wrap gap-2">
            {others.map((thing) => (
              <Badge key={thing}>{thing}</Badge>
            ))}
          </div>
        </AboutCard>
      </div>
    </section>
  );
}
