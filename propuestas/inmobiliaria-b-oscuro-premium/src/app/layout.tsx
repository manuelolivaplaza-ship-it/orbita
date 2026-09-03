import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Outfit } from "next/font/google";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Preloader } from "@/components/preloader";
import { site } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-var",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-var",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-var",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obsidiana.cl"),
  title: {
    default: "Obsidiana — Residencias de autor",
    template: "%s — Obsidiana",
  },
  description: site.description,
  keywords: [
    "inmobiliaria",
    "Santiago",
    "Vitacura",
    "Lo Barnechea",
    "Zapallar",
    "Puerto Varas",
    "casas de lujo",
    "Chile",
  ],
  openGraph: {
    title: "Obsidiana — Residencias de autor",
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obsidiana — Residencias de autor",
    description: site.description,
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <div className="grain" aria-hidden />
        <Preloader />
        <Cursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
