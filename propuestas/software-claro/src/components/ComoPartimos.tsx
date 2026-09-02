import { MediaTile } from "./MediaTile";

export function ComoPartimos() {
  return (
    <section id="como-partimos" className="section">
      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <h2 className="section-h2">Cómo partimos.</h2>
        </div>
      </div>

      <div className="grid como-grid">
        <div className="como-timeline-wrap">
          <div className="como-line" aria-hidden="true" />
          <ol className="como-timeline">
            <li className="como-step">
              <span className="como-dot" aria-hidden="true" />
              <span className="como-num">01</span>
              <h3 className="como-title">Discovery 30 min (gratis)</h3>
              <p className="como-desc">Entendemos proceso, dolor y dato disponible. Sin slide genérico.</p>
              <p className="como-entrega">Salida: alcance en 1 página + estimación t-shirt.</p>
            </li>
            <li className="como-step">
              <span className="como-dot" aria-hidden="true" />
              <span className="como-num">02</span>
              <h3 className="como-title">Propuesta en 48h</h3>
              <p className="como-desc">Alcance, equipo, plazos y precio cerrado. Contrato simple de 3 páginas.</p>
            </li>
            <li className="como-step">
              <span className="como-dot" aria-hidden="true" />
              <span className="como-num">03</span>
              <h3 className="como-title">Sprint 0 (1 semana)</h3>
              <p className="como-desc">Arquitectura, accesos y ambientes. Primer commit visible.</p>
            </li>
            <li className="como-step">
              <span className="como-dot" aria-hidden="true" />
              <span className="como-num">04</span>
              <h3 className="como-title">Ciclos de 2 semanas</h3>
              <p className="como-desc">Demo + deploy. Ves avance real, no reporte.</p>
            </li>
          </ol>
        </div>

        <div className="como-cta-wrap">
          <a href="#reserva" className="btn-primary como-cta">
            Agenda discovery →
          </a>
        </div>
      </div>

      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <div className="como-media-wrap">
            <MediaTile
              filename="cordillera-interior-16x9.png"
              alt="Oficina vacía luminosa con mesa roble al centro sosteniendo maqueta cordillera"
              className="como-media"
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                border: "1px solid var(--line)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
