import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body when sheet open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className="pausa-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header className={`pausa-header ${scrolled ? "scrolled" : ""}`} role="banner">
        <div className="pausa-header__inner">
          <div className="pausa-wordmark">
            <a href="#la-mesa" aria-label="Pausa inicio">pausa</a>
          </div>

          <nav className="pausa-nav" aria-label="Principal">
            <a href="#la-mesa">La mesa</a>
            <span aria-hidden="true" style={{ color: "var(--line)" }}>·</span>
            <a href="#carta-pausa">Carta</a>
            <span aria-hidden="true" style={{ color: "var(--line)" }}>·</span>
            <a href="#salas-silencio">Salas</a>
            <span aria-hidden="true" style={{ color: "var(--line)" }}>·</span>
            <a href="#membresia">Membresía</a>
            <span aria-hidden="true" style={{ color: "var(--line)" }}>·</span>
            <a href="#reserva-mesa">Reserva</a>
          </nav>

          <div className="pausa-header__right">
            <a href="tel:+56981234477" className="pausa-phone pausa-phone--desktop">+56 9 8123 4477</a>
            <a href="#reserva-mesa" className="pausa-cta">Reservar mesa</a>
            <button
              className="pausa-hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`pausa-sheet ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="pausa-sheet__backdrop" onClick={() => setOpen(false)} />
        <div className="pausa-sheet__panel" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="pausa-sheet__head">
            <span className="pausa-wordmark" style={{ fontSize: 20 }}>pausa</span>
            <button className="pausa-sheet__close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="pausa-sheet__nav" aria-label="Móvil">
            <a href="#la-mesa" onClick={() => setOpen(false)}>La mesa</a>
            <a href="#carta-pausa" onClick={() => setOpen(false)}>Carta</a>
            <a href="#salas-silencio" onClick={() => setOpen(false)}>Salas</a>
            <a href="#membresia" onClick={() => setOpen(false)}>Membresía</a>
            <a href="#reserva-mesa" onClick={() => setOpen(false)}>Reserva</a>
          </nav>
          <div className="pausa-sheet__foot">
            <a href="tel:+56981234477" className="pausa-phone">+56 9 8123 4477</a>
            <a href="#reserva-mesa" className="pausa-cta" onClick={() => setOpen(false)}>Reservar mesa</a>
          </div>
        </div>
      </div>
    </>
  );
}

function Hero() {
  const [errDesktop, setErrDesktop] = useState(false);
  const [errMobile, setErrMobile] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch("/media/pausa-hero-16x9.png", { method: "HEAD" });
        if (!res.ok) {
          console.warn("media falta: pausa-hero-16x9.png");
        }
      } catch {
        console.warn("media falta: pausa-hero-16x9.png");
      }
      try {
        const res2 = await fetch("/media/pausa-hero-9x16.png", { method: "HEAD" });
        if (!res2.ok) console.warn("media falta: pausa-hero-9x16.png");
      } catch {
        console.warn("media falta: pausa-hero-9x16.png");
      }
    };
    check();
    if (errDesktop) console.warn("media falta: pausa-hero-16x9.png");
    if (errMobile) console.warn("media falta: pausa-hero-9x16.png");
  }, [errDesktop, errMobile]);

  return (
    <section id="la-mesa" className="pausa-hero" aria-label="La mesa">
      <div className="pausa-hero__grid">
        <motion.div
          className="pausa-canvas pausa-canvas--enter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="pausa-canvas__media">
            {!errDesktop ? (
              <img
                src="/media/pausa-hero-16x9.png"
                alt="Mesa de roble claro vacía con taza de cerámica mate piedra, libro abierto boca abajo y servilleta de lino, luz lateral de mañana por ventana alta sin personas"
                className="img-desktop"
                loading="eager"
                decoding="async"
                onError={() => {
                  console.warn("media falta: pausa-hero-16x9.png");
                  setErrDesktop(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-hero-16x9.png">media falta: pausa-hero-16x9.png</div>
            )}
            {!errMobile ? (
              <img
                src="/media/pausa-hero-9x16.png"
                alt="Mesa de roble claro vacía con taza de cerámica mate piedra, libro abierto boca abajo y servilleta de lino, luz lateral de mañana por ventana alta sin personas"
                className="img-mobile"
                loading="eager"
                decoding="async"
                onError={() => {
                  console.warn("media falta: pausa-hero-9x16.png");
                  setErrMobile(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-hero-9x16.png" style={{ display: "none" }}>media falta: pausa-hero-9x16.png</div>
            )}
            {errDesktop && errMobile ? (
              <div className="media-falta" data-falta="pausa-hero-16x9.png">media falta: pausa-hero-16x9.png</div>
            ) : null}

            <div className="pausa-chip">Desde $3.200 · filtrado del día</div>

            <motion.div
              className="pausa-overlay pausa-overlay--enter"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.34, delay: 0.08, ease: "easeOut" }}
            >
              <p className="pausa-kicker">PROVIDENCIA · DESDE 2021 · 08:00–19:00</p>
              <motion.h1
                className="pausa-h1 pausa-h1--enter"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
              >
                Siéntate. El café llega solo. El ruido se queda afuera.
              </motion.h1>
              <motion.p
                className="pausa-bajada pausa-bajada--enter"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.34, delay: 0.12, ease: "easeOut" }}
              >
                Café de especialidad + sala silenciosa. Sin reuniones, sin parlantes. Trae tu libro o pide uno prestado. Mesas de 90 minutos.
              </motion.p>
              <div className="pausa-ctas">
                <a href="#reserva-mesa" className="pausa-btn-primary">Reservar mesa silenciosa</a>
                <a href="#carta-pausa" className="pausa-btn-secondary">Ver carta completa</a>
              </div>
              <p className="pausa-micro">Respuesta por WhatsApp en &lt;20 min · Av. Providencia 1208, local 3</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="pausa-banda">Sala silenciosa · Sin llamadas · WiFi solo para lectura · Se reserva por tramos de 90 min</div>
    </section>
  );
}

function CartaPausa() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("media falta: pausa-tile-cafe-3x4.png");
  }, [err]);
  return (
    <section id="carta-pausa" className="pausa-carta" aria-label="Carta">
      <div className="grid pausa-carta__grid">
        <div className="pausa-carta__header">
          <p className="pausa-kicker">CARTA</p>
          <h2 className="pausa-h2">Café que no necesita apellido.</h2>
          <p className="pausa-sub">Tostamos quincenal. Filtrados a la vista. Todo se sirve en cerámica, no en cartón. Si se agota el grano, cambiamos la carta.</p>
        </div>

        <div className="pausa-carta__main">
          <div className="pausa-carta__tableHeader" aria-hidden="true">
            <span>Qué</span>
            <span>Cómo</span>
            <span>Desde</span>
          </div>
          <div className="pausa-carta__list">
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Filtrado del día — V60 · grano rotativo (La Unión / Colombia lavada)</div>
              <div className="pausa-carta__como">250ml</div>
              <div className="pausa-carta__precio">$3.200</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Flat white — Doble shot + leche texturizada</div>
              <div className="pausa-carta__como">180ml</div>
              <div className="pausa-carta__precio">$4.200</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Cappuccino — Cacao espolvoreado</div>
              <div className="pausa-carta__como">180ml</div>
              <div className="pausa-carta__precio">$4.200</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Cold brew — 14h en frío, sin azúcar</div>
              <div className="pausa-carta__como">300ml</div>
              <div className="pausa-carta__precio">$4.500</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Té hebras sueltas — Earl grey / sencha / rooibos</div>
              <div className="pausa-carta__como">tetera 400ml</div>
              <div className="pausa-carta__precio">$4.800</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Tostada masa madre — Palta, ricotta o mantequilla</div>
              <div className="pausa-carta__como">c/u</div>
              <div className="pausa-carta__precio">$4.900</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Roll de canela — Glaseado leve</div>
              <div className="pausa-carta__como">110g</div>
              <div className="pausa-carta__precio">$3.400</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Galleta avena y nuez — Horneada hoy</div>
              <div className="pausa-carta__como">90g</div>
              <div className="pausa-carta__precio">$2.800</div>
            </div>
            <div className="pausa-carta__row">
              <div className="pausa-carta__que">Préstamo de libro — Deja tu carnet, lleva uno</div>
              <div className="pausa-carta__como">por visita</div>
              <div className="pausa-carta__precio">incluido</div>
            </div>
          </div>
          <p className="pausa-carta__nota">Valores referenciales en CLP, IVA incluido. Se confirma al pagar. Sin propina sugerida. Trae tu termo: -$300.</p>
        </div>

        <aside className="pausa-carta__aside" aria-label="Bandeja pausa">
          <div className="pausa-carta__asideImg">
            {!err ? (
              <img
                src="/media/pausa-tile-cafe-3x4.png"
                alt="Bandeja de roble con taza piedra y galleta avena y nuez sobre papel avena"
                loading="lazy"
                onError={() => {
                  console.warn("media falta: pausa-tile-cafe-3x4.png");
                  setErr(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-tile-cafe-3x4.png">media falta: pausa-tile-cafe-3x4.png</div>
            )}
          </div>
          <div className="pausa-carta__asideBody">
            <p className="pausa-carta__asideTitle">Bandeja pausa</p>
            <p className="pausa-carta__asideDesc">Filtrado + tostada o roll</p>
            <p className="pausa-carta__asidePrice">$7.400</p>
            <a href="#reserva-mesa" className="pausa-btn-ghost">Pedir bandeja →</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SalasSilencio() {
  const [errA, setErrA] = useState(false);
  const [errB, setErrB] = useState(false);
  const [errC, setErrC] = useState(false);
  useEffect(() => {
    if (errA) console.warn("media falta: pausa-sala-4x3.png");
    if (errB) console.warn("media falta: pausa-sala-privada-1x1.png");
    if (errC) console.warn("media falta: pausa-interior-16x9.png");
  }, [errA, errB, errC]);
  return (
    <section id="salas-silencio" className="pausa-salas" aria-label="Salas">
      <div className="grid">
        <div className="pausa-salas__header">
          <p className="pausa-kicker">SALAS</p>
          <h2 className="pausa-h2">Silencio con luz, no con alfombra.</h2>
          <p className="pausa-sub">Tres salas, una regla: voz baja. Sin llamadas, sin reuniones con speaker. Reserva por 90 minutos.</p>
        </div>
      </div>
      <div className="grid pausa-salas__blocks">
        {/* Bloque A */}
        <article className="pausa-sala">
          <div className="pausa-sala__media pausa-sala__media--4x3">
            {!errA ? (
              <img
                src="/media/pausa-sala-4x3.png"
                alt="Mesa comunal roble con 6 sillas y ventana corrida, sala vacía luz pareja"
                loading="lazy"
                onError={() => {
                  console.warn("media falta: pausa-sala-4x3.png");
                  setErrA(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-sala-4x3.png">media falta: pausa-sala-4x3.png</div>
            )}
          </div>
          <div className="pausa-sala__body">
            <p className="pausa-sala__kicker">SALA COMÚN · 12 puestos</p>
            <h3 className="pausa-sala__title">Mesa larga, luz pareja.</h3>
            <p className="pausa-sala__desc">La del centro. Para leer, escribir o mirar por la ventana. Nadie te pregunta qué haces.</p>
            <div className="pausa-sala__datos">
              <span>90 min</span>
              <span>Enchufe en mesa</span>
              <span>Sin reserva previa si hay cupo</span>
            </div>
            <p className="pausa-sala__precio">desde $0 con consumo $3.200</p>
            <a href="#reserva-mesa" className="pausa-link">Ver disponibilidad →</a>
          </div>
        </article>

        {/* Bloque B alternancia */}
        <article className="pausa-sala pausa-sala--b">
          <div className="pausa-sala__body">
            <p className="pausa-sala__kicker">SALA PEQUEÑA · 2 personas</p>
            <h3 className="pausa-sala__title">Para dos que no quieren hablar fuerte.</h3>
            <p className="pausa-sala__desc">Mesa redonda de 80cm. Ideal para corregir un texto o tomar notas juntos.</p>
            <div className="pausa-sala__datos">
              <span>90 min</span>
              <span>Puerta corredera</span>
              <span>Reserva previa</span>
            </div>
            <p className="pausa-sala__precio">$6.500 / 90 min por persona</p>
            <p className="pausa-sala__precioNota">consumo aparte, mínimo $3.200</p>
            <a href="#reserva-mesa" className="pausa-link">Reservar sala 2p →</a>
          </div>
          <div className="pausa-sala__media pausa-sala__media--1x1">
            {!errB ? (
              <img
                src="/media/pausa-sala-privada-1x1.png"
                alt="Sala pequeña 2 personas vacía con mesa redonda y lámpara de papel"
                loading="lazy"
                onError={() => {
                  console.warn("media falta: pausa-sala-privada-1x1.png");
                  setErrB(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-sala-privada-1x1.png">media falta: pausa-sala-privada-1x1.png</div>
            )}
          </div>
        </article>

        {/* Bloque C */}
        <article className="pausa-sala">
          <div className="pausa-sala__media pausa-sala__media--16x9">
            {!errC ? (
              <img
                src="/media/pausa-interior-16x9.png"
                alt="Sala privada 4 personas vacía con mesa roble y pizarra de papel"
                loading="lazy"
                onError={() => {
                  console.warn("media falta: pausa-interior-16x9.png");
                  setErrC(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-interior-16x9.png">media falta: pausa-interior-16x9.png</div>
            )}
          </div>
          <div className="pausa-sala__body">
            <p className="pausa-sala__kicker">SALA PRIVADA · 4 personas</p>
            <h3 className="pausa-sala__title">La que se cierra.</h3>
            <p className="pausa-sala__desc">Para taller íntimo o club de lectura. Se arrienda completa, no por puesto.</p>
            <div className="pausa-sala__datos">
              <span>90 min</span>
              <span>Pizarra papel</span>
              <span>Café incluido 4 filtrados</span>
            </div>
            <p className="pausa-sala__precio">$18.000 / 90 min sala completa</p>
            <a href="#reserva-mesa" className="pausa-link">Reservar sala privada →</a>
          </div>
        </article>

        <p className="pausa-salas__nota">Todas las salas con luz natural. No hay salas sin ventana. Cancelación hasta 2h antes sin cargo.</p>
      </div>
    </section>
  );
}

function Membresia() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("media falta: pausa-tile-libros-1x1.png");
  }, [err]);
  return (
    <section id="membresia" className="pausa-membresia" aria-label="Membresía">
      <div className="grid">
        <div className="pausa-membresia__header">
          <p className="pausa-kicker">MEMBRESÍA</p>
          <h2 className="pausa-h2">Si vienes tres veces por semana, ya tienes casa.</h2>
        </div>
      </div>
      <div className="grid pausa-membresia__grid">
        <div className="pausa-membresia__main">
          <article className="pausa-membresia__row pausa-membresia__row--destacada">
            <div className="pausa-membresia__rowTop">
              <span className="pausa-badge">MÁS PEDIDA</span>
            </div>
            <div className="pausa-membresia__rowBody">
              <div className="pausa-membresia__rowText">
                <h3 className="pausa-membresia__title">Membresía Pausa — 12 visitas / mes</h3>
                <ul className="pausa-membresia__bullets">
                  <li>12 ingresos de 90 min</li>
                  <li>Filtrado incluido en cada visita</li>
                  <li>Préstamo de libro extendido 14 días</li>
                  <li>Invitación a lecturas mensuales</li>
                </ul>
              </div>
              <div className="pausa-membresia__priceBox">
                <p className="pausa-membresia__price">$45.000 / mes</p>
                <p className="pausa-membresia__priceNota">equivale a $3.750 por visita</p>
                <a href="#reserva-mesa" className="pausa-link">Hacerme miembro →</a>
              </div>
            </div>
          </article>

          <article className="pausa-membresia__row">
            <div className="pausa-membresia__rowBody">
              <div className="pausa-membresia__rowText">
                <h3 className="pausa-membresia__title">Day pass — 1 día, 2 bloques</h3>
                <ul className="pausa-membresia__bullets">
                  <li>Mañana 08:00–12:00 o tarde 14:00–19:00</li>
                  <li>1 filtrado incluido</li>
                  <li>Sala común garantizada</li>
                </ul>
              </div>
              <div className="pausa-membresia__priceBox">
                <p className="pausa-membresia__price pausa-membresia__price--ink">$7.500 / día</p>
                <a href="#reserva-mesa" className="pausa-link">Comprar day pass →</a>
              </div>
            </div>
          </article>

          <article className="pausa-membresia__row">
            <div className="pausa-membresia__rowBody">
              <div className="pausa-membresia__rowText">
                <h3 className="pausa-membresia__title">Bono 5 visitas — sin vencimiento 60 días</h3>
                <ul className="pausa-membresia__bullets">
                  <li>5 ingresos 90 min</li>
                  <li>Transferible 1 vez</li>
                  <li>Consumo aparte</li>
                </ul>
              </div>
              <div className="pausa-membresia__priceBox">
                <p className="pausa-membresia__price pausa-membresia__price--ink">$21.000</p>
                <a href="#reserva-mesa" className="pausa-link">Comprar bono →</a>
              </div>
            </div>
          </article>

          <p className="pausa-membresia__micro">Membresía sin amarre: pausas por WhatsApp hasta 18:00 día anterior. Bono y day pass no reembolsables, sí transferibles avisando.</p>
        </div>

        <aside className="pausa-membresia__aside" aria-label="Libros">
          <div className="pausa-membresia__asideImg">
            {!err ? (
              <img
                src="/media/pausa-tile-libros-1x1.png"
                alt="Pila de libros lomo claro sin títulos legibles sobre roble"
                loading="lazy"
                onError={() => {
                  console.warn("media falta: pausa-tile-libros-1x1.png");
                  setErr(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-tile-libros-1x1.png">media falta: pausa-tile-libros-1x1.png</div>
            )}
          </div>
          <p className="pausa-membresia__caption">Lomos claros, sin títulos legibles</p>
        </aside>
      </div>
    </section>
  );
}

function HorariosRetiro() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("media falta: pausa-proof-16x9.png");
  }, [err]);
  return (
    <section id="horarios-retiro" className="pausa-horarios" aria-label="Horarios y retiro">
      <div className="grid">
        <h2 className="pausa-h2 pausa-horarios__title">Horarios sin letra chica.</h2>
      </div>
      <div className="grid pausa-horarios__cards">
        <div className="pausa-horarios__card">
          <p className="pausa-horarios__cardTitle">Horario sala silenciosa</p>
          <div className="pausa-horarios__table">
            <div className="pausa-horarios__row">
              <span>Lun–vie</span>
              <span>08:00–19:00</span>
            </div>
            <div className="pausa-horarios__row">
              <span>Sáb</span>
              <span>09:00–14:00 / Dom cerrado</span>
            </div>
          </div>
          <p className="pausa-horarios__nota">Último ingreso 90 min antes del cierre. A las 19:00 se baja la luz, no se sube la música.</p>
        </div>
        <div className="pausa-horarios__card">
          <p className="pausa-horarios__cardTitle">Retiro y despacho (café en grano)</p>
          <ul className="pausa-horarios__list">
            <li>Retiro en Pausa sin costo</li>
            <li>Despacho RM $3.900 (gratis sobre $35.000)</li>
            <li>Grano 250g desde $9.900</li>
          </ul>
          <div className="pausa-horarios__chips">
            <span>Webpay</span>
            <span>Transferencia</span>
            <span>Efectivo</span>
          </div>
        </div>
      </div>
      <div className="grid">
        <figure className="pausa-horarios__friso">
          <div className="pausa-horarios__frisoImg">
            {!err ? (
              <img
                src="/media/pausa-proof-16x9.png"
                alt="Detalle de servilleta de lino arrugada y borde de taza piedra sobre roble"
                loading="lazy"
                onError={() => {
                  console.warn("media falta: pausa-proof-16x9.png");
                  setErr(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="pausa-proof-16x9.png">media falta: pausa-proof-16x9.png</div>
            )}
          </div>
          <figcaption>Detalle — lino arrugado, 85mm f/8, luz 10:30</figcaption>
        </figure>
      </div>
    </section>
  );
}

function PreguntasPausa() {
  const faqs = [
    {
      q: "¿Puedo ir sin reserva?",
      a: "A la sala común sí, si hay cupo. Salas pequeña y privada solo con reserva. Si vienes sin reserva y está llena, te anotamos y te avisamos por WhatsApp.",
    },
    {
      q: "¿Puedo hacer una reunión con speaker?",
      a: "No. Pausa no es cowork. Voz baja y sin llamadas. Para talleres con conversación, reserva la sala privada de 4.",
    },
    {
      q: "¿Puedo quedarme más de 90 minutos?",
      a: "Sí, si hay cupo renuevas el bloque. Con membresía renuevas sin fila. Sin membresía, consumo mínimo $3.200 por bloque.",
    },
    {
      q: "¿Tienen wifi e impresora?",
      a: "Wifi solo para lectura (bloqueamos streaming). No hay impresora. Trae lo impreso. Hay enchufes en cada mesa.",
    },
    {
      q: "¿Puedo llevar a mi perro?",
      a: "No. Sala silenciosa y sin alergias. Afuera hay ganchos para correa a la sombra con agua.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="preguntas-pausa" className="pausa-faq" aria-label="Preguntas">
      <div className="grid">
        <div className="pausa-faq__header">
          <p className="pausa-kicker">PREGUNTAS</p>
          <h2 className="pausa-h2">Lo que preguntan antes de reservar.</h2>
        </div>
        <div className="pausa-faq__list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`pausa-faq__item ${isOpen ? "open" : ""}`}>
                <button
                  className="pausa-faq__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="pausa-faq__plus" aria-hidden="true">+</span>
                </button>
                <div className="pausa-faq__content" style={{ display: isOpen ? "block" : "none" }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReservaMesa() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sala, setSala] = useState("");
  const [fecha, setFecha] = useState("");
  const [bloque, setBloque] = useState("");
  const [personas, setPersonas] = useState("1");
  const [mensaje, setMensaje] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [duplicateMsg, setDuplicateMsg] = useState("");

  const todayStr = new Date().toISOString().split("T")[0];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre y apellido.";
    const digits = whatsapp.replace(/\D/g, "");
    if (!whatsapp.trim()) e.whatsapp = "Ingresa tu WhatsApp.";
    else if (digits.length < 8) e.whatsapp = "Mínimo 8 dígitos.";
    if (!sala) e.sala = "Elige una sala.";
    if (!fecha) e.fecha = "Elige una fecha.";
    if (!bloque) e.bloque = "Elige un bloque.";
    const p = parseInt(personas, 10);
    if (!personas || isNaN(p) || p < 1 || p > 4) e.personas = "Personas 1 a 4.";
    if (!consent) e.consent = "Debes aceptar ser contactado.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setDuplicateMsg("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // anti-duplicado 5 min
    try {
      const raw = localStorage.getItem("pausa-reserva-mesa");
      if (raw) {
        const last = JSON.parse(raw) as { ts: number };
        if (Date.now() - last.ts < 5 * 60 * 1000) {
          setDuplicateMsg("Ya enviaste una reserva hace pocos minutos. Te escribimos por WhatsApp en breve.");
          return;
        }
      }
    } catch {
      // ignore
    }

    setLoading(true);
    setSuccess(false);

    const text = `Hola Pausa, quiero reservar mesa. Nombre: ${nombre} | WhatsApp: ${whatsapp} | Sala: ${sala} | Fecha: ${fecha} | Bloque: ${bloque} | Personas: ${personas} | Mensaje: ${mensaje}`;
    const waUrl = `https://wa.me/56981234477?text=${encodeURIComponent(text)}`;

    // simulate loading then success + open WhatsApp
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("pausa-reserva-mesa", JSON.stringify({ ts: Date.now(), nombre, whatsapp, sala, fecha, bloque, personas }));
      } catch {
        // ignore
      }
      // open WhatsApp in new tab (fallback, does not block tests)
      try {
        window.open(waUrl, "_blank");
      } catch {
        window.location.href = waUrl;
      }
    }, 700);
  };

  return (
    <section id="reserva-mesa" className="pausa-reserva" aria-label="Reservar">
      <div className="grid pausa-reserva__grid">
        <div className="pausa-reserva__left">
          <p className="pausa-kicker">RESERVAR</p>
          <h2 className="pausa-h2">Reserva tu mesa silenciosa.</h2>
          <p className="pausa-sub">Elige sala, fecha y bloque. Te confirmamos por WhatsApp en minutos. Si no hay cupo, te proponemos el siguiente.</p>
          <ul className="pausa-reserva__bullets">
            <li><span className="pausa-dot" aria-hidden="true" />Bloques de 90 min — Empiezan cada hora en punto.</li>
            <li><span className="pausa-dot" aria-hidden="true" />Sala común sin reserva si hay cupo — Llega y siéntate.</li>
            <li><span className="pausa-dot" aria-hidden="true" />Cancelación hasta 2h antes — Sin cargo, por WhatsApp.</li>
          </ul>
          <div className="pausa-reserva__contact">
            <a href="tel:+56981234477" className="pausa-reserva__tel">+56 9 8123 4477</a>
            <a href="mailto:hola@pausa.cl" className="pausa-reserva__mail">hola@pausa.cl</a>
            <p className="pausa-reserva__addr">Av. Providencia 1208, local 3 · Providencia, Santiago</p>
          </div>
        </div>

        <div className="pausa-reserva__right">
          <form id="contact-form" className="pausa-form" onSubmit={handleSubmit} noValidate>
            <p className="pausa-form__title">Reservar mesa</p>

            <label className="pausa-field">
              <span>Nombre</span>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre y apellido"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                aria-invalid={!!errors.nombre}
                className={errors.nombre ? "input-error" : ""}
                required
              />
              {errors.nombre && <span className="pausa-field__error">{errors.nombre}</span>}
            </label>

            <label className="pausa-field">
              <span>WhatsApp</span>
              <input
                type="tel"
                name="whatsapp"
                placeholder="+56 9 ..."
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                aria-invalid={!!errors.whatsapp}
                className={errors.whatsapp ? "input-error" : ""}
                required
              />
              {errors.whatsapp && <span className="pausa-field__error">{errors.whatsapp}</span>}
            </label>

            <label className="pausa-field">
              <span>Sala</span>
              <select
                name="sala"
                value={sala}
                onChange={(e) => setSala(e.target.value)}
                aria-invalid={!!errors.sala}
                className={errors.sala ? "input-error" : ""}
                required
              >
                <option value="">Selecciona sala</option>
                <option value="Sala común — sin reserva / con reserva">Sala común — sin reserva / con reserva</option>
                <option value="Sala pequeña 2p">Sala pequeña 2p</option>
                <option value="Sala privada 4p">Sala privada 4p</option>
                <option value="Day pass">Day pass</option>
                <option value="Membresía">Membresía</option>
              </select>
              {errors.sala && <span className="pausa-field__error">{errors.sala}</span>}
            </label>

            <label className="pausa-field">
              <span>Fecha</span>
              <input
                type="date"
                name="fecha"
                min={todayStr}
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                aria-invalid={!!errors.fecha}
                className={errors.fecha ? "input-error" : ""}
                required
              />
              {errors.fecha && <span className="pausa-field__error">{errors.fecha}</span>}
            </label>

            <label className="pausa-field">
              <span>Bloque</span>
              <select
                name="bloque"
                value={bloque}
                onChange={(e) => setBloque(e.target.value)}
                aria-invalid={!!errors.bloque}
                className={errors.bloque ? "input-error" : ""}
                required
              >
                <option value="">Selecciona bloque</option>
                <option value="08:00–09:30">08:00–09:30</option>
                <option value="09:30–11:00">09:30–11:00</option>
                <option value="11:00–12:30">11:00–12:30</option>
                <option value="14:00–15:30">14:00–15:30</option>
                <option value="15:30–17:00">15:30–17:00</option>
                <option value="17:00–18:30">17:00–18:30</option>
              </select>
              {errors.bloque && <span className="pausa-field__error">{errors.bloque}</span>}
            </label>

            <label className="pausa-field">
              <span>Personas</span>
              <input
                type="number"
                name="personas"
                min={1}
                max={4}
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                aria-invalid={!!errors.personas}
                className={errors.personas ? "input-error" : ""}
                required
              />
              {errors.personas && <span className="pausa-field__error">{errors.personas}</span>}
            </label>

            <label className="pausa-field pausa-field--full">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                placeholder="Si vienes con acompañante, cuéntanos..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={3}
                style={{ height: 88 }}
              />
            </label>

            <label className="pausa-checkbox">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-invalid={!!errors.consent}
                required
              />
              <span>Acepto ser contactado por WhatsApp para confirmar la reserva.</span>
            </label>
            {errors.consent && <span className="pausa-field__error">{errors.consent}</span>}
            {duplicateMsg && <p className="pausa-field__error">{duplicateMsg}</p>}

            <button type="submit" className="pausa-btn-primary pausa-btn--full" disabled={loading}>
              {loading ? "Enviando..." : "Reservar por WhatsApp →"}
            </button>

            {success && (
              <p className="pausa-form__success">¡Listo! Te escribimos por WhatsApp en minutos para confirmar el bloque.</p>
            )}

            <a href="https://wa.me/56981234477?text=Hola%20Pausa%2C%20quiero%20reservar%20mesa" target="_blank" rel="noopener noreferrer" className="pausa-btn-ghost pausa-btn--full pausa-btn--ghostSalvia">
              O escribir por WhatsApp
            </a>

            <p className="pausa-form__micro">Respuesta en &lt;20 min · Lun–vie 08:00–19:00 · Sáb 09:00–14:00</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pausa-footer" role="contentinfo">
      <div className="grid pausa-footer__grid">
        <div className="pausa-footer__left">
          <p className="pausa-footer__wordmark">pausa</p>
          <p className="pausa-footer__tagline">Casa de pausa · café + sala silenciosa · Providencia</p>
          <p className="pausa-footer__legal">Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y contacto son de ejemplo y serán reemplazados por los de la casa.</p>
        </div>
        <div className="pausa-footer__right">
          <nav className="pausa-footer__nav" aria-label="Footer">
            <a href="#carta-pausa">Carta</a>
            <span aria-hidden="true">·</span>
            <a href="#salas-silencio">Salas</a>
            <span aria-hidden="true">·</span>
            <a href="#membresia">Membresía</a>
            <span aria-hidden="true">·</span>
            <a href="#reserva-mesa">Reserva</a>
          </nav>
          <p className="pausa-footer__copy">© 2026 Pausa</p>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  useEffect(() => {
    // OG image meta — ensures pausa-og-16x9.png referenced without rendering
    const existing = document.querySelector('meta[property="og:image"]');
    if (!existing) {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image");
      m.setAttribute("content", "/media/pausa-og-16x9.png");
      document.head.appendChild(m);
    } else {
      existing.setAttribute("content", "/media/pausa-og-16x9.png");
    }
    // also report missing og if needed
    fetch("/media/pausa-og-16x9.png", { method: "HEAD" }).then((r) => {
      if (!r.ok) console.warn("media falta: pausa-og-16x9.png");
    }).catch(() => console.warn("media falta: pausa-og-16x9.png"));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CartaPausa />
        <SalasSilencio />
        <Membresia />
        <HorariosRetiro />
        <PreguntasPausa />
        <ReservaMesa />
      </main>
      <Footer />
    </>
  );
}
