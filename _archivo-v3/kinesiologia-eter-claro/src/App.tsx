import { useEffect, useRef, useState } from "react";
const BASE = import.meta.env.BASE_URL;
const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "servicios", label: "Servicios" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];
const SERVS = [
  { n: "01", t: "Kinesiología traumatológica", d: "Esguinces, hombro, rodilla, cadera. Dolor que no cede con reposo.", precio: "desde $32.000", meta: "45–60 min · para dolor persistente >3 semanas" },
  { n: "02", t: "Kinesiología deportiva", d: "Sobrecarga, tendinopatías, retorno progresivo sin apuro ficticio.", precio: "desde $34.000", meta: "60 min · con pauta por escrito" },
  { n: "03", t: "Kinesiología neurológica", d: "ACV, Parkinson, equilibrio y marcha. Plan con objetivos medibles.", precio: "desde $38.000", meta: "60 min · frecuencia según evaluación" },
  { n: "04", t: "Kinesiología respiratoria", d: "Adulto y adulto mayor. Higiene bronquial, disnea, post-viral.", precio: "desde $36.000", meta: "45–60 min · box o domicilio" },
  { n: "05", t: "A domicilio", d: "Misma evaluación y pauta en tu casa. RM oriente y centro.", precio: "desde $45.000", meta: "60 min · Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Santiago Centro" },
  { n: "06", t: "Evaluación + plan de tratamiento", d: "45 min: historia, tests, hipótesis y plan con alta estimada por escrito.", precio: "desde $35.000", meta: "Incluye plan y boleta el mismo día" },
];
const PRECIOS = [
  { name: "Evaluación kinésica 45 min", price: "35.000", plazo: "ag. 48 h" },
  { name: "Sesión traumatológica / deportiva box", price: "32.000", plazo: "45–60 min" },
  { name: "Sesión neurológica / respiratoria", price: "38.000", plazo: "60 min" },
  { name: "Sesión a domicilio RM oriente/centro", price: "45.000", plazo: "60 min" },
  { name: "Pack 5 sesiones", price: "152.000", plazo: "ahorro vs. individual", hl: true },
  { name: "Pack 10 sesiones", price: "288.000", plazo: "medición incluida" },
];
const FAQS = [
  { q: "¿Cuánto cuesta la primera evaluación?", a: "Evaluación kinésica 45 min desde $35.000. Incluye entrevista, tests funcionales, hipótesis clínica y plan por escrito con frecuencia y alta estimada. Emitimos boleta reembolsable el mismo día. El valor final se confirma en la evaluación — no vendemos packs antes de evaluarte. Agenda al +56 2 2840 3315." },
  { q: "¿Atienden ISAPRE/FONASA y cómo es el reembolso?", a: "Sí. Emitimos boleta electrónica reembolsable el mismo día para ISAPRE y FONASA. Al agendar te indicamos qué porcentaje suele reembolsar tu plan y qué código usar. Convenio directo con algunas ISAPRE — consúltanos por tu previsión antes de la sesión." },
  { q: "¿Box o domicilio, qué me conviene?", a: "Box si necesitas camilla, bandas y progresión supervisada. Domicilio si tu dolor limita traslados, eres adulto mayor o prefieres pauta en tu espacio real. La calidad de la evaluación es idéntica: 60 min, mismo kinesiólogo de principio a fin y pauta por escrito." },
  { q: "¿Cada cuánto son las sesiones y cuánto dura el tratamiento?", a: "Frecuencia habitual 1–2×/semana según fase. El 81% de nuestras altas ocurre en ≤8 sesiones con pauta domiciliaria diaria. Re-evaluamos cada 3–4 sesiones y ajustamos carga. Si no progresas, cambiamos el plan — no te extendemos el bono." },
  { q: "¿Qué llevo a la evaluación?", a: "Orden médica si la tienes (no obligatoria), exámenes de imagen (RX, RM) en el celular, lista de fármacos y ropa cómoda. Llega 10 min antes. La evaluación dura 45 min y sales con plan y boleta." },
  { q: "¿Cómo cancelo o reprogramo?", a: "Aviso hasta 12 h antes sin costo por WhatsApp al +56 2 2840 3315. Reprogramas en el mismo mensaje. Si faltas sin aviso, la sesión se considera realizada porque bloqueamos box y profesional exclusivo para ti." },
];
function useCount(active:boolean,target:number){
  const [v,setV]=useState(0);
  useEffect(()=>{
    if(!active) return;
    let s=0; const t=Date.now(); const dur=1200;
    const tick=()=>{const p=Math.min(1,(Date.now()-t)/dur);const e=1-Math.pow(1-p,3); s=Math.round(e*target); setV(s); if(p<1) requestAnimationFrame(tick)};
    const id=requestAnimationFrame(tick); return()=>cancelAnimationFrame(id);
  },[active,target]);
  return v;
}
export function App(){
  const [openNav,setOpenNav]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [hideNav,setHideNav]=useState(false);
  const [prog,setProg]=useState(0);
  const [openServ,setOpenServ]=useState<number|null>(0);
  const [openFaq,setOpenFaq]=useState<number|null>(0);
  const [showSticky,setShowSticky]=useState(false);
  const [cifrasOn,setCifrasOn]=useState(false);
  const cifrasRef=useRef<HTMLDivElement>(null);
  const galRef=useRef<HTMLDivElement>(null);
  const [galIn,setGalIn]=useState(false);
  const lastY=useRef(0);
  useEffect(()=>{
    const onScroll=()=>{
      const y=window.scrollY;
      setScrolled(y>10);
      setHideNav(y>lastY.current && y>120);
      lastY.current=y;
      const h=document.documentElement.scrollHeight - window.innerHeight;
      setProg(h>0? (y/h)*100 :0);
      setShowSticky(y>700);
    };
    window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);
  useEffect(()=>{
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting) setCifrasOn(true)},{threshold:.3});
    if(cifrasRef.current) io.observe(cifrasRef.current);
    const io2=new IntersectionObserver(([e])=>{if(e.isIntersecting) setGalIn(true)},{threshold:.2});
    if(galRef.current) io2.observe(galRef.current);
    return()=>{io.disconnect();io2.disconnect()};
  },[]);
  const c1=useCount(cifrasOn,9);
  const c2=useCount(cifrasOn,4800);
  const c3=useCount(cifrasOn,81);
  const c4=useCount(cifrasOn,6);
  return (
    <>
      <div className="progress" style={{width:`${prog}%`}} aria-hidden />
      <div className={`nav-wrap ${scrolled?"scrolled":"top"} ${hideNav?"hide":""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="brand">ÉTER<span>Centro de Kinesiología</span></a>
          <nav className={`nav-links ${openNav?"open":""}`} aria-label="Principal">
            {NAV.map(n=> <a key={n.id} href={`#${n.id}`} onClick={()=>setOpenNav(false)}>{n.label}</a>)}
            <a href="#reserva" className="btn-ink" onClick={()=>setOpenNav(false)}>Agendar evaluación</a>
          </nav>
          <button className="hamb" aria-label="Abrir menú" onClick={()=>setOpenNav(v=>!v)} aria-expanded={openNav}>
            <span/><span/><span/>
          </button>
        </div>
      </div>

      <section id="inicio" className="hero wrap">
        <div>
          <div className="kicker">Centro de Kinesiología · Las Condes / Vitacura · Box y domicilio</div>
          <h1>Volver a moverte <br/>sin miedo.</h1>
          <p className="hero-sub">Evaluación kinésica en 48 horas, plan por escrito y reembolso ISAPRE/FONASA informado antes de partir. Traumatológica, deportiva y neurológica — en box o a domicilio.</p>
          <div className="hero-ctas">
            <a href="#reserva" className="btn-ink">Agendar evaluación</a>
            <a href="#precios" className="link-underline">Ver precios y convenios →</a>
          </div>
          <div style={{marginTop:18,display:"flex",gap:12,flexWrap:"wrap",fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"var(--gris)"}}>
            <span>Evaluación en 48h</span><span>·</span><span>Plan por escrito</span><span>·</span><span>Alta estimada informada</span><span>·</span><span>Boleta reembolsable</span>
          </div>
          <div className="rule" />
          <p style={{fontSize:12,color:"var(--gris)",lineHeight:1.6}}>No vendemos 20 sesiones por adelantado. Si tu caso es quirúrgico o necesita otro especialista, te derivamos donde corresponde — sin retenerte. <br/><em style={{color:"var(--tinta)"}}>Emitimos boleta reembolsable el mismo día. El valor final se confirma en la evaluación, no antes.</em></p>
        </div>
        <div className="hero-media">
          <div style={{position:"relative",overflow:"hidden",border:"1px solid var(--linea)"}}>
            <img src={`${BASE}media/box.jpg`} alt="Box de kinesiología vacío con camilla de lino, mesa de roble y ventanal con luz norte" />
            <div className="dots" aria-hidden />
          </div>
          <figcaption><span>Box ÉTER — luz norte, 60 min por sesión</span><span>Las Condes / Vitacura</span></figcaption>
        </div>
      </section>

      <div className="band wrap" aria-hidden>
        <span>Evaluación en 48h</span><span>·</span><span>Plan por escrito</span><span>·</span><span>Alta estimada informada</span><span>·</span><span>Boleta reembolsable</span>
      </div>

      <section id="cifras" ref={cifrasRef} className="cifras">
        <div className="wrap">
          <div className="kicker">Evidencia sobria</div>
          <h2 className="h2" style={{fontSize:"clamp(28px,4vw,38px)"}}>Alta oportuna, no sesiones eternas.</h2>
          <div className="cifras-grid" id="evidencia">
            <div className="cifra"><b>+{c1} años</b><span>trayectoria clínica continua</span></div>
            <div className="cifra"><b>+{c2.toLocaleString("es-CL")} <span style={{fontSize:18}}>pacientes/año</span></b><span>box y domicilio RM</span></div>
            <div className="cifra"><b>{c3}%</b><span>alta en ≤8 sesiones</span></div>
            <div className="cifra"><b>{c4} kinesiólogos</b><span>mismo equipo, sin rotación</span></div>
          </div>
          <p className="cifras-note">Sin antes/después. La evidencia es alta oportuna, no foto.</p>
        </div>
      </section>

      <section id="servicios">
        <div className="wrap">
          <div className="servicios-head">
            <div>
              <div className="kicker">Servicios</div>
              <h2 className="h2">Qué tratamos.</h2>
              <p className="lead">Lenguaje plano. Sin jerga quirúrgica. Toca cada fila para ver duración y precio.</p>
            </div>
            <a href="#reserva" className="link-underline">Agendar evaluación →</a>
          </div>
          <div className="serv-list" role="list">
            {SERVS.map((s,i)=>(
              <div key={s.n} role="listitem" className={`serv-item ${openServ===i?"open":""}`} onClick={()=>setOpenServ(openServ===i?null:i)}>
                <div className="serv-num">{s.n}</div>
                <div>
                  <div className="serv-title">{s.t}</div>
                  <div className="serv-meta">{s.d} · {s.meta}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div className="serv-price"><strong>{s.precio}</strong></div>
                  <div className="serv-arrow" aria-hidden>{openServ===i?"—":"+"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" style={{background:"var(--papel-2)",borderTop:"1px solid var(--linea)",borderBottom:"1px solid var(--linea)"}}>
        <div className="wrap">
          <div className="kicker">Equipo</div>
          <h2 className="h2">Mismo kinesiólogo de principio a fin.</h2>
          <p className="lead" style={{marginBottom:28}}>No rotación. No bonos compartidos. Quien te evalúa, te trata y te da el alta.</p>
          <div className="equipo-grid">
            <div className="memb">
              <img src={`${BASE}media/still.jpg`} alt="Cuaderno con pauta de ejercicios y banda elástica sobre papel hueso" />
              <h3>Francisca Ríos — Traumatológica</h3>
              <div className="role">Kinesióloga U. de Chile · Diplomado Terapia Manual</div>
              <p>Rodilla y hombro. Enfoque en carga progresiva y pauta domiciliaria clara. “Si no mejoras en 3 sesiones, ajustamos.”</p>
            </div>
            <div className="memb">
              <img src={`${BASE}media/detail.jpg`} alt="Detalle macro de textura de lino de camilla con luz rasante" />
              <h3>Martín Salas — Deportiva</h3>
              <div className="role">Kinesiólogo PUC · Mag. Ejercicio Terapéutico</div>
              <p>Tendinopatías y retorno a trote/gym. Test y métrica semanal. Derivación responsable si es quirúrgico.</p>
            </div>
            <div className="memb">
              <img src={`${BASE}media/corridor.jpg`} alt="Pasillo luminoso vacío de centro de kinesiología con luz natural" />
              <h3>Camila Soto — Neurológica / Respiratoria</h3>
              <div className="role">Kinesióloga U. Mayor · Neurorrehabilitación</div>
              <p>ACV, Parkinson, marcha y disnea. Objetivos por fases, familia incluida en la pauta.</p>
            </div>
          </div>
          <p style={{fontSize:11,letterSpacing:".08em",textTransform:"uppercase",color:"var(--gris)",marginTop:18}}>Boleta reembolsable · ISAPRE · FONASA · Convenio directo</p>
        </div>
      </section>

      <section id="precios">
        <div className="wrap">
          <div className="kicker">Valores claros</div>
          <h2 className="h2">Sin sorpresas.</h2>
          <p className="lead" style={{marginBottom:28}}>Valores DESDE en CLP. El valor final se confirma en la evaluación, no antes. Nunca partimos sin plan escrito y aprobado.</p>
          <div className="precios-wrap">
            <div className="table" role="table" aria-label="Precios">
              <div className="thead"><span>Prestación</span><span>Desde</span><span>Duración</span></div>
              {PRECIOS.map(r=>(
                <div key={r.name} className="trow">
                  <span>{r.name}{r.hl?<span className="badge">Consulta más</span>:null}</span>
                  <strong>${r.price}</strong>
                  <span style={{color:"var(--gris)",fontSize:13}}>{r.plazo}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="side">
                <h4>A domicilio — comunas</h4>
                <ul>
                  <li>Las Condes</li><li>Vitacura</li><li>Providencia</li><li>Ñuñoa</li><li>La Reina</li><li>Santiago Centro</li>
                </ul>
                <div style={{marginTop:14,fontSize:12,color:"var(--gris)",lineHeight:1.6}}>60 min por sesión. Coordinamos ventana horaria por WhatsApp. +56 2 2840 3315</div>
              </div>
              <p className="precios-note">Convenios ISAPRE/FONASA y reembolso. El valor final se confirma en la evaluación. Nunca partimos sin plan escrito y aprobado. micro-copy honesto.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" style={{background:"var(--papel-2)",borderTop:"1px solid var(--linea)",borderBottom:"1px solid var(--linea)"}}>
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">Evaluar, planificar, re-evaluar.</h2>
          <div className="metodo-grid" style={{marginTop:28}}>
            <div className="step"><b>01</b><h3>Evaluación 45 min</h3><p>Historia, tests funcionales, hipótesis clínica. Qué traer: orden si la tienes, exámenes y ropa cómoda. Sales con plan y boleta.</p></div>
            <div className="step"><b>02</b><h3>Plan y frecuencia por escrito</h3><p>Sesiones/semana, objetivos y alta estimada. Pauta domiciliaria diaria. Sin bonos cerrados antes de evaluarte.</p></div>
            <div className="step"><b>03</b><h3>Sesiones y re-evaluación</h3><p>Re-evaluamos cada 3–4 sesiones. Si no hay progreso, ajustamos. Si es quirúrgico, derivamos al especialista correcto.</p></div>
          </div>
        </div>
      </section>

      <section id="galeria" ref={galRef}>
        <div className="wrap">
          <div className="kicker">Material clínico</div>
          <h2 className="h2">Objetos que usamos. Nada de stock con grito.</h2>
          <div className="galeria-grid" style={{marginTop:22}}>
            <figure className="gal gal-1">
              <div className={`overflow reveal ${galIn?"in":""}`}>
                <img className={galIn?"kenburns":""} src={`${BASE}media/still.jpg`} alt="Bodegón clínico: cuaderno con pauta, lápiz grafito, banda elástica y taza cerámica sobre papel hueso" style={{display:"block"}} />
              </div>
              <figcaption><span>Pauta personalizada · 60 min · box/domicilio</span><span>01</span></figcaption>
            </figure>
            <figure className="gal gal-2">
              <div className={`overflow reveal ${galIn?"in":""}`} style={{transitionDelay:".12s"}}>
                <img src={`${BASE}media/detail.jpg`} alt="Macro de lino pálido de camilla con luz rasante suave" />
              </div>
              <figcaption><span>Textura camilla · luz rasante</span><span>02</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Sin letra chica oculta.</h2>
          <div className="faqs" style={{marginTop:22}}>
            {FAQS.map((f,i)=>(
              <div key={i} className={`faq ${openFaq===i?"open":""}`}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}>
                  <span>{f.q}</span><span>{openFaq===i?"—":"+"}</span>
                </button>
                <div className="ans"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserva" className="reserva">
        <div className="wrap">
          <div className="reserva-grid">
            <div>
              <div className="kicker">Agenda</div>
              <h2>Agenda tu evaluación.<br/>Nosotros el resto.</h2>
              <div className="phone">+56 2 2840 3315</div>
              <p style={{color:"#c7c2b8",lineHeight:1.6,marginTop:10}}>hola@eterkine.cl · Las Condes / Vitacura / Providencia — box y domicilio<br/>Lun–Vie 8:00–20:00 · Sáb 9:00–14:00</p>
              <div style={{display:"flex",gap:12,marginTop:18,flexWrap:"wrap"}}>
                <a href="tel:+56228403315" className="btn-ink">Llamar ahora</a>
                <a href="mailto:hola@eterkine.cl" className="btn-ghost" style={{borderColor:"#3a3a38",color:"var(--papel)"}}>Escribir a hola@eterkine.cl</a>
              </div>
              <p className="mini">Responden kinesiólogos, no call center. Si no contestamos, devolvemos el llamado el mismo día.</p>
            </div>
            <div style={{border:"1px solid #2e2e2b",padding:18}}>
              <div style={{fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"#9AA0A6"}}>Cómo llegar</div>
              <p style={{fontSize:13,lineHeight:1.6,color:"#c7c2b8",marginTop:8}}>Box central a pasos de metro cercano (Las Condes). Estacionamiento y acceso universal. A domicilio coordinamos ventana de 60 min por WhatsApp con pauta impresa.</p>
              <div className="rule" style={{background:"#2e2e2b"}} />
              <div style={{fontSize:11,letterSpacing:".08em",textTransform:"uppercase",color:"#9AA0A6"}}>Boleta y convenio</div>
              <p style={{fontSize:13,lineHeight:1.6,color:"#c7c2b8",marginTop:8}}>Boleta reembolsable el mismo día. ISAPRE · FONASA · Convenio directo. Valor final confirmado en evaluación.</p>
            </div>
          </div>
          <div className="footer">
            <span>© {new Date().getFullYear()} ÉTER SpA · Kinesiología y Rehabilitación · Las Condes / Vitacura / Providencia</span>
            <span>Boleta SII · +56 2 2840 3315 · hola@eterkine.cl</span>
          </div>
        </div>
      </section>

      {showSticky && <div className="sticky-cta"><a href="#reserva">Agendar evaluación</a></div>}
    </>
  );
}
