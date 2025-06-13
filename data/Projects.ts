import { Project } from "@/types/ProjectTypes";

export const projects: Project[] = [
  {
    id: "clubcompta",
    name: "ClubCompta",
    logo: "/images/projects/logoClubCompta.svg",
    displayDesktop: "/images/projects/displayDesktopClubCompta.svg",
    displayMobile: "/images/projects/displayMobileClubCompta.svg",
    shortDescription: "Application de Comptabilité",
    objective:
      "Développer une application de comptabilité pour une association sportive",
    features: [
      {
        title: "Gestion des catégories : ",
        description:
          "consultation, ajout et modification des catégories et sous-catégories.",
      },
      {
        title: "Suivi des budgets : ",
        description:
          "visualisation en temps réel de l’état des budgets par commission.",
      },
      {
        title: "Validation des factures : ",
        description: "contrôle et approbation des factures.",
      },
      {
        title: "Invalidation des factures : ",
        description:
          "possibilité d’invalider une facture avec envoi automatique d’un e-mail au responsable de la commission concernée.",
      },
    ],
    keySkills:
      "architecture en microservices et en couches, conteneurisation, API, manipulation des données, front-end dynamique.",
    skills: [
      "TypeORM",
      "TypeScript",
      "Docker",
      "React",
      "Apollo GraphQL",
      "PostgreSQL",
      "Material-UI",
      "CI/CD",
      "tests",
      "Figma",
      "Agile Scrum",
    ],
    linkCode:
      "https://github.com/WildCodeSchool-CDA-FT-2024-09/JS-CDA-Projet-2-Team-D",
    bgColor: "bg-clear-blue",
    borderColor: "border-clear-blue",
  },
  {
    id: "thrillermania",
    name: "ThrillerMania",
    logo: "/images/projects/logoThrillerMania.svg",
    displayDesktop: "/images/projects/displayDesktopThrillerMania.svg",
    displayMobile: "/images/projects/displayMobileThrillerMania.svg",
    shortDescription: "Bibliothèque de films participative",
    objective:
      "Créer une plateforme communautaire dédiée aux amateurs de thrillers.",
    features: [
      {
        title: "Visualisation des films tendances : ",
        description:
          "un carrousel affichant les 3 thrillers les plus populaires du dernier mois.",
      },
      {
        title: "Affichage de films récents et locaux : ",
        description:
          "sélections et présentation des 4 films les plus récents et de 4 films français sur la page d’accueil.",
      },
      {
        title: "Gestion des résultats de recherche : ",
        description:
          "affichage optimisé et filtré des films en fonction des recherches des utilisateurs.",
      },
    ],
    keySkills: "API, manipulation des données, front-end dynamique.",
    skills: [
      "TypeScript",
      "React",
      "SQLite",
      "TypeORM",
      "Tailwind CSS",
      "GraphQL",
      "Figma",
      "Agile Scrum",
    ],
    linkCode:
      "https://github.com/Ludovicscelles/JS-CDA-Projet-1-Team-B-Thriller-Mania",
    bgColor: "bg-purple",
    borderColor: "border-purple",
  },
  {
    id: "swap-it",
    name: "Swap It",
    logo: "/images/projects/logoSwapIt.svg",
    displayDesktop: "/images/projects/displayDesktopSwapIt.svg",
    displayMobile: "/images/projects/displayMobileSwapIt.svg",
    shortDescription: "Site d’échanges de matériel IT",
    objective:
      "Développer une plateforme d’échange dédiée au troc de matériel IT entre utilisateurs.",
    features: [
      {
        title: "Gestion des catégories : ",
        description:
          "affichage des produits par catégories pour une navigation simplifiée.",
      },
      {
        title: "Recherche avancée : ",
        description:
          "création d’une barre de recherche pour trouver facilement un modèle ou une catégorie de produits.",
      },
      {
        title: "Ajout de produit : ",
        description:
          "mise en place d’un formulaire pour permettre aux utilisateurs de créer des fiches produits.",
      },
      {
        title: "Mise en place des échanges (swap) : ",
        description:
          "fonctionnalité permettant à deux utilisateurs connectés d’échanger leurs produits.",
      },
    ],
    keySkills:
      "conception de BDD, développement API, gestion des données, mise en place des logiques métier, frontend dynamique.",
    skills: ["React", "MySQL", "Node", "Express", "Figma", "Agile Scrum"],
    linkCode:
      "https://github.com/WildCodeSchool-2024-02/JS-Paris-BrainWaves-P3-Swapit",
    bgColor: "bg-medium-blue",
    borderColor: "border-medium-blue",
  },

  {
    id: "wizard-castle",
    name: "Wizard's Castle",
    logo: "/images/projects/logoWizardCastle.svg",
    displayDesktop: "/images/projects/displayDesktopWizardCastle.svg",
    displayMobile: "/images/projects/displayMobileWizardCastle.svg",
    shortDescription: "Guide pour le jeu Donjons & Dragons",
    objective:
      "Développer un guide interactif pour les joueurs du jeu Donjons & Dragons, qu’ils soient débutants ou expérimentés.",
    features: [
      {
        title: "Règles du jeu : ",
        description:
          "affichage des règles par catégorie accessibles via des boutons pour une navigation simplifiée.",
      },
      {
        title: "Recherche des monstres : ",
        description:
          "mise en place d’une barre de recherche pour filtrer rapidement les créatures sur la page “Bestiary”.",
      },
    ],
    keySkills:
      "Utilisation d’une API publique, gestion des données, frontend dynamique.",
    skills: ["React", "Figma", "Agile Scrum"],
    linkDemoOrDeployedSite: "https://wcs-p2-wizard-castle.vercel.app/",
    linkCode:
      "https://github.com/WildCodeSchool-2024-02/JS-Paris-BrainWaves-P2-WizardCastle",
    bgColor: "bg-clear-blue",
    borderColor: "border-clear-blue",
  },
  {
    id: "back-to-the-cine",
    name: "Back To The Ciné",
    logo: "/images/projects/logoBackToTheCine.svg",
    displayDesktop: "/images/projects/displayDesktopBackToTheCine.svg",
    displayMobile: "/images/projects/displayMobileBackToTheCine.svg",
    shortDescription: "Site de programmation d’une salle de cinéma",
    objective:
      "Développer un site pour un cinéma atypique, dédié aux films cultes des années 80.",
    features: [
      {
        title: "Page de programmation : ",
        description:
          "conception d’une page détaillant la programmation avec affichage des titres, descriptions et affiches des films.",
      },
      {
        title: "Éléments dynamiques : ",
        description:
          "ajout des horaires des séances et des liens vers les bandes-annonces pour une expérience utilisateur plus immersive.",
      },
    ],
    keySkills: "maquettage, développement frontend statique et dynamique.",
    skills: ["HTML", "CSS", "JavaScript"],
    linkDemoOrDeployedSite:
      "https://nicosmq.github.io/Projet-1-Back-To-The-Cine/",
    linkCode: "https://github.com/Ludovicscelles/Projet-1-Back-To-The-Cine",
    bgColor: "bg-purple",
    borderColor: "border-purple",
  },
];
