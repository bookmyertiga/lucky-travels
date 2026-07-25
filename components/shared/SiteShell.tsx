import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen overflow-x-hidden bg-[#f6f7fb] text-[#090f2f]"><Navbar />{children}<Footer /><FloatingWhatsApp /></main>;
}
