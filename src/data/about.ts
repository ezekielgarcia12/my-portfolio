// Content for the About Me section of the homepage (see
// src/components/sections/about-section.tsx). It's a stand-in for a real
// database — see AGENTS.md, Phase 1 has no backend.

export type PersonalityTrait = {
  // A short code, e.g. "S" for "Steady" — not shown on its own, just used
  // as the React key for each trait badge.
  code: string;
  label: string;
};

// Your personality, by whichever framework(s) you like — DISC (`traits`)
// and/or Myers-Briggs (`mbti`). Change freely if you retake an assessment
// or want to phrase it differently.
export const personality = {
  mbti: "INTP-A (Logician)",
  traits: [
    // The 5 Myers-Briggs/16Personalities dimensions for INTP-A — each one
    // is a spectrum between two opposites (e.g. Introverted <-> Extroverted);
    // the label here is whichever side the assessment placed you on.
    { code: "I", label: "Introverted" },
    { code: "N", label: "Intuitive" },
    { code: "T", label: "Thinking" },
    { code: "P", label: "Prospecting" },
    { code: "A", label: "Assertive" },
    // DISC traits.
    { code: "S", label: "Steady" },
    { code: "C", label: "Compliant" },
  ] as PersonalityTrait[],
  // Where these results came from — shown as links at the foot of the
  // Personality card.
  references: [
    { label: "16Personalities test", url: "https://www.16personalities.com/free-personality-test" },
    { label: "DISC test", url: "https://testlibrary.com/disc-test/" },
  ],
};

export const interests: string[] = ["Gaming", "Cycling", "Movies", "Sepak Takraw"];

export const currentlyLearning: string[] = [
  "AI Agents",
  "LLMs",
  "RAGs",
  "Python",
  "Data Engineering",
  "Cloud Engineering",
];

// Placeholder entries — replace with real ones, or trim the list down if
// you only speak one.
export const languages: string[] = ["English", "Filipino"];

// Placeholder entries — replace with real, actually-fun facts about you.
export const funFacts: string[] = [
  "I can solve a Rubik's cube in under two minutes.",
  "I've never left the country, but it's on my bucket list.",
  "My IDE theme has to be dark mode or I can't focus.",
];

// Placeholder entries — replace with what you actually listen to.
export const musicGenres: string[] = ["Lo-fi", "R&B", "Pop", "City Pop"];

// Placeholder entries — replace with what you actually watch.
export const movieGenres: string[] = ["Sci-Fi", "Thriller", "Anime", "Heist"];

// Placeholder entries — replace with your real editor/IDE extension setup.
export const ideExtensions: string[] = [
  "GitHub Copilot",
  "ESLint",
  "Prettier",
  "GitLens",
  "Tailwind CSS IntelliSense",
];
