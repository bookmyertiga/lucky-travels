import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Go Bengaluru Travel Blog | Airport Guides, Route Tips & Fleet News",
  description:
    "Practical Bengaluru airport travel tips, Ertiga luggage capacity guides, route bypass advice, and owner-driver updates from Lucky Travels.",
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
  openGraph: {
    title: "Go Bengaluru Travel Blog | Lucky Travels",
    description:
      "Honest airport transit advice, Kempegowda Airport luggage guides, and local route tips for Bengaluru travelers.",
    url: `${SITE.url}/blog`,
    type: "website",
  },
};

export default function BlogListingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Go Bengaluru by Lucky Travels Blog",
    description:
      "Practical travel guides, airport transit planning, and fleet insights across Bengaluru.",
    url: `${SITE.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Lucky Travels",
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/services/airport.jpg`,
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      datePublished: post.date,
      dateModified: post.dateModified || post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE.url}/blog/${post.slug}`,
      },
      url: `${SITE.url}/blog/${post.slug}`,
      image: post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`,
      author: {
        "@type": post.authorType || "Person",
        name: post.author || "Bharath K S",
      },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema, blogSchema]} />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-[#080d2b] py-12 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              INSIGHTS FROM THE ROAD
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Go Bengaluru Travel Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Practical guides on <strong className="text-white">Bengaluru Airport transfers</strong>, luggage and seating advice, highway routes, and honest owner-driver travel tips.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={post.title}
                  className="block aspect-[16/10] overflow-hidden bg-slate-100"
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={post.imageWidth || 800}
                    height={post.imageHeight || 500}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {post.dateModified ? `Updated ${post.dateModified}` : post.date}
                      </span>
                      {post.author && (
                        <span className="flex items-center gap-1">
                          <User size={13} />
                          {post.author}
                        </span>
                      )}
                    </div>

                    <h2 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition hover:text-purple-700">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={`Read guide: ${post.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-700 hover:text-purple-900"
                    >
                      Read Guide <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}