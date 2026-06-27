import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';

// We define the Haut.AI-like JSON schema using Zod
const HautAiSchema = z.object({
  metrics: z.object({
    acne: z.number().min(0).max(100).describe('Score for acne severity, 0 is clear, 100 is severe'),
    pigmentation: z.number().min(0).max(100).describe('Score for pigmentation/dark spots, 0 is clear, 100 is severe'),
    hydration: z.number().min(0).max(100).describe('Score for skin hydration, 0 is dehydrated, 100 is fully hydrated'),
    wrinkles: z.number().min(0).max(100).describe('Score for wrinkles and fine lines, 0 is smooth, 100 is severe'),
  }),
  overall_score: z.number().min(0).max(100).describe('Overall skin health score, 0 is worst, 100 is perfect'),
  detected_concerns: z.array(z.string()).describe('List of 2-3 short, specific skin concerns detected, e.g. "Mild Dehydration", "Acne Vulgaris"'),
  recommended_ingredients: z.array(z.string()).describe('List of 2-3 recommended skincare active ingredients, e.g. "Salicylic Acid", "Niacinamide"'),
});

export const maxDuration = 60; // Extend Vercel timeout to 60s

export async function POST(req: Request) {
  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return new Response(JSON.stringify({ error: 'No image provided' }), { status: 400 });
    }

    // Ensure it's a data URL format if not already
    const imageDataUrl = imageBase64.startsWith('data:image/') 
      ? imageBase64 
      : `data:image/jpeg;base64,${imageBase64}`;

    // Call Gemini 2.5 Flash to analyze the image and return the structured JSON
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: 'You are an advanced AI dermatologist engine acting as a proxy for Haut.AI. Analyze the patient\'s face image carefully and return a JSON object strictly following the required schema.',
      schema: HautAiSchema,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Please scan this facial image and provide the clinical metrics.',
            },
            {
              type: 'image',
              image: new URL(imageDataUrl),
            },
          ],
        },
      ],
    });

    return new Response(JSON.stringify(object), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in scanner API:', error);
    return new Response(JSON.stringify({ error: 'Failed to process image' }), { status: 500 });
  }
}
