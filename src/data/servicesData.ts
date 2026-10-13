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

const service = (
  id: string,
  title: string,
  category: ServiceItem['category'],
  shortDesc: string,
  iconName: string,
  deliverables: string[],
  isPhare = false,
): ServiceItem => ({
  id,
  title,
  category,
  shortDesc,
  fullDesc: `${shortDesc} Le périmètre, les étapes et les livrables sont définis avec vous après échange sur votre besoin.`,
  deliverables,
  techStack: [],
  duration: 'À convenir selon le périmètre du projet',
  iconName,
  isPhare,
  badge: isPhare ? 'PHARE' : undefined,
});

export const SERVICES: ServiceItem[] = [
  service('web-portails', 'Création de Sites Web & Portails', 'dev', 'Conception de sites web et de portails adaptés à votre activité, à vos contenus et à vos publics.', 'Globe', ['Cadrage du besoin et des contenus', 'Conception de l’interface et des pages', 'Accompagnement à la mise en ligne'], true),
  service('applications-mobiles', 'Applications Mobiles', 'dev', 'Conception d’applications mobiles selon les usages attendus et le parcours des utilisateurs.', 'Smartphone', ['Définition des fonctionnalités', 'Conception des écrans et parcours', 'Accompagnement au développement'],),
  service('hebergement-domaines', 'Hébergement Web & Domaines', 'infra', 'Accompagnement pour l’hébergement de votre site et la configuration de votre nom de domaine.', 'Server', ['Conseil sur le nom de domaine', 'Configuration de l’hébergement', 'Mise en place des accès associés']),
  service('maintenance-site', 'Maintenance de Site Web', 'dev', 'Suivi et maintenance de votre site pour accompagner son évolution et son bon fonctionnement.', 'ShieldCheck', ['Revue de l’état du site', 'Mises à jour selon le périmètre convenu', 'Conseils pour les évolutions à prévoir']),
  service('creation-visuelle-branding', 'Création Visuelle & Branding', 'marketing', 'Création ou évolution d’une identité visuelle cohérente avec le positionnement de votre organisation.', 'Palette', ['Échange autour de votre identité', 'Pistes graphiques et déclinaisons', 'Fichiers et supports convenus ensemble']),
  service('community-management', 'Community Management', 'marketing', 'Accompagnement de la présence et des contenus de votre marque sur les réseaux sociaux.', 'Share2', ['Définition des sujets et du ton', 'Préparation de contenus selon le calendrier convenu', 'Suivi éditorial et recommandations']),
  service('consulting-strategie', 'Consulting & Stratégie Digitale', 'consulting', 'Conseil pour clarifier vos besoins numériques et organiser les prochaines étapes de votre projet.', 'Lightbulb', ['Échange de cadrage', 'Analyse des besoins et priorités', 'Recommandations et feuille de route']),
  service('gestion-projet-digital', 'Gestion de Projet Digital', 'consulting', 'Accompagnement dans la planification, la coordination et le suivi de projets numériques.', 'TrendingUp', ['Clarification du périmètre', 'Organisation des étapes et échanges', 'Suivi des décisions et points d’avancement']),
  service('formation-conseil', 'Formation & Conseil Pratique', 'consulting', 'Sessions de partage de connaissances adaptées aux sujets et aux besoins de vos équipes.', 'GraduationCap', ['Définition des objectifs d’apprentissage', 'Préparation du contenu de la session', 'Animation et ressources convenues']),
  service('reseau-cablage', 'Réseau Informatique & Câblage', 'infra', 'Conseil et accompagnement pour l’installation ou l’évolution de votre réseau informatique.', 'Wifi', ['Échange sur les locaux et les usages', 'Étude du besoin réseau', 'Proposition d’intervention adaptée']),
  service('support-infogerance', 'Support & Infogérance', 'infra', 'Assistance et accompagnement pour vos besoins informatiques et le suivi de votre environnement technique.', 'Headphones', ['Qualification de la demande', 'Conseil ou intervention selon le besoin', 'Modalités de suivi définies avec vous']),
];