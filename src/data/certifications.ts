// The certification list shown on the Certifications page
// ("/certifications"). It's a stand-in for a real database — see
// AGENTS.md, Phase 1 has no backend. Below are placeholder entries;
// replace them with your real certifications (and delete any you don't
// have yet).

export type Certification = {
  title: string;
  issuer: string;
  // Just the year/month is enough — no need for a full date.
  issued: string;
  // Link to the credential (e.g. a Credly badge or issuer verification
  // page). Leave out if you don't have one.
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "2024",
    credentialUrl: "https://www.credly.com/",
  },
  {
    title: "Laravel Certified Developer",
    issuer: "Laravel",
    issued: "2023",
    credentialUrl: "https://www.credly.com/",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    issued: "2023",
    credentialUrl: "https://www.coursera.org/",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google (Coursera)",
    issued: "2022",
  },
];
