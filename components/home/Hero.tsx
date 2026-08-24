import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/constants/site";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I need a Premium Ertiga. Please check availability.",
  )}`;

  return (
    <section
      id="home"
      aria-labelledby="homepage-heading"
      className="relative isolate border-b border-purple-100 bg-[#f3efe9]"
    >
      <div
        className="absolute inset-0 -z-30 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/hero/hero-bg.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.9)_67%,rgba(255,255,255,.52)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.94)_42%,rgba(255,255,255,.62)_63%,rgba(255,255,255,.2)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#090f2f]/20 to-transparent" />

      <div className="page-shell grid gap-3 pb-10 pt-5 lg:min-h-[465px] lg:grid-cols-[55%_45%] lg:items-center lg:gap-4 lg:pb-8 lg:pt-3">
        <div className="hero-copy-enter relative z-20 max-w-[780px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-3.5 py-2 text-[10px] font-black tracking-[0.14em] text-purple-800 shadow-soft sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            24/7 DIRECT CAB ENQUIRIES IN BENGALURU
          </p>

          <h1
            id="homepage-heading"
            className="mt-3 max-w-[760px] text-[2.25rem] font-black leading-[1.02] tracking-[-0.045em] text-[#090f2f] sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.8rem]"
          >
            Reliable 24/7 Cab &amp; Taxi Service in Bangalore
          </h1>

          <p className="mt-3 max-w-2xl text-left text-sm font-semibold leading-6 text-slate-700 sm:text-justify sm:text-base sm:leading-7 sm:[text-justify:inter-word] sm:[word-spacing:0.02em]">
            Comfortable, clean Premium Ertiga service for Bangalore airport
            transfers, outstation trips and local city rentals, with every
            journey confirmed directly by Lucky Travels.
          </p>

          <p className="mt-2.5 max-w-2xl text-left text-xs leading-5 text-slate-600 sm:text-justify sm:text-sm sm:leading-6 sm:[text-justify:inter-word] sm:[word-spacing:0.02em]">
            For many family and small-group journeys, a Premium Ertiga provides
            a more practical balance of passenger room and luggage planning than
            a compact hatchback or sedan. Final suitability is always checked
            before booking.
          </p>

          <p className="mt-3 text-sm font-black text-purple-800 sm:text-base">
            {SITE.specialisationSlogan}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
            <a
              href={`tel:+91${SITE.phone}`}
              className="flex min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-800 to-violet-600 px-3 py-3 font-black text-white shadow-premium transition hover:-translate-y-0.5 sm:min-w-[188px] sm:px-5"
            >
              <Phone size={20} />
              <span className="whitespace-nowrap text-sm sm:text-base">
                <span className="sm:hidden">Call Now</span>
                <span className="hidden sm:inline">Call +91 {SITE.phone}</span>
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-3 py-3 font-black text-[#12203a] shadow-premium transition hover:-translate-y-0.5 sm:min-w-[200px] sm:px-5"
            >
              <MessageCircle size={21} className="text-green-600" />
              <span className="text-sm sm:text-base">WhatsApp</span>
            </a>
          </div>

          <p className="mt-3 flex max-w-2xl items-start gap-2 text-[11px] font-bold leading-5 text-slate-600 sm:text-xs">
            <Check
              size={16}
              className="mt-0.5 shrink-0 rounded-full bg-purple-700 p-0.5 text-white"
            />
            Enquire at any time. Vehicle, driver, route and timing remain
            subject to availability and direct confirmation.
          </p>
        </div>

        <Link
          href="/airport-taxi-bangalore"
          aria-label="Explore Bangalore airport taxi service in a Premium Ertiga"
          className="hero-car-enter relative z-10 mx-auto block w-full max-w-[720px] self-end lg:-mb-1 lg:translate-y-20"
        >
          <span className="hero-road-shadow absolute inset-x-[8%] bottom-[2%] h-10 rounded-[50%]" />
          <Image
            src="/images/hero/ertiga-grounded.png"
            alt="Lucky Travels white Premium Ertiga for Bangalore cab journeys"
            width={1774}
            height={887}
            sizes="(max-width: 1023px) 92vw, 45vw"
            className="relative h-auto max-h-24 w-full object-contain drop-shadow-[0_22px_22px_rgba(6,10,30,.26)] sm:max-h-[225px] lg:max-h-none"
          />
        </Link>
      </div>

      <a
        href="#services"
        className="service-scroll-prompt absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-[10px] font-black tracking-[0.08em] text-purple-800 shadow-premium sm:px-5 sm:text-xs"
      >
        Explore Our Cab Services Below
        <ArrowDown size={16} className="service-scroll-arrow" />
      </a>
    </section>
  );
}
