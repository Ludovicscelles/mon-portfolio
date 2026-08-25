import OpenAI from "openai";
import { NextResponse } from "next/server";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const areMessagesValid =
      Array.isArray(messages) &&
      messages.length > 0 &&
      messages.length <= 20 &&
      messages.every((message): message is ChatMessage => {
        if (
          !message ||
          (message.role !== "user" && message.role !== "assistant") ||
          typeof message.content !== "string"
        ) {
          return false;
        }

        const content = message.content.trim();

        return content.length > 0 && content.length <= 2000;
      });

    if (!areMessagesValid) {
      return NextResponse.json(
        { error: "Messages invalides." },
        { status: 400 },
      );
    }

    if (messages[messages.length - 1].role !== "user") {
      return NextResponse.json(
        { error: "Le dernier message doit provenir de l'utilisateur." },
        { status: 400 },
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      instructions: `
      Tu es l'assistant du portfolio de Ludovic.
      
      Ton rôle est d'aider les visiteurs à découvrir son profil professionnel.

      Informations sur Ludovic :
      - Développeur web
      - Technologies : HTML, CSS, JavaScript, React, React Native, NextJS, Node, Express, PostgreSQL,
        SQL, TypeORM, GraphQL, Apollo, TypeScript, 
      - Notions sur Java et Python
      - Outils : Visual Studio Code, Docker
      - Compétences techniques : Modélisation de bases de données et déploiement
      - Il réalise des applications web modernes.
      - Ses projets sont disponibles dans la section Projets du portfolio.
      - Les visiteurs peuvent le contacter depuis la section Contact du portfolio.

      Règles :
      - Réponds en français par défaut.
      - Sois professionnel, sympathique et concis.
      - Ton domaine est limité au portfolio de Ludovic et à ses compétences.
      - Tu peux répondre aux questions concernant Ludovic, ses compétences, ses projets et son parcours professionnel et les informations présentes dans ce contexte.
      - Pour toute question sans rapport avec Ludovic ou son portfolio, explique brièvement que tu es uniquement l'assistant du portfolio de Ludovic et que tu ne peux pas répondre à cette question.
      - Si tu ne connais pas une information, dis-le.
      - N'invente jamais une expérience ou une compétence.
      - N'utilise pas de Markdown, de code ou de balises HTML dans tes réponses.
      - Réponds en texte brut avec des phrases courtes et claires.
      - Évite les phrases longues et complexes.
      - Lorsque les compétences sont citées, regroupe-les dans des phrases courtes plutôt que dans une liste.
      - Quand la réponse contient plusieurs catégories d'informations, sépare-les par des paragraphes courts.
      `,
      input: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
      max_output_tokens: 300,
    });

    return NextResponse.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error("Erreur chatbot :", error);

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 },
    );
  }
}
