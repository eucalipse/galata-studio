import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { blogAddagioPartnership } from '../data/blogCopy';
import { ArrowIcon } from '../components/icons/ArrowIcon';

export function BlogAddagioPartnershipPage() {
  const { lang } = useLanguage();
  const c = blogAddagioPartnership[lang];

  return (
    <div className="min-h-screen w-full bg-ink text-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav onAddagioPage />
      <main id="main">
        <article className="border-b border-line pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="shell max-w-2xl">
            <a href="/#top" className="focus-ring inline-flex items-center gap-2 text-sm text-mist transition-colors duration-150 ease-out hover:text-cream">
              <ArrowIcon direction="right" className="h-3.5 w-3.5 rotate-180" />
              {c.back}
            </a>

            <p className="mt-10 flex items-center gap-3 text-sm text-mist">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              {c.eyebrow} · {c.date}
            </p>
            <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-cream">
              {c.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-mist md:text-xl">{c.lead}</p>

            <div className="mt-10 flex flex-col gap-4 border-t border-line pt-10 text-[17px] leading-relaxed text-mist">
              {c.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="/addagio" className="btn-primary">
                {c.cta}
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href="/addagio/turkey" className="btn-ghost">
                {c.ctaTurkey}
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
