import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Chapter } from "@/components/reveal";
import { VisitForm } from "@/components/visit-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservar visita",
  description:
    "Agenda una visita individual de 40 minutos a Obsidiana, club de entrenamiento privado en Vitacura.",
};

export default function VisitaPage() {
  return (
    <>
      <PageHero
        chapter="06"
        kicker="Visita"
        title={
          <>
            Cuarenta minutos.
            <span className="italic"> Una conversación.</span>
          </>
        }
        lead="No es una clase de prueba. Es un recorrido del recinto con un coach. Si hay cupo, se abre la postulación."
        image="/images/reception.jpg"
        imageAlt="Umbral de Obsidiana"
      />

      <section className="px-5 py-28 md:px-8 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Chapter n="I" label="Qué esperar" />
            <h2 className="mt-8 font-serif text-4xl tracking-tight md:text-5xl">
              Llegas. Caminas. Hablas.
            </h2>
            <ol className="mt-12 space-y-8">
              {[
                {
                  t: "Umbral",
                  d: "Te recibe recepción. Café de grano. Sin ficha interminable en un iPad.",
                },
                {
                  t: "El piso",
                  d: "Un coach te muestra el recinto: fuerza, studio, suite térmica, vestidores.",
                },
                {
                  t: "La conversación",
                  d: "Cómo entrenas, qué te rompió antes, qué esperas de los próximos dos años.",
                },
                {
                  t: "El cierre",
                  d: "Si hay cupo y el recinto te calza, te dejamos los pasos. Si no, te lo decimos.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-5">
                  <span className="font-mono text-[0.62rem] tracking-[0.2em] text-copper">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-serif text-2xl">{s.t}</p>
                    <p className="mt-2 text-ivory-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-14 border-t border-line pt-8 text-ivory-soft">
              <p className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
                Recinto
              </p>
              <p className="mt-3 text-ivory">
                {site.address}
                <br />
                {site.comuna}, Santiago
              </p>
              <p className="mt-4 font-mono text-sm tracking-wide">
                {site.phoneDisplay}
              </p>
              <a
                href={site.whatsapp}
                className="mt-6 inline-block font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase link-line"
                target="_blank"
                rel="noreferrer"
              >
                Prefiero WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <VisitForm />
          </div>
        </div>
      </section>
    </>
  );
}
