import React from 'react';
import type { Category, Project } from '../../types/content';

const categoryStyle: Record<Category, { bg: string; fg: string; title: string }> = {
  spa: { bg: '#2A221E', fg: '#EADBC6', title: 'font-serif italic text-[26px] leading-[1.05]' },
  tattoo: { bg: '#111111', fg: '#EFEFEF', title: 'font-sans font-semibold uppercase tracking-[0.14em] text-[15px] leading-tight' },
  medical: { bg: '#E7EDEF', fg: '#14303A', title: 'font-sans font-medium tracking-tight text-[20px] leading-tight' },
  model: { bg: '#1B1A1F', fg: '#F3EFE9', title: 'font-sans font-light uppercase tracking-[0.3em] text-[13px] leading-snug' },
};

function Bars({ widths }: { widths: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {widths.map((w, i) => (
        <span key={i} className="block h-1 rounded-full bg-current opacity-25" style={{ width: w }} />
      ))}
    </div>
  );
}

export function SitePreview({ project }: { project: Project }) {
  const s = categoryStyle[project.category];
  const host = project.url.replace(/^https?:\/\//, '');

  return (
    <div className="flex aspect-[4/3] w-full flex-col" style={{ background: s.bg, color: s.fg }} aria-hidden="true">
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-white/5 bg-[#0D121C] px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="mx-auto max-w-[60%] truncate rounded-full bg-white/5 px-3 py-0.5 text-[10px] text-white/50">{host}</span>
        <span className="w-[26px]" />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden px-5 pb-5 pt-3">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-8 rounded-full bg-current opacity-60" />
          <div className="flex gap-2">
            <span className="h-1 w-5 rounded-full bg-current opacity-30" />
            <span className="h-1 w-5 rounded-full bg-current opacity-30" />
            <span className="h-1 w-5 rounded-full bg-current opacity-30" />
          </div>
        </div>

        {project.layout === 0 && (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <p className={s.title}>{project.name}</p>
            <div className="flex w-full flex-col items-center">
              <Bars widths={['55%', '40%']} />
            </div>
            <span className="mt-1 h-5 w-20 rounded-full" style={{ background: project.accent }} />
          </div>
        )}

        {project.layout === 1 && (
          <div className="grid flex-1 grid-cols-5 items-center gap-4 pt-3">
            <div className="col-span-3 flex flex-col gap-4">
              <p className={s.title}>{project.name}</p>
              <Bars widths={['85%', '65%']} />
              <span className="h-5 w-16 rounded-full" style={{ background: project.accent }} />
            </div>
            <div className="col-span-2 h-[88%] rounded-t-full" style={{ background: project.accent, opacity: 0.6 }} />
          </div>
        )}

        {project.layout === 2 && (
          <div className="flex flex-1 flex-col gap-3 pt-3">
            <div className="relative flex flex-[1.4] items-end rounded-md p-3" style={{ background: project.accent + '55' }}>
              <p className={s.title}>{project.name}</p>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-2">
              <span className="rounded bg-current opacity-10" />
              <span className="rounded bg-current opacity-10" />
              <span className="rounded bg-current opacity-10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
