import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowIcon } from './icons/ArrowIcon';

const HERO_IMAGE = '/hero-galata.jpg';
const EASE = [0.23, 1, 0.32, 1] as const;

const container: Variants = { show: { transition: { staggerChildren: 0.06 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

export function Hero() {
  const { t, lang } = useLanguage();
  const h = t.hero;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="shell grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div key={lang} variants={container} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.p variants={item} className="flex items-center gap-3 text-sm text-mist">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {h.location}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-8 text-[clamp(3.25rem,8vw,7.25rem)] font-medium leading-[0.95] tracking-[-0.035em] text-cream"
          >
            {h.headlineBefore}
            <em className="font-serif font-normal italic tracking-[-0.01em] text-gold">{h.headlineAccent}</em>
            {h.headlineAfter}
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
            {h.sub}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary">
              {h.ctaQuote}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
            <a href="#work" className="btn-ghost">
              {h.ctaWork}
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-10 flex items-center gap-2.5 text-sm text-mist">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {h.availability}
          </motion.p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: EASE, delay: 0.1 }}
          className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-t-full border border-line">
            <img
              src={HERO_IMAGE}
              alt="Galata Tower lit in warm light at dusk, seen from a cobblestone street in Karaköy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between text-xs text-mist">
            <span>{h.caption}</span>
            <span className="tabular-nums">41.0256° N, 28.9741° E</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
