// Embeds a Calendly scheduling widget inline, using Calendly's own public
// widget script rather than an npm package — see AGENTS.md, new
// dependencies need to be asked about first, and this avoids needing one.
// Needs to be a Client Component since it loads an external script and
// tracks whether that widget has actually rendered yet.
"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import Script from "next/script";

// Same box size the widget itself uses — kept as one constant so the
// loading placeholder below lines up with it exactly instead of the two
// drifting out of sync.
const WIDGET_BOX_STYLE = { maxWidth: "1080px", minWidth: "280px", height: "700px" };

export function CalendlyEmbed({ url }: { url: string }) {
  // hide_event_type_details drops Calendly's own left-hand info panel, and
  // hide_gdpr_banner drops its cookie notice — both just make the widget
  // itself render smaller/simpler, not just the box around it.
  const embedUrl = `${url}?hide_event_type_details=1&hide_gdpr_banner=1`;

  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calendly's script replaces this div's contents with an <iframe>
    // once the widget has actually finished rendering — watching for that
    // is more reliable than guessing a fixed delay after the script tag
    // itself loads (which only means the script downloaded, not that the
    // widget inside it is ready yet).
    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Capping the widget's own width (instead of always filling this
          w-full wrapper) triggers Calendly's compact single-column
          layout, which is what actually shrinks it — a plain CSS resize
          would just crop or distort its iframe. mx-auto centers it inside
          the full-width wrapper. height stays tall enough (700px is
          Calendly's documented minimum for this compact layout) that the
          date/time picker still fits without scrolling internally. */}
      <div className="relative mx-auto" style={WIDGET_BOX_STYLE}>
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-100 bg-zinc-50 text-sm text-zinc-400 dark:border-zinc-900 dark:bg-zinc-900 dark:text-zinc-500">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading scheduler…
          </div>
        )}
        {/* Calendly looks for this exact class name + data-url attribute to
            know where to render itself once its script below has loaded. */}
        <div ref={containerRef} className="calendly-inline-widget h-full w-full" data-url={embedUrl} />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
