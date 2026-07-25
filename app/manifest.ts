import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucky Travels – Go Bengaluru",
    short_name: "Lucky Travels",
    description:
      "Premium Ertiga airport transfers, hourly and daily rental packages, and outstation travel from Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7fb",
    theme_color: "#5b16d9",
    icons: [
      {
        src: "/icon.png",
        sizes: "1254x1254",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
