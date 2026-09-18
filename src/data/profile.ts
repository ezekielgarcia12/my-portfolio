// This file holds the basic info shown on the home page (name, role, bio).
// It's a stand-in for a real database — see AGENTS.md, Phase 1 has no backend.
// To update your info, just edit the values below.

export const profile = {
  name: "Kiel Garcia",
  // role: "Full-Stack Developer",
  // A blank line here becomes a paragraph break, a single line break stays
  // a line break — see the bio <p> in hero-section.tsx, which has
  // `whitespace-pre-line` so the browser renders this exactly as typed.
  bio: `A full-stack developer based in CSJDM, Bulacan, PH. 
  With 7+ years of experience turning ideas into practical, reliable applications. I enjoy solving problems, building clean solutions, and learning new technologies along the way.

  Got an idea, a project, or a problem to solve?
  Let's connect and create something amazing!`,
  // Paths under public/ — see src/components/sections/hero-section.tsx,
  // which shows whichever one matches the site's current light/dark theme.
  // Set back to null to show the placeholder instead of a photo.
  avatarUrl: {
    light: "/images/profile-light-mode.png",
    dark: "/images/profile-dark-mode.png",
  } as { light: string; dark: string } | null,
};

// Quick-link icons shown in the navbar (see src/components/social-links.tsx).
// Replace each url with your real profile link. Remove an entry to hide it.
export const socialLinks = [
  { icon: "github", label: "GitHub", url: "https://github.com/ezekielgarcia12" },
  { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/ezekiel-garcia/" },
  { icon: "facebook", label: "Facebook", url: "https://facebook.com/ezekielvargasgarcia" },
  { icon: "instagram", label: "Instagram", url: "https://instagram.com/_kielgarcia/" },
  { icon: "gmail", label: "Email", url: "mailto:ezekielvargasgarcia@gmail.com" },
  // Dummy number — replace 15551234567 with your real one (country code +
  // number, no "+" or spaces) once you have it.
  { icon: "whatsapp", label: "WhatsApp", url: "https://wa.me/_kielgarcia" },
] as const;
