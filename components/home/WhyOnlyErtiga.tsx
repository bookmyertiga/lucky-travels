export default function WhyOnlyErtiga() {
  const points = [
    {
      title: "No Vehicle Downsizing, Ever",
      desc: "Unlike ride-hailing apps in Bangalore that assign a tiny hatchback when you booked a sedan, our fleet consists solely of pristine 6+1 Maruti Suzuki Ertiga vehicles. What you book is exactly what pulls up at your doorstep.",
      icon: "🚫",
    },
    {
      title: "Ergonomic 3-Row Comfort for Senior Citizens",
      desc: "Ideal seat height with easy step-in access makes the Ertiga the favorite choice for elderly parents traveling to Mysore, Srirangapatna, or Tirupati. No strenuous climbing or awkward bending required.",
      icon: "🧓",
    },
    {
      title: "Flexible Modular Luggage Boot",
      desc: "Heading to Kempegowda International Airport Bengaluru? Fold the 3rd row to fit 4 massive international check-in suitcases plus cabin trolley bags with ease. Traveling with 6 passengers? Enjoy spacious cabin room with compact bags.",
      icon: "🧳",
    },
    {
      title: "Independent Dual-Blower AC",
      desc: "Bengaluru traffic and outstation highway sun can get warm. The Ertiga features dedicated roof-mounted air conditioning blowers, ensuring the second and third rows stay just as cool as the front.",
      icon: "❄️",
    },
  ];

  return (
    <section className="page-shell px-5 py-12 sm:py-16">
      <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-soft border border-slate-100">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-wider text-purple-700">
            OUR FLEET COMMITMENT • BANGALORE & BENGALURU TAXI SERVICE
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#090f2f] sm:text-4xl">
            Why We Exclusively Operate the Premium 6+1 Maruti Suzuki Ertiga
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We chose not to be an aggregator running dozens of mismatched cars. We mastered one vehicle to perfection to provide Bangalore families and corporate commuters the highest standard of hygiene, space, and punctuality.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((pt, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 flex flex-col justify-between hover:border-purple-300 hover:bg-white transition-all shadow-sm"
            >
              <div>
                <span className="text-3xl mb-4 inline-block">{pt.icon}</span>
                <h3 className="text-lg font-bold text-[#090f2f]">{pt.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}