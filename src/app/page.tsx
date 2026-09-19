// Home page ("/") — this is the entire site. Instead of separate routes
// per topic, every section lives here, stacked in one scrollable page.
// Each section has an id (e.g. "projects") that the nav links in
// Sidebar / MobileMenu jump to, and that the scroll-spy hook in
// src/lib/use-active-section.ts watches to highlight the current one.
//
// To add a new section: build it as its own component in
// src/components/sections/ (like the ones below), give it a unique
// section id, then add it here and to NAV_LINKS in sidebar.tsx.

import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { RecommendationsSection } from "@/components/sections/recommendations-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <RecommendationsSection />
      <ContactSection />
    </div>
  );
}
