import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Luggage, MapPin, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { createAirportTaxiSeo } from "@/lib/airportTaxiSeo";
import { airportCorridors, type AirportCorridorContent } from "@/data/airportCorridors";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";

const palettes = {
  comparison: {
    hero: "from-emerald-950 via-teal-900 to-emerald-700",
    accent: "text-emerald-800",
    light: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-300/15 text-emerald-100 border-emerald-200/30",
    button: "bg-emerald-600 hover:bg-emerald-500",
  },
  "toll-gates": {
    hero: "from-indigo-950 via-indigo-900 to-cyan-800",
    accent: "text-indigo-800",
    light: "bg-cyan-50 border-cyan-200",
    badge: "bg-cyan-300/15 text-cyan-100 border-cyan-200/30",
    button: "bg-cyan-600 hover:bg-cyan-500",
  },
  sectors: {
    hero: "from-amber-950 via-amber-900 to-yellow-700",
    accent: "text-amber-800",
    light: "bg-amber-50 border-amber-200",
    badge: "bg-amber-300/15 text-amber-100 border-amber-200/30",
    button: "bg-amber-600 hover:bg-amber-500",
  },
  "community-matrix": {
    hero: "from-orange-950 via-red-900 to-rose-800",
    accent: "text-orange-800",
    light: "bg-orange-50 border-orange-200",
    badge: "bg-orange-300/15 text-orange-100 border-orange-200/30",
    button: "bg-orange-600 hover:bg-orange-500",
  },
  dispatch: {
    hero: "from-blue-950 via-blue-900 to-violet-800",
    accent: "text-blue-800",
    light: "bg-blue-50 border-blue-200",
    badge: "bg-violet-300/15 text-violet-100 border-violet-200/30",
    button: "bg-blue-600 hover:bg-blue-500",
  },
  radial: {
    hero: "from-rose-950 via-red-900 to-pink-800",
    accent: "text-rose-800",
    light: "bg-rose-50 border-rose-200",
    badge: "bg-rose-300/15 text-rose-100 border-rose-200/30",
    button: "bg-rose-700 hover:bg-rose-600",
  },
  phases: {
    hero: "from-green-950 via-green-900 to-lime-800",
    accent: "text-green-800",
    light: "bg-green-50 border-green-200",
    badge: "bg-lime-300/15 text-lime-100 border-lime-200/30",
    button: "bg-green-700 hover:bg-green-600",
  },
} as const;

const hubLinks = [
  { href: "/bangalore-to-mysore-cab", label: "Bangalore to Mysore" },
  { href: "/bangalore-to-coorg-cab", label: "Bangalore to Coorg" },
  { href: "/bangalore-to-ooty-cab", label: "Bangalore to Ooty" },
  { href: "/outstation-cabs-bangalore", label: "All outstation cabs" },
];

function CorridorRouteGuide({ corridor }: { corridor: AirportCorridorContent }) {
  const palette = palettes[corridor.layout];

  if (corridor.layout === "community-matrix" || corridor.layout === "phases") {
    return (
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className={`${palette.light} ${palette.accent}`}>
                <tr>
                  <th className="p-4 font-black">Pickup zone</th>
                  <th className="p-4 font-black">Landmarks</th>
                  <th className="p-4 font-black">Exit advice</th>
                </tr>
              </thead>
              <tbody>
                {corridor.pickupZones.map((zone) => (
                  <tr key={zone.area} className="border-t border-slate-100 align-top">
                    <th scope="row" className="p-4 font-bold text-slate-900">{zone.area}</th>
                    <td className="p-4 text-slate-600">{zone.landmarks}</td>
                    <td className="p-4 text-slate-600">{zone.exit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside className={`rounded-2xl border p-6 ${palette.light}`}>
          <h3 className={`text-lg font-black ${palette.accent}`}>{corridor.localTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">{corridor.localAdvice}</p>
        </aside>
      </div>
    );
  }

  if (corridor.layout === "radial") {
    return (
      <div className="mt-7 grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="mx-auto grid aspect-square w-full max-w-[330px] place-items-center rounded-full border-[18px] border-rose-100 bg-rose-50 p-8 text-center shadow-inner">
          <div className="grid aspect-square w-full place-items-center rounded-full border-2 border-dashed border-rose-300 p-7">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-rose-700">Radial dispatch</span>
              <p className="mt-2 text-2xl font-black text-rose-950">Marathahalli</p>
              <p className="mt-2 text-sm text-slate-600">Bridge • Spice Garden • Kundalahalli</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {corridor.routes.map((route, index) => (
            <article key={route.title} className="flex gap-4 rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rose-100 font-black text-rose-800">{index + 1}</span>
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-rose-700">{route.tag}</p>
                <h3 className="mt-1 font-black text-slate-900">{route.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{route.detail}</p>
              </div>
            </article>
          ))}
          <p className="rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-950">{corridor.localAdvice}</p>
        </div>
      </div>
    );
  }

  if (corridor.layout === "sectors") {
    return (
      <>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {corridor.pickupZones.map((zone, index) => (
            <article key={zone.area} className="rounded-2xl border border-amber-200 bg-white p-5">
              <span className="text-3xl font-black text-amber-700">0{index + 1}</span>
              <h3 className="mt-3 font-black text-slate-900">{zone.area}</h3>
              <p className="mt-2 text-sm text-slate-600">{zone.landmarks}</p>
              <p className="mt-3 border-t border-amber-100 pt-3 text-sm leading-6 text-amber-950">{zone.exit}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
          <h3 className="font-black text-amber-950">{corridor.localTitle}</h3>
          <p className="mt-2 text-sm leading-7 text-amber-950">{corridor.localAdvice}</p>
        </div>
      </>
    );
  }

  if (corridor.layout === "dispatch") {
    return (
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {corridor.routes.map((route, index) => (
          <article key={route.title} className={`rounded-2xl border p-5 ${index === 1 ? "border-violet-300 bg-violet-50 md:-translate-y-3" : "border-slate-200 bg-white"}`}>
            <span className="text-xs font-black uppercase tracking-wider text-violet-700">{route.tag}</span>
            <h3 className="mt-2 text-lg font-black text-slate-900">{route.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{route.detail}</p>
          </article>
        ))}
        <p className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-sm leading-7 text-violet-950 md:col-span-3">{corridor.localAdvice}</p>
      </div>
    );
  }

  if (corridor.layout === "toll-gates") {
    return (
      <>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {corridor.routes.map((route, index) => (
            <article key={route.title} className={`relative overflow-hidden rounded-2xl border p-6 ${index === 0 ? "border-indigo-200 bg-indigo-50" : "border-cyan-200 bg-cyan-50"}`}>
              <span className="text-xs font-black uppercase tracking-widest text-indigo-700">{route.tag}</span>
              <h3 className="mt-2 text-xl font-black text-slate-900">{route.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{route.detail}</p>
            </article>
          ))}
        </div>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {corridor.milestones.map((step, index) => (
            <li key={step.label} className="rounded-xl border border-cyan-200 bg-white p-4">
              <span className="text-xs font-black text-cyan-800">GATE 0{index + 1}</span>
              <h3 className="mt-1 font-black text-slate-900">{step.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-xl bg-indigo-50 p-4 text-sm leading-6 text-indigo-950">{corridor.localAdvice}</p>
      </>
    );
  }

  return (
    <>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {corridor.routes.map((route) => (
          <details key={route.title} className={`group rounded-2xl border bg-white p-5 shadow-sm open:shadow-md ${corridor.layout === "comparison" ? "border-emerald-200" : "border-slate-200"}`}>
            <summary className="cursor-pointer list-none">
              <span className={`text-xs font-black uppercase tracking-wider ${corridor.layout === "comparison" ? "text-emerald-800" : "text-slate-600"}`}>{route.tag}</span>
              <span className="mt-2 flex items-center justify-between gap-3 text-lg font-black text-slate-900">
                {route.title}<span aria-hidden="true" className="text-2xl text-emerald-700 group-open:rotate-45">+</span>
              </span>
              <span className="mt-2 block text-sm text-slate-500">Open route notes</span>
            </summary>
            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-700">{route.detail}</p>
          </details>
        ))}
      </div>
      {corridor.layout === "comparison" && (
        <ol className="mt-6 grid gap-3 md:grid-cols-3">
          {corridor.milestones.map((step, index) => (
            <li key={step.label} className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-700 text-sm font-black text-white">{index + 1}</span>
              <span><strong className="block text-emerald-950">{step.label}</strong><span className="mt-1 block text-sm leading-6 text-slate-600">{step.detail}</span></span>
            </li>
          ))}
        </ol>
      )}
      <p className={`mt-5 rounded-xl border p-4 text-sm leading-7 text-slate-700 ${palette.light}`}>{corridor.localAdvice}</p>
    </>
  );
}

export default function AirportCorridorLanding({ corridor }: { corridor: AirportCorridorContent }) {
  const palette = palettes[corridor.layout];
  const routeUrl = `${SITE.url}/${corridor.slug}`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I need a ${corridor.locality} airport taxi.\nDate:\nPickup address / gate:\nPickup time / flight time:\nTerminal (T1 or T2):\nPassengers and luggage:`
  )}`;
  const { breadcrumbSchema, taxiServiceSchema, faqSchema, airportFaqs } = createAirportTaxiSeo({
    pageName: corridor.pageName,
    routeUrl,
    description: corridor.description,
    locality: corridor.locality,
    faqs: corridor.faqs,
  });
  const sisterLinks = corridor.sisterCorridors
    .map((slug) => airportCorridors[slug])
    .filter((item): item is AirportCorridorContent => Boolean(item));

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema, taxiServiceSchema, faqSchema]} />
      <main className="min-h-screen bg-slate-50">
        <header className={`bg-gradient-to-br ${palette.hero} px-5 py-10 text-white sm:py-16`}>
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-widest ${palette.badge}`}>{corridor.eyebrow}</p>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{corridor.title}</h1>
              <p className="mt-4 max-w-3xl leading-7 text-white/85">{corridor.intro}</p>
              <p className="mt-4 text-sm font-bold text-white">{SITE.specialisationSlogan}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:+91${SITE.phone}`} className="rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-900">Call +91 {SITE.phone}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`rounded-xl px-5 py-3 text-sm font-black text-white ${palette.button}`}>Plan pickup on WhatsApp</a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">Pre-book and confirm your vehicle, pickup point and flight details directly. Drive times vary with live traffic.</p>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl">
              <Image src="/images/services/airport.jpg" alt={`Premium Ertiga airport taxi for ${corridor.locality}`} width={1672} height={941} priority className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              <figcaption className="p-4 text-sm text-white/80">Dedicated 6+1 Premium Ertiga • BLR Terminal 1 and Terminal 2</figcaption>
            </figure>
          </div>
        </header>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3" aria-label="Airport route summary">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className={`flex items-center gap-2 text-xs font-black uppercase tracking-wider ${palette.accent}`}><MapPin size={16} /> Distance & route</span>
            <p className="mt-2 font-black text-slate-900">{corridor.distance}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{corridor.route}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className={`flex items-center gap-2 text-xs font-black uppercase tracking-wider ${palette.accent}`}><Clock3 size={16} /> Planning estimate</span>
            <p className="mt-2 font-black text-slate-900">{corridor.travelTime}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Confirm your pickup buffer using the flight time and current traffic.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className={`flex items-center gap-2 text-xs font-black uppercase tracking-wider ${palette.accent}`}><Luggage size={16} /> Vehicle category</span>
            <p className="mt-2 font-black text-slate-900">6+1 Premium Ertiga only</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">No hatchbacks or compact sedans are operated.</p>
          </article>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="corridor-roadmap-heading">
          <p className={`text-xs font-black uppercase tracking-widest ${palette.accent}`}>LOCAL CORRIDOR INTELLIGENCE</p>
          <h2 id="corridor-roadmap-heading" className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{corridor.routeTitle}</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">{corridor.routeDetail}</p>
          <CorridorRouteGuide corridor={corridor} />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="safety-heading">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className={`mt-1 shrink-0 ${palette.accent}`} size={30} />
              <div>
                <p className={`text-xs font-black uppercase tracking-widest ${palette.accent}`}>Passenger protection & compliance</p>
                <h2 id="safety-heading" className="mt-2 text-2xl font-black text-slate-950">Karnataka Government AIS-140 Certified Passenger Safety</h2>
                <p className="mt-3 leading-7 text-slate-700">Every vehicle in our fleet is fully compliant with Karnataka State Transport Department regulations, equipped with live Government-monitored GPS vehicle tracking and an active emergency SOS Panic Button directly connected to emergency response infrastructure.</p>
                <p className="mt-3 leading-7 text-slate-700">Direct booking means verified owner-driver ethics, background-checked chauffeurs, clean non-smoking interiors, zero surge pricing and no driver cancellations—rather than a random app-aggregator match.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="ertiga-heading">
          <div className={`rounded-3xl border p-6 sm:p-8 ${palette.light}`}>
            <p className={`text-xs font-black uppercase tracking-widest ${palette.accent}`}>A practical sedan-to-SUV upgrade</p>
            <h2 id="ertiga-heading" className="mt-2 text-2xl font-black text-slate-950">A better airport fit than a compact sedan boot</h2>
            <p className="mt-3 leading-7 text-slate-700">We operate exclusively in the Premium Ertiga Category for passenger comfort and dignity. Searches for a Dzire airport taxi, Etios cab Bangalore airport or sedan airport cab often lead to compact trunks; CNG tanks can take up sedan boot capacity and force bags onto laps or passenger seats. The 2024–2026 factory S-CNG Ertiga is engineered with modular split seating, a flat boot with the third row folded, rear knee-level console AC and a smooth suspension setup.</p>
            <p className="mt-3 leading-7 text-slate-700">With the 50:50 third row folded, the flat load bay can accommodate 3–4 large 28-inch international check-in suitcases plus 2 cabin bags without intruding into passenger legroom. This standard setup assumes appropriate passenger space; final baggage arrangement is confirmed at pickup based on passenger count.</p>
            <p className="mt-3 leading-7 text-slate-700">For ultra-heavy cargo or a home relocation, the 60:40 second-row seats can also be folded flat to convert the cabin into an executive cargo transporter; this is available on prior request for a nominal cargo reconfiguration fee.</p>
            <Link href="/blog/ertiga-luggage-capacity-guide" className={`mt-5 inline-flex items-center gap-2 font-black underline underline-offset-4 ${palette.accent}`}>Read the Ertiga luggage capacity guide <ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="outstation-heading">
          <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-widest text-cyan-300">Continue beyond Bengaluru</p>
            <h2 id="outstation-heading" className="mt-2 text-2xl font-black">Connecting from your flight straight to an outstation route?</h2>
            <nav aria-label="Outstation cab routes" className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {hubLinks.map((item) => <Link key={item.href} href={item.href} className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm font-bold transition hover:bg-white/10">{item.label} <ArrowRight className="ml-1 inline" size={14} /></Link>)}
            </nav>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="sister-routes-heading">
          <h2 id="sister-routes-heading" className="text-2xl font-black text-slate-950">Nearby airport taxi corridors</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {sisterLinks.map((item) => <Link key={item.slug} href={`/${item.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 hover:border-slate-400">{item.pageName} <ArrowRight className="ml-1 inline" size={15} /></Link>)}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="corridor-faq-heading">
          <h2 id="corridor-faq-heading" className="text-2xl font-black text-slate-950">Local airport taxi FAQs</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5">
            {airportFaqs.map((faq) => <article key={faq.question} className="py-5"><h3 className="font-black text-slate-900">{faq.question}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p></article>)}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`block rounded-2xl px-6 py-5 text-center font-black text-white shadow-lg ${palette.button}`}>Confirm pickup time, passenger count and luggage on WhatsApp</a>
        </section>
        <PopularAirportCorridors currentSlug={corridor.slug} />
      </main>
    </SiteShell>
  );
}
