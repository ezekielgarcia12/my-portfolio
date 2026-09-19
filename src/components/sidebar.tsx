// Left nav column, shown beside the stacked sections on wide screens:
//
//   About me   |   Hero section
//   Tech       |
//   Experience |   Tech stacks
//   ...        |   ...
//
// Rendered in src/app/layout.tsx next to `{children}` inside a shared flex
// row, so it's a normal in-flow column (not `fixed`/floating) — it can't
// overlap the content because the browser lays the two side by side, the
// same way it lays out any two-column flex row.
//
// `<aside>` itself has no vertical padding — flex's default
// `align-items: stretch` makes it match the height of its sibling (the
// section stack) automatically, so the `border-r` divider runs the full
// height of the page content, not just as tall as the link list. The
// `<nav>` inside it is `sticky` so the links themselves stay visible near
// the top of the viewport while the (much taller) content scrolls past.
//
// Hidden below the `lg` breakpoint — no room for a side column there.
// <MobileMenu> (wired up in site-header.tsx) covers navigation instead.
"use client";

import Link from "next/link";
import { NAV_LINKS, SECTION_IDS } from "@/components/site-header";
import { useActiveSection } from "@/lib/use-active-section";

export function Sidebar() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <aside className="hidden w-48 shrink-0 border-r border-zinc-100 pr-4 lg:block dark:border-zinc-900">
      <nav aria-label="Section" className="sticky top-24 py-10">
        <ul className="flex flex-col gap-1 text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = link.id === activeId;

            // The "Got an idea?" link is a CTA, not just another section
            // link — always shown in the accent color (not just when
            // active) so it stands out, but same plain hover-highlight
            // treatment as every other link, no filled button.
            if (link.id === "contact") {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className="block rounded-md px-3 py-2 font-medium text-red-600 transition-colors hover:bg-zinc-100 dark:text-red-400 dark:hover:bg-zinc-900"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-zinc-100 font-medium text-red-600 dark:bg-zinc-900 dark:text-red-400"
                      : "text-zinc-500 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
