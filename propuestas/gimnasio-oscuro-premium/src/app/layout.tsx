import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obsidiana.cl"),
  title: {
    default: "Obsidiana — Club de entrenamiento privado, Vitacura",
    template: "%s — Obsidiana",
  },
  description:
    "Club de entrenamiento privado en Vitacura, Santiago. Piedra volcánica, cobre y silencio. 180 socios. Fuerza, movilidad y recuperación.",
  keywords: [
    "gimnasio Vitacura",
    "club de entrenamiento Santiago",
    "gimnasio premium Chile",
    "entrenamiento privado Las Condes",
    "Obsidiana",
  ],
  openGraph: {
    title: "Obsidiana — Club de entrenamiento privado",
    description:
      "Ciento ochenta socios. Cero pantallas. Un recinto de piedra y cobre en Vitacura.",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obsidiana",
    description: "Club de entrenamiento privado. Vitacura, Santiago.",
    images: ["/images/hero.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#070706",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  description: site.tagline,
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.comuna,
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.3905,
    longitude: -70.575,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${cormorant.variable} ${plex.variable} h-full bg-bg text-ivory antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[110] focus:bg-copper focus:px-4 focus:py-2 focus:text-bg"
          >
            Saltar al contenido
          </a>
          <Nav />
          <main id="contenido" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
