import type { Metadata } from "next";
import AirportCorridorPage, { type AirportCorridor } from "@/components/sections/AirportCorridorPage";
import { SITE } from "@/constants/site";

const corridor: AirportCorridor = {
  slug: "airport-taxi-jp-nagar",
  suburb: "JP Nagar and South Bengaluru",
  pageName: "JP Nagar to Bangalore Airport Taxi",
  title: "JP Nagar to Bangalore Airport Taxi | BLR Ertiga Cab - Go Bengaluru",
  description:
    "Book a JP Nagar to Bangalore airport taxi and BLR airport cab booking in a 2024-2026 factory S-CNG Ertiga. Scheduled coverage across JP Nagar Phases 1-9, Sarakki and Dollar Layout with WhatsApp Price-Lock.",
  eyebrow: "JP NAGAR AND JAYANAGAR TO BLR",
  intro:
    "Schedule a dedicated 6+1 Premium Ertiga from JP Nagar to Kempegowda International Airport (BLR T1 or T2). Doorstep coverage includes JP Nagar Phases 1 to 9, Sarakki and Dollar Layout, with routing selected for the pickup point and live traffic. For early morning departures, reserve your vehicle and reporting time in advance.",
  distance: "Around 46 km",
  route: "Bannerghatta Road or NICE Road; Silk Board / Hosur Road elevated corridor to ORR and Bellary Road elevated highway",
  nonPeak: "65-75 minutes",
  peak: "100-125 minutes",
  areas: "JP Nagar Phases 1 to 9, Sarakki, Dollar Layout and Bannerghatta Road",
  routeDetails:
    "From JP Nagar, the chauffeur checks traffic before choosing Bannerghatta Road and NICE Road or the Silk Board / Hosur Road elevated corridor. The selected route connects toward ORR and the Bellary Road elevated highway. Typical non-peak travel is 65-75 minutes and peak travel is 100-125 minutes; allow extra time for airport check-in and rain or road incidents.",
  earlyMorningGuidance:
    "Guaranteed early-morning airport departures start with an advance-confirmed booking. Share your flight time, assigned terminal and pickup point at least 6 hours ahead so the owner-driver, vehicle and doorstep reporting time can be confirmed before the night of travel.",
  pickupDropNotes:
    "BLR operates Terminal 1 and Terminal 2. Confirm your airline-assigned terminal before leaving JP Nagar and coordinate the current legal arrival meeting bay or departure drop-off point directly with the chauffeur. Follow airport signage if curbside instructions change.",
  terminalGuide:
    "Confirm the airline-assigned T1 or T2 before leaving South Bengaluru. The chauffeur coordinates the current legal curbside point or arrival meeting bay by WhatsApp; follow BLR's latest signage.",
  emailSubject: "JP Nagar Airport Taxi Enquiry",
  faqs: [
    {
      question: "How early should I book a JP Nagar airport taxi for a morning flight?",
      answer:
        "Book at least 6 hours in advance and share your exact pickup address, flight time and T1/T2 terminal. The vehicle and verified owner-driver are assigned ahead of time for the confirmed doorstep departure.",
    },
    {
      question: "Which routes connect JP Nagar to Bangalore Airport?",
      answer:
        "Depending on pickup location and live traffic, the chauffeur chooses Bannerghatta Road and NICE Road or the Silk Board / Hosur Road elevated corridor toward ORR and the Bellary Road elevated highway. Allow 65-75 minutes off-peak and 100-125 minutes in peak conditions, plus check-in time.",
    },
    {
      question: "Does the Ertiga offer more luggage room than a Dzire or Etios?",
      answer:
        "Yes. With the 3rd row folded, its flat boot holds up to four large 28-inch check-in suitcases without luggage spilling onto passenger seats. The 2024-2026 factory-fitted S-CNG Ertiga adds knee-level rear-console AC vents, plush seating and generous legroom.",
    },
    {
      question: "How do you ensure an early morning airport taxi from JP Nagar arrives on time?",
      answer:
        "The advance-confirmed trip is assigned to a verified owner-driver with the doorstep reporting time shared before travel. Direct booking avoids app-based Ola or Uber matching, driver-initiated cancellations, and peak or rain surge multipliers.",
    },
    {
      question: "How is the JP Nagar BLR airport cab fare locked?",
      answer:
        "Share pickup, date, time, terminal, passengers and luggage on WhatsApp. Lucky Travels provides an upfront trip-specific Price-Lock and clarifies tolls and parking before confirming the booking.",
    },
  ],
};
export const metadata: Metadata = { title: corridor.title, description: corridor.description, alternates: { canonical: `${SITE.url}/${corridor.slug}` }, robots: { index: true, follow: true } };
export default function JpNagarAirportTaxiPage() { return <AirportCorridorPage corridor={corridor} />; }
