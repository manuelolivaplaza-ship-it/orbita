import Image from "next/image";
import Link from "next/link";
import { HousePlan } from "@/components/house-plan";
import { Reveal } from "@/components/reveal";
import { SantiagoClock } from "@/components/santiago-clock";
import {
  doctors,
  isapres,
  principles,
  specialties,
  stats,
  testimonials,
  visitSteps,
} from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifesto />
      <Rooms />
      <QuoteBand />
      <Mesa />
      <Visit />
      <Lab />
      <Voces />
      <Llegar />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="relative h-[46vh] lg:hidden">
        <Image
          src="/images/pabellon.jpg"
          alt="Pabellón de luz: sillas de lino, un olivo detrás del vidrio, el sol de la mañana en el piso de roble"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-10 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-10">
          <p className="kicker">Clínica médica · Providencia</p>
          <h1 className="font-display mt-5 text-[clamp(3rem,8vw,6.6rem)] font-medium leading-[0.88] tracking-tight">
            Cuarenta y
            <br />
            cinco minutos.
            <br />
            <em className="italic text-sol">A la luz</em>
            <br />
            del día.
          </h1>
          <p className="mt-7 max-w-[36ch] text-[17px] leading-relaxed text-muted">
            Ocho especialistas en una casa de Los Conquistadores. Laboratorio
            propio. Honorarios a la vista. El cupo es el oficio: si el mes está
            lleno, se lo decimos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/agenda"
              className="font-sans inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel transition-colors hover:bg-sol-deep"
            >
              Pedir hora
            </Link>
            <a
              href={site.whatsapp}
              className="font-sans inline-flex h-12 items-center border border-ink px-6 text-[0.88rem] font-semibold tracking-wide transition-colors hover:border-sol hover:text-sol"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted lg:hidden">
            {site.address.line} · {site.address.city}
          </p>
        </div>

        <div className="slit relative hidden min-h-[100svh] lg:col-span-4 lg:block">
          <Image
            src="/images/pabellon.jpg"
            alt=""
            fill
            priority
            sizes="34vw"
            className="object-cover"
          />
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:justify-end lg:pb-16 lg:pl-10">
          <SantiagoClock />
          <p className="mt-8 text-[15px] leading-relaxed text-muted">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </p>
          <p className="font-sans mt-6 text-[12px] tracking-[0.16em] text-hoja uppercase">
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
      <div className="shell grid grid-cols-2 gap-y-8 py-9 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-medium tracking-tight lg:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 max-w-[18ch] text-[12px] tracking-[0.12em] text-muted uppercase">
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
          <p className="kicker">El oficio</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.4vw,3.7rem)] font-medium leading-[0.98] tracking-tight">
            No somos un mall médico. No somos un hospital.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-[1.75] text-muted">
            CLARO es una casa. Un pabellón de vidrio para esperar. Ocho salas.
            Un laboratorio que no viaja una semana. La consulta dura cuarenta y
            cinco minutos porque menos que eso no es una consulta: es un trámite.
          </p>
          <p className="mt-4 max-w-md text-[17px] leading-[1.75] text-muted">
            Elena se fue de un recinto donde la hora duraba doce. El resto del
            equipo la siguió. El cupo es el método.
          </p>
          <Link
            href="/clinica"
            className="font-sans mt-8 inline-flex items-center gap-2 text-[0.88rem] font-semibold tracking-wide text-sol"
          >
            La casa <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[3/4] lg:col-span-6 lg:col-start-7">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada de CLARO: casa de estuco crema, pabellón de vidrio y olivos, con los Andes al fondo"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="shell mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {principles.map((item) => (
          <Reveal key={item.n}>
            <p className="font-sans nums text-[12px] tracking-[0.18em] text-sol">
              {item.n}
            </p>
            <h3 className="font-display mt-3 text-[1.35rem] font-medium leading-tight">
              {item.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="kicker">Las salas</p>
          <h2 className="font-display mt-4 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-tight">
            Ocho puertas. Un pasillo corto.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            La planta no es un organigrama. Si hay que derivar, se camina. Pulse
            una sala.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 border border-line bg-papel p-4 sm:p-8">
          <HousePlan />
        </Reveal>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item) => (
            <Link
              key={item.slug}
              href={`/especialidades/${item.slug}`}
              className="group bg-luz p-6 transition-colors hover:bg-papel"
            >
              <p className="font-sans nums text-[12px] tracking-[0.18em] text-sol">
                {item.room}
              </p>
              <h3 className="font-display mt-3 text-[1.45rem] font-medium leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.short}</p>
              <p className="mt-4 text-[13px] text-sol opacity-0 transition-opacity group-hover:opacity-100">
                Ver sala →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh]">
        <Image
          src="/images/ventana.jpg"
          alt="Los Andes nevados, desde una ventana del segundo piso, a las ocho de la mañana"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
        <div className="shell relative flex min-h-[70vh] items-end py-16">
          <blockquote className="max-w-2xl text-papel">
            <p className="font-display text-[clamp(1.7rem,3.6vw,2.8rem)] font-medium leading-[1.15]">
              «Me fui de una clínica donde la hora duraba doce minutos. No se
              puede ejercer así y dormir en paz.»
            </p>
            <footer className="mt-6 text-[14px] tracking-wide">
              Dra. Elena Vargas Ossandón · Directora médica
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <p className="kicker">La mesa</p>
            <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-tight">
              Ocho nombres. Ningún pasillo anónimo.
            </h2>
          </Reveal>
          <Link
            href="/equipo"
            className="font-sans text-[0.88rem] font-semibold tracking-wide text-sol"
          >
            Todo el equipo →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.04}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-sans mt-4 text-[12px] tracking-[0.16em] text-sol uppercase">
                  {person.specialty}
                </p>
                <h3 className="font-display mt-1 text-[1.45rem] font-medium leading-tight group-hover:text-sol">
                  {person.shortName}
                </h3>
                <p className="mt-1 text-[14px] text-muted">{person.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="border-t border-line bg-luz-2 py-24 lg:py-32">
      <div className="shell grid items-start gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">La primera hora</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.3rem)] font-medium leading-[0.98] tracking-tight">
            Llega a una casa. No a una fila.
          </h2>
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-muted">
            Traiga el sobre de 2019. El pabellón no es una espera: es para
            sentarse. Recepción no le grita el apellido.
          </p>
          <Link
            href="/primera-consulta"
            className="font-sans mt-8 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
          >
            Cómo es venir →
          </Link>
        </Reveal>
        <ol className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
          {visitSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.05}>
              <p className="font-sans nums text-[12px] tracking-[0.18em] text-sol">
                {step.n}
              </p>
              <h3 className="font-display mt-2 text-[1.4rem] font-medium">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="relative aspect-[4/3] lg:col-span-6">
          <Image
            src="/images/laboratorio.jpg"
            alt="Laboratorio de CLARO: mesón de piedra, microscopio y la luz del patio"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <p className="kicker">Laboratorio</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.3rem)] font-medium leading-[0.98] tracking-tight">
            La muestra no viaja una semana.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Hemograma, perfil, HbA1c, tiroides: el mismo día. ECG en la
            consulta. Holter, MAPA y eco con hora en esta casa. El informe se
            lee con usted, no se manda como un adjunto.
          </p>
          <Link
            href="/laboratorio"
            className="font-sans mt-8 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
          >
            Aranceles a la vista →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="kicker">Voces</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.3rem)] font-medium leading-[0.98] tracking-tight">
            Lo que se puede decir en voz alta.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05} className="border-t border-line pt-8">
              <p className="font-display text-[1.45rem] font-medium leading-[1.35]">
                «{item.text}»
              </p>
              <p className="mt-5 text-[13px] tracking-wide text-muted">
                {item.name} · {item.meta}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border border-line bg-papel px-6 py-8">
          <p className="kicker">Previsión</p>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
            Atendemos de forma particular. Boleta electrónica el mismo día, con
            código de prestación para el reembolso de su isapre o Fonasa.
          </p>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink/80">
            {isapres.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </p>
          <Link
            href="/convenios"
            className="font-sans mt-6 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
          >
            Cómo se paga →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Llegar() {
  return (
    <section className="border-t border-line bg-luz-2">
      <div className="shell grid lg:grid-cols-12">
        <div className="flex flex-col justify-center py-20 lg:col-span-5 lg:py-28 lg:pr-12">
          <p className="kicker">Llegar</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.3rem)] font-medium leading-[0.98] tracking-tight">
            Los Conquistadores 2170.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Providencia, al norte del Mapocho. {site.metro}. Estacionamiento en
            el predio, cuatro cupos. El pabellón se ve desde la calle.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed">
            {site.hours}
            <br />
            {site.phone}
            <br />
            {site.email}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/agenda"
              className="font-sans inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
            >
              Pedir hora
            </Link>
            <Link
              href="/contacto"
              className="font-sans inline-flex h-12 items-center border border-ink px-6 text-[0.88rem] font-semibold tracking-wide"
            >
              Cómo llegar
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:col-span-7">
          <Image
            src="/images/patio.jpg"
            alt="Patio de olivos de CLARO, con el pabellón de vidrio a la derecha"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
