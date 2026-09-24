// Certifications section — every certification from
// src/data/certifications.ts, shown as a single stack of full-width rows
// (one certification per row, top to bottom) — the same layout as the
// Projects section.

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
        Trainings &amp; Certifications
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
        Courses and certifications I&apos;ve completed along the way.
      </p>

      {/* A simple vertical stack: flex-col + gap puts even spacing
          between rows at every screen size. */}
      <div className="mt-8 flex flex-col gap-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  );
}
