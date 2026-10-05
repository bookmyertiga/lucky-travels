import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const contactUrl = `${SITE.url}/contact`;

const generalWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I would like to check cab availability and get a quote."
)}`;

const airportWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need an Airport Cab quote.\nDate:\nPickup Time:\nFlight Number & Terminal (T1/T2):\nPickup Locality:\nPassenger Count & Luggage:"
)}`;

const rentalWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need an Hourly City Rental cab.\nDate:\nPackage (8h/80km, 10h/100km, 12h/120km):\nPickup Area:\nStops/Itinerary:"
)}`;

const outstationWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I need an Outstation Cab quote.\nDestination (Mysore/Coorg/Ooty/Tirupati/Other):\nDeparture Date & Return Date:\nPickup Area in Bengaluru:\nPassenger Count:"
)}`;

export const metadata: Metadata = {
  title: "Contact Lucky Travels | Direct 24/7 Chauffeur Dispatch Bengaluru",
  description:
    "Contact Lucky Travels (Go Bengaluru). Call or WhatsApp +91 98868 14344 for instant, price-locked quotes on 2024–2026 factory S-CNG Ertigas. 24/7 BLR airport & outstation dispatch.",
  alternates: { canonical: contactUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Lucky Travels | Direct 24/7 Chauffeur Dispatch Bengaluru",
    description:
      "Direct owner-driver dispatch desk in Konena Agrahara, HAL. Get instant price-locked Ertiga quotes for Bangalore airport, hourly rentals, and outstation trips.",
    url: contactUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Contact Lucky Travels dispatch desk in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lucky Travels | 24/7 Ertiga Dispatch Bengaluru",
    description:
      "Direct phone and WhatsApp booking for 2024–2026 factory S-CNG Ertigas in Bengaluru with zero aggregator markups.",
    images: [`${SITE.url}/images/services/hourly.jpg`],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Lucky Travels Dispatch Desk",
    url: contactUrl,
    description:
      "Direct booking and dispatch channels for Lucky Travels Ertiga services across Bengaluru, Kempegowda Airport, and Karnataka outstation routes.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Lucky Travels - Go Bengaluru",
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560017",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9569,
        longitude: 77.6534,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: contactUrl },
    ],
  };

  return (
    <SiteShell>
      <JsonLd data={[contactPageSchema, breadcrumbSchema]} />
      <main className="overflow-x-hidden bg-[#f8fafc]">
        {/* HEADER SECTION */}
        <section
          aria-labelledby="contact-heading"
          className="border-b border-slate-200 bg-white px-5 pt-10 pb-12 sm:pt-14 sm:pb-16"
        >
          <div className="mx-auto max-w-6xl">
            {/* Live Status Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                DISPATCH DESK ACTIVE • 24/7 KEMPEGOWDA AIRPORT &amp; CITY TRANSIT
              </span>
            </div>

            <h1
              id="contact-heading"
              className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] leading-tight"
            >
              Direct Dispatch &amp; Booking Channels
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Connect directly with owner-driver <strong>Bharath K S</strong> and the Lucky Travels dispatch desk. Receive an honest, price-locked quote in under 15 minutes with <strong>zero aggregator commissions, zero cancellation surprises, and guaranteed 2024–2026 factory S-CNG Ertiga allocation</strong>.
            </p>
          </div>
        </section>

        {/* PRIMARY CHANNELS & QUICK-BUILDER GRID */}
        <section className="px-5 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-start">
            {/* LEFT COLUMN: DIRECT CONNECT CARD */}
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0e172e] p-6 text-white shadow-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                    DIRECT DESK
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">Call or WhatsApp Directly</h2>
                </div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-black text-emerald-300">
                  <Phone size={18} />
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                Speak directly with the person who knows the cars, drivers, and routes. No outsourced support bots, ticketing systems, or automated telephone trees.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-center text-xs sm:text-sm font-black text-slate-950 shadow-md transition hover:bg-slate-100 active:scale-95"
                >
                  <Phone size={18} className="text-purple-700" />
                  Call Now: +91 {SITE.phone}
                </a>

                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-5 py-3.5 text-center text-xs sm:text-sm font-black text-white shadow-md transition hover:bg-emerald-500 active:scale-95"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp (Fastest Response)
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-xs sm:text-sm font-medium text-slate-300 transition hover:bg-white/10"
                >
                  <Mail size={16} />
                  {SITE.email}
                </a>
              </div>

              {/* Operating Base Details */}
              <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-4.5 text-xs sm:text-sm text-slate-300 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin size={17} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Dispatch Hub Location:</strong>
                    <span>No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL, Bengaluru 560017</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                  <Clock size={17} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Operating Hours:</strong>
                    <span>24/7 Curbside Airport Transfers &amp; Pre-Scheduled City Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-5 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span>⏱️ Average Response: Under 15 mins</span>
                <span className="text-emerald-400">✓ No Surge Multipliers</span>
              </div>
            </div>

            {/* RIGHT COLUMN: 1-CLICK WHATSAPP TEMPLATE BUILDERS */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                  ONE-TAP ENQUIRY TEMPLATES
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-black text-slate-900">
                  Select Your Journey to Pre-Fill WhatsApp
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Tap any card below to launch a pre-formatted booking enquiry directly in WhatsApp:
                </p>
              </div>

              {/* TEMPLATE 1: AIRPORT */}
              <a
                href={airportWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                      <Plane size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition">
                        Kempegowda Airport (BLR T1 &amp; T2) Transfer
                      </h3>
                      <p className="text-xs text-slate-500">Pickups &amp; drops across Whitefield, E-City, Sarjapur, HSR &amp; North Bangalore</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-purple-700 group-hover:translate-x-1 transition shrink-0" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-purple-900">
                  <span className="rounded-md bg-purple-50 px-2 py-0.5">Flight Tracking Included</span>
                  <span className="rounded-md bg-purple-50 px-2 py-0.5">4 Large Suitcases Fit Flat</span>
                  <span className="rounded-md bg-purple-50 px-2 py-0.5">3:00 AM Guaranteed Dispatch</span>
                </div>
              </a>

              {/* TEMPLATE 2: HOURLY CITY RENTAL */}
              <a
                href={rentalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
                        Hourly City Rental &amp; Disposal Packages
                      </h3>
                      <p className="text-xs text-slate-500">8h/80km, 10h/100km &amp; 12h/120km for meetings, shopping &amp; weddings</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition shrink-0" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-blue-900">
                  <span className="rounded-md bg-blue-50 px-2 py-0.5">Multiple Stops</span>
                  <span className="rounded-md bg-blue-50 px-2 py-0.5">No Rebooking Friction</span>
                  <span className="rounded-md bg-blue-50 px-2 py-0.5">Dedicated Chauffeur on Standby</span>
                </div>
              </a>

              {/* TEMPLATE 3: OUTSTATION */}
              <a
                href={outstationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                      <Compass size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition">
                        Outstation Road Trips Across South India
                      </h3>
                      <p className="text-xs text-slate-500">Expressway cruises to Mysore, Srirangapatna, Coorg, Ooty, Chikmagalur &amp; Tirupati</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-amber-700 group-hover:translate-x-1 transition shrink-0" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-amber-900">
                  <span className="rounded-md bg-amber-50 px-2 py-0.5">2024–2026 Factory S-CNG</span>
                  <span className="rounded-md bg-amber-50 px-2 py-0.5">Knee-Level Console AC</span>
                  <span className="rounded-md bg-amber-50 px-2 py-0.5">Zero Hidden Driver Bata</span>
                </div>
              </a>

              {/* LEAD TIME GUIDELINE BOX */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4.5 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">Recommended Booking Notice Windows:</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mt-2">
                  <div className="rounded-xl bg-white border border-slate-200 p-2.5">
                    <strong>Airport &amp; Local:</strong> 4–6 hrs advance notice
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-2.5">
                    <strong>Outstation Trips:</strong> 12–24 hrs advance notice
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 3 TRUST PROTOCOLS */}
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-purple-700 block">
                THE DISPATCH STANDARD
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
                What to Expect When You Contact Us
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold mb-3">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Direct Vehicle Confirmation</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  We verify your passenger count and luggage volumes before confirming. You always know that a clean 2024–2026 Ertiga is locked for your trip.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 font-bold mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Transparent Written Invoicing</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Every quote includes vehicle hire, chauffeur service, fuel, and toll policies written down clearly on WhatsApp with zero post-trip surprises.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800 font-bold mb-3">
                  <CalendarCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Chauffeur Assigned in Advance</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  For early-morning airport runs (3:00 AM – 6:00 AM), driver contact and car registration details are shared the evening prior so you sleep with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: DIRECT SERVICE PORTAL LINKS */}
        <section className="border-t border-slate-200 px-5 py-10 sm:py-14 bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                  SERVICE DIRECTORY
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Explore Specialized Service Pages
                </h2>
              </div>
              <Link href="/about" className="text-xs font-bold text-purple-700 underline">
                Learn more about our fleet &amp; founder story →
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/airport-taxi-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                ✈️ Bangalore Airport Taxi
              </Link>
              <Link
                href="/car-rental-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                ⏱️ Hourly City Rental (8h/10h/12h)
              </Link>
              <Link
                href="/outstation-cabs-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                🛣️ Outstation Highway Cabs
              </Link>
              <Link
                href="/corporate-car-rental-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                💼 Corporate GST Mobility
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}