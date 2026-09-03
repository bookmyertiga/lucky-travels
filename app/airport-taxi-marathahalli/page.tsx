import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-marathahalli", pageName: "Marathahalli to Bangalore Airport Taxi", title: "Marathahalli to Bangalore Airport Taxi (BLR) | 6+1 Ertiga - Go Bengaluru", description: "Direct Marathahalli to Kempegowda Airport (BLR T1 & T2) transfers by Lucky Travels. Dedicated 6+1 Ertiga cabs, min. 6-hr advance notice, zero surge quotes.", eyebrow: "MARATHAHALLI TO BLR AIRPORT TRANSFERS", intro: "Arrange a direct chauffeur-driven 6+1 Premium Ertiga from Marathahalli to BLR T1 or T2. We cover Marathahalli Bridge, Spice Garden, Kundalahalli and KR Puram with transparent, trip-specific quotes.", distance: "Around 41 km", route: "ORR and Hebbal, or Old Madras Road via Budigere Cross", nonPeak: "50-60 minutes", peak: "80-105 minutes", areas: "Marathahalli Bridge, Spice Garden, Kundalahalli and KR Puram", terminalGuide: "Share whether the flight is at T1 or T2 before departure and follow current airport curbside guidance for the terminal drop or arrival pickup.", emailSubject: "Marathahalli Airport Taxi Enquiry",
  faqs: [
    { question: "How early do I need to book a Marathahalli airport taxi?", answer: "Minimum 6-hour advance booking is needed for guaranteed vehicle dispatch. Share the address and flight details early for peak traffic or early departures." },
    { question: "How does the driver choose between ORR and Old Madras Road?", answer: "At trip start, the chauffeur evaluates real-time Google Maps traffic and picks the fastest practical route through ORR and Hebbal or Old Madras Road and Budigere Cross." },
    { question: "What luggage arrangement works in the Ertiga?", answer: "Four passengers can carry up to four large suitcases with the 3rd row folded. Six passengers should bring compact cabin bags." },
    { question: "Do zero-surge quotes mean a fixed published fare?", answer: "No fixed prices are published. Lucky Travels gives a transparent trip-specific quote after reviewing route, timing, terminal, tolls, parking and availability." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function MarathahalliAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
