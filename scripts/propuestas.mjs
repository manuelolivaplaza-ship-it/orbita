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

function slugs() {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
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

export function exportNextDist(slug) {
  const dir = path.join(root, slug);
  const dist = path.join(dir, 'dist');
  fs.mkdirSync(dist, { recursive: true });

  const pub = path.join(dir, 'public');
  if (fs.existsSync(pub)) {
    fs.cpSync(pub, dist, { recursive: true });
  }

  const nextStatic = path.join(dir, '.next', 'static');
  if (fs.existsSync(nextStatic)) {
    fs.cpSync(nextStatic, path.join(dist, '_next', 'static'), { recursive: true });
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

    // 3. Limpieza de seguridad ante cualquier doble prefijo
    const doublePrefixRegex = new RegExp(`/propuestas/${slug}/propuestas/${slug}/`, 'g');
    content = content.replace(doublePrefixRegex, `/propuestas/${slug}/`);

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
  return true;
}

function run(bin, args, cwd, envExtra = {}) {
  const result = spawnSync(bin, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, ...envExtra },
  });
  if (result.status) process.exit(result.status ?? 1);
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

  console.log(`→ Construyendo propuesta aislada: ${slug}`);
  if (isNext(dir)) {
    const appServerIndex = path.join(dir, '.next', 'server', 'app', 'index.html');
    if (!fs.existsSync(appServerIndex)) {
      if (shouldInstall(dir)) {
        run('npm', ['install', '--include=dev'], dir, {
          NODE_ENV: 'development',
          npm_config_production: 'false',
        });
      }
      run('npx', ['next', 'build'], dir, {
        NEXT_TELEMETRY_DISABLED: '1',
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

if (cmd === 'build') {
  const list = slugs().filter((slug) => !only || only === slug);
  for (const slug of list) buildOne(slug);
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

console.error('Comandos: build | dev');
process.exit(1);
