import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ConversionTracking from "@/components/shared/ConversionTracking";
import { SITE } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Premium Ertiga Airport Taxi in Bengaluru | Lucky Travels", template: "%s | Lucky Travels" },
  description: "Book a clean, comfortable Premium Ertiga for Bengaluru airport pickup, airport drop, hourly rental and outstation travel. Call or WhatsApp Lucky Travels.",
  applicationName: SITE.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "1254x1254" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "1254x1254" }],
  },
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website", locale: "en_IN", url: SITE.url, siteName: `${SITE.brand} by ${SITE.name}`,
    title: "Go Bengaluru with Lucky Travels",
    description: "Premium Ertiga airport taxi service in Bengaluru.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Go Bengaluru with Lucky Travels Premium Ertiga Airport Taxi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Bengaluru with Lucky Travels",
    description: "Premium Ertiga airport taxi service in Bengaluru.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5b16d9",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: "Go Bengaluru | Lucky Travels",
    url: SITE.url,
    image: `${SITE.url}/images/logo/favicon.png`,
    logo: `${SITE.url}/images/logo/favicon.png`,
    telephone: "+919886814344",
    priceRange: "₹₹",
    description: "Premium chauffeur-driven 6+1 Maruti Suzuki Ertiga car rental, airport taxi, and outstation cab services across Bangalore.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560017",
      addressCountry: "IN",
    },
    areaServed: ["Bengaluru", "Kempegowda International Airport", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "184",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Go Bengaluru Premium Ertiga Services",
      itemListElement: [
        { "@type": "Offer", name: "Corporate Car Rental", url: `${SITE.url}/corporate-car-rental-bangalore`, itemOffered: { "@type": "Service", name: "B2B corporate car rental" } },
        { "@type": "Offer", name: "Local Hourly Car Rental", url: `${SITE.url}/car-rental-bangalore`, itemOffered: { "@type": "Service", name: "Chauffeur-driven hourly Ertiga rental" } },
        { "@type": "Offer", name: "Airport Transfers", url: `${SITE.url}/airport-taxi-bangalore`, itemOffered: { "@type": "Service", name: "Bangalore airport taxi transfer" } },
        { "@type": "Offer", name: "Outstation Cab Packages", url: `${SITE.url}/services/outstation-packages`, itemOffered: { "@type": "Service", name: "Outstation Ertiga cab packages" } },
      ],
    },
  };

  return <html lang="en-IN"><body><JsonLd data={businessSchema} /><ConversionTracking />{children}</body></html>;
}
