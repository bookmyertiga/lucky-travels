import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  heroCaption: "A spacious 6+1 Ertiga prepared for scenic Western Ghats roads and direct coffee estate drop-offs across Coorg.",
  slug: "bangalore-to-coorg-cab", pageName: "Bangalore to Coorg Cab", title: "Bangalore to Coorg Cab | Premium 6+1 Ertiga Taxi - Go Bengaluru", description: "Comfortable Bangalore to Coorg (Madikeri) cab service by Lucky Travels. Dedicated 6+1 Ertiga, 6-12 hr advance booking, transparent outstation quotes.", eyebrow: "BANGALORE TO COORG OUTSTATION TAXI", intro: "Travel comfortably from Bangalore to Coorg in a dedicated chauffeur-driven 6+1 Premium Ertiga. Plan a direct drop to Madikeri, Virajpet, Kushalnagar, a coffee estate or your chosen homestay.", distanceTime: "Around 255 km, 5.5-6.5 hours", route: "Bangalore-Mysore Expressway and Kushalnagar to Coorg", routeDetails: "The route uses the Bangalore-Mysore Expressway before continuing through Kushalnagar toward Madikeri, Virajpet and the hill roads. The chauffeur monitors live Google Maps traffic at departure to select the fastest highway exits and bypasses, then drives the hill section smoothly and carefully.", destinationDetails: "Share the exact Madikeri, Virajpet, Kushalnagar, coffee-estate or homestay location. This is direct transport only, not a packaged Coorg tour or accommodation booking.", emailSubject: "Bangalore to Coorg Cab Enquiry",
  faqs: [
    { question: "How early should I reserve a Bangalore to Coorg cab?", answer: "A minimum of 6 to 12 hours advance booking is required for chauffeur allocation and vehicle preparation. Earlier booking is recommended for weekends and hill-station travel." },
    { question: "How does the chauffeur handle the Coorg route?", answer: "The chauffeur checks live Google Maps traffic at departure for the fastest highway exits and bypasses, then adapts the driving approach for the smooth hill-road section after Kushalnagar." },
    { question: "What luggage arrangement is ideal?", answer: "Four to five passengers can carry up to four large trolley suitcases with the 3rd row folded. Six passengers should carry compact cabin bags." },
    { question: "Do you arrange Coorg hotels or sightseeing packages?", answer: "No. Lucky Travels is a pure door-to-door transport service to your chosen hotel, homestay or landmark. Quotes are transparent and trip-specific with zero fixed published prices." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function BangaloreToCoorgCabPage() { return <OutstationCorridorPage corridor={corridor} />; }
