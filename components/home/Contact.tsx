import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/constants/site";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I would like to enquire about a Premium Ertiga.",
  )}`;

  const details = [
    [Phone, "Call", SITE.phone, `tel:${SITE.phone}`],
    [MessageCircle, "WhatsApp", SITE.phone, whatsappUrl],
    [Mail, "Email", SITE.email, `mailto:${SITE.email}`],
  ] as const;

  return (
    <section id="contact" className="relative overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#101943,#3b157f)] p-5 text-white shadow-premium sm:p-6">
      <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-purple-400/20 blur-2xl" />
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-400">Get in touch</p>
      <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em]">Book your Premium Ertiga</h2>
      <p className="mt-2 text-xs leading-5 text-white/68">Call or WhatsApp directly to share your pickup, destination and travel date.</p>

      <div className="mt-5 space-y-3">
        {details.map(([Icon, label, value, href]) => (
          <a key={label} href={href} target={label === "WhatsApp" ? "_blank" : undefined} rel={label === "WhatsApp" ? "noopener noreferrer" : undefined} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 p-3 transition hover:bg-white/14">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-purple-700"><Icon size={18} /></span>
            <span className="min-w-0">
              <small className="block text-[9px] font-bold uppercase tracking-[0.13em] text-white/50">{label}</small>
              <b className="block truncate text-xs">{value}</b>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-4 flex gap-3 border-t border-white/10 pt-4 text-xs text-white/70">
        <MapPin size={17} className="mt-0.5 shrink-0 text-amber-400" />
        <address className="not-italic leading-5">{SITE.address}</address>
      </div>
    </section>
  );
}
