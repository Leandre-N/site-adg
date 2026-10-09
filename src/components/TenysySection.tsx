import React, { useState } from 'react';
import { Reveal } from './Reveal';
import {
  Zap,
  SlidersHorizontal,
  Users,
  ShieldCheck,
  Terminal,
  Activity,
  CheckCircle2,
  Clock,
  TrendingDown
} from 'lucide-react';

interface TenysySectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

/**
 * TenysySection: Présentation de la suite ERP TENYSY
 * Univers immersif Midnight Navy avec accents Electric Teal (#36E2C6)
 */
export const TenysySection: React.FC<TenysySectionProps> = ({ onOpenQuoteModal }) => {
  const [demoRequested, setDemoRequested] = useState(false);

  const features = [
    {
      icon: Zap,
      title: 'Simple dès le premier jour',
      description: 'Prise en main immédiate sans courbe d’apprentissage fastidieuse. Interface intuitive et fluide.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Adapté à votre métier',
      description: 'Commerce, cabinet de conseil, logistique ou prestations de service : modules configurables selon vos flux.',
    },
    {
      icon: Users,
      title: 'Travail en équipe',
      description: 'Multi-utilisateurs avec gestion fine des rôles, permissions granulaires et historique des modifications en direct.',
    },
    {
      icon: ShieldCheck,
      title: 'Accompagnement Expert & Déploiement Local',
      description: 'Intégration sur-mesure sur site à Douala, migration sécurisée de vos données et assistance technique permanente.',
    },
  ];

  return (
    <section id="tenysy" className="relative bg-[#05132C] text-white py-20 lg:py-28 px-4 sm:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Lueur subtile Electric Teal */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#36E2C6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E2A93B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto relative z-10">
        
        {/* En-tête de la section */}
        <Reveal className="max-w-3xl mb-16">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-[#36E2C6]/15 text-[#36E2C6] border border-[#36E2C6]/30 font-bold text-[11px] tracking-wider uppercase">
              NOUVEAU PROJET
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#E2A93B]/20 text-[#F3C969] border border-[#E2A93B]/30 font-bold text-[11px] tracking-wider uppercase">
              PHARE
            </span>
          </div>

          <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] lg:text-[48px] font-[800] text-white tracking-tight leading-[1.15]">
            TENYSY, pensé pour faire avancer votre activité
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#A6B4D6] mt-4 leading-relaxed font-normal">
            Une application centrale et limpide qui soulage la complexité administrative pour vous permettre d'accélérer vos ventes.
          </p>
        </div>
        </Reveal>

        {/* Grille principale 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* COLONNE GAUCHE: 4 Atouts Fonctionnels */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <Reveal key={index} delay={index * 75}>
                <div className="motion-card p-5 rounded-2xl bg-[#0E1B34] border border-white/10 hover:border-[#36E2C6]/40 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#13224A] border border-[#36E2C6]/30 flex items-center justify-center text-[#36E2C6] shrink-0 mt-0.5 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Bricolage_Grotesque'] text-[17px] font-bold text-white mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-[13.5px] text-[#C6C6CE] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>

          {/* COLONNE DROITE: Simulation Console Opérationnelle TENYSY */}
          <Reveal className="lg:col-span-7">
          <div className="flex h-full flex-col">
            <div className="rounded-2xl bg-[#0E1B34] border border-[#36E2C6]/30 shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Ligne d'accent supérieure */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#36E2C6] via-[#2DD0B5] to-[#E2A93B]" />

              {/* En-tête de la console */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#36E2C6] animate-pulse" />
                    <span className="font-['Bricolage_Grotesque'] text-[13px] font-bold uppercase tracking-wider text-white">
                      Aperçu du Tableau de Bord Opérationnel
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#36E2C6] bg-[#36E2C6]/10 px-2.5 py-0.5 rounded border border-[#36E2C6]/20">
                    TENYSY CORE V2.4
                  </span>
                </div>

                <p className="text-[14px] text-[#C6C6CE] leading-relaxed mb-6">
                  Connectez tous vos collaborateurs sans délai : saisie des commandes en 3 clics, facturation instantanée et relances automatiques configurées sans expertise technique préalable.
                </p>

                {/* Blocs métriques intégrés */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  
                  {/* Métrique 1 */}
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#36E2C6]" />
                      <span>Temps de déploiement moyen</span>
                    </div>
                    <div className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-white">
                      Moins de 48h
                    </div>
                    <div className="text-[11px] text-[#36E2C6] mt-0.5">
                      Formation incluse de vos équipes
                    </div>
                  </div>

                  {/* Métrique 2 */}
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                      <TrendingDown className="w-3.5 h-3.5 text-[#E2A93B]" />
                      <span>Temps administratif économisé</span>
                    </div>
                    <div className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#36E2C6]">
                      -65% d'efforts
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Automatisation des saisies redondantes
                    </div>
                  </div>
                </div>

                {/* Console logs en direct */}
                <div className="bg-[#050C1B] rounded-xl p-4 border border-white/8 font-mono text-[12px] space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-[#36E2C6]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>[TENYSY Sync] 14 factures générées et transmises aux clients</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F3C969]">
                    <Activity className="w-3.5 h-3.5 shrink-0" />
                    <span>[Alerte Stock] 2 références réapprovisionnées automatiquement</span>
                  </div>
                </div>
              </div>

              {/* Pied de la console avec CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[12px] text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#36E2C6]" />
                  <span>Déploiement local sécurisé à Douala</span>
                </div>

                <button
                  onClick={() => {
                    setDemoRequested(true);
                    onOpenQuoteModal('Démonstration Live TENYSY ERP');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#36E2C6] hover:bg-[#28C7AD] text-[#05132C] font-bold text-[13px] shadow-[0_4px_16px_rgba(54,226,198,0.25)] transition-all cursor-pointer"
                >
                  {demoRequested ? 'Demande envoyée ✓' : 'Demander une démonstration'}
                </button>
              </div>

            </div>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
