import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceIcon } from './icons/ServiceIcon';
import { ArrowIcon } from './icons/ArrowIcon';

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 id="services-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
              {t.services.title}
            </h2>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-mist">{t.services.intro}</p>
          </div>
        </div>

        <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-8">
          {t.services.items.map((s, i) => (
            <li key={s.icon} className={`border-b border-line ${i % 2 === 0 ? 'sm:border-r' : ''}`}>
              <a
                href="#contact"
                className="focus-ring group flex h-full flex-col p-7 transition-colors duration-200 ease-out hover:bg-night md:p-10"
              >
                <ServiceIcon name={s.icon} className="h-11 w-11 text-gold/80 transition-colors duration-200 ease-out group-hover:text-gold" />
                <h3 className="mt-10 text-xl font-medium tracking-tight text-cream">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={s.title}>
                  {s.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-mist">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm text-cream/80 transition-colors duration-200 ease-out group-hover:text-gold-soft">
                  {t.services.ask}
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
