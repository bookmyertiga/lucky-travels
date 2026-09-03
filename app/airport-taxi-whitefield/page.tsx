import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import { PopularAirportCorridors } from "@/components/sections/AirportCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-whitefield`;
const whitefieldWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need a Whitefield to Bangalore Airport taxi.\nDate:\nPickup time:\nTerminal (T1/T2):\nPickup address:\nPassengers and luggage:",
)}`;
const emailUrl = `mailto:${SITE.email}?subject=Whitefield%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title:
    "Whitefield to Bangalore Airport Taxi (BLR) | Premium Ertiga Cabs - Go Bengaluru",
  description:
    "Punctual Whitefield to Kempegowda Airport (BLR T1 & T2) taxi service by Lucky Travels. Clean 6+1 Ertiga cabs, transparent quotes, zero surge pricing. Book 24/7.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Whitefield to Bangalore Airport Taxi (BLR) | Premium Ertiga Cabs - Go Bengaluru",
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
    title:
      "Whitefield to Bangalore Airport Taxi (BLR) | Premium Ertiga Cabs - Go Bengaluru",
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
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}
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
        A clean, chauffeur-driven 6+1 Ertiga for Whitefield and East Bengaluru airport journeys.
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
      { "@type": "Place", name: "Whitefield, Bengaluru" },
      { "@type": "Place", name: "Kempegowda International Airport Bengaluru" },
    ],
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
        item: `${SITE.url}/services/airport-transfers`,
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
        <section
          aria-labelledby="whitefield-airport-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10 lg:py-8"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[.18em] text-amber-400">WHITEFIELD TO BLR AIRPORT TRANSFERS</p>
              <h1 id="whitefield-airport-heading" className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem]">
                Whitefield to Bangalore Airport (BLR) Taxi Service
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:mt-4 lg:text-base lg:leading-7">
                Book a punctual owner-driver-led airport transfer in a spacious 6+1 Premium Ertiga. We serve Whitefield, ITPL, Kadugodi, Varthur and Hoodi with 24/7 enquiry support and a transparent, trip-specific quote.
              </p>
              <p className="mt-4 text-lg font-black text-amber-300 lg:text-base">{SITE.specialisationSlogan}</p>
              <div className="mt-6 flex flex-wrap gap-3 lg:mt-5" aria-label="Direct booking options">
                <a href={`tel:+91${SITE.phone}`} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-black text-purple-800"><Phone size={19} /> Call +91 {SITE.phone}</a>
                <a href={whitefieldWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-black text-white"><MessageCircle size={19} /> WhatsApp for a Quote</a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="text-sm leading-6 text-white/70">24/7 enquiries. Confirm the address, terminal, timing, route, vehicle and driver availability before travel.</p>
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

        <section id="route-details" className="bg-white px-5 py-10" aria-labelledby="route-heading">
          <div className="page-shell">
            <SectionHeading id="route-heading" eyebrow="ROUTE AND TRAVEL DURATION BREAKDOWN">Whitefield to Kempegowda Airport: Distance and Time</SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Approximate distance", "Around 39 km", "The exact distance varies by pickup address in Whitefield and the airport terminal."],
                ["Non-peak travel", "50-60 minutes", "A realistic planning window via Budigere Cross and SH-104 when traffic is moving normally."],
                ["Peak IT corridor", "85-105 minutes", "Allow extra time during morning and evening office traffic, rain, and airport congestion."],
              ].map(([title, value, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">{title}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#090f2f]">{value}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 max-w-4xl leading-8 text-slate-700">For an airport drop, work backwards from your airline check-in requirement rather than relying on the shortest map estimate. Share your flight time and exact Whitefield address so the owner-driver can recommend a sensible reporting time. The final route and quote are confirmed for the specific journey.</p>
          </div>
        </section>

        <section className="page-shell py-12 sm:py-16" aria-labelledby="terminal-heading">
          <SectionHeading id="terminal-heading" eyebrow="TERMINAL 1 AND TERMINAL 2 PROTOCOLS">Share the Correct BLR Terminal Before Travel</SectionHeading>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 1</p>
              <h3 className="mt-3 text-2xl font-black">Domestic departures and arrivals</h3>
              <p className="mt-3 leading-7 text-slate-700">Check the latest airline message for T1 and share the terminal before the driver reports. IndiGo, Akasa Air and SpiceJet flights may operate from T1, but terminal assignments can change, so the ticket remains the source of truth.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[.12em] text-purple-700">Terminal 2</p>
              <h3 className="mt-3 text-2xl font-black">Domestic and international operations</h3>
              <p className="mt-3 leading-7 text-slate-700">Confirm T2 for Air India, Vistara or international travel from the latest airline communication. Follow current airport signage for the agreed drop lane or pickup meeting point after landing.</p>
            </article>
          </div>
          <p className="mt-6 leading-8 text-slate-700">For an airport pickup, send the flight number and message after collecting your bags. Flight tracking helps coordinate the reporting plan, while the final meeting point must follow current BLR airport access rules and instructions.</p>
        </section>

        <section className="bg-slate-100 px-5 py-12 sm:py-16" aria-labelledby="luggage-heading">
          <div className="page-shell">
            <SectionHeading id="luggage-heading" eyebrow="LUGGAGE AND SEATING GUIDE">Choose the Right Ertiga Seating Arrangement</SectionHeading>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,.8fr)] lg:items-start">
              <div className="space-y-5 leading-8 text-slate-700">
                <p>A Premium Maruti Suzuki Ertiga offers flexible 6+1 seating, but passenger comfort and luggage space depend on which seats are occupied. The driver will review the arrangement before accepting the trip.</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">4 passengers with the 3rd row folded and up to 4 large check-in suitcases.</li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">5 to 6 passengers with compact cabin luggage for a more practical fit.</li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">Share the number and approximate size of every large bag before confirmation.</li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">Child seats, elderly assistance and unusual items should be mentioned early.</li>
                </ul>
              </div>
              <aside className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6">
                <h3 className="text-xl font-black">No last-minute vehicle surprise</h3>
                <p className="mt-3 leading-7 text-slate-700">Lucky Travels specialises exclusively in chauffeur-driven 6+1 Premium Ertiga cabs. Send the complete passenger and luggage plan so space can be assessed honestly before a trip-specific quote is confirmed.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="page-shell py-12 sm:py-16" aria-labelledby="booking-heading">
          <SectionHeading id="booking-heading" eyebrow="DIRECT BOOKING AND QUOTE">Book Your Whitefield Airport Transfer</SectionHeading>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,.9fr)] lg:items-start">
            <div className="space-y-5 leading-8 text-slate-700">
              <p>Send your Whitefield pickup address, travel date, reporting time, terminal, flight details, passenger count and luggage information. A direct quote is prepared for the actual route and timing.</p>
              <p>There are no fixed prices or surge promises hidden behind a generic booking form. The confirmed terms explain the vehicle, route, tolls, parking, waiting arrangements and any other trip-specific requirements before travel.</p>
              <p>For early flights, late-night arrivals and peak IT corridor traffic, an advance enquiry is recommended. Call or WhatsApp to check availability around your itinerary.</p>
            </div>
            <aside className="rounded-2xl bg-[#080d2b] p-6 text-white shadow-soft">
              <h3 className="text-xl font-black">Request a direct Whitefield quote</h3>
              <p className="mt-3 leading-7 text-white/75">Tell us the terminal and complete pickup details for a clear response.</p>
              <div className="mt-6 grid gap-3">
                <a href={`tel:+91${SITE.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#080d2b]"><Phone size={18} /> Call +91 {SITE.phone}</a>
                <a href={whitefieldWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-center font-black text-white"><MessageCircle size={18} /> WhatsApp for a Quote</a>
                <a href={emailUrl} className="rounded-xl border border-white/25 px-5 py-3.5 text-center font-black text-white">Email {SITE.email}</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white px-5 py-12 sm:py-16" aria-labelledby="faq-heading">
          <div className="page-shell">
            <SectionHeading id="faq-heading" eyebrow="WHITEFIELD AIRPORT TAXI FAQ">Common Questions Before You Travel</SectionHeading>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-black text-[#090f2f]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PopularAirportCorridors />

        <section className="page-shell py-12 sm:py-16" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" eyebrow="MORE BENGALURU AIRPORT HELP">Plan the Rest of Your Journey</SectionHeading>
          <nav aria-label="Related airport resources" className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link href="/airport-taxi-bangalore" className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft">Bangalore Airport taxi service</Link>
            <Link href="/blog/premium-ertiga-for-bengaluru-airport-transfer" className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft">Bengaluru Airport cab pre-booking guide</Link>
            <Link href="/car-rental-bangalore" className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft">Hourly and daily Ertiga rental</Link>
            <Link href="/outstation-cabs-bangalore" className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft">Outstation cabs from Bangalore</Link>
          </nav>
        </section>
      </main>
    </SiteShell>
  );
}
