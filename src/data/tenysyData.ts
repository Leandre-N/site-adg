export interface TenysyInvoice {
  id: string;
  client: string;
  city: string;
  amount: number;
  date: string;
  status: 'Payée' | 'En attente' | 'Relancée';
  itemsCount: number;
}

export interface TenysyStockItem {
  sku: string;
  name: string;
  category: string;
  quantity: number;
  reorderLevel: number;
  unitPrice: number;
  status: 'Optimal' | 'Alerte Faible' | 'Réapprovisionné';
}

export interface TenysyLog {
  id: string;
  timestamp: string;
  type: 'sync' | 'stock' | 'crm' | 'security';
  message: string;
}

export const INITIAL_TENYSY_METRICS = {
  version: 'TENYSY CORE V2.4',
  deploymentTime: 'Moins de 48h',
  deploymentSub: 'Formation incluse de vos équipes',
  adminEffortReduction: '-65% d\'efforts',
  adminEffortSub: 'Automatisation des saisies redondantes',
  activeUsers: 34,
  monthlyTurnoverCFA: 48950000,
  syncHealth: '100% Opérationnel',
};

export const INITIAL_INVOICES: TenysyInvoice[] = [
  { id: 'FAC-2024-089', client: 'Mokalaw Legal Advisory', city: 'Douala - Bonanjo', amount: 1450000, date: 'Aujourd\'hui 11:24', status: 'Payée', itemsCount: 3 },
  { id: 'FAC-2024-088', client: 'Clinique Intégrale Akwa', city: 'Douala - Akwa', amount: 890000, date: 'Aujourd\'hui 09:15', status: 'Payée', itemsCount: 5 },
  { id: 'FAC-2024-087', client: 'ASFO Architectes & Associés', city: 'Douala - Bonapriso', amount: 3200000, date: 'Hier 16:40', status: 'Relancée', itemsCount: 2 },
  { id: 'FAC-2024-086', client: 'Collaborative Research Africa', city: 'Yaoundé - Bastos', amount: 2150000, date: 'Hier 14:00', status: 'En attente', itemsCount: 4 },
  { id: 'FAC-2024-085', client: 'Asetah Tribe Distribution', city: 'Douala - Bassa', amount: 780000, date: '04 Octobre', status: 'Payée', itemsCount: 8 },
];

export const INITIAL_STOCK: TenysyStockItem[] = [
  { sku: 'SRV-DL-01', name: 'Serveur Rack 1U Xeon E-2300', category: 'Infrastructure', quantity: 4, reorderLevel: 2, unitPrice: 1250000, status: 'Optimal' },
  { sku: 'RTR-MK-09', name: 'Routeur Fibre MikroTik CCR2004', category: 'Réseau', quantity: 1, reorderLevel: 3, unitPrice: 420000, status: 'Alerte Faible' },
  { sku: 'SWT-UB-48', name: 'Switch UniFi Pro PoE 48 Ports', category: 'Réseau', quantity: 5, reorderLevel: 2, unitPrice: 680000, status: 'Optimal' },
  { sku: 'CAB-C6-305', name: 'Bobine Câble Cat 6A SFTP 305m', category: 'Câblage', quantity: 12, reorderLevel: 5, unitPrice: 85000, status: 'Optimal' },
  { sku: 'OND-APC-15', name: 'Onduleur Smart-UPS 1500VA LCD', category: 'Énergie', quantity: 2, reorderLevel: 2, unitPrice: 295000, status: 'Réapprovisionné' },
];

export const INITIAL_LOGS: TenysyLog[] = [
  { id: 'log-1', timestamp: '12:51:04', type: 'sync', message: '[TENYSY Sync] 14 factures générées et transmises aux clients' },
  { id: 'log-2', timestamp: '12:44:22', type: 'stock', message: '[Alerte Stock] 2 références réapprovisionnées automatiquement' },
  { id: 'log-3', timestamp: '11:30:15', type: 'crm', message: '[CRM Pipeline] Opportunité Mokalaw Firm convertie avec succès (+3 200 000 FCFA)' },
  { id: 'log-4', timestamp: '09:12:00', type: 'security', message: '[Audit Sécurité] Sauvegarde automatique chiffrée validée sur nœud Douala Ouest' },
];
