"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("lucky-travels-intro")) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem("lucky-travels-intro", "seen");
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[100] grid place-items-center bg-[#080d2b] text-white">
      <div className="flex flex-col items-center">
        <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white shadow-2xl">
          <Image src="/images/logo/favicon.png" alt="" width={96} height={96} className="h-full w-full object-cover" priority />
        </span>
        <p className="mt-5 text-lg font-black tracking-[0.18em]">GO BENGALURU</p>
        <div className="mt-4 h-1 w-44 overflow-hidden rounded-full bg-white/15">
          <span className="block h-full w-1/2 bg-gradient-to-r from-amber-400 via-white to-purple-500 [animation:loader-slide_.9s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
