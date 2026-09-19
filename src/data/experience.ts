// The milestones shown in the Experience section of the homepage (see
// src/components/sections/experience-section.tsx) as a timeline, newest
// first. It's a stand-in for a real database — see AGENTS.md, Phase 1 has
// no backend. These are placeholder milestones — replace them with your
// real story.
//
// Each top-level entry is one company. A company can list multiple
// `positions` — e.g. a promotion — which Timeline renders as a sub-list
// underneath the company name. An entry with no `company` (e.g. a
// graduation) is a standalone personal milestone instead, shown as a
// single plain item with no sub-list.

export type ExperiencePosition = {
  // A unique ID for this position — used as the React key when rendering
  // the sub-list (see Timeline).
  id: string;
  title: string;
  // When this started, formatted like "April 2019".
  startDate: string;
  // When it ended, same format as startDate — or null if it's still
  // ongoing, which Timeline shows as "Present". For a single-date position
  // (e.g. a graduation) that has no ending, just set this equal to
  // startDate.
  endDate: string | null;
  // A single paragraph, or a list of bullet points (e.g. a set of
  // achievements/responsibilities) — Timeline renders each differently.
  // Optional — leave it out for a milestone that doesn't need one (e.g.
  // "Wrote my first Hello, World!").
  description?: string | string[];
};

export type ExperienceGroup = {
  // A unique ID for this company/milestone — used as the React key for the
  // top-level timeline entry.
  id: string;
  // The overall date range shown next to the company name — the full span
  // across every position held there. Set by hand rather than computed
  // from `positions`, since these are just display strings ("April 2019"),
  // not real dates to compare and sort.
  startDate: string;
  endDate: string | null;
  // The company/organization this happened at. Optional — a personal
  // milestone (e.g. writing your first program) won't have one.
  company?: string;
  // At least one position. A company you were promoted within lists more
  // than one, newest first.
  positions: ExperiencePosition[];
};

export const experience: ExperienceGroup[] = [
  // {
  //   id: "webdev200",
  //   startDate: "October 2026",
  //   endDate: null,
  //   company: "WebDev200",
  //   positions: [
  //     {
  //       id: "continuing-to-build-and-learn",
  //       title: "Software Backend Developer",
  //       startDate: "October 2026",
  //       endDate: null,
  //       description:
  //         "Still growing — exploring new tools and taking on more ambitious projects.",
  //     },
  //   ],
  // },
  {
    id: "herma-corporation",
    startDate: "April 2019",
    endDate: null,
    company: "Herma Corporation - Quezon City, PH",
    positions: [
      {
        id: "full-stack-developer",
        title: "Application Developer",
        startDate: "March 2021",
        endDate: null,
        description: [
          "Led the definition and enforcement of engineering standards, coding guidelines, and best practices, driving consistency, scalability, and long-term maintainability across the development team.",
          "Architected and designed scalable database schemas and application workflows, aligning technical solutions with business requirements and future growth.",
          "Defined and oversaw deployment architecture and release strategies, partnering with IT Network and Infrastructure teams to ensure high availability and reliable production environments.",
          "Owned the end-to-end software development lifecycle, from requirements analysis and system design to development, testing, and production deployment.",
        ],
      },
      {
        id: "junior-full-stack-developer",
        title: "Business Application Associate",
        startDate: "April 2019",
        endDate: "March 2021",
        description:
          "Provide day-to-day support for ERP applications, including user assistance, issue resolution, and system monitoring. Investigate, troubleshoot, and resolve ERP-related incidents and system defects.",
      },
    ],
  },
  {
    id: "graduated-aics",
    startDate: "2015",
    endDate: "2019",
    company: "Asian Institute of Computer Studies - Quezon City, PH",
    positions: [
      {
        id: "graduated-aics-position",
        title: "BS in Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
    ],
  },
  {
    id: "first-hello-world",
    startDate: "2015",
    endDate: "2015",
    positions: [
      {
        id: "first-hello-world-position",
        title: 'Wrote my first "Hello, World!"',
        startDate: "2015",
        endDate: "2015",
      },
    ],
  },
];
