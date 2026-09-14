import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-bangalore`;
const airportWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need a Bangalore Airport taxi.\nDate:\nPickup time:\nTerminal (T1/T2):\nPickup address / Destination:\nPassengers and luggage:"
)}`;
const detailedWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need a Bangalore Airport pickup/drop.
Date:
Pickup time:
Flight number:
Terminal (T1/T2):
Pickup and destination:
Adults and children:
Large suitcases and cabin bags:
Additional stops or assistance required:`)}`;
const emailUrl = `mailto:${SITE.email}?subject=Bangalore%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "Bangalore Airport Taxi (BLR) | Kempegowda Airport T1 & T2 Transfers",
  description:
    "Reliable BLR airport taxi pickups and drops in spacious 6+1 Ertiga cabs. 24/7 flight tracking, zero cancellation worries, and transparent trip quotes.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bangalore Airport Taxi (BLR) | Kempegowda Airport T1 & T2 Transfers",
    description:
      "Reliable BLR airport taxi pickups and drops in spacious 6+1 Ertiga cabs. 24/7 flight tracking, zero cancellation worries, and transparent trip quotes.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/airport.jpg`,
        width: 1672,
        height: 941,
        alt: "Lucky Travels Premium Ertiga prepared for a Bangalore Airport taxi journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangalore Airport Taxi (BLR) | Kempegowda Airport T1 & T2 Transfers",
    description:
      "Reliable BLR airport taxi pickups and drops in spacious 6+1 Ertiga cabs. 24/7 flight tracking, zero cancellation worries, and transparent trip quotes.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const faqItems = [
  {
    question: "How early should I book an Ertiga for a Bangalore Airport transfer?",
    answer:
      "A minimum of 4 to 12 hours advance booking is recommended for guaranteed on-time dispatch and dedicated vehicle allocation. Share your flight timing, terminal, address, passenger count, and luggage details early.",
  },
  {
    question: "How do pickups work for Terminal 1 versus Terminal 2 at BLR?",
    answer:
      "For Terminal 1 (domestic departures), the chauffeur coordinates curbside pickup at designated arrival lanes. For Terminal 2 (Garden Terminal for international and premium domestic flights), the driver confirms the exact pillar meeting point after baggage clearance.",
  },
  {
    question: "What happens if my flight to Bangalore is delayed?",
    answer:
      "Real-time flight tracking allows your dedicated chauffeur to adjust pickup timing automatically for delayed landings. Keep your phone accessible and message us once baggage retrieval is complete.",
  },
  {
    question: "What luggage fits in a 6+1 Ertiga airport cab?",
    answer:
      "For 4 to 5 passengers, folding the third row flat accommodates up to 4 large international check-in bags plus cabin trolleys. With 6 passengers seated, the boot space fits compact cabin luggage.",
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  width,
  height,
  loading = "lazy",
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
}) {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <Link href={href} aria-label={caption} className="block">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className="h-auto w-full object-cover transition duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>
      <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

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
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}
      >
        {children}
      </h2>
    </>
  );
}

const planningDetails = [
  "Pickup or drop requirement",
  "Travel date and required pickup time",
  "Flight number and scheduled arrival or departure time",
  "Terminal (T1 or T2), confirmed by the airline",
  "Exact Bangalore pickup address or city drop destination",
  "Number of adults and children",
  "Number and approximate size of suitcases and cabin bags",
  "Child seat, elderly assistance, or flight delay updates",
  "Planned stops or onward outstation travel after airport transfer",
];

const confirmationDetails = [
  "The confirmed pickup, destination, date, and reporting time.",
  "Guaranteed 6+1 Premium Ertiga category (no hatchback/sedan swaps).",
  "Transparent, agreed trip quote with zero surge multipliers.",
  "Toll, airport parking, and flight-delay waiting terms.",
  "Baggage verification and passenger comfort arrangement.",
];

export default function AirportTaxiBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bangalore Airport Taxi Service in a Premium Ertiga",
    serviceType: "Kempegowda International Airport Taxi Pickup and Drop",
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
        "@type": "City",
        name: "Bengaluru",
        containedInPlace: { "@type": "State", name: "Karnataka" },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9716,
          longitude: 77.5946,
        },
      },
      {
        "@type": "Place",
        name: "Kempegowda International Airport Bengaluru (BLR)",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.1986,
          longitude: 77.7066,
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "86",
      bestRating: "5",
      worstRating: "1",
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Direct Premium Ertiga airport transfers across Kempegowda International Airport (BLR T1 & T2) with verified chauffeurs and zero surge pricing.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Airport Taxi Bangalore",
        item: routeUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/airport-taxi-bangalore#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          aria-labelledby="airport-taxi-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10 lg:py-8"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300">
                <ShieldCheck size={14} /> Punctual Chauffeur-Driven Airport Drops
              </div>
              <h1
                id="airport-taxi-heading"
                className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem]"
              >
                Bangalore Airport Taxi Service in a Premium Ertiga
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:mt-4 lg:text-base lg:leading-7">
                Schedule a seamless pickup from <strong className="text-white">Kempegowda International Airport (BLR)</strong> or a punctual airport drop across Bangalore in a spotless <span className="underline decoration-amber-400 underline-offset-4 font-semibold">6+1 Maruti Suzuki Ertiga</span>. Enjoy <em>zero surge pricing</em>, flight-delay buffers, and ample luggage space for <strong>Terminal 1 and Terminal 2</strong>.
              </p>
              <p className="mt-4 text-lg font-black text-amber-300 lg:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div
                className="mt-6 flex flex-wrap gap-3 lg:mt-5 lg:flex-nowrap"
                aria-label="Direct enquiry options"
              >
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-black text-purple-800 shadow transition hover:bg-slate-100 lg:text-sm"
                >
                  <Phone size={19} /> Call Now: +91 {SITE.phone}
                </a>
                <a
                  href={airportWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-black text-white shadow transition hover:bg-green-700 lg:text-sm"
                >
                  <MessageCircle size={19} /> Request an Airport Quote on WhatsApp
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="text-sm leading-6 text-white/70">
                  <em>Advance scheduled dispatch.</em> Chauffeurs monitor live traffic maps to bypass Hebbal, Outer Ring Road, and Bellary Road bottlenecks.
                </p>
                <a
                  href="#airport-service-details"
                  className="inline-flex items-center gap-2 text-sm font-black text-amber-300 underline decoration-amber-300/60 underline-offset-4 hover:text-white"
                >
                  Explore airport transfer details
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <RouteImage
              href="/"
              src="/images/services/airport.jpg"
              alt="Lucky Travels Premium Ertiga prepared for a Bangalore Airport taxi journey"
              caption="Clean 6+1 Ertiga airport pickup and drop transfers coordinated directly with Lucky Travels."
              width={1672}
              height={941}
              loading="eager"
            />
          </div>
          <a
            href="#airport-service-details"
            className="service-scroll-prompt absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-[10px] font-black tracking-[0.08em] text-purple-800 shadow-premium sm:px-5 sm:text-xs"
          >
            Explore Airport Transfers & Terminal Guide Below
            <ArrowDown size={16} className="service-scroll-arrow" />
          </a>
        </section>

        {/* Planning Summary Cards */}
        <section
          id="airport-service-details"
          className="bg-white px-5 py-10"
          aria-label="Quick planning summary"
        >
          <div className="page-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Airport Service",
                "BLR Airport transfers across all Bangalore localities, scheduled in advance.",
              ],
              [
                "Fleet Category",
                "Chauffeur-driven 6+1 Maruti Suzuki Ertiga only. Zero hatchback or sedan downgrades.",
              ],
              ["Transparent Booking", "Direct booking confirmation via WhatsApp or phone with no hidden surcharges."],
              [
                "Baggage Assured",
                "Fold-flat 3rd row fits up to 4 international suitcases with ease.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50"
              >
                <h2 className="text-lg font-black text-[#090f2f]">{title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Terminal Guidelines */}
        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="terminal-guidelines-heading"
        >
          <SectionHeading
            id="terminal-guidelines-heading"
            eyebrow="TERMINAL 1 AND TERMINAL 2 PICKUP GUIDELINES"
          >
            Coordinate Your BLR Arrival Smoothly
          </SectionHeading>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 1 (T1)</p>
              <h3 className="mt-3 text-xl font-black">Domestic & Selected Flights</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Coordinated pickup at designated curbside arrival lanes. Share flight details early so the driver is positioned before baggage exit.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 2 (T2)</p>
              <h3 className="mt-3 text-xl font-black">Garden Terminal Operations</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Dedicated pickups for international routes and premium domestic carriers. Meet your driver at designated passenger pickup points with luggage-cart support.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Flight Delays</p>
              <h3 className="mt-3 text-xl font-black">Automated Schedule Buffer</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Real-time airline tracking allows your chauffeur to calibrate reporting times to flight delays without penalty fees.
              </p>
            </article>
          </div>
          <p className="mt-6 leading-8 text-slate-700">
            For departure drops, check our complete advice in the{" "}
            <Link
              href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
              className="font-bold text-purple-700 underline decoration-purple-400 underline-offset-2 hover:text-purple-900"
            >
              Bengaluru Airport Cab Guide (Timing, Luggage & Terminal Rules)
            </Link>{" "}
            to determine exact buffer times.
          </p>
        </section>

        {/* Enquiry Checklist */}
        <section
          className="bg-slate-100 px-5 py-12 sm:py-16"
          aria-labelledby="enquiry-details-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="enquiry-details-heading"
              eyebrow="A CLEAR MESSAGE SAVES TIME"
            >
              Details to Send for Your BLR Airport Cab Enquiry
            </SectionHeading>
            <p className="mt-6 leading-8 text-slate-700">
              Send your journey specifics in a single message for a swift, all-inclusive quote:
            </p>
            <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)] lg:items-start">
              <ol className="grid gap-3 sm:grid-cols-2">
                {planningDetails.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ol>
              <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
                <h3 className="text-xl font-black text-[#090f2f]">
                  Copy this airport enquiry format
                </h3>
                <blockquote className="mt-4 text-sm leading-7 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  Hello Lucky Travels, I need a Bangalore Airport pickup/drop.
                  <br />
                  Date:
                  <br />
                  Pickup time:
                  <br />
                  Flight number:
                  <br />
                  Terminal (T1/T2):
                  <br />
                  Pickup and destination:
                  <br />
                  Adults and children:
                  <br />
                  Large suitcases and cabin bags:
                  <br />
                  Additional stops or assistance required:
                </blockquote>
                <a
                  href={detailedWhatsAppUrl.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white shadow transition hover:bg-green-700"
                >
                  <MessageCircle size={18} /> Send This Enquiry on WhatsApp
                </a>
              </aside>
            </div>
          </div>
        </section>

        {/* Vehicle Advantage */}
        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="comfort-heading"
        >
          <SectionHeading
            id="comfort-heading"
            eyebrow="ONE DEDICATED VEHICLE CATEGORY"
          >
            Why Choose a Premium Ertiga for a Bangalore Airport Transfer?
          </SectionHeading>
          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            Family journeys require more space and reliability than standard sedans or app-based cabs can guarantee. By specializing exclusively in the <strong>Maruti Suzuki Ertiga 6+1</strong>, we ensure every ride offers clean AC ventilation, polite owner-drivers, and sufficient luggage capacity.
          </p>
          <ul className="mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Spacious 6+1 seating suitable for families and travel groups.",
              "Dedicated chauffeur-driven Ertigas only—no last-minute vehicle downgrades.",
              "Clean, air-conditioned cabin with individual rear-row AC vents.",
              "Clear discussions regarding bags and seat arrangements before departure.",
              "Sanitized cabins and punctual arrivals for all pre-booked slots.",
              "Courteous baggage handling and assistance for seniors.",
              "Direct communication with your driver without intermediary call centers.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl bg-white p-4 font-semibold leading-7 shadow-soft border border-slate-100"
              >
                {item}
              </li>
            ))}
          </ul>
          <aside
            className="mt-8 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6"
            aria-labelledby="luggage-heading"
          >
            <h3 id="luggage-heading" className="text-xl font-black text-slate-900">
              Luggage Arrangement Guidelines
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              For <strong>4–5 passengers</strong>, folding the third row flat provides trunk space for <strong>up to 4 large check-in suitcases</strong> plus cabin bags. With <strong>6 passengers</strong>, the upright third row is best suited for compact cabin strollers.
            </p>
          </aside>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Clean Premium Ertiga interior for a Bangalore Airport taxi journey"
              caption="Individual AC vents and comfortable legroom for family transfers."
              width={1536}
              height={1024}
            />
            <RouteImage
              href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot area used to assess airport luggage suitability"
              caption="Fold-flat 3rd-row boot configurations accommodate international luggage."
              width={1536}
              height={1024}
            />
          </div>
        </section>

        {/* Airport Neighborhood Corridors Section */}
        <section
          className="bg-white px-5 py-12 sm:py-16"
          aria-labelledby="popular-routes-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="popular-routes-heading"
              eyebrow="POPULAR AIRPORT ROUTES"
            >
              Airport Transfers from Bangalore Neighbourhoods
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-8 text-slate-700">
              Explore our corridor-specific airport transfer guides for route timings, bypass options, and luggage details.
            </p>

            {/* Featured Whitefield Callout */}
            <div className="mt-8 rounded-3xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 via-white to-amber-50/50 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-700/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-purple-800">
                    <Sparkles size={14} className="text-amber-500" /> High-Demand Tech Corridor
                  </span>
                  <h3 className="mt-3 text-xl font-black text-[#090f2f] sm:text-2xl">
                    Whitefield to Bangalore Airport (BLR) Transfers
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Pre-booked <strong>6+1 Premium Ertiga</strong> airport transfers via the <em>Budigere Cross / SH-104 bypass route</em>. Guaranteed on-time early morning departures with boot space for up to 4 international bags.
                  </p>
                </div>
                <Link
                  href="/airport-taxi-whitefield"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-purple-700 px-6 py-3.5 text-sm font-black text-white shadow transition hover:bg-purple-800"
                >
                  View Whitefield Route &amp; Rates <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Corridors Grid */}
            <nav
              aria-label="Popular airport routes"
              className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                ["Whitefield to Bangalore Airport Taxi", "Via SH-104 & Budigere Cross bypass", "/airport-taxi-whitefield"],
                ["Electronic City to Bangalore Airport Taxi", "Via NICE Road & Elevated Highway", "/airport-taxi-electronic-city"],
                ["HSR Layout to Bangalore Airport Taxi", "Direct Outer Ring Road to Hebbal corridor", "/airport-taxi-hsr-layout"],
                ["Indiranagar & HAL to Bangalore Airport Taxi", "Via Suranjandas Road & NH-44", "/airport-taxi-indiranagar"],
                ["Marathahalli to Bangalore Airport Taxi", "East Bangalore IT corridor direct link", "/airport-taxi-marathahalli"],
                ["JP Nagar & Jayanagar to Bangalore Airport Taxi", "South Bengaluru arterial highway access", "/airport-taxi-jp-nagar"],
              ].map(([title, note, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex min-h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-100 p-5 font-bold text-purple-700 shadow-soft transition hover:border-purple-300 hover:shadow-premium"
                >
                  <span className="text-lg leading-7">{title}</span>
                  <span className="mt-3 flex items-center justify-between gap-3 text-sm font-medium leading-6 text-slate-600">
                    {note}
                    <span className="shrink-0 text-lg font-black text-purple-700" aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* Resources & Guides */}
        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="resources-heading"
        >
          <SectionHeading id="resources-heading" eyebrow="PLAN BEFORE TRAVEL">
            More Help for Your Bengaluru Airport Journey
          </SectionHeading>
          <p className="mt-6 max-w-3xl leading-8 text-slate-700">
            Read our practical airport guides for pre-booking checklists, terminal procedures, luggage management, and timing buffers.
          </p>
          <nav
            aria-label="Airport journey resources"
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            <Link
              href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Bengaluru Airport Cab Guide (Timing, Luggage &amp; Terminals)
            </Link>
            <Link
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Why Lucky Travels specialises only in Premium Ertiga
            </Link>
            <Link
              href="/about"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Learn about Lucky Travels
            </Link>
            <Link
              href="/services/outstation-packages"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft transition hover:bg-purple-50"
            >
              → Explore Outstation Ertiga Packages
            </Link>
          </nav>
        </section>

        {/* FAQs */}
        <section
          className="bg-white px-5 py-12 sm:py-16"
          aria-labelledby="faq-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="faq-heading"
              eyebrow="COMMON AIRPORT BOOKING QUESTIONS"
            >
              Bangalore Airport Taxi FAQs
            </SectionHeading>
            <div className="mt-8 divide-y rounded-2xl border border-slate-200 bg-white px-5">
              {faqItems.map((item) => (
                <article key={item.question} className="py-5">
                  <h3 className="text-lg font-black text-[#090f2f]">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="bg-[#080d2b] px-5 py-12 text-white sm:py-16"
          aria-labelledby="final-enquiry-heading"
        >
          <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:items-center">
            <div>
              <SectionHeading id="final-enquiry-heading" eyebrow="" dark>
                Enquire for Your Bangalore Airport Taxi
              </SectionHeading>
              <p className="mt-6 leading-8 text-white/75">
                Send your flight number, terminal, pickup address, passenger count, and luggage requirements directly to Lucky Travels. We confirm transparent trip terms with no surge surprises.
              </p>
              <p className="mt-6 text-sm leading-6 text-white/70">
                24/7 enquiries. Pre-scheduled transfers ensure prompt vehicle dispatch.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#090f2f] shadow transition hover:bg-slate-100"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href={airportWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white shadow transition hover:bg-green-700"
              >
                <MessageCircle size={18} /> Send Details on WhatsApp
              </a>
              <a
                href={emailUrl}
                className="rounded-xl bg-white px-5 py-3.5 text-center font-black text-[#090f2f] shadow transition hover:bg-slate-100"
              >
                Email Your Enquiry
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}