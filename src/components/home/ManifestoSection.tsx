"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient — One Journey",
    body: "Setiap pasien memiliki cerita. RonaOS memastikan seluruh perjalanan tersebut tetap utuh—mulai dari assessment, medical records, treatment, products, after care, hingga follow-up.",
    badge: "PATIENT JOURNEY",
  },
  {
    id: "02",
    title: "Every Appointment Has Value",
    body: "Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai—lebih sedikit no-show, lebih banyak kepastian.",
    badge: "SMART BOOKING",
  },
  {
    id: "03",
    title: "Care Beyond The Clinic",
    body: "AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya. Loyalitas sejati dibangun setelah pasien pulang.",
    badge: "POST-CARE AI",
  },
  {
    id: "04",
    title: "One Intelligence, Every Department",
    body: "AI memahami SOP klinik, riwayat treatment, data pasien, inventory, performa dokter, transaksi, hingga revenue. Semakin lama digunakan, semakin dalam pemahamannya.",
    badge: "DEEP LEARNING",
  },
  {
    id: "05",
    title: "Designed Around Your Brand",
    body: "Pasien mengenal brand Anda, bukan brand kami. Seluruhnya dibangun menggunakan identitas klinik Anda secara eksklusif. Invisible technology, visible excellence.",
    badge: "WHITE LABEL",
  },
  {
    id: "06",
    title: "Enterprise by Design",
    body: "Keamanan, kecepatan, dan reliabilitas dirancang sejak awal—bukan fitur tambahan, melainkan fondasi utama. Klinik premium butuh infrastruktur yang mutlak dapat dipercaya.",
    badge: "INFRA GRADE",
  },
  {
    id: "07",
    title: "Intelligence Everywhere",
    body: "AI bukan fitur sisipan, melainkan fondasi dari setiap keputusan. Dari AI Assessment hingga business intelligence—semuanya saling terhubung dalam satu intelligence layer.",
    badge: "AI NATIVE",
  },
];

const TOTAL = manifestoPoints.length;
const TOTAL_STR = String(TOTAL).padStart(2, "0");

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="bg-[#030712] relative">
      {/* Header */}
      <div className="pt-24 md:pt-32 pb-16 max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-bold text-yellow-600 tracking-[0.25em] uppercase block mb-4"
        >
          THE RonaOS MANIFESTO
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-tight"
        >
          Excellence is an{" "}
          <i className="text-yellow-500 font-light">Architecture.</i>
        </motion.h2>
      </div>

      {/* Sticky Stacking Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative pb-[10vh]">
        {manifestoPoints.map((point, index) => (
          <StickyCard
            key={point.id}
            point={point}
            index={index}
          />
        ))}
        {/* Spacer for the last card to fully stick */}
        <div className="w-full h-[80vh]" />
      </div>
    </section>
  );
}

function StickyCard({
  point,
  index,
}: {
  point: (typeof manifestoPoints)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Cards below scale down slightly when they're being covered
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down as the next card covers this one (skip for last card)
  const scale = useTransform(
    exitProgress,
    [0, 1],
    index < TOTAL - 1 ? [1, 0.95] : [1, 1]
  );

  const opacity = useTransform(
    exitProgress,
    [0, 1],
    index < TOTAL - 1 ? [1, 0.6] : [1, 1]
  );

  return (
    <div
      ref={containerRef}
      className="sticky w-full"
      style={{
        top: `calc(12vh + ${index * 24}px)`,
        marginBottom: index === TOTAL - 1 ? "0" : "80vh",
        zIndex: 10 + index,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        className="origin-top"
      >
        <div className="w-full rounded-3xl border border-slate-800/60 bg-[#0B1120] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden relative min-h-[50vh] md:min-h-[55vh]">
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

          {/* Giant Watermark Number */}
          <div className="absolute -bottom-8 -right-4 md:right-8 text-[160px] md:text-[240px] font-bold text-white/[0.03] leading-none pointer-events-none select-none font-sans tracking-tighter">
            {point.id}
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-14 lg:p-16 max-w-2xl flex flex-col justify-between min-h-[50vh] md:min-h-[55vh]">
            <div>
              {/* Number indicator */}
              <div className="flex items-center gap-4 mb-10 md:mb-14">
                <span className="text-sm font-mono font-bold text-yellow-600 tracking-widest">
                  {point.id}
                </span>
                <span className="text-slate-600 font-light">/</span>
                <span className="text-sm font-mono text-slate-600 tracking-widest">
                  {TOTAL_STR}
                </span>
                <div className="w-12 h-[1px] bg-slate-700" />
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6 md:mb-8">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-lg">
                {point.body}
              </p>
            </div>

            {/* Badge */}
            <div className="mt-8 md:mt-12">
              <span className="inline-block text-[10px] font-mono font-bold text-slate-500 tracking-[0.2em] uppercase border border-slate-800 rounded-full px-4 py-2">
                {point.badge}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
