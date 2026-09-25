import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Luggage,
  Coffee,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Calendar,
  User,
  Sparkles,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { PopularOutstationRoutes } from "@/components/sections/OutstationCorridorPage";

export const metadata: Metadata = {
  title: "Bangalore to Ooty Cab | Nilgiris Tour Package & 6+1 Ertiga Taxi",
  description:
    "Book an owner-operated Bangalore to Ooty cab in a dedicated 6+1 Ertiga. Bandipur forest safari corridor, 36 hairpin bends via Kalhatty/Gudalur, Tamil Nadu permit assistance & transparent fares.",
  alternates: { canonical: `${SITE.url}/bangalore-to-ooty-cab` },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What are the Bandipur forest night travel timings on the way to Ooty?",
    answer:
      "The Bandipur-Mudumalai forest corridor is strictly closed to all vehicular traffic from 9:00 PM to 6:00 AM daily to protect wildlife. We recommend starting from Bangalore by 5:30 AM to 6:00 AM so you reach Bandipur in pleasant daylight and reach your Ooty hotel by 1:30 PM.",
  },
  {
    question: "Are Tamil Nadu state border permit fees included in the taxi quote?",
    answer:
      "Yes. Commercial tourist cabs registered in Karnataka must obtain an official Tamil Nadu entry permit. Lucky Travels clearly itemizes the TN state border permit, interstate toll charges, and driver day allowances upfront so there are zero surprises at the border checkpost.",
  },
  {
    question: "Is the Ertiga suitable for the steep 36 hairpin bends of Kalhatty Ghat?",
    answer:
      "Yes. Our Ertiga is commercially maintained with excellent hill brakes, responsive transmission, and fresh tires, driven by seasoned highway chauffeurs experienced with steep Nilgiri mountain ascents and hairpin safety.",
  },
  {
    question: "Can we cover both Ooty and Coonoor during our tour package?",
    answer:
      "Yes. With a private 3-day or 4-day cab booking, your driver stays with you throughout. You can spend two days exploring Ooty and easily take a day excursion to Coonoor tea estates and Sim's Park at your own family pace.",
  },
];

export default function BangaloreToOotyCabPage() {
  const routeUrl = `${SITE.url}/bangalore-to-ooty-cab`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a Bangalore to Ooty Cab package.
Travel Date:
Pickup Area & Time:
Trip Duration:
Passengers & Luggage Count:`
  )}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Bangalore to Ooty Cab Package Enquiry - Lucky Travels"
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: "Bangalore to Ooty Cab Package in a Premium Ertiga",
    serviceType: "Bangalore to Ooty outstation taxi service",
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      brand: { "@type": "Brand", name: SITE.brand },
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "Place", name: "Ooty" },
      { "@type": "Place", name: "Coonoor" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/gallery/ooty-tea-gardens-ertiga-cab.jpg`,
    logo: `${SITE.url}/images/logo/favicon.png`,
    priceRange: "₹₹",
    telephone: "+919886814344",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Konena Agrahara, HAL",
      addressLocality: "Bengaluru",
      postalCode: "560017",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    description:
      "Book an owner-operated Bangalore to Ooty cab in a dedicated 6+1 Ertiga. Bandipur forest safari corridor, 36 hairpin bends via Kalhatty/Gudalur, Tamil Nadu permit assistance & transparent fares.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: "Bangalore to Ooty Cab", item: routeUrl },
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

      <main className="min-h-screen bg-[#fafaf9] py-8 sm:py-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          
          {/* BREADCRUMB NAVIGATION */}
          <div className="mb-6">
            <Link
              href="/outstation-cabs-bangalore"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-700 hover:underline"
            >
              <ArrowLeft size={14} /> Back to Outstation Packages
            </Link>
          </div>

          {/* TRIPLE CAPSULE BADGES */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-teal-800">
              <Calendar size={13} className="text-teal-700" /> UPDATED 2026-09-25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> BHARATH K S
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900 border border-amber-200">
              <Sparkles size={13} className="text-amber-700" /> VERIFIED NILGIRIS GUIDE
            </span>
          </div>

          {/* MAIN ARTICLE HEADLINE */}
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Bangalore to Ooty Cab: Nilgiris Tour Package, Bandipur Forest Timings &amp; Ertiga Taxi Guide
          </h1>

          {/* INTRO WITH ORGANIC KEYWORD TARGETING */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            Crowned the <em>Queen of Hill Stations</em>, <strong>Ooty (Udhagamandalam)</strong> and its sister town Coonoor offer tea gardens, colonial heritage, and cool Nilgiri mountain air. Planning a <em>Bangalore to Ooty cab package</em> involves crucial route coordination—including the <strong>Bandipur Tiger Reserve night travel restrictions</strong>, Tamil Nadu commercial border permits, and steep ghat ascents. This guide explains road conditions, safari timings, viewpoint stops, and our dedicated <strong>6+1 Premium Maruti Suzuki Ertiga</strong> chauffeur service.
          </p>

          {/* FEATURED HERO IMAGE WITH ZOOM-ON-HOVER */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/ooty-tea-gardens-ertiga-cab.jpg"
                alt="Lucky Travels white Maruti Ertiga commercial cab parked by rolling tea estates in Ooty Nilgiris"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Nilgiri Tea Slopes:</strong> Our commercially certified white Ertiga fleet overlooking emerald green tea estates in Ooty and Coonoor.</span>
              <span className="text-teal-700 font-semibold shrink-0">Photo: Lucky Travels</span>
            </figcaption>
          </figure>

          {/* SECTION: ROUTE OVERVIEW WITH CONTEXTUAL INTERLINKS */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Route Distance, Bandipur Timings &amp; Ghat Safety
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              The driving distance from Bengaluru to Ooty is approximately <strong>280 kilometers</strong>, taking <strong>6.5 to 7.5 hours</strong>. The smoothest route travels via the <strong>NH-275 Mysuru Expressway</strong>, continues past Nanjangud and Gundlupet on NH-766, and cuts through <em>Bandipur National Park</em> into Tamil Nadu&apos;s Mudumalai sanctuary. From Theppakadu, vehicles climb to Ooty either via the legendary 36 hairpin bends of Kalhatty (subject to local administration permission for out-of-state cars) or the gentle, scenic Gudalur highway.
            </p>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Flying in to begin your South Indian holiday? Book our direct <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">Kempegowda Airport taxi pickup</Link> to bypass city congestion. You can also explore our <Link href="/bangalore-to-mysore-cab" className="font-bold text-purple-700 underline">Bangalore to Mysore palace tour</Link>, the sacred <Link href="/bangalore-to-tirupati-cab" className="font-bold text-purple-700 underline">Bangalore to Tirupati darshan package</Link>, or the peaceful <Link href="/blog/bangalore-to-adiyogi-chikkaballapur-cab-route-timings-ertiga-guide" className="font-bold text-purple-700 underline">Bangalore to Adiyogi evening guide</Link>.
            </p>

            {/* QUICK STATS METRICS GRID */}
            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-teal-700 tracking-wider">
                  <MapPin size={15} /> Total Highway Distance
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">280 km</p>
                <p className="mt-1 text-xs text-slate-500">Bengaluru to Ooty / Coonoor</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-teal-700 tracking-wider">
                  <Clock size={15} /> Driving Pacing
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">6.5 to 7.5 Hrs</p>
                <p className="mt-1 text-xs text-slate-500">Including Bandipur forest crossing</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-teal-700 tracking-wider">
                  <ShieldCheck size={15} /> Fleet Classification
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">6+1 Premium Ertiga</p>
                <p className="mt-1 text-xs text-slate-500">TN border tax cleared • Hill ascent ready</p>
              </div>
            </div>

            {/* CALLOUT BOX: BANDIPUR FOREST WARNING */}
            <div className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-6 text-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <AlertCircle size={20} className="text-amber-600" />
                <span>Critical Travel Notice: Bandipur Forest Night Gates Closure (9 PM – 6 AM)</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-amber-950 text-justify">
                <em>The Bandipur-Mudumalai forest highway strictly shuts down from 9:00 PM to 6:00 AM every single night</em> with no exceptions for private or commercial vehicles. We always schedule departures from Bengaluru between <strong>5:30 AM and 6:00 AM</strong>. This guarantees a safe, scenic daylight crossing where spotting wild elephants, deer, and peacocks along the road shoulder is common.
              </p>
            </div>
          </section>

          {/* SECTION: 3-DAY ITINERARY TIMELINE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended 3-Day (2N/3D) Ooty &amp; Coonoor Itinerary
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Designed around leisurely tea garden walks, mountain peaks, and botanical heritage:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 6:00 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Departure via Mysuru Expressway</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Punctual doorstep pickup in your 6+1 Ertiga. Cruise along the expressway with an early breakfast stop in Ramanagara before bypassing Mysuru city.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 10:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Bandipur &amp; Mudumalai Wildlife Corridor</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Cruise carefully at safe forest limits (40 km/h) through the deciduous teak jungle, followed by seamless Tamil Nadu border permit verification.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 2:00 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Arrival in Ooty &amp; Ooty Lake Boathouse</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Check in at your hotel, enjoy lunch in town, and take a relaxed afternoon paddle boat ride on Ooty Lake surrounded by eucalyptus groves.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 9:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Doddabetta Peak &amp; Nilgiri Tea Factory</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Ascend to the highest summit in the Nilgiris (2,637 m) for breathtaking valley panoramas, followed by a live factory tour showing tea processing and chocolate making.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 2:00 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Coonoor Excursion: Sim&apos;s Park &amp; Dolphin&apos;s Nose</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Drive down to Coonoor to explore rare botanical species at Sim&apos;s Park and view Catherine Falls cascading through the gorges from Dolphin&apos;s Nose.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 3 — 9:30 AM - 8:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Botanical Gardens &amp; Return to Bengaluru</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Stroll through the 55-acre Government Botanical Gardens, shop for homemade chocolates and eucalyptus oils, and begin the smooth return drive home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECOND EMBEDDED HIGHWAY PHOTO WITH ZOOM-ON-HOVER */}
          <figure className="group my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/bandipur-forest-safari-route-ertiga.jpg"
                alt="Lucky Travels white Ertiga commercial cab cruising through Bandipur National Park on the way to Ooty"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
              <strong>Bandipur Tiger Reserve Highway:</strong> Safe daytime cruising through the protected forest corridor connecting Karnataka and Tamil Nadu.
            </figcaption>
          </figure>

          {/* SECTION: HIGHWAY FOOD STOPS */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended Pitstops &amp; Highway Restaurants
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Longer mountain journeys make clean dining and well-kept washrooms essential:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Expressway Breakfast
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Paakashala / Shivalli</h3>
                <p className="mt-1 text-xs text-slate-600">Pure vegetarian breakfast buffet, spotless restrooms</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-275 Ramanagara</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Forest Gate Rest Stop
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Cafe Coffee Day / Nijaguna</h3>
                <p className="mt-1 text-xs text-slate-600">Quick refreshments before entering national park gates</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">Gundlupet Junction</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Ghat Entry Lunch
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Hotel Hill Rest Gudalur</h3>
                <p className="mt-1 text-xs text-slate-600">Hot meals and Nilgiri tea before starting the hill climb</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">Gudalur Town</p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERSION MID-POST CTA CARD */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              DEDICATED ERTIGA CHAUFFEUR SERVICE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Book Your Bangalore to Ooty Cab?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Enjoy peaceful mountain travel in our sanitized <strong>6+1 Maruti Suzuki Ertiga</strong>. Chauffeur Bharath K S brings years of seasoned hill driving experience, upfront fixed billing, and complete Tamil Nadu border permit assistance. Need local intra-city drops first? Review our <Link href="/car-rental-bangalore" className="font-bold text-amber-300 underline">hourly car rental packages in Bangalore</Link>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-[#080d2b] shadow-md transition hover:bg-slate-100 text-sm"
              >
                <Phone size={18} /> Call +91 {SITE.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white shadow-md transition hover:bg-green-700 text-sm"
              >
                <MessageCircle size={18} /> WhatsApp for Instant Quote
              </a>
              <a
                href={emailUrl}
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-xs font-bold text-white transition hover:bg-white/10"
              >
                Email Booking Details
              </a>
            </div>
          </section>

          {/* SECTION: FLEET & LUGGAGE GUIDANCE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              6+1 Maruti Suzuki Ertiga: Seating &amp; Luggage Space
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              {SITE.specialisationSlogan} We never allocate small hatchbacks or congested sedans. Here is how your family travels:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-teal-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">4 to 5 Passengers (With Winter Woolens)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Folding the third row flat provides ample cargo space for 4 large trolley suitcases packed with heavy woolen jackets, shawls, and shopping boxes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-teal-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">6 Passengers (Day Excursion Setup)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    All six passenger seats utilized comfortably with ergonomic legroom. Rear boot accommodates 2 to 3 compact cabin bags and soft duffels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Dedicated passenger roof blowers guarantee steady cooling across the hot plains before switching over to cool mountain breezes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Seasoned Mountain Experience</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Experienced with steep Nilgiri gradients, descending hairpin engine braking, and high-altitude safety guidelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-teal-700" /> Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* BOTTOM CROSS-LINKING NAVIGATION */}
        <div className="mt-16">
          <PopularOutstationRoutes currentSlug="bangalore-to-ooty-cab" />
        </div>
      </main>
    </SiteShell>
  );
}