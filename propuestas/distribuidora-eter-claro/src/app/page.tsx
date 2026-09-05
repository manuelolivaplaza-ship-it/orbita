import Image from "next/image";
import Link from "next/link";
import { Atmosphere } from "@/components/atmosphere";
import { Carta, CartaNote } from "@/components/carta";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { Temps } from "@/components/temps";
import { estados, featured, rondaAm } from "@/data/catalog";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export default function HomePage() {
  const carta = featured();

  return (
    <>
      <section id="atmosfera" className="hero">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-m.jpg" />
          <img
            src="/images/hero.jpg"
            alt="Bodega pálida al amanecer, un haz de luz atravesando harina en suspensión"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="float-media absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="hero-veil absolute inset-0" />
        <Atmosphere />

        <div className="relative z-20 flex h-full max-w-[1480px] flex-col justify-end px-5 pb-10 pt-28 md:justify-center md:px-10 md:pb-16 lg:px-16">
          <p
            className="rise font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted"
            style={{ animationDelay: "0.12s" }}
          >
            Distribuidora · Pudahuel
          </p>
          <h1
            className="rise mt-5 max-w-3xl font-display text-[clamp(3rem,8.2vw,7.6rem)] font-light leading-[0.88] tracking-tight"
            style={{ animationDelay: "0.28s" }}
          >
            Tres estados.
            <br />
            <em className="italic">Una sola red.</em>
          </h1>
          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
            style={{ animationDelay: "0.46s" }}
          >
            Seco, líquido y frío para cocina profesional. Lo que no se ve —el
            grado, la hora, la guía— es el trabajo.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.62s" }}
          >
            <Link href="/lineas" className="btn btn-ink">
              Ver las líneas
              <Arrow />
            </Link>
            <Link href="/cuenta" className="btn btn-ghost">
              Abrir cuenta
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-5 z-20 hidden md:block lg:right-16">
          <Temps className="min-w-[11rem] text-ink/70" />
        </div>
      </section>

      <section
        id="lectura"
        className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Oficio
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.12] tracking-tight">
            Una cocina pide tres temperaturas. La mayoría responde con tres
            camiones. Nosotros, con una guía.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
            El pedido entra antes de las {site.cortePedido}. A las 04:30 ya va en
            la ronda. Harina a 19 °C, aceite a 3 °C, salmón a −18 °C. Si un grado
            se mueve, la guía no sale.
          </p>
        </Reveal>
      </section>

      <section id="estados" className="border-y border-line">
        {estados.map((estado, index) => (
          <Link
            key={estado.id}
            href={`/lineas/${estado.id}`}
            className="group grid border-b border-line last:border-b-0 md:grid-cols-12"
          >
            <Reveal
              delay={index * 60}
              className={`flex flex-col justify-between px-5 py-12 md:col-span-6 md:px-10 md:py-16 lg:px-16 ${
                index === 1 ? "md:order-2" : ""
              }`}
            >
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  {estado.kicker}
                </p>
                <p className="mt-5 font-display text-[clamp(3.4rem,8vw,7rem)] font-light leading-none tracking-tight text-frost">
                  {estado.temp}
                </p>
                <h3 className="mt-6 font-display text-3xl font-light tracking-tight md:text-4xl">
                  {estado.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                  {estado.title} {estado.lead}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]">
                Entrar a la cámara
                <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Reveal>
            <div
              className={`relative min-h-[22rem] md:col-span-6 md:min-h-[32rem] ${
                index === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={estado.image}
                alt={estado.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        ))}
      </section>

      <section
        id="carta"
        className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:flex md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Carta
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-light tracking-tight md:text-6xl">
              Nueve SKU que salen todas las mañanas.
            </h2>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft md:mt-0">
            Lista de trabajo, no vitrina. El resto de la carta se abre con
            cuenta. Pedido mínimo {formatCLP(site.pedidoMinimoNeto)} neto.
          </p>
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <Carta items={carta} showEstado />
          <CartaNote href="/lineas" />
        </Reveal>
      </section>

      <section id="ronda" className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[40rem]">
            <Image
              src="/images/ronda.jpg"
              alt="Camión blanco sin marca saliendo del CD al amanecer, niebla y cordillera al fondo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="px-5 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Ronda AM
              </p>
              <h2 className="mt-5 font-display text-4xl font-light tracking-tight md:text-5xl">
                Sale a las cuatro y media.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
                Camión propio, sonda en caja, una parada por local. Lo que entra
                antes de las {site.cortePedido} viaja de madrugada.
              </p>
            </Reveal>
            <ol className="mt-10">
              {rondaAm.map((stop, index) => (
                <Reveal key={stop.hora} delay={index * 50}>
                  <li className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                    <span className="font-mono text-sm tabular-nums text-frost">
                      {stop.hora}
                    </span>
                    <span className="text-right text-sm text-ink-soft">
                      {stop.lugar}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10">
              <Link
                href="/red"
                className="inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              >
                Ver la red
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="umbral"
        className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:col-span-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Umbral
          </p>
          <h2 className="mt-5 font-display text-4xl font-light tracking-tight md:text-6xl">
            Una ficha. Una factura. Tres temperaturas.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={100}>
          <dl className="space-y-6">
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                Pedido mínimo
              </dt>
              <dd className="mt-2 font-display text-3xl font-light">
                {formatCLP(site.pedidoMinimoNeto)} neto
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                Plazo RM
              </dt>
              <dd className="mt-2 text-ink-soft">
                {site.plazoRM} si el pedido entra antes de las {site.cortePedido}.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                V y VI
              </dt>
              <dd className="mt-2 text-ink-soft">
                {site.plazoRegiones}. Camión refrigerado, días fijos.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                Factura
              </dt>
              <dd className="mt-2 text-ink-soft">{site.factura}.</dd>
            </div>
          </dl>
          <Link href="/cuenta" className="btn btn-ink mt-10">
            Abrir cuenta comercial
            <Arrow />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
