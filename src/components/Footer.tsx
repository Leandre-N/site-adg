import React from 'react';
import { MapPin, Mail, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

/**
 * Footer: Pied de page complet institutionnel et technique
 * Conforme à la charte Spiritual-Tech Luxe de Douala
 */
export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#020713] text-[#A6B4D6] border-t border-white/10 pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-[1380px] mx-auto">
        
        {/* Grille 4 colonnes principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/8">
          
          {/* Colonne 1 : Identité & Coordonnées (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#13224A] border border-[#E2A93B]/40 flex items-center justify-center text-[#E2A93B]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM3.5 8C3.5 8 5.5 8.5 7.5 10.5C9.5 12.5 10 15 10 15C10 15 8.5 14.5 7 13.5C5.5 12.5 4 10.5 3.5 8ZM20.5 8C20.5 8 18.5 8.5 16.5 10.5C14.5 12.5 14 15 14 15C14 15 15.5 14.5 17 13.5C18.5 12.5 20 10.5 20.5 8ZM11 8H13V19C13 19.6 12.6 20 12 20C11.4 20 11 19.6 11 19V8Z" />
                </svg>
              </div>
              <div>
                <span className="font-['Bricolage_Grotesque'] text-[18px] font-bold text-white block leading-tight">
                  Les Anges du Digital
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2A93B]">
                  DOUALA, CAMEROUN
                </span>
              </div>
            </div>

            <p className="text-[13.5px] leading-relaxed text-[#8E9DBE]">
              Société d'ingénierie et d'architecture de solutions logicielles d'entreprise à Douala. Nous concevons des écosystèmes technologiques avec rigueur, haute performance et rentabilité.
            </p>

            <div className="space-y-2 pt-2 text-[12.5px] text-[#A6B4D6]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E2A93B] shrink-0 mt-0.5" />
                <span>Ange Raphaël, à 20 m de la Saladière, en face de THE BEST, Douala</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#36E2C6] shrink-0" />
                <a href="mailto:contact@lesangesdudigital.com" className="hover:text-white transition-colors">
                  contact@lesangesdudigital.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E2A93B] shrink-0" />
                <span>Lundi au vendredi : 08h00 – 17h30</span>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-white tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-[13.5px]">
              <li>
                <a href="#hero" className="hover:text-[#F3C969] transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] text-[#E2A93B]">›</span> Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3C969] transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] text-[#E2A93B]">›</span> À propos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3C969] transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] text-[#E2A93B]">›</span> Services Métiers
                </a>
              </li>
              <li>
                <a href="#tenysy" className="text-[#36E2C6] hover:text-white transition-colors flex items-center gap-1.5 font-semibold">
                  <span className="text-[10px] text-[#36E2C6]">›</span> TENYSY Cloud ERP
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F3C969] transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] text-[#E2A93B]">›</span> Nos Réalisations
                </a>
              </li>
              <li>
                <a href="#actualites" className="hover:text-[#F3C969] transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] text-[#E2A93B]">›</span> Actualités &amp; Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Dernières Publications (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-white tracking-wide">
              Dernières Publications
            </h4>
            <div className="space-y-3">
              <a href="#actualites" className="block p-3 rounded-xl bg-[#091326] border border-white/5 hover:border-[#36E2C6]/40 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#36E2C6] block">
                  TRANSFORMATION ERP
                </span>
                <span className="text-[13px] font-medium text-white line-clamp-2 mt-1">
                  Déploiement de TENYSY dans les PME d'Afrique Centrale
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  14 Octobre 2024
                </span>
              </a>

              <a href="#actualites" className="block p-3 rounded-xl bg-[#091326] border border-white/5 hover:border-[#E2A93B]/40 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E2A93B] block">
                  ARCHITECTURE CLOUD
                </span>
                <span className="text-[13px] font-medium text-white line-clamp-2 mt-1">
                  Sécurisation des architectures cloud d'entreprise à Douala
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  28 Septembre 2024
                </span>
              </a>
            </div>
          </div>

          {/* Colonne 4 : Accompagnement & CTA (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-white tracking-wide">
              Accompagnement
            </h4>
            <p className="text-[13px] text-[#8E9DBE] leading-relaxed">
              Engagez votre modernisation d'infrastructure avec nos ingénieurs spécialistes basés à Douala.
            </p>

            <div className="p-3.5 rounded-xl bg-[#091326] border border-white/8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3C969] block">
                Étude de Projet Dédiée
              </span>
              <span className="text-[12px] text-slate-300 block mt-1">
                Cahier des charges, audit d'architecture et dimensionnement sur-mesure.
              </span>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[13px] shadow hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Obtenir un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Barre de copyright et mentions légales */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-500">
          <div>
            © 2024 Les Anges du Digital. Tous droits réservés. Douala, Cameroun.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              Conditions Générales
            </a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              SLA &amp; Sécurité
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
