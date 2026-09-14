// Shares one post — uses the device's native share sheet where available
// (mobile browsers, Safari), and falls back to copying the link otherwise.
// This is the only interactive piece of a post, so it's the only part that
// needs to be a Client Component.
"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton({ postId, text }: { postId: string; text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}/my-space#${postId}`;

    if (navigator.share) {
      try {
        await navigator.share({ text, url });
      } catch {
        // User closed the share sheet without picking anything — fine,
        // nothing to do.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked by browser settings — no harmless
      // fallback beyond this, so just leave the button as-is.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </button>
  );
}
