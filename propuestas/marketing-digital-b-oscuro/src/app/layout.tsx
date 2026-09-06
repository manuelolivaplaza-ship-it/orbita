import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Big_Shoulders, Source_Serif_4 } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Azeret_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SEÑAL · Estudio de marketing digital en Yungay",
    template: "%s · SEÑAL",
  },
  description: site.description,
  keywords: [
    "agencia marketing digital Santiago",
    "pauta digital Chile",
    "Meta Ads Santiago",
    "Google Ads Chile",
    "estudio marketing Yungay",
    "landing page Chile",
    "SEO Santiago",
  ],
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#090b0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-void pb-14 text-paper lg:pb-0">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd />
        <div className="mast" aria-hidden>
          <span className="mast-led" />
          <span className="mast-line" />
        </div>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCta />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
