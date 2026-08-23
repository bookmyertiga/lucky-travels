import type { MetadataRoute } from "next";
import { SITE, services } from "@/constants/site";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE.url}/bangalore-to-mysore-cab`,
      lastModified: new Date("2026-08-23T00:00:00+05:30"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...services.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
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
