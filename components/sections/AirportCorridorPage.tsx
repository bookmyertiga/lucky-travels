import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Luggage,
  Calendar,
  User,
  Sparkles,
  HelpCircle,
  Compass,
  ArrowLeft,
  Plane,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

export type AirportCorridor = {
  slug: string;
  suburb: string;
  pageName: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  heroCaption: string;
  heroImage?: string;
  distanceTime: string;
  route: string;
  tollNote: string;
  routeDetails: string;
  pickupDropNotes: string;
  earlyMorningGuidance: string;
  emailSubject: string;
  faqs: { question: string; answer: string }[];
};

export const airportRoutes = [
  {
    href: "/airport-taxi-whitefield",
    label: "Whitefield to Airport Taxi",
    desc: "42 km | 60–80 mins via SH-104 / Budigere",
    tag: "TECH CORRIDOR",
    cta: "Explore Whitefield Route Guide →",
    cardClass: "border-sky-200 bg-sky-50/70 hover:border-sky-400 text-sky-900",
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    href: "/airport-taxi-electronic-city",
    label: "Electronic City to Airport Taxi",
    desc: "53 km | 75–95 mins via Elevated Tollway & Hebbal",
    tag: "SOUTH BANGALORE",
    cta: "Explore E-City Expressway Route →",
    cardClass: "border-indigo-200 bg-indigo-50/70 hover:border-indigo-400 text-indigo-900",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  {
    href: "/airport-taxi-indiranagar",
    label: "Indiranagar to Airport Taxi",
    desc: "38 km | 50–70 mins via Old Madras Rd & Bellary Rd",
    tag: "CENTRAL RESIDENTIAL",
    cta: "Explore Indiranagar Route Guide →",
    cardClass: "border-purple-200 bg-purple-50/70 hover:border-purple-400 text-purple-900",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    href: "/airport-taxi-hsr-layout",
    label: "HSR Layout to Airport Taxi",
    desc: "48 km | 65–85 mins via Outer Ring Road",
    tag: "STARTUP HUB",
    cta: "Explore HSR Corridor Guide →",
    cardClass: "border-emerald-200 bg-emerald-50/70 hover:border-emerald-400 text-emerald-900",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
] as const;

export function PopularAirportCorridors({ currentSlug }: { currentSlug?: string }) {
  return (
    <section className="bg-slate-50 border-t border-slate-200 px-5 py-12 sm:py-16" aria-labelledby="popular-airport-corridors-heading">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[.18em] text-purple-700">BANGALORE AIRPORT TRANSFER CORRIDORS</p>
        <h2 id="popular-airport-corridors-heading" className="mt-2 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
          Other Popular Suburb to BLR Airport Routes
        </h2>
        <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
          Compare transit times, optimal departure buffers, and route directions across Bengaluru&apos;s primary residential and tech hubs.
        </p>

        <nav aria-label="Airport routes from Bangalore" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {airportRoutes.map((route) => {
            const isCurrent = currentSlug === route.href.replace("/", "");
            if (isCurrent) {
              return (
                <div key={route.href} className="flex flex-col justify-between rounded-2xl border-2 border-purple-600 bg-white p-5 shadow-md">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md border border-purple-200">
                      <CheckCircle2 size={12} /> Active Route
                    </span>
                    <h3 className="mt-2 font-bold text-slate-900 text-base">{route.label}</h3>
                    <p className="mt-1 text-xs text-slate-500">{route.desc}</p>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`group flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${route.cardClass}`}
              >
                <div>
                  <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${route.badgeClass}`}>
                    <Plane size={11} /> {route.tag}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 text-base group-hover:text-purple-950">{route.label}</h3>
                  <p className="mt-1 text-xs text-slate-600">{route.desc}</p>
                </div>
                <span className="mt-4 text-xs font-black group-hover:underline">{route.cta}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export default function AirportCorridorPage({ corridor }: { corridor: AirportCorridor }) {
  const routeUrl = `${SITE.url}/${corridor.slug}`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I need a Kempegowda Airport Taxi pickup/drop for ${corridor.suburb}.
Flight Date:
Pickup Location:
Pickup Time / Flight Departure Time:
Terminal (T1 or T2):
Passengers & Luggage count:`
  )}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(corridor.emailSubject)}`;
  const heroImg = corridor.heroImage || "/images/services/airport-transfer.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: `${corridor.pageName} in a 6+1 Premium Ertiga`,
    serviceType: "Airport Taxi Service",
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      brand: { "@type": "Brand", name: SITE.brand },
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "Place", name: corridor.suburb }],
    url: routeUrl,
    image: `${SITE.url}${heroImg}`,
    logo: `${SITE.url}/images/logo/favicon.png`,
    priceRange: "₹₹",
    telephone: `+91${SITE.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Konena Agrahara, HAL",
      addressLocality: "Bengaluru",
      postalCode: "560017",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    description: corridor.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Airport Taxi Bangalore", item: `${SITE.url}/airport-taxi-bangalore` },
      { "@type": "ListItem", position: 3, name: corridor.pageName, item: routeUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${routeUrl}#faq`,
    mainEntity: corridor.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <main className="min-h-screen bg-[#fafaf9] py-8 sm:py-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          
          {/* BREADCRUMB NAVIGATION */}
          <div className="mb-6">
            <Link
              href="/airport-taxi-bangalore"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-700 hover:underline"
            >
              <ArrowLeft size={14} /> Back to Airport Transfers Hub
            </Link>
          </div>

          {/* TRIPLE CAPSULE BADGES */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-sky-800">
              <Calendar size={13} className="text-sky-700" /> UPDATED 2026-09-25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> BHARATH K S
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900 border border-amber-200">
              <Sparkles size={13} className="text-amber-700" /> VERIFIED AIRPORT CHAUFFEUR
            </span>
          </div>

          {/* MAIN ARTICLE HEADLINE */}
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {corridor.title}
          </h1>

          {/* INTRO WITH ORGANIC KEYWORD TARGETING */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            {corridor.intro}
          </p>

          {/* HERO IMAGE SHOWCASE WITH ZOOM-ON-HOVER */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src={heroImg}
                alt={corridor.heroCaption}
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Airport Terminal Transfer:</strong> {corridor.heroCaption}</span>
              <span className="text-sky-700 font-semibold shrink-0">Commercially Certified 6+1 White Ertiga Fleet</span>
            </figcaption>
          </figure>

          {/* QUICK METRICS GRID */}
          <section className="my-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <Compass size={15} /> Driving Distance &amp; Time
                </span>
                <p className="mt-2 text-xl sm:text-2xl font-black text-slate-900">{corridor.distanceTime}</p>
                <p className="mt-1 text-xs text-slate-500">Doorstep pickup to BLR T1 / T2</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <MapPin size={15} /> Primary Route
                </span>
                <p className="mt-2 text-base sm:text-lg font-black text-slate-900">{corridor.route}</p>
                <p className="mt-1 text-xs text-slate-500">{corridor.tollNote}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <ShieldCheck size={15} /> Guaranteed Vehicle
                </span>
                <p className="mt-2 text-xl sm:text-2xl font-black text-slate-900">6+1 Premium Ertiga</p>
                <p className="mt-1 text-xs text-slate-500">Commercial yellow plate • Spotless AC</p>
              </div>
            </div>
          </section>

          {/* SECTION: ROUTE INSIGHTS & ROAD QUALITY */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Route Quality &amp; Expressway Traffic Insights
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              {corridor.routeDetails}
            </p>

            {/* CALLOUT BOX: FLIGHT BUFFER TIMING */}
            <div className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-6 text-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <AlertCircle size={20} className="text-amber-600" />
                <span>Chauffeur Departure Guidance for {corridor.suburb}</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-amber-950 text-justify">
                {corridor.earlyMorningGuidance}
              </p>
            </div>
          </section>

          {/* SECTION: TERMINAL 1 & TERMINAL 2 PICKUP/DROP GUIDELINES */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Kempegowda International Airport (T1 &amp; T2) Pickup &amp; Drop Rules
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              {corridor.pickupDropNotes}
            </p>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Planning to head directly out of town after landing? You can book our direct <Link href="/outstation-cabs-bangalore" className="font-bold text-purple-700 underline">outstation cab service</Link>, including the sacred <Link href="/bangalore-to-tirupati-cab" className="font-bold text-purple-700 underline">Bangalore to Tirupati package</Link>[cite: 1], the scenic <Link href="/bangalore-to-coorg-cab" className="font-bold text-purple-700 underline">Bangalore to Coorg tour</Link>, or the evening light show trip to <Link href="/blog/bangalore-to-adiyogi-chikkaballapur-cab-route-timings-ertiga-guide" className="font-bold text-purple-700 underline">Adiyogi Chikkaballapura</Link>.
            </p>
          </section>

          {/* HIGH-CONVERSION MID-POST CTA CARD */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              PUNCTUAL OWNER-OPERATED AIRPORT TRANSFERS
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Reserve Your {corridor.suburb} to Airport Cab
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Skip app cancellations and surge pricing. Chauffeur Bharath K S arrives at your gate 15 minutes before your scheduled pickup with a clean, fully fueled 6+1 Maruti Suzuki Ertiga. Need local errands or corporate hourly travel? Review our <Link href="/car-rental-bangalore" className="font-bold text-amber-300 underline">hourly car rental packages in Bangalore</Link>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-[#080d2b] shadow-md transition hover:bg-slate-100 text-sm"
              >
                <Phone size={18} /> Call +91 {SITE.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white shadow-md transition hover:bg-green-700 text-sm"
              >
                <MessageCircle size={18} /> WhatsApp Airport Flight Details
              </a>
              <a
                href={emailUrl}
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-xs font-bold text-white transition hover:bg-white/10"
              >
                Email Booking Details
              </a>
            </div>
            <p className="mt-3 text-xs text-white/60">
              *Early morning pickups (1:00 AM – 5:00 AM) confirmed with guaranteed vehicle dispatch.
            </p>
          </section>

          {/* SECTION: FLEET & LUGGAGE GUIDANCE */}
          <section className="mt-12">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              6+1 Maruti Suzuki Ertiga: Airport Luggage &amp; Passenger Capacity
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              {SITE.specialisationSlogan} We never send small hatchbacks or cramped sedans for airport runs. Here is how your flight bags travel:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">3 to 4 Passengers (International Flights)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    With the 3rd-row split seats folded flat, the cargo bay easily swallows 3 to 4 full-size 28-inch check-in suitcases plus cabin bags.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">5 to 6 Passengers (Domestic Flight Setup)</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    All seating rows upright with full legroom. Boot easily stores 2 to 3 compact cabin trolley bags and laptop backpacks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    High-output rear cooling blowers ensure cool cabin comfort even during intense afternoon heat along the elevated Bellary expressway.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Zero App Cancellation Anxiety</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Direct booking with owner-operator Bharath K S eliminates last-minute driver cancellations before urgent early-morning flights.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-purple-700" /> Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              {corridor.faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* BOTTOM CROSS-LINKING NAVIGATION FOR AIRPORT ROUTES */}
        <PopularAirportCorridors currentSlug={corridor.slug} />
      </main>
    </SiteShell>
  );
}