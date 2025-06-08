export type Skill = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};
