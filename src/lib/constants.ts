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
  },
  {
    period: "2020 – 2021",
    title: "Diplôme d'Aide Comptable",
    institution: "CEFCO",
    location: "Neuchâtel",
    mention: "Très Bien",
  },
  {
    period: "2021",
    title: "Attestation Excel",
    institution: "Forma Box",
    location: "Noiraigue",
  },
];

export const NAV_ITEMS = [
  { label: "Profil", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
