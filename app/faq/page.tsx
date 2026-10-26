import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Compass,
  HelpCircle,
  Luggage,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const faqUrl = `${SITE.url}/faq`;
const generalWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Lucky Travels, I have a question regarding cab booking."
)}`;

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Lucky Travels Bengaluru",
  description:
    "Get clear answers on Kempegowda Airport transfers, 2024–2026 Ertiga luggage space, hourly rental terms, outstation fares, and WhatsApp price-locks with Lucky Travels.",
  alternates: { canonical: faqUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | Lucky Travels Bengaluru",
    description:
      "Comprehensive answers regarding airport pickups, 4-suitcase luggage room, 2024-2026 factory S-CNG Ertigas, and fixed WhatsApp quotes.",
    url: faqUrl,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Lucky Travels Bengaluru FAQ Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions (FAQ) | Lucky Travels Bengaluru",
    description:
      "Clear answers on Ertiga airport transfers, luggage capacity, hourly rentals, and outstation taxi policies.",
    images: [`${SITE.url}/images/services/hourly.jpg`],
  },
};

interface FaqItem {
  q: string;
  schemaAnswer: string;
  renderAnswer: React.ReactNode;
}

interface FaqCategory {
  id: string;
  name: string;
  icon: typeof Plane;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    id: "airport",
    name: "Kempegowda Airport (BLR T1 & T2) Transfers",
    icon: Plane,
    items: [
      {
        q: "How early should I book an airport taxi from Bengaluru to BLR Airport?",
        schemaAnswer:
          "We recommend booking at least 6 to 12 hours in advance to guarantee vehicle allocation and driver dispatch, especially for early morning flight departures between 3:00 AM and 6:00 AM. For domestic departures, schedule pickup 3 to 3.5 hours before flight time. For international flights from Terminal 2, schedule pickup 4.5 to 5 hours prior.",
        renderAnswer: (
          <>
            We recommend booking at least <strong>6 to 12 hours in advance</strong> to guarantee vehicle allocation and driver dispatch, especially for early-morning flight departures between <em>3:00 AM and 6:00 AM</em>. For domestic departures, schedule pickup <strong>3 to 3.5 hours before boarding</strong> (3.5 to 4 hours if departing from{" "}
            <Link href="/airport-taxi-electronic-city" className="font-bold text-purple-700 underline hover:text-purple-900">
              Electronic City
            </Link>{" "}
            or{" "}
            <Link href="/airport-taxi-sarjapur-road" className="font-bold text-purple-700 underline hover:text-purple-900">
              Sarjapur Road
            </Link>
            ). For international flights from <strong>Terminal 2 (T2)</strong>, schedule pickup <em>4.5 to 5 hours prior</em>. Read our detailed{" "}
            <Link href="/blog/bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis" className="font-bold text-purple-700 underline hover:text-purple-900">
              Bengaluru Airport Cab Guide
            </Link>{" "}
            for complete terminal reporting schedules.
          </>
        ),
      },
      {
        q: "Where do we meet our chauffeur at BLR Airport Terminal 1 and Terminal 2?",
        schemaAnswer:
          "At Terminal 1, our chauffeur receives passengers at the designated commercial parking zones P3/P4. At Terminal 2 (Garden Terminal), we receive guests at the P2 parking area. Once you collect check-in bags, message or call your driver to coordinate the exact bay location.",
        renderAnswer: (
          <>
            At <strong>Terminal 1 (T1 Domestic)</strong>, our chauffeur meets arriving guests at the designated commercial parking bays <strong>P3/P4</strong>. At <strong>Terminal 2 (T2 Garden Terminal)</strong>, we coordinate pickups at the <strong>P2 parking zone</strong>. As soon as you collect your baggage, send a quick message to your driver on WhatsApp, and they will pull up to the exact curbside bay and assist with heavy lifting. Explore our central{" "}
            <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline hover:text-purple-900">
              Bangalore Airport Taxi Hub
            </Link>{" "}
            for full airport pickup instructions.
          </>
        ),
      },
      {
        q: "Can I book a cab from Whitefield, Electronic City, or HSR Layout via bypass roads?",
        schemaAnswer:
          "Yes. Our experienced chauffeurs utilize the fastest real-time bypass routes: the Budigere Cross / SH-104 bypass from Whitefield, the Hosur Road Elevated Tollway or NICE Road from Electronic City, and the Intermediate Ring Road from HSR Layout to minimize city gridlock.",
        renderAnswer: (
          <>
            Yes. Our chauffeurs monitor live satellite traffic to avoid major choke points like KR Puram, Tin Factory, and Silk Board. From Whitefield, we route via{" "}
            <Link href="/airport-taxi-whitefield" className="font-bold text-purple-700 underline hover:text-purple-900">
              Budigere Cross &amp; SH-104
            </Link>
            . From South Bengaluru, we leverage the{" "}
            <Link href="/airport-taxi-electronic-city" className="font-bold text-purple-700 underline hover:text-purple-900">
              BETL Elevated Highway and NICE Road
            </Link>
            , and from{" "}
            <Link href="/airport-taxi-hsr-layout" className="font-bold text-purple-700 underline hover:text-purple-900">
              HSR Layout
            </Link>
            , we use the Agara Lake &amp; Intermediate Ring Road bypass toward NH-44.
          </>
        ),
      },
      {
        q: "What happens if my incoming flight to Bengaluru is delayed?",
        schemaAnswer:
          "We track your incoming flight status using the flight number you provide during booking. Simply inform us of major schedule changes, and your assigned chauffeur remains stationed at the airport parking area without exorbitant waiting charges.",
        renderAnswer: (
          <>
            We monitor your arrival status live using the <em>flight number</em> provided during booking. Simply inform us of any major schedule revisions before takeoff. Your assigned chauffeur remains stationed at the airport parking area, ensuring you have a dedicated ride waiting without exorbitant waiting fee penalties.
          </>
        ),
      },
    ],
  },
  {
    id: "fleet",
    name: "Fleet Standards & Luggage Capacity",
    icon: Luggage,
    items: [
      {
        q: "What is your fleet standard, and why only Maruti Suzuki Ertiga?",
        schemaAnswer:
          "Lucky Travels specializes exclusively in well-maintained 2024 to 2026 factory-fitted S-CNG Maruti Suzuki Ertigas. By specializing 100% in one vehicle model, we eliminate unpredictable vehicle downsizing. You never receive a cramped hatchback or compact sedan after booking an Ertiga.",
        renderAnswer: (
          <>
            Lucky Travels specializes exclusively in well-maintained <strong>2024 to 2026 factory-fitted S-CNG Maruti Suzuki Ertigas</strong>. By specializing 100% in one vehicle model, we eliminate unpredictable vehicle downsizing. You never face an aggregator lottery where an unwashed hatchback or small sedan arrives after you reserved an MPV. Read{" "}
            <Link href="/blog/why-lucky-travels-specialises-in-premium-ertiga" className="font-bold text-purple-700 underline hover:text-purple-900">
              why Lucky Travels specializes exclusively in the Ertiga
            </Link>{" "}
            to learn about our single-category vehicle focus.
          </>
        ),
      },
      {
        q: "How much flight luggage can fit inside the Ertiga?",
        schemaAnswer:
          "For 3 to 4 passengers, folding down the 50:50 split 3rd row creates a flat cargo deck that comfortably holds up to 4 large 28-inch check-in suitcases plus cabin backpacks. For 5 to 6 passengers, the car accommodates 2 to 3 compact cabin trolley bags.",
        renderAnswer: (
          <>
            For <strong>3 to 4 passengers</strong>, folding down the 50:50 split 3rd row creates an expansive flat boot that comfortably accommodates <strong>up to 4 large 28-inch international check-in suitcases</strong> plus cabin backpacks with <em>zero luggage placed on passenger seats</em>. For <strong>5 to 6 passengers</strong>, the car easily carries <em>2 to 3 compact cabin trolley bags</em> and soft duffels.
          </>
        ),
      },
      {
        q: "Are your vehicles fitted with aftermarket or factory-fitted CNG kits?",
        schemaAnswer:
          "All our vehicles run on original Maruti Suzuki factory-fitted S-CNG with dual interdependent ECUs. They feature progressive highway suspension that prevents rear-seat bouncing and nausea, and they never emit the unpleasant gas odor found in aftermarket kits.",
        renderAnswer: (
          <>
            Every car in our fleet features original <strong>Maruti Suzuki factory-fitted S-CNG</strong> with dual interdependent ECUs. Unlike aftermarket retrofits, factory S-CNG vehicles feature <strong>progressive rear dampers</strong> that prevent highway bouncing and motion sickness, and they <em>never emit unburnt gas odors inside the cabin</em>.
          </>
        ),
      },
      {
        q: "How does the air conditioning work across all three rows?",
        schemaAnswer:
          "Our 2024–2026 Ertigas are equipped with dual-zone climate control featuring second-row knee-level console AC vents. This provides gentle, draft-free cooling from the knee level up, avoiding harsh downward roof drafts on highway drives.",
        renderAnswer: (
          <>
            Our <strong>2024–2026 Ertigas</strong> are equipped with dual-zone climate control featuring <strong>second-row knee-level console AC vents</strong>. This delivers gentle, draft-free cooling from the knee level up, avoiding harsh roof blowers that blast cold air directly onto passengers&apos; heads during long highway drives.
          </>
        ),
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing, Tolls & WhatsApp Price-Lock",
    icon: ShieldCheck,
    items: [
      {
        q: "What is the WhatsApp Price-Lock Guarantee?",
        schemaAnswer:
          "Unlike aggregator apps that apply surge multipliers during heavy rains, midnight hours, or peak traffic jams along Silk Board, our agreed WhatsApp quote is strictly locked. What is quoted in writing is what you pay with zero unexpected driver charges.",
        renderAnswer: (
          <>
            Unlike aggregator ride-hailing apps that impose <em>1.8x or 2.5x surge pricing multipliers</em> during heavy Bengaluru rains, early-morning departures, or traffic snarls, our <strong>WhatsApp Price-Lock Guarantee</strong> ensures that what is confirmed in writing remains <strong>100% fixed</strong>. There are zero surprise driver batas or midnight meter hikes.
          </>
        ),
      },
      {
        q: "Are airport tolls, parking fees, and expressway charges included?",
        schemaAnswer:
          "We maintain complete toll transparency. When providing your quote, we clearly state whether highway tolls and parking charges are included or billed at actuals. Everything is written down before confirmation.",
        renderAnswer: (
          <>
            We maintain strict <strong>toll transparency</strong>. When sending your quote, we clearly specify whether expressway tolls (such as the <em>Airport Trumpet Toll, BETL Elevated Expressway, or NICE Road</em>) and terminal parking fees are bundled into the flat fare or billed at actuals. Everything is written down clearly on WhatsApp before you confirm.
          </>
        ),
      },
      {
        q: "Can corporate travelers and IT employees get GST invoices for expense claims?",
        schemaAnswer:
          "Yes. Simply share your company GSTIN, legal company name, and official email address during WhatsApp booking, and we will issue a compliant GST tax invoice for your accounting and reimbursement records.",
        renderAnswer: (
          <>
            Yes. Simply share your company GSTIN, legal registered entity name, and billing email address during booking. We issue compliant GST invoices for all corporate travel. Explore our{" "}
            <Link href="/corporate-car-rental-bangalore" className="font-bold text-purple-700 underline hover:text-purple-900">
              Corporate Car Rental Bangalore
            </Link>{" "}
            services for multi-day IT campus mobility and executive billing.
          </>
        ),
      },
      {
        q: "What payment methods do you accept?",
        schemaAnswer:
          "We accept Google Pay, PhonePe, Paytm, BHIM UPI, bank IMPS/NEFT transfers, and cash directly to the driver upon trip completion.",
        renderAnswer: (
          <>
            We accept all major digital payment modes: <strong>Google Pay, PhonePe, Paytm, BHIM UPI</strong>, direct bank IMPS/NEFT transfers, and cash directly to the chauffeur upon trip completion.
          </>
        ),
      },
    ],
  },
  {
    id: "rentals",
    name: "Hourly City Car Rental Packages",
    icon: Clock,
    items: [
      {
        q: "What hourly rental packages are available within Bangalore?",
        schemaAnswer:
          "We offer structured disposal packages: 8 Hours / 80 Kilometers (Standard City Day), 10 Hours / 100 Kilometers (Extended Cross-City), and 12 Hours / 120 Kilometers (Full-Day Disposal). Extra hours and kilometers are billed at fixed rates.",
        renderAnswer: (
          <>
            We provide structured city disposal packages: <strong>8 Hours / 80 Kilometers</strong> (Standard Day), <strong>10 Hours / 100 Kilometers</strong> (Extended Cross-City), and <strong>12 Hours / 120 Kilometers</strong> (Full-Day Disposal). Read our comprehensive{" "}
            <Link href="/blog/hourly-rental-for-city-travel" className="font-bold text-purple-700 underline hover:text-purple-900">
              Bangalore Hourly Rental Guide
            </Link>{" "}
            or visit our{" "}
            <Link href="/car-rental-bangalore" className="font-bold text-purple-700 underline hover:text-purple-900">
              Hourly Car Rental Bangalore Hub
            </Link>{" "}
            to compare package pricing.
          </>
        ),
      },
      {
        q: "Why is a dedicated hourly rental better than booking separate app rides?",
        schemaAnswer:
          "Booking individual app rides for multi-stop meetings, wedding shopping in Commercial Street or Jayanagar, or family hospital visits means waiting 15–20 minutes at each stop and facing sudden cancellations. With a dedicated rental, your car and chauffeur remain on standby throughout your itinerary.",
        renderAnswer: (
          <>
            Booking individual app cabs for multi-stop meetings across tech corridors, wedding shopping in <em>Commercial Street, Chickpet, or Jayanagar</em>, or family hospital visits results in repeated 15–20 minute booking delays and surge pricing. With a <strong>dedicated chauffeur-driven Ertiga on disposal</strong>, your sanitized car and driver remain on standby at every stop while your shopping bags stay safe inside the boot.
          </>
        ),
      },
      {
        q: "What happens if our trip exceeds the package hours or kilometers?",
        schemaAnswer:
          "Extra hours and kilometers are calculated transparently at pre-agreed hourly and per-kilometer rates disclosed in your initial WhatsApp confirmation. There are no surprise multipliers.",
        renderAnswer: (
          <>
            Any additional hours or kilometers beyond the package allowance are calculated transparently at <strong>pre-agreed extra km and extra hour rates</strong> disclosed in your initial WhatsApp quote. There are no penalty multipliers or hidden surcharges.
          </>
        ),
      },
    ],
  },
  {
    id: "outstation",
    name: "Outstation Road Trips Across South India",
    icon: Compass,
    items: [
      {
        q: "Which outstation destinations do you regularly cover from Bangalore?",
        schemaAnswer:
          "We regularly operate round-trip outstation cabs to Mysore via the expressway, Srirangapatna, Coorg, Ooty, Wayanad, Chikmagalur, and Tirupati Balaji with transparent interstate permit policies.",
        renderAnswer: (
          <>
            We regularly operate round-trip outstation cabs across Karnataka and neighboring states, including <strong>Mysore (90-min expressway cruise)</strong>, <strong>Srirangapatna (Paschima Vahini &amp; temple pooja rituals)</strong>, <strong>Coorg (Madikeri plantation homestays)</strong>, <strong>Ooty, Wayanad, Chikmagalur</strong>, and <strong>Tirupati Balaji Darshan</strong>. Review our{" "}
            <Link href="/blog/planning-an-outstation-trip-from-bengaluru" className="font-bold text-purple-700 underline hover:text-purple-900">
              Bangalore Outstation Trip Planning Guide
            </Link>{" "}
            or explore our{" "}
            <Link href="/outstation-cabs-bangalore" className="font-bold text-purple-700 underline hover:text-purple-900">
              Outstation Cabs Bangalore Hub
            </Link>
            .
          </>
        ),
      },
      {
        q: "Why choose an Ertiga over an outstation sedan cab?",
        schemaAnswer:
          "A 4-seater sedan on a 5-hour highway trip leaves rear passengers cramped with zero recline and little boot space due to gas cylinders. Our 2024–2026 Ertigas provide Innova-grade 3-row comfort, 4-suitcase luggage room, and knee-level console AC for barely more than standard sedan rates.",
        renderAnswer: (
          <>
            Traveling 4 to 6 hours on highway stretches to Coorg or Ooty in a compact sedan (like a Dzire or Etios) causes severe lower-back fatigue for rear passengers, especially with suitcases crammed into the cabin due to aftermarket CNG tanks. Our <strong>2024–2026 factory S-CNG Ertigas</strong> offer <strong>Innova-grade 3-row legroom, 4-suitcase flat boot capacity, and knee-level console AC for barely a fraction more than basic sedan cab rates</strong>.
          </>
        ),
      },
      {
        q: "Are driver allowances (driver bata) and interstate permits included?",
        schemaAnswer:
          "All driver allowances, day/night bata, and state border permits (for Tamil Nadu, Kerala, or Andhra Pradesh) are transparently detailed upfront in your WhatsApp estimate. You will never face surprise demands on the road.",
        renderAnswer: (
          <>
            All driver allowances (<em>driver bata</em>), night charges, and interstate border entry permits (for <em>Tamil Nadu, Kerala, or Andhra Pradesh</em>) are clearly detailed upfront in your WhatsApp estimate. You will never face unexpected driver demands during your trip.
          </>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  const allFaqItems = faqCategories.flatMap((cat) => cat.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.schemaAnswer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "FAQs", item: faqUrl },
    ],
  };

  return (
    <SiteShell>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <main className="overflow-x-hidden bg-[#f8fafc]">
        {/* HEADER SECTION */}
        <section
          aria-labelledby="faq-page-heading"
          className="border-b border-slate-200 bg-white px-5 pt-10 pb-12 sm:pt-14 sm:pb-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-700">
              <HelpCircle size={15} />
              KNOWLEDGE BASE &amp; CUSTOMER HELP • GO BENGALURU
            </div>
            <h1
              id="faq-page-heading"
              className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] leading-tight"
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Everything you need to know about booking with <strong>Lucky Travels</strong>: Kempegowda Airport pickup and drop procedures, <strong>2024–2026 factory S-CNG Ertiga</strong> luggage tolerances, transparent toll policies, and our strict <strong>WhatsApp Price-Lock Guarantee</strong>.
            </p>

            {/* Quick-Jump Navigation Pills */}
            <div className="mt-6 flex flex-wrap gap-2 pt-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-900"
                >
                  {cat.name.split(" ")[0]} {cat.name.split(" ")[1] || ""}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIZED QUESTIONS & RICH ANSWERS */}
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14 space-y-12">
          {faqCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                  <div className="h-9 w-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                    <CategoryIcon size={18} />
                  </div>
                  <h2
                    id={`${category.id}-heading`}
                    className="text-xl sm:text-2xl font-black text-slate-900"
                  >
                    {category.name}
                  </h2>
                </div>

                <div className="mt-5 grid gap-4">
                  {category.items.map((faq) => (
                    <article
                      key={faq.q}
                      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.q}
                      </h3>
                      <div className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                        {faq.renderAnswer}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS CALLOUT */}
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-6 sm:p-10 text-white shadow-xl">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                STILL HAVE QUESTIONS?
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black">
                Speak Directly with Founder &amp; Driver Bharath K S
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have a unique airport flight schedule, multi-car corporate team movement, or specific outstation itinerary? We provide personalized, upfront answers with zero obligation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-black text-slate-950 shadow transition hover:bg-slate-100"
                >
                  <Phone size={16} className="text-purple-700" />
                  Call +91 {SITE.phone}
                </a>
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-black text-white shadow transition hover:bg-emerald-500"
                >
                  <MessageCircle size={16} />
                  Ask on WhatsApp
                </a>
                <Link
                  href="/about"
                  className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-white/10 transition"
                >
                  Read Founder Story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICE HUBS INTERLINKING */}
        <section className="border-t border-slate-200 px-5 py-10 sm:py-14 bg-slate-50">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                  OUR SERVICES
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Explore Specialized Transit Services
                </h2>
              </div>
              <Link href="/contact" className="text-xs font-bold text-purple-700 underline">
                Contact dispatch desk →
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/airport-taxi-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                ✈️ Bangalore Airport Taxi
              </Link>
              <Link
                href="/car-rental-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                ⏱️ Hourly City Rental (8h/10h/12h)
              </Link>
              <Link
                href="/outstation-cabs-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                🛣️ Outstation Highway Cabs
              </Link>
              <Link
                href="/corporate-car-rental-bangalore"
                className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:text-purple-700 transition"
              >
                💼 Corporate GST Mobility
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}