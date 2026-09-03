import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-var",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Club de entrenamiento en Lo Barnechea`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "gimnasio Lo Barnechea",
    "club de entrenamiento Santiago",
    "pilates reformer Lo Barnechea",
    "entrenamiento de fuerza Chile",
    "gimnasio luminoso Santiago",
    "ALBA club",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.legalName,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/exterior.jpg", width: 1200, height: 675, alt: "Fachada de ALBA en Lo Barnechea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/images/exterior.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f3eee4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className={`${sans.className} relative flex min-h-full flex-col bg-paper text-ink`}>
        <JsonLd />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-copper focus:px-4 focus:py-2 focus:text-cream"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
