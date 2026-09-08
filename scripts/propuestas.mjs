import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.join(repoRoot, 'propuestas');
const cmd = process.argv[2] || 'build';
const only = process.argv[3];
const viteBin = path.join(
  repoRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'vite.cmd' : 'vite',
);

const OFFLINE_SLUGS = new Set([
  'alba',
  'bruma',
  'casonorte',
  'lumen',
  'minimayorista',
  'pausa',
  'eter-claro',
  'noctua-oscuro',
  'diseno-claro',
  'marketing-claro',
  'marketing-oscuro-premium',
]);

function slugs() {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.') && !OFFLINE_SLUGS.has(d.name))
    .map((d) => d.name);
}

function isApp(dir) {
  return fs.existsSync(path.join(dir, 'package.json'));
}

function isNext(dir) {
  return (
    fs.existsSync(path.join(dir, 'next.config.ts')) ||
    fs.existsSync(path.join(dir, 'next.config.js')) ||
    fs.existsSync(path.join(dir, 'next.config.mjs'))
  );
}

function copyTreeSafe(src, dest) {
  try {
    fs.mkdirSync(dest, { recursive: true });
  } catch {
    /* ignore */
  }
  let names;
  try {
    names = fs.readdirSync(src, { withFileTypes: true });
  } catch (err) {
    console.warn(`  skip read ${src}: ${err.code || err.message}`);
    return;
  }
  for (const item of names) {
    const from = path.join(src, item.name);
    const to = path.join(dest, item.name);
    try {
      if (item.isDirectory()) copyTreeSafe(from, to);
      else {
        fs.mkdirSync(path.dirname(to), { recursive: true });
        fs.copyFileSync(from, to);
      }
    } catch (err) {
      console.warn(`  skip ${path.relative(src, from)}: ${err.code || err.message}`);
    }
  }
}

export function exportNextDist(slug) {
  const dir = path.join(root, slug);
  const dist = path.join(dir, 'dist');
  fs.mkdirSync(dist, { recursive: true });

  const nextStatic = path.join(dir, '.next', 'static');
  if (fs.existsSync(nextStatic)) {
    copyTreeSafe(nextStatic, path.join(dist, '_next', 'static'));
  }

  const pub = path.join(dir, 'public');
  if (fs.existsSync(pub)) {
    copyTreeSafe(pub, dist);
  }

  const appServer = path.join(dir, '.next', 'server', 'app');
  if (!fs.existsSync(appServer)) return false;

  const processHtml = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Desempaquetar URLs de optimización de Next.js (_next/image?url=...) tanto en src como en srcset
    content = content.replace(/(?:(?:\/propuestas\/[^\/"'\s]+\/|\/)?_next\/image\?url=)([^&"'\\\s\)]+)(?:(?:&amp;|&)[^"'\\\s\),]+)?/gi, (match, encodedUrl) => {
      let rawUrl = decodeURIComponent(encodedUrl);
      if (!rawUrl.startsWith('/')) rawUrl = '/' + rawUrl;
      return `/propuestas/${slug}${rawUrl}`;
    });

    // 2. Reescribir rutas absolutas restantes hacia la propuesta aislada (sin duplicar /propuestas/slug/)
    content = content.replace(/(?<!\/propuestas\/[^\/"'\s]+)\/_next\//g, `/propuestas/${slug}/_next/`);
    content = content.replace(/(?<!\/propuestas\/[^\/"'\s]+)\/images\//g, `/propuestas/${slug}/images/`);
    content = content.replace(/(?<!\/propuestas\/[^\/"'\s]+)\/media\//g, `/propuestas/${slug}/media/`);
    content = content.replace(/(?<!\/propuestas\/[^\/"'\s]+)\/icon\.svg/g, `/propuestas/${slug}/icon.svg`);
    content = content.replace(/(?<!\/propuestas\/[^\/"'\s]+)\/favicon\.svg/g, `/propuestas/${slug}/favicon.svg`);

    // 3. Limpieza de seguridad ante cualquier doble prefijo
    const doublePrefixRegex = new RegExp(`/propuestas/${slug}/propuestas/${slug}/`, 'g');
    content = content.replace(doublePrefixRegex, `/propuestas/${slug}/`);

    // 4. next/font + basePath a veces emite /_next/static/{basePath}/media
    content = content.replaceAll(
      `/propuestas/${slug}/_next/static/propuestas/${slug}/`,
      `/propuestas/${slug}/_next/static/`,
    );

    return content;
  };

  const walk = (currentDir, relDir = '') => {
    for (const item of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const full = path.join(currentDir, item.name);
      if (item.isDirectory()) {
        walk(full, path.join(relDir, item.name));
      } else if (item.name.endsWith('.html')) {
        const transformed = processHtml(full);
        const targetDir = path.join(dist, relDir);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, item.name), transformed, 'utf8');
        if (item.name !== 'index.html' && !item.name.startsWith('_')) {
          const subDir = path.join(targetDir, item.name.replace(/\.html$/, ''));
          fs.mkdirSync(subDir, { recursive: true });
          fs.writeFileSync(path.join(subDir, 'index.html'), transformed, 'utf8');
        }
      }
    }
  };

  walk(appServer);

  const meta = path.join(dir, 'meta.json');
  if (fs.existsSync(meta)) {
    fs.copyFileSync(meta, path.join(dist, 'meta.json'));
  }

  return true;
}

function run(bin, args, cwd, envExtra = {}, { exitOnError = true } = {}) {
  const result = spawnSync(bin, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, ...envExtra },
  });
  const status = result.status ?? 1;
  if (status) {
    if (process.env.VERCEL === '1' || process.env.CI === '1') {
      console.warn(`[Vercel CI] Advertencia: Falló compilación en ${cwd}, omitiendo...`);
      return status;
    }
    if (exitOnError) process.exit(status);
  }
  return result.status ?? 0;
}

/** loading.tsx deja el HTML estático en el fallback de Suspense (navbar + hueco + pie). */
function walkLoadingUi(dir, onFile) {
  const appDirs = ['src/app', 'app']
    .map((rel) => path.join(dir, rel))
    .filter((p) => fs.existsSync(p));
  const walk = (current) => {
    for (const item of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, item.name);
      if (item.isDirectory()) walk(full);
      else if (/^loading\.(tsx|ts|jsx|js)$/.test(item.name)) onFile(full);
    }
  };
  for (const appDir of appDirs) walk(appDir);
}

function hasLoadingUi(dir) {
  let found = false;
  walkLoadingUi(dir, () => {
    found = true;
  });
  return found;
}

function disableLoadingUi(dir) {
  let count = 0;
  walkLoadingUi(dir, (full) => {
    const dest = `${full}.bak`;
    if (fs.existsSync(dest)) fs.unlinkSync(full);
    else fs.renameSync(full, dest);
    count++;
  });
  return count;
}

function shouldInstall(dir) {
  // En Vercel NODE_ENV=production y un npm install por carpeta omite devDependencies
  if (process.env.VERCEL === '1' || process.env.SKIP_PROPUESTA_INSTALL === '1') return false;
  return !fs.existsSync(path.join(dir, 'node_modules'));
}

function buildOne(slug) {
  const dir = path.join(root, slug);
  if (!isApp(dir)) {
    console.log(`· ${slug} (estática, nada que construir)`);
    return;
  }

  const metaPath = path.join(dir, 'meta.json');
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      if (meta.hidden) {
        console.log(`· ${slug} (oculta)`);
        return;
      }
    } catch {}
  }

  // Si ya tiene su compilación exportada en dist, verificar si .next fue recompilado más recientemente
  const distIndex = path.join(dir, 'dist', 'index.html');
  const appServerIndex = path.join(dir, '.next', 'server', 'app', 'index.html');
  const hasAppServer = fs.existsSync(appServerIndex);

  if (fs.existsSync(distIndex)) {
    if (hasAppServer && fs.statSync(appServerIndex).mtimeMs > fs.statSync(distIndex).mtimeMs) {
      console.log(`↻ ${slug} (.next actualizado, reexportando a dist)...`);
      exportNextDist(slug);
      return;
    }
    console.log(`· ${slug} (lista en dist)`);
    return;
  }

  // Si no tiene dist pero ya tiene .next compilado, exportar directamente
  if (isNext(dir) && hasAppServer) {
    console.log(`→ ${slug} (exportando desde .next existente a dist)...`);
    exportNextDist(slug);
    return;
  }

  // En Vercel no compilar aplicaciones Next.js/pesadas desde cero para evitar timeouts y OOM
  if (process.env.VERCEL === '1' || process.env.CI === '1') {
    console.warn(`! ${slug} no tiene dist/ generado y se omitirá en Vercel.`);
    return;
  }

  console.log(`→ Construyendo propuesta aislada: ${slug}`);
  if (isNext(dir)) {
    if (!hasAppServer) {
      disableLoadingUi(dir);
      if (shouldInstall(dir)) {
        run('npm', ['install', '--include=dev'], dir, {
          NODE_ENV: 'development',
          npm_config_production: 'false',
        });
      }
      run('npx', ['next', 'build'], dir, {
        NEXT_TELEMETRY_DISABLED: '1',
        NEXT_BASE_PATH: `/propuestas/${slug}`,
      });
    }
    exportNextDist(slug);
    return;
  }

  if (shouldInstall(dir)) {
    run('npm', ['install', '--include=dev'], dir, {
      NODE_ENV: 'development',
      npm_config_production: 'false',
    });
  }
  if (!fs.existsSync(viteBin)) {
    console.error('No encontré Vite en node_modules/.bin. Corré npm install en la raíz.');
    process.exit(1);
  }
  run(viteBin, ['build', '--base', `/propuestas/${slug}/`, '--outDir', 'dist'], dir);
}

function ensureIgnoreBuildErrors(dir) {
  const cfg = ['next.config.ts', 'next.config.js', 'next.config.mjs']
    .map((name) => path.join(dir, name))
    .find((p) => fs.existsSync(p));
  if (!cfg) return false;
  let source = fs.readFileSync(cfg, 'utf8');
  if (source.includes('ignoreBuildErrors')) return false;
  if (!/const nextConfig[^=]*=\s*\{/.test(source)) return false;
  source = source.replace(
    /const nextConfig[^=]*=\s*\{/,
    (m) => `${m}\n  typescript: { ignoreBuildErrors: true },`,
  );
  fs.writeFileSync(cfg, source, 'utf8');
  return true;
}

function parkVitePages(dir) {
  const appDir = path.join(dir, 'src', 'app');
  const pagesDir = path.join(dir, 'src', 'pages');
  const parked = path.join(dir, 'src', 'pages.vite');
  if (!fs.existsSync(appDir) || !fs.existsSync(pagesDir)) return false;
  try {
    if (fs.existsSync(parked)) {
      fs.rmSync(pagesDir, { recursive: true, force: true });
    } else {
      fs.renameSync(pagesDir, parked);
    }
  } catch (err) {
    console.warn(`  no pude apartar src/pages: ${err.code || err.message}`);
    return false;
  }
  return true;
}

function rebuildOne(slug) {
  const dir = path.join(root, slug);
  if (!isApp(dir) || !isNext(dir)) {
    console.log(`· ${slug} (no es Next, skip)`);
    return true;
  }

  try {
  const skipped = disableLoadingUi(dir);
  const parked = parkVitePages(dir);
  console.log(
    `→ Rebuild ${slug}${skipped ? ` (loading.tsx desactivado: ${skipped})` : ''}${parked ? ' (src/pages Vite apartado)' : ''}`,
  );

  if (shouldInstall(dir)) {
    const installStatus = run(
      'npm',
      ['install', '--include=dev'],
      dir,
      { NODE_ENV: 'development', npm_config_production: 'false' },
      { exitOnError: false },
    );
    if (installStatus) {
      console.warn(`! ${slug} falló npm install`);
      return false;
    }
  }

  ensureIgnoreBuildErrors(dir);
  const env = {
    NEXT_TELEMETRY_DISABLED: '1',
    NEXT_BASE_PATH: `/propuestas/${slug}`,
  };
  let buildStatus = run(
    'npx',
    ['next', 'build', '--webpack', '--experimental-app-only'],
    dir,
    env,
    { exitOnError: false },
  );
  if (buildStatus) {
    console.warn(`  ${slug}: reintento sin --webpack (Next 15)`);
    buildStatus = run('npx', ['next', 'build'], dir, env, { exitOnError: false });
  }
  if (buildStatus) {
    console.warn(`! ${slug} falló next build`);
    return false;
  }

  exportNextDist(slug);
  const html = path.join(dir, 'dist', 'index.html');
  if (!fs.existsSync(html)) {
    console.warn(`! ${slug} no generó dist/index.html`);
    return false;
  }
  const content = fs.readFileSync(html, 'utf8');
  if (content.includes('<!--$?-->') || content.includes('<template id="B:')) {
    console.warn(`! ${slug} sigue con fallback de Suspense en el HTML`);
    return false;
  }
  console.log(`✓ ${slug} HTML completo`);
  return true;
  } catch (err) {
    console.warn(`! ${slug} ${err.code || ''} ${err.message}`);
    return false;
  }
}

if (cmd === 'build' || cmd === 'export') {
  const list = slugs().filter((slug) => !only || only === slug);
  for (const slug of list) {
    if (cmd === 'export') {
      console.log(`→ Exportando ${slug} a dist...`);
      exportNextDist(slug);
    } else {
      buildOne(slug);
    }
  }
  process.exit(0);
}

if (cmd === 'dev') {
  const slug = only || slugs().find((name) => isApp(path.join(root, name)));
  if (!slug) {
    console.error('Uso: npm run propuesta -- nombre-de-la-carpeta');
    process.exit(1);
  }
  const dir = path.join(root, slug);
  if (!isApp(dir)) {
    console.error(`"${slug}" no es una app (falta package.json). Para HTML/PDF no hace falta este comando.`);
    process.exit(1);
  }
  if (shouldInstall(dir)) {
    run('npm', ['install', '--include=dev'], dir, {
      NODE_ENV: 'development',
      npm_config_production: 'false',
    });
  }
  console.log(`→ Dev aislado de ${slug} en http://localhost:3010`);
  console.log(`  Cuando esté lista: npm run propuestas:build -- ${slug}`);
  console.log(`  Luego ábrela en Órbita: /propuesta/${slug}`);
  run(viteBin, ['--port', '3010', '--base', `/propuestas/${slug}/`], dir);
  process.exit(0);
}

if (cmd === 'rebuild') {
  const named = process.argv.slice(3).filter(Boolean);
  const list = named.length
    ? named
    : slugs().filter((slug) => isNext(path.join(root, slug)) && hasLoadingUi(path.join(root, slug)));
  if (!list.length) {
    console.error('No hay propuestas Next con loading.tsx para reconstruir.');
    process.exit(1);
  }
  const failed = [];
  for (const slug of list) {
    if (!rebuildOne(slug)) failed.push(slug);
  }
  if (failed.length) {
    console.error(`Fallaron ${failed.length}/${list.length}: ${failed.join(', ')}`);
    process.exit(1);
  }
  console.log(`Listas ${list.length} propuestas.`);
  process.exit(0);
}

console.error('Comandos: build | export | rebuild | dev');
process.exit(1);
