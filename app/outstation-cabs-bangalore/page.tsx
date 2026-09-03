import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Luggage,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PopularOutstationRoutes } from "@/components/sections/OutstationCorridorPage";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/outstation-cabs-bangalore`;
const outstationWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need an outstation cab from Bangalore.
Travel date:
Pickup location and time:
Destination:
One-way or round trip:
Return date, if applicable:
Adults and children:
Suitcases and cabin bags:
Planned stops or assistance required:`)}`;
const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Outstation Cab from Bangalore Enquiry")}`;

const pageTitle =
  "Outstation Cabs from Bangalore | One-Way Drops & Round Trips";
const pageDescription =
  "Comfortable outstation cabs from Bangalore to Mysore, Coorg, Ooty, Chikmagalur, & Tirupati. Experienced highway drivers and clean Ertiga fleet. Enquire now.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: routeUrl,
    type: "website",
    siteName: "Go Bengaluru by Lucky Travels",
    images: [
      {
        url: `${SITE.url}/images/services/outstation.jpg`,
        width: 1536,
        height: 1024,
        alt: "Go Bengaluru Premium Ertiga for outstation cabs from Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE.url}/images/services/outstation.jpg`],
  },
};

const faqItems = [
  {
    question:
      "Can I book a one-way or round-trip outstation cab from Bangalore?",
    answer:
      "Yes. One-way drops, same-day returns, round trips and multi-day journeys can be discussed. Confirmation depends on the date, itinerary, vehicle and driver availability, so share the complete travel plan before the journey.",
  },
  {
    question: "How much luggage can a Premium Ertiga carry?",
    answer:
      "Luggage suitability depends on the number of passengers, occupied seats and the number and size of bags. Send the approximate bag count and sizes before confirmation so the seating and luggage arrangement can be assessed honestly.",
  },
  {
    question: "Can we add sightseeing, meal breaks or customised stops?",
    answer:
      "Suitable stops can be discussed before confirmation. Additional halts may affect the route, kilometres, waiting time and journey terms, so include every planned stop in the original enquiry.",
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  loading = "lazy",
  featured = false,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  loading?: "eager" | "lazy";
  featured?: boolean;
}) {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <Link href={href} aria-label={caption} className="block">
        <Image
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          loading={loading}
          className={
            featured
              ? "h-[220px] w-full object-cover sm:h-[260px] lg:h-[285px]"
              : "h-auto w-full object-cover"
          }
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

const journeyOptions = [
  {
    title: "One-way outstation drop",
    text: "Plan a direct drop from Bangalore to the confirmed destination, subject to route and availability checks.",
  },
  {
    title: "Same-day return",
    text: "Discuss the reporting time, planned work or sightseeing and expected return before confirmation.",
  },
  {
    title: "Round-trip taxi",
    text: "Share the outward and return dates, overnight halts and complete itinerary for a clear trip-specific quote.",
  },
  {
    title: "Multi-day family journey",
    text: "Plan a longer Karnataka or South India itinerary with suitable breaks and directly agreed journey terms.",
  },
];

const serviceBenefits = [
  "Clean, air-conditioned Premium Maruti Suzuki Ertiga.",
  "Flexible 6/7-seater category for families and small groups, subject to passenger and luggage suitability.",
  "Direct route planning and communication with the owner-driver or assigned trusted driver.",
  "Punctual pickup planning, luggage assistance and patient support for elderly travellers.",
  "Experienced highway driving with suitable rest and meal stops discussed in advance.",
  "A focused Ertiga-only experience instead of an uncertain hatchback, sedan or mixed-fleet allocation.",
];

const confirmationDetails = [
  "Exact pickup point, destination, date and reporting time",
  "One-way, return or multi-day itinerary",
  "Adults, children and seating requirements",
  "Number and approximate size of suitcases and cabin bags",
  "Sightseeing, meal, hotel or other planned stops",
  "Agreed kilometre terms, tolls, parking, waiting and driver allowance where applicable",
];

export default function OutstationCabsBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outstation Cabs from Bangalore in a Premium Ertiga",
    alternateName: [
      "Go Bengaluru Outstation Cabs",
      "GoBengaluru Outstation Taxi",
      "Go Bangalore Outstation Cab Service",
    ],
    serviceType: "Premium Ertiga outstation taxi service from Bangalore",
    provider: {
      "@type": "TaxiService",
      name: "Go Bengaluru by Lucky Travels",
      alternateName: ["GoBengaluru", "Go Bangalore", "Lucky Travels"],
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/services/outstation.jpg`,
    description: pageDescription,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Outstation Packages",
        item: `${SITE.url}/services/outstation-packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Outstation Cabs from Bangalore",
        item: routeUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/outstation-cabs-bangalore#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Lucky Travels provide one-way drops and round-trip outstation cabs from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Go Bengaluru by Lucky Travels offers both direct one-way outstation drops and multi-day round-trip family vacation packages in clean Premium Ertiga cabs.",
        },
      },
      {
        "@type": "Question",
        name: "Which outstation destinations are most popular from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We frequently operate trips to Mysore via the Expressway, Coorg (Madikeri), Ooty, Wayanad, Chikmagalur, and Tirupati with experienced highway drivers.",
        },
      },
      {
        "@type": "Question",
        name: "Can we customize stops, meal breaks, and sightseeing along the route?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every outstation trip itinerary is discussed before confirmation so suitable rest stops, highway restaurant halts, and sightseeing detours can be planned comfortably.",
        },
      },
    ],
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        <section
          aria-labelledby="outstation-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-6 text-white"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm sm:leading-normal">
                BANGALORE OUTSTATION TAXI ENQUIRIES
              </p>
              <h1
                id="outstation-heading"
                className="mt-2 max-w-3xl text-[1.6rem] font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]"
              >
                Outstation Cabs from Bangalore in a Premium Ertiga
              </h1>
              <p className="mt-2 max-w-3xl text-[13px] leading-5 text-white/85 sm:mt-3 sm:text-lg sm:leading-8 lg:text-base lg:leading-7">
                Plan a one-way drop, round trip or multi-day journey from
                Bangalore with Go Bengaluru by Lucky Travels. Travel in a clean,
                air-conditioned Premium Ertiga and receive a trip-specific quote
                after the complete route, passenger and luggage details are
                reviewed.
              </p>
              <p className="mt-1 text-sm font-black leading-5 text-amber-300 sm:mt-2 sm:text-lg sm:leading-6 lg:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-2 flex flex-wrap gap-3 sm:mt-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-black text-purple-800 lg:py-3 lg:text-sm"
                >
                  <Phone size={19} /> Call Now: +91 {SITE.phone}
                </a>
                <a
                  href={outstationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 font-black text-white lg:py-3 lg:text-sm"
                >
                  <MessageCircle size={19} /> Get an Outstation Quote
                </a>
              </div>
              <p className="mt-1 text-xs leading-5 text-white/70 sm:mt-2">
                24/7 enquiries. Book 6 to 12 hours ahead for chauffeur allocation,
                vehicle preparation and confirmed dispatch.
              </p>
              <a
                href="#journey-options"
                className="service-scroll-prompt mt-3 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden sm:px-5"
              >
                Explore Outstation Routes & Direct Transport Below
                <ArrowDown
                  size={17}
                  aria-hidden="true"
                  className="service-scroll-arrow"
                />
              </a>
            </div>
            <RouteImage
              href="/"
              src="/images/services/outstation.jpg"
              alt="Go Bengaluru Lucky Travels Premium Ertiga for an outstation cab journey from Bangalore"
              caption="Chauffeur-driven 6+1 Premium Ertiga cabs for comfortable one-way, round-trip, and multi-day Karnataka outstation travel."
              loading="eager"
              featured
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#journey-options"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white hover:border-purple-700 sm:px-5"
            >
              Explore Outstation Routes & Direct Transport Below
              <ArrowDown
                size={17}
                aria-hidden="true"
                className="service-scroll-arrow"
              />
            </a>
          </div>
        </section>

        <section id="journey-options" className="bg-white px-5 pb-10 pt-16">
          <div className="page-shell">
            <SectionHeading
              id="journey-options-heading"
              eyebrow="ONE-WAY, ROUND-TRIP AND MULTI-DAY TRAVEL"
            >
              Bangalore Outstation Cab Options
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {journeyOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-black text-[#090f2f]">
                    {option.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="ertiga-comfort-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:items-center">
            <div>
              <SectionHeading
                id="ertiga-comfort-heading"
                eyebrow="A COMFORTABLE FAMILY ROAD-TRIP UPGRADE"
              >
                Why Choose a Premium Ertiga for Outstation Travel?
              </SectionHeading>
              <div className="mt-6 space-y-4 leading-8 text-slate-700">
                <p>
                  A longer highway journey needs better seating, air-conditioned
                  comfort and more practical luggage planning than a cramped
                  hatchback or compact sedan can usually provide. Lucky Travels
                  therefore concentrates on one vehicle category: the Premium
                  Maruti Suzuki Ertiga.
                </p>
                <p>
                  The 6/7-seater category is suitable for many families and
                  small groups, but the final arrangement depends on the number
                  of passengers, child-seat requirements and luggage. Share
                  these details before confirmation so suitability can be
                  checked honestly.
                </p>
              </div>
            </div>
            <RouteImage
              href={routeUrl}
              src="/images/vehicle/middle-row.jpg"
              alt="Premium Ertiga middle-row seating for a family outstation cab from Bangalore"
              caption="A clean Premium Ertiga cabin for a directly planned family or small-group outstation journey."
            />
          </div>
        </section>

        <section
          className="bg-slate-100 px-5 py-12 sm:py-16"
          aria-labelledby="service-benefits-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="service-benefits-heading"
              eyebrow="DIRECT SERVICE, CLEAR COMMUNICATION"
            >
              What the Premium Ertiga Outstation Service Includes
            </SectionHeading>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceBenefits.map((benefit, index) => {
                const Icon = [ShieldCheck, Luggage, MapPinned][index % 3];
                return (
                  <article
                    key={benefit}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft"
                  >
                    <Icon
                      className="mt-1 shrink-0 text-purple-700"
                      size={23}
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-700">{benefit}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-7 leading-8 text-slate-700">
              {SITE.specialisationSlogan} Every confirmed journey uses a dedicated
              chauffeur-driven 6+1 Maruti Suzuki Ertiga; we do not operate
              hatchbacks or sedans. Ideal luggage planning is 4 to 5 passengers
              with up to 4 large trolley suitcases with the 3rd row folded, or 6
              passengers with compact cabin bags.
            </p>
            <p className="mt-5 leading-8 text-slate-700">
              Whether you know the brand as <strong>Go Bengaluru</strong>, type
              <strong> GoBengaluru</strong> as the website name or search for
              <strong> Go Bangalore</strong>, the service is operated by Lucky
              Travels and focuses only on Premium Ertiga journeys.
            </p>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="destinations-heading"
        >
          <SectionHeading
            id="destinations-heading"
            eyebrow="POPULAR JOURNEYS FROM BANGALORE"
          >
            Outstation Destinations and Route Planning
          </SectionHeading>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="space-y-5 leading-8 text-slate-700">
              <p>
                Enquiries can be discussed for Mysore, Coorg, Chikmagalur, Ooty,
                Wayanad, Tirupati and other destinations across Karnataka and
                South India. Each journey is direct door-to-door transport to a
                customer-chosen hotel, homestay or landmark, not a packaged tour
                or stay booking.
              </p>
              <p>
                Planning Mysore first? Read the dedicated
                <Link
                  href="/bangalore-to-mysore-cab"
                  className="ml-1 font-bold text-purple-700 underline"
                >
                  Bangalore to Mysore Premium Ertiga cab page
                </Link>
                . For the broader service summary, visit the
                <Link
                  href="/services/outstation-packages"
                  className="ml-1 font-bold text-purple-700 underline"
                >
                  outstation travel packages page
                </Link>
                .
              </p>
              <p>
                Share the complete itinerary rather than only the destination.
                This helps with pickup timing, live Google Maps route selection,
                rest breaks, overnight stays and an accurate trip-specific quote.
              </p>
            </div>
            <RouteImage
              href="/"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot and luggage space for an outstation taxi from Bangalore"
              caption="Passenger count and bag sizes must be shared before confirming the seating and luggage arrangement."
            />
          </div>
        </section>

        <section
          className="bg-[#090f2f] px-5 py-12 text-white sm:py-16"
          aria-labelledby="quote-heading"
        >
          <div className="page-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                id="quote-heading"
                eyebrow="TRANSPARENT TRIP-SPECIFIC TERMS"
                dark
              >
                Get a Direct Bangalore Outstation Taxi Quote
              </SectionHeading>
              <p className="mt-6 leading-8 text-white/80">
                Lucky Travels does not publish a fixed fare chart because every
                outstation journey has a different route and itinerary. Ask for
                the complete kilometre, toll, parking, waiting and driver
                allowance terms in writing before confirming the trip. The aim
                is clear communication with no hidden last-minute conditions.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-[#090f2f]">
              <h3 className="text-xl font-black">
                Include these details in your enquiry
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {confirmationDetails.map((detail) => (
                  <li key={detail} className="flex gap-3 leading-7">
                    <span
                      aria-hidden="true"
                      className="font-black text-purple-700"
                    >
                      ✓
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={outstationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white"
                >
                  <MessageCircle size={19} /> Send Details on WhatsApp
                </a>
                <a
                  href={emailUrl}
                  className="inline-flex items-center rounded-xl bg-slate-100 px-5 py-3 font-black text-[#090f2f]"
                >
                  Email {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="faq-heading"
        >
          <SectionHeading
            id="faq-heading"
            eyebrow="COMMON OUTSTATION PLANNING QUESTIONS"
          >
            Outstation Cabs from Bangalore FAQs
          </SectionHeading>
          <div className="mt-8 divide-y divide-slate-300 rounded-2xl border border-slate-200 bg-white px-6">
            {faqItems.map((item) => (
              <article key={item.question} className="py-6">
                <h3 className="text-lg font-black text-[#090f2f]">
                  {item.question}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <PopularOutstationRoutes />

        <section className="bg-slate-100 px-5 py-12 text-center sm:py-16">
          <div className="page-shell max-w-3xl">
            <h2 className="text-3xl font-black text-[#090f2f] sm:text-4xl">
              Plan Your Outstation Journey Directly
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-700">
              Call, WhatsApp or email Go Bengaluru by Lucky Travels with your
              route and travel details. You will receive a direct response after
              the itinerary and availability are reviewed.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-3 font-black text-white"
              >
                <Phone size={19} /> Call +91 {SITE.phone}
              </a>
              <a
                href={outstationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white"
              >
                <MessageCircle size={19} /> Get an Instant Quote
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-black text-[#090f2f]"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
