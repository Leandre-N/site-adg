import React from 'react';

/**
 * DesignSystemShowcase: Spécifications UI & Système de Design Officiel
 * Reproduit fidèlement la section de référence des composants de la maquette Stitch
 */
export const DesignSystemShowcase: React.FC = () => {
  return (
    <section className="bg-[#030918] text-white py-14 px-4 sm:px-8 border-b border-white/10">
      <div className="max-w-[1380px] mx-auto">
        
        {/* Bandeau d'en-tête de la bibliothèque */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9AA7C7]">
            SPÉCIFICATIONS UI &amp; SYSTÈME DE DESIGN
          </span>
          <span className="text-[11px] font-mono text-[#36E2C6] bg-[#36E2C6]/10 px-2 py-0.5 rounded border border-[#36E2C6]/25">
            Design System v1.0.4
          </span>
        </div>

        <h3 className="font-['Bricolage_Grotesque'] text-[24px] sm:text-[28px] font-bold text-white mb-8">
          Bibliothèque de Composants Officielle
        </h3>

        {/* 4 blocs de spécifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Variantes de boutons */}
          <div className="p-5 rounded-xl bg-[#091326] border border-white/8 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA7C7] block mb-3">
              Variantes de Boutons
            </span>
            <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[13px] shadow-sm">
              Bouton Gold Primaire
            </button>
            <button className="w-full py-2.5 px-4 rounded-xl bg-[#36E2C6] text-[#05132C] font-bold text-[13px] shadow-sm">
              Bouton Teal TENYSY
            </button>
            <button className="w-full py-2.5 px-4 rounded-xl bg-transparent border border-white/20 hover:border-white/40 text-white font-medium text-[13px]">
              Bouton Ghost Outline
            </button>
          </div>

          {/* 2. Badges & Chips */}
          <div className="p-5 rounded-xl bg-[#091326] border border-white/8 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA7C7] block mb-3">
              Badges &amp; Chips
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#E2A93B]/20 text-[#F3C969] border border-[#E2A93B]/40 text-[11px] font-bold uppercase tracking-wider">
                Agence Gold
              </span>
              <span className="px-3 py-1 rounded-full bg-[#36E2C6]/15 text-[#36E2C6] border border-[#36E2C6]/30 text-[11px] font-bold uppercase tracking-wider">
                TENYSY Teal
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[11px] font-medium">
                Neutre
              </span>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] text-[#A6B4D6] font-mono">
              Tonal Depth : Navies 0B1530 → 13224A
            </div>
          </div>

          {/* 3. Composant Carte */}
          <div className="p-5 rounded-xl bg-[#091326] border border-white/8 space-y-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA7C7] block mb-3">
              Composant Carte
            </span>
            <div className="p-3 rounded-lg bg-[#0E1B34] border border-[#E2A93B]/30 text-[12px] text-[#D8E2FF]">
              Élévation 1 avec Halo Doré et angle 16px.
            </div>
            <div className="p-3 rounded-lg bg-[#0E1B34] border border-[#36E2C6]/30 text-[12px] text-[#D8E2FF]">
              Élévation 1 avec Accent Teal TENYSY.
            </div>
          </div>

          {/* 4. Typographies Déclarées */}
          <div className="p-5 rounded-xl bg-[#091326] border border-white/8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA7C7] block mb-3">
              Typographies Déclarées
            </span>
            <div className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-white">
              Bricolage Grotesque
            </div>
            <div className="text-[13px] text-[#C6C6CE]">
              Figtree Corps &amp; Label
            </div>
            <div className="pt-2 text-[11px] font-mono text-[#E2A93B]">
              Zero Pricing Discipline : Strict
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
