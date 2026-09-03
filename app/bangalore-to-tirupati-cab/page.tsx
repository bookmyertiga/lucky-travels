import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  heroCaption: "Punctual, chauffeur-driven 6+1 Ertiga transport scheduled around your confirmed Tirupati Balaji Darshan timings.",
  slug: "bangalore-to-tirupati-cab", pageName: "Bangalore to Tirupati Cab", title: "Bangalore to Tirupati Cab | Dedicated 6+1 Ertiga - Go Bengaluru", description: "Scheduled Bangalore to Tirupati Balaji Darshan taxi service by Lucky Travels. Punctual 6+1 Ertiga cabs, 6-12 hr advance notice, transparent interstate pricing.", eyebrow: "BANGALORE TO TIRUPATI BALAJI DARSHAN", intro: "Schedule a dedicated chauffeur-driven 6+1 Premium Ertiga from Bangalore to Tirupati. Plan departure around your TTD darshan slot and travel directly to a customer-chosen hotel, landmark or temple-area destination.", distanceTime: "Around 250 km, 4.5-5.5 hours", route: "Old Madras Road, Kolar and Chittoor", routeDetails: "The route generally follows Old Madras Road through Kolar and Chittoor. Departure timing can be aligned with the confirmed TTD darshan slot, while the chauffeur checks live Google Maps traffic to select the fastest exits and bypasses at departure.", destinationDetails: "Share the exact Tirupati hotel, guesthouse, landmark or agreed drop point. This is direct transport for the chosen itinerary, not a packaged darshan tour or accommodation booking.", permitDetails: "Andhra Pradesh state border permit and interstate trip requirements are discussed transparently before confirmation, including any applicable toll, parking or documentation terms.", emailSubject: "Bangalore to Tirupati Cab Enquiry",
  faqs: [
    { question: "Can the departure be aligned with a TTD darshan slot?", answer: "Yes. Share the confirmed TTD darshan date and slot so a practical departure time can be discussed around the expected route duration and traffic." },
    { question: "How early must I book the Tirupati taxi?", answer: "Minimum 6 to 12 hours advance notice is required for chauffeur allocation and vehicle preparation. Earlier booking is recommended for darshan dates, weekends and festivals." },
    { question: "How are AP border permit terms handled?", answer: "Applicable Andhra Pradesh state border permit and interstate requirements are discussed transparently before confirmation, along with relevant toll, parking and documentation terms." },
    { question: "How much luggage fits in the Tirupati Ertiga?", answer: "Four to five passengers can carry up to four large trolley suitcases with the 3rd row folded. Six passengers should carry compact cabin bags. Quotes are trip-specific, not fixed." },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function BangaloreToTirupatiCabPage() { return <OutstationCorridorPage corridor={corridor} />; }
