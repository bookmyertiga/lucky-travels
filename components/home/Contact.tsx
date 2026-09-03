import { Mail, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/constants/site";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I need a Premium Ertiga. Date: Pickup: Destination: Passengers: Luggage:",
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="homepage-final-cta"
      className="page-shell pb-11 sm:pb-12"
    >
      <div className="relative isolate overflow-hidden rounded-[26px] bg-[linear-gradient(125deg,#151f52_0%,#4c159d_62%,#6d21d9_100%)] px-5 py-8 text-white shadow-premium sm:px-9 sm:py-10">
        <div className="absolute -right-14 -top-20 -z-10 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-400">
              Direct enquiry, clear confirmation
            </p>
            <h2
              id="homepage-final-cta"
              className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-4xl"
            >
              Tell Lucky Travels Where You Need to Go
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
              Share your complete plan and check whether a clean Premium Ertiga
              is suitable and available. Phone, WhatsApp and email are the only
              booking channels—there is no automated checkout.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <a
              href={`tel:+91${SITE.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-center text-sm font-medium whitespace-nowrap transition hover:-translate-y-0.5"
            >
              <Phone size={19} /> Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-center text-sm font-medium whitespace-nowrap transition hover:-translate-y-0.5"
            >
              <MessageCircle size={19} /> WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}?subject=Premium%20Ertiga%20Cab%20Enquiry`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-center text-sm font-medium whitespace-nowrap transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <Mail size={19} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
