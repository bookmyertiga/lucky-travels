import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/shared/SiteShell";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import SeoPage from "@/components/shared/SeoPage";
import { SITE, services } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Lucky Travels",
  description:
    "Learn why Lucky Travels focuses exclusively on Premium Ertiga airport taxi and travel services in Bengaluru.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Lucky Travels",
    description:
      "Learn why Lucky Travels focuses exclusively on Premium Ertiga airport taxi and travel services in Bengaluru.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lucky Travels",
    description:
      "Learn why Lucky Travels focuses exclusively on Premium Ertiga airport taxi and travel services in Bengaluru.",
  },
};

export default function About() {
  return (
    <SiteShell>
      <BreadcrumbJsonLd name="About Lucky Travels" path="/about" />
      <SeoPage
        eyebrow="About Lucky Travels"
        title="One focused promise: Premium Ertiga travel in Bengaluru"
        intro="Lucky Travels is built around a simple idea — offer one dependable vehicle category and deliver it with care."
        paragraphs={[
          "Rather than operating many unrelated vehicle types, Lucky Travels specialises exclusively in Premium Ertiga service. This focused approach helps customers know what to expect when they book: a spacious, practical vehicle suited to airport transfers, family travel, hourly use and outstation journeys.",
          "The Go Bengaluru identity reflects the travellers we serve — people arriving in Bengaluru, returning home, meeting family, attending business commitments or beginning a trip from the city.",
          "Bookings are handled directly by phone and WhatsApp, keeping communication clear from enquiry to pickup.",
        ]}
        bullets={[
          "Premium Ertiga only",
          "Bengaluru airport specialisation",
          "Customer-first communication",
          "Clean and comfortable travel",
          "Family and business friendly",
          "Direct booking support",
        ]}
        related={services.map((service) => ({
          href: `/services/${service.slug}`,
          label: service.name,
        }))}
        compact
      />
      <section className="mx-auto max-w-6xl px-5 pb-12" aria-labelledby="founder-commitment-heading">
        <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
          <p className="section-kicker">THE FOUNDER&apos;S COMMITMENT</p>
          <h2 id="founder-commitment-heading" className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">
            Travel should feel dependable from the first enquiry
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-700">
            Lucky Travels was founded on the belief that Bangalore travellers deserve punctual pickups, dignified chauffeurs and a clear vehicle promise. That means no car-downgrade surprises after an Ertiga is confirmed, direct communication when plans change and a prepared Premium Ertiga for the journey ahead.
          </p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            {SITE.specialisationSlogan} Read{" "}
            <Link href="/blog/why-lucky-travels-specialises-in-premium-ertiga" className="font-semibold text-purple-700 underline">
              Bharath K S&apos;s founder story
            </Link>{" "}
            to learn more about the focused vehicle-category decision.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-12 sm:py-16" aria-labelledby="zero-tolerance-heading">
        <div className="page-shell">
          <p className="section-kicker">OUR TRUST STANDARD</p>
          <h2 id="zero-tolerance-heading" className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">Three zero-tolerance rules</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Zero Vehicle Swaps", "We never send a hatchback or compact sedan after confirming an Ertiga."],
              ["Zero Surge Billing", "Transparent, agreed fares with no peak-hour spikes or hidden driver fees."],
              ["Direct Accountability", "Direct communication with the operational desk, with no automated bots or endless hold queues."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-[#090f2f]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16" aria-labelledby="fleet-specifications-heading">
        <p className="section-kicker">FLEET SPECIFICATIONS</p>
        <h2 id="fleet-specifications-heading" className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">A known vehicle category, prepared for comfort</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Pristine All-White Fleet", "Dual AC Clean Cabins", "Commercial Yellow Plate Compliant", "6+1 Executive Seating"].map((badge) => (
            <div key={badge} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-black text-purple-800 shadow-soft">{badge}</div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
