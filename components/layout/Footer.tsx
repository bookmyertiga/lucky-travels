import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import BrandLogo from "@/components/shared/BrandLogo";
import { SITE } from "@/constants/site";

const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I would like a quote for a Premium Ertiga.",
)}`;

export default function Footer() {
  return (
    <>
      <footer className="bg-[#080d2b] pb-20 pt-10 text-white lg:pb-8">
        <div className="page-shell grid gap-9 md:grid-cols-2 lg:grid-cols-[1.15fr_.8fr_.8fr_1fr]">
          <div>
            <BrandLogo inverse />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/62">
              Go Bengaluru with Lucky Travels — dedicated Premium Ertiga airport
              transfers, hourly and daily rentals, and outstation travel.
            </p>
            <p className="mt-3 max-w-sm text-sm font-bold leading-6 text-amber-300">
              {SITE.specialisationSlogan}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-[#080d2b]"
              >
                <Phone size={16} /> Call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-xs font-black text-white"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-amber-400 px-3 py-2.5 text-xs font-black text-amber-400 bg-transparent"
              >
                <Star size={16} className="text-amber-400" /> Google Review
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.15em] text-amber-400">
              Explore
            </h2>
            <nav className="mt-4 grid gap-2.5 text-sm text-white/64">
              <Link href="/">Home</Link>
              <Link href="/about">About Lucky Travels</Link>
              <Link href="/blog">Travel Blog</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.15em] text-amber-400">
              Services
            </h2>
            <nav className="mt-4 grid gap-2.5 text-sm text-white/64">
              <Link href="/services/airport-transfers">Airport Transfers</Link>
              <Link href="/services/rental-packages">
                Hourly / Daily Rentals
              </Link>
              <Link href="/services/outstation-packages">
                Outstation Packages
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.15em] text-amber-400">
              Get in touch
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-white/64">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2.5"
              >
                <Phone size={16} className="text-purple-300" /> {SITE.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <MessageCircle size={16} className="text-green-400" />{" "}
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 break-all"
              >
                <Mail size={16} className="shrink-0 text-purple-300" />{" "}
                {SITE.email}
              </a>
              <address className="flex gap-2.5 not-italic leading-5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber-400" />{" "}
                {SITE.address}
              </address>
              <div className="flex gap-4 pt-1">
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="page-shell mt-9 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[11px] text-white/45 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Lucky Travels. All rights reserved.
          </span>
          <span className="text-white/55">
            {SITE.domain} · Go Bengaluru by Lucky Travels.
          </span>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 border-t border-white/20 text-sm font-black text-white shadow-[0_-8px_30px_rgba(9,15,47,.2)] lg:hidden">
        <a
          href={`tel:${SITE.phone}`}
          className="flex items-center justify-center gap-2 bg-purple-800 p-3.5"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 p-3.5"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
}
