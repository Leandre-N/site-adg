import React from 'react';
import { Phone, Mail, Building, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

/**
 * ContactSection: Accompagnement technique & coordonnées prioritaires
 * Présente les 4 lignes téléphoniques camerounaises, l'email officiel et le siège à Douala
 */
export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const phoneNumbers = [
    { number: '+237 621 80 24 05', label: '(WhatsApp principal)', isPrimary: true },
    { number: '+237 676 35 59 15' },
    { number: '+237 697 42 47 11' },
    { number: '+237 683 16 00 68' },
  ];

  return (
    <section id="contact" className="bg-[#05132C] text-white py-20 lg:py-28 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
      
      {/* Halo lumineux céleste */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E2A93B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto relative z-10">
        
        {/* Entête avec CTA direct WhatsApp et Appel */}
        <Reveal className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#E2A93B]">
              ACCOMPAGNEMENT TECHNIQUE &amp; PARTENARIAT
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] lg:text-[48px] font-[800] text-white mt-2 tracking-tight leading-tight">
              Restez connecté avec les experts du digital
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#A6B4D6] mt-4 leading-relaxed font-normal">
              Sollicitez une intervention, planifiez une étude personnalisée de vos infrastructures ou obtenez une estimation détaillée via notre canal prioritaire.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <a
              href="https://wa.me/237621802405?text=Bonjour%20Les%20Anges%20du%20Digital,%20je%20souhaite%20obtenir%20un%20devis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[14px] shadow-[0_4px_24px_rgba(226,169,59,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Obtenir un devis (WhatsApp)</span>
            </a>

            <a
              href="tel:+237621802405"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#0E1B34] hover:bg-[#13224A] text-white font-semibold text-[14px] border border-white/15 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#36E2C6]" />
              <span>Appelez-nous directement</span>
            </a>
          </div>
        </Reveal>

        {/* Grille 3 cartes de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carte 1: Lignes Téléphoniques */}
          <Reveal className="h-full">
          <div className="motion-card h-full rounded-2xl p-7 bg-[#0E1B34] border border-white/10 hover:border-[#E2A93B]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#13224A] border border-[#E2A93B]/30 flex items-center justify-center text-[#E2A93B] mb-5 shadow">
                <Phone className="w-5 h-5" />
              </div>

              <h3 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-white mb-4">
                Lignes Téléphoniques
              </h3>

              <div className="space-y-2.5 font-mono text-[14px]">
                {phoneNumbers.map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[#D8E2FF]">
                    <a
                      href={`tel:${p.number.replace(/\s+/g, '')}`}
                      className="hover:text-[#E2A93B] transition-colors"
                    >
                      {p.number}
                    </a>
                    {p.label && (
                      <span className="text-[11px] font-sans font-bold text-[#36E2C6]">
                        {p.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[12px] text-slate-400">
              Assistance vocale &amp; WhatsApp 7j/7
            </div>
          </div>
          </Reveal>

          {/* Carte 2: Messagerie Électronique */}
          <Reveal delay={100} className="h-full">
          <div className="motion-card h-full rounded-2xl p-7 bg-[#0E1B34] border border-white/10 hover:border-[#36E2C6]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#13224A] border border-[#36E2C6]/30 flex items-center justify-center text-[#36E2C6] mb-5 shadow">
                <Mail className="w-5 h-5" />
              </div>

              <h3 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-white mb-4">
                Messagerie Électronique
              </h3>

              <a
                href="mailto:contact@lesangesdudigital.com"
                className="font-mono text-[15px] text-[#36E2C6] hover:underline block break-all font-medium"
              >
                contact@lesangesdudigital.com
              </a>

              <p className="text-[14px] text-[#A6B4D6] mt-4 leading-relaxed">
                Réponse sous 24h ouvrées par un ingénieur d'affaires attitré.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={onOpenQuoteModal}
                className="text-[13px] font-semibold text-[#F3C969] hover:underline cursor-pointer"
              >
                Formulaire de soumission prioritaire ➔
              </button>
            </div>
          </div>
          </Reveal>

          {/* Carte 3: Quartier Général */}
          <Reveal delay={200} className="h-full">
          <div className="motion-card h-full rounded-2xl p-7 bg-[#0E1B34] border border-white/10 hover:border-[#E2A93B]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#13224A] border border-[#E2A93B]/30 flex items-center justify-center text-[#E2A93B] mb-5 shadow">
                <Building className="w-5 h-5" />
              </div>

              <h3 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-white mb-4">
                Quartier Général
              </h3>

              <p className="text-[14.5px] text-[#D8E2FF] leading-relaxed">
                Ange Raphaël, à 20 m de la Saladière, en face de THE BEST,
              </p>
              <p className="text-[14px] font-bold text-[#E2A93B] mt-1">
                Douala, Cameroun
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[12px] text-slate-400">
              Bureaux ouverts du lundi au vendredi (08h00 - 17h30)
            </div>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
