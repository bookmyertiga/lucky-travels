import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Phone, MessageCircle, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/shared/SiteShell";
import { SITE } from "@/constants/site";
import { blogPosts, RichTextNode } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const postUrl = `${SITE.url}/blog/${post.slug}`;
  const ogImage = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;

  return {
    title: post.seoTitle || `${post.title} | Lucky Travels`,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: postUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author || "Bharath K S"],
      images: [
        {
          url: ogImage,
          width: post.imageWidth || 1536,
          height: post.imageHeight || 1024,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [ogImage],
    },
  };
}

function renderRichText(nodes: RichTextNode[]): React.ReactNode {
  return nodes.map((node, i) => {
    switch (node.type) {
      case "text":
        return <span key={i}>{node.text}</span>;
      case "bold":
        return (
          <strong key={i} className="font-bold text-slate-900">
            {renderRichText(node.children)}
          </strong>
        );
      case "italic":
        return (
          <em key={i} className="italic text-slate-800">
            {renderRichText(node.children)}
          </em>
        );
      case "underline":
        return (
          <span key={i} className="underline decoration-amber-500 underline-offset-4 font-semibold">
            {renderRichText(node.children)}
          </span>
        );
      case "link":
        return (
          <Link
            key={i}
            href={node.href}
            className="font-bold text-purple-700 underline decoration-purple-300 underline-offset-2 transition hover:text-purple-900 hover:decoration-purple-600"
          >
            {node.children ? renderRichText(node.children) : node.text}
          </Link>
        );
      default:
        return null;
    }
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postUrl = `${SITE.url}/blog/${post.slug}`;
  const ogImage = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    image: [ogImage],
    author: {
      "@type": post.authorType || "Person",
      name: post.author || "Bharath K S",
      url: post.authorUrl ? `${SITE.url}${post.authorUrl}` : `${SITE.url}/about`,
      jobTitle: post.authorRole || "Founder & Owner-Driver",
    },
    publisher: {
      "@type": "Organization",
      name: "Lucky Travels",
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/services/airport.jpg`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <SiteShell>
      <JsonLd data={faqSchema ? [blogPostingSchema, breadcrumbSchema, faqSchema] : [blogPostingSchema, breadcrumbSchema]} />

      <style>{`
        .force-justify p,
        .force-justify .justify-block,
        .force-justify li > div {
          text-align: justify !important;
          text-justify: inter-word !important;
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
          -ms-hyphens: auto;
          hyphens: auto;
          word-spacing: normal;
        }
      `}</style>

      <main className="min-h-screen bg-slate-50 py-8 sm:py-12">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 force-justify">
          <nav aria-label="Breadcrumb navigation" className="mb-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 transition"
            >
              <ArrowLeft size={15} /> Back to Travel Blog
            </Link>
          </nav>

          <header className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-purple-800">
                <Calendar size={12} /> {post.dateModified ? `Updated ${post.dateModified}` : post.date}
              </span>
              {post.author && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  <User size={12} /> {post.author}
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-amber-900">
                <Sparkles size={12} /> Verified Guide
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#090f2f] sm:text-3xl lg:text-4xl text-left">
              {post.title}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg justify-block">
              {post.excerpt}
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={post.imageWidth || 1536}
                height={post.imageHeight || 1024}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
          </header>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
            <div className="space-y-6 text-slate-700">
              {post.content.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={idx}
                        className="text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-700 justify-block"
                      >
                        {renderRichText(block.content)}
                      </p>
                    );
                  case "h2":
                    return (
                      <h2
                        key={idx}
                        className="pt-6 text-xl sm:text-2xl font-black tracking-tight text-[#090f2f] border-t border-slate-100 leading-snug text-left"
                      >
                        {renderRichText(block.content)}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3
                        key={idx}
                        className="pt-2 text-lg sm:text-xl font-black tracking-tight text-[#090f2f] leading-snug text-left"
                      >
                        {renderRichText(block.content)}
                      </h3>
                    );
                  case "ul":
                    return (
                      <ul key={idx} className="my-4 space-y-3.5 pl-1 sm:pl-2">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-purple-600" />
                            <div className="w-full text-base sm:text-[17px] leading-relaxed text-slate-700 justify-block">
                              {renderRichText(item)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    );
                  case "ol":
                    return (
                      <ol key={idx} className="my-4 space-y-3.5 pl-1 sm:pl-2">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="shrink-0 font-black text-purple-700 text-base sm:text-[17px] min-w-[20px]">
                              {i + 1}.
                            </span>
                            <div className="w-full text-base sm:text-[17px] leading-relaxed text-slate-700 justify-block">
                              {renderRichText(item)}
                            </div>
                          </li>
                        ))}
                      </ol>
                    );
                  case "blockquote":
                    return (
                      <blockquote
                        key={idx}
                        className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/70 p-4 sm:p-5 italic text-slate-800 shadow-sm text-base justify-block"
                      >
                        {renderRichText(block.content)}
                      </blockquote>
                    );
                  case "image":
                    return (
                      <figure
                        key={idx}
                        className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft"
                      >
                        {block.href ? (
                          <Link href={block.href} className="block group">
                            <Image
                              src={block.src}
                              alt={block.alt}
                              width={1536}
                              height={1024}
                              loading="lazy"
                              className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                          </Link>
                        ) : (
                          <Image
                            src={block.src}
                            alt={block.alt}
                            width={1536}
                            height={1024}
                            loading="lazy"
                            className="h-auto w-full object-cover"
                          />
                        )}
                        {block.caption && (
                          <figcaption className="px-4 py-2.5 text-center text-xs sm:text-sm font-medium text-slate-600">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-10 border-t border-slate-200 pt-6" aria-labelledby="faq-title">
                <h2 id="faq-title" className="text-xl sm:text-2xl font-black text-[#090f2f] text-left">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/50 px-4 sm:px-5">
                  {post.faqs.map((faq, index) => (
                    <article key={index} className="py-4">
                      <h3 className="text-base sm:text-lg font-black text-[#090f2f] text-left">{faq.question}</h3>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 justify-block">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#080d2b] to-[#24105f] p-5 sm:p-7 text-white">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                DIRECT OWNER-DRIVER BOOKING
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-black text-left">
                Ready for Your Adiyogi Day Trip?
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300 justify-block">
                Reserve your dedicated 6+1 Premium Ertiga. Enjoy upfront pricing, sanitized vehicles, polite owner-driver service, and guaranteed on-site waiting throughout the 7:00 PM laser show.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs sm:text-sm font-black text-purple-900 shadow hover:bg-slate-100 transition"
                >
                  <Phone size={15} /> Call Now: +91 {SITE.phone}
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hello Lucky Travels, I want to book an Ertiga for Adiyogi Chikkaballapura.\nDate:\nPickup Locality:\nPassengers:`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-xs sm:text-sm font-black text-white shadow hover:bg-green-700 transition"
                >
                  <MessageCircle size={15} /> WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}