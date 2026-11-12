import React from 'react';

interface ArrowIconProps {
  direction?: 'right' | 'up-right' | 'down' | 'up';
  className?: string;
}

export function ArrowIcon({ direction = 'right', className = 'h-4 w-4' }: ArrowIconProps) {
  const rotation = { right: 0, 'up-right': -45, down: 90, up: -90 }[direction];
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true" style={{ transform: `rotate(${rotation}deg)` }}>
      <path d="M2.5 8h10.5M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
