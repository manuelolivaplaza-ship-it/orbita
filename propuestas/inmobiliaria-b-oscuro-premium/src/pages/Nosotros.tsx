import { Revelar, Contador, Marquesina } from "../components/widgets";
import { textoNosotros, cifras, equipo, comunas, marca } from "../lib/datos";

export function Nosotros() {
  return (
    <>
      <section className="pagina pagina-cab">
        <p className="kicker">{textoNosotros.kicker}</p>
        <h1>{textoNosotros.titulo}</h1>
      </section>

      <section className="pagina nosotros-historia">
        <Revelar>
          <p className="prosa-grande">{textoNosotros.parrafo1}</p>
        </Revelar>
        <Revelar delay={120}>
          <p className="prosa-grande">{textoNosotros.parrafo2}</p>
        </Revelar>
      </section>

      <section className="seccion seccion-tinta">
        <div className="cifras">
          {cifras.map((c, i) => (
            <Revelar key={c.etiqueta} delay={i * 90} as="article" className="cifra">
              <p className="cifra-valor">
                <Contador valor={c.valor} sufijo={c.sufijo} />
              </p>
              <h3>{c.etiqueta}</h3>
              <p>{c.detalle}</p>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="pagina">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Cómo trabajamos</p>
            <h2>Tres reglas que no negociamos.</h2>
          </Revelar>
        </div>
        <div className="valores">
          {textoNosotros.valores.map((v, i) => (
            <Revelar key={v.titulo} delay={i * 100} as="article" className="valor">
              <h3>{v.titulo}</h3>
              <p>{v.texto}</p>
            </Revelar>
          ))}
        </div>
      </section>

      <Marquesina items={comunas} />

      <section className="pagina">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Equipo</p>
            <h2>Cuatro personas, cartera acotada.</h2>
          </Revelar>
        </div>
        <div className="equipo">
          {equipo.map((e, i) => (
            <Revelar key={e.nombre} delay={i * 90} as="article" className="persona">
              <span className="persona-avatar" aria-hidden="true">
                {e.iniciales}
              </span>
              <h3>{e.nombre}</h3>
              <p className="persona-cargo">{e.cargo}</p>
              <p className="persona-detalle">{e.detalle}</p>
            </Revelar>
          ))}
        </div>
        <Revelar>
          <div className="nosotros-oficina">
            <p className="kicker">Oficina</p>
            <p className="nosotros-direccion">{marca.direccion}</p>
            <p>{marca.horario}</p>
          </div>
        </Revelar>
      </section>
    </>
  );
}
