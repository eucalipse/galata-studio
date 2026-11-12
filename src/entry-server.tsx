import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { headTags } from './seo/head';
import { SITE_URL } from './data/site';

export { SITE_URL };

/** Single page, single entry point — language toggle is client-side only. */
export function getRoutes() {
  return [{ url: '/', dir: 'ltr' as const }];
}

export function render() {
  return { html: renderToString(<App />), head: headTags() };
}
