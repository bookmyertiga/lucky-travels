import type { Metadata } from "next";
import OutstationCorridorPage, { type OutstationCorridor } from "@/components/sections/OutstationCorridorPage";
import { SITE } from "@/constants/site";

const corridor: OutstationCorridor = {
  slug: "bangalore-to-ooty-cab",
  pageName: "Bangalore to Ooty Cab",
  title: "Bangalore to Ooty Cab | Nilgiris Tour Package & Ertiga Taxi",
  description: "Book a Bangalore to Ooty cab in a 6+1 Premium Ertiga. Bandipur forest safari route, 36 hairpin bends via Kalhatty/Gudalur & Tamil Nadu permit assistance.",
  eyebrow: "BANGALORE TO OOTY & COONOOR HILL STATION CHAUFFEUR SERVICE",
  intro: "Escape to the Nilgiri hills in a sanitized, climate-controlled 6+1 Premium Maruti Suzuki Ertiga. Experience the scenic Bandipur-Mudumalai tiger corridor, smooth hill climbing, Tamil Nadu commercial border permit handling, and dedicated local sightseeing in Ooty and Coonoor.",
  heroCaption: "Premium 6+1 Ertiga outstation cab ascending the Nilgiri tea hills with Lucky Travels.",
  distanceTime: "280 km, 6.5 to 7.5 hours via Mysore Expressway - Bandipur - Masinagudi/Gudalur",
  route: "NH-275 & NH-766 via Mysuru, Nanjangud, Gundlupet & Bandipur National Park",
  routeDetails: "Travel via the Bengaluru-Mysuru Expressway, continuing past Nanjangud and Gundlupet into Bandipur Tiger Reserve. Note that Bandipur forest gates remain strictly closed from 9:00 PM to 6:00 AM. Hill ascent to Ooty proceeds either via the scenic 36 hairpin bends of Kalhatty (subject to local administration rules) or the gentle, wider Gudalur route. Tamil Nadu border tax permits are arranged seamlessly.",
  destinationDetails: "Doorstep pickup in Bengaluru and dedicated transit to your resort in Ooty, Coonoor, or Kotagiri. Full-day sightseeing including Ooty Botanical Gardens, Ooty Lake, Rose Garden, Doddabetta Peak, Tea Factory, and Coonoor Sim's Park & Dolphin's Nose.",
  emailSubject: "Bangalore to Ooty Cab Package Enquiry - Lucky Travels",
  faqs: [
    {
      question: "What are the Bandipur forest night travel timings on the way to Ooty?",
      answer: "The Bandipur-Mudumalai forest corridor is strictly closed to all vehicular traffic from 9:00 PM to 6:00 AM daily to protect wildlife. We recommend starting from Bangalore by 5:30 AM to 6:00 AM so you reach Bandipur in pleasant daylight and reach your Ooty hotel by 1:30 PM.",
    },
    {
      question: "Are Tamil Nadu state border permit fees included in the taxi quote?",
      answer: "Yes. Commercial tourist cabs registered in Karnataka must obtain an official Tamil Nadu entry permit. Lucky Travels clearly itemizes the TN state border permit, interstate toll charges, and driver day allowances upfront so there are zero surprises at the border checkpost.",
    },
    {
      question: "Is the Ertiga suitable for the steep 36 hairpin bends of Kalhatty Ghat?",
      answer: "Yes. Our Ertiga is commercially maintained with excellent hill brakes, responsive transmission, and fresh tires, driven by seasoned highway chauffeurs experienced with steep Nilgiri mountain ascents and hairpin safety.",
    },
    {
      question: "Can we cover both Ooty and Coonoor during our tour package?",
      answer: "Yes. With a private 3-day or 4-day cab booking, your driver stays with you throughout. You can spend two days exploring Ooty and easily take a day excursion to Coonoor tea estates and Sim's Park at your own family pace.",
    },
  ],
};

export const metadata: Metadata = {
  title: corridor.title,
  description: corridor.description,
  alternates: { canonical: `${SITE.url}/${corridor.slug}` },
  robots: { index: true, follow: true },
};

export default function BangaloreToOotyCabPage() {
  return <OutstationCorridorPage corridor={corridor} />;
}