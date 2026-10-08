import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Layers, 
  Receipt, 
  Package, 
  Users, 
  Terminal, 
  Plus, 
  Check, 
  AlertTriangle, 
  RefreshCw, 
  TrendingUp, 
  Download, 
  ShieldCheck, 
  Building2, 
  ExternalLink,
  DollarSign,
  Search,
  Sparkles
} from 'lucide-react';
import { 
  INITIAL_TENYSY_METRICS, 
  INITIAL_INVOICES, 
  INITIAL_STOCK, 
  INITIAL_LOGS,
  TenysyInvoice,
  TenysyStockItem
} from '../data/tenysyData.ts';
import { ASSETS } from '../data/assets.ts';

interface TenysyAppScreenProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

export const TenysyAppScreen: React.FC<TenysyAppScreenProps> = ({ 
  onBackToHome, 
  onOpenQuote 
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'invoices' | 'stock' | 'crm' | 'logs'>('dashboard');
  const [invoices, setInvoices] = useState<TenysyInvoice[]>(INITIAL_INVOICES);
  const [stocks, setStocks] = useState<TenysyStockItem[]>(INITIAL_STOCK);
  const [searchQuery, setSearchQuery] = useState('');
  const [newInvoiceModal, setNewInvoiceModal] = useState(false);
  const [clientInput, setClientInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInput || !amountInput) return;

    const newInv: TenysyInvoice = {
      id: `FAC-2024-${Math.floor(100 + Math.random() * 900)}`,
      client: clientInput,
      city: 'Douala',
      amount: parseInt(amountInput) || 500000,
      date: 'À l\'instant',
      status: 'Payée',
      itemsCount: 1
    };

    setInvoices([newInv, ...invoices]);
    setClientInput('');
    setAmountInput('');
    setNewInvoiceModal(false);
    showNotification(`Facture ${newInv.id} générée avec succès pour ${newInv.client} !`);
  };

  const handleRestock = (sku: string) => {
    setStocks(prev => prev.map(item => {
      if (item.sku === sku) {
        return { ...item, quantity: item.quantity + 5, status: 'Optimal' };
      }
      return item;
    }));
    showNotification(`Réapprovisionnement de la référence ${sku} validé (+5 unités)`);
  };

  const totalRevenue = invoices.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-[#061127] text-white flex flex-col font-sans pb-16">
      
      {/* Top Application Bar */}
      <div className="bg-[#0B1530] border-b border-[#36E2C6]/30 px-4 sm:px-8 py-3.5 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo Lockup */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#9AA7C7] hover:text-white flex items-center gap-1.5 transition-colors border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour au site vitrine</span>
            </button>

            <div className="h-4 w-px bg-white/15 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#36E2C6] text-[#0B1530] font-black flex items-center justify-center font-display text-sm">
                T
              </div>
              <div>
                <div className="font-display font-extrabold text-base tracking-tight text-white flex items-center gap-2">
                  <span>TENYSY ERP</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#36E2C6]/20 text-[#36E2C6] font-mono font-semibold">
                    v2.4
                  </span>
                </div>
                <div className="text-[10px] text-[#9AA7C7] font-mono">
                  Édité par Les Anges du Digital · Douala Hub
                </div>
              </div>
            </div>
          </div>

          {/* Right Status & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#121F3D] border border-white/10 text-xs text-[#36E2C6]">
              <span className="w-2 h-2 rounded-full bg-[#36E2C6] animate-pulse"></span>
              <span>Serveur Local Douala Actif</span>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-[#E2A93B] hover:bg-[#F3C969] text-[#0B1530] font-bold text-xs transition-all shadow-md shadow-[#E2A93B]/20"
            >
              Déployer TENYSY dans ma PME
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Sub-Bar */}
      <div className="bg-[#0D1B38] border-b border-white/10 px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Tableau de Bord', icon: <Layers className="w-4 h-4" /> },
            { id: 'invoices', label: 'Factures & Ventes', icon: <Receipt className="w-4 h-4" /> },
            { id: 'stock', label: 'Stocks & Entrepôt Douala', icon: <Package className="w-4 h-4" /> },
            { id: 'crm', label: 'CRM & Pipeline', icon: <Users className="w-4 h-4" /> },
            { id: 'logs', label: 'Télémétrie & Logs', icon: <Terminal className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#36E2C6] text-[#0B1530] shadow-sm'
                  : 'text-[#9AA7C7] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#13224A] border border-[#36E2C6] text-white shadow-2xl text-xs flex items-center gap-2 animate-fadeIn font-mono">
          <Check className="w-4 h-4 text-[#36E2C6]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 flex-1 w-full">
        
        {/* TAB 1: DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="text-xs text-[#9AA7C7] mb-1 font-mono">Volume Facturé (Mois en cours)</div>
                <div className="font-display text-2xl font-black text-white tabular-nums">
                  {totalRevenue.toLocaleString('fr-FR')} FCFA
                </div>
                <div className="text-[11px] text-[#36E2C6] flex items-center gap-1 mt-1 font-medium">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18.4% vs mois dernier</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="text-xs text-[#9AA7C7] mb-1 font-mono">Délai Moyen Déploiement</div>
                <div className="font-display text-2xl font-black text-[#36E2C6] tabular-nums">
                  {INITIAL_TENYSY_METRICS.deploymentTime}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {INITIAL_TENYSY_METRICS.deploymentSub}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="text-xs text-[#9AA7C7] mb-1 font-mono">Efforts Administratifs</div>
                <div className="font-display text-2xl font-black text-[#F3C969] tabular-nums">
                  {INITIAL_TENYSY_METRICS.adminEffortReduction}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {INITIAL_TENYSY_METRICS.adminEffortSub}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="text-xs text-[#9AA7C7] mb-1 font-mono">Collaborateurs Connectés</div>
                <div className="font-display text-2xl font-black text-white tabular-nums">
                  {INITIAL_TENYSY_METRICS.activeUsers} utilisateurs
                </div>
                <div className="text-[11px] text-[#36E2C6] mt-1 font-mono">
                  Sync Multi-Postes Douala
                </div>
              </div>

            </div>

            {/* Visual interface showcase banner */}
            <div className="relative rounded-2xl overflow-hidden border border-[#36E2C6]/40 bg-[#0A1633] shadow-2xl">
              <div className="p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Interface Logicielle Haute-Fidélité TENYSY Core
                  </h3>
                  <p className="text-xs text-[#9AA7C7]">
                    Console d'exploitation unifiée déployable sur serveur local ou cloud sécurisé
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('invoices')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#36E2C6]/15 text-[#36E2C6] text-xs font-semibold hover:bg-[#36E2C6]/25 border border-[#36E2C6]/30"
                  >
                    Gérer les factures
                  </button>
                  <button
                    onClick={() => setActiveTab('stock')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#E2A93B]/15 text-[#F3C969] text-xs font-semibold hover:bg-[#E2A93B]/25 border border-[#E2A93B]/30"
                  >
                    Vérifier les stocks
                  </button>
                </div>
              </div>

              <div className="p-2 sm:p-4 bg-[#050D1E]">
                <img 
                  src={ASSETS.tenysy} 
                  alt="Aperçu écran logiciel TENYSY ERP" 
                  className="w-full rounded-xl object-cover max-h-[500px] border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Recent Invoices & Quick Logs split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Recent Invoices */}
              <div className="lg:col-span-7 bg-[#0F1B36] rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-base font-bold text-white">
                    Dernières Factures Émises
                  </h4>
                  <button 
                    onClick={() => setNewInvoiceModal(true)}
                    className="px-3 py-1 rounded-lg bg-[#36E2C6] text-[#0B1530] text-xs font-bold flex items-center gap-1 hover:bg-[#59fbde]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Créer</span>
                  </button>
                </div>

                <div className="divide-y divide-white/5">
                  {invoices.slice(0, 4).map((inv) => (
                    <div key={inv.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-white">{inv.client}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{inv.id} · {inv.city}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-white">{inv.amount.toLocaleString('fr-FR')} FCFA</div>
                        <span className={`inline-block text-[10px] px-2 py-0.5 rounded font-semibold ${
                          inv.status === 'Payée' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {inv.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Operational stock telemetry */}
              <div className="lg:col-span-5 bg-[#0F1B36] rounded-2xl p-6 border border-white/10">
                <h4 className="font-display text-base font-bold text-white mb-4">
                  État des Stocks Sensibles (Douala)
                </h4>

                <div className="space-y-3">
                  {stocks.map((item) => (
                    <div key={item.sku} className="p-3 rounded-xl bg-[#09152C] border border-white/5 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{item.sku} · Seuil: {item.reorderLevel}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white">{item.quantity} en stock</span>
                        {item.quantity <= item.reorderLevel ? (
                          <button
                            onClick={() => handleRestock(item.sku)}
                            className="px-2 py-1 rounded bg-[#E2A93B] text-[#0B1530] text-[10px] font-bold hover:bg-[#F3C969]"
                          >
                            Réapprovisionner
                          </button>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: INVOICES & PAYMENTS */}
        {activeTab === 'invoices' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Gestion des Factures & Règlements
                </h3>
                <p className="text-xs text-[#9AA7C7]">
                  Création, relance automatique et encaissement Mobile Money ou virement
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setNewInvoiceModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#36E2C6] text-[#0B1530] font-bold text-xs flex items-center gap-2 hover:bg-[#59fbde]"
                >
                  <Plus className="w-4 h-4" />
                  <span>Nouvelle Facture</span>
                </button>
              </div>
            </div>

            {/* Invoices Table */}
            <div className="bg-[#0F1B36] rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#09142C] text-[#9AA7C7] uppercase font-mono text-[10px] border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4">Référence</th>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Localisation</th>
                      <th className="py-3 px-4">Montant (FCFA)</th>
                      <th className="py-3 px-4">Statut</th>
                      <th className="py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-sans">
                    {invoices.map((inv) => (
                      <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-white">{inv.id}</td>
                        <td className="py-3.5 px-4 font-medium text-white">{inv.client}</td>
                        <td className="py-3.5 px-4 text-slate-400">{inv.city}</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#F3C969]">{inv.amount.toLocaleString('fr-FR')}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                            inv.status === 'Payée' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => showNotification(`Téléchargement du reçu ${inv.id} généré en PDF certifié.`)}
                            className="text-[#36E2C6] hover:underline flex items-center gap-1 font-mono text-[11px]"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STOCK */}
        {activeTab === 'stock' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Gestion des Stocks & Équipements (Douala)
                </h3>
                <p className="text-xs text-[#9AA7C7]">
                  Surveillance des baies de brassage, serveurs, routeurs et câbles déployés
                </p>
              </div>

              <button
                onClick={() => {
                  setStocks(prev => prev.map(item => ({ ...item, quantity: item.quantity + 2 })));
                  showNotification('Réapprovisionnement global simulé pour l\'ensemble des stocks.');
                }}
                className="px-4 py-2.5 rounded-xl bg-[#E2A93B] text-[#0B1530] font-bold text-xs flex items-center gap-2 hover:bg-[#F3C969]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Simuler Arrivage Entrepôt</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stocks.map((item) => (
                <div key={item.sku} className="p-5 rounded-2xl bg-[#0F1B36] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#36E2C6]">{item.sku}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.quantity <= item.reorderLevel ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {item.quantity <= item.reorderLevel ? 'Alerte Stock' : 'Disponible'}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400 mb-4">{item.category}</p>

                    <div className="flex items-baseline justify-between p-3 rounded-xl bg-[#09152C] mb-4">
                      <div>
                        <div className="text-[10px] text-slate-500">Quantité en réserve</div>
                        <div className="font-display text-xl font-bold text-white">{item.quantity} unités</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-500">Prix unitaire</div>
                        <div className="font-mono text-xs font-bold text-[#F3C969]">{item.unitPrice.toLocaleString('fr-FR')} FCFA</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRestock(item.sku)}
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-white border border-white/10 transition-colors"
                  >
                    Commander +5 unités
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CRM */}
        {activeTab === 'crm' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                CRM & Pipeline Commercial Afrique Centrale
              </h3>
              <p className="text-xs text-[#9AA7C7]">
                Cycle de vente structuré : prospection, cadrage, validation et déploiement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="font-display text-xs font-bold uppercase text-slate-400 mb-3 flex items-center justify-between">
                  <span>1. Cadrage Initial</span>
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#13224A] text-xs">
                    <div className="font-bold text-white">Holding Agro Bassa</div>
                    <div className="text-[11px] text-[#9AA7C7]">Audit de 4 sites distants</div>
                    <div className="text-[10px] text-[#F3C969] font-mono mt-2">Est: 4 500 000 FCFA</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="font-display text-xs font-bold uppercase text-[#E2A93B] mb-3 flex items-center justify-between">
                  <span>2. Devis Transmis</span>
                  <span className="w-2 h-2 rounded-full bg-[#E2A93B]"></span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#13224A] text-xs">
                    <div className="font-bold text-white">Cabinet Fiscal Bonanjo</div>
                    <div className="text-[11px] text-[#9AA7C7]">ERP TENYSY 12 postes</div>
                    <div className="text-[10px] text-[#F3C969] font-mono mt-2">Est: 2 800 000 FCFA</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="font-display text-xs font-bold uppercase text-[#36E2C6] mb-3 flex items-center justify-between">
                  <span>3. Déploiement</span>
                  <span className="w-2 h-2 rounded-full bg-[#36E2C6]"></span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#13224A] text-xs">
                    <div className="font-bold text-white">Clinique Intégrale Akwa</div>
                    <div className="text-[11px] text-[#9AA7C7]">Installation baies LAN</div>
                    <div className="text-[10px] text-[#36E2C6] font-mono mt-2">En cours (J+1)</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F1B36] border border-white/10">
                <div className="font-display text-xs font-bold uppercase text-emerald-400 mb-3 flex items-center justify-between">
                  <span>4. Livré & Clôturé</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#13224A] text-xs">
                    <div className="font-bold text-white">Mokalaw Firm</div>
                    <div className="text-[11px] text-[#9AA7C7]">Portail & Coffre Fort</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-2">3 200 000 FCFA reçu</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: LOGS */}
        {activeTab === 'logs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Télémétrie Système & Journaux d'Audit
                </h3>
                <p className="text-xs text-[#9AA7C7]">
                  Traces cryptographiques et synchronisation des terminaux sur le réseau Douala
                </p>
              </div>

              <button
                onClick={() => showNotification('Audit de sécurité exécuté : Aucun incident détecté.')}
                className="px-4 py-2 rounded-xl bg-[#36E2C6] text-[#0B1530] font-bold text-xs"
              >
                Lancer audit de sécurité
              </button>
            </div>

            <div className="bg-[#050D1E] rounded-2xl p-6 border border-white/10 font-mono text-xs space-y-3">
              {INITIAL_LOGS.map((log) => (
                <div key={log.id} className="flex items-start gap-3 text-slate-300 border-b border-white/5 pb-2">
                  <span className="text-[#36E2C6] font-bold">›</span>
                  <span className="text-slate-500">{log.timestamp}</span>
                  <span className="text-white">{log.message}</span>
                </div>
              ))}
              <div className="text-[#36E2C6] animate-pulse">
                _ En écoute permanente sur le portail d'Ange Raphaël, Douala...
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal create invoice */}
      {newInvoiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0B1530] border border-[#36E2C6]/50 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Créer une Facture TENYSY
            </h4>
            <form onSubmit={handleCreateInvoice} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Nom du client</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Société Camerounaise de Transport"
                  value={clientInput}
                  onChange={(e) => setClientInput(e.target.value)}
                  className="w-full bg-[#050E23] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#36E2C6]"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Montant (FCFA)</label>
                <input
                  type="number"
                  required
                  placeholder="Ex: 1250000"
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  className="w-full bg-[#050E23] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#36E2C6]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setNewInvoiceModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#36E2C6] text-[#0B1530] font-bold text-xs hover:bg-[#59fbde]"
                >
                  Générer la facture
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
