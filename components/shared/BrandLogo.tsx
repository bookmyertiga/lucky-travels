import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandLogo({
  inverse = false,
  compact = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Lucky Travels home"
      className="flex min-w-0 items-center gap-3"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 sm:h-14 sm:w-14">
        <Image
          src="/images/logo/favicon.png"
          alt="Lucky Travels LT shield"
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={`block whitespace-nowrap text-[1.05rem] font-black tracking-[0.02em] sm:text-[1.28rem] ${inverse ? "text-white" : "text-[#090f2f]"}`}
        >
          LUCKY{" "}
          <span className={inverse ? "text-[#d2b3ff]" : "text-purple-700"}>
            TRAVELS
          </span>
        </span>
        {!compact && (
          <span
            className={`mt-1.5 block whitespace-nowrap text-[0.54rem] font-bold tracking-[0.2em] sm:text-[0.62rem] ${inverse ? "text-white/60" : "text-slate-500"}`}
          >
            TRAVEL FIRST CLASS. RIDE LUCKY.
          </span>
        )}
      </span>
    </Link>
  );
}
