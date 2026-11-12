import React from 'react';
import type { ServiceIconName } from '../../types/content';

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

export function ServiceIcon({ name, className = 'h-10 w-10' }: ServiceIconProps) {
  const common = {
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {name === 'design' && (
        <g {...common}>
          <rect x="4" y="7" width="32" height="26" rx="2.5" />
          <path d="M4 12.5h32" />
          <circle cx="7.5" cy="9.75" r="0.6" fill="currentColor" />
          <circle cx="10" cy="9.75" r="0.6" fill="currentColor" />
          <circle cx="20" cy="17.5" r="1.6" />
          <path d="M19.1 18.9 14 28.5M20.9 18.9 26 28.5" />
          <path d="M13 25.5a9 9 0 0 0 14 0" strokeDasharray="1.5 2" />
        </g>
      )}
      {name === 'landing' && (
        <g {...common}>
          <rect x="10" y="3.5" width="20" height="33" rx="2.5" />
          <path d="M14 9h12M14 12.5h8" />
          <path d="M20 16.5v6M17.25 19.75 20 22.5l2.75-2.75" />
          <rect x="14" y="27" width="12" height="4.5" rx="2.25" fill="currentColor" fillOpacity="0.18" />
        </g>
      )}
      {name === 'seo' && (
        <g {...common}>
          <circle cx="17" cy="17" r="10.5" />
          <path d="M24.6 24.6 34.5 34.5" strokeWidth="1.6" />
          <path d="M12.5 21.5v-2.5M17 21.5v-6M21.5 21.5v-9" />
        </g>
      )}
      {name === 'commerce' && (
        <g {...common}>
          <rect x="3.5" y="8" width="19" height="18" rx="2.5" />
          <path d="M3.5 13h19M8.5 5.5v5M17.5 5.5v5" />
          <path d="m9 19 2.75 2.75L17 16.5" />
          <path d="M25 20.5h10.5l-1 14h-8.5z" />
          <path d="M27.5 20.5v-2a2.75 2.75 0 0 1 5.5 0v2" />
        </g>
      )}
    </svg>
  );
}
