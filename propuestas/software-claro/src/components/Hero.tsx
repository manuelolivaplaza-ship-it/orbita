import { useEffect, useState } from "react";

const INDEX_LINKS = [
  { num: "01", label: "Engagement", href: "#engagement" },
  { num: "02", label: "Stack", href: "#stack-real" },
  { num: "03", label: "SLA", href: "#sla" },
  { num: "04", label: "Casos", href: "#casos-industria" },
  { num: "05", label: "Cómo partimos", href: "#como-partimos" },
  { num: "06", label: "Presupuesto", href: "#presupuesto" },
];

function hasMedia(filename: string): boolean {
  // check via fetch existence at runtime; for build fallback we assume false if not found
  // Vite will copy public/media as-is; we do runtime check in effect
  return false;
  void filename;
}

export function Hero() {
  const [mediaState, setMediaState] = useState<{
    video: boolean;
    img16: boolean;
    img9: boolean;
  }>({ video: false, img16: false, img9: false });

  useEffect(() => {
    // report placeholder if missing (spec: console log)
    // we probe via HEAD requests to /media/... ; base is /propuestas/software-claro/ when built but dev is /
    const bases = ["/media/", "/propuestas/software-claro/media/", "./media/"];
    // actual supported path after vite build with base=/propuestas/software-claro/ is /propuestas/software-claro/media/
    // For dev, it's /media/. Try to detect which exists by testing one image.
    const probe = async () => {
      const files = {
        video: "cordillera-hero-loop.mp4",
        img16: "cordillera-hero-16x9.png",
        img9: "cordillera-hero-9x16.png",
      };
      const check = async (file: string) => {
        // try multiple bases
        for (const base of ["/media/" + file, "/propuestas/software-claro/media/" + file]) {
          try {
            const r = await fetch(base, { method: "HEAD" });
            if (r.ok) return true;
          } catch {
            // ignore
          }
        }
        return false;
      };
      const [video, img16, img9] = await Promise.all([
        check(files.video),
        check(files.img16),
        check(files.img9),
      ]);
      setMediaState({ video, img16, img9 });
      if (!img16) {
        console.warn("media falta: cordillera-hero-16x9.png");
      }
      void hasMedia;
      void img9;
    };
    probe();
  }, []);

  // Decide render: prefer video if exists + poster, else img 16:9
  // Since we have no media yet, placeholder will show until files appear
  const showVideo = mediaState.video;
  const showImg = mediaState.img16;

  return (
    <section id="hero" className="hero section" aria-labelledby="hero-heading">
      <div className="grid hero-grid">
        {/* índice vertical desktop col1 */}
        <nav className="hero-index" aria-label="Índice">
          {INDEX_LINKS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={i === 0 ? "is-active" : ""}
            >
              {item.num} {item.label}
            </a>
          ))}
        </nav>

        {/* copy col 2-5 */}
        <div className="hero-copy">
          <p className="hero-kicker">FÁBRICA DE SOFTWARE · SANTIAGO · REMOTO CHILE</p>
          <h1 id="hero-heading" className="hero-h1">
            <span className="hero-h1-line">
              <span>Software a medida que</span>
            </span>
            <span className="hero-h1-line">
              <span>ordena tu operación y</span>
            </span>
            <span className="hero-h1-line">
              <span>escala contigo sin humo.</span>
            </span>
          </h1>
          <p className="hero-bajada">
            Levantamos tu proceso, diseñamos la arquitectura y entregamos en ciclos cortos. Sin humo, con SLA y código tuyo.
          </p>
          <div className="hero-ctas">
            <a href="#reserva" className="btn-primary">
              Agenda discovery 30 min — WhatsApp
            </a>
            <a href="#presupuesto" className="btn-secondary">
              Ver presupuesto desde
            </a>
          </div>
          <p className="hero-micro">Respuesta en &lt;24h hábiles · Propuesta en 48h · Código y repo tuyos desde día 1</p>
        </div>

        {/* media col 6-12 */}
        <div className="hero-media">
          {showVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/media/cordillera-hero-16x9.png"
              aria-label="Maqueta cordillera"
            >
              <source src="/media/cordillera-hero-loop.mp4" type="video/mp4" />
              {/* fallback to image if video fails */}
              <img
                src="/media/cordillera-hero-16x9.png"
                alt="Maqueta topográfica de cordillera en papel microcorrugado blanco sobre tablero de roble claro con hilo de cobre tensado entre cumbres"
                loading="eager"
                decoding="async"
              />
            </video>
          ) : showImg ? (
            <picture>
              <source media="(max-width: 900px)" srcSet="/media/cordillera-hero-9x16.png" />
              <img
                src="/media/cordillera-hero-16x9.png"
                alt="Maqueta topográfica de cordillera en papel microcorrugado blanco sobre tablero de roble claro con hilo de cobre tensado entre cumbres"
                loading="eager"
                decoding="async"
              />
            </picture>
          ) : (
            <div
              className="media-falta"
              data-falta="cordillera-hero-16x9.png"
              style={{
                minHeight: 520,
                background: "var(--surface-2)",
                display: "grid",
                placeItems: "center",
                color: "var(--muted-2)",
                font: "12px var(--font-text)",
              }}
            >
              falta: cordillera-hero-16x9.png
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
