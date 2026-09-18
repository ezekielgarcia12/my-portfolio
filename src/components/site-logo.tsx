// The site's brand mark: the mascot next to the "EzDevs" wordmark, linking
// back to the top of the page. Used inside <SiteHeader> — kept as its own
// component so the mascot wiring isn't duplicated if that ever changes.
// "use client" because Mascot tracks the cursor with hooks, which only run
// in the browser.
"use client";

import Link from "next/link";
import { Mascot } from "page-mascot";

export function SiteLogo() {
  return (
    <Link href="#home" className="flex items-center">
      <Mascot
        directions="/mascots/cap-directions.webp"
        reactions="/mascots/cap-reactions.webp"
        size={78}
        label="EzDevs mascot"
      />
      <span className="text-2xl font-semibold tracking-tight">
        <span className="text-red-600 dark:text-red-400">Ez</span>
        <span className="text-black dark:text-white">Devs</span>
      </span>
    </Link>
  );
}
