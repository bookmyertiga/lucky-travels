"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Do you provide only Ertiga vehicles?", "Yes. Lucky Travels specialises exclusively in Premium Maruti Suzuki Ertiga service."],
  ["Do you provide airport pickup and drop?", "Yes. You can enquire about Premium Ertiga airport pickup and drop across Bengaluru."],
  ["Can I book hourly or daily packages?", "Yes. Share the pickup point, duration and planned stops to discuss a suitable city rental package."],
  ["Do you provide outstation trips?", "Yes. One-way, round-trip and multi-day outstation enquiries are accepted subject to availability."],
] as const;

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <p className="section-kicker">Quick answers</p>
      <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em]">Frequently asked</h2>
      <div className="mt-4 divide-y divide-slate-100">
        {faqs.map(([question, answer], index) => (
          <div key={question}>
            <button
              type="button"
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-3 py-3 text-left text-xs font-extrabold"
            >
              {question}
              <ChevronDown size={17} className={`shrink-0 transition ${open === index ? "rotate-180 text-purple-700" : ""}`} />
            </button>
            {open === index && <p className="pb-3 text-xs leading-5 text-slate-600">{answer}</p>}
          </div>
        ))}
      </div>
      <Link href="/faq" className="mt-4 block rounded-xl bg-[#0c143e] py-3 text-center text-xs font-black text-white">
        View all questions
      </Link>
    </section>
  );
}
