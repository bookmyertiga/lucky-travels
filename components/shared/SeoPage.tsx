import Link from "next/link";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { SITE } from "@/constants/site";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  related: { href: string; label: string }[];
  faq?: { question: string; answer: string }[];
  compact?: boolean;
};

export default function SeoPage({ eyebrow, title, intro, paragraphs, bullets, related, faq = [], compact = false }: Props) {
  const whatsappMessage = encodeURIComponent(`Hello Lucky Travels, I want to enquire about ${title}.`);

  return (
    <>
      <section className={`bg-gradient-to-br from-[#08122c] via-[#24105f] to-[#6817d4] px-5 text-white ${compact ? "py-12 md:py-16" : "py-16"}`}>
        <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${compact ? "max-w-6xl" : "max-w-5xl"}`}>
          <p className="text-sm font-black uppercase tracking-[.18em] text-amber-400">{eyebrow}</p>
          <h1 className={`mt-3 max-w-4xl font-bold tracking-tight text-white leading-tight ${compact ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-4xl sm:text-6xl"}`}>{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-black text-purple-800">
              <Phone size={20} /> Call {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`} className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-black text-white">
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <article className="rounded-2xl border bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-black">Go Bengaluru in a Premium Ertiga</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-8 text-slate-700">{paragraph}</p>
          ))}

          <h2 className="mt-9 text-2xl font-black">What you can expect</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex gap-2 rounded-xl bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-purple-700" size={20} />
                <span className="font-semibold">{bullet}</span>
              </div>
            ))}
          </div>

          {faq.length > 0 && (
            <section className="mt-10" aria-labelledby="service-faq-heading">
              <h2 id="service-faq-heading" className="text-2xl font-black">Frequently asked questions</h2>
              <div className="mt-4 divide-y rounded-xl border bg-white px-5">
                {faq.map((item) => (
                  <details key={item.question} className="group py-4">
                    <summary className="cursor-pointer list-none pr-7 font-bold text-slate-900 marker:hidden">{item.question}</summary>
                    <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-purple-700 p-6 text-white">
            <p className="text-sm font-bold text-amber-300">GO BENGALURU</p>
            <h2 className="mt-2 text-2xl font-black">Only Premium Ertiga</h2>
            <p className="mt-3 leading-7 text-white/85">Lucky Travels specialises exclusively in Premium Ertiga service for a consistent, comfortable travel experience.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-black">Related services</h2>
            <div className="mt-3 grid gap-2">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg bg-slate-50 px-4 py-3 font-bold text-purple-700 hover:bg-purple-50">
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
