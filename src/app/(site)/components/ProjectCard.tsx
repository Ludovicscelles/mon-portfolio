"use client";

import Image from "next/image";
import { Project } from "@/types/ProjectTypes";
import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

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
  });

  const imageSrc = isMobile ? project.displayMobile : project.displayDesktop;

  return (
    <div className="relative w-50 h-200 md:w-200 md:h-170 md:ml-10 md:mr-10 md:mb-10 ">
      <div
        className={`absolute  w-50 h-200 ${project.bgColor ?? "bg-clear-blue"} -right-2 top-2 rounded-3xl md:-right-4 md:top-4 z-0 md:w-200 md:h-170`}
      ></div>
      <div
        className={`relative p-2 w-50 h-200 bg-white border-2 ${project.borderColor ?? "border-clear-blue"} rounded-3xl overflow-hidden z-10 md:w-200 md:h-170 md:border-3 md:p-2`}
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
          <div className="text-xs md:text-base md:ml-5">
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
            <div className="flex flex-wrap justify-start gap-2 md:gap-5 w-full">
              {project.skills.map((skill, index) => (
                <div
                  className="bg-dark-blue text-white font-bold text-sm pl-3 pr-3 md:text-lg rounded-4xl mt-2"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <a className="flex items-center mt-5 blue-text font-bold" href={`${project.linkDemoOrDeployedSite}`}>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
              Voir en direct</a>
          </div>
        </div>
      </div>
    </div>
  );
}
