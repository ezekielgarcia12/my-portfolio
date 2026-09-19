// Contact section — the last thing on the page, with two ways to reach
// out: a quick email, or (once contact.calendlyUrl is set) booking a call
// straight on a Calendly embed. Content comes from src/data/profile.ts.

import { CalendarDays, Mail } from "lucide-react";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { contact } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-900"
    >
      <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
        Contact me
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        Got an idea?
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
        Have an idea you want to build? Let&apos;s talk about it. FREE
        consultation — just bring your idea, and let&apos;s see where it
        goes.
      </p>

      {/* One card, stacked top to bottom: email section, then (once a real
          link is set in profile.ts — see the comment there) a divider and
          the Calendly section. */}
      <div className="mt-8 rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="flex flex-col">
          <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
          <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
            Send a quick email
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            The fastest way to reach me — drop a line and I&apos;ll get back
            to you.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-5 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            {contact.email}
          </a>
        </div>

        {contact.calendlyUrl && (
          <>
            <div className="my-6 border-t border-zinc-100 dark:border-zinc-900" />
            <div className="flex flex-col">
              <CalendarDays className="h-5 w-5 text-red-600 dark:text-red-400" />
              <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                Book a call
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Pick a time that works for you — no back-and-forth needed.
              </p>
              <div className="mt-4">
                <CalendlyEmbed url={contact.calendlyUrl} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
