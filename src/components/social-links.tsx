// Renders the quick-link icons (GitHub, LinkedIn, Facebook, Instagram,
// Gmail, WhatsApp) from src/data/profile.ts. Each icon links out to the
// matching profile — or, for Gmail/WhatsApp, opens the visitor's email
// client or a WhatsApp chat instead.
import {
  FacebookIcon,
  GitHubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/icons/social-icons";
import { socialLinks } from "@/data/profile";

// Maps each data entry's `icon` name to the actual icon component.
const ICONS_BY_NAME = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  gmail: GmailIcon,
  whatsapp: WhatsAppIcon,
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = ICONS_BY_NAME[link.icon];
        // A "mailto:" link should open the visitor's email client in the
        // same tab, not a blank new tab — target="_blank" is only for the
        // real external profile links.
        const isExternal = link.url.startsWith("http");
        return (
          <a
            key={link.icon}
            href={link.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
}
