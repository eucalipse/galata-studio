import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { headTags, addagioHeadTags, addagioTurkeyHeadTags, blogAddagioPartnershipHeadTags, workCaseStudyHeadTags } from './seo/head';
import { SITE_URL } from './data/site';
import { projects } from './data/projects';

export { SITE_URL };

/** Static routes, each prerendered separately for SEO — language toggle stays client-side only (except /addagio/turkey, which is locked to Turkish). */
export function getRoutes() {
  return [
    { url: '/', dir: 'ltr' as const },
    { url: '/addagio', dir: 'ltr' as const },
    { url: '/addagio/turkey', dir: 'ltr' as const },
    { url: '/blog/addagio-partnership', dir: 'ltr' as const },
    ...projects.map((p) => ({ url: `/work/${p.id}`, dir: 'ltr' as const })),
  ];
}

const headByPath: Record<string, () => string> = {
  '/addagio': addagioHeadTags,
  '/addagio/turkey': addagioTurkeyHeadTags,
  '/blog/addagio-partnership': blogAddagioPartnershipHeadTags,
};

export function render(path: string = '/') {
  const clean = path.replace(/\/$/, '') || '/';
  let head: string;
  if (headByPath[clean]) {
    head = headByPath[clean]();
  } else if (clean.startsWith('/work/')) {
    const project = projects.find((p) => p.id === clean.slice('/work/'.length));
    head = project ? workCaseStudyHeadTags(project) : headTags();
  } else {
    head = headTags();
  }
  return { html: renderToString(<App path={path} />), head };
}
