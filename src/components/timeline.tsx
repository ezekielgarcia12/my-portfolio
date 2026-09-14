// A vertical timeline: a dot + connecting line on the left, content on the
// right. Used by the Experience page to lay out milestones in order.
import type { ExperienceMilestone } from "@/data/experience";

// Turns a milestone's start/end into the text shown next to the dot, e.g.
// "April 2019 - December 2020", "January 2025 - Present", or just "2015"
// when there's no real range (start and end are the same).
function formatDuration(item: ExperienceMilestone) {
  if (item.endDate === null) {
    return `${item.startDate} - Present`;
  }
  if (item.endDate === item.startDate) {
    return item.startDate;
  }
  return `${item.startDate} - ${item.endDate}`;
}

export function Timeline({ items }: { items: ExperienceMilestone[] }) {
  return (
    <ol>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
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

            <div className={isLast ? "" : "pb-10"}>
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {formatDuration(item)}
              </p>
              <h3 className="mt-1 font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              {item.company && (
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  {item.company}
                </p>
              )}
              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
