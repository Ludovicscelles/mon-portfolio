import { SkillCategory } from "@/types/SkillTypes";

export const skills: SkillCategory[] = [
  {
    category: "Front-end",
    skills: [
      {
        id: "html-css",
        name: "HTML et CSS",
        icon: "/images/skills/logosHTMLandCSS.svg",
        description:
          "L’HTML pour structurer le contenu des pages web et le CSS pour définir l’apparence visuelle.",
      },
      {
        id: "js",
        name: "JavaScript",
        icon: "/images/skills/logoJS.svg",
        description:
          "Le JavaScript pour rendre les pages web interactives et dynamiques.",
      },
      {
        id: "react",
        name: "React",
        icon: "/images/skills/logoReact.svg",
        description:
          "React pour construire des interfaces utilisateur dynamiques et modulaires.",
      },
      {
        id: "tailwind",
        name: "TailwindCSS",
        icon: "/images/skills/logoTailwind.svg",
        description:
          "Tailwind pour styliser rapidement les interfaces avec des classes utilitaires.",
      },
    ],
  },
  {
    category: "Back-end",
    skills: [
      {
        id: "node",
        name: "Node.js",
        icon: "/images/skills/logoNode.svg",
        description:
          "Node.js pour exécuter du JS côté serveur et construire des appli web backend.",
      },
      {
        id: "express",
        name: "Express.js",
        icon: "/images/skills/logoExpress.svg",
        description:
          "Express.js pour concevoir des API et gérer les requêtes côté serveur.",
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: "/images/skills/logoMySQL.svg",
        description:
          "MySQL pour gérer les données dans une base relationnelle.",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: "/images/skills/logoPostgreSQL.svg",
        description:
          "PostgreSQL pour stocker et organiser les données dans une base relationnelle performante.",
      },
      {
        id: "typeorm",
        name: "TypeORM",
        icon: "/images/skills/logoTypeORM.svg",
        description:
          "TypeORM pour manipuler une BDD avec une approche orientée object en TypeScript.",
      },
      {
        id: "graphql",
        name: "GraphQL",
        icon: "/images/skills/logoGraphQL.svg",
        description:
          "GraphQL pour structurer les données de manière flexible et ciblée via une API.",
      },
    ],
  },
  {
    category: "Fullstack",
    skills: [
      {
        id: "vscode",
        name: "Visual Studio Code",
        icon: "/images/skills/logoVSCode.svg",
        description:
          "VSCode pour développer efficacement dans un éditeur léger et puissant.",
      },
      {
        id: "git-github",
        name: "Git et GitHub",
        icon: "/images/skills/logosGitAndGitHub.svg",
        description:
          "Git pour versioner mon code et suivre l’évolution des projets. GitHub pour héberger, collaborer et partager mes projets en ligne.",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: "/images/skills/logoTS.svg",
        description:
          "TypeScript pour renforcer la fiabilité du code grâce au typage.",
      },
      {
        id: "apollo",
        name: "Apollo",
        icon: "/images/skills/logoApollo.svg",
        description:
          "Apollo pour gérer les requêtes GraphQL entre le client et le serveur.",
      },
      {
        id: "docker",
        name: "Docker",
        icon: "/images/skills/logoDocker.svg",
        description:
          "Docker pour containeriser mes applications et simplifier leur déploiement.",
      },
    ],
  },
  {
    category: "Transverse",
    skills: [
      {
        id: "figma",
        name: "Figma",
        icon: "/images/skills/logoFigma.svg",
        description:
          "Figma pour maquetter et prototyper des interfaces modernes.",
      },
      {
        id: "agile-scrum",
        name: "Méthode Agile Scrum",
        icon: "/images/skills/logoScrum.svg",
        description:
          "Scrum pour gérer les projets par sprints et favoriser l’adaptation continue.",
      },
      {
        id: "uml",
        name: "UML",
        icon: "/images/skills/logoUML.svg",
        description:
          "UML pour modéliser visuellement la structure et le comportement d’une application.",
      },
      {
        id: "office",
        name: "Office",
        icon: "/images/skills/logoOffice.svg",
        description:
          "Office pour rédiger, présenter et organiser l’information efficacement.",
      },
      {
        id: "power-bi",
        name: "Power BI",
        icon: "/images/skills/logoPowerBI.svg",
        description:
          "Power BI pour analyser et visualiser des données de façon interactive.",
      },
    ],
  },
];
