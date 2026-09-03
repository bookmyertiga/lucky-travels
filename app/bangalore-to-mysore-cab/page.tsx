import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  slug: "bangalore-to-mysore-cab",
  pageName: "Bangalore to Mysore Cab",
  title: "Bangalore to Mysore Cab | Premium Ertiga - Go Bengaluru",
  description: "Comfortable Bangalore to Mysore cab service by Lucky Travels. Dedicated 6+1 Premium Ertiga, 6-12 hr advance booking, transparent outstation quotes.",
  eyebrow: "BANGALORE TO MYSORE OUTSTATION TRAVEL",
  intro: "Plan a one-way drop, return journey or direct family transport from Bangalore to Mysore in a clean, chauffeur-driven 6+1 Premium Ertiga. Share your chosen hotel, homestay or landmark for a trip-specific quote.",
  heroCaption: "A clean, chauffeur-driven 6+1 Ertiga cruising the Bangalore–Mysore Expressway for smooth intercity travel.",
  distanceTime: "Around 140-150 km, 2.5-3.5 hours",
  route: "NH-275 Bengaluru-Mysuru Expressway or NICE Road",
  routeDetails: "The Bengaluru-Mysuru Expressway is the primary fast corridor, while NICE Road may be considered for the Bengaluru approach. The chauffeur checks live Google Maps traffic at departure and selects the fastest exits and bypasses. Tollway fares are explained in the transparent quote.",
  destinationDetails: "Travel directly to a Mysore hotel, homestay, residence or landmark chosen by the customer. Mention any planned stop, exact address and return timing before confirmation.",
  emailSubject: "Bangalore to Mysore Cab Enquiry",
  faqs: [
    { question: "How far in advance should I book Bangalore to Mysore?", answer: "Book at least 6 to 12 hours ahead for chauffeur allocation and vehicle preparation. Weekend, holiday and early-morning trips benefit from earlier notice." },
    { question: "Will you choose NH-275 or NICE Road?", answer: "The chauffeur monitors live Google Maps traffic at departure and selects the fastest practical highway exits and bypasses. Applicable tollway fares are included transparently in the trip-specific quote." },
    { question: "How much luggage fits in the Premium Ertiga?", answer: "The ideal arrangement is 4 to 5 passengers with up to 4 large trolley suitcases when the 3rd row is folded, or 6 passengers with compact cabin bags." },
    { question: "Do you provide Mysore tour packages or hotels?", answer: "No. Lucky Travels provides pure door-to-door transport to your chosen hotel, homestay or landmark. We do not provide packaged tours or stay bookings, and there are no fixed prices." },
  ],
};

export const metadata: Metadata = {
  title: corridor.title,
  description: corridor.description,
  alternates: { canonical: `${SITE.url}/${corridor.slug}` },
  robots: { index: true, follow: true },
};

export default function BangaloreToMysoreCabPage() {
  return <OutstationCorridorPage corridor={corridor} />;
}
