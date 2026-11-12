import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { headTags, addagioHeadTags } from './seo/head';
import { SITE_URL } from './data/site';

export { SITE_URL };

/** Two static routes, prerendered separately for SEO — language toggle stays client-side only. */
export function getRoutes() {
  return [
    { url: '/', dir: 'ltr' as const },
    { url: '/addagio', dir: 'ltr' as const },
  ];
}

export function render(path: string = '/') {
  const head = path.replace(/\/$/, '') === '/addagio' ? addagioHeadTags() : headTags();
  return { html: renderToString(<App path={path} />), head };
}
