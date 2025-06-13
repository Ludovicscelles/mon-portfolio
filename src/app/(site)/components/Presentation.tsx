"use client";
import { about } from "../../../../data/About";

export default function Presentation() {
  return (
    <div className="relative w-50 h-160 md:w-150 md:h-160 md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute  w-50 h-160 bg-clear-blue -right-2 top-2 rounded-3xl md:-right-4 md:top-4 z-0 md:w-150 md:h-160"></div>
      <div className="relative w-50 h-160 border-2 bg-white border-[var(--clear-blue)] rounded-3xl overflow-hidden z-10 md:w-150 md:h-160 md:border-3">
        <div className="text-xs p-3 md:p-10 space-y-4 font-bold md:text-justify md:text-lg ">
          <p>{about.subsection1}</p>
          <p>{about.subsection2}</p>
          <p>{about.subsection3}</p>
          <p>{about.subsection4}</p>
        </div>
      </div>
    </div>
  );
}
