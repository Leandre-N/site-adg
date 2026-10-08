/**
 * Types and interfaces for Les Anges du Digital application.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  linkText: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface ProcessPhase {
  number: string;
  phaseTag: string;
  title: string;
  description: string;
  badgeColor: 'gold' | 'teal';
}

export interface ArticleItem {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  accentColor: 'teal' | 'gold';
}

export interface PartnerItem {
  name: string;
  shortName?: string;
}
