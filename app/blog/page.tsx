import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Bengaluru Travel Blog",
  description:
    "Useful guides for Bengaluru airport travel, Premium Ertiga planning, city-rental tips and outstation journeys.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Bengaluru Travel Blog",
    description:
      "Useful guides for Bengaluru airport travel, Premium Ertiga planning, city-rental tips and outstation journeys.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengaluru Travel Blog",
    description:
      "Useful guides for Bengaluru airport travel, Premium Ertiga planning, city-rental tips and outstation journeys.",
  },
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="page-shell py-12">
        <p className="text-xs font-black text-amber-500">
          GO BENGALURU JOURNAL
        </p>
        <h1 className="mt-2 text-4xl font-black">Travel guides and updates</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Useful Bengaluru airport, Premium Ertiga, city-rental and outstation
          guides for smoother planning before your next journey.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="overflow-hidden rounded-xl border bg-white shadow-premium"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-purple-700">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-2 text-xl font-black">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
