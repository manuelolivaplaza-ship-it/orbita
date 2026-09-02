import { useState, useEffect } from "react";

type FormState = {
  nombre: string;
  tel: string;
  modalidad: string;
  horario: string;
  motivo: string;
  mensaje: string;
  acepto: boolean;
};

export function App() {
  const [drawer, setDrawer] = useState(false);
  const [form, setForm] = useState<FormState>({ nombre: "", tel: "", modalidad: "", horario: "", motivo: "", mensaje: "", acepto: false });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("noctua-reserva");
      if (raw) {
        const d = JSON.parse(raw) as Partial<FormState>;
        setForm((f) => ({ ...f, modalidad: d.modalidad ?? "", horario: d.horario ?? "" }));
      }
    } catch {}
  }, []);

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.nombre.trim().length < 2) e.nombre = "Mínimo 2 caracteres.";
    if (!/^9\d{8}$/.test(form.tel.replace(/\s/g, ""))) e.tel = "Ingresa 9 dígitos (ej: 9 1234 5678).";
    if (!form.modalidad) e.modalidad = "Elige modalidad.";
    if (!form.horario) e.horario = "Elige horario.";
    if (!form.motivo) e.motivo = "Elige motivo.";
    if (form.mensaje.length > 300) e.mensaje = "Máximo 300 caracteres.";
    if (!form.acepto) e.acepto = "Debes aceptar la confidencialidad.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("noctua-reserva", JSON.stringify({ modalidad: form.modalidad, horario: form.horario, nombre: form.nombre, tel: form.tel }));
      } catch {}
      const text = `Hola NOCTUA, quiero reservar primera sesión ${form.modalidad} ${form.horario} — motivo ${form.motivo}`;
      window.open(`https://wa.me/56912345678?text=${encodeURIComponent(text)}`, "_blank");
    }, 600);
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#alivio-nocturno" className="logo">
            <span className="logo-main">NOCTUA</span>
            <span className="logo-sub">SALUD MENTAL · SANTIAGO</span>
          </a>
          <nav className="nav-desktop" aria-label="Navegación principal">
            <a href="#primera-sesion">Primera sesión</a>
            <a href="#modalidad-horaria">Modalidad</a>
            <a href="#especialidades-etapas">Especialidades</a>
            <a href="#aranceles-fonasa">Aranceles</a>
          </nav>
          <div className="header-right">
            <a href="tel:+56912345678" className="header-tel">+56 9 1234 5678</a>
            <a href="#reserva-confidencial" className="btn-reservar">Reservar</a>
            <button className="hamburger" aria-label="Menú" onClick={() => setDrawer(!drawer)}>{drawer ? "✕" : "☰"}</button>
          </div>
        </div>
      </header>
      {drawer && (
        <nav className={`drawer ${drawer ? "open" : ""}`} aria-label="Menú móvil">
          <a href="#primera-sesion" onClick={() => setDrawer(false)}>Primera sesión</a>
          <a href="#modalidad-horaria" onClick={() => setDrawer(false)}>Modalidad</a>
          <a href="#especialidades-etapas" onClick={() => setDrawer(false)}>Especialidades</a>
          <a href="#aranceles-fonasa" onClick={() => setDrawer(false)}>Aranceles</a>
          <a href="#encuadre-terapeutico" onClick={() => setDrawer(false)}>Encuadre</a>
          <a href="#reserva-confidencial" onClick={() => setDrawer(false)}>Reserva confidencial</a>
          <a href="tel:+56912345678">+56 9 1234 5678</a>
        </nav>
      )}

      <section id="alivio-nocturno" className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">CONSULTA PRESENCIAL Y TELECONSULTA · LAS CONDES — HASTA 22:00</p>
            <h1>Terapia contenida para <em>noches difíciles.</em></h1>
            <p className="hero-bajada">Psicólogas y psicólogos con horas esta semana. Primera sesión de 50 min, confidencial, sin derivaciones innecesarias. Presencial en Las Condes o teleconsulta en todo Chile.</p>
            <ul className="hero-bullets">
              <li>Hora disponible esta semana</li>
              <li>Fonasa e Isapre (reembolso)</li>
              <li>Agenda hasta 22:00, también sábado</li>
            </ul>
            <div className="cta-row">
              <a href="#reserva-confidencial" className="btn-primary">Reservar primera sesión por WhatsApp</a>
              <a href="#aranceles-fonasa" className="btn-ghost">Ver aranceles →</a>
            </div>
            <div className="pill-precio">Desde $28.000 Fonasa · Particular $45.000</div>
            <p className="pill-nota">Valores referenciales; se confirma al agendar.</p>
            <p className="hero-signal">Respuesta en &lt; 3 h hoy · 09:00–22:00</p>
          </div>
          <div className="hero-media">
            <div className="hero-media-inner">
              <div className="media-falta" data-falta="noctua-hero-16x9.png">FALTA: noctua-hero-16x9.png<br /><span style={{ fontWeight: 400, fontSize: 11, opacity: 0.7 }}>Box nocturno · sillón lino + lámpara ámbar + ventana bokeh Santiago</span></div>
            </div>
            <div className="hero-overlay" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section id="primera-sesion" className="sec-primera">
        <div className="wrap">
          <div className="primera-layout">
            <div className="primera-main">
              <p className="section-kicker">PRIMERA SESIÓN</p>
              <h2 className="section-h2">Qué pasa en los primeros 50 minutos</h2>
              <p className="section-bajada">Sin interrogatorio. Sin tarea para la casa el día 1. Solo encuadre y alivio inicial.</p>
              <div className="pasos-grid">
                <div className="paso-card">
                  <p className="paso-num">01</p>
                  <h3>Llegas y te contienes</h3>
                  <p>Revisamos motivo de consulta, sueño, ánimo y red de apoyo. Sin formularios eternos.</p>
                  <span className="pill-time">15 min</span>
                </div>
                <div className="paso-card">
                  <p className="paso-num">02</p>
                  <h3>Acordamos encuadre</h3>
                  <p>Frecuencia, modalidad (presencial/tele), objetivos de 4 semanas y confidencialidad. Te vas con plan escrito.</p>
                  <span className="pill-time">20 min</span>
                </div>
                <div className="paso-card">
                  <p className="paso-num">03</p>
                  <h3>Primer alivio</h3>
                  <p>Herramienta concreta para esta semana (higiene de sueño, pausa, registro). No es terapia eterna sin norte.</p>
                  <span className="pill-time">15 min</span>
                </div>
              </div>
              <p className="banda-primera">Duración 50 min · Confidencial · Sin derivación automática</p>
            </div>
            <div className="primera-tile">
              <div className="tile-img">
                <div className="media-falta" data-falta="noctua-tile-01-1x1.png" style={{ minHeight: 280 }}>FALTA: noctua-tile-01-1x1.png<br /><span style={{ fontWeight: 400, fontSize: 11 }}>Escritorio · cuaderno lino cerrado · lámpara ámbar</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modalidad-horaria" className="sec-modalidad">
        <div className="wrap">
          <p className="section-kicker">MODALIDAD</p>
          <h2 className="section-h2">Presencial o teleconsulta, misma contención</h2>
          <p className="section-bajada">Eliges cada semana. Cambias sin costo si avisas 24 h antes.</p>
          <div className="modalidad-split">
            <div className="mod-card">
              <p className="kicker">LAS CONDES · PRESENCIAL</p>
              <h3>Box nocturno hasta 22:00</h3>
              <ul>
                <li>· Av. Apoquindo 4700, piso 8 · Metro Manquehue 4 min</li>
                <li>· Lun–Vie 09:00–22:00 · Sáb 09:00–14:00</li>
                <li>· Box individual, sin sala de espera compartida</li>
              </ul>
              <span className="tag-estado">Hay hora esta semana</span>
            </div>
            <div className="mod-card">
              <p className="kicker">TODO CHILE · TELECONSULTA</p>
              <h3>Desde tu pieza, con encuadre</h3>
              <ul>
                <li>· Link privado (no Zoom con sala de espera)</li>
                <li>· Mismo arancel, misma duración 50 min</li>
                <li>· Grabación nunca · Apuntes compartidos si quieres</li>
              </ul>
              <span className="tag-estado">Sin traslado · Misma reserva</span>
            </div>
          </div>
          <div className="tabla-horarios">
            <div className="horario-row"><span><strong>Hoy</strong> — quedan 3 horas</span><a href="#reserva-confidencial" className="horario-cta">Ver horas →</a></div>
            <div className="horario-row"><span><strong>Mañana</strong> — 5 horas</span><a href="#reserva-confidencial" className="horario-cta">Ver horas →</a></div>
            <div className="horario-row"><span><strong>Sábado</strong> — 2 horas</span><a href="#reserva-confidencial" className="horario-cta">Ver horas →</a></div>
          </div>
          <div className="interior-img">
            <div className="media-falta" data-falta="noctua-interior-16x9.png">FALTA: noctua-interior-16x9.png<br /><span style={{ fontWeight: 400, fontSize: 11 }}>Pasillo nocturno · puerta entornada · luz ámbar por rendija</span></div>
          </div>
        </div>
      </section>

      <section id="especialidades-etapas" className="sec-especialidades">
        <div className="wrap">
          <div className="esp-layout">
            <div className="esp-main">
              <p className="section-kicker">ESPECIALIDADES</p>
              <h2 className="section-h2">No atendemos todo. Atendemos bien esto</h2>
              <p className="section-bajada">Derivamos si no es nuestro foco. Sin lista infinita.</p>
              <div className="esp-grid">
                <div className="esp-card">
                  <h3>Adulto · ansiedad, insomnio, burnout</h3>
                  <p>Rumiación nocturna, despertares 03:00, carga laboral. Enfoque TCC breve + higiene de sueño.</p>
                  <ul><li>· 4–8 sesiones foco sueño</li><li>· Herramientas para volver a dormir sin fármaco</li></ul>
                  <span className="esp-precio">desde $45.000</span>
                </div>
                <div className="esp-card">
                  <h3>Adolescente 14–19 · ánimo, autoexigencia</h3>
                  <p>Crisis escolar, redes, identidad. Sesión con y sin padres según caso. Consentimiento informado.</p>
                  <ul><li>· Encuadre familiar claro</li><li>· Coordinación con colegio si autorizas</li></ul>
                  <span className="esp-precio">desde $45.000</span>
                </div>
                <div className="esp-card">
                  <h3>Pareja · crisis, distancia, celos</h3>
                  <p>Sesión 70 min, encuadre de comunicación y acuerdos. No es mediación judicial.</p>
                  <ul><li>· 70 min por sesión</li><li>· Acuerdos escritos, no tareas eternas</li></ul>
                  <span className="esp-precio">desde $65.000 (70 min)</span>
                </div>
                <div className="esp-card">
                  <h3>Duelo, separación, cambio de ciudad/trabajo</h3>
                  <p>Contención y ritmo propio, sin apurar el alta.</p>
                  <ul><li>· Espacio sin juicio</li><li>· Ritmo acordado, alta cuando corresponde</li></ul>
                  <span className="esp-precio">desde $45.000</span>
                </div>
              </div>
              <p className="esp-nota">Si buscas TEA severo, adicciones con internación o peritaje judicial, te derivamos a red especializada. Lo decimos antes de cobrar.</p>
            </div>
            <div className="esp-tiles">
              <div className="tile-img"><div className="media-falta" data-falta="noctua-tile-02-1x1.png" style={{ minHeight: 220 }}>FALTA: noctua-tile-02-1x1.png<br /><span style={{ fontWeight: 400, fontSize: 11 }}>Manta lana + cojín lino · detalle textil</span></div></div>
              <div className="tile-34"><div className="media-falta" data-falta="noctua-tile-03-3x4.png" style={{ minHeight: 300 }}>FALTA: noctua-tile-03-3x4.png<br /><span style={{ fontWeight: 400, fontSize: 11 }}>Planta sombra · maceta cerámica grafito</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="aranceles-fonasa" className="sec-aranceles">
        <div className="wrap">
          <div className="aranceles-layout">
            <div className="aranceles-main">
              <p className="section-kicker">ARANCELES</p>
              <h2 className="section-h2">Aranceles claros, sin letra chica</h2>
              <p className="section-bajada">Particular y Fonasa. Boleta reembolsable Isapre. Se confirma al reservar.</p>
              <div className="tabla-carta">
                <div className="tabla-header"><span>Modalidad</span><span>Duración</span><span>Arancel</span></div>
                <div className="carta-row">
                  <div className="carta-left"><strong>Psicoterapia individual</strong><span>Boleta reembolsable</span></div>
                  <span className="carta-mid">50 min</span>
                  <div style={{ textAlign: "right" }}><span className="carta-price">Particular $45.000 <small>Fonasa $28.000 copago (tramo B/C)</small></span></div>
                  <a href="#reserva-confidencial" className="carta-cta">Reservar →</a>
                </div>
                <div className="carta-row">
                  <div className="carta-left"><strong>Adolescente 14–19</strong><span>Boleta reembolsable</span></div>
                  <span className="carta-mid">50 min</span>
                  <span className="carta-price">Particular $45.000 <small>Fonasa $28.000</small></span>
                  <a href="#reserva-confidencial" className="carta-cta">Reservar →</a>
                </div>
                <div className="carta-row">
                  <div className="carta-left"><strong>Pareja</strong><span>70 min, no 50 — Fonasa no aplica</span></div>
                  <span className="carta-mid">70 min</span>
                  <span className="carta-price">$65.000</span>
                  <a href="#reserva-confidencial" className="carta-cta">Reservar →</a>
                </div>
                <div className="carta-row">
                  <div className="carta-left"><strong>Pack 4 sesiones</strong><span>foco sueño/ansiedad · 4×50 min · 2 cuotas</span></div>
                  <span className="carta-mid">4×50 min</span>
                  <span className="carta-price">$160.000 <small>$40.000 c/u</small><span className="badge-ahorro">Ahorro $20.000</span></span>
                  <a href="#reserva-confidencial" className="carta-cta">Reservar →</a>
                </div>
              </div>
              <div className="bloque-fonasa">Fonasa: pagas copago $28.000 el día de la sesión (tramo B/C/D). Isapre: boleta $45.000 reembolsable según plan (30–60%). No atendemos GES.</div>
              <p className="nota-pie">Valores referenciales 2026. Se confirman al agendar según tramo y disponibilidad. No cobramos por WhatsApp previo.</p>
            </div>
            <div className="aranceles-proof">
              <div className="proof-img"><div className="media-falta" data-falta="noctua-proof-16x9.png" style={{ minHeight: 200 }}>FALTA: noctua-proof-16x9.png<br /><span style={{ fontWeight: 400, fontSize: 11 }}>Boleta desenfocada · sin RUT legible · lámpara ámbar</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="encuadre-terapeutico" className="sec-encuadre">
        <div className="wrap">
          <p className="section-kicker">ENCUADRE</p>
          <h2 className="section-h2">Cómo trabajamos (y cómo no)</h2>
          <p className="section-bajada">TCC breve, foco en sueño y rumiación. Sin promesas de alta en 3 sesiones.</p>
          <div className="encuadre-cols">
            <div>
              <h3>Hacemos</h3>
              <ul className="hacemos">
                <li>Sesiones 50 min con objetivo escrito</li>
                <li>Tarea breve solo si te sirve</li>
                <li>Coordinación con psiquiatra si tomas fármacos (con tu permiso)</li>
                <li>Alta cuando duermes y rumeas menos, no por calendario</li>
              </ul>
            </div>
            <div className="no-hacemos">
              <h3>No hacemos</h3>
              <ul>
                <li>· No diagnosticamos por WhatsApp</li>
                <li>· No vendemos pack eterno</li>
                <li>· No atendemos urgencia vital (ver abajo)</li>
              </ul>
            </div>
          </div>
          <div className="banda-urgencia">¿Crisis ahora? Si hay riesgo vital, llama a Salud Responde 600 360 7777 o acude a SAPU/Urgencia. NOCTUA no es dispositivo de urgencia 24h.</div>
          <blockquote className="cita-editorial">“Dormir mal no es flojera. Es un síntoma que se entrena.”</blockquote>
        </div>
      </section>

      <section id="reserva-confidencial" className="sec-reserva">
        <div className="wrap">
          <div className="reserva-layout">
            <div className="reserva-info">
              <p className="section-kicker">RESERVA</p>
              <h2 className="section-h2">Reserva confidencial en 2 minutos</h2>
              <p className="section-bajada">Eliges hora real. Sin llamada de venta. Te llega confirmación por WhatsApp.</p>
              <ul className="reserva-bullets">
                <li>Hora esta semana</li>
                <li>Confidencial (Ley 20.584)</li>
                <li>Cambias sin costo 24h antes</li>
              </ul>
              <a href="tel:+56912345678" className="tel-grande">+56 9 1234 5678</a>
            </div>
            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                {errors.nombre && <p className="form-error">{errors.nombre}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="tel">Tel WhatsApp</label>
                <input id="tel" type="tel" placeholder="9 1234 5678" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
                {errors.tel && <p className="form-error">{errors.tel}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="modalidad">Modalidad</label>
                <select id="modalidad" value={form.modalidad} onChange={(e) => setForm({ ...form, modalidad: e.target.value })}>
                  <option value="">Elige…</option>
                  <option value="Presencial Las Condes">Presencial Las Condes</option>
                  <option value="Teleconsulta">Teleconsulta</option>
                </select>
                {errors.modalidad && <p className="form-error">{errors.modalidad}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="horario">Horario preferido</label>
                <select id="horario" value={form.horario} onChange={(e) => setForm({ ...form, horario: e.target.value })}>
                  <option value="">Elige…</option>
                  <option value="Mañana 09–13">Mañana 09–13</option>
                  <option value="Tarde 14–18">Tarde 14–18</option>
                  <option value="Noche 18–22">Noche 18–22</option>
                  <option value="Sábado">Sábado</option>
                </select>
                {errors.horario && <p className="form-error">{errors.horario}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="motivo">Motivo</label>
                <select id="motivo" value={form.motivo} onChange={(e) => setForm({ ...form, motivo: e.target.value })}>
                  <option value="">Elige…</option>
                  <option value="Ansiedad">Ansiedad</option>
                  <option value="Insomnio">Insomnio</option>
                  <option value="Pareja">Pareja</option>
                  <option value="Adolescente">Adolescente</option>
                  <option value="Duelo">Duelo</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.motivo && <p className="form-error">{errors.motivo}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="mensaje">Mensaje breve (opcional)</label>
                <textarea id="mensaje" placeholder="Cuéntanos en 1 línea qué te trae (opcional)" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} maxLength={300} />
                <p className="contador">{form.mensaje.length}/300</p>
                {errors.mensaje && <p className="form-error">{errors.mensaje}</p>}
              </div>
              <label className="form-check">
                <input type="checkbox" checked={form.acepto} onChange={(e) => setForm({ ...form, acepto: e.target.checked })} />
                <span>Acepto confidencialidad y contacto por WhatsApp — <a href="#encuadre-terapeutico" style={{ color: "var(--accent)", textDecoration: "underline" }}>ver encuadre</a></span>
              </label>
              {errors.acepto && <p className="form-error">{errors.acepto}</p>}
              <button type="submit" className="btn-submit" disabled={loading}>{loading ? "Enviando…" : "Enviar a WhatsApp"}</button>
              {success && <div className="form-success">¡Solicitud enviada! Te escribimos en &lt; 3 h por WhatsApp (09:00–22:00). Revisa tu teléfono.</div>}
              <p className="form-nota">No compartimos tu número. No es urgencia vital.</p>
              <p className="micro-pie">Respuesta hoy hasta 22:00. Si escribes después, te respondemos mañana 09:00.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-col1">
              <div className="footer-logo">NOCTUA</div>
              <p className="footer-copy">© 2026 NOCTUA Salud Mental · Las Condes, Santiago</p>
              <p className="footer-copy2">RUT 76.xxx.xxx-x · Registro SuperSalud</p>
            </div>
            <div className="footer-col2">
              <a href="#primera-sesion">Primera sesión</a>
              <a href="#modalidad-horaria">Modalidad</a>
              <a href="#aranceles-fonasa">Aranceles</a>
              <a href="#encuadre-terapeutico">Confidencialidad</a>
            </div>
            <div className="footer-col3">
              <a href="tel:+56912345678" className="footer-tel">+56 9 1234 5678</a>
              <p className="footer-addr">Av. Apoquindo 4700, piso 8</p>
              <p className="footer-addr">Lun–Vie 09:00–22:00 · Sáb 09:00–14:00</p>
            </div>
          </div>
          <p className="footer-urgencia">No es dispositivo de urgencia. Ante riesgo vital: Salud Responde 600 360 7777.</p>
        </div>
      </footer>

      <div className="bottom-bar" aria-label="Reserva rápida">
        <a href="tel:+56912345678" className="tel">+56 9 1234 5678</a>
        <a href="#reserva-confidencial" className="cta">Reservar</a>
      </div>
    </>
  );
}
