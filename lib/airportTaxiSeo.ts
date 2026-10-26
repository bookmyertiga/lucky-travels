import { SITE } from "@/constants/site";

export type AirportFaq = {
  question: string;
  answer: string;
};

type AirportTaxiSeoOptions = {
  pageName: string;
  routeUrl: string;
  description: string;
  locality: string;
  faqs: AirportFaq[];
  isHub?: boolean;
};

export function createAirportTaxiSeo({
  pageName,
  routeUrl,
  description,
  locality,
  faqs,
  isHub = false,
}: AirportTaxiSeoOptions) {
  const faqText = faqs.map(({ question, answer }) => `${question} ${answer}`).join(" ").toLowerCase();
  const standardFaqs: AirportFaq[] = [];

  if (!/28[- ]inch/.test(faqText)) {
    standardFaqs.push({
      question: `How does a 2024-2026 Ertiga compare with a Dzire or Etios for ${locality} airport luggage?`,
      answer:
        "The factory-fitted S-CNG Maruti Suzuki Ertiga has a flat boot that can hold 4 large 28-inch check-in suitcases with the 3rd row folded. This keeps luggage out of passenger seats and pairs the space with knee-level rear-console AC vents, plush seating, and generous legroom, offering a practical upgrade from a compact sedan.",
    });
  }

  if (!(/t1/.test(faqText) && /t2/.test(faqText) && /bay/.test(faqText))) {
    standardFaqs.push({
      question: "How are the BLR Airport Terminal 1 and Terminal 2 pickup bays confirmed?",
      answer:
        "Share the airline-assigned terminal when booking. Your chauffeur confirms the current legal pickup or drop-off bay by WhatsApp; follow live BLR airport signage because curbside and parking instructions can change.",
    });
  }

  if (!faqText.includes("blr airport cab booking")) {
    standardFaqs.push({
      question: `How does WhatsApp Price-Lock work for BLR airport cab booking from ${locality}?`,
      answer:
        "Send your exact pickup, date, time, terminal, passenger and luggage details on WhatsApp. We confirm a trip-specific quote and clarify tolls and parking before booking; the agreed fare has no peak-hour or rain surge multiplier.",
    });
  }

  if (!/(aggregator|ola|uber)/.test(faqText) || !faqText.includes("early morning airport taxi in bangalore")) {
    standardFaqs.push({
      question: `Why choose direct booking for an early morning airport taxi Bangalore travelers can reserve from ${locality}?`,
      answer:
        "This is a pre-booked, dedicated service rather than an app-based aggregator pool. Confirmed reservations are assigned to directly accountable, verified owner-drivers who follow professional service ethics, with guaranteed on-time doorstep arrival, zero driver-initiated cancellations, and no peak-hour or rain surge multipliers.",
    });
  }

  if (!faqText.includes("outstation airport cab")) {
    standardFaqs.push({
      question: "Can I book an outstation airport cab after arriving at BLR?",
      answer:
        "Yes. Request an outstation airport cab when booking and share the destination, flight details, passenger count, and luggage. The route, availability, tolls, and trip-specific fare are confirmed directly before travel.",
    });
  }

  const airportFaqs = [...faqs, ...standardFaqs];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Airport Taxi Bangalore",
        item: `${SITE.url}/airport-taxi-bangalore`,
      },
      ...(!isHub
        ? [{ "@type": "ListItem", position: 3, name: pageName, item: routeUrl }]
        : []),
    ],
  };

  const provider = {
    "@type": "TaxiService",
    name: "Lucky Travels (Go Bengaluru)",
    alternateName: ["Lucky Travels", "Go Bengaluru"],
    url: SITE.url,
    telephone: `+91-${SITE.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Konena Agrahara, HAL",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560017",
      addressCountry: "IN",
    },
  };

  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: pageName,
    serviceType: "Bangalore Airport Taxi and BLR Airport Cab Service",
    provider,
    areaServed: [
      { "@type": "Place", name: locality },
      { "@type": "Place", name: "Kempegowda International Airport Bengaluru (BLR)" },
    ],
    url: routeUrl,
    telephone: `+91-${SITE.phone}`,
    termsOfService: `${SITE.url}/faq`,
    description,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${routeUrl}#faq`,
    mainEntity: airportFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return { breadcrumbSchema, taxiServiceSchema, faqSchema, airportFaqs };
}