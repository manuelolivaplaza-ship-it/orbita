import { useState } from "react";

export function Cata() {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <section id="cata-en-bodega" className="cata" aria-label="Cata en bodega">
      <div className="cata__inner">
        <div className="cata__split">
          <div className="cata__text">
            <p className="cata__kicker">CATA EN BODEGA · CASABLANCA</p>
            <h2 className="cata__title">Ven a probar donde fermenta.</h2>
            <p className="cata__bajada">
              Grupos de 4 a 10. Sin show. Cata técnica de 75 minutos en la bodega, no en sala de eventos. Copa Zalto, pan y agua. Sin maridaje
              inventado.
            </p>
            <div className="cata__horarios">Jueves a domingo · 11:00 y 15:30 · Duración 75 min · Estacionamiento interior</div>
          </div>
          <div className="cata__media-col">
            {imgFailed ? (
              <div className="media-falta" data-falta="eter-interior-16x9.png" style={{ aspectRatio: "16 / 9" }}>
                falta: eter-interior-16x9.png
              </div>
            ) : (
              <div className="cata__media-wrap">
                <img
                  src="/media/eter-interior-16x9.png"
                  alt=""
                  className="cata__media"
                  loading="lazy"
                  onError={() => setImgFailed(true)}
                />
              </div>
            )}
            <p className="cata__caption">Bodega sin climatizar. Temperatura de guarda 16–18°C.</p>
          </div>
        </div>

        <div className="cata__grid">
          <article className="cata-card cata-card--destacada">
            <h3 className="cata-card__name">Cata Clásica — 3 vinos</h3>
            <p className="cata-card__incluye">Recorrido cuartel + bodega + cata de 3 vinos (Maicillo, Rosé, Arcilla)</p>
            <p className="cata-card__precio">
              <span className="cata-card__precio-valor">$18.000 p/p</span>
              <span className="cata-card__precio-suffix"> · desde</span>
            </p>
            <a href="#reserva-cata" className="cata-card__cta">
              Reservar fecha →
            </a>
          </article>
          <article className="cata-card">
            <h3 className="cata-card__name">Cata Ladera — 5 vinos + guarda</h3>
            <p className="cata-card__incluye">Incluye Syrah Pedregoso y añada anterior + fudre</p>
            <p className="cata-card__precio">
              <span className="cata-card__precio-valor">$32.000 p/p</span>
            </p>
            <a href="#reserva-cata" className="cata-card__cta">
              Reservar fecha →
            </a>
          </article>
          <article className="cata-card">
            <h3 className="cata-card__name">Cata Privada — hasta 8 pax</h3>
            <p className="cata-card__incluye">Horario exclusivo + tabla de quesos de cabra local</p>
            <p className="cata-card__precio">
              <span className="cata-card__precio-valor">$38.000 p/p</span>
              <span className="cata-card__precio-suffix"> · mínimo 4</span>
            </p>
            <a href="#reserva-cata" className="cata-card__cta">
              Reservar fecha →
            </a>
          </article>
        </div>
        <p className="cata__nota">No se cobra descorche. Menores no pagan pero no catan. Cambios hasta 48h antes.</p>
      </div>
    </section>
  );
}
