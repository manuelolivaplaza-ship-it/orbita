import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { NightClock } from "@/components/night-clock";
import { PracticeRail } from "@/components/practice-rail";
import { Reveal } from "@/components/reveal";
import {
  faqs,
  fees,
  lawyers,
  principles,
  site,
  stats,
  steps,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Materias />
      <Vigilia />
      <Mesa />
      <Honorarios />
      <Faq />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-[4.5rem] min-h-[100svh] overflow-hidden">
      <Image
        src="/images/lastarria.jpg"
        alt="Calle de Lastarria al anochecer: adoquines mojados y una ventana encendida"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/78 to-void/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/45" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-0 pt-28">
        <div className="max-w-3xl pb-10 sm:pb-14">
          <p className="kicker">Lastarria · 8 min a Tribunales</p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,7.2vw,6.2rem)] leading-[0.9] tracking-[-0.035em] text-balance">
            El escrito se termina{" "}
            <em className="italic text-copper">de noche.</em>
          </h1>
          <p className="mt-6 max-w-[36ch] text-[1.08rem] leading-relaxed text-paper-dim">
            Cuatro abogados. Causas que caben en la mesa. Honorario en UF, por
            escrito, antes de firmar.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/primera-hora" className="btn btn-primary">
              Pedir la primera hora
            </Link>
            <Link href="/honorarios" className="btn btn-ghost">
              Ver honorarios
            </Link>
          </div>
          <NightClock className="mt-8 font-mono text-[0.78rem] tracking-wide text-paper-dim" />
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
        <span>{site.colegio}</span>
        <span className="px-3 text-muted">·</span>
        <span>Respuesta en 24h hábiles</span>
        <span className="px-3 text-muted">·</span>
        <span>No tomamos penal</span>
      </p>
    </section>
  );
}

function Materias() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Piezas del expediente</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
            Cinco materias. Las que leemos de verdad.
          </h2>
          <p className="mt-5 max-w-[42ch] text-paper-dim">
            Civil, laboral, familia, recursos y administrativo. Si el asunto es
            penal, se lo decimos en la primera respuesta y le indicamos a quién
            llamar.
          </p>
        </Reveal>
        <div className="mt-12">
          <PracticeRail />
        </div>
      </div>
    </section>
  );
}

function Vigilia() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Cómo partimos</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            La última hora con usted es a las 20:00. El escrito, a veces, a las
            23:00.
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
              <Reveal delay={i * 0.06}>
                <span className="font-display text-4xl text-copper-deep tabular">
                  {s.folio}
                </span>
                <span className="mt-3 block h-px w-8 bg-copper" />
                <h3 className="mt-4 text-[1.02rem] font-medium">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper-dim">
                  {s.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="relative aspect-[16/10] overflow-hidden border border-line lg:col-span-7">
            <Image
              src="/images/biblioteca.jpg"
              alt="Biblioteca del estudio de noche, lámpara de cobre sobre el escrito"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="lg:col-span-5 lg:pl-6">
            <Reveal delay={0.08}>
              <blockquote className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] text-balance">
                «No prometemos el fallo. Prometemos el escrito.»
              </blockquote>
              <p className="mt-5 text-sm text-muted">
                Emilia Contreras · Socia
              </p>
              <ul className="mt-8 grid gap-5">
                {principles.slice(0, 3).map((p) => (
                  <li key={p.folio} className="border-t border-line pt-4">
                    <p className="kicker">{p.folio}</p>
                    <p className="mt-2 font-medium">{p.title}</p>
                    <p className="mt-1 text-[0.92rem] text-paper-dim">{p.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">La mesa</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
              Quien lo recibe, firma.
            </h2>
            <Link href="/equipo" className="btn btn-ghost">
              Conocer al equipo
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {lawyers.map((l, i) => (
            <li key={l.slug} className="bg-void">
              <Reveal delay={i * 0.05}>
                <Link href={`/equipo/${l.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[3/4]">
                    <Image
                      src={l.image}
                      alt={`Retrato de ${l.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t border-line px-1 py-5">
                    <p className="kicker">{l.role}</p>
                    <p className="mt-2 font-display text-2xl leading-tight group-hover:text-copper">
                      {l.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{l.practice}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Honorarios() {
  const preview = fees.slice(0, 5);
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Arancel</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            En UF. Por escrito. Antes de partir.
          </h2>
          <p className="mt-5 max-w-[38ch] text-paper-dim">
            El IVA va aparte. La primera hora se descuenta si tomamos el asunto.
            Lo que no está en la minuta, no está pactado.
          </p>
          <Link href="/honorarios" className="btn btn-ghost mt-8">
            Ver arancel completo
          </Link>
        </Reveal>
        <div className="lg:col-span-7">
          <div className="flex justify-between border-b border-line pb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-copper">
            <span>Servicio</span>
            <span>Honorario</span>
          </div>
          {preview.map((f) => (
            <div
              key={f.servicio}
              className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-5"
            >
              <div>
                <p className="text-[1.02rem]">{f.servicio}</p>
                <p className="mt-1 text-sm text-muted">{f.nota}</p>
              </div>
              <p className="font-display text-xl tabular text-copper whitespace-nowrap">
                {f.precio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95]">
            Antes de escribir.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-line py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-[1.05rem] marker:content-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="font-display text-2xl text-copper transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[52ch] text-[0.98rem] leading-relaxed text-paper-dim">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-line bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada del edificio en Lastarria al anochecer, una ventana encendida"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <p className="kicker">El piso</p>
            <p className="mt-3 font-display text-3xl leading-tight">
              {site.address.line}
            </p>
            <p className="mt-2 text-paper-dim">
              {site.metro}
              <br />
              {site.tribunales}
              <br />
              {site.hours}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t border-line p-8 sm:p-12 lg:border-t-0 lg:border-l">
          <p className="kicker">Primera hora</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[0.95]">
            Cincuenta minutos. Si no hay caso, se lo decimos esa tarde.
          </h2>
          <div className="mt-8 max-w-md">
            <ConsultForm />
          </div>
        </div>
      </div>
    </section>
  );
}
