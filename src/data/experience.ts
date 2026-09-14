// The milestones shown on the Experience page ("/experience") as a
// timeline, newest first. It's a stand-in for a real database — see
// AGENTS.md, Phase 1 has no backend. These are placeholder milestones —
// replace them with your real story.

export type ExperienceMilestone = {
  // A unique ID for this milestone — used as the React key when rendering
  // the list (see Timeline). Dates alone won't always be unique (e.g. two
  // milestones starting the same month), and once this data comes from a
  // real database it'll have its own unique row ID, so this stands in for
  // that.
  id: string;
  // When this started, formatted like "April 2019".
  startDate: string;
  // When it ended, same format as startDate — or null if it's still
  // ongoing, which the Timeline shows as "Present". For a single-date
  // milestone (e.g. a graduation) that has no ending, just set this equal
  // to startDate.
  endDate: string | null;
  title: string;
  // The company/organization this happened at. Optional — a personal
  // milestone (e.g. writing your first program) won't have one.
  company?: string;
  description: string;
};

export const experience: ExperienceMilestone[] = [
  // {
  //   id: "continuing-to-build-and-learn",
  //   startDate: "October 2026",
  //   endDate: null,
  //   title: "Software Backend Developer",
  //   company: "WebDev200",
  //   description:
  //     "Still growing — exploring new tools and taking on more ambitious projects.",
  // },
  {
    id: "full-stack-developer",
    startDate: "March 2021",
    endDate: null,
    title: "Application Developer",
    company: "Herma Corporation - Quezon City, PH",
    description:
      "Took on more ownership — architecture decisions, mentoring, and shipping larger features.",
  },
  {
    id: "junior-full-stack-developer",
    startDate: "April 2019",
    endDate: "March 2021",
    title: "Business Application Associate",
    company: "Herma Corporation - Quezon City, PH",
    description:
      "Provide day-to-day support for ERP applications, including user assistance, issue resolution, and system monitoring. Investigate, troubleshoot, and resolve ERP- related incidents and system defects.",
  },
  {
    id: "graduated-aics",
    startDate: "2015",
    endDate: "2019",
    title: "Graduated from Asian Institute of Computer Studies",
    company: "Asian Institute of Computer Studies",
    description:
      "Picked up HTML, CSS, and PHP, and started building small personal projects.",
  },
  {
    id: "first-hello-world",
    startDate: "2015",
    endDate: "2015",
    title: 'Wrote my first "Hello, World!"',
    description:
      "Typed out my very first program and got hooked on turning ideas into code.",
  },
];
