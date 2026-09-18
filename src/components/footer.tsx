// Site footer — shown once at the bottom of the page, after every section.
// Copyright line on the left, social links on the right (stacked instead,
// copyright above links, on narrow screens where there isn't room for a
// row). Nothing dynamic beyond the year, which updates itself instead of
// needing a manual edit every January.
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 px-6 py-8 sm:px-16 dark:border-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-left dark:text-zinc-400">
        <div>
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="mt-1">Built with Next.js &amp; Tailwind CSS.</p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
            Let&apos;s connect
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
