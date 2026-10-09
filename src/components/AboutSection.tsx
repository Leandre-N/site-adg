import React from 'react';
import { Rocket, Eye, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

/**
 * AboutSection: Présentation institutionnelle et leadership
 * Arrière-plan clair (#F3F5FA - Dawn Blue-White) pour un contraste et une lisibilité parfaits
 */
export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#F3F5FA] text-[#0B1530] py-20 lg:py-28 px-4 sm:px-8 border-t border-slate-200">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLONNE GAUCHE: Visuel Plaque / Siège & Badge Dirigeant */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Carte visuelle institutionnelle */}
              <div className="motion-card relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1530] via-[#13224A] to-[#1B2D5E] border-2 border-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(11,21,48,0.18)] min-h-[420px] flex flex-col justify-between text-white">
                
                {/* Décoration géométrique céleste en fond */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E2A93B]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#36E2C6]/15 via-transparent to-transparent pointer-events-none" />

                {/* Sceau / Emblème Angélique gravé */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#E2A93B]/40 flex items-center justify-center shadow-inner">
                    <ShieldCheck className="w-6 h-6 text-[#F3C969]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#F3C969] bg-white/10 px-3 py-1 rounded-full border border-[#E2A93B]/30">
                    Fondé à Douala
                  </span>
                </div>

                {/* Typography centrale sur la plaque de l'immeuble */}
                <div className="my-auto text-center py-8 z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-[#E2A93B] to-[#F3C969] p-0.5 shadow-lg shadow-[#E2A93B]/30 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#0E1B34] flex items-center justify-center text-[#E2A93B]">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM3.5 8C3.5 8 5.5 8.5 7.5 10.5C9.5 12.5 10 15 10 15C10 15 8.5 14.5 7 13.5C5.5 12.5 4 10.5 3.5 8ZM20.5 8C20.5 8 18.5 8.5 16.5 10.5C14.5 12.5 14 15 14 15C14 15 15.5 14.5 17 13.5C18.5 12.5 20 10.5 20.5 8ZM11 8H13V19C13 19.6 12.6 20 12 20C11.4 20 11 19.6 11 19V8Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-extrabold text-[#F3F5FA] tracking-wide">
                    LES ANGES DU DIGITAL
                  </h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#E2A93B] mt-1 font-semibold">
                    Siège Ange Raphaël · Douala
                  </p>
                </div>

                {/* Pied de plaque */}
                <div className="flex items-center justify-between text-[11px] text-[#A6B4D6] border-t border-white/10 pt-4 z-10">
                  <span>Société d'ingénierie logicielle</span>
                  <span className="font-mono text-[#36E2C6]">TENYSY CORE TECH</span>
                </div>
              </div>

              {/* Badge flottant Dirigeant & Fondateur */}
              <div className="motion-card sm:absolute -bottom-6 sm:-right-4 mt-4 sm:mt-0 bg-white rounded-xl p-4 shadow-[0_12px_32px_rgba(11,21,48,0.15)] border border-slate-200/80 flex items-center gap-3.5 z-20">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#E2A93B] to-[#F3C969] flex items-center justify-center text-[#0B1530] font-bold text-sm shadow">
                  TS
                </div>
                <div>
                  <h4 className="font-['Bricolage_Grotesque'] text-[15px] font-bold text-[#0B1530] leading-tight">
                    TEUTSING N. SYLVAIN
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] font-bold text-[#B58017] tracking-wider uppercase">
                      FONDATEUR &amp; CEO
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-0.5">
                      <MapPin className="w-2.5 h-2.5" /> Douala, Cameroun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* COLONNE DROITE: Texte éditorial & Cartes Mission/Vision */}
          <Reveal className="lg:col-span-7 space-y-6">
            
            {/* Tag d'en-tête */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E2A93B]" />
              <span className="text-[12px] font-bold tracking-widest uppercase text-[#B58017]">
                Ingénierie &amp; Leadership Digital
              </span>
            </div>

            {/* Titre percutant */}
            <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[40px] lg:text-[46px] font-[800] text-[#0B1530] leading-[1.18] tracking-tight">
              L'excellence technologique au service de la rentabilité de votre entreprise
            </h2>

            {/* Paragraphe principal */}
            <p className="text-[16px] sm:text-[18px] text-[#4A5568] leading-relaxed font-normal">
              Chez Les Anges du Digital, nous concevons des écosystèmes logiciels durables et performants.
              Ancrés au carrefour dynamique d'Ange Raphaël à Douala, nous accompagnons les fleurons de
              l'économie camerounaise vers une autonomie technologique et une croissance mesurable.
            </p>

            {/* Grille 2 cartes : Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Carte Mission */}
              <Reveal delay={70} className="h-full">
              <div className="motion-card h-full bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#E2A93B]/30 flex items-center justify-center text-[#E2A93B] mb-4">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="font-['Bricolage_Grotesque'] text-[18px] font-bold text-[#0B1530] mb-2">
                  Notre Mission
                </h3>
                <p className="text-[14px] text-[#56627F] leading-relaxed">
                  Délivrer une ingénierie logicielle de pointe, optimiser les processus opérationnels
                  et accélérer le retour sur investissement des entreprises d'Afrique Centrale.
                </p>
              </div>
              </Reveal>

              {/* Carte Vision */}
              <Reveal delay={150} className="h-full">
              <div className="motion-card h-full bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#E6FAF6] border border-[#36E2C6]/40 flex items-center justify-center text-[#0AA88F] mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-['Bricolage_Grotesque'] text-[18px] font-bold text-[#0B1530] mb-2">
                  Notre Vision
                </h3>
                <p className="text-[14px] text-[#56627F] leading-relaxed">
                  Bâtir des solutions logicielles souveraines, intuitives et scalables,
                  incarnées par notre suite applicative propriétaire TENYSY.
                </p>
              </div>
              </Reveal>
            </div>

            {/* Bouton d'action */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B1530] hover:bg-[#13224A] text-white font-semibold text-[14px] shadow-lg shadow-[#0B1530]/15 hover:shadow-xl transition-all cursor-pointer"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 text-[#F3C969]" />
              </a>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
};
