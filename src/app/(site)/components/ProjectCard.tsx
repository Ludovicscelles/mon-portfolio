"use client";

import Image from "next/image";
import { Project } from "@/types/ProjectTypes";
import { useEffect, useState } from "react";

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
    <div className="relative w-40 h-90 md:w-200 md:h-150 md:ml-10 md:mr-10 md:mb-10 ">
      <div
        className={`absolute  w-40 h-90 ${project.bgColor ?? "bg-clear-blue"} -right-2 top-2 rounded-3xl md:-right-4 md:top-4 z-0 md:w-200 md:h-150`}
      ></div>
      <div
        className={`relative p-3 w-40 h-90 bg-white border-2 ${project.borderColor ?? "border-clear-blue"} rounded-3xl overflow-hidden z-10 md:w-200 md:h-150 md:border-3 md:p-6`}
      >
        <div className="flex flex-col items-center gap-10 md:flex md:justify-center md:flex-row ">
          <Image
            src={project.logo}
            alt="Logo du projet"
            width={`${isMobile ? 100 : 200}`}
            height={`${isMobile ? 100 : 200}`}
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
      </div>
    </div>
  );
}
