import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone, Star } from "lucide-react";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-whitefield`;
const whitefieldWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need a Whitefield to Bangalore Airport taxi.\nDate:\nPickup time:\nTerminal (T1/T2):\nPickup address:\nPassengers and luggage:"
)}`;
const emailUrl = `mailto:${SITE.email}?subject=Whitefield%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "Whitefield to Bangalore Airport Taxi | Premium Ertiga Cabs",
  description:
    "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service by Lucky Travels. Clean 6+1 Ertiga cabs, transparent quotes, zero surge pricing. Book 24/7.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Whitefield to Bangalore Airport Taxi | Premium Ertiga Cabs",
    description:
      "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service by Lucky Travels. Clean 6+1 Ertiga cabs, transparent quotes, zero surge pricing. Book 24/7.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/airport.jpg`,
        width: 1672,
        height: 941,
        alt: "Premium Ertiga for a Whitefield to Bangalore Airport transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitefield to Bangalore Airport Taxi | Premium Ertiga Cabs",
    description:
      "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service by Lucky Travels. Clean 6+1 Ertiga cabs, transparent quotes, zero surge pricing. Book 24/7.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const faqs = [
  {
    question: "How early should I book a Whitefield airport pickup?",
    answer:
      "We recommend enquiring 2 to 4 hours before the required pickup time, especially for early flights or peak IT corridor travel. Share your complete address, terminal, flight schedule, passenger count and luggage so Lucky Travels can confirm the trip-specific quote and driver availability.",
  },
  {
    question: "Can I book a BLR Airport pickup back to Whitefield?",
    answer:
      "Yes. Share your flight number and arrival terminal for a Kempegowda Airport pickup to Whitefield. Lucky Travels reviews flight timing and coordinates the pickup plan around the latest arrival information, subject to airport access and driver availability.",
  },
  {
    question: "How much luggage fits in the Premium Ertiga for a family airport trip?",
    answer:
      "With the third row folded, 4 passengers can usually travel with up to 4 large check-in suitcases. For 5 to 6 passengers, the Ertiga is best suited to compact cabin baggage. Share bag sizes before confirmation so space can be assessed honestly.",
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
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
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
        alt="Clean Premium Ertiga prepared for a Whitefield airport transfer"
        width={1672}
        height={941}
        priority
        className="h-auto w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />
      <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
        A clean, chauffeur-driven <strong>6+1 Ertiga</strong> for <em>Whitefield</em> and East Bengaluru airport journeys.
      </figcaption>
    </figure>
  );
}

export default function WhitefieldAirportTaxiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Whitefield to Bangalore Airport Taxi in a Premium Ertiga",
    serviceType: "Whitefield to Kempegowda International Airport taxi transfer",
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
          longitude: 77.7500,
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
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Punctual Whitefield to Kempegowda Airport transfers in a clean 6+1 Premium Maruti Suzuki Ertiga with trip-specific quotes.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Airport Transfers",
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
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10 lg:py-8"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[.18em] text-amber-400">
                WHITEFIELD TO BLR AIRPORT TRANSFERS
              </p>
              <h1
                id="whitefield-airport-heading"
                className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem]"
              >
                Whitefield to Bangalore Airport (BLR) Taxi Service
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:mt-4 lg:text-base lg:leading-7">
                Book a <strong className="text-white">punctual owner-driver-led airport transfer</strong> in a spacious <span className="underline decoration-amber-400 underline-offset-4 font-semibold">6+1 Premium Ertiga</span>. We serve <em>Whitefield, ITPL, Kadugodi, Varthur, and Hoodi</em> with <strong>24/7 direct dispatch</strong> and upfront, transparent quotes.
              </p>
              <p className="mt-4 text-lg font-black text-amber-300 lg:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 lg:mt-5" aria-label="Direct booking options">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-black text-purple-800 shadow transition hover:bg-slate-100 active:scale-95"
                >
                  <Phone size={19} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={whitefieldWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-black text-white shadow transition hover:bg-green-700 active:scale-95"
                >
                  <MessageCircle size={19} /> WhatsApp for a Quote
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="text-sm leading-6 text-white/70">
                  <em>Guaranteed pre-booked dispatch.</em> Confirm your flight timing, passenger count, and terminal for an all-inclusive quote.
                </p>
              </div>
            </div>
            <RouteImage />
          </div>
          <a
            href="#route-details"
            className="service-scroll-prompt absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-[10px] font-black tracking-[0.08em] text-purple-800 shadow-premium sm:px-5 sm:text-xs"
          >
            Explore Route, Timings & Booking Details Below
            <ArrowDown size={16} className="service-scroll-arrow" />
          </a>
        </section>

        {/* Route Details Breakdown */}
        <section id="route-details" className="bg-white px-5 py-10" aria-labelledby="route-heading">
          <div className="page-shell">
            <SectionHeading id="route-heading" eyebrow="ROUTE AND TRAVEL DURATION BREAKDOWN">
              Whitefield to Kempegowda Airport: Distance and Time
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Approximate distance", "Around 39 km", "Exact distance varies by pickup point in Whitefield and whether you are headed to BLR Terminal 1 or Terminal 2."],
                ["Non-peak travel", "50-60 minutes", "A realistic window via Budigere Cross and SH-104 during early mornings and midday hours."],
                ["Peak IT corridor", "85-105 minutes", "Expect extended transit during office rush hours, rains, and flyover bottlenecks."],
              ].map(([title, value, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">{title}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#090f2f]">{value}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 max-w-4xl leading-8 text-slate-700">
              For an airport drop, always plan around your airline&apos;s check-in deadline rather than relying strictly on GPS navigation. For citywide transfer schedules and luggage protocols, read our comprehensive{" "}
              <Link
                href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
                className="font-bold text-purple-700 underline decoration-purple-400 underline-offset-2 hover:text-purple-900"
              >
                Bengaluru Airport Cab Guide (Timing, Luggage & Terminal Rules)
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
        <section className="page-shell py-12 sm:py-16" aria-labelledby="terminal-heading">
          <SectionHeading id="terminal-heading" eyebrow="TERMINAL 1 AND TERMINAL 2 PROTOCOLS">
            Share the Correct BLR Terminal Before Travel
          </SectionHeading>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 1 (T1)</p>
              <h3 className="mt-3 text-2xl font-black">Domestic departures & arrivals</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Check your flight ticket to confirm <strong>T1 departures</strong>. Airlines such as <em>IndiGo, Akasa Air, and SpiceJet</em> typically operate from T1. Always double-check before your driver reports to your Whitefield gate.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 2 (T2)</p>
              <h3 className="mt-3 text-2xl font-black">Domestic & international operations</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Confirm <strong>T2 departures</strong> for <em>Air India, Vistara, and all international carriers</em>. Chauffeurs drop you curbside at designated gates to ensure effortless baggage unloading.
              </p>
            </article>
          </div>
          <p className="mt-6 leading-8 text-slate-700">
            Landing at BLR and returning to East Bengaluru? Send your flight number after baggage claim. We also handle corporate client pickups across tech parks—explore our{" "}
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
        <section className="bg-slate-100 px-5 py-12 sm:py-16" aria-labelledby="luggage-heading">
          <div className="page-shell">
            <SectionHeading id="luggage-heading" eyebrow="LUGGAGE AND SEATING GUIDE">
              Choose the Right Ertiga Seating Arrangement
            </SectionHeading>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,.8fr)] lg:items-start">
              <div className="space-y-5 leading-8 text-slate-700">
                <p>
                  A <strong>Maruti Suzuki Ertiga</strong> offers versatile <em>6+1 seating</em>. Depending on group size and luggage volume, our chauffeurs configure seats to maximize passenger comfort:
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <strong>4 Passengers:</strong> Third row folded flat to accommodate <span className="underline decoration-amber-400 underline-offset-2 font-medium">up to 4 large check-in suitcases</span> plus cabin bags.
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <strong>5 to 6 Passengers:</strong> Ideal for family trips with compact trolley bags and soft luggage.
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <em>Luggage Verification:</em> Share the number and sizes of your bags beforehand so we guarantee clean boot space.
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <em>City & Sightseeing Needs:</em> For non-airport travel within town, book our{" "}
                    <Link
                      href="/car-rental-bangalore"
                      className="font-bold text-purple-700 underline hover:text-purple-900"
                    >
                      Hourly & Daily Car Rental
                    </Link>.
                  </li>
                </ul>
              </div>
              <aside className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6">
                <h3 className="text-xl font-black text-slate-900">No Last-Minute Vehicle Substitutions</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Unlike app-based aggregators that dispatch unpredictable hatchbacks or CNG sedans with no trunk space, <strong>Lucky Travels specializes exclusively in clean 6+1 Ertigas</strong> with dedicated owner-drivers.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Trust Rating Badge */}
        <section className="page-shell py-8" aria-label="Customer Trust Rating">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-purple-100 bg-purple-50/60 p-6">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-black text-[#090f2f]">
                4.9 / 5 Rating <span className="font-normal text-slate-600">(48 verified Whitefield airport drops)</span>
              </p>
            </div>
            <p className="text-xs font-semibold text-slate-600">
              Chauffeur-driven • Dedicated Luggage Boot • No Surge Multipliers
            </p>
          </div>
        </section>

        {/* Booking Card Section */}
        <section className="page-shell py-12 sm:py-16" aria-labelledby="booking-heading">
          <SectionHeading id="booking-heading" eyebrow="DIRECT BOOKING AND QUOTE">
            Book Your Whitefield Airport Transfer
          </SectionHeading>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,.9fr)] lg:items-start">
            <div className="space-y-5 leading-8 text-slate-700">
              <p>
                Send your <strong>Whitefield pickup address, departure date, flight number, passenger count, and luggage details</strong>. We calculate an exact route-based quote with zero hidden charges.
              </p>
              <p>
                There is <em>no surge pricing penalty</em> when it rains or during peak flight departure windows. Tolls, parking, and vehicle access are explained transparently upfront.
              </p>
              <p>
                For early morning flights (3:00 AM – 6:00 AM), we strongly advise booking in advance to guarantee vehicle allocation.
              </p>
            </div>
            <aside className="rounded-2xl bg-[#080d2b] p-6 text-white shadow-soft">
              <h3 className="text-xl font-black">Request a Direct Whitefield Quote</h3>
              <p className="mt-3 leading-7 text-white/75">
                Share your terminal and pickup details for an immediate quote.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#080d2b] shadow transition hover:bg-slate-100"
                >
                  <Phone size={18} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={whitefieldWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-center font-black text-white shadow transition hover:bg-green-700"
                >
                  <MessageCircle size={18} /> WhatsApp for a Quote
                </a>
                <a
                  href={emailUrl}
                  className="rounded-xl border border-white/25 px-5 py-3.5 text-center font-black text-white shadow transition hover:bg-white/10"
                >
                  Email {SITE.email}
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="faq-heading">
          <div className="page-shell">
            <SectionHeading id="faq-heading" eyebrow="WHITEFIELD AIRPORT TAXI FAQ">
              Common Questions Before You Travel
            </SectionHeading>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 p-6 bg-slate-50/40">
                  <h3 className="text-lg font-black text-[#090f2f]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Corridors Component */}
        <PopularAirportCorridors />

        {/* Related Services Navigation */}
        <section className="page-shell py-12 sm:py-16" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" eyebrow="MORE BENGALURU AIRPORT HELP">
            Plan the Rest of Your Journey
          </SectionHeading>
          <nav aria-label="Related airport resources" className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link
              href="/airport-taxi-bangalore"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Bangalore Airport Taxi Service
            </Link>
            <Link
              href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Bengaluru Airport Cab Guide (Timing, Luggage & Terminals)
            </Link>
            <Link
              href="/car-rental-bangalore"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Hourly and Daily Ertiga Rental
            </Link>
            <Link
              href="/outstation-cabs-bangalore"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Outstation Cabs from Bangalore
            </Link>
          </nav>
        </section>
      </main>
    </SiteShell>
  );
}