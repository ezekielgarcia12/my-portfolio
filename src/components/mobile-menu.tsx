// The nav links collapsed into a hamburger menu, shown below the `lg`
// breakpoint where SiteHeader's inline link row would not fit — see
// site-header.tsx, which wraps this in a `lg:hidden` div so the two can't
// drift out of sync.
// Needs to be a Client Component since it tracks open/closed state.
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = { id: string; href: string; label: string };

export function MobileMenu({
  links,
  activeId,
}: {
  links: NavLink[];
  // Which link.id is currently in view, from useActiveSection — highlighted
  // the same way SiteHeader's desktop link row highlights it. null while
  // the visitor is still up at Hero, before any tracked section is active.
  activeId: string | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        // Positioned absolute (relative to the header, see navbar.tsx) so
        // it overlays the page as a full-width panel instead of being
        // squeezed into whatever space is left in the header's flex row.
        <div className="absolute inset-x-0 top-full border-t border-zinc-100 bg-white px-6 py-6 dark:border-zinc-900 dark:bg-black">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((link) => {
              const isActive = link.id === activeId;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={
                      isActive
                        ? "font-medium text-red-600 underline underline-offset-4 dark:text-red-400"
                        : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
