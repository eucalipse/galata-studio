import React from 'react';

export type SocialName = 'instagram' | 'linkedin' | 'dribbble';

export function SocialIcon({ name, className = 'h-5 w-5' }: { name: SocialName; className?: string }) {
  const common = { stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {name === 'instagram' && (
        <g {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="3.8" />
          <circle cx="16.9" cy="7.1" r="0.7" fill="currentColor" stroke="none" />
        </g>
      )}
      {name === 'linkedin' && (
        <g {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10.5V16.5M8 7.6v.1M11.5 16.5v-6M11.5 13c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6v3.5" />
        </g>
      )}
      {name === 'dribbble' && (
        <g {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M8.2 4.4c3 3.6 5.4 8.6 6.7 15.3M3.6 10.4c5 .3 9.9-.9 13.6-4M6.2 18.2c2.7-3.3 7-4.9 14.1-3.6" />
        </g>
      )}
    </svg>
  );
}
