import { Revelar, Formulario } from "../components/widgets";
import { marca, comunas } from "../lib/datos";

export function Contacto() {
  return (
    <>
      <section className="pagina pagina-cab">
        <p className="kicker">Contacto</p>
        <h1>Conversemos de su propiedad.</h1>
        <p className="seccion-sub">
          Escríbanos por el canal que prefiera: contestamos dentro del próximo horario hábil.
        </p>
      </section>

      <section className="pagina contacto-grilla">
        <Revelar className="contacto-form">
          <h2>Enviar mensaje</h2>
          <Formulario
            campos={[
              { nombre: "nombre", etiqueta: "Nombre", requerido: true, placeholder: "Su nombre" },
              { nombre: "telefono", etiqueta: "Teléfono", tipo: "tel", placeholder: "+56 9 …" },
              { nombre: "correo", etiqueta: "Correo", tipo: "email", requerido: true, placeholder: "usted@correo.cl" },
              {
                nombre: "tema",
                etiqueta: "Motivo",
                tipo: "select",
                opciones: ["Cotizar proyecto", "Ver casos", "Trabajar con ustedes", "Prensa", "Otro"],
              },
              { nombre: "mensaje", etiqueta: "Mensaje", tipo: "textarea", placeholder: "Cuéntenos…" },
            ]}
            asunto="Contacto web"
          />
        </Revelar>

        <div className="contacto-datos">
          <Revelar>
            <dl>
              <div>
                <dt>Oficina</dt>
                <dd>{marca.direccion}</dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>{marca.horario}</dd>
              </div>
              <div>
                <dt>Teléfono</dt>
                <dd>
                  <a href={marca.telefonoHref}>{marca.telefono}</a>
                </dd>
              </div>
              <div>
                <dt>Correo</dt>
                <dd>
                  <a href={`mailto:${marca.correo}`}>{marca.correo}</a>
                </dd>
              </div>
            </dl>
          </Revelar>
          <Revelar delay={120}>
            <div className="mapa-wrap mapa-oficina">
              <iframe
                title="Mapa de la oficina"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-70.612%2C-33.402%2C-70.586%2C-33.385&layer=mapnik&marker=-33.393%2C-70.598"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </Revelar>
          <Revelar delay={200}>
            <p className="contacto-comunas">
              <strong>Cobertura:</strong> {comunas.join(" · ")}
            </p>
          </Revelar>
        </div>
      </section>
    </>
  );
}
