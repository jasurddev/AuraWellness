import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';

// We define the Haut.AI-like JSON schema using Zod
const HautAiSchema = z.object({
  metrics: z.object({
    acne: z.number().min(0).max(100).describe('Score for acne severity, 0 is clear, 100 is severe'),
    pigmentation: z.number().min(0).max(100).describe('Score for pigmentation/dark spots/PIH, 0 is clear, 100 is severe'),
    hydration: z.number().min(0).max(100).describe('Score for skin hydration, 0 is dehydrated, 100 is fully hydrated'),
    wrinkles: z.number().min(0).max(100).describe('Score for wrinkles and fine lines, 0 is smooth, 100 is severe'),
    scarring: z.number().min(0).max(100).describe('Score for acne scarring (atrophic/hypertrophic), 0 is clear, 100 is severe'),
    texture: z.number().min(0).max(100).describe('Score for skin texture (roughness/pores), 0 is smooth, 100 is very rough'),
    oiliness: z.number().min(0).max(100).describe('Score for skin oiliness/sebum, 0 is balanced/dry, 100 is very oily'),
  }),
  overall_score: z.number().min(0).max(100).describe('Overall skin health score, 0 is worst, 100 is perfect'),
  confidence_score: z.number().min(0).max(100).describe('AI confidence in its analysis based on image quality, 0 is unsure, 100 is highly confident'),
  detected_concerns: z.array(z.string()).describe('List of 3-5 short, specific skin concerns detected, e.g. "Mild Dehydration", "Moderate Acne", "Post-Inflammatory Hyperpigmentation"'),
  treatment_recommendations: z.array(z.string()).describe('List of 2-3 specific clinical treatments recommended, e.g. "Acne Peeling", "Laser Fractional", "Hydrafacial"'),
  recommended_ingredients: z.array(z.string()).describe('List of 2-3 recommended skincare active ingredients, e.g. "Salicylic Acid", "Niacinamide"'),
});

export const maxDuration = 60; // Extend Vercel timeout to 60s

export async function POST(req: Request) {
  try {
    const { imageBase64, wellnessData } = await req.json();

    if (!imageBase64) {
      return new Response(JSON.stringify({ error: 'No image provided' }), { status: 400 });
    }

    // Ensure it's a data URL format if not already
    const imageDataUrl = imageBase64.startsWith('data:image/') 
      ? imageBase64 
      : `data:image/jpeg;base64,${imageBase64}`;

    const stressLevel = wellnessData?.stress || 3; // 1-5
    const sleepLevel = wellnessData?.sleep || 3; // 1-5

    const systemPrompt = `You are "RonaAI", an advanced clinical dermatologist AI engine.
Your task is to analyze the provided patient face image and output precise clinical metrics.
You MUST output a JSON object strictly following the required schema.

### Context
The patient has reported the following lifestyle factors which affect skin health:
- Stress Level: ${stressLevel} out of 5 (1=Very Relaxed, 5=Very Stressed)
- Sleep Quality: ${sleepLevel} out of 5 (1=Very Poor, 5=Very Good)
Use this context to inform your analysis (e.g. high stress/poor sleep correlates with dehydration, dullness, or acne flare-ups).

### Grading Rubric (0-100)
For all severity-based metrics (Acne, Pigmentation, Wrinkles, Scarring, Texture, Oiliness):
- 0-20: Clear / Minimal
- 21-40: Mild
- 41-70: Moderate
- 71-100: Severe

For Hydration:
- 0-30: Severely Dehydrated
- 31-60: Moderately Dehydrated
- 61-100: Well Hydrated

### Specific Instructions
1. Distinguish between active acne (papules/pustules) and Post-Inflammatory Hyperpigmentation (PIH). Score them separately in 'acne' and 'pigmentation'.
2. Look for acne scarring (ice pick, boxcar, rolling scars) and score under 'scarring'.
3. 'Confidence Score' should reflect how clear the image is. If blurry, dark, or obscured, lower this score.
4. 'Treatment Recommendations' should match the primary concerns (e.g. if high acne, recommend "Acne Peeling"; if high scarring, recommend "Laser Fractional").
`;

    // Call Gemini 2.5 Flash to analyze the image and return the structured JSON
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
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
