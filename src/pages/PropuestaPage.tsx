import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { getSector } from '../data/sectores';
import { PageMeta } from '../components/PageMeta';
import { PreviewReturnPopup } from '../components/cases/PreviewReturnPopup';

const SLUG = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,80}$/;

type Kind = 'loading' | 'html' | 'pdf' | 'missing';

type Meta = {
  title?: string;
  client?: string;
};

async function exists(url: string): Promise<boolean> {
  try {
    const head = await fetch(url, { method: 'HEAD' });
    if (head.ok) return true;
    if (head.status === 405 || head.status === 501) {
      const get = await fetch(url, { method: 'GET' });
      return get.ok;
    }
    return false;
  } catch {
    return false;
  }
}

export default function PropuestaPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [kind, setKind] = useState<Kind>('loading');
  const [src, setSrc] = useState('');
  const [meta, setMeta] = useState<Meta>({});

  const rawFrom = searchParams.get('from');
  const backUrl = rawFrom && rawFrom.startsWith('/galeria') ? rawFrom : '/';

  const current = useMemo(() => catalogo.find((e) => e.slug === slug), [slug]);
  const siblings = useMemo(
    () => (current ? catalogo.filter((e) => e.sector === current.sector) : []),
    [current],
  );
  const idx = siblings.findIndex((e) => e.slug === slug);
  const hasSiblings = idx >= 0 && siblings.length > 1;
  const prev = hasSiblings ? siblings[(idx - 1 + siblings.length) % siblings.length] : undefined;
  const next = hasSiblings ? siblings[(idx + 1) % siblings.length] : undefined;

  const goSibling = (target: typeof prev) => {
    if (!target) return;
    const from = rawFrom ?? (current ? `/galeria/${current.sector}` : '/');
    navigate(`/propuesta/${target.slug}?from=${encodeURIComponent(from)}`);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goSibling(prev);
      if (e.key === 'ArrowRight') goSibling(next);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    if (!SLUG.test(slug)) {
      setKind('missing');
      return;
    }

    let cancelled = false;
    const base = `/propuestas/${slug}`;

    (async () => {
      const metaRes = await fetch(`${base}/meta.json`);
      if (metaRes.ok) {
        try {
          const data = (await metaRes.json()) as Meta;
          if (!cancelled) setMeta(data);
        } catch {
          /* ignore */
        }
      }

      const candidates = [
        [`${base}/index.html`, 'html'],
        [`${base}/index.pdf`, 'pdf'],
        [`${base}/propuesta.pdf`, 'pdf'],
      ] as const;

      for (const [url, nextKind] of candidates) {
        if (await exists(url)) {
          if (!cancelled) {
            setSrc(url);
            setKind(nextKind);
          }
          return;
        }
      }

      if (!cancelled) setKind('missing');
    })();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const title = current?.brand || meta.title || meta.client || slug;
  const label = meta.client && meta.title && !current ? `${meta.client} · ${meta.title}` : title;

  if (kind === 'missing') {
    return (
      <div className="min-h-svh bg-[#F7F8FC] text-[#0B0B12] flex items-center justify-center px-6">
        <PageMeta title="Propuesta no encontrada | Órbita" />
        <div className="max-w-md text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7280] mb-3">
            Propuesta
          </p>
          <h1
            className="text-3xl font-medium tracking-tight mb-3"
            style={{ letterSpacing: '-0.03em' }}
          >
            Este enlace no existe.
          </h1>
          <p className="text-sm text-zinc-600 mb-6">
            Revisa que <code className="text-xs">propuestas/{slug || '…'}</code> tenga un{' '}
            <code className="text-xs">index.html</code>, un PDF, o —si es una app React— que esté
            construida con <code className="text-xs">npm run propuestas:build</code>.
          </p>
          <Link to="/" className="text-sm font-medium text-[#0B0B12] hover:text-[#6B7280]">
            Ir al inicio →
          </Link>
        </div>
      </div>
    );
  }

  const sectorInfo = current ? getSector(current.sector) : undefined;

  return (
    <div className="h-svh w-full bg-[#0B0B12] relative overflow-hidden">
      <PageMeta
        title={`${label} | Propuesta Órbita`}
        description={
          current?.description ?? (meta.client ? `Propuesta para ${meta.client}.` : 'Propuesta Órbita.')
        }
      />
      {kind === 'loading' ? (
        <div className="h-full flex items-center justify-center text-sm text-zinc-500">
          Cargando propuesta…
        </div>
      ) : (
        <iframe
          title={label}
          src={src}
          className="w-full h-full border-0 bg-white"
          sandbox={
            kind === 'pdf'
              ? 'allow-popups allow-popups-to-escape-sandbox'
              : 'allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox'
          }
          referrerPolicy="no-referrer"
        />
      )}

      <PreviewReturnPopup
        name={label}
        labelTag="Propuesta Órbita"
        backUrl={backUrl}
        crmUrl={`/crm/${slug}`}
      />

      {/* Navegación entre propuestas del mismo sector */}
      {prev && (
        <button
          type="button"
          onClick={() => goSibling(prev)}
          aria-label={`Propuesta anterior: ${prev.brand}`}
          className="hidden sm:flex fixed left-5 top-1/2 -translate-y-1/2 z-[70] items-center gap-2 rounded-full border border-white/15 bg-[#0B0B12]/90 text-white pl-3 pr-3.5 py-3 backdrop-blur-md shadow-[0_14px_40px_-14px_rgba(0,0,0,0.6)] hover:bg-[#0B0B12] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-300" />
          <span className="max-w-[8.5rem] truncate text-sm font-medium hidden lg:inline text-white/85">
            {prev.brand}
          </span>
        </button>
      )}
      {next && (
        <button
          type="button"
          onClick={() => goSibling(next)}
          aria-label={`Propuesta siguiente: ${next.brand}`}
          className="hidden sm:flex fixed right-5 top-1/2 -translate-y-1/2 z-[70] items-center gap-2 rounded-full border border-white/15 bg-[#0B0B12]/90 text-white pl-3.5 pr-3 py-3 backdrop-blur-md shadow-[0_14px_40px_-14px_rgba(0,0,0,0.6)] hover:bg-[#0B0B12] transition-colors"
        >
          <span className="max-w-[8.5rem] truncate text-sm font-medium hidden lg:inline text-white/85">
            {next.brand}
          </span>
          <ChevronRight className="w-5 h-5 text-zinc-300" />
        </button>
      )}
      {hasSiblings && sectorInfo && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] rounded-full border border-white/15 bg-[#0B0B12]/85 text-white/75 text-xs font-medium px-4 py-1.5 backdrop-blur-md pointer-events-none">
          {sectorInfo.label} · {idx + 1} / {siblings.length} · usa ← → para cambiar
        </div>
      )}
    </div>
  );
}
