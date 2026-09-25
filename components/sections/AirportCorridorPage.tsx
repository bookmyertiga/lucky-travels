import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

export type AirportCorridor = {
  slug: string;
  pageName: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  distance: string;
  route: string;
  nonPeak: string;
  peak: string;
  areas: string;
  terminalGuide: string;
  emailSubject: string;
  faqs: { question: string; answer: string }[];
};

// Only link to active, working routes to preserve crawl budget and prevent 404s
const activeAirportRoutes = [
  { href: "/airport-taxi-whitefield", label: "Whitefield to Airport Cab", tag: "ITPL & Kadugodi" },
  { href: "/airport-taxi-electronic-city", label: "Electronic City to Airport Cab", tag: "Phase 1 & 2 via Tollway" },
  { href: "/airport-taxi-sarjapur-road", label: "Sarjapur Road to Airport Cab", tag: "Bellandur & Carmelaram" },
  { href: "/airport-taxi-hsr-layout", label: "HSR Layout to Airport Cab", tag: "Sectors 1-7 & Agara" },
] as const;

export function PopularAirportCorridors({ currentSlug }: { currentSlug?: string }) {
  return (
    <section className="bg-slate-50 px-5 py-12 sm:py-16 border-t border-slate-200" aria-labelledby="popular-routes-heading">
      <div className="page-shell max-w-6xl mx-auto">
        <p className="section-kicker text-xs font-black tracking-widest text-purple-700 uppercase">POPULAR BANGALORE AIRPORT TAXI CORRIDORS</p>
        <h2 id="popular-routes-heading" className="mt-3 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
          Direct 6+1 Ertiga Airport Transfers Across Bengaluru
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Compare realistic route timings, toll ways, luggage suitability and pre-scheduled early morning booking details across key tech hubs.
        </p>
        <nav aria-label="Popular Bangalore airport taxi corridors" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeAirportRoutes.map((route) => {
            const isCurrent = currentSlug === route.href.replace("/", "");
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`rounded-2xl p-5 transition-all border ${
                  isCurrent
                    ? "bg-purple-900 text-white border-purple-900 shadow-md pointer-events-none"
                    : "bg-white text-slate-900 border-slate-200 hover:border-purple-400 hover:shadow-soft"
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${isCurrent ? "text-amber-300" : "text-purple-600"}`}>
                  {route.tag}
                </span>
                <strong className="block text-base font-extrabold">{route.label}</strong>
                <span className={`mt-2 flex items-center gap-1 text-xs font-semibold ${isCurrent ? "text-purple-200" : "text-slate-500"}`}>
                  {isCurrent ? "Current route" : "View route timings & booking"}
                  {!isCurrent && <ArrowRight size={14} className="ml-1" />}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, children, id }: { eyebrow: string; children: React.ReactNode; id: string }) {
  return (
    <>
      <p className="section-kicker text-xs font-black uppercase tracking-wider text-purple-700">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl lg:text-4xl">{children}</h2>
    </>
  );
}

export default function AirportCorridorPage({ corridor }: { corridor: AirportCorridor }) {
  const routeUrl = `${SITE.url}/${corridor.slug}`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need a ${corridor.pageName}.
Date:
Pickup time:
Terminal (T1/T2):
Pickup address:
Passengers and luggage:`)}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(corridor.emailSubject)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${corridor.pageName} in a 6+1 Ertiga`,
    serviceType: `${corridor.pageName} transfer`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: `+91${SITE.phone}`,
      url: SITE.url,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "Place", name: corridor.areas },
      { "@type": "Place", name: "Kempegowda International Airport Bengaluru (BLR)" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description: corridor.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Airport Transfers", item: `${SITE.url}#airport-services` },
      { "@type": "ListItem", position: 3, name: corridor.pageName, item: routeUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${routeUrl}#faq`,
    mainEntity: corridor.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section aria-labelledby="corridor-heading" className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-10 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-amber-400 sm:text-sm">{corridor.eyebrow}</p>
              <h1 id="corridor-heading" className="mt-2 text-3xl font-black leading-tight sm:text-4xl lg:text-4xl">{corridor.title}</h1>
              <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base sm:leading-7">{corridor.intro}</p>
              <p className="mt-2 text-sm font-bold text-amber-300">{SITE.specialisationSlogan}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:+91${SITE.phone}`} className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-extrabold text-purple-900 shadow-md hover:bg-slate-100 transition-colors">
                  <Phone size={18} /> Call +91 {SITE.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-extrabold text-white shadow-md hover:bg-emerald-500 transition-colors">
                  <MessageCircle size={18} /> WhatsApp for Quote
                </a>
              </div>
              <p className="mt-3 text-xs text-white/70">
                Punctual 24/7 airport drops & pickups. Minimum 6-hour advance booking ensures guaranteed vehicle assignment.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl">
              <Image src="/images/services/airport.jpg" alt={`Dedicated 6+1 Ertiga for ${corridor.pageName}`} width={1672} height={941} priority className="w-full h-auto object-cover max-h-[260px]" sizes="(max-width: 1024px) 100vw, 42vw" />
              <figcaption className="p-4 text-xs text-white/80 bg-black/40">
                Chauffeur-driven 6+1 Ertiga: Clean cabin, dual air-conditioning & ample check-in luggage space.
              </figcaption>
            </figure>
          </div>
          <a href="#route-details" className="service-scroll-prompt absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-xs font-black text-purple-900 shadow-xl">
            View Route, Timings & Luggage Guide <ArrowDown size={14} className="service-scroll-arrow" />
          </a>
        </section>

        {/* Distance & Time Breakdown */}
        <section id="route-details" className="bg-white px-5 pt-16 pb-12" aria-labelledby="route-heading">
          <div className="page-shell max-w-6xl mx-auto">
            <SectionHeading id="route-heading" eyebrow="ROUTE AND TRAVEL DURATION BREAKDOWN">
              {corridor.pageName}: Distance and Time
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Approximate distance", corridor.distance, "Calculated based on optimal highway routes to BLR Terminal 1 & 2."],
                ["Non-peak travel", corridor.nonPeak, `Smooth travel window via ${corridor.route}.`],
                ["Peak traffic travel", corridor.peak, "Recommended buffer for office peak hours, weather, and toll plaza lines."],
              ].map(([title, value, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50">
                  <p className="text-xs font-black uppercase tracking-wider text-purple-700">{title}</p>
                  <h3 className="mt-2 text-2xl font-black text-[#090f2f]">{value}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-700">
              Coverage areas include: <strong>{corridor.areas}</strong>. Our chauffeurs monitor live Google Maps traffic before dispatch to choose between Elevated Corridors and Outer Ring Road flyovers.
            </p>
          </div>
        </section>

        {/* Terminal Guide */}
        <section className="bg-slate-50 px-5 py-12 sm:py-16 border-y border-slate-200" aria-labelledby="terminal-heading">
          <div className="page-shell max-w-6xl mx-auto">
            <SectionHeading id="terminal-heading" eyebrow="BLR TERMINAL 1 & TERMINAL 2 GUIDE">
              Direct Curbside Drops for T1 and T2 Flights
            </SectionHeading>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-wider text-purple-700">Terminal 1 (T1)</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">Domestic Departures & Arrivals</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Direct curbside drop at BLR Terminal 1 departure gates. Ideal for IndiGo, Akasa, and SpiceJet domestic flights.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-wider text-purple-700">Terminal 2 (T2)</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">Garden Terminal: Domestic & International</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Curbside access for Air India, Vistara, and international flights. We advise allowing an extra 15 minutes for T2 check-in walking corridors.
                </p>
              </article>
            </div>
            <p className="mt-6 text-sm text-slate-600">{corridor.terminalGuide}</p>
          </div>
        </section>

        {/* Luggage Guide */}
        <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="luggage-heading">
          <div className="page-shell max-w-6xl mx-auto">
            <SectionHeading id="luggage-heading" eyebrow="FLEET AND LUGGAGE PLANNING">
              Travel in Comfort: 6+1 Maruti Suzuki Ertiga
            </SectionHeading>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
              <div className="space-y-4 text-slate-700 text-sm leading-6">
                <p>
                  Lucky Travels operates exclusively dedicated 6+1 Maruti Suzuki Ertigas. We do not dispatch hatchbacks or compact sedans, ensuring you never face vehicle downgrade surprises.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <strong className="block text-slate-900 font-bold">4 Passengers + Full Luggage:</strong>
                    <p className="text-xs text-slate-600 mt-1">3rd-row seats fold flat to accommodate 3 to 4 large suitcases plus cabin bags.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <strong className="block text-slate-900 font-bold">5 to 6 Passengers:</strong>
                    <p className="text-xs text-slate-600 mt-1">Accommodates 2 to 3 standard cabin suitcases and soft bags behind the 3rd row.</p>
                  </div>
                </div>
              </div>
              <aside className="rounded-2xl border-l-4 border-amber-400 bg-amber-50/80 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">Guaranteed Dispatch Policy</h3>
                <p className="mt-2 text-xs leading-5 text-slate-700">
                  Pre-booking at least 6 hours in advance reserves your vehicle and assigned chauffeur, preventing late-night and 3:00 AM ride cancellations.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 px-5 py-12 sm:py-16 border-t border-slate-200" aria-labelledby="faq-heading">
          <div className="page-shell max-w-6xl mx-auto">
            <SectionHeading id="faq-heading" eyebrow="AIRPORT TRANSFER FAQ">
              Common Questions Before Booking
            </SectionHeading>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {corridor.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#090f2f]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Corridors Cross-Links (4-card balanced grid) */}
        <PopularAirportCorridors currentSlug={corridor.slug} />

        {/* Global Hub Interlinks */}
        <section className="bg-white px-5 py-12 sm:py-16 border-t border-slate-200" aria-labelledby="related-heading">
          <div className="page-shell max-w-6xl mx-auto">
            <SectionHeading id="related-heading" eyebrow="CONNECTED TRAVEL SERVICES">
              Explore More Journeys with Lucky Travels
            </SectionHeading>
            <nav aria-label="Related travel resources" className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link href="/outstation-cabs-bangalore" className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-purple-400 hover:shadow-soft transition-all block">
                <strong className="block text-slate-900 text-sm font-bold">Outstation Cabs from Bangalore</strong>
                <p className="text-xs text-slate-600 mt-1">Mysore, Coorg, Ooty & Tirupati family round-trips in our 6+1 Ertiga.</p>
              </Link>
              <Link href="/blog/bangalore-to-adiyogi-chikkaballapur-cab-route-timings-ertiga-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-purple-400 hover:shadow-soft transition-all block">
                <strong className="block text-slate-900 text-sm font-bold">Adiyogi Chikkaballapura Guide</strong>
                <p className="text-xs text-slate-600 mt-1">Evening 7 PM laser show guide with guaranteed chauffeur parking & return ride.</p>
              </Link>
              <Link href="/corporate-car-rental-bangalore" className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-purple-400 hover:shadow-soft transition-all block">
                <strong className="block text-slate-900 text-sm font-bold">Corporate Car Rental</strong>
                <p className="text-xs text-slate-600 mt-1">Executive tech-park transit, full-day disposal & GST tax billing.</p>
              </Link>
            </nav>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}