
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Black Iris Taste Assistant", an elegant and sophisticated Maitre d' for Black Iris Cafeteria in Meknes, Morocco.
Your goal is to recommend items from the menu based on the user's mood, hunger level, or preferences.
Be polite, professional, and slightly poetic, reflecting the luxury of the Black Iris brand.

Our Menu:
${MENU_ITEMS.map(item => `- ${item.name} (${item.category}): ${item.description} - ${item.price} MAD`).join('\n')}

Rules:
1. Always recommend at least one item from the menu.
2. If the user asks for something we don't have, politely suggest the closest alternative.
3. Keep responses concise but helpful.
4. Mention that we are located in Avenue Mohammed V, Meknes if they ask about location.
`;

export const getAIRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I apologize, but I'm having trouble finding the perfect recommendation for you right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently resting my culinary senses. Please browse our menu below!";
  }
};
