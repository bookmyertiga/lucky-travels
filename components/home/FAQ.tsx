import { Mail, MessageCircle, Phone } from "lucide-react";

export const homepageFaqs = [
  {
    question: "How do I book a cab with Go Bengaluru by Lucky Travels?",
    answer:
      "Call +91 9886814344, send the complete journey details on WhatsApp, or email bookmyertiga@gmail.com. Include the date, pickup, destination, passenger count, luggage, stops and timing. The journey is confirmed only after availability, route and quote terms are agreed directly.",
  },
  {
    question: "What vehicle does Lucky Travels provide?",
    answer:
      "Lucky Travels specialises only in the air-conditioned Premium Maruti Suzuki Ertiga category: a Premium 6+1-seater Ertiga, including the driver. Passenger and luggage suitability must be confirmed before booking because capacity depends on the seats required and the size and number of bags.",
  },
  {
    question:
      "Can I enquire about an early-morning or late-night airport transfer?",
    answer:
      "Yes. Phone, WhatsApp or email enquiries can be sent at any time, including for early-morning and late-night Bangalore airport transfers. The requested timing is subject to vehicle and driver availability and becomes a booking only after direct confirmation.",
  },
] as const;

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="homepage-faq-heading"
      className="page-shell pb-11 sm:pb-12"
    >
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Quick booking guidance</p>
          <h2
            id="homepage-faq-heading"
            className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl"
          >
            Cab Booking FAQs
          </h2>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {homepageFaqs.map(({ question, answer }, index) => (
            <article
              key={question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-black tracking-[0.15em] text-purple-700">
                  0{index + 1}
                </span>
                {index === 0 ? (
                  <Phone size={19} className="text-purple-700" />
                ) : index === 1 ? (
                  <MessageCircle size={19} className="text-purple-700" />
                ) : (
                  <Mail size={19} className="text-purple-700" />
                )}
              </div>
              <h3 className="mt-4 text-base font-black leading-6 text-[#090f2f]">
                {question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
