import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { addagioCopy } from '../../data/addagioCopy';

export function AddagioHow() {
  const { lang } = useLanguage();
  const c = addagioCopy[lang].how;

  return (
    <section aria-labelledby="how-title" className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <h2 id="how-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          {c.title}
        </h2>

        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {c.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 font-serif text-lg text-gold">
                {i + 1}
              </span>
              <h3 className="mt-7 text-xl font-medium tracking-tight text-cream">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
