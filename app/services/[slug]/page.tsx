import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/shared/SiteShell";
import SeoPage from "@/components/shared/SeoPage";
import JsonLd from "@/components/seo/JsonLd";
import { services, SITE } from "@/constants/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const related = services
    .filter((item) => item.slug !== slug)
    .map((item) => ({ href: `/services/${item.slug}`, label: item.name }));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
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
      <JsonLd data={[serviceSchema, faqSchema]} />
      <SeoPage
        eyebrow={service.eyebrow}
        title={service.name}
        intro={service.intro}
        paragraphs={service.paragraphs}
        bullets={service.bullets}
        related={related}
        faq={service.faq}
      />
    </SiteShell>
  );
}
