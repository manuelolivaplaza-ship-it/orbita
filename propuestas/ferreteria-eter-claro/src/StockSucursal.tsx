import { useState } from "react";

const PROOF = "/media/eter-proof-16x9.png";

export function StockSucursal() {
  const [err, setErr] = useState(false);
  return (
    <section id="stock-sucursal" className="sec-stock" aria-label="Stock por sucursal">
      <div className="wrap">
        <h2 className="h2">Stock real por sucursal.</h2>
        <p className="sub">No vendemos lo que no tenemos a la vista.</p>

        <div className="stock-layout">
          <div className="stock-table-wrap">
            <table className="tabla tabla-stock" aria-label="Stock por sucursal">
              <thead>
                <tr>
                  <th>SUCURSAL</th>
                  <th>DIRECCIÓN</th>
                  <th>HORARIO</th>
                  <th>STOCK HOY</th>
                  <th>RETIRO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-strong">Santiago Centro</td>
                  <td>10 de Julio 1234</td>
                  <td>Lun–Vie 7:30–18:00 Sáb 8–13</td>
                  <td><span className="stock-pill"><span className="dot on"></span> 1.200 SKU</span></td>
                  <td>Hoy mismo</td>
                </tr>
                <tr>
                  <td className="td-strong">Puente Alto</td>
                  <td>Eyzaguirre 01234</td>
                  <td>Lun–Vie 8:00–17:30 Sáb 9–13</td>
                  <td><span className="stock-pill"><span className="dot off"></span> 680 SKU</span></td>
                  <td>Hoy mismo</td>
                </tr>
              </tbody>
            </table>

            {/* collapsed cards for 360 handled via CSS */}
            <div className="stock-cards" aria-label="Sucursales">
              <div className="stock-card">
                <strong>Santiago Centro</strong>
                <span>10 de Julio 1234</span>
                <span>Lun–Vie 7:30–18:00 Sáb 8–13</span>
                <span className="stock-pill"><span className="dot on"></span> 1.200 SKU · Hoy mismo</span>
              </div>
              <div className="stock-card">
                <strong>Puente Alto</strong>
                <span>Eyzaguirre 01234</span>
                <span>Lun–Vie 8:00–17:30 Sáb 9–13</span>
                <span className="stock-pill"><span className="dot off"></span> 680 SKU · Hoy mismo</span>
              </div>
            </div>
          </div>

          <div className="stock-media">
            <div className="stock-media-inner">
              {!err ? (
                <img src={PROOF} alt="Patio de acopio con zinc y cemento paletizado" loading="lazy" decoding="async" onError={() => { setErr(true); console.warn("[ETER] falta eter-proof-16x9.png"); }} />
              ) : (
                <div className="media-falta" data-falta="eter-proof-16x9.png" style={{ aspectRatio: "16/9" }}>falta eter-proof-16x9.png</div>
              )}
              <span className="stock-overlay">Cobertura RM · regiones por Starken/Blue Express 48–72h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
