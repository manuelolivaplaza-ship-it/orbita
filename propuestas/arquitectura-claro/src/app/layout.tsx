import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ede8df",
};

export const metadata: Metadata = {
  title: {
    default: "VETA — Arquitectura",
    template: "%s — VETA",
  },
  description:
    "Atelier de arquitectura en Buenos Aires. Casas, bodegas, cultura y espacio público. El lugar tiene una veta. Nosotros la seguimos.",
  keywords: [
    "arquitectura",
    "estudio de arquitectura",
    "Buenos Aires",
    "VETA",
    "casas",
    "bodegas",
    "arquitectura latinoamericana",
  ],
  openGraph: {
    title: "VETA — Arquitectura",
    description:
      "Atelier de arquitectura en Buenos Aires. El lugar tiene una veta. Nosotros la seguimos.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${outfit.className} flex min-h-full flex-col bg-paper font-sans text-ink`}>
        <div className="grain" aria-hidden="true" />
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
