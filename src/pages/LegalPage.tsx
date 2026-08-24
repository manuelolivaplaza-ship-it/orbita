import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { site } from '../data/site';

export default function LegalPage({ kind }: { kind: 'privacidad' | 'terminos' }) {
  const privacy = kind === 'privacidad';

  return (
    <>
      <PageMeta
        title={`${privacy ? 'Privacidad' : 'Términos'} | Órbita`}
        description={privacy ? 'Política de privacidad de Órbita.' : 'Términos de uso de Órbita.'}
      />
      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1
            className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B12] mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            {privacy ? 'Privacidad' : 'Términos'}
          </h1>
          <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            {privacy ? (
              <>
                <p>
                  Responsable: Órbita, {site.city}. Contacto:{' '}
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </p>
                <p>
                  Si nos escribís por el formulario, WhatsApp, la agenda o el newsletter, usamos tu nombre, email,
                  teléfono y el detalle del proyecto para responderte, armar una propuesta y coordinar una reunión.
                </p>
                <p>
                  Esos datos se guardan en Supabase (infraestructura en la nube). Supabase actúa como encargado del
                  tratamiento. Puede haber transferencia internacional según la región del proyecto.
                </p>
                <p>
                  Conservamos consultas y reservas mientras el intercambio esté activo y, como máximo, 24 meses después
                  del último contacto, salvo que la ley pida más tiempo. El newsletter se guarda hasta que te des de
                  baja.
                </p>
                <p>
                  La sesión del panel interno usa almacenamiento local del navegador. No usamos cookies de publicidad
                  ni remarketing con los datos del formulario. No vendemos listas.
                </p>
                <p>
                  En Chile aplican tus derechos de la Ley 19.628: acceso, rectificación, cancelación y oposición.
                  Escribinos a {site.email} o a {site.supportEmail}.
                </p>
                <p>
                  Los sitios de ejemplo en /preview son piezas de demostración: sus formularios no envían datos reales.
                </p>
              </>
            ) : (
              <>
                <p>
                  Los precios publicados son referencias en CLP más IVA. El alcance se cierra por escrito en la
                  cotización. Las piezas en /creaciones marcadas como preview son sitios de ejemplo, no clientes en
                  producción.
                </p>
                <p>
                  ProgramBI y Maverlang son proyectos reales en producción; sus sitios viven en sus propios dominios.
                </p>
                <p>
                  Las propuestas en /propuesta son enlaces privados de trabajo. No constituyen un sitio publicado del
                  cliente hasta que se acuerde lo contrario.
                </p>
                <p>Órbita opera desde {site.city}. Para cualquier reclamo: {site.email}.</p>
              </>
            )}
          </div>
          <Link to="/" className="inline-block mt-10 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280]">
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
