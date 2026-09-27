import Link from "next/link";

export default function PilgrimageBanner() {
  return (
    <aside
      aria-label="Seasonal Travel Announcement"
      className="bg-amber-600 text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center shadow-md relative z-50 flex items-center justify-center gap-2 flex-wrap"
    >
      <span className="inline-flex items-center gap-1.5 font-semibold text-amber-100 uppercase tracking-wide text-[11px] sm:text-xs bg-amber-800/60 px-2 py-0.5 rounded">
        Seasonal Pilgrimage
      </span>
      <span>
        Pitru Paksha &amp; Mahalaya Amavasya Cab to Srirangapatna (Sangama / Gosai Ghat).
      </span>
      <Link
        href="/bangalore-to-srirangapatna-pitru-paksha-cab"
        className="inline-flex items-center font-bold underline underline-offset-4 hover:text-amber-200 transition-colors ml-1"
      >
        View Package &amp; Book Ertiga &rarr;
      </Link>
    </aside>
  );
}