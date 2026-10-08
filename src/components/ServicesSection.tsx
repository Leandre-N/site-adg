import React from 'react';
import {
  Globe,
  Smartphone,
  Server,
  Wrench,
  Palette,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Network,
  Headset,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

/**
 * ServicesSection: Catalogue complet des prestations d'excellence métier
 * Grille de 11 cartes de services + Bannière d'envergure TENYSY ERP
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      id: 'web',
      isFeatured: true,
      badge: 'PHARE',
      icon: Globe,
      title: 'Création de Sites Web & Portails',
      description: 'Conception sur-mesure de portails institutionnels, plateformes e-commerce à fort trafic et applications web ultra-sécurisées adaptées au marché africain.',
      cta: 'Obtenir un devis pour votre site',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Applications natives et hybrides Android / iOS fluides, performantes et optimisées pour les réseaux à bande passante variable.',
      cta: 'Lire plus',
    },
    {
      id: 'hosting',
      icon: Server,
      title: 'Hébergement Web & Domaines',
      description: 'Infrastructures sécurisées, serveurs NVMe rapides, certificats SSL et gestion experte de noms de domaines locaux et internationaux.',
      cta: 'Lire plus',
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: 'Maintenance de Site Web',
      description: 'Surveillance continue, correctifs de sécurité réguliers, sauvegardes journalières et réactivité d’urgence 24/7.',
      cta: 'Lire plus',
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Création Visuelle & Branding',
      description: 'Identités de marque captivantes, chartes graphiques prestigieuses, supports print et designs UI/UX d’une grande rigueur.',
      cta: 'Lire plus',
    },
    {
      id: 'social',
      icon: MessageSquare,
      title: 'Community Management',
      description: 'Fidélisation de vos audiences, production de contenu localisé percutant, gestion de réputation et campagnes sponsorisées.',
      cta: 'Lire plus',
    },
    {
      id: 'consulting',
      icon: Lightbulb,
      title: 'Consulting & Stratégie Digitale',
      description: 'Audits d’organisation, alignement technologique sur vos objectifs commerciaux et schémas directeurs personnalisés.',
      cta: 'Lire plus',
    },
    {
      id: 'management',
      icon: TrendingUp,
      title: 'Gestion de Projet Digital',
      description: 'Méthodologie agile rigoureuse, respect strict des jalons temporels et coordination fluide de vos équipes pluridisciplinaires.',
      cta: 'Lire plus',
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Formation & Conseil Pratique',
      description: 'Montée en compétences de vos collaborateurs sur les outils collaboratifs modernes, la cybersécurité et l’automatisation.',
      cta: 'Lire plus',
    },
    {
      id: 'cabling',
      icon: Network,
      title: 'Réseau Informatique & Câblage',
      description: 'Conception d’architectures LAN/WAN, baies de brassage, routage sécurisé et couverture Wi-Fi professionnelle d’entreprise.',
      cta: 'Lire plus',
    },
    {
      id: 'support',
      icon: Headset,
      title: 'Support & Infogérance',
      description: 'Télé-assistance réactive, dépannage de parc informatique physique et logiciels avec SLA garanti pour vos opérations à Douala.',
      cta: 'Lire plus',
    },
  ];

  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0B1530] py-20 lg:py-28 px-4 sm:px-8 border-t border-slate-200">
      <div className="max-w-[1380px] mx-auto">
        
        {/* En-tête de section centré */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#B58017]">
            PRESTATIONS D'EXCELLENCE MÉTIER
          </span>
          <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] lg:text-[48px] font-[800] text-[#0B1530] mt-3 tracking-tight">
            Tous vos besoins numériques, au même endroit
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#56627F] mt-4 leading-relaxed font-normal">
            Une architecture intégrée conçue pour accompagner votre croissance à chaque étape stratégique.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            if (service.isFeatured) {
              return (
                /* Carte Phare (Web & Portails) avec style Midnight Navy Sombre */
                <div
                  key={service.id}
                  className="rounded-2xl p-7 lg:p-8 bg-[#0B1530] text-white border border-[#E2A93B]/40 shadow-[0_12px_36px_rgba(11,21,48,0.30)] flex flex-col justify-between relative overflow-hidden group hover:border-[#E2A93B] transition-all"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#E2A93B]/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Header de la carte avec badge PHARE */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#1E2E55] border border-[#E2A93B]/50 flex items-center justify-center text-[#F3C969] shadow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#E2A93B] text-[#0B1530] font-extrabold text-[10px] tracking-widest uppercase">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-['Bricolage_Grotesque'] text-[21px] font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#C6C6CE] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-[#F3C969] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#F3C969]" />
                    </button>
                  </div>
                </div>
              );
            }

            return (
              /* Carte Service Standard Claire */
              <div
                key={service.id}
                className="rounded-2xl p-7 bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#E2A93B]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#E2A93B] mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-['Bricolage_Grotesque'] text-[18px] font-bold text-[#0B1530] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#56627F] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/70">
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#B58017] group-hover:text-[#8D610B] transition-colors cursor-pointer"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GRANDE BANNIÈRE SUITE ERP TENYSY */}
        <div className="mt-14 rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#071329] via-[#0E1E40] to-[#0A1733] border border-white/15 text-white shadow-[0_16px_40px_rgba(7,19,41,0.35)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#36E2C6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#36E2C6] bg-[#36E2C6]/15 px-3 py-1 rounded-full border border-[#36E2C6]/30">
                  PROPULSÉ PAR TENYSY
                </span>
                <span className="text-[12px] text-[#9AA7C7] font-medium">
                  Solution Entreprise Intégrée
                </span>
              </div>

              <h3 className="font-['Bricolage_Grotesque'] text-[24px] sm:text-[32px] font-[800] text-white tracking-tight leading-tight">
                CRM, ERP et Solutions Informatiques Métier
              </h3>

              <p className="text-[14px] sm:text-[16px] text-[#C6C6CE] leading-relaxed">
                Fédérez l'ensemble de vos processus de gestion financière, stocks, ressources humaines et relation client sous une interface unifiée ultra-rapide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="#tenysy"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#36E2C6] hover:bg-[#2DD0B5] text-[#071329] font-bold text-[14px] shadow-[0_4px_20px_rgba(54,226,198,0.30)] hover:shadow-[0_8px_24px_rgba(54,226,198,0.45)] transition-all cursor-pointer"
              >
                <span>Découvrir la suite TENYSY</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={() => onOpenQuoteModal('Solution ERP TENYSY')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-[14px] border border-white/20 transition-all cursor-pointer"
              >
                <span>Obtenir un devis</span>
                <ArrowRight className="w-4 h-4 text-[#F3C969]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
