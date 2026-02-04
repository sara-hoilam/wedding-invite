import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWeddingWish = async (
  relationship: string,
  tone: 'heartfelt' | 'funny' | 'short' | 'formal'
): Promise<string> => {
  try {
    const prompt = `
      Write a wedding guest book message for a couple named Sara and Sebastian.
      
      Context:
      - The guest's relationship to the couple: ${relationship}
      - Desired tone: ${tone}
      
      Requirements:
      - Keep it under 50 words.
      - Make it sound natural and warm.
      - Do not include hashtags.
      - Return ONLY the message text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Wishing you a lifetime of love and happiness!";
  }
};