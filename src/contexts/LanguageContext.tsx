import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { copy, type Copy } from '../data/copy';
import type { Lang } from '../types/content';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
}

const STORAGE_KEY = 'galata-lang';

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  defaultLang = 'tr',
  lockedLang,
}: {
  children: React.ReactNode;
  defaultLang?: Lang;
  /** When set, the page never switches language (e.g. a locale-specific route like /addagio/turkey). */
  lockedLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (lockedLang) return lockedLang;
    if (typeof window === 'undefined') return defaultLang;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'tr' || stored === 'en' ? stored : defaultLang;
  });

  const setLang = lockedLang ? () => {} : setLangState;

  useEffect(() => {
    document.documentElement.lang = lang;
    if (!lockedLang) window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, lockedLang]);

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
