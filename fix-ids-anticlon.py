#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Repara fallos anti-clon de tipo 'ids compartidos' (>=4) en las webs de Órbita.

Para cada web con FALLO en QA-RESUMEN-66.csv:
  1. Calcula los ids compartidos con cualquier otra web (fuera de IDS_PERMITIDOS).
  2. Renombra id X -> X-<slug> en src/ e index.html:
     definiciones id="X", anclas "#X", getElementById("X"), y selectores #X en CSS.
     (lookahead (?![-\w]) para no tocar ids más largos que empiezan igual)
  3. Reconstruye: npm run propuestas:build -- <slug>
  4. Corre qa-anticlon.py y registra el veredicto en QA-RESUMEN-66-v2.csv
"""
import csv, json, re, subprocess, sys
from pathlib import Path

RAIZ = Path(r"C:/Users/manue/OneDrive/Desktop/órbita")
PROP = RAIZ / "propuestas"
QA = Path(r"C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/qa-anticlon.py")
IDS_PERMITIDOS = {"header", "footer", "reserva", "root"}

cola = json.loads((RAIZ / "COLA-V2.json").read_text(encoding="utf-8"))
slugs = [r["slug"] for r in cola["rubros"]]
resumen = list(csv.DictReader(open(RAIZ / "QA-RESUMEN-66.csv", encoding="utf-8-sig")))
falladas = [r["slug"] for r in resumen if r["veredicto"] != "OK"]
print(f"webs a reparar: {len(falladas)}", flush=True)

def ids_de(slug):
    app = PROP / slug / "src" / "App.tsx"
    if not app.exists():
        return set()
    txt = app.read_text(encoding="utf-8", errors="replace")
    return set(re.findall(r'id\s*=\s*"([^"]+)"', txt))

mapa_ids = {s: ids_de(s) for s in slugs}
compartidos_global = {}
for s in slugs:
    propios = mapa_ids[s] - IDS_PERMITIDOS
    ajenos = set()
    for o in slugs:
        if o != s:
            ajenos |= mapa_ids[o]
    compartidos_global[s] = propios & ajenos

def renombrar_en(slug, renombres):
    base = PROP / slug
    archivos = [base / "index.html"]
    src = base / "src"
    if src.is_dir():
        archivos += [p for p in src.rglob("*") if p.is_file()
                     and p.suffix.lower() in (".tsx", ".ts", ".css", ".html", ".jsx", ".js")
                     and "node_modules" not in p.parts]
    cambios = 0
    for f in archivos:
        try:
            txt = f.read_text(encoding="utf-8")
        except Exception:
            continue
        orig = txt
        es_css = f.suffix.lower() == ".css"
        for X in sorted(renombres, key=len, reverse=True):
            N = f"{X}-{slug}"
            lx = re.escape(X)
            # definición id="X"
            txt = re.sub(rf'(id\s*=\s*["\']){lx}(?![-\w])(["\'])', rf"\g<1>{N}\g<2>", txt)
            # anclas "#X" y querySelector('#X')
            txt = re.sub(rf'(["\'])#{lx}(?![-\w])', rf"\g<1>#{N}", txt)
            # getElementById("X")
            txt = re.sub(rf'(getElementById\(\s*["\']){lx}(?![-\w])(["\'])', rf"\g<1>{N}\g<2>", txt)
            # selector #X en CSS (guard: X no debe ser un color hex válido)
            if es_css and not (len(X) in (3, 4, 6, 8) and re.fullmatch(r"[0-9a-fA-F]+", X)):
                txt = re.sub(rf'#{lx}(?![-\w])', f"#{N}", txt)
        if txt != orig:
            f.write_text(txt, encoding="utf-8")
            cambios += 1
    return cambios

resultados = []
for i, s in enumerate(falladas, 1):
    ren = compartidos_global.get(s, set())
    if not ren:
        print(f"[{i}/{len(falladas)}] {s}: sin ids compartidos detectados — revisar a mano", flush=True)
        resultados.append({"slug": s, "veredicto": "SIN-CAMBIOS", "detalle": "no ids shared"})
        continue
    n_arch = renombrar_en(s, ren)
    r_build = subprocess.run(["npm", "run", "propuestas:build", "--", s],
                             capture_output=True, text=True, encoding="utf-8",
                             errors="replace", timeout=600, cwd=str(RAIZ), shell=True)
    build_ok = r_build.returncode == 0
    r_qa = subprocess.run([sys.executable, str(QA), "--slug", s],
                          capture_output=True, text=True, encoding="utf-8",
                          errors="replace", timeout=600, cwd=str(QA.parent))
    out = (r_qa.stdout or "")
    v = "OK" if ("→ OK" in out) else ("FALLO" if "→ FALLO" in out else "?")
    det = ""
    if v != "OK":
        det = " | ".join(l.strip() for l in out.splitlines() if "✗" in l)[:250]
    resultados.append({"slug": s, "veredicto": v, "detalle": f"build={'ok' if build_ok else 'ERROR'}; {det}"})
    print(f"[{i}/{len(falladas)}] {s}: ids_ren={len(ren)} arch={n_arch} build={'ok' if build_ok else 'ERROR'} QA={v}", flush=True)

with open(RAIZ / "QA-RESUMEN-66-v2.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["slug", "veredicto", "detalle"])
    w.writeheader()
    w.writerows(resultados)
oks = sum(1 for x in resultados if x["veredicto"] == "OK")
print(f"REPARACIÓN: {oks}/{len(resultados)} OK · pendientes: {[x['slug'] for x in resultados if x['veredicto'] != 'OK']}", flush=True)
