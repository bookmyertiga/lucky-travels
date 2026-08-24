import {
  Clock3,
  HeartHandshake,
  Luggage,
  MessageCircle,
  Route,
  UserRoundCheck,
} from "lucide-react";

const valuePillars = [
  {
    icon: Clock3,
    title: "Punctual pickup planning",
    text: "Pickup times are planned around the confirmed route, itinerary and expected Bangalore traffic, with direct updates if conditions change.",
  },
  {
    icon: Luggage,
    title: "Practical luggage planning",
    text: "Passenger count, required seats, large bags, cabin bags and special items are discussed before a journey is accepted.",
  },
  {
    icon: UserRoundCheck,
    title: "Professional owner-driver-led service",
    text: "Bharath K S drives when available and may coordinate one of four trusted owner-driver friends using the same vehicle category for additional confirmed bookings.",
  },
  {
    icon: MessageCircle,
    title: "Direct communication",
    text: "Vehicle, assigned driver, route, timing and trip terms are discussed directly before the customer confirms the journey.",
  },
  {
    icon: HeartHandshake,
    title: "Family and elderly assistance",
    text: "Journey preparation may include a cleaned vehicle, luggage help and thoughtful assistance for families and elderly travellers.",
  },
  {
    icon: Route,
    title: "24/7 enquiries",
    text: "You can enquire at any time, while every journey remains subject to vehicle and driver availability and direct confirmation.",
  },
] as const;

export default function FeatureStrip() {
  return (
    <section
      aria-labelledby="value-heading"
      className="border-y border-slate-200 bg-white py-11 sm:py-12"
    >
      <div className="page-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">What the Lucky Travels promise means</p>
          <h2
            id="value-heading"
            className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl"
          >
            Direct, Carefully Planned Cab Service
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A focused service built around clear coordination, realistic space
            guidance and respectful support from enquiry to drop-off.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-[#f8f8fc] p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-100 text-purple-700">
                <Icon size={21} />
              </span>
              <h3 className="mt-4 text-base font-black text-[#090f2f]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
