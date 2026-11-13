import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Project } from '../../types/content';
import { ArrowIcon } from '../icons/ArrowIcon';
import { SitePreview } from './SitePreview';

export function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage();
  const detailHref = `/work/${project.id}`;
  return (
    <article className="group flex w-full flex-col">
      <a
        href={detailHref}
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden rounded-xl border border-line transition-colors duration-200 ease-out group-hover:border-gold/40"
      >
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.02]">
          <SitePreview project={project} />
        </div>
      </a>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight text-cream">{project.name}</h3>
        <span className="shrink-0 text-xs text-mist">{project.city}</span>
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gold/80">{t.portfolio.categories[project.category]}</p>
      <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-mist">{project.description[lang]}</p>

      <a
        href={detailHref}
        className="focus-ring mt-auto inline-flex w-fit items-center gap-2 rounded pt-5 text-sm text-cream/80 transition-colors duration-150 ease-out hover:text-gold-soft"
      >
        {t.portfolio.visit}
        <span className="sr-only"> — {project.name}</span>
        <ArrowIcon direction="up-right" className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
