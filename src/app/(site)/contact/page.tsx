"use client";

import ContactBlock from "../components/ContactBlock";
import ContactForm from "../components/ContactForm";
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
      <div className="relative">
        <ContactBlock onClickContact={handleShowForm} />
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
          <ContactForm onClose={handleHideForm} />
        </div>
      )}

      <h1>Contact</h1>
      <p>Here you can find the contact details of the project.</p>
      <ul>
        <li>Contact 1</li>
        <li>Contact 2</li>
        <li>Contact 3</li>
      </ul>
      <p>
        For more information, please visit our{" "}
        <a href="https://example.com">website</a>.
      </p>
    </div>
  );
}
