// The nav links collapsed into a hamburger menu. navbar.tsx decides when
// this shows vs. the full link list (currently below the `lg` breakpoint)
// by wrapping it in a `lg:hidden` div — this component doesn't repeat that
// breakpoint itself, so the two can't drift out of sync.
// Needs to be a Client Component since it tracks open/closed state.
"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export function MobileMenu({
  links,
  children,
}: {
  links: NavLink[];
  // Extra content shown below the links in the open panel — the social
  // icons and theme toggle, in this case.
  children?: ReactNode;
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
          <ul className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-black dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {children && (
            <div className="mt-6 flex items-center gap-5 border-t border-zinc-100 pt-6 dark:border-zinc-900">
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
