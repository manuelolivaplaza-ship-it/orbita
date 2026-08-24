import { useEffect, useRef } from "react";
import { tema3d } from "../lib/datos";

/**
 * Ciudad 3D de torres con ventanas iluminadas, generada 100% en código
 * (sin modelos externos). Three.js se carga en un chunk aparte para no
 * frenar la primera pintura. Si WebGL no está disponible, no renderiza
 * nada y queda el fondo CSS.
 */
export default function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelado = false;
    let limpieza: (() => void) | undefined;

    (async () => {
      const el = ref.current;
      if (!el) return;
      let THREE: typeof import("three");
      let renderer: import("three").WebGLRenderer;
      try {
        THREE = await import("three");
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        return; // sin WebGL o falló la carga: fondo CSS
      }
      if (cancelado) {
        renderer.dispose();
        return;
      }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(new THREE.Color(tema3d.niebla), 0.028);

    const camera = new THREE.PerspectiveCamera(38, el.clientWidth / el.clientHeight, 0.1, 200);
    const baseCam = new THREE.Vector3(0, 7.5, 30);
    camera.position.copy(baseCam);
    camera.lookAt(0, 8, 0);

    // — Textura procedural de ventanas —
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 128;
    texCanvas.height = 256;
    const ctx = texCanvas.getContext("2d")!;
    if (tema3d.noche) {
      ctx.fillStyle = "#0a0d10";
      ctx.fillRect(0, 0, 128, 256);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 128, 256);
    }
    const cols = 6;
    const rows = 16;
    const cw = 128 / cols;
    const ch = 256 / rows;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const lit = Math.random() < 0.34;
        if (tema3d.noche) {
          if (lit) {
            const warm = Math.random() < 0.82;
            ctx.fillStyle = warm
              ? Math.random() < 0.5
                ? tema3d.ventanas
                : tema3d.ventanasAlt
              : "#b9d2e8";
          } else {
            ctx.fillStyle = "#11161b";
          }
        } else {
          ctx.fillStyle = lit ? "#aebfcd" : "#dcd9d2";
        }
        const pad = 2.5;
        ctx.fillRect(c * cw + pad, r * ch + pad, cw - pad * 2, ch - pad * 2);
      }
    }
    const ventanasTex = new THREE.CanvasTexture(texCanvas);
    ventanasTex.colorSpace = THREE.SRGBColorSpace;

    // — Torres —
    const city = new THREE.Group();
    const geometrias: THREE.BufferGeometry[] = [];
    const materiales: THREE.Material[] = [];

    type Torre = { w: number; h: number; d: number; x: number; z: number };
    const torres: Torre[] = [
      { w: 5.5, h: 15, d: 5.5, x: -3, z: -7 },
      { w: 4.5, h: 21, d: 4.5, x: 5.5, z: -9 },
      { w: 6, h: 11, d: 5, x: -10, z: -3 },
      { w: 4, h: 25, d: 4, x: 11, z: -4 },
      { w: 5, h: 9, d: 5, x: 8, z: 2 },
      { w: 4, h: 13, d: 4, x: -6.5, z: 3 },
      { w: 7, h: 7.5, d: 6, x: 2.5, z: 6 },
      { w: 4.5, h: 17, d: 4.5, x: -14, z: -9 },
      { w: 5, h: 12, d: 5, x: 15, z: -11 },
      { w: 3.5, h: 19, d: 3.5, x: 0.5, z: -14 },
      { w: 5, h: 8, d: 4, x: 13, z: 5 },
      { w: 4, h: 14, d: 4, x: -12.5, z: 3.5 },
    ];

    const techoMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(tema3d.torreTecho),
      roughness: 0.9,
      metalness: 0.05,
    });
    materiales.push(techoMat);

    let torreAlto: import("three").Mesh | null = null;
    let alturaMax = 0;

    for (const t of torres) {
      const geo = new THREE.BoxGeometry(t.w, t.h, t.d);
      geometrias.push(geo);
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(tema3d.torre),
        roughness: 0.75,
        metalness: tema3d.noche ? 0.08 : 0.0,
        ...(tema3d.noche
          ? { emissive: new THREE.Color("#ffffff"), emissiveMap: ventanasTex, emissiveIntensity: 1.15 }
          : { map: ventanasTex }),
      });
      materiales.push(mat);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(t.x, t.h / 2, t.z);
      // variación sutil de rotación para romper la retícula
      mesh.rotation.y = (Math.random() - 0.5) * 0.12;
      city.add(mesh);

      const techoGeo = new THREE.BoxGeometry(t.w + 0.35, 0.3, t.d + 0.35);
      geometrias.push(techoGeo);
      const techo = new THREE.Mesh(techoGeo, techoMat);
      techo.position.set(t.x, t.h + 0.15, t.z);
      city.add(techo);

      if (t.h > alturaMax) {
        alturaMax = t.h;
        torreAlto = mesh;
      }
    }

    // baliza pulsante en la torre más alta
    const balizaGeo = new THREE.SphereGeometry(0.28, 12, 12);
    geometrias.push(balizaGeo);
    const balizaMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(tema3d.acento) });
    materiales.push(balizaMat);
    const baliza = new THREE.Mesh(balizaGeo, balizaMat);
    if (torreAlto) {
      baliza.position.set(torreAlto.position.x, alturaMax + 0.9, torreAlto.position.z);
      city.add(baliza);
    }

    scene.add(city);

    // — Suelo —
    const sueloGeo = new THREE.CircleGeometry(90, 48);
    geometrias.push(sueloGeo);
    const sueloMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(tema3d.suelo),
      roughness: 1,
      metalness: 0,
    });
    materiales.push(sueloMat);
    const suelo = new THREE.Mesh(sueloGeo, sueloMat);
    suelo.rotation.x = -Math.PI / 2;
    scene.add(suelo);

    // — Estrellas (solo de noche) —
    if (tema3d.noche) {
      const N = 260;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const r = 55 + Math.random() * 35;
        const a = Math.random() * Math.PI * 2;
        const y = 14 + Math.random() * 38;
        pos[i * 3] = Math.cos(a) * r;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = Math.sin(a) * r;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geometrias.push(starGeo);
      const starMat = new THREE.PointsMaterial({
        color: new THREE.Color(tema3d.estrellas),
        size: 0.22,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
      });
      materiales.push(starMat);
      scene.add(new THREE.Points(starGeo, starMat));
    }

    // — Luces —
    scene.add(new THREE.AmbientLight(new THREE.Color(tema3d.noche ? "#2a3340" : "#ffffff"), tema3d.noche ? 0.9 : 0.75));
    const dir = new THREE.DirectionalLight(new THREE.Color(tema3d.noche ? "#5d7290" : "#ffffff"), tema3d.noche ? 0.8 : 1.6);
    dir.position.set(12, 24, 10);
    scene.add(dir);
    if (tema3d.noche) {
      const calida = new THREE.PointLight(new THREE.Color(tema3d.acento), 60, 45, 1.8);
      calida.position.set(2, 6, 12);
      scene.add(calida);
    }

    // — Interacción —
    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouse);

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(el);

    let raf = 0;
    const reloj = new THREE.Clock();

    const renderizar = () => {
      const t = reloj.getElapsedTime();
      city.rotation.y = Math.sin(t * 0.05) * 0.14;
      camera.position.x = baseCam.x + mx * 1.6;
      camera.position.y = baseCam.y - my * 0.7;
      camera.lookAt(0, 8, 0);
      const pulso = 0.6 + Math.abs(Math.sin(t * 2.1)) * 0.8;
      balizaMat.opacity = pulso;
      (balizaMat as import("three").MeshBasicMaterial).transparent = true;
      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      renderizar();
    } else {
      const loop = () => {
        if (!document.hidden) renderizar();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    limpieza = () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      ro.disconnect();
      for (const g of geometrias) g.dispose();
      for (const m of materiales) m.dispose();
      ventanasTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
    })();

    return () => {
      cancelado = true;
      limpieza?.();
    };
  }, []);

  return <div className="hero3d" ref={ref} aria-hidden="true" />;
}
