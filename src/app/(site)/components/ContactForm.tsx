"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstname(e.target.value);
  const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastname(e.target.value);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !message) {
      toast.warning("Si vous pouvez remplir tous le champs ?");
      return;
    }
    if (!isValidEmail) {
      toast.warning("Email invalide.");
      return;
    }
    try {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          e.target as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => toast("Message envoyé"))
        .catch(() => toast("Erreur lors de lenvoi"));
    } catch {
      toast.error("Erreur lors de l'envoi");
    }
  };

  const handleClose = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative w-[25vw] h-[70vh] min-w-50 min-h-130 md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute  w-[25vw] h-[70vh] min-w-50 min-h-130 bg-purple -right-2 top-2 rounded-3xl md:-right-3 md:top-3 z-0"></div>
      <form
        className="flex flex-col gap-y-10 pt-8 bg-white shadow-md relative w-[25vw] min-w-50 min-h-130 h-[70vh] rounded-3xl px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <input
          className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full py-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue"
          id="firstname"
          name="firstname"
          type="text"
          maxLength={30}
          placeholder="Prénom"
          value={firstname}
          onChange={handleFirstname}
        />
        <input
          className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full py-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue"
          id="lastname"
          name="lastname"
          type="text"
          maxLength={30}
          placeholder="Nom"
          value={lastname}
          onChange={handleLastname}
        />
        <input
          className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full py-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue"
          id="email"
          name="email"
          type="text"
          maxLength={100}
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <div className="w-full h-[15vh]">
          <textarea
            className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full h-full pt-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue align-top resize-none"
            id="message"
            name="message"
            maxLength={500}
            placeholder="message"
            value={message}
            onChange={handleMessage}
          />
        </div>
        <button
          className="duration-100 bg-purple hover:bg-blue-700 text-white text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointe active:scale-95 transition-transform"
          type="submit"
        >
          Envoyer
        </button>
        <button
          className="bg-gris-moyen hover:bg-blue-700 blue-text text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:scale-95 transition-transform"
          type="button"
          onClick={handleClose}
        >
          Fermer
        </button>
      </form>
    </div>
  );
}
