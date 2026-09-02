import { useEffect, useState } from "react";

export function Hero() {
  const [hasImg, setHasImg] = useState<boolean | null>(null);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/media/altamar-hero-16x9.png", { method: "HEAD" })
      .then((r) => {
        setHasImg(r.ok);
        if (!r.ok) console.warn("[ALTAMAR] falta media: altamar-hero-16x9.png");
      })
      .catch(() => {
        setHasImg(false);
        console.warn("[ALTAMAR] falta media: altamar-hero-16x9.png");
      });
    fetch("/media/altamar-hero-loop.mp4", { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, []);

  return (
    <>
      <section id="portada" className="hero" aria-label="Portada ALTAMAR">
        <div className="hero__media" aria-hidden={hasImg === false ? undefined : true}>
          {hasImg === false ? (
            <div
              className="media-falta"
              data-falta="altamar-hero-16x9.png"
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
                background: "#122836",
                border: "1px solid var(--linea)",
                color: "var(--muted)",
                font: "500 0.82rem 'Source Serif 4', serif",
              }}
            >
              falta: altamar-hero-16x9.png
            </div>
          ) : hasVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/media/altamar-hero-16x9.png"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/media/altamar-hero-loop.mp4" type="video/mp4" />
              <img
                src="/media/altamar-hero-16x9.png"
                alt="Hormigón rugoso costero con carta náutica y canto bronce"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </video>
          ) : (
            <img
              src="/media/altamar-hero-16x9.png"
              alt="Hormigón rugoso costero con carta náutica y canto bronce"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                console.warn("[ALTAMAR] falta media: altamar-hero-16x9.png");
                const wrapper = el.closest(".hero__media");
                if (wrapper && !wrapper.querySelector(".media-falta")) {
                  const fallback = document.createElement("div");
                  fallback.className = "media-falta";
                  fallback.setAttribute("data-falta", "altamar-hero-16x9.png");
                  (fallback as HTMLElement).style.cssText =
                    "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.82rem 'Source Serif 4',serif";
                  fallback.textContent = "falta: altamar-hero-16x9.png";
                  wrapper.appendChild(fallback);
                }
                setHasImg(false);
              }}
            />
          )}
        </div>

        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__filete" aria-hidden="true" />

        <div className="hero__content">
          <div className="hero__copy">
            <p className="hero__kicker">REÑACA — COSTA CENTRAL · VISITAS HASTA LAS 21:30</p>
            <h1 className="hero__h1">Costa que se visita de noche y se firma sin espuma.</h1>
            <p className="hero__sub">
              Ficha completa antes de preguntar. Metros útiles reales, gastos comunes del último mes y disponibilidad
              para hoy. Si no está disponible, no está publicada.
            </p>

            <div className="hero__ctas">
              <a href="#propiedades" className="hero__cta-primary">
                Ver stock costero con ficha real
              </a>
              <a href="#visita-nocturna" className="hero__cta-secondary">
                Agendar visita nocturna
              </a>
            </div>

            <div className="hero__banda" aria-label="Banda honesta">
              <span className="hero__banda-item">
                <span className="hero__dot" aria-hidden="true" /> UF del día 39.180
              </span>
              <span className="hero__banda-item">
                <span className="hero__dot" aria-hidden="true" /> Gastos comunes reales
              </span>
              <span className="hero__banda-item">
                <span className="hero__dot" aria-hidden="true" /> Visita en 24h o te avisamos
              </span>
            </div>

            <p className="hero__micro">
              No pedimos reserva para mostrar. Comisión 1,95% + IVA por lado en venta. Arriendo 50% del mes por lado.
              Tasación $88.000 se abona si vendes con nosotros.
            </p>
          </div>
        </div>
      </section>

      <div className="hero__caption" aria-label="Caption técnica">
        <div className="hero__caption-inner">Hormigón rugoso costero · carta náutica plegada · baliza cobre · 21:30</div>
      </div>
    </>
  );
}
