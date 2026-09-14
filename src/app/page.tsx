// Home page ("/").
// Shows a hero section: name, role, a short bio, and a photo (or a
// placeholder until a real photo is added). Content comes from
// src/data/profile.ts so it can be edited without touching this file.

import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24 sm:px-16">
      <main className="flex w-full max-w-4xl flex-col-reverse items-center gap-12 sm:flex-row sm:justify-between sm:gap-16">
        {/* Text content: name, role, bio */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
            {profile.role}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-zinc-500 dark:text-zinc-400">
            {profile.bio}
          </p>
        </div>

        {/* Photo placeholder — swap for a real <Image> once you have a photo.
            Drop the file in public/images/ and see the comment below. */}
        <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600 sm:h-48 sm:w-48">
          {/* Once you add a photo (e.g. public/images/avatar.jpg), replace this
              div with:
              <Image src="/images/avatar.jpg" alt={profile.name} fill className="rounded-full object-cover" />
              inside a relatively-positioned parent the same size as this div. */}
          Photo coming soon
        </div>
      </main>
    </div>
  );
}
