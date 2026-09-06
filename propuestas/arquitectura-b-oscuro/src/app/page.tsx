import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { WorkIndex } from "@/components/work-index";
import { fees, process, services, stats, studio } from "@/lib/studio";
import { works } from "@/lib/works";

export default function HomePage() {
  const featured = works[0];

  return (
    <>
      <section
        id="inicio"
        className="relative lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,5fr)_1px_minmax(0,7fr)]"
      >
        <div className="relative h-[72vh] min-h-[420px] overflow-hidden lg:col-start-3 lg:row-start-1 lg:h-auto lg:min-h-[100svh]">
          <Image
            src="/images/hero.jpg"
            alt={featured.caption}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 58vw"
            className="hero-ken object-cover object-[62%_center]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/70 to-transparent p-5 lg:p-8">
            <p className="plaque max-w-[48ch]">{featured.caption}</p>
          </div>
        </div>

        <div className="threshold hidden lg:col-start-2 lg:row-start-1 lg:block" />

        <div className="flex flex-col justify-end bg-void px-5 py-12 sm:px-8 lg:col-start-1 lg:row-start-1 lg:px-10 lg:pb-14 lg:pt-28">
          <p className="kicker">Estudio de arquitectura · Las Condes</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.04em]">
            <span className="hero-line">
              <span>La obra habla.</span>
            </span>
            <span className="hero-line">
              <span>El resto calla.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-[36ch] text-sm leading-7 text-paper-dim sm:text-[0.98rem]">
            {studio.sentence}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/encargo" className="btn">
              Conversar sobre tu proyecto
            </Link>
            <Link href="/obras" className="btn-ghost link-line">
              Ver obras
            </Link>
          </div>
        </div>
      </section>

      <section id="cifras" className="border-y border-line bg-ink">
        <dl className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={item.key}
              className={`border-line px-0 py-8 sm:px-6 lg:px-8 lg:py-10 ${
                i < 3 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "sm:border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} sm:first:pl-0 lg:last:pr-0`}
            >
              <dt className="kicker">{item.label}</dt>
              <dd className="mt-3 font-display text-[2.1rem] leading-none tracking-tight sm:text-[2.4rem]">
                <CountUp
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="proyectos" className="py-28 md:py-32">
        <div className="shell">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="kicker">Obras</p>
                <h2 className="mt-4 font-display text-4xl leading-none tracking-tight sm:text-6xl">
                  El índice.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-paper-dim">
                Ocho obras. Cada una con ficha: metros, año, tipología, materia.
                Lo demás se visita.
              </p>
            </div>
          </Reveal>
          <WorkIndex works={works} />
          <div className="mt-10">
            <Link href="/obras" className="btn-ghost link-line">
              Ver todas las obras
            </Link>
          </div>
        </div>
      </section>

      <section id="estudio" className="border-t border-line bg-ink py-28 md:py-32">
        <div className="shell grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative aspect-square overflow-hidden border border-line">
                <Image
                  src="/images/maqueta.jpg"
                  alt="Maqueta blanca de una casa en ladera sobre mesa de roble, luz lateral"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="curtain object-cover"
                />
              </div>
              <figcaption className="plaque mt-3">
                Maqueta de trabajo · yeso sobre roble · luz rasante
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
            <p className="kicker">El estudio</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Un arquitecto a cargo.
              <br />
              Siempre el mismo.
            </h2>
            <p className="mt-6 text-[0.98rem] leading-8 text-paper-dim">
              UMBRAL es un estudio chico en El Golf. Nueve personas. Tomamos
              pocos encargos para poder estar en el predio, en la DOM y en la
              faena. No hay un departamento de “desarrollo” y otro de “obra”:
              quien dibuja el corte visita el hormigón.
            </p>
            <p className="mt-4 text-[0.98rem] leading-8 text-paper-dim">
              Fundado en {studio.founded}. Residencial y obra nueva de alto
              estándar. Si el predio no calza, lo decimos en la primera
              conversación.
            </p>
            <Link href="/estudio" className="btn-ghost link-line mt-8">
              Cómo trabajamos
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Sala" className="bg-ink">
        <figure>
          <div className="relative min-h-[56vh] overflow-hidden md:min-h-[72vh]">
            <Image
              src="/images/escalera.jpg"
              alt="Interior de doble altura con escalera de madera y hormigón tabla, luz cenital"
              fill
              sizes="100vw"
              className="curtain object-cover"
            />
          </div>
          <figcaption className="shell plaque py-4">
            Interior de doble altura · escalera de lenga · luz cenital
          </figcaption>
        </figure>
      </section>

      <section id="servicios" className="py-28 md:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Oficio</p>
            <h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-none sm:text-6xl">
              Qué se entrega.
            </h2>
          </Reveal>
          <ol className="mt-14 divide-y divide-line border-y border-line">
            {services.map((item) => (
              <li
                key={item.number}
                className="grid gap-4 py-8 lg:grid-cols-12 lg:items-baseline"
              >
                <p className="font-mono text-xs tracking-[0.18em] text-brass lg:col-span-1">
                  {item.number}
                </p>
                <h3 className="font-display text-2xl lg:col-span-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-paper-dim lg:col-span-6">
                  {item.deliverable}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted lg:col-span-2 lg:text-right">
                  {item.duration}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="proceso" className="border-t border-line bg-ink py-28 md:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Método</p>
            <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
              Cinco etapas.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-0 md:grid-cols-5">
            {process.map((item, i) => (
              <li
                key={item.number}
                className={`border-line py-8 md:px-6 ${i === 0 ? "md:pl-0" : "md:border-l"} ${i === 4 ? "md:pr-0" : ""} border-t md:border-t-0`}
              >
                <p className="font-display text-4xl text-brass/70">{item.number}</p>
                <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-paper-dim">{item.text}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.duration}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="precios" className="py-28 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Honorarios</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Presupuesto claro desde el primer día.
            </h2>
            <p className="mt-6 text-sm leading-7 text-paper-dim">
              El valor final depende del terreno y del programa. Se confirma en
              la primera conversación. Nunca partimos sin presupuesto firmado.
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {fees.map((item) => (
              <div
                key={item.name}
                className="grid gap-3 border-t border-line py-7 last:border-b sm:grid-cols-12 sm:items-baseline"
              >
                <h3 className="font-display text-2xl sm:col-span-5">{item.name}</h3>
                <p className="font-display text-xl text-brass sm:col-span-3 sm:text-right">
                  {item.from}
                </p>
                <p className="text-sm leading-6 text-paper-dim sm:col-span-4 sm:pl-6">
                  {item.includes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-ink py-28 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Preguntas</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Lo que se pregunta primero.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq />
          </div>
        </div>
      </section>

      <section id="reserva" className="py-28 md:py-32">
        <div className="shell border border-line bg-surface px-6 py-14 sm:px-12 sm:py-20">
          <p className="kicker">Encargo</p>
          <h2 className="mt-5 max-w-[16ch] font-display text-4xl leading-[0.95] sm:text-6xl">
            Conversemos sobre el predio.
          </h2>
          <a
            href={studio.phoneHref}
            className="mt-8 block font-display text-4xl tabular tracking-tight text-paper sm:text-6xl"
          >
            {studio.phone}
          </a>
          <p className="mt-4 text-sm text-muted">
            {studio.hours} · {studio.email}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/encargo" className="btn">
              Conversar sobre tu proyecto
            </Link>
            <p className="text-xs text-muted">
              Responde el arquitecto, no un ejecutivo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
