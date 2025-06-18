"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ImageWebDev from "../../../../public/web_dev_desktop.png";
import ImageWebDevMobile from "../../../../public/web_dev_mobile.svg";
import { useEffect, useState } from "react";

export default function IntroPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

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
    <div
      onClick={handleClick}
      className="w-screen h-screen cursor-pointer flex justify-center items-center"
    >
      <Image
        src={isMobile ? ImageWebDevMobile : ImageWebDev}
        alt="Entrez sur le site"
        className="w-full h-auto object-contain md:w-[80%] "
        priority
      />
      {isMobile ? (
        <div className="absolute texte-black text-xl md:text-3xl font-semibold animate-pulse pointer-events-none">
          Entrez ici
        </div>
      ) : (
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-xl md:text-3xl font-semibold animate-pulse pointer-events-none">
          Cliquez ici 🖱️
        </div>
      )}
    </div>
  );
}
