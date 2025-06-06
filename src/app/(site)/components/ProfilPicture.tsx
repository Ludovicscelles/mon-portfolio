"use client";

import Image from "next/image";

export default function ProfilPicture() {
  return (
    <div className="relative w-40 h-40 mb-10 md:w-96 md:h-96 md:ml-10 ">
      <div className="absolute  w-40 h-40 bg-purple -right-2 top-2 rounded-3xl md:-right-4 md:top-4 z-0 md:w-96 md:h-96"></div>
      <div className="relative w-40 h-40 border border-[var(--purple)] rounded-3xl overflow-hidden z-10 md:w-96 md:h-96">
        <Image
          src="/images/profil/ludovic2.png"
          alt="Photo de Ludovic Scelles"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
