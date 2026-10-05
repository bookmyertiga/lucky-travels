import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CheckCircle2, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-whitefield`;
const whitefieldWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need a Whitefield to Bangalore Airport taxi.\n\nDate:\nPickup Time:\nTerminal (T1/T2):\nPickup Locality (Whitefield/ITPL/Kadugodi/Varthur):\nPassenger Count:\nLarge Suitcases & Cabin Bags:"
)}`;
const emailUrl = `mailto:${SITE.email}?subject=Whitefield%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "Whitefield to Bangalore Airport Taxi | 6+1 Ertiga Cab Hire - Go Bengaluru",
  description:
    "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service by Go Bengaluru by Lucky Travels. Brand new 2026 factory CNG Ertigas, Budigere Cross bypass route, 4-suitcase luggage room & zero surge pricing. Book 24/7.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Whitefield to Bangalore Airport Taxi | 6+1 Ertiga Cab Hire - Go Bengaluru",
    description:
      "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service by Go Bengaluru by Lucky Travels. Brand new 2026 factory CNG Ertigas, Budigere Cross bypass route, 4-suitcase luggage room & zero surge pricing. Book 24/7.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/airport.jpg`,
        width: 1672,
        height: 941,
        alt: "Premium 2026 Ertiga for a Whitefield to Bangalore Airport transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitefield to Bangalore Airport Taxi | 6+1 Ertiga Cab Hire - Go Bengaluru",
    description:
      "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service. Clean 6+1 Ertiga cabs, transparent WhatsApp price-lock, zero surge pricing.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const faqs = [
  {
    question: "Which route is fastest from Whitefield to Kempegowda International Airport (BLR)?",
    answer:
      "Most Whitefield residents prefer the Budigere Cross / SH-104 bypass road rather than navigating the congested KR Puram and Hebbal flyovers. Depending on your locality in ITPL, Kadugodi, or Hope Farm, this bypass avoids heavy city surface gridlock and connects smoothly toward Devanahalli in 55 to 70 minutes during off-peak hours.",
  },
  {
    question: "Why choose a 6+1 Ertiga over an app-based sedan taxi for a Whitefield airport run?",
    answer:
      "App-based aggregators frequently cancel early-morning bookings in Whitefield or dispatch compact sedans with aftermarket CNG cylinders occupying the entire trunk. Our brand-new 2026 factory-fitted S-CNG Ertigas offer guaranteed vehicle allocation, 4 large suitcase storage capacity with the 3rd row folded, dedicated knee-level console AC, and Innova-like 3-row comfort for barely a fraction more than basic sedan cab rates.",
  },
  {
    question: "How does the WhatsApp Price-Lock Guarantee work for Whitefield airport transfers?",
    answer:
      "Unlike rideshare apps that double prices during morning peak hours or sudden rain downpours along the Outer Ring Road, Go Bengaluru provides a 100% price-locked quote on WhatsApp. What is agreed upon in writing remains strictly fixed with zero surprise driver charges or midnight meter hikes.",
  },
  {
    question: "How early should I book an airport taxi from Whitefield?",
    answer:
      "For early-morning flights (3:00 AM to 7:00 AM) or peak evening departures, we recommend reserving your cab 6 to 12 hours in advance. This guarantees your chauffeur is assigned, the vehicle is pre-sanitized, and your reporting time is locked.",
  },
  {
    question: "Can I book a return pickup from BLR Airport back to Whitefield?",
    answer:
      "Yes. Simply share your arrival flight number and terminal (T1 or T2). We monitor your flight's live status, coordinate directly via WhatsApp upon touchdown, and meet you at the designated airport parking bays (P3/P4 for T1, P2 for T2).",
  },
];

function SectionHeading({
  eyebrow,
  children,
  id,
  dark = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  id: string;
  dark?: boolean;
}) {
  return (
    <>
      <p
        className={
          dark
            ? "text-sm font-black uppercase tracking-[.18em] text-amber-400"
            : "section-kicker"
        }
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl ${
          dark ? "text-white" : "text-[#090f2f]"
        }`}
      >
        {children}
      </h2>
    </>
  );
}

function RouteImage() {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <Image
        src="/images/services/airport.jpg"
        alt="Clean 2026 Premium Ertiga prepared for a Whitefield airport transfer"
        width={1672}
        height={941}
        priority
        className="h-auto w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />
      <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
        A pristine, chauffeur-driven <strong>brand-new 2026 6+1 Ertiga</strong> dedicated to <em>Whitefield, ITPL, Kadugodi, and East Bengaluru</em> airport travelers.
      </figcaption>
    </figure>
  );
}

export default function WhitefieldAirportTaxiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Whitefield to Bangalore Airport Taxi in a Dedicated 6+1 Ertiga",
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
        name: "Whitefield",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9698,
          longitude: 77.75,
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
      reviewCount: "58",
      bestRating: "5",
      worstRating: "1",
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) transfers in brand new 2026 factory CNG 6+1 Ertiga cabs with trip-locked WhatsApp pricing.",
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
      { "@type": "ListItem", position: 3, name: "Whitefield Airport Taxi", item: routeUrl },
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
        {/* Hero Section */}
        <section
          aria-labelledby="whitefield-airport-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-amber-400 sm:text-sm">
                WHITEFIELD • ITPL • KADUGODI • HOODI • BLR AIRPORT TAXI
              </p>
              <h1
                id="whitefield-airport-heading"
                className="mt-2 max-w-2xl text-2xl font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
              >
                Whitefield to Bangalore Airport Taxi in a Dedicated 6+1 Ertiga
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Reserve an on-time, chauffeur-driven airport transfer from <strong>Whitefield to Kempegowda International Airport (BLR T1 &amp; T2)</strong> with Go Bengaluru by Lucky Travels. Avoid morning ride-hail cancellations and cramped sedans. Travel comfortably via the <em>Budigere Cross / SH-104 bypass road</em> in a pristine <strong>2026 factory-fitted S-CNG 6+1 Maruti Suzuki Ertiga</strong> with guaranteed vehicle allocation and transparent WhatsApp price-locks.
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-amber-300 sm:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-4 flex flex-wrap gap-3" aria-label="Direct booking options">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-purple-800 shadow transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={whitefieldWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock Whitefield Quote on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">
                24/7 dedicated dispatch. Book 6 to 12 hours ahead for assured early-morning flight pickups, guaranteed vehicle dispatch, and complete baggage assistance.
              </p>
              <a
                href="#route-details"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-xs font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                Explore Whitefield Routes, Timings &amp; Luggage Space Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>
            <RouteImage />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#route-details"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-purple-700"
            >
              Explore Whitefield Routes, Timings &amp; Luggage Space Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow" />
            </a>
          </div>
        </section>

        {/* Sedan-to-Ertiga Conversion Bridge */}
        <section className="bg-slate-50 px-5 pt-14 pb-8 sm:pt-16 sm:pb-10 border-b border-slate-200/80">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                AIRPORT COMMUTE UPGRADE • WHITEFIELD TO BENGALURU AIRPORT
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Searching for a Sedan Cab from Whitefield to the Airport? Get Innova Comfort for Barely More
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Booking a compact sedan (like a Dzire or Etios) for a 39 km airport run from East Bengaluru frequently leads to luggage problems. Most app cabs have retrofitted CNG cylinders taking up the boot, forcing heavy suitcases onto passenger seats. Our brand-new 2026 factory S-CNG Ertigas offer <strong>Innova-grade 3-row comfort, 4-suitcase luggage capacity, and dedicated knee-level console AC for barely a fraction more than basic sedan cab rates</strong>.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🧳</span>
                <h3 className="text-base font-bold text-[#090f2f]">4 Suitcases Fit Flat</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Fold down the 3rd row to store up to <strong>4 large 28-inch check-in suitcases</strong> plus cabin backpacks with zero cabin clutter.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">❄️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Console Knee-Level AC</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Updated 2026 console AC vents provide gentle, draft-free climate control across the entire second row during highway cruising.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🛣️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Budigere Cross Bypass</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Smart routing via <strong>SH-104 / Budigere Cross</strong> bypasses the notorious KR Puram and Hebbal flyover bottlenecks.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🛡️</span>
                <h3 className="text-base font-bold text-[#090f2f]">WhatsApp Price-Lock</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Zero unexpected rain surges or early-morning cancellation shocks. Your confirmed WhatsApp fare remains <strong>strictly locked</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Route Details Breakdown */}
        <section id="route-details" className="bg-white px-5 py-10 sm:py-14" aria-labelledby="route-heading">
          <div className="page-shell">
            <SectionHeading id="route-heading" eyebrow="ROUTE AND TRAVEL DURATION BREAKDOWN">
              Whitefield to Kempegowda Airport: Distance and Time
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Approximate distance", "Around 38 - 42 km", "Distance varies by pickup location across ITPL, Kadugodi, Varthur Road, or Hope Farm to BLR Terminal 1 or Terminal 2."],
                ["Non-peak travel", "50 - 65 minutes", "Achieved via the Budigere Cross and SH-104 bypass during early morning hours (3:00 AM – 6:30 AM) and midday."],
                ["Peak IT corridor", "85 - 110 minutes", "Buffer required during evening tech-park rush hours, rains, and railway cross road congestion."],
              ].map(([title, value, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <p className="text-xs font-black uppercase tracking-[.12em] text-purple-700">{title}</p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-black text-[#090f2f]">{value}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              Always schedule your pickup around your airline&apos;s check-in gates rather than optimistic GPS estimates. For citywide transfer schedules and luggage protocols, read our comprehensive{" "}
              <Link
                href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
                className="font-bold text-purple-700 underline decoration-purple-400 underline-offset-2 hover:text-purple-900"
              >
                Bengaluru Airport Cab Guide (Timing, Luggage &amp; Terminal Rules)
              </Link>
              , or review our main{" "}
              <Link
                href="/airport-taxi-bangalore"
                className="font-bold text-purple-700 underline decoration-purple-400 underline-offset-2 hover:text-purple-900"
              >
                Bangalore Airport Taxi Service
              </Link>{" "}
              for citywide options.
            </p>
          </div>
        </section>

        {/* Terminals Protocol */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="terminal-heading">
          <SectionHeading id="terminal-heading" eyebrow="TERMINAL 1 AND TERMINAL 2 PROTOCOLS">
            Confirm Your BLR Airport Terminal Before Travel
          </SectionHeading>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span className="inline-block rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-900 mb-2">
                Terminal 1 (T1)
              </span>
              <h3 className="text-xl font-black text-[#090f2f]">Domestic Departures &amp; Arrivals</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Most domestic airlines including <em>IndiGo, Akasa Air, and SpiceJet</em> operate flights through T1. Chauffeurs drop passengers at designated curbside gates and meet arriving guests at the <strong>P3/P4 parking bays</strong>.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span className="inline-block rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900 mb-2">
                Terminal 2 (T2)
              </span>
              <h3 className="text-xl font-black text-[#090f2f]">International &amp; Premium Domestic Flights</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Operating for <em>Air India, Vistara, and all international flag carriers</em>. Direct drop-offs at T2 departure curbsides and coordinated terminal pickups at the <strong>P2 parking area</strong> with luggage assistance.
              </p>
            </article>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700">
            Landing at BLR and returning to Whitefield, ITPL, or Kadugodi? Message your flight number upon landing. Need full-day transport for corporate meetings after landing? Explore our{" "}
            <Link
              href="/corporate-car-rental-bangalore"
              className="font-bold text-purple-700 underline decoration-purple-400 underline-offset-2 hover:text-purple-900"
            >
              Corporate Car Rental Bangalore
            </Link>{" "}
            for structured business transit.
          </p>
        </section>

        {/* Luggage and Seating Breakdown */}
        <section className="bg-slate-100 px-5 py-10 sm:py-14" aria-labelledby="luggage-heading">
          <div className="page-shell">
            <SectionHeading id="luggage-heading" eyebrow="LUGGAGE AND SEATING GUIDE">
              2026 Ertiga Seating &amp; Baggage Configuration
            </SectionHeading>
            <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,.8fr)] lg:items-start">
              <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  A <strong>Maruti Suzuki Ertiga</strong> offers versatile <em>6+1 seating</em>. Depending on your group size and luggage volume, we configure seats to maximize passenger relaxation:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <strong className="text-[#090f2f] block mb-1">Up to 4 Passengers:</strong>
                    Third row folds flat to accommodate <span className="underline decoration-amber-400 font-semibold">up to 4 large check-in suitcases</span> plus multiple cabin backpacks.
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <strong className="text-[#090f2f] block mb-1">5 to 6 Passengers:</strong>
                    Full 3-row seating for family groups with compact cabin trolley bags and soft luggage.
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Planning local city errands or shopping trips after your airport run? Review our{" "}
                  <Link
                    href="/car-rental-bangalore"
                    className="font-bold text-purple-700 underline hover:text-purple-900"
                  >
                    Hourly &amp; Daily Bangalore Car Rental
                  </Link>{" "}
                  packages (8h/80km, 10h/100km).
                </p>
              </div>
              <aside className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6">
                <h3 className="text-lg font-black text-slate-900">Guaranteed Vehicle Allocation</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-700">
                  Unlike rideshare aggregators that dispatch unpredictable hatchbacks or sedans with trunks blocked by aftermarket cylinders, <strong>Lucky Travels specializes exclusively in clean 2026 factory S-CNG 6+1 Ertigas</strong> driven by verified owner-drivers.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Trust Rating Badge */}
        <section className="page-shell py-8" aria-label="Customer Trust Rating">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-purple-100 bg-purple-50/60 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-black text-[#090f2f]">
                4.9 / 5 Rating <span className="font-normal text-slate-600">(58 verified Whitefield airport drops)</span>
              </p>
            </div>
            <p className="text-xs font-semibold text-slate-600">
              Verified Chauffeur • Dedicated 4-Suitcase Boot • Zero Surge Pricing
            </p>
          </div>
        </section>

        {/* Direct Booking Section */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="booking-heading">
          <SectionHeading id="booking-heading" eyebrow="DIRECT BOOKING AND QUOTE">
            Book Your Whitefield Airport Transfer
          </SectionHeading>
          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,.9fr)] lg:items-start">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              <p>
                Send your <strong>Whitefield pickup address, departure date, flight number, passenger count, and luggage details</strong>. We calculate an exact route-based quote with zero hidden charges.
              </p>
              <p>
                There is <em>no surge pricing penalty</em> when it rains or during peak flight departure windows. Tolls, expressway charges, and vehicle access are explained transparently upfront.
              </p>
              <p>
                For early morning flights (3:00 AM – 6:00 AM), we strongly advise booking in advance to guarantee vehicle allocation and avoid midnight app cancellations.
              </p>
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs sm:text-sm text-emerald-950">
                <span className="font-bold block mb-1">🛡️ WhatsApp Price-Lock Policy</span>
                Your quote agreed on WhatsApp remains fixed with zero unexpected driver bata, parking markups, or night charges.
              </div>
            </div>
            <aside className="rounded-2xl bg-[#080d2b] p-6 text-white shadow-soft">
              <h3 className="text-lg sm:text-xl font-black">Request a Direct Whitefield Quote</h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-white/75">
                Share your terminal and pickup details for an immediate, price-locked quote.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-[#080d2b] shadow transition hover:bg-slate-100"
                >
                  <Phone size={17} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={whitefieldWhatsAppUrl}
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

        {/* FAQs */}
        <section className="bg-white px-5 py-10 sm:py-14" aria-labelledby="faq-heading">
          <div className="page-shell">
            <SectionHeading id="faq-heading" eyebrow="WHITEFIELD AIRPORT TAXI FAQ">
              Common Questions Before You Travel
            </SectionHeading>
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

        {/* Related Services Navigation */}
        <section className="page-shell py-10 sm:py-14" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" eyebrow="MORE BENGALURU AIRPORT HELP">
            Explore Other Tech Corridor Airport Routes
          </SectionHeading>
          <nav aria-label="Related airport resources" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/airport-taxi-electronic-city"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Electronic City Airport Taxi
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
              href="/outstation-cabs-bangalore"
              className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Outstation Cabs Bangalore
            </Link>
          </nav>
        </section>
      </main>
    </SiteShell>
  );
}