import { Revelar, Formulario } from "../components/widgets";
import { textoVender, valoresGestion, faq } from "../lib/datos";
import { useState } from "react";

export function Vender() {
  const [abierta, setAbierta] = useState(0);

  return (
    <>
      <section className="pagina pagina-cab vender-cab">
        <p className="kicker">{textoVender.kicker}</p>
        <h1>{textoVender.titulo}</h1>
        <p className="seccion-sub">{textoVender.sub}</p>
      </section>

      <section className="pagina vender-grilla">
        <div className="vender-beneficios">
          {textoVender.beneficios.map((b, i) => (
            <Revelar key={b.titulo} delay={i * 90} as="article" className="vender-beneficio">
              <span className="vender-n">0{i + 1}</span>
              <div>
                <h2>{b.titulo}</h2>
                <p>{b.texto}</p>
              </div>
            </Revelar>
          ))}
        </div>
        <Revelar className="vender-form">
          <h2>Cotizar proyecto</h2>
          <Formulario
            campos={[
              { nombre: "nombre", etiqueta: "Nombre", requerido: true, placeholder: "Su nombre" },
              { nombre: "telefono", etiqueta: "Teléfono", tipo: "tel", requerido: true, placeholder: "+56 9 …" },
              { nombre: "correo", etiqueta: "Correo", tipo: "email", placeholder: "usted@correo.cl" },
              {
                nombre: "tipo",
                etiqueta: "Tipo de proyecto",
                tipo: "select",
                opciones: ["Marca", "Sitio web", "Campaña", "Contenido", "Aún lo estoy definiendo"],
                requerido: true,
              },
              {
                nombre: "comuna",
                etiqueta: "Comuna",
                tipo: "select",
                opciones: ["Vitacura", "Las Condes", "Lo Barnechea", "Providencia", "Ñuñoa", "Otra"],
              },
              {
                nombre: "mensaje",
                etiqueta: "Cuéntenos qué necesita",
                tipo: "textarea",
                placeholder: "Metros útiles, antigüedad, si vive arrendada, ideal de plazo…",
              },
            ]}
            asunto="Consulta de proyecto"
            nota="Respondemos dentro del próximo horario hábil. La visita de medición toma 45 minutos."
          />
        </Revelar>
      </section>

      <section className="seccion seccion-tinta">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Valores de gestión</p>
            <h2>{valoresGestion.intro}</h2>
          </Revelar>
        </div>
        <Revelar className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Venta</th>
                <th>Arriendo</th>
              </tr>
            </thead>
            <tbody>
              {valoresGestion.filas.map((f) => (
                <tr key={f.tipo}>
                  <td>
                    <strong>{f.tipo}</strong>
                    <span>{f.detalle}</span>
                  </td>
                  <td>{f.venta}</td>
                  <td>{f.arriendo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Revelar>
      </section>

      <section className="seccion pagina">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Preguntas frecuentes</p>
            <h2>Lo que preguntan antes de firmar.</h2>
          </Revelar>
        </div>
        <div className="faq">
          {faq.map((f, i) => (
            <div key={f.p} className={"faq-item" + (abierta === i ? " abierta" : "")}>
              <button type="button" onClick={() => setAbierta(abierta === i ? -1 : i)} aria-expanded={abierta === i}>
                {f.p}
                <span className="faq-icono" aria-hidden="true">
                  {abierta === i ? "–" : "+"}
                </span>
              </button>
              <div className="faq-resp">
                <div>
                  <p>{f.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
