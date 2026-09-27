import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  User,
  HelpCircle,
  Compass,
  ArrowLeft,
  Luggage,
  Sun,
  Flame,
  BookOpen,
  Info,
  MapPin,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Pitru Paksha & Pinda Daana Places near Bangalore | Paschima Vahini Srirangapatna Ertiga Cab",
  description:
    "Complete guide to performing Pitru Paksha & Mahalaya Amavasya tarpana at Paschima Vahini, Triveni Sangama & Cauvery ghats. Same-day 6+1 AC Ertiga cab package from Bangalore.",
  alternates: {
    canonical: `${SITE.url}/bangalore-to-srirangapatna-pitru-paksha-cab`,
  },
  openGraph: {
    title: "Pitru Paksha & Pinda Daana Places near Bangalore | Paschima Vahini Srirangapatna Cab",
    description:
      "Ritual guide, timings, and dedicated doorstep 6+1 AC Ertiga cab service from Bangalore to Srirangapatna Paschima Vahini & Triveni Sangama for Pitru Paksha rites.",
    url: `${SITE.url}/bangalore-to-srirangapatna-pitru-paksha-cab`,
    type: "article",
    images: [
      {
        url: `${SITE.url}/images/gallery/srirangapatna-paschima-vahini-pitru-paksha-tarpanam.jpg`,
        width: 1200,
        height: 630,
        alt: "Srirangapatna Paschima Vahini Pitru Paksha Tarpanam Ritual",
      },
    ],
  },
};

export default function SrirangapatnaPitruPakshaPage() {
  const pageUrl = `${SITE.url}/bangalore-to-srirangapatna-pitru-paksha-cab`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Lucky Travels, I would like to book a same-day 6+1 Ertiga cab from Bangalore to Srirangapatna for Pitru Paksha / Mahalaya rituals.
Pickup Date:
Pickup Time (Recommended 4:30 AM):
Pickup Location in Bangalore:
Passenger Count (Max 6):
Destination: Paschima Vahini / Triveni Sangama / Sri Ranganathaswamy Temple`
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: "Bangalore to Srirangapatna Pitru Paksha & Pinda Daana Pilgrimage Cab Package",
    serviceType: "Sacred Pilgrimage Taxi Service",
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      brand: { "@type": "Brand", name: SITE.brand },
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "Place", name: "Srirangapatna" },
      { "@type": "Place", name: "Paschima Vahini" },
      { "@type": "Place", name: "Triveni Sangama" },
      { "@type": "Place", name: "Gosai Ghat" },
      { "@type": "Place", name: "Shivanasamudra" },
    ],
    url: pageUrl,
    image: `${SITE.url}/images/gallery/srirangapatna-paschima-vahini-pitru-paksha-tarpanam.jpg`,
    priceRange: "₹₹",
    telephone: `+91${SITE.phone}`,
    description:
      "Same-day dedicated 6+1 AC Maruti Suzuki Ertiga round-trip taxi service from Bangalore to Srirangapatna for Pitru Paksha ancestral rites, Pinda Daana, and Tila Tarpana.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Outstation Cabs Bangalore", item: `${SITE.url}/outstation-cabs-bangalore` },
      { "@type": "ListItem", position: 3, name: "Pitru Paksha Srirangapatna Cab", item: pageUrl },
    ],
  };

  const faqs = [
    {
      question: "Why is Paschima Vahini in Srirangapatna considered the primary place for Pinda Daana?",
      answer:
        "At Paschima Vahini, the sacred Cauvery River turns from its normal eastward flow and moves westward toward the setting sun. In Vedic scriptures, westward-flowing holy water is believed to hold unique spiritual energy for ancestral rites (Sraddha, Pinda Daana, and Tila Tarpana), liberating souls from the cycle of rebirth. This gives Srirangapatna the sacred title of 'Dakshina Gaya'.",
    },
    {
      question: "Who in the family performs the Pitru Paksha rituals?",
      answer:
        "In traditional Vedic custom, only the eldest son (or designated Karta whose father/mother has passed away) actively sits with the priest to perform the holy water offerings (Tila Tarpana) and Pinda Daana. Other family members, including the spouse and elders, respectfully accompany the karta and witness the ceremony from the steps without actively offering water.",
    },
    {
      question: "What other riverbank spots exist en-route to Mysore for ancestral rites?",
      answer:
        "While Paschima Vahini is the foremost destination, other revered Cauvery river spots include Triveni Sangama (confluence of Cauvery, Kabini, and Lokapavani), Gosai Ghat in Srirangapatna, Muthathi riverbank near Malavalli, and Shivanasamudra / Bharachukki river stretches. Srirangapatna remains the most preferred due to accessible stone ghats and availability of certified Vedic purohits.",
    },
    {
      question: "What time should we leave Bangalore for same-day tarpana?",
      answer:
        "A 4:30 AM departure from Bangalore is recommended. Reaching Paschima Vahini by 6:45 AM – 7:00 AM ensures you can take the holy dip (Sankalpa Snana) and perform the rituals during the auspicious morning Muhurta (Sangava/Aparahna kaala) before river stones get heated by the sun.",
    },
    {
      question: "How does the Ertiga accommodate our luggage with the rear CNG tank?",
      answer:
        "Our Ertiga is equipped with a clean factory-fitted CNG tank at the rear. For same-day Pitru Paksha pilgrimages, families travel light without large trolley suitcases. The available boot area behind the 3rd row comfortably accommodates 3 to 4 soft duffel bags, backpacks with fresh traditional clothing (panche/sarees), towels, and brass puja vessels (sompu/lota).",
    },
    {
      question: "Are external luggage carriers mounted on the roof?",
      answer:
        "No. Our Ertigas feature a sleek factory roofline without external luggage racks. This provides superior highway aerodynamics, reduces wind noise along the 10-lane expressway, and ensures effortless height clearance into ancient temple parking gates and low riverbank tree canopies.",
    },
    {
      question: "Does the chauffeur wait while our family performs river rituals and temple darshan?",
      answer:
        "Yes, dedicated chauffeur standby is included for the entire day. The car remains safely parked at Paschima Vahini, Triveni Sangama, or Sri Ranganathaswamy Temple. Your dry clothing, mobile phones, and valuables remain securely locked with the driver.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <main className="min-h-screen bg-[#fafaf9] py-8 sm:py-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Link
              href="/outstation-cabs-bangalore"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-700 hover:underline"
            >
              <ArrowLeft size={14} /> Back to Outstation Packages
            </Link>
          </div>

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-900 border border-amber-200">
              <Flame size={13} className="text-amber-700" /> <strong>PITRU PAKSHA &amp; PINDA DAANA GUIDE</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-sky-800">
              <Calendar size={13} className="text-sky-700" /> SEASONAL PILGRIMAGE 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200">
              <User size={13} className="text-slate-600" /> CHAUFFEUR BHARATH K S
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Pitru Paksha &amp; Pinda Daana Places near Bangalore | Srirangapatna &amp; Mysore Corridor Guide &amp; Cab Package
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 text-justify">
            <strong>Pitru Paksha (Mahalaya Paksha)</strong> is the sacred 16-day lunar period dedicated to honoring departed ancestors through <em>Tila Tarpana</em>, <em>Pinda Daana</em>, and <em>Sraddha</em>. For families residing in Bengaluru, travelling to a sacred riverbank where holy waters flow toward the setting sun is considered vital for ancestral peace (<em>Pitri Trupti</em>). Explore the most revered ritual spots along the{" "}
            <Link href="/bangalore-to-mysore-cab" className="font-bold text-purple-700 underline">
              Bangalore to Mysore highway corridor
            </Link>
            , learn essential ritual guidelines, and book a dedicated <strong>same-day 6+1 Maruti Suzuki Ertiga cab</strong> with guaranteed early-morning doorstep pickup.
          </p>

          {/* Hero Image Showcase */}
          <figure className="group my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/srirangapatna-paschima-vahini-pitru-paksha-tarpanam.jpg"
                alt="Paschima Vahini Srirangapatna Pitru Paksha Tarpanam Ritual Ghats"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Sacred Rites:</strong> Ancestral <em>Tila Tarpana</em> at <strong>Paschima Vahini</strong>, Cauvery River</span>
              <span className="text-sky-700 font-semibold shrink-0"><strong>Dakshina Gaya Pilgrimage</strong></span>
            </figcaption>
          </figure>

          {/* Quick Metrics */}
          <section className="my-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <Compass size={15} /> Travel Distance &amp; Time
                </span>
                <p className="mt-2 text-xl sm:text-2xl font-black text-slate-900">125 km | 2.5 Hrs</p>
                <p className="mt-1 text-xs text-slate-500">Via <strong>10-Lane Bengaluru–Mysuru Expressway (NH-275)</strong></p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <Clock size={15} /> Recommended Departure
                </span>
                <p className="mt-2 text-xl sm:text-2xl font-black text-slate-900">4:30 AM Sharp</p>
                <p className="mt-1 text-xs text-slate-500">Arrive by 7:00 AM for morning rituals</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-700 tracking-wider">
                  <ShieldCheck size={15} /> Dedicated Vehicle
                </span>
                <p className="mt-2 text-xl sm:text-2xl font-black text-slate-900">6+1 AC Ertiga</p>
                <p className="mt-1 text-xs text-slate-500"><strong>KA03AP8285</strong> • Commercial yellow plate</p>
              </div>
            </div>
          </section>

          {/* INFORMATIONAL GUIDE SECTION: SACRED PLACES EN-ROUTE */}
          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen className="text-purple-700" /> Sacred Places for Pinda Daana En-Route to Mysore
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed text-justify">
              When planning ancestral rites from Bangalore, devotees consider several holy riverbank destinations along the Cauvery. Here is an overview of the primary <strong>Cauvery river shrines</strong>:
            </p>

            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-lg font-bold text-slate-900">1. Paschima Vahini (Srirangapatna) – The Foremost Choice</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                  Located right on the approach to Srirangapatna via <strong>NH-275</strong>, this is where the sacred Cauvery river takes a rare turn from east to west. In Vedic tradition, offering tarpana at a westward river (<em>Paschima Vahini</em>) delivers liberation (<em>Moksha</em>) to departed souls. With clean granite bathing steps, pre-arranged purohit mandapas, and easy parking, it is the <strong>primary destination for Bangalore families</strong>.
                </p>
              </div>

              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="text-lg font-bold text-slate-900">2. Triveni Sangama (Srirangapatna)</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                  Situated 3 km from Srirangapatna town, this is the holy confluence of three sacred waters: the <strong>Cauvery</strong>, <strong>Kabini (Kapila)</strong>, and the subterranean <strong>Lokapavani</strong>. Pilgrims perform <em>Sankalpa Snana</em> (holy bath) followed by <em>Pinda Pradana</em>. The tranquil tree canopy and wide riverfront make it ideal for unhurried ancestral ceremonies.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-bold text-slate-900">3. Gosai Ghat &amp; Nimishamba Riverbanks (Ganjam)</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                  A peaceful alternative located upstream in Ganjam. <strong>Gosai Ghat</strong> features ancient stone pavilions constructed by Goswami saints. Right nearby, the riverside steps at <strong>Sri Nimishamba Temple</strong> allow families to seek the goddess’s blessings immediately following their riverbank water offerings.
                </p>
              </div>

              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="text-lg font-bold text-slate-900">4. Shivanasamudra &amp; Muthathi (Malavalli Corridor)</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                  Devotees opting for alternative routes via Kanakapura Road (NH-948) can visit the Cauvery riverbanks at <strong>Muthathi</strong> and the island temple of Sri Ranganathaswamy at <strong>Shivanasamudra (Madhya Ranga)</strong> for traditional river ghat ceremonies.
                </p>
              </div>
            </div>
          </section>

          {/* RITUAL PROTOCOL & CUSTOMS EXPLAINED */}
          <section className="mt-10 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Info className="text-purple-700" /> Ritual Guidelines: Who Performs and What to Carry
            </h2>

            <div className="mt-4 grid gap-5 sm:grid-cols-2 text-sm text-slate-700">
              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-2">The Role of the Karta</h3>
                <p className="leading-relaxed text-justify">
                  <strong>Only the eldest son or designated <em>karta</em></strong> (whose parents or forebears have passed away) actively sits for <em>Pinda Daana</em> and <em>Tila Tarpana</em> with the Vedic priest. He wears a traditional cotton dhoti (<em>panche</em>) and sacred thread (<em>janivara</em> worn over the right shoulder - <em>Pracheenaveeti</em>).
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-2">Role of Accompanying Family</h3>
                <p className="leading-relaxed text-justify">
                  Spouses and family members <strong>do not offer water directly</strong>. They accompany the karta to offer moral support, witness the ceremony respectfully from the stone steps with folded hands, and participate in final prayer offerings (<em>pradakshina</em>) and priest dakshina.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-2">Essential Items Checklist</h3>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li><strong>2 pairs of traditional clothes:</strong> 1 wet for river snana, 1 fresh dry pair for temple darshan</li>
                  <li>Cotton towels and cloth bags for wet garments</li>
                  <li>Traditional <strong>brass sompu</strong> (lota) or kamandalu</li>
                  <li>Family gotra, pravara, and ancestral names list</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-2">Priest &amp; Samagri on Site</h3>
                <p className="leading-relaxed text-justify">
                  Certified Vedic purohits (versed in <strong>Kannada, Telugu, Tamil, and North Indian traditions</strong>) are stationed on the ghats. They arrange the black sesame (<em>til</em>), darbha grass, cooked rice pinda, and banana leaves directly.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Day-Trip Itinerary */}
          <section className="mt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Curated Same-Day Pilgrimage Itinerary &amp; Timing
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Ancestral rituals require quiet composure and adherence to Vedic time windows (<em>Sangava / Aparahna kaala</em>). Our thoughtfully timed round-trip itinerary ensures elders avoid highway rush, complete the rites comfortably, and return home refreshed:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <span className="shrink-0 rounded-xl bg-purple-100 text-purple-900 font-black px-3.5 py-1.5 text-xs">
                  04:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Doorstep Pickup across Bangalore</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Chauffeur <strong>Bharath K S</strong> arrives 15 minutes ahead of schedule with a clean, sanitized Ertiga. Early departure bypasses Bengaluru city exit signals and expressway toll congestion.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <span className="shrink-0 rounded-xl bg-sky-100 text-sky-900 font-black px-3.5 py-1.5 text-xs">
                  07:00 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Arrival at Paschima Vahini / Triveni Sangama</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Direct drop at the riverbank approach. Family conducts holy river bath (<em>Sankalpa Snana</em>) and transitions to traditional attire. The karta sits with the Vedic priest for <em>Pinda Daana</em> and <em>Tila Tarpana</em> while family members witness with reverence.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <span className="shrink-0 rounded-xl bg-amber-100 text-amber-900 font-black px-3.5 py-1.5 text-xs">
                  10:30 AM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Sri Ranganathaswamy Temple Darshan</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    After completing river rituals and changing into fresh dry clothes, the cab moves to the historic temple complex for peaceful sanctum darshan of <strong>Lord Sri Ranganathaswamy (Adi Ranga)</strong>.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <span className="shrink-0 rounded-xl bg-emerald-100 text-emerald-900 font-black px-3.5 py-1.5 text-xs">
                  12:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Sri Nimishamba Temple &amp; Cauvery River Shrine</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    A brief, serene 10-minute drive to Ganjam to offer prayers at <strong>Sri Nimishamba Temple</strong> directly adjoining the picturesque rocky banks of the Cauvery.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <span className="shrink-0 rounded-xl bg-slate-100 text-slate-900 font-black px-3.5 py-1.5 text-xs">
                  01:30 PM
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Sattvic Lunch &amp; Smooth Return Journey</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Stop at a clean vegetarian restaurant on the highway for a relaxed meal. Rejoin the <strong>10-lane expressway</strong> for a fatigue-free drive back to Bangalore by 4:30 PM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Image Showcase: Sangama & Belongings Standby */}
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/gallery/srirangapatna-triveni-sangama-ertiga-cab.jpg"
                  alt="Triveni Sangama Srirangapatna Ertiga Cab Standby"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 448px"
                />
              </div>
              <figcaption className="p-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100">
                <strong>Triveni Sangama:</strong> Vehicle standby under shaded riverbank parking.
              </figcaption>
            </figure>

            <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/gallery/lucky-travels-ertiga-belongings-safe-standby.jpg"
                  alt="Lucky Travels Ertiga Secure Belongings and Ritual Puja Gear Standby"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 448px"
                />
              </div>
              <figcaption className="p-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100">
                <strong>Luggage Security:</strong> Valuables, dry clothes, and brass puja sompu kept safely on standby.
              </figcaption>
            </figure>
          </div>

          {/* Luggage, CNG & Fleet Specifications */}
          <section className="my-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight">
              Vehicle Comfort, CNG Configuration &amp; Luggage Handling
            </h2>
            <p className="mt-3 text-slate-700 leading-8 text-justify">
              Our commercially registered <strong>6+1 Maruti Suzuki Ertiga (KA03AP8285)</strong> is optimized specifically for day-trip family pilgrimages. Here is how your travel comfort is maintained:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Luggage size={24} className="shrink-0 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Boot Space with Factory-Fitted CNG</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Our vehicle features an integrated <strong>factory CNG cylinder</strong> at the base. Because same-day pilgrimage journeys require only light day-bags (folded dry panche, sarees, towels, and brass sompu vessels), the vertical boot space easily accommodates <strong>3 to 4 soft backpacks and duffel bags</strong> without cluttering seat legroom.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <ShieldCheck size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Clean Roofline — No Rooftop Carrier</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    We deliberately do not mount noisy external roof carriers. This preserves vehicle stability along the expressway, eliminates aerodynamic cabin rumble, and allows easy navigation under ancient temple entrance archways and tree-lined river approach gates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Sun size={24} className="shrink-0 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Dual Independent Roof AC</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    High-capacity rear blowers keep all three seating rows cool, ensuring <strong>elderly family members who may be fasting</strong> stay completely relaxed after outdoor riverbank rites.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 size={24} className="shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-900 text-base">Direct Owner-Operated Reliability</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed text-justify">
                    Book directly with <strong>Bharath K S</strong>. You are never subject to aggregator driver cancellations, surge pricing, or unfamiliar substitute drivers on an auspicious day.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Image Showcase: Temples Darshan */}
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/gallery/srirangapatna-ranganathaswamy-temple-darshan.jpg"
                  alt="Sri Ranganathaswamy Temple Darshan Srirangapatna"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 448px"
                />
              </div>
              <figcaption className="p-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100">
                <strong>Sri Ranganathaswamy Temple:</strong> Post-ritual darshan in fresh traditional clothing.
              </figcaption>
            </figure>

            <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/gallery/srirangapatna-nimishamba-temple-cauvery-riverbank.jpg"
                  alt="Sri Nimishamba Temple on Cauvery Riverbank Ganjam Srirangapatna"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 448px"
                />
              </div>
              <figcaption className="p-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100">
                <strong>Sri Nimishamba Temple:</strong> Scenic riverside sanctuary visit in Ganjam.
              </figcaption>
            </figure>
          </div>

          {/* High-Conversion Mid-Page CTA Card */}
          <section className="my-12 rounded-3xl bg-[#080d2b] p-7 sm:p-10 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-amber-400">
              RESERVE YOUR PITRU PAKSHA PILGRIMAGE CAB
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
              Book Your Bangalore to Srirangapatna Same-Day Ertiga
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 text-justify">
              Dates during <strong>Mahalaya Paksha</strong> fill up quickly. Secure your early morning <strong>4:30 AM pickup</strong> with owner-chauffeur Bharath K S. Transparent fixed pricing, Fastag expressway tolls accounted for, and zero last-minute cancellations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-[#080d2b] shadow-md transition hover:bg-slate-100 text-sm"
              >
                <Phone size={18} /> Call +91 {SITE.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-black text-white shadow-md transition hover:bg-green-700 text-sm"
              >
                <MessageCircle size={18} /> WhatsApp Booking Details
              </a>
            </div>
            <p className="mt-3 text-xs text-white/60">
              *Early morning 4:30 AM pickups guaranteed across Bengaluru.
            </p>
          </section>

          {/* Return Journey Feature Image */}
          <figure className="group my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/bangalore-mysore-expressway-ertiga-return-trip.jpg"
                alt="White Ertiga KA03AP8285 Returning on Bangalore Mysore Expressway"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
              <span><strong>Smooth Highway Return:</strong> Cruising the 10-lane expressway back to Bengaluru</span>
              <span className="text-purple-700 font-bold shrink-0">Registration: <strong>KA03AP8285</strong></span>
            </figcaption>
          </figure>

          {/* Frequently Asked Questions */}
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center gap-2">
              <HelpCircle className="text-purple-700" /> Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Cross-Linking */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <h3 className="font-bold text-slate-900 mb-2">Explore Related Outstation &amp; Pilgrimage Corridors</h3>
            <p className="leading-relaxed">
              Looking for other sacred routes or leisure journeys? Check our dedicated guides for the{" "}
              <Link href="/bangalore-to-mysore-cab" className="font-bold text-purple-700 underline">
                Bangalore to Mysore Cab
              </Link>
              , sacred{" "}
              <Link href="/bangalore-to-tirupati-cab" className="font-bold text-purple-700 underline">
                Bangalore to Tirupati Package
              </Link>
              , scenic{" "}
              <Link href="/bangalore-to-coorg-cab" className="font-bold text-purple-700 underline">
                Bangalore to Coorg Cab
              </Link>
              , reliable{" "}
              <Link href="/airport-taxi-bangalore" className="font-bold text-purple-700 underline">
                Bangalore Airport Taxi
              </Link>
              , or review our entire fleet on the{" "}
              <Link href="/outstation-cabs-bangalore" className="font-bold text-purple-700 underline">
                Bangalore Outstation Cabs hub
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}