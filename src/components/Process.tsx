import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Process() {
  const { t } = useLanguage();
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-line bg-night py-24 md:py-32">
      <div className="shell">
        <div className="max-w-xl">
          <h2 id="process-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            {t.process.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-mist">{t.process.intro}</p>
        </div>

        <ol className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-0">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col lg:pr-10">
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 font-serif text-lg text-gold">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-2xl font-medium tracking-tight text-cream">{step.title}</h3>
              <p className="mt-1 text-sm text-gold/80">{step.when}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-mist">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
