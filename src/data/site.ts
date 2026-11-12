export const SITE_URL = (import.meta.env?.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? 'https://galata.studio';

export const site = {
  name: 'Galata Studio',
  tagline: 'Web design and development agency for spas, clinics, tattoo studios and model agencies.',
  email: 'hello@galata.studio',
  phone: '+902122450000',
  street: 'Bereketzade Mah., Galata Kulesi Sk. No: 12',
  neighborhood: 'Beyoğlu',
  founded: 2024,
};
