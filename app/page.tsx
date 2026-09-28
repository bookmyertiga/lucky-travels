"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PremiumVehicle from "@/components/home/PremiumVehicle";
import FeatureStrip from "@/components/home/FeatureStrip";
import DirectBooking from "@/components/home/DirectBooking";
import FAQ, { homepageFaqs } from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/constants/site";

const outstationJourneys = [
  {
    href: "/bangalore-to-srirangapatna-pitru-paksha-cab",
    title: "Bangalore to Srirangapatna Cab",
    detail: "Triveni Sangama, Gosai Ghat, Paschima Vahini & Pitru Paksha pilgrimage package",
    tag: "Pilgrimage & Sacred Rites",
    theme: {
      bg: "bg-amber-50/70 hover:bg-amber-50",
      border: "border-amber-200 hover:border-amber-400",
      tagBg: "bg-amber-100 text-amber-900 border-amber-300/60",
      link: "text-amber-800 group-hover:text-amber-950",
    },
  },
  {
    href: "/bangalore-to-mysore-cab",
    title: "Bangalore to Mysore Expressway Cab",
    detail: "Fast 90-minute expressway travel, ~145 km • Mysore Palace & Chamundi Hills",
    tag: "Expressway Highway",
    theme: {
      bg: "bg-orange-50/70 hover:bg-orange-50",
      border: "border-orange-200 hover:border-orange-400",
      tagBg: "bg-orange-100 text-orange-900 border-orange-300/60",
      link: "text-orange-800 group-hover:text-orange-950",
    },
  },
  {
    href: "/bangalore-to-coorg-cab",
    title: "Bangalore to Coorg Holiday Taxi",
    detail: "Madikeri, coffee estate homestays & hill vacation travel, ~255 km",
    tag: "Hill Station Holiday",
    theme: {
      bg: "bg-emerald-50/70 hover:bg-emerald-50",
      border: "border-emerald-200 hover:border-emerald-400",
      tagBg: "bg-emerald-100 text-emerald-900 border-emerald-300/60",
      link: "text-emerald-800 group-hover:text-emerald-950",
    },
  },
  {
    href: "/bangalore-to-ooty-cab",
    title: "Bangalore to Ooty Ghat Road Cab",
    detail: "Nilgiris mountain corridor, Bandipur forest crossing & tea gardens, ~280 km",
    tag: "Ghat & Nature Road",
    theme: {
      bg: "bg-teal-50/70 hover:bg-teal-50",
      border: "border-teal-200 hover:border-teal-400",
      tagBg: "bg-teal-100 text-teal-900 border-teal-300/60",
      link: "text-teal-800 group-hover:text-teal-950",
    },
  },
  {
    href: "/bangalore-to-chikmagalur-cab",
    title: "Bangalore to Chikmagalur Taxi",
    detail: "Western Ghats, Mullayanagiri peaks, estate trails & family resorts, ~245 km",
    tag: "Western Ghats Getaway",
    theme: {
      bg: "bg-lime-50/70 hover:bg-lime-50",
      border: "border-lime-200 hover:border-lime-400",
      tagBg: "bg-lime-100 text-lime-900 border-lime-300/60",
      link: "text-lime-800 group-hover:text-lime-950",
    },
  },
  {
    href: "/bangalore-to-tirupati-cab",
    title: "Bangalore to Tirupati Balaji Cab",
    detail: "Doorstep pilgrimage travel, Balaji Darshan assistance & return drop, ~250 km",
    tag: "Temple Darshan",
    theme: {
      bg: "bg-yellow-50/70 hover:bg-yellow-50",
      border: "border-yellow-200 hover:border-yellow-400",
      tagBg: "bg-yellow-100 text-yellow-900 border-yellow-300/60",
      link: "text-yellow-800 group-hover:text-yellow-950",
    },
  },
] as const;

type TripCategory = "airport" | "outstation" | "pilgrimage" | "hourly";

interface RouteOption {
  id: string;
  name: string;
  idealFor: string;
  luggageFit: string;
  highlights: string;
  hubLink: string;
  hubText: string;
}

const TRIP_CATEGORIES: Record<TripCategory, { label: string; icon: string; routes: RouteOption[] }> = {
  airport: {
    label: "Airport Taxi",
    icon: "✈️",
    routes: [
      {
        id: "blr-airport",
        name: "Bangalore Airport Taxi (BLR Terminal 1 & Terminal 2)",
        idealFor: "Kempegowda International Airport Bengaluru pickup, airport drop, international flight connections, and early morning departures.",
        luggageFit: "Seats 4-5 passengers with 4 large check-in suitcases (3rd row folded flat), or 6 passengers with standard cabin bags.",
        highlights: "Live flight tracking, guaranteed on-time doorstep arrival across Bangalore & Bengaluru, sanitized 2026 factory-fitted CNG vehicle with second-row knee-level AC vents.",
        hubLink: "/airport-taxi-bangalore",
        hubText: "Explore full Bangalore Airport Taxi services & terminal guides →",
      },
    ],
  },
  outstation: {
    label: "Outstation Trips",
    icon: "🛣️",
    routes: [
      {
        id: "mysore-exp",
        name: "Bangalore to Mysore Expressway Cab Service",
        idealFor: "Family day outings, Mysore Palace, Chamundi Hills, and round-trip heritage travel (~145 km via Expressway).",
        luggageFit: "Comfortable seating for 6 passengers with weekend bags, or 4-5 passengers with multiple vacation suitcases.",
        highlights: "Smooth 90-minute expressway cruising, planned family highway stops, gentle suspension for senior citizens, and punctual door-to-door transit.",
        hubLink: "/outstation-cabs-bangalore",
        hubText: "View all Outstation Cabs from Bangalore & interstate routes →",
      },
      {
        id: "hills-getaway",
        name: "Bengaluru to Coorg, Ooty, or Chikmagalur Cabs",
        idealFor: "Scenic hill station vacations, plantation homestays, and Western Ghats family road trips (240–280 km).",
        luggageFit: "Deep luggage boot space for multi-day suitcases, stroller gear, and travel bags.",
        highlights: "Trained ghat road chauffeurs, high ground clearance, reliable hill climbing, and refreshing 2nd-row console AC.",
        hubLink: "/outstation-cabs-bangalore",
        hubText: "Check holiday packages on our Bangalore Outstation hub →",
      },
    ],
  },
  pilgrimage: {
    label: "Pilgrimage & Rituals",
    icon: "🪔",
    routes: [
      {
        id: "srirangapatna-pilgrimage",
        name: "Bangalore to Srirangapatna Sangama Pilgrimage Taxi",
        idealFor: "Pinda Pradhana, Pitru Paksha, Mahalaya Amavasya, Gosai Ghat, and Paschima Vahini religious poojas.",
        luggageFit: "Generous boot space for sacred pooja samagri, brass vessels, mats, and dry clothing.",
        highlights: "Early dawn doorstep pickup across Bengaluru (4:00 AM - 5:00 AM), chauffeur waits by the riverbank steps until rituals finish, with effortless low step-in boarding for elderly parents.",
        hubLink: "/bangalore-to-srirangapatna-pitru-paksha-cab",
        hubText: "Read our Srirangapatna & Sangama ritual travel guide →",
      },
      {
        id: "tirupati-darshan",
        name: "Bangalore to Tirupati Balaji Temple Taxi",
        idealFor: "Devotional family pilgrimage trips (~250 km) requiring fatigue-free highway travel for elders and children.",
        luggageFit: "Deep cushioned seating and relaxed legroom so senior travelers avoid knee stiffness.",
        highlights: "Direct doorstep pickup in Bangalore, planned highway toll transit, and dedicated waiting near temple parking.",
        hubLink: "/bangalore-to-tirupati-cab",
        hubText: "View Bangalore to Tirupati temple darshan package details →",
      },
    ],
  },
  hourly: {
    label: "Hourly Rental",
    icon: "⏱️",
    routes: [
      {
        id: "city-chauffeur",
        name: "Bangalore Car Rental with Driver (8hr/80km, 10hr, Full Day)",
        idealFor: "Bengaluru corporate business meetings, wedding shopping, family functions, and multi-stop city errands.",
        luggageFit: "Accommodates multiple shopping bags, business materials, and up to 6 adult guests in air-conditioned comfort.",
        highlights: "Zero parking hassles, routes chosen via live Google Maps traffic navigation, with a polite local chauffeur dedicated to your schedule.",
        hubLink: "/car-rental-bangalore",
        hubText: "Compare 8-hour, 10-hour & full-day rental packages →",
      },
    ],
  },
};

const REVIEWS = [
  {
    name: "Meghala S.",
    role: "Family Outstation Traveler",
    rating: 5,
    quote: "Safety, punctuality, cleanliness and friendliness we were happy with him. Thank you!",
  },
  {
    name: "Sharifsab Sab",
    role: "Bangalore Airport Commuter",
    rating: 5,
    quote: "Neat and clean ertiga airport taxi. Extremely punctual and comfortable ride.",
  },
  {
    name: "Dinesh Kumar R.",
    role: "Outstation Customer",
    rating: 5,
    quote: "Good service and driver is so humble. Highly recommended for family travel.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<TripCategory>("airport");
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);

  const currentCat = TRIP_CATEGORIES[activeCategory];
  const currentRoute = currentCat.routes[selectedRouteIdx] || currentCat.routes[0];

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello Lucky Travels, I would like to book a 6+1 Ertiga cab in Bengaluru.\n\n` +
      `Service: ${currentCat.label}\n` +
      `Trip: ${currentRoute.name}\n\n` +
      `Please share your fixed, transparent quote.`
    );
    window.open(`https://wa.me/919886814344?text=${message}`, "_blank");
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": `${SITE.url}/#taxiservice`,
        name: "Go Bengaluru by Lucky Travels",
        legalName: "Lucky Travels",
        brand: { "@type": "Brand", name: "Go Bengaluru" },
        url: SITE.url,
        telephone: "+919886814344",
        email: "bookmyertiga@gmail.com",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "11",
        },
        serviceType: [
          "Bangalore Airport Taxi Transfers (BLR T1 & T2)",
          "Hourly and Daily Chauffeur-Driven Car Rental (4hr, 8hr, 12hr)",
          "Outstation Cabs from Bangalore (One-Way & Round Trip)",
          "Maruti Suzuki Ertiga 7 Seater Taxi Bangalore",
          "Sedan Alternative 6+1 Cab Bangalore",
          "Pilgrimage Cabs from Bengaluru",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560017",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "City", name: "Bangalore" },
          {
            "@type": "Place",
            name: "Kempegowda International Airport Bengaluru",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: `${SITE.brand} by ${SITE.name}`,
        publisher: { "@id": `${SITE.url}/#taxiservice` },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#homepage-faqs`,
        mainEntity: homepageFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f7fb] text-[#090f2f]">
      <JsonLd data={schema} />
      <Navbar />
      <Hero />

      {/* 1. COMPACT, STREAMLINED TRIP PLANNER & WHATSAPP PRICE-LOCK */}
      <section className="page-shell px-4 sm:px-6 py-5 sm:py-7" id="plan-journey">
        <div className="rounded-2xl bg-gradient-to-br from-[#090f2f] via-[#101740] to-[#1c1242] p-5 sm:p-7 text-white shadow-xl border border-purple-900/40">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-300 border border-purple-400/30">
                Direct Cab Booking • Bangalore & Bengaluru Taxi Service
              </div>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-black tracking-tight text-white">
                Book Your Cab. Lock Your Price on WhatsApp.
              </h2>
            </div>
            <p className="text-xs text-slate-300 sm:max-w-xs leading-relaxed">
              Transparent, locked quotes with zero sudden driver bata or unexpected extras.
            </p>
          </div>

          {/* Compact Category Tabs */}
          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(TRIP_CATEGORIES) as TripCategory[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedRouteIdx(0);
                }}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 ring-1 ring-purple-400"
                    : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
                }`}
              >
                <span>{TRIP_CATEGORIES[cat].icon}</span>
                <span>{TRIP_CATEGORIES[cat].label}</span>
              </button>
            ))}
          </div>

          {/* Compact Details & Action Grid */}
          <div className="mt-4 rounded-xl bg-white/5 p-4 sm:p-5 backdrop-blur-md border border-white/10">
            {currentCat.routes.length > 1 && (
              <div className="mb-4 flex flex-wrap gap-1.5 border-b border-white/10 pb-3">
                {currentCat.routes.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedRouteIdx(i)}
                    className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
                      selectedRouteIdx === i
                        ? "bg-white text-[#090f2f] shadow"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            )}

            <div className="grid gap-5 lg:grid-cols-3 items-stretch">
              {/* Route & Luggage Details */}
              <div className="lg:col-span-2 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">{currentRoute.name}</h3>
                  <p className="text-xs text-purple-300 font-medium">Recommended: {currentRoute.idealFor}</p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg bg-black/25 p-3 border border-white/5">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-amber-400">
                      🧳 Luggage & Seating
                    </p>
                    <p className="mt-1 text-xs text-slate-200 leading-relaxed">
                      {currentRoute.luggageFit}
                    </p>
                  </div>

                  <div className="rounded-lg bg-black/25 p-3 border border-white/5">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-emerald-400">
                      ✨ Cabin & Comfort
                    </p>
                    <p className="mt-1 text-xs text-slate-200 leading-relaxed">
                      {currentRoute.highlights}
                    </p>
                  </div>
                </div>

                {/* Direct Internal Link to Hub Page */}
                <div className="pt-1">
                  <Link
                    href={currentRoute.hubLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white transition"
                  >
                    <span>{currentRoute.hubText}</span>
                  </Link>
                </div>
              </div>

              {/* Price-Lock & Booking Box */}
              <div className="rounded-xl bg-gradient-to-br from-purple-950/80 to-indigo-950/90 p-4 border border-purple-400/30 flex flex-col justify-between shadow-inner">
                <div>
                  <div className="inline-block rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-300 border border-emerald-500/30 mb-1.5">
                    🛡️ Price-Lock Assurance
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    Zero Hidden Costs. Locked on WhatsApp.
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-300 leading-relaxed">
                    The quote given on WhatsApp stays fixed. No sudden extras or driver bata, provided your route remains unchanged.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2.5 text-xs font-black text-white shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
                  >
                    <span>💬 Get Exact Quote on WhatsApp</span>
                  </button>
                  <a
                    href="tel:+919886814344"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-bold text-slate-200 hover:bg-white/20 transition"
                  >
                    <span>📞 Call Us Directly: 9886814344</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE FLEET STANDARD & THE SEDAN COMPARISON BRIDGE */}
      <section className="page-shell px-4 sm:px-6 py-6 sm:py-8">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100">
          <div className="w-full border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700">
              WHY UPGRADE FROM A REGULAR SEDAN • BANGALORE & BENGALURU CAB SERVICE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-[#090f2f]">
              Looking for a Sedan Cab in Bangalore? Get Innova-Like Comfort for Just a Fraction More
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              If you are searching for a regular sedan cab (like a Dzire or Etios) for an airport run, city commute, or outstation journey, consider the comfort upgrade. A 4-seater sedan leaves barely any room once you add airport luggage or family members. With our brand new 2026 factory-fitted CNG 6+1 Ertiga fleet, you receive <strong>Innova-grade 3-row space, deep boot capacity, and individual knee-level console AC for just a small increment over sedan rates</strong>.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 hover:border-purple-300 transition flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-2 inline-block">🚗</span>
                <h3 className="text-base font-bold text-[#090f2f]">Smart Sedan Alternative</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid cramming 4 adults and suitcases into a tight sedan boot. Enjoy stretch-out 6+1 legroom at sensible pricing.
                </p>
              </div>
              <Link href="/car-rental-bangalore" className="mt-4 text-xs font-bold text-purple-700 hover:underline">
                Explore Bangalore Car Rental →
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 hover:border-purple-300 transition flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-2 inline-block">❄️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Console Knee-Level AC</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The brand new 2026 Ertiga interior delivers dedicated second-row cooling right from the central console near the knees.
                </p>
              </div>
              <Link href="/airport-taxi-bangalore" className="mt-4 text-xs font-bold text-purple-700 hover:underline">
                View Airport Transfers →
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 hover:border-purple-300 transition flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-2 inline-block">🌿</span>
                <h3 className="text-base font-bold text-[#090f2f]">100% Factory S-CNG</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Original Maruti factory engineering: zero aftermarket tampering, whisper quiet on highways, and environmentally clean.
                </p>
              </div>
              <Link href="/outstation-cabs-bangalore" className="mt-4 text-xs font-bold text-purple-700 hover:underline">
                View Outstation Cabs →
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 hover:border-purple-300 transition flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-2 inline-block">🧓</span>
                <h3 className="text-base font-bold text-[#090f2f]">Elderly & Family Comfort</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Low, ergonomic step-in entry prevents knee and hip pain for parents and grandparents traveling on temple pilgrimages.
                </p>
              </div>
              <Link href="/bangalore-to-srirangapatna-pitru-paksha-cab" className="mt-4 text-xs font-bold text-purple-700 hover:underline">
                See Srirangapatna Package →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* 3. COLOR-THEMED POPULAR OUTSTATION JOURNEYS */}
      <section className="page-shell px-4 sm:px-6 pb-10 sm:pb-14" aria-labelledby="outstation-journeys-heading">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100">
          <div className="w-full border-b border-slate-100 pb-5">
            <p className="section-kicker">DIRECT ROUTE PLANNING FROM BANGALORE & BENGALURU</p>
            <h2 id="outstation-journeys-heading" className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-[#090f2f]">
              Popular Outstation Cabs from Bangalore
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
              Travel door to door across Karnataka in a dedicated 6+1 Maruti Suzuki Ertiga. Our experienced highway chauffeurs monitor live Google Maps traffic at departure to pick the fastest exits, including the Bangalore-Mysore Expressway, NICE Road, and NH-75.
            </p>
          </div>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outstationJourneys.map((journey) => (
              <Link
                key={journey.href}
                href={journey.href}
                className={`group relative overflow-hidden rounded-xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${journey.theme.bg} ${journey.theme.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${journey.theme.tagBg}`}>
                      {journey.tag}
                    </span>
                    <span className={`text-base font-bold transition-transform group-hover:translate-x-1 ${journey.theme.link}`}>
                      →
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#090f2f] tracking-tight">
                    {journey.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {journey.detail}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-black/5 flex items-center justify-between">
                  <span className={`text-xs font-black tracking-wide uppercase ${journey.theme.link}`}>
                    View route & cab details
                  </span>
                  <span className={`text-sm font-black ${journey.theme.link}`}>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 text-xs sm:text-sm leading-relaxed text-slate-700 sm:grid-cols-3">
            <p><strong>Only Premium Ertiga:</strong> Dedicated 6+1 fleet with zero vehicle substitution or downsizing.</p>
            <p><strong>Advance booking:</strong> Reserve 6 to 12 hours ahead for guaranteed vehicle preparation and sanitation.</p>
            <p><strong>Luggage capacity:</strong> 4-5 passengers with 4 large suitcases, or 6 passengers with compact cabin luggage.</p>
          </div>
        </div>
      </section>

      <PremiumVehicle />
      <FeatureStrip />

      {/* 4. VERIFIED GOOGLE REVIEWS */}
      <section className="page-shell px-4 sm:px-6 py-6 sm:py-10" aria-labelledby="customer-reviews-heading">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200/60 mb-2.5">
                <span className="text-amber-500">★★★★★</span>
                <span>5.0 / 5.0 Rating on Google Business Profile</span>
              </div>
              <h2 id="customer-reviews-heading" className="text-2xl sm:text-3xl font-black tracking-tight text-[#090f2f]">
                Verified Customer Experiences in Bengaluru
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-slate-600">
                Authentic reviews from Bangalore families, airport commuters, and outstation travelers who ride with Lucky Travels.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="https://maps.google.com/maps?cid=13166455218913512894"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-purple-900"
              >
                <span>View on Google Maps</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-purple-300 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 text-sm">
                      {"★".repeat(rev.rating)}
                    </div>
                    <span className="rounded-md bg-purple-50 px-2 py-0.5 text-xs font-semibold text-purple-700">
                      {rev.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2.5 border-t border-slate-200/80 pt-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#090f2f]">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">Google Verified Customer • Bengaluru</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DirectBooking />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}