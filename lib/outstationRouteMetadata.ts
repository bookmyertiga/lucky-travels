import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import type { OutstationRoute } from "@/data/outstationRoutes";

export function createOutstationRouteMetadata(route: OutstationRoute): Metadata {
  const url = `${SITE.url}/${route.slug}`;
  const image = `${SITE.url}${route.image}`;

  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      type: "website",
      siteName: "Go Bengaluru by Lucky Travels",
      images: [{ url: image, width: 1536, height: 1024, alt: route.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [image],
    },
  };
}
