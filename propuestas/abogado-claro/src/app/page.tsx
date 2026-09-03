import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { ConsultForm } from "@/components/consult-form";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { articles, lawyers, matters, practices, principles, stats } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Practices />
      <QuoteBand />
      <Matters />
      <Team />
      <Insights />
      <ConsultBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-paper">
      <div className="grid min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end px-6 pb-14 pt-32 sm:px-8 lg:col-span-6 lg:justify-center lg:px-12 lg:pt-24 xl:px-16">
          <p className="overline-label">Estudio jurídico · Buenos Aires</p>
          <h1 className="font-display mt-6 text-[clamp(3.4rem,9vw,8.2rem)] leading-[0.88] tracking-tight text-ink">
            Claridad
            <br />
            ante lo
            <br />
            <em className="italic">complejo.</em>
          </h1>
          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            Un estudio boutique en Recoleta. Corporativo, contencioso, laboral,
            familia, inmobiliario y compliance. Pocos asuntos. Pensados hasta
            el final.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center bg-ink px-7 text-[11px] tracking-[0.22em] text-paper uppercase transition-colors duration-300 hover:bg-bronze"
            >
              Pedir una consulta
            </Link>
            <ArrowLink href="/estudio">El estudio</ArrowLink>
          </div>
        </div>

        <div className="relative min-h-[58vh] lg:col-span-6 lg:min-h-[100svh]">
          <Image
            src="/images/salon.jpg"
            alt="Salón principal del estudio en Recoleta, con mesa de roble y luz de mañana"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 to-transparent p-6 lg:p-8">
            <p className="text-[11px] tracking-[0.22em] text-paper/90 uppercase">
              {site.address.line} · {site.address.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...practices, ...practices];
  return (
    <div className="overflow-hidden border-y border-line bg-paper-2 py-4">
      <div className="marquee-track flex w-max gap-0">
        {items.map((item, index) => (
          <span
            key={`${item.slug}-${index}`}
            className="flex items-center px-6 text-[12px] tracking-[0.28em] text-ink/70 uppercase"
          >
            {item.title}
            <span className="ml-6 text-bronze" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="overline-label">El oficio</p>
            <h2 className="font-display mt-5 text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight">
              Tomamos pocos asuntos. Los pensamos hasta el final.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <p className="text-[17px] leading-[1.75] text-muted-foreground">
              ALBA es un estudio de ocho abogados. No competimos en volumen. El
              cupo es el método: cada expediente tiene un socio que lo leyó
              entero, una estrategia que se puede explicar en una mesa, y una
              prosa que un directorio puede firmar.
            </p>
            <p className="mt-6 text-[17px] leading-[1.75] text-muted-foreground">
              Si el asunto no es nuestro, se lo decimos en la primera reunión.
              La primera conversación no se factura.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="stat-number text-4xl text-ink lg:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-px bg-line lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 0.08}
              className="bg-paper px-8 py-10 lg:px-10 lg:py-12"
            >
              <p className="font-display text-bronze text-2xl">{item.number}</p>
              <h3 className="font-display mt-6 text-3xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Practices() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="overline-label">Práctica</p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
              Seis oficios.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ArrowLink href="/areas">Todas las áreas</ArrowLink>
          </Reveal>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {practices.map((item, index) => (
            <li key={item.slug}>
              <Reveal delay={index * 0.04}>
                <Link
                  href={`/areas/${item.slug}`}
                  className="group grid items-baseline gap-3 py-7 transition-colors md:grid-cols-12 md:py-8"
                >
                  <span className="font-display text-bronze text-lg md:col-span-1">
                    {item.number}
                  </span>
                  <span className="font-display text-3xl tracking-tight md:col-span-5 md:text-4xl">
                    {item.title}
                  </span>
                  <span className="text-[15px] text-muted-foreground md:col-span-5">
                    {item.short}
                  </span>
                  <span className="hidden justify-end text-ink transition-transform duration-500 group-hover:translate-x-1 md:col-span-1 md:flex">
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] lg:min-h-[80vh]">
        <Image
          src="/images/stairs.jpg"
          alt="Escalera de mármol de la sede de Recoleta"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <Container className="relative flex min-h-[70vh] items-end py-16 lg:min-h-[80vh] lg:py-24">
          <Reveal>
            <blockquote className="max-w-3xl">
              <p className="font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.15] text-paper">
                «Un contrato que no se entiende no protege. Un dictamen que no
                se puede leer en voz alta no sirve para decidir.»
              </p>
              <footer className="mt-8 text-[12px] tracking-[0.22em] text-paper/70 uppercase">
                Elena Alba · Socia fundadora
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

function Matters() {
  const featured = matters.slice(0, 3);
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="overline-label">Asuntos seleccionados</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] tracking-tight">
              El trabajo, sin el nombre del cliente.
            </h2>
          </Reveal>
          <ArrowLink href="/casos">Ver casos</ArrowLink>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col border-t border-line pt-8">
                <p className="text-[12px] tracking-[0.18em] text-muted-foreground uppercase">
                  {item.year} · {item.area}
                </p>
                <p className="stat-number mt-6 text-6xl text-ink">
                  {item.metric}
                  <span className="text-bronze">.</span>
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
                  {item.metricLabel}
                </p>
                <h3 className="font-display mt-8 text-2xl leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Team() {
  return (
    <section className="border-t border-line bg-paper-2 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="overline-label">El estudio</p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
              Ocho abogados. Una mesa.
            </h2>
          </Reveal>
          <ArrowLink href="/equipo">El equipo</ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {lawyers.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-paper">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-4">
                  <p className="font-display text-2xl tracking-tight group-hover:text-bronze">
                    {person.name}
                  </p>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    {person.role} · {person.practice}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Insights() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="overline-label">Perspectivas</p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
              Lo que estamos pensando.
            </h2>
          </Reveal>
          <ArrowLink href="/perspectivas">Leer todo</ArrowLink>
        </div>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {articles.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <Link
                href={`/perspectivas/${item.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:py-10"
              >
                <p className="text-[12px] tracking-[0.16em] text-muted-foreground uppercase md:col-span-3">
                  {item.dateLabel}
                </p>
                <div className="md:col-span-8">
                  <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">
                    {item.dek}
                  </p>
                </div>
                <span className="hidden justify-end transition-transform duration-500 group-hover:translate-x-1 md:col-span-1 md:flex">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ConsultBand() {
  return (
    <section className="border-t border-line bg-paper-2 py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="overline-label">Consulta</p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05] tracking-tight">
              La primera conversación no se factura.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground">
              Cuéntenos de qué se trata. Si podemos ayudar, le proponemos un
              camino. Si no, se lo decimos — y, cuando corresponde, a quién
              llamar.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ConsultForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
