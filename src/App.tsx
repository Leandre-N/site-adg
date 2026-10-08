import { FormEvent, ReactNode, useEffect, useState } from "react";

type Page =
  | "home"
  | "tenesy"
  | "services"
  | "service"
  | "work"
  | "project"
  | "about"
  | "team"
  | "blog"
  | "article"
  | "contact"
  | "quote";

const PHOTO =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85";

const paths: Record<string, ReactNode> = {
  arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  web: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
  phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
  network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m12 7-7 9M12 7l7 9M7 18h10" /></>,
  support: <><path d="M4 14a8 8 0 0 1 16 0" /><path d="M4 14v4h3v-5H4M20 14v4h-3v-5h3M17 18c0 2-2 3-5 3" /></>,
  spark: <><path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
};

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.spark}
    </svg>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`logo ${inverse ? "logo-inverse" : ""}`}>
      <span className="logo-image">
        <img src="/assets/les-anges-du-digital-logo.jpg" alt="" />
      </span>
      <span>LES ANGES<small>DU DIGITAL</small></span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return <button className={`button button-${variant}`} onClick={onClick} type={type}>{children}<Icon name="arrow" size={18} /></button>;
}

function Header({ navigate }: { navigate: (page: Page, anchor?: string) => void }) {
  const [open, setOpen] = useState(false);
  const go = (page: Page, anchor?: string) => { setOpen(false); navigate(page, anchor); };
  return (
    <header className="header">
      <div className="container nav-wrap">
        <button className="logo-button" onClick={() => go("home")} aria-label="Accueil"><Logo /></button>
        <nav className={open ? "nav open" : "nav"} aria-label="Navigation principale">
          <button onClick={() => go("home")}>Accueil</button>
          <button className="tenesy-nav" onClick={() => go("tenesy")}><span /> TENESY</button>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("work")}>Réalisations</button>
          <button onClick={() => go("about")}>À propos</button>
          <button onClick={() => go("blog")}>Blog</button>
          <button onClick={() => go("contact")}>Contact</button>
          <div className="nav-mobile-cta"><Button onClick={() => go("quote")}>Demander un devis</Button></div>
        </nav>
        <div className="nav-cta"><Button onClick={() => go("quote")}>Demander un devis</Button></div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu"><Icon name={open ? "close" : "menu"} /></button>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

const services = [
  { icon: "web", title: "Développement web", text: "Sites vitrines, plateformes et expériences web rapides qui transforment vos visites en opportunités." },
  { icon: "phone", title: "Développement mobile", text: "Applications mobiles fluides et utiles, conçues autour de vos utilisateurs et de vos objectifs." },
  { icon: "chart", title: "Marketing digital", text: "Une présence digitale cohérente pour gagner en visibilité, engager et développer votre audience." },
  { icon: "code", title: "Solutions sur mesure", text: "Des outils digitaux adaptés à vos processus pour simplifier le travail et accélérer votre activité." },
  { icon: "network", title: "Réseaux & infrastructure", text: "Installation, configuration et accompagnement pour une infrastructure fiable et sécurisée." },
  { icon: "support", title: "Maintenance & support", text: "Un suivi humain et réactif pour garder vos solutions performantes après leur lancement." },
];

const problems = [
  ["Visibilité limitée", "Nous construisons une présence claire et crédible pour rendre votre activité visible au bon public."],
  ["Peu de contacts qualifiés", "Nous repensons vos parcours et vos messages pour faciliter le passage de visiteur à prospect."],
  ["Processus trop manuels", "Nous digitalisons les tâches répétitives pour vous faire gagner du temps au quotidien."],
  ["Un produit à concrétiser", "Nous transformons votre idée d’application ou de plateforme en solution simple et fiable."],
  ["Communication dispersée", "Nous structurons vos canaux et contenus pour créer une relation durable avec vos clients."],
  ["Besoins spécifiques", "Nous concevons une réponse informatique alignée sur votre contexte, vos usages et votre budget."],
];

const projects = [
  { n: "01", type: "Site web", title: "Projet vitrine à intégrer", color: "project-blue" },
  { n: "02", type: "Application mobile", title: "Application à intégrer", color: "project-orange" },
  { n: "03", type: "Solution digitale", title: "Plateforme métier à intégrer", color: "project-dark" },
];

function Hero({ navigate }: { navigate: (p: Page, a?: string) => void }) {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="pill"><span /> Studio digital · Créateur de TENESY</span>
          <h1>Votre ambition mérite des solutions digitales <em>à sa hauteur.</em></h1>
          <p>Nous créons des expériences web, mobiles et digitales utiles, pensées pour vos clients et les résultats de votre activité.</p>
          <div className="button-row">
            <Button onClick={() => navigate("quote")}>Parler de votre projet</Button>
            <Button variant="secondary" onClick={() => navigate("tenesy")}>Découvrir TENESY</Button>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>LA</span><span>UX</span><span>DEV</span></div>
            <p><strong>Une équipe engagée</strong><br />à vos côtés, de l’idée au lancement.</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame"><img src={PHOTO} alt="Équipe digitale collaborant autour d'un écran" /></div>
          <div className="dashboard-card">
            <div className="dashboard-top"><span>Vue d’ensemble</span><i /></div>
            <div className="chart-bars">{[32, 48, 40, 72, 58, 86, 70].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
            <div className="dashboard-label"><span>Performance</span><strong>+XX%</strong></div>
          </div>
          <div className="floating-tag"><Icon name="check" size={18} /><span><strong>Projet maîtrisé</strong><small>Suivi à chaque étape</small></span></div>
          <div className="brand-seal">
            <img src="/assets/les-anges-du-digital-logo.jpg" alt="Emblème Les Anges du Digital" />
          </div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </div>
      </div>
      <div className="trust-strip container">
        {[["XX+", "Projets réalisés"], ["XX+", "Clients accompagnés"], ["XX", "Années d’expérience"], ["XX%", "Taux de satisfaction"]].map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
      </div>
    </section>
  );
}

function Home({ navigate }: { navigate: (p: Page, a?: string) => void }) {
  const [faq, setFaq] = useState(0);
  const faqs = [
    ["Quels types de projets réalisez-vous ?", "Nous réalisons des sites web, applications mobiles, plateformes métier, campagnes digitales et solutions informatiques sur mesure."],
    ["Combien coûte la création d’un site web ?", "Le budget dépend de vos objectifs, du périmètre et des fonctionnalités. Après un premier échange gratuit, nous vous remettons une estimation claire."],
    ["Combien de temps faut-il pour réaliser un projet ?", "Le calendrier est défini selon la complexité du projet. Chaque proposition inclut des étapes, des livrables et un délai réaliste."],
    ["Travaillez-vous avec des particuliers et des entreprises ?", "Oui. Nous accompagnons entrepreneurs, organisations, PME et porteurs de projet avec une approche adaptée à chaque contexte."],
    ["Assurez-vous la maintenance après livraison ?", "Oui. Nous proposons un accompagnement après mise en ligne, avec maintenance, support et évolutions selon vos besoins."],
    ["Comment demander un devis ?", "Utilisez notre formulaire de devis ou contactez-nous. Décrivez votre besoin, même brièvement : notre équipe reviendra vers vous."],
  ];
  return (
    <>
      <Hero navigate={navigate} />
      <TenesySpotlight navigate={navigate} />
      <section className="section light-pattern">
        <div className="container">
          <SectionTitle eyebrow="Vos enjeux, notre point de départ" title="Vous avez un projet. Nous avons la solution digitale." text="Nous ne commençons pas par la technologie. Nous commençons par comprendre ce qui freine votre activité." />
          <div className="problem-grid">
            {problems.map(([title, text], i) => <article className="problem-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><div className="problem-arrow"><Icon name="arrow" /></div></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="title-row"><SectionTitle eyebrow="Notre expertise" title="Nos solutions digitales" text="Un ensemble de compétences complémentaires pour concevoir, lancer et faire évoluer vos projets." /><Button variant="secondary" onClick={() => navigate("services")}>Tous les services</Button></div>
          <div className="services-grid">
            {services.map((s) => <article className="service-card" key={s.title}><div className="icon-box"><Icon name={s.icon} /></div><h3>{s.title}</h3><p>{s.text}</p><button className="text-link" onClick={() => navigate("service")}>En savoir plus <Icon name="arrow" size={17} /></button></article>)}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container why-grid">
          <div className="why-visual">
            <div className="why-image"><img src={PHOTO} alt="Équipe en séance de travail collaboratif" /></div>
            <div className="why-card"><Icon name="spark" /><strong>Une relation simple.<br />Des résultats concrets.</strong></div>
          </div>
          <div>
            <SectionTitle eyebrow="Pourquoi nous choisir" title="Votre partenaire, pas seulement votre prestataire." text="Nous mettons la clarté, l’écoute et l’impact au cœur de chaque collaboration." />
            <div className="benefit-list">
              {["Des solutions vraiment sur mesure", "Une approche orientée résultats", "Un accompagnement humain et personnalisé", "Des délais et budgets clairement définis", "Un support qui continue après la livraison", "Une équipe jeune, curieuse et engagée"].map((x) => <div key={x}><span><Icon name="check" size={16} /></span>{x}</div>)}
            </div>
            <Button onClick={() => navigate("about")}>Découvrir notre approche</Button>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionTitle eyebrow="Notre méthode" title="De votre idée à sa réalisation" text="Un processus lisible, sans jargon ni mauvaise surprise." center />
          <div className="process-line">
            {[
              ["01", "Échange", "Nous écoutons votre besoin."],
              ["02", "Analyse", "Nous clarifions vos objectifs."],
              ["03", "Proposition", "Nous cadrons la bonne solution."],
              ["04", "Réalisation", "Nous concevons et développons."],
              ["05", "Suivi", "Nous restons à vos côtés."],
            ].map(([n, t, d]) => <div className="process-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section portfolio-section" id="work">
        <div className="container">
          <SectionTitle eyebrow="Notre savoir-faire en action" title="Découvrez nos projets" text="Des emplacements prêts à accueillir vos réalisations et à raconter leur impact réel." />
          <div className="filters"><button className="active">Tous</button><button>Sites web</button><button>Applications mobiles</button><button>Solutions digitales</button><button>Marketing</button></div>
          <div className="projects-grid">
            {projects.map((p) => <article className="project-card" key={p.n}><div className={`project-art ${p.color}`}><span className="project-window"><i /><i /><i /><b>PROJET<br />À VENIR</b></span><strong>{p.n}</strong></div><div className="project-info"><span>{p.type}</span><h3>{p.title}</h3><p>Image, contexte et résultat réel du projet à ajouter ici.</p><button onClick={() => navigate("project")} className="round-link"><Icon name="arrow" /></button></div></article>)}
          </div>
          <div className="center-action"><Button variant="secondary" onClick={() => navigate("work")}>Explorer toutes nos réalisations</Button></div>
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-card">
          <div className="case-copy">
            <span className="eyebrow light">Étude de cas — modèle</span>
            <h2>Transformer un besoin métier en solution simple à utiliser.</h2>
            <p>Un format conçu pour expliquer la valeur de chaque réalisation, sans promesse artificielle.</p>
            <Button variant="light" onClick={() => navigate("project")}>Voir l’étude de cas</Button>
          </div>
          <div className="case-flow">
            {[["01", "Problème", "Contexte client à intégrer"], ["02", "Solution", "Réponse apportée à intégrer"], ["03", "Expertises", "Services mobilisés à intégrer"], ["04", "Résultat", "Résultat réel à intégrer"]].map(([n, t, x]) => <div key={n}><span>{n}</span><p><strong>{t}</strong><small>{x}</small></p></div>)}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <SectionTitle eyebrow="La confiance se construit" title="Ils nous font confiance" text="Cette section accueillera bientôt les retours authentiques de nos clients." center />
          <div className="testimonial-grid">
            {[1, 2, 3].map((x) => <article className="testimonial-card" key={x}><div className="quote-mark">“</div><p>« Témoignage client à intégrer après validation. »</p><div className="person"><span>Photo</span><div><strong>Nom du client</strong><small>Fonction · Entreprise</small></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="title-row"><SectionTitle eyebrow="Les visages derrière vos projets" title="Une équipe à votre écoute" text="Des profils complémentaires réunis par la volonté de créer des solutions digitales réellement utiles." /><Button variant="secondary" onClick={() => navigate("team")}>Découvrir l’équipe</Button></div>
          <div className="team-grid">
            {["Direction & stratégie", "Design & expérience", "Développement", "Marketing & contenu"].map((role, i) => <article className="team-card" key={role}><div className={`team-placeholder team-${i + 1}`}><span>Photo à intégrer</span></div><h3>Prénom & nom</h3><p>{role}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-grid">
          <div><span className="big-word">UTILE</span><div className="about-badge"><Icon name="spark" /><span>Penser local.<br /><strong>Créer sans limites.</strong></span></div></div>
          <div><SectionTitle eyebrow="Les Anges du Digital" title="Le digital doit servir vos ambitions, pas les compliquer." /><p className="about-text">Nous sommes une jeune équipe ambitieuse qui imagine des solutions accessibles, fiables et adaptées aux réalités des entreprises. Notre mission : rendre le digital plus clair et plus utile pour celles et ceux qui entreprennent.</p><Button onClick={() => navigate("about")}>Découvrir notre histoire</Button></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <SectionTitle eyebrow="Questions fréquentes" title="Tout ce que vous voulez savoir avant de vous lancer." text="Vous ne trouvez pas votre réponse ? Écrivez-nous, nous vous répondrons simplement." />
          <div className="accordion">
            {faqs.map(([q, a], i) => <div className={`faq-item ${faq === i ? "active" : ""}`} key={q}><button onClick={() => setFaq(faq === i ? -1 : i)}><span>{q}</span><Icon name={faq === i ? "close" : "plus"} size={20} /></button>{faq === i && <p>{a}</p>}</div>)}
          </div>
        </div>
      </section>
      <FinalCta navigate={navigate} />
    </>
  );
}

function TenesySpotlight({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="tenesy-spotlight">
      <div className="container tenesy-shell">
        <div className="tenesy-copy">
          <span className="product-kicker"><i /> Produit phare en développement</span>
          <div className="tenesy-wordmark">TENESY<span>.</span></div>
          <h2>Une nouvelle expérience digitale prend forme.</h2>
          <p>TENESY est le produit actuellement développé par Les Anges du Digital. Une solution ambitieuse, conçue avec exigence, dont l’univers et les fonctionnalités seront dévoilés progressivement.</p>
          <div className="tenesy-actions">
            <Button variant="light" onClick={() => navigate("tenesy")}>Découvrir le projet</Button>
            <button className="tenesy-link" onClick={() => navigate("contact")}>Suivre son lancement <Icon name="arrow" size={17} /></button>
          </div>
          <div className="tenesy-meta"><span>CONCEPTION</span><i /><span>DÉVELOPPEMENT</span><i /><span>BIENTÔT</span></div>
        </div>
        <TenesyVisual />
      </div>
    </section>
  );
}

function TenesyVisual() {
  return (
    <div className="tenesy-visual" aria-label="Aperçu conceptuel de TENESY">
      <div className="tenesy-glow" />
      <div className="tenesy-phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="screen-brand">T<span>.</span></div>
          <div className="screen-copy"><small>BIENVENUE DANS</small><strong>TENESY</strong><p>L’expérience arrive bientôt.</p></div>
          <div className="screen-progress"><span /></div>
          <div className="screen-footer"><i /><span>EN DÉVELOPPEMENT</span></div>
        </div>
      </div>
      <div className="tenesy-panel panel-one"><span>01</span><p><small>EXPÉRIENCE</small><strong>Simple & intuitive</strong></p></div>
      <div className="tenesy-panel panel-two"><Icon name="spark" size={18} /><p><small>IMAGINÉ PAR</small><strong>Les Anges du Digital</strong></p></div>
      <div className="tenesy-ring ring-one" /><div className="tenesy-ring ring-two" />
    </div>
  );
}

function FinalCta({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="final-cta">
      <div className="container cta-inner"><span className="eyebrow light">Votre prochain projet commence ici</span><h2>Vous avez une idée ?<br /><em>Parlons-en.</em></h2><p>Expliquez-nous votre besoin. Nous vous aiderons à trouver la solution la plus juste pour votre activité.</p><div className="button-row centered"><Button variant="light" onClick={() => navigate("quote")}>Demander un devis</Button><Button variant="ghost" onClick={() => navigate("contact")}>Nous contacter</Button></div></div>
    </section>
  );
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function TenesyPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <>
      <section className="tenesy-page-hero">
        <div className="container tenesy-page-grid">
          <div>
            <span className="product-kicker dark"><i /> Produit phare · En développement</span>
            <div className="tenesy-wordmark large">TENESY<span>.</span></div>
            <h1>Nous construisons la suite, avec ambition.</h1>
            <p>TENESY est le produit phare actuellement conçu et développé par Les Anges du Digital. Cette page évoluera avec le projet pour révéler sa promesse, ses fonctionnalités et sa date de lancement.</p>
            <div className="button-row"><Button onClick={() => navigate("contact")}>Être informé du lancement</Button><Button variant="secondary" onClick={() => navigate("services")}>Voir notre savoir-faire</Button></div>
          </div>
          <TenesyVisual />
        </div>
      </section>
      <section className="section tenesy-manifesto">
        <div className="container">
          <div className="manifesto-intro"><span className="eyebrow">Le projet</span><h2>Un produit développé avec la même exigence que les solutions de nos clients.</h2><p>Avec TENESY, notre équipe transforme une vision en produit digital. Le périmètre fonctionnel détaillé sera présenté dès qu’il sera prêt à être communiqué publiquement.</p></div>
          <div className="tenesy-principles">
            {[["01", "Clarté", "Une expérience qui va à l’essentiel et facilite chaque interaction."], ["02", "Utilité", "Une technologie pensée comme un moyen, jamais comme une complication."], ["03", "Évolution", "Un produit conçu pour apprendre, progresser et grandir dans le temps."]].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section tenesy-progress-section">
        <div className="container progress-grid">
          <div><span className="eyebrow">En coulisses</span><h2>Le projet avance.</h2><p>TENESY est actuellement en développement. Plutôt que de publier des informations approximatives, nous partagerons les étapes importantes au bon moment.</p><Button variant="secondary" onClick={() => navigate("contact")}>Contacter l’équipe</Button></div>
          <div className="product-roadmap">
            <div className="roadmap-item done"><span><Icon name="check" size={16} /></span><p><small>ÉTAPE 01</small><strong>Vision & conception</strong></p><em>Posée</em></div>
            <div className="roadmap-item active"><span>02</span><p><small>ÉTAPE 02</small><strong>Développement du produit</strong></p><em>En cours</em></div>
            <div className="roadmap-item"><span>03</span><p><small>ÉTAPE 03</small><strong>Présentation publique</strong></p><em>À venir</em></div>
          </div>
        </div>
      </section>
      <section className="tenesy-close">
        <div className="container"><span className="tenesy-monogram">T.</span><p>Un produit de</p><Logo inverse /><h2>L’avenir de TENESY s’écrit maintenant.</h2><Button variant="light" onClick={() => navigate("contact")}>Suivre le projet</Button></div>
      </section>
    </>
  );
}

function ServicesPage({ navigate }: { navigate: (p: Page) => void }) {
  return <><PageHero eyebrow="Nos expertises" title="Des solutions pensées pour faire avancer votre activité." text="De la stratégie au support, nous réunissons les compétences nécessaires pour donner vie à votre projet." /><section className="section"><div className="container services-page-grid">{services.map((s, i) => <article className="service-wide" key={s.title}><span>0{i + 1}</span><div className="icon-box"><Icon name={s.icon} /></div><div><h2>{s.title}</h2><p>{s.text}</p><button className="text-link" onClick={() => navigate("service")}>Découvrir ce service <Icon name="arrow" size={17} /></button></div></article>)}</div></section><FinalCta navigate={navigate} /></>;
}

function DetailPage({ navigate, kind }: { navigate: (p: Page) => void; kind: "service" | "project" | "article" }) {
  const content = {
    service: ["Développement web", "Des expériences web qui transforment votre présence en levier de croissance.", "Une méthode complète pour concevoir un site rapide, clair, crédible et facile à faire évoluer."],
    project: ["Étude de cas", "Projet client à intégrer", "Cette page est prête à accueillir le contexte, la démarche, les choix de conception et les résultats réels d’une réalisation."],
    article: ["Conseils & perspectives", "Titre de l’article à intégrer", "Une structure éditoriale lisible pour partager votre expertise et aider vos prospects à prendre de meilleures décisions."],
  }[kind];
  return <><PageHero eyebrow={content[0]} title={content[1]} text={content[2]} /><section className="section"><div className="container detail-grid"><aside><span className="eyebrow">En bref</span><div><strong>Expertise</strong><p>Information à intégrer</p></div><div><strong>Durée</strong><p>Selon votre besoin</p></div><div><strong>Livrables</strong><p>Définis après analyse</p></div></aside><article className="detail-content"><h2>Un accompagnement construit autour de vos objectifs.</h2><p>Nous commençons chaque projet par une phase d’écoute et de cadrage. Cela nous permet de comprendre vos utilisateurs, vos contraintes et les résultats attendus avant de proposer une solution.</p><div className="feature-panel"><h3>Ce que vous obtenez</h3>{["Une vision claire du projet", "Une conception centrée sur les usages", "Des points d’étape réguliers", "Une solution fiable et évolutive"].map(x => <p key={x}><Icon name="check" size={16} />{x}</p>)}</div><h2>Une démarche transparente.</h2><p>Vous savez ce qui est réalisé, pourquoi et à quelle étape. Nous privilégions une communication simple et des décisions argumentées.</p><Button onClick={() => navigate("quote")}>Discuter de votre projet</Button></article></div></section><FinalCta navigate={navigate} /></>;
}

function AboutPage({ navigate, teamOnly = false }: { navigate: (p: Page) => void; teamOnly?: boolean }) {
  if (teamOnly) return <><PageHero eyebrow="Notre équipe" title="Des talents complémentaires. Une même exigence." text="Découvrez prochainement les personnes qui imaginent, conçoivent et réalisent vos projets." /><section className="section"><div className="container team-grid team-page">{["Direction & stratégie", "Design & expérience", "Développement web", "Développement mobile", "Marketing digital", "Support client"].map((x, i) => <article className="team-card" key={x}><div className={`team-placeholder team-${i % 4 + 1}`}><span>Photo à intégrer</span></div><h3>Prénom & nom</h3><p>{x}</p></article>)}</div></section><FinalCta navigate={navigate} /></>;
  return <><PageHero eyebrow="À propos" title="Une jeune agence avec une ambition simple : rendre le digital vraiment utile." text="Nous aidons les entreprises, organisations et entrepreneurs à transformer leurs idées en solutions qui font la différence." /><section className="section"><div className="container values-grid">{[["Notre mission", "Créer des solutions utiles, accessibles et alignées sur les réalités de nos clients."], ["Notre vision", "Devenir un partenaire digital de référence pour les organisations ambitieuses en Afrique."], ["Notre manière de faire", "Écouter, simplifier, concevoir avec soin et rester présent après la livraison."]].map(([t, x], i) => <article key={t}><span>0{i + 1}</span><h2>{t}</h2><p>{x}</p></article>)}</div></section><section className="section why-section"><div className="container why-grid"><div className="why-image"><img src={PHOTO} alt="Équipe digitale en collaboration" /></div><div><SectionTitle eyebrow="Notre conviction" title="Les meilleures solutions naissent d’une bonne compréhension." text="Votre métier est notre point de départ. La technologie vient ensuite, comme un moyen de vous rendre plus visible, plus efficace et plus proche de vos clients." /><Button onClick={() => navigate("team")}>Rencontrer l’équipe</Button></div></div></section><FinalCta navigate={navigate} /></>;
}

function WorkPage({ navigate }: { navigate: (p: Page) => void }) {
  return <><PageHero eyebrow="Nos réalisations" title="Des projets conçus pour être utiles et produire des résultats." text="Portfolio en préparation : chaque projet présenté ici reposera sur une réalisation réelle et documentée." /><section className="section portfolio-section"><div className="container"><div className="filters"><button className="active">Tous</button><button>Sites web</button><button>Applications</button><button>Solutions digitales</button></div><div className="projects-grid work-page">{[...projects, ...projects].map((p, i) => <article className="project-card" key={i}><div className={`project-art ${p.color}`}><span className="project-window"><b>PROJET<br />À INTÉGRER</b></span><strong>0{i + 1}</strong></div><div className="project-info"><span>{p.type}</span><h3>{p.title}</h3><button className="text-link" onClick={() => navigate("project")}>Voir le projet <Icon name="arrow" size={17} /></button></div></article>)}</div></div></section><FinalCta navigate={navigate} /></>;
}

function BlogPage({ navigate }: { navigate: (p: Page) => void }) {
  const posts = [["Stratégie", "Comment préparer efficacement votre projet digital ?"], ["Web", "Les éléments essentiels d’un site qui convertit"], ["Conseils", "Site web ou application : comment faire le bon choix ?"]];
  return <><PageHero eyebrow="Le blog" title="Des idées claires pour mieux décider dans le digital." text="Conseils pratiques, décryptages et retours d’expérience pour faire avancer vos projets." /><section className="section"><div className="container blog-grid">{posts.map(([tag, title], i) => <article className="post-card" key={title}><div className={`post-art post-${i + 1}`}><span>{tag}</span></div><div><small>Article à venir · XX min</small><h2>{title}</h2><p>Un aperçu de l’article sera intégré ici pour aider le lecteur à comprendre sa valeur.</p><button className="text-link" onClick={() => navigate("article")}>Lire l’article <Icon name="arrow" size={17} /></button></div></article>)}</div></section></>;
}

function FormField({ label, type = "text", placeholder, wide = false }: { label: string; type?: string; placeholder: string; wide?: boolean }) {
  return <label className={wide ? "field wide" : "field"}><span>{label}</span>{type === "textarea" ? <textarea placeholder={placeholder} rows={5} /> : type === "select" ? <select defaultValue=""><option value="" disabled>{placeholder}</option><option>Site web</option><option>Application mobile</option><option>Marketing digital</option><option>Solution sur mesure</option><option>Autre</option></select> : <input type={type} placeholder={placeholder} />}</label>;
}

function ContactPage({ navigate, quote = false }: { navigate: (p: Page) => void; quote?: boolean }) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return <><PageHero eyebrow={quote ? "Demande de devis" : "Contact"} title={quote ? "Parlez-nous de votre projet." : "Commençons une conversation."} text={quote ? "Quelques informations suffisent pour nous aider à comprendre votre besoin. Nous reviendrons vers vous pour approfondir ensemble." : "Une question, une idée ou un besoin ? Notre équipe est à votre écoute et vous répondra avec clarté."} /><section className="section contact-section"><div className="container contact-grid"><div className="contact-side"><span className="eyebrow">Nous joindre</span><h2>Chaque beau projet commence par un échange.</h2><p>Vous pouvez aussi nous contacter directement. Les coordonnées réelles pourront être ajoutées ici.</p><div className="contact-item"><Icon name="mail" /><span><small>Email</small><strong>contact@votre-domaine.com</strong></span></div><div className="contact-item"><Icon name="phone" /><span><small>Téléphone</small><strong>+XXX XX XX XX XX</strong></span></div><div className="contact-item"><Icon name="location" /><span><small>Adresse</small><strong>Adresse à intégrer</strong></span></div></div><form className="contact-form" onSubmit={submit}>{sent ? <div className="success-message"><span><Icon name="check" /></span><h2>Votre demande est prête.</h2><p>La connexion à votre service d’envoi pourra être ajoutée à la mise en production.</p><Button onClick={() => setSent(false)}>Nouvelle demande</Button></div> : <><div className="form-head"><span>01</span><div><h2>Vos informations</h2><p>Les champs essentiels pour pouvoir vous recontacter.</p></div></div><div className="form-grid"><FormField label="Nom complet *" placeholder="Votre nom et prénom" /><FormField label="Entreprise" placeholder="Nom de votre organisation" /><FormField label="Email *" type="email" placeholder="vous@entreprise.com" /><FormField label="Téléphone" type="tel" placeholder="+XXX XX XX XX XX" />{quote && <><FormField label="Type de projet" type="select" placeholder="Sélectionnez un type" /><FormField label="Budget approximatif" type="select" placeholder="Sélectionnez une fourchette" /><FormField label="Service recherché" type="select" placeholder="Sélectionnez un service" /><FormField label="Délai souhaité" placeholder="Ex. Dans 2 à 3 mois" /></>}<FormField label={quote ? "Décrivez votre besoin *" : "Votre message *"} type="textarea" placeholder="Parlez-nous de votre contexte, de vos objectifs et de vos attentes..." wide /></div><div className="form-bottom"><p>Vos informations restent confidentielles.</p><Button type="submit">{quote ? "Envoyer ma demande" : "Envoyer le message"}</Button></div></>}</form></div></section></>;
}

function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Logo inverse /><p>Des solutions digitales utiles, humaines et pensées pour faire grandir votre activité.</p><div className="socials"><button>f</button><button>in</button><button>ig</button><button>wa</button></div></div><div><h3>Navigation</h3>{[["Accueil", "home"], ["TENESY", "tenesy"], ["Services", "services"], ["Réalisations", "work"], ["À propos", "about"], ["Blog", "blog"], ["Contact", "contact"]].map(([x, p]) => <button key={x} onClick={() => navigate(p as Page)}>{x}</button>)}</div><div><h3>Nos services</h3>{services.slice(0, 5).map(s => <button key={s.title} onClick={() => navigate("service")}>{s.title}</button>)}</div><div><h3>Parlons de votre projet</h3><p>Prêt à donner vie à votre idée ?</p><Button variant="light" onClick={() => navigate("quote")}>Demander un devis</Button><small>contact@votre-domaine.com<br />+XXX XX XX XX XX</small></div></div><div className="container footer-bottom"><span>© 2026 Les Anges du Digital — Tous droits réservés.</span><span>Mentions légales · Confidentialité</span></div></footer>;
}

export default function App() {
  const getPage = (): Page => (window.location.hash.replace("#/", "") || "home") as Page;
  const [page, setPage] = useState<Page>(getPage);
  useEffect(() => {
    const update = () => { setPage(getPage()); window.scrollTo({ top: 0, behavior: "smooth" }); };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const navigate = (next: Page, anchor?: string) => {
    if (page === next && anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = `/${next}`;
  };
  const screen = {
    home: <Home navigate={navigate} />,
    tenesy: <TenesyPage navigate={navigate} />,
    services: <ServicesPage navigate={navigate} />,
    service: <DetailPage navigate={navigate} kind="service" />,
    work: <WorkPage navigate={navigate} />,
    project: <DetailPage navigate={navigate} kind="project" />,
    about: <AboutPage navigate={navigate} />,
    team: <AboutPage navigate={navigate} teamOnly />,
    blog: <BlogPage navigate={navigate} />,
    article: <DetailPage navigate={navigate} kind="article" />,
    contact: <ContactPage navigate={navigate} />,
    quote: <ContactPage navigate={navigate} quote />,
  }[page] || <Home navigate={navigate} />;
  return <div><Header navigate={navigate} /><main>{screen}</main><Footer navigate={navigate} /></div>;
}
