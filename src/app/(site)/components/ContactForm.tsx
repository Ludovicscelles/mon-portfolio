"use client";

export default function ContactForm() {
  return (
    <div className="relative w-[25vw] h-[70vh] md:min-h-96 md:ml-10 md:mr-10 md:mb-10 ">
      <div className="absolute  w-[25vw] h-[70vh] md:min-h-96 bg-purple -right-2 top-2 rounded-3xl md:-right-3 md:top-3 z-0"></div>
      <form className="bg-white shadow-md relative w-[25vw] h-[70vh] rounded-3xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none bg-gris-clair rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-blue"
            id="firstname"
            type="text"
            placeholder="Prénom"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Nom"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            placeholder="message"
          />
        </div>
        <div className="flex flex-col gap-y-8 items-center justify-between">
          <button
            className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Envoyer
          </button>
          <button
            className="bg-gris-moyen hover:bg-blue-700 blue-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Fermer
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
