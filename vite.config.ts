import fs from 'node:fs';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function isInside(root: string, file: string) {
  const rel = path.relative(root, file);
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel);
}

function isAppFolder(dir: string) {
  return fs.existsSync(path.join(dir, 'package.json'));
}

function removePublicPropuestasIndex() {
  const published = path.resolve(__dirname, 'public', 'propuestas-index.json');
  if (fs.existsSync(published)) fs.unlinkSync(published);
}

/* ---------- Catálogo de propuestas (módulo virtual) ---------- */

const VIRTUAL_CATALOGO = 'virtual:propuestas-catalogo';
const VIRTUAL_CATALOGO_RESOLVED = '\0' + VIRTUAL_CATALOGO;

// Sectores inferibles desde el prefijo del slug. Así una carpeta nueva
// (p. ej. de otro agente) entra a la galería sin editar su meta.json.
const SECTOR_BY_PREFIX: Record<string, string> = {
  abogado: 'legal',
  dentista: 'dental',
  arquitectura: 'arquitectura',
  inmobiliaria: 'inmobiliaria',
  veterinaria: 'veterinaria',
  gimnasio: 'bienestar',
  contador: 'contabilidad',
  marketing: 'marketing',
  software: 'software',
  ecommerce: 'ecommerce',
  diseno: 'diseno',
  'centro-medico': 'centro-medico',
  'salud-mental': 'salud-mental',
  kinesiologia: 'kinesiologia',
  laboratorio: 'laboratorio',
  concesionaria: 'concesionaria',
  neumaticos: 'neumaticos',
  repuestos: 'repuestos',
  ferreteria: 'ferreteria',
  distribuidora: 'distribuidora',
  minimayorista: 'mayorista',
  universidad: 'universidad',
  vinedo: 'vinedo',
};

const SECTOR_ALIASES: Record<string, string> = {
  dentista: 'dental',
  abogado: 'legal',
  abogados: 'legal',
  gym: 'bienestar',
  fitness: 'bienestar',
  contador: 'contabilidad',
  'centro medico': 'centro-medico',
  minimayorista: 'mayorista',
};

const KNOWN_VARIANTS = new Set(['claro', 'oscuro', 'teal', 'azul']);

// Carpetas con nombre de marca: el sector no se deduce del slug.
const SECTOR_BY_FOLDER: Record<string, string> = {
  alba: 'gastronomia',
  bruma: 'dental',
  casonorte: 'dental',
  lumen: 'diseno',
  pausa: 'gastronomia',
  'clinica-claro': 'dental',
  minimayorista: 'mayorista',
};

/** Demos del lenguaje visual, no propuestas de cliente. */
const HIDDEN_SLUGS = new Set(['eter-claro', 'noctua-oscuro']);

/** Carpetas inactivas o placeholders de OneDrive que se excluyen del build. */
const OFFLINE_SLUGS = new Set(['alba', 'bruma', 'casonorte', 'lumen', 'minimayorista', 'pausa']);

function inferVariant(slug: string): string {
  if (slug.endsWith('-oscuro-premium') || slug.endsWith('-oscuro')) return 'oscuro';
  if (slug.endsWith('-teal')) return 'teal';
  if (slug.endsWith('-azul-cian')) return 'azul';
  if (slug.endsWith('-claro')) return 'claro';
  return '';
}

function inferSector(slug: string): string {
  if (SECTOR_BY_FOLDER[slug]) return SECTOR_BY_FOLDER[slug];
  const prefix = Object.keys(SECTOR_BY_PREFIX)
    .sort((a, b) => b.length - a.length)
    .find((p) => slug === p || slug.startsWith(`${p}-`));
  return prefix ? SECTOR_BY_PREFIX[prefix] : 'otros';
}

const KNOWN_SECTORS = new Set([
  ...Object.values(SECTOR_BY_PREFIX),
  ...Object.values(SECTOR_BY_FOLDER),
  ...Object.values(SECTOR_ALIASES),
  'estetica',
]);

function resolveSector(slug: string, metaSector: unknown): string {
  if (typeof metaSector === 'string' && metaSector.trim()) {
    const raw = metaSector.trim().toLowerCase();
    if (SECTOR_ALIASES[raw]) return SECTOR_ALIASES[raw];
    if (KNOWN_SECTORS.has(raw)) return raw;
  }
  return inferSector(slug);
}

function resolveVariant(slug: string, metaVariant: unknown): string {
  if (typeof metaVariant === 'string' && KNOWN_VARIANTS.has(metaVariant.trim())) {
    return metaVariant.trim();
  }
  return inferVariant(slug);
}

function sanitizeBrand(raw: string): string {
  return raw
    .replace(/\(.*?\)/g, '')
    .replace(/[—–·].*$/s, '')
    .replace(/[,;:\s]+$/, '')
    .trim();
}

function inferBrand(title: string, client: string, slug: string): string {
  const segments = title
    .split(/[—–·]/)
    .map((s) => s.trim())
    .filter(Boolean);
  const meaningful = segments.filter((s) => !/^propuesta/i.test(s) && !/^órbita$/i.test(s));
  const candidate = sanitizeBrand(meaningful[0] ?? '');
  if (candidate && candidate.length <= 40) return candidate;
  const clientBrand = sanitizeBrand(client);
  if (clientBrand && clientBrand.length <= 28 && !/[()]/.test(client)) return clientBrand;
  return slug;
}

type CatalogEntry = {
  slug: string;
  brand: string;
  title: string;
  sector: string;
  variant: string;
  description?: string;
};

function readCatalogo(root: string): CatalogEntry[] {
  if (!fs.existsSync(root)) return [];
  const entries: CatalogEntry[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('.') || OFFLINE_SLUGS.has(entry.name)) continue;
    const slug = entry.name;
    let meta: Record<string, unknown> = {};
    const metaFile = path.join(root, slug, 'meta.json');
    if (fs.existsSync(metaFile)) {
      try {
        meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
      } catch {
        /* meta inválido: se cae a inferencia */
      }
    }
    if (meta.hidden === true || HIDDEN_SLUGS.has(slug)) continue;
    const title = typeof meta.title === 'string' && meta.title.trim() ? meta.title : slug;
    const client = typeof meta.client === 'string' ? meta.client : '';
    entries.push({
      slug,
      brand:
        typeof meta.brand === 'string' && meta.brand.trim()
          ? meta.brand.trim()
          : inferBrand(title, client, slug),
      title,
      sector: resolveSector(slug, meta.sector),
      variant: resolveVariant(slug, meta.variant),
      ...(typeof meta.description === 'string' && meta.description.trim()
        ? { description: meta.description }
        : {}),
    });
  }
  entries.sort((a, b) => a.slug.localeCompare(b.slug));

  // Si dos propuestas del mismo sector quedan con la misma marca (p. ej. UMBRAL
  // y su variante B), se distinguen por familia de diseño A/B.
  const seen = new Map<string, number>();
  for (const e of entries) {
    const key = `${e.sector}::${e.brand.toLowerCase()}`;
    seen.set(key, (seen.get(key) ?? 0) + 1);
  }
  for (const e of entries) {
    const key = `${e.sector}::${e.brand.toLowerCase()}`;
    if ((seen.get(key) ?? 0) > 1) e.brand += e.slug.includes('-b-') ? ' · B' : ' · A';
  }
  return entries;
}

function propuestasPlugin(): Plugin {
  const root = path.resolve(__dirname, 'propuestas');

  const resolveFile = (urlPath: string) => {
    // Limpiar posibles duplicaciones accidentales de prefijos /propuestas/slug/
    let cleaned = urlPath;
    const doubleMatch = cleaned.match(/\/propuestas\/([a-zA-Z0-9_-]+)\/propuestas\/\1\//);
    if (doubleMatch) {
      cleaned = cleaned.replace(doubleMatch[0], `/propuestas/${doubleMatch[1]}/`);
    }

    const rel = decodeURIComponent(cleaned.replace(/^\/propuestas\/?/, '')).split('?')[0];
    if (!rel || rel.includes('..')) return null;
    const parts = rel.split('/').filter(Boolean);
    const slug = parts[0];
    if (!slug || slug.startsWith('_') || slug.startsWith('.')) return null;

    const folder = path.join(root, slug);
    if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) return null;

    let rest = parts.slice(1).join('/') || 'index.html';
    if (rest.startsWith(`propuestas/${slug}/`)) {
      rest = rest.replace(`propuestas/${slug}/`, '');
    }
    const app = isAppFolder(folder);
    const bases = app
      ? [path.join(folder, 'dist'), path.join(folder, 'public'), folder]
      : [folder];

    for (const base of bases) {
      let file = path.resolve(base, rest);
      if (!isInside(base, file) && file !== base) continue;
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
        file = path.join(file, 'index.html');
      }
      if (!fs.existsSync(file) || !fs.statSync(file).isFile()) continue;
      if (app && base === folder) {
        const allowed = new Set(['meta.json', 'index.pdf', 'propuesta.pdf']);
        if (!allowed.has(path.basename(file))) continue;
      }
      return file;
    }
    return null;
  };

  return {
    name: 'propuestas',
    buildStart() {
      removePublicPropuestasIndex();
    },
    resolveId(id) {
      if (id === VIRTUAL_CATALOGO) return VIRTUAL_CATALOGO_RESOLVED;
      return undefined;
    },
    load(id) {
      if (id === VIRTUAL_CATALOGO_RESOLVED) {
        return `export default ${JSON.stringify(readCatalogo(root))};`;
      }
      return undefined;
    },
    configureServer(server) {
      if (!fs.existsSync(root)) fs.mkdirSync(root, { recursive: true });
      removePublicPropuestasIndex();

      const invalidateCatalogo = (file: string) => {
        if (!file.endsWith('meta.json')) return;
        const mod = server.moduleGraph.getModuleById(VIRTUAL_CATALOGO_RESOLVED);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', invalidateCatalogo);
      server.watcher.on('change', invalidateCatalogo);
      server.watcher.on('unlink', invalidateCatalogo);

      server.middlewares.use((req, res, next) => {
        // 1. Interceptar peticiones a _next/image?url=...
        if (req.url && req.url.includes('_next/image')) {
          try {
            const urlObj = new URL(req.url, 'http://localhost');
            const targetUrl = urlObj.searchParams.get('url');
            if (targetUrl) {
              const decoded = decodeURIComponent(targetUrl);
              let slug = '';
              const propMatch = req.url.match(/\/propuestas\/([a-zA-Z0-9_-]+)\//);
              if (propMatch) {
                slug = propMatch[1];
              } else if (req.headers.referer) {
                const refMatch = req.headers.referer.match(/\/propuestas\/([a-zA-Z0-9_-]+)/);
                if (refMatch) slug = refMatch[1];
              }

              if (slug) {
                const folder = path.join(root, slug);
                const cleanRel = decoded.replace(/^\//, '');
                const candidates = [
                  path.join(folder, 'dist', cleanRel),
                  path.join(folder, 'public', cleanRel),
                  path.join(folder, cleanRel),
                ];
                for (const cand of candidates) {
                  if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
                    const buf = fs.readFileSync(cand);
                    res.setHeader('Content-Type', MIME[path.extname(cand).toLowerCase()] || 'image/jpeg');
                    res.setHeader('Content-Length', buf.length);
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                    res.end(buf);
                    return;
                  }
                }
              }
            }
          } catch {
            // fallback
          }
        }

        // 2. Interceptar rutas relativas a la raíz (/images/ o /media/) cuando el referer es un iframe de propuesta
        if (req.url && (req.url.startsWith('/images/') || req.url.startsWith('/media/')) && req.headers.referer) {
          const refMatch = req.headers.referer.match(/\/propuestas\/([a-zA-Z0-9_-]+)/);
          if (refMatch) {
            const slug = refMatch[1];
            const folder = path.join(root, slug);
            const cleanRel = req.url.replace(/^\//, '').split('?')[0];
            const candidates = [
              path.join(folder, 'dist', cleanRel),
              path.join(folder, 'public', cleanRel),
            ];
            for (const cand of candidates) {
              if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
                const buf = fs.readFileSync(cand);
                res.setHeader('Content-Type', MIME[path.extname(cand).toLowerCase()] || 'image/jpeg');
                res.setHeader('Content-Length', buf.length);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                res.end(buf);
                return;
              }
            }
          }
        }

        if (!req.url?.startsWith('/propuestas/')) return next();
        const file = resolveFile(req.url);
        if (!file) {
          res.statusCode = 404;
          res.end();
          return;
        }
        const buf = fs.readFileSync(file);
        res.setHeader('Content-Type', MIME[path.extname(file).toLowerCase()] || 'application/octet-stream');
        res.setHeader('Content-Length', buf.length);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        if (req.method === 'HEAD') {
          res.statusCode = 200;
          res.end();
          return;
        }
        res.end(buf);
      });
    },
    closeBundle() {
      removePublicPropuestasIndex();
      if (!fs.existsSync(root)) return;
      const destRoot = path.resolve(__dirname, 'dist/propuestas');
      fs.mkdirSync(destRoot, { recursive: true });
      for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
        if (
          !entry.isDirectory() ||
          entry.name.startsWith('_') ||
          entry.name.startsWith('.') ||
          OFFLINE_SLUGS.has(entry.name) ||
          HIDDEN_SLUGS.has(entry.name)
        )
          continue;
        const folder = path.join(root, entry.name);
        const dest = path.join(destRoot, entry.name);
        try {
          if (isAppFolder(folder)) {
            const built = path.join(folder, 'dist');
            if (fs.existsSync(built)) fs.cpSync(built, dest, { recursive: true });
            const meta = path.join(folder, 'meta.json');
            if (fs.existsSync(meta)) {
              fs.mkdirSync(dest, { recursive: true });
              fs.copyFileSync(meta, path.join(dest, 'meta.json'));
            }
          } else {
            fs.cpSync(folder, dest, {
              recursive: true,
              filter: (src) => !src.includes(`${path.sep}node_modules${path.sep}`) && !src.endsWith(`${path.sep}node_modules`),
            });
          }
        } catch (err) {
          console.warn(`[closeBundle] Advertencia al copiar ${entry.name}:`, (err as Error).message);
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), propuestasPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: {
        ignored: [
          '**/propuestas/**/dist/**',
          '**/propuestas/**/.next/**',
          '**/propuestas/**/node_modules/**',
        ],
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            supabase: ['@supabase/supabase-js'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  };
});
