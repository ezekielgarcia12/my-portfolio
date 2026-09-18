// Tracks which section of the single-page site is currently in the user's
// view, so the nav (SiteHeader / MobileMenu) can highlight the matching
// link as they scroll — a "scroll-spy". Needs to run in the browser (it reads
// the DOM and observes scroll position), so any component using this hook
// must be a Client Component.
"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  // Starts as null (nothing active yet) rather than defaulting to
  // sectionIds[0] — nothing is actually "active" until the browser has
  // measured scroll position, so assuming the first link before that would
  // briefly highlight the wrong one.
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Shrinks the "viewport" IntersectionObserver checks against to a
      // thin band near the top of the screen. A section counts as active
      // once it crosses that band, rather than only when it fills the
      // whole screen.
      { rootMargin: "-15% 0px -70% 0px" }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // sectionIds is expected to be a stable, module-level constant array
    // (see NAV_LINKS in site-header.tsx) — it isn't recreated on every render.
  }, [sectionIds]);

  return activeId;
}
