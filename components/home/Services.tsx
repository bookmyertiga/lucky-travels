import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Plane } from "lucide-react";

const services = [
  {
    title: "Airport Transfers",
    label: "Airport pickup & drop",
    description: "Premium Ertiga transfers to and from Kempegowda International Airport and Bengaluru localities.",
    image: "/images/services/airport.jpg",
    icon: Plane,
    href: "/services/airport-transfers",
  },
  {
    title: "Hourly / Daily Rentals",
    label: "Flexible city packages",
    description: "Keep your Ertiga with you for meetings, shopping, sightseeing, events and multiple city stops.",
    image: "/images/services/hourly.jpg",
    icon: Clock3,
    href: "/services/rental-packages",
  },
  {
    title: "Outstation Packages",
    label: "Travel beyond Bengaluru",
    description: "Comfortable one-way, round-trip and multi-day Premium Ertiga travel for families and guests.",
    image: "/images/services/outstation.jpg",
    icon: MapPin,
    href: "/services/outstation-packages",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="page-shell py-12 sm:py-14">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">Three ways to travel</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
            Premium Ertiga for <span className="gradient-text">every journey</span>
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-slate-600">
          One premium vehicle, direct booking and a comfortable experience from arrival to destination.
        </p>
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {services.map(({ title, label, description, image, icon: Icon, href }) => (
          <Link
            href={href}
            key={title}
            className="group relative min-h-[310px] overflow-hidden rounded-2xl bg-[#090f2f] shadow-premium"
          >
            <Image
              src={image}
              alt={`${title} with Lucky Travels Premium Ertiga`}
              fill
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c29] via-[#070c29]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.17em] text-amber-400">{label}</p>
                  <h3 className="mt-1.5 text-2xl font-black">{title}</h3>
                  <p className="mt-2 max-w-md text-xs leading-5 text-white/75 sm:text-sm">{description}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-purple-700 transition group-hover:-translate-y-1">
                  <Icon size={23} className="transition group-hover:hidden" />
                  <ArrowUpRight size={23} className="hidden group-hover:block" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
