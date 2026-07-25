import type { Metadata } from "next";
import SiteShell from "@/components/shared/SiteShell";
import SeoPage from "@/components/shared/SeoPage";
import { services } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Lucky Travels",
  description: "Learn why Lucky Travels focuses exclusively on Premium Ertiga airport taxi and travel services in Bengaluru.",
  alternates: { canonical: "/about" },
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
        related={services.map((service) => ({ href: `/services/${service.slug}`, label: service.name }))}
      />
    </SiteShell>
  );
}
