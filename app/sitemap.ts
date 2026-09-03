import type { MetadataRoute } from "next";
import { SITE, services } from "@/constants/site";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-03T00:00:00+05:30");

  return [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/car-rental-bangalore`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/corporate-car-rental-bangalore`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/airport-taxi-bangalore`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/services/rental-packages`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/services/outstation-packages`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/outstation-cabs-bangalore`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...[
      "airport-taxi-whitefield",
      "airport-taxi-electronic-city",
      "airport-taxi-hsr-layout",
      "airport-taxi-indiranagar",
      "airport-taxi-marathahalli",
      "airport-taxi-jp-nagar",
      "airport-taxi-sarjapur-road",
    ].map((slug) => ({ url: `${SITE.url}/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...[
      "bangalore-to-mysore-cab",
      "bangalore-to-coorg-cab",
      "bangalore-to-ooty-cab",
      "bangalore-to-chikmagalur-cab",
      "bangalore-to-tirupati-cab",
    ].map((slug) => ({ url: `${SITE.url}/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...services.filter((service) => !["outstation-packages", "airport-transfers", "rental-packages"].includes(service.slug)).map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(
        `${post.dateModified ?? post.date}T00:00:00+05:30`,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
