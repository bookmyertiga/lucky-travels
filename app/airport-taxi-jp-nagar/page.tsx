import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-jp-nagar", pageName: "JP Nagar to Bangalore Airport Taxi", title: "JP Nagar to Bangalore Airport Taxi (BLR) | Premium Ertiga - Go Bengaluru", description: "Scheduled JP Nagar and Jayanagar to Kempegowda Airport cab transfers by Lucky Travels. Spacious 6+1 Ertiga, min. 6-hr advance booking, transparent quotes.", eyebrow: "JP NAGAR AND JAYANAGAR TO BLR", intro: "Schedule a spacious chauffeur-driven 6+1 Premium Ertiga from JP Nagar or Jayanagar to Kempegowda Airport. We cover JP Nagar Phases 1-9, Jayanagar and Bannerghatta Road.", distance: "Around 46 km", route: "Dairy Circle, Central Spine and Bellary Road", nonPeak: "65-75 minutes", peak: "100-125 minutes", areas: "JP Nagar Phases 1-9, Jayanagar and Bannerghatta Road", terminalGuide: "Check the latest airline message for T1 or T2 before leaving South Bengaluru and confirm the correct BLR curbside drop or pickup instructions.", emailSubject: "JP Nagar Airport Taxi Enquiry",
  faqs: [
    { question: "What is the JP Nagar airport booking policy?", answer: "Minimum 6-hour advance booking is required for guaranteed vehicle dispatch. Earlier planning helps with long South Bengaluru to airport travel times." },
    { question: "How will the fastest route from JP Nagar be selected?", answer: "The chauffeur evaluates real-time Google Maps traffic at trip start and chooses the fastest practical route via Dairy Circle, the Central Spine and Bellary Road." },
    { question: "How many passengers and bags fit?", answer: "Four passengers can carry up to four large suitcases with the 3rd row folded. Six passengers are best suited to compact cabin bags." },
    { question: "Does Lucky Travels show a fixed JP Nagar airport fare?", answer: "No. A transparent, trip-specific quote is confirmed after checking the exact pickup, timing, route, terminal, tolls, parking and vehicle availability." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function JpNagarAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
