import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 24 32" fill="none" className="h-8 w-6 text-gold" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M12 1.5 17.5 10.5h-11z" />
          <path d="M5.5 10.5h13V13h-13z" />
          <path d="M7 13v17.5h10V13" />
          <path d="M9.5 16.5v3M12 16.5v3M14.5 16.5v3" />
          <path d="M10.5 30.5v-4a1.5 1.5 0 0 1 3 0v4" />
          <path d="M3.5 30.5h17" />
        </g>
      </svg>
      <span className="text-[17px] font-medium tracking-tight text-cream">
        Galata <span className="font-serif text-[19px] italic text-gold">Studio</span>
      </span>
    </span>
  );
}
