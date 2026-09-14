// One tech-stack logo. Most come from the tech-stack-icons package
// (https://www.tech-stack-icons.com/); a few tools without a logo there
// pass a pre-rendered `fallback` icon instead (see the About page, which
// renders it from a lucide-react icon before it gets here).
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
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900">
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
            <div className="dark:hidden">
              <StackIcon name={icon} variant="light" className="h-8 w-8" />
            </div>
            <div className="hidden dark:block">
              <StackIcon name={icon} variant="dark" className="h-8 w-8" />
            </div>
          </>
        ) : (
          fallback
        )}
      </div>
      <span className="text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
    </div>
  );
}
