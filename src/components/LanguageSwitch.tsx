import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Lang } from '../types/content';

const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
];

export function LanguageSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div role="group" aria-label="Language / Dil" className={`inline-flex rounded-full border border-line p-0.5 text-xs font-medium ${className}`}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          aria-pressed={lang === l.code}
          aria-label={l.name}
          onClick={() => setLang(l.code)}
          className={`focus-ring rounded-full px-3 py-1.5 tracking-wide transition-colors duration-150 ease-out ${
            lang === l.code ? 'bg-cream text-ink' : 'text-mist hover:text-cream'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
