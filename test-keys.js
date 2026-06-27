const { generateObject } = require('ai');
const { openai } = require('@ai-sdk/openai');
const { z } = require('zod');

// Daftar API Keys dari gambar (sebagian besar kelihatan fake, tapi kita tes aja semua)
const apiKeys = [
  "sk-abcdef1234567890abcdef1234567890abcdef12",
  "sk-1234567890abcdef1234567890abcdef12345678",
  "sk-abcdefabcdefabcdefabcdefabcdefabcdef12",
  "sk-7890abcdef7890abcdef7890abcdef7890abcd",
  "sk-1234abcd1234abcd1234abcd1234abcd1234abcd",
  "sk-abcd1234abcd1234abcd1234abcd1234abcd1234",
  "sk-5678efgh5678efgh5678efgh5678efgh5678efgh",
  "sk-efgh5678efgh5678efgh5678efgh5678efgh5678",
  "sk-ijkl1234ijkl1234ijkl1234ijkl1234ijkl1234",
  "sk-mnop5678mnop5678mnop5678mnop5678mnop5678",
  "sk-qrst1234qrst1234qrst1234qrst1234qrst1234",
  "sk-uvwx5678uvwx5678uvwx5678uvwx5678uvwx5678",
  "sk-1234ijkl1234ijkl1234ijkl1234ijkl1234ijkl",
  "sk-5678mnop5678mnop5678mnop5678mnop5678mnop",
  "sk-qrst5678qrst5678qrst5678qrst5678qrst5678",
  "sk-uvwx1234uvwx1234uvwx1234uvwx1234uvwx1234",
  "sk-1234abcd5678efgh1234abcd5678efgh1234abcd",
  "sk-5678ijkl1234mnop5678ijkl1234mnop5678ijkl",
  "sk-abcdqrstefghuvwxabcdqrstefghuvwxabcdqrst",
  "sk-ijklmnop1234qrstijklmnop1234qrstijklmnop",
  "sk-1234uvwx5678abcd1234uvwx5678abcd1234uvwx",
  "sk-efghijkl5678mnopabcd1234efghijkl5678mnop",
  "sk-mnopqrstuvwxabcdmnopqrstuvwxabcdmnopqrst",
  "sk-ijklmnopqrstuvwxijklmnopqrstuvwxijklmnop",
  "sk-abcd1234efgh5678abcd1234efgh5678abcd1234",
  "sk-1234ijklmnop5678ijklmnop1234ijklmnop5678",
  "sk-qrstefghuvwxabcdqrstefghuvwxabcdqrstefgh",
  "sk-uvwxijklmnop1234uvwxijklmnop1234uvwxijkl",
  "sk-abcd5678efgh1234abcd5678efgh1234abcd5678",
  "sk-ijklmnopqrstuvwxijklmnopqrstuvwxijklmnop",
  "sk-1234qrstuvwxabcd1234qrstuvwxabcd1234qrst",
  "sk-efghijklmnop5678efghijklmnop5678efghijkl",
  "sk-mnopabcd1234efghmnopabcd1234efghmnopabcd",
  "sk-ijklqrst5678uvwxijklqrst5678uvwxijklqrst",
  "sk-1234ijkl5678mnop1234ijkl5678mnop1234ijkl"
];

async function testKey(apiKey) {
  // Bikin client OpenAI custom per key
  const customProvider = require('@ai-sdk/openai').createOpenAI({ apiKey });
  
  try {
    const { object } = await generateObject({
      model: customProvider('gpt-4o-mini'),
      schema: z.object({ success: z.boolean() }),
      messages: [{ role: 'user', content: 'Say hi' }]
    });
    return true;
  } catch (err) {
    return false;
  }
}

async function findValidKey() {
  console.log(`🔍 Memulai tes ${apiKeys.length} API Keys...\n`);
  
  for (let i = 0; i < apiKeys.length; i++) {
    const key = apiKeys[i];
    process.stdout.write(`Tes ke-${i + 1} [${key.substring(0, 10)}...] : `);
    
    const isValid = await testKey(key);
    
    if (isValid) {
      console.log('✅ VALID DAN BISA DIPAKAI!');
      console.log('\n=============================================');
      console.log('🎉 KETEMU BRO API KEY YANG BENER:');
      console.log(key);
      console.log('=============================================\n');
      return; // Berhenti kalau udah ketemu 1 yang valid
    } else {
      console.log('❌ Invalid / Kosong');
    }
  }
  
  console.log('\n💀 WADUH! Dari semua list tadi, nggak ada satupun yang valid atau ada saldonya bro.');
}

findValidKey();
