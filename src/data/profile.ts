// This file holds the basic info shown on the home page (name, role, bio).
// It's a stand-in for a real database — see AGENTS.md, Phase 1 has no backend.
// To update your info, just edit the values below.

export const profile = {
  name: "Kiel Garcia",
  role: "Full-Stack Developer",
  bio: "I build clean, practical web apps from the database to the UI. I enjoy turning rough ideas into working products, learning new tools along the way, and writing code that's easy for the next person (often future me) to understand.",
  // Swap this for a real photo later — see src/app/page.tsx for where it's used.
  avatarUrl: null as string | null,
};

// Quick-link icons shown in the navbar (see src/components/social-links.tsx).
// Replace each url with your real profile link. Remove an entry to hide it.
export const socialLinks = [
  { icon: "github", label: "GitHub", url: "https://github.com/yourusername" },
  { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { icon: "facebook", label: "Facebook", url: "https://facebook.com/yourusername" },
  { icon: "instagram", label: "Instagram", url: "https://instagram.com/yourusername" },
] as const;
