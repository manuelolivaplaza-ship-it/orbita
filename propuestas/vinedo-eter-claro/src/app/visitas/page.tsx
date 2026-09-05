import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { VisitForm } from "@/components/visit-form";
import { visits } from "@/data/content";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Visitas",
  description:
    "Cata Niebla, recorrido de cuarteles, mesa en el viñedo y cava privada. Cupo visible, horario respetado. Casablanca.",
};

export default function VisitasPage() {
  return (
    <>
      <PageIntro
        kicker="Enoturismo"
        title="Reserva con horario. Llegas y hay copa."
        lead="Cupo actualizado cada mañana. Si tu horario se llena después de reservar, te reubicamos en dos horas hábiles."
      />

      <section className="relative aspect-[16/9] overflow-hidden">
        <Image
          src="/images/cata.jpg"
          alt="Sala de cata de ETER: cuatro copas alineadas, lino y ventanas a la niebla"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="shell divide-y divide-linea py-8">
        {visits.map((visit) => (
          <article
            key={visit.slug}
            id={visit.slug}
            className="grid gap-8 py-16 md:grid-cols-12"
          >
            <p className="font-mono text-[0.62rem] text-hoja md:col-span-1">
              {visit.n}
            </p>
            <div className="md:col-span-7">
              <h2 className="font-display text-5xl tracking-tight">{visit.name}</h2>
              <p className="mt-4 max-w-[46ch] text-lg text-tinta-suave">
                {visit.lead}
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-gris">
                    Incluye
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {visit.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-gris">
                    No incluye
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-tinta-suave">
                    {visit.not.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <aside className="md:col-span-4">
              <p className="nums font-display text-4xl">
                {formatCLP(visit.price)}
              </p>
              <p className="mt-1 text-sm text-gris">
                {visit.slug === "cava-privada" ? "el grupo, hasta 8" : "por persona"}
              </p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between border-b border-linea pb-2">
                  <dt className="text-gris">Duración</dt>
                  <dd>{visit.duration}</dd>
                </div>
                <div className="flex justify-between border-b border-linea pb-2">
                  <dt className="text-gris">Cupo</dt>
                  <dd>máx. {visit.cupo}</dd>
                </div>
                <div className="flex justify-between pb-1">
                  <dt className="text-gris">Horarios</dt>
                  <dd className="text-right">{visit.schedule}</dd>
                </div>
              </dl>
            </aside>
          </article>
        ))}
      </section>

      <section className="border-t border-linea bg-papel-2">
        <div className="shell grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="kicker">Reserva</p>
            <h2 className="mt-4 font-display text-5xl tracking-tight">
              Elige día y hora.
            </h2>
            <p className="mt-6 text-tinta-suave">
              {site.address.line1}, {site.address.commune}. {site.access}.
            </p>
            <p className="mt-4 nums text-2xl">{site.phone}</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <VisitForm />
          </div>
        </div>
      </section>
    </>
  );
}
