"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ImageWebDev from "../../public/web_dev_desktop.png";
import ImageWebDevMobile from "../../public/web_dev_mobile.svg";
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
      className="w-screen h-screen cursor-pointer flex justify-center items-center bg-black"
    >
      <Image
        src={isMobile ? ImageWebDevMobile : ImageWebDev}
        alt="Entrez sur le site"
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
