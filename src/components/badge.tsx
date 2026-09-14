// A small pill-shaped label. Used to show each project's tech stack on
// ProjectCard, but generic enough to reuse anywhere a short tag is needed.

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
      {children}
    </span>
  );
}
