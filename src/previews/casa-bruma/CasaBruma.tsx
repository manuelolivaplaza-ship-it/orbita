import { DemoFaq, DemoForm, DemoWhatsApp } from '../DemoNotice';

const works = [
  {
    name: 'Casa Ladera',
    place: 'Cajón del Maipo · 2024',
    body: 'Hormigón visto, un solo vano al valle y una cocina que es el centro de la casa.',
    spec: '186 m² · 4 recintos · 14 meses',
    image: '/previews/bruma/hero.jpg',
  },
  {
    name: 'Casa Niebla',
    place: 'Zapallar · 2023',
    body: 'Madera ahumada, patio de viento y una cocina de piedra que no compite con el Pacífico.',
    spec: '142 m² · 3 recintos · 11 meses',
    image: '/previews/bruma/kitchen.jpg',
  },
  {
    name: 'Taller Sur',
    place: 'Pirque · 2025',
    body: 'Un pabellón de trabajo para un ceramista: norte, silencio, piso de radier pulido.',
    spec: '68 m² · 1 nave · 7 meses',
    image: '/previews/bruma/hero.jpg',
  },
];

export function CasaBruma() {
  return (
    <div
      className="min-h-screen text-[#1A1917] antialiased"
      style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif", background: '#E8E2D9' }}
    >
      <header className="sticky top-0 z-20 bg-[#E8E2D9]/90 backdrop-blur px-5 sm:px-10 py-4 flex items-center justify-between">
        <a href="#inicio">
          <div className="text-2xl leading-none" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Casa Bruma
          </div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-[#1A1917]/45 mt-1">Arquitectura</div>
        </a>
        <nav className="hidden sm:flex gap-6 text-[13px] text-[#1A1917]/60">
          <a href="#obras">Obras</a>
          <a href="#metodo">Método</a>
          <a href="#taller">Taller</a>
          <a href="#encargo">Encargo</a>
        </nav>
        <a href="#encargo" className="text-sm bg-[#1A1917] text-[#E8E2D9] px-4 py-2">
          Un encargo
        </a>
      </header>

      <section id="inicio" className="px-5 sm:px-10 pt-10 pb-16">
        <h1
          className="text-5xl sm:text-7xl leading-[0.95] max-w-4xl mb-6"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Casas que
          <br />
          <em>esperan el clima.</em>
        </h1>
        <p className="max-w-md text-[#1A1917]/65 leading-relaxed mb-8">
          Un estudio chico para encargos de vivienda y taller en el valle central. Pocas obras al año. Nada de
          “proyectos llave en mano” de catálogo.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <a href="#encargo" className="px-5 py-2.5 bg-[#1A1917] text-[#E8E2D9] text-sm">
            Contar el terreno
          </a>
          <DemoWhatsApp label="WhatsApp al taller" className="px-5 py-2.5 border border-[#1A1917]/20 text-sm" />
        </div>
        <div className="overflow-hidden aspect-[21/9] mb-8">
          <img src="/previews/bruma/hero.jpg" alt="Casa Ladera" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-xl">
          {[
            ['3', 'Obras en vitrina'],
            ['2', 'Personas en el taller'],
            ['1', 'Encargo a la vez'],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                {n}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#1A1917]/45">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="obras" className="px-5 sm:px-10 pb-24 space-y-16">
        {works.map((w, i) => (
          <article key={w.name} className="grid md:grid-cols-12 gap-8 items-end">
            <div className={`md:col-span-8 overflow-hidden ${i % 2 ? 'md:order-2' : ''}`}>
              <img src={w.image} alt={w.name} className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className={`md:col-span-4 pb-2 ${i % 2 ? 'md:order-1' : ''}`}>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#6B6A4E] mb-2">{w.place}</p>
              <h2 className="text-3xl mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                {w.name}
              </h2>
              <p className="text-sm text-[#1A1917]/65 leading-relaxed mb-3">{w.body}</p>
              <p className="text-xs text-[#1A1917]/45">{w.spec}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="metodo" className="px-5 sm:px-10 pb-24">
        <p className="text-[11px] tracking-[0.18em] uppercase text-[#6B6A4E] mb-3">Cómo se encarga</p>
        <h2 className="text-4xl mb-10" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Del predio a la llave.
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ['01', 'Visita', 'Vemos el terreno, el viento y lo que no se ve en el plano.'],
            ['02', 'Anteproyecto', 'Una maqueta y dos cortes. Todavía no hay render de revista.'],
            ['03', 'Permiso y obra', 'Expediente municipal y dirección de obra. Un solo interlocutor.'],
            ['04', 'Entrega', 'Guía de uso y un año de ajustes menores.'],
          ].map(([n, t, b]) => (
            <div key={n} className="border-t border-[#1A1917]/15 pt-4">
              <div className="text-xs text-[#6B6A4E] mb-2">{n}</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                {t}
              </h3>
              <p className="text-sm text-[#1A1917]/60 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="taller" className="mx-5 sm:mx-10 mb-20 border-t border-[#1A1917]/10 pt-16 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#6B6A4E] mb-3">El taller</p>
          <h2 className="text-4xl mb-5" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Dos personas.
            <br />
            Un encargo a la vez.
          </h2>
        </div>
        <div>
          <p className="text-[#1A1917]/65 leading-relaxed max-w-md mb-6">
            Trabajamos desde un galpón en Pirque. Maqueta, corte y visita a terreno antes que render. Si buscas un
            catálogo de estilos, este no es el estudio.
          </p>
          <blockquote className="text-sm text-[#1A1917]/70 leading-relaxed border-l-2 border-[#6B6A4E] pl-4">
            “No nos vendieron un estilo. Nos preguntaron por el viento.” — familia Casa Ladera
          </blockquote>
        </div>
      </section>

      <section id="encargo" className="px-5 sm:px-10 pb-16 max-w-2xl">
        <h2 className="text-4xl mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Un encargo
        </h2>
        <p className="text-sm text-[#1A1917]/55 mb-8">
          Cuéntanos el terreno, el programa y el plazo. El formulario llega al taller; si no calza, igual respondemos.
        </p>
        <DemoForm
          className="space-y-3"
          buttonLabel="Enviar encargo"
          buttonClassName="w-full py-3 bg-[#1A1917] text-[#E8E2D9] text-sm hover:bg-[#6B6A4E] transition-colors"
        >
          <input required placeholder="Nombre" className="w-full px-4 py-3 bg-white/50 border border-[#1A1917]/10 outline-none text-sm" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/50 border border-[#1A1917]/10 outline-none text-sm" />
          <input placeholder="Comuna o predio" className="w-full px-4 py-3 bg-white/50 border border-[#1A1917]/10 outline-none text-sm" />
          <select className="w-full px-4 py-3 bg-white/50 border border-[#1A1917]/10 outline-none text-sm">
            <option>Casa nueva</option>
            <option>Ampliación</option>
            <option>Taller / pabellón</option>
            <option>Interior</option>
          </select>
          <textarea rows={4} placeholder="Programa, metros, plazo." className="w-full px-4 py-3 bg-white/50 border border-[#1A1917]/10 outline-none text-sm resize-none" />
        </DemoForm>
        <p className="mt-4">
          <DemoWhatsApp label="O escribir por WhatsApp →" className="text-sm text-[#6B6A4E]" />
        </p>
      </section>

      <section className="px-5 sm:px-10 pb-20 max-w-2xl">
        <DemoFaq
          items={[
            { q: '¿Hacen casas fuera de la RM?', a: 'Valle central y litoral cercano. Más lejos, solo si el encargo justifica los viajes de obra.' },
            { q: '¿Cuánto tarda un anteproyecto?', a: 'Entre 6 y 10 semanas después de la visita. No prometemos 15 días.' },
            { q: '¿También interiores?', a: 'Sí, si la casa es nuestra o si el encargo es un pabellón / cocina. No hacemos “home staging”.' },
          ]}
        />
      </section>

      <DemoWhatsApp
        label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 bg-[#1A1917] text-[#E8E2D9] text-sm px-4 py-3"
      />

      <footer className="px-5 sm:px-10 py-8 border-t border-[#1A1917]/10 text-xs text-[#1A1917]/40">
        Casa Bruma · Sitio de ejemplo · Portfolio + método + inquiry
      </footer>
    </div>
  );
}
