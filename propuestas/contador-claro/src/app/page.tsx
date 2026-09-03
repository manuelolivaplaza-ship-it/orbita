import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { DeadlineClock } from "@/components/deadline-clock";
import { Reveal } from "@/components/reveal";
import {
  fees,
  matters,
  paths,
  people,
  practices,
  principles,
  stats,
  steps,
} from "@/lib/data";
import { site } from "@/lib/site";
import { upcomingDeadlines, formatShortDate, daysUntil } from "@/lib/calendar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifesto />
      <Oficios />
      <QuoteBand />
      <Oficio />
      <Mesa />
      <Honorarios />
      <Libreta />
      <CalendarioTeaser />
      <Escribir />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="relative h-[46vh] lg:hidden">
        <Image
          src="/images/ventana.jpg"
          alt="Ventana del estudio: el cerro San Cristóbal y los Andes a plena luz"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-10 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-8">
          <p className="kicker">Estudio contable · Providencia</p>
          <h1 className="font-display mt-5 text-[clamp(3.1rem,8.4vw,7.4rem)] font-medium leading-[0.86] tracking-tight">
            Las cifras,
            <br />
            a plena
            <br />
            <em className="text-cobre italic">luz.</em>
          </h1>
          <p className="mt-7 max-w-[34ch] text-[17px] leading-relaxed text-muted">
            Cuatro contadores. Una libreta que se puede leer. F29, renta,
            remuneraciones y sociedades. Honorarios en UF, por escrito.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center bg-cobre px-6 text-[0.92rem] font-semibold tracking-wide text-luz transition-colors hover:bg-cobre-deep"
            >
              Primera hora
            </Link>
            <a
              href={site.whatsapp}
              className="inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold tracking-wide transition-colors hover:border-cobre hover:text-cobre"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-5 max-w-[40ch] text-[13px] leading-relaxed text-muted lg:hidden">
            {site.address.line} · {site.address.city}
          </p>
        </div>

        <div className="window-slit relative hidden min-h-[100svh] lg:col-span-4 lg:block">
          <Image
            src="/images/ventana.jpg"
            alt=""
            fill
            priority
            sizes="32vw"
            className="object-cover"
          />
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:justify-end lg:pb-16 lg:pl-8">
          <DeadlineClock />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </p>
          <p className="mt-6 text-[13px] tracking-wide text-cobre">
            RUT {site.rut}
          </p>
          <p className="mt-2 text-[13px] text-muted">{site.hoursShort}</p>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-y border-line bg-luz-2">
      <div className="shell grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-medium tracking-tight lg:text-4xl">
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
          <p className="kicker">El estudio</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-tight">
            Una ventana, una terraza, una libreta.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-[1.75] text-muted">
            CLARO trabaja en un piso de Providencia con el cerro a la vista. No
            es un chiste de branding: si un número no se puede explicar con la
            luz de la mañana, no está listo para el cliente.
          </p>
          <p className="mt-4 max-w-md text-[17px] leading-[1.75] text-muted">
            No tomamos cien carteras. El cupo es el oficio. Si el mes está
            lleno, se lo decimos.
          </p>
          <Link
            href="/estudio"
            className="mt-8 inline-flex items-center gap-2 text-[0.92rem] font-semibold tracking-wide text-cobre"
          >
            La casa <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[3/4] lg:col-span-6 lg:col-start-7">
          <Image
            src="/images/terraza.jpg"
            alt="Terraza del estudio: macetas, sillas de lino y el cerro San Cristóbal"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="shell mt-20 grid gap-px bg-line lg:grid-cols-3">
        {principles.map((item, index) => (
          <Reveal
            key={item.room}
            delay={index * 0.08}
            className="bg-luz px-8 py-10 lg:px-10 lg:py-12"
          >
            <p className="text-cobre text-sm font-semibold tracking-[0.18em]">
              {item.room}
            </p>
            <h3 className="font-display mt-5 text-3xl font-medium tracking-tight">
              {item.title}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Oficios() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">Oficios</p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-none tracking-tight">
              Seis libretas. Una mesa.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/servicios"
              className="text-[0.92rem] font-semibold tracking-wide text-cobre"
            >
              Plano completo →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {practices.map((item, index) => {
            const wide = item.slug === "impuestos" || item.slug === "sociedades";
            return (
              <Reveal
                key={item.slug}
                delay={index * 0.05}
                className={wide ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  href={`/servicios/${item.slug}`}
                  className="group flex h-full flex-col border border-line bg-luz p-6 transition-colors hover:border-cobre lg:p-8"
                >
                  <p className="text-[12px] font-semibold tracking-[0.18em] text-muted">
                    {item.room}
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-medium tracking-tight group-hover:text-cobre">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {item.lead}
                  </p>
                  <p className="mt-6 text-[13px] font-semibold tracking-wide text-ink">
                    Entrar →
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Link
                href={item.href}
                className="group block border-t border-line pt-6"
              >
                <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  Dónde está
                </p>
                <h3 className="font-display mt-2 text-2xl font-medium tracking-tight group-hover:text-cobre">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden lg:min-h-[78vh]">
      <Image
        src="/images/andes.jpg"
        alt="El cerro San Cristóbal y los Andes al atardecer, vistos desde Providencia"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="shell relative flex min-h-[70vh] items-end py-16 lg:min-h-[78vh] lg:py-24">
        <Reveal>
          <blockquote className="max-w-3xl">
            <p className="font-display text-[clamp(1.8rem,4vw,3.3rem)] font-medium leading-[1.12] text-luz">
              Si hay que esconder un número, el número está mal.
            </p>
            <footer className="mt-7 text-[12px] tracking-[0.2em] text-luz/75 uppercase">
              Elena Vidal · Socia fundadora
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
          <h2 className="font-display mt-4 max-w-xl text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-tight">
            Cómo se entra a esta mesa.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <Reveal
              key={item.room}
              delay={index * 0.06}
              className="bg-luz px-6 py-8 lg:px-7 lg:py-10"
            >
              <p className="font-display nums text-4xl font-medium text-cobre/80">
                {item.room}
              </p>
              <h3 className="font-display mt-5 text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="relative mt-12 aspect-[16/7] overflow-hidden">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa de roble con papel, pluma de cobre y café, a la luz de la mañana"
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
    <section className="border-t border-line bg-luz-2 py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">La mesa</p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-none tracking-tight">
              Cuatro sillas. Nadie de más.
            </h2>
          </Reveal>
          <Link href="/equipo" className="text-[0.92rem] font-semibold tracking-wide text-cobre">
            El equipo →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {people.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-luz">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-3 text-lg font-medium tracking-tight group-hover:text-cobre">
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
          <p className="kicker">Honorarios</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.2rem)] font-medium leading-[1.02] tracking-tight">
            En UF. Por escrito. Más IVA.
          </h2>
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-muted">
            La primera hora cuesta $38.000 y se descuenta si tomamos la
            cartera. El resto se pacta en UF, por mes o por acto, antes de
            firmar. Sin letra chica.
          </p>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-muted">
            Un resultado fiscal no se promete. Un camino, sí.
          </p>
          <Link
            href="/honorarios"
            className="mt-8 inline-flex text-[0.92rem] font-semibold tracking-wide text-cobre"
          >
            La tabla completa →
          </Link>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {fees.slice(0, 6).map((item) => (
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
                <p className="nums text-cobre sm:col-span-5 sm:text-right text-[18px] font-semibold">
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

function Libreta() {
  const featured = matters.slice(0, 3);
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">La libreta</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-tight">
              El trabajo, sin el nombre del cliente.
            </h2>
          </Reveal>
          <Link href="/casos" className="text-[0.92rem] font-semibold tracking-wide text-cobre">
            Ver asuntos →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col border-t border-line pt-8">
                <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  {item.year} · {item.area} · {item.comuna}
                </p>
                <p className="font-display nums mt-6 text-6xl font-medium tracking-tight">
                  {item.metric}
                  <span className="text-cobre">.</span>
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
                  {item.metricLabel}
                </p>
                <h3 className="font-display mt-7 text-2xl font-medium leading-snug tracking-tight">
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

function CalendarioTeaser() {
  const upcoming = upcomingDeadlines(undefined, 4);
  return (
    <section className="border-t border-line bg-luz-2 py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Calendario</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.3rem)] font-medium leading-[1.02] tracking-tight">
            El F29 no es un misterio. Es una fecha.
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">
            Día 12. Día 20 si factura en el SII. Previred el 13. Si cae en
            sábado, domingo o feriado, corre al hábil siguiente. Lo tenemos
            escrito — y lo movemos con usted.
          </p>
          <Link
            href="/calendario"
            className="mt-8 inline-flex text-[0.92rem] font-semibold tracking-wide text-cobre"
          >
            Abrir el calendario →
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-line">
            {upcoming.map((item) => (
              <li
                key={`${item.iso}-${item.kind}-${item.period}`}
                className="grid grid-cols-12 items-baseline gap-3 border-b border-line py-4"
              >
                <p className="nums col-span-4 text-[14px] text-cobre sm:col-span-3">
                  {formatShortDate(item.iso)}
                </p>
                <div className="col-span-8 sm:col-span-9">
                  <p className="font-display text-[18px] font-medium tracking-tight">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-muted">
                    {item.period}
                    {(() => {
                      const days = daysUntil(item.iso);
                      if (days === 0) return " · hoy";
                      if (days === 1) return " · mañana";
                      return ` · ${days} días`;
                    })()}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Escribir() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Escribir</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.2vw,3.5rem)] font-medium leading-[1.02] tracking-tight">
            Pida una hora. La terraza tiene sillas.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
            Cuéntenos el giro y de qué se trata. Si podemos ayudar, le
            proponemos un camino. Si no, se lo decimos.
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
