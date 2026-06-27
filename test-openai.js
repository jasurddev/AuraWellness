const { generateObject } = require('ai');
const { openai } = require('@ai-sdk/openai');
const { z } = require('zod');

async function test() {
  try {
    const { object } = await generateObject({
      model: openai('gpt-4o-mini'),
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
