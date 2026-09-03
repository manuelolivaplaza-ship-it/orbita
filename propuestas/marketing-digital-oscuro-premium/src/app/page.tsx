import Image from "next/image";
import Link from "next/link";
import { DiagnosticoForm } from "@/components/diagnostico-form";
import { Reveal } from "@/components/reveal";
import { SantiagoClock } from "@/components/santiago-clock";
import { WorkIndex } from "@/components/work-index";
import {
  cases,
  clients,
  faqs,
  oficios,
  principles,
  refusals,
  site,
  stats,
  steps,
  team,
} from "@/lib/site";

const featured = cases.filter((c) => c.featured);

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Marquee />
      <Trabajo />
      <Oficios />
      <Corte />
      <Metodo />
      <Mesa />
      <Faq />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-[4.5rem] min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Filo de obsidiana: vidrio volcánico negro con un único reflejo color ember"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/82 to-void/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-0 pt-28">
        <div className="max-w-3xl pb-10 sm:pb-14">
          <p className="kicker">
            {site.barrio} · {site.coords}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,8vw,6.8rem)] leading-[0.86] tracking-[-0.04em] text-balance">
            Cortamos el{" "}
            <em className="italic text-ember">ruido.</em>
          </h1>
          <p className="mt-6 max-w-[38ch] text-[1.08rem] leading-relaxed text-paper-dim">
            Estudio de marketing digital. Marca, performance y producto como un
            solo sistema. Ocho cuentas al año. Retainer en UF, por escrito.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/diagnostico" className="btn btn-primary">
              Pedir un diagnóstico
            </Link>
            <Link href="/trabajo" className="btn btn-ghost">
              Ver el trabajo
            </Link>
          </div>
          <SantiagoClock className="mt-8 font-mono text-[0.78rem] tracking-wide text-paper-dim" />
        </div>

        <dl className="grid border-t border-paper/15 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                i === 0
                  ? "border-paper/15 py-6 sm:border-r sm:pr-8"
                  : i === 3
                    ? "border-paper/15 py-6 sm:pl-8"
                    : "border-paper/15 py-6 sm:border-r sm:px-8"
              }
            >
              <dt className="kicker">{s.label}</dt>
              <dd className="mt-2 font-display text-[1.8rem] leading-none tabular tracking-tight">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-b border-line bg-ink">
      <p className="shell flex flex-wrap items-center justify-center gap-x-0 gap-y-2 py-5 text-center font-mono text-[0.72rem] tracking-[0.12em] text-paper-dim uppercase">
        <span>RUT {site.rut}</span>
        <span className="px-3 text-muted">·</span>
        <span>Pauta en su Business Manager</span>
        <span className="px-3 text-muted">·</span>
        <span>Sin markup de media</span>
        <span className="px-3 text-muted">·</span>
        <span>Dos diagnósticos por semana</span>
      </p>
    </section>
  );
}

function Marquee() {
  const loop = [...clients, ...clients];
  return (
    <section className="border-b border-line py-6" aria-label="Cuentas">
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl tracking-tight text-muted/80 sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trabajo() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Trabajo</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
              El número que quedó. No el deck.
            </h2>
            <Link href="/trabajo" className="link-line text-paper-dim hover:text-paper">
              Índice completo
            </Link>
          </div>
        </Reveal>
        <div className="mt-12">
          <WorkIndex items={featured} />
        </div>
      </div>
    </section>
  );
}

function Oficios() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Oficios</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
            Seis cortes. Un solo sistema.
          </h2>
          <p className="mt-5 max-w-[42ch] text-paper-dim">
            Marca, pauta, contenido, producto, SEO y retención. No los
            vendemos por separado si el caso pide el conjunto. Si pide uno,
            se lo decimos.
          </p>
        </Reveal>
        <ol className="mt-12">
          {oficios.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/oficios/${o.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-t border-line py-6 last:border-b sm:gap-8"
              >
                <span className="kicker tabular w-8 text-muted">{o.folio}</span>
                <span>
                  <span className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-none tracking-tight transition-colors group-hover:text-ember">
                    {o.title}
                  </span>
                  <span className="mt-2 block max-w-[46ch] text-[0.95rem] text-paper-dim">
                    {o.lead}
                  </span>
                </span>
                <span className="hidden font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase sm:block">
                  Ver
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Corte() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/estudio.jpg"
          alt="Mesa de trabajo de Obsidiana de noche, una lámpara, Barrio Italia"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/55" />
      </div>
      <div className="shell relative grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">El corte</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
            La obsidiana no refleja. Corta.
          </h2>
          <p className="mt-5 max-w-[36ch] text-paper-dim">
            Vidrio volcánico. Filo de cirugía. En este piso se usa como
            método: cada semana hay algo que se apaga. Si nadie corta, no hay
            estudio. Hay un proveedor de avisos.
          </p>
        </Reveal>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-7">
          {principles.map((p) => (
            <div key={p.folio} className="bg-void/80 p-7 backdrop-blur-sm">
              <p className="font-display text-3xl text-ember">{p.folio}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[0.95rem] text-paper-dim">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Método</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            Cuatro pasos. Un socio. Los martes, la lectura.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li
              key={s.folio}
              className={
                i === 0
                  ? "lg:pr-8"
                  : i === 3
                    ? "lg:border-l lg:border-line lg:pl-8"
                    : "lg:border-l lg:border-line lg:px-8"
              }
            >
              <p className="kicker">{s.folio}</p>
              <h3 className="mt-4 font-display text-2xl leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper-dim">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <Reveal className="mt-16">
          <p className="kicker">Lo que no hacemos</p>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {refusals.map((r) => (
              <li key={r.title} className="bg-void p-7">
                <h3 className="font-display text-xl leading-tight">{r.title}</h3>
                <p className="mt-3 text-[0.95rem] text-paper-dim">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="border-t border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">La mesa</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
            Cinco. Las que firman.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((p) => (
            <li key={p.slug}>
              <Link href={`/mesa/${p.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-surface">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 18vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-4 font-display text-2xl leading-none tracking-tight group-hover:text-ember">
                  {p.name}
                </p>
                <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                  {p.role}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[46ch] text-paper-dim">
          Quien toma el diagnóstico, lleva la cuenta. WhatsApp de la mesa, no
          de una ejecutiva que no leyó el número.{" "}
          <Link href="/estudio" className="link-line text-paper">
            El estudio
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            Lo que preguntan antes de firmar.
          </h2>
        </Reveal>
        <dl className="lg:col-span-8">
          {faqs.map((f) => (
            <div key={f.q} className="border-t border-line py-7 last:border-b">
              <dt className="font-display text-2xl leading-tight">{f.q}</dt>
              <dd className="mt-3 max-w-[58ch] text-paper-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-line bg-ink py-20 sm:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">Diagnóstico</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
            Cuarenta minutos. Si no hay caso, se lo decimos esa tarde.
          </h2>
          <p className="mt-5 max-w-[40ch] text-paper-dim">
            Dos cupos por semana. En Barrio Italia o por videollamada. Traiga
            pauta, CAC y lo que no funciona. Honorario, después, en UF.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.whatsapp} className="btn btn-ghost">
              WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phone}
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <DiagnosticoForm />
        </div>
      </div>
    </section>
  );
}
