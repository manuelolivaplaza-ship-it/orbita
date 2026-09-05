import Image from "next/image";
import Link from "next/link";
import { Breath } from "@/components/breath";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { Silence } from "@/components/silence";
import { areas, method, prices, promises, rooms, stats, team } from "@/data/content";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifesto />
      <Silence />
      <Cifras />
      <Areas />
      <Equipo />
      <Respirar />
      <Espacio />
      <Metodo />
      <Honorarios />
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
          alt="Sala ETER: sillón de lino, eucalipto y ventana hacia la cordillera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-12 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-12">
          <p className="rise kicker" style={{ animationDelay: "0.12s" }}>
            Centro de salud mental · Providencia · presencial y online
          </p>
          <h1
            className="rise mt-6 font-display text-[clamp(3rem,7.4vw,6.8rem)] font-light leading-[0.88] tracking-tight"
            style={{ animationDelay: "0.24s" }}
          >
            Un lugar
            <br />
            para lo que
            <br />
            <em className="italic text-sage-deep">no se ve.</em>
          </h1>
          <p
            className="rise mt-7 max-w-[38ch] text-[17px] leading-relaxed text-tinta-suave"
            style={{ animationDelay: "0.4s" }}
          >
            Psicología clínica y psiquiatría. Cincuenta minutos, la misma
            persona, sin prisa de pasillo. Emparejamos — no asignamos el hueco
            más cercano.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.52s" }}
          >
            <Link href="/primera" className="btn btn-ink">
              Pedir primera hora
              <Arrow />
            </Link>
            <Link
              href="/enfoque"
              className="link-sage font-mono text-[0.62rem] uppercase tracking-[0.22em]"
            >
              Cómo trabajamos
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[100svh] lg:col-span-7 lg:block">
          <div className="absolute inset-y-0 right-0 w-[min(100%,52vw)]">
            <Image
              src="/images/hero.jpg"
              alt="Sala ETER: sillón de lino, eucalipto y ventana hacia la cordillera"
              fill
              priority
              sizes="52vw"
              className="ken object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-0 z-10 bg-papel px-5 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
              Antonio Varas 2650 · luz norte · 50 min
            </p>
          </div>
          <span
            className="breath-line pointer-events-none absolute left-0 top-1/2 hidden h-24 w-px bg-sage lg:block"
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
          <p className="kicker">La casa</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-light leading-[0.98] tracking-tight">
            Llevas semanas durmiendo mal y lo llamas cansancio.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-tinta-suave">
            No es falta de voluntad. Es que el pecho no abre. Te ofrecieron
            un pack, una app, una lista de hábitos. Aquí no.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            ETER es una casa en Antonio Varas, Providencia. Luz norte.
            Cincuenta minutos. La misma persona de principio a fin. Si el caso
            no es nuestro, te lo decimos — y te derivamos.
          </p>
          <Link
            href="/espacio"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Conocer el espacio
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
                prefix={item.prefix}
                suffix={item.suffix}
                pad={"pad" in item ? item.pad : undefined}
              />
            </p>
            <p className="mt-3 max-w-[16ch] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Ocho áreas</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              Lo que se nombra, se puede trabajar.
            </h2>
          </div>
          <Link
            href="/areas"
            className="link-sage mb-1 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
          >
            Ver todas
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-px bg-linea md:grid-cols-2">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={(index % 2) * 80} className="bg-papel">
              <Link
                href={`/areas/${area.slug}`}
                className="group grid gap-6 p-8 md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sage-deep">
                    {area.n}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-light tracking-tight group-hover:text-sage-deep md:text-4xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-tinta-suave">
                    {area.lead}
                  </p>
                </div>
                <p className="self-end font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris md:col-span-5 md:text-right">
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

function Equipo() {
  return (
    <section className="border-t border-linea py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Seis personas</p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
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
                <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sage-deep">
                  {person.focus}
                </p>
                <h3 className="mt-2 font-display text-3xl font-light tracking-tight group-hover:text-sage-deep">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-gris">{person.credential}</p>
                <p className="mt-3 max-w-[32ch] font-display text-lg font-light italic leading-snug text-tinta-suave">
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

function Respirar() {
  return (
    <section className="border-y border-linea bg-papel-2/40">
      <div className="shell grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Un minuto</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-light tracking-tight">
            Antes de escribirnos, puedes quedarte.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            Cuatro segundos hacia adentro. Seis hacia afuera. El sitio lo hace
            solo; tú, si quieres, te sumas. No es terapia. Es un segundo.
          </p>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Breath />
        </div>
      </div>
    </section>
  );
}

function Espacio() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">La casa</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              Luz norte. Lino. Un árbol en el patio.
            </h2>
          </div>
          <Link
            href="/espacio"
            className="link-sage mb-1 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
          >
            Recorrer el espacio
          </Link>
        </Reveal>
      </div>
      <div className="no-scrollbar mt-14 flex gap-4 overflow-x-auto px-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] pb-4 md:px-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]">
        {rooms.map((room) => (
          <figure key={room.src} className="w-[78vw] shrink-0 md:w-[42vw] lg:w-[28vw]">
            <div className="frame relative aspect-[16/10]">
              <Image
                src={room.src}
                alt={room.alt}
                fill
                sizes="42vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
              {room.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section className="border-t border-linea py-24 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Cómo se entra</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight">
            Cuatro pasos. Ninguno es un pack.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {method.map((step, index) => (
            <Reveal
              key={step.n}
              delay={index * 80}
              className="grid gap-4 border-t border-linea py-8 md:grid-cols-12"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sage-deep md:col-span-2">
                {step.n}
              </p>
              <h3 className="font-display text-3xl font-light tracking-tight md:col-span-4">
                {step.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-tinta-suave md:col-span-6">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Honorarios() {
  return (
    <section className="border-t border-linea py-24 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Honorarios</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-light tracking-tight">
            El valor se dice antes. No después.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            Boleta reembolsable el mismo día. Particular e ISAPRE. Online, el
            mismo valor. Packs solo después de la primera hora.
          </p>
          <Link
            href="/valores"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Ver valores y reembolso
            <Arrow />
          </Link>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          {prices.slice(0, 5).map((price) => (
            <div
              key={price.name}
              className="flex items-baseline justify-between gap-6 border-b border-linea py-5"
            >
              <div>
                <p className="font-display text-2xl font-light">{price.name}</p>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gris">
                  {price.detail}
                </p>
              </div>
              <p className="font-display text-2xl font-light nums">
                {formatCLP(price.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="border-t border-linea py-24 lg:py-36">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight">
            Lo que se pregunta antes de escribir.
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
    <section className="relative overflow-hidden border-t border-linea">
      <div className="absolute inset-0">
        <Image
          src="/images/luz.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>
      <div className="shell relative grid min-h-[70svh] items-end py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-8">
          <p className="kicker">Primera hora</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,6vw,5.6rem)] font-light leading-[0.92] tracking-tight">
            Si esto pesa, no tiene que pesarlo solo.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            Escríbenos. Leemos. Te proponemos una persona. Si ahora es
            demasiado, {site.crisis.line}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/primera" className="btn btn-ink">
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
