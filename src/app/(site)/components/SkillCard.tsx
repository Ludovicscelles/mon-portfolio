"use client";

import Image from "next/image";
import { Skill } from "@/types/SkillTypes";

type SkillCardProps = {
  skills: Skill[];
};

export default function SkillCard({ skills }: SkillCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="relative w-60 h-32 md:ml-10 md:mr-10 md:mb-10"
        >
          <div className="absolute bg-clear-blue -right-2 top-2 rounded-[50px] md:-right-2 md:top-2 z-0 w-60 h-32"></div>
          <div className="relative bg-white border border-[var(--clear-blue)] rounded-[50px] overflow-hidden z-10 w-60 h-32 flex items-center justify-center">
            <div className="w-full px-4 text-center">
              <Image
                src={skill.icon}
                alt={`Logo de la compétence ${skill.name}`}
                width={45}
                height={45}
                className="object-contain mx-auto"
              />
              <p className="text-xs font-bold justify-center mt-2">
                {skill.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
