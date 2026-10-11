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
    date: '14 Octobre 2024',
    readTime: 'Lecture 4 min',
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
    date: '28 Septembre 2024',
    readTime: 'Lecture 5 min',
    title: 'Sécurisation des architectures cloud d\'entreprise à Douala',
    excerpt: 'Analyse exhaustive des vecteurs d\'attaques locaux et mise en place de stratégies de sauvegarde redondantes sur sites distants pour garantir une reprise d\'activité en temps record.',
    author: 'Sylvain TEUTSING',
    authorRole: 'Fondateur & CEO, Expert Cloud',
    slug: 'securisation-architectures-cloud-douala',
    content: [
      'Le nombre d\'incidents de cybersécurité ciblant les entreprises d\'Afrique subsaharienne a crû de plus de 82% au cours des douze derniers mois. Le rançongiciel (ransomware) et les attaques par force brute sur les postes distants constituent la première menace pour la pérennité financière de nos institutions.',
      'La Règle du 3-2-1 Révisée pour l\'Afrique Centrale : Nous préconisons la détention de 3 copies de vos données critiques, sur 2 supports différents (serveur local NVMe + stockage objet chiffré), dont 1 copie géographiquement isolée hors du Cameroun (par exemple sur notre cluster européen chiffré AES-256).',
      'Segmentation Réseau et Politiques Zéro-Trust : Isoler physiquement et logiquement le réseau Wi-Fi visiteurs, les imprimantes multifonctions et les serveurs de bases de données empêche la propagation latérale d\'une charge malveillante.',
      'SLA de Reprise d\'Activité : Chez Les Anges du Digital, nous mesurons notre efficacité non pas sur des promesses, mais sur le RPO (Recovery Point Objective < 1 heure) et le RTO (Recovery Time Objective < 4 heures).'
    ]
  },
  {
    id: 'souverainete-numerique-afrique',
    category: 'STRATÉGIE DIGITALE',
    categoryType: 'strategy',
    date: '05 Septembre 2024',
    readTime: 'Lecture 6 min',
    title: 'Vers une souveraineté logicielle : Bâtir des outils par et pour les talents locaux',
    excerpt: 'Pourquoi importer des logiciels occidentaux inadaptés bride la compétitivité et comment l\'ingénierie locale forge l\'indépendance économique.',
    author: 'Sylvain TEUTSING',
    authorRole: 'Fondateur & CEO',
    slug: 'souverainete-numerique-talents-locaux',
    content: [
      'L\'Afrique ne doit plus être une simple consommatrice de logiciels conçus selon des réalités fiscales et opérationnelles qui ne sont pas les siennes.',
      'TENYSY est présentée comme une application mobile qui rassemble communication, découverte culturelle, services et fonctionnalités commerciales dans une même plateforme.',
      'Développer des solutions souveraines, c\'est garder la valeur ajoutée et les données stratégiques sur notre continent tout en formant la prochaine génération d\'ingénieurs d\'élite.'
    ]
  }
];
