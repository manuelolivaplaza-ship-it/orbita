import Image from "next/image";
import Link from "next/link";
import { Filmstrip } from "@/components/filmstrip";
import { Arrow } from "@/components/mark";
import { NightBar } from "@/components/night-bar";
import { Reveal } from "@/components/reveal";
import { VehicleCard } from "@/components/vehicle-card";
import { site } from "@/data/site";
import { getFeatured, vehicles } from "@/data/vehicles";
import { formatCLP, formatKm, formatTemperament } from "@/lib/format";

const protocol = [
  {
    n: "01",
    title: "Llegar",
    text: "El pabellón se enciende para ti. Un auto en el piso, no diez. Te recibe quien custodia la noche, no un vendedor.",
  },
  {
    n: "02",
    title: "Ver",
    text: "Sin discurso. Ficha, kilometraje, historial, la pintura bajo la lámpara ámbar. Preguntas cuando las tengas.",
  },
  {
    n: "03",
    title: "Conducir",
    text: "Costanera, túnel o Manquehue. De noche el chasis habla y la ciudad deja de interrumpir.",
  },
  {
    n: "04",
    title: "Decidir",
    text: "Pie, transferencia, permiso. O simplemente te vas. Las dos cosas están bien.",
  },
];

export default function HomePage() {
  const featured = getFeatured();
  const nightPiece = featured[0] ?? vehicles[0];

  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-void">
        <Image
          src="/images/hero.jpg"
          alt="Porsche 911 negro sobre asfalto mojado, con Santiago al fondo de noche"
          fill
          priority
          sizes="100vw"
          className="ken object-cover"
        />
        <div className="vignette" />

        <div className="relative flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 pt-28 md:px-10 md:pb-16 lg:px-16">
          <p
            className="rise font-mono text-[0.62rem] uppercase tracking-[0.32em] text-paper/70"
            style={{ animationDelay: "0.15s" }}
          >
            Casa nocturna · Vitacura
          </p>
          <h1
            className="rise mt-6 max-w-4xl font-display text-[clamp(3.1rem,8vw,8rem)] font-semibold leading-[0.86] tracking-tight"
            style={{ animationDelay: "0.28s" }}
          >
            Se reconoce
            <br />
            <span className="text-amber">de noche.</span>
          </h1>
          <div
            className="rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Link href="/coleccion" className="btn btn-amber">
              Ver la colección
              <Arrow />
            </Link>
            <Link href="/visita" className="btn btn-light">
              Agendar esta noche
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

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36 lg:px-16">
        <Reveal className="md:col-span-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Manifiesto
          </p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Noctua no es un patio. Es una hora.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-paper-dim">
            De día, Santiago es ruido. De noche, se vuelve un instrumento. Abrimos
            cuando la ciudad baja la voz, y mostramos pocas piezas: las que
            todavía se entienden en la oscuridad. Cada milímetro. Cada decisión.
          </p>
          <Link
            href="/la-casa"
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
            { k: "09", v: "Piezas en casa" },
            { k: "18:00", v: "Apertura" },
            { k: "40", v: "Minutos de visita" },
            { k: "00", v: "Vendedores al hombro" },
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

      {nightPiece ? (
        <section className="relative overflow-hidden">
          <div className="relative min-h-[88svh]">
            <Image
              src={nightPiece.image}
              alt={`${nightPiece.brand} ${nightPiece.model} en ${nightPiece.color}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-void via-void/35 to-void/20" />
            <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-6 py-16 md:px-10 lg:px-16">
              <Reveal>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  Pieza de la noche · {formatTemperament(nightPiece.temperament)}
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-7xl">
                  {nightPiece.brand}
                  <br />
                  {nightPiece.model}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/75">
                  {nightPiece.excerpt}
                </p>
                <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-paper/70">
                  {formatCLP(nightPiece.priceCLP)} · {formatKm(nightPiece.km)}
                </p>
                <Link
                  href={`/coleccion/${nightPiece.slug}`}
                  className="btn btn-amber mt-8 w-fit"
                >
                  Ver la ficha
                  <Arrow />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-28 md:py-36">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 md:flex-row md:items-end md:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              En el piso
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Nueve presencias
            </h2>
          </Reveal>
          <Link
            href="/coleccion"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            La colección completa
            <Arrow />
          </Link>
        </div>
        <div className="mt-14">
          <Filmstrip />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-8 md:px-10 lg:px-16">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {featured.slice(1).map((vehicle, index) => (
            <Reveal key={vehicle.slug} delay={index * 90}>
              <VehicleCard vehicle={vehicle} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-ink">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="relative min-h-[420px] md:col-span-7 md:min-h-[720px]">
            <Image
              src="/images/facade.jpg"
              alt="Pabellón de vidrio negro de NOCTUA, con un cupé iluminado en el interior"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                La casa
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight">
                Un vidrio. Un auto. La ciudad debajo.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-paper-dim">
                {site.address.line1}, {site.address.commune}. No es un local de
                avenida: es un pabellón que se enciende a las dieciocho. Se visita
                con cita, de martes a sábado, cuando el Mapocho ya refleja las
                luces.
              </p>
              <Link href="/la-casa" className="btn btn-light mt-10 w-fit">
                Entrar
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
            Cuatro pasos. Ningún apuro.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {protocol.map((step, index) => (
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
                luces de las que hacen falta: un par de lámparas ámbar, el
                reflejo del asfalto, y el tiempo para mirar sin que nadie empuje.
              </p>
            </Reveal>
          </div>
          <div className="relative min-h-[380px] md:col-span-7 md:min-h-[560px]">
            <Image
              src="/images/lounge.jpg"
              alt="Salón de NOCTUA con un búho de bronce, una lámpara de latón y Santiago de noche"
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
            src="/images/santiago.jpg"
            alt="Santiago de noche visto desde Vitacura, con la cordillera y una luna menguante"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-void/60" />
        </div>
        <div className="relative mx-auto flex min-h-[520px] max-w-[1440px] flex-col items-start justify-end px-6 py-20 md:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70">
              {vehicles.length.toString().padStart(2, "0")} piezas · una hora
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper md:text-6xl">
              La casa se visita después del crepúsculo.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/visita" className="btn btn-amber">
                Agendar esta noche
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
