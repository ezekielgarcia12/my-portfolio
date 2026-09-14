// About page ("/about").
// A short bio plus a grid of tech-stack icons. Content comes from
// src/data/profile.ts and src/data/tech-stack.ts so it can be edited
// without touching this file.

import { TechIcon } from "@/components/tech-icon";
import { profile } from "@/data/profile";
import { techStack } from "@/data/tech-stack";

export default function AboutPage() {
  return (
    <div className="flex-1 px-6 py-20 sm:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
          About
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
          Hi, I&apos;m {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          {profile.bio}
        </p>

        <h2 className="mt-16 text-lg font-semibold text-black dark:text-white">
          Tech Stack
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Tools and technologies I use regularly.
        </p>

        <div className="mt-8 space-y-10">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
                {group.category}
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
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
      </div>
    </div>
  );
}
