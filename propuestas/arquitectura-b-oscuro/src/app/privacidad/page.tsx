import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro kicker="Ley 19.628" title="Privacidad" />
      <section className="shell max-w-3xl space-y-6 py-16 text-[15px] leading-8 text-paper-dim md:py-24">
        <p>
          Los datos que se envían en el formulario de encargo —nombre, correo,
          teléfono, comuna y mensaje— se usan solo para responder esa
          conversación. No se venden ni se ceden a terceros ajenos al estudio.
        </p>
        <p>
          Se guarda una copia local en el navegador (localStorage) para que no
          se pierda el envío si la conexión falla. Puede borrarse desde el
          propio navegador.
        </p>
        <p>
          Titular de los datos: {studio.legal}, {studio.address}, {studio.city}.
          Contacto: {studio.email}.
        </p>
        <p>
          Puede pedir acceso, rectificación o cancelación de sus datos según la
          Ley 19.628 sobre protección de la vida privada.
        </p>
      </section>
    </>
  );
}
