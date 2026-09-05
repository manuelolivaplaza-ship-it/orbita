import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "NOCTUA nace en Quilicura en 2018: una distribuidora que trata la noche como oficio, no como recargo.",
};

const cifras = [
  { k: "2018", v: "Primera guía" },
  { k: "21:00", v: "Sale la ronda" },
  { k: "3", v: "Ventanas" },
  { k: "−18", v: "El piso del frío" },
];

export default function CasaPage() {
  return (
    <div className="pt-[4.5rem]">
      <header className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          La casa
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.92] tracking-tight">
          El búho ve lo que el día no muestra.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim">
          NOCTUA empieza en 2018, en un galpón de Quilicura, porque las cocinas
          compraban a seis proveedores y nadie respondía por la hora. El nombre
          es literal: Athene noctua. El trabajo bueno es invisible.
        </p>
      </header>

      <section className="grid border-y border-line md:grid-cols-12">
        <div className="relative min-h-[22rem] md:col-span-7 md:min-h-[38rem]">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa de acero en el CD de noche: un cajón de madera, una lámpara ámbar y una planilla"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end px-6 py-14 md:col-span-5 md:px-10 md:py-16 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              Oficio
            </p>
            <p className="mt-5 font-display text-3xl font-semibold leading-snug md:text-4xl">
              No venimos del camión. Venimos de la estación. Por eso la carta es
              corta y la ronda, larga.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-paper-dim">
              Compramos a molinos, olivares, frigoríficos y cooperativas que
              aceptan ficha y lote. Vendemos a restaurant, hotel, café, bar y
              catering. El resto —el teatro del mayorista— no nos interesa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-2 border-b border-line md:grid-cols-4">
        {cifras.map((item, index) => (
          <Reveal
            key={item.v}
            delay={index * 70}
            className="border-line px-6 py-10 md:px-10 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
          >
            <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {item.k}
            </p>
            <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
              {item.v}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-16">
        <Reveal className="md:col-span-6">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Quilicura, no un showroom.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
            El CD está en Lo Echevers porque ahí vive la hora: la Ruta 5, el
            norte, la salida al oriente. Se visita con cita, de 21 a 23, si hay
            que ver cámara o probar un lote. De día, el galpón está en silencio.
          </p>
          <address className="mt-8 not-italic text-sm leading-relaxed text-paper-dim">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
            <br />
            {site.legalName} · RUT {site.rut}
          </address>
          <Link href="/cuenta" className="btn btn-amber mt-10">
            Abrir cuenta
            <Arrow />
          </Link>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3 md:col-span-5 md:col-start-8" delay={100}>
          <div className="frame relative aspect-square">
            <Image
              src="/images/aceite.jpg"
              alt="Botella de aceite de oliva sobre piedra negra, un filo de luz dorada"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative aspect-square">
            <Image
              src="/images/cafe.jpg"
              alt="Granos de café en un bol negro, un solo foco"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative aspect-square">
            <Image
              src="/images/salmon.jpg"
              alt="Filete de salmón sobre hielo y piedra negra, luz fría"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative aspect-square">
            <Image
              src="/images/limon.jpg"
              alt="Limones de Pica sobre piedra volcánica negra, gotas de agua"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative col-span-2 aspect-[4/3]">
            <Image
              src="/images/harina.jpg"
              alt="Saco de lino con harina y una nube de polvo bajo una lámpara"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-7 md:min-h-[36rem]">
            <Image
              src="/images/owl.jpg"
              alt="Búho de bronce sobre un escritorio de acero, lámpara ámbar y Santiago de noche"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-10 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                Athene noctua
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight">
                No encendemos más luces de las que hacen falta.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-paper-dim">
                Un muelle, una sonda, una guía. El resto es ruido. Si quieres
                ver el CD, pide cita. Si quieres pedir, abre cuenta.
              </p>
              <Link href="/ronda" className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]">
                Ver la ronda
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
