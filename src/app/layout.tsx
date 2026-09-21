import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// The site's one font, for a clean minimalist look. Loaded here (instead of
// a <link> tag) so Next.js can self-host it — faster and no layout shift.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiel Garcia | Full-Stack Developer",
  description: "Portfolio of Kiel Garcia, a full-stack developer.",
};

// Tells the browser this page supports both light and dark and manages the
// switch itself. Without this, some browsers (Edge in particular, via its
// "Auto dark mode for websites" setting) apply their own forced-dark filter
// on top of the page, which can make our light/dark toggle look like it's
// not doing anything.
export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // scroll-smooth: since nav links now jump between sections on this
      // one page (see src/app/page.tsx) instead of loading new routes,
      // this makes those jumps glide instead of snapping instantly.
      className={`${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">
        {/* Runs before the page paints, so the right theme (light/dark)
            shows immediately instead of flashing the default and then
            switching. Kept as a plain inline script since it must run
            before React hydrates — see ThemeProvider for the same logic
            used after that. */}
        <Script id="set-initial-theme" strategy="beforeInteractive">
          {`
            (function () {
              var saved = null;
              try {
                saved = localStorage.getItem("theme");
              } catch (e) {
                // Storage unavailable (e.g. blocked by browser privacy
                // settings) — fall back to the system preference below.
              }
              var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              var isDark = saved === "dark" || (saved !== "light" && prefersDark);
              document.documentElement.classList.toggle("dark", isDark);
            })();
          `}
        </Script>
        <ThemeProvider>
          <SiteHeader />
          {/* Shared width/padding for the sidebar + content row — sections
              no longer set their own max-w/px, so this is the one place
              that controls how wide the page reads.
              Padding (px-6 sm:px-16) lives on this OUTER div, while
              mx-auto + max-w-6xl live on the INNER one — same split
              SiteHeader and Footer use for their own max-w-6xl row. That
              split matters: it's what makes the Sidebar's left edge line
              up with the logo above it. If padding were on the same
              element as max-w-6xl instead, the padding would eat into
              that 6xl box and shift its content inward relative to
              SiteHeader's (unpadded) 6xl box, throwing the two out of
              alignment. h-full on the inner div lets it grow to match
              this row's full height, so the flex row's default
              align-items: stretch carries that full height down to
              Sidebar's border-r divider. min-w-0 on the content column
              stops long unbreakable content (e.g. a wide grid) from
              forcing the row wider than its container. */}
          <div className="flex-1 px-6 sm:px-16">
            <div className="mx-auto flex h-full w-full max-w-6xl gap-8">
              <Sidebar />
              <div className="flex min-w-0 flex-1 flex-col">{children}</div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
