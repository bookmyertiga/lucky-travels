import { MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Lucky Travels, I would like a quote for a Premium Ertiga.",
  )}`;

  return (
    <a
      aria-label="Book Lucky Travels on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      href={whatsappUrl}
      className="group fixed bottom-[74px] right-4 z-[70] flex items-center rounded-full border-[3px] border-white bg-green-500 p-1.5 text-white shadow-2xl transition hover:-translate-y-1 lg:bottom-24 lg:right-7"
    >
      <span className="hidden pl-3 pr-2 text-xs font-black 2xl:block">
        Book on WhatsApp
      </span>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-green-600">
        <MessageCircle size={27} />
      </span>
    </a>
  );
}
