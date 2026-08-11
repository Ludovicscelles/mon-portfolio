import OpenAI from "openai";
import { NextResponse } from "next/server";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message invalide."},
        { status: 400 }
      )
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      instructions: `
      Tu es l'assistant du portfolio de Ludovic.
      
      Ton rôle est d'aider les visisteurs à découvrir son profil professionnel.

      Informations sur Ludovic :
      - Développeur web
      - Technologies : HTML, CSS, JavaScript, React, React Native, NextJS, Node, Express, PostgreSQL,
        SQL, TypeORM, GraphQL, Apollo, TypeScript, 
      - Notions sur Java et Python
      - Outils : Visual Studio Code, Docker
      - Compétences techniques : Modélisation de bases de données et déploiement
      - Il réalise des applications web modernes.
      - Ses projets sont disponibles dans la section Projets du porfolio.
      - Les visteurs peuvent le contacter depuis la section Contact du portfolio.

      Règles :
      - Réponds en français par défaut.
      - Sois professionnel, sympathique et concis.
      - Réponds principalement aux questions concernant Ludovic, ses compétences, ses projets et son parcours.
      - Si tu ne connais pas une information, dis-le.
      - N'invente jamais une expérience ou une compétence.
      `,
      input: message,
    });

    return NextResponse.json({
      answer: response.output_text
    });
  } catch (error) {
    console.error("Erreur chatbot :", error)

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}