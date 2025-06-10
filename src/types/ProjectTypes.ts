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
  keySkills: string;
  skills: string[];
  linkDemoOrDeployedSite?: string;
  linkCode: string;
  bgColor: string;
  borderColor: string;
};
