import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "ETER nace en Pudahuel en 2014: una distribuidora que trata la temperatura como oficio, no como recargo.",
};

const cifras = [
  { k: "2014", v: "Primera guía" },
  { k: "3", v: "Cámaras" },
  { k: "04:30", v: "Sale la ronda" },
  { k: "−18", v: "El piso del frío" },
];

export default function NosotrosPage() {
  return (
    <div className="pt-[4.4rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          Nosotros
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,6rem)] font-light leading-[0.92] tracking-tight">
          El éter es lo que no se ve cuando llega a tiempo.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          ETER empieza en 2014, en un galpón de Pudahuel, porque las cocinas
          compraban a seis proveedores y nadie respondía por el grado. El nombre
          es literal: el trabajo bueno es invisible.
        </p>
      </header>

      <section className="grid border-y border-line md:grid-cols-12">
        <div className="relative min-h-[22rem] md:col-span-7 md:min-h-[38rem]">
          <Image
            src="/images/mesa.jpg"
            alt="Mise en place sin personas: lino, sal, harina y aceitera de vidrio sobre piedra clara"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end px-5 py-14 md:col-span-5 md:px-10 md:py-16 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              Oficio
            </p>
            <p className="mt-5 font-display text-3xl font-light leading-snug md:text-4xl">
              No venimos del camión. Venimos de la estación. Por eso la carta es
              corta y la cadena, larga.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Compramos a molinos, olivares, frigoríficos y cooperativas que
              aceptan ficha y lote. Vendemos a restaurant, hotel, café, catering
              y casino. El resto —el teatro del mayorista— no nos interesa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-2 border-b border-line md:grid-cols-4">
        {cifras.map((item, index) => (
          <Reveal
            key={item.v}
            delay={index * 70}
            className="border-line px-5 py-10 md:px-10 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
          >
            <p className="font-display text-4xl font-light tracking-tight md:text-5xl">
              {item.k}
            </p>
            <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
              {item.v}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-16">
        <Reveal className="md:col-span-6">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            Pudahuel, no un showroom.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
            El CD está en Parque ENEA porque ahí vive la hora: el aeropuerto, la
            Vespucio, la salida al norte y al sur. Se visita con cita, de 9 a 13,
            si hay que ver cámara o probar un lote.
          </p>
          <address className="mt-8 not-italic text-sm leading-relaxed text-ink-soft">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
            <br />
            {site.legalName} · RUT {site.rut}
          </address>
          <Link href="/cuenta" className="btn btn-ink mt-10">
            Abrir cuenta
            <Arrow />
          </Link>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3 md:col-span-5 md:col-start-8" delay={100}>
          <div className="frame relative aspect-square">
            <Image
              src="/images/aceite.jpg"
              alt="Macro de la superficie de aceite de oliva con una burbuja y luz de norte"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative aspect-square">
            <Image
              src="/images/cafe.jpg"
              alt="Bol de cerámica con granos de café sobre piedra, polvo de luz al fondo"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative col-span-2 aspect-[4/3]">
            <Image
              src="/images/sal.jpg"
              alt="Saco de lino con cristales de sal marina derramados sobre piedra caliza"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
