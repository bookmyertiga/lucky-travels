import type { Metadata } from "next";
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
        "@type": "TaxiService",
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
        publisher: { "@id": `${SITE.url}/#business` },
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
