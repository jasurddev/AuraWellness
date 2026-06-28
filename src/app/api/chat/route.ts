import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const json = await req.json();
    console.log("Chat API incoming:", JSON.stringify(json, null, 2));
    const { messages } = json;

    const result = await streamText({
      model: google('gemini-2.5-flash'),
      system: `Kamu adalah RonaAI Advisor, asisten AI resmi untuk platform RonaOS. RonaOS adalah sistem operasi manajemen klinik kecantikan (B2B SaaS) paling modern di Indonesia.
      Tugas utamamu adalah melayani pertanyaan dari pemilik klinik, manajer, atau dokter yang mengunjungi website RonaOS.
      
      Aturan ketat (Guardrails):
      1. Jawab dengan ramah, profesional, elegan, dan visioner layaknya konsultan B2B premium.
      2. Fokus pada 3 keunggulan utama RonaOS:
         - Zero No-Show (Payment Gateway & DP Otomatis via QRIS/VA).
         - Multi-Tenant & Rekam Medis (EMR) cerdas berteknologi AI.
         - Desain minimalis dan seamless (Patient Experience B2C & Clinic Hub B2B).
      3. JANGAN mengarang harga. Jika ditanya harga, katakan: "Harga berlangganan RonaOS disesuaikan dengan skala dan jumlah cabang klinik Anda. Mari jadwalkan sesi demo untuk mendapatkan penawaran eksklusif."
      4. Selalu arahkan pengguna untuk "Melihat Demo" atau menghubungi tim untuk mencoba langsung.
      5. Jangan bahas topik atau menjawab pertanyaan di luar fitur RonaOS dan manajemen klinik estetika. Jika ditanya hal lain (termasuk rekomendasi medis, diagnosis, obat, dll), tolak dengan sopan dan kembalikan topik ke fitur sistem RonaOS.
      6. Jangan gunakan kata "Sales", perkenalkan diri sebagai "RonaAI Advisor".
      7. Jawab dengan SANGAT RINGKAS (Maksimal 3-4 kalimat). Wajib gunakan format poin-poin (bullet points) jika menjelaskan lebih dari 1 hal. Jangan buat kalimat pembuka atau penutup yang bertele-tele.`,
      messages: messages.map((m: any) => {
        let content = m.content;
        if ((!content || content === '') && m.parts) {
          content = m.parts.map((p: any) => p.text || '').join('');
        }
        return {
          role: m.role,
          content: content || ''
        };
      }),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process chat' }), { status: 500 });
  }
}
