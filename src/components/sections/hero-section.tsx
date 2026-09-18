// Hero section — the first thing visitors see on the single-page site.
// Shows a photo, greeting, and a short bio. Content comes from
// src/data/profile.ts so it can be edited without touching this file.
// Kept compact (no forced full-screen height) so it reads as the start of
// one continuous page rather than its own separate "screen".

import Image from "next/image";
import { Greeting } from "@/components/greeting";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/profile";

export function HeroSection() {
  const name = profile.name;

  return (
    // id="home" is the anchor target for the "Home" nav link — see
    // src/components/site-header.tsx and src/lib/use-active-section.ts.
    <section
      id="home"
      className="flex scroll-mt-20 items-center justify-center py-16"
    >
      <div className="flex w-full flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
        {/* Photo goes first in the markup so it lands on the left once
            sm:flex-row kicks in; on mobile the column layout just stacks it
            above the text.
            h-48/w-48 (12rem, growing to 16rem at sm:) gives the wrapper an
            actual size — next/image's `fill` mode positions the image
            absolutely and stretches it to match its nearest sized ancestor,
            so without an explicit height/width here the photo collapses to
            0x0 and never shows. shrink-0 stops the flex row from squashing
            it once the bio text needs more room.
            Both the light and dark photo render at once — dark:hidden /
            dark:block just toggles which one is visible — so this stays a
            plain Server Component instead of needing client-side theme
            state (same trick tech-icon.tsx uses for its light/dark icon
            variants). */}
        <div className="h-48 w-48 shrink-0 sm:h-64 sm:w-64">
          {profile.avatarUrl ? (
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 dark:hidden">
                <Image
                  src={profile.avatarUrl.light}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 640px) 16rem, 12rem"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 hidden dark:block">
                <Image
                  src={profile.avatarUrl.dark}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 640px) 16rem, 12rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-zinc-300">
              Photo coming soon
            </div>
          )}
        </div>

        {/* Text content: greeting, name, bio */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <p className="text-sm font-medium text-red-600 dark:text-red-400">
            <Greeting />
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
            I&apos;m {name}
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 whitespace-pre-line text-zinc-500 dark:text-zinc-400">
            {profile.bio}
          </p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
