"use client";

export default function ContactForm() {
  return (
    <div className="relative w-[25vw] h-[70vh] min-w-50 min-h-130 md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute  w-[25vw] h-[70vh] min-w-50 min-h-130 bg-purple -right-2 top-2 rounded-3xl md:-right-3 md:top-3 z-0"></div>
      <form className="flex flex-col gap-y-10 pt-8 bg-white shadow-md relative w-[25vw] min-w-50 min-h-130 h-[70vh] rounded-3xl px-8 pt-6 pb-8 mb-4">
        <input
          className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full py-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue"
          id="firstname"
          type="text"
          placeholder="Prénom"
        />
        <input
          className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full py-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue"
          id="lastname"
          type="text"
          placeholder="Nom"
        />
        <input
          className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full py-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue"
          id="email"
          type="text"
          placeholder="Email"
        />
        <div className="w-full h-[15vh]">
          <textarea
            className="shadow appearance-none bg-gris-clair text-xs md:text-base font-bold rounded w-full h-full pt-2 px-3 blue-text leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal placeholder-blue align-top resize-none"
            id="message"
            placeholder="message"
          />
        </div>
        <button
          className="bg-purple hover:bg-blue-700 text-white text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Envoyer
        </button>
        <button
          className="bg-gris-moyen hover:bg-blue-700 blue-text text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Fermer
        </button>
      </form>
    </div>
  );
}
