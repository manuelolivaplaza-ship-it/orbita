import { useState } from "react";

const TILE_PERNOS = "/media/eter-tile-pernos-1x1.png";

type Row = {
  familia: string;
  medida: string;
  precio: string;
  iva: string;
  despacho: string;
  stock: string;
  stockDot: "●" | "○";
  sku: string;
};

const ROWS: Row[] = [
  { familia: "Fierro", medida: "Perfil 40×40×2 mm NCh203 · tira 6 m", precio: "$18.900", iva: "IVA inc.", despacho: "RM 24h / retiro hoy", stock: "Stock RM", stockDot: "●", sku: "perfil-40x40" },
  { familia: "Fierro", medida: "Ángulo 30×30×3 mm NCh203 · tira 6 m", precio: "$14.500", iva: "IVA inc.", despacho: "RM 24h", stock: "Stock RM", stockDot: "●", sku: "angulo-30x30" },
  { familia: "Pernos", medida: "Perno hex M10×40 galv. grado 4.8 · ciento", precio: "$8.900", iva: "IVA inc.", despacho: "retiro 2h", stock: "Stock RM", stockDot: "●", sku: "perno-m10x40" },
  { familia: "Maderas", medida: "Terciado 15 mm 1.22×2.44 · plancha", precio: "$28.500", iva: "IVA inc.", despacho: "despacho RM", stock: "Stock RM", stockDot: "●", sku: "terciado-15mm" },
  { familia: "Cemento", medida: "Cemento Melón 25 kg NCh148 · saco", precio: "$6.490", iva: "IVA inc.", despacho: "despacho RM", stock: "Stock RM", stockDot: "●", sku: "cemento-25kg" },
  { familia: "Zinc", medida: "Zinc acanalado 0.35×85×300 cm · plancha", precio: "$12.900", iva: "IVA inc.", despacho: "despacho RM", stock: "Por pedido 48h", stockDot: "○", sku: "zinc-035" },
  { familia: "Herramientas", medida: "Esmeril angular 4.5» 750W · unidad", precio: "$39.900", iva: "IVA inc.", despacho: "retiro hoy", stock: "Stock RM", stockDot: "●", sku: "esmeril-45" },
];

export function FichaTecnica() {
  const [imgErr, setImgErr] = useState(false);
  const onRowClick = (sku: string) => {
    const url = new URL(window.location.href);
    url.hash = "cotiza-obra";
    url.searchParams.set("sku", sku);
    window.history.replaceState(null, "", url.toString());
    const el = document.getElementById("cotiza-obra");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("eter:sku", { detail: sku }));
  };

  return (
    <section id="ficha-tecnica" className="sec-ficha" aria-label="Ficha técnica">
      <div className="wrap">
        <div className="ficha-layout">
          <div className="ficha-main">
            <p className="eyebrow">FICHA / NORMA NCh</p>
            <h2 className="h2">Ficha técnica con medida, norma y precio con IVA.</h2>
            <p className="sub ficha-desc">Cada fila trae medida exacta, material y norma si aplica. El precio es con IVA y se confirma por comuna al cotizar. Corte y doblado de fierro incluido hasta 6 m.</p>

            <div className="tabla-wrap">
              <table className="tabla" aria-label="Ficha técnica">
                <thead>
                  <tr>
                    <th>FAMILIA</th>
                    <th>MEDIDA / NORMA</th>
                    <th>$ UNITARIO (CLP)</th>
                    <th>IVA</th>
                    <th>DESPACHO</th>
                    <th>STOCK</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.sku} onClick={() => onRowClick(r.sku)} tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") onRowClick(r.sku); }} role="button" aria-label={`Cotizar ${r.medida}`}>
                      <td className="td-fam">{r.familia}</td>
                      <td>{r.medida}</td>
                      <td className="td-precio">{r.precio}</td>
                      <td>{r.iva}</td>
                      <td>{r.despacho}</td>
                      <td><span className="stock-dot">{r.stockDot}</span> {r.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="nota-tabla">Valores referenciales con IVA; despacho por comuna y corte/doblado incluidos hasta 6 m. Se confirma al cotizar por WhatsApp.</p>
          </div>

          <div className="ficha-aside" aria-hidden={imgErr ? undefined : false}>
            {!imgErr ? (
              <img src={TILE_PERNOS} alt="Pernos hexagonales M10x40 sobre cartón técnico" className="ficha-img" loading="lazy" decoding="async" onError={() => { setImgErr(true); console.warn("[ETER] falta eter-tile-pernos-1x1.png"); }} />
            ) : (
              <div className="media-falta" data-falta="eter-tile-pernos-1x1.png" style={{ aspectRatio: "1/1", minHeight: 280 }}>falta eter-tile-pernos-1x1.png</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
