// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenAI } from "@google/genai";
// const ai = new GoogleGenAI({});
// export const POST = async (req: Request) => {
//   const { clientMessage } = await req.json();
//   if (!clientMessage) {
//     return NextResponse.json(
//       { error: "clientMessage is required" },
//       { status: 400 }
//     );
//   }

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: clientMessage,
//   });
//   console.log(response.text);

//   return NextResponse.json({ message: response.text });
// };
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const POST = async (req: NextRequest) => {
  const { chat } = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are  official AI assistant.

Your purpose:
- Help users with topics related to Pinecone Academy only.
- Provide accurate, friendly, and helpful answers about the Academy’s courses, teachers, schedules, policies, and activities.
- If the user asks something unrelated to Pinecone Academy, politely respond with:
  "I'm sorry, I can only answer questions about Pinecone Academy."

Answer in a natural and conversational tone.

User question: "${chat}"
    `,
  });
  console.log(response.text);
  return NextResponse.json({ message: response.text });
};

// import { GoogleGenAI } from "@google/genai";
// import { NextRequest, NextResponse } from "next/server";

// const ai = new GoogleGenAI({});

// export const POST = async (req: NextRequest) => {
//   const { chat } = await req.json();

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: `
// You are Pinecone Academy's official AI assistant.

// Your purpose:
// - Help users with topics related to Pinecone Academy only.
// - Provide accurate, friendly, and helpful answers about the Academy’s courses, teachers, schedules, policies, and activities.
// - If the user asks something unrelated to Pinecone Academy, politely respond with:
//   "I'm sorry, I can only answer questions about Pinecone Academy."

// Answer in a natural and conversational tone.

// User question: "${chat}"
//     `,
//   });
//   console.log(response.text);
//   return NextResponse.json({ message: response.text });
// };

// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";
// export const POST = async (req: NextRequest) => {
//   const { prompt } = await req.json();
//   const openai = new OpenAI({
//     apiKey: `GEMINI_API_KEY`,
//     baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
//   });
//   const image = await openai.images.generate({
//     model: "imagen-3.0-generate-002",
//     prompt: prompt,
//     response_format: "b64_json",
//     n: 1,
//   });

//   console.log(image.data);
//   return NextResponse.json({ message: image.data });
// };
