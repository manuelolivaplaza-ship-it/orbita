import { MediaTile } from "./MediaTile";

export function Sla() {
  return (
    <section id="sla" className="section">
      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <h2 className="section-h2">SLA que firmamos.</h2>
        </div>
      </div>

      <div className="grid sla-grid">
        {/* métricas 4 col cada una + tile 1:1 */}
        <div className="sla-metrics">
          <div className="sla-metric">
            <div className="sla-metric-label">Respuesta</div>
            <div className="sla-metric-value">&lt;4h</div>
            <div className="sla-metric-sub">hábiles por Slack/Email</div>
          </div>
          <div className="sla-metric">
            <div className="sla-metric-label">Ambientes</div>
            <div className="sla-metric-value">3</div>
            <div className="sla-metric-sub">dev · staging · prod con CI/CD</div>
          </div>
          <div className="sla-metric">
            <div className="sla-metric-label">Entrega</div>
            <div className="sla-metric-value">cada 14 días</div>
            <div className="sla-metric-sub">demo + deploy con notas de versión</div>
          </div>
        </div>

        <div className="sla-tile-wrap">
          <MediaTile
            filename="cordillera-tile-03.png"
            alt="Diagrama de arquitectura abstracto impreso en papel lino sobre mesa roble"
            className="sla-tile"
            style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", border: "1px solid var(--line)" }}
          />
        </div>
      </div>

      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <div className="sla-table-wrap">
            <div className="sla-scroll-hint">desliza →</div>
            <table className="sla-table" aria-label="Plazos SLA">
              <thead>
                <tr>
                  <th>Actividad</th>
                  <th>Plazo</th>
                  <th>Canal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bug crítico</td>
                  <td>&lt;8h hábiles</td>
                  <td>Slack + Hotfix</td>
                </tr>
                <tr>
                  <td>Bug mayor</td>
                  <td>&lt;24h</td>
                  <td>Ticket</td>
                </tr>
                <tr>
                  <td>Feature planeada</td>
                  <td>por sprint</td>
                  <td>Roadmap quincenal</td>
                </tr>
                <tr>
                  <td>Soporte post-entrega</td>
                  <td>30 días incluido</td>
                  <td>Email</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="sla-micro">Horario soporte lun–vie 9:00–18:30 Chile. Fuera de horario solo crítico con recargo acordado.</p>
        </div>
      </div>
    </section>
  );
}
