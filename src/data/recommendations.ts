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
    name: "Rachelle Carillo",
    role: "Business Analyst, Herma Corporation",
    quote:
      "It’s been great working with you as a developer. I admire your creative mindset and how you always find ways to improve things and solve problems efficiently. You are approachable, supportive, and dedicated to delivering quality work. Thank you for your contributions and for being a great teammate. Keep up the good work!",
  },
  {
    name: "Kevin Chavez",
    role: "Network & Infrastructure Supervisor, Herma Corp.",
    quote:
      `Kiel is a hardworking, diligent programmer with a keen eye for clean, user-friendly design and strong analytical skills in data and database work. He is also a kind, approachable colleague who is always willing to help and share his knowledge with others.`,
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
    name: "Llod San Lorenzo",
    role: "InfoSec Officer, Herma Corp.",
    quote: "Kiel is very passionate and easy to work with. We collaborated on various cybersecurity initiatives, including threat simulations such as phishing simulation exercises, security assessments, and strategic efforts to enhance the organization's security posture. His contributions also extended to improving the Software Development Lifecycle (SDLC), strengthening development processes and policies, implementing security practices and controls, and promoting secure coding standards and best practices.",
  },
  {
    name: "Albert Miguela",
    role: "Application Developer, Herma Corporation",
    quote:
      "Honestly, Sir Kiel is a genuinely strong technical thinker when it comes to development. He consistently brings solid ideas on how to simplify implementation, improve architecture, and streamline the development workflow. He's also great at technical collaboration communicating clearly on design decisions, giving constructive code review and architecture feedback, and aligning with the team on best practices. Overall, working with him is smooth, efficient, and hassle-free.",
  },
  {
    name: "Ace Morada",
    role: "AI Automation Specialist / Technical Support Engr., Pointwest",
    quote: "Kiel is my friend an exceptional developer who consistently delivers high-quality work. Beyond being a great collaborator, he’s been like a mentor to me when it comes to web and app development. His guidance, problem-solving skills, and attention to detail made a huge difference in our work together.",
  },
];
