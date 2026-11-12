import { site, SITE_URL } from '../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ld = (o: object) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;
const abs = (p: string) => `${SITE_URL}${p}`;

/** Static <head> tags for the single prerendered page (title, description, canonical, OG, JSON-LD). */
export function headTags(): string {
  const title = `${site.name} | Web Design & Landing Page Agency in Istanbul`;
  const description = 'Web design and landing-page agency in Galata, Istanbul. Bilingual Turkish/English sites for spas, clinics, tattoo studios and model agencies.';
  const url = abs('/');
  const image = abs('/og.jpg');

  const business = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: site.name,
    url,
    image,
    telephone: site.phone,
    email: site.email,
    description,
    priceRange: '$$',
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: 'İstanbul',
      addressRegion: 'Beyoğlu',
      addressCountry: 'TR',
    },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    sameAs: ['https://eucalipse.com'],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: site.name,
    url,
    publisher: { '@id': `${SITE_URL}/#business` },
  };

  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:site_name" content="${esc(site.name)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:locale" content="tr_TR">`,
    `<meta property="og:locale:alternate" content="en_US">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    ld(business),
    ld(website),
  ].join('\n    ');
}
