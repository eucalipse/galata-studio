/**
 * Static prerender: one dist/<route>/index.html per route from getRoutes(), plus sitemap.xml and robots.txt.
 * Runs after `vite build` (client) and the SSR build (dist/server).
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const templatePath = join(dist, '.template.html');
const builtIndex = readFileSync(join(dist, 'index.html'), 'utf8');
if (builtIndex.includes('<!--app-html-->')) writeFileSync(templatePath, builtIndex);
const template = readFileSync(templatePath, 'utf8');

const { render, getRoutes, SITE_URL } = await import(pathToFileURL(join(dist, 'server', 'entry-server.js')).href);

for (const route of getRoutes()) {
  const { html, head } = render(route.url);
  const page = template
    .replace('<html lang="tr">', `<html lang="tr" dir="${route.dir}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);

  const outDir = route.url === '/' ? dist : join(dist, route.url.replace(/^\//, ''));
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), page);
}

const today = new Date().toISOString().slice(0, 10);
const urls = getRoutes()
  .map((r) => `  <url>\n    <loc>${SITE_URL}${r.url === '/' ? '/' : r.url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'Googlebot'];
writeFileSync(join(dist, 'robots.txt'), `${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

rmSync(join(dist, 'server'), { recursive: true, force: true });
rmSync(templatePath, { force: true });
console.log(`Prerendered ${getRoutes().length} page(s) + sitemap.xml, robots.txt → dist/`);
