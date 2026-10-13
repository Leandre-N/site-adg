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
import { AboutScreen } from './components/AboutScreen';
import { ServicesScreen } from './components/ServicesScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { BlogScreen } from './components/BlogScreen';
import { TenysyAppScreen } from './components/TenysyAppScreen';
import { ServiceModal } from './components/ServiceModal';
import { ArticleModal } from './components/ArticleModal';
import { SERVICES, ServiceItem } from './data/servicesData';
import { BlogPost } from './data/blogData';

/**
 * Application principale: Les Anges du Digital — Excellence Numérique
 * Implémentation Front-End React & Tailwind CSS haute fidélité (Pixel-Perfect)
 * Basée sur la maquette Stitch & la charte Spiritual-Tech Luxe
 */
export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [serviceDetails, setServiceDetails] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  const page = window.location.pathname.replace(/\/$/, '') || '/';

  const renderPage = () => {
    switch (page) {
      case '/about':
        return <AboutScreen onBackToHome={() => { window.location.href = '/'; }} onOpenQuote={() => handleOpenQuoteModal()} />;
      case '/services':
        return (
          <ServicesScreen
            onBackToHome={() => { window.location.href = '/'; }}
            onSelectService={setServiceDetails}
            onOpenQuote={(serviceId) => {
              const service = SERVICES.find((item) => item.id === serviceId);
              handleOpenQuoteModal(service?.title ?? serviceId);
            }}
          />
        );
      case '/projects':
        return <ProjectsScreen onBackToHome={() => { window.location.href = '/'; }} onOpenQuote={() => handleOpenQuoteModal()} />;
      case '/news':
        return (
          <BlogScreen
            onBackToHome={() => { window.location.href = '/'; }}
            onSelectPost={setSelectedArticle}
          />
        );
      case '/tenysy':
        return <TenysyAppScreen onBackToHome={() => { window.location.href = '/'; }} onOpenQuote={() => handleOpenQuoteModal('Application mobile TENYSY')} />;
      case '/contact':
        return (
          <>
            <header className="bg-[#07132B] px-4 pb-8 pt-14 text-white sm:px-8 lg:px-12">
              <div className="mx-auto max-w-[1380px]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3C969]">Contact</p>
                <h1 className="mt-3 font-['Bricolage_Grotesque'] text-3xl font-extrabold sm:text-5xl">Parlons de votre projet</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A6B4D6]">Retrouvez les coordonnées officielles de l’agence et choisissez le canal qui vous convient.</p>
              </div>
            </header>
            <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
          </>
        );
      case '/privacy':
        return <LegalPage title="Confidentialité" />;
      case '/terms':
        return <LegalPage title="Conditions d’utilisation" />;
      default:
        return (
          <>
            <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
            <AboutSection />
            <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
            <TenysySection onOpenQuoteModal={handleOpenQuoteModal} />
            <StatsSection />
            <ProcessSection />
            <PartnersSection />
            <NewsSection />
            <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#05132C] text-[#D8E2FF] flex flex-col font-sans selection:bg-[#E2A93B]/30 selection:text-white">
      {/* 1. Bandeau utilitaire supérieur (Coordonnées Douala, Horaires, Email) */}
      <TopBar />

      {/* 2. Barre de navigation principale (Marque, Liens, Bouton Devis) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Contenu principal structuré selon la hiérarchie de la maquette */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* 4. Pied de page institutionnel et technique */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <ServiceModal
        service={serviceDetails}
        onClose={() => setServiceDetails(null)}
        onRequestQuote={(serviceId) => {
          const service = SERVICES.find((item) => item.id === serviceId);
          handleOpenQuoteModal(service?.title ?? serviceId);
        }}
      />
      <ArticleModal post={selectedArticle} onClose={() => setSelectedArticle(null)} />

      {/* 5. Modal dynamique "Obtenir un devis" (Règle Zero Pricing) */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={selectedService}
      />
    </div>
  );
}

function LegalPage({ title }: { title: string }) {
  return (
    <section className="min-h-[65vh] bg-[#F3F5FA] px-4 py-16 text-[#0B1530] sm:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#986E18]">Informations légales</p>
        <h1 className="mt-3 font-['Bricolage_Grotesque'] text-3xl font-extrabold sm:text-5xl">{title}</h1>
        {title === 'Confidentialité' ? (
          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
            <p>Ce site vitrine ne propose pas de création de compte. Les informations saisies dans le formulaire de demande sont préparées dans votre navigateur et transmises uniquement si vous choisissez d’ouvrir WhatsApp pour envoyer votre message.</p>
            <p>WhatsApp est un service tiers soumis à ses propres conditions et règles de confidentialité. Vous pouvez également contacter l’agence par téléphone ou par courriel sans utiliser le formulaire.</p>
            <p>Aucun engagement de stockage ou de traitement n’est revendiqué ici pour les services tiers. Pour toute question sur une demande, contactez <a className="font-semibold text-[#0AA88F] underline" href="mailto:contact@lesangesdudigital.com">contact@lesangesdudigital.com</a>.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
            <p>Les informations de ce site présentent les services de Les Anges du Digital et l’application TENYSY. Les périmètres, délais, livrables et conditions sont définis dans un devis ou un accord écrit propre à chaque projet.</p>
            <p>Les liens vers des services tiers, notamment WhatsApp, sont soumis aux conditions de leurs éditeurs. Les contenus du site sont fournis à titre informatif et peuvent évoluer.</p>
            <p>Pour toute précision sur une prestation ou une demande, écrivez à <a className="font-semibold text-[#0AA88F] underline" href="mailto:contact@lesangesdudigital.com">contact@lesangesdudigital.com</a>.</p>
          </div>
        )}
        <a href="/contact" className="mt-9 inline-flex rounded-xl bg-[#0B1530] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B2D5E]">Contacter l’équipe</a>
      </div>
    </section>
  );
}
