"use client";

import Image from "next/image";

import { contact } from "../../../data/Contact";

export default function ContactBlock({
  onClickContact,
}: {
  onClickContact: () => void;
}) {
  return (
    <div className="relative w-[200px] md:w-[40vw] h-full md:min-h-[300px] md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute w-[200px] md:w-[40vw] h-full md:min-h-[300px] bg-clear-blue -right-2 top-2 rounded-3xl md:-right-3 md:top-3 z-0"></div>
      <div className="relative w-[200px] md:w-[40vw] h-full text-xs md:text-lg font-bold md:min-h-[300px] p-2 md:p-3 bg-white border-2 border-[var(--clear-blue)] rounded-3xl overflow-hidden z-10 md:border-3">
        {" "}
        <p className="mb-5">{contact.message}</p>
        <p className="mb-7">{contact.greeting}</p>
        <div className="flex justify-center mb-5">
          <a
            href={`mailto:${contact.mail}`}
            className="mx-auto block blue-text underline"
          >
            {contact.mail}
          </a>
        </div>
        <div className="flex justify-center gap-x-[60px] md:gap-x-[120px]">
          <div className="relative w-10 h-10">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClickContact}
            >
              <Image
                src={contact.iconLinkedin}
                alt="logo de Linkedin"
                fill
                className="object-contain"
              />
            </a>
          </div>
          <div className="relative w-10 h-10 mb-5">
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Image
                src={contact.iconGithub}
                alt="logo de gitHub"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="#contact-form"
            onClick={onClickContact}
            className="flex justify-center items-center bg-dark-blue h-10 text-white font-bold text-base pl-3 pr-3 md:text-lg rounded-2xl mt-2"
          >
            {contact.messageButton}
          </a>
        </div>
      </div>
    </div>
  );
}
