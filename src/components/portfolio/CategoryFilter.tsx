import React from 'react';
import { motion } from 'framer-motion';
import type { Category } from '../../types/content';

export type Filter = 'all' | Category;

interface CategoryFilterProps {
  options: { value: Filter; label: string; count: number }[];
  value: Filter;
  onChange: (value: Filter) => void;
  label: string;
}

export function CategoryFilter({ options, value, onChange, label }: CategoryFilterProps) {
  return (
    <div role="group" aria-label={label} className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
      <div className="flex w-max gap-1 rounded-full border border-line p-1">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.value)}
              className={`focus-ring relative whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-150 ease-out ${
                active ? 'text-ink' : 'text-mist hover:text-cream'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-cream"
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                />
              )}
              <span className="relative">
                {o.label}
                <span className={`ml-1.5 tabular-nums ${active ? 'text-ink/60' : 'text-mist/60'}`}>{o.count}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
