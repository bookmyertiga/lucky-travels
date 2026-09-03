import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  heroCaption: "Comfortable NH-75 highway transit in a 6+1 Ertiga directly connecting Bangalore to Chikmagalur plantation stays.",
  slug: "bangalore-to-chikmagalur-cab", pageName: "Bangalore to Chikmagalur Cab", title: "Bangalore to Chikmagalur Cab | 6+1 Ertiga Taxi - Go Bengaluru", description: "Direct Bangalore to Chikmagalur cab service by Lucky Travels. Clean 6+1 Ertiga, smooth NH-75 cruising, book 6-12 hrs ahead. Zero hidden charges.", eyebrow: "BANGALORE TO CHIKMAGALUR CAB SERVICE", intro: "Travel directly from Bangalore to Chikmagalur in a clean, chauffeur-driven 6+1 Premium Ertiga. The route suits coffee estates, resorts, homestays and customer-chosen landmarks around the hills.", distanceTime: "Around 245 km, 4.5-5 hours", route: "NH-75 Hassan Highway to Chikmagalur", routeDetails: "The main journey follows NH-75 toward Hassan before continuing to Chikmagalur coffee estates and homestays. At departure, the chauffeur monitors live Google Maps traffic to select the fastest highway exits and bypasses for smooth highway cruising.", destinationDetails: "Provide the exact coffee estate, resort, homestay, hotel or landmark for direct door-to-door transport. Lucky Travels does not sell packaged tours or arrange stays.", emailSubject: "Bangalore to Chikmagalur Cab Enquiry",
  faqs: [
    { question: "What is the advance booking requirement for Chikmagalur?", answer: "Minimum 6 to 12 hours advance booking is required for chauffeur allocation and vehicle preparation. Earlier booking helps for weekend coffee-estate travel." },
    { question: "Which route is used from Bangalore?", answer: "The usual corridor is NH-75 through Hassan. The chauffeur checks live Google Maps traffic at departure and selects the fastest exits and bypasses available for the day." },
    { question: "What luggage configuration should we choose?", answer: "The ideal arrangement is 4 to 5 passengers with up to 4 large trolley suitcases and the 3rd row folded, or 6 passengers with compact cabin bags." },
    { question: "Are Chikmagalur trip prices fixed?", answer: "No. Lucky Travels provides a transparent trip-specific quote with applicable tolls, parking, waiting and other terms explained before confirmation. There are zero hidden charges." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function BangaloreToChikmagalurCabPage() { return <OutstationCorridorPage corridor={corridor} />; }
