import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import type { Category } from '../../types/content';
import { ArrowIcon } from '../icons/ArrowIcon';
import { CategoryFilter, type Filter } from './CategoryFilter';
import { ProjectCard } from './ProjectCard';

const INITIAL_COUNT = 9;
const CATEGORIES: Category[] = ['spa', 'tattoo', 'medical', 'model'];

export function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)), [filter]);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const canExpand = filtered.length > INITIAL_COUNT;

  const options = [
    { value: 'all' as Filter, label: t.portfolio.all, count: projects.length },
    ...CATEGORIES.map((c) => ({ value: c as Filter, label: t.portfolio.categories[c], count: projects.filter((p) => p.category === c).length })),
  ];

  const handleFilter = (value: Filter) => {
    setFilter(value);
    setExpanded(false);
  };

  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line bg-night py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 id="work-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
              {t.portfolio.title}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-mist">{t.portfolio.intro}</p>
          </div>
          <CategoryFilter options={options} value={filter} onChange={handleFilter} label={t.portfolio.filterLabel} />
        </div>

        <motion.ul layout className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="flex"
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {canExpand && (
          <div className="mt-16 flex justify-center">
            <button type="button" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded} className="btn-ghost">
              {expanded ? t.portfolio.showLess : `${t.portfolio.showAll} (${filtered.length})`}
              <ArrowIcon direction={expanded ? 'up' : 'down'} className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
