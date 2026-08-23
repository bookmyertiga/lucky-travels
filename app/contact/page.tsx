import type { Metadata } from "next";
import SiteShell from "@/components/shared/SiteShell";
import Contact from "@/components/home/Contact";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";
export const metadata: Metadata = {
  title: "Contact Lucky Travels",
  description: `Call or WhatsApp Lucky Travels on ${SITE.phone} to enquire about a Premium Ertiga in Bengaluru.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Lucky Travels",
    description: `Call or WhatsApp Lucky Travels on ${SITE.phone} to enquire about a Premium Ertiga in Bengaluru.`,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lucky Travels",
    description: `Call or WhatsApp Lucky Travels on ${SITE.phone} to enquire about a Premium Ertiga in Bengaluru.`,
  },
};
export default function ContactPage() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Lucky Travels, I would like a quote for a Premium Ertiga.")}`;
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-sm font-black uppercase tracking-widest text-purple-700">
          Go Bengaluru
        </p>
        <h1 className="mt-2 text-5xl font-black">Contact Lucky Travels</h1>
        <p className="mt-4 text-lg text-slate-600">
          Share your pickup, destination, date and time directly by phone or
          WhatsApp.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Contact />
          <div className="rounded-xl bg-gradient-to-br from-purple-800 to-violet-600 p-7 text-white shadow-premium">
            <h2 className="text-2xl font-black">Request a quote on WhatsApp</h2>
            <p className="mt-3 text-white/80">
              Send your trip details and receive a direct response from Lucky
              Travels.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center gap-3 rounded-xl bg-green-500 p-4 text-lg font-black"
            >
              <MessageCircle />
              WhatsApp {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
