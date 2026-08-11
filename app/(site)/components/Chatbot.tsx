"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour 👋 Je suis l'assistant de Ludovic. Vous pouvez me poser des questions sur son profil, ses compétences ou ses projets.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur API");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Désolé, je n'arrive pas à répondre pour le moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-5 py-4 text-white shadow-lg"
      >
        {isOpen ? "x" : "💬"}
      </button>

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div
          className="fixed bottom-24 left-4 right-4 z-50 flex h-[70vh] max-h-[500px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl sm:left-auto sm:right-6 sm:w-[350px] max-[400px]:bottom-20
    max-[400px]:h-[60vh]"
        >
          {/* Header */}
          <div className="bg-black p-4 text-white">
            <h2 className="font-semibold">Chatbot</h2>
            <p className="text-sm text-gray-300">
              Posez-moi une question sur mon profil
            </p>
          </div>

          {/* Message */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "mr-auto max-w-[80%] rounded-xl bg-black p-3 text-white"
                    : "mr-auto max-w-[80%] rounded-xl bg-gray-100 p-3 text-black"
                }
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="mr-auto rounded-xl bg-gray-100 p-3">
                Réflexion...
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex gap-2 border-t p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 rounded-lg border px-3 py-2 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
            >
              Envoyer
            </button>
          </form>
        </div>
      )}
    </>
  );
}
