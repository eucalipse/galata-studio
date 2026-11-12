import React from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { Landing } from './pages/Landing';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider defaultLang="tr">
        <Landing />
      </LanguageProvider>
    </MotionConfig>
  );
}
