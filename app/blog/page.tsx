"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Compass,
  FileText,
  Luggage,
  MapPin,
  Plane,
  Sparkles,
  Tag,
  User,
  Zap,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { blogPosts } from "@/data/blog";

const blogUrl = `${SITE.url}/blog`;

// Category grouping logic based on slug/topics
const categories = [
  { id: "all", name: "All Guides" },
  { id: "airport", name: "Airport Transfers" },
  { id: "rentals", name: "Hourly Rentals" },
  { id: "outstation", name: "Outstation Trips" },
  { id: "fleet", name: "Fleet & Founder" },
];

function getCategory(slug: string): string {
  if (slug.includes("airport")) return "airport";
  if (slug.includes("hourly") || slug.includes("rental")) return "rentals";
  if (slug.includes("outstation")) return "outstation";
  return "fleet";
}

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => getCategory(post.slug) === selectedCategory);

  const featuredPost =
    blogPosts.find(
      (p) => p.slug === "bengaluru-airport-cab-guide-go-bengaluru-vs-app-taxis"
    ) || blogPosts[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Travel Blog", item: blogUrl },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Go Bengaluru by Lucky Travels Knowledge Hub",
    description:
      "Expert travel guides, Kempegowda Airport transfer strategies, Ertiga luggage capacity formulas, and road trip planning across Bengaluru.",
    url: blogUrl,
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
      <main className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden">
        {/* HEADER HERO */}
        <section
          aria-labelledby="blog-main-heading"
          className="border-b border-slate-200 bg-white px-5 pt-10 pb-12 sm:pt-14 sm:pb-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-700">
              <BookOpen size={15} />
              BENGALURU TRAVEL ADVISORY &amp; ROUTE BLUEPRINTS
            </div>
            <h1
              id="blog-main-heading"
              className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] leading-tight"
            >
              Go Bengaluru Travel Knowledge Hub
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Practical guides on <strong>Kempegowda Airport (BLR T1 &amp; T2)</strong> transit, <em>4-suitcase luggage fitment</em>, outstation highway itineraries, and honest advice from founder and owner-driver <strong>Bharath K S</strong>.
            </p>

            {/* INTERACTIVE CATEGORY TABS */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
                    selectedCategory === cat.id
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED SPOTLIGHT ARTICLE */}
        {featuredPost && (
          <section className="px-5 pt-10 sm:pt-12">
            <div className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md lg:grid lg:grid-cols-[1.1fr_1fr]">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="block aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100"
                >
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    width={featuredPost.imageWidth || 800}
                    height={featuredPost.imageHeight || 500}
                    priority
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </Link>

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-purple-900">
                        ⭐ CORNERSTONE GUIDE
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Calendar size={13} />
                        {featuredPost.dateModified || featuredPost.date}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-black leading-tight text-slate-900 hover:text-purple-700 transition">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1">BLR T1 &amp; T2 Rules</span>
                      <span className="rounded-md bg-slate-100 px-2.5 py-1">4 Suitcases Flat Boot</span>
                      <span className="rounded-md bg-slate-100 px-2.5 py-1">WhatsApp Price-Lock</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">By {featuredPost.author || "Bharath K S"}</span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-purple-700 hover:text-purple-900 transition"
                    >
                      Read Complete Guide <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ALL ARTICLES GRID */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {selectedCategory === "all" ? "All Travel Guides & Articles" : `${categories.find((c) => c.id === selectedCategory)?.name}`}
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredPosts.length} of {blogPosts.length} Total Articles
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div>
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

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
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

                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 hover:text-purple-700 transition">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                      {getCategory(post.slug)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={`Read guide: ${post.title}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-purple-700 transition"
                    >
                      Read Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COMPLETE ARTICLE DIRECTORY / ARCHIVE (100% CRAWLABLE TEXT LINKS) */}
        <section className="border-t border-slate-200 bg-slate-100/70 px-5 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-700">
              <FileText size={15} />
              COMPLETE KNOWLEDGE DIRECTORY
            </div>
            <h2 className="mt-1 text-xl sm:text-2xl font-black text-slate-900">
              All Published Articles &amp; Travel Guides
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Direct access to our complete collection of Bengaluru transit blueprints and fleet resources:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-purple-300 hover:shadow-md group"
                >
                  <span className="h-6 w-6 rounded-full bg-purple-50 text-purple-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-700 group-hover:text-white transition">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition leading-snug">
                      {post.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Published {post.date} • By {post.author || "Bharath K S"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SERVICE DIRECTORY PORTAL (CLEAN CANONICALS) */}
        <section className="border-t border-slate-200 bg-white px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-purple-700">
                  FLEET &amp; BOOKING PILLARS
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Ready to Book a 2024–2026 Premium Ertiga?
                </h2>
              </div>
              <Link href="/contact" className="text-xs font-bold text-purple-700 underline">
                Get an instant quote on WhatsApp →
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/airport-taxi-bangalore"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:bg-purple-50 hover:text-purple-900 transition"
              >
                ✈️ Bangalore Airport Taxi
              </Link>
              <Link
                href="/car-rental-bangalore"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:bg-purple-50 hover:text-purple-900 transition"
              >
                ⏱️ Hourly City Rental (8h/10h/12h)
              </Link>
              <Link
                href="/outstation-cabs-bangalore"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:bg-purple-50 hover:text-purple-900 transition"
              >
                🛣️ Outstation Highway Cabs
              </Link>
              <Link
                href="/corporate-car-rental-bangalore"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-xs sm:text-sm text-slate-900 shadow-sm hover:border-purple-300 hover:bg-purple-50 hover:text-purple-900 transition"
              >
                💼 Corporate GST Mobility
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}