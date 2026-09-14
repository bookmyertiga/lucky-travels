import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  Luggage,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Whitefield to Bangalore Airport Cab | Dedicated 6+1 Premium Ertiga Taxi",
  description:
    "Pre-book a guaranteed 6+1 Premium Ertiga from Whitefield to Kempegowda Airport (BLR T1 & T2). Punctual doorstep pickups, fixed pricing, and ample luggage space.",
  alternates: {
    canonical: `${SITE.url}/whitefield-to-bangalore-airport-cab`,
  },
  openGraph: {
    title: "Whitefield to Bangalore Airport Cab | Go Bengaluru by Lucky Travels",
    description:
      "Direct Whitefield to BLR Airport taxi transfers. Verified chauffeur-driven 6+1 Ertiga with fold-flat luggage boot space.",
    url: `${SITE.url}/whitefield-to-bangalore-airport-cab`,
    images: [
      {
        url: "/images/gallery/bengaluru-airport-ertiga-cab-drop.jpg",
        width: 1536,
        height: 1024,
        alt: "Go Bengaluru Maruti Ertiga at Kempegowda International Airport",
      },
    ],
  },
};

export default function WhitefieldAirportCabPage() {
  const whatsappBookingUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I want to book a Premium Ertiga cab from Whitefield to Kempegowda International Airport."
  )}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much time does a cab take from Whitefield to Bengaluru Airport (BLR)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Travel time between Whitefield and Kempegowda Airport is approximately 65 to 85 minutes via the Budigere Cross and SH 104 route during normal traffic windows.",
        },
      },
      {
        "@type": "Question",
        name: "Will our large international luggage fit in the Ertiga cab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our 6+1 Maruti Suzuki Ertiga vehicles feature flexible 50:50 fold-flat third-row seating, comfortably accommodating up to 2 large check-in bags plus cabin trolleys.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer doorstep pickup in Whitefield for early morning flights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We specialize in confirmed 3:00 AM to 6:00 AM departures with guaranteed punctual arrivals at all gated societies and tech parks across Whitefield.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6">
            <Link href="/" className="transition hover:text-purple-700 hover:underline">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/airport-taxi-bangalore" className="transition hover:text-purple-700 hover:underline">
              Airport Transfers
            </Link>
            <ChevronRight size={12} />
            <span className="font-semibold text-slate-800">Whitefield to BLR Airport</span>
          </div>
        </div>

        <section className="bg-[#080d2b] py-12 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-300">
                  <ShieldCheck size={16} /> Guaranteed On-Time Doorstep Pickup
                </div>
                <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Whitefield to Bangalore Airport Cab Service
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Travel stress-free with our dedicated <strong className="text-white">6+1 Maruti Suzuki Ertiga</strong> fleet. Enjoy <em>zero surge pricing surprises</em>, <span className="underline decoration-amber-400 underline-offset-4">roomy fold-flat boot space</span>, and courteous owner-drivers delivering you directly to <strong>BLR Terminal 1 and Terminal 2</strong>.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-[#080d2b] shadow-md transition hover:bg-slate-100 active:scale-95"
                  >
                    <Phone size={18} /> Call {SITE.phone}
                  </a>
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-black text-white shadow-md transition hover:bg-green-700 active:scale-95"
                  >
                    <MessageCircle size={18} /> Book on WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:col-span-5">
                <Image
                  src="/images/gallery/bengaluru-airport-ertiga-cab-drop.jpg"
                  alt="Lucky Travels Ertiga cab curbside at Kempegowda International Airport"
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#080d2b] via-[#080d2b]/60 to-transparent p-4 text-xs font-medium text-slate-200">
                  Curbside departure drops at Kempegowda International Airport (BLR)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto -mt-6 max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Clock className="text-purple-700" size={28} />
              <h2 className="mt-3 text-lg font-bold text-slate-900">Timing & Buffer</h2>
              <p className="mt-2 text-sm text-slate-600">
                Average travel duration is <strong>65 to 85 minutes</strong> via the <em>Budigere Cross / SH 104</em> corridor. We recommend a <strong>3.5-hour pre-flight departure</strong> window.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Luggage className="text-amber-500" size={28} />
              <h2 className="mt-3 text-lg font-bold text-slate-900">Luggage Ready</h2>
              <p className="mt-2 text-sm text-slate-600">
                With 50:50 fold-flat seats, safely accommodate <span className="underline decoration-purple-500 underline-offset-2">3 to 4 international trolley bags</span> without squeezing passengers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <MapPin className="text-green-600" size={28} />
              <h2 className="mt-3 text-lg font-bold text-slate-900">All Whitefield Pockets</h2>
              <p className="mt-2 text-sm text-slate-600">
                Prompt pickups across <em>ITPB, Hope Farm, Kadugodi, Prestige Shantiniketan, ECC Road, and Varthur</em>.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Why Pre-Book Your Whitefield Airport Taxi with Go Bengaluru?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Booking an airport taxi from <strong>Whitefield</strong> during morning rush hours or dead-of-night departure windows can be fraught with uncertainty. App-based taxi aggregators often mean <em>frequent driver cancellations</em>, steep <u>surge multipliers</u>, and CNG sedans with zero boot space left for your luggage.
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  At <strong>Go Bengaluru by Lucky Travels</strong>, we provide a guaranteed, pre-booked transit model. Whether catching an early domestic flight from <strong>Terminal 1</strong> or an overseas flight out of <strong>Terminal 2</strong>, your Ertiga arrives ahead of time at your doorstep.
                </p>

                <div className="my-8 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <Image
                    src="/images/gallery/clean-interior-ertiga-cab-bangalore.jpg"
                    alt="Spacious sanitized interior of Go Bengaluru Premium Ertiga"
                    width={1536}
                    height={1024}
                    className="h-auto w-full object-cover"
                  />
                  <p className="bg-slate-50 p-3 text-center text-xs italic text-slate-600">
                    Clean, spacious 6+1 cabin with individual AC vents and deep legroom for family transfers.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Key Operational Advantages on the Whitefield Corridor
                </h3>

                <ul className="mt-4 space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={18} />
                    <span>
                      <strong>Budigere Cross Bypass Route:</strong> Our chauffeurs bypass choked Ring Road bottlenecks by routing through Kadugodi and SH 104, cutting 20+ minutes of city traffic delays.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={18} />
                    <span>
                      <strong>Transparent, Flat Fares:</strong> No surprise surge pricing when it rains or during early-morning spikes. The quoted fare is the fare you pay.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={18} />
                    <span>
                      <strong>Dedicated Chauffeurs:</strong> Courteous, verified owner-drivers focused on safety, vehicle cleanliness, and passenger punctuality.
                    </span>
                  </li>
                </ul>

                <div className="mt-10 rounded-2xl border border-purple-200 bg-purple-50/70 p-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-purple-900">
                    <Sparkles size={18} className="text-amber-500" /> Helpful Guide for Your Trip
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-purple-950">
                    Want to know how we compare against standard app cabs for luggage handling, wait times, and flight buffers? Read our complete{" "}
                    <Link
                      href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
                      className="font-bold underline decoration-purple-600 hover:text-purple-700"
                    >
                      Bengaluru Airport Cab Guide: Timing, Luggage & Why We Beat App Taxis
                    </Link>.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  Frequently Asked Questions (Whitefield to BLR Airport)
                </h2>
                <div className="mt-6 divide-y divide-slate-200">
                  <div className="py-4">
                    <h3 className="font-bold text-slate-900">
                      How much travel time should I budget from Whitefield to Kempegowda Airport?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Expect <strong>65 to 85 minutes</strong> during standard non-peak hours via the SH 104 route. If travelling between 5:00 PM and 8:30 PM, add a 25-minute buffer for Kadugodi and Budigere Cross intersections.
                    </p>
                  </div>
                  <div className="py-4">
                    <h3 className="font-bold text-slate-900">
                      Can the Ertiga comfortably carry 5 passengers with international suitcases?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Yes. By folding one-half of the third-row seats, you gain extensive boot depth holding up to <strong>2 large check-in bags</strong> plus cabin suitcases, while leaving 4 to 5 spacious passenger seats intact.
                    </p>
                  </div>
                  <div className="py-4">
                    <h3 className="font-bold text-slate-900">
                      Do you also provide pickups from BLR Airport back to Whitefield?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Yes. Check our main{" "}
                      <Link href="/airport-taxi-bangalore" className="font-semibold text-purple-700 underline">
                        Airport Taxi Bangalore page
                      </Link>{" "}
                      to schedule arrival terminal pickups. Your driver tracks your incoming flight number to adjust for delays.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold text-slate-900">Reserve Your Ertiga</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Direct dispatch booking with zero surge surprises. Get a confirmed quote in 2 minutes.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 text-sm font-black text-white shadow transition hover:bg-green-700"
                  >
                    <MessageCircle size={18} /> Book via WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c143e] py-3.5 text-sm font-black text-white shadow transition hover:bg-slate-800"
                  >
                    <Phone size={18} /> Direct Call ({SITE.phone})
                  </a>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Other Travel Services
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>
                      <Link href="/services/rental-packages" className="transition hover:text-purple-700 hover:underline">
                        → Hourly & Daily Rental Packages
                      </Link>
                    </li>
                    <li>
                      <Link href="/corporate-car-rental-bangalore" className="transition hover:text-purple-700 hover:underline">
                        → Corporate Chauffeur Rentals
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/outstation-packages" className="transition hover:text-purple-700 hover:underline">
                        → Outstation Ertiga Packages
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}