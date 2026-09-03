import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/constants/site";

export default function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
        ],
      }}
    />
  );
}
