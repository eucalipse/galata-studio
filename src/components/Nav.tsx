import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';
import { LanguageSwitch } from './LanguageSwitch';

export function Nav({ onAddagioPage = false }: { onAddagioPage?: boolean }) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const prefix = onAddagioPage ? '/' : '';
  const links = [
    { href: `${prefix}#services`, label: t.nav.services },
    { href: `${prefix}#work`, label: t.nav.work },
    { href: `${prefix}#why`, label: t.nav.why },
    { href: `${prefix}#process`, label: t.nav.process },
    { href: '/addagio', label: 'Addagio' },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ease-out ${
        solid ? 'border-line bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <a href={onAddagioPage ? '/' : '#top'} className="focus-ring rounded-md" aria-label="Galata Studio">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring rounded text-sm text-mist transition-colors duration-150 ease-out hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitch />
          <a href={`${prefix}#contact`} className="btn-primary !py-2.5 !px-5">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.close : t.nav.menu}
          className="focus-ring -mr-2 rounded-md p-2 text-cream lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            ) : (
              <path d="M4 9h16M8 15h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-line lg:hidden"
          >
            <nav aria-label="Mobile" className="shell py-6">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href} className="border-b border-line/60">
                    <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-medium tracking-tight text-cream">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-4">
                <LanguageSwitch />
                <a href={`${prefix}#contact`} onClick={() => setOpen(false)} className="btn-primary">
                  {t.nav.cta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
