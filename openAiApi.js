import OpenAI from 'openai';
import { CHATGPT_API_KEY } from './variables.js';



export const openAiApi = async (prompt) => {
  
  const openai = new OpenAI({
    apiKey: CHATGPT_API_KEY,
  });

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-4o",
  });

  return response.choices[0].message.content.trim();
};