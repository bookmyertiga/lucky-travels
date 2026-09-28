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
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/car-rental-bangalore`;
const carRentalWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need a car rental in Bangalore.
Date:
Reporting time:
Pickup location:
Planned stops:
Approximate duration:
Adults and children:
Large suitcases and cabin bags:
Planned activities or assistance required:`)}`;
const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Car Rental Bangalore Enquiry")}`;

const pageTitle =
  "Car Rental in Bangalore with Driver | 8h, 10h & 12h Ertiga - Go Bengaluru";
const pageDescription =
  "Chauffeur-driven 6+1 Ertiga car rental in Bangalore & Bengaluru. Transparent 8h/80km, 10h/100km & 12h packages. 100% factory S-CNG, knee-level AC. Innova-like comfort at sedan rates. Lock your quote on WhatsApp.";

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
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Go Bengaluru Premium Ertiga for hourly and daily car rental in Bangalore",
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

const rentalPackages = [
  {
    title: "8 Hours / 80 Kilometers",
    label: "Standard Day Package",
    text: "Ideal for corporate client meetings, multi-stop office visits, family city shopping, and local Bengaluru errands.",
  },
  {
    title: "10 Hours / 100 Kilometers",
    label: "Extended City Package",
    text: "Designed for cross-city corridors like Whitefield to Electronic City or North Bangalore, covering extensive multi-point itineraries.",
  },
  {
    title: "12 Hours / 120 Kilometers",
    label: "Full-Day Disposal Package",
    text: "Perfect for full-day weddings, VIP delegate hosting, family day outings, and multi-point temple darshans across Bangalore.",
  },
  {
    title: "4 Hours / 40 Kilometers",
    label: "Selective Short-Duration Option",
    text: "Offered conditionally based on pickup locality, schedule, and route feasibility. Confirm strictly through direct Call or WhatsApp review.",
  },
];

const serviceBenefits = [
  "Clean, air-conditioned brand-new 2026 Ertiga dedicated strictly to your itinerary.",
  "100% factory-fitted S-CNG fleet with quiet highway stability and zero aftermarket tampering.",
  "Updated 2nd-row console AC vents near the knees providing direct, draft-free cooling.",
  "Dedicated chauffeur-driven 6+1 Ertiga only; guaranteed no vehicle downsizing to small hatchbacks or sedans.",
  "Chauffeurs check live Google Maps traffic at trip start and throughout the day to avoid bottlenecks.",
  "Direct communication with owner-driver Bharath K S or assigned trusted fellow drivers.",
  "Practical modular luggage boot for shopping bags, presentation kits, or international check-in suitcases.",
  "Family-friendly and elderly-friendly boarding with ergonomic seat height and considerate assistance.",
  "Strict Price-Lock Guarantee: the transparent quote agreed on WhatsApp remains fixed without unexpected driver bata.",
];

const faqItems = [
  {
    question: "What hourly rental packages are available for an Ertiga in Bangalore?",
    answer:
      "Lucky Travels offers 8 Hours / 80 Kilometers, 10 Hours / 100 Kilometers and 12 Hours / 120 Kilometers packages across Bangalore and Bengaluru. A 4 Hours / 40 Kilometers option is offered conditionally after direct Call or WhatsApp review of the pickup location, schedule and route viability.",
  },
  {
    question: "How does pricing and the WhatsApp Price-Lock Guarantee work?",
    answer:
      "We do not post generic or fluctuating rate cards. Once you share your pickup location, scheduled reporting time, and planned stops on WhatsApp, you receive an all-inclusive transparent quote. What is quoted on WhatsApp remains strictly locked and unchanged, provided your route and itinerary remain the same.",
  },
  {
    question: "Why choose a 6+1 Ertiga over a regular sedan cab for city rental?",
    answer:
      "A regular 4-seater sedan leaves barely any breathing room once you carry shopping bags or travel with family. Our 6+1 Ertiga delivers Innova-like 3-row comfort, generous legroom, second-row console knee-level AC vents, and large boot capacity for just a small fraction more than a basic sedan cab fare.",
  },
  {
    question: "Are your vehicles factory fitted with CNG?",
    answer:
      "Yes. Our entire fleet consists of brand-new 2026 Maruti Suzuki Ertigas with 100% original factory-fitted S-CNG technology. They are safety-certified, leak-proof, whisper quiet, and environmentally clean.",
  },
  {
    question: "How many hours in advance must I book?",
    answer:
      "A minimum of 6 to 12 hours advance booking is required for guaranteed vehicle dispatch, chauffeur allocation, and spotless cabin sanitation. Earlier notice is recommended for weekend events and festival dates.",
  },
  {
    question: "Does the chauffeur navigate using real-time traffic maps?",
    answer:
      "Yes. Chauffeurs check real-time Google Maps traffic at trip start and throughout the day to avoid or bypass major congestion hotspots such as Silk Board, Hebbal, Outer Ring Road (ORR), Tin Factory, and Whitefield.",
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
  featured = false,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
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

export default function CarRentalBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Rental in Bangalore with Driver | Premium Ertiga",
    alternateName: [
      "Go Bengaluru Car Rental",
      "GoBengaluru Car Rental",
      "Go Bangalore Car Rental",
      "Hourly Car Rental Bangalore",
      "Daily Car Rental Bangalore",
      "Chauffeur-Driven Ertiga Rental Bengaluru",
    ],
    serviceType: "Premium Ertiga car rental service in Bangalore",
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
    image: `${SITE.url}/images/services/hourly.jpg`,
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
        name: "Car Rental in Bangalore",
        item: routeUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/car-rental-bangalore#faq`,
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

        {/* HERO SECTION */}
        <section
          aria-labelledby="car-rental-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm">
                CHAUFFEUR-DRIVEN CAR RENTAL • BANGALORE &amp; BENGALURU
              </p>
              <h1
                id="car-rental-heading"
                className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]"
              >
                Car Rental in Bangalore with Driver for Hourly and Full-Day Travel
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Book a <strong>chauffeur-driven 6+1 Maruti Suzuki Ertiga</strong> for local city travel, corporate meetings, wedding shopping, and full-day city trips across <strong>Bangalore and Bengaluru</strong>. Experience <em>Innova-class 3-row comfort for just a fraction more than basic sedan cab rates</em>, with verified owner-drivers and zero surprise fees.
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
                  href={carRentalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock Quote on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">
                24/7 enquiries. Minimum 6 to 12 hours advance booking is required for guaranteed vehicle dispatch, chauffeur allocation, and vehicle sanitization.
              </p>
              <a
                href="#rental-options"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-xs font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                Explore Hourly &amp; Full-Day Packages Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>
            <RouteImage
              href="/"
              src="/images/services/hourly.jpg"
              alt="Go Bengaluru Premium Ertiga for hourly and daily car rental in Bangalore"
              caption="Clean 2026 factory-fitted CNG Ertiga dedicated to your local Bangalore itinerary."
              width={1536}
              height={1024}
              loading="eager"
              featured
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#rental-options"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-purple-700"
            >
              Explore Hourly &amp; Full-Day Rental Packages Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow" />
            </a>
          </div>
        </section>

        {/* SEDAN ALTERNATIVE COMPARISON SECTION */}
        <section className="bg-slate-50 px-5 pt-14 pb-8 sm:pt-16 sm:pb-10 border-b border-slate-200/80">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                SMART SEDAN UPGRADE • BANGALORE &amp; BENGALURU CAB SERVICE
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Looking for a Sedan Cab in Bangalore? Get Innova-Like Comfort for Barely More
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Travelers searching for <strong>sedan car hire in Bangalore</strong> (such as a Dzire or Etios) often find that 4 seats quickly become cramped once family members or shopping bags are added. With our brand-new 2026 factory-fitted CNG 6+1 Ertiga fleet, you receive <strong>Innova-grade 3-row comfort, generous legroom, and console-level knee AC for just a minor increment over ordinary sedan rates</strong>.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🚗</span>
                <h3 className="text-base font-bold text-[#090f2f]">6+1 Seating vs Cramped Sedan</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Seats up to <strong>6 adult passengers</strong> comfortably without shoulder rubbing, or fold the 3rd row for <em>massive boot space</em>.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">❄️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Console Knee-Level AC</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our updated 2026 Ertigas feature center-console AC vents near the knees, delivering direct, refreshing cooling without harsh roof drafts.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🧓</span>
                <h3 className="text-base font-bold text-[#090f2f]">Senior Citizen Friendly</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Unlike low-slung sedans that cause knee and back strain, the Ertiga provides an ergonomic hip height for <em>effortless boarding</em>.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🛡️</span>
                <h3 className="text-base font-bold text-[#090f2f]">WhatsApp Price-Lock</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  No surprise driver bata or sudden surge pricing. What we quote on WhatsApp remains <strong>fixed and guaranteed</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RENTAL OPTIONS & PRICE-LOCK GUARANTEE */}
        <section id="rental-options" className="bg-white px-5 pb-10 pt-10 sm:pt-14">
          <div className="page-shell">
            <SectionHeading
              id="rental-options-heading"
              eyebrow="HOURLY, HALF-DAY AND FULL-DAY OPTIONS"
            >
              Bangalore Car-Rental Packages &amp; Pricing Rules
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rentalPackages.slice(0, 3).map((option) => (
                <article
                  key={option.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300"
                >
                  <div>
                    <h3 className="text-xl font-black text-[#090f2f]">
                      {option.title}
                    </h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[.12em] text-purple-700">
                      {option.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{option.text}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi Lucky Travels, I would like to lock a quote for the ${option.title} package in Bangalore.`)}`}
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

              <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300">
                <div>
                  <h3 className="text-xl font-black text-[#090f2f]">
                    {rentalPackages[3].title}
                  </h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[.12em] text-purple-700">
                    {rentalPackages[3].label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{rentalPackages[3].text}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi Lucky Travels, I would like to check availability for the 4 Hours / 40 Kilometers package in Bangalore.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-purple-800 hover:text-purple-950"
                  >
                    <span>Check Short-Duration Feasibility</span>
                    <span>→</span>
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:col-span-2">
                <div className="inline-block rounded-md bg-amber-200/70 px-2.5 py-0.5 text-xs font-black text-amber-900 mb-2">
                  🛡️ WhatsApp Price-Lock Policy
                </div>
                <h3 className="text-xl font-black text-amber-950">Transparent Quotes with Zero Hidden Costs</h3>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  We don&apos;t use automated surge pricing or misleading rate tables. Share your pickup address, planned stops, and timing with us on WhatsApp to receive a <strong>direct, all-inclusive quote</strong>.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                  <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">Fixed Price Guarantee</strong>
                    The quote agreed upon on WhatsApp remains locked for your confirmed schedule. No sudden driver bata or hidden fees.
                  </div>
                  <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">Tolls &amp; Parking at Actuals</strong>
                    Toll fees and venue parking are handled transparently at actual cost with receipt verification.
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-amber-800">
                  *Need airport pickup or an outstation trip instead? Visit our dedicated <Link href="/airport-taxi-bangalore" className="font-bold underline text-amber-950">Bangalore Airport Taxi</Link> or <Link href="/outstation-cabs-bangalore" className="font-bold underline text-amber-950">Outstation Cabs</Link> portals.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FLEET SPECIALIZATION SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="ertiga-specialisation-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:items-center">
            <div>
              <SectionHeading
                id="ertiga-specialisation-heading"
                eyebrow="COMFORT AND CONSISTENCY"
              >
                Why Lucky Travels Offers Only Brand-New 2026 Ertigas (Factory S-CNG)
              </SectionHeading>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  Instead of operating an aggregator pool of mismatched or worn-out cars, Lucky Travels concentrates exclusively on brand-new, factory-fitted CNG 6+1 Maruti Suzuki Ertigas. Compared with a typical compact hatchback or sedan, the Ertiga offers <strong>generous 3-row comfort, flexible legroom, and progressive suspension</strong> for family and corporate itineraries.
                </p>
                <p>
                  Specialising in one premium vehicle category ensures that every car dispatched is consistently clean, fully sanitized, and mechanically sound. You receive a guaranteed high standard of service rather than an uncertain, downsized cab arriving at your door.
                </p>
                <p>
                  Our chauffeurs monitor real-time Google Maps traffic before departure and throughout the rental, dynamically bypassing congestion hotspots around Silk Board, Hebbal, Outer Ring Road, and Tin Factory.
                </p>
                <p className="font-black text-amber-600">
                  {SITE.specialisationSlogan}
                </p>
              </div>
            </div>
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Premium Ertiga middle-row seating for comfortable Bangalore car rental"
              caption="Pristine Ertiga middle-row seating with dedicated 2nd-row console knee-level AC."
              width={1536}
              height={1024}
            />
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:p-7">
            <h3 className="font-black text-amber-900">Practical Luggage &amp; Seating Guidance</h3>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              For optimal comfort, we recommend <strong>4 to 5 passengers with up to 4 large suitcases</strong> when the 3rd row is folded flat, or <strong>6 passengers with compact cabin trolley bags</strong>. Please share your passenger and baggage count when inquiring on WhatsApp so we can prepare the vehicle accordingly.
            </p>
          </div>
        </section>

        {/* SERVICE INCLUSIONS */}
        <section
          className="bg-slate-100 px-5 py-10 sm:py-14"
          aria-labelledby="service-benefits-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="service-benefits-heading"
              eyebrow="DIRECT BOOKING, CLEAR COMMUNICATION"
            >
              What Our Bangalore Chauffeur-Driven Car Rental Includes
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceBenefits.map((benefit, index) => {
                const Icon = [ShieldCheck, Luggage, MapPinned][index % 3];
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
              Go Bengaluru is the online service brand of Lucky Travels at Gobengaluru.in. Whether you search for <strong>Go Bengaluru</strong>, <strong>GoBengaluru</strong>, or <strong>Go Bangalore car rental with driver</strong>, our service focuses exclusively on premium 6+1 Ertiga journeys tailored to your Bengaluru city and outstation travel needs.
            </p>
          </div>
        </section>

        {/* HOW LOCAL CAR RENTAL WORKS */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="how-it-works-heading"
        >
          <SectionHeading
            id="how-it-works-heading"
            eyebrow="TRANSPARENT 4-STEP PROCESS"
          >
            How to Book Your Hourly &amp; Daily Car Rental in Bangalore
          </SectionHeading>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              <div>
                <h3 className="font-black text-[#090f2f]">
                  1. Share your travel details on WhatsApp
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Send your date, scheduled reporting time, pickup address in Bangalore, planned stops, and passenger/luggage details.
                </p>
              </div>
              <div>
                <h3 className="font-black text-[#090f2f]">
                  2. Receive an all-inclusive transparent quote
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Receive a trip-specific quote directly from owner-driver Bharath K S with zero hidden fees or sudden surge pricing.
                </p>
              </div>
              <div>
                <h3 className="font-black text-[#090f2f]">
                  3. Direct booking confirmation
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  All journey terms and vehicle details are confirmed before the ride begins. Your 6+1 Ertiga allocation is locked.
                </p>
              </div>
              <div>
                <h3 className="font-black text-[#090f2f]">
                  4. Doorstep arrival and coordinated travel
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Your chauffeur arrives on time with a clean, sanitized cabin. Relax and travel comfortably across Bengaluru.
                </p>
              </div>
            </div>
            <RouteImage
              href="/"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot space for Bangalore car rental luggage planning"
              caption="Ample boot capacity for shopping packages, presentation materials, and suitcases."
              width={1536}
              height={1024}
            />
          </div>
        </section>

        {/* PRIMARY CHAUFFEUR REPORTING ZONES */}
        <section
          className="bg-[#090f2f] px-5 py-12 text-white sm:py-16"
          aria-labelledby="areas-heading"
        >
          <div className="page-shell grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading id="areas-heading" eyebrow="SERVICE AVAILABILITY" dark>
                Bangalore Localities &amp; Tech Corridors Served
              </SectionHeading>
              <p className="mt-4 leading-7 text-white/80 text-sm sm:text-base">
                Lucky Travels provides chauffeur-driven car rentals across major Bangalore localities and IT tech hubs. Doorstep reporting is guaranteed with 6–12 hours advance reservation.
              </p>
              <p className="mt-3 leading-7 text-white/70 text-xs sm:text-sm">
                Share your exact pickup location and travel itinerary for immediate availability confirmation. Even if your layout is not listed, message us directly on WhatsApp to coordinate your journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={carRentalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-emerald-400 transition"
                >
                  <MessageCircle size={18} /> WhatsApp for Availability
                </a>
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-[#090f2f] hover:bg-slate-100 transition"
                >
                  <Phone size={18} /> Call +91 {SITE.phone}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-xl backdrop-blur-sm lg:col-span-6">
              <h3 className="text-base sm:text-lg font-black text-white">Primary Chauffeur Reporting Zones</h3>
              <p className="mt-1 text-xs text-white/60">Guaranteed doorstep pickup across Bengaluru IT corridors &amp; residential layouts</p>
              <nav className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" aria-label="Bangalore rental service corridors">
                {[
                  { area: "Whitefield (ITPL & Kadugodi)", messageArea: "Whitefield" },
                  { area: "Electronic City (Phases 1 & 2)", messageArea: "Electronic City" },
                  { area: "HSR Layout (Sectors 1-7)", messageArea: "HSR Layout" },
                  { area: "Sarjapur Road & Bellandur", messageArea: "Sarjapur Road & Bellandur" },
                  { area: "Indiranagar & HAL", messageArea: "Indiranagar & HAL" },
                  { area: "Marathahalli & KR Puram", messageArea: "Marathahalli & KR Puram" },
                  { area: "JP Nagar & Jayanagar", messageArea: "JP Nagar & Jayanagar" },
                  { area: "Hebbal & Manyata Tech Park", messageArea: "Hebbal & Manyata" },
                  { area: "Koramangala", messageArea: "Koramangala" },
                  { area: "Yelahanka & North Bengaluru", messageArea: "Yelahanka" },
                ].map(({ area, messageArea }) => {
                  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi Lucky Travels, I would like to check Ertiga hourly car rental availability from ${messageArea}.`)}`;
                  const rowClassName = "flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.05] px-3 py-2 text-xs sm:text-sm text-gray-200 transition-colors hover:bg-white/[0.12]";
                  return (
                    <a key={area} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={rowClassName}>
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                        {area}
                      </span>
                      <span className="ml-2 shrink-0 text-xs font-bold text-emerald-300">Enquire ↗</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </section>

        {/* RELATED HIGHWAY & PILGRIMAGE CORRIDORS */}
        <section className="page-shell px-5 py-10 sm:py-14 border-b border-slate-200/80">
          <div className="w-full border-b border-slate-200 pb-4">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700">
              EXPAND YOUR JOURNEY • OUTSTATION CORRIDORS FROM BANGALORE
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#090f2f] sm:text-3xl">
              Planning Beyond Bangalore City Limits?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Lucky Travels also operates dedicated chauffeur-driven highway routes across Karnataka with smooth expressway navigation:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/bangalore-to-srirangapatna-pitru-paksha-cab"
              className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 transition hover:border-amber-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  Sacred Pilgrimage Package
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">Bangalore to Srirangapatna Cab</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Paschima Vahini, Gosai Ghat, and Triveni Sangama poojas with riverbank waiting.
                </p>
              </div>
              <span className="text-xs font-black text-amber-800 mt-3 inline-block">View package details →</span>
            </Link>

            <Link
              href="/bangalore-to-mysore-cab"
              className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 transition hover:border-orange-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-orange-900 bg-orange-100 px-2 py-0.5 rounded border border-orange-300">
                  90-Min Expressway
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">Bangalore to Mysore Expressway Cab</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Expressway cruising for family sightseeing, Mysore Palace, and Chamundi Hills.
                </p>
              </div>
              <span className="text-xs font-black text-orange-800 mt-3 inline-block">View expressway cab →</span>
            </Link>

            <Link
              href="/bangalore-to-tirupati-cab"
              className="rounded-xl border border-yellow-200 bg-yellow-50/70 p-4 transition hover:border-yellow-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-yellow-900 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300">
                  Devotional Darshan
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">Bangalore to Tirupati Balaji Cab</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fatigue-free temple darshan package with elderly boarding assistance.
                </p>
              </div>
              <span className="text-xs font-black text-yellow-800 mt-3 inline-block">View darshan package →</span>
            </Link>
          </div>
        </section>

        {/* DIRECT CONTACT SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="booking-heading"
        >
          <SectionHeading id="booking-heading" eyebrow="DIRECT CONTACT">
            Book Your Bangalore Car Rental with Driver
          </SectionHeading>
          <div className="mt-7 grid gap-6 sm:gap-8 lg:grid-cols-3">
            <a
              href={`tel:+91${SITE.phone}`}
              className="flex flex-col items-center rounded-2xl border border-purple-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <Phone className="text-purple-700" size={32} />
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">Call Directly</h3>
              <p className="mt-1 text-sm text-slate-700">+91 {SITE.phone}</p>
              <p className="mt-1 text-xs text-slate-500">24/7 reservation assistance</p>
            </a>
            <a
              href={carRentalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl border border-green-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <MessageCircle className="text-green-600" size={32} />
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-700">Chat with Lucky Travels</p>
              <p className="mt-1 text-xs text-slate-500">Immediate trip-locked quotes</p>
            </a>
            <a
              href={emailUrl}
              className="flex flex-col items-center rounded-2xl border border-blue-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <span className="text-2xl font-black text-blue-600">@</span>
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">Email Enquiry</h3>
              <p className="mt-1 break-all text-xs text-slate-700">{SITE.email}</p>
              <p className="mt-1 text-xs text-slate-500">Detailed corporate itineraries</p>
            </a>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="faq-heading"
        >
          <SectionHeading id="faq-heading" eyebrow="COMMON QUESTIONS">
            Car Rental in Bangalore FAQs
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

        {/* BOTTOM CTA SECTION */}
        <section className="bg-slate-100 px-5 py-8 text-center sm:py-10">
          <div className="page-shell max-w-3xl">
            <h2 className="mb-2 text-2xl font-black text-[#090f2f] sm:text-3xl">
              Start Your Bangalore Car Rental Enquiry Today
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-xs sm:text-sm leading-6 text-slate-600">
              Call, WhatsApp, or email Go Bengaluru by Lucky Travels with your itinerary. You will receive a direct, fixed quote with zero unexpected driver fees.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-purple-900 transition"
              >
                <Phone size={17} /> Call +91 {SITE.phone}
              </a>
              <a
                href={carRentalWhatsAppUrl}
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