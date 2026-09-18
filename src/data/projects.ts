// The project list shown in the Projects section of the homepage (see
// src/components/sections/projects-section.tsx). It's a stand-in for a
// real database — see AGENTS.md, Phase 1 has no backend. To add a
// project, just add another object to this array.

export type Project = {
  title: string;
  // The company/client the project was built for.
  company: string;
  description: string;
  // The tech stack used, shown as small badges on the project card. Use
  // this for a project with just one stack.
  stack?: string[];
  // Use this instead of `stack` when a project went through more than one
  // stack (e.g. a legacy-to-modern migration) — each entry gets its own
  // labeled row of badges. See "Turnaround Monitoring System" below.
  stackVersions?: { label: string; items: string[] }[];
  // Optional links — leave either one out if it doesn't apply. Most
  // entries below are internal company systems with no public repo or
  // live demo, so both are left out.
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "CalibrateHG (Performance Management System)",
    company: "Herma Group",
    description:
      "A performance evaluation system to track employee productivity using KRA (Key Result Areas) and KPI (Key Performance Indicators). Enabled structured quarterly performance reviews, improving visibility into employee performance and HR decision-making.",
    stack: ["Laravel 10", "Vue 3", "Inertia.js", "TailwindCSS", "Laravel Jetstream", "MySQL"],
  },
  {
    title: "Kurobuta Village Management System",
    company: "Esguerra Farms and Stud Inc.",
    description:
      "A management system to track breeding lines, feed consumption, FCR (Feed Conversion Ratio), and ADG (Average Daily Gain). Generated analytical reports feeding into ERP systems, improving operational decisions and reducing resource waste.",
    stack: ["Laravel 10", "Vue 3", "Inertia.js", "TailwindCSS", "Laravel Jetstream", "MySQL"],
  },
  {
    title: "Turnaround Monitoring System",
    company: "Herma Shipping and Transport Corp.",
    description:
      "A vessel operations system to monitor turnaround activities, fuel consumption, and overall operational efficiency versus utilization. Implemented voyage delay classification (revenue vs. non-revenue) to support operational analysis and decision-making, and generates reports for finance, billing, and collection departments, reducing manual reporting time. Led migration from the legacy C# and Laravel 8 stack to an SPA architecture with Laravel 10 + Vue 3 + Inertia.js + TailwindCSS, improving performance and maintainability.",
    stackVersions: [
      { label: "v1", items: ["Laravel 8", "Blade", "jQuery", "AJAX", "MySQL", "Bootstrap"] },
      {
        label: "v2",
        items: ["Laravel 10", "Vue 3", "Inertia.js", "TailwindCSS", "Laravel Jetstream", "MySQL"],
      },
    ],
  },
  {
    title: "Crew Management System",
    company: "Herma Shipping and Transport Corp.",
    description:
      "A web-based platform for crew recruitment. Enabled applicants to submit applications online, upload position-specific requirements and certifications, and track application status. Integrated examination modules to evaluate crew skills and qualifications before deployment, and generated structured reports for HRIS integration.",
    stack: ["Laravel 8", "Blade", "Bootstrap", "MySQL"],
  },
  {
    title: "AMADEUS ShipDesign Hub",
    company: "Amadeus Marine Ltd.",
    description:
      "A drawing/document management platform with version control. Supported engineering workflow efficiency, reducing time spent searching and validating revisions.",
    stack: ["Laravel 8", "MySQL", "jQuery", "Bootstrap"],
  },
  {
    title: "Employee Health Declaration System",
    company: "Herma Group",
    description:
      "A COVID-19 compliance system that managed daily employee entry data for the Quezon City main office in alignment with local government protocols. Supported effective contact tracing by tracking carpool groups and specific office areas visited by employees, and generated actionable reports for the Health, Safety, and Security Environment (HSSE) department to support timely response and protocol enforcement.",
    stack: ["Laravel 6", "Blade", "jQuery", "AJAX", "MySQL", "Bootstrap"],
  },
  {
    title: "Drawing Access Database",
    company: "Herma Shipyard Inc.",
    description:
      "A centralized document management system for engineering drawings and ship blueprints. Enabled revision tracking, historical version access, and workflow monitoring, improving collaboration across teams and reducing miscommunication errors.",
    stack: ["Laravel 6", "Blade", "jQuery", "AJAX", "MySQL", "Bootstrap"],
  },
  {
    title: "Issued Vehicle Monitoring System (IVMS)",
    company: "Cleanway Environmental Management Solution Inc.",
    description:
      "A web-based system to monitor and control company vehicle usage for work-related activities. Improved operational accountability, ensuring vehicles were used only for authorized purposes.",
    stack: ["Laravel 6", "Blade", "jQuery", "AJAX", "MySQL", "Bootstrap"],
  },
];
