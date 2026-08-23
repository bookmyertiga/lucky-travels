import Image from "next/image";
import {
  Check,
  Clock3,
  Plane,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import { SITE } from "@/constants/site";

const gallery = [
  [
    "/images/vehicle/front-seats.jpg",
    "Premium Ertiga front seats and air-conditioned cabin",
  ],
  [
    "/images/vehicle/middle-row.jpg",
    "Premium Ertiga flexible middle-row seating",
  ],
  [
    "/images/vehicle/boot-space.jpg",
    "Premium Ertiga boot space for passenger luggage",
  ],
  [
    "/images/vehicle/dashboard.jpg",
    "Premium Ertiga dashboard and clean interior",
  ],
] as const;

const benefits = [
  "6+1 passenger seating",
  "Air-conditioned comfort",
  "Practical luggage space",
  "Clean, well-kept interiors",
] as const;

const reasons = [
  [Users, "Professional chauffeur"],
  [Plane, "Airport expertise"],
  [WalletCards, "Clear trip terms"],
  [Radio, "Direct coordination"],
  [ShieldCheck, "Safety focused"],
  [Clock3, "24/7 enquiries"],
] as const;

export default function PremiumVehicle() {
  return (
    <section id="vehicle" className="page-shell pb-12 sm:pb-14">
      <div className="relative isolate overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_22%_25%,#6b2bd5_0%,#26105f_38%,#080d2b_78%)] text-white shadow-premium">
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />
        <div className="grid min-h-[370px] lg:grid-cols-[52%_48%] lg:items-center">
          <div className="relative min-h-[270px] self-end lg:min-h-[370px]">
            <div className="hero-road-shadow absolute bottom-8 left-[8%] h-12 w-[82%] rounded-[50%] opacity-70" />
            <Image
              src="/images/hero/ertiga-cutout-v2.png"
              alt="Lucky Travels Premium Ertiga"
              fill
              sizes="(max-width: 1023px) 100vw, 54vw"
              className="object-contain object-bottom drop-shadow-[0_24px_24px_rgba(0,0,0,.38)] lg:scale-[1.07] lg:translate-x-[-1%]"
            />
          </div>

          <div className="px-6 pb-8 pt-2 sm:px-9 lg:py-9 lg:pr-12">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-400">
              Our one premium vehicle
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
              Maruti Suzuki Ertiga
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
              Lucky Travels specialises exclusively in Premium Ertiga service,
              so your booking stays simple and the travel experience stays
              consistent.
            </p>
            <p className="mt-3 text-sm font-bold text-amber-300">
              {SITE.specialisationSlogan}
            </p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-bold"
                >
                  <Check
                    size={17}
                    className="rounded-full bg-amber-400 p-0.5 text-[#080d2b]"
                  />{" "}
                  {benefit}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/85">
              <Sparkles size={15} className="text-amber-400" /> Go Bengaluru in
              premium comfort
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {gallery.map(([image, caption]) => (
          <figure
            key={caption}
            className="group overflow-hidden rounded-2xl bg-white shadow-soft"
          >
            <div className="relative h-[155px] sm:h-[210px]">
              <Image
                src={image}
                alt={caption}
                fill
                sizes="(max-width: 1023px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="px-3 py-3 text-center text-xs font-extrabold text-[#11183b]">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6">
          {reasons.map(([Icon, label], index) => (
            <div
              key={label}
              className={`flex min-h-[68px] items-center gap-2.5 px-4 py-3 ${index < reasons.length - 1 ? "border-b border-slate-100 lg:border-b-0 lg:border-r" : ""}`}
            >
              <Icon size={21} className="shrink-0 text-purple-700" />
              <b className="text-[11px] leading-4">{label}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
