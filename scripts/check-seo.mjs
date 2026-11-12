/**
 * SEO checks on the built dist/ (run after `npm run build`): `npm run check`.
 * Checks every page listed in sitemap.xml: title, meta description, canonical, JSON-LD, no broken internal links.
 */
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const SITE = (sitemap.match(/<loc>(https?:\/\/[^/<]+)/) ?? [])[1];
const pages = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

const decode = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
const exists = (path) => {
  const clean = path.split('#')[0].split('?')[0];
  if (!clean) return true;
  const f = join(dist, decodeURIComponent(clean));
  return existsSync(f) && (statSync(f).isFile() || existsSync(join(f, 'index.html')));
};

const errors = [];
for (const page of pages) {
  const file = join(dist, page, 'index.html');
  if (!existsSync(file)) {
    errors.push(`${page}: missing index.html`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const expectedCanonical = `${SITE}${page}`;

  if (!title) errors.push(`${page}: no title`);
  if (!desc) errors.push(`${page}: no description`);
  if (desc && (desc.length < 70 || desc.length > 175)) errors.push(`${page}: description length ${desc.length}`);
  if (canonical !== expectedCanonical) errors.push(`${page}: canonical ${canonical}`);
  if (!html.includes('application/ld+json')) errors.push(`${page}: no JSON-LD`);
  for (const m of html.matchAll(/<a [^>]*href="(\/[^"]*)"/g)) if (!exists(m[1])) errors.push(`${page}: broken link ${m[1]}`);
}
for (const f of ['sitemap.xml', 'robots.txt']) if (!existsSync(join(dist, f))) errors.push(`missing ${f}`);

console.log(`${pages.length} page(s) checked`);
if (errors.length) {
  console.log(errors.join('\n'));
  console.log(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log('OK: title, description, canonical, JSON-LD, links, sitemap/robots fine');
