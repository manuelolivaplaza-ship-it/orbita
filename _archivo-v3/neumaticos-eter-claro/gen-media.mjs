import fs from 'fs';
import path from 'path';
const outDir = "C:/Users/manue/OneDrive/Desktop/órbita/propuestas/neumaticos-eter-claro/public/media";
fs.mkdirSync(outDir, { recursive: true });
const pal = { papel:'#F8F7F3', papel2:'#EDE9E0', tinta:'#1A1C1E', linea:'#E2DDD4', rojo:'#B42318', gris:'#8A8784' };
function svg(w,h, title, subtitle, decor, caption){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="100%" height="100%" fill="${pal.papel}"/>
<rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="${pal.linea}" stroke-width="1"/>
<g opacity="0.05" stroke="${pal.tinta}" stroke-width="0.6">
  ${Array.from({length:6}).map((_,i)=>`<line x1="${(w/7)*(i+1)}" y1="0" x2="${(w/7)*(i+1)}" y2="${h}"/>`).join('')}
  ${Array.from({length:4}).map((_,i)=>`<line x1="0" y1="${(h/5)*(i+1)}" x2="${w}" y2="${(h/5)*(i+1)}"/>`).join('')}
</g>
${decor}
<g font-family="IBM Plex Mono, monospace" text-anchor="middle">
  <text x="${w/2}" y="${h/2-8}" font-size="11" letter-spacing="3.2" fill="${pal.rojo}" font-weight="600">${title}</text>
  <text x="${w/2}" y="${h/2+14}" font-size="9" letter-spacing="1.6" fill="${pal.gris}">${subtitle}</text>
</g>
<g font-family="IBM Plex Mono, monospace" font-size="7" letter-spacing="1.2" fill="${pal.gris}">
  <text x="14" y="${h-14}">NEUMA — NEUMÁTICOS Y SERVITECA</text>
  <text x="14" y="${h-6}" fill="${pal.rojo}">— PRECIO INSTALADO · STOCK REAL · HORA AGENDADA</text>
</g>
${caption ? `<g font-family="IBM Plex Mono, monospace" font-size="6.5" letter-spacing="1" fill="${pal.gris}"><text x="${w/2}" y="${h-26}" text-anchor="middle">${caption}</text></g>` : ``}
</svg>`;
}
// taller.jpg 16:9
const tallerDecor = `
<rect x="80" y="90" width="1040" height="495" fill="white" stroke="${pal.linea}"/>
<rect x="110" y="118" width="520" height="340" fill="${pal.papel2}" stroke="${pal.linea}"/>
<!-- elevador vacio -->
<line x1="220" y1="118" x2="220" y2="458" stroke="${pal.linea}" stroke-width="1.4"/>
<line x1="420" y1="118" x2="420" y2="458" stroke="${pal.linea}" stroke-width="1.4"/>
<line x1="210" y1="140" x2="430" y2="140" stroke="${pal.tinta}" stroke-width="1" opacity="0.35"/>
<line x1="210" y1="420" x2="430" y2="420" stroke="${pal.tinta}" stroke-width="1" opacity="0.25"/>
<!-- estanterias neumaticos -->
<rect x="620" y="135" width="380" height="280" fill="${pal.papel}" stroke="${pal.linea}"/>
${Array.from({length:4}).map((_,r)=>Array.from({length:6}).map((_,c)=>`<ellipse cx="${640+c*60}" cy="${155+r*60}" rx="22" ry="22" fill="none" stroke="${pal.tinta}" stroke-width="0.9" opacity="0.18"/><ellipse cx="${640+c*60}" cy="${155+r*60}" rx="12" ry="12" fill="none" stroke="${pal.tinta}" stroke-width="0.6" opacity="0.10"/>`).join('')).join('')}
<rect x="620" y="440" width="380" height="18" fill="${pal.linea}" opacity="0.6"/>
<!-- piso epoxi -->
<rect x="80" y="520" width="1040" height="65" fill="${pal.papel2}" stroke="${pal.linea}"/>
<line x1="80" y1="545" x2="1120" y2="545" stroke="white" opacity="0.6"/>
`;
fs.writeFileSync(path.join(outDir,"taller.svg"), svg(1200,675,"TALLER — LUZ MAÑANA 16:9","serviteca vacía · elevador + estanterías alineadas",""+tallerDecor,"NEUMA — montaje con hora, sin fila · alineación 3D incluida"));
fs.copyFileSync(path.join(outDir,"taller.svg"), path.join(outDir,"taller.jpg"));

// still.jpg 4:5
const stillDecor = `
<rect x="100" y="90" width="440" height="520" fill="white" stroke="${pal.linea}"/>
<ellipse cx="320" cy="300" rx="140" ry="140" fill="none" stroke="${pal.tinta}" stroke-width="1.1" opacity="0.14"/>
<ellipse cx="320" cy="300" rx="90" ry="90" fill="none" stroke="${pal.tinta}" stroke-width="0.8" opacity="0.10"/>
<ellipse cx="320" cy="300" rx="35" ry="35" fill="${pal.papel2}" stroke="${pal.linea}"/>
<text x="320" y="305" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7" letter-spacing="1" fill="${pal.gris}">205/55R16</text>
<rect x="140" y="470" width="360" height="70" fill="${pal.papel}" stroke="${pal.linea}"/>
<line x1="160" y1="490" x2="480" y2="490" stroke="${pal.linea}" opacity="0.7"/>
<line x1="160" y1="505" x2="420" y2="505" stroke="${pal.linea}" opacity="0.5"/>
<line x1="160" y1="520" x2="380" y2="520" stroke="${pal.linea}" opacity="0.4"/>
<rect x="250" y="560" width="140" height="5" fill="${pal.tinta}" rx="2"/>
`;
fs.writeFileSync(path.join(outDir,"still.svg"), svg(640,800,"STILL · 4:5","neumático 205/55R16 sobre papel kraft · etiqueta medida",""+stillDecor,"Bodegón 01 · 205/55R16 sobre papel kraft · luz norte"));
fs.copyFileSync(path.join(outDir,"still.svg"), path.join(outDir,"still.jpg"));

// detail.jpg 1:1
const detailDecor = `
<g opacity="0.95">
${Array.from({length:16}).map((_,i)=>`<line x1="90" y1="${120+i*38}" x2="710" y2="${120+i*38}" stroke="${pal.tinta}" stroke-width="${1.2}" opacity="${0.08 + (i%2?0.04:0)}"/>`).join('')}
</g>
<g stroke="${pal.linea}" opacity="0.4">
${Array.from({length:12}).map((_,i)=>`<line x1="${120+i*48}" y1="80" x2="${120+i*48}" y2="720" stroke-width="0.6"/>`).join('')}
</g>
<circle cx="400" cy="400" r="120" fill="none" stroke="${pal.rojo}" stroke-width="0.9" opacity="0.13"/>
<circle cx="400" cy="400" r="3" fill="${pal.rojo}" opacity="0.5"/>
<line x1="400" y1="280" x2="400" y2="520" stroke="${pal.rojo}" stroke-width="0.5" opacity="0.18" stroke-dasharray="6 8"/>
<line x1="280" y1="400" x2="520" y2="400" stroke="${pal.rojo}" stroke-width="0.5" opacity="0.18" stroke-dasharray="6 8"/>
<g font-family="IBM Plex Mono, monospace" font-size="7" fill="${pal.gris}" opacity="0.7">
<text x="400" y="560" text-anchor="middle" letter-spacing="1.5">BANDA DE RODADO · 1:1</text>
</g>
`;
fs.writeFileSync(path.join(outDir,"detail.svg"), svg(800,800,"DETAIL · 1:1","macro banda de rodado · luz rasante",""+detailDecor,"Detalle 02 · banda de rodado · compuesto para asfalto chileno"));
fs.copyFileSync(path.join(outDir,"detail.svg"), path.join(outDir,"detail.jpg"));

// pasillo.jpg 16:9
const pasilloDecor = `
<rect x="80" y="80" width="1040" height="515" fill="white" stroke="${pal.linea}"/>
<polygon points="360,110 840,110 780,515 420,515" fill="${pal.papel2}" stroke="${pal.linea}"/>
<polygon points="460,110 740,110 700,515 500,515" fill="white" stroke="${pal.linea}" opacity="0.9"/>
${Array.from({length:5}).map((_,i)=>`<line x1="420" y1="${150+i*80}" x2="780" y2="${150+i*80}" stroke="${pal.linea}" opacity="0.5"/>`).join('')}
${Array.from({length:6}).map((_,r)=>Array.from({length:4}).map((_,c)=>`<ellipse cx="${540+c*38}" cy="${160+r*52}" rx="14" ry="14" fill="none" stroke="${pal.tinta}" stroke-width="0.6" opacity="0.10"/>`).join('')).join('')}
<rect x="500" y="400" width="200" height="60" fill="${pal.papel}" stroke="${pal.linea}" opacity="0.5"/>
`;
fs.writeFileSync(path.join(outDir,"pasillo.svg"), svg(1200,675,"PASILLO — 16:9","bodega luminosa vacía · neumáticos alineados",""+pasilloDecor,"Pasillo 03 · bodega luminosa · stock por medida"));
fs.copyFileSync(path.join(outDir,"pasillo.svg"), path.join(outDir,"pasillo.jpg"));
console.log("media generated");
