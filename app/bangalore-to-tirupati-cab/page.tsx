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
  title: "Bangalore to Tirupati Cab | 1-Day Balaji Darshan Package & Ertiga Taxi",
  description:
    "Book an owner-operated Bangalore to Tirupati cab in a dedicated 6+1 Ertiga. Same-day & 2-day Tirumala Balaji darshan packages, AP border permit assistance, Mulbagal breakfast stops & transparent round-trip fares.",
  alternates: { canonical: `${SITE.url}/bangalore-to-tirupati-cab` },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What is the best departure time for a Bangalore to Tirupati 1-day cab package?",
    answer:
      "We strongly recommend starting between 3:00 AM and 4:00 AM. This avoids heavy morning highway bottlenecks at Hoskote, allows a comfortable breakfast stop at Mulbagal, and reaches Tirupati foothills by 8:30 AM to 9:00 AM, giving your family ample time for SED/VIP darshan and laddu collection before the return journey.",
  },
  {
    question: "Are Andhra Pradesh state border taxes and expressway tolls included in the cab quote?",
    answer:
      "Commercial tourist cabs entering Andhra Pradesh from Karnataka require an official interstate border permit. Lucky Travels handles AP state permit taxes, toll plazas, and driver allowances transparently in your initial outstation quotation so you never face unexpected checkpoint delays or extortion.",
  },
  {
    question: "Can your Ertiga cab climb the Tirumala Ghat Road up to the main temple complex?",
    answer:
      "Yes. Our commercial Maruti Suzuki Ertiga fleet is fully certified, commercially insured, and authorized to drive up both the uphill and downhill Tirumala Ghat roads via the Alipiri toll gate, dropping your family directly at your allotted cottage or the main darshan queue gates.",
  },
  {
    question: "How does chauffeur waiting work during prolonged darshan queues?",
    answer:
      "Tirumala darshan queues often extend between 3 to 8 hours depending on rush. Your assigned Lucky Travels chauffeur remains stationed on-site in the authorized Tirumala parking bays with your phone contact active, ensuring your vehicle and luggage are safe and ready for your return without rush.",
  },
  {
    question: "How much luggage and how many passengers fit comfortably for Tirupati?",
    answer:
      "Our 6+1 Ertiga comfortably seats up to 6 adults with traditional duffels and day bags, or 4 to 5 family members with 3 to 4 large suitcases when the rear third-row seat is folded. Independent row AC vents keep elderly passengers and children fresh across the 5-hour drive.",
  },
];

export default function BangaloreToTirupatiCabPage() {
  const routeUrl = `${SITE.url}/bangalore-to-tirupati-cab`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a Bangalore to Tirupati Cab package.
Travel Date:
Pickup Area & Time:
Trip Type: Same-day 1-Day or 2-Day Package
Passengers & Luggage Count:`
  )}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Bangalore to Tirupati Cab Darshan Package Enquiry - Lucky Travels"
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: "Bangalore to Tirupati Cab Package in a Premium Ertiga",
    serviceType: "Bangalore to Tirupati outstation taxi service",
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
      { "@type": "Place", name: "Tirupati" },
      { "@type": "Place", name: "Tirumala" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/gallery/tirumala-hills-alipiri-ertiga-cab.jpg`,
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
      "Book an owner-operated Bangalore to Tirupati cab in a dedicated 6+1 Ertiga. 1-day & 2-day Tirumala Balaji tour packages, AP border permit assistance, highway breakfast stops & transparent round-trip fares.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: "Bangalore to Tirupati Cab", item: routeUrl },
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
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-purple-800">
              <Calendar size={13} className="text-purple-700" /> UPDATED 2026-09-25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> BHARATH K S
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900 border border-amber-200">
              <Sparkles size={13} className="text-amber-700" /> VERIFIED TEMPLE GUIDE
            </span>
          </div>

          {/* MAIN ARTICLE HEADLINE */}
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Bangalore to Tirupati Cab: 1-Day Darshan Package, Route, Timings &amp; Ertiga Fare Guide
          </h1>

          {/* INTRO WITH ORGANIC KEYWORD TARGETING */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            Planning a seamless family pilgrimage to <strong>Lord Sri Venkateswara Swamy at Tirumala</strong> requires precision highway timing, early-morning departure coordination, and experienced mountain chauffeurs. Whether you are traveling for a <em>same-day Bangalore to Tirupati 1-day tour package by car</em> or a relaxed 2-day temple circuit, this guide covers exact highway milestones along <strong>NH-75 &amp; NH-140</strong>, Andhra Pradesh border permit compliance, iconic breakfast stops at Mulbagal, and our dedicated <strong>6+1 Premium Maruti Suzuki Ertiga</strong> outstation cab service.
          </p>

          {/* FEATURED HERO IMAGE WITH ZOOM-ON-HOVER */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/tirumala-hills-alipiri-ertiga-cab.jpg"
                alt="Lucky Travels white Maruti Ertiga commercial cab ascending the Tirumala ghat road"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Tirumala Ghat Ascent:</strong> Our commercially certified white Ertiga fleet ascending the sacred Seven Hills toward the Balaji temple complex.</span>
              <span className="text-purple-700 font-semibold shrink-0">Photo: Lucky Travels</span>
            </figcaption>
          </figure>

          {/* SECTION: ROUTE OVERVIEW WITH CONTEXTUAL INTERLINKS */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Route Distance, Highway Quality &amp; Driving Time
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              The driving distance from central Bengaluru to the Tirupati foothills at <strong>Alipiri Toll Gate</strong> is approximately <strong>250 kilometers</strong>, with a typical transit time of <strong>4.5 to 5.5 hours</strong>. The smoothest corridor exits Bengaluru via KR Puram and Hoskote onto the wide 4-lane <strong>NH-75 highway</strong>, passing through Kolar and Mulbagal. The route crosses into Andhra Pradesh at Nangali, transitioning seamlessly onto the newly expanded <strong>NH-140 bypass</strong> past Palamaner and Chittoor directly into Tirupati town.
            </p>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Travelers flying in from other cities can arrange a direct <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">Kempegowda International Airport taxi pickup</Link> to commence their pilgrimage without getting delayed in city bottlenecks. If you are also scheduling other weekend getaways, explore our <Link href="/bangalore-to-mysore-cab" className="font-bold text-purple-700 underline">Bangalore to Mysore expressway cab package</Link>, the popular <Link href="/bangalore-to-coorg-cab" className="font-bold text-purple-700 underline">Bangalore to Coorg cab tour</Link>, or the serene <Link href="/blog/bangalore-to-adiyogi-chikkaballapur-cab-route-timings-ertiga-guide" className="font-bold text-purple-700 underline">Bangalore to Adiyogi Chikkaballapura evening light show guide</Link>.
            </p>

            {/* QUICK STATS METRICS GRID */}
            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <MapPin size={15} /> Total Highway Distance
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">250 km</p>
                <p className="mt-1 text-xs text-slate-500">Doorstep pickup to Alipiri foothills</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <Clock size={15} /> Average Transit Time
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">4.5 to 5.5 Hrs</p>
                <p className="mt-1 text-xs text-slate-500">Via 4-lane NH-75 &amp; NH-140</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <ShieldCheck size={15} /> Vehicle Category
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">6+1 Premium Ertiga</p>
                <p className="mt-1 text-xs text-slate-500">Commercial yellow plate • All AP taxes cleared</p>
              </div>
            </div>

            {/* CALLOUT BOX: EARLY MORNING RECOMMENDATION */}
            <div className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-6 text-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <AlertCircle size={20} className="text-amber-600" />
                <span>Chauffeur Insider Tip: Why a 3:30 AM Departure is Essential</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-amber-950 text-justify">
                <em>Never delay your departure past 6:00 AM on weekends or festival dates.</em> Exiting through Tin Factory, KR Puram, and Hoskote after 6:30 AM can easily add <strong>60 to 90 minutes of frustrating city crawl</strong>. A <strong>3:30 AM start</strong> enables you to cross Kolar before dawn, savor an unhurried crispy dosa breakfast at Mulbagal by 5:30 AM, and pull into the Alipiri security gates by 8:30 AM—giving your family plenty of buffer time before your afternoon darshan slot.
              </p>
            </div>
          </section>

          {/* SECTION: 1-DAY ITINERARY TIMELINE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended 1-Day Bangalore to Tirupati Darshan Timeline
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              This hour-by-hour itinerary is optimized for families holding <strong>TTD Special Entry Darshan (SED ₹300 tickets)</strong> or senior citizen privileged passes:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 3:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Punctual Doorstep Pickup in Bengaluru</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Your sanitized <strong>6+1 Ertiga</strong> arrives at your doorstep in Bengaluru. Bags are loaded securely, and you cruise out toward Old Madras Road / Hoskote before morning traffic wakes up.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 5:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Breakfast Stop at Mulbagal</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Pause along the NH-75 expressway near Mulbagal for <em>hot crispy Mulbagal ghee dosas</em>, fluffy thatte idlis, and fresh filter coffee with clean family restrooms.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 6:45 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Andhra Pradesh Border Permit Verification (Nangali)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Seamless transit across the border. Our <strong>Andhra Pradesh commercial road tax permits</strong> are pre-filed electronically to ensure zero delays at the Nangali RTO checkpost.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 8:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Arrival at Alipiri Gate &amp; Security Clearance</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Reach Tirupati foothills. Vehicle undergoes mandatory security screening and luggage checks at the <em>Alipiri Checkpoint</em> before beginning the scenic 18 km hill climb.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 9:30 AM - 3:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Tirumala Balaji Darshan, Tonsure &amp; Laddu Collection</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Chauffeur drops your family directly at your allotted reporting point, Kalyanakatta tonsure center, or guest cottage. <strong>Your vehicle remains stationed in the Tirumala parking bay with luggage safe under driver watch.</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 4:00 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Sri Padmavathi Ammavari Temple (Tiruchanur)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Descend via the downhill ghat road to Tirupati town for traditional darshan at Goddess Padmavathi Temple in Tiruchanur, fulfilling the complete sacred pilgrimage customs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 6:00 PM - 10:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Relaxed Return Drive to Bengaluru</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Enjoy a quiet, air-conditioned return cruise along the 4-lane highway with an optional family dinner break near Kolar, dropping you back at your home by 10:30 PM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECOND EMBEDDED HIGHWAY PHOTO WITH ZOOM-ON-HOVER */}
          <figure className="group my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/bangalore-to-tirupati-highway-ertiga-cab.jpg"
                alt="White Maruti Ertiga commercial cab cruising on NH-75 highway towards Tirupati"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
              <strong>NH-75 Kolar-Chittoor Highway:</strong> Smooth 4-lane cruising in our commercially certified Ertiga with dedicated roof-mounted AC for all passenger rows.
            </figcaption>
          </figure>

          {/* SECTION: AP BORDER TAX & TOLL TRANSPARENCY */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Andhra Pradesh Border Permits, Tolls &amp; Ghat Guidelines
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              One of the major headaches when booking unregulated cabs is checkpoint extortion and surprise fees. Commercial tourist vehicles crossing into Andhra Pradesh must hold valid <strong>AP Interstate Permit Taxes</strong>. With Lucky Travels, all border permit documentation, FASTag expressway toll charges, and Alipiri entry tolls are calculated transparently into your initial quote—so you never face awkward driver arguments or surprise out-of-pocket costs at checkposts.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <CheckCircle2 size={20} className="shrink-0 text-green-600 mt-1" />
                <span><strong>No Mountain Driving Fatigue:</strong> The Tirumala Ghat road enforces strict minimum transit speed limit regulations. Our seasoned highway chauffeurs handle the hairpins safely while your family rests.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <CheckCircle2 size={20} className="shrink-0 text-green-600 mt-1" />
                <span><strong>Luggage Custody:</strong> While your family is inside the queue complex for 4 to 8 hours, your personal belongings, phones, footwear, and luggage remain locked securely inside our vehicle under chauffeur watch.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <CheckCircle2 size={20} className="shrink-0 text-green-600 mt-1" />
                <span><strong>Senior Citizen Care:</strong> Direct drops at the Supadham entrance or designated reporting gates ensure minimum walking stress for elderly parents and young children.</span>
              </li>
            </ul>
          </section>

          {/* SECTION: HIGHWAY FOOD STOPS */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended Highway Food Plazas &amp; Rest Stops
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              A smooth pilgrimage requires hygienic dining, spotless washrooms, and good filter coffee. Here are verified family favorites along the route where our chauffeurs gladly pause:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Breakfast Specialty
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Woodys / Mulbagal Dosa Plazas</h3>
                <p className="mt-1 text-xs text-slate-600">Crispy Mulbagal Ghee Dosa, Thatte Idli &amp; Filter Coffee</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-75, Mulbagal Stretch</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Family Rest Stop
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Bans The Hotel &amp; Restaurant</h3>
                <p className="mt-1 text-xs text-slate-600">Clean washrooms, AC dining hall, pure vegetarian buffet</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-140, Chittoor Bypass</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Return Snacks / Dinner
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Maiyas / Highway Grand</h3>
                <p className="mt-1 text-xs text-slate-600">Hygienic vegetarian dinner, quick snacks, and tea breaks</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-75, Kolar Bypass</p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERSION MID-POST CTA CARD */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              DEDICATED ERTIGA CHAUFFEUR SERVICE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Book Your Tirupati Balaji Darshan Cab?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Travel in peace with our sanitized <strong>6+1 Maruti Suzuki Ertiga</strong>. Enjoy verified punctuality, transparent fixed quotations, and dedicated on-site waiting throughout your darshan queue. Need multi-day local errands too? Check out our <Link href="/car-rental-bangalore" className="font-bold text-amber-300 underline">hourly car rental packages in Bangalore</Link>.
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
            <p className="mt-3 text-xs text-white/60">
              *Advance booking of 12 to 24 hours recommended for early-morning 3:30 AM departures.
            </p>
          </section>

          {/* SECTION: FLEET & LUGGAGE GUIDANCE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              6+1 Maruti Suzuki Ertiga: Seating &amp; Luggage Fit
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              {SITE.specialisationSlogan} We never allocate small hatchbacks or cramped sedans. Here is how your family travels:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">4 to 5 Passengers (With Suitcases)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    With the 3rd row folded flat, the cargo bay easily accommodates 3 to 4 large trolley suitcases, overnight bags, and laddu prasadam boxes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">6 Passengers (Day Trip Setup)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    All 6 passenger seats utilized with maximum legroom. Accommodates 2 to 3 compact cabin duffels and day backpacks behind the 3rd row.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Middle and rear roof-mounted AC vents guarantee constant cooling for children and seniors across the warm Chittoor plains.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">No App-Cancellation Worries</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Direct reservation with owner-operator Bharath K S guarantees your vehicle is washed, mechanically prepared, and stationed at your gate on time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-purple-700" /> Frequently Asked Questions
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
          <PopularOutstationRoutes currentSlug="bangalore-to-tirupati-cab" />
        </div>
      </main>
    </SiteShell>
  );
}