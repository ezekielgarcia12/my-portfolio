// The tech stack shown on the About page, grouped by category. `icon` must
// match a slug from the tech-stack-icons package
// (https://www.tech-stack-icons.com/) — search the icon name on that site
// to find the right slug before adding one here.
//
// A couple of tools (InertiaJS, Axios, Codex) don't have a logo in that
// package. For those, use `fallbackIcon` instead — any icon component from
// lucide-react — so the tool still shows up with something reasonable.
import type { IconName } from "tech-stack-icons";
import type { LucideIcon } from "lucide-react";
import { Layers, Send, Terminal } from "lucide-react";

export type TechStackItem = {
  label: string;
  icon?: IconName;
  fallbackIcon?: LucideIcon;
};

export type TechStackCategory = {
  category: string;
  items: TechStackItem[];
};

export const techStack: TechStackCategory[] = [
  {
    category: "Backend",
    items: [
      { icon: "laravel", label: "Laravel" },
      { icon: "php", label: "PHP" },
      { icon: "codeigniter", label: "CodeIgniter" },
      { icon: "nodejs", label: "Node.js" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { icon: "vuejs", label: "Vue.js" },
      { label: "InertiaJS", fallbackIcon: Layers },
      { icon: "js", label: "JavaScript" },
      { icon: "html5", label: "HTML" },
      { icon: "css3", label: "CSS" },
      { icon: "bootstrap5", label: "Bootstrap" },
      { icon: "tailwindcss", label: "Tailwind CSS" },
      { icon: "headlessui", label: "Headless UI" },
      { icon: "vitejs", label: "Vite" },
      { label: "Axios", fallbackIcon: Send },
    ],
  },
  {
    category: "Database",
    items: [
      { icon: "mysql", label: "MySQL" },
      { icon: "microsoft", label: "Microsoft SQL Server" },
      { icon: "postgresql", label: "PostgreSQL" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { icon: "docker", label: "Docker" },
      { icon: "git", label: "Git" },
      { icon: "github", label: "GitHub" },
      { icon: "npm", label: "npm" },
      { icon: "visualstudio", label: "Visual Studio" },
      { icon: "jira", label: "Jira" },
      { icon: "linux", label: "Linux" },
    ],
  },
  {
    category: "Design",
    items: [
      { icon: "figma", label: "Figma" },
      { icon: "canva", label: "Canva" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { icon: "claude", label: "Claude" },
      { icon: "gemini", label: "Gemini" },
      { icon: "openai", label: "ChatGPT" },
      { label: "Codex", fallbackIcon: Terminal },
    ],
  },
];
