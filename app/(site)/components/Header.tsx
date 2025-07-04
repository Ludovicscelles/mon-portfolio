"use client";

import { useRef } from "react";

export default function Header() {
  const homeRef = useRef<HTMLElement>(null);
  const competencesRef = useRef<HTMLElement>(null);
  const aAproposRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: "Accueil", href: "home", ref: homeRef },
    { label: "Compétences", href: "competences", ref: competencesRef },
    { label: "À propos", href: "apropos", ref: aAproposRef },
    { label: "Contact", href: "contact", ref: contactRef },
  ];

  return (
    <header className="hidden md:flex w-full">
      <nav className="flex justify-end w-full ">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="blue-text font-bold mr-5 last:mr-3"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
