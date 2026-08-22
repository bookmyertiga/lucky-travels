export type RichTextNode =
  | { type: "text"; text: string }
  | { type: "bold"; children: RichTextNode[] }
  | { type: "link"; href: string; text?: string; children: RichTextNode[] };

export type BlogInlineImage = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  href?: string;
};

export type BlogBlock =
  | { type: "paragraph"; content: RichTextNode[] }
  | { type: "h2"; content: RichTextNode[] }
  | { type: "h3"; content: RichTextNode[] }
  | { type: "ul"; items: RichTextNode[][] }
  | { type: "ol"; items: RichTextNode[][] }
  | { type: "blockquote"; content: RichTextNode[] }
  | BlogInlineImage;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  seoDescription?: string;
  date: string;
  dateModified?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  seoTitle?: string;
  author?: string;
  authorUrl?: string;
  authorType?: "Person" | "Organization";
  authorRole?: string;
  content: BlogBlock[];
};

const text = (value: string): RichTextNode[] => [{ type: "text", text: value }];
const bold = (value: string): RichTextNode[] => [{ type: "bold", children: text(value) }];
const link = (href: string, label: string): RichTextNode[] => [{ type: "link", href, text: label, children: text(label) }];

export const blogPosts: BlogPost[] = [
  {
    slug: "premium-ertiga-for-bengaluru-airport-transfer",
    title: "Landing at Bengaluru Airport? A Practical Cab Pre-Booking Guide",
    excerpt: "A practical guide to planning your Bengaluru airport cab, confirming the correct pickup point and choosing enough space for passengers and luggage.",
    seoDescription: "Plan a smooth Bengaluru airport cab pickup or drop. Learn what to share, where to meet, luggage tips and how to pre-book a Premium Ertiga.",
    date: "2026-08-22",
    dateModified: "2026-08-22",
    image: "/images/services/airport.jpg",
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt: "Lucky Travels Premium Ertiga prepared for a Bengaluru airport pickup",
    seoTitle: "Bengaluru Airport Cab Guide: Pickup, Luggage & Booking",
    author: "Bharath K S",
    authorUrl: "/about",
    authorType: "Person",
    authorRole: "Founder",
    content: [
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Arriving in a new city should feel like the start of your journey, not another problem to solve after collecting your bags. Yet airport travel can become confusing when the terminal, pickup point, luggage requirements and destination have not been confirmed in advance." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Kempegowda International Airport Bengaluru (BLR) is approximately 40 kilometres from central Bengaluru, according to " },
          ...link("https://www.airindia.com/in/en/travel-information/airport-information/bengaluru.html", "Air India’s Bengaluru Airport guide"),
          { type: "text", text: ". The distance to your actual destination may be shorter or considerably longer, depending on whether you are travelling to Hebbal, Indiranagar, Whitefield, Electronic City or another part of the city. Bengaluru traffic also changes throughout the day, so a little planning can make a meaningful difference." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "This guide explains how to pre-book a Bengaluru airport cab, what information to share, how to coordinate the pickup and how to choose a vehicle that suits both your passengers and luggage." },
        ],
      },
      {
        type: "h2",
        content: text("Why pre-booking your Bengaluru airport cab helps"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Pre-booking is not simply about reserving a vehicle. It gives both the traveller and the driver time to understand the journey before the flight arrives." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "When the important details are shared early, you can confirm:" },
        ],
      },
      {
        type: "ul",
        items: [
          text("The correct travel date and expected arrival time."),
          text("Whether the flight arrives at Terminal 1 or Terminal 2."),
          text("The designated meeting or parking area."),
          text("The number of passengers and approximate luggage."),
          text("The complete Bengaluru destination."),
          text("Any special requirements involving children, older travellers or multiple stops."),
          text("The fare terms and possible trip-related charges."),
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "This is particularly useful for families, corporate guests, first-time visitors and travellers arriving late at night or early in the morning. It also provides one direct contact if the flight timing or pickup plan changes." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "" },
          ...link("/", "Lucky Travels"),
          { type: "text", text: " handles bookings directly by phone and WhatsApp and provides only Premium Maruti Suzuki Ertiga vehicles. This means the vehicle category can be discussed before confirmation instead of being left uncertain until pickup." },
        ],
      },
      {
        type: "h2",
        content: text("Information to share when booking an airport pickup"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "A clear booking message saves several follow-up calls. Before requesting a quote for a Kempegowda Airport pickup, keep the following information ready:" },
        ],
      },
      {
        type: "ol",
        items: [
          text("Passenger name and contact number."),
          text("Travel date."),
          text("Flight number."),
          text("Scheduled arrival time."),
          text("Terminal, if it is already shown on the ticket."),
          text("Domestic or international arrival."),
          text("Number of adults and children."),
          text("Number and approximate size of bags."),
          text("Complete drop address or a Google Maps location."),
          text("Any planned stop between the airport and destination."),
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "The flight number is useful even when you already know the landing time. Flight schedules can change, and the same airline may use different terminals for different operations. Before travelling, verify the terminal through your airline’s current information." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "For an international arrival, allow for immigration, baggage collection and customs. Do not ask the driver to enter the designated parking area too early. A short WhatsApp update after collecting your luggage helps coordinate the final meeting more accurately." },
        ],
      },
      {
        type: "h2",
        content: text("Understand the current BLR Airport pickup arrangement"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Pickup arrangements at busy airports can change as traffic systems are revised. As checked in August 2026, guidance published for BLR Airport directs commercial vehicles serving Terminal 1 to the P3 and P4 parking zones and vehicles serving Terminal 2 to P2. The airport has also introduced measures to reduce long waits and congestion near the arrival areas. You can read the " },
          ...link("https://www.aci-asiapac.aero/media-centre/news/blr-airport-introduces-new-measures-to-ensure-safer-smoother-arrival-experience-for-passengers-from-december-8", "published BLR Airport pickup guidance"),
          { type: "text", text: "." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Because these are operational rules, never rely only on an old blog post, screenshot or forwarded message. Reconfirm the exact pickup point on the day of travel and follow the current airport signage. The driver should also confirm the meeting area by phone or WhatsApp." },
        ],
      },
      {
        type: "ol",
        items: [
          text("Switch on your phone and check for any message from the driver."),
          text("Complete immigration, baggage collection and customs where applicable."),
          text("Confirm that all bags have arrived before walking to the pickup area."),
          text("Tell the driver when you are ready to leave the terminal."),
          text("Follow airport signs to the confirmed parking or meeting zone."),
          text("Verify the driver’s name and vehicle registration before boarding."),
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Do not agree to meet in an unauthorised stopping area. Designated pickup zones may involve a short walk or airport-provided transfer assistance, but using the correct area makes the meeting safer and reduces confusion." },
        ],
      },
      {
        type: "h2",
        content: text("Choose the vehicle according to passengers and luggage"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Passenger count alone does not determine whether a vehicle is suitable. Luggage can use more space than expected, especially when several travellers carry large check-in suitcases, cabin bags, a stroller or bulky equipment." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "A Premium Ertiga can be a practical airport-transfer vehicle because it combines flexible seating, air-conditioned comfort and useful luggage space. However, the available boot space changes when every passenger seat is occupied. Six adults carrying several large suitcases may have different requirements from three adults carrying two medium bags." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "When requesting a " },
          ...link("/services/airport-transfers", "Premium Ertiga airport transfer in Bengaluru"),
          { type: "text", text: ", describe your luggage honestly. If possible, mention:" },
        ],
      },
      {
        type: "ul",
        items: [
          text("Number of large check-in suitcases."),
          text("Number of cabin bags or backpacks."),
          text("Strollers, wheelchairs or mobility aids."),
          text("Sports equipment or oversized items."),
          text("Whether every passenger seat will be required."),
        ],
      },
      {
        type: "image",
        src: "/images/vehicle/boot-space.jpg",
        alt: "Premium Ertiga boot space prepared for Bengaluru airport luggage",
        caption: "Share the passenger count and luggage sizes before confirming an airport transfer.",
        href: "/",
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "This allows the booking to be assessed before confirmation. It is much better to discuss space in advance than discover a mismatch at the terminal." },
        ],
      },
      {
        type: "h2",
        content: text("Plan a Bengaluru airport drop with enough time"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Airport drops require a different kind of planning. The pickup address, reporting time, terminal and expected traffic all matter." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "When booking a Bengaluru airport drop:" },
        ],
      },
      {
        type: "ul",
        items: [
          text("Check the terminal on your latest airline communication."),
          text("Share the exact pickup address and a location pin."),
          text("Mention the number of passengers and bags."),
          text("Tell the driver if another passenger must be collected on the way."),
          text("Follow your airline’s recommended airport reporting time."),
          text("Add a sensible traffic buffer for your part of Bengaluru."),
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Do not estimate the journey only by distance. A route from Hebbal may behave very differently from a route starting in Whitefield, Koramangala or Electronic City. Rain, road work, peak-hour traffic and major events can also affect travel time. Your airline’s check-in requirement should remain the final reference when deciding when to leave." },
        ],
      },
      {
        type: "h2",
        content: text("Confirm the complete trip terms—not only the headline fare"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "A useful airport cab quote should explain what the amount covers. Before confirming, ask whether any of the following are included or charged separately:" },
        ],
      },
      {
        type: "ul",
        items: [
          text("Airport tolls."),
          text("Airport parking."),
          text("Waiting time."),
          text("Early-morning or late-night service."),
          text("Additional city stops."),
          text("A destination outside the agreed service area."),
          text("Cancellation or major rescheduling."),
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Clear terms protect both the customer and the driver. Keep the final confirmation in writing on WhatsApp so the date, flight, route, vehicle category and agreed charges can be checked easily." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Avoid choosing a cab only because one number appears lower at first glance. The more useful comparison is whether the quote covers the journey you actually need, provides enough space and gives you a reliable contact for coordination." },
        ],
      },
      {
        type: "h2",
        content: text("Need the cab after the airport transfer?"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Some visitors need more than a direct airport drop. A corporate traveller may need to check in at a hotel and attend several meetings. A family may want to visit relatives, shop or attend a function. A visitor may also be continuing to Mysuru, Coorg or another destination outside Bengaluru." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "For several Bengaluru stops with waiting time, an " },
          ...link("/services/rental-packages", "hourly or daily Ertiga rental package"),
          { type: "text", text: " may be more suitable than arranging several separate journeys. For travel beyond the city, review the " },
          ...link("/services/outstation-packages", "outstation Ertiga taxi options from Bengaluru"),
          { type: "text", text: "." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Share the complete plan before booking. A clear itinerary helps determine whether you need an airport transfer, a city rental package or an outstation journey." },
        ],
      },
      {
        type: "h2",
        content: text("A simple WhatsApp template for airport booking"),
      },
      {
        type: "blockquote",
        content: [
          { type: "text", text: "Hello Lucky Travels, I need a Bengaluru airport pickup/drop.\nDate:\nFlight number:\nArrival/departure time:\nTerminal, if known:\nPickup location:\nDestination:\nPassengers:\nLarge bags:\nCabin bags:\nAdditional stop or special requirement:" },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Sending a complete message makes it easier to check availability and provide accurate trip terms." },
        ],
      },
      {
        type: "h2",
        content: text("Frequently asked questions"),
      },
      { type: "h3", content: text("Is Bengaluru Airport the same as Bangalore Airport?") },
      { type: "paragraph", content: [ { type: "text", text: "Yes. Kempegowda International Airport Bengaluru, identified by the airport code BLR, is commonly called Bengaluru Airport, Bangalore Airport or Kempegowda Airport. The official city name is Bengaluru, but many travellers still use “Bangalore airport cab” when searching online." } ] },
      { type: "h3", content: text("Does Lucky Travels provide both airport pickup and airport drop?") },
      { type: "paragraph", content: [ { type: "text", text: "Yes. Subject to availability and confirmation, Lucky Travels provides Premium Ertiga pickups from BLR Airport and airport drops from Bengaluru localities." } ] },
      { type: "h3", content: text("Which terminal will my flight use?") },
      { type: "paragraph", content: [ { type: "text", text: "BLR Airport operates Terminal 1 and Terminal 2. Terminal use depends on the airline and flight operation, so check the latest ticket, airline message or airline website. Share the flight number while booking." } ] },
      { type: "h3", content: text("Where will a privately booked cab meet me?") },
      { type: "paragraph", content: [ { type: "text", text: "The pickup point depends on the terminal and current airport operating rules. As checked in August 2026, commercial vehicles are directed to designated parking zones: P3/P4 for Terminal 1 and P2 for Terminal 2. Reconfirm on the travel day because airport procedures can change." } ] },
      { type: "h3", content: text("What happens if my flight is delayed?") },
      { type: "paragraph", content: [ { type: "text", text: "Send an update as soon as you know about the delay. Sharing the flight number and keeping your phone reachable after landing helps the driver coordinate the revised pickup. Waiting and parking terms should be confirmed before the booking." } ] },
      { type: "h3", content: text("Will an Ertiga hold all our airport luggage?") },
      { type: "paragraph", content: [ { type: "text", text: "It depends on the number of passengers and the size of the bags. Tell Lucky Travels how many large suitcases, cabin bags and special items you have before confirming. When all seats are occupied, luggage capacity becomes more limited." } ] },
      { type: "h3", content: text("Can I book for a corporate guest or family member?") },
      { type: "paragraph", content: [ { type: "text", text: "Yes. Provide the traveller’s name and reachable mobile number as well as your own contact details. Share the confirmed driver and vehicle information with the passenger before arrival." } ] },
      { type: "h3", content: text("How do I book a Lucky Travels airport cab?") },
      { type: "paragraph", content: [ { type: "text", text: "Call " }, { type: "link", href: "tel:9886814344", text: "9886814344", children: text("9886814344") }, { type: "text", text: ", send the completed trip details through " }, { type: "link", href: "https://wa.me/919886814344?text=Hello%20Lucky%20Travels%2C%20I%20need%20a%20Bengaluru%20airport%20cab.", text: "WhatsApp", children: text("WhatsApp") }, { type: "text", text: ", or email " }, { type: "link", href: "mailto:bookmyertiga@gmail.com", text: "bookmyertiga@gmail.com", children: text("bookmyertiga@gmail.com") }, { type: "text", text: ". Include the flight, terminal, passenger, luggage and destination details from the checklist above." } ] },
      {
        type: "h2",
        content: text("Pre-book your Premium Ertiga airport journey"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Good airport travel begins with clear information. Confirm the terminal, share the flight number, describe the luggage, agree on the pickup point and keep the final trip terms in writing." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "To enquire about a Bengaluru airport pickup or drop, visit " },
          ...link("/", "Go Bengaluru by Lucky Travels"),
          { type: "text", text: ", call " },
          { type: "link", href: "tel:9886814344", text: "9886814344", children: text("9886814344") },
          { type: "text", text: ", send your trip details through " },
          ...link("https://wa.me/919886814344?text=Hello%20Lucky%20Travels%2C%20I%20need%20a%20Bengaluru%20airport%20cab.", "WhatsApp"),
          { type: "text", text: ", or email " },
          ...link("mailto:bookmyertiga@gmail.com", "bookmyertiga@gmail.com"),
          { type: "text", text: ". You can also learn more " },
          ...link("/about", "about Lucky Travels and its Premium Ertiga-only approach"),
          { type: "text", text: "." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Follow " },
          ...bold("@gobengaluruwithlucky"),
          { type: "text", text: " on " },
          ...link("https://www.instagram.com/gobengaluruwithlucky/", "Instagram"),
          { type: "text", text: " and " },
          ...link("https://www.facebook.com/gobengaluruwithlucky/", "Facebook"),
          { type: "text", text: " for Bengaluru travel updates, cab industry information and practical journey tips." },
        ],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Written by Bharath K S, Founder of Lucky Travels. Airport operating information was checked on 22 August 2026. Travellers should reconfirm terminal and pickup instructions before each journey because airport procedures may change." },
        ],
      },
    ],
  },
  {
    slug: "planning-an-outstation-trip-from-bengaluru",
    title: "Planning a Comfortable Outstation Trip from Bengaluru",
    excerpt: "Simple points to consider before a one-way or round trip.",
    date: "2026-07-12",
    image: "/images/services/outstation.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "Premium Ertiga vehicle ready for a comfortable outstation trip from Bengaluru",
    seoTitle: "Outstation Trip Planning from Bengaluru",
    author: "Lucky Travels",
    authorUrl: "/about",
    authorType: "Organization",
    content: [
      {
        type: "paragraph",
        content: [
          { type: "text", text: "A smoother outstation journey usually starts with a clear plan for the route, travel date, pickup time and passenger count. " },
          ...link("/about", "Learn more about Lucky Travels"),
          { type: "text", text: " before you confirm your trip." },
        ],
      },
      {
        type: "h2",
        content: text("What to confirm in advance"),
      },
      {
        type: "ul",
        items: [
          text("Route, pickup point and return timing if it is a round trip"),
          text("Passenger count and luggage requirements for the family or group"),
          text("Tolls, parking and any trip-specific charges that may apply"),
        ],
      },
      {
        type: "h3",
        content: text("Comfort matters on longer roads"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "For longer journeys, practical seating, air conditioning and luggage space can make a meaningful difference. A " },
          { type: "bold", children: [{ type: "text", text: "Premium Ertiga" }] },
          { type: "text", text: " works well for families and small groups that want comfort without needing a larger vehicle." },
        ],
      },
      {
        type: "ol",
        items: [
          text("Confirm the route and expected travel time before the booking is finalised"),
          text("Ask about night driving, rest stops and flexible pickup windows"),
          text("Review the trip-specific charges before the outstation estimate is accepted"),
        ],
      },
    ],
  },
  {
    slug: "hourly-rental-for-city-travel",
    title: "When an Hourly Ertiga Rental Makes Sense",
    excerpt: "A practical option for meetings, shopping and multiple city stops.",
    date: "2026-07-05",
    image: "/images/services/hourly.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "Premium Ertiga rental vehicle for hourly Bengaluru city travel and multiple stops",
    seoTitle: "Hourly Ertiga Rental in Bengaluru",
    author: "Lucky Travels",
    authorUrl: "/about",
    authorType: "Organization",
    content: [
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Hourly and daily packages are useful when a journey includes several stops and waiting time. If you are moving between meetings, shopping areas or family visits, a package can be more flexible than multiple point-to-point rides." },
        ],
      },
      {
        type: "h2",
        content: text("A flexible option for city schedules"),
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Share your approximate schedule in advance so the most suitable package can be discussed. For business travel or city errands, the convenience of a dedicated vehicle often matters as much as the fare itself." },
        ],
      },
      {
        type: "ul",
        items: [
          text("Multiple city stops without needing to rebook at each point"),
          text("Useful for family outings, guest pickups and business days"),
          text("Air-conditioned travel with enough luggage space for the day"),
        ],
      },
      {
        type: "blockquote",
        content: [
          { type: "text", text: "A Premium Ertiga can be a comfortable option for families, guests and business travel within Bengaluru, especially when timing and waiting time are part of the plan." },
        ],
      },
    ],
  },
];
