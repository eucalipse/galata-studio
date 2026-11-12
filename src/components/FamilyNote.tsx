import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowIcon } from './icons/ArrowIcon';

export function FamilyNote() {
  const { t } = useLanguage();
  return (
    <div className="border-b border-line">
      <div className="shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-mist">
          <span className="text-cream">{t.family.lead}</span> {t.family.body}
        </p>
        <a
          href="https://eucalipse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex w-fit shrink-0 items-center gap-2 rounded text-sm text-cream/80 transition-colors duration-150 ease-out hover:text-gold-soft"
        >
          eucalipse.com
          <ArrowIcon direction="up-right" className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
