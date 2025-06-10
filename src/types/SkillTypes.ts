export type Skill = {
  id: string;
  name: string;
  icon: string;
  description: string;
  bgColor: string;
  borderColor: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};
