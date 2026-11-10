import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Clock,
  Luggage,
  MapPinned,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { createAirportTaxiSeo } from "@/lib/airportTaxiSeo";

const routeUrl = `${SITE.url}/airport-taxi-bangalore`;
const airportWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  `Hello Lucky Travels, I need an airport taxi in Bangalore.\n\nTrip Type (Pickup / Drop):\nFlight Date & Time:\nFlight Number (for delay tracking):\nBangalore Pickup/Drop Locality:\nPassenger Count:\nLarge Suitcases & Cabin Bags:`
)}`;
const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Bangalore Airport Taxi Enquiry")}`;

const pageTitle =
  "Bangalore Airport Taxi | Kempegowda Airport BLR T1 & T2 6+1 Ertiga Cab - Go Bengaluru";
const pageDescription =
  "Book reliable Bangalore airport taxi to Kempegowda International Airport (BLR T1 & T2). Punctual doorstep pickup, flight tracking, and 4-suitcase boot room in a brand new 2026 factory CNG Ertiga. Innova-like comfort at sedan rates. Lock your quote on WhatsApp.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: routeUrl,
    type: "website",
    siteName: "Go Bengaluru by Lucky Travels",
    images: [
      {
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Go Bengaluru Premium Ertiga for Bangalore airport taxi transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE.url}/images/services/hourly.jpg`],
  },
};

const airportCorridors = [
  { name: "Whitefield & Kadugodi", time: "~60–75 mins", route: "Via SH-104 / Budigere Cross" },
  { name: "Electronic City & HSR Layout", time: "~75–90 mins", route: "Via NICE Road / Hebbal Flyover" },
  { name: "Indiranagar & HAL Airport Road", time: "~50–65 mins", route: "Via Old Airport Road & Outer Ring Road" },
  { name: "Koramangala & Bellandur", time: "~60–75 mins", route: "Via Marathahalli & Hebbal Expressway" },
  { name: "Jayanagar & JP Nagar", time: "~70–85 mins", route: "Via Central Bangalore / Bellary Road" },
  { name: "Hebbal & Manyata Tech Park", time: "~30–40 mins", route: "Direct NH-44 Airport Expressway" },
];

const airportServices = [
  {
    title: "Bangalore Airport Drop (To BLR T1 & T2)",
    label: "Guaranteed On-Time Departure",
    text: "Punctual doorstep reporting from your home, office, or hotel in Bangalore. Chauffeurs calculate departure buffer times using live traffic updates to ensure stress-free check-ins.",
  },
  {
    title: "Bangalore Airport Pickup (From BLR T1 & T2)",
    label: "Live Flight Delay Tracking",
    text: "Curbside reception at Kempegowda International Airport. We track incoming flight numbers to adjust for delays, with direct WhatsApp driver coordination upon landing.",
  },
  {
    title: "International Flight Luggage Transfer",
    label: "Deep Modular Boot Room",
    text: "Third-row seats fold completely flat to accommodate 4 large international check-in suitcases, cabin trolleys, and personal baggage with room to spare.",
  },
  {
    title: "Early Morning & Midnight Airport Runs",
    label: "24/7 Dedicated Chauffeurs",
    text: "Confirmed night and early dawn transfers (2:00 AM – 5:00 AM) across Bengaluru with guaranteed driver arrival and zero last-minute cancellations.",
  },
];

const airportBenefits = [
  "Spotless, sanitized brand-new 2026 Maruti Suzuki Ertiga dedicated strictly to your flight schedule.",
  "100% factory-fitted S-CNG technology for smooth, quiet highway runs with zero aftermarket risk.",
  "2nd-row console AC vents placed near the knees for direct, gentle airflow without harsh overhead blasts.",
  "Dedicated 6+1 fleet with guaranteed vehicle allocation—zero sudden downsizing to small hatchbacks or sedans.",
  "Chauffeurs continuously track Bellary Road, Hebbal Flyover, and airport expressway traffic.",
  "Direct communication with owner-driver Bharath K S or assigned trusted fellow drivers.",
  "Modular boot capacity: easily fits up to 4 large international check-in suitcases when 3rd row is folded.",
  "Elderly and family assistance with baggage lifting and effortless low step-in boarding.",
  "Strict WhatsApp Price-Lock Guarantee: no surge pricing, no unexpected driver bata, and transparent toll handling.",
];

const faqItems = [
  {
    question: "How does the WhatsApp Price-Lock Guarantee work for Bangalore Airport Taxi bookings?",
    answer:
      "We avoid algorithmic surge pricing. When you share your flight details, pickup location, and passenger/baggage count on WhatsApp, you receive an all-inclusive transparent quote. That price is completely locked for your confirmed trip with zero surprise driver charges or hidden fees.",
  },
  {
    question: "Why choose a 6+1 Ertiga over a standard sedan airport taxi?",
    answer:
      "Standard 4-seater sedans (like Dzire or Etios) struggle to carry 3–4 international check-in bags in their trunk, forcing passengers to cram bags onto the seats. Our 6+1 Ertiga folds flat to easily fit 4 large suitcases, while offering Innova-grade legroom, knee-level console AC, and smooth highway stability for barely more than sedan rates.",
  },
  {
    question: "Do you monitor flight delays for Kempegowda Airport BLR pickups?",
    answer:
      "Yes. When you provide your flight number, our chauffeur tracks your flight status in real time. If your flight is delayed or arrives early, your pickup timing is adjusted automatically with zero extra waiting stress.",
  },
  {
    question: "How many hours in advance should I book my airport taxi?",
    answer:
      "We recommend booking 6 to 12 hours in advance to guarantee vehicle allocation, interior detailing, and chauffeur verification. Prior notification is strongly recommended for early morning (2:00 AM – 5:00 AM) airport drops.",
  },
  {
    question: "Are toll charges included in the airport taxi fare?",
    answer:
      "Airport expressway toll charges (via the NH-44 Trumpet Flyover) are handled transparently. When we quote on WhatsApp, we clarify whether tolls are included or billed at actuals so there are zero surprises at the toll plaza.",
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  width,
  height,
  loading = "lazy",
  featured = false,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  featured?: boolean;
}) {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <Link href={href} aria-label={caption} className="block">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={
            featured
              ? "h-[220px] w-full object-cover sm:h-[260px] lg:h-[285px]"
              : "h-auto w-full object-cover"
          }
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>
      <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionHeading({
  eyebrow,
  children,
  id,
  dark = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  id: string;
  dark?: boolean;
}) {
  return (
    <>
      <p
        className={
          dark
            ? "text-sm font-black uppercase tracking-[.18em] text-amber-400"
            : "section-kicker"
        }
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}
      >
        {children}
      </h2>
    </>
  );
}

export default function AirportTaxiBangalorePage() {
  const { breadcrumbSchema, taxiServiceSchema, faqSchema, airportFaqs } = createAirportTaxiSeo({
    pageName: "Bangalore Airport Taxi",
    routeUrl,
    description: pageDescription,
    locality: "Bengaluru",
    faqs: faqItems,
    isHub: true,
  });

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema, taxiServiceSchema, faqSchema]} />
      <main className="overflow-x-hidden">

        {/* 1. ORIGINAL HERO SECTION WITH WHITE ERTIGA IMAGE */}
        <section
          aria-labelledby="airport-taxi-heading"
          className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-800 px-5 py-8 text-white sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm">
                TERMINAL 1 &amp; TERMINAL 2 TRANSFERS • KEMPEGOWDA AIRPORT BLR
              </p>
              <h1
                id="airport-taxi-heading"
                className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]"
              >
                Bangalore Airport Taxi (BLR T1 &amp; T2) in a Dedicated 6+1 Ertiga
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Book a punctual, <strong>chauffeur-driven 6+1 Maruti Suzuki Ertiga</strong> for Kempegowda International Airport drops and pickups across <strong>Bangalore and Bengaluru</strong>. Enjoy <em>Innova-class comfort and a 4-suitcase luggage boot for just a fraction more than basic sedan cab rates</em>, with live flight delay tracking, zero cancellations, and locked WhatsApp quotes.
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-amber-300 sm:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-purple-800 transition hover:bg-slate-100 sm:text-sm lg:py-3"
                >
                  <Phone size={18} /> Call Directly: +91 {SITE.phone}
                </a>
                <a
                  href={airportWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:text-sm lg:py-3"
                >
                  <MessageCircle size={18} /> Lock Airport Quote on WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/70">
                24/7 airport dispatch. Minimum 6 to 12 hours advance booking is required for guaranteed vehicle dispatch and chauffeur allocation.
              </p>
              <a
                href="#transit-times"
                className="service-scroll-prompt mt-4 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-xs font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white lg:hidden sm:text-sm"
              >
                Explore Highway Timelines &amp; Airport Services Below
                <ArrowDown size={16} aria-hidden="true" className="service-scroll-arrow" />
              </a>
            </div>
            <RouteImage
              href="/"
              src="/images/services/hourly.jpg"
              alt="Go Bengaluru Premium Ertiga for Bangalore airport taxi transfers"
              caption="Clean 2026 factory-fitted CNG Ertiga dedicated to your flight schedule."
              width={1536}
              height={1024}
              loading="eager"
              featured
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#transit-times"
              className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-5 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium focus-visible:outline-3 focus-visible:outline-white hover:border-purple-700"
            >
              Explore Highway Timelines &amp; Airport Services Below
              <ArrowDown size={17} aria-hidden="true" className="service-scroll-arrow" />
            </a>
          </div>
        </section>

        {/* 2. PLACEMENT DIFFERENTIATOR: HIGHWAY TRAVEL TIMES TO BLR AIRPORT PLACED FIRST */}
        <section id="transit-times" className="bg-[#090f2f] px-5 py-12 text-white sm:py-16">
          <div className="page-shell grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading id="corridors-heading" eyebrow="AIRPORT TRANSIT TIMELINES" dark>
                Bengaluru Locality to Kempegowda Airport (BLR) Estimates
              </SectionHeading>
              <p className="mt-4 leading-7 text-white/80 text-sm sm:text-base">
                Lucky Travels provides punctual doorstep pickup across all residential hubs and IT corridors in Bangalore. Chauffeurs plan departure timing based on live traffic buffers.
              </p>
              <p className="mt-3 leading-7 text-white/70 text-xs sm:text-sm">
                Share your flight departure time and pickup locality on WhatsApp to calculate the optimal home departure time.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={airportWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-emerald-400 transition"
                >
                  <MessageCircle size={18} /> WhatsApp for Airport Timing
                </a>
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-[#090f2f] hover:bg-slate-100 transition"
                >
                  <Phone size={18} /> Call +91 {SITE.phone}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-xl backdrop-blur-sm lg:col-span-6">
              <h3 className="text-base sm:text-lg font-black text-white">Estimated Travel Times to BLR Airport</h3>
              <p className="mt-1 text-xs text-white/60">Calculated for standard highway conditions via express routes</p>
              <nav className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" aria-label="Bangalore airport travel estimates">
                {airportCorridors.map(({ name, time, route }) => {
                  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hi Lucky Travels, I would like to book an airport taxi from ${name} to BLR Airport.`
                  )}`;
                  const rowClassName =
                    "flex flex-col justify-between rounded-lg border border-white/5 bg-white/[0.05] p-3 text-xs text-gray-200 transition-colors hover:bg-white/[0.12]";
                  return (
                    <a key={name} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={rowClassName}>
                      <span className="flex items-center justify-between font-bold text-white">
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                          {name}
                        </span>
                        <span className="text-emerald-300 font-mono text-[11px]">{time}</span>
                      </span>
                      <span className="mt-1 text-[11px] text-slate-400 leading-normal">{route}</span>
                      <span className="mt-2 text-[11px] font-bold text-emerald-300">Lock Airport Fare ↗</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-10 sm:py-14" aria-labelledby="expressway-comparison-heading">
          <div className="page-shell">
            <p className="text-xs font-black uppercase tracking-widest text-blue-800">EXECUTIVE COBALT / SLATE ROUTE DESK</p>
            <h2 id="expressway-comparison-heading" className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
              Interactive Bangalore Airport Expressway Comparison
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Open a corridor row for its planning note and route guide. All drive times are estimates; the chauffeur checks live traffic and confirms the route for your pickup.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 font-black">Pickup corridor</th>
                    <th className="p-4 font-black">Indicative drive</th>
                    <th className="p-4 font-black">Expressway comparison</th>
                    <th className="p-4 font-black">Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Whitefield", time: "60–80 min", routes: "SH-104 / Budigere Cross vs ORR–Hebbal", href: "/airport-taxi-whitefield", note: "Check Channasandra underpass conditions during heavy rain." },
                    { name: "Electronic City", time: "75–95 min", routes: "9.98 km BETL vs NICE Road / Tumkur Road", href: "/airport-taxi-electronic-city", note: "Compare tollway and NICE Road based on peak traffic." },
                    { name: "HSR Layout", time: "50–110 min buffer", routes: "Agara / Intermediate Ring Road vs ORR", href: "/airport-taxi-hsr-layout", note: "Plan about 50 minutes for 4–7 AM and 110 minutes for an 8 AM departure." },
                    { name: "Sarjapur Road", time: "65–100 min", routes: "Carmelaram / Gunjur–Varthur vs ORR", href: "/airport-taxi-sarjapur-road", note: "Check railway gate and flyover status before selecting the local bypass." },
                    { name: "Indiranagar", time: "45–100 min", routes: "Domlur flyover vs Baiyappanahalli exit", href: "/airport-taxi-indiranagar", note: "The HAL base is nearby; route around the Domlur loop when needed." },
                    { name: "Marathahalli", time: "50–105 min", routes: "Budigere Cross vs ORR–Hebbal", href: "/airport-taxi-marathahalli", note: "Service-lane staging helps avoid Kalamandir merge queues." },
                    { name: "JP Nagar", time: "65–125 min", routes: "Bannerghatta Road vs South End Circle / NICE Road", href: "/airport-taxi-jp-nagar", note: "Check current metro diversions and phase-specific exits." },
                    { name: "Bengaluru central", time: "Traffic dependent", routes: "NH-44 / Bellary Road and live city approaches", href: "/airport-taxi-bangalore", note: "The central booking hub covers BLR T1, T2 and citywide transfers." },
                  ].map((row) => (
                    <tr key={row.href} className="border-t border-slate-200 align-top">
                      <th scope="row" className="p-4 font-black text-slate-900">{row.name}<span className="mt-1 block font-normal text-slate-500">{row.time}</span></th>
                      <td className="p-4 text-slate-700">{row.routes}</td>
                      <td className="p-4">
                        <details className="group">
                          <summary className="cursor-pointer font-bold text-blue-800">Show route note</summary>
                          <p className="mt-2 max-w-xs leading-6 text-slate-600">{row.note}</p>
                        </details>
                      </td>
                      <td className="p-4"><Link className="font-bold text-blue-800 underline" href={row.href}>Open guide</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. SEDAN BOOT UPGRADE COMPARISON */}
        <section className="bg-slate-50 px-5 pt-10 pb-8 sm:pt-14 sm:pb-10 border-b border-slate-200/80">
          <div className="page-shell">
            <div className="w-full border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                SMART AIRPORT UPGRADE • BANGALORE &amp; BENGALURU AIRPORT TAXI
              </span>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
                Searching for a Sedan Airport Taxi in Bangalore? Get Innova-Like Boot Room for Barely More
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                We operate exclusively in the Premium Ertiga Category for passenger comfort and dignity; we do not operate hatchbacks or compact sedans. Travelers searching for a <strong>Dzire airport taxi, Etios cab Bangalore airport, or sedan airport cab</strong> often find that compact sedan CNG tanks eat into the trunk, forcing bags onto laps or passenger seats. Our 2024–2026 factory S-CNG Ertigas provide <strong>4-suitcase flat boot space, rear knee-level console AC, and smooth suspension</strong>.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🧳</span>
                <h3 className="text-base font-bold text-[#090f2f]">4 Check-in Suitcase Space</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Fold the 50:50 3rd row to fit <strong>3–4 large 28-inch check-in suitcases plus 2 cabin bags</strong> in a flat bay with zero intrusion into passenger legroom; confirm final arrangement at pickup based on passenger count.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">❄️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Console Knee-Level AC</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our updated 2026 Ertigas feature center-console AC vents near the knees, providing direct, gentle airflow after a tiring flight.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">⏱️</span>
                <h3 className="text-base font-bold text-[#090f2f]">Live Flight Delay Tracking</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  We track incoming flight numbers at BLR Airport. Chauffeurs adjust pickup times automatically with <em>zero waiting penalty</em>.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-2xl mb-1.5 inline-block">🛡️</span>
                <h3 className="text-base font-bold text-[#090f2f]">WhatsApp Price-Lock</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Zero midnight surge fees or sudden driver bata. What we quote on WhatsApp remains <strong>fixed and guaranteed</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AIRPORT TRANSFERS & PRICE-LOCK GUARANTEE */}
        <section id="airport-packages" className="bg-white px-5 pb-10 pt-10 sm:pt-14">
          <div className="page-shell">
            <SectionHeading
              id="airport-packages-heading"
              eyebrow="TERMINAL 1 & TERMINAL 2 TRANSIT"
            >
              Bangalore Airport Taxi Transfers &amp; Booking Rules
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {airportServices.slice(0, 3).map((svc) => (
                <article
                  key={svc.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300"
                >
                  <div>
                    <h3 className="text-xl font-black text-[#090f2f]">{svc.title}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[.12em] text-purple-700">
                      {svc.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{svc.text}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Lucky Travels, I would like to lock a quote for ${svc.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-purple-800 hover:text-purple-950"
                    >
                      <span>Inquire on WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              ))}

              <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300">
                <div>
                  <h3 className="text-xl font-black text-[#090f2f]">{airportServices[3].title}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[.12em] text-purple-700">
                    {airportServices[3].label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{airportServices[3].text}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                      `Hi Lucky Travels, I would like to book an early morning or midnight airport taxi in Bangalore.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-purple-800 hover:text-purple-950"
                  >
                    <span>Check Night Availability</span>
                    <span>→</span>
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:col-span-2">
                <div className="inline-block rounded-md bg-amber-200/70 px-2.5 py-0.5 text-xs font-black text-amber-900 mb-2">
                  🛡️ WhatsApp Airport Price-Lock Policy
                </div>
                <h3 className="text-xl font-black text-amber-950">Transparent Quotes with Zero Midnight Surge Charges</h3>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  We don&apos;t use automated surge algorithms or confusing cancellation penalties. Share your flight details, pickup locality, and timing on WhatsApp to receive a <strong>direct, locked airport quote</strong>.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
                  <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">Fixed Fare Guarantee</strong>
                    The quote agreed on WhatsApp remains locked for your flight schedule. Zero unexpected extra driver bata.
                  </div>
                  <div className="rounded-xl bg-white p-3.5 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">Toll Transparency</strong>
                    NH-44 airport expressway toll charges are clarified upfront so there are zero surprises at the toll booth.
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-amber-800">
                  *Need city rentals or an outstation taxi instead? Explore our <Link href="/car-rental-bangalore" className="font-bold underline text-amber-950">Car Rental Bangalore</Link> or <Link href="/outstation-cabs-bangalore" className="font-bold underline text-amber-950">Outstation Cabs</Link> portals.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 5. FLEET SPECIALIZATION SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="airport-fleet-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:items-center">
            <div>
              <SectionHeading
                id="airport-fleet-heading"
                eyebrow="COMFORT AND CONSISTENCY"
              >
                Why We Operate Only Brand-New 2026 Ertigas (Factory CNG) for Airport Runs
              </SectionHeading>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  Instead of operating an aggregator pool of mismatched or worn-out cars, Lucky Travels concentrates exclusively on brand-new, factory-fitted CNG 6+1 Maruti Suzuki Ertigas. Compared with a typical compact hatchback or sedan, the Ertiga offers <strong>deep modular luggage space, flexible legroom, and progressive suspension</strong> for international and domestic flight travelers.
                </p>
                <p>
                  Specialising in one unified fleet category ensures that every airport cab dispatched is immaculate, odor-free, fully sanitized, and mechanically sound. You receive a guaranteed high standard of service rather than an uncertain, downsized cab arriving at your door.
                </p>
                <p>
                  Our chauffeurs monitor real-time Google Maps traffic at trip start and throughout the airport corridor, dynamically rerouting around Bellary Road, Hebbal Flyover, and Outer Ring Road bottlenecks.
                </p>
                <p className="font-black text-amber-600">
                  {SITE.specialisationSlogan}
                </p>
              </div>
            </div>
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Premium Ertiga middle-row seating for comfortable Bangalore airport taxi"
              caption="Pristine Ertiga middle-row seating with dedicated 2nd-row console knee-level AC."
              width={1536}
              height={1024}
            />
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:p-7">
            <h3 className="font-black text-amber-900">Airport Luggage &amp; Seating Guidance</h3>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              Fold the 50:50 third row to create a flat bay for <strong>3–4 large 28-inch international check-in suitcases plus 2 cabin bags</strong> without intrusion into passenger legroom. The final arrangement depends on passenger count and can be confirmed at pickup. The 60:40 second-row seats can also be folded flat for ultra-heavy cargo or a home relocation, available on prior request for a nominal cargo reconfiguration fee. <Link href="/blog/ertiga-luggage-capacity-guide" className="font-bold underline">Read the full Ertiga luggage capacity guide.</Link>
            </p>
          </div>
        </section>

        {/* 6. AIRPORT SERVICE INCLUSIONS */}
        <section
          className="bg-slate-100 px-5 py-10 sm:py-14"
          aria-labelledby="airport-benefits-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="airport-benefits-heading"
              eyebrow="DIRECT BOOKING, CLEAR COMMUNICATION"
            >
              What Our Bangalore Airport Taxi Service Includes
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {airportBenefits.map((benefit, index) => {
                const Icon = [ShieldCheck, Luggage, MapPinned, Plane, Clock, ShieldCheck][index % 6];
                return (
                  <article
                    key={benefit}
                    className="flex gap-3.5 rounded-2xl bg-white p-5 shadow-soft"
                  >
                    <Icon
                      className="mt-1 shrink-0 text-purple-700"
                      size={22}
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-600 sm:text-sm">
              Go Bengaluru is the online service brand of Lucky Travels at Gobengaluru.in. Whether you search for <strong>Bangalore airport taxi</strong>, <strong>Kempegowda airport cab booking</strong>, or <strong>BLR Terminal 1 Terminal 2 taxi</strong>, our service focuses exclusively on premium 6+1 Ertiga journeys tailored to your flight schedule.
            </p>
          </div>
        </section>

        {/* 7. DIRECT AIRPORT TO OUTSTATION HIGHWAY ROUTES */}
        <section className="page-shell px-5 py-10 sm:py-14 border-b border-slate-200/80">
          <div className="w-full border-b border-slate-200 pb-4">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700">
              DIRECT AIRPORT CONNECTION • TRAVEL BEYOND BENGALURU
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#090f2f] sm:text-3xl">
              Landing at BLR Airport and Travelling Directly Outstation?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Skip city traffic delays entirely. We provide direct pickup from Kempegowda Airport Terminals 1 &amp; 2 straight to Karnataka highway corridors:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/bangalore-to-srirangapatna-pitru-paksha-cab"
              className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 transition hover:border-amber-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  Pilgrimage &amp; Sacred Rites
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">BLR Airport to Srirangapatna Cab</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Direct transit for Paschima Vahini, Gosai Ghat, and Sangama ancestral rites.
                </p>
              </div>
              <span className="text-xs font-black text-amber-800 mt-3 inline-block">View package details →</span>
            </Link>

            <Link
              href="/bangalore-to-mysore-cab"
              className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 transition hover:border-orange-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-orange-900 bg-orange-100 px-2 py-0.5 rounded border border-orange-300">
                  Expressway Route
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">BLR Airport to Mysore Expressway Cab</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Seamless airport highway transit directly onto the Bangalore-Mysore Expressway.
                </p>
              </div>
              <span className="text-xs font-black text-orange-800 mt-3 inline-block">View expressway cab →</span>
            </Link>

            <Link
              href="/car-rental-bangalore"
              className="rounded-xl border border-purple-200 bg-purple-50/70 p-4 transition hover:border-purple-400 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded border border-purple-300">
                  City Chauffeur Rental
                </span>
                <h3 className="text-base font-bold text-[#090f2f] mt-2">Car Rental in Bangalore with Driver</h3>
                <p className="text-xs text-slate-600 mt-1">
                  8-hour and 10-hour disposal packages for corporate meetings and local errands.
                </p>
              </div>
              <span className="text-xs font-black text-purple-800 mt-3 inline-block">View city car rental →</span>
            </Link>
          </div>
        </section>

        {/* 8. DIRECT AIRPORT CONTACT */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="airport-contact-heading"
        >
          <SectionHeading id="airport-contact-heading" eyebrow="DIRECT AIRPORT DESK">
            Book Your Bangalore Airport Taxi Transfer
          </SectionHeading>
          <div className="mt-7 grid gap-6 sm:gap-8 lg:grid-cols-3">
            <a
              href={`tel:+91${SITE.phone}`}
              className="flex flex-col items-center rounded-2xl border border-purple-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <Phone className="text-purple-700" size={32} />
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">Call Directly</h3>
              <p className="mt-1 text-sm text-slate-700">+91 {SITE.phone}</p>
              <p className="mt-1 text-xs text-slate-500">24/7 airport dispatch</p>
            </a>
            <a
              href={airportWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl border border-green-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <MessageCircle className="text-green-600" size={32} />
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-700">Chat with Lucky Travels</p>
              <p className="mt-1 text-xs text-slate-500">Fixed airport price quotes</p>
            </a>
            <a
              href={emailUrl}
              className="flex flex-col items-center rounded-2xl border border-blue-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <span className="text-2xl font-black text-blue-600">@</span>
              <h3 className="mt-3 text-lg font-black text-[#090f2f]">Email Enquiry</h3>
              <p className="mt-1 break-all text-xs text-slate-700">{SITE.email}</p>
              <p className="mt-1 text-xs text-slate-500">Advance flight itineraries</p>
            </a>
          </div>
        </section>

        <section className="page-shell px-5 py-10 sm:py-14" aria-labelledby="ais-safety-heading">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-widest text-blue-800">Passenger protection & fleet compliance</p>
            <h2 id="ais-safety-heading" className="mt-2 text-2xl font-black text-slate-950">Karnataka Government AIS-140 Certified Passenger Safety</h2>
            <p className="mt-3 leading-7 text-slate-700">Every vehicle in our fleet is fully compliant with Karnataka State Transport Department regulations, equipped with live Government-monitored GPS vehicle tracking and an active emergency SOS Panic Button directly connected to emergency response infrastructure.</p>
            <p className="mt-3 leading-7 text-slate-700">Our direct service emphasizes verified owner-driver ethics, background-checked chauffeurs and clean non-smoking interiors—with zero surge pricing and no driver cancellations, unlike a random app-aggregator match.</p>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-10 text-white sm:py-12" aria-labelledby="flight-to-outstation-heading">
          <div className="page-shell">
            <h2 id="flight-to-outstation-heading" className="text-2xl font-black">Connect your BLR arrival to an outstation cab</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Book the right Ertiga and luggage configuration for your trip beyond Bengaluru.</p>
            <nav aria-label="Airport and outstation trip links" className="mt-5 flex flex-wrap gap-3">
              {[
                { href: "/bangalore-to-mysore-cab", label: "Bangalore to Mysore" },
                { href: "/bangalore-to-coorg-cab", label: "Bangalore to Coorg" },
                { href: "/bangalore-to-ooty-cab", label: "Bangalore to Ooty" },
                { href: "/outstation-cabs-bangalore", label: "Outstation cabs" },
                { href: "/blog/ertiga-luggage-capacity-guide", label: "Ertiga luggage capacity guide" },
              ].map((item) => <Link key={item.href} href={item.href} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold hover:bg-white/10">{item.label} →</Link>)}
            </nav>
          </div>
        </section>

        {/* 9. FAQS SECTION */}
        <section
          className="page-shell py-10 sm:py-14"
          aria-labelledby="airport-faq-heading"
        >
          <SectionHeading id="airport-faq-heading" eyebrow="COMMON QUESTIONS">
            Bangalore Airport Taxi FAQs
          </SectionHeading>
          <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
            {airportFaqs.map((item) => (
              <article key={item.question} className="py-5 sm:py-6">
                <h3 className="text-base sm:text-lg font-black text-[#090f2f]">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 10. BOTTOM CTA SECTION */}
        <section className="bg-slate-100 px-5 py-8 text-center sm:py-10">
          <div className="page-shell max-w-3xl">
            <h2 className="mb-2 text-2xl font-black text-[#090f2f] sm:text-3xl">
              Start Your Bangalore Airport Taxi Enquiry Today
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-xs sm:text-sm leading-6 text-slate-600">
              Call, WhatsApp, or email Go Bengaluru by Lucky Travels with your flight schedule. Receive an immediate, fixed quote with zero unexpected driver fees.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-purple-900 transition"
              >
                <Phone size={17} /> Call +91 {SITE.phone}
              </a>
              <a
                href={airportWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-emerald-400 transition"
              >
                <MessageCircle size={17} /> Lock Quote on WhatsApp
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-black text-[#090f2f] border border-slate-200 hover:bg-slate-50 transition"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}