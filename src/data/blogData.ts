export interface BlogPost {
  id: string;
  category: string;
  categoryType: 'product' | 'security' | 'strategy';
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'application-mobile-tenysy',
    category: 'APPLICATION MOBILE',
    categoryType: 'product',
    date: 'Présentation',
    readTime: 'Lecture 3 min',
    title: 'TENYSY : une application mobile aux espaces multiples',
    excerpt: 'Messagerie, découverte du patrimoine culturel, services, paiements, boutique et compte utilisateur : aperçu des espaces visibles dans la démonstration de TENYSY.',
    author: 'L\'Équipe TENYSY',
    authorRole: 'Présentation produit',
    slug: 'application-mobile-tenysy-espaces',
    content: [
      'TENYSY est une application mobile qui regroupe plusieurs espaces au sein d\'une même interface. La navigation présentée donne accès à l\'accueil, à la messagerie, aux Mémoires, aux Services et au compte utilisateur.',
      'La messagerie affiche des conversations individuelles et un écran de discussion avec champ de rédaction et commande d\'envoi. Une interface d\'appel audio et vidéo est également visible, sans que la démonstration permette de confirmer toutes les modalités de ces communications.',
      'Les espaces Mémoires et Racines proposent une découverte thématique de contenus culturels. Les rubriques visibles évoquent notamment les arts, les racines, les défis culturels, les arts martiaux, l\'artisanat et la musique.',
      'La section Services présente un catalogue organisé par catégories. Des écrans associés aux paiements montrent un montant et un code QR ; les moyens de paiement, les partenaires éventuels et le rôle exact du QR code restent à confirmer.',
      'L\'espace Ma Boutique présente des produits et des indicateurs liés à l\'activité commerciale, tandis que Mon Compte regroupe le profil et des options de gestion. Cette synthèse décrit les interfaces visibles dans la démonstration, pas une documentation technique exhaustive.'
    ]
  },
  {
    id: 'securisation-architectures-cloud',
    category: 'CYBERSÉCURITÉ',
    categoryType: 'security',
    date: 'Conseils pratiques',
    readTime: 'Lecture 3 min',
    title: 'Sécurisation des architectures cloud d\'entreprise à Douala',
    excerpt: 'Quelques pratiques pour mieux protéger les comptes, les appareils et les données d’une organisation.',
    author: 'Sylvain TEUTSING',
    authorRole: 'Fondateur & CEO, Expert Cloud',
    slug: 'securisation-architectures-cloud-douala',
    content: [
      'Commencez par recenser les comptes, appareils et services numériques utilisés par votre organisation. Identifiez les personnes qui y ont accès et retirez les accès qui ne sont plus nécessaires.',
      'Utilisez des mots de passe robustes et uniques, activez la vérification en plusieurs étapes lorsqu’elle est proposée et sensibilisez les équipes aux liens ou pièces jointes inattendus.',
      'Organisez des sauvegardes régulières des données importantes et vérifiez périodiquement que les fichiers peuvent être restaurés.',
      'Les besoins varient selon les outils et les risques propres à chaque structure. Une revue de sécurité permet de définir des mesures proportionnées à votre environnement.'
    ]
  },
  {
    id: 'souverainete-numerique-afrique',
    category: 'STRATÉGIE DIGITALE',
    categoryType: 'strategy',
    date: 'Guide pratique',
    readTime: 'Lecture 3 min',
    title: 'Construire une présence numérique cohérente',
    excerpt: 'Comment relier vos objectifs, votre identité et les bons canaux numériques dans un plan d’action réaliste.',
    author: 'Sylvain TEUTSING',
    authorRole: 'Fondateur & CEO',
    slug: 'presence-numerique-coherente',
    content: [
      'Une présence numérique utile commence par une question simple : que doivent pouvoir comprendre ou faire vos clients en ligne ?',
      'Définissez ensuite les informations prioritaires, le ton de votre marque et les canaux qui correspondent à vos ressources et à votre public.',
      'Un site web, des contenus sociaux et des outils numériques donnent de meilleurs résultats lorsqu’ils servent une même expérience et sont maintenus dans le temps.',
      'Un cadrage clair aide à prioriser les fonctionnalités, à anticiper les contenus nécessaires et à décider des prochaines étapes.'
    ]
  }
];
