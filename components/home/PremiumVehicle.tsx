import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Luggage, Snowflake, Users } from "lucide-react";
import { SITE } from "@/constants/site";

const vehiclePoints = [
  {
    icon: Users,
    title: "Premium 6+1 seating",
    text: "A Premium 6+1-seater Ertiga, including the driver. Passenger and luggage suitability is confirmed before booking.",
  },
  {
    icon: Snowflake,
    title: "Air-conditioned cabin comfort",
    text: "A practical, comfortable cabin for suitable family, small-group, airport, city and longer road journeys.",
  },
  {
    icon: Luggage,
    title: "Honest luggage planning",
    text: "Capacity is not unlimited; suitability depends on passengers, seats required, suitcase sizes and other travel needs.",
  },
] as const;

const gallery = [
  {
    src: "/images/vehicle/middle-row.jpg",
    alt: "Premium Ertiga middle-row seating prepared for Bangalore journeys",
    caption: "Flexible middle-row seating in the Premium Ertiga cabin.",
    href: "/car-rental-bangalore",
    label: "View car rental in Bangalore with driver",
  },
  {
    src: "/images/vehicle/boot-space.jpg",
    alt: "Premium Ertiga boot area ready for advance luggage planning",
    caption: "Boot space shown for honest passenger and luggage planning.",
    href: "/airport-taxi-bangalore",
    label: "View Bangalore airport taxi service",
  },
] as const;

export default function PremiumVehicle() {
  return (
    <section
      id="vehicle"
      aria-labelledby="premium-ertiga-heading"
      className="page-shell pb-11 sm:pb-12"
    >
      <div className="relative isolate overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_18%_20%,#6b2bd5_0%,#26105f_42%,#080d2b_82%)] px-5 py-7 text-white shadow-premium sm:px-8 sm:py-9 lg:px-10">
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />

        <div className="grid gap-7 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-400">
              One specialised vehicle category
            </p>
            <h2
              id="premium-ertiga-heading"
              className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-4xl"
            >
              Why Lucky Travels Offers Only Premium Ertiga
            </h2>
            <p className="mt-4 max-w-3xl text-left text-sm leading-6 text-white/75 sm:text-justify sm:text-base sm:leading-7 sm:[text-justify:inter-word] sm:[word-spacing:0.02em]">
              Lucky Travels deliberately concentrates on the Premium Maruti
              Suzuki Ertiga instead of listing hatchbacks, compact sedans,
              multiple SUV classes, tempo travellers and buses. Working with one
              known category supports more consistent vehicle preparation,
              cleanliness, seating guidance, luggage planning and direct
              communication.
            </p>
            <p className="mt-3 max-w-3xl text-left text-sm leading-6 text-white/75 sm:text-justify sm:text-base sm:leading-7 sm:[text-justify:inter-word] sm:[word-spacing:0.02em]">
              For many suitable families and small groups, a Premium Ertiga
              offers a practical balance of seating, air-conditioned cabin
              comfort and luggage planning compared with a compact hatchback or
              sedan. Travel comfort is treated as a basic need, not an optional
              extra, while every passenger-and-bag combination is assessed
              honestly.
            </p>
            <p className="mt-4 text-sm font-black text-amber-300 sm:text-base">
              {SITE.specialisationSlogan}
            </p>
            <p className="mt-3 max-w-3xl text-left text-xs leading-5 text-white/65 sm:text-justify sm:text-sm sm:leading-6 sm:[text-justify:inter-word] sm:[word-spacing:0.02em]">
              Customers seeking a Premium Ertiga taxi in Bangalore or a
              6+1-seater cab in Bangalore receive a clearly specified vehicle
              category before confirmation—not a promise that it suits every
              passenger and luggage combination.
            </p>
            <Link
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white underline decoration-amber-400 decoration-2 underline-offset-4"
            >
              Read why Lucky Travels specialises only in the Premium Ertiga
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-3">
            {vehiclePoints.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/12 bg-white/9 p-4 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-400 text-[#080d2b]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-black sm:text-base">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/68 sm:text-sm sm:leading-6">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {gallery.map(({ src, alt, caption, href, label }) => (
          <figure
            key={src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
          >
            <Link
              href={href}
              aria-label={label}
              className="group block overflow-hidden"
            >
              <Image
                src={src}
                alt={alt}
                width={1536}
                height={1024}
                sizes="(max-width: 639px) 100vw, 50vw"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
              />
            </Link>
            <figcaption className="flex items-start gap-2 px-4 py-3 text-left text-xs font-bold leading-5 text-slate-600">
              <Check size={16} className="mt-0.5 shrink-0 text-purple-700" />
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
