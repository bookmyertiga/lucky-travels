import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Compass,
  Luggage,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-sarjapur-road`;
const sarjapurWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need a Sarjapur Road / Bellandur to Bangalore Airport taxi.\n\nTravel Date:\nPickup Time:\nTerminal (T1/T2):\nPickup Community/Address (Sarjapur Rd / Bellandur / Carmelaram / Haralur / Kaikondrahalli):\nPassenger Count:\nLarge Suitcases & Cabin Bags:"
)}`;
const emailUrl = `mailto:${SITE.email}?subject=Sarjapur%20Road%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "Sarjapur Road to Bangalore Airport Taxi | 6+1 Ertiga Cab - Go Bengaluru",
  description:
    "Punctual Sarjapur Road, Bellandur, Carmelaram & Haralur to Kempegowda Airport (BLR T1 & T2) transfers by Go Bengaluru by Lucky Travels. 2026 factory CNG Ertigas, 4-suitcase luggage room, ORR & SH-35 bypass routing, zero surge pricing.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sarjapur Road to Bangalore Airport Taxi | 6+1 Ertiga Cab - Go Bengaluru",
    description:
      "Chauffeur-driven 6+1 Ertiga airport transfers from Sarjapur Road & Bellandur. Transparent WhatsApp price-locks, 4-suitcase boot room, zero midnight cancellations.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/airport.jpg`,
        width: 1672,
        height: 941,
        alt: "Premium 2026 Ertiga for Sarjapur Road to Bangalore Airport transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarjapur Road to Bangalore Airport Taxi | 6+1 Ertiga Cab - Go Bengaluru",
    description:
      "Reliable airport transfers from Sarjapur Road, Bellandur & Haralur to BLR Airport in 2026 factory S-CNG Ertigas.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const routeOptions = [
  {
    title: "Outer Ring Road (ORR) Expressway Route",
    tag: "Standard Highway Route",
    tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    distance: "Around 46 - 49 km",
    duration: "65 - 75 mins (Off-Peak / 3:00 AM – 6:30 AM)",
    via: "Bellandur → Marathahalli → Tin Factory → Hebbal Flyover → NH-44",
    note: "Fastest corridor during late night and early morning hours before Outer Ring Road office traffic starts building up.",
  },
  {
    title: "SH-35 / Varthur / Budigere Cross Bypass",
    tag: "Daytime Gridlock Bypass",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200",
    distance: "Around 50 - 54 km",
    duration: "80 - 100 mins (Daytime / Office Rush Hours)",
    via: "Carmelaram → Gunjur → Varthur → SH-35 / Budigere Cross → Devanahalli",
    note: "Used dynamically by our chauffeurs when Outer Ring Road (Iblur/Marathahalli) experiences severe rain or peak-hour gridlock.",
  },
];

const societyCoverage = [
  {
    community: "Bellandur & Outer Ring Road",
    coverage: "Adarsh Palm Retreat, Green Glen Layout, Cloud9, EcoSpace & Prestige Tech Park gates",
  },
  {
    community: "Sarjapur Main Road & Carmelaram",
    coverage: "Rainbow Drive, Assetz 63 East, Godrej Park Retreat, SJR Palazza, Carmel Heights",
  },
  {
    community: "Haralur & Hosa Road Link",
    coverage: "Reliable Lakedew Residency, Suncity Apartments, Sobha Cinnamon, Kasavanahalli",
  },
  {
    community: "Kaikondrahalli & Doddakannelli",
    coverage: "Wipro Corporate Office Gate, Bren EdgeWaters, Purva Skywood, SJR Parkway",
  },
];

const faqs = [
  {
    question: "When should I schedule my airport taxi pickup from Sarjapur Road?",
    answer:
      "Because the distance to Kempegowda International Airport spans approximately 48 kilometres across critical tech intersections, we recommend planning your doorstep pickup 3.5 to 4 hours before domestic flight boarding, and 4.5 to 5 hours before international flights. A minimum of 6 hours advance booking is advised to guarantee vehicle allocation.",
  },
  {
    question: "How does the chauffeur choose between Outer Ring Road and the SH-35 Budigere bypass?",
    answer:
      "Our chauffeurs check live Google Maps traffic before leaving for your pickup. For early-morning departures (3:00 AM to 6:30 AM), the Outer Ring Road via Marathahalli and Hebbal is typically fastest (65–75 mins). During peak daytime traffic, they divert via Varthur and Budigere Cross to bypass city gridlock.",
  },
  {
    question: "How much luggage can a family carry in the 2026 6+1 Ertiga from Sarjapur Road?",
    answer:
      "With the 3rd row folded flat, up to 4 passengers can travel with 4 large 28-inch international check-in suitcases plus cabin bags without luggage spilling onto seats. For 5 to 6 passengers, it accommodates compact cabin trolley bags and duffels comfortably.",
  },
  {
    question: "Are early-morning 3:30 AM pickups guaranteed without cancellation?",
    answer:
      "Yes, 100%. Aggregator apps in Sarjapur Road frequently cancel midnight rides or fail to find drivers. With Lucky Travels, your booking is pre-confirmed directly with an assigned owner-driver, ensuring guaranteed curbside reporting with zero morning anxiety.",
  },
  {
    question: "How does the WhatsApp Price-Lock Guarantee work for Sarjapur airport transfers?",
    answer:
      "Once you send your society name, flight time, and passenger count on WhatsApp, you receive an all-inclusive transparent quote. What is agreed upon on WhatsApp remains locked with zero sudden rain surge multipliers or surprise driver charges.",
  },
];

export default function SarjapurRoadAirportTaxiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sarjapur Road to Bangalore Airport Taxi in a Dedicated 6+1 Ertiga",
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
        name: "Sarjapur Road",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9107,
          longitude: 77.6766,
        },
      },
      {
        "@type": "AdministrativeArea",
        name: "Bellandur",
      },
      {
        "@type": "Place",
        name: "Kempegowda International Airport Bengaluru",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "46",
      bestRating: "5",
      worstRating: "1",
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Punctual Sarjapur Road and Bellandur to Kempegowda Airport (BLR T1 & T2) transfers in brand new 2026 factory CNG 6+1 Ertigas with trip-locked WhatsApp pricing.",
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
      { "@type": "ListItem", position: 3, name: "Sarjapur Road Airport Taxi", item: routeUrl },
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

        {/* HERO SECTION: Tailored Executive Navy & Forest Green Style */}
        <section
          aria-labelledby="sarjapur-airport-heading"
          className="relative bg-gradient-to-br from-[#071126] via-[#0d1d3a] to-[#12314a] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              {/* Executive Tag Capsule */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-300">
                  <Sparkles size={13} className="text-emerald-400" />
                  SARJAPUR ROAD • BELLANDUR • CARMELARAM • BLR AIRPORT TAXI
                </span>
              </div>

              <h1
                id="sarjapur-airport-heading"
                className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:mt-4 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
              >
                Sarjapur Road to Bangalore Airport Taxi in a Dedicated 6+1 Ertiga
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
                Reserve an on-time, chauffeur-driven airport transfer from <strong>Sarjapur Road, Bellandur, Carmelaram, Haralur, and Kaikondrahalli</strong> to <strong>Kempegowda International Airport (BLR T1 &amp; T2)</strong>. Travel comfortably in a spotless <strong>2026 factory-fitted S-CNG 6+1 Maruti Suzuki Ertiga</strong>. Benefit from <em>4-suitcase luggage room, knee-level console AC, intelligent ORR vs. SH-35 bypass routing</em>, and strict WhatsApp price-locks with zero surge shocks.
              </p>

              <p className="mt-2 text-sm font-black text-amber-300 sm:text-base">
                {SITE.specialisationSlogan}
              </p>

              {/* Direct Booking Capsules */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-slate-900 shadow transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} className="text-emerald-700" /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={sarjapurWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock Sarjapur Quote on WhatsApp
                </a>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-300/80">
                Minimum 6 hours advance booking recommended. Guaranteed early-morning dispatch (3:00 AM – 6:00 AM) with complete luggage loading assistance at your apartment gate.
              </p>

              <a
                href="#route-strategy"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-center text-xs font-black text-emerald-300 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                View Dual-Route Strategy &amp; Gated Society Details Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>

            {/* Hero Visual Card */}
            <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 shadow-soft">
              <Image
                src="/images/services/airport.jpg"
                alt="2026 Ertiga cab for Sarjapur Road and Bellandur airport transfers"
                width={1672}
                height={941}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <figcaption className="px-5 py-3.5 text-xs sm:text-sm leading-6 text-slate-300">
                A pristine, chauffeur-driven <strong>2026 6+1 Ertiga</strong> dedicated to <em>Sarjapur Road, Bellandur, and East Bengaluru</em> airport travelers.
              </figcaption>
            </figure>
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#route-strategy"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-700 bg-white px-5 py-2.5 text-center text-sm font-black text-slate-900 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-emerald-600"
            >
              View Dual-Route Strategy &amp; Gated Society Details Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow text-emerald-700" />
            </a>
          </div>
        </section>

        {/* SECTION 1: THE DUAL-CORRIDOR ROUTE STRATEGY */}
        <section id="route-strategy" className="bg-slate-50 px-5 pt-14 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
                INTELLIGENT TRAFFIC NAVIGATION • 48 KM CORRIDOR
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                The Dual-Route Strategy: Bypassing Outer Ring Road Gridlock
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Sarjapur Road and Bellandur residents face unpredictable traffic bottlenecks at Iblur junction, Kaikondrahalli, and Marathahalli. Rather than adhering to a single static route, our chauffeurs assess live satellite traffic before arrival to navigate the optimal path:
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
                    <span className="flex items-center gap-1.5"><Compass size={15} className="text-emerald-700" /> {route.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock size={15} className="text-amber-700" /> {route.duration}</span>
                  </div>
                  <p className="mt-2.5 text-xs font-semibold text-slate-700"><strong>Via:</strong> {route.via}</p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-2">{route.note}</p>
                </article>
              ))}
            </div>

            {/* Travel Time Planner Pill Strip */}
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Clock size={19} className="text-emerald-700 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-emerald-950">
                    Recommended Departure Window: Domestic flights require 3.5 to 4 hours buffer; international flights require 4.5 to 5 hours from Sarjapur Road.
                  </span>
                </div>
                <Link
                  href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
                  className="text-xs font-bold underline text-emerald-900 hover:text-emerald-700"
                >
                  Read Terminal Reporting Checklist →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SEDAN VS. ERTIGA COMPARISON (Family & Gated Society Angle) */}
        <section className="bg-white px-5 py-10 sm:py-14">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
                FAMILY TRAVEL UPGRADE • SARJAPUR TO KEMPEGOWDA AIRPORT
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Searching for a Sedan Cab from Sarjapur Road? Get 3-Row Comfort for Barely More
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Many families in Sarjapur and Bellandur default to booking a 4-seater sedan (like a Dzire or Etios). However, with 3 to 4 large flight bags, compact sedans fitted with aftermarket CNG cylinders fail completely—forcing heavy suitcases onto passenger laps. Our 2026 factory S-CNG Ertigas offer <strong>Innova-grade 3-row comfort, 4-suitcase luggage room, and dedicated knee-level console AC for barely a fraction more than basic sedan cab rates</strong>.
              </p>
            </div>

            {/* Distinctive Executive Capsule Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold mb-3">
                  🧳
                </div>
                <h3 className="text-base font-bold text-slate-900">4 Suitcases Fit Flat</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Fold down the 3rd row to store up to <strong>4 large 28-inch check-in suitcases</strong> plus cabin backpacks with zero cabin clutter.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold mb-3">
                  ❄️
                </div>
                <h3 className="text-base font-bold text-slate-900">Console Knee-Level AC</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our 2026 Ertigas feature second-row console knee-level AC vents, delivering gentle, draft-free cooling on long highway stretches.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 font-bold mb-3">
                  🏡
                </div>
                <h3 className="text-base font-bold text-slate-900">Gated Basement Access</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our chauffeurs navigate basement parking lots and multi-tower gated villas across Sarjapur and Bellandur for effortless loading.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800 font-bold mb-3">
                  🛡️
                </div>
                <h3 className="text-base font-bold text-slate-900">WhatsApp Price-Lock</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Zero surprise rain surge pricing or midnight meter hikes. What is agreed upon on WhatsApp remains <strong>strictly locked</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GATED COMMUNITIES & TECH PARKS COVERAGE */}
        <section className="bg-slate-100 px-5 py-10 sm:py-14">
          <div className="page-shell">
            <div className="w-full pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
                DOORSTEP PICKUP COVERAGE • EAST &amp; SOUTH-EAST BENGALURU
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Serving All Major Sarjapur &amp; Bellandur Gated Societies
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you live in a high-rise condominium along the Outer Ring Road or an expansive villa community near Carmelaram, our drivers provide punctual doorstep pickups:
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {societyCoverage.map((item) => (
                <div key={item.community} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-slate-900 font-black text-sm flex items-center gap-1.5 mb-1.5">
                      <MapPin size={16} className="text-emerald-700" /> {item.community}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-600 mt-2">{item.coverage}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-emerald-800">
                    ✓ Verified Curbside Dispatch
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate & Day Rental Bridge */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-700 shrink-0" />
                <span>Need disposal transport for client meetings in EcoSpace or Prestige Tech Park?</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/corporate-car-rental-bangalore" className="font-bold underline text-emerald-800 hover:text-emerald-950">
                  Corporate Rentals (GST Invoicing) →
                </Link>
                <Link href="/car-rental-bangalore" className="font-bold underline text-emerald-800 hover:text-emerald-950">
                  Hourly City Rentals (8h/80km) →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TERMINAL PROTOCOLS & CAPACITY */}
        <section className="bg-white px-5 py-10 sm:py-14" aria-labelledby="terminal-heading">
          <div className="page-shell">
            <div className="w-full pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
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
                  For passengers flying with <em>IndiGo, Akasa Air, and SpiceJet</em>. Departures are dropped curbside at T1. For arrivals heading back to Sarjapur Road, chauffeurs receive guests at the <strong>P3/P4 parking zone</strong> with direct WhatsApp luggage coordination.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
                <span className="inline-block rounded-full bg-emerald-800 px-3 py-0.5 text-xs font-bold text-white mb-2">
                  Terminal 2 (T2) — Garden Terminal
                </span>
                <h3 className="text-lg font-black text-slate-900">International &amp; Premium Domestic Flights</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-6 text-slate-600">
                  Operating for <em>Air India, Vistara, Singapore Airlines, Emirates, and all international carriers</em>. Chauffeur drops you directly at T2 departure gates and coordinates arrival pickups at the <strong>P2 parking area</strong>.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 5: TRUST & DIRECT BOOKING */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="booking-heading">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
                HONEST PRICING &amp; VERIFIED DISPATCH
              </span>
              <h2 id="booking-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Lock Your Sarjapur Road Airport Transfer with Lucky Travels
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                Avoid the anxiety of early-morning app cab cancellations. When you book Go Bengaluru, your vehicle is pre-assigned to a verified owner-driver with registration and chauffeur contact details shared in advance.
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> Zero midnight cancellation risk for 3:00 AM – 6:00 AM departures.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> Transparent toll terms: airport expressway and trumpet toll clarified upfront.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> Dedicated 4-suitcase luggage room in brand-new 2026 Ertigas.</li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                </div>
                <span className="text-xs font-bold text-slate-600">4.9 / 5 Rating from 46+ verified Sarjapur &amp; Bellandur airport drops</span>
              </div>
            </div>

            {/* Direct Booking Card with Dark Executive Navy Theme */}
            <aside className="rounded-2xl bg-[#0a1128] p-6 text-white shadow-soft">
              <h3 className="text-lg sm:text-xl font-black">Request a Sarjapur Road Airport Quote</h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300">
                Share your pickup gate, travel date, and flight number for an immediate price-locked quote.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-slate-900 shadow transition hover:bg-slate-100"
                >
                  <Phone size={17} className="text-emerald-700" /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={sarjapurWhatsAppUrl}
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
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 id="faq-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Sarjapur Road to Bangalore Airport Taxi FAQs
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
          <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
            CONNECTED LOCALITIES
          </span>
          <h2 id="related-heading" className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Explore Other Tech Corridor Airport Routes
          </h2>
          <nav aria-label="Related airport resources" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/airport-taxi-whitefield"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              → Whitefield Airport Taxi (Budigere Bypass)
            </Link>
            <Link
              href="/airport-taxi-electronic-city"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              → Electronic City Airport Taxi (BETL Tollway)
            </Link>
            <Link
              href="/airport-taxi-hsr-layout"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              → HSR Layout Airport Cab
            </Link>
            <Link
              href="/outstation-cabs-bangalore"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-soft transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              → Outstation Cabs Bangalore
            </Link>
          </nav>
        </section>
      </main>
    </SiteShell>
  );
}