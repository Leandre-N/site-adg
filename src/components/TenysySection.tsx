import React, { useState } from 'react';
import { Reveal } from './Reveal';
import {
  MessageCircle,
  BookOpen,
  LayoutGrid,
  QrCode,
  Store,
  Video,
  KeyRound,
} from 'lucide-react';

interface TenysySectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

/**
 * TenysySection: Présentation de l'application mobile TENYSY
 * Univers immersif Midnight Navy avec accents Electric Teal (#36E2C6)
 */
export const TenysySection: React.FC<TenysySectionProps> = ({ onOpenQuoteModal }) => {
  const [demoRequested, setDemoRequested] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      title: 'Messagerie & appels',
      description: 'Retrouvez vos conversations, échangez des messages et accédez à une interface d’appel audio et vidéo.',
    },
    {
      icon: BookOpen,
      title: 'Mémoires & Racines',
      description: 'Explorez des rubriques autour des arts, des racines et du patrimoine culturel africain.',
    },
    {
      icon: LayoutGrid,
      title: 'Services & paiements',
      description: 'Parcourez un catalogue de services et retrouvez des écrans dédiés aux montants et aux codes QR.',
    },
    {
      icon: Store,
      title: 'Ma Boutique',
      description: 'Consultez les produits, les indicateurs présentés et les informations liées aux ventes.',
    },
    {
      icon: KeyRound,
      title: 'Connexion & Mon Compte',
      description: 'Accédez au parcours de connexion et de vérification, puis retrouvez votre profil et les options du compte.',
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
              APPLICATION MOBILE
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#E2A93B]/20 text-[#F3C969] border border-[#E2A93B]/30 font-bold text-[11px] tracking-wider uppercase">
              PHARE
            </span>
          </div>

          <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] lg:text-[48px] font-[800] text-white tracking-tight leading-[1.15]">
              TENYSY réunit vos usages dans une seule application
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#A6B4D6] mt-4 leading-relaxed font-normal">
            De la messagerie aux espaces culturels, des services à la boutique : TENYSY rassemble plusieurs expériences
            dans une interface mobile organisée autour de vos besoins.
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

          {/* COLONNE DROITE: aperçu des espaces TENYSY */}
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
                      Les espaces de l’application
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#36E2C6] bg-[#36E2C6]/10 px-2.5 py-0.5 rounded border border-[#36E2C6]/20">
                    TENYSY MOBILE
                  </span>
                </div>

                <p className="text-[14px] text-[#C6C6CE] leading-relaxed mb-6">
                  La navigation donne accès à un espace principal, à la messagerie, aux Mémoires, aux Services et au compte utilisateur. Des écrans de boutique, de paiement et d’appel apparaissent également dans la démonstration.
                </p>

                {/* Modules observés dans la démonstration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-[#36E2C6] text-sm font-semibold mb-2">
                      <MessageCircle className="w-4 h-4" />
                      Messagerie &amp; appels
                    </div>
                    <p className="text-xs text-slate-400">Conversations, rédaction de messages et interface d’appel audio/vidéo.</p>
                  </div>
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-[#F3C969] text-sm font-semibold mb-2">
                      <BookOpen className="w-4 h-4" />
                      Mémoires &amp; Racines
                    </div>
                    <p className="text-xs text-slate-400">Rubriques de découverte consacrées aux arts, aux racines et au patrimoine africain.</p>
                  </div>
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-[#36E2C6] text-sm font-semibold mb-2">
                      <QrCode className="w-4 h-4" />
                      Services &amp; paiements
                    </div>
                    <p className="text-xs text-slate-400">Catalogue de services et écrans avec montant et code QR ; les modalités restent à confirmer.</p>
                  </div>
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-[#F3C969] text-sm font-semibold mb-2">
                      <Store className="w-4 h-4" />
                      Boutique &amp; compte
                    </div>
                    <p className="text-xs text-slate-400">Produits et indicateurs présentés dans l’espace boutique.</p>
                  </div>
                  <div className="motion-card p-4 rounded-xl bg-[#091326] border border-white/8">
                    <div className="flex items-center gap-2 text-[#36E2C6] text-sm font-semibold mb-2">
                      <KeyRound className="w-4 h-4" />
                      Connexion &amp; compte
                    </div>
                    <p className="text-xs text-slate-400">Parcours de connexion et vérification, profil et options du compte utilisateur.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-white/8 bg-[#050C1B] p-4 text-xs leading-relaxed text-slate-400">
                  Les écrans visibles présentent les parcours et espaces de l’application. Les moyens de paiement, l’envoi des codes et le fonctionnement complet des appels restent à vérifier.
                </div>
              </div>

              {/* Pied de la console avec CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[12px] text-slate-300">
                  <Video className="w-4 h-4 text-[#36E2C6]" />
                  <span>Présentation des fonctionnalités TENYSY</span>
                </div>

                <button
                  onClick={() => {
                    setDemoRequested(true);
                    onOpenQuoteModal('Présentation de l’application mobile TENYSY');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#36E2C6] hover:bg-[#28C7AD] text-[#05132C] font-bold text-[13px] shadow-[0_4px_16px_rgba(54,226,198,0.25)] transition-all cursor-pointer"
                >
                  {demoRequested ? 'Demande envoyée ✓' : 'En savoir plus sur TENYSY'}
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
