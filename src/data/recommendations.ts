// The testimonials shown on the Recommendations page
// ("/recommendations") — quotes from people you've worked with. It's a
// stand-in for a real database — see AGENTS.md, Phase 1 has no backend.
// These are placeholder entries; replace them with real recommendations
// (e.g. copied from LinkedIn) as you get them.

export type Recommendation = {
  name: string;
  // Their role and where they know you from, e.g. "Engineering Manager at Acme".
  role: string;
  quote: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Maria Santos",
    role: "Engineering Manager, Acme Inc.",
    quote:
      "One of the most reliable developers I've worked with. Give them a vague ticket and they'll come back with a clean, well-thought-out solution — no hand-holding required.",
  },
  {
    name: "James Cruz",
    role: "Product Designer, Acme Inc.",
    quote:
      "Great to collaborate with on the design-to-code handoff. Always asks the right questions upfront instead of guessing, and the end result matches the design almost pixel for pixel.",
  },
  {
    name: "Angela Reyes",
    role: "CTO, StartupX",
    quote:
      "Brought a junior dev into a messy legacy codebase and had them shipping meaningful fixes within the first week. Picks things up fast and isn't afraid to ask when something's unclear.",
  },
];
