import { MediaTile } from "./MediaTile";

export function Engagement() {
  return (
    <section id="engagement" className="section">
      <div className="grid engagement-grid">
        {/* intro 4 col */}
        <div className="engagement-intro">
          <div className="engagement-tile-wrap">
            <MediaTile
              filename="cordillera-tile-01.png"
              alt="Detalle del hilo de cobre tensado sobre pliegue de papel microcorrugado blanco"
              className="engagement-tile"
              style={{ width: 80, height: 80, objectFit: "cover", border: "1px solid var(--line)" }}
            />
          </div>
          <h2 className="section-h2">Elige cómo trabajamos.</h2>
          <p className="section-bajada">
            No vendemos horas sueltas. Eliges un modelo con equipo, plazos y entregables claros.
          </p>
        </div>

        {/* tabla 8 col */}
        <div className="engagement-table" role="list">
          {/* Fila 1 */}
          <div className="eng-row" role="listitem" style={{ animationDelay: "0ms" }}>
            <div className="eng-row-top">
              <span className="eng-tag">MÁS ELEGIDO</span>
              <h3 className="eng-row-title">Squad mensual</h3>
            </div>
            <p className="eng-row-desc">
              Equipo dedicado 3–5 personas (PM + devs + QA). Roadmap quincenal, demo cada 2 semanas.
            </p>
            <div className="eng-precio">desde $4.900.000 CLP/mes</div>
            <p className="eng-micro">contrato mensual, sin permanencia; se ajusta por seniority</p>
          </div>

          {/* Fila 2 */}
          <div className="eng-row" role="listitem" style={{ animationDelay: "60ms" }}>
            <div className="eng-row-top">
              <h3 className="eng-row-title">Proyecto cerrado</h3>
            </div>
            <p className="eng-row-desc">
              Alcance fijo con hitos y garantía de entrega. Ideal ERP, integración SII/Previred, migración.
            </p>
            <div className="eng-precio">desde $12.500.000 CLP</div>
            <p className="eng-micro">pago por hitos 30/40/30; incluye 30 días de estabilización</p>
          </div>

          {/* Fila 3 */}
          <div className="eng-row" role="listitem" style={{ animationDelay: "120ms" }}>
            <div className="eng-row-top">
              <h3 className="eng-row-title">Staff augmentation</h3>
            </div>
            <p className="eng-row-desc">Un dev o dos que se suman a tu equipo, con code review de Cordillera.</p>
            <div className="eng-precio">desde $2.850.000 CLP/mes por dev</div>
            <p className="eng-micro">contrato mínimo 2 meses; reemplazo en 10 días si no calza</p>
          </div>

          <p className="eng-nota">
            Valores referenciales sin IVA; se confirman tras discovery de 30 min y estimación por puntos de historia.
          </p>

          <a href="#presupuesto" className="eng-cta">
            Cotiza tu modelo →
          </a>
        </div>
      </div>
    </section>
  );
}
