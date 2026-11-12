import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';
import { LanguageSwitch } from './LanguageSwitch';
import { FamilyNote } from './FamilyNote';
import { SocialIcon, type SocialName } from './icons/SocialIcon';
import { ArrowIcon } from './icons/ArrowIcon';

const SOCIALS: { name: SocialName; label: string; href: string }[] = [
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com/galata.studio' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/galata-studio' },
  { name: 'dribbble', label: 'Dribbble', href: 'https://dribbble.com/galatastudio' },
];

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  return (
    <footer className="border-t border-line bg-ink">
      <FamilyNote />
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-xs text-mist">{f.tagline}</p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm text-mist">{f.contact}</h2>
          <address className="mt-4 flex flex-col gap-2 not-italic text-cream/90">
            <a href="mailto:hello@galata.studio" className="focus-ring w-fit rounded transition-colors duration-150 ease-out hover:text-gold-soft">
              hello@galata.studio
            </a>
            <a href="tel:+902122450000" className="focus-ring w-fit rounded transition-colors duration-150 ease-out hover:text-gold-soft">
              +90 212 245 00 00
            </a>
            <span className="mt-2 max-w-[260px] text-sm leading-relaxed text-mist">{f.address}</span>
          </address>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm text-mist">{f.social}</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-3 rounded text-cream/90 transition-colors duration-150 ease-out hover:text-gold-soft"
                >
                  <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm text-mist">{f.language}</h2>
          <LanguageSwitch className="mt-4" />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Galata Studio · galata.studio · {f.rights}</p>
          <a href="#top" className="focus-ring inline-flex w-fit items-center gap-2 rounded transition-colors duration-150 ease-out hover:text-cream">
            {f.top}
            <ArrowIcon direction="up" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
