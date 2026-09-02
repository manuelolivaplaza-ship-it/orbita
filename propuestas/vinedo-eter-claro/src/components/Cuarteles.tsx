export function Cuarteles() {
  return (
    <section id="cuarteles-terroir-detalle" className="cuarteles" aria-label="Cuarteles y terroir">
      <div className="cuarteles__inner">
        <div className="cuarteles__header">
          <p className="cuarteles__kicker">TERROIR EN 3 CORTES</p>
          <h2 className="cuarteles__title">La ladera manda. Nosotros podamos.</h2>
          <p className="cuarteles__bajada">
            Espaldera baja a 90 cm, poda a pitón, riego deficitario. Cada cuartel se vinifica aparte. No hay ensamblaje correctivo.
          </p>
        </div>
        <div className="cuarteles__grid">
          <article className="cuartel-card">
            <h3 className="cuartel-card__name">Cuartel 1 — Maicillo Alto (0,9 ha)</h3>
            <p className="cuartel-card__datos">210 msnm · Exposición norte · Suelo maicillo granítico</p>
            <p className="cuartel-card__texto">Sauvignon Blanc de hilera corta. Acidez marcada, salinidad de granito.</p>
            <p className="cuartel-card__variedad">Sauvignon Blanc · 2024</p>
          </article>
          <article className="cuartel-card">
            <h3 className="cuartel-card__name">Cuartel 2 — Arcilla Húmeda (1,2 ha)</h3>
            <p className="cuartel-card__datos">165 msnm · Exposición nororiente · Arcilla + cuarzo</p>
            <p className="cuartel-card__texto">Pinot Noir de pie franco. Racimo suelto, tanino fino.</p>
            <p className="cuartel-card__variedad">Pinot Noir · 2023</p>
          </article>
          <article className="cuartel-card">
            <h3 className="cuartel-card__name">Cuartel 3 — Pedregoso (0,7 ha)</h3>
            <p className="cuartel-card__datos">245 msnm · Exposición poniente · Coluvial pedregoso</p>
            <p className="cuartel-card__texto">Syrah de ladera. Piel gruesa, pimienta y maqui.</p>
            <p className="cuartel-card__variedad">Syrah · 2023</p>
          </article>
        </div>
        <p className="cuarteles__nota">
          Manejo orgánico no certificado. Surco barrido, cubierta vegetal en invierno. Vendimia manual en gamelas de 14 kg.
        </p>
      </div>
    </section>
  );
}
