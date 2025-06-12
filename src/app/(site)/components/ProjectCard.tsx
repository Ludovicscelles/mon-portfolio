"use client";

import Image from "next/image";
import { Project } from "@/types/ProjectTypes";
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
    <div className="relative w-50   md:w-200 md:min-h-[550px] md:ml-10 md:mr-10 md:mb-10 ">
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
          <Image
            src={project.logo}
            alt="Logo du projet"
            width={`${isMobile ? 90 : 200}`}
            height={`${isMobile ? 90 : 200}`}
            className=""
          />

          <Image
            src={imageSrc}
            alt="Page d'accueil du site"
            width={`${isMobile ? 120 : 400}`}
            height={400}
            className=""
          />
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
                Fontionnalités développées :{" "}
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
                  className="bg-dark-blue text-white font-bold text-sm pl-3 pr-3 md:text-lg rounded-4xl mt-2"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex gap-x-50 mt-6 mb-6">
              <a
                className="flex items-end blue-text text-lg font-bold"
                href={`${project.linkDemoOrDeployedSite}`}
              >
                <FaArrowUpRightFromSquare className="h-6 w-6 mr-2" />
                <p className="translate-y-[5px]">Voir en direct</p>
              </a>
              <a
                className="flex items-end blue-text text-lg font-bold"
                href={`${project.linkCode}`}
              >
                <FaGithub className="h-7 w-7 mr-2" />
                <p className="translate-y-[5px]">Voir le code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
