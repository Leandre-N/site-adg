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
  Network,
  Workflow,
  Sparkles,
} from 'lucide-react';

const HERO_SWAP_MS = 5000;
const HERO_COUNT = 6;

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

function HeroTenysyPhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Maquette mobile TENESY, expérience simple et intuitive, bientôt disponible"
      className="relative mx-auto flex h-[440px] w-full max-w-[560px] items-center justify-center overflow-hidden sm:h-[520px] lg:mx-0 lg:ml-auto"
      style={{
        backgroundImage:
          'linear-gradient(rgba(139, 157, 190, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 157, 190, 0.035) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="absolute left-1/2 top-1/2 aspect-square w-[min(88vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2A93B]/15" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[min(74vw,390px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2A93B]/10 border-dashed" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[min(60vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div className="relative z-10 h-[400px] w-[230px] rotate-[5deg] rounded-[3rem] border-2 border-[#A97932] bg-[#020A12] p-[7px] shadow-[0_28px_70px_rgba(0,0,0,0.55)] sm:h-[490px] sm:w-[285px]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-[radial-gradient(ellipse_at_58%_24%,rgba(226,169,59,0.18),transparent_42%),linear-gradient(160deg,#102d40_0%,#071724_52%,#020b14_100%)]">
          <div className="absolute left-1/2 top-0 h-7 w-[34%] -translate-x-1/2 rounded-b-2xl bg-[#020A12]" />
          <span className="absolute left-6 top-7 font-['Bricolage_Grotesque'] text-xl font-extrabold italic text-white">
            T<span className="text-[#E2A93B]">.</span>
          </span>

          <div className="absolute inset-x-6 top-[45%] -translate-y-1/2">
            <p className="mb-3 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#A88B5D]">
              Bienvenue dans
            </p>
            <p className="font-['Bricolage_Grotesque'] text-[38px] font-extrabold tracking-[-0.06em] text-white sm:text-[46px]">
              TENESY
            </p>
            <p className="mt-1 text-[10px] font-medium text-[#8794A0]">L&apos;expérience arrive bientôt.</p>
          </div>

          <div className="absolute inset-x-6 bottom-7">
            <div className="mb-3 h-[2px] w-full bg-white/10">
              <div className="h-full w-1/2 bg-[#E2A93B]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[8px] font-semibold uppercase tracking-wider text-[#697883]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E2A93B]" />
              En développement
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[24%] z-20 rounded-2xl border border-[#E2A93B]/25 bg-[#081B28]/95 px-4 py-3 shadow-xl sm:left-[2%] sm:px-5">
        <div className="flex items-center gap-3">
          <span className="font-['Bricolage_Grotesque'] text-sm font-bold text-[#F3B83F]">01</span>
          <div>
            <p className="text-[8px] uppercase tracking-widest text-[#758591]">Expérience</p>
            <p className="mt-1 text-[10px] font-bold text-white">Simple &amp; intuitive</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[18%] right-0 z-20 rounded-2xl border border-[#E2A93B]/25 bg-[#081B28]/95 px-4 py-3 shadow-xl sm:right-[1%] sm:px-5">
        <div className="flex items-center gap-3">
          <Sparkles className="h-4 w-4 text-[#F3B83F]" />
          <div>
            <p className="text-[8px] uppercase tracking-widest text-[#758591]">Imaginé par</p>
            <p className="mt-1 text-[10px] font-bold text-white">Les Anges du Digital</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl bg-[#07152B] shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
      <img src={src} alt={alt} className="block h-auto max-h-[440px] w-full object-contain" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05132C]/25 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

function HeroGrowthVisual() {
  return <HeroPhoto src="/assets/hero%202.jpeg" alt="Croissance numérique et progression des performances" />;
}

function HeroAgilityVisual() {
  return <HeroPhoto src="/assets/hero%203.png" alt="Innovation digitale et outils métiers connectés" />;
}

/**
 * HeroSection: Carrousel bannière principale (Spiritual-Tech Luxe + TENYSY)
 */
export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full py-4 lg:py-8">
              <div>
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
              <div className="relative">
                <div className="absolute -inset-5 rounded-full bg-[#087BFF]/15 blur-3xl" />
                <HeroGrowthVisual />
              </div>
            </div>
          </div>
        ) : activeSlide === 2 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full py-4 lg:py-8">
              <div>
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

            <div className="mt-6 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#13224A]/70 px-3 py-2 text-[11px] font-semibold text-[#D8E2FF] shadow-sm">
                <Palette className="h-4 w-4 text-[#F3C969]" strokeWidth={2.4} />
                <span>Identité forte</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#13224A]/70 px-3 py-2 text-[11px] font-semibold text-[#D8E2FF] shadow-sm">
                <PanelsTopLeft className="h-4 w-4 text-[#36E2C6]" strokeWidth={2.4} />
                <span>Sites web réactifs</span>
              </div>
            </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-5 rounded-full bg-[#159ED6]/20 blur-3xl" />
                <HeroAgilityVisual />
              </div>
            </div>
          </div>
        ) : activeSlide === 3 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full py-4 lg:py-8">
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

              <HeroPhoto src="/assets/hero%204.jpg" alt="Cloud computing et infrastructure réseau" />
            </div>
          </div>
        ) : activeSlide === 4 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full py-4 lg:py-8">
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
              <div className="relative">
                <HeroPhoto src="/assets/hero%205.jpg" alt="Réseau digital et écosystème connecté" />
              </div>
            </div>
          </div>
        ) : activeSlide === 5 ? (
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full py-4 lg:py-8">
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
              <div className="relative">
                <HeroPhoto src="/assets/hero%206.jpg" alt="Protection et sécurité des solutions numériques" />
              </div>
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
                <HeroTenysyPhoneMockup />
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
