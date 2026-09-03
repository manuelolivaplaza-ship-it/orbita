import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de Estuario Clínica Veterinaria.",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Privacidad"
        title="Tus datos, y los de tu animal."
        lead="Tratamos datos personales según la Ley 19.628. Lo mínimo para atender, facturar y avisarte. Nada se vende."
      />
      <Container className="max-w-3xl pb-20 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          Responsable: {site.legalName}, RUT {site.rut}, {site.fullAddress}.
          Contacto: {site.email}.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Qué reunimos
        </h2>
        <p className="mt-3">
          Nombre del tutor, teléfono, correo, nombre y especie del animal,
          ficha clínica, y lo que nos escribas al agendar. Las imágenes
          diagnósticas quedan en la ficha.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Para qué
        </h2>
        <p className="mt-3">
          Atender, internar, emitir boleta, recordar vacunas y responder
          urgencias. Base jurídica: ejecución del servicio y consentimiento
          al enviar el formulario.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Conservación y derechos
        </h2>
        <p className="mt-3">
          La ficha clínica se conserva el plazo que exige la buena práctica
          veterinaria. Puedes pedir acceso, corrección o supresión escribiendo
          a {site.email}, salvo el mínimo legal de la historia clínica.
        </p>
      </Container>
    </>
  );
}
