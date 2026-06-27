async function test() {
  const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const body = {
    contents: [{ parts: [{ text: "Say hi" }] }]
  };
  
  // Try Bearer token
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify(body)
  });
  
  console.log("Status:", res.status);
  console.log("Body:", await res.text());
}
test();
