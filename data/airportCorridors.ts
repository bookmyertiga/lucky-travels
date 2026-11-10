export type CorridorLayout =
  | "comparison"
  | "toll-gates"
  | "sectors"
  | "community-matrix"
  | "dispatch"
  | "radial"
  | "phases";

export type AirportCorridorContent = {
  slug: string;
  locality: string;
  pageName: string;
  title: string;
  description: string;
  intro: string;
  eyebrow: string;
  distance: string;
  travelTime: string;
  route: string;
  layout: CorridorLayout;
  routeTitle: string;
  routeDetail: string;
  routes: { title: string; tag: string; detail: string }[];
  milestones: { label: string; detail: string }[];
  localTitle: string;
  localAdvice: string;
  pickupZones: { area: string; landmarks: string; exit: string }[];
  sisterCorridors: string[];
  faqs: { question: string; answer: string }[];
};

export const airportCorridors: Record<string, AirportCorridorContent> = {
  "airport-taxi-whitefield": {
    slug: "airport-taxi-whitefield",
    locality: "Whitefield, ITPL, Hope Farm and Kadugodi",
    pageName: "Whitefield to Bangalore Airport Taxi",
    title: "Whitefield to Bangalore Airport Taxi | Premium Ertiga Cab",
    description:
      "Plan a Whitefield airport taxi in a dedicated Premium Ertiga with a live SH-104/Budigere Cross route check, corporate pickup planning and direct WhatsApp booking.",
    intro:
      "Book a scheduled 6+1 Premium Ertiga from Whitefield, ITPL, Hope Farm, Hoodi or Kadugodi to Kempegowda International Airport (BLR T1 or T2). We compare the SH-104/Budigere Cross approach with the ORR–Hebbal route against your exact pickup and current traffic, then confirm the vehicle, pickup time and baggage plan directly.",
    eyebrow: "EAST BENGALURU • TECH PARK DISPATCH",
    distance: "Approximately 42 km",
    travelTime: "Allow 60–80 minutes off-peak; more during office peaks or rain",
    route: "SH-104 via Budigere Cross / Channasandra, or ORR–Hebbal when live traffic favors it",
    layout: "comparison",
    routeTitle: "ITPL / Hope Farm crawl or Budigere bypass?",
    routeDetail:
      "SH-104 via Budigere Cross and Channasandra can avoid the KR Puram–Hebbal queue from many Whitefield addresses, but it is not automatically faster for every gate. We check the pickup pin and current traffic before choosing rather than promising a fixed journey time.",
    routes: [
      {
        title: "SH-104 • Budigere Cross",
        tag: "Compare for East Whitefield",
        detail:
          "Often useful from Kadugodi, Channasandra and eastern Whitefield to bypass the ORR–Hebbal crawl. Heavy rain can flood or slow the Channasandra underpass; check conditions and use a safe alternate if needed.",
      },
      {
        title: "ITPL / Hope Farm • ORR–Hebbal",
        tag: "Address-dependent",
        detail:
          "A direct option from some ITPL and Hope Farm pickups when the surface approach is moving. KR Puram and Hebbal queues can erase the advantage during weekday peaks.",
      },
    ],
    milestones: [
      { label: "Confirm gate", detail: "Share building, tower and security entry instructions." },
      { label: "Choose route", detail: "Compare SH-104 and ORR–Hebbal against live conditions." },
      { label: "Airport buffer", detail: "Add check-in time and a traffic allowance to the drive estimate." },
    ],
    localTitle: "Corporate commute timeline",
    localAdvice:
      "For office or apartment pickups, share the exact lobby or gate and allow time for security registration. Morning departures can overlap with ITPL and Hope Farm commuter traffic. In heavy rain, specifically check the Channasandra underpass before using the SH-104 bypass.",
    pickupZones: [
      { area: "ITPL / Hope Farm", landmarks: "ITPL, Phoenix Marketcity side, Hope Farm junction", exit: "Compare ORR access with the live SH-104 option." },
      { area: "Hoodi / Kundalahalli", landmarks: "Hoodi Circle, Graphite India Road, Kundalahalli Gate", exit: "Avoid assuming the ORR is clear during office peaks." },
      { area: "Kadugodi / Channasandra", landmarks: "Whitefield railway station, Channasandra and Kadugodi", exit: "Check rain conditions at the Channasandra underpass." },
    ],
    sisterCorridors: ["airport-taxi-marathahalli", "airport-taxi-sarjapur-road"],
    faqs: [
      { question: "Is SH-104 always faster than the ORR from Whitefield?", answer: "No. SH-104 via Budigere Cross and Channasandra can bypass ORR–Hebbal congestion for some pickup points, while ITPL and Hope Farm trips may favor another route. The driver checks live conditions; heavy rain can affect the Channasandra underpass." },
      { question: "How do you plan a corporate pickup at ITPL or Hope Farm?", answer: "Share the building, tower, gate and security instructions with your flight time. We agree on the reporting point and leave time for gate access before the airport drive." },
      { question: "Do you have room for international check-in bags?", answer: "With the third row folded, the Ertiga's flat load bay can carry 3–4 large 28-inch suitcases and cabin bags. The final arrangement depends on passenger count and is confirmed at pickup." },
    ],
  },
  "airport-taxi-electronic-city": {
    slug: "airport-taxi-electronic-city",
    locality: "Electronic City Phases 1 and 2, Neeladri Nagar and Bommasandra",
    pageName: "Electronic City to Bangalore Airport Taxi",
    title: "Electronic City to Bangalore Airport Taxi | Premium Ertiga",
    description:
      "Book an Electronic City airport taxi in a Premium Ertiga with BETL tollway gate planning, NICE Road alternatives and a live transit check to BLR.",
    intro:
      "Schedule a dedicated Ertiga from Electronic City Phase 1 or 2, Neeladri Nagar, Begur or Bommasandra to BLR Terminal 1 or 2. Route choice depends on your pickup and live congestion: the 9.98 km BETL Elevated Tollway can bypass surface traffic toward Silk Board, while a NICE Road connection toward Tumkur Road and the airport approach can be considered during severe peak delays.",
    eyebrow: "SOUTH BENGALURU • ELEVATED TRANSIT",
    distance: "Approximately 53–58 km",
    travelTime: "Allow 75–95 minutes in flowing traffic; build a larger peak-hour buffer",
    route: "BETL Elevated Tollway to Silk Board / ORR / Hebbal, or NICE Road to Tumkur Road and airport approach",
    layout: "toll-gates",
    routeTitle: "Elevated tollway gates and early-morning transit",
    routeDetail:
      "The 9.98 km BETL Elevated Tollway separates much of the Hosur Road drive from surface traffic and can save up to about 40 minutes in severe peak congestion, depending on entry point, queues and onward traffic. The NICE Road–Tumkur Road alternative is also checked; tolls and route are confirmed before departure.",
    routes: [
      { title: "BETL elevated tollway", tag: "Direct northbound option", detail: "Use the appropriate Electronic City entry toward Silk Board, then continue via ORR and Hebbal when those links are moving. Allow for toll queues and surface traffic before and after the elevated section." },
      { title: "NICE Road • Tumkur Road", tag: "Peak-period alternative", detail: "When Silk Board or the central corridor is heavily congested, the chauffeur may assess NICE Road and a Tumkur Road / airport bypass connection. It is longer and only useful when live conditions justify it." },
    ],
    milestones: [
      { label: "Pickup gate", detail: "Confirm Phase 1, Phase 2, Bommasandra or society entry point." },
      { label: "Elevated entry", detail: "Join BETL where it suits the pickup and current queues." },
      { label: "Northbound link", detail: "Choose Silk Board–ORR or the NICE/Tumkur alternative on live traffic." },
      { label: "BLR terminal", detail: "Verify T1 or T2 and current airport access instructions." },
    ],
    localTitle: "South-to-north departure planning",
    localAdvice:
      "Early departures can have a clear BETL run, but do not use the free-flow estimate as a peak-hour guarantee. Phase 2 and Bommasandra pickups may need extra time to reach an entry ramp; confirm toll handling and the terminal when booking.",
    pickupZones: [
      { area: "Electronic City Phase 1", landmarks: "Infosys, Wipro, Velankani and Electronics City", exit: "Confirm the closest BETL entry and current approach traffic." },
      { area: "Phase 2 / Neeladri Nagar", landmarks: "Tech Mahindra, Doddathoguru and Neeladri Nagar", exit: "Allow for local feeder-road congestion before the elevated entry." },
      { area: "Bommasandra / Hebbagodi", landmarks: "Biocon, Narayana Hrudayalaya and Huskur Gate", exit: "Build extra time for the Hosur Road approach." },
    ],
    sisterCorridors: ["airport-taxi-hsr-layout", "airport-taxi-jp-nagar"],
    faqs: [
      { question: "How does the BETL tollway help from Electronic City?", answer: "The 9.98 km elevated section bypasses parts of Hosur Road surface traffic toward Silk Board. Depending on the pickup and congestion, it may save up to about 40 minutes in severe peak conditions; that is not a guaranteed time saving." },
      { question: "Can you avoid Silk Board during a peak departure?", answer: "The driver checks live conditions and may compare the BETL route with NICE Road toward Tumkur Road and the airport approach. The better choice depends on current queues, the pickup location and tolls." },
      { question: "What should I share for an early airport departure?", answer: "Send your pickup gate, flight time, terminal, passenger count and luggage details in advance. We confirm a reporting time with a traffic and airline check-in buffer." },
    ],
  },
  "airport-taxi-hsr-layout": {
    slug: "airport-taxi-hsr-layout",
    locality: "HSR Layout Sectors 1–7, Agara and Teachers Colony",
    pageName: "HSR Layout to Bangalore Airport Taxi",
    title: "HSR Layout to Bangalore Airport Taxi | Premium Ertiga",
    description:
      "Plan an HSR Layout airport transfer with sector-by-sector pickup notes, Agara junction traffic guidance and a dedicated Premium Ertiga.",
    intro:
      "Reserve a scheduled 6+1 Premium Ertiga from any HSR Layout sector, Agara or Teachers Colony to Kempegowda Airport. Sector-specific pickup planning matters: the exit can use Agara and the Intermediate Ring Road or connect to ORR based on the pickup pin and live queues.",
    eyebrow: "HSR LAYOUT • SECTOR-BY-SECTOR PICKUPS",
    distance: "Approximately 44–48 km",
    travelTime: "Allow about 50 minutes for 4:00–7:00 AM departures; about 110 minutes for 8:00 AM departures",
    route: "Agara junction / Intermediate Ring Road and Domlur, or ORR and Hebbal based on traffic",
    layout: "sectors",
    routeTitle: "Agara junction merge roadmap",
    routeDetail:
      "Agara Lake junction traffic can stack where local sector exits merge with the northbound flow. For a 4:00–7:00 AM flight departure, plan roughly 50 minutes for the drive; an 8:00 AM departure needs around 110 minutes as a practical buffer. These are planning estimates, not live guarantees—add check-in time and verify conditions.",
    routes: [
      { title: "Sectors 1–2 • Agara side", tag: "Agara merge", detail: "Start early enough to clear the Agara junction merge; assess 27th Main and the Intermediate Ring Road toward Domlur." },
      { title: "Sectors 3–5 • Central grid", tag: "Sector exit", detail: "Confirm the nearest usable sector exit and school/commuter traffic before joining the arterial road." },
      { title: "Sectors 6–7 • Hosur Road side", tag: "South exit", detail: "Choose the south-side connection or route north according to the live approach and Silk Board conditions." },
    ],
    milestones: [
      { label: "Sector gate", detail: "Share sector, main road and apartment gate." },
      { label: "Agara merge", detail: "Allow queue time where local traffic joins the junction." },
      { label: "Northbound route", detail: "Select the Intermediate Ring Road or ORR after checking live conditions." },
    ],
    localTitle: "Sector pickup guide",
    localAdvice:
      "Tell the driver your sector and gate rather than only saying “HSR.” Agara and Silk Board merge conditions vary with time; use the 50-minute early-window and 110-minute 8:00 AM guidance as starting buffers, then confirm a trip-specific departure time.",
    pickupZones: [
      { area: "Sectors 1–2", landmarks: "Agara Lake, 27th Main and CPWD Complex", exit: "Check the Agara junction queue before joining northbound traffic." },
      { area: "Sectors 3–5", landmarks: "BDA Complex, 14th Main and 19th Main", exit: "Identify the closest sector exit and allow for local school traffic." },
      { area: "Sectors 6–7", landmarks: "Teachers Colony, Mangammanapalya and Hosur Road link", exit: "Compare the south-side feeder with the route via Agara." },
    ],
    sisterCorridors: ["airport-taxi-electronic-city", "airport-taxi-sarjapur-road"],
    faqs: [
      { question: "How much travel buffer should I allow from HSR Layout?", answer: "As a planning guide, allow about 50 minutes for a 4:00–7:00 AM departure and around 110 minutes for an 8:00 AM departure, before airline check-in time. Actual traffic and your exact sector can change the drive." },
      { question: "How do you plan an HSR pickup by sector?", answer: "Share your sector, apartment gate and nearest main road. The driver checks the local exit and Agara junction queue before selecting the Intermediate Ring Road, Domlur or ORR connection." },
      { question: "Can I carry large suitcases in the Ertiga?", answer: "With the third row folded, the Ertiga has a flat cargo bay for 3–4 large check-in suitcases plus cabin bags. Confirm passenger and luggage count so the final setup can be checked at pickup." },
    ],
  },
  "airport-taxi-sarjapur-road": {
    slug: "airport-taxi-sarjapur-road",
    locality: "Sarjapur Road, Bellandur, Carmelaram and Haralur",
    pageName: "Sarjapur Road to Bangalore Airport Taxi",
    title: "Sarjapur Road to Bangalore Airport Taxi | Premium Ertiga",
    description:
      "Book a Sarjapur Road airport taxi with a Carmelaram railway-gate route check, gated-community pickup protocols and dedicated Premium Ertiga.",
    intro:
      "Schedule an Ertiga from Sarjapur Road, Bellandur, Carmelaram, Haralur or Gunjur to BLR T1 or T2. Gunjur–Varthur and ORR approaches can both bottleneck; route planning checks the current Carmelaram flyover and railway-gate situation rather than treating a bypass as permanently clear.",
    eyebrow: "SARJAPUR ROAD • COMMUNITY-GATE DISPATCH",
    distance: "Approximately 46–54 km",
    travelTime: "Allow 65–100 minutes off-peak; add a substantial office-peak buffer",
    route: "Carmelaram / Gunjur / Varthur or Bellandur–ORR–Hebbal, selected against live traffic",
    layout: "community-matrix",
    routeTitle: "Carmelaram railway gate avoidance matrix",
    routeDetail:
      "A closed or busy Carmelaram railway crossing can delay local access, while Gunjur–Varthur roads may also queue. Carmelaram flyover availability and approach conditions can change; confirm the current status on the travel day and compare the ORR alternative before leaving.",
    routes: [
      { title: "Carmelaram • Gunjur • Varthur", tag: "Check gate / flyover", detail: "Use only after checking railway-gate conditions, the current Carmelaram flyover status and Varthur bottlenecks." },
      { title: "Bellandur • ORR • Hebbal", tag: "Live traffic comparison", detail: "Can be practical from Bellandur and nearby communities when ORR traffic is moving; Iblur and Marathahalli are potential slow points." },
    ],
    milestones: [
      { label: "Register visitor", detail: "Share society name, tower and entry instructions early." },
      { label: "Meet at gate", detail: "Confirm the legal pickup point if security restricts vehicle entry." },
      { label: "Check crossing", detail: "Verify Carmelaram gate / flyover and Gunjur–Varthur conditions." },
      { label: "Airport route", detail: "Compare the ORR and northbound alternatives on live traffic." },
    ],
    localTitle: "Gated-community pickup protocols",
    localAdvice:
      "For Assetz, Godrej and Rainbow Drive, share the exact community and tower, ensure the visitor entry is arranged where required, and agree whether pickup is at the lobby or security gate. A driver cannot assume entry privileges; keep a reachable contact for gate coordination.",
    pickupZones: [
      { area: "Assetz communities", landmarks: "Assetz 63 East and nearby Sarjapur Road layouts", exit: "Pre-arrange visitor registration and confirm the exact gate." },
      { area: "Godrej communities", landmarks: "Godrej Park Retreat and Gunjur approaches", exit: "Check the Gunjur–Varthur approach and security check-in." },
      { area: "Rainbow Drive / Carmelaram", landmarks: "Rainbow Drive, Carmelaram and railway crossing", exit: "Confirm gate access and current flyover / railway-gate status." },
    ],
    sisterCorridors: ["airport-taxi-hsr-layout", "airport-taxi-marathahalli"],
    faqs: [
      { question: "How do you avoid the Carmelaram railway crossing delay?", answer: "The driver checks the crossing and current Carmelaram flyover status before choosing between the Carmelaram–Gunjur–Varthur side and the ORR route. Neither route is assumed clear without checking." },
      { question: "What should I arrange for a pickup from Assetz, Godrej or Rainbow Drive?", answer: "Share the society, tower and security entry process when booking. Arrange visitor registration if needed and confirm a gate or lobby meeting point with the chauffeur." },
      { question: "Is Gunjur–Varthur faster than the ORR?", answer: "Not consistently. Gunjur–Varthur bottlenecks and ORR congestion vary, so the route is chosen against the pickup point and current traffic." },
    ],
  },
  "airport-taxi-indiranagar": {
    slug: "airport-taxi-indiranagar",
    locality: "Indiranagar, HAL, Domlur and Baiyappanahalli",
    pageName: "Indiranagar to Bangalore Airport Taxi",
    title: "Indiranagar to Bangalore Airport Taxi | Premium Ertiga",
    description:
      "Arrange an Indiranagar airport transfer with 100 Feet Road and 12th Main dispatch points, HAL base proximity and a live Domlur route check.",
    intro:
      "Book a scheduled 6+1 Premium Ertiga from Indiranagar, HAL or Domlur to Kempegowda Airport. Our Konena Agrahara, HAL base is close to this corridor. We confirm the pickup point around 100 Feet Road or 12th Main and check the Domlur flyover loop before choosing the Swami Vivekananda Road or Baiyappanahalli connection toward Hebbal.",
    eyebrow: "INDIRANAGAR • HAL BASE PROXIMITY",
    distance: "Approximately 38 km",
    travelTime: "Allow 45–60 minutes off-peak; 75–100 minutes at busy periods",
    route: "100 Feet Road / 12th Main to Domlur or Baiyappanahalli, then ORR and Hebbal",
    layout: "dispatch",
    routeTitle: "100 Feet Road / 12th Main dispatch",
    routeDetail:
      "The Domlur flyover loop can slow during traffic surges. Depending on your address, the driver can compare a Swami Vivekananda Road connection with the SV Road / Baiyappanahalli backroad exit to reach the Hebbal expressway. The HAL-area base proximity helps with scheduled dispatch, but does not replace booking confirmation.",
    routes: [
      { title: "100 Feet Road dispatch", tag: "Central Indiranagar", detail: "Confirm the lane, building and side of 100 Feet Road; use the closest practical northbound link based on traffic." },
      { title: "12th Main / HAL dispatch", tag: "HAL-side pickup", detail: "The Konena Agrahara, HAL base is nearby. Confirm the pickup address and reporting time; compare Domlur and Baiyappanahalli exits." },
      { title: "Domlur / Baiyappanahalli", tag: "Bypass decision", detail: "Avoid the Domlur flyover loop if it is backed up; SV Road and Baiyappanahalli backroads can connect toward the Hebbal expressway when suitable." },
    ],
    milestones: [
      { label: "100 Feet / 12th Main", detail: "Confirm a safe, exact pickup point and direction of travel." },
      { label: "Base dispatch", detail: "Konena Agrahara, HAL is nearby for scheduled vehicle positioning." },
      { label: "Northbound exit", detail: "Compare Domlur flyover and Baiyappanahalli links before joining ORR." },
    ],
    localTitle: "HAL / Konena Agrahara proximity",
    localAdvice:
      "The nearby HAL base supports scheduled coverage of Indiranagar, Domlur and HAL. Share a building entrance or lane because 100 Feet Road and 12th Main have busy curbside activity; keep a clear meeting point and allow for the Domlur loop during peaks.",
    pickupZones: [
      { area: "100 Feet Road", landmarks: "Indiranagar 100 Feet Road and adjoining cross streets", exit: "Use an agreed curbside pickup point away from traffic obstruction." },
      { area: "12th Main / CMH Road", landmarks: "12th Main, CMH Road and Defence Colony", exit: "Confirm the exact street and side for a fast northbound exit." },
      { area: "HAL / Domlur", landmarks: "HAL 2nd and 3rd Stage, Domlur and Old Airport Road", exit: "Check the Domlur flyover loop against Baiyappanahalli backroads." },
    ],
    sisterCorridors: ["airport-taxi-marathahalli", "airport-taxi-jp-nagar"],
    faqs: [
      { question: "Does the HAL base make Indiranagar dispatch easier?", answer: "Konena Agrahara in HAL is close to Indiranagar and Domlur, which helps plan scheduled pickups. The pickup time and vehicle are still confirmed directly for each booking." },
      { question: "How do you avoid Domlur flyover traffic?", answer: "The driver checks the Domlur loop and may compare Swami Vivekananda Road with the SV Road / Baiyappanahalli backroad exit toward ORR and Hebbal." },
      { question: "Where should I meet the Ertiga on 100 Feet Road?", answer: "Share your building or cross street and agree a safe pickup point with the chauffeur; busy curbside sections may not allow stopping directly outside every address." },
    ],
  },
  "airport-taxi-marathahalli": {
    slug: "airport-taxi-marathahalli",
    locality: "Marathahalli, Spice Garden, Kundalahalli and ORR",
    pageName: "Marathahalli to Bangalore Airport Taxi",
    title: "Marathahalli to Bangalore Airport Taxi | Premium Ertiga",
    description:
      "Book a Marathahalli airport taxi with a Spice Garden and bridge-merge bypass plan, early service-lane positioning and Premium Ertiga comfort.",
    intro:
      "Reserve a dedicated Ertiga from Marathahalli Bridge, Spice Garden, Kundalahalli or the ORR tech corridor to BLR T1 or T2. Bridge approaches and Spice Garden merges can trap vehicles in Kalamandir traffic; our pickup plan positions the driver on a suitable service lane ahead of the scheduled reporting time.",
    eyebrow: "MARATHAHALLI • RADIAL DISPATCH",
    distance: "Approximately 41 km",
    travelTime: "Allow 50–60 minutes off-peak; 80–105 minutes in peak traffic",
    route: "Bridge / Spice Garden bypass connections toward Budigere Cross or ORR–Hebbal, selected live",
    layout: "radial",
    routeTitle: "Spice Garden and bridge-merge bypass roadmap",
    routeDetail:
      "Marathahalli Bridge has lane merges and queue spillback around Kalamandir. Drivers plan to position on an appropriate service lane about 15 minutes before pickup where the location allows, reducing the chance of being trapped in the bridge approach. Route choices toward Budigere Cross or ORR–Hebbal still depend on live traffic.",
    routes: [
      { title: "Spice Garden / Kundalahalli", tag: "Local feeder", detail: "Confirm the apartment gate and feeder road; avoid last-minute cross-lane moves near the bridge." },
      { title: "Marathahalli Bridge", tag: "Merge watch", detail: "Service-lane positioning about 15 minutes before reporting helps avoid getting caught in Kalamandir-bound merge queues." },
      { title: "Airport northbound", tag: "Route selection", detail: "Compare Budigere Cross and ORR–Hebbal against live traffic after the pickup point is clear." },
    ],
    milestones: [
      { label: "Radial position", detail: "Stage on a suitable service lane before the scheduled pickup." },
      { label: "Spice Garden", detail: "Use the confirmed community exit and avoid bridge-bound queue spillback." },
      { label: "Bridge merge", detail: "Join the route safely; avoid last-minute lane crossings." },
      { label: "Airport corridor", detail: "Compare Budigere Cross and ORR–Hebbal live." },
    ],
    localTitle: "Radial dispatch points",
    localAdvice:
      "Give the exact approach side of Marathahalli Bridge and your society gate, not just “Marathahalli.” During Kalamandir congestion, curbside stopping can be difficult; a pre-agreed pickup point and early service-lane staging make dispatch more predictable.",
    pickupZones: [
      { area: "Spice Garden", landmarks: "Spice Garden Road and adjoining apartments", exit: "Agree on a gate-side meeting point and service-lane approach." },
      { area: "Bridge / Kalamandir", landmarks: "Marathahalli Bridge, Kalamandir and bus stop approaches", exit: "Avoid curbside confusion; position before the merge builds." },
      { area: "Kundalahalli / ORR", landmarks: "Kundalahalli Gate and ORR tech parks", exit: "Compare Budigere Cross with the ORR route after checking traffic." },
    ],
    sisterCorridors: ["airport-taxi-whitefield", "airport-taxi-indiranagar"],
    faqs: [
      { question: "Why position on a service lane 15 minutes early?", answer: "Marathahalli Bridge and Kalamandir merges can trap vehicles in a queue. When the road and pickup location permit, earlier service-lane positioning reduces late entry into the merge; it cannot guarantee a traffic-free approach." },
      { question: "Can you bypass Marathahalli Bridge traffic?", answer: "The driver checks the pickup point and may compare local feeder roads with the Budigere Cross and ORR–Hebbal options. Route availability depends on current conditions and safe access." },
      { question: "How many bags fit in the airport Ertiga?", answer: "With the third row folded, the flat bay can carry 3–4 large 28-inch suitcases and cabin bags. Share the passenger and bag count so the fit can be confirmed when the vehicle arrives." },
    ],
  },
  "airport-taxi-jp-nagar": {
    slug: "airport-taxi-jp-nagar",
    locality: "JP Nagar Phases 1–9, Sarakki and South Bengaluru",
    pageName: "JP Nagar to Bangalore Airport Taxi",
    title: "JP Nagar to Bangalore Airport Taxi | Premium Ertiga",
    description:
      "Plan a JP Nagar airport transfer with phase-by-phase residential pickup navigation, Bannerghatta Road metro diversion advice and Premium Ertiga comfort.",
    intro:
      "Book a scheduled 6+1 Premium Ertiga from JP Nagar Phases 1–9, Sarakki or Dollar Layout to Kempegowda Airport. JP Nagar is spread across multiple phases, so we confirm the exact gate and northbound exit before selecting Bannerghatta Road, NICE Road or the South End Circle elevated corridor.",
    eyebrow: "SOUTH BENGALURU • PHASE-BY-PHASE NAVIGATION",
    distance: "Approximately 46 km",
    travelTime: "Allow 65–75 minutes off-peak; 100–125 minutes during peak conditions",
    route: "Bannerghatta Road / NICE Road or South End Circle elevated corridor toward ORR and Hebbal",
    layout: "phases",
    routeTitle: "Residential phase matrix and northbound diversions",
    routeDetail:
      "Bannerghatta Road metro construction can create shifting diversions and lane restrictions. Check current signs and closures; the South End Circle elevated corridor or NICE Road may be preferable when the approach is moving. The best exit depends on which JP Nagar phase you start from.",
    routes: [
      { title: "Phases 1–3 • Sarakki side", tag: "North / central access", detail: "Confirm the phase and pickup gate; use the nearest open connection toward South End Circle or Bannerghatta Road." },
      { title: "Phases 4–6 • Central JP Nagar", tag: "Construction check", detail: "Allow for changing Bannerghatta Road metro-work diversions and use current road signs." },
      { title: "Phases 7–9 • South / east", tag: "NICE Road option", detail: "Compare Bannerghatta Road and NICE Road access based on the exact address and live traffic." },
    ],
    milestones: [
      { label: "Phase & gate", detail: "Identify the phase, layout and exact entry point." },
      { label: "Construction check", detail: "Review current Bannerghatta Road metro diversions." },
      { label: "Elevated corridor", detail: "Use South End Circle or NICE Road when the approach supports it." },
      { label: "Northbound link", detail: "Continue toward ORR / Hebbal and BLR on the selected route." },
    ],
    localTitle: "Multi-phase residential pickup matrix",
    localAdvice:
      "“JP Nagar” alone is not a precise pickup instruction: share the phase, cross street and society gate. Metro construction diversions on Bannerghatta Road can change; follow current signs and compare the South End Circle elevated corridor or NICE Road before setting off.",
    pickupZones: [
      { area: "Phases 1–3", landmarks: "Sarakki, South End Circle and nearby layouts", exit: "Check the elevated corridor approach and current junction queues." },
      { area: "Phases 4–6", landmarks: "Central JP Nagar and Bannerghatta Road", exit: "Allow for metro-work diversions and lane restrictions." },
      { area: "Phases 7–9", landmarks: "Dollar Layout, east and south JP Nagar", exit: "Compare NICE Road and Bannerghatta Road from the exact gate." },
    ],
    sisterCorridors: ["airport-taxi-hsr-layout", "airport-taxi-indiranagar"],
    faqs: [
      { question: "Which JP Nagar route avoids metro construction delays?", answer: "The driver checks current Bannerghatta Road works and compares the South End Circle elevated corridor or NICE Road. Construction diversions change, so no single route is assumed best." },
      { question: "What pickup information is needed across JP Nagar?", answer: "Share the phase, cross street, layout and exact gate. This helps choose a northbound exit without losing time navigating between phases." },
      { question: "How much time should I allow to BLR from JP Nagar?", answer: "As a planning guide, allow 65–75 minutes off-peak and 100–125 minutes during peak conditions, plus check-in time. Live traffic, rain and construction can change the drive." },
    ],
  },
};
