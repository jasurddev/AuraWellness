"use client";

import React from "react";
import { motion } from "framer-motion";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient - One Journey.",
    body: (
      <>
        Setiap pasien memiliki cerita.<br/>
        RonaOS memastikan seluruh perjalanan tersebut tetap utuh.<br/>
        Assessment.<br/>
        Medical Records.<br/>
        Treatment.<br/>
        Products.<br/>
        After Care.<br/>
        Follow Up.<br/>
        <br/>
        Semuanya terhubung dalam satu timeline yang dirancang untuk memberikan pengalaman yang konsisten di setiap kunjungan.
      </>
    )
  },
  {
    id: "02",
    title: "Every Appointment Has Value.",
    body: (
      <>
        Waktu dokter adalah aset.<br/>
        Setiap slot treatment adalah peluang.<br/>
        <br/>
        Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai.<br/>
        <br/>
        Lebih sedikit no-show.<br/>
        Lebih banyak kepastian.<br/>
        Lebih banyak pertumbuhan.
      </>
    )
  },
  {
    id: "03",
    title: "Care Beyond The Clinic.",
    body: (
      <>
        Hubungan dengan pasien tidak berakhir setelah treatment selesai.<br/>
        AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya.<br/>
        Karena loyalitas dibangun setelah pasien pulang.
      </>
    )
  },
  {
    id: "04",
    title: "One Intelligence.",
    body: (
      <>
        Every Department Connected.<br/>
        <br/>
        AI memahami lebih dari sekadar percakapan.<br/>
        Ia memahami SOP klinik.<br/>
        Riwayat treatment.<br/>
        Data pasien.<br/>
        Inventory.<br/>
        Performa dokter.<br/>
        Transaksi.<br/>
        Revenue.<br/>
        Semakin lama digunakan, semakin dalam pemahamannya terhadap bisnis Anda.
      </>
    )
  },
  {
    id: "05",
    title: "Designed Around Your Brand.",
    body: (
      <>
        Pasien mengenal brand Anda.<br/>
        Bukan brand kami.<br/>
        Mulai dari aplikasi pasien, komunikasi, hingga pengalaman digital, seluruhnya dibangun menggunakan identitas klinik Anda.<br/>
        Invisible technology.<br/>
        Visible excellence.
      </>
    )
  },
  {
    id: "06",
    title: "Enterprise by Design.",
    body: (
      <>
        Keamanan.<br/>
        Kecepatan.<br/>
        Reliabilitas.<br/>
        Semuanya dirancang sejak awal.<br/>
        Bukan sebagai fitur tambahan.<br/>
        Tetapi sebagai fondasi.<br/>
        <br/>
        Karena klinik premium membutuhkan infrastruktur yang dapat dipercaya.
      </>
    )
  }
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-24 md:py-32 px-6 bg-slate-900 text-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-bold text-yellow-500 tracking-[0.3em] uppercase block mb-6"
          >
            THE RONAOS MANIFESTO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1]"
          >
            Excellence is an <i className="text-yellow-500 font-light">Architecture.</i>
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16 lg:gap-y-24">
          {manifestoPoints.map((point, index) => (
            <motion.div 
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col border-t border-slate-800 pt-8 group"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-sm font-medium text-slate-600 font-mono tracking-widest">{point.id}</span>
                <div className="w-8 h-[1px] bg-yellow-500/0 group-hover:bg-yellow-500/50 transition-colors duration-500"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight group-hover:text-yellow-400 transition-colors duration-500">
                {point.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
