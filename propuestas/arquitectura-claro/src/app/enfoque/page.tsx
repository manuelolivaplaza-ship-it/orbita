import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { principles, process } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Enfoque",
  description:
    "Cómo trabaja VETA: lugar, materia y luz. Un proceso claro, de la primera conversación a habitar la obra.",
};

export default function EnfoquePage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Enfoque
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
            El sitio decide.
            <br />
            <em>Nosotros escuchamos.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
            No partimos de un estilo. Partimos de un corte: el terreno, el
            viento, la luz, la materia que ya está. El resto es oficio.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-6 px-5 md:grid-cols-2 md:px-8 lg:px-10">
        <Reveal variant="img-mask">
          <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
            <Image
              src="/images/materia.jpg"
              alt="Encuentro de hormigón y piedra"
              fill
              priority
              loading="eager"
              sizes="50vw"
              className="img-zoom object-cover"
            />
          </div>
        </Reveal>
        <Reveal variant="img-mask" delay={80}>
          <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
            <Image
              src="/images/modelo.jpg"
              alt="Maqueta de arquitectura"
              fill
              sizes="50vw"
              className="img-zoom object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Tres principios
          </p>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 80}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-accent">
                {item.number}
              </p>
              <h2 className="mt-4 font-display text-4xl italic">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-soft">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Proceso
            </p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
              De la conversación a habitar
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">
              Un encargo típico dura entre catorce y treinta meses. No hay
              magia: hay etapas, oficios y presencia en obra.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <li key={step.number} className="bg-paper-2 p-8">
                <Reveal delay={index * 50}>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-accent">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-display text-3xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink-soft">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
              <Image
                src="/images/escuela-litoral-interior.jpg"
                alt="Claustro de ladrillo de la Escuela Litoral"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Encargos
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Qué tomamos
              <br />
              <em>y qué no.</em>
            </h2>
            <p className="mt-6 text-sm leading-7 text-ink-soft">
              Trabajamos residencial, hospitalidad, cultura, productivo y
              espacio público. Preferimos encargos donde el sitio importa y
              hay tiempo para la materia. No hacemos interiores sueltos ni
              proyectos que se resuelven solo en render.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Si hay un predio, un presupuesto honesto y una pregunta clara,
              escribinos. La primera conversación no se cobra.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center bg-ink px-8 text-[11px] uppercase tracking-[0.22em] text-paper transition hover:bg-accent"
            >
              Empezar un proyecto
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
