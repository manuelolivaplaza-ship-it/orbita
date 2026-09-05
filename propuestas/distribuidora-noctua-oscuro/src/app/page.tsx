import Image from "next/image";
import Link from "next/link";
import { Carta, CartaNote } from "@/components/carta";
import { Arrow } from "@/components/mark";
import { NightArc } from "@/components/night-arc";
import { NightBar } from "@/components/night-bar";
import { Reveal } from "@/components/reveal";
import { Sonda } from "@/components/sonda";
import { featured, ventanas } from "@/data/catalog";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

const protocolo = [
  {
    n: "01",
    title: "Cortar",
    text: "El pedido entra antes de las 19:00. Lo que llega después, sale en la ronda del día siguiente.",
  },
  {
    n: "02",
    title: "Medir",
    text: "Cada guía lleva sonda. Ambiente, positivo y túnel no se mezclan. Si un grado se mueve, no se cierra.",
  },
  {
    n: "03",
    title: "Salir",
    text: "A las 21:00 la primera caja deja Quilicura. Calles vacías. Una parada por local.",
  },
  {
    n: "04",
    title: "Firmar",
    text: "Puerta de atrás, cámara lista, firma. Cuando llega el primero de la brigada, ya está.",
  },
];

export default function HomePage() {
  const carta = featured();

  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-void">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-m.jpg" />
          <img
            src="/images/hero.jpg"
            alt="Camión refrigerado negro en el muelle de Quilicura, vapor frío, luna menguante y la cordillera"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="ken absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="vignette" />

        <div className="relative flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 pt-28 md:px-10 md:pb-16 lg:px-16">
          <p
            className="rise font-mono text-[0.62rem] uppercase tracking-[0.32em] text-paper/70"
            style={{ animationDelay: "0.15s" }}
          >
            Distribuidora · Quilicura
          </p>
          <h1
            className="rise mt-6 max-w-4xl font-display text-[clamp(3.1rem,8vw,8rem)] font-semibold leading-[0.86] tracking-tight"
            style={{ animationDelay: "0.28s" }}
          >
            Se llega
            <br />
            <span className="text-amber">de noche.</span>
          </h1>
          <div
            className="rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Link href="/carta" className="btn btn-amber">
              Ver la carta
              <Arrow />
            </Link>
            <Link href="/cuenta" className="btn btn-light">
              Abrir cuenta
            </Link>
          </div>
        </div>

        <p className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-paper/55 [writing-mode:vertical-rl] lg:right-10 lg:block">
          {site.coords.lat} · {site.address.city}
        </p>

        <div className="absolute bottom-8 right-6 hidden items-start gap-3 md:flex lg:right-16">
          <span className="line-grow mt-1 h-10 w-px bg-amber" />
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-paper/70">
            Bajar
          </span>
        </div>
      </section>

      <NightBar />

      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36 lg:px-16">
        <Reveal className="md:col-span-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Manifiesto
          </p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Noctua no es un CD. Es una hora.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-8" delay={120}>
          <p className="text-lg leading-relaxed text-paper-dim">
            De día, Santiago es ruido y filas. De noche, las calles se vacían y
            la cámara se queda sola. Ahí operamos: entre el último cubierto y el
            primer cuchillo. Tres ventanas. Una guía. El grado, la hora, la
            firma.
          </p>
          <Link
            href="/casa"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Conocer la casa
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {[
            { k: "21:00", v: "Sale la ronda" },
            { k: "19:00", v: "Corte de pedido" },
            { k: "3", v: "Ventanas" },
            { k: "−18", v: "El piso del frío" },
          ].map((item, index) => (
            <Reveal
              key={item.v}
              delay={index * 80}
              className="border-line px-6 py-10 md:px-10 lg:px-16 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-5xl font-semibold tracking-tight tabular-nums md:text-6xl">
                {item.k}
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                {item.v}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-16">
          <Reveal className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Instrumento
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              La noche, en 24 horas.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-paper-dim">
              El arco ámbar es la ronda: de las 21:00 a las 06:00. El resto del
              círculo, silencio. El puntero es Santiago ahora.
            </p>
            <Sonda className="mt-10 max-w-[14rem] text-paper/80" />
          </Reveal>
          <Reveal className="flex justify-center md:col-span-6 md:col-start-7" delay={100}>
            <NightArc />
          </Reveal>
        </div>
      </section>

      <section id="ventanas" className="border-b border-line">
        {ventanas.map((ventana, index) => (
          <Link
            key={ventana.id}
            href={`/carta/${ventana.id}`}
            className="group grid border-b border-line last:border-b-0 md:grid-cols-12"
          >
            <Reveal
              delay={index * 60}
              className={`flex flex-col justify-between px-6 py-12 md:col-span-6 md:px-10 md:py-16 lg:px-16 ${
                index === 1 ? "md:order-2" : ""
              }`}
            >
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  {ventana.kicker}
                </p>
                <p className="mt-5 font-display text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-none tracking-tight text-amber">
                  {ventana.window}
                </p>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {ventana.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-dim md:text-base">
                  {ventana.title} {ventana.lead}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]">
                Entrar a la ventana
                <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Reveal>
            <div
              className={`relative min-h-[22rem] md:col-span-6 md:min-h-[32rem] ${
                index === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={ventana.image}
                alt={ventana.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:flex md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Carta
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Nueve SKU que salen todas las noches.
            </h2>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper-dim md:mt-0">
            Lista de trabajo, no vitrina. El resto de la carta se abre con
            cuenta. Pedido mínimo {formatCLP(site.pedidoMinimoNeto)} neto.
          </p>
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <Carta items={carta} showVentana />
          <CartaNote href="/carta" />
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[40rem]">
            <Image
              src="/images/ronda.jpg"
              alt="Camión negro en la autopista vacía de Santiago, asfalto mojado, luces ámbar y la cordillera nevada"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                Ronda
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Sale a las veintiuna.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-paper-dim">
                Camión propio, sonda en caja, una parada por local. Lo que entra
                antes de las {site.cortePedido} viaja esa misma noche. Lo que
                entra después, espera al tramo siguiente.
              </p>
              <Link href="/ronda" className="btn btn-light mt-10 w-fit">
                Ver la ronda
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            El protocolo
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold tracking-tight">
            Cuatro pasos. Ningún teatro.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {protocolo.map((step, index) => (
            <Reveal key={step.n} delay={index * 90}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {step.n}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-10 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Athene noctua
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
                El búho pequeño ve lo que el día no muestra.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-paper-dim">
                Por eso el nombre. Por eso el horario. Por eso no encendemos más
                luces de las que hacen falta: un muelle, una sonda, y el tiempo
                para que la guía llegue sin que nadie empuje.
              </p>
            </Reveal>
          </div>
          <div className="relative min-h-[380px] md:col-span-7 md:min-h-[560px]">
            <Image
              src="/images/owl.jpg"
              alt="Búho de bronce sobre un escritorio de acero, lámpara ámbar y Santiago de noche por la ventana"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cd.jpg"
            alt="Centro de distribución negro en Quilicura de noche, fila de luces ámbar y la cordillera al fondo"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-void/60" />
        </div>
        <div className="relative mx-auto flex min-h-[520px] max-w-[1440px] flex-col items-start justify-end px-6 py-20 md:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70">
              Pedido mínimo {formatCLP(site.pedidoMinimoNeto)} neto
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper md:text-6xl">
              La ronda se pide antes del crepúsculo.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/cuenta" className="btn btn-amber">
                Abrir cuenta
                <Arrow />
              </Link>
              <a href={site.whatsappHref} className="btn btn-light">
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
