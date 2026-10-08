import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Zap,
  ArrowRight,
  Palette,
  PanelsTopLeft,
  Server,
  Cloud,
  ShieldCheck,
  Network,
  Workflow,
} from 'lucide-react';

const HERO_SWAP_MS = 5000;
const HERO_COUNT = 6;

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

function HeroTenysyDashboard() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto rounded-2xl bg-[#0A1428]/90 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.45)] overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#36E2C6]/40 to-transparent" />

      <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden />
            <span className="font-['Bricolage_Grotesque'] text-[11px] sm:text-xs font-bold tracking-[0.12em] text-white/90 uppercase ml-1">
              TENYSY SUITE ERP DOUALA
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-md bg-[#36E2C6]/15 text-[#36E2C6] text-[10px] font-bold uppercase tracking-wider border border-[#36E2C6]/35">
            En direct
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl bg-[#0E1B34]/80 border border-white/10 p-3 sm:p-3.5">
            <p className="text-[10px] sm:text-[11px] text-[#9AA7C7] uppercase tracking-wide mb-1">Trésorerie</p>
            <p className="text-lg sm:text-xl font-bold text-[#36E2C6] leading-none">+98.4%</p>
            <p className="text-[10px] text-[#6B7A9E] mt-1">Flux positif</p>
          </div>
          <div className="rounded-xl bg-[#0E1B34]/80 border border-white/10 p-3 sm:p-3.5">
            <p className="text-[10px] sm:text-[11px] text-[#9AA7C7] uppercase tracking-wide mb-1">Facturation</p>
            <p className="text-lg sm:text-xl font-bold text-[#F3C969] leading-none">100%</p>
            <p className="text-[10px] text-[#6B7A9E] mt-1">Conforme CEMAC</p>
          </div>
          <div className="rounded-xl bg-[#0E1B34]/80 border border-white/10 p-3 sm:p-3.5">
            <p className="text-[10px] sm:text-[11px] text-[#9AA7C7] uppercase tracking-wide mb-1">Réseau</p>
            <p className="text-base sm:text-lg font-bold text-white leading-none">0 Latence</p>
            <p className="text-[10px] text-[#6B7A9E] mt-1">Cloud Local</p>
          </div>
        </div>

        <div className="rounded-xl bg-[#0E1B34]/60 border border-white/10 p-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <p className="text-[10px] sm:text-[11px] font-bold text-[#9AA7C7] uppercase tracking-wider">
              Activité entreprise en temps réel
            </p>
            <span className="text-[11px] font-semibold text-[#36E2C6]">+342 ops/m</span>
          </div>
          <svg viewBox="0 0 320 80" className="w-full h-[72px] sm:h-[80px]" aria-hidden>
            <defs>
              <linearGradient id="heroTenysyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#36E2C6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#36E2C6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 58 C 40 52, 55 18, 90 28 S 150 72, 190 42 S 260 8, 320 22 L 320 80 L 0 80 Z"
              fill="url(#heroTenysyFill)"
            />
            <path
              d="M0 58 C 40 52, 55 18, 90 28 S 150 72, 190 42 S 260 8, 320 22"
              fill="none"
              stroke="#36E2C6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * HeroSection: Carrousel bannière principale (Spiritual-Tech Luxe + TENYSY)
 */
export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_COUNT);
    }, HERO_SWAP_MS);

    return () => window.clearInterval(timer);
  }, [activeSlide]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const handleNext = () => {
    goToSlide((activeSlide + 1) % HERO_COUNT);
  };

  const handlePrev = () => {
    goToSlide((activeSlide - 1 + HERO_COUNT) % HERO_COUNT);
  };

  const indicatorColors = ['#36E2C6', '#E2A93B', '#F3C969', '#E2A93B', '#F3C969', '#36E2C6'] as const;
  const isTenysyHero = activeSlide === 0;
  const showHeroRings = activeSlide >= 2;

  return (
    <section
      id="hero"
      className={`relative min-h-[740px] lg:min-h-[820px] bg-[#05132C] overflow-hidden flex flex-col justify-between pt-12 pb-10 transition-[min-height] duration-500 ${
        isTenysyHero ? 'lg:min-h-[780px]' : ''
      }`}
    >
      {/* Halos d'arrière-plan */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[140px] pointer-events-none transition-opacity duration-700 ${
          isTenysyHero ? 'opacity-0' : 'opacity-100'
        } bg-gradient-to-b from-[#E2A93B]/10 via-[#36E2C6]/5 to-transparent`}
      />
      <div
        className={`absolute top-1/3 right-0 w-[520px] h-[520px] bg-[#36E2C6]/12 blur-[120px] pointer-events-none transition-opacity duration-700 ${
          isTenysyHero ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#13224A]/40 via-transparent to-transparent pointer-events-none" />

      {/* Cercles concentriques (hero TENYSY) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
          isTenysyHero ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-[min(92vw,720px)] h-[min(92vw,720px)] rounded-full border border-white/[0.06]" />
        <div className="absolute w-[min(78vw,600px)] h-[min(78vw,600px)] rounded-full border border-white/[0.04]" />
        <div className="absolute w-[min(64vw,480px)] h-[min(64vw,480px)] rounded-full border border-[#36E2C6]/10" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
          showHeroRings ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-[min(92vw,760px)] h-[min(92vw,760px)] rounded-full border border-white/[0.025]" />
        <div className="absolute w-[min(76vw,620px)] h-[min(76vw,620px)] rounded-full border border-white/[0.025]" />
        <div className="absolute w-[min(60vw,480px)] h-[min(60vw,480px)] rounded-full border border-white/[0.025]" />
      </div>

      <div key={activeSlide} className="hero-content-enter flex-1 flex flex-col z-10">
        {activeSlide === 1 ? (
          <>
            <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full">
              <div className="inline-flex items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E2A93B]/30 to-[#F3C969]/10 text-[#F3C969] text-[11px] font-bold tracking-wider uppercase border border-[#E2A93B]/40">
                  ACCÉLÉRATION COMMERCIALE
                </span>
                <span className="text-xs italic text-[#C6C6CE] font-light">
                  Propulsez votre Croissance Digitale
                </span>
              </div>

              <h1 className="font-['Bricolage_Grotesque'] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[62px] font-[800] text-white tracking-tight leading-[1.12] max-w-4xl text-balance drop-shadow-sm">
                Propulsez la croissance digitale de votre entreprise
              </h1>

              <p className="mt-5 text-[16px] sm:text-[18px] lg:text-[20px] text-[#A6B4D6] max-w-2xl leading-relaxed font-normal">
                Développez votre chiffre d&apos;affaires et renforcez votre autorité de marque grâce à des
                solutions numériques agiles, performantes et déployées sur-mesure à Douala.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[15px] shadow-[0_8px_24px_rgba(226,169,59,0.30)] hover:shadow-[0_12px_28px_rgba(226,169,59,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.8]" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E1B34]/90 hover:bg-[#13224A] text-white font-medium text-[15px] border border-white/15 hover:border-[#E2A93B]/40 transition-all shadow-sm"
                >
                  <span>Contactez-nous</span>
                  <MessageSquare className="w-4 h-4 text-[#9AA7C7]" />
                </a>
              </div>
            </div>

            <div className="relative my-8 lg:my-4 flex items-center justify-center w-full pointer-events-none">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-[340px] sm:w-[420px] lg:w-[480px] h-[340px] sm:h-[420px] lg:h-[480px] rounded-full border border-dashed border-[#E2A93B]/20 animate-orbit" />
                <div className="absolute w-[280px] sm:w-[350px] lg:w-[390px] h-[280px] sm:h-[350px] lg:h-[390px] rounded-full border border-white/5" />
                <div className="absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full bg-[#E2A93B]/25 blur-3xl" />
                <div className="relative w-36 sm:w-44 h-36 sm:h-44 rounded-full bg-gradient-to-br from-[#F5D076] via-[#B88424] to-[#0A1733] p-[2px] shadow-[0_0_60px_rgba(226,169,59,0.45)]">
                  <div className="w-full h-full rounded-full bg-[#0E1B34] flex items-center justify-center relative overflow-hidden">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-28 h-28 text-[#F3C969] opacity-90 drop-shadow-[0_0_12px_rgba(243,201,105,0.6)]"
                      fill="currentColor"
                    >
                      <path d="M48 20 C 55 22, 65 28, 68 36 C 70 42, 67 48, 62 52 C 58 55, 60 62, 57 70 C 54 78, 48 84, 46 82 C 43 79, 44 72, 40 68 C 36 64, 30 62, 28 55 C 26 48, 30 42, 34 38 C 36 34, 40 25, 48 20 Z" />
                      <circle cx="58" cy="50" r="3.5" fill="#36E2C6" className="animate-ping" />
                      <circle cx="58" cy="50" r="2.5" fill="#36E2C6" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-full pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : activeSlide === 2 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col pt-1">
            <div>
              <div className="inline-flex flex-wrap items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-5 shadow-sm">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E2A93B]/30 to-[#F3C969]/10 text-[#F3C969] text-[11px] font-bold tracking-wider uppercase border border-[#E2A93B]/40">
                  AGILITÉ DIGITALE
                </span>
                <span className="text-xs italic text-[#C6C6CE] font-light">
                  Innovation Technologique &amp; Ingénierie
                </span>
              </div>

              <h1 className="font-['Bricolage_Grotesque'] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-[800] text-[#D8E2FF] tracking-tight leading-[1.08] max-w-[900px] text-balance">
                Optimisez votre présence digitale avec créativité et rigueur technique
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] text-[#C6C6CE] max-w-[510px] leading-relaxed">
                Modernisez votre image et multipliez vos opportunités commerciales grâce à des plateformes
                interactives à fort taux de conversion et à l&apos;ingénierie logicielle avancée.
              </p>

              <a
                href="https://wa.me/237621802405?text=Bonjour%20Les%20Anges%20du%20Digital,%20je%20souhaite%20obtenir%20un%20devis"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[13px] shadow-[0_8px_24px_rgba(226,169,59,0.3)] hover:shadow-[0_12px_28px_rgba(226,169,59,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Obtenir un devis WhatsApp</span>
              </a>
            </div>

            <div className="flex justify-center gap-3 mt-0 max-sm:mt-8">
              <div className="min-w-[116px] rounded-xl bg-[#13224A]/75 border border-white/5 px-4 py-3.5 flex flex-col items-center gap-2 text-center shadow-sm">
                <Palette className="w-6 h-6 text-[#F3C969]" strokeWidth={2.4} />
                <span className="text-[11px] sm:text-xs font-semibold text-[#D8E2FF]">Identité Forte</span>
              </div>
              <div className="min-w-[116px] rounded-xl bg-[#13224A]/75 border border-white/5 px-4 py-3.5 flex flex-col items-center gap-2 text-center shadow-sm">
                <PanelsTopLeft className="w-6 h-6 text-[#36E2C6]" strokeWidth={2.4} />
                <span className="text-[11px] sm:text-xs font-semibold text-[#D8E2FF]">Sites Web Réactifs</span>
              </div>
            </div>
          </div>
        ) : activeSlide === 3 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col pt-1">
            <div>
              <div className="inline-flex flex-wrap items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-5 shadow-sm">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E2A93B]/30 to-[#F3C969]/10 text-[#F3C969] text-[11px] font-bold tracking-wider uppercase border border-[#E2A93B]/40">
                  INFRASTRUCTURE DE POINTE
                </span>
                <span className="text-xs italic text-[#C6C6CE] font-light">
                  Infrastructures &amp; Solutions Haute Performance
                </span>
              </div>

              <h1 className="font-['Bricolage_Grotesque'] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-[800] text-[#D8E2FF] tracking-tight leading-[1.08] max-w-[900px] text-balance">
                Des solutions logicielles et cloud conçues pour vos impératifs de rentabilité
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] text-[#C6C6CE] max-w-[510px] leading-relaxed">
                Bénéficiez d&apos;architectures réseau résilientes, de bases de données sécurisées et d&apos;outils de
                gestion dimensionnés pour accélérer votre productivité sur le terrain.
              </p>

              <a
                href="#services"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[13px] shadow-[0_8px_24px_rgba(226,169,59,0.3)] hover:shadow-[0_12px_28px_rgba(226,169,59,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explorer nos prestations</span>
                <Network className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative mx-auto mt-5 h-[220px] w-full max-w-[440px]">
              <div className="absolute left-[10%] top-[8%] flex h-11 w-11 items-center justify-center rounded-xl border border-[#36E2C6]/20 bg-[#0E1B34]/90 text-[#36E2C6] shadow-lg">
                <Server className="w-5 h-5" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E2A93B]/25 bg-[#1A2948]/95 px-6 py-5 text-center shadow-xl">
                <Cloud className="mx-auto mb-2 h-7 w-7 text-[#F3B83F]" strokeWidth={2.5} />
                <span className="whitespace-nowrap text-sm font-bold text-[#D8E2FF]">Haute Disponibilité</span>
              </div>
              <div className="absolute bottom-[2%] right-[12%] flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2A93B]/25 bg-[#0E1B34]/90 text-[#F3B83F] shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>
        ) : activeSlide === 4 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col pt-1">
            <div>
              <div className="inline-flex flex-wrap items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-5 shadow-sm">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E2A93B]/30 to-[#F3C969]/10 text-[#F3C969] text-[11px] font-bold tracking-wider uppercase border border-[#E2A93B]/40">
                  EXPÉRIENCE UTILISATEUR HAUT DE GAMME
                </span>
                <span className="text-xs italic text-[#C6C6CE] font-light">
                  Design d&apos;Impact &amp; Architecture Moderne
                </span>
              </div>

              <h1 className="font-['Bricolage_Grotesque'] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-[800] text-[#D8E2FF] tracking-tight leading-[1.08] max-w-[900px] text-balance">
                L&apos;alliance parfaite entre robustesse technique et design de conversion
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] text-[#C6C6CE] max-w-[510px] leading-relaxed">
                Bénéficiez d&apos;interfaces utilisateur engageantes et d&apos;une ingénierie logicielle sans faille.
                Nous concevons des produits digitaux fiables pour consolider votre leadership.
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[13px] shadow-[0_8px_24px_rgba(226,169,59,0.3)] hover:shadow-[0_12px_28px_rgba(226,169,59,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Obtenir un devis</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="mx-auto mt-5 w-full max-w-[320px] rounded-2xl border border-white/5 bg-[#1A2948]/90 p-4 shadow-xl">
              <div className="mb-2 h-2 w-1/3 rounded-full bg-[#F3B83F]" />
              <div className="mb-2 h-1.5 w-full rounded-full bg-[#273653]" />
              <div className="h-1.5 w-2/3 rounded-full bg-[#273653]" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="flex h-12 items-center justify-center rounded-lg bg-[#0E1B34] font-mono text-[10px] text-[#9AA7C7]">
                  UI/UX Douala
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[#062B29] font-mono text-[10px] text-[#36E2C6]">
                  Clean Code
                </div>
              </div>
            </div>
          </div>
        ) : activeSlide === 5 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col pt-1">
            <div>
              <div className="inline-flex flex-wrap items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-5 shadow-sm">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E2A93B]/30 to-[#F3C969]/10 text-[#F3C969] text-[11px] font-bold tracking-wider uppercase border border-[#E2A93B]/40">
                  STRATÉGIE DE CROISSANCE
                </span>
                <span className="text-xs italic text-[#C6C6CE] font-light">
                  Stratégie Digitale &amp; ROI Garanti
                </span>
              </div>

              <h1 className="font-['Bricolage_Grotesque'] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-[800] text-[#D8E2FF] tracking-tight leading-[1.08] max-w-[1000px] text-balance">
                Une stratégie technologique calibrée pour accélérer votre rentabilité
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] text-[#C6C6CE] max-w-[510px] leading-relaxed">
                Définissons ensemble une feuille de route opérationnelle à fort impact. Nos consultants vous guident
                vers une transformation digitale mesurable et créatrice de valeur.
              </p>

              <a
                href="#process"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[13px] shadow-[0_8px_24px_rgba(226,169,59,0.3)] hover:shadow-[0_12px_28px_rgba(226,169,59,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Voir notre méthodologie</span>
                <Workflow className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="mx-auto mt-5 w-full max-w-[360px] rounded-2xl border border-[#E2A93B]/20 bg-[#1A2948]/90 p-4 shadow-xl">
              {[
                { title: 'Audit d’écosystème', number: '1' },
                { title: 'Orchestration & Cadence', number: '2' },
                { title: 'Déploiement Souverain', number: '3', active: true },
              ].map((step, index) => (
                <div key={step.number} className="relative flex items-center gap-3 py-1.5">
                  <span
                    className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#0B1530] ${
                      step.active ? 'bg-[#36E2C6]' : 'bg-[#F3B83F]'
                    }`}
                  >
                    {step.number}
                  </span>
                  {index < 2 && <span className="absolute left-[11px] top-8 h-3 w-px bg-[#8B7752]" />}
                  <span className={`text-xs font-semibold ${step.active ? 'text-[#36E2C6]' : 'text-[#D8E2FF]'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full py-4 lg:py-8">
              <div>
                <div className="inline-flex flex-wrap items-center gap-3 p-1 pr-4 rounded-full bg-[#13224A]/80 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36E2C6]/10 text-[#36E2C6] text-[11px] font-bold tracking-wider uppercase border border-[#36E2C6]/35">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36E2C6] shadow-[0_0_8px_#36E2C6]" aria-hidden />
                    NOUVEAU PROJET
                  </span>
                  <span className="text-xs italic text-[#C6C6CE] font-light">
                    Solution SaaS Dédiée Cameroun
                  </span>
                </div>

                <h1 className="font-['Bricolage_Grotesque'] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-[800] text-white tracking-tight leading-[1.12] max-w-xl text-balance">
                  Découvrez{' '}
                  <span className="text-[#36E2C6] drop-shadow-[0_0_24px_rgba(54,226,198,0.35)]">TENYSY</span>, le
                  nouveau projet des Anges du Digital
                </h1>

                <p className="mt-5 text-[16px] sm:text-[18px] text-[#A6B4D6] max-w-lg leading-relaxed">
                  Une seule solution pour gérer votre activité au quotidien, pensée pour la productivité totale des
                  entreprises et des indépendants du Cameroun.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#tenysy"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#36E2C6] hover:bg-[#2DD0B5] text-[#05132C] font-bold text-[15px] shadow-[0_8px_32px_rgba(54,226,198,0.35)] hover:shadow-[0_12px_36px_rgba(54,226,198,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Zap className="w-4 h-4 fill-[#05132C]" strokeWidth={2.5} />
                    <span>Découvrir TENYSY</span>
                  </a>

                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-white font-medium text-[15px] border border-white/20 hover:border-white/35 transition-all"
                  >
                    <span>Voir tous nos services</span>
                    <ArrowRight className="w-4 h-4 text-[#9AA7C7]" />
                  </a>
                </div>
              </div>

              <div className="relative lg:pt-4">
                <div className="absolute -inset-4 bg-[#36E2C6]/10 blur-3xl rounded-full pointer-events-none opacity-60" />
                <HeroTenysyDashboard />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-md">
          {Array.from({ length: HERO_COUNT }, (_, idx) => {
            const isActive = activeSlide === idx;
            const accent = indicatorColors[idx] ?? '#F3C969';

            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer flex-1 max-w-[60px] bg-white/15"
                style={{ width: isActive ? '60px' : '40px' }}
                aria-label={`Aller au hero ${idx + 1}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {isActive ? (
                  <span
                    key={activeSlide}
                    className="hero-slide-progress absolute inset-0 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#13224A]/80 hover:bg-[#1B2D5E] border border-[#E2A93B]/25 hover:border-[#E2A93B]/45 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95 shadow"
            aria-label="Hero précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#13224A]/80 hover:bg-[#1B2D5E] border border-[#E2A93B]/25 hover:border-[#E2A93B]/45 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95 shadow"
            aria-label="Hero suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
