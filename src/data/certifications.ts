// The certification list shown in the Certifications section of the
// homepage (see src/components/sections/certifications-section.tsx). It's
// a stand-in for a real database — see
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

// Listed latest to oldest by `issued` date — keep new entries sorted in
// the same order when adding more, since this list is shown as-is (no
// sorting happens at render time).
export const certifications: Certification[] = [
  {
    title: "UX/UI Design Fundamentals: Usability and Visual Principles",
    issuer: "Coursera (SkillUp)",
    issued: "June 2026",
    credentialUrl: "https://drive.google.com/file/d/1jb5OFqNIdo0y-qvdy1OjZzPbXKpXTwNo/view?usp=sharing",
  },
  {
    title: "Microservice Architectures",
    issuer: "Coursera (Vanderbilt University)",
    issued: "December 2025",
    credentialUrl: "https://drive.google.com/file/d/1z5ykdIMJACAG7V3hTxz2XUMlsxZ6D90U/view?usp=sharing",
  },
  {
    title: "Containers & Kubernetes Essentials",
    issuer: "Coursera (IBM)",
    issued: "December 2025",
    credentialUrl: "https://drive.google.com/file/d/1px46hX_BVUsP9qd_dWAr_Z2hfcz55N_v/view?usp=sharing",
  },
  {
    title: "Full Stack Application Development",
    issuer: "Coursera (IBM)",
    issued: "October 2025",
    credentialUrl: "https://drive.google.com/file/d/1azlLOuuXiCEgmn_P3hLxDWuqxzraw0Dg/view?usp=sharing",
  },
  {
    title: "Agile Software Development",
    issuer: "Coursera (University of Minnesota)",
    issued: "August 2025",
    credentialUrl: "https://drive.google.com/file/d/1AnkH7XSyjnk_7PjG1eW1sUfqg5iCVsTI/view?usp=sharing",
  },
  {
    title: "Software Engineering",
    issuer: "Coursera (IBM)",
    issued: "July 2025",
    credentialUrl: "https://drive.google.com/file/d/1ph4-0TiNVdxF0ibVERYAcDQfoUjELgMb/view?usp=sharing",
  },
  {
    title: "XAMUN.ai Certified Builder (Level 1)",
    issuer: "Xamun AI",
    issued: "June 2025",
    credentialUrl: "https://drive.google.com/file/d/1kbgjotSLU0LwlEDyyYn2bWj-0gTDLsbt/view?usp=sharing",
  },
  {
    title: "Designing and Implementing a Microsoft Azure AI Solution",
    issuer: "Microsoft",
    issued: "September 2024",
    credentialUrl: "https://drive.google.com/file/d/1Xzzy-2x1ef_O_i9KiaU27tbViJOumJJB/view?usp=sharing",
  },
  {
    title: "Craft effective prompts for Microsoft Copilot for Microsoft 365",
    issuer: "Microsoft",
    issued: "September 2024",
    credentialUrl: "https://drive.google.com/file/d/1KQIooV6igtFdoEVDDIs2GSDAAUDpw6jQ/view?usp=sharing",
  },
  {
    title: "UX/UI Conference 2024",
    issuer: "UX+",
    issued: "August 2024",
    credentialUrl: "https://drive.google.com/file/d/1kVUkUKXa1_5m3KBYUaOfQ56IIfarEtao/view?usp=sharing",
  },
  {
    title: "Web and Mobile Designer: UI/UX, Figma, +more",
    issuer: "Udemy",
    issued: "April 2024",
    credentialUrl: "https://drive.google.com/file/d/1s1CCZxWRSmuikzlQlbjiPZkX78pIoRhW/view?usp=sharing",
  },
  {
    title: "Microsoft Dynamics 365: Core Finance and Operations",
    issuer: "Microsoft",
    issued: "January 2024",
    credentialUrl: "https://drive.google.com/file/d/1NG2wfZQzwlflbVYHLY-Nf5FZqh5Q_7ZE/view?usp=sharing",
  },
  {
    title: "MB-300: Microsoft Dynamics 365: Core Finance and Operations",
    issuer: "Trainocate",
    issued: "January 2024",
    credentialUrl: "https://drive.google.com/file/d/1jpKUgUSsAQfmNfBHmmunHWqLZnzLh0Q7/view?usp=sharing",
  },
  {
    title: "Accounting for Non-Accountants with Financial Statements Analysis",
    issuer: "BANKERS INSTITUTE OF THE PHILIPPINES, INC.",
    issued: "June 2021",
    credentialUrl: "https://drive.google.com/file/d/1qvhDD4JboUEN6LDj_AdMi3YWS50qK0vL/view?usp=sharing",
  }
];
