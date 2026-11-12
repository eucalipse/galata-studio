import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { addagioCopy } from '../../data/addagioCopy';
import { ArrowIcon } from '../icons/ArrowIcon';

const EASE = [0.23, 1, 0.32, 1] as const;

export function AddagioHero() {
  const { lang } = useLanguage();
  const c = addagioCopy[lang].hero;

  return (
    <section className="border-b border-line pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="shell">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="max-w-3xl"
        >
          <p className="flex items-center gap-3 text-sm text-mist">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {c.eyebrow}
          </p>
          <h1 className="mt-8 text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream">
            {c.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist md:text-xl">{c.sub}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#offer" className="btn-primary">
              {c.ctaOffer}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
            <a href="#cases" className="btn-ghost">
              {c.ctaCases}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
