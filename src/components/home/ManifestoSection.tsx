"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope, Clock, HeartHandshake, BrainCircuit, ShieldCheck, Shield, Sparkles } from "lucide-react";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient - One Journey",
    body: "Setiap pasien memiliki cerita. RonaOS memastikan seluruh perjalanan tersebut tetap utuh—mulai dari assessment, medical records, treatment, products, after care, hingga follow-up. Semuanya terhubung dalam satu timeline yang dirancang untuk memberikan pengalaman yang konsisten di setiap kunjungan.",
    icon: Stethoscope
  },
  {
    id: "02",
    title: "Every Appointment Has Value",
    body: "Waktu dokter adalah aset, dan setiap slot treatment adalah peluang. Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai—berujung pada lebih sedikit no-show, lebih banyak kepastian, dan peningkatan pertumbuhan bisnis.",
    icon: Clock
  },
  {
    id: "03",
    title: "Care Beyond The Clinic",
    body: "Hubungan dengan pasien tidak berakhir setelah treatment selesai. AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya. Karena loyalitas sejati dibangun setelah pasien pulang.",
    icon: HeartHandshake
  },
  {
    id: "04",
    title: "One Intelligence",
    body: "Every Department Connected. AI memahami lebih dari sekadar percakapan. Ia memahami SOP klinik, riwayat treatment, data pasien, inventory, performa dokter, transaksi, hingga revenue. Semakin lama digunakan, semakin dalam pemahamannya terhadap urat nadi bisnis Anda.",
    icon: BrainCircuit
  },
  {
    id: "05",
    title: "Designed Around Your Brand",
    body: "Pasien mengenal brand Anda, bukan brand kami. Mulai dari aplikasi pasien, komunikasi, hingga pengalaman digital, seluruhnya dibangun menggunakan identitas klinik Anda secara eksklusif. Invisible technology, visible excellence.",
    icon: Sparkles
  },
  {
    id: "06",
    title: "Enterprise by Design",
    body: "Keamanan, kecepatan, dan reliabilitas. Semuanya dirancang sejak awal—bukan sekadar sebagai fitur tambahan, melainkan sebagai fondasi utama. Karena klinik premium membutuhkan infrastruktur yang mutlak dapat dipercaya.",
    icon: ShieldCheck
  },
  {
    id: "07",
    title: "Intelligence Everywhere",
    body: "Artificial Intelligence bukan sekadar fitur sisipan, melainkan fondasi dari setiap keputusan. Mulai dari AI Assessment, rekomendasi treatment, patient journey, operasional, hingga business intelligence—semuanya saling terhubung dalam satu intelligence layer yang secara kontinu belajar dan berevolusi dari data klinik Anda.",
    icon: Shield
  }
];

export default function ManifestoSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire tall section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate translation: we move left by a percentage depending on how many cards we have
  // 7 cards * width. A reasonable end value is around "-85%" for a long container.
  // We use -85% to leave some margin for the last card so it doesn't snap off-screen.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} id="manifesto" className="bg-[#030712] relative h-[400vh]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-col md:flex-row pt-32 md:pt-0">
        
        {/* Left Sticky Content */}
        <div className="w-full md:w-[40%] flex-shrink-0 px-8 md:px-16 lg:px-24 flex flex-col justify-center relative z-20 mb-12 md:mb-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.2em] text-yellow-600 mb-6 block uppercase text-center md:text-left"
          >
            THE RonaOS MANIFESTO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 text-center md:text-left"
          >
            Excellence is an <br className="hidden md:block" />
            <i className="text-yellow-500 font-light">Architecture.</i>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0 text-center md:text-left"
          >
            Everything you need to scale, connected in one place. AI, web, and marketing — one 24/7 aesthetic business machine.
          </motion.p>
        </div>

        {/* Right Scrolling Cards */}
        <motion.div 
          style={{ x }} 
          className="flex gap-6 px-4 md:px-8 flex-shrink-0 items-center w-full md:w-auto"
        >
          {manifestoPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div 
                key={point.id} 
                className="w-[300px] md:w-[380px] h-[400px] md:h-[480px] bg-[#0B1120] border border-slate-800/60 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shrink-0 hover:border-slate-700/80 transition-colors group relative overflow-hidden"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
                
                <div>
                  <div className="w-12 h-12 bg-slate-900/50 rounded-xl border border-slate-800 flex items-center justify-center mb-8 group-hover:border-slate-700 transition-colors">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-yellow-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 leading-relaxed">
                    {point.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {point.body}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-6 border-t border-slate-800/60 mt-6">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></span>
                  <span className="text-[9px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                    BUILT FOR RESULTS • {point.id}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
        
      </div>

      {/* Global Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] max-w-[100vw] h-[800px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
