// Certifications page ("/certifications").
// Shows every certification from src/data/certifications.ts as a
// responsive grid of cards — one column on mobile, more as the screen
// gets wider.

import { CertificationCard } from "@/components/certification-card";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  return (
    <div className="flex-1 px-6 py-20 sm:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
          Certifications
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
          Licenses &amp; Certifications
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          Courses and certifications I&apos;ve completed along the way.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
