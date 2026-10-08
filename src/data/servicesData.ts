export interface ServiceItem {
  id: string;
  title: string;
  isPhare?: boolean;
  category: 'dev' | 'infra' | 'marketing' | 'consulting';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  duration: string;
  iconName: string;
  badge?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-portails',
    title: 'Création de Sites Web & Portails',
    isPhare: true,
    category: 'dev',
    shortDesc: 'Conception sur-mesure de portails institutionnels, plateformes e-commerce à fort trafic et applications web ultra-sécurisées adaptées au marché africain.',
    fullDesc: "Nous bâtissons des plateformes web robustes, conçues pour convertir vos visiteurs en partenaires et clients. Conçues avec une architecture moderne (Next.js, React, Tailwind), nos réalisations garantissent un temps de chargement inférieur à 1,2 seconde même sur réseaux 3G/4G instables d'Afrique Centrale.",
    deliverables: [
      'Architecture UX/UI responsive sur-mesure',
      'Portail CMS headless administrable sans code',
      'Intégration passerelles de paiement locales (Mobile Money, Carte)',
      'Optimisation SEO technique et référencement Google',
      'Certificat SSL haute sécurité et conformité RGPD/locale'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    duration: '3 à 6 semaines',
    iconName: 'Globe',
    badge: 'PHARE'
  },
  {
    id: 'applications-mobiles',
    title: 'Applications Mobiles',
    category: 'dev',
    shortDesc: 'Applications natives et hybrides Android / iOS fluides, performantes et optimisées pour les réseaux à bande passante variable.',
    fullDesc: "Développement d'applications mobiles intuitives et résilientes capables de fonctionner en mode hors-ligne partiel (Offline-first) et synchronisées dès que la connexion est rétablie.",
    deliverables: [
      'Applications cross-platform iOS & Android',
      'Mode hors-ligne avec synchronisation automatique',
      'Notifications push segmentées et analytics',
      'Publication sur Google Play Store et Apple App Store'
    ],
    techStack: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
    duration: '6 à 10 semaines',
    iconName: 'Smartphone'
  },
  {
    id: 'hebergement-domaines',
    title: 'Hébergement Web & Domaines',
    category: 'infra',
    shortDesc: 'Infrastructures sécurisées, serveurs NVMe rapides, certificats SSL et gestion experte de noms de domaines locaux et internationaux.',
    fullDesc: "Fourniture et infogérance d'hébergements haute disponibilité avec disques NVMe ultra-rapides, redondance multi-datacenter et protection active contre les attaques DDoS.",
    deliverables: [
      'Réservation et gestion d’extensions (.cm, .com, .org, .net)',
      'Serveurs Cloud dédiés et VPS managés avec SSD NVMe',
      'Boîtes emails professionnelles anti-spam sécurisées',
      'Protection pare-feu applicatif (WAF) et CDN mondial'
    ],
    techStack: ['Cloudflare Enterprise', 'cPanel/WHM', 'Linux Rocky/Debian', 'Nginx', 'SSL Let’s Encrypt'],
    duration: 'Mise en service en 24h',
    iconName: 'Server'
  },
  {
    id: 'maintenance-site',
    title: 'Maintenance de Site Web',
    category: 'dev',
    shortDesc: 'Surveillance continue, correctifs de sécurité réguliers, sauvegardes journalières et réactivité d’urgence 24/7.',
    fullDesc: "Maintien en conditions opérationnelles (MCO) de vos environnements digitaux. Évitez les pannes, les failles d'injection et les ralentissements grâce à nos interventions proactives.",
    deliverables: [
      'Mises à jour sécuritaires hebdomadaires des modules et CMS',
      'Sauvegardes quotidiennes externalisées sur cloud chiffré',
      'Contrôle d’intégrité anti-malware et monitoring d’uptime',
      'Assistance d’urgence sous SLA d’intervention de 2h'
    ],
    techStack: ['Uptime Kuma', 'Git CI/CD', 'Automated Backups', 'Security Scanner'],
    duration: 'Contrat annuel avec astreinte',
    iconName: 'ShieldCheck'
  },
  {
    id: 'creation-visuelle-branding',
    title: 'Création Visuelle & Branding',
    category: 'marketing',
    shortDesc: 'Identités de marque captivantes, chartes graphiques prestigieuses, supports print et designs UI/UX d’une grande rigueur.',
    fullDesc: "Conception de l'univers visuel complet de votre entreprise : logotypes, emblèmes héraldiques, typographies institutionnelles et supports de communication de haut prestige.",
    deliverables: [
      'Charte graphique complète (Palette, Typographies, Règles)',
      'Logo vectoriel master (CMJN, RVB, déclinaisons dark/light)',
      'Plaquettes commerciales, cartes de visite et papeterie',
      'Kits de templates pour réseaux sociaux'
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign'],
    duration: '2 à 3 semaines',
    iconName: 'Palette'
  },
  {
    id: 'community-management',
    title: 'Community Management',
    category: 'marketing',
    shortDesc: 'Fidélisation de vos audiences, production de contenu localisé percutant, gestion de réputation et campagnes sponsorisées.',
    fullDesc: "Animation stratégique de votre communauté sur LinkedIn, Facebook, Instagram et WhatsApp Business. Nous renforçons votre autorité sectorielle à Douala et sur l'Afrique francophone.",
    deliverables: [
      'Calendrier éditorial mensuel validé en amont',
      'Création de visuels et rédaction de copy persuasive',
      'Modération des messages et commentaires sous 15 min',
      'Gestion et optimisation des campagnes publicitaires Meta & LinkedIn'
    ],
    techStack: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'Canva Pro', 'Buffer'],
    duration: 'Accompagnement mensuel',
    iconName: 'Share2'
  },
  {
    id: 'consulting-strategie',
    title: 'Consulting & Stratégie Digitale',
    category: 'consulting',
    shortDesc: 'Audits d’organisation, alignement technologique sur vos objectifs commerciaux et schémas directeurs personnalisés.',
    fullDesc: "Diagnostic approfondi de votre écosystème numérique existant. Nous établissons une feuille de route claire pour digitaliser vos processus et maximiser la rentabilité de vos investissements IT.",
    deliverables: [
      'Audit de maturité digitale et cartographie des inefficacités',
      'Schéma directeur informatique à 3 ans',
      'Cahier des charges pour appels d’offres et choix technologiques',
      'Calcul du Retour sur Investissement (ROI) prévisionnel'
    ],
    techStack: ['BPMN 2.0', 'Notion Enterprise', 'SWOT & PESTEL Matrix', 'Roadmapping'],
    duration: '2 à 4 semaines',
    iconName: 'Lightbulb'
  },
  {
    id: 'gestion-projet-digital',
    title: 'Gestion de Projet Digital',
    category: 'consulting',
    shortDesc: 'Méthodologie agile rigoureuse, respect strict des jalons temporels et coordination fluide de vos équipes pluridisciplinaires.',
    fullDesc: "Pilotage méthodique de vos chantiers technologiques de l’initiation au déploiement. Nous garantissons le respect des coûts, des délais et du périmètre fonctionnel défini.",
    deliverables: [
      'Planification par sprints avec cérémonies Scrum/Kanban',
      'Suivi budgétaire et tableaux de bord d’avancement hebdomadaires',
      'Gestion des risques techniques et dépendances tierces',
      'Recette fonctionnelle et validation utilisateurs'
    ],
    techStack: ['Jira Software', 'Confluence', 'Trello', 'Slack Enterprise'],
    duration: 'Selon périmètre projet',
    iconName: 'TrendingUp'
  },
  {
    id: 'formation-conseil',
    title: 'Formation & Conseil Pratique',
    category: 'consulting',
    shortDesc: 'Montée en compétences de vos collaborateurs sur les outils collaboratifs modernes, la cybersécurité et l’automatisation.',
    fullDesc: "Sessions pratiques de transfert de compétences pour vos cadres et collaborateurs opérationnels. Ateliers concrets animés dans vos locaux à Douala ou en visio interactive.",
    deliverables: [
      'Modules de formation sur-mesure avec cas pratiques réels',
      'Supports pédagogiques numériques et guides pas-à-pas',
      'Sensibilisation aux attaques de phishing et cyber-hygiène',
      'Attestations de formation certifiées Les Anges du Digital'
    ],
    techStack: ['Google Workspace', 'Microsoft 365', 'LMS', 'Workshops Interactifs'],
    duration: 'Sessions de 1 à 5 jours',
    iconName: 'GraduationCap'
  },
  {
    id: 'reseau-cablage',
    title: 'Réseau Informatique & Câblage',
    category: 'infra',
    shortDesc: 'Conception d’architectures LAN/WAN, baies de brassage, routage sécurisé et couverture Wi-Fi professionnelle d’entreprise.',
    fullDesc: "Déploiement physique et logique de vos infrastructures réseau d'entreprise. Câblage cuivre cat 6A/7, fibre optique, switches administrables et bornes Wi-Fi maillées pour bureaux.",
    deliverables: [
      'Audit de couverture radio et plan de câblage structuré',
      'Installation de baies de brassage et étiquetage normé',
      'Configuration de VLAN, VPN sécurisés inter-sites et QoS',
      'Rapport de certification réseau et test de réflectométrie'
    ],
    techStack: ['Cisco', 'Ubiquiti UniFi', 'MikroTik', 'Fortinet FortiGate'],
    duration: '3 à 14 jours selon site',
    iconName: 'Wifi'
  },
  {
    id: 'support-infogerance',
    title: 'Support & Infogérance',
    category: 'infra',
    shortDesc: 'Télé-assistance réactive, dépannage de parc informatique physique et logiciels avec SLA garanti pour vos opérations à Douala.',
    fullDesc: "Déléguez la gestion quotidienne de votre parc informatique. Nos techniciens interviennent sur site à Douala ou à distance pour débloquer vos collaborateurs sans interrompre la production.",
    deliverables: [
      'Helpdesk réactif par téléphone, WhatsApp et ticket web',
      'Dépannage matériel sur site à Douala sous 2h',
      'Gestion centralisée des licences, antivirus et mises à jour',
      'Rapport mensuel de santé du parc et recommandations'
    ],
    techStack: ['AnyDesk Enterprise', 'TeamViewer Tensor', 'GLPI Helpdesk', 'Active Directory'],
    duration: 'Contrats trimestriels ou annuels',
    iconName: 'Headphones'
  }
];
