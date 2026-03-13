export const PERSONAL = {
  name: "Claude-Alain Delay",
  title: "Comptable Spécialisé",
  tagline: "Rigueur • Fiabilité • Solutions",
  phone: "+41 78 723 08 07",
  email: "delayclaudealain71@gmail.com",
  linkedin: "https://www.linkedin.com/in/claude-alain-delay",
  location: "Couvet, Neuchâtel, Suisse",
  availability: "Disponible immédiatement",
  bio: "Comptable spécialisé, rigoureux et engagé, fort de plus de huit ans d'expérience dans la tenue et la gestion de comptabilités. Reconnu pour mon sens des responsabilités, ma fiabilité et ma capacité d'adaptation, j'apporte une approche humaine, pragmatique et orientée solution, centrée sur la qualité du travail et la satisfaction du client.",
} as const;

export const SKILLS = {
  comptabilite: [
    "Tenue complète de comptabilité",
    "États financiers (bilan, résultat, annexes)",
    "Déclarations TVA",
    "Gestion AVS / LPP / LAA",
    "Comptabilité analytique",
    "Suivi budgétaire",
    "Clôtures mensuelles & annuelles",
  ],
  outils: [
    "Sage Start (Infoniqa)",
    "Crésus",
    "Winbiz",
    "SAP-HR",
    "Banana 10",
    "Excel",
    "Power BI",
    "Word",
    "Outlook",
    "PowerPoint",
  ],
  ia: ["ChatGPT / GPT-5.1", "Perplexity", "Gemini 1.5", "Claude"],
  softSkills: [
    "Rigueur",
    "Discrétion",
    "Esprit d'équipe",
    "Sens des priorités",
    "Adaptabilité",
    "Orientation solution",
  ],
} as const;

export interface Experience {
  period: string;
  role: string;
  company: string;
  location?: string;
  tasks: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    period: "2022 – 2025",
    role: "Comptable",
    company: "Pragmatic Management Sàrl",
    location: "Noiraigue",
    tasks: [
      "Tenue complète de comptabilités",
      "Gestion des débiteurs et créanciers, suivi des paiements et rappels",
      "Clôtures mensuelles et annuelles, collaboration avec auditeurs externes",
      "Établissement des déclarations sociales et suivis administratifs",
      "Préparation des rapports financiers destinés aux bailleurs de fonds",
      "Encadrement et accompagnement d'apprenants débutants",
    ],
  },
  {
    period: "2017 – 2021",
    role: "Aide comptable",
    company: "Pragmatic Management Sàrl",
    location: "Noiraigue",
    tasks: [
      "Saisie des opérations courantes et rapprochements bancaires",
      "Traitement des factures fournisseurs et clients",
      "Stages en EMS (journalisation, gestion liquidités, facturation)",
      "Stages au département RH de l'État de Neuchâtel",
    ],
  },
  {
    period: "2009 – 2017",
    role: "Cuisinier",
    company: "Hôpital de La Chaux-de-Fonds",
    tasks: [
      "Préparation de repas collectifs dans le respect des normes d'hygiène",
      "Gestion des approvisionnements et contrôle qualité",
    ],
  },
  {
    period: "2002 – 2009",
    role: "Cuisinier & Gérant de restaurant",
    company: "DSR",
    tasks: [
      "Gestion complète d'un restaurant (stocks, commandes, caisse)",
      "Supervision d'équipe, respect des normes HACCP",
      "Négociation fournisseurs et optimisation des coûts",
    ],
  },
];

export interface Education {
  period: string;
  title: string;
  institution: string;
  location?: string;
  mention?: string;
  competences?: string[];
}

export const EDUCATION: Education[] = [
  {
    period: "2025 – 2026",
    title: "Programme d'immersion digitale",
    institution: "Digitalizers",
    location: "Neuchâtel",
  },
  {
    period: "2023 – 2025",
    title: "Diplôme de Spécialiste en Comptabilité",
    institution: "BetterStudy",
    location: "Genève",
    competences: [
      "Tenir la comptabilité courante en CHF et en monnaie étrangère, comptabiliser les opérations des sociétés de capitaux et établir les décomptes TVA",
      "Établir les fiches de paie et gérer la comptabilité liée aux salaires",
      "Utiliser les comptes de régularisation, gérer les risques clients, comptabiliser les amortissements et opérations annexes",
      "Procéder à la clôture des comptes",
      "Évaluer les postes du bilan, analyser la situation financière et établir un tableau des flux de trésorerie",
      "Tenir compte du contexte légal et fiscal des entreprises",
      "Utiliser le logiciel comptable Crésus Comptabilité",
      "Calculer des investissements selon les méthodes dynamiques et statiques",
      "Tenir une comptabilité analytique en coûts effectifs",
      "Établir un budget pour le compte de résultat, le bilan et le suivi des liquidités",
    ],
  },
  {
    period: "2020 – 2021",
    title: "Diplôme d'Aide Comptable",
    institution: "CEFCO",
    location: "Neuchâtel",
    mention: "Très Bien",
    competences: [
      "Comprendre l'entreprise, la comptabilité et les processus comptables",
      "Maîtriser le bilan, les opérations sans et avec influence sur le résultat",
      "Appliquer le système de la comptabilité double et les plans comptables",
      "Comptabiliser les opérations de financement, d'investissement et de désinvestissement",
      "Traiter les opérations d'achat, de vente et la TVA",
      "Gérer les opérations relatives au personnel et à la trésorerie",
      "Ajuster les comptes de situation et de gestion",
      "Procéder à la clôture annuelle des comptes selon les différentes formes juridiques",
      "Comptabiliser les opérations sur immeubles et sur titres",
    ],
  },
  {
    period: "2021",
    title: "Attestation Excel",
    institution: "Forma Box",
    location: "Noiraigue",
  },
];

export interface Language {
  name: string;
  level: string;
  percent: number;
}

export const LANGUAGES: Language[] = [
  { name: "Français", level: "Langue maternelle", percent: 100 },
  { name: "Allemand", level: "A1 – Débutant", percent: 20 },
  { name: "Anglais", level: "A2 – Élémentaire", percent: 30 },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Loyal, régulier, serviable, précis et autonome, Monsieur Delay ne peut qu'être recommandé à tout employeur à la recherche d'une personne fiable, respectueuse des règles et des procédures en place. Monsieur Delay peut également fonctionner comme collaborateur support dans une équipe finance, pour remplir certaines tâches spécifiques, récurrentes nécessitant régularité et fiabilité. Enfin, Monsieur Delay a toujours fait preuve de courtoisie et d'un excellent état d'esprit, tant avec ses collègues qu'avec la clientèle, ceci jusqu'à son dernier jour de travail.",
    author: "Alain Stritt",
    role: "Directeur",
    company: "Pragmatic Management Sàrl",
    date: "30 avril 2025",
  },
  {
    quote:
      "Rigoureux et discret, Monsieur Delay s'est acquitté des tâches qui lui ont été confiées à notre entière satisfaction. Il était un collaborateur agréable et jovial qui a entretenu de très bonnes relations avec ses supérieures et ses collègues.",
    author: "Muriel Monard",
    role: "Cheffe de service adjointe, Service des ressources humaines",
    company: "État de Neuchâtel",
    date: "26 octobre 2021",
  },
];

export const NAV_ITEMS = [
  { label: "Profil", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Langues", href: "#languages" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
