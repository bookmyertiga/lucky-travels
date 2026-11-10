export type OutstationRoute = {
  slug: string;
  destination: string;
  pageName: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  distance: string;
  driveTime: string;
  route: string;
  routeDetails: string;
  highlightTitle: string;
  highlights: { title: string; detail: string }[];
  scheduleTitle: string;
  schedule: { time: string; title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  theme: "amber" | "emerald" | "mist";
};

export const outstationRoutes: Record<string, OutstationRoute> = {
  "bangalore-to-mysore-cab": {
    slug: "bangalore-to-mysore-cab",
    destination: "Mysore",
    pageName: "Bangalore to Mysore Cab",
    title: "Bangalore to Mysore Cab | 10-Lane NH-275 Ertiga Tour",
    description:
      "Book a dedicated Ertiga from Bangalore to Mysore via the 10-lane NH-275 Expressway. Plan palace visits, Bidadi Thatte Idli and Maddur breakfast stops with a clear, itemized quote.",
    eyebrow: "ROYAL HERITAGE • 10-LANE NH-275",
    intro:
      "Take a dedicated Premium Ertiga from Bengaluru to Mysuru for a palace day trip or a relaxed multi-day heritage stay. The access-controlled NH-275 corridor offers a steady highway drive when you follow posted limits, use FASTag toll lanes and plan sensible breakfast and sightseeing breaks.",
    image: "/images/gallery/bangalore-to-mysore-expressway-ertiga-cab.jpg",
    imageAlt: "Premium Ertiga prepared for a Bangalore to Mysore Expressway trip",
    distance: "Approximately 145 km to Mysore",
    driveTime: "Around 2.5–3.5 hours depending on city pickup and traffic",
    route: "Bengaluru → NH-275 Expressway → Mandya → Mysuru",
    routeDetails:
      "The 10-lane Bengaluru–Mysuru Expressway is access-controlled. Observe the posted speed limit: radar enforcement applies, with 100 km/h as the stated maximum. Two-wheelers and autos are not permitted on the expressway. The Kaniminike and Sheshagirihalli toll gates accept FASTag and deductions are charged to the vehicle tag; toll handling is itemized in the trip quote so the customer knows the agreed basis.",
    highlightTitle: "Expressway cruise and heritage day plan",
    highlights: [
      { title: "Highway discipline", detail: "Keep within the posted limit (maximum 100 km/h), stay in the correct lane and respect access restrictions; no two-wheelers or autos." },
      { title: "Toll transparency", detail: "Kaniminike and Sheshagirihalli FASTag deductions are identified in your quote and reconciled clearly." },
      { title: "Breakfast stops", detail: "Plan Bidadi Thatte Idli, Maddur Tiffany’s / Maddur Vada or a Ramanagara coffee break, subject to your departure and opening hours." },
      { title: "Smooth cruise", detail: "A stable, well-maintained Ertiga and a measured driving pace make the long expressway leg more comfortable for the family." },
    ],
    scheduleTitle: "Suggested Mysore heritage tour schedule",
    schedule: [
      { time: "Early start", title: "Bengaluru pickup & breakfast", detail: "Begin from your confirmed address; pause at Bidadi, Ramanagara or Maddur according to the agreed itinerary." },
      { time: "Late morning", title: "Srirangapatna or Mysore arrival", detail: "Choose a heritage stop en route or proceed directly to Mysuru. Sightseeing order can be adjusted to opening hours." },
      { time: "Afternoon", title: "Palace, museum & city landmarks", detail: "Plan Mysore Palace and other selected attractions with realistic visit time and parking." },
      { time: "Evening", title: "Return or overnight stay", detail: "For a same-day return, agree on the departure time in advance; multi-day tours keep the driver with the trip as quoted." },
    ],
    faqs: [
      { question: "How are the Mysore Expressway tolls charged?", answer: "Kaniminike and Sheshagirihalli tolls are collected through FASTag auto-deductions. Your written WhatsApp quote states whether the tolls are included or billed at actuals; no toll amount is assumed here." },
      { question: "What is the speed limit on the NH-275 Expressway?", answer: "Follow posted signs and the current legal limit at all times. The route planning guidance uses 100 km/h as the maximum, with radar enforcement; two-wheelers and autos are not allowed on the access-controlled expressway." },
      { question: "Can I bring a pet on the Bangalore to Mysore trip?", answer: "Pet travel must be requested before booking. We confirm vehicle availability, safe restraint and any cleaning or trip conditions before accepting the booking." },
      { question: "Are highway breakfast stops available?", answer: "Yes. Bidadi Thatte Idli, Maddur Tiffany’s / Maddur Vada and Ramanagara coffee stops can be considered. Stop timing depends on your departure, opening hours and trip schedule." },
      { question: "What if our Mysore trip continues into the hills?", answer: "Tell us if the itinerary continues toward Coorg or another hill destination. The driver plans a measured ghat pace with suitable gears and smooth braking; route and overnight allowances are clarified in the quote." },
      { question: "Do forest checkpost timings affect a Mysore-only trip?", answer: "The standard NH-275 Mysore route does not use the Bandipur Forest Checkpost. If you extend the journey to Ooty through Bandipur, its stated 9:00 PM–6:00 AM closure applies; check current official notices before travel." },
    ],
    theme: "amber",
  },
  "bangalore-to-coorg-cab": {
    slug: "bangalore-to-coorg-cab",
    destination: "Coorg",
    pageName: "Bangalore to Coorg Cab",
    title: "Bangalore to Coorg Cab | Premium Ertiga Coffee Country Drive",
    description:
      "Plan a Bangalore to Coorg Ertiga cab via the Mysore Expressway, Hunsur and Kushalnagar. Get practical Western Ghats hill-driving, estate-access and luggage advice.",
    eyebrow: "COFFEE COUNTRY • WESTERN GHATS",
    intro:
      "Travel from Bengaluru to Madikeri, Kushalnagar or a Coorg coffee-estate stay in a dedicated Premium Ertiga. The practical route uses the Mysore Expressway bypass, then continues via Hunsur and Kushalnagar toward Madikeri; the final estate approach and road surface should be confirmed with your host before departure.",
    image: "/images/gallery/coorg-coffee-estate-ertiga-cab.jpg",
    imageAlt: "Premium Ertiga at a Coorg coffee plantation",
    distance: "Approximately 250–270 km to Madikeri",
    driveTime: "Around 5.5–6.5 hours depending on stops and destination",
    route: "NH-275 Mysore Expressway bypass → Hunsur → Kushalnagar → Madikeri",
    routeDetails:
      "Use the Mysore Expressway bypass to avoid unnecessary city-centre routing, then proceed via Hunsur and Kushalnagar toward Madikeri. Western Ghats gradients, rain, fog and narrow village resort approaches call for slower cornering and careful clearance checks. The Ertiga’s stated 185 mm unladen ground clearance can help with uneven paved approaches; it does not make the vehicle suitable for rocky off-road trails.",
    highlightTitle: "Western Ghats access, comfort and estate planning",
    highlights: [
      { title: "Route sequence", detail: "Mysore Expressway bypass → Hunsur → Kushalnagar → Madikeri; verify the exact homestay location and current access road." },
      { title: "Hill approach", detail: "Take gradients and bends at a controlled speed, use appropriate lower gears and avoid abrupt braking on descents." },
      { title: "Ground clearance", detail: "185 mm unladen clearance helps on uneven village and resort approaches; confirm surface and avoid severe rocky tracks." },
      { title: "Sedan overhang risk", detail: "A low sedan boot overhang can scrape on steep or broken resort entrances; an Ertiga’s clearance is more practical, but not a promise of off-road access." },
    ],
    scheduleTitle: "A measured Coorg coffee-country itinerary",
    schedule: [
      { time: "Day 1", title: "Bengaluru to Kushalnagar / Madikeri", detail: "Take meal and rest stops as needed; confirm estate access instructions and check-in timing with your host." },
      { time: "Day 2", title: "Madikeri and nearby viewpoints", detail: "Arrange Abbey Falls, Raja’s Seat or local heritage stops around weather, opening hours and parking." },
      { time: "Day 3", title: "Estate visit and return", detail: "Allow daylight for the ghat descent and plan the return pickup time with the driver." },
    ],
    faqs: [
      { question: "Which route is recommended from Bangalore to Madikeri?", answer: "A practical route is the NH-275 Mysore Expressway bypass, then Hunsur and Kushalnagar toward Madikeri. Exact routing and travel time depend on your pickup, traffic and final homestay location." },
      { question: "Can the Ertiga reach a remote coffee estate homestay?", answer: "Share the host’s access directions and road-surface details before booking. The Ertiga’s 185 mm unladen clearance is useful on many uneven paved approaches, but steep, rocky or restricted off-road sections may require a local vehicle." },
      { question: "How do you drive the Western Ghats safely?", answer: "Use a controlled speed, appropriate gears on climbs and descents, smooth braking and extra distance in rain or fog. The chauffeur adjusts pace to visibility, road condition and passenger comfort." },
      { question: "Can I travel with a pet to Coorg?", answer: "Request pet travel before booking so vehicle availability, safe restraint and homestay rules can be checked. Pet travel is confirmed individually; do not assume every estate or vehicle accepts pets." },
      { question: "Are tolls and driver allowances included in the Coorg fare?", answer: "The quote itemizes the per-kilometre basis, driver day allowance, any overnight allowance and tolls or parking. These are agreed on WhatsApp before the trip; the fare is not a fixed published tariff." },
      { question: "Does the Bandipur forest curfew affect the usual Coorg route?", answer: "The described Mysore–Hunsur–Kushalnagar route to Madikeri does not normally use the Bandipur crossing. If your itinerary is changed to include Ooty or Bandipur, confirm the official 9:00 PM–6:00 AM closure and plan the crossing in daylight." },
    ],
    theme: "emerald",
  },
  "bangalore-to-ooty-cab": {
    slug: "bangalore-to-ooty-cab",
    destination: "Ooty",
    pageName: "Bangalore to Ooty Cab",
    title: "Bangalore to Ooty Cab | Bandipur, Nilgiri Ghats & Ertiga",
    description:
      "Plan a Bangalore to Ooty Ertiga cab around Bandipur's 9 PM–6 AM forest closure, Tamil Nadu entry requirements and the Kalhatty or Gudalur hill route.",
    eyebrow: "NILGIRI HILLS • BANDIPUR CROSSING",
    intro:
      "A Bangalore–Ooty journey needs a daylight plan for Bandipur and the Nilgiri climb. The Bandipur Forest Checkpost corridor is closed to vehicles from 9:00 PM to 6:00 AM; plan to leave Bengaluru before 1:00 PM and confirm the current restriction before travel so you are not stranded at Gundlupet near curfew.",
    image: "/images/gallery/ooty-tea-gardens-ertiga-cab.jpg",
    imageAlt: "Premium Ertiga ready for the Bangalore to Ooty hill route",
    distance: "Approximately 280 km to Ooty",
    driveTime: "Around 6.5–8 hours depending on stops and hill traffic",
    route: "NH-275 Mysore Expressway → Nanjangud → Gundlupet → Bandipur → Nilgiris",
    routeDetails:
      "Pass through Gundlupet and the Bandipur forest corridor only within permitted hours. The forest checkpost is strictly closed from 9:00 PM to 6:00 AM; a Bengaluru departure before 1:00 PM is essential planning guidance to leave time for traffic and stops, not a guarantee of passage. From the Nilgiri side, Kalhatty has 36 hairpin bends and may have vehicle-specific access restrictions; the Gudalur route is a gentler scenic alternative. Confirm current local rules and Tamil Nadu entry requirements before departure.",
    highlightTitle: "Forest checkpost and Nilgiri climb plan",
    highlights: [
      { title: "Bandipur timing", detail: "Checkpost closed 9:00 PM–6:00 AM. Leave Bengaluru before 1:00 PM and allow for delays; verify current forest notices before setting out." },
      { title: "Kalhatty route", detail: "36 hairpin bends require low speed, a safe following distance, correct gears and no overtaking on blind curves. Confirm whether the route is open to your vehicle." },
      { title: "Gudalur alternative", detail: "A scenic, generally gentler route option; choose after checking current road conditions, traffic and destination access." },
      { title: "Hill-climb performance", detail: "A well-maintained factory S-CNG Ertiga, appropriate gear choice and steady throttle support a controlled climb; safe speed matters more than rushing." },
      { title: "Border formalities", detail: "Carry vehicle and driver documents; confirm current Tamil Nadu permit, entry and green-tax requirements and itemization before travel." },
    ],
    scheduleTitle: "Daylight-first Ooty departure plan",
    schedule: [
      { time: "Before 1:00 PM", title: "Depart Bengaluru", detail: "An early departure protects the Bandipur crossing window and leaves contingency for traffic and meal stops." },
      { time: "Afternoon", title: "Gundlupet and forest checkpost", detail: "Reach the checkpost within permitted hours. If delays threaten curfew, follow official instructions; do not attempt to enter after closure." },
      { time: "Daylight", title: "Choose Kalhatty or Gudalur", detail: "Confirm the current route access rules and hill conditions before the ascent." },
      { time: "Arrival", title: "Tamil Nadu entry & Ooty check-in", detail: "Keep permit/vehicle documents available and confirm green-tax or other payable entry items from current official guidance." },
    ],
    faqs: [
      { question: "When is the Bandipur Forest Checkpost closed?", answer: "The stated restriction closes the corridor from 9:00 PM to 6:00 AM. Plan a Bengaluru departure before 1:00 PM to allow for traffic and stops, and verify current official notices. Never attempt to pass a closed checkpost." },
      { question: "Should we take the Kalhatty or Gudalur route to Ooty?", answer: "Kalhatty has 36 hairpin bends and requires cautious, low-speed driving; access may be restricted for some vehicles. Gudalur is a scenic alternative. Confirm current local permission and road conditions before choosing." },
      { question: "How are Tamil Nadu permit and green-tax charges handled?", answer: "Vehicle entry requirements, permits and any green tax are confirmed against current rules and itemized in the trip quote. Ask what is included and what is payable at the border before confirming." },
      { question: "Can I bring a pet to Ooty in the Ertiga?", answer: "Request pet travel in advance. We confirm vehicle availability, safe restraint and accommodation rules before accepting; pet access is not assumed." },
      { question: "How should an Ertiga be driven on the Nilgiri climb?", answer: "Use low speeds, appropriate gears, smooth inputs and safe following distance. On the 36 Kalhatty bends, avoid blind-curve overtakes and pause only at safe designated locations; use the Gudalur option if current conditions or permissions favor it." },
    ],
    theme: "mist",
  },
};
