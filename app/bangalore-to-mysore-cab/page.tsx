import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/bangalore-to-mysore-cab`;
const quoteMessage =
  "Hello Lucky Travels, I need a Bangalore to Mysore cab. Please check availability.";
const detailedQuoteMessage = `Hello Lucky Travels, I need a Bangalore to Mysore cab.
Travel date:
Pickup time:
Bengaluru pickup:
Mysuru drop:
One-way/return/multi-day:
Passengers:
Large bags:
Cabin bags:
Planned stops or special requirements:`;

export const metadata: Metadata = {
  title: "Bangalore to Mysore Cab | Premium Ertiga",
  description:
    "Request a Bangalore to Mysore cab quote from Lucky Travels. Travel in a clean AC Premium Ertiga with direct support and clear trip terms.",
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bangalore to Mysore Cab | Premium Ertiga",
    description:
      "Request a Bangalore to Mysore cab quote from Lucky Travels. Travel in a clean AC Premium Ertiga with direct support and clear trip terms.",
    url: routeUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/outstation.jpg`,
        width: 1536,
        height: 1024,
        alt: "Lucky Travels Premium Ertiga for a Bangalore to Mysore cab journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangalore to Mysore Cab | Premium Ertiga",
    description:
      "Request a Bangalore to Mysore cab quote from Lucky Travels. Travel in a clean AC Premium Ertiga with direct support and clear trip terms.",
    images: [`${SITE.url}/images/services/outstation.jpg`],
  },
};

const faqItems = [
  {
    question: "How much luggage can we carry in the Premium Ertiga?",
    answer:
      "It depends on the passenger count, seats required and the number and size of bags. When more passenger seats are occupied, the available luggage arrangement becomes more limited. Send the approximate bag count and sizes before confirmation so the suitability can be checked honestly.",
  },
  {
    question: "Can I request night travel from Bangalore to Mysore?",
    answer:
      "Night or early-morning travel may be discussed, subject to driver and vehicle availability, safe scheduling and route confirmation. Share the exact pickup time when sending the enquiry.",
  },
  {
    question: "Can we add customised sightseeing or food halts?",
    answer:
      "Yes, suitable halts can be discussed before confirmation. Additional stops can affect the route, kilometres, waiting time and total trip terms, so include every planned halt in the original itinerary.",
  },
];

const enquiryLinks = [
  {
    href: `tel:+91${SITE.phone}`,
    label: `Call +91 ${SITE.phone}`,
    icon: Phone,
  },
  {
    href: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(detailedQuoteMessage)}`,
    label: "Send Details on WhatsApp",
    icon: MessageCircle,
  },
  {
    href: `mailto:${SITE.email}?subject=Bangalore%20to%20Mysore%20Cab%20Enquiry`,
    label: `Email ${SITE.email}`,
    icon: null,
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  width,
  height,
  className = "",
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <figure
      className={`mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft ${className}`}
    >
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

export default function BangaloreToMysoreCabPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bangalore to Mysore Premium Ertiga Cab",
    serviceType: "Bangalore to Mysore cab service",
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Mysuru" },
    ],
    url: routeUrl,
    description:
      "Direct Premium Ertiga enquiries for one-way, return and multi-day Bangalore to Mysore journeys.",
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
        name: "Bangalore to Mysore Cab",
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
      <main className="overflow-x-hidden [&>section]:pb-32 lg:[&>section]:pb-40">
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
                href="/services/outstation-packages"
                className="font-bold text-purple-700 hover:underline"
              >
                Outstation Packages
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Bangalore to Mysore Cab</li>
          </ol>
        </nav>

        <section
          aria-labelledby="mysore-cab-heading"
          className="bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[.18em] text-amber-400">
                Bangalore to Mysore Outstation Travel
              </p>
              <h1
                id="mysore-cab-heading"
                className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-5xl lg:text-[3.25rem]"
              >
                Bangalore to Mysore Cab Service in a Premium Ertiga
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                Plan a one-way drop, return journey or Mysore family trip with
                Go Bengaluru by Lucky Travels. Send an enquiry at any time and
                travel in a clean, air-conditioned Premium Ertiga with 6+1
                seating, subject to passenger, luggage and vehicle availability
                confirmation.
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
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(quoteMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
                >
                  <MessageCircle size={19} /> Request a Quote on WhatsApp
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/70">
                24/7 enquiries. Every journey is subject to direct confirmation
                of the date, route, vehicle, driver and trip terms.
              </p>
            </div>
            <RouteImage
              href="/"
              src="/images/services/outstation.jpg"
              alt="Lucky Travels Premium Ertiga for a Bangalore to Mysore cab journey"
              caption="Premium Ertiga service for a directly planned Bangalore to Mysore journey."
              width={1536}
              height={1024}
              className="lg:-translate-y-8"
            />
          </div>
        </section>

        <section
          aria-labelledby="route-overview-heading"
          className="page-shell py-14 sm:py-20"
        >
          <SectionHeading
            id="route-overview-heading"
            eyebrow="Route and journey planning"
          >
            Bangalore to Mysore Route Overview
          </SectionHeading>
          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            Bangalore and Mysore, officially Bengaluru and Mysuru, are connected
            by the access-controlled Bengaluru-Mysuru Expressway corridor along
            NH-275. The expressway corridor covers approximately 118 km, while
            the complete doorstep journey is usually longer because it includes
            the pickup, approach roads, city entry and final drop location.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="font-black">Practical planning distance</dt>
              <dd className="mt-2 leading-7 text-slate-600">
                Roughly 140-150 km, depending on the exact Bengaluru pickup and
                Mysuru drop locations.
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="font-black">Approximate doorstep travel time</dt>
              <dd className="mt-2 leading-7 text-slate-600">
                Plan around 2.5-3.5 hours. Traffic, weather, breaks and the city
                locations at either end can change the actual duration.
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="font-black">Main highway</dt>
              <dd className="mt-2 leading-7 text-slate-600">
                Bengaluru-Mysuru Expressway corridor on NH-275.
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="font-black">Journey options</dt>
              <dd className="mt-2 leading-7 text-slate-600">
                One-way drop, same-day return and multi-day Mysore travel,
                subject to availability and itinerary confirmation.
              </dd>
            </div>
          </dl>
          <p className="mt-8 max-w-4xl leading-8 text-slate-700">
            Share the complete itinerary before confirmation. A pickup from
            Whitefield, Electronic City or another outer Bengaluru locality will
            require different planning from a central Bengaluru pickup. The same
            applies to a Mysuru city drop, hotel drop or sightseeing plan with
            additional stops.
          </p>
          <div className="mt-10 w-full">
            <RouteImage
              href="/bangalore-to-mysore-cab"
              src="/images/vehicle/front-seats.jpg"
              alt="Premium Ertiga front cabin for a Bengaluru to Mysuru journey"
              caption="A comfortable, air-conditioned cabin helps with planning a multi-hour road journey."
              width={1536}
              height={1024}
            />
          </div>
        </section>

        <section
          aria-labelledby="journey-options-heading"
          className="bg-white px-5 py-14 sm:py-20"
        >
          <div className="page-shell">
            <SectionHeading
              id="journey-options-heading"
              eyebrow="Choose the arrangement that suits your plan"
            >
              Bangalore to Mysore Cab Options
            </SectionHeading>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                [
                  "One-way Bangalore to Mysore drop",
                  "Suitable when you need a direct pickup in Bengaluru and a confirmed drop in Mysuru. Share any planned stop, luggage requirement and preferred pickup time before the journey is accepted.",
                ],
                [
                  "Same-day Mysore return trip",
                  "A same-day return can suit a meeting, family visit, event or a carefully planned sightseeing schedule. The itinerary must allow realistic time for the onward journey, stops, local travel and safe return to Bengaluru.",
                ],
                [
                  "Multi-day Mysore family journey",
                  "For a slower holiday, share the travel dates, accommodation area, local sightseeing plan and return schedule. Trip-specific terms are confirmed after the complete itinerary is reviewed.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="premium-ertiga-heading"
          className="page-shell py-14 sm:py-20"
        >
          <SectionHeading
            id="premium-ertiga-heading"
            eyebrow="One dedicated vehicle category"
          >
            Why Choose a Premium Ertiga for Bangalore to Mysore?
          </SectionHeading>
          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            A longer road journey can feel very different from a short city
            ride. Families and small groups often need a better balance of
            seating, air-conditioned comfort and practical luggage planning than
            a compact sedan or hatchback can provide. Lucky Travels therefore
            concentrates on one vehicle category: the Premium Maruti Suzuki
            Ertiga.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Flexible 6+1 seating, including the driver, for suitable family and small-group journeys.",
              "Air-conditioned cabin and practical seating for a multi-hour road journey.",
              "Direct discussion of passengers, luggage and seats before the booking is confirmed.",
              "Vehicle cleaning before confirmed journeys and assistance with luggage.",
              "Punctual pickup planning, direct communication and route coordination.",
              "Patient assistance for older travellers and a family-friendly travel environment.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl bg-white p-4 font-semibold leading-7 shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 w-full">
            <RouteImage
              href="/bangalore-to-mysore-cab"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot space for luggage planning on a Mysore trip"
              caption="Share passenger and bag details before confirmation so seating and luggage suitability can be assessed."
              width={1536}
              height={1024}
            />
          </div>
          <aside
            className="mt-8 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6"
            aria-labelledby="luggage-note-heading"
          >
            <h3 id="luggage-note-heading" className="text-xl font-black">
              Important luggage note
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Luggage capacity is not unlimited. The suitable arrangement
              depends on the number of passengers, seats required, large
              suitcases, cabin bags and other items. Share the approximate bag
              count and sizes before confirmation so Lucky Travels can assess
              the available space honestly.
            </p>
          </aside>
          <p className="mt-7 leading-7 text-slate-700">
            Read the{" "}
            <Link
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              className="font-bold text-purple-700 underline"
            >
              Lucky Travels founder story
            </Link>{" "}
            to understand why Bharath K S chose a Premium Ertiga-only service.
          </p>
        </section>

        <section
          aria-labelledby="why-us-heading"
          className="bg-slate-100 px-5 py-14 sm:py-20"
        >
          <div className="page-shell">
            <SectionHeading
              id="why-us-heading"
              eyebrow="Direct owner-driver service"
            >
              Why Choose Go Bengaluru for a Bangalore to Mysore Taxi?
            </SectionHeading>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                [
                  "Direct communication",
                  "Discuss the pickup, drop, passenger count, bags, planned stops and timing directly before confirmation. You receive the assigned driver and vehicle information for the confirmed trip.",
                ],
                [
                  "Doorstep pickup planning",
                  "Pickup can be discussed for Bengaluru homes, hotels, offices and other suitable locations, subject to route access and availability confirmation.",
                ],
                [
                  "Clear trip terms",
                  "The applicable journey basis and known trip-related terms are explained before confirmation. Where a kilometre rate applies, the rate and relevant conditions are stated clearly. Tolls, parking, waiting, driver allowance or additional-stop terms should be agreed in advance.",
                ],
                [
                  "A known vehicle category",
                  "Lucky Travels specialises only in the Premium Ertiga rather than advertising every hatchback, sedan, SUV, tempo traveller and bus category. This keeps the requested vehicle category clear.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="attractions-heading"
          className="page-shell py-14 sm:py-20"
        >
          <SectionHeading
            id="attractions-heading"
            eyebrow="Plan stops before confirmation"
          >
            Top Mysore Attractions for Your Trip
          </SectionHeading>
          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            If sightseeing is part of your journey, share the preferred places
            and available time before confirmation. Opening hours, entry rules,
            traffic and local conditions can change, so check the current
            official visitor information before travelling.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              [
                "Mysore Palace",
                "Mysuru Palace, also called Amba Vilas Palace, is one of the city’s best-known heritage landmarks. Allow enough time for entry, security checks and the visit itself.",
                "https://mysore.nic.in/en/tourist-place/mysuru-palace/",
                "Check official Mysuru Palace information",
              ],
              [
                "Chamundi Hill",
                "Chamundi Hill is outside the central palace area and needs separate driving time. Include it in the itinerary before confirmation rather than adding it after the trip has started.",
                "https://mysore.nic.in/en/tourist-place/chamunid-hill/",
                "Check official Chamundi Hill information",
              ],
              [
                "Mysuru Zoo",
                "Mysuru Zoo can suit families who have allowed sufficient time in the day. Check current opening information and plan the drop and pickup point before the visit.",
                "",
                "",
              ],
              [
                "Optional Srirangapatna stop",
                "Srirangapatna can be discussed as a planned stop on a suitable itinerary. An additional stop affects the route, distance and travel time, so include it when requesting the quote.",
                "",
                "",
              ],
            ].map(([title, text, href, label]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-bold text-purple-700 underline"
                  >
                    {label}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="quote-heading"
          className="bg-[#080d2b] px-5 py-14 text-white sm:py-20"
        >
          <div className="page-shell">
            <SectionHeading
              id="quote-heading"
              eyebrow="Direct enquiry with Lucky Travels"
              dark
            >
              Request Your Bangalore to Mysore Cab Quote
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-8 text-white/75">
              Send the complete journey details once so availability and trip
              terms can be checked accurately. There is no automated website
              booking or online payment requirement.
            </p>
            <h3 className="mt-8 text-xl font-black">
              Include these details in your enquiry
            </h3>
            <ul className="mt-4 grid gap-2 text-white/80 sm:grid-cols-2">
              {[
                "Travel date and preferred pickup time",
                "Exact Bengaluru pickup location",
                "Exact Mysuru drop location",
                "One-way, same-day return or multi-day requirement",
                "Number of adults and children",
                "Number and approximate size of large and cabin bags",
                "Planned sightseeing, meal or additional stops",
                "Return date and time, where applicable",
                "Elderly assistance or another important travel requirement",
              ].map((item) => (
                <li key={item} className="list-inside list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-white/80">
              Hello Lucky Travels, I need a Bangalore to Mysore cab.
              <br />
              Travel date:
              <br />
              Pickup time:
              <br />
              Bengaluru pickup:
              <br />
              Mysuru drop:
              <br />
              One-way/return/multi-day:
              <br />
              Passengers:
              <br />
              Large bags:
              <br />
              Cabin bags:
              <br />
              Planned stops or special requirements:
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              {enquiryLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={
                    href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#090f2f]"
                >
                  {Icon && <Icon size={18} />}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="page-shell py-14 sm:py-20"
        >
          <SectionHeading id="faq-heading" eyebrow="Common planning questions">
            Bangalore to Mysore Cab FAQs
          </SectionHeading>
          <div className="mt-8 divide-y rounded-2xl border border-slate-200 bg-white px-5">
            {faqItems.map((item) => (
              <article key={item.question} className="py-5">
                <h3 className="text-lg font-black">{item.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="final-cta-heading"
          className="bg-amber-400 px-5 py-14 sm:py-16"
        >
          <div className="page-shell">
            <h2
              id="final-cta-heading"
              className="text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl"
            >
              Plan Your Bangalore to Mysore Journey Directly
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-[#090f2f]/75">
              Tell Lucky Travels when and where you are travelling, who is
              travelling with you and what luggage or stops you need. Bharath K
              S will check the itinerary and respond with availability and the
              applicable trip terms.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-[#080d2b] px-5 py-3.5 font-black text-white"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(quoteMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
              >
                <MessageCircle size={18} /> Request on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
