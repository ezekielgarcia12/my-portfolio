// Content for the About Me section of the homepage (see
// src/components/sections/about-section.tsx). It's a stand-in for a real
// database — see AGENTS.md, Phase 1 has no backend.

export type PersonalityTrait = {
  // A short code, e.g. "S" for "Steady" — not shown on its own, just used
  // as the React key for each trait badge.
  code: string;
  label: string;
};

// Where you're based — shown in its own small card at the top of the
// About section.
export const location = "CSJDM Bulacan, Philippines";

// Your personality, by whichever framework(s) you like — DISC (`traits`)
// and/or Myers-Briggs (`mbti`). Change freely if you retake an assessment
// or want to phrase it differently.
export const personality = {
  mbti: "INTP-A (Logician)",
  traits: [
    // The 5 Myers-Briggs/16Personalities dimensions for INTP-A — each one
    // is a spectrum between two opposites (e.g. Introverted <-> Extroverted),
    // with the percentage the assessment gave for the side shown here.
    { code: "I", label: "57% Introvert" },
    { code: "N", label: "67% Intuitive" },
    { code: "T", label: "60% Thinking" },
    { code: "P", label: "75% Prospecting" },
    { code: "A", label: "57% Assertive" },
    // DISC traits.
    { code: "SC", label: "Steady & Compliant" },
  ] as PersonalityTrait[],
  // Where these results came from — shown as links at the foot of the
  // Personality card.
  references: [
    { label: "16Personalities test", url: "https://www.16personalities.com/free-personality-test" },
    { label: "DISC personality test", url: "https://testlibrary.com/disc-test/" },
  ],
};

// The steps of your workflow, in order.
export const howIWork: string[] = [
  "Understand First",
  "Plan & Design",
  "Build",
  "Test",
  "Get Feedback",
  "Improve",
];

export const currentlyExploring: string[] = [
  "LLM",
  "Neural Networks",
  "Evaluation and RAGAS",
  "Vector DB + RAG",
];

// Placeholder entries — replace with real ones, or trim the list down if
// you only speak one.
export const languages: string[] = ["English", "Filipino"];

// What you're into outside of work/tech — replaces the old separate
// interests / music-taste / movie-genre cards.
export const nonTechnicalSide: string[] = [
  "Cycling",
  "Movies and Series",
  "Drawing",
  "Gaming",
  "Music",
];

// Small preferences/values/miscellany that don't fit any other card.
export const others: string[] = [
  "IDE Theme Tokyo Night",
  "Windows",
  "Minimalist UI",
  "Clean code",
  "Libra",
  "Year of the Tiger",
  "5x coffee a day",
];
