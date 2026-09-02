import { useState, useMemo } from "react";

type FormData = {
  nombre: string;
  whatsapp: string;
  email: string;
  cata: string;
  fecha: string;
  personas: string;
  mensaje: string;
  acepto: boolean;
};

type Errors = Partial<Record<keyof FormData, string>>;

function getMinDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function isValidWhatsapp(v: string): boolean {
  const cleaned = v.replace(/\s/g, "");
  // Must contain +56 and have 9 digits after +56 (Chile mobile)
  // Accept +569XXXXXXXX
  const re = /^\+569\d{8}$/;
  return re.test(cleaned);
}

function isValidEmail(v: string): boolean {
  if (!v) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function Reserva() {
  const minDate = useMemo(() => getMinDate(), []);
  const [data, setData] = useState<FormData>({
    nombre: "",
    whatsapp: "",
    email: "",
    cata: "",
    fecha: "",
    personas: "",
    mensaje: "",
    acepto: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!data.nombre.trim() || data.nombre.trim().length < 3) e.nombre = "Ingresa tu nombre y apellido (mín. 3 caracteres).";
    if (!data.whatsapp.trim()) e.whatsapp = "Ingresa tu WhatsApp con +56 9.";
    else if (!isValidWhatsapp(data.whatsapp.trim())) e.whatsapp = "Formato: +56 9 1234 5678 (9 dígitos después de +56).";
    if (!isValidEmail(data.email.trim())) e.email = "Correo no válido.";
    if (!data.cata) e.cata = "Elige una cata.";
    if (!data.fecha) e.fecha = "Elige fecha.";
    else if (data.fecha < minDate) e.fecha = `La fecha debe ser desde ${minDate} (mín. 2 días).`;
    if (!data.personas) e.personas = "Indica cuántas personas.";
    if (!data.acepto) e.acepto = "Debes aceptar el contacto por WhatsApp.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    // Simulate async
    setTimeout(() => {
      const payload = { ...data, ts: new Date().toISOString() };
      try {
        localStorage.setItem("eter-reserva-cata", JSON.stringify(payload));
      } catch {
        // ignore
      }
      setLoading(false);
      setSuccess(true);
      // Open WhatsApp
      const text = `Hola ETER quiero reservar cata ${encodeURIComponent(data.cata)} fecha ${encodeURIComponent(data.fecha)} ${encodeURIComponent(data.personas)}pax`;
      const waUrl = `https://wa.me/56932204418?text=${text}`;
      const win = window.open(waUrl, "_blank");
      if (!win) {
        window.location.href = `mailto:reservas@eter.cl?subject=Reserva cata ${encodeURIComponent(data.cata)}&body=${text}`;
      }
    }, 600);
  }

  return (
    <section id="reserva-cata" className="reserva" aria-label="Reserva tu cata">
      <div className="reserva__inner">
        <div className="reserva__grid">
          <div className="reserva__form-col">
            <p className="reserva__kicker">RESERVA TU CATA</p>
            <h2 className="reserva__title">Elige fecha. Te confirmamos por WhatsApp en el día.</h2>

            {success ? (
              <div className="reserva__success" role="status" aria-live="polite">
                Reserva enviada. Te escribimos por WhatsApp hoy antes de las 19h. Si no ves mensaje, revisa spam o escribe al +56 9 3220 4418.
              </div>
            ) : null}

            <form className="reserva__form" onSubmit={handleSubmit} noValidate>
              <div className="reserva__field">
                <label htmlFor="reserva-nombre" className="reserva__label">
                  Nombre*
                </label>
                <input
                  id="reserva-nombre"
                  name="nombre"
                  type="text"
                  required
                  aria-required="true"
                  placeholder="Nombre y apellido"
                  className="reserva__input"
                  value={data.nombre}
                  onChange={(ev) => setData((d) => ({ ...d, nombre: ev.target.value }))}
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? "err-nombre" : undefined}
                />
                {errors.nombre && (
                  <span id="err-nombre" className="reserva__error">
                    {errors.nombre}
                  </span>
                )}
              </div>

              <div className="reserva__field">
                <label htmlFor="reserva-whatsapp" className="reserva__label">
                  WhatsApp*
                </label>
                <input
                  id="reserva-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  aria-required="true"
                  placeholder="+56 9 1234 5678"
                  className="reserva__input"
                  value={data.whatsapp}
                  onChange={(ev) => setData((d) => ({ ...d, whatsapp: ev.target.value }))}
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? "err-whatsapp" : undefined}
                />
                {errors.whatsapp && (
                  <span id="err-whatsapp" className="reserva__error">
                    {errors.whatsapp}
                  </span>
                )}
              </div>

              <div className="reserva__field">
                <label htmlFor="reserva-email" className="reserva__label">
                  Email
                </label>
                <input
                  id="reserva-email"
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.cl"
                  className="reserva__input"
                  value={data.email}
                  onChange={(ev) => setData((d) => ({ ...d, email: ev.target.value }))}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && (
                  <span id="err-email" className="reserva__error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="reserva__field">
                <label htmlFor="reserva-cata" className="reserva__label">
                  Cata*
                </label>
                <select
                  id="reserva-cata"
                  name="cata"
                  required
                  aria-required="true"
                  className="reserva__input reserva__select"
                  value={data.cata}
                  onChange={(ev) => setData((d) => ({ ...d, cata: ev.target.value }))}
                  aria-invalid={!!errors.cata}
                  aria-describedby={errors.cata ? "err-cata" : undefined}
                >
                  <option value="">Selecciona cata</option>
                  <option value="Cata Clásica — $18.000">Cata Clásica — $18.000</option>
                  <option value="Cata Ladera — $32.000">Cata Ladera — $32.000</option>
                  <option value="Cata Privada — $38.000">Cata Privada — $38.000</option>
                </select>
                {errors.cata && (
                  <span id="err-cata" className="reserva__error">
                    {errors.cata}
                  </span>
                )}
              </div>

              <div className="reserva__field">
                <label htmlFor="reserva-fecha" className="reserva__label">
                  Fecha deseada*
                </label>
                <input
                  id="reserva-fecha"
                  name="fecha"
                  type="date"
                  required
                  aria-required="true"
                  min={minDate}
                  className="reserva__input"
                  value={data.fecha}
                  onChange={(ev) => setData((d) => ({ ...d, fecha: ev.target.value }))}
                  aria-invalid={!!errors.fecha}
                  aria-describedby={errors.fecha ? "err-fecha" : undefined}
                />
                {errors.fecha && (
                  <span id="err-fecha" className="reserva__error">
                    {errors.fecha}
                  </span>
                )}
              </div>

              <div className="reserva__field">
                <label htmlFor="reserva-personas" className="reserva__label">
                  Personas*
                </label>
                <select
                  id="reserva-personas"
                  name="personas"
                  required
                  aria-required="true"
                  className="reserva__input reserva__select"
                  value={data.personas}
                  onChange={(ev) => setData((d) => ({ ...d, personas: ev.target.value }))}
                  aria-invalid={!!errors.personas}
                  aria-describedby={errors.personas ? "err-personas" : undefined}
                >
                  <option value="">Selecciona</option>
                  {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                {errors.personas && (
                  <span id="err-personas" className="reserva__error">
                    {errors.personas}
                  </span>
                )}
              </div>

              <div className="reserva__field">
                <label htmlFor="reserva-mensaje" className="reserva__label">
                  Mensaje
                </label>
                <textarea
                  id="reserva-mensaje"
                  name="mensaje"
                  rows={3}
                  placeholder="¿Celebración, alergias, dudas?"
                  className="reserva__input reserva__textarea"
                  value={data.mensaje}
                  onChange={(ev) => setData((d) => ({ ...d, mensaje: ev.target.value }))}
                />
              </div>

              <div className="reserva__field reserva__field--check">
                <label className="reserva__check-label">
                  <input
                    type="checkbox"
                    checked={data.acepto}
                    onChange={(ev) => setData((d) => ({ ...d, acepto: ev.target.checked }))}
                    aria-required="true"
                    aria-invalid={!!errors.acepto}
                    aria-describedby={errors.acepto ? "err-acepto" : undefined}
                  />
                  <span>Acepto que me contacten por WhatsApp para confirmar la reserva.</span>
                </label>
                {errors.acepto && (
                  <span id="err-acepto" className="reserva__error">
                    {errors.acepto}
                  </span>
                )}
              </div>

              <button type="submit" className="reserva__submit" disabled={loading}>
                {loading ? "Enviando…" : "Enviar reserva →"}
              </button>
              <p className="reserva__micro">No es pago. Es solicitud. Te enviamos link de pago solo al confirmar cupo.</p>
            </form>
          </div>

          <div className="reserva__info-col">
            <div className="reserva__contacto">
              <p className="reserva__contacto-kicker">¿Prefieres hablar?</p>
              <a href="tel:+56932204418" className="reserva__fono">
                +56 9 3220 4418
              </a>
              <p className="reserva__contacto-sub">WhatsApp directo · Lun–dom 10–19h</p>
              <p className="reserva__direccion">Ruta 68 km 78, Casablanca — a 18 min de Viña del Mar</p>
              <a href="https://maps.google.com/?q=Ruta+68+km+78+Casablanca" target="_blank" rel="noreferrer" className="reserva__maps">
                Ver en Google Maps →
              </a>
            </div>

            <div className="reserva__trazabilidad">
              <p className="reserva__traz-kicker">TRAZABILIDAD REAL</p>
              <div className="reserva__metrics">
                <div className="reserva__metric">
                  <span className="reserva__metric-valor">2,8 ha</span>
                  <span className="reserva__metric-label">en 3 cuarteles</span>
                </div>
                <div className="reserva__metric">
                  <span className="reserva__metric-valor">1.420</span>
                  <span className="reserva__metric-label">botellas añada 2023</span>
                </div>
                <div className="reserva__metric">
                  <span className="reserva__metric-valor">2012</span>
                  <span className="reserva__metric-label">primera plantación</span>
                </div>
              </div>
              <p className="reserva__traz-texto">Vendimia 2024: 100% manual, 14 kg por gamela. Fermentación con levadura nativa. Sin corrección ácida.</p>
              <p className="reserva__traz-sello">Viña de escala humana. Si no hay stock, no vendemos. Lista de espera por añada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
