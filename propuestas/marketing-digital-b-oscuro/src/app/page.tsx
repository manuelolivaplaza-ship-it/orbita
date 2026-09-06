import Image from "next/image";
import Link from "next/link";
import { AirMeter } from "@/components/air-meter";
import { LecturaForm } from "@/components/lectura-form";
import { Reveal } from "@/components/reveal";
import {
  bands,
  faqs,
  fees,
  mesa,
  noise,
  principles,
  site,
  stats,
  steps,
  transmissions,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Aire />
      <Bandas />
      <Estudio />
      <Mesa />
      <Ruido />
      <Faq />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section
      id="tx"
      className="relative -mt-[4.5rem] min-h-[100svh] overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Techo de casona en Yungay de noche: tejas, un mástil y un LED lima sobre Santiago"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/82 to-void/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-0 pt-28">
        <div className="max-w-4xl pb-10 sm:pb-12">
          <p className="kicker flex items-center gap-3">
            <span className="led led-live" aria-hidden />
            Yungay · Santiago · TX en el aire
          </p>
          <h1 className="mt-5 text-[clamp(3.1rem,14vw,10.5rem)] leading-[0.78]">
            Si no llega
          </h1>
          <p className="font-serif mt-3 max-w-[22ch] text-[clamp(1.4rem,3.2vw,2.15rem)] italic leading-tight text-carrier">
            no es marketing.
          </p>
          <p className="font-serif mt-6 max-w-[38ch] text-[1.08rem] leading-relaxed text-paper-dim">
            Estudio en una casona de 1912. Diez cuentas. Pauta sin markup.
            Retainer desde {site.retainerFrom} + IVA.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/lectura" className="btn btn-primary">
              Pedir una lectura
            </Link>
            <Link href="/aire" className="btn btn-ghost">
              Ver el aire
            </Link>
          </div>
          <AirMeter className="mt-8" />
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
              <dd className="mt-2 font-display text-[1.9rem] leading-none tabular tracking-tight">
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
        <span>Pauta sin markup</span>
        <span className="px-3 text-muted">·</span>
        <span>Respuesta en 24h hábiles</span>
        <span className="px-3 text-muted">·</span>
        <span>Diez cuentas</span>
      </p>
    </section>
  );
}

function Aire() {
  return (
    <section id="aire" className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">El aire</p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,5vw,4.2rem)]">
            Seis transmisiones
          </h2>
          <p className="font-serif mt-5 max-w-[42ch] text-paper-dim">
            No un portafolio de mockups. Cuentas con lugar, meses y un número
            que se puede decir en una frase.
          </p>
        </Reveal>

        <ol className="mt-12 border-t border-line">
          {transmissions.map((tx) => (
            <li key={tx.slug} className="border-b border-line">
              <Link
                href={`/aire/${tx.slug}`}
                className="group grid items-center gap-3 py-5 sm:grid-cols-[5.5rem_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-[0.72rem] tracking-[0.16em] text-carrier">
                  {tx.tx}
                </span>
                <span>
                  <span className="block font-display text-[1.55rem] leading-none tracking-tight group-hover:text-carrier sm:text-[1.85rem]">
                    {tx.client}
                  </span>
                  <span className="mt-2 block text-sm text-muted">
                    {tx.place} · {tx.band} · {tx.months}
                  </span>
                </span>
                <span className="tabular text-right">
                  <span className="block font-display text-[1.6rem] leading-none">
                    {tx.metric}
                  </span>
                  <span className="mt-1 block max-w-[16ch] font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted">
                    {tx.metricLabel}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <Link href="/aire" className="btn btn-ghost mt-10">
          Bitácora completa
        </Link>
      </div>
    </section>
  );
}

function Bandas() {
  return (
    <section id="bandas" className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">El dial</p>
          <h2 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)]">
            Seis bandas. Las que leemos.
          </h2>
          <p className="font-serif mt-5 max-w-[44ch] text-paper-dim">
            Lectura, pauta, pieza, sitio, marca, eco. Si lo que necesita es un
            community a 8 UF, hay otras mesas.
          </p>
        </Reveal>

        <ul className="mt-12">
          {bands.map((b) => (
            <li key={b.slug} className="border-t border-line last:border-b">
              <Link
                href={`/bandas/${b.slug}`}
                className="group grid items-baseline gap-2 py-6 sm:grid-cols-[6.5rem_10rem_1fr_auto] sm:gap-8 sm:py-7"
              >
                <span className="font-mono text-[0.78rem] tabular tracking-[0.18em] text-carrier">
                  {b.freq}
                </span>
                <span className="font-display text-[1.7rem] leading-none tracking-tight group-hover:text-carrier">
                  {b.title}
                </span>
                <span className="font-serif max-w-[46ch] text-paper-dim">
                  {b.short}
                </span>
                <span className="hidden font-mono text-[0.68rem] tracking-[0.16em] uppercase text-muted group-hover:text-carrier sm:block">
                  sintonizar
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Estudio() {
  return (
    <section id="estudio" className="py-20 sm:py-28">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="tx-frame img-zoom relative aspect-[4/3]">
            <Image
              src="/images/casona.jpg"
              alt="Fachada de la casona de 1912 en Maturana, Barrio Yungay, una ventana encendida"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="kicker">El piso</p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.6rem)]">
            Maturana 612. El mástil está arriba.
          </h2>
          <p className="font-serif mt-5 max-w-[44ch] text-paper-dim">
            No es un piso de Isidora Goyenechea. Es una casona de Yungay, a
            siete minutos de Quinta Normal. Patio con níspero. Mesa de cinco.
            La última hora con usted es a las 19:00; el corte de pauta, a
            veces, después.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.folio}>
                <p className="font-mono text-[0.68rem] tracking-[0.16em] text-carrier">
                  {p.folio}
                </p>
                <p className="mt-2 font-display text-[1.25rem] leading-none">
                  {p.title}
                </p>
                <p className="mt-2 text-sm text-paper-dim">{p.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/estudio" className="btn btn-ghost mt-10">
            Cómo se trabaja acá
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section id="mesa" className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Quién firma</p>
          <h2 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,4rem)]">
            Cinco. Las que caben en la mesa.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {mesa.map((p) => (
            <li key={p.slug} className="bg-ink">
              <Link href={`/mesa/${p.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={p.image}
                    alt={`Retrato de ${p.name}, ${p.role} de SEÑAL`}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-[1.35rem] leading-none tracking-tight group-hover:text-carrier">
                    {p.name}
                  </p>
                  <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">
                    {p.band}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Ruido() {
  return (
    <section id="ruido" className="py-20 sm:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="kicker">Honorario</p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.6rem)]">
            En UF. Por escrito. Antes de prender.
          </h2>
          <p className="font-serif mt-5 max-w-[40ch] text-paper-dim">
            Valores referenciales. Se confirman en la minuta, después de la
            lectura. El IVA va aparte.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {noise.map((n) => (
              <div key={n.title} className="border border-line p-5">
                <p className="font-display text-[1.2rem] leading-none">{n.title}</p>
                <p className="mt-3 text-sm text-paper-dim">{n.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <table className="w-full text-left">
            <caption className="sr-only">Honorarios referenciales</caption>
            <tbody>
              {fees.map((f) => (
                <tr key={f.servicio} className="border-t border-line align-top">
                  <th className="py-5 pr-4 font-serif font-normal text-paper">
                    {f.servicio}
                    <span className="mt-1 block text-sm font-normal text-muted">
                      {f.nota}
                    </span>
                  </th>
                  <td className="py-5 text-right font-display text-[1.35rem] tabular leading-none">
                    {f.precio}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="kicker">Interferencia</p>
          <h2 className="mt-4 max-w-[10ch] text-[clamp(2.1rem,4.4vw,3.6rem)]">
            Lo que preguntan
          </h2>
        </Reveal>
        <div>
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-line py-5 first:border-t"
            >
              <summary className="cursor-pointer list-none font-serif text-[1.15rem] leading-snug marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {f.q}
                  <span className="mt-1 font-mono text-carrier group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="font-serif mt-3 max-w-[52ch] text-paper-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section id="lectura" className="py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="kicker">Lectura</p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,5vw,4rem)]">
            45 minutos. Se mira la cuenta.
          </h2>
          <ol className="mt-10 grid gap-8">
            {steps.map((s) => (
              <li key={s.folio} className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="font-mono text-[0.72rem] tracking-[0.16em] text-carrier">
                  {s.folio}
                </span>
                <div>
                  <p className="font-display text-[1.35rem] leading-none">
                    {s.title}
                  </p>
                  <p className="font-serif mt-2 text-paper-dim">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <LecturaForm />
      </div>
    </section>
  );
}
