import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { addagioCopy } from '../../data/addagioCopy';
import { ArrowIcon } from '../icons/ArrowIcon';

export function AddagioFinalCta() {
  const { lang } = useLanguage();
  const c = addagioCopy[lang].final;

  return (
    <section aria-labelledby="addagio-final-title" className="bg-night py-24 md:py-32">
      <div className="shell text-center">
        <h2 id="addagio-final-title" className="mx-auto max-w-2xl text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-mist">{c.sub}</p>
        <a href="/#contact" className="btn-primary mt-9 inline-flex">
          {c.cta}
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
