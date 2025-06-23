"use client";

import Image from "next/image";
import ImageOpeningToProjectDesktop from "../../../../public/sections/displayDesktopOpeningToProjects.svg";
import ImageOpeningToProjectMobile from "../../../../public/sections/displayMobileOpeningToProjects.svg";
import { useEffect, useState } from "react";

export default function OpeningToProjects() {
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

  return (
    <div className="relative w-[32vw] h-[45vh] md:min-h-96 md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute  w-[32vw] h-[45vh] md:min-h-96 bg-clear-blue -right-2 top-2 rounded-3xl md:-right-3 md:top-3 z-0"></div>
      <div className="relative w-[32vw] h-[45vh] md:min-h-96 border-2 border-[var(--clear-blue)] rounded-3xl overflow-hidden z-10 md:border-3">
        <Image
          src={
            isMobile
              ? ImageOpeningToProjectMobile
              : ImageOpeningToProjectDesktop
          }
          alt="Visuel d'accueil vers les projets"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
