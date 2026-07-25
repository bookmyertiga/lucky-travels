import { CarFront, Clock3, Headphones, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  [ShieldCheck, "Safe & Reliable", "Your safety comes first"],
  [Clock3, "On-time Service", "Planned, punctual pickups"],
  [CarFront, "Premium Ertiga", "One consistent vehicle"],
  [Sparkles, "Clean Interiors", "Fresh and comfortable"],
  [Headphones, "Direct Support", "Call or WhatsApp 24/7"],
] as const;

export default function FeatureStrip() {
  return (
    <section aria-label="Lucky Travels service benefits" className="relative z-30 -mt-5 px-3 sm:-mt-7">
      <div className="mx-auto grid max-w-[1450px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-premium sm:grid-cols-2 lg:grid-cols-5">
        {features.map(([Icon, title, subtitle], index) => (
          <div
            key={title}
            className={`flex min-h-[76px] items-center gap-3 px-4 py-3 ${index < features.length - 1 ? "border-b border-slate-100 lg:border-b-0 lg:border-r" : ""}`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-50 text-purple-700">
              <Icon size={22} />
            </span>
            <span>
              <b className="block text-[13px]">{title}</b>
              <small className="text-[10px] text-slate-500">{subtitle}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
