import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  slug: "bangalore-to-mysore-cab",
  pageName: "Bangalore to Mysore Cab",
  title: "Bangalore to Mysore Cab | 1 Day Tour Package & Outstation Taxi",
  description: "Book an owner-driven Bangalore to Mysore cab package in a 6+1 Premium Ertiga. Same day 1-day Mysore tour package, sightseeing, Palace visits & transparent round trip fares.",
  eyebrow: "BANGALORE TO MYSORE CAB & 1-DAY TOUR PACKAGE",
  intro: "Book a dedicated 6+1 Premium Maruti Suzuki Ertiga for your Bangalore to Mysore trip. Whether you need a one-way drop or a comprehensive Bangalore to Mysore 1 day tour package covering Mysore Palace, Chamundi Hills, and Brindavan Gardens, enjoy transparent round-trip pricing with verified owner-driver service.",
  heroCaption: "Spacious 6+1 Ertiga outstation taxi cruising the 10-lane Bangalore–Mysore Expressway for family sightseeing.",
  distanceTime: "145 km, 2.5 to 3 hours via NH-275 10-Lane Expressway",
  route: "NH-275 Bengaluru-Mysuru Expressway via Kengeri / NICE Road entry",
  routeDetails: "Direct highway connectivity via the access-controlled Bengaluru-Mysuru Expressway (NH-275). Convenient NICE Road connections for travelers starting from Whitefield, Sarjapur, Electronic City, and South Bangalore. Enjoy smooth 100 km/h cruising past Ramanagara, Channapatna, Maddur, Mandya, and Srirangapatna with zero surface traffic bottlenecks. All expressway toll plaza charges are disclosed upfront.",
  destinationDetails: "Doorstep pickup anywhere in Bengaluru and direct drop or full-day sightseeing across Mysuru: Mysore Palace, Sri Chamundeshwari Temple (Chamundi Hill), Zoo, St. Philomena's Cathedral, and Brindavan Gardens musical fountain. Optional en-route heritage stops at Srirangapatna (Sri Ranganathaswamy Temple and Tipu Sultan Summer Palace).",
  emailSubject: "Bangalore to Mysore Cab Tour Package Enquiry - Lucky Travels",
  faqs: [
    {
      question: "What is included in the Bangalore to Mysore 1 day tour package by cab?",
      answer: "Our same-day Mysore tour package is an all-inclusive chauffeured day trip in a dedicated 6+1 Premium Ertiga. We pick you up from your doorstep by 6:00 AM, cover the NH-275 expressway, provide dedicated transportation across Chamundi Hills, Mysore Palace, and Brindavan Gardens, wait on-site throughout your sightseeing, and return you safely home by 10:00 PM.",
    },
    {
      question: "How is the Bangalore to Mysore outstation taxi fare calculated?",
      answer: "We offer completely transparent quotes with no hidden charges. Our outstation rates account for vehicle hire, professional chauffeur service, fuel, and highway expressway toll taxes. Unlike aggregator apps, your quoted price does not surge midway through your trip or penalize you for traffic delays.",
    },
    {
      question: "Can we customize stops during our Bangalore to Mysore trip?",
      answer: "Yes. Because this is a private owner-driven cab booking, you have full flexibility. Families often include breakfast at Maddur Tiffany's or Kamat Lokaruchi, visit Srirangapatna monuments, and take quick coffee breaks without rush or rigid tour bus itineraries.",
    },
    {
      question: "Why book a 6+1 Ertiga cab instead of a standard sedan or app taxi for Mysore?",
      answer: "A 145 km highway journey requires genuine comfort. Our 6+1 Maruti Suzuki Ertiga provides flexible row seating, dual roof-mounted AC for all passenger rows, and enough boot space for 4 large suitcases (or 6 passengers with day bags). You also avoid sudden app-cancellations or drivers refusing return trips late at night from Mysore.",
    },
    {
      question: "How far in advance should I book my Bangalore to Mysore cab?",
      answer: "We recommend booking at least 6 to 12 hours in advance. For weekend getaways, festival seasons (like Mysore Dasara), and early morning pickups (5:00 AM – 6:00 AM), booking 1 to 2 days ahead guarantees vehicle reservation and chauffeur assignment.",
    },
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