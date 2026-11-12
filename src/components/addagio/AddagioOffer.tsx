import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { addagioCopy } from '../../data/addagioCopy';

export function AddagioOffer() {
  const { lang } = useLanguage();
  const c = addagioCopy[lang].offer;

  return (
    <section id="offer" aria-labelledby="offer-title" className="border-b border-line bg-night py-24 md:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <span className="w-fit rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">6 / 6</span>
          <h2 id="offer-title" className="mt-5 text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-mist">{c.body}</p>
        </div>

        <dl className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          {c.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <dt className="text-lg font-medium tracking-tight text-cream">{item.title}</dt>
              <dd className="text-[15px] leading-relaxed text-mist">{item.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
