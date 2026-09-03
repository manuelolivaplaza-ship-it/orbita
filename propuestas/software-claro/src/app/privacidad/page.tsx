import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Cómo trata Alba los datos que nos envías.",
};

export default function PrivacidadPage() {
  return (
    <section className="wrap max-w-2xl py-16 md:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="display mt-5 text-[clamp(2.6rem,6vw,4.4rem)]">Privacidad</h1>
      <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.75] text-muted">
        <p>
          {site.legal} trata los datos que nos envías con el único fin de
          responder a tu consulta y, si corresponde, preparar una propuesta de
          trabajo. No vendemos listas. No hacemos marketing con tu correo.
        </p>
        <p>
          Conservamos el mensaje el tiempo necesario para la conversación
          comercial. Puedes pedir acceso, corrección o eliminación escribiendo
          a{" "}
          <a className="text-ink link-line" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <p>
          Este sitio no usa cookies de seguimiento. La hora de Santiago se
          calcula en tu navegador. El formulario no se envía a un tercero: en
          esta versión de demostración, el envío queda en el cliente.
        </p>
        <p>
          Nos regimos por la Ley N° 19.628 sobre protección de la vida privada
          y por las normas que la reemplacen en Chile.
        </p>
      </div>
    </section>
  );
}
