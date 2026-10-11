import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  CircleUserRound,
  Grid2X2,
  KeyRound,
  MessageCircle,
  QrCode,
  Store,
  Video,
} from 'lucide-react';

interface TenysyAppScreenProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

const modules = [
  {
    icon: MessageCircle,
    title: 'Messagerie',
    description:
      'Liste des conversations, profils des interlocuteurs et fils de discussion avec champ de saisie et commande d’envoi.',
  },
  {
    icon: Video,
    title: 'Appels audio & vidéo',
    description:
      'Une interface d’appel et des commandes de communication sont visibles dans la démonstration. Le fonctionnement complet reste à vérifier.',
  },
  {
    icon: BookOpen,
    title: 'Mémoires & Racines',
    description:
      'Des espaces de découverte culturelle avec des catégories autour des arts, des racines, de l’artisanat, de la musique et du patrimoine africain.',
  },
  {
    icon: Grid2X2,
    title: 'Services',
    description:
      'Un catalogue organisé en catégories donne accès aux services présentés dans l’application.',
  },
  {
    icon: QrCode,
    title: 'Paiements & argent',
    description:
      'Des écrans affichent un montant et un code QR. Les moyens de paiement et le rôle exact du code restent à confirmer.',
  },
  {
    icon: Store,
    title: 'Ma Boutique',
    description:
      'Un espace consacré aux produits, à l’ajout d’éléments et à des indicateurs associés aux ventes.',
  },
  {
    icon: CircleUserRound,
    title: 'Mon Compte',
    description:
      'Profil utilisateur, option de modification et entrées vers les paramètres du compte.',
  },
  {
    icon: KeyRound,
    title: 'Connexion & vérification',
    description:
      'Parcours d’accès au compte avec saisie d’un identifiant ou numéro de téléphone et écran de validation par code. Le mode d’envoi du code reste à confirmer.',
  },
];

export const TenysyAppScreen: React.FC<TenysyAppScreenProps> = ({
  onBackToHome,
  onOpenQuote,
}) => (
  <main className="min-h-screen bg-[#061127] px-4 py-8 text-white sm:px-8 sm:py-12">
    <div className="mx-auto max-w-6xl">
      <button
        onClick={onBackToHome}
        className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-[#9AA7C7] transition-colors hover:bg-white/10 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au site
      </button>

      <header className="mb-10 max-w-3xl">
        <span className="mb-3 inline-flex rounded-full border border-[#36E2C6]/30 bg-[#36E2C6]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#36E2C6]">
          Application mobile
        </span>
        <h1 className="mb-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Découvrez les espaces de TENYSY
        </h1>
        <p className="text-base leading-relaxed text-[#9AA7C7] sm:text-lg">
          TENYSY réunit dans une même plateforme des outils de communication, des espaces culturels, un catalogue de services, une boutique et la gestion du compte utilisateur.
        </p>
      </header>

      <nav aria-label="Espaces TENYSY" className="mb-8 flex gap-2 overflow-x-auto rounded-xl border border-white/10 bg-[#0D1B38] p-2">
        {['Accueil', 'Messagerie', 'Mémoires', 'Services', 'Compte'].map((item) => (
          <span key={item} className="whitespace-nowrap rounded-lg bg-white/5 px-4 py-2 text-xs font-semibold text-[#D8E2FF]">
            {item}
          </span>
        ))}
      </nav>

      <section aria-label="Fonctionnalités présentées" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#0F1B36] p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#36E2C6]/20 bg-[#36E2C6]/10 text-[#36E2C6]">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mb-2 font-display text-lg font-bold">{title}</h2>
            <p className="text-sm leading-relaxed text-[#9AA7C7]">{description}</p>
          </article>
        ))}
      </section>

      <aside className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-[#0B1530] p-6 sm:flex-row sm:items-center">
        <p className="max-w-3xl text-xs leading-relaxed text-slate-400">
          Cette présentation reprend les interfaces et fonctionnalités décrites dans la démonstration. Les étapes d’authentification, les transactions et la disponibilité des appels demandent une vérification directe.
        </p>
        <button onClick={onOpenQuote} className="shrink-0 rounded-xl bg-[#36E2C6] px-5 py-3 text-sm font-bold text-[#0B1530] transition-colors hover:bg-[#59fbde]">
          Demander des informations
        </button>
      </aside>
    </div>
  </main>
);
