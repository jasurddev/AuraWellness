"use client";

import React from "react";
import { motion } from "framer-motion";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient - One Journey.",
    body: "Setiap pasien memiliki cerita. RonaOS memastikan seluruh perjalanan tersebut tetap utuh mulai dari Assessment, Medical Records, Treatment, Products, After Care, hingga Follow Up. Semuanya terhubung dalam satu timeline yang dirancang untuk memberikan pengalaman yang konsisten di setiap kunjungan."
  },
  {
    id: "02",
    title: "Every Appointment Has Value.",
    body: "Waktu dokter adalah aset. Setiap slot treatment adalah peluang. Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai. Lebih sedikit no-show. Lebih banyak kepastian. Lebih banyak pertumbuhan."
  },
  {
    id: "03",
    title: "Care Beyond The Clinic.",
    body: "Hubungan dengan pasien tidak berakhir setelah treatment selesai. AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya. Karena loyalitas dibangun setelah pasien pulang."
  },
  {
    id: "04",
    title: "One Intelligence.",
    body: "Every Department Connected. AI memahami lebih dari sekadar percakapan. Ia memahami SOP klinik, Riwayat treatment, Data pasien, Inventory, Performa dokter, Transaksi, hingga Revenue. Semakin lama digunakan, semakin dalam pemahamannya terhadap bisnis Anda."
  },
  {
    id: "05",
    title: "Designed Around Your Brand.",
    body: "Pasien mengenal brand Anda. Bukan brand kami. Mulai dari aplikasi pasien, komunikasi, hingga pengalaman digital, seluruhnya dibangun menggunakan identitas klinik Anda. Invisible technology. Visible excellence."
  },
  {
    id: "06",
    title: "Enterprise by Design.",
    body: "Keamanan. Kecepatan. Reliabilitas. Semuanya dirancang sejak awal. Bukan sebagai fitur tambahan. Tetapi sebagai fondasi. Karena klinik premium membutuhkan infrastruktur yang dapat dipercaya."
  }
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 px-6 bg-slate-900 text-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Compact Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-800 pb-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-bold text-yellow-500 tracking-[0.2em] block mb-4"
            >
              THE RonaOS MANIFESTO
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white leading-tight"
            >
              Excellence is an <i className="text-yellow-500 font-light">Architecture.</i>
            </motion.h2>
          </div>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {manifestoPoints.map((point, index) => (
            <motion.div 
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-800/20 border border-slate-800/50 hover:bg-slate-800/40 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium text-yellow-600/70 font-mono">{point.id}</span>
                <div className="flex-1 h-[1px] bg-slate-800 group-hover:bg-yellow-900/50 transition-colors"></div>
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 7th Point - Grand Finale (Full Width Bento Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900 border border-slate-700/50 p-8 md:p-12 relative overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500"
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] group-hover:bg-yellow-500/10 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <span className="text-xs font-medium text-yellow-600/70 font-mono mb-4 block">07</span>
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                Intelligence<br/>Everywhere.
              </h3>
            </div>
            <div className="md:w-2/3 border-l-0 md:border-l border-slate-700 md:pl-8">
              <p className="text-base text-slate-300 leading-relaxed font-light mb-4">
                <strong className="text-white font-medium">Artificial Intelligence bukan sebuah fitur. Ia menjadi fondasi dari setiap keputusan.</strong>
              </p>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Mulai dari AI Assessment, rekomendasi treatment, patient journey, operasional, hingga business intelligence—semuanya saling terhubung dalam satu intelligence layer yang terus belajar dari data klinik Anda.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-900/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
