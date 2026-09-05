import Image from "next/image";
import Link from "next/link";
import { Clock } from "@/components/clock";
import { CountUp } from "@/components/count-up";
import { DayRibbon } from "@/components/day-ribbon";
import { Faq } from "@/components/faq";
import { HousePlan } from "@/components/house-plan";
import { Arrow } from "@/components/mark";
import { PriceTable } from "@/components/price-table";
import { Reveal } from "@/components/reveal";
import { ServiceIndex } from "@/components/service-index";
import { method, promises, stats, team } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DayRibbon />
      <Trust />
      <Manifesto />
      <Cifras />
      <Servicios />
      <Casa />
      <Equipo />
      <Metodo />
      <Precios />
      <Galeria />
      <Preguntas />
      <Reserva />
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="aire" aria-hidden="true" />

      <div className="shell relative flex flex-1 flex-col justify-end pb-10 pt-28 lg:pb-14 lg:pt-36">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="rise kicker" style={{ animationDelay: "0.1s" }}>
              Centro médico · Providencia · una casa
            </p>
            <h1
              className="rise mt-6 font-display text-[clamp(3.2rem,8.4vw,7.4rem)] font-light leading-[0.86] tracking-tight"
              style={{ animationDelay: "0.22s" }}
            >
              La hora
              <br />
              que sí{" "}
              <em className="italic text-eter">ocurre.</em>
            </h1>
            <p
              className="rise mt-7 max-w-[38ch] text-[17px] leading-relaxed text-tinta-suave"
              style={{ animationDelay: "0.38s" }}
            >
              Ocho especialidades, laboratorio propio y bono electrónico. Pides
              hoy, te vemos en cuarenta y ocho horas — o te lo decimos altiro.
            </p>
            <div
              className="rise mt-9 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "0.5s" }}
            >
              <Link href="/agenda" className="btn btn-ink">
                Agendar hora
                <Arrow />
              </Link>
              <Link
                href="#precios"
                className="link-eter font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              >
                Ver especialidades y precios
              </Link>
            </div>
          </div>

          <div
            className="rise hidden lg:col-span-3 lg:flex lg:flex-col lg:items-end lg:gap-8"
            style={{ animationDelay: "0.56s" }}
          >
            <p className="spine font-display text-sm font-light tracking-[0.5em] text-gris">
              ETER
            </p>
            <div className="text-right">
              <Clock className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris" />
              <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
                {site.address.line1}
                <br />
                {site.metro}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <span
          className="breath pointer-events-none absolute left-0 right-0 top-0 z-10 h-px bg-eter"
          aria-hidden="true"
        />
        <div className="relative h-[min(46vh,560px)] min-h-[240px] overflow-hidden">
          <Image
            src="/images/espera.jpg"
            alt="Pabellón de espera ETER: sillas de lino, ventanal al patio y la cordillera al fondo"
            fill
            priority
            sizes="100vw"
            className="ken object-cover"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 bg-papel px-5 py-3 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Pabellón ETER — luz norte, 30 a 40 min por atención
          </p>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="bg-papel-2">
      <div className="shell flex flex-wrap gap-x-10 gap-y-3 py-5">
        {promises.map((item) => (
          <p
            key={item}
            className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-tinta-suave"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="kicker">El oficio</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-light leading-[0.98] tracking-tight">
            Llevas tres semanas llamando. Te dicen llame mañana a las ocho.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-tinta-suave">
            No es falta de agenda. Es un recinto que vende cupos que no tiene.
            Llegas con bono y el doctor no vino. Te mandan a la caja. El
            examen viaja una semana en un sobre.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            ETER es una casa en Los Leones, Providencia. Ocho salas. Un
            laboratorio que no viaja. El médico que figura es el que atiende.
            Si no hay hora en cuarenta y ocho horas, se lo decimos — no lo
            dejamos en espera eterna.
          </p>
          <Link
            href="/la-casa"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Conocer la casa
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Cifras() {
  return (
    <section id="cifras" className="border-y border-linea">
      <div id="evidencia" className="shell grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 80}
            className="border-linea px-0 py-10 md:px-6 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
          >
            <p className="font-display text-5xl font-light tracking-tight md:text-6xl">
              <CountUp
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                pad={"pad" in item ? item.pad : undefined}
                format={"format" in item ? "es" : undefined}
              />
            </p>
            <p className="mt-3 max-w-[16ch] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
      <p className="shell pb-8 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
        Sin fotos de doctores posando. La evidencia es hora oportuna, no stock.
      </p>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Ocho oficios</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              Lo que hacemos. Nada de jerga de pasillo.
            </h2>
          </div>
          <Link
            href="/especialidades"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Las especialidades
            <Arrow />
          </Link>
        </Reveal>
        <div className="mt-14">
          <ServiceIndex />
        </div>
      </div>
    </section>
  );
}

function Casa() {
  return (
    <section className="border-y border-linea">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada de la casa ETER en Los Leones: yeso hueso, ventanales y un olivo"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
          <Reveal>
            <p className="kicker">La casa</p>
            <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-tight">
              Luz norte. Un olivo. Ocho salas.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-tinta-suave">
              {site.address.line1}, {site.address.commune}. No es un mall médico.
              Es una casa: pabellón de espera, laboratorio propio, patio. El
              cupo es el oficio: si el mes está lleno, se lo decimos.
            </p>
            <div className="mt-10">
              <HousePlan />
            </div>
            <Link href="/la-casa" className="btn btn-ink mt-10 w-fit">
              Entrar
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  const preview = team.slice(0, 4);

  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Quién atiende</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
            El médico que figura es el que atiende. No rotación.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-linea md:grid-cols-2 lg:grid-cols-4">
          {preview.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={index * 80}
              className="bg-papel p-8 md:p-10"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
                {person.focus}
              </p>
              <h3 className="mt-6 font-display text-3xl font-light tracking-tight">
                {person.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
                {person.credential}
                <br />
                {person.extra}
              </p>
              <p className="mt-6 font-display text-xl italic font-light text-tinta-suave">
                {person.line}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/equipo"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Los ocho
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section id="metodo" className="border-y border-linea py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">El método</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
            Tres pasos. Ninguna fila de caja.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {method.map((step, index) => (
            <Reveal key={step.n} delay={index * 100} className="border-t border-linea pt-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
                {step.n}
              </p>
              <h3 className="mt-4 font-display text-3xl font-light">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-tinta-suave">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Precios() {
  return (
    <section id="precios" className="py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Valores</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
            Valores claros, sin sorpresas.
          </h2>
        </Reveal>
        <div className="mt-14">
          <PriceTable />
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="border-t border-linea py-24 lg:py-36">
      <div className="shell grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="frame relative aspect-[4/5] md:aspect-[4/3]">
            <Image
              src="/images/consulta.jpg"
              alt="Sala de consulta ETER: camilla de lino, mesa de roble y fonendo sobre papel"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Sala 01 · 40 min · bono electrónico
          </p>
        </Reveal>
        <Reveal className="md:col-span-5 md:pt-24" delay={120}>
          <div className="frame relative aspect-square">
            <Image
              src="/images/still.jpg"
              alt="Bodegón clínico: cuaderno, lápiz, taza y eucalipto sobre lino"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="ken object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Ficha · portal · mismo día
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="faq" className="border-t border-linea py-24 lg:py-36">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight">
            Lo que se pregunta antes de venir.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          <Faq />
        </div>
      </div>
    </section>
  );
}

function Reserva() {
  return (
    <section id="reserva" className="border-t border-linea bg-papel-2">
      <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-7">
          <p className="kicker">Agenda</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-tight">
            Agenda hoy. Atiéndete en 48 horas.
          </h2>
          <a
            href={site.phoneHref}
            className="mt-10 block font-display text-[clamp(2rem,5vw,4.4rem)] font-light nums tracking-tight"
          >
            {site.phone}
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-tinta-suave">
            Responden administrativos de esta casa, no un call center. Si no
            contestamos, devolvemos el llamado el mismo día.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/agenda" className="btn btn-ink">
              Agendar hora
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                Dirección
              </dt>
              <dd className="mt-2 text-tinta-suave">
                {site.address.line1}
                <br />
                {site.address.commune}, {site.address.city}
                <br />
                {site.metro}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                Horario
              </dt>
              <dd className="mt-2 text-tinta-suave">
                {site.hours.map((row) => (
                  <p key={row.days}>
                    {row.days}: {row.time}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                Correo
              </dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="link-line">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
