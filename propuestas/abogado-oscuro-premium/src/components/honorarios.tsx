import Image from "next/image";
import { honorarios } from "@/lib/site";
import { ChapterHead } from "./chapter-head";
import { Reveal } from "./reveal";

export function Honorarios() {
  return (
    <section
      id="honorarios"
      className="chapter"
      aria-labelledby="honorarios-title"
    >
      <div className="shell g12">
        <ChapterHead
          kicker="03 / Honorarios"
          title="Honorarios por escrito, desde."
          id="honorarios-title"
        />
        <Reveal className="materias-intro">
          <p className="lede">
            Valores referenciales en CLP. El valor final se fija por escrito
            tras reunión. Facilidades en cuotas.
          </p>
        </Reveal>
        <div className="fee-layout">
          <div className="fee-still">
            <Image
              src="/media/expediente.jpg"
              alt="Expediente cerrado con cinta de algodón hueso y sello de lacre en penumbra"
              fill
              sizes="220px"
            />
          </div>
          <div className="fee-table" role="table" aria-label="Honorarios">
            <div className="fee-head" role="row">
              <span role="columnheader">Servicio</span>
              <span role="columnheader">Desde</span>
            </div>
            {honorarios.map((row) => (
              <div className="fee-row" role="row" key={row.servicio}>
                <div role="cell">
                  <span className="fee-label">{row.servicio}</span>
                  <span className="fee-note">{row.nota}</span>
                </div>
                <span className="fee-price nums" role="cell">
                  {row.precio}
                </span>
              </div>
            ))}
            <p className="fee-foot">
              <span className="dot" aria-hidden="true" />
              Valores referenciales según complejidad y jurisdicción; honorario
              final se fija por escrito tras reunión. Facilidades de pago en
              cuotas. Sin sorpresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
