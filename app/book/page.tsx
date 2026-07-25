import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Book a Premium Ertiga",
  description: "Call or WhatsApp Lucky Travels to enquire about a Premium Ertiga in Bengaluru.",
  robots: { index: false, follow: true },
};

export default function BookPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I would like a quote for a Premium Ertiga.",
  )}`;

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="section-kicker">Direct booking</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.035em] sm:text-6xl">Book your Premium Ertiga</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Share your pickup, destination, travel date and time directly with Lucky Travels.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-[#0c143e] px-6 py-4 font-black text-white">
            <Phone size={20} /> Call {SITE.phone}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-black text-white">
            <MessageCircle size={20} /> Request on WhatsApp
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
