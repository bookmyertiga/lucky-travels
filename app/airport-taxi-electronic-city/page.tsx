import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-electronic-city",
  pageName: "Electronic City to Bangalore Airport Taxi",
  title: "Electronic City to Bangalore Airport Taxi (BLR) | 6+1 Ertiga - Go Bengaluru",
  description: "Punctual Electronic City to Kempegowda Airport transfers by Lucky Travels. Clean 6+1 Ertiga cabs, min. 6-hr advance booking, zero surge pricing. Book 24/7.",
  eyebrow: "ELECTRONIC CITY TO BLR AIRPORT TRANSFERS",
  intro: "Book a punctual, chauffeur-driven 6+1 Premium Ertiga from Electronic City to Kempegowda International Airport. We cover Phase 1, Phase 2, Bommasandra and Neeladri Nagar with direct, trip-specific quotes.",
  distance: "Around 54 km",
  route: "Elevated Tollway and Bellary Road",
  nonPeak: "70-80 minutes",
  peak: "110-135 minutes",
  areas: "Electronic City Phase 1, Phase 2, Bommasandra and Neeladri Nagar",
  terminalGuide: "For a curbside drop, confirm whether your flight uses BLR T1 or T2 and allow time for the long airport approach from Electronic City.",
  emailSubject: "Electronic City Airport Taxi Enquiry",
  faqs: [
    { question: "How early must I book an Electronic City airport taxi?", answer: "A minimum of 6 hours advance booking is required for guaranteed vehicle dispatch. Share the full address, flight and terminal details early, especially for peak traffic or early departures." },
    { question: "Which route will the chauffeur take?", answer: "At trip start, the chauffeur evaluates real-time Google Maps traffic and selects the fastest practical route, usually considering the Elevated Tollway and Bellary Road." },
    { question: "How many bags fit in the Ertiga?", answer: "Four passengers can travel with up to four large suitcases when the 3rd row is folded. Six passengers should carry compact cabin bags." },
    { question: "Do you publish a fixed Electronic City airport fare?", answer: "No. Quotes are trip-specific and confirmed after reviewing the exact address, timing, route, terminal, tolls, parking and vehicle availability." },
  ],
};

export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function ElectronicCityAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
