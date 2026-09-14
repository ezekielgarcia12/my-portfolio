// Manages the site's color theme: "light", "dark", or "system" (follow the
// OS/browser setting). The chosen theme is saved to localStorage so it's
// remembered on the next visit, and applied by toggling a "dark" class on
// <html> (see globals.css for how that class controls colors).
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theme";

// Figures out whether dark mode should be on right now, and updates <html>.
function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Starts as "system" so server and client render the same markup on
  // first load. The real saved value (if any) is read below, after mount,
  // since localStorage isn't available while rendering on the server.
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    // Wrapped in try/catch: some browsers (privacy settings, certain
    // embedded views) block localStorage entirely and throw here. If that
    // happens we just fall back to the default "system" theme.
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark" || saved === "system") {
        setThemeState(saved);
      }
    } catch {
      // Storage unavailable — ignore and keep the default theme.
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);

    // While following "system", react if the OS setting changes mid-visit.
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  function setTheme(next: Theme) {
    // Update state first so the toggle always works even if storage is
    // blocked — see the try/catch note above.
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable — the theme still applies for this session,
      // it just won't be remembered on the next visit.
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Lets any component read/change the current theme, e.g. <ThemeToggle />.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return context;
}
