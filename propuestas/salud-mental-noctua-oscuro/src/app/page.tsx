import Image from "next/image";
import Link from "next/link";
import { Constellation } from "@/components/constellation";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { HourRail } from "@/components/hour-rail";
import { Lamp } from "@/components/lamp";
import { Arrow } from "@/components/mark";
import { NightBar } from "@/components/night-bar";
import { Reveal } from "@/components/reveal";
import { Rumination } from "@/components/rumination";
import { ThreeAm } from "@/components/three-am";
import { areas, method, promises, stats, team } from "@/data/content";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NightBar />
      <Trust />
      <Manifesto />
      <Cifras />
      <Tres />
      <Constelacion />
      <Areas />
      <Protocolo />
      <Horas />
      <Equipo />
      <Lampara />
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
        alt="Sala NOCTUA de noche: sillón de lino marfil, lámpara ámbar y Santiago al otro lado del vidrio"
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
          Salud mental · Las Condes · último cupo {site.lastSlot}
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-display text-[clamp(3.1rem,8vw,8rem)] font-semibold leading-[0.86] tracking-tight"
          style={{ animationDelay: "0.28s" }}
        >
          Lo que no
          <br />
          <span className="text-amber">se duerme.</span>
        </h1>
        <p
          className="rise mt-7 max-w-[38ch] text-base leading-relaxed text-paper/75 md:text-lg"
          style={{ animationDelay: "0.42s" }}
        >
          El pensamiento no cierra a las 18. Psicología y psiquiatría.
          Cincuenta minutos, la misma persona. Abrimos cuando la ciudad baja
          la voz.
        </p>
        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.55s" }}
        >
          <Link href="/primera" className="btn btn-amber">
            Pedir primera hora
            <Arrow />
          </Link>
          <Link href="/noche" className="btn btn-light">
            Si son las tres
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
      <div className="shell flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
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
            El oficio también tiene una noche.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-paper-dim">
            Santiago de día es una sala de espera. Tres semanas para un
            psicólogo, un pack de veinte sesiones, una app que te pide
            respirar. Aquí no.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-paper-dim">
            Abrimos a las 16:00 y cerramos a las 23:00. El último cupo existe
            porque la consulta no cabe en un horario de oficina. NOCTUA es una
            casa de piedra en Los Militares. Seis personas. La misma de
            principio a fin.
          </p>
          <Link
            href="/enfoque"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Cómo se trabaja
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

function Tres() {
  return (
    <section className="overflow-hidden py-28 md:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">03:00</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
            La hora que el día no tiene.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            La rumiación no espera un cupo de las diez. Si hay riesgo, hay
            números. Si no hay riesgo, hay una casa que abre a las 16:00.
          </p>
          <div className="mt-10">
            <Rumination />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <ThreeAm />
        </Reveal>
      </div>
    </section>
  );
}

function Constelacion() {
  return (
    <section className="overflow-hidden border-t border-line py-28 md:py-36">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="kicker">Constelación</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
            Cada pensamiento es una estrella.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            Pasa el cursor —o el dedo— sobre la constelación. Lo que se
            enciende es lo que leemos en esta casa.
          </p>
        </Reveal>
        <Reveal className="mt-16" delay={120}>
          <Constellation />
        </Reveal>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="border-t border-line py-28 md:py-36">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Ocho áreas</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
              Lo que se nombra, se puede trabajar.
            </h2>
          </div>
          <Link
            href="/areas"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            El índice completo
            <Arrow />
          </Link>
        </Reveal>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={(index % 2) * 80} className="bg-void">
              <Link
                href={`/areas/${area.slug}`}
                className="group grid gap-6 p-8 md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                    {area.n} · {area.thought}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight group-hover:text-amber md:text-4xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-paper-dim">
                    {area.lead}
                  </p>
                </div>
                <p className="self-end font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted md:col-span-5 md:text-right">
                  {area.duration} · desde {formatCLP(area.priceFrom)}
                </p>
              </Link>
            </Reveal>
          ))}
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
            Cuatro tiempos. Ningún pack por adelantado.
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
            src="/images/ventana.jpg"
            alt="Santiago y los Andes vistos desde una ventana de NOCTUA, de noche"
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
              Lun a vie, 16:00 a 23:00. Sábado, 10:00 a 14:00. El cupo de las
              22:00 existe porque quien trabaja no puede perder la mañana en
              una sala de espera.
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
            Te emparejamos. No te asignamos un hueco.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index * 70}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="frame relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber">
                  {person.focus}
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight group-hover:text-amber">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{person.credential}</p>
                <p className="mt-3 max-w-[32ch] font-display text-lg italic leading-snug text-paper-dim">
                  {person.line}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lampara() {
  return (
    <section className="border-y border-line bg-ink">
      <div className="shell grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Un minuto</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-semibold tracking-tight">
            Antes de escribirnos, puedes quedarte.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            La lámpara no diagnostica. No vende un pack. Si ahora es
            demasiado, {site.crisis.line}.
          </p>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Lamp />
        </div>
      </div>
    </section>
  );
}

function Casa() {
  return (
    <section>
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
          <Image
            src="/images/fachada.jpg"
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
              avenida. Es una casa: seis salas, un jardín, una lámpara que no
              compete con la ciudad.
            </p>
            <Link href="/casa" className="btn btn-amber mt-10 w-fit">
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
    <section className="relative overflow-hidden border-t border-line bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/lamp.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </div>
      <div className="shell relative grid min-h-[70svh] items-end py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-8">
          <p className="kicker">Primera hora</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-tight">
            Si esto pesa, no tiene que pesarlo solo.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            Escríbenos. Leemos. Te proponemos una persona. Si ahora es
            demasiado, {site.crisis.line}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/primera" className="btn btn-amber">
              Pedir primera hora
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
