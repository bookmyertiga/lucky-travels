import { BriefcaseBusiness, Luggage, UsersRound } from "lucide-react";

const travellerBenefits = [
  [Luggage, "Airport-ready comfort", "Practical seating and luggage room for arrivals and departures."],
  [UsersRound, "Family-friendly travel", "A spacious Premium Ertiga for guests, families and small groups."],
  [BriefcaseBusiness, "Direct communication", "Confirm your itinerary by phone or WhatsApp without a complicated booking system."],
] as const;

export default function Testimonials() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Designed around travellers</p>
          <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em]">A simpler way to Go Bengaluru</h2>
        </div>
        <p className="max-w-lg text-xs leading-5 text-slate-600">Premium Ertiga comfort, clear coordination and one dependable point of contact.</p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {travellerBenefits.map(([Icon, title, text]) => (
          <article key={title} className="rounded-xl bg-slate-50 p-4">
            <Icon size={22} className="text-purple-700" />
            <h3 className="mt-3 text-sm font-black">{title}</h3>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
