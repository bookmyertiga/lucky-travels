import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Go Bengaluru journal</p>
          <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em]">Travel tips for a smoother journey</h2>
        </div>
        <Link className="hidden items-center gap-1 text-xs font-black text-purple-700 sm:flex" href="/blog">
          All posts <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group min-w-0">
            <div className="relative h-32 overflow-hidden rounded-xl sm:h-36">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 767px) 100vw, 22vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-purple-700">
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </p>
            <h3 className="mt-1 line-clamp-2 text-sm font-black leading-5 group-hover:text-purple-700">{post.title}</h3>
          </Link>
        ))}
      </div>
      <Link className="mt-5 flex items-center justify-center gap-1 rounded-xl bg-purple-50 py-3 text-xs font-black text-purple-700 sm:hidden" href="/blog">
        View all blog posts <ArrowRight size={15} />
      </Link>
    </section>
  );
}
