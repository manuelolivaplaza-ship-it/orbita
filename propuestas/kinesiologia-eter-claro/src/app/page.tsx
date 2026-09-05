import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import { Arrow } from "@/components/mark";
import { PriceTable } from "@/components/price-table";
import { Reveal } from "@/components/reveal";
import { ServiceIndex } from "@/components/service-index";
import { convenios, method, promises, stats, team } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifesto />
      <Cifras />
      <Servicios />
      <Equipo />
      <Espacio />
      <Precios />
      <Metodo />
      <Galeria />
      <Preguntas />
      <Reserva />
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative h-[46vh] min-h-[280px] lg:hidden">
        <Image
          src="/images/box.jpg"
          alt="Box ETER: camilla de lino, mesa de roble y ventanal hacia el jardín, luz norte"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-12 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-12">
          <p
            className="rise kicker"
            style={{ animationDelay: "0.12s" }}
          >
            Centro de kinesiología · Las Condes · box y domicilio
          </p>
          <h1
            className="rise mt-6 font-display text-[clamp(3rem,7.4vw,6.8rem)] font-light leading-[0.88] tracking-tight"
            style={{ animationDelay: "0.24s" }}
          >
            Volver a
            <br />
            moverte
            <br />
            <em className="italic text-teal">sin miedo.</em>
          </h1>
          <p
            className="rise mt-7 max-w-[38ch] text-[17px] leading-relaxed text-tinta-suave"
            style={{ animationDelay: "0.4s" }}
          >
            Evaluación kinésica en 48 horas, plan por escrito y reembolso
            ISAPRE/FONASA informado antes de partir. Traumatológica, deportiva
            y neurológica.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.52s" }}
          >
            <Link href="/agenda" className="btn btn-ink">
              Agendar evaluación
              <Arrow />
            </Link>
            <Link href="#precios" className="link-teal font-mono text-[0.62rem] uppercase tracking-[0.22em]">
              Ver precios y convenios
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[100svh] lg:col-span-7 lg:block">
          <div className="absolute inset-y-0 right-0 w-[min(100%,52vw)]">
            <Image
              src="/images/box.jpg"
              alt="Box ETER: camilla de lino, mesa de roble y ventanal hacia el jardín, luz norte"
              fill
              priority
              sizes="52vw"
              className="ken object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-0 z-10 bg-papel px-5 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
              Box ETER — luz norte, 60 min por sesión
            </p>
          </div>
          <span
            className="breath pointer-events-none absolute left-0 top-1/2 hidden h-24 w-px bg-teal lg:block"
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
          <p className="kicker">El oficio</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-light leading-[0.98] tracking-tight">
            Llevas meses con el hombro avisando. Lo llamas tensión.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-tinta-suave">
            No es falta de elongar. Es una lesión que no se arregla con YouTube.
            Te ofrecieron veinte sesiones por adelantado sin evaluarte. Aquí no.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            ETER es una casa en San Damián, Las Condes. Luz norte. Sesenta
            minutos. El mismo kinesiólogo de principio a fin. Si el caso es
            quirúrgico, te derivamos — no te retenemos.
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
        Sin antes/después. La evidencia es alta oportuna, no foto.
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
            <p className="kicker">Seis enfoques</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
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

function Equipo() {
  const preview = team.slice(0, 3);

  return (
    <section className="border-t border-linea py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="kicker">Quién te atiende</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
            El mismo kinesiólogo de principio a fin. No rotación.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-linea md:grid-cols-3">
          {preview.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={index * 90}
              className="bg-papel p-8 md:p-10"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-teal">
                {person.focus}
              </p>
              <h3 className="mt-6 font-display text-4xl font-light tracking-tight">
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
            Los seis
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Espacio() {
  return (
    <section className="border-y border-linea">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
          <Image
            src="/images/corridor.jpg"
            alt="Pasillo de la casa ETER, con una franja de sol sobre el piso de roble"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
          <Reveal>
            <p className="kicker">La casa</p>
            <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-tight">
              Luz norte. Roble. Sesenta minutos.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-tinta-suave">
              {site.address.line1}, {site.address.commune}. No es un local de
              avenida. Es una casa: tres box, un patio, estacionamiento en el
              predio. También vamos a la tuya.
            </p>
            <Link href="/espacio" className="btn btn-ink mt-10 w-fit">
              Entrar
              <Arrow />
            </Link>
          </Reveal>
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
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {convenios.map((item) => (
            <p
              key={item}
              className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="mt-14">
          <PriceTable />
        </div>
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
            Tres pasos. Ningún pack por adelantado.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {method.map((step, index) => (
            <Reveal key={step.n} delay={index * 100} className="border-t border-linea pt-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-teal">
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

function Galeria() {
  return (
    <section id="galeria" className="py-24 lg:py-36">
      <div className="shell grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="frame relative aspect-[4/5] md:aspect-[4/3]">
            <Image
              src="/images/still.jpg"
              alt="Pauta personalizada sobre mesa de roble: cuaderno, lápiz y banda elástica"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Pauta personalizada · 60 min · box o domicilio
          </p>
        </Reveal>
        <Reveal className="md:col-span-5 md:pt-24" delay={120}>
          <div className="frame relative aspect-square">
            <Image
              src="/images/detail.jpg"
              alt="Lino pálido de camilla con luz rasante"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="ken object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Lino · luz rasante · box ETER
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
            Agenda tu evaluación. Nosotros el resto.
          </h2>
          <a
            href={site.phoneHref}
            className="mt-10 block font-display text-[clamp(2rem,5vw,4.4rem)] font-light nums tracking-tight"
          >
            {site.phone}
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-tinta-suave">
            Responden kinesiólogos, no call center. Si no contestamos, devolvemos
            el llamado el mismo día.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/agenda" className="btn btn-ink">
              Agendar evaluación
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
