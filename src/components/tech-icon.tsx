// One tech-stack logo. Most come from the tech-stack-icons package
// (https://www.tech-stack-icons.com/); a few tools without a logo there
// pass a pre-rendered `fallback` icon instead (see tech-stack-section.tsx,
// which renders it from a lucide-react icon before it gets here).
// Marked "use client" because StackIcon itself needs to run in the browser.
"use client";

import type { ReactNode } from "react";
import StackIcon, { type IconName } from "tech-stack-icons";

type TechIconProps = {
  label: string;
  icon?: IconName;
  // A ready-made icon element for tools with no logo in tech-stack-icons.
  // Has to be passed in already rendered (not as a component reference) —
  // this is a Client Component, and raw functions/components can't cross
  // the server/client boundary from the page that renders this.
  fallback?: ReactNode;
};

export function TechIcon({ label, icon, fallback }: TechIconProps) {
  return (
    // Pill-shaped badge: a small logo followed by the tool's name, so the
    // whole stack reads as a compact row of tags rather than a grid of tiles.
    <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white py-1 pr-3 pl-2 transition-colors hover:border-red-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-red-900">
      <div className="flex h-4 w-4 shrink-0 items-center justify-center">
        {icon ? (
          // Most of these icons are plain black/white marks that need to
          // flip with the theme — render both variants and let dark: hide
          // whichever one doesn't match the current theme. Icons that are
          // already full-color (e.g. TypeScript's blue box) just render
          // the same either way.
          // Note: the hidden/dark:hidden toggle has to live on our own
          // wrapper div, not StackIcon's className — StackIcon sets its own
          // inline `display` style, which would otherwise override it.
          <>
            {/* These wrappers are flex (not block) so the SVG isn't sat on a
                text line, which would add space below it and push it upward. */}
            <div className="flex dark:hidden">
              <StackIcon name={icon} variant="light" className="h-4 w-4" />
            </div>
            <div className="hidden dark:flex">
              <StackIcon name={icon} variant="dark" className="h-4 w-4" />
            </div>
          </>
        ) : (
          fallback
        )}
      </div>
      <span className="text-xs font-medium whitespace-nowrap text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
    </div>
  );
}
