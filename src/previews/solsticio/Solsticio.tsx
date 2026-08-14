import { DemoFaq, DemoForm, DemoWhatsApp } from '../DemoNotice';

const dishes = [
  { name: 'Crudo de merluza austral', note: 'leche de tigre, ají cristal, cilantro flor', price: '18' },
  { name: 'Pan de masa madre', note: 'mantequilla ahumada, sal de Cáhuil', price: '7' },
  { name: 'Zapallo asado', note: 'ricotta ahumada, miel de ulmo, semillas', price: '14' },
  { name: 'Cordero del Maule', note: 'jugo oscuro, endibia, alcaparra', price: '32' },
  { name: 'Congrio a la parrilla', note: 'salsa de coral, hinojo, limón de pica', price: '28' },
  { name: 'Helado de membrillo', note: 'aceite de oliva, hojaldre, tomillo', price: '12' },
];

export function Solsticio() {
  return (
    <div
      className="min-h-screen text-[#F3EDE4] antialiased"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif", background: '#14110E' }}
    >
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <a href="#inicio" className="text-xl tracking-[0.18em] uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Solsticio
          </a>
          <nav className="hidden sm:flex items-center gap-7 text-[12px] tracking-widest uppercase text-[#F3EDE4]/70">
            <a href="#carta">Carta</a>
            <a href="#oferta">Degustación</a>
            <a href="#sala">Sala</a>
            <a href="#reserva">Reserva</a>
          </nav>
          <a href="#reserva" className="text-[12px] tracking-widest uppercase border border-white/30 px-4 py-2 hover:bg-white hover:text-[#14110E] transition-colors">
            Reservar
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[92vh] flex items-end">
        <img src="/previews/solsticio/hero.jpg" alt="Plato de temporada" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/40 to-[#14110E]/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-16 pt-40 w-full">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8A078] mb-4">Cocina de temporada · Lastarria</p>
          <h1
            className="text-5xl sm:text-7xl leading-[0.95] max-w-2xl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            La mesa
            <br />
            <em>cambia con el sol.</em>
          </h1>
          <p className="text-[#F3EDE4]/70 max-w-md mb-8">
            26 cubiertos. Carta de luna. Reserva para esta noche o el menú de 7 tiempos del viernes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#reserva" className="px-6 py-3 bg-[#C45C26] text-[#14110E] text-sm tracking-widest uppercase hover:bg-[#e07a42]">
              Reservar mesa
            </a>
            <DemoWhatsApp
              label="WhatsApp · mesa de hoy"
              className="px-6 py-3 border border-white/30 text-sm tracking-widest uppercase hover:bg-white/10"
            />
          </div>
        </div>
      </section>

      <div className="border-y border-white/10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            ['Mar–Sáb', 'Cena desde 19:30'],
            ['Viernes', 'También almuerzo'],
            ['26', 'Cubiertos, no más'],
            ['7 tiempos', 'Degustación'],
          ].map(([a, b]) => (
            <div key={a} className="px-4 py-5">
              <div className="text-sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {a}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-white/40 mt-1">{b}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="carta" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C45C26] mb-3">Carta de temporada</p>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Agosto.
            </h2>
            <p className="text-[#F3EDE4]/60 text-sm leading-relaxed">
              Doce platos. Cambia cada luna. Precios en miles de pesos. Pregunta por vinos de copa.
            </p>
          </div>
          <ol className="md:col-span-8 divide-y divide-white/10">
            {dishes.map((d, i) => (
              <li key={d.name} className="py-5 flex gap-5 items-baseline">
                <span className="text-[#C45C26] text-sm tabular-nums w-6">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <div className="text-xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    {d.name}
                  </div>
                  <div className="text-sm text-[#F3EDE4]/50 mt-0.5">{d.note}</div>
                </div>
                <span className="text-sm text-white/45 tabular-nums">{d.price}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="oferta" className="px-5 sm:px-8 pb-8">
        <div className="max-w-6xl mx-auto rounded-3xl border border-[#C45C26]/40 bg-[#1B1714] p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C45C26] mb-3">Oferta clara</p>
            <h2 className="text-4xl mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Degustación de viernes
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Siete tiempos, maridaje opcional, una sola hora de entrada: 20:30. 12 cupos. Si vienes por ads o por
              Instagram, este es el camino.
            </p>
            <a href="#reserva" className="inline-block px-6 py-3 bg-[#C45C26] text-[#14110E] text-sm tracking-widest uppercase">
              Pedir el viernes
            </a>
          </div>
          <ul className="text-sm text-white/70 space-y-3">
            <li>— $62.000 por persona · sin vino</li>
            <li>— $84.000 con maridaje de 4 copas</li>
            <li>— Aviso 24 h si hay cambio de carta</li>
          </ul>
        </div>
      </section>

      <section id="sala" className="grid md:grid-cols-2">
        <div className="min-h-[28rem]">
          <img src="/previews/solsticio/interior.jpg" alt="Sala de Solsticio" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-8 sm:px-14 py-16 bg-[#1B1714]">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[#C45C26] mb-3">La sala</p>
          <h2 className="text-4xl mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Veintiséis cubiertos.
            <br />
            Una sola cocina.
          </h2>
          <p className="text-[#F3EDE4]/65 leading-relaxed max-w-md mb-6">
            Cena de martes a sábado. Almuerzo solo viernes. No hay música en parlantes. Vestimenta inteligente, no de
            gala.
          </p>
          <p className="text-xs uppercase tracking-widest text-white/35">
            “La mejor sala chica de Lastarria” — La Tercera
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-3 gap-6">
        {[
          ['Mesa de aniversario, sin show. El plato y el silencio hicieron el trabajo.', 'Elena M.'],
          ['Pedí por WhatsApp a las 16 y esa noche había mesa de 2. Así tiene que ser.', 'Tomás P.'],
          ['La degustación de viernes vale el calendario. Volvimos al mes.', 'Rocío & Ian'],
        ].map(([q, n]) => (
          <blockquote key={n} className="border border-white/10 p-6">
            <p className="text-sm text-white/75 leading-relaxed mb-4">“{q}”</p>
            <footer className="text-[11px] uppercase tracking-wider text-white/35">{n}</footer>
          </blockquote>
        ))}
      </section>

      <section id="reserva" className="max-w-xl mx-auto px-5 py-16">
        <h2 className="text-4xl text-center mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          Reservar mesa
        </h2>
        <p className="text-center text-sm text-[#F3EDE4]/50 mb-10">José Miguel de la Barra 347 · Lastarria</p>
        <DemoForm
          className="space-y-3"
          buttonLabel="Pedir mesa"
          buttonClassName="w-full py-3 bg-[#C45C26] text-[#14110E] text-sm tracking-widest uppercase hover:bg-[#e07a42] transition-colors"
        >
          <input required placeholder="Nombre" className="w-full px-4 py-3 bg-white/5 border border-white/10 outline-none text-sm" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/5 border border-white/10 outline-none text-sm" />
          <div className="grid grid-cols-2 gap-3">
            <input type="date" className="w-full px-4 py-3 bg-white/5 border border-white/10 outline-none text-sm" />
            <select className="w-full px-4 py-3 bg-white/5 border border-white/10 outline-none text-sm">
              <option>2 personas</option>
              <option>4 personas</option>
              <option>Degustación viernes</option>
            </select>
          </div>
        </DemoForm>
        <p className="text-center mt-4">
          <DemoWhatsApp label="¿Mesa para hoy? WhatsApp →" className="text-xs uppercase tracking-widest text-[#C45C26]" />
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-5 pb-20">
        <DemoFaq
          items={[
            { q: '¿Hay estacionamiento?', a: 'El más cercano es Lastarria 70, a dos cuadras. También Uber/taxi en la esquina.' },
            { q: '¿Niños?', a: 'Desde 12 años en cena. El almuerzo de viernes es más flexible.' },
            { q: '¿Cancelación?', a: 'Hasta mediodía del mismo día. La degustación pide 24 horas.' },
          ]}
        />
      </section>

      <DemoWhatsApp
        label="Reservar"
        className="fixed bottom-5 right-5 z-30 rounded-full bg-[#C45C26] text-[#14110E] text-xs tracking-widest uppercase px-4 py-3"
      />

      <footer className="border-t border-white/10 py-8 text-center text-[11px] tracking-widest uppercase text-white/35">
        Solsticio · Sitio de ejemplo · Landing + oferta + WhatsApp
      </footer>
    </div>
  );
}
