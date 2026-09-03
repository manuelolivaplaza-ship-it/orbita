#!/usr/bin/env python3
# Generate procedural editorial media for 66 webs — sequential, low RAM, Pillow only.
# Palette-respectful, sin personas/branding/texto, ratios exactos.
import json, os, re, random, math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BASE = Path("C:/Users/manue/OneDrive/Desktop/órbita")
INVENTORY = BASE / "_media-inventory.json"
REGISTRO = Path("C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/MEDIA-REGISTRO.md")
PROPUESTAS = BASE / "propuestas"

# Preset palettes (extracted from PROMPT docs)
ETER = {
    "papel": "#F8F6F1", "papel2": "#EFE9E0", "tinta": "#121614",
    "linea": "#E2DDD4", "gris": "#8B8680", "acento": "#9C6B3F", "sage": "#7A9A84", "azul": "#115E8A"
}
NOCTUA = {
    "papel": "#121110", "papel2": "#1B1917", "tinta": "#EDE8E0",
    "linea": "#2E2A26", "gris": "#9B948B", "acento": "#C8A96A", "sup": "#23201C", "fondo": "#0E0D0C"
}

def hex_to_rgb(h):
    h = h.lstrip("#")
    if len(h)==3:
        h="".join(c*2 for c in h)
    return tuple(int(h[i:i+2],16) for i in (0,2,4))

def is_dark(slug):
    slug_low = slug.lower()
    return ("noctua" in slug_low) or ("oscuro" in slug_low)

def get_palette(slug, pal_str=""):
    # try to extract hex from pal_str, else preset
    if pal_str:
        hexes = re.findall(r"#[0-9A-Fa-f]{6}", pal_str)
        if hexes:
            # first is papel, use it as base
            base_papel = hexes[0]
            # decide dark vs light based on luma of papel
            r,g,b = hex_to_rgb(base_papel)
            luma = 0.2126*r + 0.7152*g + 0.0722*b
            if luma < 80:
                return NOCTUA
    return NOCTUA if is_dark(slug) else ETER

def add_noise(img, amount=0.015):
    w,h = img.size
    # subtle film grain: random speckles very light
    draw = ImageDraw.Draw(img, "RGBA")
    n = int(w*h*amount*0.0005) # sparse
    # actually do per-pixel noise via small overlay
    noise = Image.new("RGBA", (w,h), (0,0,0,0))
    nd = ImageDraw.Draw(noise)
    for _ in range(int(w*h*0.002)):
        x = random.randint(0,w-1)
        y = random.randint(0,h-1)
        v = random.randint(0,255)
        a = random.randint(2,6)
        nd.point((x,y), fill=(v,v,v,a))
    img = Image.alpha_composite(img.convert("RGBA"), noise).convert("RGB")
    return img

def draw_soft_shadow(draw, bbox, fill=(0,0,0,20), blur=18):
    # simulate shadow with semi-transparent ellipse then blur
    pass # handled inline

def generate_image(path, ratio, desc, palette, slug):
    # ratio: "16:9", "4:5", "1:1"
    if ratio == "16:9":
        W,H = 1920, 1080
    elif ratio == "4:5":
        W,H = 1024, 1280
    elif ratio == "1:1":
        W,H = 1080, 1080
    else:
        W,H = 1200, 800

    is_noct = palette is NOCTUA
    papel = hex_to_rgb(palette["papel"])
    papel2 = hex_to_rgb(palette["papel2"])
    linea = hex_to_rgb(palette["linea"])
    tinta = hex_to_rgb(palette["tinta"])
    acento = hex_to_rgb(palette.get("acento", "#9C6B3F"))
    gris = hex_to_rgb(palette.get("gris","#8B8680"))

    # base
    img = Image.new("RGB", (W,H), papel)
    draw = ImageDraw.Draw(img, "RGBA")

    # subtle vertical gradient papel -> papel2
    for y in range(H):
        t = y / H
        # lerp
        r = int(papel[0]*(1-t*0.08) + papel2[0]*t*0.08)
        g = int(papel[1]*(1-t*0.08) + papel2[1]*t*0.08)
        b = int(papel[2]*(1-t*0.08) + papel2[2]*t*0.08)
        draw.line([(0,y),(W,y)], fill=(r,g,b))

    # faint grid (like editorial filete)
    grid_color = (*linea, 28) if not is_noct else (*linea, 40)
    gdraw = ImageDraw.Draw(img, "RGBA")
    # verticals
    for i in range(1,6):
        x = int(W/6*i)
        gdraw.line([(x,0),(x,H)], fill=(*linea, 18), width=1)
    for i in range(1,4):
        y = int(H/4*i)
        gdraw.line([(0,y),(W,y)], fill=(*linea, 18), width=1)

    # main content area based on desc keywords
    # Use abstract geometric composition that hints at the desc without literalism, keeping editorial minimal
    # Common: centered white/tonal card with soft shadow
    cx, cy = W//2, H//2

    # choose composition seed from desc hash to be deterministic
    seed = abs(hash(slug + desc + ratio)) % (2**32)
    rnd = random.Random(seed)

    # Determine composition type by ratio and desc
    desc_low = desc.lower()

    # Helper to draw centered card
    def draw_card(x,y,w,h, fill_white=True, radius=2):
        fill = (255,255,255) if (fill_white and not is_noct) else (hex_to_rgb(palette.get("sup","#1B1917")) if is_noct else (255,255,255))
        if is_noct:
            fill = hex_to_rgb(palette.get("sup","#1B1917"))
        # shadow
        shadow = Image.new("RGBA", (W,H), (0,0,0,0))
        sd = ImageDraw.Draw(shadow)
        sd.rounded_rectangle([x+8,y+12,x+w+8,y+h+12], radius=radius, fill=(0,0,0,22))
        shadow = shadow.filter(ImageFilter.GaussianBlur(14))
        img.paste(Image.new("RGB",(W,H),papel), (0,0)) # need to composite correctly? We'll create layer method instead.
        return fill

    # Instead of complex shadow compositing, we draw directly with layered approach:
    # Re-create with layers for proper shadow
    # Start fresh layer for shadow
    shadow_layer = Image.new("RGBA", (W,H), (0,0,0,0))
    sd = ImageDraw.Draw(shadow_layer)

    # Content layer
    content = Image.new("RGBA", (W,H), (0,0,0,0))
    cd = ImageDraw.Draw(content)

    # border color
    border = (*linea, 255)

    # Compose by description type
    if ratio == "16:9":
        # room / hero / oficina -> perspective rectangle simulating interior
        # Outer frame like a room with window light
        margin = int(W*0.06)
        card_w = W - margin*2
        card_h = H - margin*2 - 10
        card_x = margin
        card_y = margin + 5
        # card background
        card_fill = (255,255,255,255) if not is_noct else hex_to_rgb(palette.get("sup","#1B1917")) + (255,)
        # for RGBA card fill tuple length
        if len(card_fill)==3:
            card_fill = card_fill + (255,)
        # shadow ellipse under card
        sd.rounded_rectangle([card_x+6, card_y+10, card_x+card_w+6, card_y+card_h+10], radius=2, fill=(0,0,0,30))
        cd.rounded_rectangle([card_x, card_y, card_x+card_w, card_y+card_h], radius=2, fill=card_fill, outline=border, width=1)
        # inner subdivisions: simulate interior
        # horizontal floor line at 68%
        floor_y = card_y + int(card_h*0.68)
        cd.line([(card_x, floor_y),(card_x+card_w, floor_y)], fill=border, width=1)
        # window: large central pane with light
        win_w = int(card_w*0.48)
        win_h = int(card_h*0.42)
        win_x = card_x + int(card_w*0.08)
        win_y = card_y + int(card_h*0.12)
        win_fill = hex_to_rgb(palette["papel2"]) + (255,) if not is_noct else hex_to_rgb("#1E1C1A") + (255,)
        # window pane divides
        cd.rectangle([win_x, win_y, win_x+win_w, win_y+win_h], fill=win_fill, outline=border, width=1)
        # cross
        mx = win_x + win_w//2
        my = win_y + win_h//2
        cd.line([(mx, win_y),(mx, win_y+win_h)], fill=(255,255,255,220) if not is_noct else (*hex_to_rgb("#2E2A26"),255), width=4)
        cd.line([(win_x, my),(win_x+win_w, my)], fill=(255,255,255,220) if not is_noct else (*hex_to_rgb("#2E2A26"),255), width=4)
        # soft light ellipse inside window
        light = Image.new("RGBA",(win_w, win_h),(0,0,0,0))
        ld = ImageDraw.Draw(light)
        ld.ellipse([win_w*0.15, win_h*0.15, win_w*0.85, win_h*0.75], fill=(255,255,255,70) if not is_noct else (*acento, 28))
        light = light.filter(ImageFilter.GaussianBlur(10))
        content.alpha_composite(light, (win_x, win_y))
        # floor material: subtle planks
        for i in range(3):
            ly = floor_y + 18 + i*18
            cd.line([(card_x+12, ly),(card_x+card_w-12, ly)], fill=(*linea, 70), width=1)
        # furniture hints: depends on desc
        # Add two abstract blocks representing desks/tables/chairs
        furn_x = card_x + win_w + int(card_w*0.08)
        furn_w = int(card_w*0.32)
        furn_h = int(card_h*0.18)
        furn_y = floor_y - furn_h - 10
        # table top
        furn_fill = hex_to_rgb(palette["papel2"]) + (255,) if not is_noct else hex_to_rgb("#23201C") + (255,)
        cd.rectangle([furn_x, furn_y, furn_x+furn_w, furn_y+furn_h], fill=furn_fill, outline=border, width=1)
        # legs
        cd.rectangle([furn_x+12, furn_y+furn_h, furn_x+18, floor_y], fill=(*gris,255))
        cd.rectangle([furn_x+furn_w-18, furn_y+furn_h, furn_x+furn_w-12, floor_y], fill=(*gris,255))
        # small object on table: hint of model / vase / book
        obj_cx = furn_x + furn_w//2
        obj_y = furn_y - 26
        # simple vessel / box
        if "maqueta" in desc_low or "model" in desc_low:
            cd.rectangle([obj_cx-36, obj_y, obj_cx+36, obj_y+22], fill=(255,255,255,255) if not is_noct else (*hex_to_rgb("#2E2A26"),255), outline=border, width=1)
            cd.rectangle([obj_cx-28, obj_y-14, obj_cx+28, obj_y], fill=furn_fill, outline=border, width=1)
        elif "bodeg" in desc_low or "still" in desc_low or "bodegón" in desc_low:
            cd.ellipse([obj_cx-18, obj_y, obj_cx+18, obj_y+18], fill=(*acento, 90), outline=border, width=1)
        elif "detalle" in desc_low or "detail" in desc_low or "macro" in desc_low or "textura" in desc_low:
            # leave furniture minimal, emphasize texture circle later
            pass
        else:
            cd.rectangle([obj_cx-22, obj_y, obj_cx+22, obj_y+14], fill=(255,255,255,255), outline=border, width=1)

        # accent dot subtle
        cd.ellipse([card_x+card_w-28, card_y+18, card_x+card_w-14, card_y+32], fill=(*acento, 70))

    elif ratio == "4:5":
        # vertical still life / portrait
        cw = int(W*0.68)
        ch = int(H*0.72)
        cx0 = (W-cw)//2
        cy0 = (H-ch)//2 - 10
        card_fill = (255,255,255,255) if not is_noct else hex_to_rgb(palette.get("sup","#1B1917")) + (255,)
        sd.rounded_rectangle([cx0+6, cy0+10, cx0+cw+6, cy0+ch+10], radius=2, fill=(0,0,0,32))
        if is_noct:
            cd.rounded_rectangle([cx0, cy0, cx0+cw, cy0+ch], radius=2, fill=card_fill, outline=border, width=1)
        else:
            cd.rounded_rectangle([cx0, cy0, cx0+cw, cy0+ch], radius=2, fill=card_fill, outline=border, width=1)
        # inner still: top area as surface
        inner_y = cy0 + int(ch*0.12)
        inner_h = int(ch*0.32)
        inner_x = cx0 + int(cw*0.08)
        inner_w = cw - int(cw*0.16)
        cd.rectangle([inner_x, inner_y, inner_x+inner_w, inner_y+inner_h], fill=hex_to_rgb(palette["papel2"])+(255,) if not is_noct else hex_to_rgb("#1E1C1A")+(255,), outline=border, width=1)
        # lines hinting notebook
        for i in range(3):
            ly = inner_y+18+i*14
            cd.line([(inner_x+12, ly),(inner_x+inner_w-12, ly)], fill=(*linea, 110), width=1)
        # central object: vessel / book / instrument
        ox = W//2
        oy = cy0 + int(ch*0.62)
        if "frasco" in desc_low or "bodeg" in desc_low or "still" in desc_low or "botella" in desc_low:
            # bottle / jar
            cd.ellipse([ox-32, oy-36, ox+32, oy+36], fill=(*acento, 80), outline=border, width=1)
            cd.rectangle([ox-14, oy-52, ox+14, oy-30], fill=(255,255,255,255) if not is_noct else (*hex_to_rgb("#2A2520"),255), outline=border, width=1)
            # shadow
            sd.ellipse([ox-28, oy+38, ox+28, oy+50], fill=(0,0,0,22))
        elif "instrument" in desc_low or "tecl" in desc_low or "tools" in desc_low or "kit" in desc_low:
            # tools: row of abstract instruments
            for i in range(3):
                rx = ox -36 + i*36
                cd.rounded_rectangle([rx-14, oy-18, rx+14, oy+18], radius=7, fill=(255,255,255,255) if not is_noct else (*hex_to_rgb("#23201C"),255), outline=border, width=1)
                cd.line([(rx, oy-18),(rx, oy+18)], fill=(*linea, 90), width=1)
        elif "maqueta" in desc_low or "model" in desc_low:
            cd.rectangle([ox-48, oy-22, ox+48, oy+22], fill=(255,255,255,255), outline=border, width=1)
            cd.line([(ox, oy-22),(ox, oy+22)], fill=border, width=1)
        else:
            # generic still: book + cup
            cd.rectangle([ox-48, oy-18, ox+2, oy+18], fill=(255,255,255,255), outline=border, width=1)
            cd.ellipse([ox+14, oy-12, ox+48, oy+12], fill=hex_to_rgb(palette["papel2"])+(255,), outline=border, width=1)
            cd.ellipse([ox+38, oy-6, ox+52, oy+6], fill=(0,0,0,0), outline=border, width=1)

        # accent line at bottom
        cd.rectangle([cx0+int(cw*0.22), cy0+ch-22, cx0+int(cw*0.78), cy0+ch-18], fill=(*acento, 90))

    else: # 1:1
        # square detail / texture
        sq = min(W,H)
        m = int(sq*0.12)
        card_x = (W-sq)//2 + m
        card_y = (H-sq)//2 + m
        card_w = sq - 2*m
        card_h = sq - 2*m
        card_fill = (255,255,255,255) if not is_noct else hex_to_rgb(palette.get("sup","#1B1917")) + (255,)
        sd.rounded_rectangle([card_x+6, card_y+10, card_x+card_w+6, card_y+card_h+10], radius=2, fill=(0,0,0,28))
        cd.rounded_rectangle([card_x, card_y, card_x+card_w, card_y+card_h], radius=2, fill=card_fill, outline=border, width=1)
        # texture lines
        # horizontal
        for i in range(14):
            y = card_y + 18 + i*int(card_h/15)
            wv = 1 if i%2==0 else 2
            cd.line([(card_x+12, y),(card_x+card_w-12, y)], fill=(*linea, 80 if i%3==0 else 40), width=wv)
        # vertical faint
        for i in range(10):
            x = card_x + 20 + i*int(card_w/11)
            cd.line([(x, card_y+12),(x, card_y+card_h-12)], fill=(*hex_to_rgb(palette["papel2"]), 90) if not is_noct else (*linea,30), width=1)
        # central detail circle / crosshair
        ccx = W//2
        ccy = H//2
        # concentric circles
        for r in [88, 62, 34]:
            cd.ellipse([ccx-r, ccy-r, ccx+r, ccy+r], outline=(*acento, 22 if r==88 else 35 if r==62 else 55), width=1)
        cd.ellipse([ccx-3, ccy-3, ccx+3, ccy+3], fill=(*acento, 180))
        # dashed cross
        for i in range(-1,2):
            if i==0: continue
            cd.line([(ccx, ccy+i*44),(ccx, ccy+i*18)], fill=(*acento, 50), width=1)
            cd.line([(ccx+i*44, ccy),(ccx+i*18, ccy)], fill=(*acento, 50), width=1)

    # composite shadow + content onto base
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(16))
    # need to composite in order: base img (RGB) -> shadow -> content
    base_rgba = img.convert("RGBA")
    base_rgba.alpha_composite(shadow_layer)
    base_rgba.alpha_composite(content)
    img = base_rgba.convert("RGB")

    # add subtle noise grain
    # cheap grain: overlay with random dots
    grain = Image.new("RGBA", (W,H), (0,0,0,0))
    gd = ImageDraw.Draw(grain)
    for _ in range(int(W*H*0.0008)):
        x = rnd.randint(0,W-1)
        y = rnd.randint(0,H-1)
        v = rnd.randint(0,255)
        a = rnd.randint(3,7)
        gd.point((x,y), fill=(v,v,v,a))
    img = Image.alpha_composite(img.convert("RGBA"), grain).convert("RGB")

    # thin outer filete
    draw2 = ImageDraw.Draw(img)
    draw2.rectangle([0,0,W-1,H-1], outline=linea, width=1)

    # save
    path.parent.mkdir(parents=True, exist_ok=True)
    # remove old file if exists with different extension case
    img.save(path, "JPEG", quality=88, optimize=True, subsampling=0)
    return path

def main():
    print("Reading inventory...")
    with open(INVENTORY, encoding="utf-8") as f:
        data = json.load(f)
    print(f"Loaded {len(data)} webs")
    # order by registro order if available
    order = []
    if REGISTRO.exists():
        with open(REGISTRO, encoding="utf-8") as f:
            for line in f:
                if line.startswith("| `"):
                    try:
                        slug = line.split("`")[1]
                        order.append(slug)
                    except: pass
    # map slug->entry
    by_slug = {e["slug"]: e for e in data}
    if order:
        # use registro order, fallback to inventory order
        ordered = [by_slug[s] for s in order if s in by_slug]
        # append any missing
        for e in data:
            if e["slug"] not in order:
                ordered.append(e)
    else:
        ordered = data

    total_imgs = 0
    total_webs = 0
    pending = []
    results = []

    for idx, entry in enumerate(ordered, 1):
        slug = entry["slug"]
        images = entry.get("images", [])
        pal_str = entry.get("paleta","")
        palette = get_palette(slug, pal_str)
        print(f"[{idx}/{len(ordered)}] {slug} — {len(images)} imgs — palette {'NOCTUA' if palette is NOCTUA else 'ETER'}")
        # Ensure public/media dir exists
        media_dir = PROPUESTAS / slug / "public" / "media"
        media_dir.mkdir(parents=True, exist_ok=True)
        created = 0
        for im in images:
            fname = im["file"]
            ratio = im.get("ratio","16:9")
            desc = im.get("desc","")
            target = media_dir / fname
            try:
                generate_image(target, ratio, desc, palette, slug)
                print(f"  -> {fname} {ratio} ok")
                created += 1
            except Exception as e:
                print(f"  ! {fname} failed: {e}")
                import traceback; traceback.print_exc()
                pending.append(f"{slug}/{fname}: {e}")
        total_imgs += created
        total_webs += 1
        results.append((slug, created, len(images)))

        # heartbeat file
        if idx % 10 == 0:
            with open(BASE / "_media-progress.json","w", encoding="utf-8") as pf:
                json.dump({"done": idx, "total": len(ordered), "total_imgs": total_imgs, "pending": pending, "results": results}, pf, ensure_ascii=False, indent=2)
            print(f"  -- progress checkpoint {idx}/{len(ordered)} imgs={total_imgs}")

    # final progress
    with open(BASE / "_media-progress.json","w", encoding="utf-8") as pf:
        json.dump({"done": len(ordered), "total": len(ordered), "total_imgs": total_imgs, "pending": pending, "results": results, "completed": True}, pf, ensure_ascii=False, indent=2)

    # summary table markdown
    summary_lines = ["| web | imgs creadas | esperadas | estado |", "|---|---|---|---|"]
    for slug, created, expected in results:
        estado = "generada" if created==expected else ("parcial" if created>0 else "pendiente")
        summary_lines.append(f"| `{slug}` | {created} | {expected} | {estado} |")
    summary_lines.append(f"\nTotal: {total_webs} webs, {total_imgs} imágenes generadas, {len(pending)} pendientes")
    summary_path = BASE / "_media-summary.md"
    summary_path.write_text("\n".join(summary_lines), encoding="utf-8")
    print("\n".join(summary_lines))
    print(f"\nDone. Summary at {summary_path}")
    if pending:
        print("Pendientes:")
        for p in pending:
            print(" ", p)

if __name__ == "__main__":
    main()
