import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, MessageCircle, Package, ShieldCheck, Sparkles } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { siteUrl, whatsappUrl } from '../data/site';
import { professionalServiceJsonLd } from '../seo/schema';
import type { LayoutOutletContext } from '../layouts/MainLayout';

const WA_TEXT = 'Hola Reclu! Quisiera pedir un presupuesto para el panel CRM con WhatsApp.';

export default function CrmLandingPage() {
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();

  return (
    <>
      <PageMeta
        title="CRM con WhatsApp | Reclu"
        description="Cada sitio Reclu incluye panel de administración: catálogo, prospectos, agenda, pedidos y WhatsApp. Sin HubSpot ni cuota extra."
        jsonLd={professionalServiceJsonLd(siteUrl('/crm'))}
      />

      <section className="relative z-10 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-[88rem]">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-700 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-zinc-900" />
              <span>Panel de administración · Incluido</span>
            </div>
            <h1
              className="mb-6 text-4xl font-medium leading-[1.08] tracking-tight text-[#0B0B12] sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Tu web no es un folleto.
              <br />
              Viene con panel de control.
            </h1>
            <p className="mb-8 max-w-xl text-base font-normal leading-snug text-zinc-600 sm:text-xl">
              Cada propuesta incluye su propio admin: catálogo (precios, stock, qué se ve en la web),
              prospectos, agenda, pedidos y WhatsApp. Sin HubSpot ni cuota extra.
            </p>
            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Estación')}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0B0B12] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-zinc-800"
              >
                <span>Pedir presupuesto</span>
                <ArrowRight className="h-4 w-4 text-zinc-300" />
              </button>
              <Link
                to="/crm/demo"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-2xs hover:bg-zinc-50"
              >
                Ver demo
              </Link>
              <a
                href={whatsappUrl(WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 px-2 py-2 text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-[5px] hover:text-[#0B0B12]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-900">
              <Package className="h-5 w-5" />
            </div>
            <h2 className="mb-2 text-lg font-semibold tracking-tight text-[#0B0B12]">
              Catálogo que manda la web
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              Publicas un tratamiento, un auto o un SKU y aparece en el sitio. Ocultas el precio, bajas
              el stock o lo dejas en borrador sin tocar código.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-50 text-emerald-600">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h2 className="mb-2 text-lg font-semibold tracking-tight text-[#0B0B12]">
              Prospecto → WhatsApp
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              El formulario cae en la bandeja, puedes moverlo en el pipeline y abrir WhatsApp con el
              mensaje armado. Cero Excel.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-900">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mb-2 text-lg font-semibold tracking-tight text-[#0B0B12]">
              Sin suscripción de CRM
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              El panel corre en la misma arquitectura de tu web. Agenda, pedidos, equipo y ajustes
              incluidos — no es un add-on de 50 USD/mes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
