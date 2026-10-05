import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Briefcase,
  CheckCircle2,
  Clock,
  Compass,
  Luggage,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-hsr-layout`;
const hsrWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need an HSR Layout to Bangalore Airport taxi.\n\nTravel Date:\nPickup Time:\nTerminal (T1/T2):\nPickup Address/Sector (HSR Sector 1-7 / 27th Main / Agara / Teachers Colony):\nPassenger Count:\nLarge Suitcases & Cabin Bags:"
)}`;
const emailUrl = `mailto:${SITE.email}?subject=HSR%20Layout%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "HSR Layout to Bangalore Airport Taxi | 6+1 Ertiga Cab - Go Bengaluru",
  description:
    "Punctual HSR Layout (Sectors 1-7 & Agara) to Kempegowda Airport (BLR T1 & T2) transfers by Go Bengaluru by Lucky Travels. 2024-2026 factory CNG Ertigas, 4-suitcase luggage room, Agara & Silk Board bypass routes, zero surge pricing.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "HSR Layout to Bangalore Airport Taxi | 6+1 Ertiga Cab - Go Bengaluru",
    description:
      "Chauffeur-driven 6+1 Ertiga airport transfers from HSR Layout Sectors 1-7 & Agara. Transparent WhatsApp price-locks, 4-suitcase boot room, zero midnight cancellations.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/airport.jpg`,
        width: 1672,
        height: 941,
        alt: "2024-2026 Ertiga for HSR Layout to Bangalore Airport transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSR Layout to Bangalore Airport Taxi | 6+1 Ertiga Cab - Go Bengaluru",
    description:
      "Reliable airport transfers from HSR Layout Sectors 1-7 to BLR Airport in 2024-2026 factory S-CNG Ertigas.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const routeOptions = [
  {
    title: "Intermediate Ring Road via Koramangala & Domlur",
    tag: "Morning Express Route",
    tagColor: "bg-blue-50 text-blue-800 border-blue-200",
    distance: "Around 42 - 45 km",
    duration: "55 - 65 mins (Early Morning / 3:00 AM – 6:30 AM)",
    via: "27th Main → Agara → St. John's → Intermediate Ring Road → Domlur → Old Airport Rd → Suranjan Das / NH-44",
    note: "The preferred early-morning artery, avoiding Silk Board completely and bypassing surface Outer Ring Road bottlenecks.",
  },
  {
    title: "Outer Ring Road (ORR) via Marathahalli & Hebbal",
    tag: "High-Capacity Expressway",
    tagColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
    distance: "Around 46 - 49 km",
    duration: "75 - 95 mins (Daytime Flow)",
    via: "Agara Flyover → Iblur → Bellandur → Marathahalli → Tin Factory → Hebbal Flyover → NH-44",
    note: "Used during mid-day when arterial city center roads are congested. Smooth continuous flyovers keep transit steady toward Devanahalli.",
  },
];

const sectorGrid = [
  {
    sector: "HSR Sectors 1 & 2",
    landmarks: "Agara Lake perimeter, 27th Main commercial hub, CPWD Complex",
    transitNote: "Immediate connection to Agara flyover within 3 minutes of gate departure.",
  },
  {
    sector: "HSR Sectors 3 & 4",
    landmarks: "BDA Complex, 14th Main, Lawrence School, 19th Main food street",
    transitNote: "Central HSR grid; easy exit via 14th Main towards Koramangala or Silk Board flyover.",
  },
  {
    sector: "HSR Sectors 5 & 6",
    landmarks: "5th Main startup corridor, Kulappa Compound, Green View Hospital",
    transitNote: "Swift feeder roads toward Intermediate Ring Road to bypass morning school traffic.",
  },
  {
    sector: "HSR Sector 7 & Teachers Colony",
    landmarks: "Near Hosur Road link, Mangammanapalya road, Silk Board side",
    transitNote: "Quick boarding onto the elevated loops towards central Bengaluru and airport corridors.",
  },
];

const faqs = [
  {
    question: "How long does an airport cab take from HSR Layout to BLR Airport?",
    answer:
      "The distance is approximately 44 kilometres. During off-peak or early-morning windows (3:00 AM to 6:30 AM), transit takes just 55 to 65 minutes. During daytime business hours or rainy evenings, plan for 90 to 115 minutes.",
  },
  {
    question: "How does the driver avoid the notorious Silk Board bottleneck?",
    answer:
      "HSR Layout offers unique geographic advantages. For early-morning airport runs, our chauffeurs exit north via 27th Main and the Agara flyover, bypassing Silk Board entirely by routing through Koramangala and the Intermediate Ring Road toward Domlur and NH-44.",
  },
  {
    question: "Why book a 2024-2026 6+1 Ertiga over a standard app sedan taxi?",
    answer:
      "Compact app sedans (like Dzire or Etios) have retrofitted CNG cylinders taking up the boot, forcing international suitcases onto passenger laps. Our fleet consists of well-maintained 2024 to 2026 factory-fitted S-CNG Ertigas with flat-folding rear seats that easily fit 4 large 28-inch check-in suitcases, knee-level console AC, and Innova-like 3-row comfort for barely more than sedan rates.",
  },
  {
    question: "Do you guarantee early morning 3:30 AM pickups from HSR Layout without cancellation?",
    answer:
      "Yes, 100%. Aggregator apps frequently leave travelers stranded at midnight in HSR Layout. Go Bengaluru operates on confirmed advance reservations. Your assigned chauffeur and vehicle details are confirmed 6 to 12 hours prior, ensuring prompt arrival at your sector doorstep.",
  },
  {
    question: "Can startup founders and business travelers get GST invoices for corporate reimbursement?",
    answer:
      "Yes. Simply provide your company GSTIN and billing name on WhatsApp during booking, and we will issue a compliant GST invoice for your travel expenses.",
  },
];

export default function HsrLayoutAirportTaxiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HSR Layout to Bangalore Airport Taxi in a Dedicated 6+1 Ertiga",
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
        name: "HSR Layout",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9121,
          longitude: 77.6446,
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
      reviewCount: "44",
      bestRating: "5",
      worstRating: "1",
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Punctual HSR Layout (Sectors 1-7) to Kempegowda Airport (BLR T1 & T2) transfers in 2024-2026 factory CNG 6+1 Ertigas with trip-locked WhatsApp pricing.",
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
      { "@type": "ListItem", position: 3, name: "HSR Layout Airport Taxi", item: routeUrl },
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

        {/* HERO SECTION: Tailored Startup Hub Cobalt & Deep Navy Palette */}
        <section
          aria-labelledby="hsr-airport-heading"
          className="relative bg-gradient-to-br from-[#070e24] via-[#0d1b3e] to-[#102a5c] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              {/* Startup Sector Tag Capsule */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-300">
                  <Rocket size={13} className="text-cyan-400" />
                  HSR LAYOUT SECTORS 1–7 • AGARA • BLR AIRPORT TAXI
                </span>
              </div>

              <h1
                id="hsr-airport-heading"
                className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:mt-4 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
              >
                HSR Layout to Bangalore Airport Taxi in a Dedicated 6+1 Ertiga
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
                Schedule a reliable, chauffeur-driven airport transfer from <strong>HSR Layout Sectors 1 through 7, 27th Main, Teachers Colony, and Agara</strong> to <strong>Kempegowda International Airport (BLR T1 &amp; T2)</strong>. Travel in a well-maintained <strong>2024 to 2026 factory-fitted S-CNG 6+1 Maruti Suzuki Ertiga</strong>. Enjoy <em>Innova-grade 3-row comfort, 4-suitcase luggage room, knee-level console AC</em>, and dynamic <strong>Silk Board bypass routing</strong> with guaranteed WhatsApp price-locks and zero surge surprises.
              </p>

              <p className="mt-2 text-sm font-black text-amber-300 sm:text-base">
                {SITE.specialisationSlogan}
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-slate-900 shadow transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} className="text-blue-700" /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={hsrWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock HSR Layout Quote on WhatsApp
                </a>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-300/80">
                Minimum 6 hours advance booking recommended. Punctual doorstep dispatch with complete baggage assistance for early 3:00 AM – 6:00 AM flight departures.
              </p>

              <a
                href="#sector-navigation"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-center text-xs font-black text-cyan-300 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                View Sector Exit Routes &amp; Baggage Specs Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>

            {/* Hero Visual Card */}
            <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 shadow-soft">
              <Image
                src="/images/services/airport.jpg"
                alt="2024-2026 Ertiga cab for HSR Layout airport transfers"
                width={1672}
                height={941}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <figcaption className="px-5 py-3.5 text-xs sm:text-sm leading-6 text-slate-300">
                A pristine, chauffeur-driven <strong>2024–2026 6+1 Ertiga</strong> dedicated to <em>HSR Layout and South-East Bengaluru</em> airport commuters.
              </figcaption>
            </figure>
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#sector-navigation"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-700 bg-white px-5 py-2.5 text-center text-sm font-black text-slate-900 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-blue-600"
            >
              View Sector Exit Routes &amp; Baggage Specs Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow text-blue-700" />
            </a>
          </div>
        </section>

        {/* SECTION 1: SECTOR EXIT INTELLIGENCE & BYPASS ROUTES */}
        <section id="sector-navigation" className="bg-slate-50 px-5 pt-14 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                TRAFFIC NAVIGATION • 44 KM CORRIDOR
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Agara &amp; Silk Board Bypass: How We Get You from HSR to BLR on Time
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                HSR Layout is surrounded by heavy arterial intersections at Silk Board, Agara, and Bellandur. Rather than risking delays, our chauffeurs choose the optimal exit strategy based on departure timing:
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {routeOptions.map((route) => (
                <article key={route.title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                  <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-bold ${route.tagColor} mb-2.5`}>
                    {route.tag}
                  </span>
                  <h3 className="text-lg font-black text-slate-900">{route.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1.5"><Compass size={15} className="text-blue-700" /> {route.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock size={15} className="text-emerald-700" /> {route.duration}</span>
                  </div>
                  <p className="mt-2.5 text-xs font-semibold text-slate-700"><strong>Via:</strong> {route.via}</p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-2">{route.note}</p>
                </article>
              ))}
            </div>

            {/* Travel Time Planner Pill Strip */}
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/60 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Clock size={19} className="text-blue-700 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-blue-950">
                    Timing Advice: Schedule pickup 3 to 3.5 hours prior for domestic flights; 4.5 hours prior for international departures from HSR Layout.
                  </span>
                </div>
                <Link
                  href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
                  className="text-xs font-bold underline text-blue-900 hover:text-blue-700"
                >
                  Read Terminal Reporting Checklist →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SEDAN VS. ERTIGA COMPARISON (Startup & Baggage Focus) */}
        <section className="bg-white px-5 py-10 sm:py-14">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                TRANSIT UPGRADE • HSR LAYOUT TO BENGALURU AIRPORT
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Looking for a Sedan Cab from HSR Layout? Upgrade to Innova-Grade Comfort for Barely More
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Booking a compact sedan (like a Dzire or Etios) for a 44 km airport trip frequently leads to frustration. Small boots with aftermarket CNG cylinders cannot fit multiple large bags, forcing suitcases onto rear seats. Our well-maintained 2024 to 2026 factory S-CNG Ertigas offer <strong>Innova-grade 3-row comfort, 4-suitcase luggage room, and dedicated knee-level console AC for barely a fraction more than basic sedan cab rates</strong>.
              </p>
            </div>

            {/* Urban Blue Feature Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 font-bold mb-3">
                  🧳
                </div>
                <h3 className="text-base font-bold text-slate-900">4 Suitcases Fit Flat</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Fold down the 3rd row to store up to <strong>4 large 28-inch check-in suitcases</strong> plus cabin backpacks with zero passenger squeeze.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold mb-3">
                  ❄️
                </div>
                <h3 className="text-base font-bold text-slate-900">Console Knee-Level AC</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our 2024–2026 Ertigas feature second-row console knee-level AC vents, delivering gentle, draft-free climate control across the second row.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold mb-3">
                  ⚡
                </div>
                <h3 className="text-base font-bold text-slate-900">Zero App Cancellations</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Pre-assigned owner-drivers eliminate the stress of midnight cancellations or surge price gouging during morning peak departures.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800 font-bold mb-3">
                  🛡️
                </div>
                <h3 className="text-base font-bold text-slate-900">WhatsApp Price-Lock</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Zero unexpected rain surges or surprise driver fees. What is agreed upon on WhatsApp remains <strong>strictly locked</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SECTOR-BY-SECTOR COVERAGE */}
        <section className="bg-slate-100 px-5 py-10 sm:py-14">
          <div className="page-shell">
            <div className="w-full pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                LOCALITY COVERAGE • HSR LAYOUT SECTORS 1 TO 7
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Serving Every Sector Doorstep in HSR Layout
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you are departing from a residential villa in Sector 2 or a startup headquarters along 27th Main, our chauffeurs arrive promptly at your gate:
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sectorGrid.map((item) => (
                <div key={item.sector} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-slate-900 font-black text-sm flex items-center gap-1.5 mb-1.5">
                      <MapPin size={16} className="text-blue-700" /> {item.sector}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-600 mt-2">{item.landmarks}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-blue-800">
                    💡 <em>Transit Tip:</em> {item.transitNote}
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate & Startup Rental Bridge */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-blue-700 shrink-0" />
                <span>Flying out for investor meetings or multi-city client roadshows?</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/corporate-car-rental-bangalore" className="font-bold underline text-blue-800 hover:text-blue-950">
                  Corporate Rentals (GST Invoicing) →
                </Link>
                <Link href="/car-rental-bangalore" className="font-bold underline text-blue-800 hover:text-blue-950">
                  Hourly City Rentals (8h/80km) →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TERMINAL LOGISTICS & BAGGAGE CAPACITY */}
        <section className="bg-white px-5 py-10 sm:py-14" aria-labelledby="terminal-heading">
          <div className="page-shell">
            <div className="w-full pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                BLR AIRPORT LOGISTICS • T1 &amp; T2
              </span>
              <h2 id="terminal-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Terminal 1 and Terminal 2 Protocols for Arriving &amp; Departing Guests
              </h2>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
                <span className="inline-block rounded-full bg-slate-900 px-3 py-0.5 text-xs font-bold text-white mb-2">
                  Terminal 1 (T1) — Domestic Flights
                </span>
                <h3 className="text-lg font-black text-slate-900">Domestic Departures &amp; Arrivals</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-6 text-slate-600">
                  For passengers flying with <em>IndiGo, Akasa Air, and SpiceJet</em>. Departures are dropped curbside at T1. For arrivals heading back to HSR Layout, chauffeurs meet guests at the <strong>P3/P4 parking zone</strong> with direct luggage coordination.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
                <span className="inline-block rounded-full bg-blue-800 px-3 py-0.5 text-xs font-bold text-white mb-2">
                  Terminal 2 (T2) — Garden Terminal
                </span>
                <h3 className="text-lg font-black text-slate-900">International &amp; Premium Domestic Flights</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-6 text-slate-600">
                  Operating for <em>Air India, Vistara, Singapore Airlines, Emirates, and all international flag carriers</em>. Direct drop at T2 curbside and coordinated arrivals pickup at the <strong>P2 parking area</strong> with complete baggage assistance.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 5: TRUST & DIRECT BOOKING */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="booking-heading">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                PUNCTUAL DISPATCH &amp; TRANSPARENT BILLING
              </span>
              <h2 id="booking-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Lock Your HSR Layout Airport Transfer with Lucky Travels
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                Eliminate the anxiety of early-morning app cab cancellations. When you book Go Bengaluru, your 2024–2026 Ertiga is pre-assigned to a verified owner-driver with car registration and contact details locked in advance.
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> Zero midnight cancellation risk for 3:00 AM – 6:00 AM departures.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> Toll transparency: Trumpet expressway tolls clarified upfront in writing.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> Dedicated 4-suitcase luggage room in modern 2024 to 2026 Ertigas.</li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                </div>
                <span className="text-xs font-bold text-slate-600">4.9 / 5 Rating from 44+ verified HSR Layout airport drops</span>
              </div>
            </div>

            {/* Direct Booking Card with Dark Indigo Theme */}
            <aside className="rounded-2xl bg-[#070e24] p-6 text-white shadow-soft">
              <h3 className="text-lg sm:text-xl font-black">Request an HSR Layout Airport Quote</h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300">
                Share your sector, departure date, and flight number for an immediate price-locked quote.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-slate-900 shadow transition hover:bg-slate-100"
                >
                  <Phone size={17} className="text-blue-700" /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={hsrWhatsAppUrl}
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

        {/* SECTION 6: FAQS */}
        <section className="bg-white px-5 py-10 sm:py-14 border-t border-slate-200" aria-labelledby="faq-heading">
          <div className="page-shell">
            <span className="text-xs font-black uppercase tracking-wider text-blue-700">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 id="faq-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              HSR Layout to Bangalore Airport Taxi FAQs
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <h3 className="text-base font-black text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Corridors Component */}
        <PopularAirportCorridors />

        {/* RELATED RESOURCES NAVIGATION */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="related-heading">
          <span className="text-xs font-black uppercase tracking-wider text-blue-700">
            CONNECTED CORRIDORS
          </span>
          <h2 id="related-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Explore Other Tech Corridor Airport Routes
          </h2>
          <nav aria-label="Related airport resources" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/airport-taxi-whitefield"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-blue-50 hover:text-blue-900"
            >
              → Whitefield Airport Taxi (Budigere Bypass)
            </Link>
            <Link
              href="/airport-taxi-electronic-city"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-blue-50 hover:text-blue-900"
            >
              → Electronic City Airport Taxi (BETL Tollway)
            </Link>
            <Link
              href="/airport-taxi-sarjapur-road"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-blue-50 hover:text-blue-900"
            >
              → Sarjapur Road / Bellandur Taxi
            </Link>
            <Link
              href="/outstation-cabs-bangalore"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-blue-50 hover:text-blue-900"
            >
              → Outstation Cabs Bangalore
            </Link>
          </nav>
        </section>
      </main>
    </SiteShell>
  );
}