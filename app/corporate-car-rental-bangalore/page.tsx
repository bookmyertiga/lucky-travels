import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  FileCheck2,
  MapPinned,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/corporate-car-rental-bangalore`;
const corporateWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Lucky Travels, I would like to enquire about corporate car rental / B2B transport solutions.")}`;
const pageTitle =
  "Corporate Car Rental Bangalore | Premium 6+1 Ertiga Fleet & B2B Invoicing";
const pageDescription =
  "Reliable corporate car rental in Bangalore with dedicated 6+1 Ertiga fleet. GST-compliant billing, tech park executive shuttles & airport transfers across Whitefield, E-City, and ORR.";

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
    images: [
      {
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Dedicated Premium Ertiga for corporate car rental in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE.url}/images/services/hourly.jpg`],
  },
};

const useCases = [
  {
    icon: Users,
    title: "Client & Executive Delegation Transfers",
    text: "Give visiting clients and leadership teams spacious legroom, dual AC and a quiet cabin with a vetted commercial chauffeur.",
  },
  {
    icon: Building2,
    title: "Tech Park & Inter-Facility Transit",
    text: "Connect offices and business parks across Whitefield, Electronic City, Manyata and Bellandur/ORR with coordinated point-to-point travel.",
  },
  {
    icon: FileCheck2,
    title: "Corporate Full-Day Disposal",
    text: "Use transparent 8h/80km, 10h/100km and 12h/120km packages for meetings, site visits, events and executive schedules.",
  },
  {
    icon: MapPinned,
    title: "Dedicated Airport Executive Pickups",
    text: "Coordinate Kempegowda Airport T1 and T2 arrivals with live flight tracking and a prepared driver at the agreed meeting point.",
  },
];

const faqs = [
  {
    question: "Does Go Bengaluru provide GST invoices for corporate bookings?",
    answer:
      "Yes. Corporate bookings can be supported with 100% GST-compliant monthly invoicing and automated digital receipts, subject to the billing details supplied by the organisation before confirmation.",
  },
  {
    question: "Which tech corridors and business parks are covered?",
    answer:
      "Corporate transport can be planned across Whitefield and ITPL, Electronic City, Manyata Tech Park, Bellandur, Outer Ring Road and other Bangalore business locations, subject to route and vehicle availability.",
  },
  {
    question: "How early must corporate travel be booked?",
    answer:
      "A mandatory minimum of 6 to 12 hours advance notice is required for guaranteed corporate car allocation, chauffeur assignment and pristine vehicle preparation. Earlier notice is recommended for recurring schedules and executive arrivals.",
  },
  {
    question:
      "What packages are available for corporate site visits and disposal?",
    answer:
      "Transparent standard packages include 8 hours/80 kilometres, 10 hours/100 kilometres and 12 hours/120 kilometres. Share the itinerary for package suitability, extra usage terms, parking and toll details before confirmation.",
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

export default function CorporateCarRentalBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Service"],
    "@id": `${routeUrl}#service`,
    name: "Corporate Car Rental Bangalore by Go Bengaluru",
    serviceType: "B2B corporate car rental and executive transport",
    description: pageDescription,
    url: routeUrl,
    image: `${SITE.url}/images/services/hourly.jpg`,
    priceRange: "₹₹",
    telephone: "+919886814344",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      brand: { "@type": "Brand", name: SITE.brand },
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      "Whitefield",
      "Electronic City",
      "Manyata Tech Park",
      "Bellandur",
      "Outer Ring Road",
      "Bangalore",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate Ertiga Rental Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "8 hours / 80 kilometres corporate disposal",
          itemOffered: {
            "@type": "Service",
            name: "Corporate 8-hour Ertiga package",
          },
        },
        {
          "@type": "Offer",
          name: "10 hours / 100 kilometres corporate disposal",
          itemOffered: {
            "@type": "Service",
            name: "Corporate 10-hour Ertiga package",
          },
        },
        {
          "@type": "Offer",
          name: "12 hours / 120 kilometres corporate disposal",
          itemOffered: {
            "@type": "Service",
            name: "Corporate 12-hour Ertiga package",
          },
        },
      ],
    },
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
      <JsonLd data={[serviceSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        <section
          aria-labelledby="corporate-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-6 text-white"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm sm:leading-normal">
                B2B CORPORATE TRANSPORT SOLUTIONS
              </p>
              <h1
                id="corporate-heading"
                className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:mt-3 sm:text-4xl"
              >
                Corporate Car Rental Bangalore with a Dedicated Ertiga Fleet
              </h1>
              <p className="mt-2 max-w-3xl text-[13px] leading-5 text-white/85 sm:mt-3 sm:text-base sm:leading-7">
                Reliable chauffeur-driven corporate car rental for executive
                transfers, tech-park movement, full-day disposal and Kempegowda
                Airport pickups. Receive clear B2B terms and GST-compliant
                billing through direct coordination with Lucky Travels.
              </p>
              <p className="mt-1 text-sm font-black leading-5 text-amber-300 sm:mt-2 sm:text-lg sm:leading-6 lg:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-2 flex flex-wrap gap-3 sm:mt-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-black text-purple-800 lg:py-3 lg:text-sm"
                >
                  <Phone size={19} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={corporateWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 font-black text-white lg:py-3 lg:text-sm"
                >
                  <MessageCircle size={19} /> WhatsApp B2B Enquiry
                </a>
              </div>
              <p className="mt-1 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">
                Mandatory 6 to 12 hours advance notice is required for
                guaranteed corporate car allocation and vehicle preparation.
                Drivers use live Google Maps traffic at departure to bypass ORR,
                Silk Board and Hebbal bottlenecks.
              </p>
            </div>
            <figure className="mx-auto max-h-[300px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-soft">
              <Image
                src="/images/services/hourly.jpg"
                alt="Pristine white Premium Ertiga for corporate car rental in Bangalore"
                width={1536}
                height={1024}
                priority
                className="max-h-[230px] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
                A pristine white, chauffeur-driven 6+1 Premium Ertiga prepared
                for Bangalore corporate travel.
              </figcaption>
            </figure>
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pillFloat {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-8px); }
                }
                .corporate-scroll-pill {
                  animation: pillFloat 2s ease-in-out infinite;
                  will-change: transform;
                }
              ` }} />
              <a
                href="#corporate-use-cases"
                className="corporate-scroll-pill inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-purple-300 hover:text-purple-700"
              >
                <span>Explore Corporate Fleet &amp; B2B Packages Below</span>
                <span className="text-purple-600">↓</span>
              </a>
          </div>
        </section>

        <section
          id="corporate-use-cases"
          className="bg-white px-5 py-8 md:py-10"
        >
          <div className="page-shell">
            <SectionHeading
              id="corporate-use-cases-heading"
              eyebrow="CORPORATE USE CASES"
            >
              One Reliable Vehicle for Every Business Movement
            </SectionHeading>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft"
                >
                  <Icon
                    className="text-purple-700"
                    size={26}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-xl font-black text-[#090f2f]">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-shell py-8 md:py-10"
          aria-labelledby="fleet-heading"
        >
          <SectionHeading
            id="fleet-heading"
            eyebrow="DEDICATED CORPORATE FLEET"
          >
            Why Businesses Choose the Premium Ertiga Standard
          </SectionHeading>
          <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black">
                {SITE.specialisationSlogan}
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Every confirmed corporate booking receives a dedicated
                chauffeur-driven 6+1 Maruti Suzuki Ertiga from our pristine
                white fleet. We do not provide hatchbacks or sedans, and we do
                not downsize the vehicle after confirmation. The cabin offers
                practical legroom, dual AC and a quieter setting for executive
                movement.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li className="rounded-xl bg-slate-100 p-4 leading-7 text-slate-700">
                  Vetted, professional commercial chauffeurs with local route
                  mastery.
                </li>
                <li className="rounded-xl bg-slate-100 p-4 leading-7 text-slate-700">
                  Live Google Maps navigation at departure and throughout the
                  schedule.
                </li>
                <li className="rounded-xl bg-slate-100 p-4 leading-7 text-slate-700">
                  4-5 passengers with up to 4 large suitcases when the 3rd row
                  is folded.
                </li>
                <li className="rounded-xl bg-slate-100 p-4 leading-7 text-slate-700">
                  6 passengers with compact cabin bags for a practical fit.
                </li>
              </ul>
            </article>
            <aside className="flex h-full flex-col justify-between rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6">
              <div>
                <h3 className="text-xl font-black text-amber-950">
                  Guaranteed allocation policy
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Mandatory 6 to 12 hours advance notice is required for corporate
                  car allocation, chauffeur assignment and vehicle preparation.
                  Recurring employee movement, executive arrivals and event
                  transport benefit from earlier scheduling.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-100 p-4 leading-6 text-slate-700">
                  <strong className="block text-[#090f2f]">100% GST Invoicing</strong>
                  <span className="mt-1 block text-sm">Standard B2B tax invoices with digital trip sheets provided for every completed schedule.</span>
                </div>
                <div className="rounded-xl bg-slate-100 p-4 leading-6 text-slate-700">
                  <strong className="block text-[#090f2f]">Zero Peak Surge</strong>
                  <span className="mt-1 block text-sm">Transparent, flat commercial tariff with zero surge pricing during rain or peak traffic.</span>
                </div>
                <div className="rounded-xl bg-slate-100 p-4 leading-6 text-slate-700">
                  <strong className="block text-[#090f2f]">Chauffeur Punctuality</strong>
                  <span className="mt-1 block text-sm">Assigned vehicle and driver reporting on-site 15 minutes prior to scheduled dispatch.</span>
                </div>
                <div className="rounded-xl bg-slate-100 p-4 leading-6 text-slate-700">
                  <strong className="block text-[#090f2f]">Dedicated Desk Support</strong>
                  <span className="mt-1 block text-sm">Direct route coordination via phone &amp; WhatsApp with no bot delays or call centers.</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="bg-slate-100 px-5 py-8 md:py-10"
          aria-labelledby="commercial-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="commercial-heading"
              eyebrow="B2B COMMERCIAL ADVANTAGES"
            >
              Clear Corporate Terms, Built for Repeat Travel
            </SectionHeading>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black">GST-compliant invoicing</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Receive 100% GST-compliant monthly invoicing and automated
                  digital receipts for easier accounts reconciliation.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black">
                  Transparent flat-rate planning
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Discuss standard package coverage and trip terms upfront
                  without surge spikes during peak office hours.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black">
                  Professional local chauffeurs
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Vetted, punctual commercial chauffeurs bring local route
                  knowledge and direct coordination for changes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="page-shell py-8 md:py-10"
          aria-labelledby="packages-heading"
        >
          <SectionHeading
            id="packages-heading"
            eyebrow="CORPORATE DISPOSAL PACKAGES"
          >
            Standard Hours and Kilometre Options
          </SectionHeading>
          <p className="mt-6 max-w-3xl leading-8 text-slate-700">
            Corporate full-day disposal and site-visit packages are available at
            standard transparent rates. Share the itinerary, passenger count and
            reporting locations so the suitable package can be confirmed.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "8 hours / 80 kilometres",
                "Meetings, local site visits and compact office schedules.",
              ],
              [
                "10 hours / 100 kilometres",
                "Cross-city executive movement and multi-point itineraries.",
              ],
              [
                "12 hours / 120 kilometres",
                "Full-day disposal for events, delegations and extended site work.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <h3 className="text-xl font-black text-[#090f2f]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="bg-[#090f2f] px-5 py-8 text-white md:py-10"
          aria-labelledby="booking-heading"
        >
          <div className="page-shell grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                id="booking-heading"
                eyebrow="DIRECT B2B ENQUIRY"
                dark
              >
                Set Up Your Bangalore Corporate Transport
              </SectionHeading>
              <p className="mt-6 leading-8 text-white/75">
                Send your company name, GST billing details, travel dates,
                reporting times, employee or executive locations, airport
                terminal and expected usage. Lucky Travels will review
                availability and return clear trip-specific terms.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-[#090f2f]">
              <h3 className="text-xl font-black">Start the conversation</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Ask about executive transfers, tech-park shuttles, airport
                pickups or corporate disposal.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={corporateWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white"
                >
                  <MessageCircle size={18} /> WhatsApp Corporate Enquiry
                </a>
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#090f2f] px-5 py-3.5 font-black text-white"
                >
                  <Phone size={18} /> Call +91 {SITE.phone}
                </a>
                <Link
                  href="/car-rental-bangalore"
                  className="rounded-xl border border-slate-200 px-5 py-3.5 text-center font-black text-[#090f2f]"
                >
                  View Hourly Rental Packages
                </Link>
                <Link
                  href="/airport-taxi-bangalore"
                  className="rounded-xl border border-slate-200 px-5 py-3.5 text-center font-black text-[#090f2f]"
                >
                  View Airport Transfer Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-shell py-8 md:py-10"
          aria-labelledby="faq-heading"
        >
          <SectionHeading id="faq-heading" eyebrow="CORPORATE CAR RENTAL FAQ">
            Answers for Procurement and Admin Teams
          </SectionHeading>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-black text-[#090f2f]">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
