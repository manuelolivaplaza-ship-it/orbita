import { useEffect, useRef, useState } from "react";

type FormState = {
  nombre: string;
  tel: string;
  email: string;
  propiedad: string;
  modalidad: "Venta" | "Arriendo" | "";
  fecha: "Hoy" | "Mañana" | "Esta semana" | "";
  hora: "Tarde 18–21:30" | "Mañana 10–13" | "";
  mensaje: string;
  acepta: boolean;
};

const PROPIEDADES_OPTS = [
  "Depto 1D 36m² · Reñaca Norte — UF 3.950",
  "Depto 2D 64m² · Reñaca Victoria — UF 5.800",
  "Depto 3D 92m² · Bosques de Montemar — UF 8.200",
  "Depto 2D 58m² · Álvarez — UF 5.200",
  "Casa 4D 178m² · Costa Montemar — UF 13.800",
  "Depto 3D 84m² · Cerro Alegre — UF 6.900",
  "Otra / aún no elijo",
];

export function VisitaNocturna() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    tel: "",
    email: "",
    propiedad: "",
    modalidad: "",
    fecha: "",
    hora: "",
    mensaje: "",
    acepta: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.nombre.trim().length < 2) e.nombre = "Nombre mínimo 2 caracteres";
    const telClean = form.tel.replace(/\s+/g, "");
    const re = /^(\+56\s?9\d{8}|9\d{8})$/;
    if (!re.test(telClean)) e.tel = "Tel debe ser +56 9 + 8 dígitos (ej: +56 9 74263188)";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!form.propiedad) e.propiedad = "Elige una propiedad";
    if (!form.acepta) e.acepta = "Debes aceptar el contacto por WhatsApp";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const key = `altamar_visita_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify({ ...form, fecha_envio: new Date().toISOString() }));
      const texto = `Hola ALTAMAR, quiero visitar ${form.propiedad} el ${form.fecha || "fecha a coordinar"} ${form.hora || ""}. Soy ${form.nombre}. Tel: ${form.tel}.${
        form.mensaje ? " Mensaje: " + form.mensaje : ""
      }`;
      const url = `https://wa.me/56974263188?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    }, 800);
  }

  // CTA sticky visibility: show when form out of viewport (simple intersection)
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    if (!formRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(formRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="visita-nocturna" className="section-visita">
        <div className="grid">
          <div className="visita-layout">
            <div className="visita-left">
              <p className="visita-kicker">VISITA NOCTURNA · HOY O MAÑANA · HASTA 21:30</p>
              <h2 className="visita-h2">Elige hora y te confirmamos por WhatsApp en minutos</h2>
              <p className="visita-intro">
                Lunes a sábado 10:00–21:30. Domingo solo con reserva. Si la hora ya se tomó, te ofrecemos la siguiente libre sin hacerte esperar en la garita.
              </p>

              <a href="tel:+56974263188" className="visita-tel">
                +56 9 7426 3188
              </a>
              <p className="visita-tel-sub">WhatsApp directo con corredora costera, no call center.</p>

              <p className="visita-horarios">
                <span className="visita-dot-lg" aria-hidden="true" /> Hoy quedan 2 visitas: 19:00 y 20:30 · carpeta lista con carta náutica
              </p>

              <div className="visita-proof-list">
                <p className="visita-proof-title">Últimas 4 operaciones (conservador, borde costero)</p>
                <div className="visita-proof-row"><span>Depto 2D Reñaca Victoria · UF 5.600 · 34 días</span></div>
                <div className="visita-proof-row"><span>Casa Costa Montemar 4D · UF 13.200 · 61 días</span></div>
                <div className="visita-proof-row"><span>Depto 2D Álvarez 2D · UF 5.050 · 28 días</span></div>
                <div className="visita-proof-row"><span>Depto 3D Cerro Alegre · UF 6.750 · 44 días</span></div>
              </div>

              <p className="visita-compromiso">
                Si llegas y el depto no es como en fotos y papeles, te lo decimos al tiro y no te hacemos perder la tarde de borde costero.
              </p>

              <p className="visita-oficina">Oficina: Av. Borgoño 14.422, oficina 4 · Reñaca</p>

              <div className="visita-proof-img-wrap">
                <img
                  src="/media/altamar-proof-16x9.png"
                  alt="Carpeta ALTAMAR papeles a la vista"
                  className="visita-proof-img"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    console.warn("[ALTAMAR] falta media: altamar-proof-16x9.png");
                    const wrap = img.parentElement;
                    if (wrap && !wrap.querySelector(".media-falta")) {
                      const d = document.createElement("div");
                      d.className = "media-falta";
                      d.setAttribute("data-falta", "altamar-proof-16x9.png");
                      d.textContent = "falta: altamar-proof-16x9.png";
                      (d as HTMLElement).style.cssText =
                        "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.82rem 'Source Serif 4',serif";
                      wrap.appendChild(d);
                    }
                  }}
                />
              </div>
              <p className="visita-img-caption">Carpeta ALTAMAR · papeles a la vista</p>
            </div>

            <div className="visita-right" ref={formRef}>
              <form className="visita-form" onSubmit={handleSubmit} noValidate>
                <div className="visita-field">
                  <label htmlFor="vn-nombre">Nombre*</label>
                  <input id="vn-nombre" type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                  {errors.nombre && <span className="visita-error">{errors.nombre}</span>}
                </div>

                <div className="visita-field">
                  <label htmlFor="vn-tel">Tel / WhatsApp*</label>
                  <input id="vn-tel" type="tel" placeholder="+56 9 7426 3188" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
                  {errors.tel && <span className="visita-error">{errors.tel}</span>}
                </div>

                <div className="visita-field">
                  <label htmlFor="vn-email">Email (opcional)</label>
                  <input id="vn-email" type="email" placeholder="tu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <span className="visita-error">{errors.email}</span>}
                </div>

                <div className="visita-field">
                  <label htmlFor="vn-propiedad">Propiedad que te interesa*</label>
                  <select id="vn-propiedad" value={form.propiedad} onChange={(e) => setForm({ ...form, propiedad: e.target.value })}>
                    <option value="">Selecciona una propiedad</option>
                    {PROPIEDADES_OPTS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.propiedad && <span className="visita-error">{errors.propiedad}</span>}
                </div>

                <div className="visita-field">
                  <label>¿Venta o arriendo?</label>
                  <div className="visita-radio-row">
                    <label className="visita-radio">
                      <input type="radio" name="modalidad" checked={form.modalidad === "Venta"} onChange={() => setForm({ ...form, modalidad: "Venta" })} /> Venta
                    </label>
                    <label className="visita-radio">
                      <input type="radio" name="modalidad" checked={form.modalidad === "Arriendo"} onChange={() => setForm({ ...form, modalidad: "Arriendo" })} /> Arriendo
                    </label>
                  </div>
                </div>

                <div className="visita-field">
                  <label>Fecha preferida</label>
                  <div className="visita-radio-row">
                    {(["Hoy", "Mañana", "Esta semana"] as const).map((f) => (
                      <label key={f} className="visita-radio">
                        <input type="radio" name="fecha" checked={form.fecha === f} onChange={() => setForm({ ...form, fecha: f })} /> {f}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="visita-field">
                  <label>Hora</label>
                  <div className="visita-radio-row">
                    {(["Tarde 18–21:30", "Mañana 10–13"] as const).map((h) => (
                      <label key={h} className="visita-radio">
                        <input type="radio" name="hora" checked={form.hora === h} onChange={() => setForm({ ...form, hora: h })} /> {h}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="visita-field">
                  <label htmlFor="vn-mensaje">Mensaje</label>
                  <textarea
                    id="vn-mensaje"
                    rows={4}
                    placeholder="Ej: quiero ver el 2D de Reñaca Victoria, ¿tiene bodega? ¿hipoteca alzada? ¿viento en terraza?"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  />
                </div>

                <label className="visita-checkbox">
                  <input type="checkbox" checked={form.acepta} onChange={(e) => setForm({ ...form, acepta: e.target.checked })} />
                  <span>Acepto que me contacten por WhatsApp para coordinar la visita. No spam, solo esta propiedad.</span>
                </label>
                {errors.acepta && <span className="visita-error">{errors.acepta}</span>}

                <button type="submit" className="visita-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="visita-spinner" aria-hidden="true" /> Enviando...
                    </>
                  ) : (
                    "Pedir visita por WhatsApp"
                  )}
                </button>

                <a href="tel:+56974263188" className="visita-secundario">
                  Llamar ahora
                </a>

                {success && (
                  <p className="visita-success">
                    Te llega WhatsApp con hora confirmada y dirección exacta. Si no hay hora hoy, te proponemos mañana antes de las 10:00.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {showSticky && (
        <div className="visita-sticky">
          <a href="#visita-nocturna" className="visita-sticky-cta">
            Agendar visita nocturna
          </a>
        </div>
      )}
    </>
  );
}
