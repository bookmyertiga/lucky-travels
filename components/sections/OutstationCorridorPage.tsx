import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  Coffee,
  ShieldCheck,
  Luggage,
  CalendarCheck,
  Compass,
  Calendar,
  User,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

export type ItineraryStop = {
  time?: string;
  title: string;
  description: string;
};

export type HighwayStop = {
  name: string;
  speciality: string;
  location: string;
};

export type CorridorImage = {
  src: string;
  alt: string;
  caption: string;
};

export type OutstationCorridor = {
  slug: string;
  pageName: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  heroCaption: string;
  heroImage?: string;
  distanceTime: string;
  route: string;
  routeDetails: string;
  destinationDetails: string;
  permitDetails?: string;
  emailSubject: string;
  itinerary?: {
    heading: string;
    subheading?: string;
    stops: ItineraryStop[];
  };
  highwayStops?: HighwayStop[];
  galleryImages?: CorridorImage[];
  faqs: { question: string; answer: string }[];
};

const outstationRoutes = [
  {
    href: "/bangalore-to-mysore-cab",
    label: "Bangalore to Mysore Cab",
    desc: "145 km | 2.5 hrs via NH-275 Expressway",
    tag: "HERITAGE EXPRESS",
    cta: "Explore Palace Itinerary & Route →",
    cardClass: "border-indigo-200 bg-indigo-50/70 hover:border-indigo-400 text-indigo-900",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  {
    href: "/bangalore-to-tirupati-cab",
    label: "Bangalore to Tirupati Cab",
    desc: "250 km | 5 hrs via NH-75 & AP Border",
    tag: "TEMPLE DARSHAN SPECIAL",
    cta: "Read Darshan Timings & Route Guide →",
    cardClass: "border-purple-200 bg-purple-50/70 hover:border-purple-400 text-purple-900",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    href: "/bangalore-to-coorg-cab",
    label: "Bangalore to Coorg Cab",
    desc: "260 km | 5.5 hrs via Kushalnagar",
    tag: "COFFEE ESTATE GETAWAY",
    cta: "Explore 3-Day Hill Itinerary & Estates →",
    cardClass: "border-emerald-200 bg-emerald-50/70 hover:border-emerald-400 text-emerald-900",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    href: "/bangalore-to-ooty-cab",
    label: "Bangalore to Ooty Cab",
    desc: "280 km | 6.5 hrs via Bandipur & Nilgiris",
    tag: "NILGIRI TEA HILLS",
    cta: "Read Bandipur Timings & Ghat Guide →",
    cardClass: "border-teal-200 bg-teal-50/70 hover:border-teal-400 text-teal-900",
    badgeClass: "bg-teal-100 text-teal-800 border-teal-200",
  },
  {
    href: "/bangalore-to-chikmagalur-cab",
    label: "Bangalore to Chikmagalur Cab",
    desc: "245 km | 4.5 hrs via Hassan NH-75",
    tag: "WESTERN GHATS PEAKS",
    cta: "Explore Mullayanagiri Route & Stops →",
    cardClass: "border-amber-200 bg-amber-50/70 hover:border-amber-400 text-amber-900",
    badgeClass: "bg-amber-100 text-amber-900 border-amber-200",
  },
] as const;

export function PopularOutstationRoutes({ currentSlug }: { currentSlug?: string }) {
  return (
    <section className="bg-slate-50 border-t border-slate-200 px-5 py-12 sm:py-16" aria-labelledby="popular-outstation-routes-heading">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[.18em] text-purple-700">POPULAR OUTSTATION ROUTES FROM BANGALORE</p>
        <h2 id="popular-outstation-routes-heading" className="mt-2 text-2xl font-black tracking-tight text-[#090f2f] sm:text-3xl">
          Explore Other Premium Ertiga Outstation Corridors
        </h2>
        <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
          Compare route distances, highway expressway planning, luggage guidance, and curated road trip guides for popular destinations from Bengaluru.
        </p>

        <nav aria-label="Popular outstation routes from Bangalore" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outstationRoutes.map((route) => {
            const isCurrent = currentSlug === route.href.replace("/", "");
            if (isCurrent) {
              return (
                <div key={route.href} className="flex flex-col justify-between rounded-2xl border-2 border-purple-600 bg-white p-5 shadow-md">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-md border border-purple-200">
                      <CheckCircle2 size={13} /> Active Route
                    </span>
                    <h3 className="mt-2 font-bold text-slate-900 text-lg">{route.label}</h3>
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
                  <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${route.badgeClass}`}>
                    <MapPin size={12} /> {route.tag}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 text-lg group-hover:text-purple-950">{route.label}</h3>
                  <p className="mt-1 text-xs text-slate-600">{route.desc}</p>
                </div>
                <span className="mt-4 text-xs font-black group-hover:underline">{route.cta}</span>
              </Link>
            );
          })}

          <Link
            href="/blog/bangalore-to-adiyogi-chikkaballapur-cab-route-timings-ertiga-guide"
            className="group flex flex-col justify-between rounded-2xl border border-rose-200 bg-rose-50/70 p-5 shadow-sm transition hover:border-rose-400 hover:shadow-md text-rose-900"
          >
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-rose-800 bg-rose-100 border border-rose-200 px-2.5 py-0.5 rounded-md">
                <MapPin size={12} /> EVENING DAY TRIP SPECIAL
              </span>
              <h3 className="mt-2 font-bold text-slate-900 text-lg group-hover:text-rose-950">Bangalore to Adiyogi Cab Guide</h3>
              <p className="mt-1 text-xs text-slate-600">65 km | 7:00 PM Laser Show &amp; Chikkaballapura Route</p>
            </div>
            <span className="mt-4 text-xs font-black text-rose-800 group-hover:underline">Read Darshan Timings &amp; Guide →</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, children, id, dark = false }: { eyebrow: string; children: React.ReactNode; id: string; dark?: boolean }) {
  return (
    <div>
      <p className={dark ? "text-xs font-black uppercase tracking-[.18em] text-amber-400" : "text-xs font-black uppercase tracking-[.18em] text-purple-700"}>{eyebrow}</p>
      <h2 id={id} className={`mt-2 text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${dark ? "text-white" : "text-[#090f2f]"}`}>{children}</h2>
    </div>
  );
}

export default function OutstationCorridorPage({ corridor }: { corridor: OutstationCorridor }) {
  const routeUrl = `${SITE.url}/${corridor.slug}`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need an Ertiga outstation cab for ${corridor.pageName}.
Travel date:
Pickup location & time:
Trip type (same day / multi-day):
Passengers & bags:
Destination details:`)}`;
  const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(corridor.emailSubject)}`;

  const heroImg = corridor.heroImage || "/images/services/outstation.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: `${corridor.pageName} in a Premium Ertiga`,
    serviceType: `${corridor.pageName} outstation taxi service`,
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      brand: { "@type": "Brand", name: SITE.brand },
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "Place", name: corridor.pageName }],
    url: routeUrl,
    image: `${SITE.url}${heroImg}`,
    logo: `${SITE.url}/images/logo/favicon.png`,
    priceRange: "₹₹",
    telephone: "+919886814344",
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
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
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
      <main className="overflow-x-hidden bg-[#fafaf9] text-slate-800">
        
        {/* HERO SECTION MATCHING ADIYOGI PROPORTIONS */}
        <section aria-labelledby="outstation-corridor-heading" className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-8 text-white sm:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              
              {/* TRIPLE CAPSULE BADGES */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/25 border border-purple-400/40 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-purple-200">
                  <Calendar size={13} className="text-purple-300" /> UPDATED 2026-09-25
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white/90">
                  <User size={13} className="text-white/80" /> BHARATH K S
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/25 border border-amber-400/40 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-300">
                  <Sparkles size={13} className="text-amber-400" /> VERIFIED CHAUFFEUR GUIDE
                </span>
              </div>

              {/* HEADING SCALED TO ADIYOGI PROPORTION */}
              <h1 id="outstation-corridor-heading" className="mt-4 text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl text-white">
                {corridor.title}
              </h1>

              {/* INTRO WITH TEXT JUSTIFICATION */}
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 text-justify">
                {corridor.intro}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-300">
                <CheckCircle2 size={18} className="text-amber-400" />
                <span>{SITE.specialisationSlogan} • Dedicated Owner-Driver Service</span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3.5">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-purple-900 shadow-lg transition hover:bg-slate-100"
                >
                  <Phone size={19} className="text-purple-700" /> Call +91 {SITE.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white shadow-lg transition hover:bg-green-700"
                >
                  <MessageCircle size={19} /> WhatsApp for Instant Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HERO IMAGE SHOWCASE */}
        <section className="px-5 -mt-6 sm:-mt-10 max-w-6xl mx-auto">
          <figure className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="relative aspect-[16/9] max-h-[500px] w-full">
              <Image
                src={heroImg}
                alt={corridor.heroCaption}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <figcaption className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm text-slate-600">
              <span className="font-medium text-slate-800">📸 {corridor.heroCaption}</span>
              <span className="text-purple-700 font-bold">Commercially Certified 6+1 White Ertiga Fleet</span>
            </figcaption>
          </figure>
        </section>

        {/* TRIP ESSENTIALS METRICS */}
        <section className="px-5 py-8 max-w-6xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-purple-700 font-black text-xs uppercase tracking-wider">
                <Compass size={16} /> Distance &amp; Driving Time
              </div>
              <p className="mt-2 text-xl sm:text-2xl font-black text-[#090f2f]">{corridor.distanceTime}</p>
              <p className="mt-1 text-xs text-slate-500">Doorstep pickup to destination landmark</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-purple-700 font-black text-xs uppercase tracking-wider">
                <MapPin size={16} /> Primary Highway Route
              </div>
              <p className="mt-2 text-lg sm:text-xl font-black text-[#090f2f]">{corridor.route}</p>
              <p className="mt-1 text-xs text-slate-500">Real-time GPS navigation to beat bottlenecks</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-purple-700 font-black text-xs uppercase tracking-wider">
                <ShieldCheck size={16} /> Commercial Assurance
              </div>
              <p className="mt-2 text-lg sm:text-xl font-black text-[#090f2f]">6+1 Premium Ertiga</p>
              <p className="mt-1 text-xs text-slate-500">Yellow taxi plate • State permits cleared</p>
            </div>
          </div>
        </section>

        {/* ROUTE & LOGISTICS WITH RICH TEXT & INLINE INTERLINKS */}
        <section className="px-5 py-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <SectionHeading id="logistics-heading" eyebrow="HIGHWAY NAVIGATION & LOGISTICS">
              {corridor.pageName}: Route Insights &amp; Road Quality
            </SectionHeading>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
              {corridor.routeDetails}
            </p>

            {corridor.permitDetails && (
              <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-5 text-sm sm:text-base text-amber-950 leading-relaxed flex items-start gap-3">
                <ShieldCheck size={22} className="shrink-0 text-amber-700 mt-0.5" />
                <div>
                  <strong className="block font-black text-amber-950">Interstate Permit &amp; Toll Compliance:</strong>
                  {corridor.permitDetails}
                </div>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 flex flex-wrap items-center gap-4">
              <span>✈️ Arriving via airport? Book our <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">Kempegowda Airport Taxi</Link>.</span>
              <span>⏱️ Need local hourly drops? Review <Link href="/car-rental-bangalore" className="font-bold text-purple-700 underline">Hourly Car Rentals</Link>.</span>
              <span>🛣️ Explore all packages on our <Link href="/outstation-cabs-bangalore" className="font-bold text-purple-700 underline">Outstation Cabs Hub</Link>.</span>
            </div>
          </div>
        </section>

        {/* DETAILED SUGGESTED ITINERARY TIMELINE */}
        {corridor.itinerary && (
          <section className="px-5 py-10 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              <SectionHeading id="itinerary-heading" eyebrow="HOUR-BY-HOUR TRAVEL PLAN">
                {corridor.itinerary.heading}
              </SectionHeading>
              {corridor.itinerary.subheading && (
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
                  {corridor.itinerary.subheading}
                </p>
              )}

              <div className="mt-8 space-y-4">
                {corridor.itinerary.stops.map((stop, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition hover:border-purple-200 hover:bg-purple-50/30"
                  >
                    {stop.time ? (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-purple-700 px-3.5 py-1.5 text-xs sm:text-sm font-black text-white shadow-sm">
                        <Clock size={15} /> {stop.time}
                      </span>
                    ) : (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-700 text-sm font-black text-white shadow-sm">
                        {index + 1}
                      </span>
                    )}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900">{stop.title}</h3>
                      <p className="mt-1 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">{stop.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* HIGHWAY PITSTOPS */}
        {corridor.highwayStops && corridor.highwayStops.length > 0 && (
          <section className="px-5 py-6 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              <SectionHeading id="pitstops-heading" eyebrow="LOCAL FOOD & REST STOPS">
                Chauffeur-Curated Highway Pitstops
              </SectionHeading>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
                A seamless journey requires clean restrooms, hygienic dining, and authentic regional coffee. Your driver happily pauses at your preferred spots without rigid timers:
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {corridor.highwayStops.map((stop, i) => (
                  <div key={i} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700">
                        <Coffee size={14} /> Highway Stop
                      </span>
                      <h3 className="mt-2 font-black text-slate-900 text-base sm:text-lg">{stop.name}</h3>
                      <p className="mt-1 text-sm text-slate-700 font-medium">{stop.speciality}</p>
                    </div>
                    <p className="mt-4 border-t border-slate-200/80 pt-2 text-xs text-slate-500 font-semibold">{stop.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PHOTO GALLERY STRIP */}
        {corridor.galleryImages && corridor.galleryImages.length > 0 && (
          <section className="px-5 py-6 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              <SectionHeading id="gallery-heading" eyebrow="THE ON-ROAD EXPERIENCE">
                Sightseeing &amp; Cabin Comfort in Our 6+1 Ertiga
              </SectionHeading>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {corridor.galleryImages.map((img, i) => (
                  <figure key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                    <div className="relative aspect-[4/3] w-full bg-slate-100">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <figcaption className="p-4 text-xs leading-relaxed text-slate-600 bg-white border-t border-slate-100">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* LUGGAGE & SEATING */}
        <section className="px-5 py-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <SectionHeading id="capacity-heading" eyebrow="VEHICLE SPECIFICATIONS & LUGGAGE">
              Maruti Suzuki Ertiga (6+1 Seater) Seating &amp; Luggage Guide
            </SectionHeading>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              {SITE.specialisationSlogan} We never substitute small sedans or congested hatchbacks. Here is how your family travels:
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">4 to 5 Passengers (With Suitcases)</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    The 3rd-row 50:50 split seats fold flat into the floor, creating an expansive cargo space that holds up to 4 large trolley bags plus day duffels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">6 Passengers (Day Trip Configuration)</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    All three passenger rows upright with ergonomic legroom. Accommodates 2 to 3 compact cabin bags, backpacks, and prasadam/shopping boxes in the rear boot.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Independent blower controls in the 2nd row ensure children and seniors in the back stay comfortably cool during hot highway and ghat ascents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <CalendarCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Guaranteed Owner-Chauffeur</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Book 6 to 12 hours ahead for vehicle detailing, fuel preparation, and guaranteed on-time doorstep arrival by owner-driver Bharath K S.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="px-5 py-6 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-[#080d2b] p-7 sm:p-12 text-white shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">TRANSPARENT QUOTE • ZERO SURGE</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Reserve Your {corridor.pageName}</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
                  Send your travel dates, pickup location, passenger count, luggage load, and desired return time. Receive a comprehensive quote covering vehicle hire, driver allowance, tolls, and parking upfront.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-amber-300 font-bold">
                  <span>✨ Clear billing • No hidden driver bata or checkpoint surprise fees</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-[#080d2b] shadow-md transition hover:bg-slate-100"
                >
                  <Phone size={19} /> Call +91 {SITE.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-black text-white shadow-md transition hover:bg-green-700"
                >
                  <MessageCircle size={19} /> WhatsApp Trip Details
                </a>
                <a
                  href={emailUrl}
                  className="rounded-xl border border-white/20 px-5 py-3 text-center text-xs font-bold text-white transition hover:bg-white/10"
                >
                  Email {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="px-5 py-10 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <SectionHeading id="faq-heading" eyebrow="FREQUENTLY ASKED QUESTIONS">
              Common Questions Before Booking
            </SectionHeading>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {corridor.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <h3 className="text-base sm:text-lg font-black text-[#090f2f]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 text-justify">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CROSS-LINKING GRID */}
        <PopularOutstationRoutes currentSlug={corridor.slug} />
      </main>
    </SiteShell>
  );
}