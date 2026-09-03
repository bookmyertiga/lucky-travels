import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PremiumVehicle from "@/components/home/PremiumVehicle";
import FeatureStrip from "@/components/home/FeatureStrip";
import DirectBooking from "@/components/home/DirectBooking";
import FAQ, { homepageFaqs } from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/constants/site";

const homepageTitle =
  "Go Bengaluru | Premium Ertiga Airport Taxi, Hourly Rental & Outstation Cabs";
const homepageDescription =
  "Book reliable Bangalore airport transfers, hourly city rentals, & outstation cabs in a clean 6+1 Ertiga. Punctual owner-driver service. Call or WhatsApp for a direct quote.";

const outstationJourneys = [
  { href: "/bangalore-to-mysore-cab", title: "Bangalore to Mysore Cab", detail: "Expressway travel, ~145 km" },
  { href: "/bangalore-to-coorg-cab", title: "Bangalore to Coorg Cab", detail: "Hill country & coffee estates, ~255 km" },
  { href: "/bangalore-to-ooty-cab", title: "Bangalore to Ooty Cab", detail: "Nilgiris Ghat corridor, ~280 km" },
  { href: "/bangalore-to-chikmagalur-cab", title: "Bangalore to Chikmagalur Cab", detail: "Western Ghats getaway, ~245 km" },
  { href: "/bangalore-to-tirupati-cab", title: "Bangalore to Tirupati Cab", detail: "Balaji Darshan travel, ~250 km" },
  { href: "/services/outstation-packages", title: "Custom Outstation Trips", detail: "Multi-city Karnataka & interstate travel" },
] as const;

export const metadata: Metadata = {
  title: { absolute: homepageTitle },
  description: homepageDescription,
  alternates: { canonical: `${SITE.url}/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE.url}/`,
    siteName: `${SITE.brand} by ${SITE.name}`,
    title: homepageTitle,
    description: homepageDescription,
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Go Bengaluru by Lucky Travels Premium Ertiga cab service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: ["/og.png"],
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": `${SITE.url}/#taxiservice`,
        name: "Go Bengaluru by Lucky Travels",
        legalName: "Lucky Travels",
        brand: { "@type": "Brand", name: "Go Bengaluru" },
        url: SITE.url,
        telephone: "+919886814344",
        email: "bookmyertiga@gmail.com",
        priceRange: "$$",
        serviceType: [
          "Bangalore Airport Taxi Transfers (BLR T1 & T2)",
          "Hourly and Daily Chauffeur-Driven Car Rental (4hr, 8hr, 12hr)",
          "Outstation Cabs from Bangalore (One-Way & Round Trip)",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560017",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "City", name: "Bangalore" },
          {
            "@type": "Place",
            name: "Kempegowda International Airport Bengaluru",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Bangalore Premium Ertiga Travel Services",
          itemListElement: [
            ...outstationJourneys.map((journey) => ({
              "@type": "Offer",
              name: journey.title,
              url: `${SITE.url}${journey.href}`,
              itemOffered: { "@type": "Service", name: journey.title, areaServed: "Bangalore" },
            })),
            { "@type": "Offer", name: "8-hour / 80-kilometer hourly Ertiga rental", url: `${SITE.url}/car-rental-bangalore`, itemOffered: { "@type": "Service", name: "8-hour chauffeur-driven Ertiga rental" } },
            { "@type": "Offer", name: "10-hour / 100-kilometer hourly Ertiga rental", url: `${SITE.url}/car-rental-bangalore`, itemOffered: { "@type": "Service", name: "10-hour chauffeur-driven Ertiga rental" } },
            { "@type": "Offer", name: "12-hour / 120-kilometer full-day Ertiga rental", url: `${SITE.url}/car-rental-bangalore`, itemOffered: { "@type": "Service", name: "12-hour chauffeur-driven Ertiga rental" } },
          ],
        },
        description:
          "Dedicated chauffeur-driven 6+1 Maruti Suzuki Ertiga only, with no hatchbacks or sedans. Guaranteed vehicle allocation requires 6 to 12 hours advance booking. Chauffeurs use live Google Maps traffic to choose dynamic highway exits.",
        openingHoursSpecification: {
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
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: `${SITE.brand} by ${SITE.name}`,
        publisher: { "@id": `${SITE.url}/#taxiservice` },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#homepage-faqs`,
        mainEntity: homepageFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f7fb] text-[#090f2f]">
      <JsonLd data={schema} />
      <Navbar />
      <Hero />
      <Services />
      <section className="page-shell px-5 pb-12 sm:pb-16" aria-labelledby="outstation-journeys-heading">
        <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
          <p className="section-kicker">DIRECT ROUTE PLANNING FROM BANGALORE</p>
          <h2 id="outstation-journeys-heading" className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">
            Popular Outstation Journeys from Bangalore
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Travel door to door in a dedicated 6+1 Maruti Suzuki Ertiga. Chauffeurs monitor live Google Maps traffic at departure to select the fastest highway exits, including the Bangalore-Mysore Expressway, NICE Road and NH-75.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outstationJourneys.map((journey) => (
              <Link key={journey.href} href={journey.href} className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-300 hover:shadow-soft">
                <h3 className="text-lg font-black text-[#090f2f] group-hover:text-purple-700">{journey.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{journey.detail}</p>
                <span className="mt-4 inline-block text-sm font-black text-purple-700">View route details →</span>
              </Link>
            ))}
          </div>
          <div className="mt-7 grid gap-3 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-700 sm:grid-cols-3">
            <p><strong>Only Premium Ertiga—Because Comfort Should Never Be Optional.</strong> Dedicated 6+1 fleet, no vehicle downsizing.</p>
            <p><strong>Advance booking:</strong> Reserve 6 to 12 hours ahead for guaranteed vehicle allocation and preparation.</p>
            <p><strong>Luggage guidance:</strong> 4-5 passengers with 4 large suitcases with the 3rd row folded, or 6 with compact cabin bags.</p>
          </div>
        </div>
      </section>
      <PremiumVehicle />
      <FeatureStrip />
      <DirectBooking />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
