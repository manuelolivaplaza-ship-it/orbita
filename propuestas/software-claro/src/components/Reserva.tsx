import { useState } from "react";
import { MediaTile } from "./MediaTile";

export function Reserva() {
  const [tel, setTel] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleMini = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = tel.replace(/\D/g, "").slice(-9);
    if (!/^\d{9}$/.test(digits)) {
      setError("Tel 9 dígitos (ej: 912345678).");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("cordillera_reserva", JSON.stringify({ tel: digits, at: Date.now() }));
      } catch { /* ignore */ }
      const waText = encodeURIComponent(`Hola Cordillera, quiero que me llamen. Mi número es +56 9 ${digits}`);
      const waUrl = `https://wa.me/56912345678?text=${waText}`;
      const win = window.open(waUrl, "_blank");
      if (!win) {
        window.location.href = `mailto:hola@cordillera.cl?subject=Reserva discovery&body=${waText}`;
      }
    }, 600);
  };

  return (
    <section id="reserva" className="section reserva-section">
      {/* header con fondo proof 40% */}
      <div className="reserva-header-bg" aria-hidden="true">
        <MediaTile
          filename="cordillera-proof-16x9.png"
          alt=""
          className="reserva-header-media"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
        />
      </div>

      <div className="grid reserva-grid">
        <div style={{ gridColumn: "1 / span 12" }}>
          <h2 className="section-h2">Hablemos.</h2>
        </div>

        {/* 6 col datos */}
        <div className="reserva-datos">
          <a href="tel:+56912345678" className="reserva-tel">
            +56 9 1234 5678
          </a>
          <a href="mailto:hola@cordillera.cl" className="reserva-email">
            hola@cordillera.cl
          </a>
          <p className="reserva-horario">Lun–vie 9:00–18:30 Chile · Discovery 30 min gratis</p>

          <div className="reserva-proof">
            12 años operando · 80+ entregas · 4.8/5 en Clutch (12 reseñas verificadas, ver perfil)
          </div>

          <form className="reserva-mini-form" onSubmit={handleMini} noValidate aria-label="Deja tu número">
            <p className="reserva-mini-label">Deja tu número y te llamamos</p>
            <div className="reserva-mini-row">
              <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="912345678"
                inputMode="numeric"
                aria-label="Teléfono"
                className="reserva-mini-input"
              />
              <button type="submit" className="btn-primary reserva-mini-btn" disabled={loading}>
                {loading ? <span className="spinner" aria-hidden="true" /> : null}
                {loading ? "Enviando…" : "Escríbenos por WhatsApp"}
              </button>
            </div>
            {error && <span className="field-error">{error}</span>}
            {success && (
              <div className="presu-success" role="status" style={{ marginTop: 8 }}>
                Gracias, te escribimos en &lt;24h hábiles. Revisa tu WhatsApp.
              </div>
            )}
          </form>
        </div>

        {/* 6 col mapa/horario */}
        <div className="reserva-mapa">
          <div className="reserva-mapa-box">
            <p className="reserva-mapa-title">Santiago · Remoto Chile</p>
            <p className="reserva-mapa-sub">Lun–vie 9:00–18:30 · Discovery 30 min gratis por Meet/WhatsApp</p>
            {/* placeholder mapa sin stock: filete + texto */}
            <div className="reserva-mapa-placeholder">Mapa — Santiago, Chile (remoto)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
