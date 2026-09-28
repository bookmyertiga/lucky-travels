interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: "⏱️",
    title: "Punctual Pickup Planning",
    description: "Route & timing planned around Bangalore traffic with live updates.",
  },
  {
    icon: "🧳",
    title: "Practical Luggage Guidance",
    description: "Passenger count, boot space, and bag sizes confirmed before booking.",
  },
  {
    icon: "👨‍✈️",
    title: "Owner-Chauffeur Led",
    description: "Bharath K S and trusted fellow owner-drivers using identical 2026 Ertigas.",
  },
  {
    icon: "💬",
    title: "Direct Communication",
    description: "Assigned vehicle, route, and fixed quote coordinated directly on WhatsApp.",
  },
  {
    icon: "🧓",
    title: "Elderly & Family Care",
    description: "Spotless vehicle, thoughtful luggage help, and gentle step-in assistance.",
  },
  {
    icon: "🛡️",
    title: "Transparent & 24/7 Enquiries",
    description: "Fixed locked fares with zero sudden driver bata or unexpected extras.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="page-shell px-4 sm:px-6 py-4 sm:py-6" aria-labelledby="promise-heading">
      <div className="rounded-2xl bg-white p-5 sm:p-7 shadow-soft border border-slate-100">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-purple-700">
              THE LUCKY TRAVELS PROMISE
            </span>
            <h2 id="promise-heading" className="text-xl sm:text-2xl font-black text-[#090f2f] tracking-tight">
              Direct, Carefully Planned Cab Service
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Realistic space guidance, transparent coordination, and respectful chauffeur care.
          </p>
        </div>

        {/* 6-Item Compact Grid (Icon-Left) */}
        <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl bg-slate-50/70 p-3.5 border border-slate-200/70 hover:border-purple-200 transition">
              <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-[#090f2f] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}