"use client";

import Image from "next/image";
import { Skill } from "@/types/SkillTypes";

type SkillCardProps = {
  skills: Skill[];
};

export default function SkillCard({ skills }: SkillCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="relative w-60 h-32 md:mb-10"
        >
          <div
            className={`absolute ${skill.bgColor ?? "bg-clear-blue"} -right-2 top-2 rounded-[50px] md:-right-2 md:top-2 z-0 w-60 h-32`}
          ></div>
          <div
            className={`relative bg-white border ${skill.borderColor ?? "border-clear-blue"} rounded-[50px] overflow-hidden z-10 w-60 h-32 flex items-center justify-center`}
          >
            <div className="flex flex-col items-center justify-center text-center h-full p-4">
            <div className="relative w-12 h-12 mx-auto">
              <Image
                src={skill.icon}
                alt={`Logo de la compétence ${skill.name}`}
                fill
                className="object-contain"
              />
              </div>
              <p className="text-xs font-bold  mt-2">
                {skill.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
