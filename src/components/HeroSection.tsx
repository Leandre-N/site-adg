import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

/**
 * HeroSection: Bannière principale majestueuse "Spiritual-Tech Luxe"
 * Présente le cœur de marque avec l'orbe céleste doré et les leviers d'action.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      kicker: "ACCÉLÉRATION COMMERCIALE",
      kickerSub: "Propulsez votre Croissance Digitale",
      title: "Propulsez la croissance digitale de votre entreprise",
      description: "Développez votre chiffre d'affaires et renforcez votre autorité de marque grâce à des solutions numériques agiles, performantes et déployées sur-mesure à Douala.",
    },
    {
      kicker: "INGÉNIERIE SOUVERAINE",
      kickerSub: "Architecture Logicielle sur Mesure",
      title: "Des plateformes d'envergure conçues pour l'Afrique Centrale",
      description: "Infrastructure robuste, résilience face aux réseaux variables et conception ergonomique ultra-rapide adaptée aux spécificités de vos flux opérationnels.",
    },
    {
      kicker: "SUITE ERP TENYSY",
      kickerSub: "Automatisation & Pilotage Global",
      title: "Centralisez vos finances, stocks et relations clients",
      description: "L'application métier complète qui élimine les lenteurs administratives et décuple la productivité de vos équipes sur site et à distance.",
    }
  ];

  const currentSlide = slides[activeSlide];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative min-h-[740px] lg:min-h-[820px] bg-[#05132C] overflow-hidden flex flex-col justify-between pt-12 pb-10">
      
      {/* Halo de lumière d'arrière-plan céleste */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#E2A93B]/10 via-[#36E2C6]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#13224A]/40 via-transparent to-transparent pointer-events-none" />

      {/* Conteneur principal */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full z-10">
        
        {/* En-tête de section: Eyebrow Badge stylisé */}
        <div className="inline-flex items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E2A93B]/30 to-[#F3C969]/10 text-[#F3C969] text-[11px] font-bold tracking-wider uppercase border border-[#E2A93B]/40">
            {currentSlide.kicker}
          </span>
          <span className="text-xs italic text-[#C6C6CE] font-light">
            {currentSlide.kickerSub}
          </span>
        </div>

        {/* Titre géant Bricolage Grotesque */}
        <h1 className="font-['Bricolage_Grotesque'] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[62px] font-[800] text-white tracking-tight leading-[1.12] max-w-4xl text-balance drop-shadow-sm">
          {currentSlide.title}
        </h1>

        {/* Sous-titre descriptif Figtree */}
        <p className="mt-5 text-[16px] sm:text-[18px] lg:text-[20px] text-[#A6B4D6] max-w-2xl leading-relaxed font-normal">
          {currentSlide.description}
        </p>

        {/* Boutons d'appel à l'action */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[15px] shadow-[0_8px_24px_rgba(226,169,59,0.30)] hover:shadow-[0_12px_28px_rgba(226,169,59,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>En savoir plus</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.8]" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E1B34]/90 hover:bg-[#13224A] text-white font-medium text-[15px] border border-white/15 hover:border-[#E2A93B]/40 transition-all shadow-sm"
          >
            <span>Contactez-nous</span>
            <MessageSquare className="w-4 h-4 text-[#9AA7C7]" />
          </a>
        </div>
      </div>

      {/* Orbe Céleste Doré au centre/bas du Hero */}
      <div className="relative my-8 lg:my-4 flex items-center justify-center w-full z-10 pointer-events-none">
        <div className="relative flex items-center justify-center">
          
          {/* Lignes d'orbite rayonnantes */}
          <div className="absolute w-[340px] sm:w-[420px] lg:w-[480px] h-[340px] sm:h-[420px] lg:h-[480px] rounded-full border border-dashed border-[#E2A93B]/20 animate-orbit" />
          <div className="absolute w-[280px] sm:w-[350px] lg:w-[390px] h-[280px] sm:h-[350px] lg:h-[390px] rounded-full border border-white/5" />

          {/* Halo d'illumination de l'orbe */}
          <div className="absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full bg-[#E2A93B]/25 blur-3xl" />

          {/* Sphère dorée stylisée */}
          <div className="relative w-36 sm:w-44 h-36 sm:h-44 rounded-full bg-gradient-to-br from-[#F5D076] via-[#B88424] to-[#0A1733] p-[2px] shadow-[0_0_60px_rgba(226,169,59,0.45)]">
            <div className="w-full h-full rounded-full bg-[#0E1B34] flex items-center justify-center relative overflow-hidden">
              
              {/* Silhouette géographique dorée d'Afrique / Continent stylisé */}
              <svg viewBox="0 0 100 100" className="w-28 h-28 text-[#F3C969] opacity-90 drop-shadow-[0_0_12px_rgba(243,201,105,0.6)]" fill="currentColor">
                <path d="M48 20 C 55 22, 65 28, 68 36 C 70 42, 67 48, 62 52 C 58 55, 60 62, 57 70 C 54 78, 48 84, 46 82 C 43 79, 44 72, 40 68 C 36 64, 30 62, 28 55 C 26 48, 30 42, 34 38 C 36 34, 40 25, 48 20 Z" />
                <circle cx="58" cy="50" r="3.5" fill="#36E2C6" className="animate-ping" />
                <circle cx="58" cy="50" r="2.5" fill="#36E2C6" />
              </svg>

              {/* Réflection vitrée */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure : Barres d'étapes / pagination + flèches de navigation */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full z-10 flex items-center justify-between">
        
        {/* Segments indicateurs */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-md">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer flex-1"
              style={{
                backgroundColor:
                  activeSlide === idx
                    ? idx === 0
                      ? '#36E2C6'
                      : idx === 1
                      ? '#E2A93B'
                      : '#F3C969'
                    : 'rgba(255, 255, 255, 0.15)',
                width: activeSlide === idx ? '60px' : '40px'
              }}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Flèches de navigation circulaire */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#13224A]/80 hover:bg-[#1B2D5E] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95 shadow"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#13224A]/80 hover:bg-[#1B2D5E] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95 shadow"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
