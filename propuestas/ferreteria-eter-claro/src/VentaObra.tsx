import { useState } from "react";

const INTERIOR = "/media/eter-interior-16x9.png";

export function VentaObra() {
  const [err, setErr] = useState(false);
  return (
    <section id="venta-a-obra" className="sec-venta" aria-label="Venta a obra">
      <div className="wrap">
        <p className="eyebrow">VENTA A OBRA</p>
        <h2 className="h2">Factura, despacho a faena y crédito si eres empresa.</h2>
        <div className="venta-cols">
          <div className="venta-col">
            <span className="venta-n">01 — Cotiza</span>
            <h3 className="venta-h3">En 2 minutos por WhatsApp</h3>
            <p className="venta-p">Manda medida y comuna, te respondemos con precio cerrado. Humana 07:30–18:00.</p>
          </div>
          <div className="venta-col">
            <span className="venta-n">02 — Confirma</span>
            <h3 className="venta-h3">Factura o boleta al tiro</h3>
            <p className="venta-p">RUT y OC si eres empresa. Crédito 30 días con evaluación (sin letra chica).</p>
          </div>
          <div className="venta-col">
            <span className="venta-n">03 — Recibe</span>
            <h3 className="venta-h3">En obra mañana o retiro en mesón</h3>
            <p className="venta-p">Despacho 24h RM por comuna, retiro mismo día en 10 de Julio y Puente Alto.</p>
          </div>
        </div>

        <div className="venta-media">
          {!err ? (
            <img src={INTERIOR} alt="Bodega Santiago pasillo de perfiles rotulados" loading="lazy" decoding="async" onError={() => { setErr(true); console.warn("[ETER] falta eter-interior-16x9.png"); }} />
          ) : (
            <div className="media-falta" data-falta="eter-interior-16x9.png" style={{ aspectRatio: "16/9" }}>falta eter-interior-16x9.png</div>
          )}
          <p className="venta-caption">Bodega Santiago · pasillo de perfiles rotulados · 07:45</p>
        </div>
      </div>
    </section>
  );
}
