import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Enfoque", href: "#enfoque" },
  { label: "Cuidados", href: "#cuidados" },
  { label: "La primera hora", href: "#primera-hora" },
  { label: "Agenda", href: "#agenda-familiar" },
] as const;

const HERO_ALT =
  "Nicho de espera vacío con banca de roble baja, muro salvia pálida, cortina de lino y ficus en maceta de greda, luz nublada 09:00 sin personas";

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useStickyBar(showAfterHero = true) {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        const umbral = 88;
        const heroThreshold = window.innerHeight * 0.85;
        const pastHero = y > heroThreshold;

        if (!pastHero || !showAfterHero) {
          setVisible(false);
        } else if (y < umbral) {
          setVisible(false);
        } else if (Math.abs(delta) > 8) {
          if (delta > 0) setVisible(true);
          else setVisible(false);
        }
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterHero]);

  return visible;
}

function Header() {
  const scrolled = useScrolled(24);
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  const stickyVisible = useStickyBar(true);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}`} role="banner">
        <div
          className="header__progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
        <div className="header__inner">
          <div className="header__left">
            <a href="#" className="header__wordmark" aria-label="Bruma inicio">
              bruma
            </a>
          </div>

          <nav className="header__nav" aria-label="Navegación principal">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header__right">
            <a href="tel:+56222857744" className="header__tel">
              +56 2 2285 7744
            </a>
            <a href="#agenda-familiar" className="header__cta">
              Agendar primera visita
            </a>
            <button
              className="header__hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                {open ? (
                  <path d="M3 3 L15 15 M15 3 L3 15" />
                ) : (
                  <>
                    <path d="M2 5 H16" />
                    <path d="M2 9 H16" />
                    <path d="M2 13 H16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`header__sheet${open ? " header__sheet--open" : ""}`} aria-hidden={!open}>
        <div className="header__sheet-backdrop" onClick={() => setOpen(false)} />
        <div className="header__sheet-panel" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="header__sheet-top">
            <span className="header__wordmark">bruma</span>
            <button className="header__sheet-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 3 L15 15 M15 3 L3 15" />
              </svg>
            </button>
          </div>
          <nav className="header__sheet-nav" aria-label="Navegación móvil">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="header__sheet-cta">
            <a href="#agenda-familiar" className="header__cta" onClick={() => setOpen(false)}>
              Agendar primera visita
            </a>
            <a href="tel:+56222857744" className="header__sheet-tel">
              +56 2 2285 7744
            </a>
          </div>
        </div>
      </div>

      <div
        className={`hero-sticky-bar${stickyVisible ? " hero-sticky-bar--visible" : ""}`}
        aria-hidden={!stickyVisible}
      >
        <a href="#agenda-familiar" className="header__cta">
          Agendar primera visita
        </a>
        <a href="tel:+56222857744" className="hero-sticky-bar__tel">
          +56 2 2285 7744
        </a>
      </div>

      <div className={`header-spacer${scrolled ? " header-spacer--scrolled" : ""}`} aria-hidden="true" />
    </>
  );
}

function HeroMedia() {
  const [hasDesktop, setHasDesktop] = useState<boolean | null>(null);
  const [hasMobile, setHasMobile] = useState<boolean | null>(null);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);

  useEffect(() => {
    const candidates = {
      desktop: "/media/bruma-hero-16x9.png",
      mobile: "/media/bruma-hero-9x16.png",
      video: "/media/bruma-hero-loop.mp4",
    };

    const check = async (url: string) => {
      try {
        const r = await fetch(url, { method: "HEAD" });
        return r.ok;
      } catch {
        return false;
      }
    };

    Promise.all([check(candidates.desktop), check(candidates.mobile), check(candidates.video)]).then(
      ([d, m, v]) => {
        setHasDesktop(d);
        setHasMobile(m);
        setHasVideo(v);
        const missing: string[] = [];
        if (!d) missing.push("bruma-hero-16x9.png");
        if (!m) missing.push("bruma-hero-9x16.png");
        if (!v) missing.push("bruma-hero-loop.mp4 (opcional)");
        if (missing.length) {
          console.warn("[bruma] media faltante:", missing.join(", "));
        } else {
          console.log("[bruma] media ok: hero desktop + móvil + video presentes");
        }
      }
    );
  }, []);

  const desktopSrc = "/media/bruma-hero-16x9.png";
  const mobileSrc = "/media/bruma-hero-9x16.png";
  const videoSrc = "/media/bruma-hero-loop.mp4";

  if (hasVideo === true) {
    return (
      <div className="hero__right">
        <video
          className="hero__media--video"
          autoPlay
          loop
          muted
          playsInline
          poster={desktopSrc}
          aria-label={HERO_ALT}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    );
  }

  const showDesktopFalta = hasDesktop === false;
  const showMobileFalta = hasMobile === false;

  return (
    <div className="hero__right">
      {showDesktopFalta ? (
        <div className="media-falta hero__media--desktop" data-falta="bruma-hero-16x9.png">
          Falta bruma-hero-16x9.png
        </div>
      ) : (
        <img
          className="hero__media hero__media--desktop"
          src={desktopSrc}
          alt={HERO_ALT}
          loading="eager"
          decoding="async"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            const falta = document.createElement("div");
            falta.className = "media-falta hero__media--desktop";
            falta.setAttribute("data-falta", "bruma-hero-16x9.png");
            falta.textContent = "Falta bruma-hero-16x9.png";
            el.parentElement?.appendChild(falta);
            console.warn("[bruma] media faltante: bruma-hero-16x9.png");
          }}
        />
      )}
      {showMobileFalta ? (
        <div className="media-falta hero__media--mobile" data-falta="bruma-hero-9x16.png">
          Falta bruma-hero-9x16.png
        </div>
      ) : (
        <img
          className="hero__media hero__media--mobile"
          src={mobileSrc}
          alt={HERO_ALT}
          loading="eager"
          decoding="async"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            const falta = document.createElement("div");
            falta.className = "media-falta hero__media--mobile";
            falta.setAttribute("data-falta", "bruma-hero-9x16.png");
            falta.textContent = "Falta bruma-hero-9x16.png";
            el.parentElement?.appendChild(falta);
            console.warn("[bruma] media faltante: bruma-hero-9x16.png");
          }}
        />
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="hero-bruma" className="hero" aria-label="Hero Bruma">
      <div className="hero__left">
        <p className="hero__kicker">FAMILIAS · PRIMERA VEZ</p>
        <h1 className="hero__title">
          <span>El miedo</span>
          <span>no es un detalle.</span>
        </h1>
        <p className="hero__desc">
          Odontopediatría y ortodoncia. Un padre puede quedarse adentro. La primera visita puede ser solo un espejo.
        </p>
        <div className="hero__ctas">
          <a href="#agenda-familiar" className="btn-primary">
            Agendar primera visita
          </a>
          <a href="#valores-familia" className="btn-ghost">
            Ver valores familia
          </a>
        </div>
        <p className="hero__micro">La Florida · Lun–Vie 9:00–19:00 · Sáb 9:00–13:00 · +56 2 2285 7744</p>
      </div>
      <HeroMedia />
      <div className="hero__banda">
        Atención con hora o por urgencia · Fonasa e Isapre con boleta reembolsable · Respuesta por WhatsApp el mismo
        día
      </div>
    </section>
  );
}

// ---------- helpers ----------

function MediaFalta({ filename, style, className }: { filename: string; style?: React.CSSProperties; className?: string }) {
  useEffect(() => {
    console.warn(`[bruma] media faltante: ${filename}`);
  }, [filename]);
  return (
    <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={style}>
      Falta {filename}
    </div>
  );
}

function TileImage({
  src,
  alt,
  filename,
  className,
  style,
}: {
  src: string;
  alt: string;
  filename: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [missing, setMissing] = useState(false);
  if (missing) return <MediaFalta filename={filename} className={className} style={style} />;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => setMissing(true)}
    />
  );
}

// ---------- SECCION 1: #enfoque ----------

function Enfoque() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll<HTMLElement>(".enfoque__fila").forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    el.querySelectorAll(".enfoque__fila").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  // media opcional recepcion
  const [recepcionMissing, setRecepcionMissing] = useState<boolean | null>(null);
  useEffect(() => {
    fetch("/media/bruma-tile-recepcion-4x3.png", { method: "HEAD" })
      .then((r) => {
        if (!r.ok) setRecepcionMissing(true);
        else setRecepcionMissing(false);
        if (!r.ok) console.warn("[bruma] media faltante: bruma-tile-recepcion-4x3.png");
      })
      .catch(() => setRecepcionMissing(true));
  }, []);

  return (
    <section id="enfoque" className="enfoque" ref={ref} aria-label="Enfoque">
      <div className="shell">
        <div className="enfoque__head">
          <p className="kicker">ENFOQUE</p>
          <h2 className="h2">El patio primero.</h2>
        </div>

        <div className="enfoque__filas">
          <div className="enfoque__fila" style={{ transitionDelay: "0ms" }}>
            <div className="enfoque__num" aria-hidden="true">
              01
            </div>
            <div className="enfoque__text">
              <p className="enfoque__title">El patio primero. Nadie entra directo al sillón.</p>
              <p className="enfoque__desc">Un nicho con banca y agua. Sin TV a todo volumen.</p>
            </div>
          </div>

          <div className="enfoque__fila" style={{ transitionDelay: "80ms" }}>
            <div className="enfoque__num" aria-hidden="true">
              02
            </div>
            <div className="enfoque__text">
              <p className="enfoque__title">El adulto se queda. En niños, un padre adentro. Siempre.</p>
              <p className="enfoque__desc">La ansiedad baja cuando la mano conocida está al lado.</p>
            </div>
          </div>

          <div className="enfoque__fila" style={{ transitionDelay: "160ms" }}>
            <div className="enfoque__num" aria-hidden="true">
              03
            </div>
            <div className="enfoque__text">
              <p className="enfoque__title">El plan en papel. Nada de ‘ya vemos en la próxima’.</p>
              <p className="enfoque__desc">Presupuesto escrito antes de partir. Sin sorpresas.</p>
            </div>
          </div>
        </div>

        {recepcionMissing === false && (
          <div className="enfoque__media">
            <TileImage
              src="/media/bruma-tile-recepcion-4x3.png"
              alt="Recepción vacía con banca baja de roble y muro salvia, luz nublada 09:00 sin personas"
              filename="bruma-tile-recepcion-4x3.png"
              className="enfoque__img"
            />
          </div>
        )}
        {recepcionMissing === true && (
          <MediaFalta filename="bruma-tile-recepcion-4x3.png" className="enfoque__img enfoque__img--falta" />
        )}
      </div>
    </section>
  );
}

// ---------- SECCION 2: #cuidados ----------

function Cuidados() {
  return (
    <section id="cuidados" className="cuidados" aria-label="Cuidados">
      <div className="shell cuidados__shell">
        <div className="cuidados__main">
          <p className="kicker">CUIDADOS</p>
          <h2 className="h2">Para cada boca de la casa.</h2>
          <p className="cuidados__intro">
            No son los mismos dientes a los 4, a los 14 y a los 40. Tampoco el mismo ritmo.
          </p>

          <div className="cuidados__lista" role="list">
            <div className="cuidados__fila" role="listitem">
              <div className="cuidados__left">
                <span className="cuidados__k">01 / Odontopediatría</span>
                <p className="cuidados__titulo">La primera puede ser solo conversación.</p>
                <p className="cuidados__desc">Cita de juego 45 min: recorre, toca, pregunta. Sin instrumental si no lo pide.</p>
              </div>
              <div className="cuidados__right">
                <span className="cuidados__precio">desde $25.000</span>
                <span className="cuidados__tag">de juego</span>
              </div>
            </div>

            <div className="cuidados__fila" role="listitem">
              <div className="cuidados__left">
                <span className="cuidados__k">02 / Ortodoncia</span>
                <p className="cuidados__titulo">Cuando el hueso todavía escucha.</p>
                <p className="cuidados__desc">Plan interceptivo 6–12 años: guía el crecimiento antes de que sea tarde.</p>
              </div>
              <div className="cuidados__right">
                <span className="cuidados__precio">desde $950.000</span>
                <span className="cuidados__tag">6–12 años</span>
              </div>
            </div>

            <div className="cuidados__fila" role="listitem">
              <div className="cuidados__left">
                <span className="cuidados__k">03 / General</span>
                <p className="cuidados__titulo">Adultos que volvieron después de años.</p>
                <p className="cuidados__desc">Limpieza y control sin juicio. Horas coordinadas con los niños.</p>
              </div>
              <div className="cuidados__right">
                <span className="cuidados__precio">desde $50.000</span>
                <span className="cuidados__tag">horas coordinadas</span>
              </div>
            </div>

            <div className="cuidados__fila" role="listitem">
              <div className="cuidados__left">
                <span className="cuidados__k">04 / Urgencia</span>
                <p className="cuidados__titulo">Dolor un sábado. Te vemos.</p>
                <p className="cuidados__desc">Traumatismo o dolor agudo: prioridad niños, mismo día sábados.</p>
              </div>
              <div className="cuidados__right">
                <span className="cuidados__precio">desde $35.000</span>
                <span className="cuidados__tag">mismo día</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cuidados__tile">
          <TileImage
            src="/media/bruma-tile-sillon-1x1.png"
            alt="Sillón dental vacío en posición baja, muro salvia pálida, luz lateral norte sin personas"
            filename="bruma-tile-sillon-1x1.png"
            className="cuidados__tile-img"
          />
        </div>
      </div>
    </section>
  );
}

// ---------- SECCION 3: #primera-hora ----------

function PrimeraHora() {
  return (
    <section id="primera-hora" className="primera-hora" aria-label="La primera hora">
      <div className="shell">
        <p className="kicker">LA PRIMERA HORA</p>
        <h2 className="h2 primera-hora__h2">Tres pasos, cero apuro.</h2>

        <div className="primera-hora__grid">
          <div className="primera-hora__paso">
            <span className="primera-hora__num" aria-hidden="true">
              01
            </span>
            <div className="primera-hora__filete" aria-hidden="true" />
            <p className="primera-hora__titulo">Llegada</p>
            <p className="primera-hora__texto">Llegás 10 minutos antes. Banco, agua. Sin TV a todo volumen.</p>
          </div>
          <div className="primera-hora__paso">
            <span className="primera-hora__num" aria-hidden="true">
              02
            </span>
            <div className="primera-hora__filete" aria-hidden="true" />
            <p className="primera-hora__titulo">Conversación</p>
            <p className="primera-hora__texto">15 minutos de conversación. Cero instrumental si no hace falta.</p>
          </div>
          <div className="primera-hora__paso">
            <span className="primera-hora__num" aria-hidden="true">
              03
            </span>
            <div className="primera-hora__filete" aria-hidden="true" />
            <p className="primera-hora__titulo">Confianza</p>
            <p className="primera-hora__texto">Recién ahí, si hay confianza, el espejo.</p>
          </div>
        </div>

        <blockquote className="primera-hora__cita">
          <p>“Mi hijo de cinco años le dice ‘la doctora de los premios’ al dentista.”</p>
          <cite>Familia Vergara · pacientes desde 2022</cite>
        </blockquote>

        <div className="primera-hora__basin-wrap">
          <TileImage
            src="/media/bruma-tile-basin-3x4.png"
            alt="Lavamanos de piedra pálida con toalla doblada, luz de ventana, detalle a altura de niño"
            filename="bruma-tile-basin-3x4.png"
            className="primera-hora__basin-img"
          />
          <p className="primera-hora__caption">El lavamanos a altura de niño. El gesto importa más que el afiche.</p>
        </div>
      </div>
    </section>
  );
}

// ---------- SECCION 4: #valores-familia ----------

function ValoresFamilia() {
  return (
    <section id="valores-familia" className="valores" aria-label="Valores familia">
      <div className="shell">
        <p className="kicker">VALORES</p>
        <h2 className="h2">Precios de familia, no de sorpresa.</h2>
        <p className="valores__sub">
          Plan familiar por escrito con valores por integrante y descuentos aplicados desde el tercero. Valores
          referenciales; el valor final se confirma tras diagnóstico. Sin sorpresas.
        </p>

        <div className="valores__tabla-wrap">
          {/* header desktop */}
          <div className="valores__header" aria-hidden="true">
            <span>Tipo</span>
            <span>Detalle</span>
            <span className="valores__header-desde">Desde</span>
          </div>

          <div className="valores__fila">
            <div className="valores__col-tipo">
              <span className="valores__tipo">Primera visita del niño</span>
              <span className="valores__detalle-mobile">Cita de juego con premio</span>
            </div>
            <span className="valores__detalle">45 min · se descuenta si inicia tratamiento</span>
            <span className="valores__precio"> $25.000</span>
          </div>
          {/* fila detalle secundaria visible solo mobile? we keep desc inline */}
          <div className="valores__fila valores__fila--sub">
            <span className="valores__tipo-sub">Cita de juego con premio</span>
          </div>

          <div className="valores__fila">
            <div className="valores__col-tipo">
              <span className="valores__tipo">Sellado + flúor</span>
              <span className="valores__detalle-mobile">Por pieza, con indicaciones</span>
            </div>
            <span className="valores__detalle">Por pieza, con indicaciones — Por sesión</span>
            <span className="valores__precio"> $40.000</span>
          </div>

          <div className="valores__fila">
            <div className="valores__col-tipo">
              <span className="valores__tipo">Ortodoncia infantil</span>
              <span className="valores__detalle-mobile">Plan interceptivo completo</span>
            </div>
            <span className="valores__detalle">Plan interceptivo completo — Cuotas</span>
            <span className="valores__precio"> $950.000</span>
          </div>

          <div className="valores__fila">
            <div className="valores__col-tipo">
              <span className="valores__tipo">Limpieza familiar</span>
              <span className="valores__detalle-mobile">Cada integrante, mismo día</span>
            </div>
            <span className="valores__detalle">Cada integrante, mismo día — 3° integrante con dto. 15–25%</span>
            <span className="valores__precio"> $50.000</span>
          </div>

          <div className="valores__fila">
            <div className="valores__col-tipo">
              <span className="valores__tipo">Urgencias y traumatismos</span>
              <span className="valores__detalle-mobile">Prioridad niños sábados</span>
            </div>
            <span className="valores__detalle">Prioridad niños sábados — Mismo día</span>
            <span className="valores__precio"> $35.000</span>
          </div>

          <p className="valores__nota">
            Valores referenciales en CLP; se confirma tras diagnóstico en box. Fonasa · Isapres (Colmena, Banmédica, Vida
            Tres, Consalud, CruzBlanca) con boleta reembolsable. Bono electrónico si hay convenio.
          </p>

          <div className="valores__banda">
            <div className="valores__banda-col">
              <span className="valores__banda-title">Fonasa</span>
              <span className="valores__banda-text">Bono electrónico</span>
            </div>
            <div className="valores__banda-col">
              <span className="valores__banda-title">Isapre</span>
              <span className="valores__banda-text">Boleta reembolsable inmediata</span>
            </div>
            <div className="valores__banda-col">
              <span className="valores__banda-title">Particular</span>
              <span className="valores__banda-text">Copago según plan, te lo cotizamos por WhatsApp</span>
            </div>
          </div>

          <div className="valores__ctas">
            <a href="#agenda-familiar" className="btn-primary">
              Agendar primera visita
            </a>
            <a
              href="https://wa.me/56222857744?text=Hola%20Bruma%2C%20quiero%20una%20primera%20visita."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECCION 5: #equipo-bruma ----------

function EquipoBruma() {
  return (
    <section id="equipo-bruma" className="equipo" aria-label="Equipo">
      <div className="shell">
        <p className="kicker">EQUIPO</p>
        <h2 className="h2">Quienes van a verte siempre.</h2>
        <p className="equipo__sub">Sin rotación de caras. La misma doctora de principio a fin.</p>

        <div className="equipo__grid">
          <div className="equipo__card">
            <div className="equipo__inicial" aria-hidden="true">
              FO
            </div>
            <div className="equipo__info">
              <p className="equipo__nombre">Fernanda Ortiz</p>
              <p className="equipo__cargo">Odontopediatra · Directora</p>
              <p className="equipo__detalle">Especialista en manejo de ansiedad infantil.</p>
            </div>
            <TileImage
              src="/media/bruma-tile-detalle-1x1.png"
              alt="Detalle de gaveta con premios de madera, textura roble y lino"
              filename="bruma-tile-detalle-1x1.png"
              className="equipo__thumb"
            />
          </div>

          <div className="equipo__card">
            <div className="equipo__inicial" aria-hidden="true">
              MR
            </div>
            <div className="equipo__info">
              <p className="equipo__nombre">Mauricio Riquelme</p>
              <p className="equipo__cargo">Ortodoncista</p>
              <p className="equipo__detalle">Interceptiva y brackets para adolescentes.</p>
            </div>
            <TileImage
              src="/media/bruma-tile-detalle-1x1.png"
              alt="Detalle de gaveta con premios de madera, textura roble y lino"
              filename="bruma-tile-detalle-1x1.png"
              className="equipo__thumb"
            />
          </div>

          <div className="equipo__card">
            <div className="equipo__inicial" aria-hidden="true">
              CA
            </div>
            <div className="equipo__info">
              <p className="equipo__nombre">Carola Aguirre</p>
              <p className="equipo__cargo">Odontóloga general</p>
              <p className="equipo__detalle">Adultos de la familia y prevención.</p>
            </div>
            <TileImage
              src="/media/bruma-tile-detalle-1x1.png"
              alt="Detalle de gaveta con premios de madera, textura roble y lino"
              filename="bruma-tile-detalle-1x1.png"
              className="equipo__thumb"
            />
          </div>

          <div className="equipo__card">
            <div className="equipo__inicial" aria-hidden="true">
              LP
            </div>
            <div className="equipo__info">
              <p className="equipo__nombre">Luisa Peña</p>
              <p className="equipo__cargo">Coordinadora familiar</p>
              <p className="equipo__detalle">Agenda las horas de toda la casa juntas.</p>
            </div>
            <TileImage
              src="/media/bruma-tile-detalle-1x1.png"
              alt="Detalle de gaveta con premios de madera, textura roble y lino"
              filename="bruma-tile-detalle-1x1.png"
              className="equipo__thumb"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECCION 6: #preguntas-bruma ----------

const FAQS = [
  {
    q: "¿A qué edad va la primera visita?",
    a: "Idealmente al año, y sin apuro: la primera cita es de juego y diagnóstico. Lo importante es que la primera memoria del dentista sea buena.",
  },
  {
    q: "¿Qué es la primera visita de juego?",
    a: "Una cita sin instrumental en la boca: recorrido, preguntas y un premio. El 87% de los niños atendidos así no llora en su segunda visita.",
  },
  {
    q: "¿Cómo funciona el descuento familiar?",
    a: "Tercer integrante en adelante: 15% a 25% según tratamiento, aplicado automáticamente en el plan familiar.",
  },
  {
    q: "¿Atienden urgencias de niños los fines de semana?",
    a: "Sábados de 9:00 a 14:00 con prioridad infantil. Los traumatismos dentales son urgencia real y se tratan en las primeras horas.",
  },
  {
    q: "¿Puedo agendar horas de adultos y niños juntas?",
    a: "Sí, es nuestra especialidad logística: horas en paralelo o seguidas para que la familia vaya una vez, no cuatro.",
  },
];

function Preguntas() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="preguntas-bruma" className="preguntas" aria-label="Preguntas frecuentes">
      <div className="shell">
        <p className="kicker">PREGUNTAS</p>
        <h2 className="h2">Lo que preguntan los papás.</h2>

        <div className="preguntas__lista">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`preguntas__item${isOpen ? " preguntas__item--open" : ""}`}>
                <button
                  className="preguntas__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="preguntas__q">{item.q}</span>
                  <span className="preguntas__icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="preguntas__panel" aria-hidden={!isOpen}>
                  <p className="preguntas__a">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- SECCION 7: #agenda-familiar ----------

function AgendaFamiliar() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [paraQuien, setParaQuien] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [duplicateWarn, setDuplicateWarn] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre.";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) e.email = "Ingresa tu email.";
    else if (!emailRe.test(email.trim())) e.email = "Revisa el email.";
    const digits = telefono.replace(/\D/g, "");
    if (telefono && digits.length < 8) e.telefono = "Teléfono debe tener al menos 8 dígitos.";
    if (!paraQuien) e.paraQuien = "Elige una opción.";
    if (!consent) e.consent = "Debes aceptar para continuar.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setDuplicateWarn(false);
    if (Object.keys(e).length > 0) return;

    const last = localStorage.getItem("bruma_last_submit");
    if (last) {
      const diff = Date.now() - Number(last);
      if (diff < 5 * 60 * 1000) {
        setDuplicateWarn(true);
        return;
      }
    }

    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("bruma_last_submit", String(Date.now()));
      setNombre("");
      setEmail("");
      setTelefono("");
      setParaQuien("");
      setMensaje("");
      setConsent(false);
      setErrors({});
      setTimeout(() => setSuccess(false), 8000);
    }, 1200);
  };

  return (
    <section id="agenda-familiar" className="agenda" aria-label="Agenda familiar">
      <div className="shell agenda__shell">
        <div className="agenda__left">
          <p className="kicker">AGENDAR</p>
          <h2 className="h2">La familia entera, en una sola ida.</h2>
          <p className="agenda__sub">
            Agende horas coordinadas para niños y adultos: la clínica que se organiza alrededor de la familia, no al
            revés.
          </p>

          <ul className="agenda__bullets">
            <li>
              <span className="dot" aria-hidden="true" />
              <span>Primera visita de juego — El niño conoce la clínica antes del tratamiento. El 87% no llora en la segunda.</span>
            </li>
            <li>
              <span className="dot" aria-hidden="true" />
              <span>Horas coordinadas — Niños y adultos en paralelo o seguidos. Una ida por mes, no cuatro.</span>
            </li>
            <li>
              <span className="dot" aria-hidden="true" />
              <span>Descuento familiar — Desde el tercer integrante: 15% a 25% según tratamiento.</span>
            </li>
            <li>
              <span className="dot" aria-hidden="true" />
              <span>Odontopediatra dedicada — Especialista en niños con manejo de ansiedad, no un dentista general con paciencia.</span>
            </li>
          </ul>

          <div className="agenda__contacto">
            <a href="tel:+56222857744" className="agenda__tel">
              +56 2 2285 7744
            </a>
            <a href="mailto:familia@brumadental.cl" className="agenda__mail">
              familia@brumadental.cl
            </a>
            <p className="agenda__dir">Av. Vicuña Mackenna 8100, local 4 · La Florida, Santiago</p>
          </div>
        </div>

        <div className="agenda__right">
          <form id="contact-form" className="agenda__form" onSubmit={handleSubmit} noValidate>
            <p className="agenda__form-title">Agendar primera visita</p>

            <div className="form-field">
              <label htmlFor="f-nombre">Nombre *</label>
              <input
                id="f-nombre"
                type="text"
                placeholder="Nombre y apellido"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={errors.nombre ? "input--error" : ""}
                autoComplete="name"
              />
              {errors.nombre && <span className="field-error">{errors.nombre}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="f-email">Email *</label>
              <input
                id="f-email"
                type="email"
                placeholder="hola@ejemplo.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "input--error" : ""}
                autoComplete="email"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="f-telefono">Teléfono</label>
              <input
                id="f-telefono"
                type="tel"
                placeholder="+56 9 ..."
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={errors.telefono ? "input--error" : ""}
                autoComplete="tel"
              />
              {errors.telefono && <span className="field-error">{errors.telefono}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="f-para">¿Para quién? *</label>
              <select
                id="f-para"
                value={paraQuien}
                onChange={(e) => setParaQuien(e.target.value)}
                className={errors.paraQuien ? "input--error" : ""}
              >
                <option value="">Selecciona</option>
                <option>Niño (primera visita de juego)</option>
                <option>Niño (control/urgencia)</option>
                <option>Adulto</option>
                <option>Familia completa</option>
              </select>
              {errors.paraQuien && <span className="field-error">{errors.paraQuien}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="f-mensaje">Mensaje</label>
              <textarea
                id="f-mensaje"
                placeholder="Cuéntanos edades y si hay urgencia..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={4}
              />
            </div>

            <div className="form-field form-field--check">
              <label className="check-label">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>Acepto ser contactado por WhatsApp o teléfono para coordinar la hora.</span>
              </label>
              {errors.consent && <span className="field-error">{errors.consent}</span>}
            </div>

            <button type="submit" className="btn-primary agenda__submit" disabled={loading}>
              {loading ? "Enviando..." : "Agendar primera visita"}
            </button>

            {duplicateWarn && (
              <p className="field-error" style={{ marginTop: "8px" }}>
                Ya enviaste hace poco. Intenta de nuevo en unos minutos o escribe por WhatsApp.
              </p>
            )}

            {success && (
              <div className="agenda__success" role="status">
                ¡Gracias! Te escribimos por WhatsApp en minutos para confirmar la hora.
              </div>
            )}

            <a
              href="https://wa.me/56222857744?text=Hola%20Bruma%2C%20quiero%20una%20primera%20visita."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost agenda__wa"
            >
              O escribir por WhatsApp
            </a>

            <p className="agenda__micro">Respuesta el mismo día · Lunes a sábado 9:00–19:30</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="shell footer__shell">
        <div className="footer__left">
          <span className="footer__wordmark">bruma</span>
          <p className="footer__tagline">Clínica dental familiar y odontopediatría · La Florida</p>
          <p className="footer__legal">
            Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de
            ejemplo y serán reemplazados por los de la clínica.
          </p>
        </div>
        <div className="footer__right">
          <nav className="footer__nav" aria-label="Footer">
            <a href="#cuidados">Tratamientos</a>
            <a href="#agenda-familiar">Agendar</a>
            <a href="#equipo-bruma">La clínica</a>
            <a href="#agenda-familiar">Contacto</a>
          </nav>
          <p className="footer__horario">Lun–Vie 9:00–19:00 · Sáb 9:00–13:00 · +56 2 2285 7744</p>
          <p className="footer__copy">© 2026 Bruma</p>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Enfoque />
        <Cuidados />
        <PrimeraHora />
        <ValoresFamilia />
        <EquipoBruma />
        <Preguntas />
        <AgendaFamiliar />
      </main>
      <Footer />
    </>
  );
}
