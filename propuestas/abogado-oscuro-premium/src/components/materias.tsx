import Image from "next/image";
import { materias } from "@/lib/site";
import { ChapterHead } from "./chapter-head";
import { Reveal } from "./reveal";

export function Materias() {
  return (
    <section id="materias" className="chapter" aria-labelledby="materias-title">
      <div className="shell g12">
        <ChapterHead
          kicker="01 / Materias"
          title="Materias acotadas. Lo que hacemos, y lo que no."
          id="materias-title"
        />
        <Reveal className="materias-intro">
          <p className="lede">
            Solo estas cuatro materias. Materias acotadas = criterio, no
            catálogo infinito. Si tu caso no calza, te derivamos con honestidad.
          </p>
        </Reveal>
        <div className="media-band">
          <Image
            src="/media/biblioteca.jpg"
            alt="Lomos de códigos y repertorios jurídicos en estantería de nogal, bajo lámpara cálida nocturna"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="materias-grid">
          {materias.map((m, i) => (
            <Reveal key={m.num} delay={i * 0.06} className="materia">
              <span className="mk nums">
                {m.num} — {m.kicker}
              </span>
              <h3>{m.title}</h3>
              <p>{m.lead}</p>
              <p className="caption">Cuándo nos llamas</p>
              <ul>
                {m.when.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
