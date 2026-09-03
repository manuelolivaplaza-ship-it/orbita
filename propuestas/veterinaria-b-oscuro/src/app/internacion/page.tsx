import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site, ward } from "@/lib/site";

export const metadata: Metadata = {
  title: "Internación",
  description:
    "Internación veterinaria 24 horas en Farol, Ñuñoa. Guardia presencial, parte diario a la familia y ronda de las 03:00.",
};

const rules = [
  {
    title: "Un médico despierto",
    text: "La internación no es una jaula con un teléfono de guardia pasiva. Hay un médico en el edificio. La ronda de las 03:00 se hace.",
  },
  {
    title: "Parte a la familia",
    text: "Dos veces al día, o cuando algo cambia. Preferimos una llamada difícil a un silencio hasta el alta.",
  },
  {
    title: "Visitas coordinadas",
    text: "Se agendan para no cruzar con curaciones ni el descanso. No es un hotel. Es un hospital chico.",
  },
  {
    title: "Gatos aparte",
    text: "La UCI felina no comparte ladridos. Un gato internado al lado de un perro que gime no descansa, y no se recupera.",
  },
] as const;

export default function InternacionPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="04"
        kicker="Internación"
        title="Alguien despierto a las tres."
        lede="Fluidos, dolor, alimentación, compañía. Internamos cuando el tratamiento en casa no alcanza. Desde $89.000 el día, con presupuesto escrito."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <Reveal className="img-zoom relative aspect-[4/3]">
          <Image
            src="/images/internacion.jpg"
            alt="Sala de internación de Farol de noche"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="img-zoom relative aspect-[4/3]" delay={0.08}>
          <Image
            src="/images/ronda.jpg"
            alt="Médico de Farol en la ronda nocturna del pasillo"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <section className="mt-20 grid gap-10 sm:grid-cols-2">
        {rules.map((r) => (
          <article key={r.title} className="border-t border-line pt-6">
            <h2 className="font-display text-2xl leading-tight">{r.title}</h2>
            <p className="mt-3 text-paper-dim">{r.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <Reveal>
          <p className="kicker">Pizarra</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.1rem)] leading-[0.95]">
            Así se ve una noche. Los nombres, cambiados.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 lg:grid-cols-3">
          {ward.map((w, i) => (
            <li key={w.name} className="border border-line bg-ink p-8">
              <p className="kicker tabular">0{i + 1}</p>
              <p className="mt-3 font-display text-3xl">{w.name}</p>
              <p className="mt-1 text-sm text-lantern">{w.detail}</p>
              <p className="mt-4 text-paper-dim">{w.note}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[48ch] text-sm text-muted">
          La pizarra real no se publica. Esta es la forma: especie, edad,
          problema, lo que se está haciendo, y a qué hora se avisó a la casa.
        </p>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <a href={site.phoneHref} className="btn btn-primary">
          Hablar con la guardia
        </a>
        <Link href="/urgencias" className="btn btn-ghost">
          Protocolo de urgencia
        </Link>
      </div>
    </div>
  );
}
