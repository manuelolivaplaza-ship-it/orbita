import { DemoFaq, DemoForm, DemoWhatsApp } from '../DemoNotice';

const specialties = [
  { name: 'Medicina general', body: 'Chequeos, seguimiento y la primera conversación cuando algo no anda bien.' },
  { name: 'Dermatología', body: 'Piel, lunares y tratamientos con tiempo de consulta real — no de 7 minutos.' },
  { name: 'Nutrición clínica', body: 'Planes que se sostienen. Nada de dietas milagro ni PDFs genéricos.' },
  { name: 'Salud de la mujer', body: 'Control ginecológico, climaterio y acompañamiento en cada etapa.' },
  { name: 'Salud mental', body: 'Psiquiatría y psicología clínica, coordinadas con el resto del equipo.' },
];

const team = [
  { initials: 'AM', name: 'Dra. Antonia Mena', role: 'Directora médica · Medicina interna' },
  { initials: 'LR', name: 'Dr. León Rivas', role: 'Dermatología' },
  { initials: 'CS', name: 'Camilo Soto', role: 'Nutrición clínica' },
];

export function ClinicaAurora() {
  return (
    <div
      className="min-h-screen text-[#1C2B24] antialiased"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif", background: '#F3EEE6' }}
    >
      <header className="sticky top-0 z-20 backdrop-blur-md bg-[#F3EEE6]/85 border-b border-[#1C2B24]/8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full border border-[#5B7A6A] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#5B7A6A]" />
            </span>
            <span className="text-[15px] tracking-wide" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              Clínica Aurora
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#1C2B24]/70">
            <a href="#especialidades">Especialidades</a>
            <a href="#como">Cómo funciona</a>
            <a href="#equipo">Equipo</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#reserva">Reservar</a>
          </nav>
          <a
            href="#reserva"
            className="text-[13px] px-4 py-2 rounded-full bg-[#1C2B24] text-[#F3EEE6] hover:bg-[#5B7A6A] transition-colors"
          >
            Pedir hora
          </a>
        </div>
      </header>

      <section id="inicio" className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-16">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#5B7A6A] mb-5">Providencia · Santiago</p>
        <h1
          className="text-4xl sm:text-6xl lg:text-[4.4rem] leading-[1.05] max-w-3xl mb-6"
          style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 400 }}
        >
          Medicina privada,
          <br />
          <em>sin prisa.</em>
        </h1>
        <p className="text-[#1C2B24]/70 text-lg max-w-xl leading-relaxed mb-8">
          Consultas de 40 minutos, un equipo que se habla entre sí y un solo paso: pedir hora por el sitio o WhatsApp.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#reserva" className="px-6 py-3 rounded-full bg-[#5B7A6A] text-white text-sm hover:bg-[#1C2B24] transition-colors">
            Reservar una hora
          </a>
          <DemoWhatsApp
            label="WhatsApp · responder hoy"
            className="px-6 py-3 rounded-full border border-[#1C2B24]/15 text-sm hover:border-[#1C2B24]/40"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['40 min', 'Primera consulta'],
            ['< 24 h', 'Confirmación'],
            ['5', 'Especialidades'],
            ['Fonasa + isapres', 'En convenio'],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-white/70 border border-[#1C2B24]/8 px-4 py-4">
              <div className="text-xl" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                {n}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#1C2B24]/45 mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] overflow-hidden aspect-[16/9] bg-[#ddd6cb]">
          <img src="/previews/aurora/hero.jpg" alt="Sala de espera de Clínica Aurora" className="w-full h-full object-cover" />
        </div>
      </section>

      <section id="especialidades" className="border-t border-[#1C2B24]/8 py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#5B7A6A] mb-3">Qué atendemos</p>
          <h2 className="text-3xl sm:text-4xl mb-3" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
            Especialidades, en lenguaje llano.
          </h2>
          <p className="text-sm text-[#1C2B24]/55 max-w-xl mb-10">
            Elige el área. En el formulario o por WhatsApp te asignamos al profesional correcto.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((s) => (
              <article key={s.name} className="bg-white/70 border border-[#1C2B24]/8 rounded-2xl p-6 flex flex-col">
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  {s.name}
                </h3>
                <p className="text-sm text-[#1C2B24]/65 leading-relaxed flex-1">{s.body}</p>
                <a href="#reserva" className="mt-4 text-sm text-[#5B7A6A] hover:underline">
                  Pedir hora →
                </a>
              </article>
            ))}
            <article className="rounded-2xl overflow-hidden min-h-[12rem]">
              <img src="/previews/aurora/consult.jpg" alt="Box de atención" className="w-full h-full object-cover" />
            </article>
          </div>
        </div>
      </section>

      <section id="como" className="py-20 px-5 sm:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#5B7A6A] mb-3">Sin fricción</p>
          <h2 className="text-3xl sm:text-4xl mb-10" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
            De la web a la consulta.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['01', 'Eliges el área', 'Formulario o WhatsApp. Nos llega el nombre, el motivo y un teléfono.'],
              ['02', 'Te confirmamos', 'En el día hábil te escribimos con hora, piso y lo que debes traer.'],
              ['03', 'Llegas y te atienden', '40 minutos reales. Si hace falta otro especialista, te derivamos adentro.'],
            ].map(([n, t, b]) => (
              <div key={n} className="rounded-2xl border border-[#1C2B24]/8 bg-[#F3EEE6] p-6">
                <div className="text-[#5B7A6A] text-sm mb-3">{n}</div>
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  {t}
                </h3>
                <p className="text-sm text-[#1C2B24]/60 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="py-20 px-5 sm:px-8 bg-[#1C2B24] text-[#F3EEE6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#A8C3B5] mb-3">Equipo</p>
          <h2 className="text-3xl sm:text-4xl mb-12" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
            Te atiende alguien con nombre.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((p) => (
              <div key={p.name} className="border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#5B7A6A] text-white flex items-center justify-center text-sm mb-4">
                  {p.initials}
                </div>
                <div className="text-lg" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  {p.name}
                </div>
                <div className="text-sm text-white/55 mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opiniones" className="py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#5B7A6A] mb-3">Prueba social</p>
          <h2 className="text-3xl sm:text-4xl mb-10" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
            Lo que dicen después de salir.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Pude contar el contexto entero. No sentí que me apuraran para la siguiente ficha.', 'Camila R.', 'Medicina general'],
              ['Me explicaron el lunar y el control. Salí con fecha, no con “vea si se complica”.', 'Andrés V.', 'Dermatología'],
              ['El plan de alimentación era para mi semana real, no un PDF de 40 páginas.', 'Josefina L.', 'Nutrición'],
            ].map(([q, n, r]) => (
              <blockquote key={n} className="rounded-2xl bg-white/70 border border-[#1C2B24]/8 p-6">
                <p className="text-sm leading-relaxed mb-4">“{q}”</p>
                <footer className="text-xs text-[#1C2B24]/50">
                  {n} · {r}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="reserva" className="py-20 px-5 sm:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#5B7A6A] mb-3">Reserva</p>
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              Cuéntanos qué te trae.
            </h2>
            <p className="text-[#1C2B24]/65 leading-relaxed mb-6">
              Te confirmamos por WhatsApp en el día. Lunes a viernes, 8:30–19:00. Av. Providencia 2148, piso 6.
            </p>
            <ul className="text-sm text-[#1C2B24]/70 space-y-2 mb-6">
              <li>Primera consulta · 40 minutos</li>
              <li>Fonasa e isapres en convenio</li>
              <li>Estacionamiento en el edificio</li>
            </ul>
            <DemoWhatsApp
              label="Prefiero WhatsApp →"
              className="text-sm font-medium text-[#5B7A6A] hover:underline"
            />
          </div>
          <DemoForm
            className="bg-white border border-[#1C2B24]/10 rounded-3xl p-6 sm:p-8 space-y-4"
            buttonLabel="Pedir hora"
            buttonClassName="w-full py-3 rounded-full bg-[#1C2B24] text-[#F3EEE6] text-sm hover:bg-[#5B7A6A] transition-colors"
          >
            <input required placeholder="Nombre" className="w-full px-4 py-3 rounded-xl bg-[#F3EEE6] outline-none text-sm" />
            <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-[#F3EEE6] outline-none text-sm" />
            <input type="tel" placeholder="WhatsApp" className="w-full px-4 py-3 rounded-xl bg-[#F3EEE6] outline-none text-sm" />
            <select className="w-full px-4 py-3 rounded-xl bg-[#F3EEE6] outline-none text-sm">
              {specialties.map((s) => (
                <option key={s.name}>{s.name}</option>
              ))}
            </select>
            <textarea rows={3} placeholder="¿Qué te gustaría conversar?" className="w-full px-4 py-3 rounded-xl bg-[#F3EEE6] outline-none text-sm resize-none" />
          </DemoForm>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl mb-2" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
          Preguntas antes de pedir hora
        </h2>
        <DemoFaq
          items={[
            { q: '¿Atienden Fonasa?', a: 'Sí, Fonasa y las isapres en convenio. Te lo confirmamos al agendar.' },
            { q: '¿Puedo cancelar?', a: 'Hasta 12 horas antes, por el mismo WhatsApp de confirmación.' },
            { q: '¿Es presencial?', a: 'Sí, en Providencia. Algunas especialidades ofrecen control online después de la primera visita.' },
          ]}
        />
      </section>

      <DemoWhatsApp
        label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 rounded-full bg-[#25D366] text-white text-sm font-medium px-4 py-3 shadow-lg"
      />

      <footer className="border-t border-[#1C2B24]/8 py-8 px-5 text-center text-xs text-[#1C2B24]/45">
        Clínica Aurora · Sitio de ejemplo · Landing de conversión + WhatsApp
      </footer>
    </div>
  );
}
