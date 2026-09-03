import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

export type OutstationCorridor = {
  slug: string;
  pageName: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  heroCaption: string;
  distanceTime: string;
  route: string;
  routeDetails: string;
  destinationDetails: string;
  permitDetails?: string;
  emailSubject: string;
  faqs: { question: string; answer: string }[];
};

const outstationRoutes = [
  ["/bangalore-to-mysore-cab", "Bangalore to Mysore cab"],
  ["/bangalore-to-coorg-cab", "Bangalore to Coorg cab"],
  ["/bangalore-to-ooty-cab", "Bangalore to Ooty cab"],
  ["/bangalore-to-chikmagalur-cab", "Bangalore to Chikmagalur cab"],
  ["/bangalore-to-tirupati-cab", "Bangalore to Tirupati cab"],
] as const;

export function PopularOutstationRoutes() {
  return (
    <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="popular-outstation-routes-heading">
      <div className="page-shell">
        <p className="section-kicker">POPULAR OUTSTATION ROUTES FROM BANGALORE</p>
        <h2 id="popular-outstation-routes-heading" className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">
          Plan Your Next Premium Ertiga Journey
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-slate-700">
          Compare route distance, timing, highway planning, luggage guidance and transparent trip-specific quote details for popular destinations from Bangalore.
        </p>
        <nav aria-label="Popular outstation routes from Bangalore" className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {outstationRoutes.map(([href, label]) => (
            <Link key={href} href={href} className="rounded-xl bg-slate-100 p-4 font-bold text-purple-700 shadow-soft">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, children, id, dark = false }: { eyebrow: string; children: React.ReactNode; id: string; dark?: boolean }) {
  return (
    <>
      <p className={dark ? "text-sm font-black uppercase tracking-[.18em] text-amber-400" : "section-kicker"}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}>{children}</h2>
    </>
  );
}

export default function OutstationCorridorPage({ corridor }: { corridor: OutstationCorridor }) {
  const routeUrl = `${SITE.url}/${corridor.slug}`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need a ${corridor.pageName}.
Travel date:
Pickup time and address:
One-way, return or multi-day:
Passengers and luggage:
Destination hotel, homestay or landmark:`)}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(corridor.emailSubject)}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${corridor.pageName} in a Premium Ertiga`,
    serviceType: `${corridor.pageName} outstation taxi service`,
    provider: { "@type": "TaxiService", name: SITE.name, brand: { "@type": "Brand", name: SITE.brand }, url: SITE.url, telephone: `+91${SITE.phone}`, email: SITE.email },
    areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "Place", name: corridor.pageName }],
    url: routeUrl,
    image: `${SITE.url}/images/services/outstation.jpg`,
    description: corridor.description,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Packages", item: `${SITE.url}/services/outstation-packages` },
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
        <section aria-labelledby="outstation-corridor-heading" className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-6 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm sm:leading-normal">{corridor.eyebrow}</p>
              <h1 id="outstation-corridor-heading" className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:mt-3 sm:text-4xl">{corridor.title}</h1>
              <p className="mt-2 max-w-3xl text-[13px] leading-5 text-white/85 sm:mt-3 sm:text-base sm:leading-7">{corridor.intro}</p>
              <p className="mt-1 text-sm font-black leading-5 text-amber-300 sm:mt-2 sm:text-lg sm:leading-6 lg:text-base">{SITE.specialisationSlogan}</p>
              <div className="mt-2 flex flex-wrap gap-3 sm:mt-3">
                <a href={`tel:+91${SITE.phone}`} className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-black text-purple-800 lg:py-3 lg:text-sm"><Phone size={19} /> Call +91 {SITE.phone}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 font-black text-white lg:py-3 lg:text-sm"><MessageCircle size={19} /> WhatsApp for a Quote</a>
              </div>
              <p className="mt-1 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">24/7 enquiries. Minimum 6 to 12 hours advance booking is required for chauffeur allocation, vehicle preparation and confirmed dispatch.</p>
            </div>
            <figure className="mx-auto max-h-[300px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-soft">
              <Image src="/images/services/outstation.jpg" alt={`Clean Premium Ertiga for ${corridor.pageName}`} width={1536} height={1024} priority className="max-h-[230px] w-full object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">{corridor.heroCaption}</figcaption>
            </figure>
          </div>
          <a href="#route-details" className="service-scroll-prompt absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-[10px] font-black tracking-[0.08em] text-purple-800 shadow-premium sm:px-5 sm:text-xs">Explore Route, Tolls &amp; Booking Details Below <ArrowDown size={16} className="service-scroll-arrow" /></a>
        </section>

        <section id="route-details" className="bg-white px-5 py-10" aria-labelledby="route-heading">
          <div className="page-shell"><SectionHeading id="route-heading" eyebrow="ROUTE, DISTANCE AND DURATION">{corridor.pageName}: Route Planning</SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-3"><article className="rounded-2xl border border-slate-200 p-5"><p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Approximate journey</p><h3 className="mt-3 text-2xl font-black text-[#090f2f]">{corridor.distanceTime}</h3><p className="mt-2 leading-7 text-slate-600">Actual time varies with pickup address, breaks, weather and destination access.</p></article><article className="rounded-2xl border border-slate-200 p-5"><p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Main route</p><h3 className="mt-3 text-xl font-black text-[#090f2f]">{corridor.route}</h3><p className="mt-2 leading-7 text-slate-600">The route is confirmed around the actual itinerary and vehicle availability.</p></article><article className="rounded-2xl border border-slate-200 p-5"><p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Direct destination</p><h3 className="mt-3 text-xl font-black text-[#090f2f]">Door to door</h3><p className="mt-2 leading-7 text-slate-600">Drop at the customer-chosen hotel, homestay or landmark.</p></article></div>
            <p className="mt-7 max-w-4xl leading-8 text-slate-700">{corridor.routeDetails} Chauffeurs monitor live Google Maps traffic at departure to select the fastest highway exits and bypasses. Share the complete address and preferred timing before confirmation.</p>
          </div>
        </section>

        <section className="page-shell py-12 sm:py-16" aria-labelledby="destination-heading"><SectionHeading id="destination-heading" eyebrow="DIRECT TRANSPORT TO YOUR CHOSEN DESTINATION">Plan the Arrival and Drop</SectionHeading><div className="mt-8 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-2xl font-black">Door-to-door service</h3><p className="mt-3 leading-7 text-slate-700">{corridor.destinationDetails}</p></article><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-2xl font-black">Transport only</h3><p className="mt-3 leading-7 text-slate-700">Lucky Travels provides direct transport to the customer-chosen hotel, homestay or landmark. We do not provide packaged tours, sightseeing packages or stay bookings.</p>{corridor.permitDetails && <p className="mt-4 leading-7 text-slate-700">{corridor.permitDetails}</p>}</article></div></section>

        <section className="bg-slate-100 px-5 py-12 sm:py-16" aria-labelledby="fleet-heading"><div className="page-shell"><SectionHeading id="fleet-heading" eyebrow="EXCLUSIVE FLEET AND COMFORT">One Vehicle Category, Clearly Confirmed</SectionHeading><p className="mt-6 max-w-4xl leading-8 text-slate-700">{SITE.specialisationSlogan} Lucky Travels operates dedicated chauffeur-driven 6+1 Maruti Suzuki Ertiga vehicles only. We do not operate hatchbacks or sedans.</p><ul className="mt-7 grid gap-3 md:grid-cols-2"><li className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700">Ideal for 4 to 5 passengers with up to 4 large trolley suitcases when the 3rd row is folded.</li><li className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700">For 6 passengers, compact cabin bags provide the practical luggage arrangement.</li><li className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700">Share bag sizes, children, elderly assistance and unusual items before confirmation.</li><li className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700">Minimum 6 to 12 hours advance booking supports chauffeur allocation and vehicle preparation.</li></ul></div></section>

        <section className="page-shell py-12 sm:py-16" aria-labelledby="quote-heading"><SectionHeading id="quote-heading" eyebrow="TRANSPARENT TRIP-SPECIFIC QUOTE">Book Your {corridor.pageName}</SectionHeading><div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,.9fr)]"><div className="space-y-5 leading-8 text-slate-700"><p>Send the pickup address, travel date, departure time, journey type, passenger count, luggage and exact hotel, homestay or landmark destination. A one-way, return or multi-day transport plan can then be reviewed.</p><p>There are zero fixed prices on this page. The transparent quote is specific to the route and itinerary and explains applicable tollway fares, permits, parking, waiting, driver allowance and other trip terms before confirmation.</p><p>Book 6 to 12 hours ahead for chauffeur allocation and vehicle preparation. Longer notice is recommended for weekends, holidays, forest corridors and timed visits.</p></div><aside className="rounded-2xl bg-[#080d2b] p-6 text-white shadow-soft"><h3 className="text-xl font-black">Request a direct quote</h3><p className="mt-3 leading-7 text-white/75">Share the full destination and luggage plan for an accurate response.</p><div className="mt-6 grid gap-3"><a href={`tel:+91${SITE.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#080d2b]"><Phone size={18} /> Call +91 {SITE.phone}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"><MessageCircle size={18} /> WhatsApp for a Quote</a><a href={emailUrl} className="rounded-xl border border-white/25 px-5 py-3.5 text-center font-black text-white">Email {SITE.email}</a></div></aside></div></section>

        <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="faq-heading"><div className="page-shell"><SectionHeading id="faq-heading" eyebrow="OUTSTATION TRAVEL FAQ">Common Questions Before Booking</SectionHeading><div className="mt-8 grid gap-4 md:grid-cols-2">{corridor.faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-black text-[#090f2f]">{faq.question}</h3><p className="mt-3 leading-7 text-slate-700">{faq.answer}</p></article>)}</div></div></section>
        <PopularOutstationRoutes />
      </main>
    </SiteShell>
  );
}
