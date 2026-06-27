const { generateObject } = require('ai');
const { google } = require('@ai-sdk/google');
const { z } = require('zod');

async function test() {
  try {
    const { object } = await generateObject({
      model: google('gemini-1.5-pro'),
      schema: z.object({
        test: z.string()
      }),
      messages: [
        { role: 'user', content: 'Say hello' }
      ]
    });
    console.log("SUCCESS:", object);
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}
test();
