import Image from "next/image";
import Link from "next/link";
import { BodyMap } from "@/components/body-map";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { HourRail } from "@/components/hour-rail";
import { Arrow } from "@/components/mark";
import { NightBar } from "@/components/night-bar";
import { Reveal } from "@/components/reveal";
import { ServiceIndex } from "@/components/service-index";
import { method, promises, stats, team } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NightBar />
      <Trust />
      <Manifesto />
      <Cifras />
      <Constelacion />
      <Oficio />
      <Protocolo />
      <Horas />
      <Equipo />
      <Casa />
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
        alt="Box NOCTUA de noche: camilla de lino oscuro, lámpara ámbar y Santiago al otro lado del vidrio"
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
          Kinesiología · Vitacura · último cupo {site.lastSlot}
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-display text-[clamp(3.1rem,8vw,8rem)] font-semibold leading-[0.86] tracking-tight"
          style={{ animationDelay: "0.28s" }}
        >
          Se lee
          <br />
          <span className="text-amber">de noche.</span>
        </h1>
        <p
          className="rise mt-7 max-w-[38ch] text-base leading-relaxed text-paper/75 md:text-lg"
          style={{ animationDelay: "0.42s" }}
        >
          De día el cuerpo se defiende. De noche, si alguien sabe mirar, se
          nombra. Evaluación de 75 minutos. Sin pack por adelantado.
        </p>
        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.55s" }}
        >
          <Link href="/hora" className="btn btn-amber">
            Pedir hora
            <Arrow />
          </Link>
          <Link href="/oficio" className="btn btn-light">
            El oficio
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
    <div className="border-b border-line bg-void">
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
    <section className="py-28 md:py-36">
      <div className="shell grid items-start gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="kicker">Manifiesto</p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            El cuerpo también tiene una noche.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-paper-dim">
            Santiago de día es ruido: el hombro se llama tensión, la lumbar se
            llama estrés, y te ofrecen veinte sesiones sin haberte leído. Aquí
            no. Abrimos a las 15:00 y cerramos a las 22:30. El último cupo
            existe porque el oficio no cabe en un horario de oficina.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-paper-dim">
            NOCTUA es una casa de piedra en Santa María. Cuatro kinesiólogos.
            El mismo de principio a fin. Si el caso es quirúrgico, te
            derivamos.
          </p>
          <Link
            href="/metodo"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            El método
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
              <CountUp
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                pad={"pad" in item ? item.pad : undefined}
              />
            </p>
            <p className="mt-3 max-w-[16ch] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Constelacion() {
  return (
    <section className="overflow-hidden py-28 md:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Observatorio</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
            Cada articulación es una estrella.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            El dolor casi nunca está donde duele. Pasa el cursor —o el dedo—
            sobre el mapa. Lo que se enciende es lo que leemos.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <BodyMap />
        </Reveal>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Seis oficios</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
              Lo que hacemos. Nada de jerga de pasillo.
            </h2>
          </div>
          <Link
            href="/oficio"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            El oficio completo
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

function Protocolo() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Protocolo</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
            Cuatro vértebras. Ningún pack por adelantado.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-4 md:gap-10">
          {method.map((step, index) => (
            <Reveal key={step.n} delay={index * 90} className="border-t border-line pt-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {step.n}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Horas() {
  return (
    <section className="border-y border-line">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[420px] md:col-span-7 md:min-h-[720px]">
          <Image
            src="/images/window.jpg"
            alt="Camilla en silueta frente al Mapocho y los Andes, de noche"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/20 to-void/70" />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
          <Reveal>
            <p className="kicker">La hora</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight">
              El día es de otros. La noche es nuestra.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper-dim">
              Lun a vie, 15:00 a 22:30. Sábado, 10:00 a 14:00. El cupo de las
              21:00 existe porque el que entrena —o el que trabaja— no puede
              perder la tarde en una sala de espera.
            </p>
            <div className="mt-10">
              <HourRail />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section className="py-28 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Quién te lee</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
            El mismo kinesiólogo de principio a fin.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={index * 80}
              className="bg-void p-8 md:p-10"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {person.focus}
              </p>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {person.credential}
                <br />
                {person.extra}
              </p>
              <p className="mt-6 font-display text-xl italic font-normal text-paper-dim">
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
            El equipo
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Casa() {
  return (
    <section className="border-y border-line">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
          <Image
            src="/images/facade.jpg"
            alt="Fachada de piedra volcánica de NOCTUA al anochecer, una ventana ámbar sobre el pavimento mojado"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
          <Reveal>
            <p className="kicker">La casa</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight">
              Piedra. Ámbar. Silencio.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper-dim">
              {site.address.line1}, {site.address.commune}. No es un local de
              avenida. Es una casa: tres box, un pasillo que no pide fila, el
              Mapocho al otro lado del vidrio.
            </p>
            <Link href="/espacio" className="btn btn-amber mt-10 w-fit">
              Entrar
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="py-28 md:py-36">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold tracking-tight">
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

function Cierre() {
  return (
    <section className="border-t border-line bg-ink">
      <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-7">
          <p className="kicker">Hora</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            Pide la lectura. Nosotros el resto.
          </h2>
          <a
            href={site.phoneHref}
            className="mt-10 block font-display text-[clamp(2rem,5vw,4.4rem)] font-semibold nums tracking-tight"
          >
            {site.phone}
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
            Responden kinesiólogos, no call center. Si no contestamos, devolvemos
            el llamado el mismo día.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/hora" className="btn btn-amber">
              Pedir hora
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
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                Dirección
              </dt>
              <dd className="mt-2 text-paper-dim">
                {site.address.line1}
                <br />
                {site.address.commune}, {site.address.city}
                <br />
                {site.metro}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                Horario
              </dt>
              <dd className="mt-2 text-paper-dim">
                {site.hours.map((row) => (
                  <p key={row.days}>
                    {row.days}: {row.time}
                  </p>
                ))}
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
