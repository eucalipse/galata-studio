import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import type { Project } from '../types/content';
import { projects } from '../data/projects';
import { ArrowIcon } from '../components/icons/ArrowIcon';

const copy = {
  tr: {
    back: 'Tüm işlere dön',
    visit: 'Siteyi ziyaret et',
    addagio: 'Addagio üzerinden randevu al',
    addagioNote: 'Bu site, Addagio rezervasyon sistemiyle baştan entegre kuruldu.',
    noAddagio: 'Bu site şu an bir rezervasyon sistemi kullanmıyor.',
    cta: 'Benzer bir site mi istiyorsunuz?',
    ctaBody: 'Projenizi anlatın, kapsam ve fiyat aralığıyla 24 saat içinde dönelim.',
    ctaButton: 'Teklif alın',
    more: 'Portföyden diğer işler',
  },
  en: {
    back: 'Back to all work',
    visit: 'Visit site',
    addagio: 'Book through Addagio',
    addagioNote: 'This site was built with native Addagio booking from day one.',
    noAddagio: "This site doesn't use a booking system yet.",
    cta: 'Want a site like this?',
    ctaBody: "Tell us about your project — we'll reply within 24 hours with a scope and price range.",
    ctaButton: 'Get a quote',
    more: 'More from the portfolio',
  },
};

const categoryLabel = {
  tr: { spa: 'Spa & Güzellik', tattoo: 'Dövme Stüdyosu', medical: 'Medikal & Klinik', model: 'Model Ajansı' },
  en: { spa: 'Spa & Beauty', tattoo: 'Tattoo Studio', medical: 'Medical & Clinic', model: 'Model Agency' },
};

export function WorkCaseStudyPage({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const c = copy[lang];
  const host = project.url.replace(/^https?:\/\//, '');
  const others = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <div className="min-h-screen w-full bg-ink text-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <article className="border-b border-line pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="shell max-w-3xl">
            <a href="/#work" className="focus-ring inline-flex items-center gap-2 text-sm text-mist transition-colors duration-150 ease-out hover:text-cream">
              <ArrowIcon direction="right" className="h-3.5 w-3.5 rotate-180" />
              {c.back}
            </a>

            <p className="mt-10 flex items-center gap-3 text-sm text-mist">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              {categoryLabel[lang][project.category]} · {project.city}
            </p>
            <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-cream">
              {project.name}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-mist md:text-xl">{project.description[lang]}</p>
          </div>

          <div className="shell mt-14 max-w-4xl">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-line transition-colors duration-200 ease-out hover:border-gold/40"
            >
              <img
                src={`/work/${project.id}.jpg`}
                alt={`${project.name} website screenshot`}
                className="w-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>
          </div>

          <div className="shell mt-10 flex max-w-4xl flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                {c.visit}
                <ArrowIcon direction="up-right" className="h-3.5 w-3.5" />
              </a>
              <span className="text-xs text-mist">{host}</span>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              {project.addagioSlug ? (
                <>
                  <a
                    href={`https://addagio.io/book/${project.addagioSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-fit"
                  >
                    {c.addagio}
                    <ArrowIcon direction="up-right" className="h-3.5 w-3.5" />
                  </a>
                  <span className="max-w-xs text-right text-xs text-mist sm:text-right">{c.addagioNote}</span>
                </>
              ) : (
                <span className="max-w-xs text-right text-xs text-mist">{c.noAddagio}</span>
              )}
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section aria-labelledby="more-work-title" className="border-b border-line bg-night py-20 md:py-28">
            <div className="shell">
              <h2 id="more-work-title" className="text-2xl font-medium tracking-tight text-cream">
                {c.more}
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                {others.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`/work/${p.id}`}
                      className="focus-ring group block rounded-lg border border-line p-5 transition-colors duration-150 ease-out hover:border-gold/40"
                    >
                      <h3 className="text-base font-medium text-cream">{p.name}</h3>
                      <p className="mt-1 text-xs text-mist">{p.city}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm text-cream/80 transition-colors duration-150 ease-out group-hover:text-gold-soft">
                        {c.visit}
                        <ArrowIcon direction="up-right" className="h-3 w-3" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section aria-labelledby="work-cta-title" className="py-20 text-center md:py-28">
          <div className="shell">
            <h2 id="work-cta-title" className="text-3xl font-medium tracking-tight text-cream md:text-4xl">
              {c.cta}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-mist">{c.ctaBody}</p>
            <a href="/#contact" className="btn-primary mt-8 inline-flex">
              {c.ctaButton}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
