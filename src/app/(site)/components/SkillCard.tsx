"use client";

import Image from "next/image";
import { Skill } from "@/types/SkillTypes";

type SkillCardProps = {
  skills: Skill[];
};

export default function SkillCard({ skills }: SkillCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
      {skills.map((skill) => (
        <div key={skill.id} className="relative w-full max-w-70 h-40 md:mb-10 mx-auto">
          <div
            className={`absolute ${skill.bgColor ?? "bg-clear-blue"} -right-2 top-2 rounded-[50px] md:-right-2 md:top-2 z-0 w-full h-full`}
          ></div>
          <div
            className={`relative bg-white border ${skill.borderColor ?? "border-clear-blue"} rounded-[50px] overflow-hidden z-10 w-full h-full h-32 flex items-center justify-center`}
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
              <p className="text-sm sm:text-xs lg:text-sm font-bold  mt-2">{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
