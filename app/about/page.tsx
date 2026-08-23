import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/shared/SiteShell";
import SeoPage from "@/components/shared/SeoPage";
import { SITE, services } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Lucky Travels",
  description:
    "Learn why Lucky Travels focuses exclusively on Premium Ertiga airport taxi and travel services in Bengaluru.",
  alternates: { canonical: "/about" },
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
      />
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <p className="max-w-3xl text-lg font-bold leading-8 text-purple-800">
          {SITE.specialisationSlogan}
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Read{" "}
          <Link
            href="/blog/why-lucky-travels-specialises-in-premium-ertiga"
            className="font-semibold text-purple-700 underline"
          >
            Bharath K S&apos;s founder story
          </Link>{" "}
          to learn why Lucky Travels chose one focused vehicle category.
        </p>
      </section>
    </SiteShell>
  );
}
