# My Portfolio Website — Project Plan

> A personal portfolio built with **Next.js** (frontend first), styled with **Tailwind CSS** and **shadcn/ui**, designed to work fully on its own — no backend required to start. A **Laravel CMS** backend gets added later to manage content dynamically.

---

## 1. Goal

Build a modern, mobile-responsive portfolio site to showcase my projects, skills, and background — and use it as a hands-on way to learn Next.js.

Since I'm new to Next.js, the plan is split into two clear phases so I don't get overwhelmed:

- **Phase 1 (this plan's focus):** Frontend only. All content (projects, about info, etc.) lives in local files inside the project — no server, no database, no API needed. The site works completely standalone.
- **Phase 2 (later):** Build a Laravel backend as a CMS, then connect the Next.js frontend to it via an API — so content can be edited without touching code.

---

## 2. Tech Stack

| Purpose            | Tool                          | Why |
|--------------------|-------------------------------|-----|
| Framework          | **Next.js** (App Router)      | Modern React framework, great docs, huge community — good for learning |
| Styling            | **Tailwind CSS**               | Utility classes, no separate CSS files to manage, easy to make responsive |
| UI Components      | **shadcn/ui**                  | Pre-built accessible components (buttons, cards, nav) you can copy into your project and fully customize |
| Language            | **TypeScript** (recommended) or JavaScript | TypeScript catches mistakes early, but plain JS is fine too if it feels like too much at once |
| Icons              | **lucide-react** (comes with shadcn/ui) | Clean, consistent icon set |
| Content (Phase 1)  | Local `.ts`/`.json` files      | No backend needed — just plain data files you edit by hand |
| Backend (Phase 2)  | **Laravel** (PHP)               | Will serve as the CMS/API once you're ready |

---

## 3. Why "No Backend Needed" Works

In Phase 1, instead of fetching project/about data from a server, we store it in a simple local file, e.g.:

```ts
// data/projects.ts
export const projects = [
  {
    title: "My First App",
    description: "A short description of what it does.",
    tags: ["Next.js", "Tailwind"],
    link: "https://github.com/yourusername/project",
  },
  // add more projects here
];
```

Your pages just import this file directly — no `fetch()`, no API, no database. This means:
- The site works the moment you run `npm run dev` — nothing else to set up.
- You learn Next.js basics (pages, components, routing) without also fighting backend/CORS/API issues at the same time.
- When Laravel is ready later, you swap the *data source* (local file → API call) without changing how your components look or work.

---

## 4. Suggested Folder Structure (Beginner-Friendly)

Keep it flat and simple at first — you can reorganize as you grow.

```
portfolio/
├── app/
│   ├── layout.tsx          # Shared layout (navbar, footer) for every page
│   ├── page.tsx            # Home page ("/")
│   ├── about/
│   │   └── page.tsx        # About page ("/about")
│   ├── projects/
│   │   └── page.tsx        # Projects page ("/projects")
│   └── globals.css         # Tailwind base styles
├── components/
│   ├── navbar.tsx          # Top navigation bar
│   ├── footer.tsx          # Footer
│   ├── project-card.tsx    # Reusable card to display one project
│   └── ui/                 # shadcn/ui components live here (auto-generated)
├── data/
│   ├── projects.ts         # Your project list (edit this to add projects)
│   └── profile.ts          # Your name, bio, social links, etc.
├── lib/
│   └── utils.ts            # Small helper functions (shadcn/ui needs this)
├── public/
│   └── images/             # Your photos, project screenshots, resume PDF, etc.
├── tailwind.config.ts
├── next.config.js
└── package.json
```

**Why this structure:**
- `app/` = pages, using Next.js's file-based routing (a folder = a URL route).
- `components/` = reusable pieces of UI you build once, use everywhere.
- `data/` = your "fake database" for now — plain files you can edit directly.
- Every file will include comments explaining what it does and how to change it.

---

## 5. Pages to Build (Phase 1)

| Page       | Route         | Purpose |
|------------|---------------|---------|
| Home       | `/`           | Hero section (name, short intro, CTA buttons), quick highlights |
| About      | `/about`      | Bio, skills, resume download link |
| Projects   | `/projects`   | Grid of project cards pulled from `data/projects.ts` |
| Contact    | `/contact`    | Contact info / social links (form can be static for now, wired to a backend later or a service like Formspree) |

---

## 6. Design Direction

- **Modern & minimal**: generous whitespace, clear typography hierarchy, one accent color.
- **Dark mode support**: shadcn/ui + Tailwind make this straightforward to add.
- **Mobile-first responsive**: build for small screens first, then adjust for tablet/desktop using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).
- **Consistent components**: reuse `project-card.tsx`, buttons, and layout instead of duplicating markup.

---

## 7. Code Style Guidelines (for this project)

Since this is a learning project, generated code should:

1. **Include comments** explaining *what* each section does and *why*, not just restating the code.
2. **Avoid advanced patterns** (no complex generics, no unnecessary abstractions) — favor readable, explicit code over "clever" code.
3. **Keep components small** — one clear responsibility per file.
4. **Use descriptive names** (`ProjectCard`, not `Card2`).
5. **Group related logic together** so it's easy to find things later when maintaining the site.

---

## 8. Roadmap

### Phase 1 — Frontend Only (current focus)
- [ ] Set up Next.js project with TypeScript + Tailwind
- [ ] Install and configure shadcn/ui
- [ ] Build layout (navbar + footer)
- [ ] Build Home page
- [ ] Build About page
- [ ] Build Projects page (reading from local `data/projects.ts`)
- [ ] Build Contact page
- [ ] Make everything mobile responsive
- [ ] Add dark mode toggle (optional stretch goal)
- [ ] Deploy to Vercel

### Phase 2 — Laravel CMS Backend (later)
- [ ] Set up Laravel project with database (projects, about content, etc.)
- [ ] Build API endpoints (e.g. `/api/projects`, `/api/profile`)
- [ ] Build a simple admin panel to edit content
- [ ] Replace local `data/*.ts` files in Next.js with API calls (`fetch`)
- [ ] Deploy Laravel backend
- [ ] Connect frontend to live backend

---

## 9. Open Questions / Decisions to Make Later

- Hosting for Phase 2 backend (shared hosting? VPS? Laravel Forge?)
- Whether the contact form needs a real backend or a third-party service is enough
- Whether to add a blog section

---

*This is a living document — update the checklists as you progress.*
