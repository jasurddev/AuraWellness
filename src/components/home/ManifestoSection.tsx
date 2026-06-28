"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient - One Journey.",
    body: "Setiap pasien memiliki cerita. RonaOS memastikan seluruh perjalanan tersebut tetap utuh—mulai dari assessment, medical records, treatment, products, after care, hingga follow-up. Semuanya terhubung dalam satu timeline yang dirancang untuk memberikan pengalaman yang konsisten di setiap kunjungan."
  },
  {
    id: "02",
    title: "Every Appointment Has Value.",
    body: "Waktu dokter adalah aset, dan setiap slot treatment adalah peluang. Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai—berujung pada lebih sedikit no-show, lebih banyak kepastian, dan peningkatan pertumbuhan bisnis."
  },
  {
    id: "03",
    title: "Care Beyond The Clinic.",
    body: "Hubungan dengan pasien tidak berakhir setelah treatment selesai. AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya. Karena loyalitas sejati dibangun setelah pasien pulang."
  },
  {
    id: "04",
    title: "One Intelligence.",
    body: "Every Department Connected. AI memahami lebih dari sekadar percakapan. Ia memahami SOP klinik, riwayat treatment, data pasien, inventory, performa dokter, transaksi, hingga revenue. Semakin lama digunakan, semakin dalam pemahamannya terhadap urat nadi bisnis Anda."
  },
  {
    id: "05",
    title: "Designed Around Your Brand.",
    body: "Pasien mengenal brand Anda, bukan brand kami. Mulai dari aplikasi pasien, komunikasi, hingga pengalaman digital, seluruhnya dibangun menggunakan identitas klinik Anda secara eksklusif. Invisible technology, visible excellence."
  },
  {
    id: "06",
    title: "Enterprise by Design.",
    body: "Keamanan, kecepatan, dan reliabilitas. Semuanya dirancang sejak awal—bukan sekadar sebagai fitur tambahan, melainkan sebagai fondasi utama. Karena klinik premium membutuhkan infrastruktur yang mutlak dapat dipercaya."
  },
  {
    id: "07",
    title: "Intelligence Everywhere.",
    body: "Artificial Intelligence bukan sekadar fitur sisipan, melainkan fondasi dari setiap keputusan. Mulai dari AI Assessment, rekomendasi treatment, patient journey, operasional, hingga business intelligence—semuanya saling terhubung dalam satu intelligence layer yang secara kontinu belajar dan berevolusi dari data klinik Anda."
  }
];

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the overall scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="manifesto" className="bg-[#030712] relative pb-[5vh]">
      
      {/* Header */}
      <div className="pt-24 md:pt-32 pb-16 max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold text-yellow-600 tracking-[0.2em] uppercase block mb-4"
        >
          THE RonaOS MANIFESTO
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
        >
          Excellence is an <i className="text-yellow-500 font-light">Architecture.</i>
        </motion.h2>
      </div>

      {/* Sticky Stacking Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {manifestoPoints.map((point, index) => (
          <Card 
            key={point.id}
            point={point}
            index={index}
            total={manifestoPoints.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
      
      {/* Global Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}

// Sub-component for individual card with scroll-driven effects
function Card({ point, index, total, progress }: any) {
  // Determine when this specific card should start scaling down.
  // It scales down proportionally as the user scrolls past it.
  const startProgress = index / total;
  const endProgress = 1;
  
  // Scale down max 5% (0.95) based on how far down the stack it is
  const scale = useTransform(
    progress, 
    [startProgress, endProgress], 
    [1, 1 - (total - index - 1) * 0.015] 
  );

  // Dim the background cards slightly
  const opacity = useTransform(
    progress,
    [startProgress, endProgress],
    [1, 1 - (total - index - 1) * 0.08]
  );

  return (
    <div 
      className="sticky w-full flex flex-col justify-center"
      style={{ 
        top: `calc(15vh + ${index * 20}px)`, // Tighter vertical spacing for the stack header
        marginBottom: index === total - 1 ? '5vh' : '75vh', // 7th card has very little margin so it pulls the section up
        zIndex: 10 + index
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth spring-like ease
      >
        <motion.div 
          className="w-full rounded-[2rem] border-t border-slate-700/60 bg-[#0B1120] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden relative origin-top"
          style={{ 
            scale, 
            opacity,
            minHeight: '55vh' 
          }}
        >
          {/* Ambient Top Glow for stacking contrast */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
          
          {/* Giant Watermark Number */}
          <div className="absolute -bottom-10 -right-10 md:right-10 text-[180px] md:text-[280px] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-sans tracking-tighter">
            {point.id}
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-3xl">
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <span className="text-sm md:text-base font-bold text-slate-500 font-mono tracking-widest">
                <span className="text-white">{point.id}</span> <span className="opacity-40">/ 07</span>
              </span>
              <div className="w-12 h-[1px] bg-slate-700"></div>
            </div>
            
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              {point.title}
            </h3>
            
            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
              {point.body}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
