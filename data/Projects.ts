export type Feature = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  logo: string;
  displayDesktop: string;
  displayMobile: string;
  shortDescription: string;
  objective: string;
  features: Feature[];
  keyCompetences: string;
  competences: string[];
  linkDemoOrDeployedSite?: string;
  linkCode: string;
};

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
        title: "Gestion des catégories :",
        description:
          "consultation, ajout et modification des catégories et sous-catégories.",
      },
      {
        title: "Suivi des budgets :",
        description:
          "visualisation en temps réel de l’état des budgets par commission.",
      },
      {
        title: "Validation des factures :",
        description: "contrôle et approbation des factures.",
      },
      {
        title: "Invalidation des factures :",
        description:
          "possibilité d’invalider une facture avec envoi automatique d’un e-mail au responsable de la commission concernée.",
      },
    ],
    keyCompetences:
      "architecture en microservices et en couches, conteneurisation, API, manipulation des données, front-end dynamique.",
    competences: [
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
        title: "Visualisation des films tendances :",
        description:
          "un carrousel affichant les 3 thrillers les plus populaires du dernier mois.",
      },
      {
        title: "Affichage de films récents et locaux :",
        description:
          "sélections et présentation des 4 films les plus récents et de 4 films français sur la page d’accueil.",
      },
      {
        title: "Gestion des résultats de recherche :",
        description:
          "affichage optimisé et filtré des films en fonction des recherches des utilisateurs.",
      },
    ],
    keyCompetences: "API, manipulation des données, front-end dynamique.",
    competences: [
      "TypeScript",
      "React",
      "SQLite",
      "TypeORM",
      "Tailwind CSS",
      "GraphQL",
      "Figma",
      "Agile Scrum",
    ],
    linkCode: "https://github.com/WildCodeSchool-CDA-FT-2024-09/JS-CDA-Projet-1-Team-BLors de ma formation de Concepteur Développeur à la Wild Code School, j’ai contribué à la création d’une plateforme communautaire : une bibliothèque de films participative centrée sur le genre thriller. Il s’agit d’un site concept permettant aux utilisateurs de chercher des films, consulter leur synopsis, laisser une note et publier un avis. Au sein d’une équipe de 4 personnes, nous avons conçu une interface intuitive, mis en place une base de données, ainsi que les logiques métiers nécessaires au bon fonctionnement du site. Pour en savoir plus, vous pouvez consulter notre dépôt GitHub : https://github.com/WildCodeSchool-CDA-FT-2024-09/JS-CDA-Projet-1-Team-B"
  },
];
