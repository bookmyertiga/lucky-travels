"use client";

import Link from "next/link";
import { Mail, Menu, MessageCircle, Phone, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/shared/BrandLogo";
import { SITE } from "@/constants/site";

const links = [
  ["Home", "/"],
  ["Airport Transfers", "/airport-taxi-bangalore"],
  ["Rental Packages", "/services/rental-packages"],
  ["Corporate Packages", "/corporate-car-rental-bangalore"],
  ["Outstation Packages", "/services/outstation-packages"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I would like to book a Premium Ertiga.",
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-[#080d2b] text-white md:block">
        <div className="page-shell flex h-8 items-center justify-between text-[11px] font-semibold tracking-wide">
          <span className="flex items-center gap-2 text-white/75">
            <ShieldCheck size={14} className="text-amber-400" />
            Premium Ertiga only <span className="text-white/30">•</span> Professional chauffeur <span className="text-white/30">•</span> 24/7 enquiries
          </span>
          <span className="flex items-center gap-5 text-white/80">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail size={13} /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone size={13} /> {SITE.phone}
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="shrink-0">
            <BrandLogo />
          </div>

          <nav aria-label="Primary navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:gap-4 2xl:gap-5 xl:flex">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="relative whitespace-nowrap py-7 text-xs font-medium leading-none transition hover:text-purple-700 xl:text-sm">
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-xl bg-[#0c143e] px-4 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#090f2f] xl:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full z-50 h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-200 bg-white px-5 py-6 xl:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto grid max-w-2xl gap-1">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="whitespace-nowrap rounded-xl px-4 py-3.5 font-extrabold text-[#11183b] hover:bg-purple-50 hover:text-purple-700"
                >
                  {label}
                </Link>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-[#0c143e] px-4 py-3.5 font-black text-white">
                  <Phone size={18} /> Call
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3.5 font-black text-white">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
