import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  Gauge,
  HeartHandshake,
  Luggage,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
  Wrench,
  Zap,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const aboutUrl = `${SITE.url}/about`;
const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Bharath, I read the About Us story of Lucky Travels and would like to enquire about your services."
)}`;

export const metadata: Metadata = {
  title: "About Lucky Travels | Bharath K S - Founder & Fleet Standards",
  description:
    "Meet founder and owner-driver Bharath K S. Discover the story behind Lucky Travels (Go Bengaluru), our dedicated 2024–2026 factory S-CNG Ertiga fleet, and zero-surge pricing.",
  alternates: { canonical: aboutUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Lucky Travels | Bharath K S - Founder & Fleet Standards",
    description:
      "Meet Bharath K S, founder of Lucky Travels. Specializing 100% in 2024–2026 factory S-CNG Ertigas with knee-level console AC and WhatsApp Price-Locks across Bengaluru.",
    url: aboutUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Lucky Travels founder Bharath K S and dedicated Ertiga fleet in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lucky Travels | Bharath K S - Founder & Fleet Standards",
    description:
      "Meet Bharath K S, founder of Lucky Travels. Learn about our 2024–2026 factory S-CNG Ertiga fleet in Bengaluru.",
    images: [`${SITE.url}/images/services/hourly.jpg`],
  },
};

const fleetEngineeringSpecs = [
  {
    icon: Gauge,
    title: "Factory S-CNG Engine",
    badge: "OEM Dual-ECU",
    description:
      "Original Maruti Suzuki factory-fitted S-CNG system. Delivers whisper-quiet highway cruising with zero aftermarket leak risks or gas smell in the cabin.",
  },
  {
    icon: Compass,
    title: "Progressive Suspension",
    badge: "Highway Stability",
    description:
      "Specially calibrated rear dampers absorb highway undulations and bridge joins smoothly, eliminating rear-seat bouncing, nausea, and motion sickness.",
  },
  {
    icon: Zap,
    title: "Knee-Level Console AC",
    badge: "Dual-Zone Cooling",
    description:
      "Independent center console vents that cool passengers gently from the knee level up, avoiding harsh downward drafts that cause headaches on long trips.",
  },
  {
    icon: Luggage,
    title: "4-Suitcase Flat Boot",
    badge: "Modular 3-Row",
    description:
      "With the 50:50 split 3rd row folded flat, the Ertiga holds up to 4 large 28-inch international check-in suitcases without spilling onto passenger laps.",
  },
];

const founderTimeline = [
  {
    phase: "01",
    tag: "The Market Observation",
    title: "The Aggregator App Lottery",
    detail:
      "Frequent travelers in Bengaluru constantly face last-minute cancellations, worn-out cabs, foul odors, and aftermarket CNG tanks that leave no room for airport luggage.",
  },
  {
    phase: "02",
    tag: "The Radical Choice",
    title: "One Vehicle Category, Perfected",
    detail:
      "Instead of running a generic fleet of random hatchbacks and sedans, Lucky Travels chose to specialize 100% in the Maruti Suzuki Ertiga. One category, mastered completely.",
  },
  {
    phase: "03",
    tag: "The Fleet Benchmark",
    title: "2024 to 2026 Fleet Standardization",
    detail:
      "Every vehicle in our lineup is a modern 2024–2026 factory S-CNG Ertiga with yellow-board commercial compliance, pristine interior hygiene, and regular maintenance.",
  },
  {
    phase: "04",
    tag: "The Direct Model",
    title: "Verified Owner-Driver Ethics",
    detail:
      "No automated algorithms or outsourced call centers. Guests communicate directly with owner-driver Bharath K S, receiving guaranteed vehicle allocation and fixed WhatsApp pricing.",
  },
];

const trustCommitments = [
  {
    title: "Zero Vehicle Downsizing",
    desc: "When an Ertiga is confirmed, an Ertiga arrives. We never substitute a compact sedan or hatchback.",
  },
  {
    title: "WhatsApp Price-Lock Guarantee",
    desc: "No surge pricing multipliers during heavy rain, midnight hours, or traffic jams along Silk Board.",
  },
  {
    title: "Guaranteed Early-Morning Dispatch",
    desc: "3:00 AM to 6:00 AM airport trips are pre-assigned 6 to 12 hours ahead with driver details locked.",
  },
  {
    title: "Senior Citizen & Family Assistance",
    desc: "Courteous luggage lifting, patient boarding for elderly parents, and steady highway cruising.",
  },
];

export default function AboutPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lucky Travels - Go Bengaluru",
    legalName: "Lucky Travels",
    founder: {
      "@type": "Person",
      name: "Bharath K S",
      jobTitle: "Founder and Owner-Driver",
      url: aboutUrl,
    },
    telephone: `+91${SITE.phone}`,
    email: SITE.email,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Konena Agrahara, HAL",
      addressRegion: "Bengaluru, Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9569,
      longitude: 77.6534,
    },
    priceRange: "₹₹",
    image: `${SITE.url}/images/services/hourly.jpg`,
    description:
      "Dedicated 2024–2026 factory S-CNG Maruti Suzuki Ertiga chauffeur-driven taxi service in Bengaluru operated by founder and owner-driver Bharath K S.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About Us", item: aboutUrl },
    ],
  };

  return (
    <SiteShell>
      <JsonLd data={[localBusinessSchema, breadcrumbSchema]} />
      <main className="overflow-x-hidden bg-[#f8fafc]">

        {/* HERO: FOUNDER & COMPANY DOSSIER */}
        <section
          aria-labelledby="about-dossier-heading"
          className="relative border-b border-slate-200 bg-white px-5 pt-10 pb-14 sm:pt-16 sm:pb-20"
        >
          <div className="mx-auto max-w-6xl">
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              COMPANY PROFILE &amp; FLEET STANDARDS • GO BENGALURU
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
              <div>
                <h1
                  id="about-dossier-heading"
                  className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem] leading-[1.12]"
                >
                  The Owner-Driver Standard in Bengaluru Travel
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Founded by <strong>Bharath K S</strong> and operating out of <em>Konena Agrahara (HAL)</em>, Lucky Travels was created to replace the unpredictability of ride-hailing apps with the reliability of a dedicated chauffeur service. We operate exclusively with <strong>2024 to 2026 factory-fitted S-CNG Maruti Suzuki Ertigas</strong> across Bengaluru, Kempegowda Airport, and Karnataka highway routes.
                </p>

                {/* Slogan Pill */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-bold text-slate-800">
                  <Sparkles size={16} className="text-amber-500 shrink-0" />
                  <span>{SITE.specialisationSlogan}</span>
                </div>

                {/* Direct Action Hub */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:+91${SITE.phone}`}
                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-black text-white shadow-md hover:bg-slate-800 transition active:scale-95"
                  >
                    <Phone size={16} className="text-emerald-400" />
                    Call Bharath: +91 {SITE.phone}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-black text-white shadow-md hover:bg-emerald-500 transition active:scale-95"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Direct Booking
                  </a>
                </div>
              </div>

              {/* FOUNDER IDENTITY BADGE / DOSSIER CARD */}
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white shadow-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                      FOUNDER &amp; LEAD DRIVER
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white">Bharath K S</h2>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-black text-emerald-300 text-lg">
                    BK
                  </div>
                </div>

                <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Operational Base</strong>
                      <span className="text-slate-300">Konena Agrahara, HAL, Bengaluru, Karnataka</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wrench size={17} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Fleet Specialization</strong>
                      <span className="text-slate-300">Maruti Suzuki Ertiga (2024–2026 Factory S-CNG)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Operating Philosophy</strong>
                      <span className="text-slate-300">Direct booking, price-locked quotes &amp; zero car substitutions</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-3.5 text-center">
                  <p className="text-xs italic text-slate-300">
                    &ldquo;I believe passengers deserve to know the exact car and driver picking them up—with no algorithm lottery.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: FLEET ENGINEERING MATRIX (AUTOMOTIVE SPECIFICATION) */}
        <section className="px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                AUTOMOTIVE RIGOR • 2024–2026 STANDARDS
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Engineered for Long-Distance Passenger Comfort
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We treat passenger comfort as an engineering baseline. Every Lucky Travels vehicle adheres to strict mechanical, climate, and cargo standards:
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {fleetEngineeringSpecs.map((spec) => {
                const IconComponent = spec.icon;
                return (
                  <div
                    key={spec.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                        <IconComponent size={20} />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wide text-slate-600">
                        {spec.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-slate-900">{spec.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {spec.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* The Sedan-Upgrade Bridge Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 text-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <p className="text-xs sm:text-sm leading-relaxed">
                  <strong>The Sedan Alternative:</strong> Innova-grade 3-row comfort and 4 large suitcases boot space for barely a fraction more than basic sedan cab rates.
                </p>
              </div>
              <Link
                href="/car-rental-bangalore"
                className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-xs font-black text-white hover:bg-slate-800 transition"
              >
                View Hourly Rates →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 4-STAGE ORIGIN BLUEPRINT (STEP ARCHITECTURE) */}
        <section className="border-y border-slate-200 bg-white px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                THE FOUNDER&apos;S JOURNEY
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                How Lucky Travels Was Built
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                The shift from a multi-car aggregator idea to Bengaluru&apos;s dedicated Premium Ertiga service:
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {founderTimeline.map((step) => (
                <div
                  key={step.phase}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-2xl font-black text-slate-300 font-mono">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-black uppercase text-purple-700">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-700 underline decoration-purple-300 hover:text-purple-900"
              >
                Read Bharath&apos;s in-depth founder essay on our fleet model →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE TRUST CHARTER & COMMITMENTS */}
        <section className="px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                OUR TRUST CHARTER
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Four Commitments on Every Trip
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                What every guest is guaranteed when reserving through Go Bengaluru by Lucky Travels:
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustCommitments.map((charter, i) => (
                <div
                  key={charter.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm flex items-start gap-4"
                >
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-black text-emerald-800 text-sm shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{charter.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {charter.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Rating Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-900">
                  4.9 / 5 Verified Rating across airport transfers &amp; outstation tours
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Verified Chauffeurs • Yellow-Board Commercial Compliant
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 4: SERVICE PILLARS (CLEAN CANONICAL ARCHITECTURE) */}
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                  CORE HUBS
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Where We Operate Across Bengaluru &amp; Beyond
                </h2>
              </div>
              <Link href="/contact" className="text-xs font-bold text-purple-700 underline">
                Have specific journey requirements? Contact us →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/airport-taxi-bangalore"
                className="rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition"
              >
                <span className="text-2xl mb-2 inline-block">✈️</span>
                <h3 className="text-base font-bold text-slate-900">Bangalore Airport Taxi</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Kempegowda Airport (BLR T1 &amp; T2) transfers across Whitefield, E-City, and Sarjapur.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-purple-700">
                  Airport Hub <ArrowRight size={13} />
                </span>
              </Link>

              <Link
                href="/car-rental-bangalore"
                className="rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition"
              >
                <span className="text-2xl mb-2 inline-block">⏱️</span>
                <h3 className="text-base font-bold text-slate-900">Hourly City Rental</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  8h/80km, 10h/100km &amp; 12h disposal packages for weddings, meetings, and shopping.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-purple-700">
                  Rental Packages <ArrowRight size={13} />
                </span>
              </Link>

              <Link
                href="/corporate-car-rental-bangalore"
                className="rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition"
              >
                <span className="text-2xl mb-2 inline-block">💼</span>
                <h3 className="text-base font-bold text-slate-900">Corporate Car Rental</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Executive chauffeur-driven Ertiga service with compliant GST billing for IT firms.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-purple-700">
                  Corporate Mobility <ArrowRight size={13} />
                </span>
              </Link>

              <Link
                href="/outstation-cabs-bangalore"
                className="rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition"
              >
                <span className="text-2xl mb-2 inline-block">🛣️</span>
                <h3 className="text-base font-bold text-slate-900">Outstation Cabs</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Comfortable highway trips to Mysore, Srirangapatna, Coorg, Ooty, and Tirupati.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-purple-700">
                  Outstation Routes <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}