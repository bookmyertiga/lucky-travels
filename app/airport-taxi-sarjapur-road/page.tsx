import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-sarjapur-road", pageName: "Sarjapur Road to Bangalore Airport Taxi", title: "Sarjapur Road to Bangalore Airport Taxi (BLR) | 6+1 Ertiga - Go Bengaluru", description: "Punctual Sarjapur Road and Bellandur to BLR Airport taxi transfers by Lucky Travels. Reliable 6+1 Ertiga cabs, transparent pricing, book min. 6 hrs ahead.", eyebrow: "SARJAPUR ROAD AND BELLANDUR TO BLR", intro: "Book a punctual chauffeur-driven 6+1 Premium Ertiga from Sarjapur Road or Bellandur to Kempegowda Airport. We cover Carmelaram, Haralur and nearby East Bengaluru pickup addresses.", distance: "Around 48 km", route: "ORR or SH-35 via Budigere Cross", nonPeak: "65-75 minutes", peak: "100-130 minutes", areas: "Sarjapur Road, Bellandur, Carmelaram and Haralur", terminalGuide: "Confirm BLR T1 or T2 from the latest airline communication before travel; the driver will follow current airport curbside and pickup access instructions.", emailSubject: "Sarjapur Road Airport Taxi Enquiry",
  faqs: [
    { question: "When should I book from Sarjapur Road?", answer: "A minimum of 6 hours advance booking is required for guaranteed vehicle dispatch. Peak ORR travel and early flights benefit from even earlier planning." },
    { question: "Will the chauffeur use ORR or SH-35?", answer: "The chauffeur evaluates real-time Google Maps traffic at trip start and selects the fastest practical route, including ORR or SH-35 through Budigere Cross." },
    { question: "How much luggage can the exclusive Ertiga carry?", answer: "Four passengers can travel with up to four large suitcases when the 3rd row is folded. Six passengers should carry compact cabin bags." },
    { question: "Are there fixed prices for Bellandur airport trips?", answer: "No. Transparent quotes are trip-specific and depend on the exact address, time, route, terminal and confirmed travel requirements." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function SarjapurRoadAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
