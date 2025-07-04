"use client";

import ContactBlock from "../components/ContactBlock";
import ContactForm from "../components/ContactForm";
import ProfilPicture from "../components/ProfilPicture";
import { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1 className="title blue-text text-2xl md:text-6xl font-semibold text-center mt-5 md:mt-30 mb-5 md:mb-20">
        Restons en contact
      </h1>
      <div className="flex flex-col items-center md:flex-row md:items-start">
         <ProfilPicture size="small" source="/images/profil/ludovic-contact.jpeg" />
        <ContactBlock onClickContact={handleShowForm} />

        {showForm && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
            <ContactForm onClose={handleHideForm} />
          </div>
        )}
      </div>
    </div>
  );
}
