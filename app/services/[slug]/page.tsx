import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/shared/SiteShell";
import SeoPage from "@/components/shared/SeoPage";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { services, SITE } from "@/constants/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: `${SITE.url}/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: `/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  let related = services
    .filter((item) => item.slug !== slug)
    .map((item) => ({ href: `/services/${item.slug}`, label: item.name }));

  if (slug === "airport-transfers") {
    related = [{
      href: "/corporate-car-rental-bangalore",
      label: "Corporate Car Rental Bangalore for business delegates",
    }];
  }

  if (slug === "rental-packages") {
    related.unshift({
      href: "/car-rental-bangalore",
      label: "Car rental in Bangalore for hourly and full-day travel",
    });
  }

  if (slug === "outstation-packages") {
    related.unshift({
      href: "/outstation-cabs-bangalore",
      label: "Outstation cabs from Bangalore in a Premium Ertiga",
    });
    related.unshift({
      href: "/bangalore-to-mysore-cab",
      label: "Bangalore to Mysore Premium Ertiga cab",
    });
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "Service"],
    name: service.name,
    serviceType: service.intent,
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      url: SITE.url,
      telephone: `+91${SITE.phone}`,
      email: SITE.email,
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
    ],
    url: `${SITE.url}/services/${service.slug}`,
    image: `${SITE.url}/images/services/airport.jpg`,
    logo: `${SITE.url}/images/logo/favicon.png`,
    priceRange: "₹₹",
    telephone: "+919886814344",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Konena Agrahara, HAL",
      addressLocality: "Bengaluru",
      postalCode: "560017",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    description: service.description,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <SiteShell>
      <BreadcrumbJsonLd name={service.name} path={`/services/${service.slug}`} />
      <JsonLd data={[serviceSchema, faqSchema]} />
      <SeoPage
        eyebrow={service.eyebrow}
        title={service.name}
        intro={service.intro}
        paragraphs={service.paragraphs}
        bullets={service.bullets}
        related={related}
        faq={service.faq}
        compact={slug === "airport-transfers"}
        whatsappLabel={slug === "airport-transfers" ? "WhatsApp Airport Quote" : undefined}
        callout={slug === "airport-transfers" ? (
          <div className="mt-8 space-y-5" aria-labelledby="airport-arrival-guidelines-heading">
            <h2 id="airport-arrival-guidelines-heading" className="text-2xl font-black text-[#090f2f]">BLR Terminal Pickup Guidelines</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-black text-[#090f2f]">Terminal 1: Domestic &amp; selected flights</h3>
                <p className="mt-2 leading-7 text-slate-700">The driver coordinates pickup at dedicated arrival lanes or designated taxi pickup zones. Confirm the terminal and follow current airport signage.</p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-black text-[#090f2f]">Terminal 2: Garden Terminal</h3>
                <p className="mt-2 leading-7 text-slate-700">For international and premium domestic flights, the driver confirms the meeting point and coordinates luggage-cart assistance after baggage collection.</p>
              </article>
            </div>
            <p className="rounded-xl border border-purple-200 bg-purple-50 p-4 leading-7 text-slate-700">Need airport transfers for business delegates or executive teams? Learn about our <Link href="/corporate-car-rental-bangalore" className="font-bold text-purple-700 underline">Corporate Car Rental Bangalore</Link> with 100% GST invoicing and priority tech park dispatch.</p>
          </div>
        ) : undefined}
      />
    </SiteShell>
  );
}
