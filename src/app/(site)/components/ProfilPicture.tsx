"use client";

import Image from "next/image";

type Props = {
  size?: "small" | "medium";
};

export default function ProfilPicture({ size = "medium" }: Props) {
  const sizes = {
    small: "w-40 h-40",
    medium: "w-40 h-40 md:w-96 md:h-96",
  };

  const sizeClass = sizes[size];

  return (
    <div className={`relative ${sizeClass} mb-10 md:ml-10`}>
      <div
        className={`absolute bg-purple-10 -right-2 top-2 rounded-3xl z-0 ${size === "small" ? "w-40 h-40 md:-right-2 md:top-2" : "w-40 h-40 md:w-96 md:h-96 md:-right-4 md:top-4"}`}
      ></div>
      <div
        className={`relative border-2 border-[var(--purple)] rounded-3xl overflow-hidden z-10 ${size === "small" ? "w-40 h-40 md:border-2" : "w-40 h-40 md:w-96 md:h-96 md:border-3"} `}
      >
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
