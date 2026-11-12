import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { addagioCopy } from '../../data/addagioCopy';
import { addagioCases } from '../../data/addagio';
import { AddagioCaseCard } from './AddagioCaseCard';

export function AddagioCases() {
  const { lang } = useLanguage();
  const c = addagioCopy[lang].cases;

  return (
    <section id="cases" aria-labelledby="cases-title" className="border-b border-line bg-night py-24 md:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <h2 id="cases-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-mist">{c.intro}</p>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {addagioCases.map((item) => (
            <li key={item.id}>
              <AddagioCaseCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
