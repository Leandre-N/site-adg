import React from 'react';
import {
  BookOpen,
  MessageCircle,
  Mic,
  QrCode,
  Store,
  UserRound,
  Grid2X2,
  KeyRound,
} from 'lucide-react';

interface TenysyShowcaseSectionProps {
  onOpenTenysyApp: () => void;
  onOpenQuote: () => void;
}

const spaces = [
  {
    icon: MessageCircle,
    title: 'Messagerie & appels',
    description: 'Conversations individuelles, messages et interface d’appel audio/vidéo.',
  },
  {
    icon: BookOpen,
    title: 'Mémoires',
    description: 'Un espace de découverte culturelle organisé par thèmes, dont les arts et la musique.',
  },
  {
    icon: BookOpen,
    title: 'Racines',
    description: 'Des rubriques consacrées au patrimoine culturel africain et à ses différentes expressions.',
  },
  {
    icon: Grid2X2,
    title: 'Services',
    description: 'Un catalogue de services présenté en catégories pour faciliter la navigation.',
  },
  {
    icon: QrCode,
    title: 'Paiements & argent',
    description: 'Des écrans présentant un montant et un code QR ; les moyens pris en charge restent à confirmer.',
  },
  {
    icon: Store,
    title: 'Ma Boutique',
    description: 'Consultation de produits et d’indicateurs liés à l’activité commerciale.',
  },
  {
    icon: UserRound,
    title: 'Mon Compte',
    description: 'Profil utilisateur et options de gestion du compte dans un espace dédié.',
  },
  {
    icon: KeyRound,
    title: 'Connexion & vérification',
    description: 'Un parcours en plusieurs étapes permet de se connecter puis de saisir un code de validation ; son envoi reste à confirmer.',
  },
];

export const TenysyShowcaseSection: React.FC<TenysyShowcaseSectionProps> = ({
  onOpenTenysyApp,
  onOpenQuote,
}) => (
  <section className="relative overflow-hidden border-y border-white/5 bg-[#071126] py-20 text-white lg:py-28">
    <div className="pointer-events-none absolute right-10 top-1/3 h-[500px] w-[500px] rounded-full bg-[#36E2C6]/10 blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
      <div className="mb-12 max-w-3xl">
        <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#36E2C6]">
          Application mobile multifonctionnelle
        </span>
        <h2 className="mb-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          TENYSY rassemble communication, culture et services
        </h2>
        <p className="text-base leading-relaxed text-[#9AA7C7] sm:text-lg">
          Une navigation mobile relie les conversations, les espaces Mémoires et Racines, les services, la boutique et le compte utilisateur.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#0F1B36] p-5 transition-colors hover:border-[#36E2C6]/35">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#36E2C6]/10 text-[#36E2C6]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-base font-bold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-[#9AA7C7]">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="max-w-2xl text-xs leading-relaxed text-slate-400">
          La présentation décrit les écrans visibles dans la démonstration. Le fonctionnement complet des appels et les modalités de paiement nécessitent une vérification dans l’application.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={onOpenTenysyApp} className="rounded-xl bg-[#36E2C6] px-5 py-2.5 text-sm font-bold text-[#0B1530] transition-colors hover:bg-[#59fbde]">
            Parcourir les espaces
          </button>
          <button onClick={onOpenQuote} className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Demander des informations
          </button>
        </div>
      </div>
    </div>
  </section>
);
