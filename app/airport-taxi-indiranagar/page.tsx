import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-indiranagar", pageName: "Indiranagar to Bangalore Airport Taxi", title: "Indiranagar to Bangalore Airport Taxi (BLR) | Clean Ertiga - Go Bengaluru", description: "Scheduled Indiranagar and HAL to Kempegowda Airport transfers by Lucky Travels. Chauffeur-driven 6+1 Ertiga cabs, 6-hr advance notice, upfront pricing.", eyebrow: "INDIRANAGAR AND HAL TO BLR AIRPORT", intro: "Schedule a clean, chauffeur-driven 6+1 Premium Ertiga from Indiranagar or HAL to BLR T1 and T2. Coverage includes 100ft Road, 12th Main, HAL 2nd and 3rd Stages, Konena Agrahara and Domlur.", distance: "Around 38 km", route: "Old Airport Road, Inner Ring Road and Bellary Road", nonPeak: "45-60 minutes", peak: "75-100 minutes", areas: "100ft Road, 12th Main, HAL 2nd and 3rd Stages, Konena Agrahara and Domlur", terminalGuide: "Confirm the airline-assigned T1 or T2 before the chauffeur approaches the airport and use the current BLR curbside signage for your drop or pickup.", emailSubject: "Indiranagar Airport Taxi Enquiry",
  faqs: [
    { question: "How much advance notice is needed from Indiranagar?", answer: "Book at least 6 hours in advance for guaranteed vehicle dispatch. Send the exact pickup address, terminal and flight schedule when enquiring." },
    { question: "Does the driver use Old Airport Road every time?", answer: "The chauffeur evaluates real-time Google Maps traffic at trip start and chooses the fastest practical route through Old Airport Road, Inner Ring Road or alternatives." },
    { question: "What is the luggage guidance for the Ertiga?", answer: "Four passengers can carry up to four large suitcases with the 3rd row folded. Six passengers should bring compact cabin bags." },
    { question: "Is the airport transfer fare fixed?", answer: "No. Lucky Travels provides upfront, trip-specific pricing after checking the exact route, timing, terminal, tolls, parking and availability." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function IndiranagarAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
