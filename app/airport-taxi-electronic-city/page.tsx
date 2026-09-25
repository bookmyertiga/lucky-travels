import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-electronic-city",
  pageName: "Electronic City to Bangalore Airport Taxi",
  title: "Electronic City to Bangalore Airport Taxi (BLR) | 6+1 Ertiga Cab",
  description:
    "Reliable Electronic City Phase 1 & 2 to Kempegowda Airport (BLR) taxi service. Chauffeur-driven 6+1 Ertiga, early morning pickups, NICE Road/Elevated Tollway routing & zero cancellations.",
  eyebrow: "ELECTRONIC CITY TO BLR AIRPORT TRANSFERS",
  intro:
    "Book a punctual, chauffeur-driven 6+1 Premium Maruti Suzuki Ertiga from Electronic City to Kempegowda International Airport (BLR). Serving Phase 1 (Infosys/Wipro gate), Phase 2, Neeladri Nagar, Doddathoguru, and Bommasandra with transparent, trip-specific quotes and guaranteed dispatch.",
  distance: "Around 54 - 58 km",
  route: "Hosur Road Elevated Tollway / NICE Road & Bellary Road (NH-44)",
  nonPeak: "70-80 minutes",
  peak: "105-130 minutes",
  areas: "Electronic City Phase 1, Phase 2, Neeladri Nagar, Doddathoguru, Bommasandra & Begur",
  terminalGuide:
    "We provide direct curbside drops at both Kempegowda Terminal 1 (T1 Domestic/International) and Terminal 2 (T2 Garden Terminal). For family check-ins and international departures, we recommend planning pickup 3.5 to 4 hours prior to departure.",
  emailSubject: "Electronic City Airport Taxi Enquiry",
  faqs: [
    {
      question: "How early should I book an Electronic City to Bangalore airport taxi?",
      answer:
        "We recommend booking at least 6 to 12 hours in advance to guarantee vehicle allocation and driver dispatch, especially for early morning flight departures (3:00 AM - 6:00 AM).",
    },
    {
      question: "Which route is taken: Elevated Tollway or NICE Road?",
      answer:
        "For late-night and early-morning transit, the Hosur Road Elevated Tollway to Silk Board, Outer Ring Road, and Bellary Road is fastest. During heavy daytime traffic, we evaluate NICE Road or bypass corridors to avoid central congestion.",
    },
    {
      question: "How much luggage can the 6+1 Ertiga accommodate?",
      answer:
        "For 4 passengers, folding the 3rd-row split seats easily fits 3 to 4 large check-in suitcases plus cabin bags. For groups of 5 to 6 passengers, it comfortably holds 2 to 3 standard cabin suitcases and soft baggage.",
    },
    {
      question: "Are toll charges and airport parking included?",
      answer:
        "We provide transparent, trip-specific quotations upfront that detail all applicable toll charges (Elevated Tollway, Airport Trumpet Toll) so there are no unexpected surprises.",
    },
    {
      question: "Are early morning 3:00 AM pickups reliable without cancellation?",
      answer:
        "Yes, 100%. Our rides are confirmed owner-chauffeur bookings with assigned vehicle details shared ahead of time, eliminating last-minute app aggregator cancellations.",
    },
  ],
};

export const metadata: Metadata = {
  title: corridor.title,
  description: corridor.description,
  keywords: [
    "electronic city to bangalore airport taxi",
    "electronic city to blr cab",
    "ertiga cab electronic city airport",
    "electronic city phase 1 to airport cab",
    "electronic city phase 2 to airport taxi",
    "nice road airport taxi ertiga",
    "lucky travels bangalore airport cab",
  ],
  alternates: { canonical: `${SITE.url}/${corridor.slug}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: corridor.title,
    description: corridor.description,
    url: `${SITE.url}/${corridor.slug}`,
    siteName: "Go Bengaluru - Lucky Travels",
    locale: "en_IN",
    type: "website",
  },
};

export default function ElectronicCityAirportTaxiPage() {
  return <AirportCorridorPage corridor={corridor} />;
}