import React from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { Landing } from './pages/Landing';
import { AddagioPage } from './pages/AddagioPage';
import { AddagioTurkeyPage } from './pages/AddagioTurkeyPage';
import { BlogAddagioPartnershipPage } from './pages/BlogAddagioPartnershipPage';
import { WorkCaseStudyPage } from './pages/WorkCaseStudyPage';
import { projects } from './data/projects';

export function App({ path = '/' }: { path?: string }) {
  const page = path.replace(/\/$/, '') || '/';

  let content = <Landing />;
  if (page === '/addagio') content = <AddagioPage />;
  if (page === '/addagio/turkey') content = <AddagioTurkeyPage />;
  if (page === '/blog/addagio-partnership') content = <BlogAddagioPartnershipPage />;
  if (page.startsWith('/work/')) {
    const slug = page.slice('/work/'.length);
    const project = projects.find((p) => p.id === slug);
    if (project) content = <WorkCaseStudyPage project={project} />;
  }

  const lockedLang = page === '/addagio/turkey' ? 'tr' : undefined;

  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider defaultLang="tr" lockedLang={lockedLang}>
        {content}
      </LanguageProvider>
    </MotionConfig>
  );
}
