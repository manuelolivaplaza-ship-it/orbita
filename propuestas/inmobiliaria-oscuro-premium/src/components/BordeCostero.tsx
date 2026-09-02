export function BordeCostero() {
  return (
    <section id="borde-costero" className="section-borde">
      <div className="grid">
        <div className="borde-layout">
          <div className="borde-img-col">
            <div className="borde-img-wrap">
              <img
                src="/media/altamar-borde-3x4.png"
                alt="Borde costero hormigón rugoso con baranda y avenida del mar de noche"
                className="borde-img"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  console.warn("[ALTAMAR] falta media: altamar-borde-3x4.png");
                  const wrap = img.parentElement;
                  if (wrap && !wrap.querySelector(".media-falta")) {
                    const d = document.createElement("div");
                    d.className = "media-falta";
                    d.setAttribute("data-falta", "altamar-borde-3x4.png");
                    d.textContent = "falta: altamar-borde-3x4.png";
                    (d as HTMLElement).style.cssText =
                      "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.82rem 'Source Serif 4',serif";
                    wrap.appendChild(d);
                  }
                }}
              />
            </div>
          </div>

          <div className="borde-content-col">
            <p className="borde-kicker">BORDE COSTERO · REÑACA — VICTORIA</p>
            <h2 className="borde-h2">Vivir a 2 cuadras del mar sin pagar ruido de avenida</h2>
            <p className="borde-intro">
              Pasaje interior costero, no avenida. Playa Amarilla a 5 min a pie, colegio a 4, metro no hay — micro a 2 min. Lo medimos caminando con linterna a las 21:00.
            </p>

            <div className="borde-paneles">
              <div className="borde-panel">
                <h3 className="borde-panel-title">A pie (noche)</h3>
                <ul className="borde-list">
                  <li>Playa Amarilla 380m · 5 min</li>
                  <li>Colegio Mackay 420m</li>
                  <li>Jumbo Reñaca 650m</li>
                  <li>Café de borde 70m (abierto hasta 22:00)</li>
                </ul>
              </div>
              <div className="borde-panel">
                <h3 className="borde-panel-title">En micro/auto</h3>
                <ul className="borde-list">
                  <li>Parada Borgoño / Angamos 70m</li>
                  <li>Salida Ruta 60 1.1km</li>
                  <li>Estacionamiento visita: 1 por depto + visita en calle sin parquímetro noche</li>
                  <li>Bicicletero techado con luz cobre</li>
                </ul>
              </div>
              <div className="borde-panel">
                <h3 className="borde-panel-title">Viento, niebla y luz nocturna</h3>
                <ul className="borde-list">
                  <li>Nor-poniente: sol poniente filtrado (no directo duro)</li>
                  <li>Niebla camanchaca 06–09h: DVH atenúa</li>
                  <li>Baranda hormigón + vidrio 2017: filtra viento</li>
                  <li>Vista mar lateral con luces de avenida como faro corrido</li>
                </ul>
              </div>
            </div>

            <p className="borde-cita">
              No es primera línea con vista frontal total. Es segunda línea con mar lateral y sin viento que te vuela la terraza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
