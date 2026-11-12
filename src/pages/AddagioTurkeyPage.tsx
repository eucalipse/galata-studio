import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { AddagioOffer } from '../components/addagio/AddagioOffer';
import { AddagioHow } from '../components/addagio/AddagioHow';
import { AddagioCases } from '../components/addagio/AddagioCases';
import { AddagioFaq } from '../components/addagio/AddagioFaq';
import { AddagioFinalCta } from '../components/addagio/AddagioFinalCta';
import { ArrowIcon } from '../components/icons/ArrowIcon';

/**
 * Turkish-market page for the Addagio partnership — locked to Turkish (no language
 * toggle) and leads with Turkey-specific context (KVKK data residency, local payment
 * rails) that the bilingual /addagio page keeps general.
 */
export function AddagioTurkeyPage() {
  return (
    <div className="min-h-screen w-full bg-ink text-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        İçeriğe geç
      </a>
      <Nav onAddagioPage hideLanguageSwitch />
      <main id="main">
        <section className="border-b border-line pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="shell max-w-3xl">
            <p className="flex items-center gap-3 text-sm text-mist">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Addagio Partneri · Türkiye
            </p>
            <h1 className="mt-8 text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream">
              Türkiye’deki işletmeler için rezervasyon altyapısı.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
              Galata Studio, Addagio’nun Türkiye’deki ajans partneridir. Spa, güzellik salonu, klinik ve dövme
              stüdyosu gibi randevu alan işletmeler için sitenizi Addagio’ya baştan entegre kuruyoruz — KVKK’ya
              uygun veri işleme, TL fiyatlandırma ve yerel ödeme yöntemleriyle.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#offer" className="btn-primary">
                6 ay ücretsiz teklifi al
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href="#cases" className="btn-ghost">
                Türkiye’deki örnekleri gör
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="tr-local-title" className="border-b border-line bg-night py-24 md:py-32">
          <div className="shell">
            <h2 id="tr-local-title" className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
              Yerel işletmeler için düşünüldü
            </h2>
            <dl className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <dt className="text-lg font-medium tracking-tight text-cream">KVKK uyumlu veri işleme</dt>
                <dd className="text-[15px] leading-relaxed text-mist">
                  Müşteri randevu verileri, Türkiye’nin kişisel verilerin korunması mevzuatına uygun şekilde
                  işlenir.
                </dd>
              </div>
              <div className="flex flex-col gap-3">
                <dt className="text-lg font-medium tracking-tight text-cream">TL fiyatlandırma</dt>
                <dd className="text-[15px] leading-relaxed text-mist">
                  Hizmet fiyatları doğrudan Türk Lirası cinsinden gösterilir, döviz çevrimi veya ekstra adım yok.
                </dd>
              </div>
              <div className="flex flex-col gap-3">
                <dt className="text-lg font-medium tracking-tight text-cream">WhatsApp bildirimleri</dt>
                <dd className="text-[15px] leading-relaxed text-mist">
                  Yeni randevular, Türkiye’de işletmelerin zaten kullandığı WhatsApp üzerinden size ulaşır.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <AddagioOffer />
        <AddagioHow />
        <AddagioCases />
        <AddagioFaq />
        <AddagioFinalCta />
      </main>
      <Footer hideLanguageSwitch />
    </div>
  );
}
