import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/airport-taxi-bangalore`;
const airportWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=Hello%20Lucky%20Travels%2C%20I%20need%20a%20Bangalore%20Airport%20taxi.%20My%20travel%20details%20are%3A`;
const detailedWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need a Bangalore Airport pickup/drop.
Date:
Pickup time:
Flight number:
Terminal, if known:
Pickup and destination:
Adults and children:
Large suitcases and cabin bags:
Additional stops or assistance required:`)} `;
const emailUrl = `mailto:${SITE.email}?subject=Bangalore%20Airport%20Taxi%20Enquiry`;

export const metadata: Metadata = {
  title: "Bangalore Airport Taxi (BLR) | Premium Ertiga",
  description:
    "Enquire directly for a Bangalore Airport taxi in a clean Premium Ertiga. Plan a BLR pickup or drop with luggage details and clear trip terms.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bangalore Airport Taxi (BLR) | Premium Ertiga",
    description:
      "Enquire directly for a Bangalore Airport taxi in a clean Premium Ertiga. Plan a BLR pickup or drop with luggage details and clear trip terms.",
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
    title: "Bangalore Airport Taxi (BLR) | Premium Ertiga",
    description:
      "Enquire directly for a Bangalore Airport taxi in a clean Premium Ertiga. Plan a BLR pickup or drop with luggage details and clear trip terms.",
    images: [`${SITE.url}/images/services/airport.jpg`],
  },
};

const faqItems = [
  {
    question: "What details should I share for a Bangalore Airport pickup?",
    answer:
      "Share the travel date, flight number, expected arrival time, terminal if known, passenger count, luggage, contact number and complete destination. Send an update after collecting the bags so the final meeting can be coordinated.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Send an update as soon as you receive the revised flight information. Sharing the flight number and keeping your phone reachable helps the driver review the new pickup plan. Waiting and parking terms should be confirmed before the journey.",
  },
  {
    question: "Will a Premium Ertiga carry all our airport luggage?",
    answer:
      "It depends on the number of passengers, occupied seats and the number and size of bags. Send the approximate luggage details before confirmation. When more passenger seats are occupied, the available luggage arrangement becomes more limited.",
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  width,
  height,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <Link href={href} aria-label={caption} className="block">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
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
  "Terminal, if already confirmed by the airline",
  "Exact Bangalore pickup address or airport-to-city destination",
  "Number of adults and children",
  "Number and approximate size of suitcases and cabin bags",
  "Child seat, elderly assistance or other special requirements, if any",
  "Planned stops or onward travel after the airport transfer",
];

const confirmationDetails = [
  "The confirmed pickup, destination, date and time.",
  "Premium Ertiga vehicle category.",
  "The agreed trip quote or kilometre terms.",
  "Toll, airport parking and waiting terms.",
  "Additional stops or changes to the original itinerary.",
  "Passenger and luggage suitability.",
];

export default function AirportTaxiBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bangalore Airport Taxi Service in a Premium Ertiga",
    serviceType: "Bangalore Airport taxi pickup and drop enquiry service",
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
      containedInPlace: { "@type": "State", name: "Karnataka" },
    },
    url: routeUrl,
    image: `${SITE.url}/images/services/airport.jpg`,
    description:
      "Direct Premium Ertiga enquiries for Bangalore Airport pickup and drop journeys.",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Bangalore Airport Taxi",
        item: routeUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
        <nav
          aria-label="Breadcrumb"
          className="page-shell py-5 text-sm text-slate-600"
        >
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link
                href="/"
                className="font-bold text-purple-700 hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/services/airport-transfers"
                className="font-bold text-purple-700 hover:underline"
              >
                Airport Transfers
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Bangalore Airport Taxi</li>
          </ol>
        </nav>

        <section
          aria-labelledby="airport-taxi-heading"
          className="bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[.18em] text-amber-400">
                BANGALORE AIRPORT PICKUP AND DROP ENQUIRIES
              </p>
              <h1
                id="airport-taxi-heading"
                className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-5xl lg:text-[3.25rem]"
              >
                Bangalore Airport Taxi Service in a Premium Ertiga
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                Plan a pickup from Kempegowda International Airport Bengaluru or
                an airport drop from Bangalore in a clean, air-conditioned
                Premium Ertiga. Share your flight, terminal, passenger, luggage
                and address details directly with Lucky Travels for a
                trip-specific quote and clear confirmation.
              </p>
              <p className="mt-5 text-lg font-black text-amber-300">
                {SITE.specialisationSlogan}
              </p>
              <div
                className="mt-8 flex flex-wrap gap-3"
                aria-label="Direct enquiry options"
              >
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-purple-800"
                >
                  <Phone size={19} /> Call Now: +91 {SITE.phone}
                </a>
                <a
                  href={airportWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
                >
                  <MessageCircle size={19} /> Request an Airport Quote on
                  WhatsApp
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/70">
                24/7 enquiries. Every journey is subject to direct confirmation
                of the date, time, route, vehicle and driver availability.
              </p>
            </div>
            <RouteImage
              href="/"
              src="/images/services/airport.jpg"
              alt="Lucky Travels Premium Ertiga prepared for a Bangalore Airport taxi journey"
              caption="Premium Ertiga airport pickup and drop enquiries planned directly with Lucky Travels."
              width={1672}
              height={941}
            />
          </div>
        </section>

        <section
          className="bg-white px-5 py-10"
          aria-label="Quick planning summary"
        >
          <div className="page-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Airport service",
                "BLR Airport pickup and drop enquiries, subject to confirmation.",
              ],
              [
                "Vehicle category",
                "Clean, air-conditioned Premium Maruti Suzuki Ertiga.",
              ],
              ["Booking method", "Direct enquiry by phone, WhatsApp or email."],
              [
                "Before confirmation",
                "Flight, terminal, passenger, luggage, address and timing details are reviewed.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <h2 className="text-lg font-black">{title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="page-shell py-14 sm:py-20"
          aria-labelledby="direct-planning-heading"
        >
          <SectionHeading
            id="direct-planning-heading"
            eyebrow="DIRECT AIRPORT JOURNEY PLANNING"
          >
            Plan a Bangalore Airport Pickup or Drop Directly
          </SectionHeading>
          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-700">
            <p>
              Airport journeys are easier when the driver and traveller
              understand the complete plan before travel. For a pickup, share
              the flight number, expected arrival time, terminal if known,
              passenger count, luggage and full destination. For a drop, share
              the exact Bangalore pickup point, preferred reporting time,
              terminal and airline details.
            </p>
            <p>
              Kempegowda International Airport Bengaluru operates Terminal 1 and
              Terminal 2. The terminal used can depend on the airline and flight
              operation. Check the latest ticket or airline message and share
              the confirmed terminal before travel. Airport access and meeting
              arrangements can change, so the final pickup point should be
              reconfirmed on the day of the journey.
            </p>
            <p>
              Lucky Travels accepts enquiries at any time, but the journey is
              confirmed only after the date, timing, route, vehicle and driver
              availability have been checked.
            </p>
            <p>
              <Link
                href="/blog/premium-ertiga-for-bengaluru-airport-transfer"
                className="font-bold text-purple-700 underline"
              >
                Read the complete Bengaluru Airport cab pre-booking guide
              </Link>
            </p>
          </div>
        </section>

        <section
          className="bg-slate-100 px-5 py-14 sm:py-20"
          aria-labelledby="enquiry-details-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="enquiry-details-heading"
              eyebrow="A CLEAR MESSAGE SAVES TIME"
            >
              Details to Send for Your BLR Airport Cab Enquiry
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-8 text-slate-700">
              Send the following information in one WhatsApp message so the
              journey can be assessed accurately:
            </p>
            <ol className="mt-6 grid max-w-5xl gap-3 sm:grid-cols-2">
              {planningDetails.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ol>
            <blockquote className="mt-8 max-w-2xl rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
              Hello Lucky Travels, I need a Bangalore Airport pickup/drop.
              <br />
              Date:
              <br />
              Pickup time:
              <br />
              Flight number:
              <br />
              Terminal, if known:
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
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
            >
              <MessageCircle size={18} /> Send This Enquiry on WhatsApp
            </a>
          </div>
        </section>

        <section
          className="page-shell py-14 sm:py-20"
          aria-labelledby="comfort-heading"
        >
          <SectionHeading
            id="comfort-heading"
            eyebrow="ONE DEDICATED VEHICLE CATEGORY"
          >
            Why Choose a Premium Ertiga for a Bangalore Airport Transfer?
          </SectionHeading>
          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            A family airport journey can require more flexibility than a compact
            hatchback or sedan provides. Lucky Travels concentrates on the
            Premium Ertiga category so passenger seating, air-conditioned
            comfort and luggage requirements can be discussed before
            confirmation.
          </p>
          <ul className="mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Flexible 6+1 seating, including the driver, for suitable families and small groups.",
              "Air-conditioned cabin for Bangalore Airport pickups and drops.",
              "Direct discussion of passengers, seats and luggage before confirmation.",
              "Vehicle cleaning before confirmed journeys.",
              "Luggage assistance and patient support for older travellers.",
              "Direct communication for timing, meeting-point and route coordination.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl bg-white p-4 font-semibold leading-7 shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <aside
            className="mt-8 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6"
            aria-labelledby="luggage-heading"
          >
            <h3 id="luggage-heading" className="text-xl font-black">
              Important luggage note
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Luggage capacity is not unlimited. The suitable arrangement
              depends on the number of passengers, occupied seats, large
              suitcases, cabin bags and special items. Send the approximate bag
              count and sizes before confirmation so Lucky Travels can assess
              the available space honestly.
            </p>
          </aside>
          <div className="mt-10">
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Clean Premium Ertiga interior for a Bangalore Airport taxi journey"
              caption="Share passenger and seating requirements before confirming the airport journey."
              width={1536}
              height={1024}
            />
          </div>
          <div className="mt-8">
            <RouteImage
              href="/blog/premium-ertiga-for-bengaluru-airport-transfer"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot area used to assess airport luggage suitability"
              caption="Bag count, bag sizes and occupied seats determine the suitable luggage arrangement."
              width={1536}
              height={1024}
            />
          </div>
        </section>

        <section
          className="bg-white px-5 py-14 sm:py-20"
          aria-labelledby="coordination-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="coordination-heading"
              eyebrow="AFTER THE FLIGHT LANDS"
            >
              How a Bangalore Airport Pickup Is Coordinated
            </SectionHeading>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Check the latest terminal information through the airline before departure.",
                "Keep the phone used for booking switched on after landing.",
                "Complete immigration, baggage collection and customs where applicable.",
                "Confirm that every bag has arrived before walking towards the meeting area.",
                "Send a short WhatsApp update when ready to leave the terminal.",
                "Follow current airport signage and the meeting instructions confirmed by the driver.",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 p-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-purple-700 font-black text-white">
                    {index + 1}
                  </span>
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 max-w-4xl leading-8 text-slate-700">
              If the flight is delayed or diverted, send an update as soon as
              practical. Any waiting or parking terms should be discussed before
              the journey is confirmed.
            </p>
          </div>
        </section>

        <section
          className="page-shell py-14 sm:py-20"
          aria-labelledby="areas-heading"
        >
          <SectionHeading
            id="areas-heading"
            eyebrow="SUBJECT TO ROUTE CONFIRMATION"
          >
            Bangalore Airport Cab Enquiries Across the City
          </SectionHeading>
          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-700">
            <p>
              Airport pickup and drop enquiries can be discussed for Whitefield,
              Electronic City, Indiranagar, HSR Layout, Koramangala, central
              Bangalore and other localities. The reporting time and quote
              depend on the exact address, traffic conditions, route, terminal
              and trip timing.
            </p>
            <p>
              Send a complete address or Google Maps location instead of only
              the locality name. This helps Lucky Travels review the practical
              route and suggest an appropriate pickup time for the airport
              journey.
            </p>
          </div>
        </section>

        <section
          className="bg-slate-100 px-5 py-14 sm:py-20"
          aria-labelledby="terms-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="terms-heading"
              eyebrow="NO UNCLEAR LAST-MINUTE TERMS"
            >
              Get a Direct Bangalore Airport Taxi Quote
            </SectionHeading>
            <p className="mt-6 max-w-4xl leading-8 text-slate-700">
              Lucky Travels does not publish a fixed airport fare because the
              quote depends on the exact Bangalore address, pickup time, airport
              direction, route and journey requirements. Before confirmation,
              ask for the complete trip terms in writing.
            </p>
            <p className="mt-6 font-bold text-slate-800">
              The confirmation should explain, where applicable:
            </p>
            <ul className="mt-4 grid max-w-4xl gap-3 sm:grid-cols-2">
              {confirmationDetails.map((item) => (
                <li
                  key={item}
                  className="list-inside list-disc leading-7 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-4xl leading-8 text-slate-700">
              Keep the final confirmation on WhatsApp so both the customer and
              driver can refer to the same journey details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-[#080d2b] px-5 py-3.5 font-black text-white"
              >
                <Phone size={18} /> Call +91 {SITE.phone}
              </a>
              <a
                href={airportWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
              >
                <MessageCircle size={18} /> Get an Airport Quote on WhatsApp
              </a>
              <a
                href={emailUrl}
                className="rounded-xl bg-white px-5 py-3.5 font-black text-[#090f2f]"
              >
                Email {SITE.email}
              </a>
            </div>
          </div>
        </section>

        <section
          className="page-shell py-14 sm:py-20"
          aria-labelledby="resources-heading"
        >
          <SectionHeading id="resources-heading" eyebrow="PLAN BEFORE TRAVEL">
            More Help for Your Bengaluru Airport Journey
          </SectionHeading>
          <p className="mt-6 max-w-3xl leading-8 text-slate-700">
            Read the practical airport guide for a detailed booking checklist,
            terminal reminders, luggage planning and pickup coordination.
          </p>
          <nav
            aria-label="Airport journey resources"
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            <Link
              href="/blog/premium-ertiga-for-bengaluru-airport-transfer"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft"
            >
              Bengaluru Airport cab pre-booking guide
            </Link>
            <Link
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft"
            >
              Why Lucky Travels specialises only in Premium Ertiga
            </Link>
            <Link
              href="/about"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft"
            >
              Learn about Lucky Travels
            </Link>
            <Link
              href="/services/outstation-packages"
              className="rounded-xl bg-white p-4 font-bold text-purple-700 shadow-soft"
            >
              Explore outstation packages
            </Link>
          </nav>
        </section>

        <section
          className="bg-white px-5 py-14 sm:py-20"
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
                  <h3 className="text-lg font-black">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[#080d2b] px-5 py-14 text-white sm:py-20"
          aria-labelledby="final-enquiry-heading"
        >
          <div className="page-shell">
            <SectionHeading id="final-enquiry-heading" eyebrow="" dark>
              Enquire for Your Bangalore Airport Taxi
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-8 text-white/75">
              Send your flight, terminal, address, passenger and luggage details
              directly to Lucky Travels. You will receive a trip-specific
              response after the route and availability have been checked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#090f2f]"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href={airportWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
              >
                <MessageCircle size={18} /> Send Details on WhatsApp
              </a>
              <a
                href={emailUrl}
                className="rounded-xl bg-white px-5 py-3.5 font-black text-[#090f2f]"
              >
                Email Your Enquiry
              </a>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/70">
              24/7 enquiries. Service is subject to vehicle, driver, date, time
              and route confirmation.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
