"use client";

import { useState } from "react";

type TripCategory = "airport" | "outstation" | "hourly" | "pilgrimage";

interface RouteOption {
  id: string;
  name: string;
  recommendedFor: string;
  luggageGuide: string;
  routeHighlights: string;
}

const TRIP_DATA: Record<TripCategory, { label: string; icon: string; routes: RouteOption[] }> = {
  airport: {
    label: "Airport Transfer",
    icon: "✈️",
    routes: [
      {
        id: "blr-pickup",
        name: "Kempegowda Airport (BLR) Pickup / Drop",
        recommendedFor: "Executives, NRI travelers & families with flight luggage",
        luggageGuide: "Seats 4-5 adults comfortably with 4 large check-in suitcases (3rd row folded), or 6 adults with cabin bags.",
        routeHighlights: "Punctual terminal curbside arrival (T1 & T2), flight delay tracking included, clean AC cabin.",
      },
    ],
  },
  outstation: {
    label: "Outstation Journeys",
    icon: "🛣️",
    routes: [
      {
        id: "mysore-expressway",
        name: "Bangalore to Mysore / Chamundi Hills",
        recommendedFor: "Family day outings, heritage tours (~145 km via Expressway)",
        luggageGuide: "Spacious seating for 6 + driver with cabin luggage, or 4 with large vacation suitcases.",
        routeHighlights: "Fast-track Expressway driving, planned highway rest stops, smooth suspension for elders.",
      },
      {
        id: "coorg-ooty",
        name: "Bangalore to Coorg, Ooty, or Chikmagalur",
        recommendedFor: "Hill country vacations, coffee estate holidays (250–280 km)",
        luggageGuide: "Ample boot capacity for week-long family holiday luggage.",
        routeHighlights: "Skilled ghat road chauffeur, high-ground clearance, sanitized dual-blower air conditioning.",
      },
    ],
  },
  pilgrimage: {
    label: "Pilgrimage & Rituals",
    icon: "🪔",
    routes: [
      {
        id: "srirangapatna-rituals",
        name: "Bengaluru to Srirangapatna (Pitru Paksha / Sangama)",
        recommendedFor: "Ancestral rites, Pinda Pradhana, Gosai Ghat & Triveni Sangama poojas",
        luggageGuide: "Dedicated boot space for ritual samagri, brass vessels, and pooja items.",
        routeHighlights: "Early dawn Bengaluru doorstep pickup (4:30 AM), chauffeur waiting until rituals conclude.",
      },
      {
        id: "tirupati-darshan",
        name: "Bangalore to Tirupati Balaji Darshan",
        recommendedFor: "Devotional family trips (~250 km) with senior citizens",
        luggageGuide: "Plush, vibration-free seating to prevent travel fatigue for elders.",
        routeHighlights: "Doorstep Bengaluru pickup, highway toll planning, flexible temple parking waiting.",
      },
    ],
  },
  hourly: {
    label: "Hourly City Rental",
    icon: "⏱️",
    routes: [
      {
        id: "city-hourly",
        name: "Bengaluru City Chauffeur (8hr / 80km or Full Day)",
        recommendedFor: "Business client meetings, wedding shopping, multi-point city errands",
        luggageGuide: "Multiple shopping bags, presentation kits, and comfortable seating for up to 6 guests.",
        routeHighlights: "Hassle-free parking handling, navigation via live Google Maps traffic, zero fuel worries.",
      },
    ],
  },
};

export default function TripConcierge() {
  const [activeCategory, setActiveCategory] = useState<TripCategory>("airport");
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);

  const currentCategoryData = TRIP_DATA[activeCategory];
  const currentRoute = currentCategoryData.routes[selectedRouteIndex] || currentCategoryData.routes[0];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Lucky Travels, I would like to get a transparent price quote for an Ertiga cab in Bengaluru.\n\n` +
      `Trip Type: ${currentCategoryData.label}\n` +
      `Selected Route: ${currentRoute.name}\n\n` +
      `Please share the all-inclusive transparent quote.`
    );
    window.open(`https://wa.me/919886814344?text=${text}`, "_blank");
  };

  return (
    <section className="page-shell px-5 py-12 sm:py-16" id="plan-journey">
      <div className="rounded-3xl bg-gradient-to-b from-[#090f2f] to-[#121945] p-6 sm:p-10 text-white shadow-2xl border border-indigo-900/50">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300 border border-purple-400/30">
            Direct Concierge Dispatch • Bengaluru & Bangalore
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Choose Your Journey. Lock Your Price on WhatsApp.
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            No dynamic surge pricing, no automated aggregator algorithms. Share your travel plan with our owner-operator dispatch, and receive a fixed, guaranteed quote.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {(Object.keys(TRIP_DATA) as TripCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedRouteIndex(0);
              }}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40 ring-2 ring-purple-400"
                  : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
              }`}
            >
              <span>{TRIP_DATA[cat].icon}</span>
              <span>{TRIP_DATA[cat].label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Route Detail Box */}
        <div className="mt-8 rounded-2xl bg-white/5 p-6 sm:p-8 backdrop-blur-md border border-white/10">
          {/* If category has multiple routes, show quick selector */}
          {currentCategoryData.routes.length > 1 && (
            <div className="mb-6 flex flex-wrap gap-2 border-b border-white/10 pb-4">
              {currentCategoryData.routes.map((route, i) => (
                <button
                  key={route.id}
                  onClick={() => setSelectedRouteIndex(i)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    selectedRouteIndex === i
                      ? "bg-white text-[#090f2f] shadow"
                      : "bg-white/10 text-slate-300 hover:bg-white/20"
                  }`}
                >
                  {route.name}
                </button>
              ))}
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-black text-white">{currentRoute.name}</h3>
                <p className="mt-1 text-sm text-purple-300 font-medium">Ideal For: {currentRoute.recommendedFor}</p>
              </div>

              <div className="rounded-xl bg-black/20 p-4 border border-white/5 space-y-2">
                <p className="text-xs uppercase tracking-wider font-bold text-amber-400">Luggage & Passenger Recommendation</p>
                <p className="text-sm text-slate-200 leading-relaxed">{currentRoute.luggageGuide}</p>
              </div>

              <div className="rounded-xl bg-black/20 p-4 border border-white/5 space-y-2">
                <p className="text-xs uppercase tracking-wider font-bold text-emerald-400">Route & Vehicle Perks</p>
                <p className="text-sm text-slate-200 leading-relaxed">{currentRoute.routeHighlights}</p>
              </div>
            </div>

            {/* Right Col: Price-Lock Box & WhatsApp CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-900/60 to-indigo-900/80 p-6 border border-purple-400/30 flex flex-col justify-between">
              <div>
                <div className="inline-block rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-black text-emerald-300 border border-emerald-500/30 mb-3">
                  🛡️ 100% Price Lock Guarantee
                </div>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Zero Hidden Charges. No Sudden Extras.
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Whatever transparent fare we quote on WhatsApp remains strictly locked. No unexpected driver bata or last-minute surge, provided your itinerary remains unchanged.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>💬 Get Quote on WhatsApp</span>
                </button>
                <a
                  href="tel:+919886814344"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-xs font-bold text-slate-200 hover:bg-white/20 transition"
                >
                  <span>📞 Call Directly: 9886814344</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}