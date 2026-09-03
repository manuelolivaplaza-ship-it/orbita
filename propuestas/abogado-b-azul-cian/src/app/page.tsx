import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { Nivel } from "@/components/nivel";
import { Reveal } from "@/components/reveal";
import {
  faqs,
  fees,
  lawyers,
  marquee,
  matters,
  practices,
  principles,
  stats,
  steps,
} from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Trust />
      <Manifesto />
      <Afluentes />
      <QuoteBand />
      <Oficio />
      <Mesa />
      <Honorarios />
      <Asuntos />
      <Preguntas />
      <Escribir />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="relative h-[44vh] lg:hidden">
        <Image
          src="/images/hero.jpg"
          alt="Sala de reuniones de CAUCE, con el Mapocho y la cordillera al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-end py-10 lg:col-span-6 lg:justify-center lg:py-0 lg:pr-6">
          <p className="kicker">Estudio jurídico · Providencia</p>
          <h1 className="font-display mt-5 text-[clamp(3rem,8.2vw,7.1rem)] font-semibold leading-[0.88] tracking-tight">
            El asunto
            <br />
            tiene un
            <br />
            <em className="italic text-cyan-deep">cauce.</em>
          </h1>
          <div className="waterline waterline-draw mt-7 w-[min(100%,22rem)]" />
          <p className="mt-7 max-w-[36ch] text-[17px] leading-relaxed text-muted">
            Cinco abogados en la orilla del Mapocho. Laboral, familia,
            consumidor, civil e inmobiliario, empresa. Honorario en UF, por
            escrito. Sin empujar el río.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center bg-navy px-6 text-[0.92rem] font-semibold text-paper transition-colors hover:bg-ink"
            >
              Pedir un sondaje
            </Link>
            <a
              href={site.whatsapp}
              className="inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold transition-colors hover:border-cyan-deep hover:text-cyan-deep"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-5 max-w-[40ch] text-[13px] leading-relaxed text-muted lg:hidden">
            {site.address.line} · {site.address.city}
          </p>
        </div>

        <div className="relative hidden lg:col-span-6 lg:block">
          <div className="absolute inset-y-[4.5rem] right-0 left-8">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Sala de reuniones de CAUCE, con el Mapocho y la cordillera al fondo"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute right-6 bottom-16 z-10 w-[min(100%,17.5rem)] border border-line/80 bg-paper/90 p-5 backdrop-blur-md">
            <Nivel />
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper-2 py-3">
      <div className="marquee-track gap-10 pr-10 text-[0.72rem] tracking-[0.22em] text-navy uppercase">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10">
            {marquee.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-10">
                {item}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-cyan" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Trust() {
  return (
    <div className="border-b border-line">
      <div className="shell grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-semibold tracking-tight lg:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="kicker">El método</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[0.98] tracking-tight">
            No empujamos el agua cuesta arriba.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-[1.75] text-muted">
            CAUCE trabaja a dos cuadras del Mapocho. El río no es metáfora de
            oficina: es el método. Un asunto tiene un cauce — un procedimiento,
            un plazo, un foro — o no lo tiene.
          </p>
          <p className="mt-4 max-w-md text-[17px] leading-[1.75] text-muted">
            Si no lo tiene, se lo decimos en la primera hora. No competimos en
            volumen. El cupo es el oficio.
          </p>
          <Link
            href="/estudio"
            className="mt-8 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-cyan-deep"
          >
            El estudio <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/5] lg:col-span-6 lg:col-start-7">
          <Image
            src="/images/rio.jpg"
            alt="El Mapocho visto desde la sala de CAUCE, con la cordillera al fondo"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="shell mt-20 grid gap-px bg-line lg:grid-cols-3">
        {principles.map((item, index) => (
          <Reveal
            key={item.roman}
            delay={index * 0.08}
            className="bg-paper px-8 py-10 lg:px-10 lg:py-12"
          >
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-cyan-deep">
              {item.roman}
            </p>
            <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Afluentes() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">Afluentes</p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-none tracking-tight">
              Cinco oficios. Un cauce.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/areas"
              className="text-[0.92rem] font-semibold text-cyan-deep"
            >
              Carta completa →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {practices.map((item, index) => {
            const wide = item.slug === "civil" || item.slug === "empresa";
            return (
              <Reveal
                key={item.slug}
                delay={index * 0.05}
                className={wide ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  href={`/areas/${item.slug}`}
                  className="group flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-cyan lg:p-8"
                >
                  <p className="nums text-[12px] font-semibold tracking-[0.18em] text-navy">
                    Prof. {item.depth}
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight group-hover:text-cyan-deep">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {item.lead}
                  </p>
                  <p className="mt-6 text-[13px] font-semibold text-ink">
                    Entrar →
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden lg:min-h-[78vh]">
      <Image
        src="/images/ventana.jpg"
        alt="Lluvia sobre el cristal de la oficina, Providencia al fondo"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/45" />
      <div className="shell relative flex min-h-[70vh] items-end py-16 lg:min-h-[78vh] lg:py-24">
        <Reveal>
          <blockquote className="max-w-3xl">
            <p className="font-display text-[clamp(1.8rem,4vw,3.3rem)] font-semibold leading-[1.12] text-paper">
              Si el asunto no tiene cauce, se lo decimos en la primera hora.
              El resto es empujar el río.
            </p>
            <footer className="mt-7 text-[12px] tracking-[0.2em] text-paper/75 uppercase">
              Catalina Herrera · Socia fundadora
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="kicker">Oficio</p>
          <h2 className="font-display mt-4 max-w-xl text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
            Cómo se entra a esta orilla.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <Reveal
              key={item.depth}
              delay={index * 0.06}
              className="bg-paper px-6 py-8 lg:px-7 lg:py-10"
            >
              <p className="font-display nums text-4xl font-semibold text-cyan-deep/90">
                {item.depth}
              </p>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="relative mt-12 aspect-[16/7] overflow-hidden">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa de roble claro, carpetas y un vaso de agua con luz cian"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="border-t border-line bg-paper-2 py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">La mesa</p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-none tracking-tight">
              Cinco sillas. Nadie de más.
            </h2>
          </Reveal>
          <Link href="/equipo" className="text-[0.92rem] font-semibold text-cyan-deep">
            El equipo →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5 lg:gap-5">
          {lawyers.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-paper">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-3 text-lg font-semibold tracking-tight group-hover:text-cyan-deep">
                  {person.name}
                </p>
                <p className="text-[13px] text-muted">
                  {person.role} · {person.practice}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Honorarios() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Tabla de marea</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
            En UF. Por escrito. Más IVA.
          </h2>
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-muted">
            El sondaje cuesta $48.000 y se descuenta si tomamos el asunto. El
            resto se pacta en UF, por etapa, antes de firmar. Sin letra chica.
          </p>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-muted">
            Un resultado no se promete. Un cauce, sí.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {fees.map((item) => (
              <div
                key={item.servicio}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-12 sm:items-baseline"
              >
                <div className="sm:col-span-7">
                  <p className="text-[17px] font-semibold tracking-tight">
                    {item.servicio}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{item.nota}</p>
                </div>
                <p className="nums sm:col-span-5 sm:text-right text-[18px] font-semibold text-cyan-deep">
                  {item.precio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Asuntos() {
  const featured = matters.slice(0, 3);
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">Asuntos</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
              El trabajo, sin el nombre del cliente.
            </h2>
          </Reveal>
          <Link href="/asuntos" className="text-[0.92rem] font-semibold text-cyan-deep">
            Ver asuntos →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col border-t border-cyan/50 pt-8">
                <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  {item.year} · {item.area} · {item.comuna}
                </p>
                <p className="font-display nums mt-6 text-6xl font-semibold tracking-tight">
                  {item.metric}
                  <span className="text-cyan">.</span>
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
                  {item.metricLabel}
                </p>
                <h3 className="font-display mt-7 text-2xl font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                  {item.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Sondaje</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
            Preguntas que caben en una orilla.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line py-5"
            >
              <summary className="cursor-pointer list-none text-[17px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  {item.q}
                  <span className="text-cyan-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Escribir() {
  return (
    <section className="border-t border-line bg-paper-2 py-24 lg:py-32">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Escribir</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.2vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
            Pida un sondaje. La mesa mira al río.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
            Cuéntenos de qué se trata. Si hay cauce, le proponemos un camino.
            Si no, se lo decimos.
          </p>
          <div className="mt-10 space-y-3 text-[15px]">
            <p>
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <p className="text-muted">
              {site.address.line}, {site.address.city}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <ConsultForm />
        </Reveal>
      </div>
    </section>
  );
}
