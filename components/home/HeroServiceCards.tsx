import Link from "next/link";
import { Clock3, MapPin, Plane } from "lucide-react";

const items = [
  [Plane, "Airport", "Pickup & drop", "/services/airport-transfers"],
  [Clock3, "City Rental", "Hourly / daily", "/services/rental-packages"],
  [MapPin, "Outstation", "One-way & return", "/services/outstation-packages"],
] as const;

export default function HeroServiceCards() {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
      {items.map(([Icon, title, subtitle, href]) => (
        <Link
          href={href}
          key={title}
          className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/80 bg-white/90 px-2.5 py-2.5 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-purple-200 sm:px-3.5"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-purple-50 text-purple-700 sm:h-10 sm:w-10">
            <Icon size={20} />
          </span>
          <span className="min-w-0">
            <b className="block truncate text-[9px] sm:text-[12px]">{title}</b>
            <small className="hidden truncate text-[9px] text-slate-500 sm:block">{subtitle}</small>
          </span>
        </Link>
      ))}
    </div>
  );
}
