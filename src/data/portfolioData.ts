export interface ProjectCaseStudy {
  id: string;
  clientName: string;
  sector: string;
  location: string;
  title: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  servicesDelivered: string[];
  techStack: string[];
  year: string;
}

export const TRUSTED_PARTNERS = [
  { name: 'Mokalaw Firm', sector: 'Cabinet Juridique & Avocats' },
  { name: 'Collaborative Research Africa', sector: 'Recherche & Think Tank' },
  { name: 'ASFO Architect', sector: 'Cabinet d\'Architecture & Ingénierie' },
  { name: 'Clinique Intégrale', sector: 'Santé & Polyclinique Médicale' },
  { name: 'Solutions Immigration Canada', sector: 'Conseil & Mobilité Internationale' },
  { name: 'Asetah Tribe', sector: 'Commerce & Distribution' },
  { name: 'Telsoft Africa', sector: 'Télécommunications & Réseaux' },
  { name: 'Journal Matila', sector: 'Média & Presse d\'Investigation' },
  { name: 'Relais Actu Santé', sector: 'Portail Médical & Prévention' },
  { name: 'World Africa Magazine', sector: 'Édition Panafricaine & Affaires' },
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'mokalaw',
    clientName: 'Mokalaw Firm',
    sector: 'Droit des Affaires & Contentieux',
    location: 'Douala - Bonanjo',
    title: 'Portail juridique digital & espace client sécurisé',
    summary: 'Numérisation intégrale des dossiers d’arbitrage et mise en place d’un portail client sécurisé avec signature électronique et coffre-fort documentaire chiffré.',
    impactMetrics: [
      { label: 'Gain de productivité', value: '+42%' },
      { label: 'Délai de traitement dossiers', value: '-3 jours' },
      { label: 'Disponibilité plateforme', value: '99.98%' }
    ],
    servicesDelivered: ['Création de Sites Web & Portails', 'Hébergement Web & Domaines'],
    techStack: ['Next.js', 'PostgreSQL', 'AES-256 Encryption'],
    year: '2024'
  },
  {
    id: 'clinique-integrale',
    clientName: 'Clinique Intégrale',
    sector: 'Santé & Soins Hospitaliers',
    location: 'Douala - Akwa',
    title: 'Système d’Information Médicale & Gestion Intégrée des Admissions',
    summary: 'Refonte de l’infrastructure réseau LAN gigabit, déploiement d’une plateforme de prise de rendez-vous en ligne et interconnexion avec les postes d’infirmiers.',
    impactMetrics: [
      { label: 'Temps d’attente aux admissions', value: '-55%' },
      { label: 'Dossiers patients numérisés', value: '18 400+' },
      { label: 'Uptime réseau garanti', value: '24/7' }
    ],
    servicesDelivered: ['Réseau Informatique & Câblage', 'Applications Mobiles', 'Support & Infogérance'],
    techStack: ['Ubiquiti UniFi', 'Flutter', 'Linux Server', 'PostgreSQL'],
    year: '2024'
  },
  {
    id: 'asfo-architect',
    clientName: 'ASFO Architect',
    sector: 'Architecture & Maîtrise d\'Œuvre',
    location: 'Douala - Bonapriso',
    title: 'Showroom Digital Immersif & Sauvegarde Cloud Redondante',
    summary: 'Plateforme web haute définition présentant les réalisations architecturales majeures en Afrique Centrale avec viewer 3D de maquettes et archivage cloud.',
    impactMetrics: [
      { label: 'Demandes de devis qualifiées', value: '+78%' },
      { label: 'Taille des maquettes traitées', value: '1.2 To' },
      { label: 'Temps de chargement web', value: '0.8s' }
    ],
    servicesDelivered: ['Création de Sites Web & Portails', 'Création Visuelle & Branding', 'Hébergement Web & Domaines'],
    techStack: ['Three.js', 'React', 'Tailwind CSS', 'Cloudflare CDN'],
    year: '2023'
  },
  {
    id: 'asetah-tribe',
    clientName: 'Asetah Tribe',
    sector: 'Distribution & Logistique Urbaine',
    location: 'Douala - Bassa',
    title: 'Outils numériques pour la distribution et le suivi des stocks',
    summary: 'Projet numérique pour accompagner l’approvisionnement et le suivi des stocks sur plusieurs points de vente à Douala et Yaoundé.',
    impactMetrics: [
      { label: 'Ruptures de stock évitées', value: '94%' },
      { label: 'Temps d’inventaire mensuel', value: 'Passé de 4j à 4h' },
      { label: 'Commandes traitées/jour', value: '350+' }
    ],
    servicesDelivered: ['Outils numériques de gestion commerciale', 'Applications Mobiles', 'Formation & Conseil Pratique'],
    techStack: ['Flutter'],
    year: '2024'
  }
];
