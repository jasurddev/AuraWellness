const { generateObject } = require('ai');
const { google } = require('@ai-sdk/google');
const { z } = require('zod');
const fs = require('fs');

async function test() {
  try {
    // Generate a dummy 1x1 base64 pixel
    const dummyBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";
    
    console.log("Calling Gemini 2.5 Flash...");
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: 'You are an advanced AI dermatologist engine acting as a proxy for Haut.AI. Analyze the patient\'s face image carefully and return a JSON object strictly following the required schema.',
      schema: z.object({
        metrics: z.object({
          acne: z.number().min(0).max(100)
        }),
        overall_score: z.number().min(0).max(100),
        detected_concerns: z.array(z.string()),
        recommended_ingredients: z.array(z.string()),
      }),
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
              image: new URL(dummyBase64),
            },
          ],
        },
      ],
    });
    
    console.log("SUCCESS:", JSON.stringify(object, null, 2));
  } catch (err) {
    console.error("API ERROR:", err);
  }
}

test();
