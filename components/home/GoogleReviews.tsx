import Link from "next/link";

interface CustomerReview {
  author: string;
  rating: number;
  date: string;
  quote: string;
  serviceType: string;
}

const REVIEWS: CustomerReview[] = [
  {
    author: "Meghala S.",
    rating: 5,
    date: "August 2026",
    quote:
      "Safety, punctuality, cleanliness and friendliness we were happy with him. Thank you!",
    serviceType: "Outstation & Family",
  },
  {
    author: "Sharifsab Sab",
    rating: 5,
    date: "September 2026",
    quote:
      "Neat and clean ertiga airport taxi. Extremely punctual and comfortable ride.",
    serviceType: "Airport Transfer",
  },
  {
    author: "Dinesh Kumar R.",
    rating: 5,
    date: "September 2026",
    quote:
      "Good service and driver is so humble. Highly recommended for long journeys.",
    serviceType: "Chauffeur Service",
  },
];

export default function GoogleReviews() {
  return (
    <section
      className="page-shell px-5 py-12 sm:py-16"
      aria-labelledby="customer-reviews-heading"
    >
      <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-10 border border-slate-100">
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200/60 mb-3">
              <span className="text-amber-500">★★★★★</span>
              <span>5.0 / 5.0 on Google Business Profile</span>
            </div>
            <h2
              id="customer-reviews-heading"
              className="text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl"
            >
              Verified Customer Experiences
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Authentic reviews from Bengaluru families, airport commuters, and outstation travelers who ride with Lucky Travels.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="https://maps.google.com/maps?cid=13166455218913512894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#090f2f] px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-900"
            >
              <span>View on Google Maps</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-purple-300 hover:shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-base">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="rounded-md bg-purple-50 px-2 py-0.5 text-xs font-semibold text-purple-700">
                    {review.serviceType}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#090f2f] leading-snug">
                    {review.author}
                  </h3>
                  <p className="text-xs text-slate-500">Google Verified • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Review Submission Hook */}
        <div className="mt-8 rounded-xl bg-purple-50/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-purple-100">
          <p className="text-sm text-purple-950 font-medium text-center sm:text-left">
            Recently travelled with us? We appreciate your feedback to help us maintain 5-star service.
          </p>
          <Link
            href="https://search.google.com/local/writereview?placeid=ChIJnyz0z2ETrjsRvo1tQkOluLY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-purple-700 hover:text-purple-900 underline whitespace-nowrap"
          >
            Leave a Google Review →
          </Link>
        </div>
      </div>
    </section>
  );
}