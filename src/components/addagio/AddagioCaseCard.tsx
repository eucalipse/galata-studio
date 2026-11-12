import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { AddagioCase } from '../../data/addagio';
import { ArrowIcon } from '../icons/ArrowIcon';

const categoryLabel = {
  tr: { spa: 'Spa & Güzellik', tattoo: 'Dövme Stüdyosu', medical: 'Medikal & Klinik', model: 'Model Ajansı' },
  en: { spa: 'Spa & Beauty', tattoo: 'Tattoo Studio', medical: 'Medical & Clinic', model: 'Model Agency' },
};

export function AddagioCaseCard({ item }: { item: AddagioCase }) {
  const { lang } = useLanguage();
  const bookingUrl = `https://addagio.io/book/${item.slug}`;
  const visitLabel = lang === 'tr' ? 'Addagio sayfasını gör' : 'View Addagio page';

  return (
    <article className="group flex flex-col gap-3 border-t border-line pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight text-cream">{item.name}</h3>
        <span className="shrink-0 text-xs text-mist">{item.city}</span>
      </div>
      <p className="text-xs uppercase tracking-[0.12em] text-gold/80">{categoryLabel[lang][item.category]}</p>
      <code className="w-fit rounded-full border border-line px-3 py-1 text-xs text-mist">addagio.io/book/{item.slug}</code>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-1 inline-flex w-fit items-center gap-2 text-sm text-cream/80 transition-colors duration-150 ease-out hover:text-gold-soft"
      >
        {visitLabel}
        <ArrowIcon direction="up-right" className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
