import React from 'react';
import { ArrowLeft, Award, Shield, CheckCircle2, Rocket, Eye, MapPin, Users, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { ASSETS } from '../data/assets.ts';

interface AboutScreenProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onBackToHome, onOpenQuote }) => {
  return (
    <div className="min-h-screen bg-[#07132B] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9AA7C7] hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil</span>
          </button>

          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2A93B] block mb-2 font-mono">
            NOTRE HISTOIRE & IDENTITÉ
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            L'alliance de l'éthique spirituelle et de la haute précision technologique
          </h1>
        </div>

        {/* Founder & Agency Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#E2A93B]/40 shadow-2xl relative group bg-[#0B1530]">
              <img 
                src={ASSETS.ceo} 
                alt="Sylvain Teutsing, CEO" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1530] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B1530]/90 backdrop-blur-md border border-white/10">
                <div className="font-display text-base font-bold text-white">
                  {COMPANY_INFO.founder.name}
                </div>
                <div className="text-xs text-[#E2A93B] font-mono font-semibold">
                  {COMPANY_INFO.founder.role}
                </div>
                <div className="text-[11px] text-[#9AA7C7] mt-1">
                  Ange Raphaël, Douala, Cameroun
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E1B38] border border-white/10">
              <h3 className="font-display text-xl font-bold text-[#F3C969] mb-3">
                Le Manifeste de Sylvain Teutsing
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed italic mb-4">
                "{COMPANY_INFO.founder.quote}"
              </p>
              <p className="text-xs sm:text-sm text-[#9AA7C7] leading-relaxed">
                Fondée à Douala, la métropole économique du Cameroun, notre structure répond à un impératif clair : élever le niveau d'exigence technique et d'intégrité opérationnelle dans la conception de solutions logicielles d'entreprise en Afrique Centrale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0E1B38] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E2A93B]/10 text-[#E2A93B] flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2">{COMPANY_INFO.mission.title}</h4>
                <p className="text-xs text-[#9AA7C7] leading-relaxed">{COMPANY_INFO.mission.text}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E1B38] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#36E2C6]/10 text-[#36E2C6] flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2">{COMPANY_INFO.vision.title}</h4>
                <p className="text-xs text-[#9AA7C7] leading-relaxed">{COMPANY_INFO.vision.text}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Agency Lab Photo & Facilities */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0E1B38] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono text-[#36E2C6] uppercase font-bold">
                LABORATOIRE & INGÉNIERIE LOCALE
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Nos bureaux à Ange Raphaël, Douala
              </h3>
              <p className="text-xs sm:text-sm text-[#9AA7C7] leading-relaxed">
                Une équipe permanente d'architectes logiciels, d'ingénieurs réseaux et de consultants certifiés. Nous disposons d'équipements de test réels pour reproduire les conditions de connectivité et de charge des réseaux télécoms locaux.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-[#F3C969]">
                  <MapPin className="w-4 h-4 text-[#E2A93B]" />
                  <span>En face de THE BEST, Douala</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10">
              <img 
                src={ASSETS.agency} 
                alt="Bureaux Les Anges du Digital Douala" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-[#0A1633] border border-[#E2A93B]/30 max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Discuter de votre projet avec notre direction
          </h3>
          <p className="text-xs text-[#9AA7C7] mb-6">
            Prenez rendez-vous directement dans nos locaux à Douala ou sollicitez un cadrage technique en visio.
          </p>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-[#E2A93B] hover:bg-[#F3C969] text-[#0B1530] font-bold text-xs shadow-lg transition-all"
          >
            Prendre contact avec l'équipe
          </button>
        </div>

      </div>
    </div>
  );
};
