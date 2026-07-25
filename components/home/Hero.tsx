import Image from "next/image";
import { Check, MessageCircle, Phone } from "lucide-react";
import HeroServiceCards from "./HeroServiceCards";
import { SITE } from "@/constants/site";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I would like a quote for a Premium Ertiga.",
  )}`;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#f3efe9]">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Bengaluru heritage landmark and airport road"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_54%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.92)_34%,rgba(255,255,255,.43)_58%,rgba(8,13,43,.03)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#090f2f]/30 to-transparent" />

      <div className="page-shell relative grid min-h-[610px] grid-rows-[auto_270px] pt-8 lg:min-h-[575px] lg:grid-cols-[47%_53%] lg:grid-rows-1 lg:items-center lg:pt-0">
        <div className="hero-copy-enter relative z-20 max-w-[690px] py-4 lg:py-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/85 px-3.5 py-2 text-[10px] font-black tracking-[0.14em] text-purple-800 shadow-soft backdrop-blur sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            BENGALURU&apos;S PREMIUM ERTIGA SPECIALIST
          </p>

          <h1 className="mt-4 text-[3.35rem] font-black leading-[0.89] tracking-[-0.055em] text-[#090f2f] sm:text-[4.6rem] lg:text-[4.25rem] xl:text-[5.25rem]">
            <span className="block whitespace-nowrap">
              Go <span className="gradient-text">Bengaluru</span>
            </span>
            <span className="mt-1 block">Airport Taxi</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm font-semibold leading-6 text-slate-700 sm:text-base sm:leading-7">
            Arrive in Bengaluru with a clean, spacious Premium Ertiga ready for your airport pickup, city rental or outstation journey.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-extrabold text-[#1b2348] sm:text-xs">
            {['Only Premium Ertiga', 'Direct booking', '24/7 enquiries'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={15} className="rounded-full bg-purple-700 p-0.5 text-white" /> {item}
              </span>
            ))}
          </div>

          <div className="mt-5 max-w-[620px]">
            <HeroServiceCards />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-800 to-violet-600 px-2.5 py-3.5 font-black text-white shadow-premium transition hover:-translate-y-0.5 sm:min-w-[180px] sm:gap-3 sm:px-5"
            >
              <Phone size={21} />
              <span className="leading-tight">
                <small className="block text-[9px] tracking-[0.15em] text-white/70">CALL NOW</small>
                <span className="text-sm sm:text-base">{SITE.phone}</span>
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-green-200 bg-white/95 px-2.5 py-3.5 font-black text-[#12203a] shadow-premium transition hover:-translate-y-0.5 sm:min-w-[200px] sm:gap-3 sm:px-5"
            >
              <MessageCircle size={23} className="text-green-600" />
              <span className="leading-tight">
                <small className="block text-[9px] tracking-[0.12em] text-slate-500">QUICK BOOKING</small>
                <span className="text-xs sm:text-sm"><span className="sm:hidden">Request Quote</span><span className="hidden sm:inline">Request on WhatsApp</span></span>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-car-enter relative z-10 h-[270px] self-end lg:h-full">
          <div className="hero-road-shadow absolute bottom-[22px] left-[7%] h-[44px] w-[88%] rounded-[50%] lg:bottom-[38px]" />
          <Image
            src="/images/hero/ertiga-cutout-v2.png"
            alt="Lucky Travels white Premium Ertiga with branded number plate"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 58vw"
            className="scale-[1.3] translate-y-[5%] object-contain object-bottom drop-shadow-[0_24px_24px_rgba(6,10,30,.30)] lg:scale-[1.13] lg:translate-x-[2%] lg:translate-y-[2%]"
          />
        </div>
      </div>
    </section>
  );
}
