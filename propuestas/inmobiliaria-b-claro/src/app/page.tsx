import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { Reveal } from "@/components/reveal";
import { SolarCard } from "@/components/solar-card";
import { SolarClock } from "@/components/solar-clock";
import { TitleBlock } from "@/components/title-block";
import { barrios, faqs, principles, solares, steps, team } from "@/lib/data";
import { site, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifiesto />
      <MesaSolares />
      <Cita />
      <Oficio />
      <Barrios />
      <Mesa />
      <Preguntas />
      <Encargo />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[46vh] min-h-[320px] lg:hidden">
        <Image
          src="/images/hero.jpg"
          alt="Patio norte con limonero y sombra dura de mediodía"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell pt-6 lg:pt-[4.5rem]">
        <TitleBlock
          plate="00"
          place="La Reina"
          extra="Casa en sitio"
          className="hidden lg:grid"
        />
        <div className="grid lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-12">
          <div className="flex flex-col justify-end py-10 lg:col-span-5 lg:py-12 lg:pr-10">
            <p className="kicker">Corredora · La Reina</p>
            <h1 className="font-display mt-5 text-[clamp(3.15rem,8.1vw,7.1rem)] font-semibold leading-[0.88] tracking-tight">
              Antes que
              <br />
              la casa,
              <br />
              <em className="text-teja italic">el solar.</em>
            </h1>
            <p className="mt-7 max-w-[36ch] text-[17px] leading-relaxed text-muted">
              Ñuñoa, La Reina, Peñalolén y Macul. Medimos frente, fondo y patio.
              Las visitas son entre 11:30 y 14:30, cuando el sol no miente.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contacto"
                className="font-display inline-flex h-12 items-center bg-teja px-6 text-[0.92rem] font-semibold text-papel transition-colors hover:bg-teja-deep"
              >
                Encargar un solar
              </Link>
              <Link
                href="/solares"
                className="font-display inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold transition-colors hover:border-teja hover:text-teja"
              >
                Ver la mesa
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-muted lg:hidden">
              {site.address.line} · {site.address.city}
            </p>
          </div>

          <div className="lamina lamina-end relative hidden overflow-hidden lg:col-span-5 lg:block">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              priority
              sizes="42vw"
              className="object-cover"
            />
          </div>

          <div className="hidden flex-col justify-end pb-12 pl-8 lg:col-span-2 lg:flex">
            <SolarClock />
            <p className="mt-6 text-[14px] leading-relaxed text-muted">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
            </p>
            <p className="font-mono mt-5 text-[11px] tracking-wide text-olivo">
              {site.coords}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-y border-line bg-lima/50">
      <div className="shell grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-semibold tracking-tight lg:text-4xl">
              {item.value}
            </p>
            <p className="font-mono mt-1 text-[11px] tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Manifiesto() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Tres medidas</p>
          <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[0.95] tracking-tight">
            El metro cuadrado construido es la cifra que menos importa.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {principles.slice(0, 3).map((item) => (
            <Reveal
              key={item.folio}
              className="bg-papel px-6 py-8 lg:px-8 lg:py-10"
            >
              <p className="font-mono text-[11px] tracking-[0.18em] text-teja">
                {item.folio}
              </p>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MesaSolares() {
  const featured = solares.filter((item) => item.status === "disponible").slice(0, 3);

  return (
    <section className="pb-20 lg:pb-28">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">En mesa</p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight">
              Solares que aguantan la lectura.
            </h2>
          </div>
          <Link
            href="/solares"
            className="font-mono text-[12px] tracking-[0.14em] uppercase link-line"
          >
            Todas las láminas
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6">
          {featured.map((solar) => (
            <Reveal key={solar.slug}>
              <SolarCard solar={solar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cita() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[48vh]">
          <Image
            src="/images/alero.jpg"
            alt="Sombra geométrica de un alero sobre un muro encalado"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-olivo px-8 py-16 text-papel lg:px-16">
          <p className="font-mono text-[11px] tracking-[0.18em] text-lima uppercase">
            Oficio
          </p>
          <blockquote className="font-display mt-6 max-w-[18ch] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-semibold tracking-tight">
            El sol de las siete de la tarde es un filtro. El de las doce, un
            instrumento.
          </blockquote>
          <p className="mt-8 max-w-md text-[16px] leading-relaxed text-papel/75">
            Fotografiamos y visitamos entre 11:30 y 14:30. Si el patio se oscurece,
            se nota. Si el norte es de verdad, también.
          </p>
        </div>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Cómo se trabaja</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
            Cuatro pasos. Ninguno es un portal.
          </h2>
          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
            No mandamos treinta links. Leemos el plano, la cuadra y el
            Conservador, y le traemos dos o tres solares.
          </p>
          <Link
            href="/oficio"
            className="font-display mt-8 inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-teja hover:text-teja"
          >
            El oficio completo
          </Link>
        </Reveal>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
          {steps.map((item) => (
            <Reveal key={item.folio} className="bg-papel px-6 py-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-teja">
                {item.folio}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Barrios() {
  return (
    <section className="border-y border-line bg-lima/40 py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Radio</p>
          <h2 className="font-display mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight">
            Cuatro comunas. El resto, si el solar lo merece.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {barrios.map((item) => (
            <Reveal key={item.slug}>
              <Link
                href={`/barrios/${item.slug}`}
                className="group block border border-line bg-papel transition-colors hover:border-ink"
              >
                <div className="img-zoom relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-5">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-teja uppercase">
                    {item.lamina}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {item.kicker}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">La mesa</p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight">
              Cuatro oficios, una casa.
            </h2>
          </div>
          <Link
            href="/mesa"
            className="font-mono text-[12px] tracking-[0.14em] uppercase link-line"
          >
            Conocer a la mesa
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <Reveal key={person.slug}>
              <Link href={`/mesa/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-4 text-xl font-semibold">
                  {person.name}
                </p>
                <p className="font-mono mt-1 text-[11px] tracking-[0.12em] text-muted uppercase">
                  {person.role} · {person.beat}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-tight">
            Lo que se pregunta en la primera hora.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.slice(0, 4).map((item) => (
            <Reveal
              key={item.q}
              className="border-t border-line py-7 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-xl font-semibold">{item.q}</h3>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Encargo() {
  return (
    <section className="border-t border-line bg-papel-2 py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Encargo</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
            Cuéntenos el solar. No el sueño.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted">
            Presupuesto en UF, frente mínimo, comuna, patio. Si cabe en esta
            mesa, le proponemos una visita al mediodía. Si no, se lo decimos.
          </p>
          <p className="mt-8 text-[15px] leading-relaxed">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            <a href={site.phoneHref} className="link-line">
              {site.phone}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <ConsultForm />
        </Reveal>
      </div>
    </section>
  );
}
