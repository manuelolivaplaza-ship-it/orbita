import Image from "next/image";
import { site } from "@/lib/site";
import { ChapterHead } from "./chapter-head";
import { PhoneIcon } from "./icons";

export function Urgencia() {
  return (
    <section id="urgencia" className="chapter" aria-labelledby="urgencia-title">
      <div className="shell g12">
        <div className="urgencia-copy">
          <ChapterHead
            kicker="04 / Urgencia"
            title="¿Detención, medida cautelar o VIF hoy?"
            id="urgencia-title"
          />
          <p className="lede">
            Si es penal o familia crítica, responde hoy dentro del horario
            extendido. No es call center: es el abogado que tomará tu causa.
          </p>
          <a className="urgencia-phone nums" href={site.phoneHref}>
            <PhoneIcon size={20} />
            {site.phone}
          </a>
          <p className="urgencia-meta">
            <span>Respuesta inicial 45 min RM · {site.hours} · Urgencias 24/7</span>
            <span className="available">
              <span className="dot" aria-hidden="true" />
              Disponible hoy
            </span>
          </p>
          <div className="urgencia-ctas">
            <a className="btn btn-primary" href={site.phoneHref}>
              Llamar ahora
            </a>
            <a
              className="btn btn-ghost"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <div className="script">
            <p className="caption">Qué decir</p>
            <p>
              Di: nombre, comuna, materia (penal/familia/civil) y qué pasó hoy.
              Si hay detención, indica comisaría.
            </p>
          </div>
        </div>
        <div className="urgencia-media">
          <Image
            src="/media/fachada.jpg"
            alt="Patio interior de oficina jurídica chilena clásica en penumbra nocturna, muro de piedra clara y puerta de madera oscura"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
