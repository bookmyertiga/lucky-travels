import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import type { AirportCorridorContent } from "@/data/airportCorridors";

export function createAirportCorridorMetadata(corridor: AirportCorridorContent): Metadata {
  const url = `${SITE.url}/${corridor.slug}`;
  const image = `${SITE.url}/images/services/airport.jpg`;

  return {
    title: corridor.title,
    description: corridor.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: corridor.title,
      description: corridor.description,
      url,
      type: "website",
      siteName: "Go Bengaluru by Lucky Travels",
      images: [{ url: image, width: 1672, height: 941, alt: `Premium Ertiga airport taxi for ${corridor.locality}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: corridor.title,
      description: corridor.description,
      images: [image],
    },
  };
}
