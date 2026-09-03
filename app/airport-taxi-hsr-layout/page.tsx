import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-hsr-layout",
  pageName: "HSR Layout to Bangalore Airport Taxi",
  title: "HSR Layout to Bangalore Airport Taxi (BLR) | Premium Ertiga - Go Bengaluru",
  description: "Reliable HSR Layout to Kempegowda Airport (BLR T1 & T2) transfers by Lucky Travels. Dedicated 6+1 Ertiga cabs, min. 6-hr advance booking, transparent quotes.",
  eyebrow: "HSR LAYOUT TO BLR AIRPORT TRANSFERS",
  intro: "Schedule a dedicated chauffeur-driven 6+1 Premium Ertiga from HSR Layout to BLR T1 or T2. We serve Sectors 1 through 7, Agara and the Silk Board junction bypass with a clear trip-specific quote.",
  distance: "Around 44 km", route: "ORR and Bellary Road", nonPeak: "55-65 minutes", peak: "90-115 minutes", areas: "HSR Layout Sectors 1-7, Agara and Silk Board junction bypass", terminalGuide: "Check the airline message for T1 or T2 before leaving HSR Layout and share the confirmed terminal for the correct curbside drop or pickup plan.", emailSubject: "HSR Layout Airport Taxi Enquiry",
  faqs: [
    { question: "What is the advance booking policy from HSR Layout?", answer: "Minimum 6-hour advance booking is required for guaranteed vehicle dispatch. Earlier enquiry is recommended for office-hour traffic and early flights." },
    { question: "How is the fastest HSR Layout airport route chosen?", answer: "The chauffeur checks real-time Google Maps traffic at trip start and chooses the fastest practical option across ORR, the Silk Board bypass and Bellary Road." },
    { question: "Can the Ertiga carry our passengers and luggage?", answer: "Four passengers can carry up to four large suitcases with the 3rd row folded. Six passengers are best accommodated with compact cabin bags." },
    { question: "Are HSR Layout airport prices fixed?", answer: "No fixed price is published. Lucky Travels confirms a transparent, trip-specific quote after reviewing address, timing, route and trip terms." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function HsrLayoutAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
