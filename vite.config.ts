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

function writePropuestasIndex(root: string) {
  const items: { slug: string; title: string; client: string; kind: 'app' | 'static' }[] = [];
  if (fs.existsSync(root)) {
    for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
      const folder = path.join(root, entry.name);
      let title = entry.name;
      let client = '';
      const metaPath = path.join(folder, 'meta.json');
      if (fs.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8')) as { title?: string; client?: string };
          title = meta.title || title;
          client = meta.client || '';
        } catch {
          /* ignore */
        }
      }
      items.push({ slug: entry.name, title, client, kind: isAppFolder(folder) ? 'app' : 'static' });
    }
  }
  fs.writeFileSync(
    path.resolve(__dirname, 'public', 'propuestas-index.json'),
    `${JSON.stringify({ items }, null, 2)}\n`,
  );
}

function propuestasPlugin(): Plugin {
  const root = path.resolve(__dirname, 'propuestas');

  const resolveFile = (urlPath: string) => {
    const rel = decodeURIComponent(urlPath.replace(/^\/propuestas\/?/, '')).split('?')[0];
    if (!rel || rel.includes('..')) return null;
    const parts = rel.split('/').filter(Boolean);
    const slug = parts[0];
    if (!slug || slug.startsWith('_') || slug.startsWith('.')) return null;

    const folder = path.join(root, slug);
    if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) return null;

    const rest = parts.slice(1).join('/') || 'index.html';
    const app = isAppFolder(folder);
    const bases = app ? [path.join(folder, 'dist'), folder] : [folder];

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
      writePropuestasIndex(root);
    },
    configureServer(server) {
      if (!fs.existsSync(root)) fs.mkdirSync(root, { recursive: true });
      writePropuestasIndex(root);
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/propuestas/')) return next();
        const file = resolveFile(req.url);
        if (!file) {
          res.statusCode = 404;
          res.end();
          return;
        }
        res.setHeader('Content-Type', MIME[path.extname(file).toLowerCase()] || 'application/octet-stream');
        if (req.method === 'HEAD') {
          res.statusCode = 200;
          res.end();
          return;
        }
        fs.createReadStream(file).pipe(res);
      });
    },
    closeBundle() {
      writePropuestasIndex(root);
      if (!fs.existsSync(root)) return;
      const destRoot = path.resolve(__dirname, 'dist/propuestas');
      fs.mkdirSync(destRoot, { recursive: true });
      for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
        if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
        const folder = path.join(root, entry.name);
        const dest = path.join(destRoot, entry.name);
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
    },
  };
});
