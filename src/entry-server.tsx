import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { headTags, addagioHeadTags, addagioTurkeyHeadTags, blogAddagioPartnershipHeadTags } from './seo/head';
import { SITE_URL } from './data/site';

export { SITE_URL };

/** Static routes, each prerendered separately for SEO — language toggle stays client-side only (except /addagio/turkey, which is locked to Turkish). */
export function getRoutes() {
  return [
    { url: '/', dir: 'ltr' as const },
    { url: '/addagio', dir: 'ltr' as const },
    { url: '/addagio/turkey', dir: 'ltr' as const },
    { url: '/blog/addagio-partnership', dir: 'ltr' as const },
  ];
}

const headByPath: Record<string, () => string> = {
  '/addagio': addagioHeadTags,
  '/addagio/turkey': addagioTurkeyHeadTags,
  '/blog/addagio-partnership': blogAddagioPartnershipHeadTags,
};

export function render(path: string = '/') {
  const clean = path.replace(/\/$/, '') || '/';
  const head = (headByPath[clean] ?? headTags)();
  return { html: renderToString(<App path={path} />), head };
}
