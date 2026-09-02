import { MediaTile } from "./MediaTile";

export function CasosIndustria() {
  return (
    <section id="casos-industria" className="section">
      <div className="grid">
        <div className="casos-intro">
          <h2 className="section-h2">Casos por industria (Chile).</h2>
          <p className="section-bajada">Ejemplos anónimos de lo que hemos entregado. Sin nombres inventados ni logos pegados.</p>
        </div>

        <div className="casos-grid">
          <div className="caso-card">
            <span className="caso-label">RETAIL · SANTIAGO</span>
            <h3 className="caso-title">Integración SII DTE + stock en 6 semanas</h3>
            <ul className="caso-bullets">
              <li>· 2.400 DTE/mes · Stock sincronizado Bsale–WMS · Tiempo facturación 4min → 40seg</li>
            </ul>
            <span className="caso-stack">Node · PostgreSQL · AWS</span>
          </div>

          <div className="caso-card">
            <span className="caso-label">LOGÍSTICA · REGIONES</span>
            <h3 className="caso-title">Trazabilidad de despacho con prueba de entrega</h3>
            <ul className="caso-bullets">
              <li>· 18k entregas/mes · Foto + firma + geotag · Reclamos -42%</li>
            </ul>
          </div>

          <div className="caso-card">
            <span className="caso-label">SERVICIOS · B2B</span>
            <h3 className="caso-title">Cotizador mayorista con lista y mínimos</h3>
            <ul className="caso-bullets">
              <li>· 850 SKUs · Cotización en 2min · Lista PDF automática</li>
            </ul>
          </div>

          <div className="caso-card">
            <span className="caso-label">SALUD PRIVADA</span>
            <h3 className="caso-title">Agenda + recordatorio WhatsApp + ficha</h3>
            <ul className="caso-bullets">
              <li>· No-show -31% · Confirmación +48h y +2h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <p className="casos-nota">¿Tu rubro no está? Hemos trabajado retail, logística, servicios y salud; si no calzamos te derivamos.</p>
          <div style={{ marginTop: 18 }}>
            <MediaTile
              filename="cordillera-tile-04.png"
              alt="Pizarra blanca borrosa con trazos de flujo sobre caballete de roble"
              className="casos-media"
              style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", border: "1px solid var(--line)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
