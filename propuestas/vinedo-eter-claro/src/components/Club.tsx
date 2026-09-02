import { useState } from "react";

export function Club() {
  const [proofFailed, setProofFailed] = useState(false);
  const showProof = !proofFailed;
  return (
    <section id="club-eter" className="club" aria-label="Club ETER">
      <div className="club__inner">
        <div className="club__header">
          <div className="club__header-text">
            <p className="club__kicker">CLUB ETER · SIN AMARRE</p>
            <h2 className="club__title">Que llegue vino cada mes. Sin sorpresas.</h2>
            <p className="club__bajada">Eliges 3 o 6 botellas. Nosotros rotamos cuarteles y añadas. Pausas cuando quieras, sin letra chica.</p>
          </div>
          {showProof ? (
            <div className="club__proof">
              <img
                src="/media/eter-proof-4x3.png"
                alt=""
                className="club__proof-img"
                loading="lazy"
                onError={() => setProofFailed(true)}
              />
            </div>
          ) : (
            <div className="media-falta club__proof--falta" data-falta="eter-proof-4x3.png">
              falta: eter-proof-4x3.png
            </div>
          )}
        </div>

        <div className="club__grid">
          <article className="club-card">
            <h3 className="club-card__name">Caja 3</h3>
            <p className="club-card__freq">3 botellas / mes</p>
            <p className="club-card__precio">$39.900 / mes</p>
            <p className="club-card__desc">Incluye 2 tintos + 1 blanco o rosé · Ficha técnica impresa · Despacho RM incluido</p>
            <a href="#reserva-cata" className="club-card__cta club-card__cta--ghost">
              Suscribir 3 →
            </a>
          </article>

          <article className="club-card club-card--destacada">
            <span className="club-card__label">Más pedida</span>
            <h3 className="club-card__name">Caja 6 — Más pedida</h3>
            <p className="club-card__freq">6 botellas / mes</p>
            <p className="club-card__precio">$72.000 / mes</p>
            <p className="club-card__desc">Mix completo + 1 guarda o novedad · Despacho RM incluido · 10% en catas</p>
            <a href="#reserva-cata" className="club-card__cta club-card__cta--solid">
              Suscribir 6 →
            </a>
          </article>

          <article className="club-card">
            <h3 className="club-card__name">Caja Mix Trimestral</h3>
            <p className="club-card__freq">9 botellas / 3 meses</p>
            <p className="club-card__precio">$98.000 / trimestre</p>
            <p className="club-card__desc">Para quien no quiere mensual. 3 botellas cada envío, 3 envíos.</p>
            <a href="#reserva-cata" className="club-card__cta club-card__cta--ghost">
              Suscribir trimestral →
            </a>
          </article>
        </div>

        <p className="club__nota">Cobro mensual por Webpay. Pausa o cancela antes del día 25. Envío a regiones +$4.900. Valores referenciales.</p>
      </div>
    </section>
  );
}
