import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { MobileTopBar } from "@/components/mobile-top-bar";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// The site's one font, for a clean minimalist look. Loaded here (instead of
// a <link> tag) so Next.js can self-host it — faster and no layout shift.
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiel Garcia — Full-Stack Developer",
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
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
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
          <MobileTopBar />
          <Sidebar />
          {/* lg:pl-64 leaves room for the fixed Sidebar (see sidebar.tsx),
              which doesn't take up space in normal document flow. The page
              itself scrolls normally — the sidebar just stays in place. */}
          <div className="flex flex-1 flex-col lg:pl-64">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
