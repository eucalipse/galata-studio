export interface AddagioCase {
  id: string;
  name: string;
  slug: string;
  category: 'spa' | 'tattoo' | 'medical' | 'model';
  city: string;
}

/** Live Addagio booking integrations across the Galata Studio portfolio — real slugs, confirmed in each project's own BookingLink/brand constants. */
export const addagioCases: AddagioCase[] = [
  { id: 'besiktasspa', name: 'Besiktas Spa', slug: 'besiktasspa', category: 'spa', city: 'İstanbul' },
  { id: 'besiktasbeauty', name: 'Besiktas Beauty', slug: 'besiktasbeauty', category: 'spa', city: 'İstanbul' },
  { id: 'etilerspa', name: 'Etiler Spa', slug: 'etilerspa', category: 'spa', city: 'İstanbul' },
  { id: 'etilerbeauty', name: 'Etiler Beauty', slug: 'etilerbeauty', category: 'spa', city: 'İstanbul' },
  { id: 'karakoyspa', name: 'Karakoy Spa', slug: 'karakoyspa', category: 'spa', city: 'İstanbul' },
  { id: 'karakoybeauty', name: 'Karakoy Beauty', slug: 'karakoybeauty', category: 'spa', city: 'İstanbul' },
  { id: 'sislispa', name: 'Sisli Spa', slug: 'sislispa', category: 'spa', city: 'İstanbul' },
  { id: 'nisantasispa', name: 'Nisantasi Spa', slug: 'nisantasispa', category: 'spa', city: 'İstanbul' },
  { id: 'nisantasidayspa', name: 'Nisantasi Day Spa', slug: 'nisantasidayspa', category: 'spa', city: 'İstanbul' },
  { id: 'lonelight', name: 'Lonelight Studio', slug: 'lonelightstudio', category: 'spa', city: 'İstanbul' },

  { id: 'crow-and-needle', name: 'Crow & Needle', slug: 'crowandneedle', category: 'tattoo', city: 'Philadelphia' },
  { id: 'thistle-and-bone', name: 'Thistle & Bone', slug: 'thistleandbone', category: 'tattoo', city: 'Edinburgh' },
  { id: 'vantablack-ink', name: 'Vantablack Ink', slug: 'vantablackink', category: 'tattoo', city: 'Berlin' },

  { id: 'bosphorus-drip', name: 'Bosphorus Drip', slug: 'bosphorus-drip', category: 'medical', city: 'İstanbul' },
  { id: 'dripistanbul', name: 'Drip Istanbul', slug: 'drip-istanbul', category: 'medical', city: 'İstanbul' },
  { id: 'derman', name: 'Derman', slug: 'derman', category: 'medical', city: 'İstanbul' },
  { id: 'lale', name: 'Lale Drip', slug: 'lale-drip', category: 'medical', city: 'İstanbul' },
  { id: 'drahmetkeles', name: 'Op. Dr. Ahmet Keleş', slug: 'drahmetkeles', category: 'medical', city: 'İstanbul' },

  { id: 'leidy', name: 'Leidy Vélez', slug: 'leidy-velez-medellin', category: 'spa', city: 'Medellín' },
  { id: 'ygm-models', name: 'YGM Models', slug: 'ygm-models-kyiv', category: 'model', city: 'Kyiv' },
];
