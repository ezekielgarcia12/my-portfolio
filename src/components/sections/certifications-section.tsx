// Certifications section — every certification from
// src/data/certifications.ts as a masonry layout: cards flow into columns
// (one on mobile, more as the screen gets wider) and stack top to bottom
// within each column — see recommendations-section.tsx, which uses the
// same pattern.

import { CertificationCard } from "@/components/certification-card";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-900"
    >
      <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
        Certifications
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        Licenses &amp; Certifications
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
        Courses and certifications I&apos;ve completed along the way.
      </p>

      {/* CSS multi-column layout, not `grid` — see the note in
          recommendations-section.tsx for why. */}
      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  );
}
