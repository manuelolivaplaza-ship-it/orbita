import Image from "next/image";
import Link from "next/link";
import { BahiaBoard } from "@/components/bahia-board";
import { Cruce } from "@/components/cruce";
import { Lamp } from "@/components/lamp";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { SkuNote, SkuTable } from "@/components/sku-table";
import { families, featuredPieces, pieceBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

const turno = [
  {
    n: "18:00",
    title: "Abre el mesón",
    text: "Entra la lista del taller, la flota y la faena. Se lee patente, motor, OEM.",
  },
  {
    n: site.cruceHora,
    title: "Cierra el cruce",
    text: "Lo que entra hasta aquí se confirma, se etiqueta y baja a bahía.",
  },
  {
    n: site.bahiaHora,
    title: "Bahía lista",
    text: "Retiro en Quilicura. El maestro pasa, firma, se lleva la pieza.",
  },
  {
    n: `${site.despachoDesde}–${site.despachoHasta}`,
    title: "Sale a la RM",
    text: "Despacho a taller y faena. Pedido mínimo con IVA.",
  },
];

export default function HomePage() {
  const lista = featuredPieces();
  const nightPiece = pieceBySlug("disco-ventilado");

  return (
    <>
      <section className="relative min-h-[100svh] md:grid md:grid-cols-12">
        <div className="relative h-[58svh] overflow-hidden md:col-span-7 md:h-auto md:min-h-[100svh]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/hero-m.jpg" />
            <img
              src="/images/hero.jpg"
              alt="Pasillo de la bodega de noche: estanterías de repuestos, lámpara de sodio al fondo"
              width={1920}
              height={1080}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <p className="pointer-events-none absolute bottom-6 left-5 hidden font-mono text-[0.58rem] uppercase tracking-[0.28em] text-face/80 md:block">
            {site.coords.lat} · {site.address.commune}
          </p>
        </div>

        <div className="flex flex-col justify-end bg-void px-5 pb-10 pt-8 md:col-span-5 md:justify-center md:px-10 md:pb-16 lg:px-14">
          <p
            className="rise font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute"
            style={{ animationDelay: "0.08s" }}
          >
            Bodega de cruce · Quilicura
          </p>
          <h1 className="rise mt-5 max-w-xl font-display text-[clamp(3.1rem,8vw,6.4rem)] font-medium leading-[0.86] tracking-wide">
            La pieza se cruza de noche.
          </h1>
          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-mute md:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            Patente, OEM y motor. Lista hasta las {site.cruceHora}. En bahía a
            las {site.bahiaHora}.
          </p>
          <div className="rise mt-5" style={{ animationDelay: "0.22s" }}>
            <Lamp />
          </div>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.28s" }}
          >
            <Link href="/cruce" className="btn btn-sodium">
              Cruzar patente
              <Arrow />
            </Link>
            <Link href="/familias" className="btn btn-ghost">
              Ver familias
            </Link>
          </div>
          <div className="rule rule-sodium mt-10" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 md:grid-cols-4">
          {[
            { k: site.cruceHora, v: "Cierra el cruce" },
            { k: site.bahiaHora, v: "Bahía lista" },
            { k: "08", v: "Familias en bodega" },
            { k: "00", v: "Adivinanzas" },
          ].map((item, index) => (
            <Reveal
              key={item.v}
              delay={index * 70}
              className="border-line px-5 py-10 md:px-10 lg:px-16 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-5xl font-medium tracking-wide tabular-nums md:text-6xl">
                {item.k}
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mute">
                {item.v}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="oficio"
        className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:col-span-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Oficio
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-medium leading-[0.94] tracking-wide">
            El taller no espera el día. La bodega tampoco.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7 md:pt-12" delay={80}>
          <p className="text-base leading-relaxed text-mute md:text-lg">
            Abrimos a las 18:00, cuando el resto cierra. Atendemos la parada de
            flota, el taxi que no puede amanecer en el patio y la lista que el
            maestro dejó para la madrugada. Sin cruce, no hay mostrador.
          </p>
          <Link
            href="/turno"
            className="trace mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
          >
            Cómo corre el turno
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section
        id="cruce"
        className="mx-auto max-w-[1480px] px-5 pb-24 md:px-10 md:pb-32 lg:px-16"
      >
        <Reveal>
          <Cruce compact />
        </Reveal>
      </section>

      <section id="familias" className="border-y border-line">
        <div className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
          <Reveal className="md:flex md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
                Planta de la bodega
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium tracking-wide md:text-6xl">
                Ocho bahías. Un pasillo.
              </h2>
            </div>
            <Link
              href="/familias"
              className="trace mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] md:mt-0"
            >
              Todas las familias
              <Arrow />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-4">
            {families.map((family, index) => (
              <Reveal key={family.id} delay={index * 40} className="bg-void">
                <Link
                  href={`/familias/${family.id}`}
                  className="group flex h-full flex-col justify-between px-5 py-8 transition-colors hover:bg-nave md:px-6"
                >
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mute">
                      {family.index} · {family.bay}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-medium tracking-wide">
                      {family.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {family.kicker}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-mute group-hover:text-face">
                    desde {formatCLP(family.fromIva)}
                    <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {nightPiece ? (
        <section className="relative overflow-hidden">
          <div className="relative min-h-[88svh]">
            <Image
              src="/images/og.jpg"
              alt={nightPiece.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-void via-void/40 to-void/25" />
            <div className="relative mx-auto flex min-h-[88svh] max-w-[1480px] flex-col justify-end px-5 py-16 md:px-10 lg:px-16">
              <Reveal>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sodium">
                  Pieza de la noche · {nightPiece.sku}
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-wide md:text-7xl">
                  {nightPiece.name}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-face/75">
                  {nightPiece.lead}
                </p>
                <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-face/70">
                  {formatCLP(nightPiece.priceIva)} · {nightPiece.spec}
                </p>
                <Link
                  href={`/pieza/${nightPiece.slug}`}
                  className="btn btn-sodium mt-8 w-fit"
                >
                  Ver la ficha
                  <Arrow />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-line bg-nave">
        <div className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Lista de bahía
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium tracking-wide md:text-6xl">
              Lo que sale todas las madrugadas.
            </h2>
          </Reveal>
          <Reveal className="mt-12" delay={80}>
            <SkuTable items={lista} />
            <SkuNote />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-7 md:min-h-[42rem]">
            <Image
              src="/images/flota.jpg"
              alt="Camioneta de flota en el patio de la bodega, de noche, bajo lámparas de sodio"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between px-5 py-14 md:col-span-5 md:px-10 md:py-16 lg:px-14">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
                Flotas y faena
              </p>
              <h2 className="mt-5 font-display text-4xl font-medium tracking-wide md:text-5xl">
                Hilux, L200, NP300. El norte no espera.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-mute">
                Cuenta corriente, factura a 30 días, lista por patente. Si la
                faena para a las 02:00, la pieza tiene que estar a las{" "}
                {site.bahiaHora}.
              </p>
            </Reveal>
            <Reveal className="mt-10" delay={80}>
              <dl className="space-y-4 border-t border-line pt-8">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                    Pedido mínimo
                  </dt>
                  <dd>{formatCLP(site.pedidoMinimoIva)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                    Factura
                  </dt>
                  <dd className="text-right">{site.factura}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                    Despacho RM
                  </dt>
                  <dd>
                    {site.despachoDesde} – {site.despachoHasta}
                  </dd>
                </div>
              </dl>
              <Link
                href="/cotizar?familia=frenos"
                className="mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              >
                Abrir cuenta de flota
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Turno
          </p>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium tracking-wide md:text-6xl">
            Cuatro horas que importan.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-4">
          {turno.map((item, index) => (
            <Reveal key={item.n} delay={index * 60} className="bg-void px-5 py-8 md:px-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sodium">
                {item.n}
              </p>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-wide">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12" delay={80}>
          <BahiaBoard />
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-16">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-[clamp(2.4rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-wide">
              Escribe la patente. Después, la bodega.
            </h2>
          </Reveal>
          <Reveal className="flex flex-col justify-end md:col-span-4 md:col-start-9" delay={80}>
            <p className="text-sm leading-relaxed text-mute">
              WhatsApp al {site.whatsapp}. Mesón en Frei Montalva. Si entra
              antes de las {site.cruceHora}, sale a las {site.bahiaHora}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cruce" className="btn btn-sodium">
                Cruzar ahora
                <Arrow />
              </Link>
              <Link href="/cotizar" className="btn btn-ghost">
                Cotizar
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
