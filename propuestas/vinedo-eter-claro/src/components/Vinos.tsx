import { useState } from "react";

type Filtro = "Todos" | "Blanco" | "Tinto" | "Rosé";

const FILTROS: Filtro[] = ["Todos", "Blanco", "Tinto", "Rosé"];

type Vino = {
  id: string;
  filename: string;
  nombre: string;
  detalle: string;
  nota: string;
  precio: string;
  ratio: "1:1" | "3:4";
};

const VINOS: Vino[] = [
  {
    id: "maicillo",
    filename: "eter-tile-01-1x1.png",
    nombre: "Maicillo — Sauvignon Blanc 2024",
    detalle: "Cuartel 1 · 12,5° · Acero 4 meses",
    nota: "Pomelo, sal de mar y tiza. Final largo.",
    precio: "$10.900",
    ratio: "1:1",
  },
  {
    id: "arcilla",
    filename: "eter-tile-02-1x1.png",
    nombre: "Arcilla — Pinot Noir 2023",
    detalle: "Cuartel 2 · 13° · Fudre 9 meses",
    nota: "Guinda, hongo y tierra húmeda. Tanino de tiza.",
    precio: "$18.500",
    ratio: "1:1",
  },
  {
    id: "pedregoso",
    filename: "eter-tile-03-3x4.png",
    nombre: "Pedregoso — Syrah 2023",
    detalle: "Cuartel 3 · 13,5° · Fudre 11 meses",
    nota: "Arándano, pimienta negra y laurel.",
    precio: "$19.900",
    ratio: "3:4",
  },
  {
    id: "rose",
    filename: "eter-interior-16x9.png",
    nombre: "Rosé de Ladera — Pinot Noir 2024",
    detalle: "Cuartel 2 · 12° · Sangrado directo",
    nota: "Frutilla, pomelo rosa. Seco.",
    precio: "$12.900",
    ratio: "1:1",
  },
];

function VinoMedia({ vino }: { vino: Vino }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="media-falta" data-falta={vino.filename}>
        falta: {vino.filename}
      </div>
    );
  }
  const aspect = vino.ratio === "3:4" ? "3 / 4" : "1 / 1";
  return (
    <div className="vino-card__media-wrap" style={{ aspectRatio: aspect }}>
      <img
        src={`/media/${vino.filename}`}
        alt=""
        className="vino-card__media"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Vinos() {
  const [active, setActive] = useState<Filtro>("Todos");
  return (
    <section id="vinos-de-parcela" className="vinos" aria-label="Vinos de parcela">
      <div className="vinos__inner">
        <div className="vinos__header">
          <p className="vinos__kicker">VINOS DE PARCELA · AÑADA ACTUAL</p>
          <h2 className="vinos__title">Pocas botellas. Cada una con su cuartel.</h2>
          <p className="vinos__bajada">Vinificación parcela por parcela. Sin paso por barrica nueva. Guarda en fudre de 500L o acero.</p>
        </div>

        <div className="vinos__filtros" role="group" aria-label="Filtrar vinos">
          {FILTROS.map((f) => (
            <button
              key={f}
              type="button"
              className="vino-chip"
              data-active={active === f ? "true" : "false"}
              aria-pressed={active === f}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="vinos__grid">
          {VINOS.map((vino) => (
            <article key={vino.id} className="vino-card">
              <VinoMedia vino={vino} />
              <div className="vino-card__body">
                <h3 className="vino-card__name">{vino.nombre}</h3>
                <p className="vino-card__detalle">{vino.detalle}</p>
                <p className="vino-card__nota">{vino.nota}</p>
                <p className="vino-card__precio">
                  <span className="vino-card__precio-valor">{vino.precio}</span>
                  <span className="vino-card__precio-suffix"> / botella 750ml</span>
                </p>
                <a href="#reserva-cata" className="vino-card__cta">
                  Comprar →
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="vinos__nota">Valores referenciales con IVA. Se confirma al comprar. Despacho RM 48–72h, regiones 72–96h. Stock acotado por añada.</p>
        <p className="vinos__micro">¿Dudas? Escríbenos y te armamos caja mixta por WhatsApp.</p>
      </div>
    </section>
  );
}
