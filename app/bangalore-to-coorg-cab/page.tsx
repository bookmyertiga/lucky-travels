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
  title: "Bangalore to Coorg Cab | 2N/3D Tour Package & 6+1 Ertiga Taxi",
  description:
    "Book an owner-operated Bangalore to Coorg cab in a dedicated 6+1 Ertiga. 3-day weekend coffee estate packages to Madikeri, Kushalnagar, Abbey Falls & transparent round-trip fares.",
  alternates: { canonical: `${SITE.url}/bangalore-to-coorg-cab` },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What is the best itinerary for a Bangalore to Coorg 3-day cab trip?",
    answer:
      "A 3-day (2 Nights / 3 Days) package is ideal. Day 1 covers Bylakuppe Golden Temple and Dubare Elephant Camp en route to your homestay. Day 2 explores Madikeri Fort, Abbey Falls, Mandalpatti view point, and Raja's Seat sunset. Day 3 allows peaceful plantation visits and spice shopping before returning to Bengaluru by late evening.",
  },
  {
    question: "Can your Ertiga cab reach remote coffee plantation homestays in Coorg?",
    answer:
      "Our commercially maintained Maruti Suzuki Ertiga comfortably handles all paved estate roads, private resort driveways, and regular hill terrain across Madikeri, Kushalnagar, and Virajpet. For extreme rocky off-road trails like the final peak of Mandalpatti, local 4x4 jeeps are hired on-site as required by forest guidelines.",
  },
  {
    question: "How is the Bangalore to Coorg round-trip cab fare structured?",
    answer:
      "We offer clear, transparent outstation billing based on total package duration, kilometers, driver day allowances, and highway tolls. Unlike ride-hailing apps, our quotes are fixed upfront with no mid-trip surge or return-fare arguments.",
  },
  {
    question: "How much luggage can 5 or 6 passengers bring for a Coorg weekend?",
    answer:
      "For 4 to 5 passengers, folding the third row provides ample cargo space for 4 large suitcases, trekking gear, and boxes of fresh Coorg coffee and spices. For 6 passengers, the boot holds 2 to 3 compact trolley bags and soft duffels.",
  },
];

export default function BangaloreToCoorgCabPage() {
  const routeUrl = `${SITE.url}/bangalore-to-coorg-cab`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a Bangalore to Coorg Cab package.
Travel Date:
Pickup Area & Time:
Trip Duration (e.g. 2N/3D):
Passengers & Luggage Count:`
  )}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Bangalore to Coorg Cab Package Enquiry - Lucky Travels"
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: "Bangalore to Coorg Cab Package in a Premium Ertiga",
    serviceType: "Bangalore to Coorg outstation taxi service",
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
      { "@type": "Place", name: "Coorg" },
      { "@type": "Place", name: "Madikeri" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/gallery/coorg-coffee-estate-ertiga-cab.jpg`,
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
      "Book an owner-operated Bangalore to Coorg cab in a dedicated 6+1 Ertiga. 3-day weekend coffee estate packages to Madikeri, Kushalnagar, Abbey Falls & transparent round-trip fares.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: "Bangalore to Coorg Cab", item: routeUrl },
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
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-emerald-800">
              <Calendar size={13} className="text-emerald-700" /> UPDATED 2026-09-25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> BHARATH K S
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900 border border-amber-200">
              <Sparkles size={13} className="text-amber-700" /> VERIFIED HILL STATION GUIDE
            </span>
          </div>

          {/* MAIN ARTICLE HEADLINE */}
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Bangalore to Coorg Cab: 3-Day Tour Package, Route, Coffee Homestays &amp; Ertiga Taxi Guide
          </h1>

          {/* INTRO WITH ORGANIC KEYWORD TARGETING */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            Known affectionately as the <em>Scotland of India</em>, <strong>Coorg (Kodagu)</strong> is Karnataka&apos;s premier mountain retreat, celebrated for its misty coffee plantations, gushing waterfalls, and authentic Kodava hospitality. Whether you are organizing a <em>Bangalore to Coorg 3-day weekend cab package</em> or a quiet family staycation in Madikeri or Kushalnagar, this comprehensive guide details the best driving routes via the <strong>Bengaluru-Mysuru Expressway (NH-275)</strong>, curated highway pitstops, plantation visit timings, and our dedicated <strong>6+1 Premium Maruti Suzuki Ertiga</strong> chauffeur service.
          </p>

          {/* FEATURED HERO IMAGE WITH ZOOM-ON-HOVER */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/coorg-coffee-estate-ertiga-cab.jpg"
                alt="Lucky Travels white Maruti Ertiga commercial cab parked inside a lush Coorg coffee plantation"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Coorg Coffee Country:</strong> Our commercially certified white Ertiga fleet parked amidst lush silver oak trees and pepper plantations in Kodagu.</span>
              <span className="text-emerald-700 font-semibold shrink-0">Photo: Lucky Travels</span>
            </figcaption>
          </figure>

          {/* SECTION: ROUTE OVERVIEW WITH CONTEXTUAL INTERLINKS */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Route Distance, Highway Quality &amp; Pacing
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              The driving distance from central Bengaluru to Madikeri is approximately <strong>250 to 270 kilometers</strong>, averaging <strong>5.5 to 6.5 hours</strong> depending on your exact homestay location. The route begins on the 10-lane <strong>Bengaluru-Mysuru Expressway (NH-275)</strong>, allowing you to bypass Mandya and Srirangapatna swiftly before transitioning via the Mysuru Ring Road toward Hunsur, Periyapatna, and Kushalnagar. The roads are broad, well-paved, and gentle, avoiding stressful hairpin bends and making it exceptionally comfortable for seniors and young children.
            </p>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Guests landing in Bengaluru can arrange our direct <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">Kempegowda International Airport taxi pickup</Link> to head straight toward the hills. If you are comparing holiday circuits across Karnataka, review our <Link href="/bangalore-to-mysore-cab" className="font-bold text-purple-700 underline">Bangalore to Mysore heritage tour</Link>, the wildlife corridor on our <Link href="/bangalore-to-ooty-cab" className="font-bold text-purple-700 underline">Bangalore to Ooty cab package</Link>, or the mountain ridges on the <Link href="/bangalore-to-chikmagalur-cab" className="font-bold text-purple-700 underline">Bangalore to Chikmagalur coffee tour</Link>.
            </p>

            {/* QUICK STATS METRICS GRID */}
            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-emerald-700 tracking-wider">
                  <MapPin size={15} /> Total Highway Distance
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">260 km</p>
                <p className="mt-1 text-xs text-slate-500">Doorstep pickup to Madikeri / Kushalnagar</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-emerald-700 tracking-wider">
                  <Clock size={15} /> Average Travel Time
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">5.5 to 6.5 Hrs</p>
                <p className="mt-1 text-xs text-slate-500">Via NH-275 Mysuru Expressway &amp; Hunsur</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-emerald-700 tracking-wider">
                  <ShieldCheck size={15} /> Fleet Classification
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">6+1 Premium Ertiga</p>
                <p className="mt-1 text-xs text-slate-500">Commercially certified • High ground clearance</p>
              </div>
            </div>

            {/* CALLOUT BOX: CHAUFFEUR TIMING TIP */}
            <div className="my-8 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/70 p-6 text-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-900 font-bold">
                <AlertCircle size={20} className="text-emerald-700" />
                <span>Chauffeur Insider Tip: Synchronize with Bylakuppe Monastery Timings</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-emerald-950 text-justify">
                <em>Start your journey between 6:00 AM and 6:30 AM from Bengaluru.</em> This allows you to cruise past the expressway smoothly, pause for breakfast in Ramanagara or Maddur, and reach <strong>Bylakuppe Golden Temple (Namdroling Monastery)</strong> by 11:30 AM before midday prayer hall closures. You can explore the Tibetan settlement and handicrafts peacefully before checking into your Madikeri homestay.
              </p>
            </div>
          </section>

          {/* SECTION: 3-DAY ITINERARY TIMELINE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended 3-Day (2N/3D) Coorg Sightseeing Itinerary
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              This balanced family circuit covers major heritage landmarks, elephant river interactions, cascading waterfalls, and panoramic sunset viewpoints:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 6:00 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Doorstep Departure via Mysuru Expressway</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Pickup from your residence in Bengaluru. Cruise along the 10-lane expressway with a short stop for hot breakfast and authentic filter coffee near Maddur.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 11:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Namdroling Monastery (Tibetan Golden Temple)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Explore India&apos;s second-largest Tibetan settlement in Bylakuppe. Marvel at 40-foot gilded Buddha statues, peaceful prayer halls, and authentic Tibetan souvenir stalls.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 1 — 2:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Dubare Elephant Camp &amp; River Cauvery</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Cross the Cauvery river by boat to observe elephant bathing, feeding, and riverside nature trails before checking in at your coffee plantation resort or homestay.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 9:00 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Talacauvery &amp; Bhagamandala Pilgrimage</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Drive up through the mist-covered Brahmagiri hills to visit the holy source of River Cauvery and the sacred temple confluence at Bhagamandala.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 2:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Abbey Falls &amp; Coffee Plantation Walk</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Walk down to the hanging bridge facing the roaring cascades of Abbey Falls, surrounded by lush spice groves and guided coffee estate trails.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 2 — 5:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Sunset at Raja&apos;s Seat &amp; Musical Fountain</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Take in sweeping golden sunset views over the Western Ghats valleys from the historic gardens once favored by the kings of Kodagu.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> Day 3 — 10:00 AM - 7:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Madikeri Fort, Spice Shopping &amp; Return to Bengaluru</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Visit the 17th-century Madikeri Fort, shop for fresh estate spices, handmade chocolates, and freshly roasted coffee beans before an easy highway return dropping you home by 7:30 PM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECOND EMBEDDED PHOTO WITH ZOOM-ON-HOVER */}
          <figure className="group my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/bylakuppe-golden-temple-ertiga-tour.jpg"
                alt="White Maruti Ertiga commercial cab arriving at Namdroling Monastery Bylakuppe during Coorg tour"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
              <strong>Bylakuppe Cultural Stop:</strong> Visiting the Namdroling Monastery in Kushalnagar during our dedicated Bangalore to Coorg tour package.
            </figcaption>
          </figure>

          {/* SECTION: HIGHWAY FOOD STOPS */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Curated Highway Food Plazas &amp; Rest Stops
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Long drives with family require clean washrooms, hygienic dining, and quality coffee. Here are verified favorites along the expressway corridor:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Breakfast Specialty
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Paakashala / Maddur Tiffany&apos;s</h3>
                <p className="mt-1 text-xs text-slate-600">Crispy Vadas, Maddur Vada, Thatte Idli &amp; Filter Coffee</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-275 Expressway Stretch</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Lunch &amp; Tiffins
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Cafe County / Annapoorna</h3>
                <p className="mt-1 text-xs text-slate-600">Wholesome meals, clean restrooms before entering Coorg hills</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">Hunsur Highway Junction</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Cultural Dining
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Tibetan Kitchen / Golden Palace</h3>
                <p className="mt-1 text-xs text-slate-600">Steamed momos, thukpa soup, and traditional herbal tea</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">Bylakuppe Main Road</p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERSION MID-POST CTA CARD */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              DEDICATED ERTIGA CHAUFFEUR SERVICE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Reserve Your Bangalore to Coorg Cab?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Travel comfortably in our sanitized <strong>6+1 Maruti Suzuki Ertiga</strong> with owner-operator Bharath K S. Enjoy fixed outstation quotes, skilled hill driving, and zero cancellation surprises. Planning local city errands first? Check our <Link href="/car-rental-bangalore" className="font-bold text-amber-300 underline">hourly car rental packages in Bangalore</Link>.
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
              6+1 Maruti Suzuki Ertiga: Cabin Comfort &amp; Luggage Space
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              {SITE.specialisationSlogan} We never allocate small hatchbacks or congested sedans. Here is how your family travels:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-emerald-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">4 to 5 Passengers (With Luggage)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Folding the third row flat provides an expansive boot holding 4 large trolley suitcases, trekking bags, and boxes of fresh Coorg coffee and spices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-emerald-700 mt-1" />
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
                    Second and third-row roof blowers ensure uniform cooling throughout the warmer plains before reaching the refreshing mountain air.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Polite Hill Driving Etiquette</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Owner-operated by Bharath K S with smooth cornering, calm pacing, and zero motion-sickness rush on winding estate driveways.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-emerald-700" /> Frequently Asked Questions
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
          <PopularOutstationRoutes currentSlug="bangalore-to-coorg-cab" />
        </div>
      </main>
    </SiteShell>
  );
}