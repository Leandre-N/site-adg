import React from 'react';
import { ProcessPhase } from '../types';

/**
 * ProcessSection: Méthodologie en 4 phases d'ingénierie
 * Surface claire avec cartes élégantes, numérotation ordonnée et liserés de couleur
 */
export const ProcessSection: React.FC = () => {
  const phases: ProcessPhase[] = [
    {
      number: '1',
      phaseTag: 'PHASE FONDATRICE',
      title: 'Audit & Cadrage Stratégique',
      description: 'Analyse approfondie de vos processus métiers, cartographie des flux organisationnels et définition scrupuleuse du cahier des charges.',
      badgeColor: 'gold',
    },
    {
      number: '2',
      phaseTag: 'PHASE CRÉATIVE',
      title: 'Design UX/UI & Prototypage',
      description: "Architecture de l'information intuitive, wireframes et prototypes interactifs haute-fidélité validés avant tout codage.",
      badgeColor: 'gold',
    },
    {
      number: '3',
      phaseTag: 'PHASE INGÉNIERIE',
      title: 'Développement & Tests Qualité',
      description: "Ingénierie logicielle robuste sous standards internationaux, intégration d'API sécurisées et batterie de tests automatisés.",
      badgeColor: 'gold',
    },
    {
      number: '4',
      phaseTag: 'PHASE PÉRENNITÉ',
      title: 'Déploiement & Croissance Continue',
      description: 'Mise en production sans interruption de service, suivi analytique post-lancement et support technique réactif sur site à Douala.',
      badgeColor: 'teal',
    },
  ];

  return (
    <section id="process" className="bg-[#F3F5FA] text-[#0B1530] py-20 lg:py-28 px-4 sm:px-8 border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto">
        
        {/* En-tête centré */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#B58017]">
            MÉTHODOLOGIE EN 4 PHASES
          </span>
          <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] lg:text-[48px] font-[800] text-[#0B1530] mt-3 tracking-tight">
            Notre processus de travail
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#56627F] mt-4 leading-relaxed font-normal">
            Une méthode rigoureuse orientée résultats et respect strict des délais pour garantir une exécution sans friction.
          </p>
        </div>

        {/* Grille 4 cartes étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => {
            const isTeal = phase.badgeColor === 'teal';

            return (
              <div
                key={phase.number}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative group"
              >
                {/* Ligne d'accent supérieure */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 rounded-t-full ${
                    isTeal ? 'bg-[#36E2C6]' : 'bg-[#E2A93B]'
                  }`}
                />

                <div>
                  {/* Badge numérique carré */}
                  <div className="mb-5">
                    <span
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl font-['Bricolage_Grotesque'] text-lg font-extrabold shadow-sm ${
                        isTeal
                          ? 'bg-[#E6FAF6] text-[#0AA88F] border border-[#36E2C6]/30'
                          : 'bg-[#FFF8EB] text-[#B58017] border border-[#E2A93B]/30'
                      }`}
                    >
                      {phase.number}
                    </span>
                  </div>

                  {/* Kicker de phase */}
                  <span
                    className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${
                      isTeal ? 'text-[#0AA88F]' : 'text-[#B58017]'
                    }`}
                  >
                    {phase.phaseTag}
                  </span>

                  {/* Titre de l'étape */}
                  <h3 className="font-['Bricolage_Grotesque'] text-[18px] font-bold text-[#0B1530] mb-3 leading-snug">
                    {phase.title}
                  </h3>

                  {/* Description détaillée */}
                  <p className="text-[14px] text-[#56627F] leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-400 font-medium">
                  <span>Étape 0{phase.number}/04</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E2A93B] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
