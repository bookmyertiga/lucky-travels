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
  "Best Cab Service in Bangalore | Airport, Outstation & City Cabs - Go Bengaluru";
const homepageDescription =
  "Book reliable 24/7 cabs in Bangalore. Enjoy comfortable, spacious 6/7-seater vehicles for airport transfers, outstation getaways, and city rentals with transparent billing. Call +91 9886814344.";

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
        "@id": `${SITE.url}/#business`,
        name: `${SITE.brand} by ${SITE.name}`,
        alternateName: SITE.name,
        url: `${SITE.url}/`,
        telephone: `+91${SITE.phone}`,
        email: SITE.email,
        description:
          "Owner-driver-led Premium Maruti Suzuki Ertiga service for Bangalore airport transfers, outstation journeys and local city rentals.",
        logo: `${SITE.url}/images/logo/favicon.png`,
        image: `${SITE.url}/images/hero/ertiga-grounded.png`,
        foundingDate: "2026-08-03",
        founder: {
          "@type": "Person",
          name: "Bharath K S",
          url: `${SITE.url}/about`,
        },
        slogan: SITE.specialisationSlogan,
        sameAs: [SITE.instagramUrl, SITE.facebookUrl],
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address,
          addressLocality: SITE.locality,
          addressRegion: SITE.region,
          postalCode: SITE.postalCode,
          addressCountry: SITE.country,
        },
        areaServed: { "@type": "City", name: "Bengaluru" },
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
