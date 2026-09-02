import { useEffect, useState } from "react";

const STORAGE_KEY = "eter-cotiza-obra";

const FAMILIAS = ["Fierro y perfiles", "Pernos y fijaciones", "Maderas y tableros", "Cemento y áridos", "Planchas y zinc", "Herramientas y EPP", "Varios"] as const;
const COMUNAS = ["Santiago Centro", "Puente Alto", "La Florida", "Maipú", "Ñuñoa", "Providencia", "Las Condes", "Otra comuna"] as const;

function validaRut(rut: string): boolean {
  if (!rut) return true; // optional
  const clean = rut.replace(/\./g, "").replace(/\s/g, "").toUpperCase();
  if (!/^\d{7,8}-[0-9K]$/.test(clean)) return false;
  const [num, dv] = clean.split("-");
  let suma = 0, mul = 2;
  for (let i = num.length - 1; i >= 0; i--) { suma += parseInt(num[i], 10) * mul; mul = mul === 7 ? 2 : mul + 1; }
  const resto = 11 - (suma % 11);
  let dvEsperado = "";
  if (resto === 11) dvEsperado = "0"; else if (resto === 10) dvEsperado = "K"; else dvEsperado = String(resto);
  return dv === dvEsperado;
}

function formatRut(v: string): string {
  // keep user typing flexible, don't force format hard
  return v;
}

export function CotizaObra() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [familia, setFamilia] = useState("");
  const [medida, setMedida] = useState("");
  const [comuna, setComuna] = useState("");
  const [comunaOtra, setComunaOtra] = useState("");
  const [rut, setRut] = useState("");
  const [factura, setFactura] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // preload from localStorage + ?sku=
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        const ts = data._ts as number;
        if (Date.now() - ts < 24 * 60 * 60 * 1000) {
          if (data.nombre) setNombre(data.nombre);
          if (data.telefono) setTelefono(data.telefono);
          if (data.familia) setFamilia(data.familia);
          if (data.medida) setMedida(data.medida);
          if (data.comuna) setComuna(data.comuna);
          if (data.rut) setRut(data.rut);
          if (data.factura) setFactura(data.factura);
        } else localStorage.removeItem(STORAGE_KEY);
      }
    } catch {}
    const params = new URLSearchParams(window.location.search);
    const sku = params.get("sku");
    if (sku) {
      // map sku to readable
      const map: Record<string, string> = {
        "perfil-40x40": "Perfil 40×40×2 mm ×",
        "angulo-30x30": "Ángulo 30×30×3 mm ×",
        "perno-m10x40": "Perno hex M10×40 ×",
        "terciado-15mm": "Terciado 15 mm 1.22×2.44 ×",
        "cemento-25kg": "Cemento Melón 25 kg ×",
        "zinc-035": "Zinc acanalado 0.35 mm ×",
        "esmeril-45": "Esmeril angular 4.5» 750W ×",
      };
      const pre = map[sku];
      if (pre) setMedida((prev) => (prev ? prev : `${pre} `));
      // also set familia hint
      if (sku.startsWith("perfil") || sku.startsWith("angulo")) setFamilia((p) => p || "Fierro y perfiles");
      if (sku.startsWith("perno")) setFamilia((p) => p || "Pernos y fijaciones");
    }
    const onSku = (e: Event) => {
      const sku2 = (e as CustomEvent).detail as string;
      const map2: Record<string, string> = {
        "perfil-40x40": "Perfil 40×40×2 mm ×",
        "angulo-30x30": "Ángulo 30×30×3 mm ×",
        "perno-m10x40": "Perno hex M10×40 ×",
        "terciado-15mm": "Terciado 15 mm 1.22×2.44 ×",
        "cemento-25kg": "Cemento Melón 25 kg ×",
        "zinc-035": "Zinc acanalado 0.35 mm ×",
        "esmeril-45": "Esmeril angular 4.5» 750W ×",
      };
      const pre2 = map2[sku2];
      if (pre2) setMedida(`${pre2} `);
      document.getElementById("cotiza-medida")?.focus();
    };
    window.addEventListener("eter:sku", onSku as EventListener);
    return () => window.removeEventListener("eter:sku", onSku as EventListener);
  }, []);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa nombre o empresa.";
    if (!telefono.trim()) e.telefono = "Ingresa tu WhatsApp.";
    else if (!/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.trim())) e.telefono = "Formato +56 9 1234 5678.";
    if (!medida.trim()) e.medida = "Describe medida y cantidad.";
    if (!comuna) e.comuna = "Elige comuna.";
    if (comuna === "Otra comuna" && !comunaOtra.trim()) e.comunaOtra = "Indica comuna.";
    if (rut && !validaRut(rut)) e.rut = "RUT no válido. Ej: 12.345.678-9";
    if (factura && !rut) e.rut = "RUT requerido para factura.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setLoading(true);
    const comunaFinal = comuna === "Otra comuna" ? comunaOtra.trim() : comuna;
    const familiaTxt = familia || "material";
    const rutTxt = rut ? ` — RUT ${rut}` : "";
    const mensaje = `Hola ETER, cotizo ${familiaTxt} ${medida.trim()} para ${comunaFinal}${rutTxt}`;
    // persist
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ nombre, telefono, familia, medida, comuna, rut, factura, _ts: Date.now() }));
    } catch {}
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const url = `https://wa.me/56228403315?text=${encodeURIComponent(mensaje)}`;
      const w = window.open(url, "_blank");
      if (!w) {
        // fallback mailto
        window.location.href = `mailto:ventas@eter-ferreteria.cl?subject=${encodeURIComponent("Cotización " + familiaTxt)}&body=${encodeURIComponent(mensaje + "\n\nNombre: " + nombre + "\nTel: " + telefono)}`;
      }
    }, 80);
  };

  return (
    <section id="cotiza-obra" className="sec-cotiza" aria-label="Cotiza a obra">
      <div className="wrap">
        <div className="cotiza-grid">
          <div className="cotiza-info">
            <h2 className="h2">Cotiza a obra en 2 minutos.</h2>
            <p className="sub">Cuéntanos medida, cantidad y comuna. Te mandamos precio cerrado por WhatsApp. Sin spam.</p>
            <div className="cotiza-contact">
              <span className="contact-mono">+56 2 2840 3315 · ventas@eter-ferreteria.cl · 10 de Julio 1234, Santiago</span>
              <span className="contact-hours">LUN–VIE 7:30–18:00 · SÁB 8:00–13:00</span>
            </div>
          </div>

          <form className="cotiza-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="cotiza-nombre">Nombre / empresa*</label>
              <input id="cotiza-nombre" type="text" required autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} className={errors.nombre ? "input-err" : ""} />
              {errors.nombre && <span className="field-err">{errors.nombre}</span>}
            </div>

            <div className="field">
              <label htmlFor="cotiza-tel">Teléfono WhatsApp*</label>
              <input id="cotiza-tel" type="tel" required placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} className={errors.telefono ? "input-err" : ""} pattern="\+56 9.*" />
              {errors.telefono && <span className="field-err">{errors.telefono}</span>}
            </div>

            <div className="field">
              <label htmlFor="cotiza-familia">Familia que cotizas*</label>
              <select id="cotiza-familia" value={familia} onChange={(e) => setFamilia(e.target.value)}>
                <option value="">Selecciona familia</option>
                {FAMILIAS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>

            <div className="field field-full">
              <label htmlFor="cotiza-medida">Medida y cantidad*</label>
              <textarea id="cotiza-medida" rows={3} placeholder="Ej: Perfil 40×40×2 mm ×12 tiras 6m + perno M10×40 ×200 un. Obra en Puente Alto" required value={medida} onChange={(e) => setMedida(e.target.value)} className={errors.medida ? "input-err" : ""}></textarea>
              {errors.medida && <span className="field-err">{errors.medida}</span>}
            </div>

            <div className="field">
              <label htmlFor="cotiza-comuna">Comuna de despacho / retiro*</label>
              <select id="cotiza-comuna" value={comuna} onChange={(e) => setComuna(e.target.value)} className={errors.comuna ? "input-err" : ""}>
                <option value="">Selecciona comuna</option>
                {COMUNAS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.comuna && <span className="field-err">{errors.comuna}</span>}
              {comuna === "Otra comuna" && (
                <input type="text" placeholder="Escribe tu comuna" value={comunaOtra} onChange={(e) => setComunaOtra(e.target.value)} className={errors.comunaOtra ? "input-err" : ""} style={{ marginTop: 8 }} />
              )}
              {errors.comunaOtra && <span className="field-err">{errors.comunaOtra}</span>}
            </div>

            <div className="field">
              <label className="checkbox-label">
                <input type="checkbox" checked={factura} onChange={(e) => setFactura(e.target.checked)} />
                <span>Necesito factura empresa</span>
              </label>
              {(factura || rut) && (
                <div style={{ marginTop: 8 }}>
                  <label htmlFor="cotiza-rut">RUT empresa {factura ? "*" : "(opcional)"}</label>
                  <input id="cotiza-rut" type="text" placeholder="12.345.678-9" value={rut} onChange={(e) => setRut(formatRut(e.target.value))} className={errors.rut ? "input-err" : ""} />
                  {errors.rut && <span className="field-err">{errors.rut}</span>}
                  {factura && <span className="field-hint">Crédito 30 días con evaluación</span>}
                </div>
              )}
            </div>

            <button type="submit" className="btn-accent cotiza-cta" disabled={loading} style={{ height: 48, width: "100%", fontSize: 14, fontWeight: 600 }}>
              {loading ? "Enviando…" : success ? "Listo — te abre WhatsApp" : "Cotizar por WhatsApp"}
            </button>
            {success && <p className="form-success">Listo — te abre WhatsApp con tu cotización. Si no se abrió, <a href={`mailto:ventas@eter-ferreteria.cl?subject=Cotización`}>escríbenos a ventas@eter-ferreteria.cl</a>.</p>}
            <p className="nota-form">Valores referenciales; despacho por comuna. Corte/doblado incluido. Respondemos en horario de obra.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
