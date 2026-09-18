// Site-wide top bar: just the logo on the left and the theme toggle on the
// right. Rendered once in src/app/layout.tsx so it shows on every page.
// The actual section links live in <Sidebar> now (a real column next to
// the page content, not part of this bar) — below the `lg` breakpoint,
// where there's no room for that sidebar column, <MobileMenu> here takes
// over instead.
//
// `sticky top-0` keeps it pinned to the top of the viewport while the page
// scrolls.
//
// Since the whole site is one scrolling page (see src/app/page.tsx), nav
// links are anchors (e.g. "#projects") that jump to a section on that
// page. This file needs to be a Client Component because it uses
// useActiveSection to highlight whichever section the user has scrolled to
// (needed for MobileMenu's highlighting — see the `lg:hidden` div below).
"use client";

import { MobileMenu } from "@/components/mobile-menu";
import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/lib/use-active-section";

// Each `id` must match the `id` on the matching <section> in
// src/components/sections/ — that's what useActiveSection watches and what
// the browser scrolls to. The Hero section ("home") has no entry here —
// it's the top of the page already, reachable via the logo link.
export const NAV_LINKS = [
  { id: "about", href: "#about", label: "About Me" },
  { id: "tech-stack", href: "#tech-stack", label: "Tech Stack" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "certifications", href: "#certifications", label: "Certifications" },
  { id: "recommendations", href: "#recommendations", label: "Recommendations" },
];

// The scroll-spy needs to watch "home" (the Hero section) too, even
// though it has no nav link — otherwise, while the visitor is still
// reading the bio, there's nothing to hold "active" status, and Tech
// Stack (the next watched section) ends up highlighting early, as soon as
// its top edge nears the scroll-spy's detection band, well before the
// visitor has actually scrolled to it.
//
// Defined once, outside the component, so it's the same array reference on
// every render — useActiveSection relies on that to avoid re-attaching its
// scroll observer unnecessarily. Exported so other nav UI (Sidebar,
// MobileMenu) can share the exact same reference instead of each creating
// their own.
export const SECTION_IDS = ["home", ...NAV_LINKS.map((link) => link.id)];

export function SiteHeader() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/80 py-2 backdrop-blur-sm px-6 sm:px-16 dark:border-zinc-900 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <SiteLogo />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="lg:hidden">
            <MobileMenu links={NAV_LINKS} activeId={activeId} />
          </div>
        </div>
      </div>
    </header>
  );
}
