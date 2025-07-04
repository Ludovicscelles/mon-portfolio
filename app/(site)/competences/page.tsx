"use client";
import { skills } from "../../../data/Skills";
import SkillCard from "../components/SkillCard";

export default function Competences() {
  return (
    <div>
      <h1 className="title blue-text text-2xl md:text-6xl font-bold text-center mt-5 md:mt-30 mb-5 md:mb-20">
        Compétences
      </h1>
      {skills.map((category, index) => (
        <div key={index}>
          <h2 className="title blue-text text-2xl md:text-4xl font-semibold text-center mt-5 md:mt-30 mb-10 md:mb-10">
            {category.category}
          </h2>
          <div
            className="text-black mb-10 md:ml-10 md:mr-10
          "
          >
            <SkillCard skills={category.skills} />
          </div>
        </div>
      ))}
    </div>
  );
}
