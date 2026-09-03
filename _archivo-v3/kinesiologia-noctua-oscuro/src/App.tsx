import { useEffect, useRef, useState } from "react";
const BASE = import.meta.env.BASE_URL;
const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "filosofia", label: "Filosofía" },
  { id: "cifras", label: "Cifras" },
  { id: "servicios", label: "Servicios" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
];
const SERVS = [
  { n: "01", t: "Traumatológica rodilla / hombro", p: "desde $36.000", d: "Esguinces, inestabilidad, dolor persistente. Test de fuerza y control." },
  { n: "02", t: "Deportiva · retorno a cancha", p: "desde $38.000", d: "Tendinopatías, sobrecarga, vuelta progresiva con métrica semanal." },
  { n: "03", t: "Post-quirúrgica LCA / menisco", p: "desde $42.000", d: "Protocolo por fases con traumatólogo. Criterios objetivos de alta." },
  { n: "04", t: "Columna y dolor persistente", p: "desde $38.000", d: "Dolor lumbar/cervical que no cede con reposo. Educación + carga." },
  { n: "05", t: "Evaluación funcional", p: "desde $48.000", d: "60 min · salto, fuerza, ROM, goniómetro. Plan con semanas estimadas." },
  { n: "06", t: "A domicilio premium", p: "desde $55.000", d: "Misma medición en tu casa. Las Condes / La Reina · 60 min." },
];
const PRECIOS = [
  { name: "Evaluación funcional 60 min con tests", price: "48.000", det: "60 min · 4 tests" },
  { name: "Sesión deportiva / traumatológica box", price: "36.000", det: "60 min · con medición" },
  { name: "Sesión post-quirúrgica", price: "42.000", det: "60 min · protocolo fases" },
  { name: "Sesión a domicilio premium", price: "55.000", det: "60 min · Las Condes/La Reina" },
  { name: "Pack 5 con medición incluida", price: "172.000", det: "ahorro vs. individual" },
  { name: "Pack 10 con medición incluida", price: "328.000", det: "re-evaluación cada 4 sesiones" },
];
const FAQS = [
  { q: "¿Cuánto cuesta la evaluación funcional?", a: "Evaluación funcional 60 min desde $48.000. Incluye entrevista, 4 tests funcionales (salto, fuerza, ROM con goniómetro), hipótesis y plan con fases y semanas estimadas + criterios de alta por escrito. Boleta reembolsable el mismo día. Agenda al +56 2 2840 3316." },
  { q: "¿Trabajan con ISAPRE/FONASA y reembolso?", a: "Sí. Boleta reembolsable ISAPRE/FONASA el mismo día. Al agendar te indicamos cobertura estimada según tu plan. Convenio directo en algunas ISAPRE — consúltanos antes de la sesión." },
  { q: "¿Cuántas sesiones necesito para volver a correr/jugar?", a: "Depende del test inicial. El 84% de nuestras altas deportivas ocurre en ≤8 sesiones con progresión por fases (fuerza → control → retorno). Re-evaluamos con salto y fuerza cada 2 semanas. Sin métrica no hay alta." },
  { q: "¿Atienden post-quirúrgico con orden del traumatólogo?", a: "Sí. Trae orden, protocolo quirúrgico e imágenes. Coordinamos con tu traumatólogo por escrito. Si el caso no es kinésico o requiere derivación, te lo decimos en la evaluación — no te retenemos para facturar." },
  { q: "¿Box o domicilio, qué conviene para mi lesión?", a: "Box si necesitas jaula de fuerza y medición semanal precisa. Domicilio premium si tu movilidad limita traslados o prefieres entrenar tu gesto deportivo en casa. La evaluación funcional es idéntica: 60 min, tests y plan con criterios." },
  { q: "¿Qué pasa si no alcanzo el criterio de alta?", a: "No te damos el alta cuando se acaba el bono. Ajustamos el plan, revisamos carga y, si hace falta, derivamos. Alta con criterios objetivos (fuerza, salto, dolor). No te extendemos sesiones sin métrica." },
];
function useCount(active:boolean,target:number){
  const [v,setV]=useState(0);
  useEffect(()=>{ if(!active) return; let s=0; const t=Date.now(); const dur=1200; const tick=()=>{const p=Math.min(1,(Date.now()-t)/dur); const e=1-Math.pow(1-p,3); s=Math.round(e*target); setV(s); if(p<1) requestAnimationFrame(tick)}; const id=requestAnimationFrame(tick); return()=>cancelAnimationFrame(id);},[active,target]);
  return v;
}
export function App(){
  const [openNav,setOpenNav]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [hideNav,setHideNav]=useState(false);
  const [prog,setProg]=useState(0);
  const [showSticky,setShowSticky]=useState(false);
  const [openServ,setOpenServ]=useState<number|null>(0);
  const [openFaq,setOpenFaq]=useState<number|null>(0);
  const [cifrasOn,setCifrasOn]=useState(false);
  const cifrasRef=useRef<HTMLDivElement>(null);
  const galRef=useRef<HTMLDivElement>(null);
  const [galIn,setGalIn]=useState(false);
  const [cursorBig,setCursorBig]=useState(false);
  const cursorRef=useRef<HTMLDivElement>(null);
  const cursorPos=useRef({x:0,y:0});
  const cursorTarget=useRef({x:0,y:0});
  const lastY=useRef(0);
  useEffect(()=>{
    const onScroll=()=>{
      const y=window.scrollY;
      setScrolled(y>10);
      setHideNav(y>lastY.current && y>120);
      lastY.current=y;
      const h=document.documentElement.scrollHeight - window.innerHeight;
      setProg(h>0?(y/h)*100:0);
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
  useEffect(()=>{
    const move=(e:MouseEvent)=>{cursorTarget.current={x:e.clientX,y:e.clientY}};
    window.addEventListener("mousemove",move);
    let raf=0;
    const tick=()=>{
      cursorPos.current.x += (cursorTarget.current.x - cursorPos.current.x)*0.15;
      cursorPos.current.y += (cursorTarget.current.y - cursorPos.current.y)*0.15;
      if(cursorRef.current){ cursorRef.current.style.transform=`translate(${cursorPos.current.x}px,${cursorPos.current.y}px) translate(-50%,-50%)`;}
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return()=>{window.removeEventListener("mousemove",move); cancelAnimationFrame(raf)};
  },[]);
  const c1=useCount(cifrasOn,11);
  const c2=useCount(cifrasOn,3200);
  const c3=useCount(cifrasOn,84);
  const c4=useCount(cifrasOn,4);
  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{width:`${prog}%`}} aria-hidden />
      <div ref={cursorRef} className={`cursor ${cursorBig?"big":""}`} aria-hidden />

      <div className={`nav-wrap ${scrolled?"scrolled":"top"} ${hideNav?"hide":""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="brand" onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>NOCTUA<span>Centro Deportivo</span></a>
          <nav className={`nav-links ${openNav?"open":""}`} aria-label="Principal">
            {NAV.map(n=> <a key={n.id} href={`#${n.id}`} onClick={()=>setOpenNav(false)} onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>{n.label}</a>)}
            <a href="#reserva" className="btn-teal" onClick={()=>setOpenNav(false)} onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>Agendar evaluación</a>
          </nav>
          <button className="hamb" aria-label="Abrir menú" onClick={()=>setOpenNav(v=>!v)} aria-expanded={openNav}><span/><span/><span/></button>
        </div>
      </div>

      <section id="inicio" className="hero wrap">
        <div>
          <div className="kicker">Kinesiología deportiva · Las Condes / La Reina</div>
          <h1>Precisión que se siente en cada repetición.</h1>
          <p className="hero-sub">Rehabilitación deportiva y traumatológica con medición objetiva. Plan con alta estimada y vuelta a cancha progresiva — sin sesiones eternas.</p>
          <div className="hero-ctas">
            <a href="#reserva" className="btn-teal" onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>Agendar evaluación</a>
            <a href="#servicios" className="link-underline" onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>Ver medición y precios →</a>
          </div>
          <p style={{fontSize:11,letterSpacing:".08em",color:"var(--gris)",marginTop:18}}>Boleta reembolsable · Evaluación con test funcionales · Alta con criterios</p>
        </div>
        <div className="hero-media">
          <img src={`${BASE}media/lab.jpg`} alt="Laboratorio de movimiento nocturno vacío con camilla oscura y jaula de fuerza desenfocada" />
          <div className="hero-fade" aria-hidden />
          <figcaption><span>Lab NOCTUA — luz rasante, 60 min</span><span>Box & retorno deportivo</span></figcaption>
        </div>
      </section>

      <section id="filosofia" className="filo">
        <div className="wrap filo-grid">
          <h2>Rehabilitar<br/>es medir.</h2>
          <div>
            <p>Cada plan tiene test inicial, métrica semanal y criterio de alta por escrito. Si no mejoras, ajustamos el plan — no te extendemos el bono.</p>
            <p style={{marginTop:12,color:"var(--hueso)",fontSize:13,borderLeft:"2px solid var(--teal)",paddingLeft:12}}>Alta con criterios objetivos (fuerza, salto, dolor). No te damos el alta cuando se acaba el bono.</p>
            <p style={{marginTop:12,fontSize:11,letterSpacing:".08em",textTransform:"uppercase",color:"var(--gris)"}}>La discreción es el argumento premium deportivo. Sin testimonios públicos.</p>
          </div>
        </div>
      </section>

      <section id="cifras" ref={cifrasRef}>
        <div className="wrap">
          <div className="kicker">Evidencia medida</div>
          <h2 className="h2" style={{fontSize:"clamp(28px,4vw,38px)"}}>Retorno medido, no promesa.</h2>
          <div className="cifras-grid">
            <div className="cifra"><b>+{c1} años</b><span>trayectoria deportiva</span></div>
            <div className="cifra"><b>+{c2.toLocaleString("es-CL")}</b><span>altas deportivas</span></div>
            <div className="cifra"><b>{c3}%</b><span>alta en ≤8 sesiones</span></div>
            <div className="cifra"><b>{c4} tests</b><span>funcionales por caso</span></div>
          </div>
          <p className="cifras-note">Sin antes/después. La evidencia es retorno medido.</p>
        </div>
      </section>

      <section id="servicios" style={{background:"var(--superficie)",borderTop:"1px solid var(--filete)",borderBottom:"1px solid var(--filete)"}}>
        <div className="wrap">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:20,flexWrap:"wrap",marginBottom:28}}>
            <div>
              <div className="kicker">Servicios</div>
              <h2 className="h2">Qué medimos.</h2>
              <p className="lead">Tap en la fila para ver duración y precio. Todo con métrica.</p>
            </div>
            <a href="#precios" className="link-underline" onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>Ver precios →</a>
          </div>
          <div className="serv-list" role="list">
            {SERVS.map((s,i)=>(
              <div key={s.n} role="listitem" className={`serv-row ${openServ===i?"open":""}`} onClick={()=>setOpenServ(openServ===i?null:i)} onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>
                <div className="serv-n">{s.n}</div>
                <div>
                  <div className="serv-t">{s.t}</div>
                  <div className="serv-d">{s.d}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div className="serv-price"><strong>{s.p}</strong><div style={{fontSize:10,marginTop:2}}>{s.d.split("·")[0]}</div></div>
                  <div className="flip" aria-hidden>{openServ===i?"—":"+"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precios">
        <div className="wrap">
          <div className="kicker">Valores claros</div>
          <h2 className="h2">Sin sorpresas.</h2>
          <p className="lead" style={{marginBottom:22}}>Valores DESDE en CLP. El valor final se confirma tras la evaluación funcional. Nunca partimos sin objetivos y criterios de alta por escrito.</p>
          <div className="precios-wrap">
            <div className="table" role="table" aria-label="Precios">
              <div className="thead"><span>Prestación</span><span>Desde</span><span>Detalle</span></div>
              {PRECIOS.map(r=>(
                <div key={r.name} className="trow">
                  <span>{r.name}</span>
                  <strong>${r.price}</strong>
                  <span style={{color:"var(--gris)",fontSize:11}}>{r.det}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="side">
                <h4>Medición que incluye</h4>
                <ul>
                  <li>Test de salto y fuerza</li><li>ROM con goniómetro</li><li>Métrica semanal por escrito</li><li>Criterio de alta objetivo</li><li>Boleta reembolsable mismo día</li>
                </ul>
              </div>
              <p className="note">El valor final se confirma tras la evaluación funcional. Nunca partimos sin objetivos y criterios de alta por escrito.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" style={{background:"var(--superficie)",borderTop:"1px solid var(--filete)",borderBottom:"1px solid var(--filete)"}}>
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">Fases, no sesiones sueltas.</h2>
          <div className="metodo-grid" style={{marginTop:28}}>
            <div className="step"><b>01</b><h3>Evaluación funcional 60 min</h3><p>Historia, 4 tests (salto, fuerza, ROM), hipótesis y plan por fases. Qué traer: orden, exámenes, zapatillas.</p></div>
            <div className="step"><b>02</b><h3>Plan y progresión por fases</h3><p>Fuerza → control neuromuscular → retorno a cancha. Sesiones/semana y semanas estimadas por escrito.</p></div>
            <div className="step"><b>03</b><h3>Alta y prevención</h3><p>Criterios objetivos por escrito. Pauta de prevención y retorno progresivo. Si no hay progreso, derivamos.</p></div>
          </div>
        </div>
      </section>

      <section id="galeria" ref={galRef}>
        <div className="wrap">
          <div className="kicker">Instrumental</div>
          <h2 className="h2">Objetos que miden. Nada de stock con neón.</h2>
          <div className="galeria-grid" style={{marginTop:22}}>
            <figure className="gal gal-1">
              <div className={`overflow reveal ${galIn?"in":""}`}>
                <img className={galIn?"kenburns":""} src={`${BASE}media/measure.jpg`} alt="Bodegón chiaroscuro con banda elástica negra, goniómetro de acero y cuaderno con test de salto sobre piedra oscura" />
              </div>
              <figcaption><span>Goniómetro · test de salto · 60 min</span><span>01</span></figcaption>
            </figure>
            <figure className="gal gal-2">
              <div className={`overflow reveal ${galIn?"in":""}`} style={{transitionDelay:".12s"}}>
                <img src={`${BASE}media/texture.jpg`} alt="Macro de lino oscuro y goma de piso técnico con luz rasante cálida" />
              </div>
              <figcaption><span>Lino oscuro · goma técnica</span><span>02</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="faq" style={{background:"var(--superficie)",borderTop:"1px solid var(--filete)",borderBottom:"1px solid var(--filete)"}}>
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Sin letra chica.</h2>
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

      <section id="reserva">
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"1.2fr .8fr",gap:32}} className="reserva-grid">
            <div>
              <div className="kicker">Agenda</div>
              <h2>Vuelve a tu nivel.<br/>Medido.</h2>
              <div className="phone">+56 2 2840 3316</div>
              <p style={{color:"var(--gris)",lineHeight:1.6,marginTop:10}}>hola@noctuakine.cl · Las Condes / La Reina — box y retorno deportivo<br/>Lun–Vie 7:30–20:30 · Sáb 8:00–14:00</p>
              <div style={{display:"flex",gap:12,marginTop:18,flexWrap:"wrap"}}>
                <a href="tel:+56228403316" className="btn-teal" onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>Llamar ahora</a>
                <a href="mailto:hola@noctuakine.cl" style={{border:"1px solid var(--filete)",padding:"11px 18px",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"}} onMouseEnter={()=>setCursorBig(true)} onMouseLeave={()=>setCursorBig(false)}>hola@noctuakine.cl</a>
              </div>
              <p style={{fontSize:11,color:"var(--gris)",borderTop:"1px solid var(--filete)",paddingTop:12,marginTop:16}}>Responden kinesiólogos, no bots. Si no contestamos, devolvemos el llamado el mismo día.</p>
            </div>
            <div style={{border:"1px solid var(--filete)",padding:18,background:"var(--superficie-alta)"}}>
              <div style={{fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"var(--teal)"}}>Box nocturno</div>
              <p style={{fontSize:12,lineHeight:1.6,color:"var(--gris)",marginTop:8}}>Luz rasante cálida, jaula de fuerza y camilla técnica. Ventana horaria exclusiva 60 min sin rotación de profesional.</p>
              <div className="rule" />
              <div style={{fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"var(--teal)"}}>Boleta</div>
              <p style={{fontSize:12,lineHeight:1.6,color:"var(--gris)",marginTop:8}}>Boleta reembolsable el mismo día. Valor final tras evaluación funcional.</p>
            </div>
          </div>
          <div className="footer">
            <span>© {new Date().getFullYear()} NOCTUA SpA · Kinesiología Deportiva · Las Condes / La Reina</span>
            <span>Boleta SII · +56 2 2840 3316</span>
          </div>
        </div>
      </section>

      {showSticky && <div className="sticky-cta"><a href="#reserva">Agendar evaluación</a></div>}
    </>
  );
}
