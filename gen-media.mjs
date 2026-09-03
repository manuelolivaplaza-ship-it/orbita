import fs from 'fs'
import path from 'path'
const outDir = "C:/Users/manue/OneDrive/Desktop/órbita/propuestas/centro-medico-eter-claro/public/media"
const pal = { papel:'#F8F6F1', papel2:'#EFE9E0', tinta:'#121614', linea:'#E2DDD4', azul:'#115E8A' }
function svg(w,h, title, subtitle, decor){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="100%" height="100%" fill="${pal.papel}"/>
<rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="${pal.linea}" stroke-width="1"/>
<g opacity="0.06" stroke="${pal.tinta}" stroke-width="0.6">
  ${Array.from({length:6}).map((_,i)=>`<line x1="${(w/7)*(i+1)}" y1="0" x2="${(w/7)*(i+1)}" y2="${h}"/>`).join('')}
  ${Array.from({length:4}).map((_,i)=>`<line x1="0" y1="${(h/5)*(i+1)}" x2="${w}" y2="${(h/5)*(i+1)}"/>`).join('')}
</g>
${decor}
<g font-family="IBM Plex Mono, monospace" text-anchor="middle">
  <text x="${w/2}" y="${h/2-8}" font-size="11" letter-spacing="3.5" fill="${pal.azul}" font-weight="600">${title}</text>
  <text x="${w/2}" y="${h/2+14}" font-size="9" letter-spacing="1.8" fill="#8B8680">${subtitle}</text>
</g>
<g font-family="IBM Plex Mono, monospace" font-size="7" letter-spacing="1.2" fill="#8B8680">
  <text x="14" y="${h-14}">ÉTER — CENTRO MÉDICO</text>
  <text x="14" y="${h-6}" fill="${pal.azul}">— LUZ NORTE · 30 MIN · BONO ELECTRONICO</text>
</g>
</svg>`
}
const consultaDecor = `<rect x="80" y="90" width="1040" height="495" fill="${pal.papel2}" stroke="${pal.linea}"/><rect x="110" y="118" width="420" height="220" fill="white" stroke="${pal.linea}" opacity="0.9"/><line x1="320" y1="118" x2="320" y2="338" stroke="${pal.linea}"/><line x1="110" y1="228" x2="530" y2="228" stroke="${pal.linea}"/><rect x="620" y="420" width="380" height="110" fill="#EDE7DD" stroke="${pal.linea}"/><rect x="620" y="500" width="380" height="8" fill="${pal.linea}"/><rect x="620" y="310" width="220" height="70" fill="#E8E0D0" stroke="${pal.linea}"/><rect x="630" y="325" width="70" height="40" fill="white" stroke="${pal.linea}"/><rect x="710" y="325" width="70" height="40" fill="white" stroke="${pal.linea}"/><ellipse cx="780" cy="360" rx="22" ry="10" fill="none" stroke="${pal.azul}" stroke-width="1.2" opacity="0.25"/><circle cx="764" cy="368" r="10" fill="none" stroke="${pal.azul}" stroke-width="1.2" opacity="0.18"/>`
fs.writeFileSync(path.join(outDir,"consulta.svg"), svg(1200,675,"BOX — LUZ NORTE 16:9","consulta · camilla lino · sin personas", consultaDecor))
const stillDecor = `<rect x="100" y="90" width="440" height="520" fill="white" stroke="${pal.linea}"/><rect x="130" y="130" width="380" height="220" fill="${pal.papel2}" stroke="${pal.linea}"/><line x1="150" y1="175" x2="490" y2="175" stroke="${pal.linea}" opacity="0.7"/><line x1="150" y1="195" x2="490" y2="195" stroke="${pal.linea}" opacity="0.5"/><line x1="150" y1="215" x2="380" y2="215" stroke="${pal.linea}" opacity="0.4"/><rect x="180" y="390" width="200" height="6" fill="${pal.tinta}" rx="3"/><polygon points="380,393 400,387 400,399" fill="#C9B99A" stroke="${pal.linea}"/><rect x="180" y="430" width="180" height="90" fill="white" stroke="${pal.azul}" stroke-width="1"/><rect x="195" y="445" width="80" height="6" fill="${pal.azul}" opacity="0.9"/><rect x="195" y="460" width="120" height="4" fill="${pal.linea}"/><rect x="195" y="472" width="100" height="4" fill="${pal.linea}"/><ellipse cx="430" cy="500" rx="42" ry="12" fill="${pal.linea}" opacity="0.5"/><rect x="390" y="440" width="80" height="60" rx="6" fill="#ECE6DD" stroke="${pal.linea}"/><path d="M470 460 q14 0 14 20 q0 20 -14 20" fill="none" stroke="${pal.linea}" stroke-width="1.2"/>`
fs.writeFileSync(path.join(outDir,"still.svg"), svg(640,800,"STILL · 4:5","bodegón clínico · papel hueso · bono electrónico", stillDecor))
const detailDecor = `<g opacity="0.9">${Array.from({length:18}).map((_,i)=>`<line x1="90" y1="${120+i*24}" x2="710" y2="${120+i*24}" stroke="${pal.linea}" stroke-width="${0.6 + (i%2?0.5:0)}" opacity="${0.45 + (i%3)*0.12}"/>`).join('')}${Array.from({length:16}).map((_,i)=>`<line x1="${100+i*36}" y1="90" x2="${100+i*36}" y2="710" stroke="${pal.papel2}" stroke-width="0.7" opacity="0.35"/>`).join('')}</g><circle cx="400" cy="400" r="120" fill="none" stroke="${pal.azul}" stroke-width="0.9" opacity="0.12"/><circle cx="400" cy="400" r="3" fill="${pal.azul}" opacity="0.45"/><line x1="400" y1="280" x2="400" y2="520" stroke="${pal.azul}" stroke-width="0.5" opacity="0.18" stroke-dasharray="6 8"/><line x1="280" y1="400" x2="520" y2="400" stroke="${pal.azul}" stroke-width="0.5" opacity="0.18" stroke-dasharray="6 8"/>`
fs.writeFileSync(path.join(outDir,"detail.svg"), svg(800,800,"DETAIL · 1:1","macro lino pálido · luz rasante", detailDecor))
const corridorDecor = `<rect x="80" y="80" width="1040" height="515" fill="white" stroke="${pal.linea}"/><polygon points="380,130 820,130 760,520 440,520" fill="${pal.papel2}" stroke="${pal.linea}"/><polygon points="480,130 720,130 690,520 510,520" fill="white" stroke="${pal.linea}" opacity="0.9"/><rect x="560" y="260" width="80" height="140" fill="${pal.papel}" stroke="${pal.linea}" opacity="0.7"/>`
fs.writeFileSync(path.join(outDir,"corridor.svg"), svg(1200,675,"CORRIDOR — 16:9","pasillo luminoso vacío · sombra suave", corridorDecor))
for (const f of ["consulta","still","detail","corridor"]) { fs.copyFileSync(path.join(outDir, f+".svg"), path.join(outDir, f+".jpg")); console.log(f+".jpg done") }
