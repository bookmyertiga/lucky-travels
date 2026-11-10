import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock3, Gauge, Mountain, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { type OutstationRoute } from "@/data/outstationRoutes";
import { PopularOutstationRoutes } from "@/components/sections/OutstationCorridorPage";

const palettes = {
  amber: {
    hero: "from-amber-950 via-yellow-900 to-orange-700",
    ink: "text-amber-900",
    panel: "border-amber-200 bg-amber-50",
    accent: "bg-amber-600 hover:bg-amber-500",
    badge: "border-amber-200/30 bg-amber-200/10 text-amber-100",
  },
  emerald: {
    hero: "from-emerald-950 via-green-950 to-teal-800",
    ink: "text-emerald-900",
    panel: "border-emerald-200 bg-emerald-50",
    accent: "bg-emerald-700 hover:bg-emerald-600",
    badge: "border-emerald-200/30 bg-emerald-200/10 text-emerald-100",
  },
  mist: {
    hero: "from-slate-950 via-slate-800 to-sky-900",
    ink: "text-sky-900",
    panel: "border-sky-200 bg-sky-50",
    accent: "bg-sky-700 hover:bg-sky-600",
    badge: "border-sky-200/30 bg-sky-200/10 text-sky-100",
  },
} as const;

const destinations = [
  { href: "/bangalore-to-mysore-cab", label: "Mysore" },
  { href: "/bangalore-to-coorg-cab", label: "Coorg" },
  { href: "/bangalore-to-ooty-cab", label: "Ooty" },
];

function RouteIdentity({ route }: { route: OutstationRoute }) {
  if (route.theme === "amber") {
    return (
      <>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {route.highlights.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-amber-200/20 bg-white/10 p-4 backdrop-blur-sm">
              <span className="text-xs font-black uppercase tracking-widest text-amber-200">Expressway marker {index + 1}</span>
              <h2 className="mt-2 font-black text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">{item.detail}</p>
            </article>
          ))}
        </div>
        <section className="mx-auto max-w-6xl px-5 py-10" aria-labelledby="palace-schedule">
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-widest text-amber-800">Royal gold • palace day or weekend</p>
            <h2 id="palace-schedule" className="mt-2 text-2xl font-black text-amber-950">{route.scheduleTitle}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {route.schedule.map((stop) => (
                <article key={stop.title} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <span className="text-xs font-black uppercase text-amber-700">{stop.time}</span>
                  <h3 className="mt-2 font-black text-slate-900">{stop.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stop.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (route.theme === "emerald") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-10" aria-labelledby="coorg-route">
        <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="bg-gradient-to-br from-emerald-950 to-green-800 p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Plantation green • road sequence</p>
              <h2 id="coorg-route" className="mt-2 text-2xl font-black">Follow the coffee-country approach</h2>
              <p className="mt-3 text-sm leading-7 text-white/80">{route.route}</p>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4">
                <Mountain size={21} className="mt-1 shrink-0 text-emerald-200" />
                <p className="text-sm leading-6 text-white/85">Ghat climbs, descents and narrow estate roads call for unhurried driving and a daylight arrival plan.</p>
              </div>
            </div>
            <div className="grid gap-px bg-emerald-100 sm:grid-cols-2">
              {route.highlights.map((item, index) => (
                <article key={item.title} className="bg-white p-6">
                  <span className="text-3xl font-black text-emerald-200">0{index + 1}</span>
                  <h3 className="mt-2 font-black text-emerald-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="border-t border-emerald-100 bg-emerald-50 px-6 py-5">
            <p className="text-sm leading-7 text-emerald-950">{route.routeDetails}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {route.schedule.map((stop, index) => (
            <article key={stop.title} className="rounded-2xl border border-emerald-200 bg-white p-5">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">{stop.time} • Stage {index + 1}</span>
              <h3 className="mt-2 font-black text-slate-900">{stop.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stop.detail}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-10" aria-labelledby="bandipur-warning">
        <div className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-900 text-white"><Clock3 size={24} /></span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-900">Nilgiri mist • critical forest crossing</p>
              <h2 id="bandipur-warning" className="mt-1 text-2xl font-black text-slate-950">Bandipur Forest Checkpost: closed 9:00 PM–6:00 AM</h2>
              <p className="mt-3 leading-7 text-slate-700">Plan your Bengaluru departure before 1:00 PM to leave time for traffic and stops before reaching Gundlupet. This is a conservative planning instruction, not a guarantee of passage; check current forest notices and never attempt entry after closure.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-10" aria-labelledby="nilgiri-routes">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-widest text-sky-300">Hill climb briefing</p>
            <h2 id="nilgiri-routes" className="mt-2 text-2xl font-black">36 Kalhatty hairpins or scenic Gudalur</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{route.routeDetails}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {route.highlights.slice(1).map((item) => (
              <article key={item.title} className="rounded-2xl border border-sky-200 bg-white p-5">
                <h3 className="font-black text-sky-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {route.schedule.map((stop) => (
            <li key={stop.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <span className="text-xs font-black uppercase tracking-wider text-sky-800">{stop.time}</span>
              <h3 className="mt-2 font-black text-slate-900">{stop.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stop.detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default function OutstationRouteLanding({ route }: { route: OutstationRoute }) {
  const palette = palettes[route.theme];
  const url = `${SITE.url}/${route.slug}`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a Bangalore to ${route.destination} cab.\nTravel date:\nPickup location and time:\nTrip duration / return date:\nPassengers and luggage:\nStops or homestay address:`
  )}`;
  const provider = {
    "@type": "TaxiService",
    name: "Lucky Travels",
    alternateName: "Go Bengaluru",
    url: SITE.url,
    telephone: "+91-9886814344",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Konena Agrahara, HAL",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560017",
      addressCountry: "IN",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: route.pageName, item: url },
    ],
  };
  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: route.pageName,
    serviceType: "Chauffeur-driven outstation taxi",
    provider,
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "Place", name: route.destination },
    ],
    url,
    telephone: "+91-9886814344",
    description: route.description,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: route.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema, taxiServiceSchema, faqSchema]} />
      <main className="min-h-screen bg-slate-50">
        <header className={`bg-gradient-to-br ${palette.hero} px-5 py-10 text-white sm:py-14`}>
          <div className={`mx-auto grid max-w-6xl items-center gap-8 ${route.theme === "amber" ? "lg:grid-cols-[1.1fr_.9fr]" : route.theme === "emerald" ? "lg:grid-cols-[.85fr_1.15fr]" : "lg:grid-cols-[1.2fr_.8fr]"}`}>
            {route.theme === "emerald" && (
              <figure className="order-2 overflow-hidden rounded-[2rem] border border-emerald-200/20 shadow-2xl lg:order-1">
                <Image src={route.image} alt={route.imageAlt} width={1536} height={1024} priority className="h-full min-h-[280px] w-full object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </figure>
            )}
            <div className={route.theme === "emerald" ? "order-1 lg:order-2" : ""}>
              <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-widest ${palette.badge}`}>{route.eyebrow}</p>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{route.title}</h1>
              <p className="mt-4 max-w-3xl leading-7 text-white/85">{route.intro}</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-bold text-white"><BadgeCheck size={18} /> {SITE.specialisationSlogan}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:+91${SITE.phone}`} className="rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-900">Call +91 {SITE.phone}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`rounded-xl px-5 py-3 text-sm font-black text-white ${palette.accent}`}>Get a {route.destination} quote</a>
              </div>
              <p className="mt-3 text-xs text-white/70">Owner-driver service • Itinerary and trip-specific price confirmed before booking</p>
            </div>
            {route.theme !== "emerald" && (
              <figure className={`overflow-hidden ${route.theme === "amber" ? "rounded-3xl border border-amber-100/20 shadow-2xl" : "rounded-[2.5rem] border-[10px] border-white/10 shadow-2xl"}`}>
                <Image src={route.image} alt={route.imageAlt} width={1536} height={1024} priority className="h-[280px] w-full object-cover sm:h-[360px]" sizes="(max-width: 1024px) 100vw, 45vw" />
                <figcaption className={`px-4 py-3 text-sm ${route.theme === "amber" ? "bg-amber-950/60 text-amber-100" : "bg-slate-950/60 text-sky-100"}`}>{route.eyebrow} • Dedicated Ertiga</figcaption>
              </figure>
            )}
          </div>
          {route.theme === "amber" && <div className="mx-auto mt-8 grid max-w-6xl gap-3 sm:grid-cols-3"><div className="rounded-xl border border-white/15 bg-white/10 p-4"><span className="text-xs uppercase tracking-wider text-amber-200">Distance</span><strong className="mt-1 block">{route.distance}</strong></div><div className="rounded-xl border border-white/15 bg-white/10 p-4"><span className="text-xs uppercase tracking-wider text-amber-200">Expressway</span><strong className="mt-1 block">NH-275 • up to 100 km/h posted limit</strong></div><div className="rounded-xl border border-white/15 bg-white/10 p-4"><span className="text-xs uppercase tracking-wider text-amber-200">Journey time</span><strong className="mt-1 block">{route.driveTime}</strong></div></div>}
        </header>

        <RouteIdentity route={route} />

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="route-overview">
          <div className={`rounded-3xl border p-6 sm:p-8 ${palette.panel}`}>
            <div className="flex items-start gap-4">
              <Gauge className={`mt-1 shrink-0 ${palette.ink}`} size={28} />
              <div>
                <p className={`text-xs font-black uppercase tracking-widest ${palette.ink}`}>Route planning snapshot</p>
                <h2 id="route-overview" className="mt-2 text-xl font-black text-slate-950">{route.route}</h2>
                <p className="mt-2 text-sm font-bold text-slate-700">{route.distance} • {route.driveTime}</p>
                <p className="mt-3 leading-7 text-slate-700">{route.routeDetails}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="sedan-upgrade">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className={`text-xs font-black uppercase tracking-widest ${palette.ink}`}>Sedan-to-SUV conversion • exclusive fleet</p>
            <h2 id="sedan-upgrade" className="mt-2 text-2xl font-black text-slate-950">An outstation cabin designed around passengers and bags</h2>
            <p className="mt-3 leading-7 text-slate-700">We operate exclusively in the Premium Ertiga Category for passenger comfort and dignity—not hatchbacks or compact sedans. People searching “Mysore cab booking Dzire”, “Etios outstation taxi Bangalore” or “Bangalore to Ooty car rental” should consider that compact sedan CNG kits can consume the boot, leaving family bags in the cabin for a four-to-eight-hour drive. Small sedans can also struggle to maintain comfortable cooling on uphill ghat roads.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "The 2024–2026 factory S-CNG Ertiga's 50:50 third row folds to create a flat load bay for up to 4 large 28-inch suitcases plus bags; passenger and luggage layout is confirmed together.",
                "Independent rear AC blowers with console controls serve middle and rear passengers on longer highway legs.",
                "Progressive rear shock absorbers and stable highway handling help reduce backseat motion sickness on ghats; smooth driving and safe pacing remain essential.",
                "For a multi-week homestay relocation, request the 60:40 second-row cargo fold in advance; a nominal cargo reconfiguration fee applies.",
              ].map((text) => <p key={text} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm leading-7 text-slate-700">{text}</p>)}
            </div>
            <Link href="/blog/ertiga-luggage-capacity-guide" className={`mt-5 inline-flex items-center gap-2 font-black underline underline-offset-4 ${palette.ink}`}>See the Ertiga luggage capacity guide <ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="price-lock">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className={`text-xs font-black uppercase tracking-widest ${palette.ink}`}>Direct owner-driver • transparent trip quote</p>
              <h2 id="price-lock" className="mt-2 text-2xl font-black text-slate-950">WhatsApp Price-Lock: itemized before departure</h2>
              <p className="mt-3 leading-7 text-slate-700">Instead of relying on changing quote and driver-matching availability from MakeMyTrip, Gozo, Savaari or Ola Outstation, your written quote sets out the transparent per-kilometre base fare, driver bata (day allowance and any overnight allowance), tolls, permits and parking. No hidden “toll extra surge” or last-minute cancellation surprise: what is agreed on WhatsApp is your locked final quote.</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Share trip dates and route details for a route-specific calculation; no universal fare is published here.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`rounded-xl px-6 py-4 text-center font-black text-white ${palette.accent}`}>Request itemized quote</a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="safety">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-emerald-300" size={30} />
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-emerald-300">Compliance • highway and forest-reserve awareness</p>
                <h2 id="safety" className="mt-2 text-2xl font-black">Karnataka Government AIS-140 Certified Passenger Safety</h2>
                <p className="mt-3 leading-7 text-white/80">Fleet vehicles are Karnataka State Transport Department compliant, with live government GPS tracking and active SOS Panic Buttons connected to emergency response infrastructure. Verified owner-driver accountability, vetted chauffeurs, non-smoking interiors and experience with night highways and Western Ghats routes support a more dependable journey.</p>
                {route.theme === "mist" && <p className="mt-3 text-sm font-bold text-sky-200">Forest timing is not negotiable: GPS planning does not override checkpost closure or wildlife-protection instructions.</p>}
              </div>
            </div>
          </div>
        </section>

        <nav className="mx-auto max-w-6xl px-5 py-8" aria-label="Airport and outstation trip links">
          <h2 className="text-xl font-black text-slate-950">Continue your journey</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/airport-taxi-bangalore" className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 hover:border-slate-400">Landing at BLR T1/T2 and heading to {route.destination}? Ask about direct airport-to-outstation pickup with no city switchover →</Link>
            <Link href="/outstation-cabs-bangalore" className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 hover:border-slate-400">Compare packages at the outstation hub →</Link>
            {destinations.filter((destination) => destination.href !== `/${route.slug}`).slice(0, 2).map((destination) => <Link key={destination.href} href={destination.href} className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 hover:border-slate-400">Explore {destination.label} cab route →</Link>)}
          </div>
        </nav>

        <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="route-faq">
          <h2 id="route-faq" className="text-2xl font-black text-slate-950">Route-specific travel FAQs</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {route.faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-black text-slate-900">{faq.question}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p></article>)}
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-10">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`block rounded-2xl px-6 py-5 text-center font-black text-white shadow-lg ${palette.accent}`}>Plan your Bangalore to {route.destination} trip on WhatsApp</a>
        </section>
        <PopularOutstationRoutes currentSlug={route.slug} />
      </main>
    </SiteShell>
  );
}
