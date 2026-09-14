// Renders the quick-link icons (GitHub, LinkedIn, Facebook, Instagram) from
// src/data/profile.ts. Each icon links out to the matching profile.
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/social-icons";
import { socialLinks } from "@/data/profile";

// Maps each data entry's `icon` name to the actual icon component.
const ICONS_BY_NAME = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = ICONS_BY_NAME[link.icon];
        return (
          <a
            key={link.icon}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
