// Slim top bar shown below the `lg` breakpoint, where there isn't room for
// the full <Sidebar>. Holds the brand mark plus a hamburger button that
// opens <MobileMenu> with the same links the sidebar shows.
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { NAV_LINKS } from "@/components/sidebar";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";

export function MobileTopBar() {
  return (
    // relative: MobileMenu's dropdown panel is positioned absolute against
    // this element, so it overlays the page as a full-width panel right
    // below the bar instead of being squeezed into the flex row.
    <header className="relative border-b border-zinc-100 lg:hidden dark:border-zinc-900">
      <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" className="text-base font-semibold tracking-tight">
          <span className="text-red-600 dark:text-red-400">Ez</span>
          <span className="text-black dark:text-white">Devs</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu links={NAV_LINKS}>
            <SocialLinks />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
