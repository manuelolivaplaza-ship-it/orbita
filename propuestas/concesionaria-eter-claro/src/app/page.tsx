import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { VehicleCard } from "@/components/vehicle-card";
import { site } from "@/data/site";
import { getFeatured, vehicles } from "@/data/vehicles";

const rites = [
  {
    n: "01",
    title: "Descubrir",
    text: "Miras la colección en silencio. Sin un vendedor al hombro. Si una pieza te detiene, la nombramos.",
  },
  {
    n: "02",
    title: "Conocer",
    text: "Vienes a la casa con cita. Cuarenta minutos, luz de montaña, el auto sobre piedra clara. Se prueba en la cuesta.",
  },
  {
    n: "03",
    title: "Habitar",
    text: "Transferencia, permiso, entrega en Lo Barnechea o en tu puerta. El crédito, si hace falta, lo ordenamos con tu banco.",
  },
];

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-paper">
        <Image
          src="/images/hero.jpg"
          alt="Sedán eléctrico plata andina sobre hormigón mojado, con la cordillera al fondo"
          fill
          priority
          sizes="100vw"
          className="ken object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/15 to-ink/25" />

        <div className="relative flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 pt-28 md:px-10 md:pb-16 lg:px-16">
          <p
            className="rise font-mono text-[0.62rem] uppercase tracking-[0.32em] text-paper/70"
            style={{ animationDelay: "0.15s" }}
          >
            Casa de automóviles · Lo Barnechea
          </p>
          <h1
            className="rise mt-6 max-w-4xl font-display text-[clamp(2.85rem,7.2vw,7.4rem)] font-light leading-[0.86] tracking-tight"
            style={{ animationDelay: "0.28s" }}
          >
            El aire,
            <br />
            <em className="italic">hecho forma.</em>
          </h1>
          <div
            className="rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Link href="/coleccion" className="btn btn-light">
              Ver la colección
              <Arrow />
            </Link>
            <Link href="/visita" className="btn btn-light">
              Agendar visita
            </Link>
          </div>
        </div>

        <p className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-paper/55 [writing-mode:vertical-rl] lg:right-10 lg:block">
          Santiago · Chile
        </p>

        <div className="absolute bottom-8 right-6 hidden items-start gap-3 md:flex lg:right-16">
          <span className="line-grow mt-1 h-10 w-px bg-paper/70" />
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-paper/70">
            Bajar
          </span>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36 lg:px-16">
        <Reveal className="md:col-span-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Manifiesto
          </p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
            No mantenemos un patio. Mantenemos una casa.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-ink-soft">
            Cada auto entra porque silencia algo: el ruido, la prisa, la idea de
            que el lujo tiene que anunciarse. Nueve presencias, no un inventario.
            Luz de montaña, piedra clara, y el tiempo para decidir sin que nadie
            empuje.
          </p>
          <Link href="/la-casa" className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]">
            Conocer la casa
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {[
            { k: "09", v: "Piezas en casa" },
            { k: "01", v: "Showroom" },
            { k: "11–19", v: "Hora de la luz" },
            { k: "00", v: "Ruido de más" },
          ].map((item, index) => (
            <Reveal
              key={item.v}
              delay={index * 80}
              className="border-line px-6 py-10 md:px-10 lg:px-16 [&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-5xl font-light tracking-tight md:text-6xl">
                {item.k}
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                {item.v}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              En el piso
            </p>
            <h2 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
              Tres presencias
            </h2>
          </div>
          <Link
            href="/coleccion"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            La colección completa
            <Arrow />
          </Link>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {featured.map((vehicle, index) => (
            <Reveal
              key={vehicle.slug}
              delay={index * 90}
              className={index === 0 ? "md:col-span-2" : undefined}
            >
              <VehicleCard
                vehicle={vehicle}
                large={index === 0}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="relative min-h-[420px] md:col-span-7 md:min-h-[720px]">
            <Image
              src="/images/showroom.jpg"
              alt="Casa ETER: un sedán blanco en un recinto de piedra y vidrio, con la cordillera al fondo"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gold-soft">
                La casa
              </p>
              <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-tight">
                Vidrio, piedra y un solo auto a la vez.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-paper/70">
                {site.address.line1}, {site.address.commune}. No es un local de
                avenida: es una sala con luz de montaña. Se visita con cita, de
                martes a sábado, cuando el valle todavía tiene niebla.
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
            El rito
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-light tracking-tight">
            Tres pasos. Ningún apuro.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {rites.map((rite, index) => (
            <Reveal key={rite.n} delay={index * 100}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                {rite.n}
              </p>
              <h3 className="mt-4 font-display text-3xl font-light">{rite.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{rite.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/andes.jpg"
            alt="Camino de cordillera al amanecer, con niebla en el valle"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
        <div className="relative mx-auto flex min-h-[480px] max-w-[1440px] flex-col items-start justify-end px-6 py-20 md:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70">
              {vehicles.length.toString().padStart(2, "0")} piezas · una casa
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl font-light leading-[1.05] tracking-tight text-paper md:text-6xl">
              La casa se visita con cita.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/visita" className="btn btn-light">
                Agendar visita
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
