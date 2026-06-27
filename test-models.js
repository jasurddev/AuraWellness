async function test() {
  const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
  const data = await res.json();
  if (data.models) {
    console.log("AVAILABLE MODELS:");
    data.models.forEach(m => console.log(m.name));
  } else {
    console.log("ERROR:", data);
  }
}
test();
