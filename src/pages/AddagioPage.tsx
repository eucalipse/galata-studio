import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { AddagioHero } from '../components/addagio/AddagioHero';
import { AddagioOffer } from '../components/addagio/AddagioOffer';
import { AddagioHow } from '../components/addagio/AddagioHow';
import { AddagioCases } from '../components/addagio/AddagioCases';
import { AddagioFaq } from '../components/addagio/AddagioFaq';
import { AddagioFinalCta } from '../components/addagio/AddagioFinalCta';

export function AddagioPage() {
  return (
    <div className="min-h-screen w-full bg-ink text-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav onAddagioPage />
      <main id="main">
        <AddagioHero />
        <AddagioOffer />
        <AddagioHow />
        <AddagioCases />
        <AddagioFaq />
        <AddagioFinalCta />
      </main>
      <Footer />
    </div>
  );
}
