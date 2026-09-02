import { useState } from "react";

type Errors = Partial<Record<"nombre" | "empresa" | "email" | "telefono" | "modelo" | "descripcion" | "presupuesto" | "plazo", string>>;

export function Presupuesto() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    modelo: "",
    descripcion: "",
    presupuesto: "",
    plazo: "",
  });

  const validate = (): boolean => {
    const e: Errors = {};
    if (!values.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!values.empresa.trim()) e.empresa = "Ingresa empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Email con formato válido.";
    const digits = values.telefono.replace(/\D/g, "");
    // expect 9 digits (Chile mobile without +56)
    // allow +569 etc but validate 9 digits core
    const last9 = digits.slice(-9);
    if (last9.length !== 9 || !/^\d{9}$/.test(last9)) e.telefono = "Tel 9 dígitos (ej: 912345678).";
    if (!values.modelo) e.modelo = "Elige un modelo.";
    if (values.descripcion.trim().length < 40) e.descripcion = "Mínimo 40 caracteres.";
    if (!values.presupuesto) e.presupuesto = "Elige un rango.";
    if (!values.plazo) e.plazo = "Elige un plazo.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // simulate async
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const payload = { ...values, at: Date.now() };
      try {
        localStorage.setItem("cordillera_presupuesto", JSON.stringify(payload));
      } catch { /* ignore */ }
      const waText = encodeURIComponent(
        `Hola Cordillera, soy ${values.nombre} de ${values.empresa}. Modelo: ${values.modelo}. Presupuesto: ${values.presupuesto}. Plazo: ${values.plazo}. Tel: ${values.telefono}. Descripción: ${values.descripcion}`
      );
      const waUrl = `https://wa.me/56912345678?text=${waText}`;
      // try open WhatsApp, fallback mailto after short delay if not handled
      const win = window.open(waUrl, "_blank");
      if (!win) {
        // fallback mailto
        window.location.href = `mailto:hola@cordillera.cl?subject=Presupuesto ${values.empresa}&body=${waText}`;
      }
      // reset success fade after 5s keep message
      setTimeout(() => {}, 220);
    }, 700);
  };

  return (
    <section id="presupuesto" className="section">
      <div className="grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <h2 className="section-h2">Presupuesto referencial.</h2>
        </div>
      </div>

      <div className="grid presupuesto-grid">
        {/* form 7 col */}
        <form className="presu-form" onSubmit={handleSubmit} noValidate aria-label="Formulario presupuesto">
          {/* Nombre */}
          <div className="field">
            <label htmlFor="presu-nombre">Nombre</label>
            <input
              id="presu-nombre"
              type="text"
              value={values.nombre}
              onChange={(e) => setValues({ ...values, nombre: e.target.value })}
              placeholder="Tu nombre"
              autoComplete="name"
            />
            {errors.nombre && <span className="field-error">{errors.nombre}</span>}
          </div>

          <div className="field">
            <label htmlFor="presu-empresa">Empresa</label>
            <input
              id="presu-empresa"
              type="text"
              value={values.empresa}
              onChange={(e) => setValues({ ...values, empresa: e.target.value })}
              placeholder="Empresa"
              autoComplete="organization"
            />
            {errors.empresa && <span className="field-error">{errors.empresa}</span>}
          </div>

          <div className="field">
            <label htmlFor="presu-email">Email</label>
            <input
              id="presu-email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="hola@empresa.cl"
              autoComplete="email"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="presu-tel">Teléfono (+569)</label>
            <input
              id="presu-tel"
              type="tel"
              value={values.telefono}
              onChange={(e) => setValues({ ...values, telefono: e.target.value })}
              placeholder="912345678"
              autoComplete="tel"
              inputMode="numeric"
            />
            {errors.telefono && <span className="field-error">{errors.telefono}</span>}
          </div>

          <div className="field">
            <label htmlFor="presu-modelo">Modelo</label>
            <select
              id="presu-modelo"
              value={values.modelo}
              onChange={(e) => setValues({ ...values, modelo: e.target.value })}
            >
              <option value="">Selecciona modelo</option>
              <option value="Squad mensual">Squad mensual</option>
              <option value="Proyecto cerrado">Proyecto cerrado</option>
              <option value="Staff">Staff</option>
            </select>
            {errors.modelo && <span className="field-error">{errors.modelo}</span>}
          </div>

          <div className="field field-full">
            <label htmlFor="presu-desc">Descripción breve</label>
            <textarea
              id="presu-desc"
              value={values.descripcion}
              onChange={(e) => setValues({ ...values, descripcion: e.target.value })}
              placeholder="Cuéntanos proceso, dolor y dato disponible (mín 40 caracteres)"
              rows={4}
              minLength={40}
            />
            <span className="field-hint">{values.descripcion.length}/40+ caracteres</span>
            {errors.descripcion && <span className="field-error">{errors.descripcion}</span>}
          </div>

          <div className="field">
            <label htmlFor="presu-presupuesto">Presupuesto estimado</label>
            <select
              id="presu-presupuesto"
              value={values.presupuesto}
              onChange={(e) => setValues({ ...values, presupuesto: e.target.value })}
            >
              <option value="">Selecciona rango</option>
              <option value="$3–6M">$3–6M</option>
              <option value="$6–12M">$6–12M</option>
              <option value="$12–25M">$12–25M</option>
              <option value="$25M+">$25M+</option>
            </select>
            {errors.presupuesto && <span className="field-error">{errors.presupuesto}</span>}
          </div>

          <div className="field">
            <label htmlFor="presu-plazo">Plazo deseado</label>
            <select
              id="presu-plazo"
              value={values.plazo}
              onChange={(e) => setValues({ ...values, plazo: e.target.value })}
            >
              <option value="">Selecciona plazo</option>
              <option value="<1 mes">&lt;1 mes</option>
              <option value="1–3 meses">1–3 meses</option>
              <option value="3–6 meses">3–6 meses</option>
              <option value="flexible">flexible</option>
            </select>
            {errors.plazo && <span className="field-error">{errors.plazo}</span>}
          </div>

          <div className="presu-actions">
            <button type="submit" className="btn-primary presu-submit" disabled={loading}>
              {loading ? (
                <span className="spinner" aria-hidden="true" />
              ) : null}
              {loading ? "Enviando…" : "Enviar presupuesto"}
            </button>
          </div>

          {success && (
            <div className="presu-success" role="status" aria-live="polite">
              Gracias, te escribimos en &lt;24h hábiles con estimación. Revisa tu WhatsApp.
            </div>
          )}
        </form>

        {/* resumen 5 col sticky */}
        <aside className="presu-resumen" aria-label="Resumen">
          <h3 className="presu-resumen-title">Qué incluye siempre</h3>
          <ul className="presu-bullets">
            <li>· Código y repo tuyos · CI/CD y ambientes · Documentación corta · 30 días estabilización</li>
          </ul>
          <p className="presu-precios">Squad desde $4.900.000/mes · Proyecto cerrado desde $12.500.000 · Staff desde $2.850.000/mes</p>
          <p className="presu-nota">Valores sin IVA. Se confirman tras discovery.</p>
        </aside>
      </div>
    </section>
  );
}
