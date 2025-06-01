export type Skill = {
  icon: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "Front-end",
    skills: [
      {
        icon: "/images/sills/logosHTMLandCSS",
        description:
          "L’HTML pour structurer le contenu des pages web et le CSS pour définir l’apparence visuelle.",
      },
      {
        icon: "/images/sills/logoJS",
        description:
          "Le JavaScript pour rendre les pages web interactives et dynamiques.",
      },
      {
        icon: "/images/sills/logoReact",
        description:
          "React pour construire des interfaces utilisateur dynamiques et modulaires.",
      },
      {
        icon: "/images/sills/logoTailwind",
        description:
          "React pour construire des interfaces utilisateur dynamiques et modulaires.",
      },
    ],
  },
];
