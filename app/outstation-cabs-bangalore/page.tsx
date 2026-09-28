import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Calendar,
  Compass,
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
const outstationWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  `Hello Lucky Travels, I need an outstation cab from Bangalore.\n\nTravel Date:\nPickup Location & Time in Bangalore:\nDestination(s):\nTrip Type (One-way / Same-day return / Round trip / Multi-day):\nReturn Date (if applicable):\nPassenger Count (Adults & Children):\nSuitcases & Cabin Bags:\nPlanned Stops or Sightseeing:`
)}`;
const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Outstation Cab from Bangalore Enquiry")}`;

const pageTitle =
  "Outstation Cabs from Bangalore with Driver | 6+1 Ertiga Highway Hire - Go Bengaluru";
const pageDescription =
  "Chauffeur-driven outstation cabs from Bangalore & Bengaluru. Punctual one-way drops, same-day returns & multi-day holiday road trips in brand new 2026 factory CNG Ertigas. Innova-like comfort at sedan rates. Lock your quote on WhatsApp.";

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

const journeyOptions = [
  {
    title: "One-Way Outstation Drops",
    tag: "Direct Point-to-Point",
    text: "Punctual one-way highway drops from Bengaluru to Mysore, Coorg, Ooty, Chikmagalur, Tirupati, or any South India destination with zero return obligations.",
  },
  {
    title: "Same-Day Return Trips",
    tag: "Express Day Outing",
    text: "Ideal for swift day visits, temple poojas in Srirangapatna or Tirupati, corporate meetings, and family sightseeing with continuous driver availability.",
  },
  {
    title: "Round-Trip Vacations",
    tag: "Family Holiday Circuits",
    text: "Comfortable multi-day road trips across Karnataka and neighbouring states. Chauffeur remains dedicated to your group for local sightseeing and scenic detours.",
  },
  {
    title: "Multi-Day Pilgrimage & Heritage Tours",
    tag: "Custom Devotional Tours",
    text: "Tailored sacred circuits including Paschima Vahini, Belur-Halebidu, Kukke Subramanya, Dharmasthala, and Tirumala with considerate elderly assistance.",
  },
];

const serviceBenefits = [
  "Spotless, sanitized brand-new 2026 Maruti Suzuki Ertiga dedicated strictly to your family.",
  "100% factory-fitted S-CNG technology ensuring whisper-quiet cruising and smooth expressway stability.",
  "Modern 2nd-row console AC vents located near the knees for gentle, draft-free highway climate control.",
  "Dedicated 6+1 fleet with guaranteed vehicle allocation—zero sudden downsizing to small hatchbacks or sedans.",
  "Experienced highway chauffeurs monitoring real-time Google Maps traffic to bypass highway bottlenecks.",
  "Direct communication with owner-driver Bharath K S or assigned trusted fellow chauffeurs.",
  "Modular boot capacity: easily fits up to 4 large check-in suitcases when 3rd row is folded.",
  "Elderly and family assistance with baggage lifting, gentle hill driving, and effortless low step-in boarding.",
  "Strict Price-Lock Guarantee: confirmed WhatsApp quotes remain locked with zero unexpected driver bata.",
];

const confirmationDetails = [
  "Exact pickup point, destination, date and reporting time",
  "One-way, same-day return or multi-day itinerary",
  "Adults, children and seating requirements",
  "Number and approximate size of suitcases and cabin bags",
  "Sightseeing, meal, hotel or other planned stops",
  "Agreed kilometre terms, tolls, parking, and state permits where applicable",
];

const faqItems = [
  {
    question: "Can I book a one-way or round-trip outstation cab from Bangalore?",
    answer:
      "Yes. Go Bengaluru by Lucky Travels offers both direct one-way outstation drops and multi-day round-trip family vacation packages in clean, brand-new 2026 Ertigas. We tailor each quote to your exact route, dates, and stops.",
  },
  {
    question: "Why choose a 6+1 Ertiga over a standard sedan cab for outstation highway trips?",
    answer:
      "A long 4- to 8-hour highway road trip in a standard 4-seater sedan (like a Dzire or Etios) quickly becomes exhausting and claustrophobic, especially with luggage eating into cabin space. Our 6+1 Ertiga provides Innova-grade 3-row comfort, generous legroom, second-row console knee-level AC vents, and a deep modular boot for barely a fraction more than basic sedan cab rates.",
  },
  {
    question: "How does the WhatsApp Price-Lock Guarantee work for outstation bookings?",
    answer:
      "We avoid algorithmic surge pricing and confusing rate cards. Once you share your travel dates, pickup location, destination, and itinerary on WhatsApp, you receive an all-inclusive transparent quote. What is agreed upon on WhatsApp remains strictly locked with zero surprise driver bata or hidden fees.",
  },
  {
    question: "How much luggage can a 2026 Ertiga accommodate for outstation travel?",
    answer:
      "For optimal highway comfort, we recommend 4 to 5 passengers with up to 4 large check-in suitcases and cabin bags when the 3rd row is folded flat, or 6 passengers with compact cabin trolley bags. Share your luggage count in advance so we can assess the arrangement honestly.",
  },
  {
    question: "Can we add sightseeing, meal breaks or customized stops along the route?",
    answer:
      "Yes. Every outstation itinerary is discussed prior to confirmation. Suitable highway restaurant halts, scenic viewpoints, and heritage sightseeing detours can be included seamlessly in your schedule.",
  },
  {
    question: "Are toll fees and state permits included in the outstation quote?",
    answer:
      "Highway tolls and interstate permits (for trips to Ooty in Tamil Nadu, Wayanad in Kerala, or Tirupati in Andhra Pradesh) are handled transparently. When we quote on WhatsApp, we clarify whether tolls and permits are bundled or billed at actual cost.",
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  width = 1536,
  height = 1024,
  loading = "lazy",
  featured = false,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  featured?: boolean;
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
        className={`mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}
      >
        {children}
      </h2>
    </>
  );
}

export default function OutstationCabsBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outstation Cabs from Bangalore in a Dedicated 6+1 Ertiga",
    alternateName: [
      "Go Bengaluru Outstation Cabs",
      "GoBengaluru Outstation Taxi",
      "Go Bangalore Outstation Cab Service",
      "Bangalore Outstation Taxi Hire",
      "Chauffeur-Driven Outstation Ertiga Bengaluru",
    ],
    serviceType: "Outstation Chauffeur-Driven Taxi Service from Bangalore",
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
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
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
      ...faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ],
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">

        {/* 1. HERO SECTION WITH WHITE ERTIGA SHOWCASE */}
        <section
          aria-labelledby="outstation-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm">
                CHAUFFEUR-DRIVEN HIGHWAY MOBILITY • BANGALORE &amp; BENGALURU
              </p>
              <h1
                id="outstation-heading"
                className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]"
              >
                Outstation Cabs from Bangalore in a Dedicated 6+1 Ertiga
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Plan a punctual one-way drop, same-day return, or multi-day family road trip from <strong>Bangalore and Bengaluru</strong>. Travel in a brand-new <strong>2026 factory-fitted CNG 6+1 Maruti Suzuki Ertiga</strong> and experience <em>Innova-class 3-row comfort and 4-suitcase luggage room for barely more than basic sedan cab rates</em>, with verified highway owner-drivers and trip-locked WhatsApp quotes.
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-amber-300 sm:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-purple-800 transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={outstationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock Outstation Quote on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">
                24/7 enquiries. Minimum 6 to 12 hours advance booking is required for guaranteed vehicle dispatch, chauffeur allocation, and sanitization.
              </p>
              <a
                href="#journey-options"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-xs font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                Explore Outstation Travel Options Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>
            <RouteImage
              href="/"
              src="/images/services/outstation.jpg"
              alt="Go Bengaluru Premium Ertiga for outstation cabs from Bangalore"
              caption="Spotless 2026 factory-fitted CNG Ertiga dedicated to your outstation highway itinerary."
              loading="eager"
              featured
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#journey-options"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-purple-700"
            >
              Explore Outstation Travel Options Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow" />
            </a>
          </div>
        </section>

        {/* 2. SEDAN TO ERTIGA OUTSTATION BRIDGE */}
        <section className="bg-slate-50 px-5 pt-14 pb-8 sm:pt-16 sm:pb-10 border-b border-slate-200/80">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                HIGHWAY UPGRADE • OUTSTATION CABS FROM BANGALORE &amp; BENGALURU
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Searching for an Outstation Sedan Cab from Bangalore? Get Innova-Grade Comfort for Barely More
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Taking a 4-seater sedan (such as a Dzire or Etios) for a 4- to 8-hour highway road trip frequently results in cramped knees, shoulder exhaustion, and luggage squeezed onto passenger seats due to small CNG trunks. Our brand-new 2026 factory-fitted CNG 6+1 Ertiga fleet gives your family <strong>Innova-grade 3-row comfort, 4-suitcase luggage room, and knee-level console AC for just a minor increment over ordinary sedan rates</strong>.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🧳</span>
                <h3 className="text-base font-bold text-[#090f2f]">4 Suitcases Fit Flat</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Fold down the 3rd row to store up to <strong>4 large trolley bags plus duffels</strong> with zero passenger cabin squeeze.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">❄️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Console Knee-Level AC</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our updated 2026 Ertigas feature center-console AC vents near the knees, delivering continuous, draft-free cooling on long highway stretches.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🧓</span>
                <h3 className="text-base font-bold text-[#090f2f]">Senior-Friendly Step-In</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Ergonomic seat height eliminates knee strain for senior citizens and grandparents during sightseeing halts and temple visits.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🛡️</span>
                <h3 className="text-base font-bold text-[#090f2f]">WhatsApp Price-Lock</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Zero surprise driver bata or unexpected night charges. The quote confirmed on WhatsApp remains <strong>strictly fixed</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. JOURNEY OPTIONS & PRICE-LOCK RULES */}
        <section id="journey-options" className="bg-white px-5 pb-10 pt-10 sm:pt-14">
          <div className="page-shell">
            <SectionHeading
              id="journey-options-heading"
              eyebrow="ONE-WAY, ROUND-TRIP AND MULTI-DAY TRAVEL"
            >
              Bangalore Outstation Cab Options &amp; Booking Rules
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {journeyOptions.map((option) => (
                <article
                  key={option.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300"
                >
                  <div>
                    <span className="inline-block rounded-md bg-purple-100 px-2.5 py-0.5 text-[11px] font-bold text-purple-900 mb-2">
                      {option.tag}
                    </span>
                    <h3 className="text-lg font-black text-[#090f2f]">
                      {option.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">{option.text}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Lucky Travels, I would like to lock a quote for an outstation ${option.title} from Bangalore.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-purple-800 hover:text-purple-950"
                    >
                      <span>Inquire on WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Price-Lock Policy Highlight Box */}
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:p-7">
              <div className="inline-block rounded-md bg-amber-200/70 px-2.5 py-0.5 text-xs font-black text-amber-900 mb-2">
                🛡️ WhatsApp Outstation Price-Lock Policy
              </div>
              <h3 className="text-xl font-black text-amber-950">Transparent Quotes with Zero Hidden Driver Bata</h3>
              <p className="mt-2 text-sm leading-6 text-amber-900">
                We do not post misleading or fluctuating rate tables. Send your pickup address, destination, travel dates, and passenger count on WhatsApp to receive a <strong>direct, all-inclusive outstation quote</strong>.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                  <strong className="text-amber-950 block mb-0.5">Fixed Fare Assurance</strong>
                  The quote agreed on WhatsApp remains completely fixed for your confirmed route. No surprise driver charges or sudden post-trip additions.
                </div>
                <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                  <strong className="text-amber-950 block mb-0.5">Tolls &amp; State Permits</strong>
                  Expressway toll charges and interstate permits (for Tamil Nadu, Kerala, or Andhra Pradesh) are clarified upfront in writing.
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-amber-800">
                *Looking for local city rentals or airport transfers? Explore our <Link href="/car-rental-bangalore" className="font-bold underline text-amber-950">Car Rental Bangalore</Link> or <Link href="/airport-taxi-bangalore" className="font-bold underline text-amber-950">Bangalore Airport Taxi</Link> portals.
              </p>
            </div>
          </div>
        </section>

        {/* 4. FLEET SPECIALIZATION SECTION WITH MIDDLE-ROW SEATING */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="ertiga-comfort-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:items-center">
            <div>
              <SectionHeading
                id="ertiga-comfort-heading"
                eyebrow="COMFORT AND CONSISTENCY"
              >
                Why We Operate Only Brand-New 2026 Ertigas (Factory CNG) for Outstation Travel
              </SectionHeading>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  A longer highway journey demands superior seating ergonomics, continuous climate control, and generous luggage planning that a cramped hatchback or compact sedan cannot deliver. Lucky Travels concentrates exclusively on brand-new, factory-fitted CNG 6+1 Maruti Suzuki Ertigas.
                </p>
                <p>
                  Specialising in one unified fleet category ensures that every outstation car dispatched is immaculate, odor-free, fully sanitized, and mechanically sound with verified highway tyres and smooth progressive suspension. You receive guaranteed vehicle allocation with zero risk of sudden downsizing.
                </p>
                <p>
                  Our chauffeurs monitor real-time Google Maps highway traffic before departure and throughout the route, planning suitable restaurant halts, fuel breaks, and scenic detours comfortably.
                </p>
                <p className="font-black text-amber-600">
                  {SITE.specialisationSlogan}
                </p>
              </div>
            </div>
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Premium Ertiga middle-row seating for a family outstation cab from Bangalore"
              caption="Pristine Ertiga middle-row seating with dedicated 2nd-row console knee-level AC."
            />
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:p-7">
            <h3 className="font-black text-amber-900">Practical Luggage &amp; Seating Guidance</h3>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              For optimal outstation comfort, we recommend <strong>4 to 5 passengers with up to 4 large check-in suitcases</strong> when the 3rd row is folded flat, or <strong>6 passengers with compact cabin trolley bags</strong>. Please share your passenger and baggage count when inquiring on WhatsApp so we can prepare the vehicle arrangement honestly.
            </p>
          </div>
        </section>

        {/* 5. SERVICE INCLUSIONS */}
        <section
          className="bg-slate-100 px-5 py-10 sm:py-14"
          aria-labelledby="service-benefits-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="service-benefits-heading"
              eyebrow="DIRECT BOOKING, CLEAR COMMUNICATION"
            >
              What Our Bangalore Outstation Taxi Service Includes
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceBenefits.map((benefit, index) => {
                const Icon = [ShieldCheck, Luggage, MapPinned, Compass, Calendar, ShieldCheck][index % 6];
                return (
                  <article
                    key={benefit}
                    className="flex gap-3.5 rounded-2xl bg-white p-5 shadow-soft"
                  >
                    <Icon
                      className="mt-1 shrink-0 text-purple-700"
                      size={22}
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-600 sm:text-sm">
              Go Bengaluru is the online service brand of Lucky Travels at Gobengaluru.in. Whether you search for <strong>outstation cabs from Bangalore</strong>, <strong>Bengaluru outstation taxi booking</strong>, or <strong>Ertiga outstation cab hire</strong>, our service focuses exclusively on premium 6+1 Ertiga journeys tailored to your highway travel schedule.
            </p>
          </div>
        </section>

        {/* 6. POPULAR DESTINATIONS & CORRIDOR DIRECTORY */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="destinations-heading"
        >
          <SectionHeading
            id="destinations-heading"
            eyebrow="POPULAR JOURNEYS FROM BANGALORE"
          >
            Outstation Destinations &amp; Route Planning
          </SectionHeading>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              <p>
                We operate direct, dedicated journeys to Mysore, Srirangapatna, Coorg, Chikmagalur, Ooty, Wayanad, Tirupati, and other heritage destinations across Karnataka and South India. Each journey is private door-to-door transport directly to your hotel, homestay, or temple.
              </p>
              <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-4">
                <h4 className="font-bold text-[#090f2f] text-sm sm:text-base">Explore Dedicated Corridor Pages:</h4>
                <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
                  <Link href="/bangalore-to-mysore-cab" className="rounded-lg bg-white px-3 py-1.5 font-bold text-purple-900 border border-purple-200 hover:bg-purple-100 transition">
                    Bangalore to Mysore Cab (90-Min Expressway) →
                  </Link>
                  <Link href="/bangalore-to-srirangapatna-pitru-paksha-cab" className="rounded-lg bg-white px-3 py-1.5 font-bold text-amber-900 border border-amber-200 hover:bg-amber-100 transition">
                    Bangalore to Srirangapatna (Pilgrimage Rites) →
                  </Link>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Share your complete itinerary—including sightseeing stops, hotel halts, and return timings—to receive a precise, trip-locked quote with optimal highway routing.
              </p>
            </div>
            <RouteImage
              href="/"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot and luggage space for an outstation taxi from Bangalore"
              caption="Modular boot capacity easily fits 4 large international check-in suitcases when 3rd row is folded."
            />
          </div>
        </section>

        {/* 7. TRANSPARENT CONFIRMATION TERMS */}
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
              <p className="mt-4 leading-7 text-white/80 text-sm sm:text-base">
                Lucky Travels does not publish a rigid fare chart because every outstation journey has a unique route and itinerary. Receive all kilometre terms, toll charges, interstate permits, and driver allowance in writing before confirming the trip.
              </p>
              <p className="mt-3 leading-7 text-white/70 text-xs sm:text-sm">
                Clear upfront communication with zero surprise conditions at the end of your holiday.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 sm:p-6 text-[#090f2f]">
              <h3 className="text-lg sm:text-xl font-black">
                Include these details in your enquiry
              </h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 text-xs sm:text-sm">
                {confirmationDetails.map((detail) => (
                  <li key={detail} className="flex gap-2.5 leading-relaxed text-slate-700">
                    <span
                      aria-hidden="true"
                      className="font-black text-purple-700 shrink-0"
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
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-emerald-400 transition"
                >
                  <MessageCircle size={18} /> Send Details on WhatsApp
                </a>
                <a
                  href={emailUrl}
                  className="inline-flex items-center rounded-xl bg-slate-100 px-5 py-3 text-xs sm:text-sm font-black text-[#090f2f] hover:bg-slate-200 transition"
                >
                  Email {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. POPULAR OUTSTATION ROUTES COMPONENT */}
        <PopularOutstationRoutes />

        {/* 9. FAQS SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="faq-heading"
        >
          <SectionHeading
            id="faq-heading"
            eyebrow="COMMON OUTSTATION PLANNING QUESTIONS"
          >
            Outstation Cabs from Bangalore FAQs
          </SectionHeading>
          <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
            {faqItems.map((item) => (
              <article key={item.question} className="py-5 sm:py-6">
                <h3 className="text-base sm:text-lg font-black text-[#090f2f]">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 10. BOTTOM CTA SECTION */}
        <section className="bg-slate-100 px-5 py-8 text-center sm:py-10">
          <div className="page-shell max-w-3xl">
            <h2 className="mb-2 text-2xl font-black text-[#090f2f] sm:text-3xl">
              Plan Your Outstation Journey Directly Today
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-xs sm:text-sm leading-6 text-slate-600">
              Call, WhatsApp or email Go Bengaluru by Lucky Travels with your route and travel details. Receive an immediate, fixed quote with zero unexpected driver fees.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-purple-900 transition"
              >
                <Phone size={17} /> Call +91 {SITE.phone}
              </a>
              <a
                href={outstationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-emerald-400 transition"
              >
                <MessageCircle size={17} /> Lock Quote on WhatsApp
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-black text-[#090f2f] border border-slate-200 hover:bg-slate-50 transition"
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