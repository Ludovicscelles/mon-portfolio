"use client";

import Image from "next/image";

import { contact } from "../../../../data/Contact";

export default function ContactBlock({
  onClickContact,
}: {
  onClickContact: () => void;
}) {
  return (
    <div className="relative w-[40vw] h-[42vh] md:min-h-90 md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute  w-[40vw] h-[42vh] md:min-h-80 bg-clear-blue -right-2 top-2 rounded-3xl md:-right-3 md:top-3 z-0"></div>
      <div className="relative w-[40vw] h-[42vh] text-xs md:text-lg font-bold md:min-h-80 p-2 md:p-4 bg-white border-2 border-[var(--clear-blue)] rounded-3xl overflow-hidden z-10 md:border-3">
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
        <div className="flex justify-center gap-x-30">
          <div className="relative w-[5vw] h-[5vh]">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noonpener noreferrer"
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
          <div className="relative w-[5vw] h-[5vh] mb-5">
            <a href={contact.github} target="_blank" rel="noonpener noreferrer">
              <Image
                src={contact.iconGithub}
                alt="logo de gitHub"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="#contact-form"
            onClick={onClickContact}
            className="bg-dark-blue h-[6vh] text-white font-bold text-base pl-3 pr-3 md:text-lg rounded-2xl mt-2"
          >
            {contact.messageButton}
          </a>
        </div>
      </div>
    </div>
  );
}
