import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

/**
 * Proceso en 3 pasos — cards verticales:
 * imagen arriba + texto abajo.
 *
 * Imágenes: public/metodo/paso-1.jpg … paso-3.jpg
 * (si no existen, se usan las URLs de respaldo).
 */
export const MetodoTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Nos cuentas tu negocio',
      time: 'Días 1–3',
      body: 'En una llamada o por mensaje entendemos qué ofreces, a quién le vendes y qué debe pasar cuando alguien entra a tu web.',
      deliverables: [
        'Brief claro y simple',
        'Objetivo principal definido',
        'Referencias visuales acordadas',
      ],
      image: '/metodo/paso-1.jpg',
      imageFallback:
        'https://mail.programbi.com/uploads/Website_wireframe_layout_sketch_202608110453.jpeg',
      imageAlt: 'Wireframe y sketch del sitio',
    },
    {
      number: '02',
      title: 'Diseñamos y construimos',
      time: 'Días 4–14',
      body: 'Diseño y desarrollo al mismo tiempo. Ves avances reales del sitio y puedes dar feedback en el camino.',
      deliverables: [
        'Hero y secciones en vivo',
        'Versión mobile lista',
        'Formulario o WhatsApp integrado',
      ],
      image: '/metodo/paso-2.jpg',
      imageFallback:
        'https://mail.programbi.com/uploads/Website_mockup_3D_render_202608110453.jpeg',
      imageAlt: 'Mockup 3D del diseño web',
    },
    {
      number: '03',
      title: 'Publicamos y te entregamos',
      time: 'Días 15–21',
      body: 'Ajustes finales, SEO base y publicación. Te dejamos todo funcionando y una guía corta de uso.',
      deliverables: [
        'Sitio en producción',
        'Checklist SEO técnico',
        'Guía de uso y handoff',
      ],
      image: '/metodo/paso-3.jpg',
      imageFallback:
        'https://mail.programbi.com/uploads/Dog_food_website_3D_render_202608110454.jpeg',
      imageAlt: 'Sitio publicado y listo',
    },
  ];

  return (
    <section id="metodo" className="bg-[#F7F8FC] px-6 py-24 sm:py-28 relative z-10 isolate">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-14 sm:mb-16 items-end">
          <div>
            <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-3">
              Cómo trabajamos
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] mb-4 max-w-xl leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              De la idea al sitio
              <br />
              publicado.
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md">
              Un proceso en <strong className="font-medium text-[#0B0B12]">3 pasos</strong> y alrededor de{' '}
              <strong className="font-medium text-[#0B0B12]">3 semanas</strong> (o 7 días con Modo Turbo).
              Siempre sabes en qué va el proyecto y qué toca después.
            </p>
          </div>
        </div>

        {/* Cards alargadas: imagen arriba · texto abajo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step) => (
            <SpotlightCard
              key={step.number}
              className="group p-0 h-full overflow-hidden flex flex-col"
              tilt={6}
            >
              <article className="relative flex flex-col h-full min-h-[38rem] sm:min-h-[42rem] overflow-hidden">
                {/* Imagen de fondo a casi todo el alto de la card */}
                <div className="absolute inset-0 bg-zinc-100">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget;
                      if (el.src !== step.imageFallback) {
                        el.src = step.imageFallback;
                      }
                    }}
                  />
                </div>

                {/* Número de paso (sobre la imagen) */}
                <div className="relative z-10 flex items-center gap-2 p-4 sm:p-5">
                  <span className="w-10 h-10 rounded-full bg-white/95 text-[#0B0B12] flex items-center justify-center text-sm font-semibold tabular-nums shadow-sm border border-white/80">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#0B0B12]/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Paso {Number(step.number)}
                  </span>
                </div>

                {/* Spacer: deja ver la imagen arriba; el fade ocupa más abajo */}
                <div className="relative z-0 flex-1 min-h-[16rem] sm:min-h-[18rem]" />

                {/* Texto inferior — blanco sólido + banda de fade bien corta */}
                <div className="relative z-10 mt-auto">
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0"
                    style={{
                      top: '-1.25rem',
                      background:
                        'linear-gradient(to top, #ffffff 0%, #ffffff 82%, rgba(255,255,255,0.75) 92%, rgba(255,255,255,0.25) 98%, transparent 100%)',
                    }}
                  />

                  <div className="relative z-10 px-5 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      {step.time}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-medium text-[#0B0B12] tracking-tight mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                      {step.body}
                    </p>

                    <div className="pt-3 border-t border-zinc-200/70">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                        Qué obtienes
                      </p>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-5">
          <p className="text-sm text-zinc-600 leading-relaxed max-w-xl">
            <strong className="font-medium text-[#0B0B12]">¿Necesitas ir más rápido?</strong>{' '}
            Con Modo Turbo (gratis por tiempo limitado) comprimimos el proceso a{' '}
            <strong className="font-medium text-[#0B0B12]">7 días hábiles</strong>.
          </p>
          <a
            href="#precios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#precios')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-zinc-600 transition-colors shrink-0"
          >
            Ver planes y Turbo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
