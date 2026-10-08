import React, { useState } from 'react';
import { 
  CheckCircle, 
  Layers, 
  Users, 
  ShieldCheck, 
  Clock, 
  TrendingDown, 
  Sparkles, 
  ArrowRight,
  RefreshCw,
  Terminal,
  Activity
} from 'lucide-react';
import { INITIAL_TENYSY_METRICS, INITIAL_LOGS } from '../data/tenysyData.ts';

interface TenysyShowcaseSectionProps {
  onOpenTenysyApp: () => void;
  onOpenQuote: () => void;
}

export const TenysyShowcaseSection: React.FC<TenysyShowcaseSectionProps> = ({ 
  onOpenTenysyApp,
  onOpenQuote
}) => {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateActivity = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const newLog = {
        id: `log-${Date.now()}`,
        timestamp: timeStr,
        type: 'sync' as const,
        message: `[TENYSY Live] Synchronisation nœud Douala validée (${Math.floor(Math.random() * 8 + 12)} commandes enregistrées)`
      };
      setLogs((prev) => [newLog, ...prev.slice(0, 3)]);
      setIsSimulating(false);
    }, 450);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#071126] text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#36E2C6]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#36E2C6] animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#36E2C6]">
              NOUVEAU PROJET PHARE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            TENYSY, pensé pour faire avancer votre activité
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#9AA7C7] leading-relaxed">
            Une application centrale et limpide qui soulage la complexité administrative pour vous permettre d'accélérer vos ventes.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 4 Core Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0F1B36] border border-white/5 hover:border-[#36E2C6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#36E2C6]/10 text-[#36E2C6] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1.5">
                    Simple dès le premier jour
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed">
                    Prise en main immédiate sans courbe d'apprentissage fastidieuse. Interface intuitive et fluide.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1B36] border border-white/5 hover:border-[#36E2C6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#36E2C6]/10 text-[#36E2C6] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1.5">
                    Adapté à votre métier
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed">
                    Commerce, cabinet de conseil, logistique ou prestations de service : modules configurables selon vos flux.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1B36] border border-white/5 hover:border-[#36E2C6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#36E2C6]/10 text-[#36E2C6] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1.5">
                    Travail en équipe
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed">
                    Multi-utilisateurs avec gestion fine des rôles, permissions granulaires et historique des modifications en direct.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1B36] border border-white/5 hover:border-[#36E2C6]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#36E2C6]/10 text-[#36E2C6] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1.5">
                    Accompagnement Expert & Déploiement Local
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed">
                    Intégration sur-mesure sur site à Douala, migration sécurisée de vos données et assistance technique permanente.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Operational Preview Board (Matching Screenshot) */}
          <div className="lg:col-span-7 bg-[#0B1530] rounded-2xl border border-[#36E2C6]/35 p-6 sm:p-8 shadow-2xl relative">
            
            {/* Header of board */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#36E2C6] animate-ping"></span>
                <span className="font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                  APERÇU DU TABLEAU DE BORD OPÉRATIONNEL
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-white/5 text-[#36E2C6] border border-[#36E2C6]/30">
                {INITIAL_TENYSY_METRICS.version}
              </span>
            </div>

            <p className="font-sans text-sm text-[#9AA7C7] leading-relaxed mb-6">
              Connectez tous vos collaborateurs sans délai : saisie des commandes en 3 clics, facturation instantanée et relances automatiques configurées sans expertise technique préalable.
            </p>

            {/* Two Stat Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Card 1: Déploiement */}
              <div className="bg-[#121F3D] rounded-xl p-5 border border-white/5">
                <div className="text-xs text-[#9AA7C7] mb-1">
                  Temps de déploiement moyen
                </div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#36E2C6] mb-1 tabular-nums">
                  {INITIAL_TENYSY_METRICS.deploymentTime}
                </div>
                <div className="text-[11px] text-[#9AA7C7]/80">
                  {INITIAL_TENYSY_METRICS.deploymentSub}
                </div>
              </div>

              {/* Card 2: Effort économisé */}
              <div className="bg-[#121F3D] rounded-xl p-5 border border-white/5">
                <div className="text-xs text-[#9AA7C7] mb-1">
                  Temps administratif économisé
                </div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3C969] mb-1 tabular-nums">
                  {INITIAL_TENYSY_METRICS.adminEffortReduction}
                </div>
                <div className="text-[11px] text-[#9AA7C7]/80">
                  {INITIAL_TENYSY_METRICS.adminEffortSub}
                </div>
              </div>

            </div>

            {/* Live Operational Terminal / Stream Log (As in screenshot) */}
            <div className="bg-[#050D1E] rounded-xl p-4 border border-white/5 mb-7 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#56627F] mb-3 pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#36E2C6]" />
                  <span>Flux de synchronisation en direct (Douala Hub)</span>
                </span>
                <button 
                  onClick={simulateActivity}
                  disabled={isSimulating}
                  className="flex items-center gap-1 text-[10px] text-[#36E2C6] hover:underline"
                >
                  <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>Rafraîchir flux</span>
                </button>
              </div>

              <div className="space-y-2">
                {logs.slice(0, 3).map((log) => (
                  <div key={log.id} className="flex items-start gap-2 text-[#9AA7C7] leading-relaxed">
                    <span className="text-[#36E2C6] shrink-0 font-bold">›</span>
                    <span className="text-slate-400 shrink-0 text-[10px]">{log.timestamp}</span>
                    <span className="text-[#d8e2ff]">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer of Preview Board */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#9AA7C7]">
                <ShieldCheck className="w-4 h-4 text-[#36E2C6]" />
                <span>Déploiement local sécurisé à Douala</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenTenysyApp}
                  className="px-5 py-2.5 rounded-xl bg-[#36E2C6] hover:bg-[#59fbde] text-[#0B1530] font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#36E2C6]/20 active:scale-[0.98]"
                >
                  Demander une démonstration
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
