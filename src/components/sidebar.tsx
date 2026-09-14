// Site-wide left sidebar: brand/logo, page links, social quick-links, and
// the theme toggle. Rendered once in src/app/layout.tsx so it shows on
// every page.
//
// It's positioned `fixed` so it stays put on screen while the page content
// scrolls past it — see layout.tsx, where the content wrapper gets
// `lg:pl-64` to leave room for it.
//
// Responsive behavior: below the `lg` breakpoint there isn't room for a
// full-height side panel, so this is hidden and <MobileTopBar> (a slim top
// bar with a hamburger menu) is shown instead. `hidden lg:flex` here and
// `lg:hidden` on the top bar are what toggle between the two.
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";

// Shared with MobileTopBar so the link list can't drift out of sync between
// the two layouts.
// Note: /contact has no page yet and will 404 until it's built (see
// PORTFOLIO-PLAN.md's Phase 1 roadmap).
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/my-space", label: "My Space" },
  { href: "/contact", label: "Contact" },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col overflow-y-auto border-r border-zinc-100 px-6 py-8 lg:flex dark:border-zinc-900">
      {/* Site brand mark — separate from profile.name (the person's actual
          name, used on the About page etc). Two colors by design: the
          accent color for "Ez", default text color for "Devs". */}
      <Link href="/" className="text-base font-semibold tracking-tight">
        <span className="text-red-600 dark:text-red-400">Ez</span>
        <span className="text-black dark:text-white">Devs</span>
      </Link>

      <ul className="mt-10 flex flex-col gap-1 text-sm text-zinc-500 dark:text-zinc-400">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* mt-auto pushes this to the bottom of the sidebar, however tall the
          link list above ends up being. */}
      <div className="mt-auto flex flex-col gap-5 border-t border-zinc-100 pt-6 dark:border-zinc-900">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </aside>
  );
}
