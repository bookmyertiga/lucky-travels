export const SITE = {
  name: "Lucky Travels",
  brand: "Go Bengaluru",
  tagline: "Go Bengaluru. Premium Ertiga Airport Taxi.",
  phone: "9886814344",
  whatsapp: "919886814344",
  email: "bookmyertiga@gmail.com",
  domain: "gobengaluru.in",
  url: "https://gobengaluru.in",
  address: "No. 9, 4th Cross, Airview Colony, Konena Agrahara, HAL, Bengaluru 560017",
  locality: "Bengaluru",
  region: "Karnataka",
  postalCode: "560017",
  country: "IN",
};

export type Service = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  short: string;
  intent: string;
  eyebrow: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "airport-transfers",
    name: "Bengaluru Airport Transfers",
    seoTitle: "Bengaluru Airport Taxi, Pickup & Drop | Premium Ertiga",
    description: "Book a Premium Ertiga for Bengaluru airport taxi, Kempegowda Airport pickup or airport drop. Direct call and WhatsApp booking with Lucky Travels.",
    short: "Premium Ertiga airport pickup and drop across Bengaluru.",
    intent: "Bengaluru airport taxi, Bangalore airport cab, airport pickup and airport drop",
    eyebrow: "Kempegowda Airport Pickup & Drop",
    intro: "Pre-book a clean Premium Ertiga for airport pickup or airport drop between Kempegowda International Airport and locations across Bengaluru.",
    paragraphs: [
      "Lucky Travels provides dedicated Premium Ertiga airport transfers to and from Kempegowda International Airport (BLR). The service is suitable for passengers searching for a Bengaluru airport taxi, Bangalore airport cab, airport pickup, airport drop or a comfortable family airport transfer.",
      "We serve Bengaluru neighbourhoods and business districts including Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Marathahalli, Bellandur, Hebbal, Yelahanka, Jayanagar, JP Nagar, MG Road and nearby areas. Share your pickup address, flight timing and luggage requirements by phone or WhatsApp for direct confirmation.",
      "Every confirmed ride is provided only in a Premium Maruti Suzuki Ertiga. This gives travellers predictable seating comfort, air-conditioned interiors and practical luggage space without being assigned a different vehicle category at the last minute.",
      "For airport pickups, provide the flight number and arrival time so the trip can be planned around the expected landing. For airport drops, allow sufficient travel time for Bengaluru traffic and airline check-in requirements.",
    ],
    bullets: [
      "Kempegowda International Airport pickup",
      "Airport drop from Bengaluru localities",
      "Premium Ertiga vehicle only",
      "Suitable for families, guests and luggage",
      "Direct call and WhatsApp booking",
      "Flight details accepted for pickup planning",
      "Clean, air-conditioned interiors",
      "One-way airport transfer booking",
    ],
    faq: [
      { question: "Do you provide both airport pickup and airport drop?", answer: "Yes. Lucky Travels provides Premium Ertiga pickup from Kempegowda International Airport and airport drops from locations across Bengaluru." },
      { question: "Which Bengaluru areas do you serve for airport transfers?", answer: "We serve major Bengaluru areas including Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Marathahalli, Bellandur, Hebbal, Yelahanka and surrounding localities." },
      { question: "Can I share my flight number for an airport pickup?", answer: "Yes. Share the flight number, arrival time and passenger details on WhatsApp so the pickup can be planned appropriately." },
      { question: "Which vehicle will be provided?", answer: "Lucky Travels exclusively provides a Premium Maruti Suzuki Ertiga for confirmed bookings." },
    ],
  },
  {
    slug: "rental-packages",
    name: "Hourly & Daily Ertiga Rental Packages",
    seoTitle: "Hourly & Daily Ertiga Rental in Bengaluru | Local Packages",
    description: "Book hourly or daily Premium Ertiga rental packages in Bengaluru for meetings, sightseeing, shopping, events and multiple city stops.",
    short: "Flexible Premium Ertiga packages for city travel, meetings and multiple stops.",
    intent: "hourly Ertiga rental, daily taxi package, local cab package Bengaluru",
    eyebrow: "Local Bengaluru Rental Packages",
    intro: "Choose a Premium Ertiga hourly or daily rental package for local Bengaluru travel with multiple stops and waiting time.",
    paragraphs: [
      "Hourly and daily Ertiga rental packages are useful when your Bengaluru journey includes several destinations, waiting periods or a schedule that cannot be handled conveniently as separate point-to-point rides.",
      "Common uses include business meetings, shopping, hospital visits, events, local sightseeing, guest transportation, family functions and full-day city travel. Tell us the approximate duration, pickup point and planned stops so the suitable package can be discussed before confirmation.",
      "Lucky Travels supplies only a Premium Maruti Suzuki Ertiga. The vehicle offers comfortable seating for families and groups, practical luggage room and air-conditioned travel for Bengaluru city journeys.",
      "Package inclusions and additional charges can vary by duration, distance, parking and toll requirements. These details are confirmed directly through phone or WhatsApp before the booking is finalised.",
    ],
    bullets: [
      "Hourly Ertiga rental in Bengaluru",
      "Full-day and daily rental options",
      "Multiple stops within the city",
      "Business meetings and corporate travel",
      "Shopping, events and family functions",
      "Local sightseeing and guest travel",
      "Premium Ertiga vehicle only",
      "Direct package confirmation on WhatsApp",
    ],
    faq: [
      { question: "What is an hourly rental package?", answer: "An hourly package keeps the Premium Ertiga available for an agreed duration and distance, making it suitable for multiple stops and waiting time." },
      { question: "Can I book the Ertiga for a full day?", answer: "Yes. Daily and full-day packages can be discussed based on your pickup point, expected duration and route." },
      { question: "Are parking and toll charges included?", answer: "Inclusions depend on the selected package and route. Lucky Travels confirms parking, toll and any additional charges before booking." },
      { question: "Can I use the rental for meetings and city sightseeing?", answer: "Yes. The service can be booked for meetings, shopping, events, local sightseeing and other multi-stop Bengaluru travel." },
    ],
  },
  {
    slug: "outstation-packages",
    name: "Outstation Ertiga Taxi Packages",
    seoTitle: "Outstation Ertiga Taxi from Bengaluru | One-Way & Round Trip",
    description: "Book a Premium Ertiga outstation taxi from Bengaluru for one-way trips, round trips, family travel and multi-day journeys.",
    short: "Comfortable one-way and round-trip Premium Ertiga travel from Bengaluru.",
    intent: "outstation Ertiga taxi, outstation cab Bengaluru, one-way and round-trip taxi",
    eyebrow: "Travel Beyond Bengaluru",
    intro: "Book a Premium Ertiga from Bengaluru for comfortable one-way, round-trip and multi-day outstation journeys.",
    paragraphs: [
      "Lucky Travels provides Premium Ertiga outstation taxi packages from Bengaluru for travellers planning one-way trips, return journeys or multi-day travel. The service is well suited to families, small groups, business passengers and guests carrying luggage.",
      "Popular travel requirements include journeys from Bengaluru to Mysuru, Coorg, Chikkamagaluru, Ooty, Wayanad, Tirupati and other destinations in Karnataka and neighbouring states. Availability and trip terms are confirmed for each route individually.",
      "Before confirming an outstation booking, share the destination, travel dates, number of passengers, pickup location and whether the journey is one-way or round trip. Lucky Travels will explain the applicable package, kilometre limits and trip-related charges.",
      "Every confirmed outstation ride is served in a Premium Maruti Suzuki Ertiga, providing consistent vehicle quality, air-conditioned comfort and useful luggage capacity for longer road journeys.",
    ],
    bullets: [
      "One-way outstation taxi from Bengaluru",
      "Round-trip Ertiga packages",
      "Multi-day family and leisure travel",
      "Business and guest transportation",
      "Premium Ertiga vehicle only",
      "Air-conditioned long-distance travel",
      "Route and trip terms confirmed in advance",
      "Direct call and WhatsApp booking",
    ],
    faq: [
      { question: "Do you provide one-way outstation trips?", answer: "One-way availability depends on the destination and date. Share the route on WhatsApp for confirmation." },
      { question: "Can I book a round trip for multiple days?", answer: "Yes. Round-trip and multi-day travel can be arranged based on vehicle availability and the planned itinerary." },
      { question: "Which outstation destinations do you cover?", answer: "Trips can be planned from Bengaluru to destinations across Karnataka and neighbouring states, subject to route and date availability." },
      { question: "What details are needed for a quote?", answer: "Share the pickup point, destination, travel dates, one-way or round-trip requirement, passenger count and approximate itinerary." },
    ],
  },
];
