export const addagioCopy = {
  tr: {
    nav: { back: 'Ana sayfa', cta: 'Teklif al' },
    hero: {
      eyebrow: 'Addagio Partneri',
      title: 'Rezervasyon sistemi, siteyle birlikte gelir.',
      sub: 'Galata Studio, Addagio’nun resmi ajans partneridir. Yaptığımız her site, Addagio randevu platformuna baştan entegre gelir — ayrı bir eklenti değil, sitenin kendisi.',
      ctaOffer: '6 ay ücretsiz teklifi al',
      ctaCases: 'Canlı örnekleri gör',
    },
    offer: {
      title: '6 ay Addagio, bizim müşterilerimize ücretsiz',
      body: 'Galata Studio üzerinden siteyle birlikte Addagio’ya geçen her işletme, ilk 6 ay için Addagio abonelik ücretinden muaftır. Kurulum, randevu akışı ve ekip eğitimi sürecin bir parçası — ayrı bir iş değil.',
      items: [
        { title: 'Randevu formu değil, gerçek sistem', desc: 'Takvim, depozito, WhatsApp bildirimleri ve müşteri paneli — hepsi hazır gelir.' },
        { title: 'Siteyle aynı anda yayında', desc: 'Addagio entegrasyonu, sitenin yayın gününde çalışır durumda olur — sonradan eklenmez.' },
        { title: '6 ay bizden', desc: 'İlk 6 ay Addagio ücreti yok. Sonrasında doğrudan Addagio ile devam edersiniz, aracı yok.' },
      ],
    },
    how: {
      title: 'Nasıl çalışıyor',
      steps: [
        { title: 'Addagio hesabı açılır', desc: 'İşletmeniz için bir Addagio vendor hesabı oluşturuyoruz — hizmetler, çalışma saatleri, fiyatlar sizinle birlikte girilir.' },
        { title: 'Site, Addagio’ya bağlanır', desc: 'Randevu butonu doğrudan addagio.io/book/işletmeniz adresine gider. Ayrı bir form, ayrı bir veri tabanı yok.' },
        { title: 'Takip ve bildirimler', desc: 'Her randevu tıklaması analitiğe düşer; yeni rezervasyonlar e-posta ve WhatsApp ile size ulaşır.' },
      ],
    },
    cases: {
      title: 'Canlı Addagio entegrasyonları',
      intro: 'Portföyümüzdeki işletmelerin çoğu, siteleriyle birlikte Addagio üzerinden randevu alıyor. Aşağıdakiler gerçek, yayında olan bağlantılar.',
      visit: 'Addagio sayfasını gör',
    },
    faq: {
      title: 'Sık sorulanlar',
      items: [
        { q: 'Addagio’yu zaten kullanıyorsak ne olur?', a: 'Mevcut Addagio hesabınızı yeni siteye bağlarız — sıfırdan kurulum gerekmez.' },
        { q: '6 ay sonra ne oluyor?', a: 'Addagio’nun standart fiyatlandırmasına geçersiniz; Galata Studio aracı değildir, fatura doğrudan Addagio’dan gelir.' },
        { q: 'Addagio olmadan site yaptırabilir miyiz?', a: 'Evet — Addagio, randevu alan işletmeler için önerimiz, zorunluluk değil.' },
      ],
    },
    final: {
      title: 'Siteniz ve randevu sisteminiz, tek seferde.',
      sub: 'Projenizi anlatın, Addagio entegrasyonuyla birlikte kapsam ve fiyat aralığı gönderelim.',
      cta: 'Teklif iste',
    },
  },
  en: {
    nav: { back: 'Home', cta: 'Get a quote' },
    hero: {
      eyebrow: 'Addagio Partner',
      title: 'Your booking system comes with the site.',
      sub: 'Galata Studio is an official Addagio agency partner. Every site we build is natively wired into the Addagio booking platform — not a bolt-on, part of the site itself.',
      ctaOffer: 'Get the 6-months-free offer',
      ctaCases: 'See live examples',
    },
    offer: {
      title: '6 months of Addagio, free for our clients',
      body: 'Any business that moves to Addagio through a Galata Studio site gets the first 6 months of Addagio’s subscription free. Setup, booking flow and team training are part of the build — not a separate project.',
      items: [
        { title: 'A real booking system, not a form', desc: 'Calendar, deposits, WhatsApp notifications and a client dashboard — all included.' },
        { title: 'Live the day the site launches', desc: 'Addagio is working from day one of the site — never bolted on afterward.' },
        { title: '6 months on us', desc: 'No Addagio fee for the first 6 months. After that you continue directly with Addagio — no middleman.' },
      ],
    },
    how: {
      title: 'How it works',
      steps: [
        { title: 'We set up your Addagio account', desc: 'A vendor account for your business — services, hours and pricing entered together with you.' },
        { title: 'Your site connects to Addagio', desc: 'The booking button goes straight to addagio.io/book/your-business. No separate form, no separate database.' },
        { title: 'Tracking and notifications', desc: 'Every booking click is tracked; new bookings reach you by email and WhatsApp.' },
      ],
    },
    cases: {
      title: 'Live Addagio integrations',
      intro: 'Most businesses in our portfolio take bookings through Addagio, wired directly into their site. These are real, live links.',
      visit: 'View Addagio page',
    },
    faq: {
      title: 'Frequently asked',
      items: [
        { q: 'What if we already use Addagio?', a: 'We connect your existing Addagio account to the new site — no setup from scratch.' },
        { q: 'What happens after 6 months?', a: 'You move to Addagio’s standard pricing. Galata Studio isn’t a middleman — billing comes directly from Addagio.' },
        { q: 'Can we get a site without Addagio?', a: 'Yes — Addagio is our recommendation for booking-based businesses, not a requirement.' },
      ],
    },
    final: {
      title: 'Your site and your booking system, in one build.',
      sub: 'Tell us about your project and we’ll send a scope and price range that includes the Addagio integration.',
      cta: 'Request a quote',
    },
  },
};

export type AddagioCopy = typeof addagioCopy.tr;
