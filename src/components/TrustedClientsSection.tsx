import React from 'react';
import { TRUSTED_PARTNERS } from '../data/portfolioData.ts';

interface TrustedClientsSectionProps {
  onSelectClient?: (clientName: string) => void;
}

export const TrustedClientsSection: React.FC<TrustedClientsSectionProps> = ({ onSelectClient }) => {
  return (
    <section className="py-20 bg-[#07132B] text-white border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#E2A93B]">
              CONFIANCE & ALLIANCES RÉGIONALES
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
            Les entreprises qui nous font confiance
          </h2>
          <p className="text-xs sm:text-sm text-[#9AA7C7]">
            Leaders économiques, cabinets d'experts et institutions de référence en Afrique Centrale
          </p>
        </div>

        {/* Partners Pills Grid (Matching Screenshot Layout) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {TRUSTED_PARTNERS.map((partner, idx) => (
            <button
              key={idx}
              onClick={() => onSelectClient && onSelectClient(partner.name)}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-[#101E3D] hover:bg-[#1A2E5C] border border-white/10 hover:border-[#E2A93B]/40 text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all shadow-sm flex items-center gap-2 group active:scale-[0.98]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#36E2C6] group-hover:bg-[#E2A93B] transition-colors"></span>
              <span className="tracking-wide font-medium">{partner.name}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
