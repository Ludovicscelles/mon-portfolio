"use client";

import Image from "next/image";
import { Project } from "../../../types/ProjectTypes";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const imageSrc = isMobile ? project.displayMobile : project.displayDesktop;

  return (
    <article className="relative w-[50vw] md:ml-10 md:mr-10 md:mb-10 ">
      <div
        className={`absolute inset-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-3xl z-0 ${
          project.bgColor ?? "bg-clear-blue"
        }`}
      ></div>
      <div
        className={`relative bg-white z-10 rounded-3xl border-2 p-4 ${
          project.borderColor ?? "border-clear-blue"
        }`}
      >
        <div className="flex flex-col items-center gap-5 md:gap-10 md:flex md:justify-center md:flex-row md:mt-5">
          <div className="relative w-[90px] md:w-[200px] aspect-square">
            <Image
              src={project.logo}
              alt="Logo du projet"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90px, 200px"
            />
          </div>

          <div className="relative w-[120px] md:w-[400px] aspect-[2/3] md:aspect-[16/9]">
            <Image
              src={imageSrc}
              alt="Page d'accueil du site"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 400px"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="blue-text text-center font-bold text-xs md:text-xl mt-5 mb-5">
            {project.shortDescription}
          </h3>
          <div className="text-xs md:text-base md:ml-5 w-full break-words ">
            <p className="self-start mb-2">
              <span className="font-bold">Objectif : </span>
              {project.objective}
            </p>
            <p>
              <span className="font-bold mb-2 md:mb-5">
                Fonctionnalités développées :{" "}
              </span>
            </p>
            <ul className="list-disc mb-2 ml-2 md:ml-5 ">
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <span className="font-bold">{feature.title}</span>
                  {feature.description}
                </li>
              ))}
            </ul>
            <p>
              <span className="font-bold">Compétences clés du projet : </span>
              {project.keySkills}
            </p>
            <div className="flex flex-wrap justify-start gap-2 mt-3 md:gap-5 w-full">
              {project.skills.map((skill, index) => (
                <div
                  className="bg-dark-blue text-white font-bold text-xs pl-3 pr-3 md:text-lg rounded-4xl mt-2"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-10 md:gap-x-50 mt-6 mb-6 md:flex-row">
              <a
                className="flex items-end blue-text text-xs  md:text-lg font-bold"
                href={`${project.linkDemoOrDeployedSite}`}
              >
                <FaArrowUpRightFromSquare className="h-4 w-4 md:h-6 w-6 mr-2" />
                <p className="translate-y-[3px] md:translate-y-[5px]">
                  Voir en direct
                </p>
              </a>
              <a
                className="flex items-end blue-text text-xs md:text-lg font-bold"
                href={`${project.linkCode}`}
              >
                <FaGithub className="h-5 w-5 md:h-7 w-7 mr-2" />
                <p className="translate-y-[3px] md:translate-y-[5px]">
                  Voir le code
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
