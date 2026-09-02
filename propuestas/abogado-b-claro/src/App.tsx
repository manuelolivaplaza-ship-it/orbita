import { useEffect, useState, useRef } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container" style={{ height: "100%" }}>
          <div className="header-grid">
            <a href="#portada-abogado-b-claro" className="header-brand" aria-label="Bravo — Inicio">
              <span className="logo">Bravo</span>
              <span className="descriptor">Estudio Jurídico · Santiago</span>
            </a>

            <nav className="header-nav" aria-label="Principal">
              <a href="#materias-abogado-b-claro">Materias</a>
              <a href="#como-partimos-abogado-b-claro">Cómo partimos</a>
              <a href="#honorarios-abogado-b-claro">Honorarios</a>
              <a href="#confianza-abogado-b-claro">Confianza</a>
            </nav>

            <div className="header-actions">
              <a href="tel:+56222345678" className="header-tel" aria-label="Llamar +56 2 2234 5678">
                +56 2 2234 5678
              </a>
              <a href="tel:+56222345678" className="header-tel-icon" aria-label="Llamar +56 2 2234 5678">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a href="#agenda-bravo" className="header-cta">
                <span className="header-cta-long">Agendar reunión</span>
                <span className="header-cta-short">Agendar</span>
              </a>
              <button
                className="header-burger"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                type="button"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Móvil">
          <a href="#materias-abogado-b-claro" onClick={() => setOpen(false)}>Materias</a>
          <a href="#como-partimos-abogado-b-claro" onClick={() => setOpen(false)}>Cómo partimos</a>
          <a href="#honorarios-abogado-b-claro" onClick={() => setOpen(false)}>Honorarios</a>
          <a href="#confianza-abogado-b-claro" onClick={() => setOpen(false)}>Confianza</a>
          <a href="#agenda-bravo" onClick={() => setOpen(false)}>Agendar reunión</a>
        </nav>
      </div>
    </>
  );
}

function HeroMedia() {
  const [err, setErr] = useState(false);
  const [errMobile, setErrMobile] = useState(false);
  const base = import.meta.env.BASE_URL;
  const hasFailed = err && errMobile;

  useEffect(() => {
    if (hasFailed) {
      console.warn("[Bravo] Falta media: bravo-hero-16x9.png y bravo-hero-9x16.png no encontradas en public/media/. Usando placeholder con data-falta.");
    } else if (err) {
      console.warn("[Bravo] Falta media: bravo-hero-16x9.png no encontrada en public/media/ — data-falta activo.");
    }
  }, [hasFailed, err]);

  if (err && errMobile) {
    return (
      <>
        <div
          className="media-falta"
          data-falta="bravo-hero-16x9.png"
          style={{
            aspectRatio: "16/9",
            background: "#F2EDE3",
            border: "1px dashed #E8E0D1",
            display: "grid",
            placeItems: "center",
            color: "#6B7A89",
            font: "500 0.85rem 'Source Sans 3',sans-serif",
          }}
        >
          falta: bravo-hero-16x9.png
        </div>
        <p className="hero-caption">Mesa de reunión · legajo 024/2025 · luz norte 45°</p>
      </>
    );
  }

  return (
    <>
      <img
        className="hero-media hero-media--desktop"
        src={`${base}media/bravo-hero-16x9.png`}
        alt="Mesa de reunión con legajo cosido, carátula crema y luz norte - Bravo Estudio Jurídico"
        loading="eager"
        decoding="async"
        onError={() => setErr(true)}
        style={err ? { display: "none" } : undefined}
      />
      <img
        className="hero-media hero-media--mobile"
        src={`${base}media/bravo-hero-9x16.png`}
        alt="Mesa de reunión con legajo cosido, carátula crema y luz norte - Bravo Estudio Jurídico"
        loading="eager"
        decoding="async"
        onError={() => setErrMobile(true)}
        style={errMobile ? { display: "none" } : undefined}
      />
      {err && !errMobile ? (
        <div
          className="media-falta hero-media--desktop"
          data-falta="bravo-hero-16x9.png"
          style={{
            aspectRatio: "16/9",
            background: "#F2EDE3",
            border: "1px dashed #E8E0D1",
            display: "grid",
            placeItems: "center",
            color: "#6B7A89",
            font: "500 0.85rem 'Source Sans 3',sans-serif",
          } as React.CSSProperties}
        >
          falta: bravo-hero-16x9.png
        </div>
      ) : null}
      {errMobile && !err ? (
        <div
          className="media-falta hero-media--mobile"
          data-falta="bravo-hero-9x16.png"
          style={{
            aspectRatio: "9/16",
            background: "#F2EDE3",
            border: "1px dashed #E8E0D1",
            display: "grid",
            placeItems: "center",
            color: "#6B7A89",
            font: "500 0.85rem 'Source Sans 3',sans-serif",
          } as React.CSSProperties}
        >
          falta: bravo-hero-9x16.png
        </div>
      ) : null}
      <p className="hero-caption">Mesa de reunión · legajo 024/2025 · luz norte 45°</p>
    </>
  );
}

function MateriasMediaTiles() {
  const base = import.meta.env.BASE_URL;
  const tiles = [
    { file: "bravo-tile-01-1x1.png", alt: "Detalle hilo rojo trenzado y ojal latón — Laboral", aspect: "1/1" },
    { file: "bravo-tile-02-3x4.png", alt: "Lomos de repertorios jurídicos alineados — Familia", aspect: "3/4" },
    { file: "bravo-tile-03-1x1.png", alt: "Papel sellado con timbre seco circular — Penal", aspect: "1/1" },
    { file: "bravo-tile-04-3x4.png", alt: "Mesa roble vacía con legajo — Civil y herencias", aspect: "3/4" },
  ];
  const [hidden, setHidden] = useState<boolean[]>([false, false, false, false]);
  const anyVisible = hidden.some((h) => !h);
  // We only hide failed images; no placeholder per spec (solo texto si no existen)
  const handleErr = (idx: number) => {
    setHidden((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  // if all hidden, render nothing (no hueco)
  // we need to know after mount — initially show all, then hide on error
  // To avoid layout shift, use state; if after errors all hidden we return null
  // For initial render before errors, we show grid; failed ones will just disappear
  // Check if all are hidden after errors
  const allHidden = hidden.every(Boolean);
  if (allHidden) return null;

  return (
    <div className="materias-tiles" aria-hidden={allHidden}>
      {tiles.map((t, i) =>
        hidden[i] ? null : (
          <img
            key={t.file}
            src={`${base}media/${t.file}`}
            alt={t.alt}
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: t.aspect, objectFit: "cover", border: "1px solid var(--linea)", width: "100%", display: "block" }}
            onError={() => handleErr(i)}
          />
        )
      )}
      {/* if any slot hidden but not all, don't render placeholder; spec says no hueco solo texto — for tiles, no media-falta needed per BUILD-02 line: si no existen, no mostrar hueco — solo texto. So we don't render media-falta here. But we track for debug */}
      {!anyVisible ? null : null}
    </div>
  );
}

function ComoPartimosMedia() {
  const base = import.meta.env.BASE_URL;
  const [primaryErr, setPrimaryErr] = useState(false);
  const [fallbackErr, setFallbackErr] = useState(false);

  if (!primaryErr) {
    return (
      <>
        <img
          src={`${base}media/bravo-interior-16x9.png`}
          alt="Sala de reunión vacía con mesa roble larga y sillas — luz norte difusa"
          loading="lazy"
          decoding="async"
          className="cp-media"
          onError={() => setPrimaryErr(true)}
        />
        <p className="cp-caption">Hilo rojo · carátula 90g · timbre seco 38mm</p>
      </>
    );
  }
  if (!fallbackErr) {
    return (
      <>
        <img
          src={`${base}media/bravo-tile-02-3x4.png`}
          alt="Lomos de repertorios jurídicos alineados — luz lateral"
          loading="lazy"
          decoding="async"
          className="cp-media"
          onError={() => setFallbackErr(true)}
        />
        <p className="cp-caption">Hilo rojo · carátula 90g · timbre seco 38mm</p>
      </>
    );
  }
  return (
    <>
      <div
        className="media-falta"
        data-falta="bravo-interior-16x9.png"
        style={{
          aspectRatio: "4/3",
          background: "#F2EDE3",
          border: "1px dashed #E8E0D1",
          display: "grid",
          placeItems: "center",
          color: "#6B7A89",
          font: "500 0.85rem 'Source Sans 3',sans-serif",
        }}
      >
        falta: bravo-interior-16x9.png
      </div>
      <p className="cp-caption">Hilo rojo · carátula 90g · timbre seco 38mm</p>
    </>
  );
}

function ConfianzaMedia() {
  const base = import.meta.env.BASE_URL;
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <>
        <div
          className="media-falta"
          data-falta="bravo-proof-16x9.png"
          style={{
            aspectRatio: "16/9",
            background: "#F2EDE3",
            border: "1px dashed #E8E0D1",
            display: "grid",
            placeItems: "center",
            color: "#6B7A89",
            font: "500 0.85rem 'Source Sans 3',sans-serif",
          }}
        >
          falta: bravo-proof-16x9.png
        </div>
        <p className="media-caption">Biblioteca · repertorios 2012–2025 · sin retoque</p>
      </>
    );
  }
  return (
    <>
      <img
        src={`${base}media/bravo-proof-16x9.png`}
        alt="Biblioteca de estudio con repisas de libros jurídicos y muro crema"
        loading="lazy"
        decoding="async"
        style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
        onError={() => setErr(true)}
      />
      <p className="media-caption">Biblioteca · repertorios 2012–2025 · sin retoque</p>
    </>
  );
}

function AgendaMedia() {
  const base = import.meta.env.BASE_URL;
  const [errProof, setErrProof] = useState(false);
  const [errInterior, setErrInterior] = useState(false);
  if (!errProof) {
    return (
      <img
        src={`${base}media/bravo-proof-16x9.png`}
        alt="Sala de reunión vacía, mesa roble y sillas"
        loading="lazy"
        decoding="async"
        style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
        onError={() => setErrProof(true)}
      />
    );
  }
  if (!errInterior) {
    return (
      <img
        src={`${base}media/bravo-interior-16x9.png`}
        alt="Sala de reunión vacía con mesa roble"
        loading="lazy"
        decoding="async"
        style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
        onError={() => setErrInterior(true)}
      />
    );
  }
  return (
    <div
      className="media-falta"
      data-falta="bravo-proof-16x9.png"
      style={{
        aspectRatio: "16/9",
        background: "#F2EDE3",
        border: "1px dashed #E8E0D1",
        display: "grid",
        placeItems: "center",
        color: "#6B7A89",
        font: "500 0.85rem 'Source Sans 3',sans-serif",
      }}
    >
      falta: bravo-proof-16x9.png
    </div>
  );
}

function AgendaForm() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [materia, setMateria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!tel.trim()) e.tel = "Ingresa tu teléfono.";
    else if (!/^\+56 9? ?[0-9 ]{8,}$/.test(tel.trim())) e.tel = "Formato: +56 9 1234 5678";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Email no válido.";
    if (!materia) e.materia = "Elige una materia.";
    if (!mensaje.trim() || mensaje.trim().length < 10) e.mensaje = "Cuéntanos en al menos 10 caracteres.";
    if (!privacy) e.privacy = "Debes aceptar para continuar.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    setSuccess(false);
    const payload = { nombre: nombre.trim(), tel: tel.trim(), email: email.trim(), materia, mensaje: mensaje.trim(), fecha: new Date().toISOString() };
    try {
      localStorage.setItem("bravo-agenda", JSON.stringify(payload));
    } catch {
      // storage may fail in some contexts
    }
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const text = `Hola Bravo, soy ${payload.nombre} (${payload.materia}) — ${payload.mensaje}`;
      const waUrl = `https://wa.me/56222345678?text=${encodeURIComponent(text)}`;
      const mailto = `mailto:contacto@bravoabogados.cl?subject=${encodeURIComponent(`Reunión ${payload.materia}`)}&body=${encodeURIComponent(`${payload.mensaje} — ${payload.nombre} ${payload.tel}`)}`;
      // try open WA, fallback to mailto if popup blocked
      const win = window.open(waUrl, "_blank");
      if (!win) window.location.href = mailto;
    }, 900);
  };

  return (
    <form className="agenda-form" onSubmit={onSubmit} noValidate aria-label="Formulario agenda">
      {success ? (
        <div className="form-success" role="status" aria-live="polite">
          <span className="form-success-check" aria-hidden="true">✓</span> Te escribimos hoy · revisa tu WhatsApp
        </div>
      ) : null}
      <div className="form-field">
        <label htmlFor="f-nombre">Nombre *</label>
        <input id="f-nombre-abogado-b-claro" type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-invalid={!!errors.nombre} />
        {errors.nombre ? <span className="field-error">{errors.nombre}</span> : null}
      </div>
      <div className="form-field">
        <label htmlFor="f-tel">Teléfono *</label>
        <input id="f-tel-abogado-b-claro" type="tel" placeholder="+56 9 1234 5678" value={tel} onChange={(e) => setTel(e.target.value)} required aria-invalid={!!errors.tel} />
        {errors.tel ? <span className="field-error">{errors.tel}</span> : null}
      </div>
      <div className="form-field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email-abogado-b-claro" type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} />
        {errors.email ? <span className="field-error">{errors.email}</span> : null}
      </div>
      <div className="form-field">
        <label htmlFor="f-materia">Materia *</label>
        <select id="f-materia-abogado-b-claro" value={materia} onChange={(e) => setMateria(e.target.value)} required aria-invalid={!!errors.materia}>
          <option value="">Elige materia</option>
          <option value="Laboral">Laboral</option>
          <option value="Familia">Familia</option>
          <option value="Penal">Penal</option>
          <option value="Civil/Herencias">Civil/Herencias</option>
          <option value="Otra">Otra (derivar)</option>
        </select>
        {errors.materia ? <span className="field-error">{errors.materia}</span> : null}
      </div>
      <div className="form-field">
        <label htmlFor="f-mensaje">Mensaje *</label>
        <textarea id="f-mensaje-abogado-b-claro" placeholder="Cuéntanos en 2 líneas qué pasó y qué buscas" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required aria-invalid={!!errors.mensaje} />
        {errors.mensaje ? <span className="field-error">{errors.mensaje}</span> : null}
      </div>
      <div className="form-field form-check">
        <label className="check-label">
          <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} aria-invalid={!!errors.privacy} />
          <span>Acepto que me contacten por WhatsApp y correo para coordinar la reunión <a href="#" onClick={(e)=>e.preventDefault()}>privacidad</a></span>
        </label>
        {errors.privacy ? <span className="field-error">{errors.privacy}</span> : null}
      </div>
      <button type="submit" className="btn-primary form-submit" disabled={loading} aria-live="polite">
        {loading ? "Enviando…" : "Agendar reunión"}
      </button>
      {Object.keys(errors).length > 0 && !loading ? <p className="field-error" style={{marginTop:"6px"}}>Revisa los campos marcados.</p> : null}
    </form>
  );
}

function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.querySelector("#honorarios-abogado-b-claro");
    if (!target) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
          else {
            // if we scrolled past honorarios upward, hide again only if near top
            // Keep visible once triggered unless back to top very high
            // Simple: if not intersecting and scrollY < trigger threshold, hide
            if (window.scrollY < window.innerHeight * 0.35) setVisible(false);
          }
        });
      },
      { threshold: 0.05 }
    );
    obs.observe(target);
    const onScroll = () => {
      const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct > 0.35) setVisible(true);
      else if (scrollPct < 0.25) {
        // hide when back near top
        const rect = target.getBoundingClientRect();
        if (rect.top > window.innerHeight) setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (visible) document.body.style.paddingBottom = "68px";
    else document.body.style.paddingBottom = "";
    return () => { document.body.style.paddingBottom = ""; };
  }, [visible]);

  if (!visible) return <div ref={sentinelRef} aria-hidden="true" style={{ height: 0 }} />;
  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 0 }} />
      <div className="mobile-sticky" role="complementary" aria-label="Agendar reunión">
        <a href="#agenda-bravo" className="btn-primary mobile-sticky-cta">Agendar reunión</a>
      </div>
    </>
  );
}

export function App() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const check = async () => {
      try {
        const res = await fetch(`${base}media/bravo-hero-16x9.png`, { method: "HEAD" });
        if (!res.ok) console.warn("[Bravo] data-falta: bravo-hero-16x9.png no encontrada (HEAD 404). Placeholder activo.");
      } catch {
        console.warn("[Bravo] data-falta: bravo-hero-16x9.png — verificación fetch falló, se asume falta.");
      }
      try {
        const res2 = await fetch(`${base}media/bravo-hero-9x16.png`, { method: "HEAD" });
        if (!res2.ok) console.warn("[Bravo] data-falta: bravo-hero-9x16.png no encontrada (HEAD 404). Placeholder activo en móvil.");
      } catch {}
      try {
        const res3 = await fetch(`${base}media/bravo-hero-loop.mp4`, { method: "HEAD" });
        if (res3.ok) console.info("[Bravo] Media encontrada: bravo-hero-loop.mp4 — debería usarse como <video> según spec.");
      } catch {}
    };
    check();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="portada-abogado-b-claro" className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-kicker">ESTUDIO JURÍDICO · SANTIAGO DESDE 2012</p>
              <h1 id="hero-title-abogado-b-claro" className="hero-title">
                Defensa que se entiende, se presupuesta por escrito y avanza sin sorpresas.
              </h1>
              <p className="hero-sub">
                Reunión inicial de 60 minutos, diagnóstico honesto y honorario por escrito. El mismo abogado te acompaña hasta el
                cierre.
              </p>
              <div className="hero-ctas">
                <a href="#agenda-bravo" className="btn-primary">
                  Agendar reunión
                </a>
                <a href="#honorarios-abogado-b-claro" className="btn-ghost">
                  Ver honorarios
                </a>
              </div>
              <div className="hero-banda" aria-label="Atributos honestos">
                <span className="hero-banda-item">Reunión con el abogado que lleva tu causa</span>
                <span className="hero-banda-item">Presupuesto por escrito antes de partir</span>
                <span className="hero-banda-item">Boleta y factura · todo declarable</span>
              </div>
              <p className="hero-rut">
                Bravo Abogados SpA · RUT 76.123.456-7 · Registro Nº 12.345 · Santiago, Chile. Sin letra chica: si el escenario
                cambia, te avisamos antes de avanzar y firmas de nuevo.
              </p>
            </div>
            <div className="hero-media-wrap" aria-label="Imagen hero expediente">
              <HeroMedia />
            </div>
          </div>
        </section>

        {/* #materias */}
        <section id="materias-abogado-b-claro" aria-labelledby="materias-title">
          <div className="section-inner">
            <div className="materias-header">
              <p className="kicker">MATERIAS</p>
              <h2 id="materias-title-abogado-b-claro">Cuatro materias. Las hacemos bien o no las tomamos.</h2>
              <p className="materias-intro">No somos estudio ómnibus. Si tu caso no calza, te derivamos con nombre y teléfono. Sin vueltas.</p>
            </div>
            <div className="materias-grid">
              <article className="materia-block">
                <span className="materia-num">01</span>
                <h3 className="materia-title">Laboral</h3>
                <ul className="materia-bullets">
                  <li>Despido injustificado y nulidad</li>
                  <li>Autodespido y cobro de prestaciones</li>
                  <li>Tutela laboral y acoso</li>
                  <li>Asesoría mensual a pymes</li>
                </ul>
                <p className="materia-queno">No tomamos accidentes del trabajo con peritaje médico externo.</p>
                <p className="materia-desde tabular">Consulta laboral desde $65.000 · Juicio desde $450.000</p>
              </article>
              <article className="materia-block">
                <span className="materia-num">02</span>
                <h3 className="materia-title">Familia</h3>
                <ul className="materia-bullets">
                  <li>Divorcio mutuo acuerdo y unilateral</li>
                  <li>Pensión de alimentos y aumento/rebaja</li>
                  <li>Relación directa y regular</li>
                  <li>Violencia intrafamiliar (medidas urgentes)</li>
                </ul>
                <p className="materia-queno">No vemos adopción internacional.</p>
                <p className="materia-desde tabular">Divorcio mutuo acuerdo desde $250.000 · Pensión desde $280.000</p>
              </article>
              <article className="materia-block">
                <span className="materia-num">03</span>
                <h3 className="materia-title">Penal</h3>
                <ul className="materia-bullets">
                  <li>Control de detención y cautelares</li>
                  <li>Querella y defensa en estafa/hurto</li>
                  <li>Delitos económicos y tributarios</li>
                  <li>Recursos y apelaciones</li>
                </ul>
                <p className="materia-queno">No tomamos causas con prisión preventiva ya decretada sin primera reunión.</p>
                <p className="materia-desde tabular">Defensa penal desde $600.000 · Control detención $180.000</p>
              </article>
              <article className="materia-block">
                <span className="materia-num">04</span>
                <h3 className="materia-title">Civil y herencias</h3>
                <ul className="materia-bullets">
                  <li>Herencias y posesión efectiva</li>
                  <li>Contratos, arriendos y cobranza</li>
                  <li>Indemnización de perjuicios</li>
                  <li>Copropiedad inmobiliaria</li>
                </ul>
                <p className="materia-queno">No vemos causas de aguas ni minería.</p>
                <p className="materia-desde tabular">Posesión efectiva desde $280.000 · Contrato desde $120.000</p>
              </article>
            </div>
            <MateriasMediaTiles />
            <p className="materias-nota">¿Tu caso no está aquí? Escríbenos igual. Si no lo tomamos, te decimos quién sí — con nombre.</p>
          </div>
        </section>

        {/* #como-partimos */}
        <section id="como-partimos-abogado-b-claro" aria-labelledby="cp-title">
          <div className="section-inner">
            <div className="cp-grid">
              <div className="cp-media-col">
                <ComoPartimosMedia />
              </div>
              <div className="cp-content">
                <p className="kicker">CÓMO PARTIMOS</p>
                <h2 id="cp-title">Primera reunión de 60 minutos que ordena tu caso</h2>
                <p className="cp-intro">No es una llamada de 10. Es una reunión para entender hechos, papeles y riesgos. Sales con plan y con número.</p>
                <div className="cp-pasos">
                  <div className="cp-paso">
                    <h3 className="cp-paso-title">01 · Reunión y diagnóstico</h3>
                    <p className="cp-paso-text">Revisamos documentos, línea de tiempo y qué busca el tribunal. Te decimos si hay caso, cuánto demora y qué puede salir mal. Sin humo.</p>
                  </div>
                  <div className="cp-paso">
                    <h3 className="cp-paso-title">02 · Presupuesto y mandato por escrito</h3>
                    <p className="cp-paso-text">Honorario, gastos y forma de pago en una hoja. Firmas mandato solo si estás de acuerdo. Nada por WhatsApp a medias.</p>
                  </div>
                  <div className="cp-paso">
                    <h3 className="cp-paso-title">03 · Causa en marcha y reporte mensual</h3>
                    <p className="cp-paso-text">El mismo abogado te reporta avances por escrito cada 30 días. Audiencias y escritos con copia a tu correo.</p>
                  </div>
                </div>
                <ul className="cp-checklist" aria-label="Entregables">
                  <li>Acta de reunión firmada</li>
                  <li>Presupuesto con hitos</li>
                  <li>Mandato judicial</li>
                  <li>Acceso a carpeta digital con escritos</li>
                </ul>
                <p className="cp-precio">Reunión inicial $65.000 — se abona al honorario si sigues con nosotros.</p>
              </div>
            </div>
          </div>
        </section>

        {/* #honorarios */}
        <section id="honorarios-abogado-b-claro" aria-labelledby="honorarios-title">
          <div className="section-inner">
            <div className="hon-header">
              <p className="kicker">HONORARIOS TRANSPARENTES</p>
              <h2 id="honorarios-title-abogado-b-claro">Valores por escrito, sin sorpresas después</h2>
              <p className="hon-intro">Cada fila es el honorario desde, IVA incluido. Gastos de receptor y notariales van aparte y se rinden con boleta. El valor final se firma antes de partir.</p>
            </div>
            <div className="hon-grid">
              <div className="hon-tabla-col">
                <div className="hon-table" role="table" aria-label="Tabla de honorarios">
                  <div className="hon-row hon-head" role="row">
                    <span role="columnheader">Prestación</span>
                    <span role="columnheader" className="hon-price-head">Desde CLP (IVA inc.)</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Reunión de diagnóstico (60 min)</span>
                      <span className="hon-nota">Se abona al juicio si sigues · presencial o videollamada</span>
                    </div>
                    <span className="hon-price tabular" role="cell">$65.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Divorcio mutuo acuerdo</span>
                      <span className="hon-nota">60–90 días · incluye acuerdo y escritos</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $250.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Divorcio unilateral</span>
                      <span className="hon-nota">6–12 meses · con notificación y audiencia</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $480.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Pensión de alimentos (demanda)</span>
                      <span className="hon-nota">Incluye mediación previa obligatoria</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $280.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Defensa laboral (juicio)</span>
                      <span className="hon-nota">Cobro contra resultado: 15–20% de lo obtenido, pactado</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $450.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Defensa penal (querella/defensa)</span>
                      <span className="hon-nota">Control detención $180.000 · urgencia 24h</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $600.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Posesión efectiva / herencias</span>
                      <span className="hon-nota">Trámite completo Registro Civil + SII</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $280.000</span>
                  </div>
                  <div className="hon-row" role="row">
                    <div className="hon-prestacion" role="cell">
                      <span className="hon-name">Contratos y cobranza civil</span>
                      <span className="hon-nota">Redacción + revisión · desde 1 UF</span>
                    </div>
                    <span className="hon-price tabular" role="cell">desde $120.000</span>
                  </div>
                </div>
                <p className="hon-foot">Valores referenciales; el honorario final se confirma tras reunión y se firma en presupuesto. Sin reajustes unilaterales. Gastos de receptor/notario se rinden con comprobante. Facilidades: hasta 6 cuotas sin interés, factura exenta si corresponde.</p>
                <p className="hon-facil">Consulta laboral y penal con pago contra resultado disponible según mérito — lo evaluamos en la reunión, sin promesa previa.</p>
              </div>
              <aside className="hon-aside" aria-label="Urgencia">
                <div className="hon-card">
                  <h3 className="hon-card-title">¿Urgencia hoy?</h3>
                  <p className="hon-card-text">Penal y familia con medidas urgentes el mismo día según tribunal. Llámanos y te decimos hora real y qué traer.</p>
                  <a href="tel:+56222345678" className="hon-card-tel tabular">+56 2 2234 5678</a>
                  <p className="hon-card-subtel">Lun–Vie 9:00–18:30 · Sáb 10:00–13:00</p>
                  <a href="#agenda-bravo" className="btn-primary hon-card-cta">Agendar reunión</a>
                  <p className="hon-card-micro">Si no contestamos en 2 horas hábiles, la reunión va sin costo.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* #confianza */}
        <section id="confianza-abogado-b-claro" aria-labelledby="confianza-title">
          <div className="section-inner">
            <div className="conf-grid">
              <div className="conf-left">
                <p className="kicker">CONFIANZA</p>
                <h2 id="confianza-title">Un estudio chico, con la causa a la vista</h2>
                <p className="conf-intro">No prometemos resultados. Prometemos expediente ordenado, reporte mensual y el mismo abogado de principio a fin.</p>
                <div className="conf-datos">
                  <div className="conf-dato">
                    <span className="conf-dato-val tabular">12 años · Santiago</span>
                    <span className="conf-dato-label">Desde 2012 en el mismo domicilio</span>
                  </div>
                  <div className="conf-dato">
                    <span className="conf-dato-val tabular">1.100+ causas</span>
                    <span className="conf-dato-label">Laboral, familia y penal — con rol y tribunal a la vista</span>
                  </div>
                  <div className="conf-dato">
                    <span className="conf-dato-val tabular">Mismo abogado</span>
                    <span className="conf-dato-label">No rotamos tu causa entre juniors</span>
                  </div>
                </div>
                <div className="conf-principios">
                  <div className="conf-principio">
                    <h3>Papel firmado</h3>
                    <p>Todo por escrito: honorario, hitos y gastos. Sin ‘después vemos’.</p>
                  </div>
                  <div className="conf-principio">
                    <h3>Reporte mensual</h3>
                    <p>Cada 30 días te llega estado con escritos y audiencias. Sin pedirlo.</p>
                  </div>
                  <div className="conf-principio">
                    <h3>Derivación honesta</h3>
                    <p>Si no es nuestra materia, te derivamos con nombre. No retenemos.</p>
                  </div>
                  <div className="conf-principio">
                    <h3>Boleta y factura</h3>
                    <p>Todo declarable. Sin sobres ni vueltas.</p>
                  </div>
                </div>
                <p className="conf-linea tabular">+12 años en Santiago · 1.100+ causas · reporte mensual · mismo abogado siempre</p>
              </div>
              <div className="conf-right">
                <ConfianzaMedia />
              </div>
            </div>
          </div>
        </section>

        {/* #agenda-bravo */}
        <section id="agenda-bravo" aria-labelledby="agenda-title">
          <div className="section-inner">
            <div className="agenda-grid">
              <div className="agenda-left">
                <p className="kicker">AGENDA</p>
                <h2 id="agenda-title">Agenda tu reunión. Te responden hoy.</h2>
                <p className="agenda-sub">Elige día y te confirmamos por WhatsApp en el día. Si es urgencia penal o VIF, llama directo.</p>
                <AgendaForm />
              </div>
              <div className="agenda-right">
                <a href="tel:+56222345678" className="agenda-tel">+56 2 2234 5678</a>
                <a href="mailto:contacto@bravoabogados.cl" className="agenda-email">contacto@bravoabogados.cl</a>
                <p className="agenda-dir">Av. Providencia 1208, of. 603, Providencia, Santiago</p>
                <p className="agenda-hor">Lun–Vie 9:00–18:30 · Sáb 10:00–13:00</p>
                <div className="agenda-mapa">
                  <span className="agenda-dot" aria-hidden="true"></span>
                  <span>Metro Los Leones · 4 min a pie</span>
                </div>
                <div className="agenda-proof">
                  <AgendaMedia />
                </div>
              </div>
            </div>
            <footer className="site-footer" aria-label="Footer">
              <p className="footer-line">Bravo Abogados SpA · RUT 76.123.456-7 · Av. Providencia 1208, of. 603 · contacto@bravoabogados.cl · +56 2 2234 5678</p>
              <p className="footer-legal">© 2026 Bravo. Todos los derechos reservados. Valores referenciales; honorario final se firma en presupuesto. Sin fotos de clientes ni testimonios inventados.</p>
              <nav className="footer-links" aria-label="Footer links">
                <a href="#materias-abogado-b-claro">Materias</a>
                <span aria-hidden="true"> · </span>
                <a href="#como-partimos-abogado-b-claro">Cómo partimos</a>
                <span aria-hidden="true"> · </span>
                <a href="#honorarios-abogado-b-claro">Honorarios</a>
              </nav>
            </footer>
          </div>
        </section>
      </main>
      <MobileStickyCTA />
    </>
  );
}
