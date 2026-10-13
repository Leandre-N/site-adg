import React from 'react';
import { Reveal } from './Reveal';
import {
  ArrowRight,
  ArrowUpRight,
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
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const services = [
  { id: 'web', featured: true, icon: Globe, title: 'Création de Sites Web & Portails', description: 'Conception de sites web et portails adaptés à votre activité, à vos contenus et à vos publics.' },
  { id: 'mobile', icon: Smartphone, title: 'Applications Mobiles', description: 'Conception d’applications mobiles selon les usages attendus et le parcours de vos utilisateurs.' },
  { id: 'hosting', icon: Server, title: 'Hébergement Web & Domaines', description: 'Accompagnement pour l’hébergement de votre site et la configuration de votre nom de domaine.' },
  { id: 'maintenance', icon: Wrench, title: 'Maintenance de Site Web', description: 'Suivi, mises à jour et interventions de maintenance définis selon les besoins de votre site.' },
  { id: 'branding', icon: Palette, title: 'Création Visuelle & Branding', description: 'Création ou évolution d’une identité visuelle cohérente avec le positionnement de votre organisation.' },
  { id: 'social', icon: MessageSquare, title: 'Community Management', description: 'Accompagnement de la présence et des contenus de votre marque sur les réseaux sociaux.' },
  { id: 'consulting', icon: Lightbulb, title: 'Consulting & Stratégie Digitale', description: 'Conseil pour clarifier vos besoins numériques et organiser les prochaines étapes de votre projet.' },
  { id: 'management', icon: TrendingUp, title: 'Gestion de Projet Digital', description: 'Accompagnement dans la planification, la coordination et le suivi de projets numériques.' },
  { id: 'training', icon: GraduationCap, title: 'Formation & Conseil Pratique', description: 'Sessions de partage de connaissances adaptées aux sujets et aux besoins de vos équipes.' },
  { id: 'cabling', icon: Network, title: 'Réseau Informatique & Câblage', description: 'Conseil et accompagnement pour l’installation ou l’évolution de votre réseau informatique.' },
  { id: 'support', icon: Headset, title: 'Support & Infogérance', description: 'Assistance et accompagnement pour les besoins informatiques de votre activité à Douala.' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => (
  <section id="services" className="border-t border-slate-200 bg-white px-4 py-20 text-[#0B1530] sm:px-8 lg:py-28">
    <div className="mx-auto max-w-[1380px]">
      <Reveal className="mx-auto mb-14 max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B58017]">Prestations &amp; accompagnement</span>
        <h2 className="mt-3 font-['Bricolage_Grotesque'] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Des solutions numériques adaptées à vos besoins</h2>
        <p className="mt-4 text-base leading-relaxed text-[#56627F] sm:text-lg">Du conseil à la mise en œuvre, échangeons sur le service le plus pertinent pour votre projet.</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ id, featured, icon: Icon, title, description }, index) => (
          <Reveal key={id} delay={Math.min(index * 45, 300)} className="h-full">
            <article className={`motion-card flex h-full flex-col justify-between rounded-2xl border p-6 transition-all ${featured ? 'border-[#E2A93B]/40 bg-[#0B1530] text-white shadow-lg' : 'border-slate-200 bg-[#F8FAFC] hover:border-[#E2A93B]/50 hover:shadow-md'}`}>
              <div>
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${featured ? 'bg-[#1E2E55] text-[#F3C969]' : 'border border-slate-200 bg-white text-[#B58017]'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                {featured && <span className="mb-3 inline-flex rounded-full bg-[#E2A93B] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#0B1530]">Service principal</span>}
                <h3 className={`font-['Bricolage_Grotesque'] text-lg font-bold ${featured ? 'text-white' : 'text-[#0B1530]'}`}>{title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${featured ? 'text-[#C6C6CE]' : 'text-[#56627F]'}`}>{description}</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal(title)}
                className={`mt-6 inline-flex items-center gap-2 border-t pt-4 text-left text-sm font-bold transition-colors ${featured ? 'border-white/10 text-[#F3C969] hover:text-white' : 'border-slate-200 text-[#986E18] hover:text-[#0B1530]'}`}
              >
                Parler de ce service <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12" delay={100}>
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#071329] via-[#0E1E40] to-[#0A1733] p-7 text-white shadow-xl sm:p-10">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#36E2C6]/10 blur-3xl" />
          <div className="relative z-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#36E2C6]/30 bg-[#36E2C6]/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#36E2C6]">À découvrir : TENYSY</span>
                <span className="text-xs font-medium text-[#9AA7C7]">Application mobile multifonctionnelle</span>
              </div>
              <h3 className="font-['Bricolage_Grotesque'] text-2xl font-extrabold leading-tight sm:text-3xl">Une application pour communiquer, découvrir et accéder à des services</h3>
              <p className="text-sm leading-relaxed text-[#C6C6CE] sm:text-base">Messagerie, espaces Mémoires et Racines, services, paiements, boutique et compte utilisateur dans une même expérience mobile.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href="/tenysy" className="inline-flex items-center gap-2 rounded-xl bg-[#36E2C6] px-5 py-3 text-sm font-bold text-[#071329] transition-colors hover:bg-[#2DD0B5]">Explorer TENYSY <ArrowUpRight className="h-4 w-4" /></a>
              <button onClick={() => onOpenQuoteModal('Application mobile TENYSY')} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">Demander des informations</button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);