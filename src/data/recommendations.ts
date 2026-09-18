// The testimonials shown in the Recommendations section of the homepage
// (see src/components/sections/recommendations-section.tsx) — quotes from
// people you've worked with. It's a stand-in for a real database — see
// AGENTS.md, Phase 1 has no backend.
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
    name: "Alex Lacsa",
    role: "Chartering Officer, Herma Shipping & Transport Inc.",
    quote:
      "He is highly knowledgeable and easy to work with. He understands what needs to be done with little to no explanation once I communicate the desired result. Whenever I raise an issue, he quickly identifies what needs to be fixed and addresses it immediately. His ability to pinpoint and resolve problems efficiently shows his strong understanding of the system and his work.",
  },
  // Extra placeholder entries below, with deliberately varied quote
  // lengths, just to have enough cards to see the masonry column layout
  // (see recommendations-section.tsx) actually staggering instead of
  // lining up like a regular grid. Trim back down once real
  // recommendations come in.
  {
    name: "Priya Nair",
    role: "CTO, Northwind Logistics",
    quote: "Turned our messy spec into a working prototype in under a week. Rare speed without cutting corners.",
  },
  {
    name: "Daniel Ortiz",
    role: "Senior Backend Engineer, Acme Inc.",
    quote:
      "Solid at debugging gnarly production issues under pressure. I've paired with them on a few 2am incidents and they stay calm, methodical, and actually find the root cause instead of just patching symptoms.",
  },
  {
    name: "Sofia Reyes",
    role: "Founder, Reyes & Co.",
    quote:
      "Hired them for a small freelance job and ended up bringing them back for three more projects. Communicates clearly, sets realistic timelines, and — more importantly — hits them.",
  },
  {
    name: "Marcus Webb",
    role: "Engineering Director, Northwind Logistics",
    quote: "Consistently one of the strongest code reviewers on the team.",
  },
  {
    name: "Liza Fernandez",
    role: "QA Lead, Acme Inc.",
    quote:
      "Writes code that's genuinely easy to test — clear boundaries, predictable state, no hidden side effects. Cuts our QA cycle time down noticeably whenever their work is in a release.",
  },
  {
    name: "Tom Bracken",
    role: "Product Manager, Reyes & Co.",
    quote:
      "Great at pushing back on scope creep in a way that doesn't feel like friction. They'll usually come back with a smaller version of the idea that ships sooner and still solves the actual problem, which has saved more than one deadline.",
  },
  {
    name: "Grace Lim",
    role: "Frontend Engineer, Northwind Logistics",
    quote: "Mentored me through my first big React refactor — patient, clear, never made me feel dumb for asking questions.",
  },
];
