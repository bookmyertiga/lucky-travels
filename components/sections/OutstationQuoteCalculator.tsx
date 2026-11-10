"use client";

import { useMemo, useState } from "react";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function OutstationQuoteCalculator() {
  const [values, setValues] = useState({
    kilometers: "",
    perKm: "",
    days: "",
    dailyBata: "",
    nights: "0",
    overnightAllowance: "0",
    tollsAndPermits: "",
    parkingAndOther: "0",
  });

  const setValue = (name: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const result = useMemo(() => {
    const kilometers = Number(values.kilometers);
    const perKm = Number(values.perKm);
    const days = Number(values.days);
    const dailyBata = Number(values.dailyBata);
    const nights = Number(values.nights);
    const overnightAllowance = Number(values.overnightAllowance);
    const tollsAndPermits = Number(values.tollsAndPermits);
    const parkingAndOther = Number(values.parkingAndOther);
    const complete = [values.kilometers, values.perKm, values.days, values.dailyBata, values.tollsAndPermits]
      .every((value) => value.trim() !== "");
    const valid = [kilometers, perKm, days, dailyBata, nights, overnightAllowance, tollsAndPermits, parkingAndOther]
      .every((value) => Number.isFinite(value) && value >= 0);

    if (!complete || !valid) return null;

    const baseFare = kilometers * perKm;
    const dayAllowance = days * dailyBata;
    const overnight = nights * overnightAllowance;

    return {
      baseFare,
      dayAllowance,
      overnight,
      tollsAndPermits,
      parkingAndOther,
      total: baseFare + dayAllowance + overnight + tollsAndPermits + parkingAndOther,
    };
  }, [values]);

  const fieldClassName =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_.85fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-800">
          Chargeable trip kilometres
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="decimal" value={values.kilometers} onChange={(event) => setValue("kilometers", event.target.value)} placeholder="Enter quoted kilometres" />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Agreed base fare per km (₹)
          <input className={fieldClassName} type="number" min="0" step="0.5" inputMode="decimal" value={values.perKm} onChange={(event) => setValue("perKm", event.target.value)} placeholder="Enter quoted rate" />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Driver days
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="numeric" value={values.days} onChange={(event) => setValue("days", event.target.value)} placeholder="Enter trip days" />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Driver day bata per day (₹)
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="decimal" value={values.dailyBata} onChange={(event) => setValue("dailyBata", event.target.value)} placeholder="Enter agreed allowance" />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Overnight stays
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="numeric" value={values.nights} onChange={(event) => setValue("nights", event.target.value)} />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Overnight allowance per night (₹)
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="decimal" value={values.overnightAllowance} onChange={(event) => setValue("overnightAllowance", event.target.value)} />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Tolls and permits (₹)
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="decimal" value={values.tollsAndPermits} onChange={(event) => setValue("tollsAndPermits", event.target.value)} placeholder="Enter agreed amount" />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Parking / other agreed costs (₹)
          <input className={fieldClassName} type="number" min="0" step="1" inputMode="decimal" value={values.parkingAndOther} onChange={(event) => setValue("parkingAndOther", event.target.value)} />
        </label>
      </div>

      <aside className="rounded-2xl bg-slate-950 p-5 text-white sm:p-6" aria-live="polite">
        <p className="text-xs font-black uppercase tracking-widest text-slate-300">Itemized round-trip estimate</p>
        {result ? (
          <>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-slate-300">Base fare ({values.kilometers} km × ₹{values.perKm}/km)</dt><dd className="font-bold">{currency.format(result.baseFare)}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-300">Driver day bata ({values.days} days)</dt><dd className="font-bold">{currency.format(result.dayAllowance)}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-300">Overnight allowance ({values.nights} nights)</dt><dd className="font-bold">{currency.format(result.overnight)}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-300">Tolls and permits</dt><dd className="font-bold">{currency.format(result.tollsAndPermits)}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-300">Parking / other agreed costs</dt><dd className="font-bold">{currency.format(result.parkingAndOther)}</dd></div>
              <div className="flex justify-between gap-4 border-t border-white/20 pt-4 text-base"><dt className="font-black">Entered-cost subtotal</dt><dd className="font-black text-amber-300">{currency.format(result.total)}</dd></div>
            </dl>
            <p className="mt-4 text-xs leading-5 text-slate-300">This is arithmetic using your inputs, not a Lucky Travels fare quote. Confirm chargeable kilometres, inclusions, tolls, permits and allowances on WhatsApp; the confirmed written quote is final.</p>
          </>
        ) : (
          <p className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-6 text-slate-300">
            Enter the kilometres, per-kilometre rate, driver days, day bata and toll / permit amount from your trip plan or quote to see an itemized subtotal. No default fare is assumed.
          </p>
        )}
      </aside>
    </div>
  );
}
