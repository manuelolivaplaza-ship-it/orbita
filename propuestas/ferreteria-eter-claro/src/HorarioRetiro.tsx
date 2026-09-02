import { useState } from "react";

const HERR = "/media/eter-tile-herramientas-3x4.png";

export function HorarioRetiro() {
  const [err, setErr] = useState(false);
  return (
    <section id="horario-retiro" className="sec-horario" aria-label="Horario retiro">
      <div className="wrap">
        <div className="horario-grid">
          <div className="horario-text">
            <h2 className="h2">Horario de obra, no de mall.</h2>
            <ul className="horario-list">
              <li>Lun–Vie 7:30–18:00 · Sáb 8:00–13:00 · Dom cerrado (despacho RM sí sale)</li>
              <li>Retiro en mesón con RUT y número de cotización — sin fila eterna</li>
              <li>Despacho RM por comuna: $4.900–$14.900 según tramo y kilos</li>
              <li>Corte y doblado de fierro sin costo hasta 6 m</li>
            </ul>
            <p className="horario-micro">Si vienes a las 07:30, alcanzas a estar en obra a las 09:00.</p>
          </div>
          <div className="horario-media">
            {!err ? (
              <img src={HERR} alt="Esmeril angular 4.5 pulgadas con discos sobre mesón" loading="lazy" decoding="async" onError={() => { setErr(true); console.warn("[ETER] falta eter-tile-herramientas-3x4.png"); }} />
            ) : (
              <div className="media-falta" data-falta="eter-tile-herramientas-3x4.png" style={{ aspectRatio: "3/4" }}>falta eter-tile-herramientas-3x4.png</div>
            )}
            <span className="horario-caption">Set esmeril + discos · ficha al cotizar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
