import { useEffect, useState } from "react";

const HERO_16 = "/media/eter-hero-16x9.png";
const HERO_9 = "/media/eter-hero-9x16.png";
const HERO_VIDEO = "/media/eter-hero-loop.mp4";

function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    // For video we check via fetch HEAD; for images use Image loader
    if (src.endsWith(".mp4")) {
      fetch(src, { method: "HEAD" })
        .then((r) => {
          if (!cancelled) setExists(r.ok);
        })
        .catch(() => {
          if (!cancelled) setExists(false);
        });
    } else {
      const img = new Image();
      img.onload = () => !cancelled && setExists(true);
      img.onerror = () => !cancelled && setExists(false);
      img.src = src;
    }
    return () => {
      cancelled = true;
    };
  }, [src]);
  return exists;
}

export function Hero() {
  const exists16 = useMediaExists(HERO_16);
  const exists9 = useMediaExists(HERO_9);
  const existsVideo = useMediaExists(HERO_VIDEO);

  useEffect(() => {
    if (exists16 === false) console.warn("[ETER] falta eter-hero-16x9.png en public/media/");
    if (exists9 === false) console.warn("[ETER] falta eter-hero-9x16.png en public/media/");
  }, [exists16, exists9]);

  const hasAnyImage = exists16 === true || exists9 === true;

  return (
    <section id="portada-meson" className="hero" aria-label="Portada mesón">
      <div className="hero-grid">
        {/* MEDIA derecha en desktop, arriba en móvil */}
        <div className="hero-media">
          {existsVideo === true ? (
            <div className="hero-media-inner hero-media-inner--16x9">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={HERO_16}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={HERO_VIDEO} type="video/mp4" />
              </video>
            </div>
          ) : hasAnyImage ? (
            <picture className="hero-picture">
              {exists9 === true && <source media="(max-width: 899px)" srcSet={HERO_9} />}
              {exists16 === true && <img src={HERO_16} alt="Mesón ETER con perno M12 × 80 sobre acero cepillado" style={{ width: "100%", height: "auto", objectFit: "cover", border: "1px solid var(--line)" }} />}
              {exists16 !== true && exists9 === true && <img src={HERO_9} alt="Mesón ETER con perno M12 × 80" style={{ width: "100%", height: "auto", objectFit: "cover", border: "1px solid var(--line)" }} />}
            </picture>
          ) : exists16 === false && exists9 === false ? (
            <div className="media-falta" data-falta="eter-hero-16x9.png">
              falta eter-hero-16x9.png
            </div>
          ) : (
            <div className="media-falta" data-falta="eter-hero-16x9.png" aria-busy="true">
              cargando…
            </div>
          )}
          <p className="hero-caption">Mesón ETER · perno M12 × 80 · acero cepillado · luz norte 07:30</p>
        </div>

        {/* TEXTO izquierda */}
        <div className="hero-text">
          <p className="kicker">PERNERÍA · FIERRO · MADERA · GASFITERÍA — DESDE 1986</p>
          <h1 className="hero-title">
            Fierro <span className="accent-word">a medida,</span> sin vueltas.
          </h1>
          <p className="hero-sub">
            Cotiza en 2 minutos, retira en mesón o recibe en obra mañana. Stock real, precio con IVA y ficha técnica completa. Del maestro a la
            constructora.
          </p>
          <div className="hero-ctas">
            <a href="#cotiza-obra" className="btn-accent">
              Cotizar por WhatsApp
            </a>
            <a href="#ficha-tecnica" className="btn-ghost">
              Ver ficha técnica
            </a>
          </div>
          <div className="hero-banda">Boleta o factura · Corte y doblado hasta 6 m · Despacho 24h RM</div>
          <p className="hero-micro">¿Cuántas mañanas perdiste esperando el presupuesto del fierro? Acá ves medida exacta, stock y precio con IVA antes de hablar con alguien.</p>
        </div>
      </div>
    </section>
  );
}

export function BandaConfianza() {
  return (
    <div className="banda" aria-label="Confianza">
      <div className="banda-inner">
        <div className="banda-item">
          <span className="banda-num">40 AÑOS</span>
          <span className="banda-label">abasteciendo obra</span>
        </div>
        <div className="banda-item">
          <span className="banda-num">1.200 M2</span>
          <span className="banda-label">bodega rotulada</span>
        </div>
        <div className="banda-item">
          <span className="banda-num">24H</span>
          <span className="banda-label">despacho RM</span>
        </div>
        <div className="banda-item">
          <span className="banda-num">BOLETA/FACTURA</span>
          <span className="banda-label">crédito 30 días</span>
        </div>
      </div>
    </div>
  );
}
