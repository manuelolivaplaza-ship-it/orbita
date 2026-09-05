import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NOCTUA — Casa nocturna de automóviles",
    template: "%s — NOCTUA",
  },
  description: site.description,
  applicationName: "NOCTUA",
  authors: [{ name: "NOCTUA SpA" }],
  keywords: [
    "concesionaria",
    "autos de lujo",
    "Vitacura",
    "Santiago",
    "NOCTUA",
    "Porsche",
    "Aston Martin",
    "seminuevos",
    "casa de automóviles",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "NOCTUA",
    title: "NOCTUA — Casa nocturna de automóviles",
    description: site.description,
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOCTUA — Casa nocturna de automóviles",
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#050506",
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
      className={`${manrope.variable} ${syne.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-paper">
        <JsonLd />
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
