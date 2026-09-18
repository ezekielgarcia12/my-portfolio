// About Me section — personality type, plus a handful of smaller
// subsections (interests, what I'm learning, values, languages, fun
// facts), each shown as its own card in a masonry layout — see
// recommendations-section.tsx for why `columns`, not `grid`. Content comes
// from src/data/about.ts so it can be edited without touching this file.

import { ExternalLink } from "lucide-react";
import { AboutCard } from "@/components/about-card";
import { Badge } from "@/components/badge";
import {
  currentlyLearning,
  funFacts,
  ideExtensions,
  interests,
  languages,
  movieGenres,
  musicGenres,
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
        <AboutCard title="My Personality">
          <div className="flex flex-wrap gap-2">
            <Badge>MBTI: {personality.mbti}</Badge>
            {personality.traits.map((trait) => (
              <Badge key={trait.code}>{trait.label}</Badge>
            ))}
          </div>

          {/* Reference links to where these results came from, at the
              foot of the card — same link style CertificationCard uses
              for "View credential". */}
          <div className="mt-4 space-y-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-900">
            {personality.references.map((ref) => (
              <a
                key={ref.url}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {ref.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="When I'm Not Working">
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Currently Learning">
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((skill) => (
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

        <AboutCard title="Fun Facts">
          <div className="flex flex-wrap gap-2">
            {funFacts.map((fact) => (
              <Badge key={fact}>{fact}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Music Taste">
          <div className="flex flex-wrap gap-2">
            {musicGenres.map((genre) => (
              <Badge key={genre}>{genre}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Movie Genres">
          <div className="flex flex-wrap gap-2">
            {movieGenres.map((genre) => (
              <Badge key={genre}>{genre}</Badge>
            ))}
          </div>
        </AboutCard>

        <AboutCard title="IDE Extensions">
          <div className="flex flex-wrap gap-2">
            {ideExtensions.map((extension) => (
              <Badge key={extension}>{extension}</Badge>
            ))}
          </div>
        </AboutCard>
      </div>
    </section>
  );
}
