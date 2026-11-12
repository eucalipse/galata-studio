import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useContactForm, type ContactErrors } from '../hooks/useContactForm';
import { ArrowIcon } from './icons/ArrowIcon';

const inputBase =
  'w-full border-0 border-b bg-transparent px-0 py-3 text-[17px] text-cream placeholder:text-mist/50 transition-colors duration-150 ease-out focus:outline-none focus:ring-0';

export function Contact() {
  const { t } = useLanguage();
  const { fields, errors, status, update, submit, reset } = useContactForm();
  const c = t.contact;

  const errorText = (err: ContactErrors[keyof ContactErrors]) => (err === 'email' ? c.errEmail : err === 'required' ? c.errRequired : '');
  const border = (key: keyof ContactErrors) => (errors[key] ? 'border-copper' : 'border-line focus:border-gold');

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-night py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-6xl">
            {c.title}
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-mist">{c.sub}</p>
          <div className="mt-12">
            <p className="text-sm text-mist">{c.direct}</p>
            <a href="mailto:hello@galata.studio" className="focus-ring mt-2 inline-block rounded font-serif text-3xl italic text-gold transition-colors duration-150 ease-out hover:text-gold-soft">
              hello@galata.studio
            </a>
            <a href="tel:+902122450000" className="focus-ring mt-2 block w-fit rounded text-cream/80 transition-colors duration-150 ease-out hover:text-cream">
              +90 212 245 00 00
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait" initial={false}>
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                role="status"
                className="flex h-full flex-col justify-center rounded-2xl border border-line p-8 md:p-12"
              >
                <svg viewBox="0 0 40 40" className="h-10 w-10 text-gold" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.25" />
                  <path d="m13 20.5 4.5 4.5L27 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-8 text-3xl font-medium tracking-tight">{c.successTitle}</h3>
                <p className="mt-3 text-mist">
                  {c.successBody} <span className="text-cream">{fields.email}</span>
                </p>
                <button type="button" onClick={reset} className="btn-ghost mt-10 w-fit">
                  {c.again}
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="flex flex-col gap-9">
                <div className="grid gap-9 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label htmlFor="c-name" className="text-sm text-mist">{c.name}</label>
                    <input
                      id="c-name"
                      type="text"
                      autoComplete="name"
                      value={fields.name}
                      onChange={(e) => update('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'c-name-err' : undefined}
                      className={`${inputBase} ${border('name')}`}
                    />
                    {errors.name && <p id="c-name-err" className="mt-2 text-xs text-copper">{errorText(errors.name)}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="text-sm text-mist">{c.email}</label>
                    <input
                      id="c-email"
                      type="email"
                      autoComplete="email"
                      value={fields.email}
                      onChange={(e) => update('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'c-email-err' : undefined}
                      className={`${inputBase} ${border('email')}`}
                    />
                    {errors.email && <p id="c-email-err" className="mt-2 text-xs text-copper">{errorText(errors.email)}</p>}
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm text-mist">{c.type}</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.types.map((opt) => {
                      const checked = fields.type === opt.value;
                      return (
                        <label
                          key={opt.value}
                          className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors duration-150 ease-out has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold ${
                            checked ? 'border-gold bg-gold/10 text-cream' : 'border-line text-mist hover:border-mist/50 hover:text-cream'
                          }`}
                        >
                          <input
                            type="radio"
                            name="project-type"
                            value={opt.value}
                            checked={checked}
                            onChange={() => update('type', opt.value)}
                            className="sr-only"
                          />
                          {opt.label}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="c-message" className="text-sm text-mist">{c.message}</label>
                  <textarea
                    id="c-message"
                    rows={4}
                    value={fields.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder={c.messagePlaceholder}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'c-message-err' : undefined}
                    className={`${inputBase} resize-none ${border('message')}`}
                  />
                  {errors.message && <p id="c-message-err" className="mt-2 text-xs text-copper">{errorText(errors.message)}</p>}
                </div>

                {status === 'error' && (
                  <p role="alert" className="rounded-lg border border-copper/40 px-4 py-3 text-sm text-cream">
                    {c.errGeneric}
                  </p>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-fit">
                  {status === 'sending' ? (
                    <>
                      <svg viewBox="0 0 16 16" className="h-4 w-4 animate-spin" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.6" />
                        <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      {c.sending}
                    </>
                  ) : (
                    <>
                      {c.submit}
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
