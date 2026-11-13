export type Lang = 'tr' | 'en';

export type Localized = Record<Lang, string>;

export type Category = 'spa' | 'tattoo' | 'medical' | 'model';

export type ServiceIconName = 'design' | 'landing' | 'seo' | 'commerce';

export type ProjectType = 'website' | 'landing' | 'commerce' | 'unsure';

export interface Project {
  id: string;
  name: string;
  url: string;
  category: Category;
  city: string;
  accent: string;
  layout: 0 | 1 | 2;
  description: Localized;
  /** Addagio vendor booking slug (addagio.io/book/<slug>) — omitted for projects without a live Addagio integration. */
  addagioSlug?: string;
}
