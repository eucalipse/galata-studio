import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function WhyUs() {
  const { t } = useLanguage();
  return (
    <section id="why" aria-labelledby="why-title" className="border-t border-line py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="why-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            {t.why.title}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-mist">{t.why.intro}</p>

          <dl className="mt-12 border-t border-line">
            {t.why.points.map((p) => (
              <div key={p.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-6">
                <dt className="font-medium text-cream">{p.title}</dt>
                <dd className="text-[15px] leading-relaxed text-mist">{p.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col lg:col-span-6 lg:col-start-7">
          <span className="w-fit rounded-full border border-line px-3 py-1 text-xs text-mist">{t.why.badge}*</span>

          <div className="mt-8">
            <p className="font-serif text-[clamp(6rem,16vw,12rem)] leading-[0.85] text-gold">{t.why.primary.value}</p>
            <p className="mt-4 text-lg text-cream">{t.why.primary.label}</p>
          </div>

          <dl className="mt-14 grid grid-cols-3 border-t border-line">
            {t.why.secondary.map((s, i) => (
              <div key={s.label} className={`flex flex-col py-6 ${i > 0 ? 'border-l border-line pl-4 md:pl-6' : 'pr-4'}`}>
                <dt className="order-2 mt-2 text-sm leading-snug text-mist">{s.label}</dt>
                <dd className="order-1 text-3xl font-medium tracking-tight text-cream md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs text-mist/80">{t.why.note}</p>
        </div>
      </div>
    </section>
  );
}
