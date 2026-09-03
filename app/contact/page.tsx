import type { Metadata } from "next";
import SiteShell from "@/components/shared/SiteShell";
import { Mail, MessageCircle, Phone } from "lucide-react";
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
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Lucky Travels, I would like to enquire about a cab booking.")}`;
  return (
    <SiteShell>
      <section className="w-full max-w-6xl mx-auto px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-700">DIRECT ENQUIRIES</p>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">Contact Lucky Travels</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">Book your chauffeur-driven Ertiga directly with our dispatch desk. Instant WhatsApp quotes with zero aggregator markups.</p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <article className="flex h-full flex-col justify-between rounded-2xl bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">DIRECT BOOKING</p>
              <h2 className="mt-2 text-2xl font-extrabold">Direct Booking Channels</h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-300">Speak directly with the Lucky Travels dispatch desk. No automated middlemen, aggregator markups, or unclear vehicle substitutions.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:+919886814344`} className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-center font-semibold text-slate-900 shadow transition hover:bg-slate-100 whitespace-nowrap"><Phone size={19} /> Call +91 98868 14344</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-3.5 text-center font-semibold text-white shadow transition hover:bg-emerald-700 whitespace-nowrap"><MessageCircle size={19} /> Chat on WhatsApp</a>
              <a href={`mailto:${SITE.email}`} className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-center font-medium text-slate-300 transition hover:bg-slate-700 whitespace-nowrap"><Mail size={18} /> Email: bookmyertiga@gmail.com</a>
            </div>
            <p className="mt-8 text-sm text-slate-400">Operating 24/7 across Bangalore &amp; Kempegowda International Airport.</p>
          </article>

          <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-700">DISPATCH DESK</p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Instant Quote Checklist &amp; Dispatch Desk</h2>
              <h3 className="mt-6 text-xl font-bold text-slate-900">How to Book in Under 2 Minutes</h3>
              <ol className="mt-4 grid gap-3">
                {["1. Pickup & Destination (or Flight Number for Airport pickups)", "2. Date & exact reporting time", "3. Passenger count & luggage requirement"].map((item) => <li key={item} className="rounded-xl bg-slate-100 px-4 py-3 font-semibold leading-6 text-slate-700">{item}</li>)}
              </ol>
            </div>
            <div className="mt-8">
              <div className="border-t border-slate-200 pt-5">
                <h3 className="text-lg font-bold text-slate-900">Operating Base: HAL Bangalore</h3>
                <p className="mt-2 leading-7 text-slate-600">Dispatch Hub: No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL, Bengaluru 560017</p>
              </div>
              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950">
                <h3 className="font-bold">Booking notice guideline</h3>
                <p><strong>Airport / Hourly:</strong> 4–6 hrs advance notice</p>
                <p><strong>Outstation:</strong> 12–24 hrs advance notice</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
