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
  title: "Bangalore to Mysore Cab | 1-Day Palace Tour Package & 6+1 Ertiga Taxi",
  description:
    "Book an owner-operated Bangalore to Mysore cab in a dedicated 6+1 Ertiga. 10-lane NH-275 Expressway, Mysore Palace illumination, Chamundi Hills, Maddur breakfast stops & transparent round-trip fares.",
  alternates: { canonical: `${SITE.url}/bangalore-to-mysore-cab` },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What is the fastest route and driving time from Bangalore to Mysore by cab?",
    answer:
      "Travel via the 10-lane Bengaluru-Mysuru Expressway (NH-275) takes approximately 2 to 2.5 hours for the 145 km highway stretch from Kengeri exit to Mysuru entry. Doorstep-to-doorstep travel across central Bangalore usually takes 3 to 3.5 hours depending on morning city traffic.",
  },
  {
    question: "What are the Mysore Palace lighting and illumination timings?",
    answer:
      "The iconic Mysore Palace illumination takes place on Sundays and public holidays from 7:00 PM to 8:00 PM, and during the 10-day Dasara festival every evening from 7:00 PM to 9:00 PM. On weekdays, a sound and light show runs from 7:00 PM to 8:00 PM.",
  },
  {
    question: "Can we cover both Mysore and Srirangapatna on a 1-day Bangalore to Mysore cab trip?",
    answer:
      "Yes. Srirangapatna is located directly along the expressway before entering Mysore. Our 1-day package comfortably covers the historic Ranganathaswamy Temple, Tipu Sultan's Summer Palace (Daria Daulat Bagh), Chamundi Hills, St. Philomena's Church, and the Mysore Palace without rush.",
  },
  {
    question: "Are expressway tolls and driver allowances included in the outstation cab fare?",
    answer:
      "Yes. Lucky Travels provides 100% transparent, itemized quotations covering the NH-275 expressway toll fees, driver day bata, and commercial parking permits upfront with zero hidden charges or return-fare arguments.",
  },
  {
    question: "How much luggage can our family carry in the 6+1 Ertiga for a Mysore trip?",
    answer:
      "For 4 to 5 passengers, folding the third-row 50:50 split seats provides an expansive boot holding 3 to 4 large suitcases plus Mysore Pak sweet boxes and shopping bags. For 6 passengers, all three rows are upright with ample boot space for 2 to 3 cabin trolley bags and backpacks.",
  },
];

export default function BangaloreToMysoreCabPage() {
  const routeUrl = `${SITE.url}/bangalore-to-mysore-cab`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a Bangalore to Mysore Cab package.
Travel Date:
Pickup Area & Time:
Trip Type: Same-day 1-Day or Multi-day
Passengers & Luggage Count:`
  )}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Bangalore to Mysore Cab Package Enquiry - Lucky Travels"
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: "Bangalore to Mysore Cab Package in a Premium Ertiga",
    serviceType: "Bangalore to Mysore outstation taxi service",
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
      { "@type": "Place", name: "Mysore" },
      { "@type": "Place", name: "Srirangapatna" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/gallery/bangalore-to-mysore-expressway-ertiga-cab.jpg`,
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
      "Book an owner-operated Bangalore to Mysore cab in a dedicated 6+1 Ertiga. 10-lane NH-275 Expressway, Mysore Palace illumination, Chamundi Hills, Maddur breakfast stops & transparent round-trip fares.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: "Bangalore to Mysore Cab", item: routeUrl },
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
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-indigo-800">
              <Calendar size={13} className="text-indigo-700" /> UPDATED 2026-09-25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> BHARATH K S
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900 border border-amber-200">
              <Sparkles size={13} className="text-amber-700" /> VERIFIED HERITAGE GUIDE
            </span>
          </div>

          {/* MAIN ARTICLE HEADLINE */}
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Bangalore to Mysore Cab: 1-Day Tour Package, Expressway Route &amp; Ertiga Fare Guide
          </h1>

          {/* INTRO WITH ORGANIC KEYWORD TARGETING */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            Renowned worldwide for royal palaces, silk sarees, and fragrant sandalwood, <strong>Mysuru (Mysore)</strong> is South India&apos;s most cherished cultural heritage destination. Thanks to the 10-lane <strong>Bengaluru-Mysuru Expressway (NH-275)</strong>, traveling between both cities is smoother and faster than ever. Whether you are planning a <em>same-day Bangalore to Mysore 1-day sightseeing tour package by car</em> or a relaxed weekend getaway, this verified guide covers expressway entry milestones, Mysore Palace illumination timings, iconic Maddur Vada breakfast stops, and our dedicated <strong>6+1 Premium Maruti Suzuki Ertiga</strong> chauffeur service.
          </p>

          {/* FEATURED HERO IMAGE WITH ZOOM-ON-HOVER */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/bangalore-to-mysore-expressway-ertiga-cab.jpg"
                alt="Lucky Travels white Maruti Ertiga commercial cab cruising along the Bengaluru to Mysuru 10-lane expressway"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Bengaluru-Mysuru Expressway (NH-275):</strong> Our commercially certified white Ertiga fleet cruising smoothly along the 10-lane access-controlled highway.</span>
              <span className="text-indigo-700 font-semibold shrink-0">Photo: Lucky Travels</span>
            </figcaption>
          </figure>

          {/* SECTION: ROUTE OVERVIEW WITH CONTEXTUAL INTERLINKS */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Route Distance, Highway Quality &amp; Expressway Speed
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              The driving distance from central Bengaluru to the heart of Mysore is approximately <strong>145 kilometers</strong>, with the dedicated highway section covered in just <strong>2 to 2.5 hours</strong> via the access-controlled <strong>NH-275 Expressway</strong>. Exiting Bengaluru via Kengeri or NICE Road, the expressway bypasses earlier congestion hotspots like Bidadi, Ramanagara, Channapatna, Maddur, and Mandya. With smooth asphalt, clearly marked grade separators, and strict lane discipline, the corridor provides an exceptionally relaxed highway cruise.
            </p>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Arriving in Bengaluru from outside the state? Book our direct <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">Kempegowda International Airport taxi pickup</Link> to connect directly onto the expressway. Looking to extend your journey into Karnataka&apos;s mountain corridors? Explore our <Link href="/bangalore-to-coorg-cab" className="font-bold text-purple-700 underline">Bangalore to Coorg coffee estate tour</Link>, the wildlife safari route on our <Link href="/bangalore-to-ooty-cab" className="font-bold text-purple-700 underline">Bangalore to Ooty cab package</Link>, or the sacred <Link href="/bangalore-to-tirupati-cab" className="font-bold text-purple-700 underline">Bangalore to Tirupati Balaji darshan cab</Link>[cite: 1].
            </p>

            {/* QUICK STATS METRICS GRID */}
            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-indigo-700 tracking-wider">
                  <MapPin size={15} /> Highway Distance
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">145 km</p>
                <p className="mt-1 text-xs text-slate-500">Doorstep pickup to Mysore Palace</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-indigo-700 tracking-wider">
                  <Clock size={15} /> Expressway Travel Time
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">2.5 to 3 Hrs</p>
                <p className="mt-1 text-xs text-slate-500">Via 10-lane NH-275 access-controlled highway</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-indigo-700 tracking-wider">
                  <ShieldCheck size={15} /> Fleet Classification
                </span>
                <p className="mt-2 text-2xl font-black text-slate-900">6+1 Premium Ertiga</p>
                <p className="mt-1 text-xs text-slate-500">Commercial yellow taxi • FASTag pre-loaded</p>
              </div>
            </div>

            {/* CALLOUT BOX: PALACE ILLUMINATION TIP */}
            <div className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-6 text-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <AlertCircle size={20} className="text-amber-600" />
                <span>Chauffeur Heritage Tip: Plan Your Return Around Palace Illumination</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-amber-950 text-justify">
                <em>Do not miss the Mysore Palace illumination on Sundays and public holidays between 7:00 PM and 8:00 PM.</em> Watching nearly 100,000 golden incandescent bulbs illuminate the palace facade against the dark evening sky is breathtaking. Because our cab service is dedicated with zero return-trip rush, your chauffeur waits patiently at the Varaha Gate parking bay so your family can witness the complete spectacle before an easy nighttime expressway cruise home.
              </p>
            </div>
          </section>

          {/* SECTION: 1-DAY ITINERARY TIMELINE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended 1-Day Bangalore to Mysore Sightseeing Timeline
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              This hour-by-hour itinerary is optimized for families looking to cover royal heritage, hillside temples, and local shopping at a comfortable pace:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 6:00 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Punctual Doorstep Pickup in Bengaluru</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Your sanitized <strong>6+1 Ertiga</strong> arrives at your residence. Departing early lets you cruise through Kengeri and onto the NH-275 expressway before commuter traffic builds.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 7:45 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Expressway Breakfast Stop at Maddur</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Enjoy <em>hot Maddur Vada</em>, crispy masala dosas, and filter coffee at popular highway food plazas like Maddur Tiffany&apos;s or Paakashala.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 9:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Srirangapatna Heritage Detour</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Visit the historic Sri Ranganathaswamy Temple on the Cauvery river island, followed by a quick stop at Tipu Sultan&apos;s Summer Palace (Daria Daulat Bagh).
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 11:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Chamundi Hills &amp; Sri Chamundeshwari Temple</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Drive up Chamundi Hill for darshan at the 1,000-year-old temple and pause by the monolithic Nandi bull statue for panoramic views over Mysuru city.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 1:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Authentic Mysuru Thali Lunch</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Relish traditional Karnataka vegetarian meals or regional specialties at renowned local restaurants in Mysore city center.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 3:00 PM - 5:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Mysore Palace (Amba Vilas) Exploration</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Step inside the grand Durbar Hall, Kalyana Mantapa (marriage pavilion), and royal museum to admire stained-glass ceilings, ivory doors, and historical weaponry.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-700 px-3.5 py-1.5 text-xs font-black text-white">
                  <Clock size={14} /> 6:00 PM - 10:00 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Mysore Pak Shopping, Palace Lights &amp; Return</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Pick up authentic ghee-soaked Mysore Pak from Guru Sweets, witness the evening palace illumination, and enjoy a comfortable return drive to Bengaluru by 10:00 PM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECOND EMBEDDED HIGHWAY PHOTO WITH ZOOM-ON-HOVER */}
          <figure className="group my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/mysore-palace-ertiga-cab-tour.jpg"
                alt="White Maruti Ertiga commercial cab parked near the illuminated Mysore Palace complex"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
              <strong>Royal Heritage Circuit:</strong> Our dedicated 6+1 Ertiga cab stationed near the majestic Mysore Palace during a family day tour.
            </figcaption>
          </figure>

          {/* SECTION: HIGHWAY FOOD STOPS */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Recommended Pitstops &amp; Highway Food Plazas
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              The Bengaluru-Mysuru Expressway offers some of South India&apos;s finest vegetarian tiffin centers and highway food courts with spotless restroom amenities:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Heritage Breakfast
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Maddur Tiffany&apos;s</h3>
                <p className="mt-1 text-xs text-slate-600">Legendary original Maddur Vada, Thatte Idli, Filter Coffee</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-275 Maddur Stretch</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> AC Food Court
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Paakashala Ramanagara</h3>
                <p className="mt-1 text-xs text-slate-600">Pure vegetarian dining hall, spotless restrooms &amp; ample parking</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">NH-275 Ramanagara</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <Coffee size={14} /> Traditional Folk Stop
                </span>
                <h3 className="mt-2 font-black text-slate-900 text-base">Kamat Lokaruchi</h3>
                <p className="mt-1 text-xs text-slate-600">Authentic Jolada Rotti, country butter, jaggery, and rural thalis</p>
                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] font-semibold text-slate-500">Near Janapada Loka</p>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERSION MID-POST CTA CARD */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              DEDICATED ERTIGA CHAUFFEUR SERVICE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Book Your Bangalore to Mysore Cab?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Travel comfortably in our sanitized <strong>6+1 Maruti Suzuki Ertiga</strong> with owner-operator Bharath K S. Enjoy fixed outstation quotations, expressway toll transparency, and zero cancellation surprises. Need local intra-city drops first? Review our <Link href="/car-rental-bangalore" className="font-bold text-amber-300 underline">hourly car rental packages in Bangalore</Link>.
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
              {SITE.specialisationSlogan} We never allocate small hatchbacks or cramped sedans. Here is how your family travels:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-indigo-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">4 to 5 Passengers (With Luggage)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Folding the third row flat provides an expansive boot holding 3 to 4 large trolley suitcases, overnight duffels, and sweet boxes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-indigo-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">6 Passengers (Day Excursion Setup)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    All six passenger seats utilized with comfortable ergonomic legroom. Boot easily stores 2 to 3 compact cabin bags and shopping duffels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Dedicated passenger roof vents keep all three rows cool throughout the open expressway drive.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Guaranteed Owner-Chauffeur</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Personally driven by Bharath K S with guaranteed punctuality, clean car interiors, and courteous highway etiquette.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-indigo-700" /> Frequently Asked Questions
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
          <PopularOutstationRoutes currentSlug="bangalore-to-mysore-cab" />
        </div>
      </main>
    </SiteShell>
  );
}