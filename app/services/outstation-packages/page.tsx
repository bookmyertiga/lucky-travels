import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/services/outstation-packages`;
const pageTitle = "Outstation Packages from Bangalore | Premium 6+1 Ertiga - Go Bengaluru";
const pageDescription = "Book chauffeur-driven 6+1 Ertiga outstation packages from Bangalore to Mysore, Coorg, Ooty, Chikmagalur and Tirupati. Transparent quotes, 6-12 hr advance booking and direct transport.";
const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Lucky Travels, I would like to check Premium Ertiga outstation availability from Bangalore.\nTravel date:\nDestination:\nOne-way or return:\nPassengers and luggage:")}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: { title: pageTitle, description: pageDescription, url: routeUrl, type: "website", images: [`${SITE.url}/images/services/outstation.jpg`] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [`${SITE.url}/images/services/outstation.jpg`] },
};

const corridors = [
  { href: "/bangalore-to-mysore-cab", name: "Bangalore to Mysore", details: "~145 km | ~2.5-3 hrs", note: "NH-275 Expressway, Heritage & Palace travel" },
  { href: "/bangalore-to-coorg-cab", name: "Bangalore to Coorg", details: "~255 km | ~5.5-6.5 hrs", note: "Coffee homestay access, Western Ghats" },
  { href: "/bangalore-to-ooty-cab", name: "Bangalore to Ooty", details: "~280 km | ~6-7.5 hrs", note: "Nilgiri hills, Ghat safety, TN permit clarity" },
  { href: "/bangalore-to-chikmagalur-cab", name: "Bangalore to Chikmagalur", details: "~245 km | ~4.5-5 hrs", note: "NH-75 Hassan Highway, plantation getaways" },
  { href: "/bangalore-to-tirupati-cab", name: "Bangalore to Tirupati", details: "~250 km | ~4.5-5.5 hrs", note: "Aligned with TTD Darshan slots, AP permit clarity" },
  { href: "", name: "Custom Route or Multi-City Tour?", details: "Tailored Karnataka & Interstate Travel", note: "Planning a circuit covering Wayanad, Pondicherry, Kabini, or customized multi-day itineraries? Enquire directly for a custom Ertiga quotation.", custom: true },
];

const faqs = [
  { question: "Which outstation routes are available from Bangalore?", answer: "Featured direct routes include Bangalore to Mysore, Coorg, Ooty, Chikmagalur and Tirupati. Each route has its own travel guidance and a transparent trip-specific quote." },
  { question: "Which vehicle is provided for an outstation package?", answer: "Lucky Travels provides a dedicated chauffeur-driven 6+1 Maruti Suzuki Ertiga only. We do not operate hatchbacks or sedans." },
  { question: "How much advance booking is required?", answer: "A minimum of 6 to 12 hours advance booking is required for chauffeur allocation, vehicle preparation and guaranteed dispatch. Earlier notice is recommended for weekends and holidays." },
  { question: "How does live traffic routing work?", answer: "Drivers monitor live Google Maps traffic at departure to select the fastest highway exits and bypasses, including the Bangalore-Mysore Expressway, NICE Road and NH-75." },
  { question: "Are tolls, permits and driver allowances included?", answer: "Quotes are transparent and trip-specific. Applicable tolls, state permits, parking and driver allowance terms are detailed upfront before confirmation. There are no fixed prices on this page." },
  { question: "Do you provide packaged tours or stay bookings?", answer: "No. Lucky Travels provides pure door-to-door transport to the customer-chosen hotel, homestay or landmark. Packaged tours and accommodation bookings are not provided." },
];

function SectionHeading({ eyebrow, children, id, dark = false }: { eyebrow: string; children: React.ReactNode; id: string; dark?: boolean }) {
  return <><p className={dark ? "text-sm font-black uppercase tracking-[.18em] text-amber-400" : "section-kicker"}>{eyebrow}</p><h2 id={id} className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}>{children}</h2></>;
}

export default function OutstationPackagesPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", name: "Bangalore Outstation Packages in a Premium Ertiga", serviceType: "Chauffeur-driven outstation taxi packages from Bangalore", provider: { "@type": "TaxiService", name: SITE.name, brand: { "@type": "Brand", name: SITE.brand }, url: SITE.url, telephone: `+91${SITE.phone}`, email: SITE.email }, areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "AdministrativeArea", name: "Karnataka" }], url: routeUrl, image: `${SITE.url}/images/services/outstation.jpg`, description: pageDescription,
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${routeUrl}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return <SiteShell><JsonLd data={[serviceSchema, faqSchema]} /><main className="overflow-x-hidden">
    <section aria-labelledby="outstation-hub-heading" className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-6 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.2fr_.8fr]"><div>
        <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm sm:leading-normal">BANGALORE OUTSTATION PACKAGES</p>
        <h1 id="outstation-hub-heading" className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:mt-3 sm:text-4xl">Premium Outstation Travel from Bangalore</h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-5 text-white/85 sm:mt-3 sm:text-base sm:leading-7">Choose a direct one-way, return or multi-day journey from Bangalore in a clean, chauffeur-driven 6+1 Premium Ertiga. Share your chosen hotel, homestay or landmark for a transparent, trip-specific quote.</p>
        <p className="mt-1 text-sm font-black leading-5 text-amber-300 sm:mt-2 sm:text-lg sm:leading-6 lg:text-base">{SITE.specialisationSlogan}</p>
        <div className="mt-2 flex flex-wrap gap-3 sm:mt-3"><a href={`tel:+91${SITE.phone}`} className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-black text-purple-800 lg:py-3 lg:text-sm"><Phone size={19} /> Call +91 {SITE.phone}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 font-black text-white lg:py-3 lg:text-sm"><MessageCircle size={19} /> WhatsApp for a Quote</a></div>
        <p className="mt-1 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">Minimum 6 to 12 hours advance booking is required for chauffeur allocation, vehicle preparation and guaranteed dispatch.</p>
        <a href="#featured-corridors" className="service-scroll-prompt mt-3 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2.5 text-center text-sm font-black text-purple-800 shadow-premium sm:px-5">Explore All Outstation Routes &amp; Packages Below <ArrowDown size={17} className="service-scroll-arrow" /></a>
      </div><figure className="mx-auto max-h-[300px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-soft"><Image src="/images/services/outstation.jpg" alt="Chauffeur-driven Premium Ertiga for Bangalore outstation packages" width={1536} height={1024} priority className="max-h-[230px] w-full object-cover" sizes="(max-width: 1024px) 100vw, 42vw" /><figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">Chauffeur-driven 6+1 Premium Ertiga cabs for comfortable one-way, round-trip, and multi-day Karnataka outstation travel.</figcaption></figure></div>
      <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex"><a href="#featured-corridors" className="service-scroll-prompt flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-4 py-2.5 text-sm font-black text-purple-800 shadow-premium sm:px-5">Explore All Outstation Routes &amp; Packages Below <ArrowDown size={17} className="service-scroll-arrow" /></a></div>
    </section>

    <section id="featured-corridors" className="bg-white px-5 py-12 sm:py-16"><div className="page-shell"><SectionHeading id="featured-corridors-heading" eyebrow="FEATURED OUTSTATION CORRIDORS">Choose Your Bangalore Route</SectionHeading><p className="mt-6 max-w-3xl leading-8 text-slate-700">Explore route-specific timings, highway considerations, destination access and booking guidance for the five high-demand journeys below.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{corridors.map((corridor) => { const customWhatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Lucky Travels, I would like to plan a custom outstation/multi-day trip in an Ertiga.")}`; return <article key={corridor.name} className={`flex flex-col rounded-2xl border p-6 shadow-soft ${corridor.custom ? "border-indigo-200 bg-indigo-50" : "border-slate-200 bg-slate-50"}`}><h3 className="text-xl font-black text-[#090f2f]">{corridor.name}</h3><p className={`mt-3 font-black ${corridor.custom ? "text-indigo-700" : "text-purple-700"}`}>{corridor.details}</p><p className="mt-3 flex-1 leading-7 text-slate-600">{corridor.note}</p>{corridor.custom ? <a href={customWhatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-3 text-center font-black text-white">Enquire Custom Trip →</a> : <Link href={corridor.href} className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#090f2f] px-4 py-3 text-center font-black text-white">View Route &amp; Details →</Link>}</article>; })}</div></div></section>

    <section className="page-shell py-12 sm:py-16" aria-labelledby="fleet-heading"><SectionHeading id="fleet-heading" eyebrow="ONE DEDICATED VEHICLE CATEGORY">Comfortable, Direct Outstation Transport</SectionHeading><div className="mt-8 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-black">{SITE.specialisationSlogan}</h3><p className="mt-3 leading-7 text-slate-700">Every confirmed journey uses a dedicated, chauffeur-driven 6+1 Maruti Suzuki Ertiga only. We do not operate hatchbacks or sedans. Drivers monitor live Google Maps traffic at departure to pick the fastest highway exits and bypasses across the Bangalore-Mysore Expressway, NICE Road and NH-75.</p></article><article className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6"><h3 className="text-xl font-black">Luggage guidance</h3><p className="mt-3 leading-7 text-slate-700">The ideal arrangement is 4-5 passengers with up to 4 large trolley suitcases when the 3rd row is folded, or 6 passengers with compact cabin bags. Share bag sizes before confirmation.</p><p className="mt-3 leading-7 text-slate-700">This is pure door-to-door transport to your chosen hotel, homestay or landmark. We do not provide packaged tours or stay bookings.</p></article></div></section>

    <section className="bg-[#090f2f] px-5 py-12 text-white sm:py-16" aria-labelledby="booking-heading"><div className="page-shell grid gap-8 lg:grid-cols-2 lg:items-center"><div><SectionHeading id="booking-heading" eyebrow="CLEAR TERMS BEFORE TRAVEL" dark>Request a Transparent Outstation Quote</SectionHeading><p className="mt-6 leading-8 text-white/75">Send your pickup point, destination, date, time, journey type, passenger count and luggage details. The quote explains tolls, state permits, parking, waiting and driver allowances upfront. There are no fixed prices because each itinerary is different.</p></div><div className="rounded-2xl bg-white p-6 text-[#090f2f]"><h3 className="text-xl font-black">Book 6-12 hours ahead</h3><p className="mt-3 leading-7 text-slate-700">Advance notice supports chauffeur allocation, vehicle preparation and guaranteed dispatch.</p><div className="mt-5 flex flex-wrap gap-3"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white"><MessageCircle size={18} /> WhatsApp a Quote</a><a href={`tel:+91${SITE.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-3 font-black text-white"><Phone size={18} /> Call</a></div></div></div></section>

    <section className="page-shell py-12 sm:py-16" aria-labelledby="faq-heading"><SectionHeading id="faq-heading" eyebrow="OUTSTATION PACKAGE FAQ">Common Questions Before Booking</SectionHeading><div className="mt-8 grid gap-4 md:grid-cols-2">{faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-black text-[#090f2f]">{faq.question}</h3><p className="mt-3 leading-7 text-slate-700">{faq.answer}</p></article>)}</div></section>
  </main></SiteShell>;
}
