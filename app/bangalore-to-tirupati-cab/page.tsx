import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  slug: "bangalore-to-tirupati-cab",
  pageName: "Bangalore to Tirupati Cab",
  title: "Bangalore to Tirupati Cab | 1 Day Darshan Package & Ertiga Taxi",
  description: "Book a dedicated Bangalore to Tirupati cab package in a 6+1 Premium Ertiga. Same-day & 2-day Tirumala temple darshan, AP border permit assistance & transparent fares.",
  eyebrow: "BANGALORE TO TIRUPATI & TIRUMALA PILGRIMAGE CAB",
  intro: "Plan your sacred Tirumala Balaji darshan with Go Bengaluru by Lucky Travels in a dedicated 6+1 Premium Maruti Suzuki Ertiga. Whether you need an early-morning 3:30 AM departure for a same-day 1-day package or a relaxed 2-day pilgrimage, enjoy verified owner-driver reliability, AP border permit assistance, and guaranteed on-site waiting.",
  heroCaption: "Sanitized 6+1 Ertiga outstation cab ready for your family Bangalore to Tirupati Balaji pilgrimage.",
  distanceTime: "250 km, 4.5 to 5.5 hours via NH-75 & NH-140 (Kolar - Chittoor - Tirupati)",
  route: "NH-75 & NH-140 via Hoskote, Kolar, Mulbagal, Palamaner & Chittoor",
  routeDetails: "Departures from Bengaluru exit smoothly via KR Puram / Hoskote onto the 4-lane NH-75 expressway past Kolar and Mulbagal. The route crosses into Andhra Pradesh at Nangali/Palamaner, navigating the newly improved 4-lane Chittoor bypass (NH-140) directly into Tirupati foothills (Alipiri Checkpoint). All highway tolls and Andhra Pradesh commercial state border tax permits are explained transparently upfront.",
  destinationDetails: "Doorstep pickup anywhere in Bengaluru and direct transport to Tirupati foothills, Alipiri Checkpost, Tirumala ghat road entry, Padmavathi Temple (Tiruchanur), Sri Govindaraja Swamy Temple, and Srinivasam complex. Chauffeur remains stationed on-site with your vehicle throughout your darshan queue waiting hours.",
  emailSubject: "Bangalore to Tirupati Cab Darshan Package Enquiry - Lucky Travels",
  faqs: [
    {
      question: "What is the recommended start time for a Bangalore to Tirupati 1-day trip by cab?",
      answer: "We strongly recommend starting between 3:00 AM and 4:00 AM. This avoids heavy morning highway bottlenecks at Hoskote, allows a comfortable breakfast stop at Mulbagal, and reaches Tirupati foothills by 8:30 AM to 9:00 AM, giving your family ample time for SED/VIP darshan and laddu collection before the return journey.",
    },
    {
      question: "Are Andhra Pradesh state border taxes and permits included in the cab quote?",
      answer: "Commercial cabs entering Andhra Pradesh from Karnataka require an official interstate border permit. Lucky Travels handles AP state permit taxes, toll plazas, and driver allowances transparently in your initial outstation quotation so you never face unexpected checkpoint delays or extortion.",
    },
    {
      question: "Can your Ertiga cab climb the Tirumala Ghat Road up to the main temple?",
      answer: "Yes. Our commercial Maruti Suzuki Ertiga is fully certified, mechanically inspected, and authorized to drive up both the uphill and downhill Tirumala Ghat roads via the Alipiri toll gate, dropping your family directly at your allotted cottage or the main darshan queue gates.",
    },
    {
      question: "How does chauffeur waiting work during prolonged darshan queues?",
      answer: "Tirumala darshan queues often extend between 3 to 8 hours depending on rush. Your assigned Lucky Travels chauffeur remains stationed on-site in the authorized Tirumala parking bays with your phone contact active, ensuring your vehicle and luggage are safe and ready for your return without rush.",
    },
    {
      question: "How much luggage and how many passengers fit comfortably for Tirupati?",
      answer: "Our 6+1 Ertiga comfortably seats up to 6 adults with traditional duffels and day bags, or 4 to 5 family members with 3 to 4 large suitcases when the rear third-row seat is folded. Independent row AC vents keep elderly passengers and children fresh across the 5-hour drive.",
    },
  ],
};

export const metadata: Metadata = {
  title: corridor.title,
  description: corridor.description,
  alternates: { canonical: `${SITE.url}/${corridor.slug}` },
  robots: { index: true, follow: true },
};

export default function BangaloreToTirupatiCabPage() {
  return <OutstationCorridorPage corridor={corridor} />;
}