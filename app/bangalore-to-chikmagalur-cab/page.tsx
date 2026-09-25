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
  title: "Bangalore to Chikmagalur Cab | 2N/3D Tour Package & 6+1 Ertiga Taxi",
  description:
    "Book an owner-operated Bangalore to Chikmagalur cab in a dedicated 6+1 Ertiga. Mullayanagiri peak, Baba Budangiri, Belur Hoysala temples, coffee estates & transparent round-trip pricing.",
  alternates: { canonical: `${SITE.url}/bangalore-to-chikmagalur-cab` },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What is the best itinerary for a Bangalore to Chikmagalur cab package?",
    answer:
      "A 3-day (2 Nights / 3 Days) package is recommended. Day 1 includes travel via the Hassan highway with an en-route heritage stop at Belur Chennakeshava Temple. Day 2 is dedicated to Mullayanagiri peak, Baba Budangiri, and coffee plantation walks. Day 3 features local waterfalls and Halebidu temple exploration before the smooth drive back to Bangalore.",
  },
  {
    question: "How does the Ertiga perform on the narrow roads leading up to Mullayanagiri?",
    answer:
      "Mullayanagiri's upper roads are narrow with sharp passing bays. Our Ertiga provides excellent maneuverability, high ground clearance, and strong torque, driven by an experienced owner-chauffeur trained in polite mountain etiquette.",
  },
  {
    question: "Can we include Belur and Halebeedu temples during our journey?",
    answer:
      "Yes. Belur is directly along the route from Hassan to Chikmagalur, making it an effortless 1 to 2-hour stopover. Halebeedu is just a short 20-minute detour. Because your cab is private, you can customize historical stops without extra hassle.",
  },
  {
    question: "How are round-trip charges and waiting time calculated for Chikmagalur?",
    answer:
      "We offer completely transparent all-inclusive estimates covering total round-trip distance, driver day allowance, toll expressway fees, and waiting hours at sightseeing points. You get upfront clarity with zero unexpected demands.",
  },
];

export default function BangaloreToChikmagalurCabPage() {
  const routeUrl = `${SITE.url}/bangalore-to-chikmagalur-cab`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a Bangalore to Chikmagalur Cab package.
Travel Date:
Pickup Area & Time:
Trip Duration:
Passengers & Luggage Count:`
  )}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Bangalore to Chikmagalur Cab Package Enquiry - Lucky Travels"
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: "Bangalore to Chikmagalur Cab Package in a Premium Ertiga",
    serviceType: "Bangalore to Chikmagalur outstation taxi service",
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
      { "@type": "Place", name: "Chikmagalur" },
      { "@type": "Place", name: "Mullayanagiri" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/gallery/chikmagalur-mullayanagiri-hills-ertiga-cab.jpg`,
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
      "Book an owner-operated Bangalore to Chikmagalur cab in a dedicated 6+1 Ertiga. Mullayanagiri peak, Baba Budangiri, Belur Hoysala temples, coffee estates & transparent round-trip pricing.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: "Bangalore to Chikmagalur Cab", item: routeUrl },
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
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900">
              <Calendar size={13} className="text-amber-700" /> UPDATED 2026-09-25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> BHARATH K S
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-purple-800 border border-purple-200">
              <Sparkles size={13} className="text-purple-700" /> VERIFIED MALNAD GUIDE
            </span>
          </div>

          {/* MAIN ARTICLE HEADLINE */}
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Bangalore to Chikmagalur Cab: Mullayanagiri Peak, Belur Heritage &amp; Ertiga Tour Guide
          </h1>

          {/* INTRO WITH ORGANIC KEYWORD TARGETING */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            Renowned as the birthplace of coffee in India, <strong>Chikmagalur</strong> offers a combination of misty peaks, sprawling Arabica plantations, and centuries-old architectural marvels. Organizing a <em>Bangalore to Chikmagalur 3-day cab tour</em> requires balancing mountain driving up to <strong>Mullayanagiri (Karnataka&apos;s highest peak)</strong> with heritage detours to the UNESCO-listed Hoysala temples at <strong>Belur and Halebidu</strong>. This guide breaks down the smooth <strong>NH-75 Hassan Highway</strong> corridor, iconic breakfast stops, estate resort tips, and our dedicated <strong>6+1 Premium Maruti Suzuki Ertiga</strong> chauffeur service.
          </p>

          {/* FEATURED HERO IMAGE WITH ZOOM-ON-HOVER */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/chikmagalur-mullayanagiri-hills-ertiga-cab.jpg"
                alt="Lucky Travels white Maruti Ertiga commercial cab ascending the mountain road to Mullayanagiri peak in Chikmagalur"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Western Ghats Ascent:</strong> Our commercially certified white Ertiga fleet navigating the scenic ghat roads toward Mullayanagiri peak.</span>
              <span className="text-amber-800 font-semibold shrink-0">Photo: Lucky Travels</span>
            </figcaption>
          </figure>

          {/* SECTION: ROUTE OVERVIEW WITH CONTEXTUAL INTERLINKS */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Route Distance, Highway Quality &amp; Driving Time
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              The driving distance from central Bengaluru to Chikmagalur is approximately <strong>245 kilometers</strong>, taking <strong>4.5 to 5.5 hours</strong>. The highway leaves Bengaluru via the elevated tollway past Nelamangala onto the smooth 4-lane <strong>NH-75 expressway</strong>, cruising through Kunigal, Yediyur, and Channarayapatna. Bypassing Hassan, the route continues through Belur straight into the foothills of the Western Ghats. The expressway is wide and well-marked, making it one of Karnataka&apos;s most relaxing road-trip corridors.
            </p>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Tourists landing at Bengaluru airport can reserve our direct <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">Kempegowda Airport taxi service</Link> to head straight toward Malnad without entering Bengaluru city traffic. Comparing other scenic weekend getaways? Explore our <Link href="/bangalore-to-coorg-cab" className="font-bold text-purple-700 underline">Bangalore to Coorg coffee tour</Link>, the heritage circuit on our <Link href="/bangalore-to-mysore-cab" className="font-bold text-purple-700 underline">Bangalore to Mysore cab package</Link>, or the evening excursion to <Link href="/blog/bangalore-to-adiyogi-chikkaballapur-cab-route-timings-ertiga-guide" className="font-bold text-purple-700 underline">Bangalore to Adiyogi Chikkaballapura</Link>.
            </p>

            {/* QUICK STATS METRICS GRID */}
            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-800 tracking-wider">
                  <MapPin size={15} /> Highway Distance
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">245 km</p>
                <p className="mt-1 text-xs text-slate-500">Bengaluru to Chikmagalur town</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-800 tracking-wider">
                  <Clock size={15} /> Average Travel Time
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">4.5 to 5.5 Hrs</p>
                <p className="mt-1 text-xs text-slate-500">Via 4-lane NH-75 Hassan Highway</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-800 tracking-wider">
                  <ShieldCheck size={15} /> Fleet Classification
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">6+1 Premium Ertiga</p>
                <p className="mt-1 text-xs text-slate-500">Commercially certified • High road clearance</p>
              </div>
            </div>

            {/* CALLOUT BOX: BELUR HERITAGE DETOUR */}
            <div className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-6 text-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <AlertCircle size={20} className="text-amber-700" />
                <span>Chauffeur Heritage Tip: Do Not Skip the Belur Chennakeshava Temple</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-amber-950 text-justify">
                <em>Belur sits directly along your driving route between Hassan and Chikmagalur.</em> Rather than rushing past, plan a 90-minute stopover to admire the 12th-century soapstone carvings and star-shaped architecture of the <strong>Chennakeshava Temple</strong>. Because our cab service is private and dedicated, this heritage visit fits naturally into Day 1 without rushing your resort check-in.
              </p>
            </div>
          </section>

          {/* SECTION: 3-DAY ITINERARY TIMELINE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended 3-Day (2N/3D) Chikmagalur Mountain Itinerary
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              An itinerary balancing high-altitude peaks, secluded waterfalls, and historic Hoysala architecture:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 6:00 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Doorstep Departure via Hassan Highway</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Smooth morning departure from Bengaluru along the 4-lane expressway with a traditional breakfast stop near Yediyur or Kunigal.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 11:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Belur Chennakeshava Temple Exploration</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Marvel at world-famous Hoysala stone sculptures, carved bracket figures, and the ornate gopuram of the 12th-century monument.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 2:00 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Chikmagalur Homestay Check-in &amp; Estate Walk</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Arrive in the hills, check into your coffee resort, savor traditional Malnad-style cuisine, and take an evening walk through the coffee and cardamom bushes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 8:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Ascent to Mullayanagiri Peak (1,930 m)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Drive up scenic winding mountain roads to Karnataka&apos;s highest point. Climb the stone steps to the summit temple for sweeping panoramic views of the Western Ghats.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 1:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Baba Budangiri &amp; Jhari (Buttermilk) Falls</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Visit the historic cave shrine of Baba Budangiri and arrange a local 4x4 jeep ride down through the private plantation to the refreshing cascades of Jhari Falls.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 3 — 9:30 AM - 7:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Hirekolale Lake, Halebidu Temple &amp; Return</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Visit scenic Hirekolale Lake, shop for fresh Arabica coffee powder in Chikmagalur town, make a short detour to the Hoysaleswara Temple at Halebidu, and return smoothly to Bengaluru by 7:30 PM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECOND EMBEDDED HIGHWAY PHOTO WITH ZOOM-ON-HOVER */}
          <figure className="group my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/belur-chennakeshava-temple-ertiga-trip.jpg"
                alt="Lucky Travels white Maruti Ertiga commercial cab parked outside the historic Belur Chennakeshava Temple"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
              <strong>Hoysala Heritage Stopover:</strong> Visiting the 12th-century Belur Chennakeshava Temple along the highway to Chikmagalur.
            </figcaption>
          </figure>

          {/* SECTION: HIGHWAY FOOD STOPS */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended Pitstops &amp; Highway Restaurants
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              The Hassan Highway (NH-75) features some of Karnataka&apos;s best family-friendly vegetarian food courts:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Highway Classic
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Swathi Delicacy</h3>
                <p className="mt-1 text-xs text-slate-600">Crispy Masala Dosa, Thatte Idli, Filter Coffee &amp; clean restrooms</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-75, Near Yediyur</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Family Food Court
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Paakashala Yediyur</h3>
                <p className="mt-1 text-xs text-slate-600">Air-conditioned vegetarian dining hall and extensive parking</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-75 Kunigal-Yediyur</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Midday Lunch Stop
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Hotel Mayura Hassan</h3>
                <p className="mt-1 text-xs text-slate-600">Wholesome South and North Indian meals before entering the hills</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">Hassan Bypass Junction</p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERSION MID-POST CTA CARD */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              DEDICATED ERTIGA CHAUFFEUR SERVICE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Book Your Bangalore to Chikmagalur Cab?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Travel comfortably in our sanitized <strong>6+1 Maruti Suzuki Ertiga</strong> with owner-operator Bharath K S. Enjoy fixed outstation quotes, skilled hill driving, and zero cancellation surprises. Need local intra-city drops first? Review our <Link href="/car-rental-bangalore" className="font-bold text-amber-300 underline">hourly car rental packages in Bangalore</Link>.
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
                <Luggage size={24} className="shrink-0 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">4 to 5 Passengers (With Luggage)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Folding the third row flat provides an expansive boot holding 4 large trolley suitcases, trekking bags, and boxes of fresh Chikmagalur coffee.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">6 Passengers (Weekend Trip Setup)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    All three seating rows upright with generous legroom. Boot easily stores 2 to 3 compact cabin trolley bags and soft duffels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Middle and rear roof-mounted vents keep passenger rows cool along the open expressway before entering the cool hills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Polite Mountain Etiquette</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Expertly driven by owner-operator Bharath K S with calm cornering, courteous passing bay etiquette, and punctuality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-amber-800" /> Frequently Asked Questions
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
          <PopularOutstationRoutes currentSlug="bangalore-to-chikmagalur-cab" />
        </div>
      </main>
    </SiteShell>
  );
}