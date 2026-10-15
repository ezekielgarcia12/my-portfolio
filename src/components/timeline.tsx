// A vertical timeline: a dot + connecting line on the left, content on the
// right. Used by the Experience section to lay out career milestones in
// order. Each entry is either a company (rendered with a sub-list of the
// position(s) held there) or a standalone personal milestone with no
// company (rendered as one plain item) — see src/data/experience.ts.
import type { ExperienceGroup } from "@/data/experience";

// Turns a start/end pair into the text shown next to the dot, e.g.
// "April 2019 - December 2020", "January 2025 - Present", or just "2015"
// when there's no real range (start and end are the same). Shared by both
// a company's overall range and each position's own range.
function formatDuration(range: { startDate: string; endDate: string | null }) {
  if (range.endDate === null) {
    return `${range.startDate} - Present`;
  }
  if (range.endDate === range.startDate) {
    return range.startDate;
  }
  return `${range.startDate} - ${range.endDate}`;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Reads a display date like "April 2019" (or just "2015") into a year and
// a month index (0-11). The month is null when only a year was given.
function parseDisplayDate(text: string) {
  const parts = text.split(" ");
  if (parts.length === 1) {
    return { year: Number(parts[0]), month: null };
  }
  return { year: Number(parts[1]), month: MONTH_NAMES.indexOf(parts[0]) };
}

// Turns a start/end pair into a length of service, e.g. "6 yrs 7 mos".
// Counts both the start and end month (April-March is a full 2 years),
// the same way LinkedIn does. "Present" uses today's date — note this is
// worked out when the page is built, not live in the visitor's browser.
function formatLengthOfService(range: { startDate: string; endDate: string | null }) {
  const start = parseDisplayDate(range.startDate);

  let end;
  if (range.endDate === null) {
    const today = new Date();
    end = { year: today.getFullYear(), month: today.getMonth() };
  } else {
    end = parseDisplayDate(range.endDate);
  }

  let totalMonths;
  if (start.month === null || end.month === null) {
    // Year-only dates (e.g. "2015 - 2019") — just count whole years.
    totalMonths = (end.year - start.year) * 12;
  } else {
    totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const pieces = [];
  if (years > 0) {
    pieces.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }
  if (months > 0) {
    pieces.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  }
  return pieces.join(" ");
}

// A position's description is either one paragraph or a list of bullet
// points (e.g. a set of achievements), or left out entirely for a
// milestone that doesn't need one — see src/data/experience.ts.
// `className` lets each call site control its own spacing above this.
function Description({
  description,
  className,
}: {
  description?: string | string[];
  className: string;
}) {
  if (description === undefined) {
    return null;
  }
  if (Array.isArray(description)) {
    return (
      <ul
        className={`${className} list-disc space-y-1.5 pl-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400`}
      >
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  }
  return (
    <p className={`${className} text-sm leading-6 text-zinc-500 dark:text-zinc-400`}>
      {description}
    </p>
  );
}

export function Timeline({ items }: { items: ExperienceGroup[] }) {
  return (
    <ol>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isCompany = Boolean(item.company);

        return (
          <li key={item.id} className="flex gap-6">
            {/* The dot + line column. The line is only rendered between
                items (not after the last one), and stretches to match the
                content column's height since flex rows stretch by default. */}
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600 dark:bg-red-400" />
              {!isLast && (
                <span className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
              )}
            </div>

            {/* flex-1 makes this column fill the row, so the length of
                service can sit at the far right edge. */}
            <div className={isLast ? "flex-1" : "flex-1 pb-10"}>
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {formatDuration(item)}
              </p>

              {isCompany ? (
                <>
                  {/* Company name on the left, total length of service
                      pushed to the far right of the same line. */}
                  <div className="mt-1 flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-black dark:text-white">
                      {item.company}
                    </h3>
                    {!item.hideLengthOfService && (
                      <span className="shrink-0 text-xs font-medium whitespace-nowrap text-zinc-400 dark:text-zinc-500">
                        {formatLengthOfService(item)}
                      </span>
                    )}
                  </div>
                  {/* One position: e.g. "Application Developer (March
                      2021 - Present)". More than one (a promotion, say)
                      lists each with its own date range and description. */}
                  <ul className="mt-3 space-y-4 border-l border-zinc-100 pl-4 dark:border-zinc-800">
                    {item.positions.map((position) => (
                      <li key={position.id}>
                        <p className="font-medium text-black dark:text-white">
                          {position.title}{" "}
                          <span className="font-normal text-zinc-400 dark:text-zinc-500">
                            ({formatDuration(position)})
                          </span>
                        </p>
                        <Description description={position.description} className="mt-1" />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="mt-1 font-semibold text-black dark:text-white">
                    {item.positions[0].title}
                  </h3>
                  <Description description={item.positions[0].description} className="mt-2" />
                </>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
