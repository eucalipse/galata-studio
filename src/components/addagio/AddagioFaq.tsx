import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { addagioCopy } from '../../data/addagioCopy';

export function AddagioFaq() {
  const { lang } = useLanguage();
  const c = addagioCopy[lang].faq;

  return (
    <section aria-labelledby="faq-title" className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <h2 id="faq-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          {c.title}
        </h2>

        <dl className="mt-12 max-w-2xl border-t border-line">
          {c.items.map((item) => (
            <div key={item.q} className="border-b border-line py-7">
              <dt className="text-lg font-medium text-cream">{item.q}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-mist">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
