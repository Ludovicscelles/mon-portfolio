export type Contact = {
  message: string;
  greeting: string;
  mail: string;
  iconLinkedin: string;
  linkedin: string;
  iconGithub: string;
  github: string;
  messageButton?: string;
};

export const about: Contact = {
  message:
    "Envie de collaborer ou de discuter d’une opportunité ? Contactez-moi via les réseaux sociaux ou par e-mail.",
  greeting: "À bientôt !",
  mail: "ludovic.scelles@gmail.com",
  iconLinkedin: "/images/section/contactLinkedin.svg",
  linkedin: "https://www.linkedin.com/in/ludovic-scelles/",
  iconGithub: "/images/section/contactGitHub.svg",
  github: "https://github.com/Ludovicscelles",
  messageButton: "Me contacter ",
};
