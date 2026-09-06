import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legal}. Cómo tratamos los datos que nos envía.`,
};

export default function PrivacidadPage() {
  return (
    <article className="shell max-w-3xl pb-24 pt-12 md:pb-32 md:pt-20">
      <h1 className="display text-[clamp(2.4rem,6vw,4.4rem)]">
        Cómo tratamos sus datos
      </h1>
      <p className="mt-8 text-muted">
        {site.legal}, Rut {site.rut}, con domicilio en {site.address.street},{" "}
        {site.address.commune}, Santiago de Chile.
      </p>

      <div className="mt-12 space-y-10 text-[1.04rem] leading-relaxed">
        <section>
          <h2 className="font-display text-2xl tracking-[-0.03em]">Qué recabamos</h2>
          <p className="mt-3 text-muted">
            Si escribe por el formulario, el correo o WhatsApp, guardamos
            nombre, correo, empresa y el mensaje. Lo usamos solo para responder
            y, si hay encargo, para la bitácora del trabajo. No vendemos listas.
            No hacemos perfiles publicitarios.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-[-0.03em]">Base y plazo</h2>
          <p className="mt-3 text-muted">
            Tratamos estos datos porque nos los entrega para una conversación
            profesional (Ley 19.628). Los conservamos el tiempo del encargo y,
            después, el que exija la ley tributaria y civil. Puede pedir acceso,
            corrección o supresión a {site.email}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-[-0.03em]">Encargos</h2>
          <p className="mt-3 text-muted">
            En un levantamiento podemos ver operación, planillas y sistemas de
            tu empresa. Eso queda bajo confidencialidad, separado de este sitio,
            y no se usa para entrenar modelos ni para otro cliente.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-[-0.03em]">Sitio</h2>
          <p className="mt-3 text-muted">
            Este sitio no instala cookies de seguimiento. El instrumento de
            traza corre en el navegador; no envía la reproducción a ningún
            servidor. El reloj usa la zona horaria de Santiago.
          </p>
        </section>
      </div>
    </article>
  );
}
