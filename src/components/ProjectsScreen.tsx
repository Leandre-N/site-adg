import React from 'react';
import { ArrowLeft, ArrowUpRight, Globe, Smartphone, Palette, Network } from 'lucide-react';

interface ProjectsScreenProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

const projectAreas = [
  {
    icon: Globe,
    title: 'Sites web & portails',
    description: 'Conception de présences web adaptées aux objectifs, aux contenus et aux publics de chaque organisation.',
    tags: ['Web design', 'Portails', 'Contenu'],
  },
  {
    icon: Smartphone,
    title: 'Applications & outils numériques',
    description: 'Création d’expériences numériques utiles, depuis le cadrage du besoin jusqu’à la réalisation de l’interface.',
    tags: ['Application mobile', 'UX/UI', 'Prototypage'],
  },
  {
    icon: Palette,
    title: 'Identité & communication digitale',
    description: 'Déclinaison d’une identité visuelle cohérente pour le web et les supports de communication.',
    tags: ['Identité visuelle', 'Supports', 'Réseaux sociaux'],
  },
  {
    icon: Network,
    title: 'Infrastructure & accompagnement',
    description: 'Mise en place et suivi de solutions d’hébergement, de réseau, de maintenance et de support informatique.',
    tags: ['Hébergement', 'Réseau', 'Support'],
  },
];

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onBackToHome, onOpenQuote }) => (
  <main className="min-h-screen bg-[#07132B] px-4 py-12 text-white sm:px-8 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <button
        onClick={onBackToHome}
        className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-[#9AA7C7] transition-colors hover:bg-white/10 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Retour à l’accueil
      </button>

      <header className="mb-12 max-w-3xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F3C969]">Réalisations &amp; savoir-faire</span>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Des idées numériques concrétisées avec méthode</h1>
        <p className="mt-5 text-base leading-relaxed text-[#9AA7C7] sm:text-lg">
          Les projets de l’agence s’inscrivent dans plusieurs domaines de conception et d’accompagnement. Chaque mission commence par la compréhension de vos objectifs et se précise avec vous.
        </p>
      </header>

      <section aria-label="Domaines de réalisation" className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectAreas.map(({ icon: Icon, title, description, tags }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#0E1B38] p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#36E2C6]/25 bg-[#36E2C6]/10 text-[#36E2C6]">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-xl font-bold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9AA7C7]">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300">{tag}</span>)}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#E2A93B]/25 bg-[#0A1633] p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-display text-xl font-bold">Parlons de votre prochain projet</h2>
          <p className="mt-2 text-sm text-[#9AA7C7]">Présentez votre besoin à l’équipe basée à Douala.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">Voir les services <ArrowUpRight className="h-4 w-4" /></a>
          <button onClick={onOpenQuote} className="rounded-xl bg-[#E2A93B] px-5 py-3 text-sm font-bold text-[#0B1530] transition-colors hover:bg-[#F3C969]">Décrire mon projet</button>
        </div>
      </div>
    </div>
  </main>
);