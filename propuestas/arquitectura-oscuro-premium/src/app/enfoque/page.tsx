import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { materials, principles, process } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Enfoque",
  description:
    "Cómo trabaja ORILLA: borde, materia y sismo. Un proceso claro, del terreno a habitar la obra.",
};

export default function EnfoquePage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="shell py-12 md:py-16">
        <Reveal>
          <p className="kicker">Enfoque</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
            El predio decide.
            <br />
            <em className="italic text-copper">Nosotros escuchamos.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-paper-dim">
            No partimos de un estilo. Partimos de un corte: el terreno, el
            viento, el sismo, la materia que ya está. El resto es oficio.
          </p>
        </Reveal>
      </section>

      <section className="shell grid gap-6 md:grid-cols-2">
        <Reveal variant="img-mask">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src="/images/materia.jpg"
              alt="Encuentro de hormigón tabla y cobre oxidado"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal variant="img-mask" delay={80}>
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src="/images/modelo.jpg"
              alt="Maqueta de arquitectura sobre mesa de nogal"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="shell py-20">
        <Reveal>
          <p className="kicker">Tres principios</p>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 80}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-copper">
                {item.number}
              </p>
              <h2 className="mt-4 font-display text-4xl italic">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-paper-dim">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink">
        <div className="shell py-20">
          <Reveal>
            <p className="kicker">Proceso</p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
              Del terreno a habitar
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-paper-dim">
              Un encargo típico dura entre catorce y treinta meses. No hay
              magia: hay etapas, oficios, permiso de edificación y presencia
              en obra.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <li key={step.number} className="bg-ink p-8">
                <Reveal delay={index * 50}>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-copper">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-display text-3xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-paper-dim">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell py-20">
        <Reveal>
          <p className="kicker">Paleta</p>
          <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
            Materia que envejece
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-copper">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paper-dim">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell grid items-center gap-12 pb-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src="/images/escuela-calama-int.jpg"
              alt="Galería de ladrillo perforado de la Escuela Calama"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <p className="kicker">Encargos</p>
          <h2 className="mt-4 font-display text-4xl leading-tight">
            Qué tomamos
            <br />
            <em className="italic text-copper">y qué no.</em>
          </h2>
          <p className="mt-6 text-sm leading-7 text-paper-dim">
            Trabajamos residencial, hospitalidad, cultura, productivo y espacio
            público. Preferimos encargos donde el predio importa y hay tiempo
            para la materia. No hacemos interiores sueltos ni proyectos que se
            resuelven solo en render.
          </p>
          <p className="mt-4 text-sm leading-7 text-paper-dim">
            Honorarios en UF, por escrito. Si hay un predio, un presupuesto
            honesto y una pregunta clara, escríbenos. La primera conversación
            no se cobra.
          </p>
          <Link href="/contacto" className="mt-8 inline-flex btn btn-primary">
            Empezar un proyecto
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
