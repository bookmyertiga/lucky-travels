import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  slug: "bangalore-to-chikmagalur-cab",
  pageName: "Bangalore to Chikmagalur Cab",
  title: "Bangalore to Chikmagalur Cab | 2N/3D Tour Package & Ertiga Taxi",
  description: "Book an owner-driven Bangalore to Chikmagalur cab in a 6+1 Premium Ertiga. Mullayanagiri peak, Baba Budangiri, coffee estates & transparent round-trip pricing.",
  eyebrow: "BANGALORE TO CHIKMAGALUR COFFEE HILLS CHAUFFEUR SERVICE",
  intro: "Journey into the birthplace of Indian coffee in our dedicated 6+1 Premium Maruti Suzuki Ertiga. Discover Karnataka's highest peak at Mullayanagiri, tranquil waterfalls, historic Belur-Halebidu temples, and scenic estate resorts with reliable, polite owner-driver care.",
  heroCaption: "Spacious 6+1 Ertiga taxi cruising through the Western Ghat foothills toward Chikmagalur.",
  distanceTime: "245 km, 4.5 to 5.5 hours via NH-75 (Nelamangala - Hassan - Belur)",
  route: "NH-75 Expressway via Nelamangala, Kunigal, Channarayapatna & Hassan",
  routeDetails: "Departures from Bengaluru take the elevated expressway past Nelamangala onto the smooth 4-lane NH-75. Bypassing Hassan, the route leads through Belur directly into Chikmagalur. The highway is wide, exceptionally well-paved, and offers several popular family food courts (Swathi Delicacy, Paakashala) along the Hassan stretch.",
  destinationDetails: "Direct doorstep drop to your Chikmagalur town hotel or secluded Western Ghat coffee estate homestay. Full support for local sightseeing: Mullayanagiri Peak, Baba Budangiri (Dattatreya Peetha), Hebbe Falls, Jhari Falls, Z Point, and the UNESCO heritage Hoysala temples of Belur and Halebeedu.",
  emailSubject: "Bangalore to Chikmagalur Cab Package Enquiry - Lucky Travels",
  faqs: [
    {
      question: "What is the best itinerary for a Bangalore to Chikmagalur cab package?",
      answer: "A 3-day (2 Nights / 3 Days) package is recommended. Day 1 includes travel via the Hassan highway with an en-route heritage stop at Belur Chennakeshava Temple. Day 2 is dedicated to Mullayanagiri peak, Baba Budangiri, and coffee plantation walks. Day 3 features local waterfalls and Halebidu temple exploration before the smooth drive back to Bangalore.",
    },
    {
      question: "How does the Ertiga perform on the narrow roads leading up to Mullayanagiri?",
      answer: "Mullayanagiri's upper roads are narrow with sharp passing bays. Our Ertiga provides excellent maneuverability, high ground clearance, and strong torque, driven by an experienced owner-chauffeur trained in polite mountain etiquette.",
    },
    {
      question: "Can we include Belur and Halebeedu temples during our journey?",
      answer: "Yes. Belur is directly along the route from Hassan to Chikmagalur, making it an effortless 1 to 2-hour stopover. Halebeedu is just a short 20-minute detour. Because your cab is private, you can customize historical stops without extra hassle.",
    },
    {
      question: "How are round-trip charges and waiting time calculated for Chikmagalur?",
      answer: "We offer completely transparent all-inclusive estimates covering total round-trip distance, driver day allowance, toll expressway fees, and waiting hours at sightseeing points. You get upfront clarity with zero unexpected demands.",
    },
  ],
};

export const metadata: Metadata = {
  title: corridor.title,
  description: corridor.description,
  alternates: { canonical: `${SITE.url}/${corridor.slug}` },
  robots: { index: true, follow: true },
};

export default function BangaloreToChikmagalurCabPage() {
  return <OutstationCorridorPage corridor={corridor} />;
}