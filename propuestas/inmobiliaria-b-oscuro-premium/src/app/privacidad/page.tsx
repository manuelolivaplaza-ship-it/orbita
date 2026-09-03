import type { Metadata } from "next";
import { Container, Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <p className="kicker">Legal</p>
          <h1 className="display mt-5 text-6xl">Privacidad</h1>
          <div className="mt-10 space-y-5 text-sm leading-relaxed text-ivory-soft">
            <p>
              {site.legal}, RUT {site.rut}, con domicilio en {site.address.street},{" "}
              {site.address.comuna}, trata datos personales conforme a la Ley
              N.º 19.628 sobre Protección de la Vida Privada y a las normas que
              la complementan.
            </p>
            <p>
              Los datos que nos entrega al solicitar una visita —nombre, correo,
              teléfono y preferencias de residencia— se usan exclusivamente para
              coordinar esa visita y, si usted lo autoriza, para informarle de
              residencias compatibles. No se venden. No se ceden a portales.
            </p>
            <p>
              Puede pedir acceso, rectificación o cancelación escribiendo a{" "}
              {site.email}. El atelier no instala publicidad de terceros ni
              rastrea más de lo necesario para que el sitio funcione.
            </p>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
