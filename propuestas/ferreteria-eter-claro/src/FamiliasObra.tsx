import { useState } from "react";

const TILE_FIERRO = "/media/eter-tile-fierro-1x1.png";
const TILE_TABLERO = "/media/eter-tile-tablero-1x1.png";

type Familia = {
  n: string;
  nombre: string;
  sub: string;
  medida: string;
  precio: string;
  thumb?: string;
};

const FAMILIAS: Familia[] = [
  { n: "01", nombre: "Fierro y perfiles", sub: "Cuadrado, rectangular, ángulo, C", medida: "40×40×2 mm · tira 6 m", precio: "$18.900 / tira 6 m IVA inc.", thumb: TILE_FIERRO },
  { n: "02", nombre: "Pernos y fijaciones", sub: "Hexagonal, anclaje, autoperforante", medida: "M10×40 galv. · ciento", precio: "desde $8.900 / ciento" },
  { n: "03", nombre: "Maderas y tableros", sub: "Terciado, OSB, pino dimensionado", medida: "Terciado 15 mm · 1.22×2.44", precio: "desde $28.500 / plancha", thumb: TILE_TABLERO },
  { n: "04", nombre: "Cemento y áridos", sub: "Melón, grava, arena", medida: "Cemento 25 kg", precio: "desde $6.490 / saco" },
  { n: "05", nombre: "Planchas y zinc", sub: "Acanelado, 5V, liso", medida: "Zinc 0.35 mm · 3 m", precio: "desde $12.900 / plancha" },
  { n: "06", nombre: "Herramientas y EPP", sub: "Esmeril, taladro, casco, guante", medida: "Esmeril 4.5» 750 W", precio: "desde $39.900 / unidad" },
];

function Thumb({ src, alt, file }: { src: string; alt: string; file: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    console.warn(`[ETER] falta ${file} en public/media/`);
    return <div className="media-falta fam-thumb-falta" data-falta={file} style={{ width: 72, height: 72, flexShrink: 0, aspectRatio: "1/1" }}>falta {file}</div>;
  }
  return <img src={src} alt={alt} className="fam-thumb" width={72} height={72} onError={() => setErr(true)} loading="lazy" decoding="async" />;
}

export function FamiliasObra() {
  return (
    <section id="familias-obra" className="sec-familias" aria-label="Familias obra">
      <div className="wrap">
        <p className="eyebrow">FAMILIAS</p>
        <h2 className="h2">Todo lo que pide la obra, rotulado.</h2>
        <p className="sub">Elige familia, ve medida y precio al tiro. Sin catálogo infinito.</p>

        <div className="familias-grid">
          {FAMILIAS.map((f) => (
            <a key={f.n} href="#ficha-tecnica" className="fam-card">
              <div className="fam-left">
                {f.thumb ? <Thumb src={f.thumb} alt={f.nombre} file={f.thumb.split("/").pop()!} /> : null}
                <div className="fam-text">
                  <span className="fam-n">{f.n}</span>
                  <h3 className="fam-nombre">{f.nombre}</h3>
                  <span className="fam-sub">{f.sub}</span>
                  <span className="fam-medida">{f.medida}</span>
                </div>
              </div>
              <div className="fam-right">
                <span className="fam-precio">{f.precio}</span>
                <span className="fam-stock">STOCK RM</span>
                <span className="fam-arrow" aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
