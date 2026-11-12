import { site, SITE_URL } from '../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ld = (o: object) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;
const abs = (p: string) => `${SITE_URL}${p}`;

const business = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: site.name,
  url: abs('/'),
  image: abs('/og.jpg'),
  telephone: site.phone,
  email: site.email,
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

function baseTags({
  title,
  description,
  path,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd: object[];
}): string {
  const url = abs(path);
  const image = abs('/og.jpg');
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
    ...jsonLd.map(ld),
  ].join('\n    ');
}

/** Static <head> tags for the home page (title, description, canonical, OG, JSON-LD). */
export function headTags(): string {
  const description = 'Web design and landing-page agency in Galata, Istanbul. Bilingual Turkish/English sites for spas, clinics, tattoo studios and model agencies.';
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: site.name,
    url: abs('/'),
    publisher: { '@id': `${SITE_URL}/#business` },
  };
  return baseTags({
    title: `${site.name} | Web Design & Landing Page Agency in Istanbul`,
    description,
    path: '/',
    jsonLd: [{ ...business, description }, website],
  });
}

/** Static <head> tags for the /addagio partner page. */
export function addagioHeadTags(): string {
  const description = 'Galata Studio is an Addagio partner agency: every site we build comes natively wired to the Addagio booking platform, with 6 months free for our clients.';
  const offer = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${SITE_URL}/addagio#offer`,
    name: '6 months of Addagio free for Galata Studio clients',
    url: abs('/addagio'),
    seller: { '@id': `${SITE_URL}/#business` },
  };
  return baseTags({
    title: `Addagio Booking, Built In | ${site.name}`,
    description,
    path: '/addagio',
    jsonLd: [{ ...business, description }, offer],
  });
}

/** Static <head> tags for the /addagio/turkey localized partner page. */
export function addagioTurkeyHeadTags(): string {
  const description = 'Galata Studio, Addagio’nun Türkiye’deki ajans partneridir. Randevu alan işletmeler için sitenizi Addagio’ya baştan entegre kuruyoruz — ilk 6 ay ücretsiz.';
  const offer = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${SITE_URL}/addagio/turkey#offer`,
    name: 'Galata Studio müşterileri için 6 ay ücretsiz Addagio',
    url: abs('/addagio/turkey'),
    seller: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
  };
  return baseTags({
    title: `Addagio Rezervasyon Sistemi | ${site.name} Türkiye`,
    description,
    path: '/addagio/turkey',
    jsonLd: [{ ...business, description }, offer],
  });
}

/** Static <head> tags for the Addagio partnership announcement post. */
export function blogAddagioPartnershipHeadTags(): string {
  const description = 'Galata Studio is now an official Addagio agency partner — every site we build comes natively wired to Addagio booking, with 6 months free for our clients.';
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/addagio-partnership#article`,
    headline: 'Galata Studio is now an official Addagio agency partner',
    description,
    url: abs('/blog/addagio-partnership'),
    datePublished: '2026-11-12',
    author: { '@id': `${SITE_URL}/#business` },
    publisher: { '@id': `${SITE_URL}/#business` },
  };
  return baseTags({
    title: `Galata Studio × Addagio Partnership | ${site.name}`,
    description,
    path: '/blog/addagio-partnership',
    jsonLd: [{ ...business, description }, article],
  });
}
