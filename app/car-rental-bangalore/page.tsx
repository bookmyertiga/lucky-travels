import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Luggage,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

const routeUrl = `${SITE.url}/car-rental-bangalore`;
const carRentalWhatsAppUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Lucky Travels, I need a car rental in Bangalore.
Date:
Reporting time:
Pickup location:
Planned stops:
Approximate duration:
Adults and children:
Large suitcases and cabin bags:
Planned activities or assistance required:`)}`;
const emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Car Rental Bangalore Enquiry")}`;

const pageTitle =
  "Car Rental in Bangalore with Driver | 4hr, 8hr & Full-Day Ertiga Hire";
const pageDescription =
  "Hire a chauffeur-driven 6+1 Ertiga for local Bangalore city travel, family events, hospital visits, & shopping trips. Flexible 4-hr, 8-hr, & full-day rental options.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: routeUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: routeUrl,
    type: "website",
    siteName: "Go Bengaluru by Lucky Travels",
    images: [
      {
        url: `${SITE.url}/images/services/hourly.jpg`,
        width: 1536,
        height: 1024,
        alt: "Go Bengaluru Premium Ertiga for hourly and daily car rental in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE.url}/images/services/hourly.jpg`],
  },
};

const rentalOptions = [
  {
    title: "Business meetings and corporate travel",
    text: "Attend multiple meetings across Bangalore in a Premium Ertiga with a professional driver, allowing you to focus on your schedule.",
  },
  {
    title: "Shopping and city stops",
    text: "Visit multiple retail locations, malls and shops with convenient waiting and luggage space for purchases.",
  },
  {
    title: "Family events and personal occasions",
    text: "Travel comfortably for weddings, celebrations, family functions and multi-location events across the city.",
  },
  {
    title: "Hospital visits and patient assistance",
    text: "Arrange reliable, punctual transport for medical appointments, hospital visits and elderly traveller assistance.",
  },
  {
    title: "Local sightseeing",
    text: "Explore Bangalore attractions with flexible timing, professional driving and comfortable seating for the entire family.",
  },
  {
    title: "Flexible short, half-day and full-day rentals",
    text: "Choose the duration that suits your needs—from a few hours to a complete day of city exploration and travel.",
  },
];

const serviceBenefits = [
  "Clean, air-conditioned Premium Maruti Suzuki Ertiga dedicated to your rental.",
  "Experienced driver familiar with Bangalore traffic patterns and locality navigation.",
  "Flexible 6/7-seater category suitable for families and small groups, subject to passenger and luggage suitability.",
  "Direct communication with the owner-driver or assigned trusted driver for real-time changes.",
  "Practical luggage space for shopping, personal items and travel requirements.",
  "Family-friendly and elderly-friendly assistance with professional pickup and drop planning.",
];

const bangaloreAreas = [
  "Whitefield",
  "Electronic City",
  "Indiranagar",
  "HSR Layout",
  "Koramangala",
  "Marathahalli",
  "Hebbal",
  "Yelahanka",
  "Jayanagar",
  "JP Nagar",
];

const faqItems = [
  {
    question: "How do I book a car rental in Bangalore with Lucky Travels?",
    answer:
      "Call +91 9886814344, send your travel details on WhatsApp, or email bookmyertiga@gmail.com. Share your date, reporting time, pickup location, planned stops, duration and passenger details. A trip-specific quote and written confirmation will be provided before the journey.",
  },
  {
    question: "Is the Premium Ertiga suitable for a family or small group?",
    answer:
      "Yes. The Premium Ertiga offers flexible seating for many family and small-group journeys, subject to passenger count and luggage requirements. The number of occupied seats and the size of bags affect the final arrangement, so share these details before confirmation.",
  },
  {
    question: "Can I hire the vehicle for multiple stops or a full day?",
    answer:
      "Yes. Hourly, half-day and full-day packages can be discussed based on your itinerary, planned stops and duration. The final package terms, including additional charges for waiting time, parking and tolls, are confirmed in writing before the journey.",
  },
];

function RouteImage({
  href,
  src,
  alt,
  caption,
  width,
  height,
  loading = "lazy",
  featured = false,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  featured?: boolean;
}) {
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <Link href={href} aria-label={caption} className="block">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={
            featured
              ? "h-[220px] w-full object-cover sm:h-[260px] lg:h-[285px]"
              : "h-auto w-full object-cover"
          }
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>
      <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionHeading({
  eyebrow,
  children,
  id,
  dark = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  id: string;
  dark?: boolean;
}) {
  return (
    <>
      <p
        className={
          dark
            ? "text-sm font-black uppercase tracking-[.18em] text-amber-400"
            : "section-kicker"
        }
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#090f2f]"}`}
      >
        {children}
      </h2>
    </>
  );
}

export default function CarRentalBangalorePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Rental in Bangalore with Driver | Premium Ertiga",
    alternateName: [
      "Go Bengaluru Car Rental",
      "GoBengaluru Car Rental",
      "Go Bangalore Car Rental",
      "Hourly Car Rental Bangalore",
      "Daily Car Rental Bangalore",
    ],
    serviceType: "Premium Ertiga car rental service in Bangalore",
    provider: {
      "@type": "TaxiService",
      name: "Go Bengaluru by Lucky Travels",
      alternateName: ["GoBengaluru", "Go Bangalore", "Lucky Travels"],
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
    ],
    url: routeUrl,
    image: `${SITE.url}/images/services/hourly.jpg`,
    description: pageDescription,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rental Packages",
        item: `${SITE.url}/services/rental-packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Car Rental in Bangalore",
        item: routeUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/car-rental-bangalore#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What hourly car rental packages does Lucky Travels offer in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide customized chauffeur-driven Ertiga packages including 4 Hours / 40 KM (short errands, appointments), 8 Hours / 80 KM (business meetings, shopping), and full-day 12-hour city rentals.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hire a cab for multi-stop city travel and local sightseeing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our owner-driver-led service accommodates multi-stop corporate schedules, wedding shopping, family visits, and Bengaluru sightseeing with flexible waiting terms.",
        },
      },
      {
        "@type": "Question",
        name: "Are tolls and parking included in the hourly rental quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All quotes outline base package coverage clearly. Any toll charges or actual mall/corporate parking fees are transparently confirmed in writing before the trip.",
        },
      },
    ],
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="overflow-x-hidden">
        <nav
          aria-label="Breadcrumb"
          className="page-shell py-5 text-sm text-slate-600"
        >
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link
                href="/"
                className="font-bold text-purple-700 hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/services/rental-packages"
                className="font-bold text-purple-700 hover:underline"
              >
                Rental Packages
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Car Rental in Bangalore</li>
          </ol>
        </nav>

        <section
          aria-labelledby="car-rental-heading"
          className="relative bg-gradient-to-br from-[#080d2b] via-[#24105f] to-[#6817d4] px-5 py-6 text-white"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-black uppercase leading-5 tracking-[.18em] text-amber-400 sm:text-sm sm:leading-normal">
                BANGALORE CAR RENTAL ENQUIRIES
              </p>
              <h1
                id="car-rental-heading"
                className="mt-2 max-w-3xl text-[1.6rem] font-black leading-tight sm:mt-3 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]"
              >
                Car Rental in Bangalore with Driver for Hourly and Full-Day
                Travel
              </h1>
              <p className="mt-2 max-w-3xl text-[13px] leading-5 text-white/85 sm:mt-3 sm:text-lg sm:leading-8 lg:text-base lg:leading-7">
                Enquire with Go Bengaluru by Lucky Travels for chauffeur-driven
                car rental in Bangalore. Use our Premium Ertiga for local
                travel, hourly packages, multi-stop journeys and full-day city
                trips. Receive a transparent, trip-specific quote after
                discussing your itinerary and needs.
              </p>
              <p className="mt-1 text-sm font-black leading-5 text-amber-300 sm:mt-2 sm:text-lg sm:leading-6 lg:text-base">
                {SITE.specialisationSlogan}
              </p>
              <div className="mt-2 flex flex-wrap gap-3 sm:mt-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-black text-purple-800 lg:py-3 lg:text-sm"
                >
                  <Phone size={19} /> Call Now: +91 {SITE.phone}
                </a>
                <a
                  href={carRentalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 font-black text-white lg:py-3 lg:text-sm"
                >
                  <MessageCircle size={19} /> Get an Instant Quote
                </a>
              </div>
              <p className="mt-1 text-xs leading-5 text-white/70 sm:mt-2">
                24/7 enquiries. Every rental is subject to date, time, route,
                vehicle and driver availability confirmation.
              </p>
              <a
                href="#rental-options"
                className="mt-3 flex min-h-11 w-full max-w-max items-center justify-center gap-2 rounded-full border-2 border-amber-400 bg-white px-4 py-2.5 text-center text-sm font-black text-purple-800 shadow-lg motion-safe:animate-pulse focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden sm:px-5"
              >
                Explore Rental Options Below
                <ArrowDown
                  size={17}
                  aria-hidden="true"
                  className="motion-safe:animate-bounce"
                />
              </a>
            </div>
            <RouteImage
              href="/"
              src="/images/services/hourly.jpg"
              alt="Go Bengaluru Premium Ertiga for hourly and daily car rental in Bangalore"
              caption="Premium Ertiga car rental planned directly with Go Bengaluru by Lucky Travels."
              width={1536}
              height={1024}
              loading="eager"
              featured
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 translate-y-1/2 lg:flex">
            <a
              href="#rental-options"
              className="flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-amber-400 bg-white px-4 py-2.5 text-center text-sm font-black text-purple-800 shadow-lg motion-safe:animate-pulse focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white hover:border-purple-700 sm:px-5"
            >
              Explore Rental Options Below
              <ArrowDown
                size={17}
                aria-hidden="true"
                className="motion-safe:animate-bounce"
              />
            </a>
          </div>
        </section>

        <section id="rental-options" className="bg-white px-5 pb-10 pt-16">
          <div className="page-shell">
            <SectionHeading
              id="rental-options-heading"
              eyebrow="HOURLY, HALF-DAY AND FULL-DAY OPTIONS"
            >
              Bangalore Car-Rental Options
            </SectionHeading>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rentalOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-black text-[#090f2f]">
                    {option.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="ertiga-specialisation-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:items-center">
            <div>
              <SectionHeading
                id="ertiga-specialisation-heading"
                eyebrow="COMFORT AND CONSISTENCY"
              >
                Why Lucky Travels Offers Only the Premium Ertiga
              </SectionHeading>
              <div className="mt-6 space-y-4 leading-8 text-slate-700">
                <p>
                  Instead of offering every available vehicle category, Lucky
                  Travels concentrates on the Premium Ertiga to provide a more
                  consistent and dedicated customer experience. Compared with a
                  typical compact hatchback or sedan, the Ertiga offers more
                  flexible seating and cabin space for many family, small-group
                  and longer journeys. Final passenger and luggage suitability
                  is always confirmed before booking.
                </p>
                <p>
                  Specialising in one category helps Lucky Travels provide a
                  more consistent experience in vehicle preparation,
                  cleanliness, seating guidance, luggage planning, customer
                  communication and trip coordination. You receive a more
                  dedicated experience instead of an uncertain vehicle
                  assignment at the last minute.
                </p>
                <p className="font-black text-amber-600">
                  {SITE.specialisationSlogan}
                </p>
              </div>
            </div>
            <RouteImage
              href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
              src="/images/vehicle/middle-row.jpg"
              alt="Premium Ertiga middle-row seating for comfortable Bangalore car rental"
              caption="Clean Premium Ertiga cabin seating for families and small groups."
              width={1536}
              height={1024}
            />
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 lg:p-7">
            <h3 className="font-black text-amber-900">Luggage note</h3>
            <p className="mt-2 leading-7 text-amber-800">
              Luggage capacity is not unlimited. Suitability depends on the
              passenger count, seats required, suitcase sizes and other travel
              requirements. Please share these details before confirmation.
            </p>
          </div>
        </section>

        <section
          className="bg-slate-100 px-5 py-12 sm:py-16"
          aria-labelledby="service-benefits-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="service-benefits-heading"
              eyebrow="DIRECT BOOKING, CLEAR COMMUNICATION"
            >
              What the Premium Ertiga Car-Rental Service Includes
            </SectionHeading>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceBenefits.map((benefit, index) => {
                const Icon = [ShieldCheck, Luggage, MapPinned][index % 3];
                return (
                  <article
                    key={benefit}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft"
                  >
                    <Icon
                      className="mt-1 shrink-0 text-purple-700"
                      size={23}
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-700">{benefit}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-7 leading-8 text-slate-700">
              Go Bengaluru is the online service name of Lucky Travels at
              Gobengaluru.in. Whether you know the brand as{" "}
              <strong>Go Bengaluru</strong>, type <strong>GoBengaluru</strong>{" "}
              as the website name or search for
              <strong> Go Bangalore</strong>, the service focuses only on
              Premium Ertiga journeys for your Bangalore rental needs.
            </p>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="how-it-works-heading"
        >
          <SectionHeading
            id="how-it-works-heading"
            eyebrow="TRANSPARENT PROCESS"
          >
            How Local Car Rental Works
          </SectionHeading>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="space-y-5 leading-8 text-slate-700">
              <div>
                <h3 className="font-black text-[#090f2f]">
                  1. Share your travel details
                </h3>
                <p className="mt-2">
                  Send the date, reporting time, pickup location, planned stops,
                  approximate duration and passenger and luggage details.
                </p>
              </div>
              <div>
                <h3 className="font-black text-[#090f2f]">
                  2. Get a transparent quote
                </h3>
                <p className="mt-2">
                  Receive a trip-specific quote with transparent per-kilometre
                  rates and applicable charges for parking and tolls.
                </p>
              </div>
              <div>
                <h3 className="font-black text-[#090f2f]">
                  3. Written confirmation before the trip
                </h3>
                <p className="mt-2">
                  All journey terms are confirmed in writing before the rental
                  begins. No hidden fees or last-minute surprises.
                </p>
              </div>
              <div>
                <h3 className="font-black text-[#090f2f]">
                  4. Direct communication and coordination
                </h3>
                <p className="mt-2">
                  Confirm directly by phone, WhatsApp or email. The driver or
                  Lucky Travels will coordinate pickup and confirm all stops.
                </p>
              </div>
            </div>
            <RouteImage
              href="/"
              src="/images/vehicle/boot-space.jpg"
              alt="Premium Ertiga boot space for Bangalore car rental luggage planning"
              caption="Luggage planning is discussed before confirmation to ensure a comfortable journey."
              width={1536}
              height={1024}
            />
          </div>
        </section>

        <section
          className="bg-[#090f2f] px-5 py-12 text-white sm:py-16"
          aria-labelledby="areas-heading"
        >
          <div className="page-shell">
            <SectionHeading
              id="areas-heading"
              eyebrow="SERVICE AVAILABILITY"
              dark
            >
              Bangalore Areas Served
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-8 text-white/80">
              Lucky Travels provides car rental in major Bangalore localities
              including {bangaloreAreas.join(", ")} and other Bengaluru
              neighbourhoods. Service availability depends on the date, time,
              route, vehicle and driver confirmation.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Share your exact pickup location and itinerary for availability
              confirmation. Even if your area is not listed, enquire directly to
              discuss your specific journey requirements.
            </p>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="booking-heading"
        >
          <SectionHeading id="booking-heading" eyebrow="DIRECT CONTACT">
            Book Your Bangalore Car Rental
          </SectionHeading>
          <div className="mt-8 grid gap-6 sm:gap-8 lg:grid-cols-3">
            <a
              href={`tel:+91${SITE.phone}`}
              className="flex flex-col items-center rounded-2xl border border-purple-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <Phone className="text-purple-700" size={32} />
              <h3 className="mt-4 text-lg font-black text-[#090f2f]">Call</h3>
              <p className="mt-2 leading-7 text-slate-700">+91 {SITE.phone}</p>
              <p className="mt-1 text-sm text-slate-600">24/7 available</p>
            </a>
            <a
              href={carRentalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl border border-green-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <MessageCircle className="text-green-600" size={32} />
              <h3 className="mt-4 text-lg font-black text-[#090f2f]">
                WhatsApp
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Send details on WhatsApp
              </p>
              <p className="mt-1 text-sm text-slate-600">Quick reply</p>
            </a>
            <a
              href={emailUrl}
              className="flex flex-col items-center rounded-2xl border border-blue-200 bg-white p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <span className="text-2xl font-black text-blue-600">@</span>
              <h3 className="mt-4 text-lg font-black text-[#090f2f]">Email</h3>
              <p className="mt-2 break-all leading-7 text-slate-700 text-sm">
                {SITE.email}
              </p>
              <p className="mt-1 text-sm text-slate-600">Detailed enquiries</p>
            </a>
          </div>
        </section>

        <section
          className="page-shell py-12 sm:py-16"
          aria-labelledby="faq-heading"
        >
          <SectionHeading id="faq-heading" eyebrow="COMMON QUESTIONS">
            Car Rental in Bangalore FAQs
          </SectionHeading>
          <div className="mt-8 divide-y divide-slate-300 rounded-2xl border border-slate-200 bg-white px-6">
            {faqItems.map((item) => (
              <article key={item.question} className="py-6">
                <h3 className="text-lg font-black text-[#090f2f]">
                  {item.question}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-12 text-center sm:py-16">
          <div className="page-shell max-w-3xl">
            <h2 className="text-3xl font-black text-[#090f2f] sm:text-4xl">
              Start Your Bangalore Car Rental Enquiry Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-700">
              Call, WhatsApp or email Go Bengaluru by Lucky Travels with your
              rental requirements. You will receive a direct response after the
              date, itinerary and vehicle availability are reviewed.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-3 font-black text-white"
              >
                <Phone size={19} /> Call +91 {SITE.phone}
              </a>
              <a
                href={carRentalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white"
              >
                <MessageCircle size={19} /> Get an Instant Quote
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-black text-[#090f2f]"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
