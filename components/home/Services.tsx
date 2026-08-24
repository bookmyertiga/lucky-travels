import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Luggage,
  MapPin,
  Plane,
} from "lucide-react";

const services = [
  {
    title: "Bangalore Airport Transfers",
    label: "Kempegowda International Airport",
    description:
      "Plan a Bangalore airport taxi pickup from BLR or a punctual airport drop from your doorstep. Share the flight, terminal, passenger and luggage details before confirmation.",
    details: [
      "Airport cab Bangalore pickup and drop enquiries",
      "Flight and terminal details used for planning",
    ],
    icon: Plane,
    href: "/airport-taxi-bangalore",
    linkLabel: "Explore Bangalore Airport Transfers",
  },
  {
    title: "Outstation Cabs from Bangalore",
    label: "One-way, return and multi-day travel",
    description:
      "Enquire about an outstation Premium Ertiga for family, leisure or business travel. Complete routes, planned stops and trip-specific terms are reviewed before confirmation.",
    details: [
      "Route, passenger and luggage planning",
      "Clear terms for the confirmed itinerary",
    ],
    icon: MapPin,
    href: "/outstation-cabs-bangalore",
    linkLabel: "Explore Outstation Cabs from Bangalore",
  },
  {
    title: "Car Rental in Bangalore with Driver",
    label: "Local hourly and full-day enquiries",
    description:
      "Choose an owner-driver-led Premium Ertiga for meetings, shopping, family events, local sightseeing and carefully planned multi-stop city travel.",
    details: [
      "Hourly car rental in Bangalore",
      "Duration, stops and package terms confirmed directly",
    ],
    icon: Clock3,
    href: "/car-rental-bangalore",
    linkLabel: "Explore Car Rental in Bangalore with Driver",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="page-shell pb-11 pt-16 sm:pb-12 sm:pt-17"
    >
      <div className="grid gap-3 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="section-kicker">Three ways to Go Bengaluru</p>
          <h2
            id="services-heading"
            className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl"
          >
            Cab Services in <span className="gradient-text">Bangalore</span>
          </h2>
        </div>
        <p className="max-w-2xl text-left text-sm leading-6 text-slate-600 sm:text-justify sm:[text-justify:inter-word] sm:[word-spacing:0.02em] lg:justify-self-end">
          Choose the cab service in Bangalore that matches your plan, then share
          the date, pickup, destination, passenger count and luggage with Lucky
          Travels. Every journey is subject to availability and direct
          confirmation.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {services.map(
          ({
            title,
            label,
            description,
            details,
            icon: Icon,
            href,
            linkLabel,
          }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-premium sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-purple-50 text-purple-700">
                  <Icon size={24} />
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-amber-800">
                  Premium Ertiga only
                </span>
              </div>
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.15em] text-purple-700">
                {label}
              </p>
              <h3 className="mt-1.5 text-xl font-black tracking-[-0.025em] text-[#090f2f] sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <ul className="mt-4 space-y-2 text-xs font-bold leading-5 text-slate-700">
                {details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-black text-purple-700 transition group-hover:gap-3"
                >
                  {linkLabel} <ArrowRight size={17} />
                </Link>
                {href === "/outstation-cabs-bangalore" && (
                  <Link
                    href="/bangalore-to-mysore-cab"
                    className="mt-3 flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-purple-700"
                  >
                    <Luggage size={15} /> Bangalore to Mysore cab guide
                  </Link>
                )}
              </div>
            </article>
          ),
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-purple-100 bg-purple-50/70 px-4 py-3 text-xs leading-5 text-slate-700 sm:text-sm">
        <BriefcaseBusiness size={18} className="shrink-0 text-purple-700" />
        Airport, outstation and city enquiries are handled directly—there is no
        automated website booking or payment step.
      </div>
    </section>
  );
}
