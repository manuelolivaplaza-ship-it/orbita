import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { WhatsApp } from "@/components/whatsapp";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noctua.cl"),
  title: {
    default: "NOCTUA — Neumáticos de precisión",
    template: "%s · NOCTUA",
  },
  description: site.description,
  applicationName: "NOCTUA",
  keywords: [
    "neumáticos",
    "Chile",
    "Santiago",
    "Huechuraba",
    "taller",
    "Hilux",
    "lluvia",
    "nieve",
    "Farellones",
  ],
  openGraph: {
    title: "NOCTUA — Neumáticos de precisión",
    description: site.tagline,
    locale: "es_CL",
    type: "website",
    images: ["/images/hero-ruta.jpg"],
  },
};

export const viewport = {
  themeColor: "#060608",
  colorScheme: "dark" as const,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <div className="grain" aria-hidden />
        <Nav />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
