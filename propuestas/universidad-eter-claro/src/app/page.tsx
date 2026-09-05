import Image from "next/image";
import Link from "next/link";
import { Altitude } from "@/components/altitude";
import { CareerIndex } from "@/components/career-index";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { calendar, faculty, promises, stats } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifesto />
      <Cifras />
      <Cielo />
      <Carreras />
      <Campus />
      <Voces />
      <Admision />
      <Preguntas />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative h-[46vh] min-h-[280px] lg:hidden">
        <Image
          src="/images/hero.jpg"
          alt="Patio de ETER en El Arrayán: columnata de hormigón, acequia y un quillay frente a los Andes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-12 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-12">
          <p className="rise kicker" style={{ animationDelay: "0.12s" }}>
            Instituto universitario · El Arrayán · Lo Barnechea
          </p>
          <h1
            className="rise mt-6 font-display text-[clamp(3.1rem,8vw,7.2rem)] font-light leading-[0.86] tracking-tight"
            style={{ animationDelay: "0.24s" }}
          >
            A esta
            <br />
            <em className="italic text-cielo">altura.</em>
          </h1>
          <p
            className="rise mt-7 max-w-[38ch] text-[17px] leading-relaxed text-tinta-suave"
            style={{ animationDelay: "0.4s" }}
          >
            Ocho carreras de pregrado en un campus de la precordillera. Mil
            doscientos cuarenta estudiantes. La luz no es un adorno: cambia
            la hora de leer.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.52s" }}
          >
            <Link href="/admision" className="btn btn-ink">
              Admisión {site.admissionYear}
              <Arrow />
            </Link>
            <Link
              href="/carreras"
              className="link-cielo font-mono text-[0.62rem] uppercase tracking-[0.22em]"
            >
              Ver las ocho carreras
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[100svh] lg:col-span-7 lg:block">
          <div className="absolute inset-y-0 right-0 w-[min(100%,52vw)]">
            <Image
              src="/images/hero.jpg"
              alt="Patio de ETER en El Arrayán: columnata de hormigón, acequia y un quillay frente a los Andes"
              fill
              priority
              sizes="52vw"
              className="ken object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-0 z-10 bg-papel px-5 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
              Campus El Arrayán — {site.altitude} m s.n.m.
            </p>
          </div>
          <span
            className="breath pointer-events-none absolute left-0 top-1/2 hidden h-24 w-px bg-cielo lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-y border-linea bg-papel-2">
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
          <p className="kicker">El instituto</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-light leading-[0.98] tracking-tight">
            No somos grandes. Somos altos.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-tinta-suave">
            ETER cabe en un predio. Ocho carreras, tres escuelas, un claustro.
            El taller es de doce porque más que eso ya no se oye. Si una
            carrera no tiene oficio, no la abrimos para llenar una sala.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            Fundado en {site.founded}, en Camino El Arrayán. Arquitectura,
            paisaje, diseño, clima, territorio, computación, letras y gobierno.
            El éter —decían— es el medio de la luz. Aquí, también del estudio.
          </p>
          <Link
            href="/instituto"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            El instituto
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Cifras() {
  return (
    <section className="border-y border-linea">
      <div className="shell grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 80}
            className="border-linea px-0 py-10 md:px-6 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
          >
            <p className="font-display text-5xl font-light tracking-tight md:text-6xl">
              <CountUp
                value={item.value}
                suffix={item.suffix}
                pad={"pad" in item ? item.pad : undefined}
                format={"format" in item ? item.format : undefined}
              />
            </p>
            <p className="mt-3 max-w-[16ch] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
      <p className="shell pb-8 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
        Sede única · jornada diurna · sin vespertino
      </p>
    </section>
  );
}

function Cielo() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden">
      <Image
        src="/images/cielo.jpg"
        alt="Cielo pálido sobre la cordillera, visto desde el pretil del campus"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-tinta/55 via-tinta/10 to-transparent" />
      <div className="shell relative flex min-h-[70svh] flex-col justify-end py-16 text-papel">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-papel/70">
            847 metros
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,5.2rem)] font-light leading-[0.94] tracking-tight">
            Eso cambia la luz.
            <br />
            <em className="italic">Y el estudio.</em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

function Carreras() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Pregrado</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              Ocho. Ni una más.
            </h2>
          </div>
          <Link
            href="/carreras"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Todas las carreras
            <Arrow />
          </Link>
        </Reveal>
        <div className="mt-14">
          <CareerIndex />
        </div>
      </div>
    </section>
  );
}

function Campus() {
  return (
    <section className="border-y border-linea">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
          <Image
            src="/images/aula.jpg"
            alt="Sala de seminario: mesa ovalada de madera y ventanal al macizo andino"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
          <Reveal>
            <p className="kicker">El campus</p>
            <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-tight">
              Un claustro. Un seminario. Un macizo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-tinta-suave">
              {site.address.line1}, {site.address.commune}. Biblioteca, talleres,
              laboratorio de atmósfera, residencia de cuarenta y ocho camas. El
              predio se camina en doce minutos.
            </p>
            <Link href="/campus" className="btn btn-ink mt-10 w-fit">
              Entrar
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Voces() {
  const preview = faculty.slice(0, 3);

  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Cuerpo académico</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
            Quien enseña, firma.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-linea md:grid-cols-3">
          {preview.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={index * 90}
              className="bg-papel p-8 md:p-10"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cielo">
                {person.role}
              </p>
              <h3 className="mt-6 font-display text-4xl font-light tracking-tight">
                {person.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
                {person.credential}
                <br />
                {person.extra}
              </p>
              <p className="mt-6 font-display text-xl font-light italic text-tinta-suave">
                {person.line}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/cuerpo"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            El cuerpo
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Admision() {
  return (
    <section className="border-y border-linea py-24 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Admisión {site.admissionYear}</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
            PAES, entrevista, y un portafolio si el oficio lo pide.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            No hay admisión por volumen. El cupo es el taller. Las fechas
            están publicadas; el arancel, también.
          </p>
          <Link href="/admision" className="btn btn-ink mt-10 w-fit">
            Postular
            <Arrow />
          </Link>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <ol>
            {calendar.map((row, index) => (
              <Reveal
                key={row.what}
                delay={index * 70}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-linea py-6 last:border-b"
              >
                <span className="col-span-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-cielo">
                  {row.when}
                </span>
                <span className="col-span-7 font-display text-2xl font-light tracking-tight">
                  {row.what}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight">
            Lo que se pregunta antes de postular.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          <Faq />
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-linea bg-papel-2">
      <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-7">
          <p className="kicker">Admisión</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-tight">
            Escribe. El resto es una entrevista.
          </h2>
          <a
            href={site.phoneHref}
            className="mt-10 block font-display text-[clamp(2rem,5vw,4.4rem)] font-light nums tracking-tight"
          >
            {site.phone}
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-tinta-suave">
            Responde Admisión, no un call center. Si no contestamos, devolvemos
            el llamado el mismo día hábil.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/admision" className="btn btn-ink">
              Postular {site.admissionYear}
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
          <Altitude />
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                Dirección
              </dt>
              <dd className="mt-2 text-tinta-suave">
                {site.address.line1}
                <br />
                {site.address.commune}, {site.address.city}
                <br />
                {site.access}
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
