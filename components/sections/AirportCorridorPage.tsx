import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";
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

const airportRoutes = [
  ["/airport-taxi-bangalore", "Bangalore Airport taxi service"],
  ["/airport-taxi-whitefield", "Whitefield to Bangalore Airport taxi"],
  ["/airport-taxi-electronic-city", "Electronic City to Bangalore Airport taxi"],
  ["/airport-taxi-hsr-layout", "HSR Layout to Bangalore Airport taxi"],
  ["/airport-taxi-indiranagar", "Indiranagar to Bangalore Airport taxi"],
  ["/airport-taxi-sarjapur-road", "Sarjapur Road to Bangalore Airport taxi"],
  ["/airport-taxi-marathahalli", "Marathahalli to Bangalore Airport taxi"],
  ["/airport-taxi-jp-nagar", "JP Nagar to Bangalore Airport taxi"],
] as const;

export function PopularAirportCorridors() {
  return (
    <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="popular-routes-heading">
      <div className="page-shell">
        <p className="section-kicker">POPULAR BANGALORE AIRPORT TAXI CORRIDORS</p>
        <h2 id="popular-routes-heading" className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">
          Compare Airport Transfer Routes Across Bengaluru
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-slate-700">
          Explore practical route timing, terminal planning, luggage guidance and direct booking details for each popular Bangalore airport corridor.
        </p>
        <nav aria-label="Popular Bangalore airport taxi corridors" className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {airportRoutes.map(([href, label]) => (
            <Link key={href} href={href} className="rounded-xl bg-slate-100 p-4 font-bold text-purple-700 shadow-soft">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, children, id }: { eyebrow: string; children: React.ReactNode; id: string }) {
  return (
    <>
      <p className="section-kicker">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">{children}</h2>
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
    "@type": "Service",
    name: `${corridor.pageName} in a Premium Ertiga`,
    serviceType: `${corridor.pageName} transfer`,
    provider: { "@type": "TaxiService", name: SITE.name, brand: { "@type": "Brand", name: SITE.brand }, url: SITE.url, telephone: `+91${SITE.phone}`, email: SITE.email },
    areaServed: [{ "@type": "Place", name: corridor.pageName }, { "@type": "Place", name: "Kempegowda International Airport Bengaluru" }],
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description: corridor.description,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Airport Transfers", item: `${SITE.url}/services/airport-transfers` },
      { "@type": "ListItem", position: 3, name: corridor.pageName, item: routeUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${routeUrl}#faq`,
    mainEntity: corridor.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        <section aria-labelledby="corridor-heading" className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-6 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm sm:leading-normal">{corridor.eyebrow}</p>
              <h1 id="corridor-heading" className="mt-2 max-w-2xl text-3xl font-black leading-tight sm:mt-3 sm:text-4xl lg:text-4xl">{corridor.title}</h1>
              <p className="mt-2 max-w-3xl text-[13px] leading-5 text-white/85 sm:mt-3 sm:text-base sm:leading-7">{corridor.intro}</p>
              <p className="mt-1 text-sm font-black leading-5 text-amber-300 sm:mt-2 sm:text-lg sm:leading-6 lg:text-base">{SITE.specialisationSlogan}</p>
              <div className="mt-2 flex flex-wrap gap-3 sm:mt-3">
                <a href={`tel:+91${SITE.phone}`} className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-black text-purple-800 lg:py-3 lg:text-sm"><Phone size={19} /> Call +91 {SITE.phone}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 font-black text-white lg:py-3 lg:text-sm"><MessageCircle size={19} /> WhatsApp for a Quote</a>
              </div>
              <p className="mt-1 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">24/7 enquiries. Guaranteed vehicle dispatch requires minimum 6-hour advance booking and direct confirmation of the address, terminal, timing and driver availability.</p>
            </div>
            <figure className="mx-auto max-h-[300px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-soft">
              <Image src="/images/services/airport.jpg" alt={`Premium Ertiga for ${corridor.pageName}`} width={1672} height={941} priority className="max-h-[230px] w-full object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">A clean, chauffeur-driven 6+1 Ertiga for planned Bengaluru airport journeys.</figcaption>
            </figure>
          </div>
          <a href="#route-details" className="service-scroll-prompt absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-[10px] font-black tracking-[0.08em] text-purple-800 shadow-premium sm:px-5 sm:text-xs">Explore Route, Timings &amp; Booking Details Below <ArrowDown size={16} className="service-scroll-arrow" /></a>
        </section>

        <section id="route-details" className="bg-white px-5 py-10" aria-labelledby="route-heading">
          <div className="page-shell"><SectionHeading id="route-heading" eyebrow="ROUTE AND TRAVEL DURATION BREAKDOWN">{corridor.pageName}: Distance and Time</SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["Approximate distance", corridor.distance, "The exact distance varies by pickup address and the airport terminal."], ["Non-peak travel", corridor.nonPeak, `Typical planning window via ${corridor.route}.`], ["Peak travel", corridor.peak, "Allow extra time for office traffic, rain, airport congestion and incidents."]].map(([title, value, text]) => <article key={title} className="rounded-2xl border border-slate-200 p-5"><p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">{title}</p><h3 className="mt-3 text-2xl font-black text-[#090f2f]">{value}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></article>)}
            </div>
            <p className="mt-7 max-w-4xl leading-8 text-slate-700">At trip start, the chauffeur evaluates real-time Google Maps traffic and chooses the fastest practical route. For an airport drop, work backwards from airline check-in time and share the flight schedule so a sensible reporting time can be discussed.</p>
          </div>
        </section>

        <section className="page-shell py-12 sm:py-16" aria-labelledby="terminal-heading"><SectionHeading id="terminal-heading" eyebrow="BLR TERMINAL 1 AND TERMINAL 2 GUIDE">Share the Correct BLR Terminal Before Travel</SectionHeading><div className="mt-8 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 1</p><h3 className="mt-3 text-2xl font-black">Domestic departures and arrivals</h3><p className="mt-3 leading-7 text-slate-700">Check the latest airline message for T1 and share the terminal before the driver reports. Follow current airport signage for the agreed curbside drop or pickup meeting point.</p></article><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 2</p><h3 className="mt-3 text-2xl font-black">Domestic and international operations</h3><p className="mt-3 leading-7 text-slate-700">Confirm T2 from the latest airline communication. Terminal assignments can change, so the ticket remains the source of truth and the current BLR access instructions should be followed.</p></article></div><p className="mt-6 leading-8 text-slate-700">{corridor.terminalGuide} For a pickup, send the flight number and message after collecting bags so the driver can coordinate the latest meeting instructions.</p></section>

        <section className="bg-slate-100 px-5 py-12 sm:py-16" aria-labelledby="luggage-heading"><div className="page-shell"><SectionHeading id="luggage-heading" eyebrow="EXCLUSIVE FLEET AND LUGGAGE GUIDE">Travel in the Right Ertiga Seating Arrangement</SectionHeading><div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,.8fr)]"><div className="space-y-5 leading-8 text-slate-700"><p>{SITE.specialisationSlogan} Lucky Travels operates only chauffeur-driven 6+1 Maruti Suzuki Ertiga cabs. We do not operate hatchbacks or sedans.</p><ul className="grid gap-3 sm:grid-cols-2"><li className="rounded-xl border border-slate-200 bg-white p-4">4 passengers with up to 4 large suitcases when the 3rd row is folded.</li><li className="rounded-xl border border-slate-200 bg-white p-4">6 passengers with compact cabin bags for a practical fit.</li><li className="rounded-xl border border-slate-200 bg-white p-4">Share bag sizes, child seats and unusual items before confirmation.</li><li className="rounded-xl border border-slate-200 bg-white p-4">Vehicle suitability is checked honestly before dispatch.</li></ul></div><aside className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6"><h3 className="text-xl font-black">Guaranteed dispatch policy</h3><p className="mt-3 leading-7 text-slate-700">A minimum of 6-hour advance booking is required for guaranteed vehicle dispatch. Earlier enquiry is sensible for early flights and peak corridor traffic.</p></aside></div></div></section>

        <section className="page-shell py-12 sm:py-16" aria-labelledby="booking-heading"><SectionHeading id="booking-heading" eyebrow="DIRECT BOOKING AND TRANSPARENT QUOTE">Book Your {corridor.pageName}</SectionHeading><div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,.9fr)]"><div className="space-y-5 leading-8 text-slate-700"><p>Send the complete pickup address, travel date, reporting time, terminal, flight details, passenger count and luggage information. The chauffeur reviews real-time Google Maps traffic at trip start and selects the fastest practical route.</p><p>There are no fixed prices on this page. Lucky Travels provides a trip-specific quote after reviewing the route, timing, vehicle, tolls, parking, waiting arrangements and availability before confirmation.</p><p>For guaranteed dispatch, enquire at least 6 hours in advance.</p></div><aside className="rounded-2xl bg-[#080d2b] p-6 text-white shadow-soft"><h3 className="text-xl font-black">Request a direct quote</h3><p className="mt-3 leading-7 text-white/75">Tell us the terminal and complete pickup details for a clear response.</p><div className="mt-6 grid gap-3"><a href={`tel:+91${SITE.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#080d2b]"><Phone size={18} /> Call +91 {SITE.phone}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"><MessageCircle size={18} /> WhatsApp for a Quote</a><a href={emailUrl} className="rounded-xl border border-white/25 px-5 py-3.5 text-center font-black text-white">Email {SITE.email}</a></div></aside></div></section>

        <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="faq-heading"><div className="page-shell"><SectionHeading id="faq-heading" eyebrow="AIRPORT TRANSFER FAQ">Common Questions Before You Travel</SectionHeading><div className="mt-8 grid gap-4 md:grid-cols-2">{corridor.faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-black text-[#090f2f]">{faq.question}</h3><p className="mt-3 leading-7 text-slate-700">{faq.answer}</p></article>)}</div></div></section>
        <PopularAirportCorridors />
        <section className="page-shell py-12 sm:py-16" aria-labelledby="related-heading"><SectionHeading id="related-heading" eyebrow="MORE BENGALURU TRAVEL HELP">Plan the Rest of Your Journey</SectionHeading><nav aria-label="Related travel resources" className="mt-7 grid gap-3 sm:grid-cols-2"><Link href="/blog/premium-ertiga-for-bengaluru-airport-transfer" className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft">Bengaluru Airport cab pre-booking guide</Link><Link href="/car-rental-bangalore" className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft">Hourly and daily Ertiga rental</Link></nav></section>
      </main>
    </SiteShell>
  );
}
