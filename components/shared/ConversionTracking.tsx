"use client";

import { useEffect } from "react";

type Gtag = (
  command: "event",
  eventName: string,
  parameters: Record<string, string>,
) => void;

export default function ConversionTracking() {
  useEffect(() => {
    const handleConversionClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.href;
      const isCall = href.startsWith("tel:");
      const isWhatsApp = href.includes("wa.me") || href.includes("api.whatsapp.com");
      if (!isCall && !isWhatsApp) return;

      const gtag = (window as Window & { gtag?: Gtag }).gtag;
      if (!gtag) return;

      gtag("event", "generate_lead", {
        method: isCall ? "Phone Call" : "WhatsApp",
        event_category: "Contact",
        event_label: "+919886814344",
      });
    };

    document.addEventListener("click", handleConversionClick);
    return () => document.removeEventListener("click", handleConversionClick);
  }, []);

  return null;
}
