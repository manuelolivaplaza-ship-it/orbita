import { MediaTile } from "./MediaTile";

export function StackReal() {
  return (
    <section id="stack-real" className="section">
      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <h2 className="section-h2">Stack que usamos de verdad.</h2>
          <p className="section-bajada" style={{ maxWidth: 560 }}>
            Elegimos por tu caso, no por moda. Esto es lo que operamos en producción hoy.
          </p>
        </div>
      </div>

      <div className="grid stack-grid">
        {/* tabla 8 col */}
        <div className="stack-table-wrap">
          <div className="stack-table-header">
            <span>Capa</span>
            <span>Opciones</span>
          </div>

          <div className="stack-row">
            <span className="stack-capa">Frontend</span>
            <span className="stack-opciones">React 19 · TypeScript · Next.js / Vite · Motion</span>
          </div>
          <div className="stack-row">
            <span className="stack-capa">Backend</span>
            <span className="stack-opciones">Node.js · Python · PostgreSQL · Redis</span>
          </div>
          <div className="stack-row">
            <span className="stack-capa">Infra</span>
            <span className="stack-opciones">AWS / GCP · Docker · CI/CD GitHub Actions · Terraform</span>
          </div>
          <div className="stack-row">
            <span className="stack-capa">Integraciones Chile</span>
            <span className="stack-opciones">SII (DTE/F29) · Previred · Transbank/Webpay · Mercado Pago · Bsale</span>
          </div>
          <div className="stack-row">
            <span className="stack-capa">Datos/IA acotada</span>
            <span className="stack-opciones">ETL simple · Embeddings · No vendemos &apos;IA mágica&apos; sin caso de uso</span>
          </div>
        </div>

        {/* nota lateral sticky col 9-12 */}
        <div className="stack-nota-wrap">
          <div className="stack-nota">
            No usamos: WordPress para tu core, ni no-code para procesos críticos. Si tu caso pide otra stack, lo decimos en
            la discovery.
          </div>
          <MediaTile
            filename="cordillera-tile-02.png"
            alt="Tarjeta gruesa color hueso apoyada sobre roble claro con canto cobre"
            className="stack-media"
            style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", border: "1px solid var(--line)", marginTop: 16 }}
          />
        </div>
      </div>
    </section>
  );
}
