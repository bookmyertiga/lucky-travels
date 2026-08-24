import {
  BadgeIndianRupee,
  CheckCircle2,
  MapPinned,
  MessageSquareText,
  Route,
} from "lucide-react";

const bookingSteps = [
  {
    number: "01",
    title: "Share your complete plan",
    text: "Send the date, pickup, destination, passenger count and luggage details, plus any planned stops or assistance needs.",
  },
  {
    number: "02",
    title: "Receive trip-specific confirmation",
    text: "Lucky Travels checks availability and confirms the proposed vehicle, driver, route and quote terms for your journey.",
  },
  {
    number: "03",
    title: "Confirm directly",
    text: "Accept the journey directly by WhatsApp, phone or email after the details and applicable terms are clear.",
  },
] as const;

export default function DirectBooking() {
  return (
    <section
      aria-label="Bangalore coverage and direct booking"
      className="page-shell py-11 sm:py-12"
    >
      <div className="grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
        <article className="rounded-2xl bg-[linear-gradient(145deg,#101943,#3b157f)] p-6 text-white shadow-premium sm:p-8">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-amber-400">
            <MapPinned size={24} />
          </span>
          <p className="mt-5 text-[11px] font-black uppercase tracking-[0.18em] text-amber-400">
            Doorstep enquiry coverage
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
            Cab Enquiries Across Bangalore
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Ask about doorstep pickup planning from Whitefield, Electronic City,
            Indiranagar, HSR Layout, Koramangala and other Bengaluru localities.
            Coverage for each taxi service in Bangalore enquiry depends on the
            route, timing and confirmed availability.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Go Bengaluru is the public brand of Lucky Travels. Travellers who
            discover the service as GoBengaluru or Go Bangalore have reached the
            same owner-driver-led Premium Ertiga service.
          </p>
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/12 bg-white/8 p-4 text-xs leading-5 text-white/78">
            <Route size={19} className="mt-0.5 shrink-0 text-amber-400" />
            Pickup feasibility and route coordination are reviewed before every
            accepted airport, city or outstation journey.
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <p className="section-kicker">Get an Instant Quote</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
            How Direct Cab Booking Works
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A direct cab booking in Bangalore takes three simple steps. The
            first response begins the enquiry; it is not an automated fare or
            availability guarantee.
          </p>

          <ol className="mt-6 grid gap-3 md:grid-cols-3">
            {bookingSteps.map(({ number, title, text }) => (
              <li key={number} className="rounded-xl bg-slate-50 p-4">
                <span className="text-xs font-black tracking-[0.15em] text-purple-700">
                  STEP {number}
                </span>
                <h3 className="mt-2 text-sm font-black text-[#090f2f]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-purple-100 bg-purple-50/70 p-4">
              <BadgeIndianRupee
                size={21}
                className="mt-0.5 shrink-0 text-purple-700"
              />
              <div>
                <h3 className="text-sm font-black">Transparent Per-KM Rates</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  When per-kilometre billing applies, the rate and conditions
                  are explained before confirmation. Other trips receive clear,
                  journey-specific terms.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50/70 p-4">
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-green-700"
              />
              <div>
                <h3 className="text-sm font-black">No Hidden Fees</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Known toll, parking, waiting, driver allowance and additional
                  stop terms are disclosed before the confirmed quote is
                  accepted.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs font-bold leading-5 text-slate-600">
            <MessageSquareText
              size={17}
              className="mt-0.5 shrink-0 text-purple-700"
            />
            For airport, outstation or hourly car rental in Bangalore enquiries,
            sharing complete details helps Lucky Travels respond accurately.
          </p>
        </article>
      </div>
    </section>
  );
}
