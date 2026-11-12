import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

const TRUST_IDS = ['besiktasspa', 'vantablack-ink', 'bosphorus-drip', 'crow-and-needle', 'lale', 'ygm-models', 'liva'];

export function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const item = t.testimonials.items[active];
  const trust = projects.filter((p) => TRUST_IDS.includes(p.id));

  return (
    <section aria-labelledby="testimonials-title" className="border-t border-line py-24 md:py-32">
      <div className="shell">
        <h2 id="testimonials-title" className="text-sm text-mist">
          {t.testimonials.title}
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <figure className="lg:col-span-9">
            <span className="block font-serif text-7xl leading-none text-gold/70" aria-hidden="true">
              "
            </span>
            <div className="min-h-[220px] md:min-h-[200px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <blockquote className="text-[clamp(1.6rem,3.2vw,2.75rem)] font-light leading-[1.2] tracking-[-0.015em] text-cream">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-8 text-sm">
                    <span className="font-medium text-cream">{item.name}</span>
                    <span className="text-mist"> — {item.role}</span>
                  </figcaption>
                </motion.div>
              </AnimatePresence>
            </div>
          </figure>

          <div role="group" aria-label={t.testimonials.title} className="flex gap-2 lg:col-span-3 lg:flex-col lg:justify-end lg:gap-0">
            {t.testimonials.items.map((tItem, i) => (
              <button
                key={tItem.name}
                type="button"
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className={`focus-ring flex-1 rounded-sm border-t py-4 text-left text-sm transition-colors duration-150 ease-out lg:flex-none ${
                  active === i ? 'border-gold text-cream' : 'border-line text-mist hover:text-cream'
                }`}
              >
                <span className="block truncate">{tItem.name}</span>
                <span className="mt-0.5 hidden truncate text-xs text-mist sm:block">{tItem.role.split(',')[1]?.trim()}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <p className="text-sm text-mist">{t.testimonials.trust}</p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {trust.map((p) => (
              <li key={p.id} className="text-lg font-medium tracking-tight text-cream/50">
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
