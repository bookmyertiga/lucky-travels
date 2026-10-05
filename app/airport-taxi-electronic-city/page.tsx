import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Building2,
  Clock,
  Compass,
  Luggage,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-electronic-city`;
const ecityWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need an Electronic City to Bangalore Airport taxi.\n\nTravel Date:\nPickup Time:\nTerminal (T1/T2):\nPickup Address/Gate (Phase 1/Phase 2/Neeladri Nagar/Bommasandra):\nPassenger Count:\nLarge Check-in Suitcases & Cabin Bags:"
)}`;
const emailUrl = `mailto:${SITE.email}?subject=Electronic%20City%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "Electronic City to Bangalore Airport Taxi | 55km Highway Transfer - Go Bengaluru",
  description:
    "Reliable Electronic City Phase 1 & 2 to Kempegowda Airport (BLR T1 & T2) taxi service by Go Bengaluru by Lucky Travels. 55km express transit in 2026 factory CNG Ertigas, BETL Elevated Tollway routing, zero midnight cancellations.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Electronic City to Bangalore Airport Taxi | 55km Highway Transfer - Go Bengaluru",
    description:
      "Reliable Electronic City Phase 1 & 2 to Kempegowda Airport (BLR T1 & T2) taxi service. Chauffeur-driven 6+1 Ertiga, BETL tollway routing, zero surge pricing.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/airport.jpg`,
        width: 1672,
        height: 941,
        alt: "Premium Ertiga for an Electronic City to Bangalore Airport transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronic City to Bangalore Airport Taxi | 55km Highway Transfer",
    description:
      "Chauffeur-driven 2026 factory CNG Ertigas from Electronic City to BLR Airport with WhatsApp price-lock.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const routeOptions = [
  {
    name: "BETL Elevated Expressway via Silk Board & Bellary Rd (NH-44)",
    tag: "Primary Express Corridor",
    distance: "54 - 56 km",
    duration: "70 - 85 mins (Off-Peak / Early Morning)",
    description:
      "The preferred route for early flights (3:00 AM – 7:00 AM) and late nights. Fly over Hosur Road surface gridlock straight past Silk Board onto the Outer Ring Road and Hebbal expressway.",
  },
  {
    name: "NICE Road Peripheral Expressway via Bannerghatta & Tumkur Rd",
    tag: "Daytime Traffic Bypass",
    distance: "62 - 68 km",
    duration: "85 - 105 mins (Peak Working Hours)",
    description:
      "Used selectively during severe daytime bottlenecks along Silk Board or Dairy Circle. Skirts around central Bengaluru gridlock to join the Devanahalli corridor smoothly.",
  },
];

const localityNodes = [
  {
    zone: "Electronic City Phase 1",
    landmarks: "Infosys Main Gate, Wipro Gate, Velankani Drive, Keonics, HCL Technologies",
    transitAdvice: "Quick access directly onto the Elevated Expressway ramp within 4 minutes.",
  },
  {
    zone: "Phase 2 & Neeladri Nagar",
    landmarks: "Tech Mahindra, TCS, Neeladri Amusement Road, Ajmera Infinity, Concorde Midway",
    transitAdvice: "Chauffeur routes via Doddathoguru or Phase 1 flyover entry to avoid service-lane snarls.",
  },
  {
    zone: "Bommasandra & Hebbagodi",
    landmarks: "Biocon Park, Bommasandra Industrial Area, Narayana Hrudayalaya, Huskur Gate",
    transitAdvice: "Recommended pickup 30 minutes earlier to clear Hosur Road surface traffic before the flyover.",
  },
  {
    zone: "Begur & Hulimavu Link",
    landmarks: "Begur Road, Classic Paradise, DLF Westend Heights, Akshayanagar",
    transitAdvice: "Chauffeur connects via NICE Road or Bannerghatta link road depending on real-time traffic.",
  },
];

const faqs = [
  {
    question: "How long does a cab take from Electronic City to Kempegowda Airport (BLR)?",
    answer:
      "Because the distance spans 54 to 58 kilometres, off-peak or early-morning travel (between 3:00 AM and 6:30 AM) takes approximately 70 to 80 minutes via the BETL Elevated Expressway. During daytime business hours or rainy evenings, budget 110 to 130 minutes.",
  },
  {
    question: "How are the Elevated Expressway and Airport Trumpet tolls handled?",
    answer:
      "Lucky Travels enforces a strict WhatsApp Price-Lock Guarantee. When you request a quote, we clearly specify whether the BETL Elevated Tollway and Airport Expressway tolls are bundled or billed at actuals. What is agreed upon on WhatsApp remains completely fixed.",
  },
  {
    question: "Why is a 6+1 Ertiga superior to a hatchback or sedan for this 55km journey?",
    answer:
      "Sitting for over an hour across 55 kilometres in a compact sedan or hatchback with aftermarket CNG tanks in the boot quickly causes fatigue and claustrophobia. Our 2026 Ertigas feature factory S-CNG progressive suspension, generous 3-row recline, knee-level console AC, and a flat-folding boot that accommodates up to 4 large check-in suitcases with ease.",
  },
  {
    question: "Do you guarantee 3:00 AM or 4:00 AM early-morning pickups without cancellation?",
    answer:
      "Yes, 100%. Sourcing an on-demand cab in Electronic City past midnight is notoriously risky. Go Bengaluru operates on confirmed advance reservations. Your assigned owner-driver details are locked 6 to 12 hours prior, ensuring prompt arrival at your society gate.",
  },
  {
    question: "Can corporate employees receive GST invoices for reimbursement?",
    answer:
      "Yes. If you are travelling on company business or need expense claims for IT firms in E-City, mention your company GSTIN during booking to receive a compliant invoice.",
  },
];

export default function ElectronicCityAirportTaxiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electronic City to Bangalore Airport Taxi (55km Highway Transfer)",
    serviceType: "Airport Chauffeur-Driven Taxi Transfer",
    provider: {
      "@type": "TaxiService",
      name: "Go Bengaluru by Lucky Travels",
      legalName: "Lucky Travels",
      brand: { "@type": "Brand", name: "Go Bengaluru" },
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Electronic City",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.8452,
          longitude: 77.6602,
        },
      },
      {
        "@type": "Place",
        name: "Kempegowda International Airport Bengaluru",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
      bestRating: "5",
      worstRating: "1",
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Punctual Electronic City Phase 1 & 2 to Kempegowda Airport (BLR T1 & T2) transfers in brand new 2026 factory CNG 6+1 Ertigas with trip-locked WhatsApp pricing.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bangalore Airport Taxi",
        item: `${SITE.url}/airport-taxi-bangalore`,
      },
      { "@type": "ListItem", position: 3, name: "Electronic City Airport Taxi", item: routeUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${routeUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        {/* HERO SECTION: Tailored for 55km Highway Transfer */}
        <section
          aria-labelledby="ecity-airport-heading"
          className="relative bg-gradient-to-br from-[#070b24] via-[#1a0f4c] to-[#4d1299] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-amber-400/20 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-amber-300">
                  SOUTH BENGALURU AIRPORT CORRIDOR • 55 KM DIRECT TRANSIT
                </span>
              </div>
              <h1
                id="ecity-airport-heading"
                className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:mt-4 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
              >
                Electronic City to Bangalore Airport Taxi (BLR T1 &amp; T2)
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Cross Bengaluru with zero stress. We provide punctual, chauffeur-driven <strong>2026 factory-fitted S-CNG 6+1 Maruti Suzuki Ertiga</strong> cabs from <em>Electronic City Phase 1, Phase 2, Neeladri Nagar, Begur, and Bommasandra</em> straight to Kempegowda International Airport. Experience <em>Innova-class 3-row legroom and 4-suitcase luggage capacity</em> via the <strong>BETL Elevated Expressway</strong> without mid-trip cancellations or surprise surge rates.
              </p>
              <p className="mt-2 text-sm font-black text-amber-300 sm:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-purple-900 shadow transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={ecityWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock Electronic City Quote on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">
                Guaranteed vehicle allocation. Pre-book 6 to 12 hours ahead for 3:00 AM – 6:00 AM flights to ensure verified chauffeur arrival.
              </p>
              <a
                href="#transit-blueprint"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-xs font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                View 55km Highway Route &amp; Toll Blueprint Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>

            {/* Hero Image Showcase */}
            <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/40 bg-white shadow-soft">
              <Image
                src="/images/services/airport.jpg"
                alt="2026 Ertiga airport cab ready for Electronic City to Bangalore airport transit"
                width={1672}
                height={941}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <figcaption className="px-5 py-3.5 text-xs sm:text-sm leading-6 text-slate-600">
                Pristine <strong>6+1 Ertiga</strong> dedicated to <em>Electronic City Phase 1 &amp; 2 and South Bengaluru</em> airport transfers.
              </figcaption>
            </figure>
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#transit-blueprint"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-purple-700"
            >
              View 55km Highway Route &amp; Toll Blueprint Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow" />
            </a>
          </div>
        </section>

        {/* SECTION 1: THE 55KM TRANSIT BLUEPRINT (E-City Specific) */}
        <section id="transit-blueprint" className="bg-slate-50 px-5 pt-14 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200/80">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                HIGHWAY TRANSIT INTELLIGENCE • SOUTH BENGALURU TO DEVANAHALLI
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                The 55km Highway Route Blueprint: How We Navigate You on Time
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Traveling from Electronic City to Kempegowda Airport is the longest intra-city airport route in Bengaluru, spanning approximately <strong>54 to 58 kilometres</strong>. Choosing the wrong route or facing a breakdown can mean missing an international flight. Here is how our experienced chauffeurs coordinate your transit:
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {routeOptions.map((route) => (
                <article key={route.name} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                  <span className="inline-block rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-900 mb-2">
                    {route.tag}
                  </span>
                  <h3 className="text-lg font-black text-[#090f2f]">{route.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-slate-500">
                    <span className="flex items-center gap-1.5"><Compass size={15} className="text-purple-700" /> {route.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock size={15} className="text-emerald-700" /> {route.duration}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">{route.description}</p>
                </article>
              ))}
            </div>

            {/* Highway Endurance Feature Box */}
            <div className="mt-6 rounded-2xl border border-purple-200 bg-white p-5 sm:p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <h3 className="text-base sm:text-lg font-black text-[#090f2f]">Why 55 Kilometres Demands a 2026 Ertiga Upgrade</h3>
                <span className="text-xs font-black uppercase text-amber-600">Ergonomics &amp; Endurance</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div>
                  <strong className="text-purple-900 block mb-1">Dual-Zone Knee-Level AC</strong>
                  Long drives in heavy traffic demand draft-free cooling. Our 2026 center console vents keep second-row passengers relaxed from the knees up.
                </div>
                <div>
                  <strong className="text-purple-900 block mb-1">Progressive Suspension</strong>
                  Specially tuned Maruti Suzuki factory S-CNG dampers absorb rumble strips and expressway joins, eliminating nausea and back fatigue.
                </div>
                <div>
                  <strong className="text-purple-900 block mb-1">Reclining Middle Row</strong>
                  Unlike rigid sedan rear bench seats, our middle row slides and reclines so business travelers can rest before early flights.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TECH PARKS & GATED LOCALITIES COVERAGE */}
        <section className="bg-white px-5 py-10 sm:py-14">
          <div className="page-shell">
            <div className="w-full pb-3">
              <p className="section-kicker">LOCALITY &amp; CAMPUS DISPATCH PROTOCOLS</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Serving All Major Electronic City Gates &amp; Residential Clusters
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you need a pickup at an IT campus security desk or your apartment basement gate, our chauffeurs know every access point in South Bengaluru:
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {localityNodes.map((node) => (
                <div key={node.zone} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-purple-700 font-black text-sm flex items-center gap-1.5 mb-1.5">
                      <MapPin size={16} /> {node.zone}
                    </span>
                    <p className="text-xs text-slate-600 mb-2"><strong>Landmarks:</strong> {node.landmarks}</p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200/70 text-[11px] leading-5 text-slate-500">
                    💡 <em>Transit Tip:</em> {node.transitAdvice}
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate Travel Notice */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-purple-50/50 p-4 text-xs sm:text-sm text-purple-950">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-purple-700 shrink-0" />
                <span>Traveling on corporate IT duty? We provide GST-compliant invoicing for expense reimbursements.</span>
              </div>
              <Link href="/corporate-car-rental-bangalore" className="font-bold underline text-purple-900 hover:text-purple-700">
                Explore Corporate Cab Services →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: LUGGAGE & TERMINAL CAPACITY */}
        <section className="bg-slate-100 px-5 py-10 sm:py-14" aria-labelledby="luggage-heading">
          <div className="page-shell">
            <div className="w-full pb-3">
              <p className="section-kicker">CARGO CAPACITY &amp; AIRPORT LOGISTICS</p>
              <h2 id="luggage-heading" className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                4 Full Check-In Suitcases Fit Flat: No Lap Luggage
              </h2>
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  A common complaint for Electronic City airport travelers who book aggregator sedan cabs is discovering a retrofitted CNG cylinder in the trunk. Suitcases end up stacked on rear seats, forcing family members to squeeze uncomfortably for 55 km.
                </p>
                <p>
                  Our brand-new 2026 Maruti Suzuki Ertigas use original <strong>factory-fitted S-CNG technology</strong> with flat-folding split rear seating:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <strong className="text-[#090f2f] block mb-1">Up to 4 Passengers:</strong>
                    Fold down the 3rd row to store <span className="underline decoration-amber-400 font-semibold">up to 4 large 28-inch check-in suitcases</span> plus 3 cabin backpacks completely flat.
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <strong className="text-[#090f2f] block mb-1">5 to 6 Passengers:</strong>
                    Spacious 3-row family seating suitable for compact cabin trolley bags and duffels.
                  </div>
                </div>
              </div>

              {/* Terminal 1 & 2 Quick Reference */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-black text-[#090f2f] mb-3">BLR Terminal Drop Protocols</h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="rounded-xl bg-purple-50/60 p-3 border border-purple-100">
                    <strong className="text-purple-950 block">Terminal 1 (T1) — Domestic Curbside</strong>
                    Direct drop at T1 departure gates. For arrivals, we coordinate pickup at the <strong>P3/P4 parking bays</strong>.
                  </div>
                  <div className="rounded-xl bg-amber-50/60 p-3 border border-amber-100">
                    <strong className="text-amber-950 block">Terminal 2 (T2) — Garden Terminal</strong>
                    Direct drop at T2 international curbside. For arrivals, chauffeur receives guests at the <strong>P2 parking area</strong> with baggage assistance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TRUST & PRICE-LOCK GUARANTEE */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="booking-heading">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="section-kicker">TRANSPARENT WHATSAPP PRICING</p>
              <h2 id="booking-heading" className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Zero Surge Pricing. What is Agreed on WhatsApp Remains Locked.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                Rideshare apps frequently double or triple fares during sudden evening rainstorms along Silk Board or during the 4:00 AM flight rush. Lucky Travels gives you a clear, fixed quote on WhatsApp before confirmation.
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-600 shrink-0" /> BETL Elevated Highway tolls clarified upfront with zero surprises.</li>
                <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-600 shrink-0" /> Zero midnight booking cancellation risk.</li>
                <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-600 shrink-0" /> Direct coordination with owner-driver Bharath K S or assigned trusted chauffeur.</li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                </div>
                <span className="text-xs font-bold text-slate-600">4.9 / 5 Rating from 52+ Electronic City corporate &amp; family airport transfers</span>
              </div>
            </div>

            {/* Direct Booking Card */}
            <aside className="rounded-2xl bg-[#070b24] p-6 text-white shadow-soft">
              <h3 className="text-lg sm:text-xl font-black">Request Electronic City Airport Quote</h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-white/75">
                Share your flight number, gate, and date for an immediate price-locked quote.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-[#070b24] shadow transition hover:bg-slate-100"
                >
                  <Phone size={17} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={ecityWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-center text-xs sm:text-sm font-black text-white shadow transition hover:bg-emerald-400"
                >
                  <MessageCircle size={17} /> Lock Quote on WhatsApp
                </a>
                <a
                  href={emailUrl}
                  className="rounded-xl border border-white/25 px-5 py-3 text-center text-xs sm:text-sm font-black text-white shadow transition hover:bg-white/10"
                >
                  Email {SITE.email}
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* SECTION 5: FAQS */}
        <section className="bg-white px-5 py-10 sm:py-14 border-t border-slate-200/80" aria-labelledby="faq-heading">
          <div className="page-shell">
            <p className="section-kicker">FREQUENTLY ASKED QUESTIONS</p>
            <h2 id="faq-heading" className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
              Electronic City to Bangalore Airport Taxi FAQs
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 p-5 bg-slate-50/40">
                  <h3 className="text-base font-black text-[#090f2f]">{faq.question}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Corridors Component */}
        <PopularAirportCorridors />

        {/* RELATED RESOURCES NAVIGATION */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="related-heading">
          <p className="section-kicker">CROSS-CITY TRANSIT HUBS</p>
          <h2 id="related-heading" className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
            Explore Other Tech Corridor Airport Routes
          </h2>
          <nav aria-label="Related airport resources" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/airport-taxi-whitefield"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Whitefield Airport Taxi (Budigere Bypass)
            </Link>
            <Link
              href="/airport-taxi-sarjapur-road"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Sarjapur Road / Bellandur Taxi
            </Link>
            <Link
              href="/airport-taxi-hsr-layout"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → HSR Layout Airport Cab
            </Link>
            <Link
              href="/car-rental-bangalore"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Hourly &amp; Daily Bangalore Car Rental
            </Link>
          </nav>
        </section>
      </main>
    </SiteShell>
  );
}