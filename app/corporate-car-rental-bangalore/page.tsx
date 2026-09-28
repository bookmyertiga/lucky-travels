import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Briefcase,
  Building2,
  FileCheck2,
  Luggage,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/corporate-car-rental-bangalore`;
const corporateWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  `Hello Lucky Travels, I need corporate car rental in Bangalore.\n\nCompany Name:\nReporting Date & Time:\nPickup Location:\nDestination / Tech Park:\nTrip Type (Daily / Hourly / Airport Transfer):\nPassenger Count & Luggage Details:\nBilling Requirement (GST Invoice):`
)}`;
const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Corporate Car Rental Bangalore Enquiry")}`;

const pageTitle =
  "Corporate Car Rental in Bangalore with Driver | 6+1 Ertiga Fleet - Go Bengaluru";
const pageDescription =
  "Chauffeur-driven corporate car rental in Bangalore & Bengaluru. Professional business mobility, tech park visits & client transfers in brand new 2026 factory CNG Ertigas. Innova-like comfort at sedan rates with GST invoices. Lock your quote on WhatsApp.";

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
        alt: "Go Bengaluru Premium Ertiga for corporate car rental in Bangalore",
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

const techParks = [
  { name: "Electronic City", desc: "Infosys, Wipro, Phase 1 & Phase 2 campus transfers" },
  { name: "Whitefield (ITPL & Kadugodi)", desc: "EPIP Zone, International Tech Park & Brigade tech hubs" },
  { name: "Outer Ring Road (ORR) & Bellandur", desc: "Embassy TechVillage, RMZ Ecospace, Ecoworld & Prestige Tech Park" },
  { name: "Manyata Tech Park (Hebbal)", desc: "North Bengaluru corporate corridor & airport connectivity" },
  { name: "Bagmane Tech Park (CV Raman Nagar)", desc: "Central corporate zone, Indiranagar & Old Airport Road" },
  { name: "Koramangala & HSR Layout", desc: "Venture hubs, startup offices, and executive workspaces" },
];

const corporatePackages = [
  {
    title: "8 Hours / 80 Kilometers",
    label: "Standard Executive Day",
    text: "Ideal for senior management, client delegations, multi-stop office visits, and tech park reviews across Bengaluru.",
  },
  {
    title: "10 Hours / 100 Kilometers",
    label: "Extended Cross-Corridor Day",
    text: "Designed for extensive cross-city transit spanning Whitefield, Electronic City, Manyata Tech Park, and Outer Ring Road.",
  },
  {
    title: "12 Hours / 120 Kilometers",
    label: "Full-Day Disposal Package",
    text: "Perfect for full-day corporate summits, client hosting, factory visits, seminars, and VIP event logistics in Bangalore.",
  },
  {
    title: "Corporate Airport Transfer (BLR T1 & T2)",
    label: "Executive Terminal Transit",
    text: "Punctual airport drops and flight pickups with live flight monitoring and curbside reception for visiting delegates.",
  },
];

const serviceBenefits = [
  "Spotless, executive-grade brand-new 2026 Maruti Suzuki Ertiga dedicated to your company.",
  "100% factory-fitted S-CNG fleet ensuring smooth, whisper-quiet highway rides and lower carbon footprints.",
  "Modern 2nd-row console AC vents located near the knees for gentle, draft-free climate control.",
  "Dedicated 6+1 fleet with guaranteed vehicle allocation—zero sudden vehicle downsizing or cancellations.",
  "Chauffeurs continuously monitor real-time Google Maps traffic to bypass high-congestion bottlenecks.",
  "Direct communication with owner-driver Bharath K S or assigned corporate-vetted chauffeurs.",
  "Generous luggage capacity for business display kits, sample boxes, presentation stands, and check-in bags.",
  "Compliant billing with formal GST invoices and transparent corporate accounts.",
  "Strict Price-Lock Guarantee: Quotes confirmed on WhatsApp remain locked with zero sudden driver bata.",
];

const faqItems = [
  {
    question: "Do you provide compliant GST invoices for corporate car rental bookings?",
    answer:
      "Yes. Lucky Travels provides complete, compliant GST billing and official tax invoice receipts for all corporate car hire, employee travel, and client transit across Bangalore and Bengaluru.",
  },
  {
    question: "Why should corporate travel desks choose a 6+1 Ertiga instead of a standard sedan cab?",
    answer:
      "Standard 4-seater sedan cabs (like Dzire or Etios) offer cramped rear legroom and limited boot capacity for presentation materials or luggage. Our 2026 Ertiga fleet delivers Innova-like 3-row comfort, knee-level console AC vents, and generous laptop/bag space for just a small fraction more than basic sedan rates.",
  },
  {
    question: "How does your corporate WhatsApp Price-Lock Guarantee work?",
    answer:
      "We avoid algorithmic surge pricing. After sharing your corporate schedule, pickup address, and itinerary on WhatsApp, you receive a direct, fixed quote. That price is completely locked for the itinerary agreed upon—no surprise driver charges or hidden costs.",
  },
  {
    question: "Can we book corporate airport transfers with flight tracking for visiting executives?",
    answer:
      "Yes. We track incoming and outgoing flights at Kempegowda International Airport (BLR Terminal 1 & Terminal 2). Our chauffeur arrives before the flight touches down, providing seamless curbside pickup.",
  },
  {
    question: "How much advance notice is required for corporate booking?",
    answer:
      "We recommend booking 6 to 12 hours in advance to guarantee vehicle allocation, interior detailing, and chauffeur verification. Prior notification is advised for full-day disposal and VIP delegations.",
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

export default function CorporateCarRentalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Car Rental in Bangalore with Driver | 6+1 Ertiga Fleet",
    alternateName: [
      "Corporate Car Hire Bangalore",
      "Executive Chauffeur Service Bengaluru",
      "Corporate Airport Taxi Bangalore",
      "Business Travel Ertiga Cab Bengaluru",
    ],
    serviceType: "Corporate Chauffeur-Driven Car Rental Service in Bangalore",
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
        name: "Corporate Car Rental in Bangalore",
        item: routeUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/corporate-car-rental-bangalore#faq`,
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

        {/* 1. ORIGINAL HERO SECTION WITH WHITE ERTIGA IMAGE */}
        <section
          aria-labelledby="corporate-rental-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm">
                B2B CORPORATE TRANSPORT SOLUTIONS
              </p>
              <h1
                id="corporate-rental-heading"
                className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]"
              >
                Corporate Car Rental Bangalore with a Dedicated Ertiga Fleet
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Reliable chauffeur-driven corporate car rental for executive transfers, tech-park movement, full-day disposal, and Kempegowda Airport pickups across <strong>Bangalore and Bengaluru</strong>. Experience <em>Innova-class 3-row comfort for just a fraction more than basic sedan cab rates</em> with verified owner-drivers and GST-compliant billing.
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-amber-300 sm:text-base">
                Only Premium Ertiga—Because Comfort Should Never Be Optional.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-purple-800 transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={corporateWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> WhatsApp B2B Enquiry
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">
                Mandatory 6 to 12 hours advance notice is required for guaranteed corporate car allocation and vehicle preparation. Drivers use live Google Maps traffic at departure to bypass ORR, Silk Board, and Hebbal bottlenecks.
              </p>
              <a
                href="#tech-parks"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-xs font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                Explore Tech Parks &amp; Corporate Options Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>
            <RouteImage
              href="/"
              src="/images/services/hourly.jpg"
              alt="Go Bengaluru Premium Ertiga for corporate car rental in Bangalore"
              caption="A pristine white, chauffeur-driven 6+1 Premium Ertiga prepared for Bangalore corporate travel."
              width={1536}
              height={1024}
              loading="eager"
              featured
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#tech-parks"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-purple-700"
            >
              Explore Tech Parks &amp; Corporate Options Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow" />
            </a>
          </div>
        </section>

        {/* 2. PLACEMENT DIFFERENTIATOR: PRIMARY TECH PARKS PROMOTED TO TOP */}
        <section id="tech-parks" className="bg-[#090f2f] px-5 py-12 text-white sm:py-16">
          <div className="page-shell grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading id="tech-parks-heading" eyebrow="PRIMARY BUSINESS CORRIDORS" dark>
                Bengaluru IT Parks &amp; Corporate Zones Served
              </SectionHeading>
              <p className="mt-4 leading-7 text-white/80 text-sm sm:text-base">
                Lucky Travels provides dedicated chauffeur reporting across all primary technology parks, business campuses, and commercial districts in Bangalore.
              </p>
              <p className="mt-3 leading-7 text-white/70 text-xs sm:text-sm">
                Share your scheduled corporate meeting locations and reporting timings on WhatsApp for immediate confirmation and driver allocation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={corporateWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-emerald-400 transition"
                >
                  <MessageCircle size={18} /> WhatsApp for Corporate Availability
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
              <h3 className="text-base sm:text-lg font-black text-white">Major Bengaluru IT Tech Parks</h3>
              <p className="mt-1 text-xs text-white/60">Guaranteed doorstep reporting for visiting executives and corporate staff</p>
              <nav className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" aria-label="Bangalore corporate tech parks">
                {techParks.map(({ name, desc }) => {
                  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hi Lucky Travels, I would like to check corporate car rental availability for ${name}.`
                  )}`;
                  const rowClassName =
                    "flex flex-col justify-between rounded-lg border border-white/5 bg-white/[0.05] p-3 text-xs text-gray-200 transition-colors hover:bg-white/[0.12]";
                  return (
                    <a key={name} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={rowClassName}>
                      <span className="flex items-center gap-2 font-bold text-white">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                        {name}
                      </span>
                      <span className="mt-1 text-[11px] text-slate-400 leading-normal">{desc}</span>
                      <span className="mt-2 text-[11px] font-bold text-emerald-300">Inquire Corporate Rate ↗</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </section>

        {/* 3. SEDAN UPGRADE MATRIX FOR CORPORATES */}
        <section className="bg-slate-50 px-5 pt-10 pb-8 sm:pt-14 sm:pb-10 border-b border-slate-200/80">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                EXECUTIVE VALUE COMPARISON • BANGALORE &amp; BENGALURU
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Searching for a Corporate Sedan Cab in Bangalore? Get Innova-Grade Executive Comfort
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                When companies book regular <strong>sedan cabs in Bangalore</strong> (like Dzire or Etios) for visiting executives or multi-stop client visits, they often run into cramped legroom, poor ride quality, and zero boot space for presentation kits. Our brand-new 2026 factory-fitted CNG 6+1 Ertiga fleet gives your business <strong>Innova-grade 3-row comfort, dedicated knee-level console AC, and quiet highway refinement for barely more than sedan cab prices</strong>.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">💼</span>
                <h3 className="text-base font-bold text-[#090f2f]">Spacious Executive Cabin</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Seats up to <strong>6 adult delegates</strong> comfortably without cramped shoulders, allowing working on laptops during commutes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">❄️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Console Knee-Level AC</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our updated 2026 Ertigas feature center-console AC vents near the knees, delivering gentle, draft-free cooling for dressed executives.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🌿</span>
                <h3 className="text-base font-bold text-[#090f2f]">100% Factory S-CNG</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Whisper-quiet highway operation with lower emissions, aligning perfectly with corporate sustainability and ESG targets.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🧾</span>
                <h3 className="text-base font-bold text-[#090f2f]">GST Invoices &amp; Price Lock</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Full GST compliance for business input credits with <strong>100% locked quotes</strong> on WhatsApp—zero surprise fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CORPORATE PACKAGES & PRICING RULES */}
        <section id="corporate-packages" className="bg-white px-5 pb-10 pt-10 sm:pt-14">
          <div className="page-shell">
            <SectionHeading
              id="corporate-packages-heading"
              eyebrow="TAILORED CORPORATE PACKAGES"
            >
              Bangalore Corporate Car-Rental Packages
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {corporatePackages.slice(0, 3).map((pkg) => (
                <article
                  key={pkg.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300"
                >
                  <div>
                    <h3 className="text-xl font-black text-[#090f2f]">{pkg.title}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[.12em] text-purple-700">
                      {pkg.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{pkg.text}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Lucky Travels, I would like to lock a corporate quote for the ${pkg.title} in Bangalore.`
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

              <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300">
                <div>
                  <h3 className="text-xl font-black text-[#090f2f]">{corporatePackages[3].title}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[.12em] text-purple-700">
                    {corporatePackages[3].label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{corporatePackages[3].text}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                      `Hi Lucky Travels, I would like to check corporate airport transfer rates in Bangalore.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-purple-800 hover:text-purple-950"
                  >
                    <span>Check Airport Transit Rate</span>
                    <span>→</span>
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:col-span-2">
                <div className="inline-block rounded-md bg-amber-200/70 px-2.5 py-0.5 text-xs font-black text-amber-900 mb-2">
                  🛡️ Corporate Price-Lock Guarantee
                </div>
                <h3 className="text-xl font-black text-amber-950">Transparent Quotes with Zero Hidden Driver Bata</h3>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  We don&apos;t use automated surge pricing or unpredictable algorithms. Send your corporate schedule, pickup address, and itinerary on WhatsApp to receive a <strong>direct, locked corporate quote</strong>.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                  <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">Fixed Price Assurance</strong>
                    The agreed quote on WhatsApp remains completely fixed for your confirmed itinerary. No unexpected extra driver charges.
                  </div>
                  <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">Transparent Tolls &amp; Parking</strong>
                    Highway toll fees and tech park parking are handled transparently at actual costs with receipts provided.
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-amber-800">
                  *Need standard city rentals or airport transfers? Explore our <Link href="/car-rental-bangalore" className="font-bold underline text-amber-950">Car Rental Bangalore</Link> or <Link href="/airport-taxi-bangalore" className="font-bold underline text-amber-950">Bangalore Airport Taxi</Link> portals.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 5. FLEET SPECIALIZATION SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="corporate-fleet-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:items-center">
            <div>
              <SectionHeading
                id="corporate-fleet-heading"
                eyebrow="COMFORT AND RELIABILITY"
              >
                Why Corporates Trust Only Our Brand-New 2026 Ertigas (Factory CNG)
              </SectionHeading>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  Instead of relying on fragmented app pools with worn-out sedans or unpredictable drivers, Lucky Travels concentrates exclusively on pristine, brand-new 2026 factory-fitted CNG 6+1 Maruti Suzuki Ertigas. It provides <strong>Innova-grade cabin space, plush middle-row comfort, and professional presentation</strong> for visiting delegates and executives.
                </p>
                <p>
                  Specialising in one unified fleet category ensures that every business vehicle dispatched is immaculate, odor-free, fully sanitized, and mechanically sound. Your visiting guests experience executive-grade mobility with zero risk of last-minute vehicle downsizing.
                </p>
                <p>
                  Our chauffeurs monitor real-time Google Maps traffic at trip start and throughout the day, dynamically rerouting around Silk Board, Tin Factory, Hebbal, and the Outer Ring Road to keep your business schedule strictly on track.
                </p>
                <p className="font-black text-amber-600">
                  {SITE.specialisationSlogan}
                </p>
              </div>
            </div>
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Premium Ertiga middle-row seating for corporate car rental in Bangalore"
              caption="Pristine Ertiga middle-row seating with dedicated 2nd-row console knee-level AC."
              width={1536}
              height={1024}
            />
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:p-7">
            <h3 className="font-black text-amber-900">Executive Luggage &amp; Equipment Capacity</h3>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              For corporate transfers, we recommend <strong>4 to 5 executives with up to 4 large check-in suitcases and presentation display boxes</strong> when the 3rd row is folded flat, or <strong>6 passengers with laptop bags and cabin trolleys</strong>.
            </p>
          </div>
        </section>

        {/* 6. CORPORATE SERVICE INCLUSIONS */}
        <section
          className="bg-slate-100 px-5 py-10 sm:py-14"
          aria-labelledby="corporate-benefits-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="corporate-benefits-heading"
              eyebrow="PROFESSIONAL SERVICE INCLUSIONS"
            >
              What Our Bangalore Corporate Car Rental Includes
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceBenefits.map((benefit, index) => {
                const Icon = [ShieldCheck, Briefcase, FileCheck2, Building2, Luggage, MapPinned][index % 6];
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
              Go Bengaluru by Lucky Travels offers dedicated corporate mobility services at Gobengaluru.in. Whether your business searches for <strong>corporate car rental Bangalore</strong>, <strong>Bengaluru executive cab booking</strong>, or <strong>company car hire with driver</strong>, our 6+1 Ertiga fleet ensures seamless business transit across Karnataka.
            </p>
          </div>
        </section>

        {/* 7. HIGHWAY & CLIENT EXCURSIONS */}
        <section className="page-shell px-5 py-10 sm:py-14 border-b border-slate-200/80">
          <div className="w-full border-b border-slate-200 pb-4">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700">
              EXPAND YOUR BUSINESS COMMUTE • BENGALURU AIRPORT &amp; OUTSTATION
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#090f2f] sm:text-3xl">
              Corporate Travel Beyond Local Tech Parks
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Lucky Travels also handles corporate airport transfers and outstation client excursions with smooth expressway driving:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/airport-taxi-bangalore"
              className="rounded-xl border border-purple-200 bg-purple-50/70 p-4 transition hover:border-purple-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded border border-purple-300">
                  Corporate Airport Transit
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">Bangalore Airport Taxi (BLR T1 &amp; T2)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Punctual airport pickup and drop for corporate executives with live flight tracking.
                </p>
              </div>
              <span className="text-xs font-black text-purple-800 mt-3 inline-block">View airport cab portal →</span>
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
                  Smooth expressway transit for corporate meetings and client visits in Mysore.
                </p>
              </div>
              <span className="text-xs font-black text-orange-800 mt-3 inline-block">View expressway cab →</span>
            </Link>

            <Link
              href="/outstation-cabs-bangalore"
              className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 transition hover:border-emerald-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  Corporate Offsites
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">Outstation Cabs from Bangalore</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Team outings and management retreats to Coorg, Chikmagalur, Ooty, and Kabini.
                </p>
              </div>
              <span className="text-xs font-black text-emerald-800 mt-3 inline-block">View outstation hub →</span>
            </Link>
          </div>
        </section>

        {/* 8. DIRECT CORPORATE CONTACT */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="corporate-contact-heading"
        >
          <SectionHeading id="corporate-contact-heading" eyebrow="DIRECT CORPORATE DESK">
            Book Your Corporate Car Rental in Bangalore
          </SectionHeading>
          <div className="mt-7 grid gap-6 sm:gap-8 lg:grid-cols-3">
            <a
              href={`tel:+91${SITE.phone}`}
              className="flex flex-col items-center rounded-2xl border border-purple-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <Phone className="text-purple-700" size={32} />
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">Call Directly</h3>
              <p className="mt-1 text-sm text-slate-700">+91 {SITE.phone}</p>
              <p className="mt-1 text-xs text-slate-500">24/7 corporate desk</p>
            </a>
            <a
              href={corporateWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl border border-green-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <MessageCircle className="text-green-600" size={32} />
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-700">Chat with Lucky Travels</p>
              <p className="mt-1 text-xs text-slate-500">Trip-locked corporate quotes</p>
            </a>
            <a
              href={emailUrl}
              className="flex flex-col items-center rounded-2xl border border-blue-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <span className="text-2xl font-black text-blue-600">@</span>
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">Corporate Invoicing</h3>
              <p className="mt-1 break-all text-xs text-slate-700">{SITE.email}</p>
              <p className="mt-1 text-xs text-slate-500">Vendor setup &amp; GST invoices</p>
            </a>
          </div>
        </section>

        {/* 9. FAQS SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="corporate-faq-heading"
        >
          <SectionHeading id="corporate-faq-heading" eyebrow="COMMON QUESTIONS">
            Corporate Car Rental in Bangalore FAQs
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
              Elevate Your Corporate Mobility in Bengaluru Today
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-xs sm:text-sm leading-6 text-slate-600">
              Call, WhatsApp, or email Go Bengaluru by Lucky Travels with your company schedule. Receive an immediate, fixed quote with zero unexpected driver fees.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-purple-900 transition"
              >
                <Phone size={17} /> Call +91 {SITE.phone}
              </a>
              <a
                href={corporateWhatsAppUrl}
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