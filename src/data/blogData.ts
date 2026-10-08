export interface BlogPost {
  id: string;
  category: string;
  categoryType: 'erp' | 'security' | 'strategy';
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
    id: 'deploiement-tenysy-pme',
    category: 'ERP & SAAS',
    categoryType: 'erp',
    date: '14 Octobre 2024',
    readTime: 'Lecture 4 min',
    title: 'Déploiement de TENYSY dans les PME d\'Afrique Centrale',
    excerpt: 'Comment la convergence d\'une solution de gestion sans friction libère le potentiel des structures camerounaises face aux défis de connectivité et de réconciliation bancaire.',
    author: 'L\'Équipe TENYSY',
    authorRole: 'Pôle Ingénierie Produit',
    slug: 'deploiement-tenysy-pme-afrique-centrale',
    content: [
      'Dans le tissu économique d\'Afrique Centrale, les dirigeants de PME se heurtent fréquemment à la fragmentation des outils : un tableur Excel pour les stocks, des carnets à souche pour les factures manuelles, et des échanges WhatsApp informels pour les commandes.',
      'Cette dispersion génère jusqu\'à 28% de pertes de revenus indirectes (erreurs de saisie, retards d\'encaissement et stocks fantômes). C\'est pour répondre à cette réalité de terrain que nous avons conçu TENYSY.',
      'Architecture Offline-First & Résilience Réseau : Les déconnexions intermittentes ne doivent plus paralyser un point de vente à Douala ou Yaoundé. TENYSY met en cache sécurisé les transactions locales et réconcilie instantanément l\'état comptable dès le rétablissement de la liaison internet.',
      'Interopérabilité Mobile Money : L\'intégration native des passerelles de paiement locales permet la génération d\'un lien de paiement ou d\'un QR code directement imprimé sur le bon de commande, garantissant un encaissement certifié en moins de 30 secondes.',
      'Résultat mesuré : Moins de 48 heures de délai moyen pour rendre une équipe opérationnelle, avec une réduction moyenne de 65% du temps administratif gaspillé.'
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
      'La suite TENYSY incarne ce manifeste : une solution pensée au carrefour d\'Ange Raphaël à Douala, intégrant dès sa conception la fiscalité locale (TVA, AIR, retenues à la source) et les modes de travail réels de nos entreprises partenaires.',
      'Développer des solutions souveraines, c\'est garder la valeur ajoutée et les données stratégiques sur notre continent tout en formant la prochaine génération d\'ingénieurs d\'élite.'
    ]
  }
];
