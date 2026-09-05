import Image from "next/image";
import Link from "next/link";
import { Constellation } from "@/components/constellation";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { Arrow, Drop } from "@/components/mark";
import { NightBar } from "@/components/night-bar";
import { NightCycle } from "@/components/night-cycle";
import { Reveal } from "@/components/reveal";
import { chequeos } from "@/data/chequeos";
import { metodo, promises, stats } from "@/data/content";
import { equipo, voces } from "@/data/equipo";
import { examenes } from "@/data/examenes";
import { site } from "@/data/site";
import { clp } from "@/lib/format";

const destacados = examenes.filter((item) => item.destacado);

export default function HomePage() {
  return (
    <>
      <Hero />
      <NightBar />
      <Trust />
      <Manifesto />
      <Cifras />
      <Ciclo />
      <Cielo />
      <Catalogo />
      <Chequeos />
      <Oficio />
      <Equipo />
      <Casa />
      <Voces />
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
        alt="Laboratorio NOCTUA de noche: viales ámbar, centrífuga y Santiago encendida al otro lado del vidrio"
        fill
        priority
        sizes="100vw"
        className="ken object-cover"
      />
      <div className="vignette" />
      <span className="scan-line" aria-hidden="true" />

      <div className="relative flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 pt-28 md:px-10 md:pb-16 lg:px-16">
        <p
          className="rise font-mono text-[0.62rem] uppercase tracking-[0.32em] text-paper/70"
          style={{ animationDelay: "0.15s" }}
        >
          Laboratorio clínico · Vitacura · informe {site.informeHour}
        </p>
        <h1
          className="rise mt-6 max-w-5xl font-display text-[clamp(3rem,8vw,7.6rem)] font-semibold leading-[0.86] tracking-tight"
          style={{ animationDelay: "0.28s" }}
        >
          Mientras
          <br />
          duermes,
          <br />
          <span className="text-amber">leemos.</span>
        </h1>
        <p
          className="rise mt-7 max-w-[40ch] text-base leading-relaxed text-paper/75 md:text-lg"
          style={{ animationDelay: "0.42s" }}
        >
          Toma al amanecer o al ocaso. El análisis corre de noche. El informe
          llega con la primera luz.
        </p>
        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.55s" }}
        >
          <Link href="/hora" className="btn btn-amber">
            Pedir hora
            <Arrow />
          </Link>
          <Link href="/turno" className="btn btn-light">
            El turno
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
      <div className="shell grid items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="frame aspect-[3/4]">
            <Image
              src="/images/vial.jpg"
              alt="Un vial de suero ámbar, como un ojo que mira en la oscuridad"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
          <p className="kicker">Manifiesto</p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Un observatorio
            <br />
            del cuerpo.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper-dim">
            De día, Santiago es ruido y una toma de cinco minutos entre dos
            reuniones. De noche, si alguien sabe mirar, una gota se vuelve
            informe. NOCTUA no es un mall de exámenes. Es el turno que no se
            apaga.
          </p>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper-dim">
            Abrimos a las 06:30. Volvemos a las 16:00. Cerramos la toma a las
            21:00. El laboratorio, no: corre hasta el alba.
          </p>
          <Link
            href="/turno"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Cómo corre la noche
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
                prefix={"prefix" in item ? item.prefix : ""}
                suffix={"suffix" in item ? item.suffix : ""}
                pad={"pad" in item ? item.pad : undefined}
              />
            </p>
            <p className="mt-3 max-w-[18ch] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Ciclo() {
  return (
    <section className="py-28 md:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Ciclo</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
            24 horas.
            <br />
            Una sola gota.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            El reloj no es decoración. Es el oficio. Toma cuando puedes.
            Procesamiento cuando la ciudad duerme. Informe cuando despiertas.
          </p>
          <Link
            href="/turno"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            El viaje de la muestra
            <Arrow />
          </Link>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <NightCycle />
        </Reveal>
      </div>
    </section>
  );
}

function Cielo() {
  return (
    <section className="overflow-hidden border-t border-line py-28 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Catálogo</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
            Cada examen es una estrella.
          </h2>
        </Reveal>
        <Reveal className="mt-16" delay={100}>
          <Constellation />
        </Reveal>
      </div>
    </section>
  );
}

function Catalogo() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Rutina</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold tracking-tight">
              Lo que más se pide.
            </h2>
          </div>
          <Link href="/examenes" className="btn btn-ghost">
            Catálogo completo
          </Link>
        </Reveal>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {destacados.map((item, index) => (
            <Reveal as="li" key={item.slug} delay={index * 50}>
              <Link
                href={`/examenes/${item.slug}`}
                className="group grid grid-cols-12 items-baseline gap-3 py-6"
              >
                <span className="col-span-12 font-display text-2xl font-semibold tracking-tight md:col-span-6 md:text-3xl">
                  {item.nombre}
                </span>
                <span className="col-span-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted md:col-span-3">
                  {item.ayuno === "No requiere" ? "Sin ayuno" : `Ayuno ${item.ayuno}`}
                </span>
                <span className="col-span-6 flex items-center justify-end gap-3 font-mono text-sm nums md:col-span-3">
                  {clp(item.precio)}
                  <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Chequeos() {
  return (
    <section className="py-28 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Paquetes</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold tracking-tight">
            Un chequeo no es un combo.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {chequeos
            .filter((item) => item.destacado)
            .map((item, index) => (
              <Reveal
                key={item.slug}
                delay={index * 80}
                className="bg-void p-8 md:p-10"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-amber">
                  {item.ayuno}
                </p>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                  {item.nombre}
                </h3>
                <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-paper-dim">
                  {item.tagline}
                </p>
                <p className="mt-8 font-display text-4xl font-semibold nums">
                  {clp(item.precio)}
                </p>
                <Link
                  href={`/hora?chequeo=${item.slug}`}
                  className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
                >
                  Pedir este
                  <Arrow />
                </Link>
              </Reveal>
            ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/chequeos"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Todos los chequeos
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell grid items-start gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="frame aspect-[4/5]">
            <Image
              src="/images/hands.jpg"
              alt="Manos enguantadas, una punción breve bajo una lámpara ámbar"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="kicker">Oficio</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-semibold tracking-tight">
              Tres gestos.
              <br />
              Ninguno apurado.
            </h2>
          </Reveal>
          <ol className="mt-10">
            {metodo.map((item, index) => (
              <Reveal as="li" key={item.n} delay={index * 90} className="border-t border-line py-7">
                <p className="kicker">{item.n}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-md text-paper-dim">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section className="py-28 md:py-36">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Quienes firman</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold tracking-tight">
              El turno tiene nombre.
            </h2>
          </div>
          <Link href="/equipo" className="btn btn-ghost">
            El equipo
          </Link>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {equipo.map((person, index) => (
            <Reveal key={person.slug} delay={index * 80}>
              <div className="frame aspect-[3/4]">
                <Image
                  src={person.foto}
                  alt={person.nombre}
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 font-display text-2xl font-semibold tracking-tight">
                {person.nombre}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-amber">
                {person.cargo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Casa() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden">
      <Image
        src="/images/facade.jpg"
        alt="Fachada de piedra volcánica de NOCTUA en Vitacura, una ventana ámbar sobre el pavimento mojado"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="vignette" />
      <div className="relative flex min-h-[70svh] items-end">
        <div className="shell pb-16">
          <Reveal>
            <p className="kicker">Vitacura</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
              La casa que no apaga
              <br />
              la ventana.
            </h2>
            <Link
              href="/espacio"
              className="btn btn-light mt-8"
            >
              El espacio
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section className="py-28 md:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Voces</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold tracking-tight">
            Lo que se dice después.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {voces.map((item, index) => (
            <Reveal key={item.nombre} delay={index * 90}>
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight">
                “{item.cita}”
              </p>
              <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                {item.nombre} · {item.detalle}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="kicker">Dudas</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Antes de la punción.
          </h2>
        </Reveal>
        <div className="md:col-span-8">
          <Faq />
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell grid items-end gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Drop className="text-amber" />
          <h2 className="mt-8 font-display text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-tight">
            Una hora.
            <br />
            Toda la noche.
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper-dim">
            Elige amanecer o ocaso. El resto lo hace el turno.
          </p>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9" delay={120}>
          <div className="flex flex-col gap-4">
            <Link href="/hora" className="btn btn-amber">
              Pedir hora
              <Arrow />
            </Link>
            <Link href="/resultados" className="btn btn-ghost">
              Ver un informe
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
