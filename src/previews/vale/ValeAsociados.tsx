import { DemoFaq, DemoForm, DemoWhatsApp } from '../DemoNotice';

const areas = [
  {
    name: 'Sociedades y M&A',
    body: 'Constitución, pactos de accionistas, due diligence y compraventas. Trabajamos con founders y family offices.',
  },
  {
    name: 'Laboral de alta dirección',
    body: 'Contratos de gerentes, desvinculaciones sensibles y políticas internas. Sin templates de internet.',
  },
  {
    name: 'Contratos comerciales',
    body: 'Distribución, software, joint ventures y cláusulas que después se pueden ejecutar, no solo firmar.',
  },
  {
    name: 'Controversias',
    body: 'Litigio civil y arbitraje. Tomamos pocos casos: si no podemos defenderlo, lo decimos en la primera reunión.',
  },
];

export function ValeAsociados() {
  return (
    <div
      className="min-h-screen text-[#12141A] antialiased"
      style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif", background: '#F4F1EA' }}
    >
      <header className="sticky top-0 z-20 bg-[#F4F1EA]/90 backdrop-blur border-b border-[#12141A]/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[4.25rem] flex items-center justify-between">
          <a href="#inicio" className="flex items-baseline gap-2">
            <span className="text-lg tracking-tight" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              Vale
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#12141A]/45">& Asociados</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-[#12141A]/65">
            <a href="#practica">Práctica</a>
            <a href="#metodo">Método</a>
            <a href="#casos">Encargos</a>
            <a href="#estudio">El estudio</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href="#contacto" className="text-[12px] tracking-wide uppercase border-b border-[#B0894F] pb-0.5">
            Primera reunión
          </a>
        </div>
      </header>

      <section id="inicio" className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B0894F] mb-5">Estudio jurídico · Santiago</p>
            <h1
              className="text-4xl sm:text-6xl leading-[1.05] mb-6"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}
            >
              Consejo que se sostiene
              <br />
              en el contrato.
            </h1>
            <p className="text-[#12141A]/65 text-lg max-w-xl leading-relaxed mb-8">
              Un equipo chico para asuntos que no admiten plantilla. Si tu caso no es para nosotros, te lo decimos
              antes de cotizar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contacto" className="px-5 py-2.5 bg-[#12141A] text-[#F4F1EA] text-sm tracking-wide uppercase">
                Pedir reunión
              </a>
              <DemoWhatsApp
                label="Filtro por WhatsApp"
                className="px-5 py-2.5 border border-[#12141A]/20 text-sm tracking-wide uppercase"
              />
            </div>
          </div>
          <p className="lg:col-span-5 text-sm text-[#12141A]/55 leading-relaxed lg:pb-2">
            Lastarria 90, oficina 5. Atención con hora. No tomamos consultas por Instagram.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#12141A]/10 border border-[#12141A]/10">
          {[
            ['4', 'Áreas, no un catálogo'],
            ['50 min', 'Primera reunión'],
            ['24 h', 'Respuesta hábil'],
            ['Tope', 'Honorarios por escrito'],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#F4F1EA] px-4 py-5">
              <div className="text-2xl" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                {n}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#12141A]/45 mt-1">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-hidden aspect-[21/9] bg-[#ddd6c8]">
          <img src="/previews/vale/hero.jpg" alt="Pasillo del estudio" className="w-full h-full object-cover" />
        </div>
      </section>

      <section id="practica" className="border-t border-[#12141A]/10 py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#B0894F] mb-3">Áreas</p>
          <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
            Dónde sí podemos ayudar.
          </h2>
          <p className="text-sm text-[#12141A]/55 mb-10 max-w-xl">
            No hacemos familia, penal ni inmobiliario masivo. Si llega eso, derivamos.
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-[#12141A]/10 border border-[#12141A]/10">
            {areas.map((a) => (
              <article key={a.name} className="bg-[#F4F1EA] p-8">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  {a.name}
                </h3>
                <p className="text-sm text-[#12141A]/65 leading-relaxed mb-4">{a.body}</p>
                <a href="#contacto" className="text-xs uppercase tracking-wider text-[#B0894F]">
                  Consultar esta área →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="py-20 px-5 sm:px-8 bg-[#12141A] text-[#F4F1EA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#D4B483] mb-3">Método</p>
            <h2 className="text-3xl sm:text-4xl mb-8" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              Tres pasos. Sin teatro.
            </h2>
            <ol className="space-y-6">
              {[
                ['01', 'Filtro', 'Una nota de una página: hechos, urgencia, lo que ya intentaste.'],
                ['02', 'Reunión', '50 minutos. Salimos con un sí, un no, o un alcance por escrito.'],
                ['03', 'Encargo', 'Honorarios fijos o tope. Nunca “vemos según se complique”.'],
              ].map(([n, t, b]) => (
                <li key={n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="text-[#D4B483] text-sm">{n}</span>
                  <div>
                    <div className="font-medium">{t}</div>
                    <p className="text-sm text-white/55 mt-1 leading-relaxed">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden min-h-[22rem]">
            <img src="/previews/vale/desk.jpg" alt="Escritorio del estudio" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="casos" className="py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#B0894F] mb-3">Tipo de encargo</p>
          <h2 className="text-3xl sm:text-4xl mb-10" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
            Así llega el trabajo.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['SaaS B2B', 'Pacto de accionistas y un contrato de distribución para Latam. Cerrado en 3 semanas.'],
              ['Family office', 'Due diligence de una compraventa de sociedad operativa. Informe de 12 páginas, no 80.'],
              ['Gerencia', 'Salida de un gerente con cláusula de no competencia que sí se podía ejecutar.'],
            ].map(([t, b]) => (
              <article key={t} className="border border-[#12141A]/10 p-6 bg-white/50">
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  {t}
                </h3>
                <p className="text-sm text-[#12141A]/60 leading-relaxed">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estudio" className="px-5 sm:px-8 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start border-t border-[#12141A]/10 pt-16">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B0894F] mb-3">El estudio</p>
            <h2 className="text-3xl mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              Dos socias. Un criterio.
            </h2>
            <p className="text-sm text-[#12141A]/60 leading-relaxed">
              Vale Herrera y Amanda Soto. No hay “el junior te arma el primer draft y vemos”. Si tomamos el encargo,
              lo firma quien se sienta a la mesa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['V.H.', 'Vale Herrera', 'Sociedades / M&A'],
              ['A.S.', 'Amanda Soto', 'Laboral / contratos'],
            ].map(([i, n, r]) => (
              <div key={n} className="border border-[#12141A]/10 p-5">
                <div className="w-10 h-10 bg-[#12141A] text-[#F4F1EA] text-xs flex items-center justify-center mb-3">
                  {i}
                </div>
                <div className="text-sm font-medium">{n}</div>
                <div className="text-xs text-[#12141A]/45 mt-1">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-5 sm:px-8 bg-white/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-3" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
            Escribir al estudio
          </h2>
          <p className="text-sm text-[#12141A]/55 mb-8">
            El formulario pregunta urgencia y área para ruteo interno. Si no tomamos el caso, igual te dejamos una
            derivación.
          </p>
          <DemoForm
            className="grid sm:grid-cols-2 gap-3"
            buttonLabel="Enviar nota"
            buttonClassName="sm:col-span-2 py-3 bg-[#12141A] text-[#F4F1EA] text-sm tracking-wide uppercase hover:bg-[#2a2d36] transition-colors"
          >
            <input required placeholder="Nombre" className="px-4 py-3 bg-white border border-[#12141A]/12 outline-none text-sm" />
            <input required type="email" placeholder="Email" className="px-4 py-3 bg-white border border-[#12141A]/12 outline-none text-sm" />
            <input placeholder="Empresa o parte" className="px-4 py-3 bg-white border border-[#12141A]/12 outline-none text-sm" />
            <select className="px-4 py-3 bg-white border border-[#12141A]/12 outline-none text-sm">
              <option>Área: Sociedades / M&A</option>
              <option>Área: Laboral</option>
              <option>Área: Contratos</option>
              <option>Área: Controversias</option>
            </select>
            <select className="px-4 py-3 bg-white border border-[#12141A]/12 outline-none text-sm sm:col-span-2">
              <option>Urgencia: esta semana</option>
              <option>Urgencia: este mes</option>
              <option>Exploratorio</option>
            </select>
            <textarea rows={4} placeholder="Hechos, en un párrafo." className="sm:col-span-2 px-4 py-3 bg-white border border-[#12141A]/12 outline-none text-sm resize-none" />
          </DemoForm>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 pb-20">
        <DemoFaq
          items={[
            { q: '¿Cobran la primera reunión?', a: 'La de filtro (50 min) tiene un valor fijo. Si no tomamos el caso, se descuenta de la derivación o se queda como esa hora.' },
            { q: '¿Trabajan remote?', a: 'Sí, con clientes en Chile y el resto de Latam. La firma de poderes es presencial o por notaría digital.' },
            { q: '¿Hacen startup “paquete”? ', a: 'No. Armamos lo que el cap table y el trato piden, no un kit de 4 PDFs.' },
          ]}
        />
      </section>

      <DemoWhatsApp
        label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 bg-[#12141A] text-[#F4F1EA] text-xs tracking-widest uppercase px-4 py-3"
      />

      <footer className="border-t border-[#12141A]/10 py-8 text-center text-xs text-[#12141A]/40">
        Vale & Asociados · Sitio de ejemplo · Multi-sección + formulario con routing
      </footer>
    </div>
  );
}
