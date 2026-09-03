import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const servicios = [
  { n:'01', t:'Psicoterapia adultos', who:'Adultos que necesitan continuidad', desc:'Espacio privado para pensar tu historia, regular ansiedad, ánimo y vínculos. Sin prisa, sin rotación.', dur:'50 min', precio:'desde $58.000 CLP' },
  { n:'02', t:'Psiquiatría', who:'Evaluación y seguimiento farmacológico', desc:'Criterio clínico sobrio: indicación cuando corresponde, revisión periódica y coordinación con psicoterapia.', dur:'30–50 min', precio:'desde $78.000 CLP' },
  { n:'03', t:'Infanto-juvenil (con padres)', who:'Niños y adolescentes + familia', desc:'Trabajo con el niño y entrevistas con padres. Lenguaje claro, objetivos escritos y resguardo total.', dur:'50 min', precio:'desde $62.000 CLP' },
  { n:'04', t:'Pareja y familia', who:'Parejas y núcleos familiares', desc:'Patrones que se repiten, crisis de confianza o distancia. Sesiones conjuntas con encuadre seguro.', dur:'70 min', precio:'desde $85.000 CLP' },
  { n:'05', t:'Crisis y regulación', who:'Cuando tu cabeza no para ni de noche', desc:'Intervención breve para estabilizar, dormir y retomar. Si no somos tu lugar, derivamos con nombre y apellido.', dur:'50 min', precio:'desde $65.000 CLP' },
  { n:'06', t:'Grupos reducidos', who:'Máx. 8 personas · selección previa', desc:'Grupos cerrados, moderación clínica. No es taller motivacional: es trabajo sostenido.', dur:'90 min', precio:'desde $38.000 CLP' },
]

const precios = [
  { nombre:'Evaluación privada', desc:'Primera entrevista · 50 min · presencial u online', precio:'$68.000', dur:'50 min' },
  { nombre:'Psicoterapia', desc:'Sesión individual · frecuencia acordada por escrito', precio:'$58.000', dur:'50 min' },
  { nombre:'Psiquiatría control', desc:'Seguimiento · ajuste y coordinación', precio:'$78.000', dur:'30 min' },
  { nombre:'Terapia de pareja', desc:'Sesión conjunta · 70 min', precio:'$85.000', dur:'70 min' },
  { nombre:'Grupo reducido', desc:'Sesión grupal · 90 min · 8 máx.', precio:'$38.000', dur:'90 min' },
]

const faqs = [
  { q:'¿Cómo garantizan la discreción?', a:'Entrada y agendamiento con reserva — sin sala de espera expuesta. Facturación con glosa neutra (“consulta salud”), sin diagnósticos en boleta. No publicamos testimonios ni fotos: nuestros mejores resultados son los que nadie nota desde fuera. Si necesitas comprobante específico para Isapre, lo emitimos sellado.' },
  { q:'¿Cuánto cuesta la evaluación privada?', a:'$68.000 CLP · 50 min con profesional a cargo de tu caso. Ahí se define plan, frecuencia y honorarios finales por escrito. Nunca partimos sin objetivos escritos. Escríbenos a <a href="mailto:hola@noctua.cl">hola@noctua.cl</a> o <a href="tel:+56229654880">+56 2 2965 4880</a>.' },
  { q:'¿Atienden Fonasa / Isapre?', a:'No atendemos por bono. Emitimos boleta reembolsable con glosa neutra para reembolso Isapre según tu plan. Te orientamos en el proceso sin exponer motivo de consulta.' },
  { q:'¿Presencial u online?', a:'Ambas. Presencial en Las Condes con acceso discreto. Online con link privado y encriptado. Tú eliges; la continuidad la cuida siempre el mismo profesional.' },
  { q:'¿Qué pasa si no conecto con mi terapeuta?', a:'Lo hablamos sin rodeos y te reasignamos dentro de NOCTUA o te derivamos fuera con nombre y apellido — no te dejamos botado. La alianza es clínica, no comercial.' },
  { q:'¿Cómo pido hora si estoy en crisis?', a:'Llama directo <a href="tel:+56229654880">+56 2 2965 4880</a> (Lun–Vie 9:00–20:00, Sáb 9:00–14:00). Si es fuera de horario y hay riesgo, ve a urgencia o llama a Salud Responde 600 360 7777. No reemplazamos urgencia vital.' },
]

function useCountUp(target:number, active:boolean, duration=1200){
  const [val,setVal]=useState(0)
  useEffect(()=>{
    if(!active) return
    let raf=0, start=0
    const step=(ts:number)=>{
      if(!start) start=ts
      const p=Math.min(1,(ts-start)/duration)
      const e=1-Math.pow(1-p,3)
      setVal(Math.round(e*target))
      if(p<1) raf=requestAnimationFrame(step)
    }
    raf=requestAnimationFrame(step)
    return()=>cancelAnimationFrame(raf)
  },[active,target,duration])
  return val
}

export function App(){
  const [scrolled,setScrolled]=useState(false)
  const [hidden,setHidden]=useState(false)
  const [progress,setProgress]=useState(0)
  const [openServ,setOpenServ]=useState<number|null>(null)
  const [openFaq,setOpenFaq]=useState<number|null>(0)
  const [cifrasVisible,setCifrasVisible]=useState(false)
  const [galeriaVisible,setGaleriaVisible]=useState(false)
  const [mobileMenu,setMobileMenu]=useState(false)
  const prevY=useRef(0)
  const cursorRef=useRef<HTMLDivElement>(null)
  const cursorPos=useRef({x:0,y:0})
  const cursorTarget=useRef({x:0,y:0})
  const hoverRef=useRef(false)

  // ready gate for h1
  useEffect(()=>{ const t=requestAnimationFrame(()=>document.documentElement.classList.add('ready')); return()=>{document.documentElement.classList.remove('ready'); cancelAnimationFrame(t)} },[])

  // scroll progress + nav hide + compact + sticky
  useEffect(()=>{
    const onScroll=()=>{
      const y=window.scrollY
      const h=document.documentElement.scrollHeight - window.innerHeight
      setProgress(h>0? (y/h)*100 : 0)
      setScrolled(y>16)
      if(y>prevY.current && y>160) setHidden(true)
      else setHidden(false)
      prevY.current=y
      // active section highlight via hash? simple
    }
    onScroll()
    window.addEventListener('scroll',onScroll,{passive:true})
    return()=>window.removeEventListener('scroll',onScroll)
  },[])

  // custom cursor
  useEffect(()=>{
    const dot=cursorRef.current
    if(!dot) return
    const isTouch=window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(isTouch) return
    let raf=0
    const move=(e:MouseEvent)=>{
      cursorTarget.current={x:e.clientX,y:e.clientY}
      dot.classList.add('active')
    }
    const enter=()=>hoverRef.current=true
    const leave=()=>hoverRef.current=false
    const links=document.querySelectorAll('a, button')
    links.forEach(el=>{el.addEventListener('mouseenter',enter); el.addEventListener('mouseleave',leave)})
    window.addEventListener('mousemove',move)
    const tick=()=>{
      cursorPos.current.x += (cursorTarget.current.x - cursorPos.current.x)*0.18
      cursorPos.current.y += (cursorTarget.current.y - cursorPos.current.y)*0.18
      if(dot){
        dot.style.left=cursorPos.current.x+'px'
        dot.style.top=cursorPos.current.y+'px'
        if(hoverRef.current) dot.classList.add('hover'); else dot.classList.remove('hover')
      }
      raf=requestAnimationFrame(tick)
    }
    raf=requestAnimationFrame(tick)
    return()=>{
      window.removeEventListener('mousemove',move)
      links.forEach(el=>{el.removeEventListener('mouseenter',enter); el.removeEventListener('mouseleave',leave)})
      cancelAnimationFrame(raf)
    }
  },[])

  // observers
  useEffect(()=>{
    const cifrasEl=document.getElementById('cifras')
    const galEl=document.getElementById('galeria')
    if(!cifrasEl || !galEl) return
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.target.id==='cifras' && e.isIntersecting) setCifrasVisible(true)
        if(e.target.id==='galeria' && e.isIntersecting) setGaleriaVisible(true)
      })
    },{threshold:.25})
    obs.observe(cifrasEl); obs.observe(galEl)
    return()=>obs.disconnect()
  },[])

  const c1=useCountUp(12,cifrasVisible)
  const c2=useCountUp(1400,cifrasVisible)
  const c3=useCountUp(96,cifrasVisible)

  const stickyVisible = progress>8 && progress<88

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{width:progress+'%'}} aria-hidden />
      <div ref={cursorRef} className="cursor-dot" aria-hidden />

      <nav className={`nav ${scrolled?'compact':''} ${hidden?'hidden':''}`}>
        <div className="nav-inner">
          <a href="#inicio" className="logo" aria-label="NOCTUA inicio">
            <span className="logo-mark">N</span>
            NOCTUA <span>· SALUD MENTAL</span>
          </a>
          <div className="nav-links" style={mobileMenu?{display:'flex'}:undefined}>
            <a href="#filosofia">Filosofía</a>
            <a href="#servicios">Servicios</a>
            <a href="#precios">Valores</a>
            <a href="#metodo">Método</a>
            <a href="#faq">FAQ</a>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <a href="#reserva" className="btn-champan" style={{padding:'10px 20px'}}>Reservar</a>
            <button className="hamburger" aria-label="Menú" onClick={()=>setMobileMenu(v=>!v)} style={{display:'none'}}>☰</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-left">
          <div className="kicker">Salud mental · Las Condes / Online — Reserva privada</div>
          <h1 className="h1" aria-label="Discreción total. Criterio clínico.">
            <span><i>Discreción total.</i></span>
            <span><i>Criterio clínico.</i></span>
          </h1>
          <p className="subhead">Psicología y psiquiatría con reserva absoluta. Evaluación privada en 72 horas, sin salas de espera expuestas. Un profesional a cargo de tu caso.</p>
          <div className="hero-ctas">
            <a href="#reserva" className="btn-champan">Reservar evaluación privada</a>
            <a href="#filosofia" className="btn-ghost">Conocer el enfoque</a>
          </div>
          <div className="hero-note">● Respuesta el mismo día · Facturación neutra · Online y presencial</div>
          <div style={{marginTop:28,display:'flex',gap:24,flexWrap:'wrap',fontSize:'11px',color:'var(--gris-medio)',letterSpacing:'.06em'}}>
            <span>+56 2 2965 4880</span><span>hola@noctua.cl</span><span>Las Condes</span>
          </div>
        </div>
        <div className="hero-right">
          <img src={`${BASE}media/hero.jpg`} alt="Sala nocturna vacía con sillón marfil y luz cálida rasante sobre muro carbón — visual pro NOCTUA" loading="eager" decoding="async" />
        </div>
      </section>

      <div className="banda">Evaluación privada en 72h · Entrada discreta · Online y presencial</div>

      {/* FILOSOFIA */}
      <section id="filosofia" className="section filo">
        <div className="wrap">
          <div className="filo-grid">
            <div>
              <div className="eyebrow">Filosofía</div>
              <h2>La privacidad es parte del tratamiento.</h2>
              <div className="filo-copy" style={{marginTop:20}}>
                <p>No quieres que todo el edificio sepa por qué vas. Lo entendemos. En NOCTUA la reserva no es marketing, es clínica: agendamiento con reserva, entrada discreta y facturación neutra. <strong>Nuestros mejores resultados son los que nadie puede señalar.</strong></p>
                <p>Por eso <strong>no mostramos caras ni antes/después</strong>. La ausencia de testimonio público es tu garantía. No rotas de terapeuta cada mes: una persona, tu caso, seguimiento real. Y si no somos tu lugar, te derivamos con nombre y apellido — no te dejamos botado.</p>
              </div>
              <div className="quote">
                <p>“Nuestros mejores resultados son los que nadie nota desde fuera. La reserva no es marketing, es clínica.”</p>
                <cite>— Criterio NOCTUA · Dirección clínica</cite>
              </div>
            </div>
            <aside className="filo-side">
              <h3>Lo que no vas a ver aquí — a propósito</h3>
              <ul className="filo-list">
                <li>Sin fotos de pacientes, sin testimonios con foto ni estrellas. La discreción es el lujo.</li>
                <li>Sin salas de espera expuestas. Entras con reserva, sin cruzarte con nadie.</li>
                <li>Sin rotación de profesionales. Un profesional a cargo, siempre el mismo.</li>
                <li>Sin diagnósticos apresurados ni promesas de cura. Objetivos escritos desde el inicio.</li>
                <li>Micro-copy: “Nuestros mejores resultados son los que nadie nota desde fuera.”</li>
              </ul>
              <div style={{marginTop:20,paddingTop:16,borderTop:'1px solid var(--filete)',fontSize:'12px',color:'var(--gris-calido)',lineHeight:1.6}}>
                <strong style={{color:'var(--marfil)'}}>Dolores reales:</strong> “No es falta de ganas. Es que tu cabeza no para ni de noche.” · “Aquí no rotas de terapeuta cada mes.”
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras" className="section cifras">
        <div className="wrap">
          <div style={{marginBottom:32,display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap',alignItems:'end'}}>
            <div>
              <div className="eyebrow">Evidencia en números</div>
              <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:28,fontWeight:300,letterSpacing:'-.02em'}}>Continuidad, no volumen.</h2>
            </div>
            <p style={{fontSize:12,color:'var(--gris-medio)',maxWidth:320,lineHeight:1.6}}>No mostramos caras porque el dato es la prueba. Tabulares serif al entrar.</p>
          </div>
          <div className="cifras-grid">
            <div className="cifra">
              <div className="cifra-num">+<em>{c1}</em> <span style={{fontSize:16,color:'var(--gris-calido)'}}>años</span></div>
              <div className="cifra-label">Trayectoria clínica</div>
              <div className="cifra-sub">Equipo estable, supervisión semanal.</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">+<em>{c2.toLocaleString('es-CL')}</em></div>
              <div className="cifra-label">Procesos continuos</div>
              <div className="cifra-sub">No es falta de ganas: seguimiento real.</div>
            </div>
            <div className="cifra">
              <div className="cifra-num"><em>{c3}</em><span style={{color:'var(--champan)'}}>%</span></div>
              <div className="cifra-label">Continúa su plan</div>
              <div className="cifra-sub">Tras evaluación privada, con objetivos escritos.</div>
            </div>
            <div className="cifra">
              <div className="cifra-num" style={{fontSize:28,lineHeight:1.15}}>1 profesional<br/><span style={{fontSize:13,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--gris-calido)'}}>a cargo, siempre el mismo</span></div>
              <div className="cifra-sub" style={{marginTop:12}}>Sin rotación. Tu caso, una persona.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section servicios">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Servicios</div>
              <h2>Lo que hacemos, sin ruido.</h2>
            </div>
            <p>Índice 01–06 · Hover revela panel. En móvil, toca la fila.</p>
          </div>
          <div className="serv-list">
            {servicios.map((s, i)=>(
              <div key={s.n} className="serv-row" onClick={()=>setOpenServ(openServ===i?null:i)} onMouseEnter={()=>{if(window.innerWidth>720) setOpenServ(i)}} onMouseLeave={()=>{if(window.innerWidth>720) setOpenServ(null)}}>
                <div className="serv-num">{s.n}</div>
                <div className="serv-main">
                  <div className="serv-title">{s.t}</div>
                  <div className="serv-who">{s.who}</div>
                </div>
                <div className="serv-arrow" aria-hidden>{openServ===i?'—':'→'}</div>
                <div className={`serv-flip ${openServ===i?'open':''}`}>
                  <div className="serv-flip-inner">
                    <div className="serv-flip-content">
                      <div>
                        <div className="flip-meta">
                          <span>Duración<strong>{s.dur}</strong></span>
                          <span>Valor<strong>{s.precio}</strong></span>
                          <span>Para quién<strong style={{fontWeight:400,color:'var(--gris-calido)',fontSize:12}}>{s.who}</strong></span>
                        </div>
                        <p className="flip-desc" style={{marginTop:12}}>{s.desc}</p>
                      </div>
                      <a href="#reserva" className="flip-cta" onClick={e=>e.stopPropagation()}>Reservar</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{marginTop:14,fontSize:11,color:'var(--gris-medio)',letterSpacing:'.04em'}}>Presiona una fila para ver duración y precio “desde”. Valor final se confirma en evaluación privada.</p>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section precios">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{color:'var(--champan)'}}>Valores</div>
              <h2>Valores claros, sin sorpresas.</h2>
            </div>
            <p style={{color:'var(--gris-calido)'}}>Boleta reembolsable con glosa neutra. Nunca partimos sin objetivos escritos.</p>
          </div>
          <div className="tabla">
            <div className="tabla-head"><span>Prestación</span><span>Desde</span><span>Duración</span></div>
            {precios.map(r=>(
              <div key={r.nombre} className="fila">
                <div>
                  <div className="fila-nombre">{r.nombre}</div>
                  <div className="fila-desc">{r.desc}</div>
                </div>
                <div className="fila-precio">{r.precio}<small>CLP</small></div>
                <div className="fila-duration">{r.dur}</div>
              </div>
            ))}
          </div>
          <div className="precios-nota">
            <p><strong>El valor final se confirma en tu evaluación privada.</strong> Boleta reembolsable con glosa neutra (“consulta salud”), sin diagnóstico. Si no somos tu lugar, te derivamos con nombre y apellido. Nunca partimos sin objetivos escritos.</p>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="section metodo">
        <div className="wrap">
          <div className="eyebrow">Método</div>
          <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:'clamp(28px,3.5vw,40px)',fontWeight:300,letterSpacing:'-.02em',marginBottom:32}}>Tres pasos, sin vueltas.</h2>
          <div className="metodo-grid">
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <h3>Evaluación privada</h3>
              <p>50 min con profesional a cargo. Historia, motivo y encuadre. Sin salas expuestas, sin prisa.</p>
              <ul><li>Presencial u online</li><li>En 72 horas</li><li>Con reserva absoluta</li></ul>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <h3>Plan y frecuencia por escrito</h3>
              <p>Objetivos, frecuencia y honorarios acordados y escritos. Sabes qué harás y por qué.</p>
              <ul><li>Objetivos medibles</li><li>Frecuencia definida</li><li>Valor confirmado</li></ul>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <h3>Seguimiento continuo</h3>
              <p>El mismo profesional, supervisión semanal interna y coordinación psiquiatría-psicología cuando corresponde.</p>
              <ul><li>1 profesional a cargo</li><li>Coordinación interna</li><li>Derivación responsable si hace falta</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section galeria">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Galería</div>
              <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:'clamp(28px,3.5vw,40px)',fontWeight:300}}>Objetos iluminados, no personas.</h2>
            </div>
            <p>Filete 1px, caption técnica 11px, cortina al entrar.</p>
          </div>
          <div className="gal-grid">
            <div className={`obra ${galeriaVisible?'visible':''}`}>
              <div className={`obra-frame reveal ${galeriaVisible?'visible':''}`}>
                <img src={`${BASE}media/object.jpg`} alt="Bodegón chiaroscuro: cuaderno tapa oscura, lápiz y frasco ámbar sobre piedra oscura con luz cálida puntual — visual pro" loading="lazy" />
              </div>
              <div className="obra-cap"><strong>Papel carbón 300g — luz cálida 2700K</strong><span>object.jpg · 4:5 · visual pro</span></div>
            </div>
            <div className={`obra ${galeriaVisible?'visible':''}`}>
              <div className={`obra-frame reveal ken ${galeriaVisible?'visible':''}`} style={{aspectRatio:'1/1'}}>
                <img src={`${BASE}media/texture.jpg`} alt="Macro de tela seda carbón con luz rasante cálida — visual pro" loading="lazy" />
              </div>
              <div className="obra-cap"><strong>Seda carbón — rasante cálida</strong><span>texture.jpg · 1:1 · Ken Burns 36s</span></div>
            </div>
          </div>
          {/* GALERÍA B — 16 A+B */}
          <div className="gal-grid" style={{ marginTop:12 }}>
            <div className={`obra ${galeriaVisible?'visible':''}`}>
              <div className={`obra-frame reveal ${galeriaVisible?'visible':''}`}>
                <img src={`${BASE}media/object-b.jpg`} alt="Bodegón NOCTUA B — piedra oscura volúmenes luz cálida" loading="lazy" />
              </div>
              <div className="obra-cap"><strong>Piedra oscura — volúmenes</strong><span>object-b.jpg · 4:5 · serie B</span></div>
            </div>
            <div className={`obra ${galeriaVisible?'visible':''}`}>
              <div className={`obra-frame reveal ${galeriaVisible?'visible':''}`} style={{aspectRatio:'1/1'}}>
                <img src={`${BASE}media/texture-b.jpg`} alt="Texture NOCTUA B — concéntrico grano fílmico" loading="lazy" />
              </div>
              <div className="obra-cap"><strong>Concéntrico — grano fílmico</strong><span>texture-b.jpg · 1:1 · serie B</span></div>
            </div>
          </div>
          <div className="corridor-wrap">
            <div className={`reveal ${galeriaVisible?'visible':''}`} style={{overflow:'hidden'}}>
              <img src={`${BASE}media/corridor.jpg`} alt="Pasillo nocturno simétrico vacío con focos cálidos empotrados — visual pro" loading="lazy" />
            </div>
            <div className="corridor-cap"><strong>Pasillo nocturno — focos 2700K · vacío</strong><span>corridor.jpg · 16:9</span></div>
          </div>
          <div className="corridor-wrap" style={{ marginTop:16 }}>
            <div className={`reveal ${galeriaVisible?'visible':''}`} style={{overflow:'hidden'}}>
              <img src={`${BASE}media/corridor-b.jpg`} alt="Corridor NOCTUA B — puertas simetría penumbra" loading="lazy" style={{ aspectRatio:'640/800', width:'100%', objectFit:'cover' }} />
            </div>
            <div className="corridor-cap"><strong>Corridor B — puertas simetría penumbra</strong><span>corridor-b.jpg · 4:5 · serie B</span></div>
          </div>
          <div style={{ marginTop:14, fontSize:11, color:'var(--gris-medio)', display:'flex', gap:10, flexWrap:'wrap' }}><span style={{ border:'1px solid var(--filete)', padding:'4px 8px' }}>16 A+B · ÉTER × 8 + NOCTUA × 8</span><span style={{ border:'1px solid var(--filete)', padding:'4px 8px' }}>Google Flow · muse-spark-1.2 · sin branding</span></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq">
        <div className="wrap">
          <div style={{maxWidth:860}}>
            <div className="eyebrow">Preguntas honestas</div>
            <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:'clamp(28px,3.5vw,40px)',fontWeight:300,letterSpacing:'-.02em',marginBottom:12}}>Si no somos tu lugar, te lo decimos.</h2>
            <p style={{color:'var(--gris-calido)',fontSize:13,lineHeight:1.6,marginBottom:28}}>Sin letra chica. Si estás en crisis fuera de horario, ve a urgencia.</p>
            <div className="faq-list">
              {faqs.map((f,i)=>(
                <div key={i} className={`faq-item ${openFaq===i?'open':''}`}>
                  <button className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}>
                    <span>{f.q}</span>
                    <span className="faq-icon">{openFaq===i?'—':'+'}</span>
                  </button>
                  <div className={`faq-a ${openFaq===i?'open':''}`}>
                    <div className="faq-a-inner">
                      <div className="faq-a-content" dangerouslySetInnerHTML={{__html:f.a}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="section reserva">
        <div className="wrap">
          <div className="reserva-grid">
            <div>
              <div className="eyebrow">Reserva</div>
              <h2>Reserva tu evaluación privada.</h2>
              <div className="tel"><a href="tel:+56229654880">+56 2 2965 4880</a></div>
              <div style={{marginTop:8,fontSize:13,color:'var(--gris-calido)'}}><a href="mailto:hola@noctua.cl" style={{color:'var(--champan)',textDecoration:'underline',textUnderlineOffset:3}}>hola@noctua.cl</a> · Las Condes — presencial y online</div>
              <div className="reserva-actions">
                <a href="tel:+56229654880" className="btn-champan">Llamar ahora</a>
                <a href="mailto:hola@noctua.cl?subject=Reserva%20evaluaci%C3%B3n%20privada%20NOCTUA" className="btn-ghost">Escribir a NOCTUA</a>
              </div>
              <p className="micro">Respondemos personas. Si no contestamos, devolvemos el llamado el mismo día — con discreción.</p>
              <p style={{marginTop:20,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--gris-medio)'}}>Entrada y agendamiento con reserva. Facturación neutra.</p>
            </div>
            <div className="reserva-card">
              <h3>Coordenadas</h3>
              <dl>
                <div><dt>Dirección</dt><dd>Las Condes · Santiago<br/><span>Presencial y online · Entrada discreta con reserva</span></dd></div>
                <div><dt>Horario</dt><dd>Lun–Vie 9:00–20:00<br/>Sáb 9:00–14:00</dd></div>
                <div><dt>Contacto</dt><dd><a href="tel:+56229654880">+56 2 2965 4880</a> · <a href="mailto:hola@noctua.cl">hola@noctua.cl</a></dd></div>
                <div><dt>Facturación</dt><dd>Boleta reembolsable<br/><span>Glosa neutra “consulta salud”</span></dd></div>
              </dl>
              <div className="mapa">Mapa privado · acceso solo con reserva — <span style={{color:'var(--champan)'}}>Las Condes · 16 A+B Maps</span></div>
              <div style={{ marginTop:12, border:'1px solid var(--filete)', overflow:'hidden' }}>
                <svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Mapa Las Condes nocturno">
                  <rect width="320" height="180" fill="#1B1917"/><path d="M0 60 H320 M0 90 H320 M0 120 H320 M80 0 V180 M160 0 V180 M240 0 V180" stroke="#2E2A26" strokeWidth="1"/><circle cx="160" cy="90" r="14" fill="#C8A96A" stroke="#EDE8E0" strokeWidth="1.5"/><text x="160" y="94" textAnchor="middle" fill="#121110" fontSize="7" fontWeight="700" fontFamily="'JetBrains Mono',monospace">A</text><text x="160" y="118" textAnchor="middle" fill="#EDE8E0" fontSize="8" fontFamily="'Inter',sans-serif">Las Condes</text><text x="160" y="128" textAnchor="middle" fill="#9B948B" fontSize="7" fontFamily="'JetBrains Mono',monospace">· Manquehue</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <strong>NOCTUA — Salud Mental</strong><br/>
            Las Condes · Presencial y online<br/>
            <span style={{color:'var(--champan)'}}>Entrada y agendamiento con reserva. Facturación neutra.</span>
          </div>
          <div className="footer-right">
            +56 2 2965 4880 · hola@noctua.cl<br/>
            Lun–Vie 9:00–20:00 · Sáb 9:00–14:00<br/>
            <span style={{fontSize:10,letterSpacing:'.08em'}}>© {new Date().getFullYear()} NOCTUA · Consentimiento informado · Legal Chile</span>
          </div>
        </div>
        <div className="wrap">
          <div className="footer-line">
            <span>Psicología y psiquiatría · Criterio clínico · Sin diagnósticos apresurados</span>
            <span>Hecho con discreción en Santiago</span>
          </div>
        </div>
      </footer>

      <a href="#reserva" className={`sticky-cta ${stickyVisible?'visible':''}`} aria-label="Reservar evaluación privada">Reservar evaluación privada →</a>
    </>
  )
}
