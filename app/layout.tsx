import type { Metadata, Viewport } from "next";
import { SITE } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Premium Ertiga Airport Taxi in Bengaluru | Lucky Travels", template: "%s | Lucky Travels" },
  description: "Book a clean, comfortable Premium Ertiga for Bengaluru airport pickup, airport drop, hourly rental and outstation travel. Call or WhatsApp Lucky Travels.",
  applicationName: SITE.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "1254x1254" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "1254x1254" }],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_IN", url: SITE.url, siteName: `${SITE.brand} by ${SITE.name}`,
    title: "Go Bengaluru with Lucky Travels",
    description: "Premium Ertiga airport taxi service in Bengaluru.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Go Bengaluru with Lucky Travels Premium Ertiga Airport Taxi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Bengaluru with Lucky Travels",
    description: "Premium Ertiga airport taxi service in Bengaluru.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5b16d9",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
