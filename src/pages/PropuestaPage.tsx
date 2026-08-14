import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  const [kind, setKind] = useState<Kind>('loading');
  const [src, setSrc] = useState('');
  const [meta, setMeta] = useState<Meta>({});

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

      for (const [url, next] of candidates) {
        if (await exists(url)) {
          if (!cancelled) {
            setSrc(url);
            setKind(next);
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

  const title = meta.title || meta.client || slug;
  const label = meta.client && meta.title ? `${meta.client} · ${meta.title}` : title;

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

  return (
    <div className="h-svh w-full bg-[#0B0B12] relative overflow-hidden">
      <PageMeta
        title={`${label} | Propuesta Órbita`}
        description={meta.client ? `Propuesta para ${meta.client}.` : 'Propuesta Órbita.'}
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
        />
      )}
      <PreviewReturnPopup name={label} labelTag="Propuesta Órbita" backUrl="/" />
    </div>
  );
}
