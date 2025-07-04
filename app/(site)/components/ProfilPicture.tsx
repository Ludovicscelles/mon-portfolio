"use client";

import Image from "next/image";

type Props = {
  size?: "small" | "medium";
  source: string
};

export default function ProfilPicture({ size = "medium", source }: Props) {
  const sizes = {
    small: "w-40 h-40",
    medium: "w-40 h-40 md:w-96 md:h-96",
  };

  const sizeClass = sizes[size];

  const imageSizes =
    size === "small"
      ? "(max-width: 768px) 100vw, 160px"
      : "(max-width: 768px) 100vw, 384px";

  return (
    <div className={`relative ${sizeClass} mb-10 md:ml-10`}>
      <div
        className={`absolute bg-purple w-40 h-40 rounded-3xl -right-2 top-2 z-0 ${
          size === "small"
            ? "md:-right-2 md:top-2"
            : "md:w-96 md:h-96 md:-right-3 md:top-3  "
        }`}
      ></div>
      <div
        className={`relative border-2 border-[var(--purple)] rounded-3xl overflow-hidden z-10 ${size === "small" ? "w-40 h-40 md:border-2" : "w-40 h-40 md:w-96 md:h-96 md:border-3"} `}
      >
        <Image
          src={source}
          alt="Photo de Ludovic Scelles"
          fill
          sizes={imageSizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
