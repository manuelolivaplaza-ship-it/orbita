import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IMG = "/media/eter-hero-16x9.png";
const VIDEO = "/media/eter-hero-loop.mp4";

export function Hero() {
  // We attempt to use video if exists, else image, else falta.
  // Runtime detection: try to load video; if fails, fallback to img; if img fails, show falta.
  // For simplicity, we render both with error handling via JS.

  return (
    <section id="cuarteles-terroir" className="hero" aria-label="Hero viña Casablanca">
      {/* Media layer - motion scale */}
      <motion.div
        style={{ position: "absolute", inset: 0 }}
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* We attempt video first; if not found, browser will error and we hide it; then img shows. If img also missing, falta visible */}
        <MediaLayer />
      </motion.div>

      <div className="hero__veil" aria-hidden="true" />

      <motion.div
        className="hero__copy"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut", delay: 0.18 }}
      >
        <p className="hero__kicker">CASABLANCA · 3 CUARTELES · DESDE 2012</p>
        <h1 className="hero__title">Vino de ladera. Sin maquillaje.</h1>
        <p className="hero__bajada">
          Tres cuarteles en espaldera baja, suelo de maicillo granítico. Fermentación corta, guarda breve. Lo que da la parcela, no lo que pide
          el mercado.
        </p>
        <div className="hero__ctas">
          <a href="#reserva-cata" className="hero__cta-primary">
            Reservar cata — WhatsApp
          </a>
          <a href="#vinos-de-parcela" className="hero__cta-secondary">
            Ver vinos desde $10.900
          </a>
        </div>
        <p className="hero__micro">Cupos acotados · máx 10 por cata · valores referenciales; se confirma al reservar</p>
      </motion.div>
    </section>
  );
}

function MediaLayer() {
  const [videoOk, setVideoOk] = useState(true);
  const [imgOk, setImgOk] = useState(true);
  const [checkedVideo, setCheckedVideo] = useState(false);
  const [checkedImg, setCheckedImg] = useState(false);

  useEffect(() => {
    // Probe existence via fetch HEAD to decide media-falta per spec (report in console)
    // Spec: check public/media/eter-hero-16x9.png and eter-hero-loop.mp4
    let cancelled = false;
    async function probe() {
      try {
        const resVideo = await fetch(VIDEO, { method: "HEAD" });
        if (!cancelled) {
          if (!resVideo.ok) {
            setVideoOk(false);
          }
          setCheckedVideo(true);
        }
      } catch {
        if (!cancelled) {
          setVideoOk(false);
          setCheckedVideo(true);
        }
      }
      try {
        const resImg = await fetch(IMG, { method: "HEAD" });
        if (!cancelled) {
          if (!resImg.ok) {
            setImgOk(false);
          }
          setCheckedImg(true);
        }
      } catch {
        if (!cancelled) {
          setImgOk(false);
          setCheckedImg(true);
        }
      }
    }
    probe();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (checkedVideo && checkedImg && !videoOk && !imgOk) {
      console.warn("media-falta: eter-hero-16x9.png (ni imagen ni video encontrados)");
    } else if (checkedVideo && checkedImg && !videoOk && imgOk) {
      // video missing is ok, image present
    }
  }, [checkedVideo, checkedImg, videoOk, imgOk]);

  // If neither media exists, show falta
  if (checkedVideo && checkedImg && !videoOk && !imgOk) {
    return (
      <div className="hero__media-falta" data-falta="eter-hero-16x9.png">
        falta: eter-hero-16x9.png
      </div>
    );
  }

  // While probing, show falta as placeholder until we know? Instead show nothing or falta with opacity
  // To avoid FOUC, if not yet checked, attempt to render image; falta will be replaced.
  // Simpler: if not checked, render img; fallback logic will handle errors.

  return (
    <>
      {videoOk && (
        <video
          className="hero__media"
          autoPlay
          muted
          loop
          playsInline
          poster={IMG}
          onError={() => setVideoOk(false)}
          style={{ display: videoOk ? "block" : "none" }}
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      )}
      {(!videoOk || !checkedVideo) && imgOk ? (
        <img
          className="hero__media"
          src={IMG}
          alt=""
          onError={() => setImgOk(false)}
          style={{ display: imgOk ? "block" : "none" }}
        />
      ) : null}
      {/* If video failed and img also failed after load, show falta */}
      {!imgOk && !videoOk && checkedImg && (
        <div className="hero__media-falta" data-falta="eter-hero-16x9.png">
          falta: eter-hero-16x9.png
        </div>
      )}
    </>
  );
}
