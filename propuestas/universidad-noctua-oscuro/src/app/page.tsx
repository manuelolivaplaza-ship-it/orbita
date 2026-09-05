import Image from "next/image";
import Link from "next/link";
import { CareerIndex } from "@/components/career-index";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { Arrow } from "@/components/mark";
import { NightBar } from "@/components/night-bar";
import { Reveal } from "@/components/reveal";
import { calendar, faculty, promises, protocol, stats } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NightBar />
      <Trust />
      <Manifesto />
      <Cifras />
      <Protocolo />
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
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-void">
      <Image
        src="/images/hero.jpg"
        alt="Santiago de noche visto desde el pretil del cerro: la ciudad encendida y los Andes al fondo"
        fill
        priority
        sizes="100vw"
        className="ken object-cover"
      />
      <div className="vignette" />

      <div className="relative flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 pt-28 md:px-10 md:pb-16 lg:px-16">
        <p
          className="rise font-mono text-[0.62rem] uppercase tracking-[0.32em] text-paper/70"
          style={{ animationDelay: "0.15s" }}
        >
          Instituto universitario · Recoleta
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-display text-[clamp(3.1rem,8vw,8rem)] font-semibold leading-[0.86] tracking-tight"
          style={{ animationDelay: "0.28s" }}
        >
          Se estudia
          <br />
          <span className="text-amber">de noche.</span>
        </h1>
        <p
          className="rise mt-7 max-w-[38ch] text-[17px] leading-relaxed text-paper/75"
          style={{ animationDelay: "0.42s" }}
        >
          Ocho carreras de pregrado. Seiscientos cuarenta estudiantes. El
          recinto abre a las 17:30, cuando Santiago baja la voz.
        </p>
        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.55s" }}
        >
          <Link href="/admision" className="btn btn-amber">
            Admisión {site.admissionYear}
            <Arrow />
          </Link>
          <Link href="/carreras" className="btn btn-light">
            Las ocho carreras
          </Link>
        </div>
      </div>

      <p className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-paper/55 [writing-mode:vertical-rl] lg:right-10 lg:block">
        {site.coords.lat} · {site.address.city}
      </p>

      <div className="absolute bottom-8 right-6 hidden items-start gap-3 md:flex lg:right-16">
        <span className="line-grow mt-1 h-10 w-px bg-amber" />
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-paper/70">
          Bajar
        </span>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-b border-line bg-ink">
      <div className="shell flex flex-wrap gap-x-10 gap-y-3 py-5">
        {promises.map((item) => (
          <p
            key={item}
            className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-paper-dim"
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
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold leading-[0.98] tracking-tight">
            Noctua no es vespertino. Es una hora.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-paper-dim">
            De día, Santiago es ruido. De noche, se vuelve un instrumento. El
            cielo se mide, el sueño se registra, la ciudad se lee encendida.
            Abrimos cuando baja la voz: ocho carreras, tres escuelas, un
            seminario de doce.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-paper-dim">
            Fundado en {site.founded}, en Santa Filomena. Astronomía, dato,
            cine, sueño, urbanismo, diseño, archivo y gobierno. El búho —decían—
            ve lo que el resto no alcanza. Aquí, también.
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
    <section className="border-y border-line">
      <div className="shell grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 80}
            className="border-line px-0 py-10 md:px-6 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
          >
            <p className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
              {"display" in item ? (
                item.display
              ) : (
                <CountUp
                  value={item.value}
                  suffix={item.suffix}
                  pad={"pad" in item ? item.pad : undefined}
                  format={"format" in item ? item.format : undefined}
                />
              )}
            </p>
            <p className="mt-3 max-w-[16ch] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
      <p className="shell pb-8 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
        Sede única · jornada nocturna · sin diurno · sin online
      </p>
    </section>
  );
}

function Protocolo() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">El recinto</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
            Cuatro gestos. Cada noche.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-4">
          {protocol.map((step, index) => (
            <Reveal
              key={step.n}
              delay={index * 80}
              className="bg-void p-8 md:p-10"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {step.n}
              </p>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cielo() {
  return (
    <section className="relative min-h-[78svh] overflow-hidden">
      <Image
        src="/images/observatorio.jpg"
        alt="Cúpula del observatorio bajo la Vía Láctea, en una ladera del norte de Chile"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/30" />
      <div className="shell relative flex min-h-[78svh] flex-col justify-end py-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70">
            Estación Atacama
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,5.2rem)] font-semibold leading-[0.94] tracking-tight">
            El cielo del sur
            <br />
            <span className="text-amber">no se descarga.</span>
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
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
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
    <section className="border-y border-line">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
          <Image
            src="/images/seminario.jpg"
            alt="Mesa ovalada de seminario con Santiago encendido detrás del ventanal"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
          <Reveal>
            <p className="kicker">El campus</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight">
              Una terraza. Un seminario. Un cerro.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper-dim">
              {site.address.line1}, {site.address.commune}. Biblioteca hasta las
              dos, laboratorio de sueño, sala oscura, cúpula en el cerro. El
              predio se camina en ocho minutos.
            </p>
            <Link href="/campus" className="btn btn-amber mt-10 w-fit">
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
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
            Quien enseña, firma.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {preview.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={index * 90}
              className="bg-void p-8 md:p-10"
            >
              <div className="frame relative mb-8 aspect-[3/4]">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {person.role}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {person.credential}
                <br />
                {person.extra}
              </p>
              <p className="mt-6 font-display text-xl font-semibold italic text-paper-dim">
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
    <section className="border-y border-line py-24 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Admisión {site.admissionYear}</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
            PAES, entrevista, y una vigilia si el oficio la pide.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            No hay admisión por volumen. El cupo es el seminario. Las fechas
            están publicadas; el arancel, también.
          </p>
          <Link href="/admision" className="btn btn-amber mt-10 w-fit">
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
                className="grid grid-cols-12 items-baseline gap-4 border-t border-line py-6 last:border-b"
              >
                <span className="col-span-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-amber">
                  {row.when}
                </span>
                <span className="col-span-7 font-display text-2xl font-semibold tracking-tight">
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
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold tracking-tight">
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
    <section className="border-t border-line bg-ink">
      <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-7">
          <p className="kicker">Admisión</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            Escribe. El resto es una noche.
          </h2>
          <a
            href={site.phoneHref}
            className="mt-10 block font-display text-[clamp(2rem,5vw,4.4rem)] font-semibold nums tracking-tight"
          >
            {site.phone}
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
            Responde Admisión, no un call center. Si no contestamos, devolvemos
            el llamado el mismo día hábil — de 17:30 a 21:00.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/admision" className="btn btn-amber">
              Postular {site.admissionYear}
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
            {site.coords.lat} · {site.coords.lng}
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                Dirección
              </dt>
              <dd className="mt-2 text-paper-dim">
                {site.address.line1}
                <br />
                {site.address.commune}, {site.address.city}
                <br />
                {site.access}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
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
