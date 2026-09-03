import Image from "next/image";
import { pasos } from "@/lib/site";
import { ChapterHead } from "./chapter-head";
import { Reveal } from "./reveal";

export function ComoPartimos() {
  return (
    <section
      id="como-partimos"
      className="chapter"
      aria-labelledby="pasos-title"
    >
      <div className="shell g12">
        <ChapterHead
          kicker="02 / Cómo partimos"
          title="Sabes qué pasa mañana a las 9:00."
          id="pasos-title"
        />
        <Reveal className="materias-intro">
          <p className="lede">
            Viabilidad en la primera reunión. Diagnóstico en 24–48h. Estrategia
            por escrito.
          </p>
        </Reveal>
        <div className="pasos">
          {pasos.map((p, i) => (
            <Reveal key={p.num} className="paso" delay={i * 0.08}>
              <span className="paso-num nums">{p.num}</span>
              <span className="paso-rule" />
              <h3>
                {p.num} — {p.title}
              </h3>
              <p>{p.body}</p>
              <p className="caption">Entrega</p>
              <p className="entrega">{p.entrega}</p>
            </Reveal>
          ))}
        </div>
        <div className="mesa-band">
          <Image
            src="/media/mesa.jpg"
            alt="Mesa de reunión vacía de nogal, sillas en lino hueso y una hoja con lápiz bajo lámpara cálida"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
