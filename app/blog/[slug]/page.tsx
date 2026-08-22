import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import BlogContent from "@/components/shared/BlogContent";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { blogPosts } from "@/data/blog";
import { SITE } from "@/constants/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  const canonicalUrl = `${SITE.url}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;

  const description = post.seoDescription ?? post.excerpt;

  return {
    title: post.seoTitle ?? post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      type: "article",
      locale: "en_IN",
      images: [{ url: imageUrl, width: post.imageWidth, height: post.imageHeight, alt: post.imageAlt }],
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      authors: [post.author ?? "Lucky Travels"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${SITE.url}/blog/${post.slug}`;
  const heroImageUrl = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;
  const authorName = post.author ?? "Lucky Travels";
  const authorUrl = post.authorUrl ?? "/about";
  const publishedDate = new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const modifiedDate = post.dateModified ? new Date(post.dateModified).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : null;
  const authorObject =
    post.authorType === "Person"
      ? {
          "@type": "Person",
          name: authorName,
          url: `${SITE.url}${authorUrl}`,
          jobTitle: post.authorRole ?? undefined,
          worksFor: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
        }
      : {
          "@type": "Organization",
          name: authorName,
          url: `${SITE.url}${authorUrl}`,
        };

  return (
    <>
      <Navbar />
      <article className="page-shell max-w-4xl py-10">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
            headline: post.title,
            description: post.seoDescription ?? post.excerpt,
            url: canonicalUrl,
            image: [heroImageUrl],
            datePublished: post.date,
            dateModified: post.dateModified ?? post.date,
            author: authorObject,
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              logo: {
                "@type": "ImageObject",
                url: "https://gobengaluru.in/images/logo/favicon.png",
              },
            },
          }}
        />

        <p className="text-xs font-black text-purple-700">GO BENGALURU BLOG</p>
        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{post.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>
            {post.authorType === "Person" ? (
              <>
                By <Link href={authorUrl} className="font-semibold text-purple-700 hover:underline">{authorName}</Link>, {post.authorRole ? `${post.authorRole}, ` : ""}
                <Link href={authorUrl} className="font-semibold text-purple-700 hover:underline">Lucky Travels</Link>
              </>
            ) : (
              <>By <Link href={authorUrl} className="font-semibold text-purple-700 hover:underline">{authorName}</Link></>
            )}
          </span>
          <span aria-hidden="true">•</span>
          <time dateTime={post.date}>{publishedDate}</time>
          {modifiedDate && (
            <>
              <span aria-hidden="true">•</span>
              <span>
                Updated <time dateTime={post.dateModified}>{modifiedDate}</time>
              </span>
            </>
          )}
        </div>

        <Link href="/" className="relative mt-7 block h-[300px] overflow-hidden rounded-2xl sm:h-[440px]">
          <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" />
        </Link>

        <div className="mx-auto mt-8 max-w-3xl">
          <BlogContent blocks={post.content} />
        </div>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
