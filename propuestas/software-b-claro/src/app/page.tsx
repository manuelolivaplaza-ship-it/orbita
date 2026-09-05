import Image from "next/image";
import Link from "next/link";
import { Latitudes } from "@/components/latitudes";
import { Reveal } from "@/components/reveal";
import { SunPath } from "@/components/sun-path";
import { obras } from "@/lib/obra";
import { method, principles, services, stats } from "@/lib/site";
import { team } from "@/lib/team";

export default function HomePage() {
  const featured = obras[0];
  const rest = obras.slice(1);

  return (
    <>
      <Hero />
      <Latitudes />
      <Manifesto />
      <Obra featured={featured} rest={rest} />
      <Oficio />
      <Metodo />
      <Taller />
      <Equipo />
      <Cifras />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="sheet grid min-h-[calc(100svh-var(--header))] items-stretch gap-10 pb-12 pt-8 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-10">
        <div className="flex flex-col justify-end lg:col-span-6 lg:pb-4">
          <p className="kicker rise" style={{ animationDelay: "0.04s" }}>
            Taller de software · Providencia
          </p>
          <h1
            className="display rise mt-6 text-[clamp(3.4rem,10vw,7.8rem)]"
            style={{ animationDelay: "0.12s" }}
          >
            Software
            <br />
            con <em className="text-norte not-italic">norte</em>.
          </h1>
          <p
            className="rise mt-8 max-w-[38ch] text-[1.12rem] leading-[1.65] text-muted md:text-[1.2rem]"
            style={{ animationDelay: "0.24s" }}
          >
            Un taller de once personas. Diseñamos y construimos los sistemas que
            ordenan una operación real — agua, bosque, mar, ruta. Primero el
            eje. Después el resto.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.34s" }}
          >
            <Link href="/contacto" className="btn btn-ink">
              Pedir un levantamiento
            </Link>
            <Link href="/obra" className="btn btn-ghost">
              Ver la obra
            </Link>
          </div>
          <div className="rise mt-12 hidden md:block" style={{ animationDelay: "0.45s" }}>
            <SunPath compact />
          </div>
        </div>

        <div
          className="relative rise lg:col-span-6"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="img-cut relative aspect-[3/4] min-h-[52vh] lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-0">
            <Image
              src="/images/ventana.jpg"
              alt="Ventanal de acero del taller: jacarandás y luz norte recortada sobre el muro."
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div className="mt-3 flex items-start justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
            <p>Piso 7 · luz norte</p>
            <p>33°25′S · 70°36′O</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <Reveal as="section" className="sheet grid gap-10 py-24 md:grid-cols-12 md:py-32">
      <p className="kicker md:col-span-4">
        <span className="text-norte">00</span>
        <span className="mx-2">·</span>
        Por qué existimos
      </p>
      <div className="md:col-span-8">
        <h2 className="font-display text-[clamp(2rem,4.4vw,3.55rem)] font-medium leading-[1.08] tracking-[-0.045em]">
          Chile es un país de un solo eje: cuatro mil kilómetros de norte a
          sur. Las empresas que lo recorren ya saben lo que cuesta perder el
          rumbo.
        </h2>
        <p className="mt-8 max-w-xl text-[1.08rem] leading-[1.75] text-muted">
          Hay demasiado software que pide explicación. Interfaces que se
          esconden. Plataformas que se inflan. Reuniones para entender lo que
          debería ser una carta. Nosotros hacemos lo contrario: encontramos el
          eje de la operación y lo sostenemos. Si hay que explicarlo a las
          tres de la mañana, todavía no está listo.
        </p>
      </div>
    </Reveal>
  );
}

function Obra({
  featured,
  rest,
}: {
  featured: (typeof obras)[number];
  rest: typeof obras;
}) {
  return (
    <section className="sheet pb-8 md:pb-12">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="kicker">
            <span className="text-norte">01</span>
            <span className="mx-2">·</span>
            Obra
          </p>
          <h2 className="display mt-3 text-4xl md:text-5xl">Casos recientes</h2>
        </div>
        <Link href="/obra" className="hidden link-n text-sm text-muted md:inline">
          Índice de obra
        </Link>
      </div>

      <Link href={`/obra/${featured.slug}`} className="group block">
        <div className="img-cut relative aspect-[16/10] md:aspect-[16/8]">
          <Image
            src={featured.cover}
            alt={featured.coverAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="titleblock mt-0 border-t-0">
          <div>
            <p>Encargo</p>
            <p className="mt-1 font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-ink normal-case">
              {featured.name}
            </p>
          </div>
          <div className="cell-r">
            <p>Código</p>
            <p className="mt-1 text-ink">{featured.code}</p>
          </div>
          <div className="border-t border-line">
            <p>Sector · latitud</p>
            <p className="mt-1 text-ink">
              {featured.sector} · {featured.lat}
            </p>
          </div>
          <div className="cell-r border-t border-line">
            <p>Año</p>
            <p className="mt-1 text-ink">{featured.year}</p>
          </div>
        </div>
        <p className="mt-5 max-w-2xl font-display text-2xl tracking-[-0.03em] md:text-3xl">
          {featured.headline}
        </p>
        <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
          {featured.lede}
        </p>
      </Link>

      <ol className="mt-16 divide-y divide-line border-y border-line">
        {rest.map((obra, index) => (
          <li key={obra.slug}>
            <Link
              href={`/obra/${obra.slug}`}
              className="group grid grid-cols-12 items-center gap-3 py-6 md:gap-4"
            >
              <span className="col-span-2 font-mono text-[0.72rem] tracking-[0.12em] text-norte md:col-span-1">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="col-span-10 font-display text-xl tracking-[-0.03em] md:col-span-3 md:text-2xl">
                {obra.name}
              </span>
              <span className="col-span-10 col-start-3 hidden text-sm text-muted md:col-span-3 md:col-start-auto md:block">
                {obra.sector}
              </span>
              <span className="col-span-10 col-start-3 font-mono text-[0.72rem] tracking-[0.1em] text-muted md:col-span-2 md:col-start-auto">
                {obra.lat}
              </span>
              <span className="col-span-10 col-start-3 text-sm text-muted md:col-span-2 md:col-start-auto">
                {obra.year}
              </span>
              <span className="col-span-1 hidden text-right text-norte transition-transform duration-300 group-hover:translate-x-1 md:block">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <Link
        href="/obra"
        className="mt-8 inline-flex text-sm tracking-[0.04em] text-norte md:hidden"
      >
        Índice de obra →
      </Link>
    </section>
  );
}

function Oficio() {
  return (
    <section className="sheet py-20 md:py-28">
      <div className="flex items-end justify-between">
        <div>
          <p className="kicker">
            <span className="text-norte">02</span>
            <span className="mx-2">·</span>
            Oficio
          </p>
          <h2 className="display mt-3 text-4xl md:text-5xl">Qué hacemos</h2>
        </div>
        <Link href="/oficio" className="link-n text-sm text-muted">
          El oficio
        </Link>
      </div>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href="/oficio"
              className="group grid grid-cols-12 items-baseline gap-4 py-7"
            >
              <span className="col-span-2 font-mono text-[0.72rem] tracking-[0.14em] text-norte md:col-span-1">
                {service.index}
              </span>
              <span className="col-span-10 font-display text-2xl tracking-[-0.03em] md:col-span-4 md:text-3xl">
                {service.title}
              </span>
              <span className="col-span-10 col-start-3 text-[0.98rem] leading-relaxed text-muted md:col-span-6 md:col-start-auto">
                {service.lede}
              </span>
              <span className="col-span-1 hidden text-right text-norte transition-transform duration-300 group-hover:translate-x-1 md:block">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Metodo() {
  return (
    <section className="sheet py-8 md:py-12">
      <p className="kicker">
        <span className="text-norte">03</span>
        <span className="mx-2">·</span>
        Cómo entra un encargo
      </p>
      <h2 className="display mt-3 max-w-xl text-4xl md:text-5xl">
        Cuatro estaciones. Ninguna es teatro.
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
        {method.map((step, index) => (
          <Reveal as="li" key={step.index} delay={index * 80} className="border-t border-ink pt-6">
            <p className="font-mono text-[0.72rem] tracking-[0.14em] text-norte">
              {step.index} · {step.time}
            </p>
            <h3 className="font-display mt-4 text-2xl tracking-[-0.03em] md:text-3xl">
              {step.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20 grid gap-px bg-line md:grid-cols-2">
        {principles.map((item) => (
          <Reveal key={item.title} className="bg-nieve p-8 md:p-10">
            <h3 className="font-display text-xl tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Taller() {
  return (
    <Reveal as="section" className="sheet grid gap-10 py-24 md:grid-cols-12 md:py-32">
      <div className="img-cut relative aspect-[16/11] md:col-span-7 md:aspect-auto md:min-h-[540px]">
        <Image
          src="/images/taller.jpg"
          alt="El taller de Meridiano: mesa de roble claro, ventanales a los Andes, mediodía."
          fill
          className="object-cover"
          sizes="(min-width: 768px) 58vw, 100vw"
        />
      </div>
      <div className="flex flex-col justify-between md:col-span-5 md:py-2">
        <div>
          <p className="kicker">
            <span className="text-norte">04</span>
            <span className="mx-2">·</span>
            El taller
          </p>
          <h2 className="display mt-4 text-4xl md:text-5xl">
            Once personas. Un piso norte. Providencia.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">
            No somos una fábrica de tickets. Tomamos pocos encargos y los
            llevamos hasta que el software es de ustedes. Diseño e ingeniería
            en la misma mesa, con la luz de mediodía encima.
          </p>
        </div>
        <div className="mt-10">
          <SunPath compact />
          <Link
            href="/taller"
            className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.04em] text-norte"
          >
            Conocer el taller
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function Equipo() {
  return (
    <section className="sheet py-12 md:py-16">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        {team.map((person) => (
          <figure key={person.name}>
            <div className="img-cut relative aspect-[3/4]">
              <Image
                src={person.image}
                alt={person.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 16vw, 50vw"
              />
            </div>
            <figcaption className="mt-3">
              <p className="font-display text-[0.98rem] tracking-[-0.02em]">
                {person.name}
              </p>
              <p className="mt-0.5 font-mono text-[0.64rem] tracking-[0.1em] uppercase text-muted">
                {person.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Cifras() {
  return (
    <section className="border-y border-line bg-foam/50">
      <div className="sheet grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
        {stats.map((stat) => (
          <Reveal key={stat.label}>
            <p className="display text-4xl md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
