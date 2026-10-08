import React, { useState } from 'react';
import { Layers, Sparkles, Check, CheckCircle2 } from 'lucide-react';

export const DesignSystemSection: React.FC = () => {
  const [clickNotice, setClickNotice] = useState<string | null>(null);

  const handleTestClick = (btnName: string) => {
    setClickNotice(`Composant testé : ${btnName}`);
    setTimeout(() => setClickNotice(null), 2500);
  };

  return (
    <section id="design-system-section" className="py-20 bg-[#071126] text-white border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#E2A93B] mb-1">
              SPÉCIFICATIONS UI & SYSTÈME DE DESIGN
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Bibliothèque de Composants Officielle
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {clickNotice && (
              <span className="text-xs text-[#36E2C6] font-mono animate-pulse">
                {clickNotice}
              </span>
            )}
            <span className="text-xs font-mono font-medium px-3 py-1 rounded bg-white/5 border border-white/10 text-[#9AA7C7]">
              Design System v1.0.4
            </span>
          </div>
        </div>

        {/* 4 Interactive Columns (Matching Screenshot Exactly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: Boutons */}
          <div className="bg-[#0B1530] rounded-2xl p-6 border border-white/10">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#9AA7C7] mb-6">
              Variantes de Boutons
            </h4>

            <div className="space-y-4">
              <div>
                <button
                  onClick={() => handleTestClick('Bouton Gold Primaire')}
                  className="w-full py-3 px-4 rounded-xl bg-[#E2A93B] hover:bg-[#F3C969] text-[#0B1530] font-semibold text-xs transition-all shadow-md active:scale-95"
                >
                  Bouton Gold Primaire
                </button>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">Fill: #E2A93B / Radius: 12px</div>
              </div>

              <div>
                <button
                  onClick={() => handleTestClick('Bouton Teal TENYSY')}
                  className="w-full py-3 px-4 rounded-xl bg-[#36E2C6] hover:bg-[#59fbde] text-[#0B1530] font-bold text-xs transition-all shadow-md active:scale-95"
                >
                  Bouton Teal TENYSY
                </button>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">Fill: #36E2C6 / SaaS Dedicated</div>
              </div>

              <div>
                <button
                  onClick={() => handleTestClick('Bouton Ghost Outline')}
                  className="w-full py-3 px-4 rounded-xl bg-transparent hover:bg-white/5 border border-white/20 hover:border-[#E2A93B]/40 text-white font-medium text-xs transition-all active:scale-95"
                >
                  Bouton Ghost Outline
                </button>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">Border: 1px / Hover: Navy</div>
              </div>
            </div>
          </div>

          {/* Column 2: Badges & Chips */}
          <div className="bg-[#0B1530] rounded-2xl p-6 border border-white/10">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#9AA7C7] mb-6">
              Badges & Chips
            </h4>

            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#E2A93B]/15 border border-[#E2A93B]/40 text-[#F3C969] text-[11px] font-semibold">
                  Agence Gold
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#36E2C6]/15 border border-[#36E2C6]/40 text-[#36E2C6] text-[11px] font-semibold">
                  TENYSY Teal
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                  Neutre
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#13224A] border border-white/5">
                <div className="text-xs text-white font-medium mb-1">
                  Tonal Depth Architecture
                </div>
                <div className="text-[11px] text-[#9AA7C7] font-mono leading-relaxed">
                  Navies 0B1530 → 13224A → 1B2D5E (Hairline borders rgba 8%)
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#36E2C6]">
                <Check className="w-3.5 h-3.5" />
                <span>Norme WCAG AA respectée</span>
              </div>
            </div>
          </div>

          {/* Column 3: Composant Carte */}
          <div className="bg-[#0B1530] rounded-2xl p-6 border border-white/10">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#9AA7C7] mb-6">
              Composant Carte
            </h4>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#13224A] border border-[#E2A93B]/40 shadow-lg shadow-[#E2A93B]/5">
                <div className="text-xs font-semibold text-white mb-1">
                  Élévation 1 avec Halo Doré et angle 16px
                </div>
                <div className="text-[11px] text-[#9AA7C7]">
                  Rayon : 16px · Border : Gold 35%
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#13224A] border border-[#36E2C6]/40 shadow-lg shadow-[#36E2C6]/5">
                <div className="text-xs font-semibold text-white mb-1">
                  Élévation 1 avec Accent Teal TENYSY
                </div>
                <div className="text-[11px] text-[#9AA7C7]">
                  Module SaaS avec bandeau supérieur
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Typographies Déclarées */}
          <div className="bg-[#0B1530] rounded-2xl p-6 border border-white/10">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#9AA7C7] mb-6">
              Typographies Déclarées
            </h4>

            <div className="space-y-4">
              <div>
                <div className="font-display text-lg font-bold text-white">
                  Bricolage Grotesque
                </div>
                <div className="text-[11px] text-[#9AA7C7]">
                  Titres, Logos & Hero Statements
                </div>
              </div>

              <div>
                <div className="font-sans text-base font-medium text-white">
                  Figtree Corps & Label
                </div>
                <div className="text-[11px] text-[#9AA7C7]">
                  Paragraphes, Boutons & Formulaires
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-bold text-[#E2A93B]">
                  Zero Pricing Discipline : Strict
                </div>
                <div className="text-[11px] text-[#9AA7C7] mt-0.5">
                  Aucun tarif figé ou mensuel. Entonnoir convergent vers devis sur-mesure.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
