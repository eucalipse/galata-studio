import { projects } from './projects';

export interface AddagioCase {
  id: string;
  name: string;
  slug: string;
  category: 'spa' | 'tattoo' | 'medical' | 'model';
  city: string;
}

/** Live Addagio booking integrations across the Galata Studio portfolio — derived from projects.ts so the two lists can't drift apart. */
export const addagioCases: AddagioCase[] = projects
  .filter((p) => p.addagioSlug)
  .map((p) => ({ id: p.id, name: p.name, slug: p.addagioSlug!, category: p.category, city: p.city }));
