import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import Services from "@/components/home/Services";
import PremiumVehicle from "@/components/home/PremiumVehicle";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import BlogPreview from "@/components/home/BlogPreview";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import IntroLoader from "@/components/shared/IntroLoader";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/constants/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        alternateName: SITE.brand,
        url: SITE.url,
        telephone: `+91${SITE.phone}`,
        email: SITE.email,
        description: "Premium Ertiga airport transfers, hourly and daily rentals, and outstation service in Bengaluru.",
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
        url: SITE.url,
        name: `${SITE.brand} by ${SITE.name}`,
        publisher: { "@id": `${SITE.url}/#business` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f7fb] text-[#090f2f]">
      <IntroLoader />
      <JsonLd data={schema} />
      <Navbar />
      <Hero />
      <FeatureStrip />
      <Services />
      <PremiumVehicle />
      <div className="page-shell grid gap-5 pb-5 xl:grid-cols-[1.55fr_.82fr_.78fr]">
        <BlogPreview />
        <FAQ />
        <Contact />
      </div>
      <div className="page-shell pb-10">
        <Testimonials />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
