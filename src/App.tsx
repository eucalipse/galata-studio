import React from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { Landing } from './pages/Landing';
import { AddagioPage } from './pages/AddagioPage';

export function App({ path = '/' }: { path?: string }) {
  const page = path.replace(/\/$/, '') || '/';

  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider defaultLang="tr">
        {page === '/addagio' ? <AddagioPage /> : <Landing />}
      </LanguageProvider>
    </MotionConfig>
  );
}
