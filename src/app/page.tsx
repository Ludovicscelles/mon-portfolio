"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ImageWebDev from "../../public/web_dev_desktop.png";

export default function IntroPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };
  return (
    <div
      onClick={handleClick}
      className="w-screen h-screen cursor-pointer flex justify-center items-center bg-black"
    >
      <Image
        src={ImageWebDev}
        alt="Entrez sur le site"
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
