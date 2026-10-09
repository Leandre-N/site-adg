import React from 'react';
import { Reveal } from './Reveal';

/**
 * PartnersSection: Réseau de confiance & alliances régionales
 * Badges élégants avec points indicateurs sur fond Midnight Navy
 */
export const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'Mokalaw Firm' },
    { name: 'Collaborative Research Africa' },
    { name: 'ASFO Architect' },
    { name: 'Clinique Intégrale' },
    { name: 'Solutions Immigration Canada' },
    { name: 'Asetah Tribe' },
    { name: 'Telsoft Africa' },
    { name: 'Journal Matila' },
    { name: 'Relais Actu Santé' },
    { name: 'World Africa Magazine' },
  ];

  return (
    <section className="bg-[#05132C] text-white py-16 lg:py-20 px-4 sm:px-8 border-b border-white/10">
      <div className="max-w-[1380px] mx-auto text-center">
        
        {/* Eyebrow & Titre */}
        <Reveal>
        <div>
        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#E2A93B]">
          CONFIANCE &amp; ALLIANCES RÉGIONALES
        </span>
        <h2 className="font-['Bricolage_Grotesque'] text-[28px] sm:text-[36px] font-[800] text-white mt-2 tracking-tight">
          Les entreprises qui nous font confiance
        </h2>
        </div>
        </Reveal>

        {/* Grille de partenaires en capsules stylisées */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 45} className="flex">
            <div className="motion-card--pill inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#0E1B34] border border-white/10 hover:border-[#E2A93B]/40 transition-colors shadow-sm cursor-default group">
              <span className="w-2 h-2 rounded-full bg-[#36E2C6] group-hover:bg-[#E2A93B] transition-colors shrink-0" />
              <span className="text-[13px] sm:text-[14px] font-medium text-[#D8E2FF] group-hover:text-white transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
