/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TenysySection } from './components/TenysySection';
import { StatsSection } from './components/StatsSection';
import { ProcessSection } from './components/ProcessSection';
import { PartnersSection } from './components/PartnersSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

/**
 * Application principale: Les Anges du Digital — Excellence Numérique
 * Implémentation Front-End React & Tailwind CSS haute fidélité (Pixel-Perfect)
 * Basée sur la maquette Stitch & la charte Spiritual-Tech Luxe
 */
export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#05132C] text-[#D8E2FF] flex flex-col font-sans selection:bg-[#E2A93B]/30 selection:text-white">
      {/* 1. Bandeau utilitaire supérieur (Coordonnées Douala, Horaires, Email) */}
      <TopBar />

      {/* 2. Barre de navigation principale (Marque, Liens, Bouton Devis) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Contenu principal structuré selon la hiérarchie de la maquette */}
      <main className="flex-1">
        {/* Section Héro : Accélération Commerciale & Orbe Céleste */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section À propos : Ingénierie & Leadership Digital (Plaque fondatrice & Dirigeant) */}
        <AboutSection />

        {/* Section Services : Prestations Métiers (11 cartes + Bannière TENYSY ERP) */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Section TENYSY : Suite ERP & Console Opérationnelle Intégrée */}
        <TenysySection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Section Statistiques : 4 Métriques clés d'impact */}
        <StatsSection />

        {/* Section Processus : Méthodologie en 4 Phases */}
        <ProcessSection />

        {/* Section Partenaires : Réseau de confiance régional */}
        <PartnersSection />

        {/* Section Actualités : Veille & Articles de fond */}
        <NewsSection />

        {/* Section Contact : Coordonnées prioritaires, Téléphones & Quartier Général */}
        <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      </main>

      {/* 4. Pied de page institutionnel et technique */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 5. Modal dynamique "Obtenir un devis" (Règle Zero Pricing) */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={selectedService}
      />
    </div>
  );
}
