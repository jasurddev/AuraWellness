"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient\nOne Journey.",
    body: "Setiap pasien memiliki cerita. RonaOS memastikan seluruh perjalanan tersebut tetap utuh—mulai dari assessment, medical records, treatment, products, after care, hingga follow-up. Semuanya terhubung dalam satu timeline yang dirancang untuk memberikan pengalaman yang konsisten di setiap kunjungan.",
  },
  {
    id: "02",
    title: "Every Appointment\nHas Value.",
    body: "Waktu dokter adalah aset, dan setiap slot treatment adalah peluang. Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai—berujung pada lebih sedikit no-show, lebih banyak kepastian, dan peningkatan pertumbuhan bisnis.",
  },
  {
    id: "03",
    title: "Care Beyond\nThe Clinic.",
    body: "Hubungan dengan pasien tidak berakhir setelah treatment selesai. AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya. Karena loyalitas sejati dibangun setelah pasien pulang.",
  },
  {
    id: "04",
    title: "One Intelligence.\nEvery Department.",
    body: "AI memahami lebih dari sekadar percakapan. Ia memahami SOP klinik, riwayat treatment, data pasien, inventory, performa dokter, transaksi, hingga revenue. Semakin lama digunakan, semakin dalam pemahamannya terhadap urat nadi bisnis Anda.",
  },
  {
    id: "05",
    title: "Designed Around\nYour Brand.",
    body: "Pasien mengenal brand Anda, bukan brand kami. Mulai dari aplikasi pasien, komunikasi, hingga pengalaman digital, seluruhnya dibangun menggunakan identitas klinik Anda secara eksklusif. Invisible technology, visible excellence.",
  },
  {
    id: "06",
    title: "Enterprise\nby Design.",
    body: "Keamanan, kecepatan, dan reliabilitas. Semuanya dirancang sejak awal—bukan sekadar sebagai fitur tambahan, melainkan sebagai fondasi utama. Karena klinik premium membutuhkan infrastruktur yang mutlak dapat dipercaya.",
  },
  {
    id: "07",
    title: "Intelligence\nEverywhere.",
    body: "Artificial Intelligence bukan sekadar fitur sisipan, melainkan fondasi dari setiap keputusan. Mulai dari AI Assessment, rekomendasi treatment, patient journey, operasional, hingga business intelligence—semuanya saling terhubung dalam satu intelligence layer yang secara kontinu belajar dan berevolusi dari data klinik Anda.",
  },
];

function SlideCard({
  point,
  index,
  total,
  progress,
}: {
  point: (typeof manifestoPoints)[0];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card occupies a segment of the scroll
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const fadeInEnd = start + segmentSize * 0.2;
  const fadeOutStart = start + segmentSize * 0.7;
  const end = start + segmentSize;

  // Overlap: first card starts visible, last card stays visible
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    isFirst
      ? isLast ? [0, 1] : [0, fadeOutStart, end] 
      : isLast
        ? [Math.max(0, start - segmentSize * 0.1), fadeInEnd, 1]
        : [Math.max(0, start - segmentSize * 0.1), fadeInEnd, fadeOutStart, end],
    isFirst
      ? isLast ? [1, 1] : [1, 1, 0]
      : isLast
        ? [0, 1, 1]
        : [0, 1, 1, 0]
  );

  // Y translation
  const y = useTransform(
    progress,
    isFirst
      ? [0, fadeOutStart, end]
      : isLast
        ? [Math.max(0, start - segmentSize * 0.1), fadeInEnd, 1]
        : [Math.max(0, start - segmentSize * 0.1), fadeInEnd, fadeOutStart, end],
    isFirst
      ? [0, 0, -60]
      : isLast
        ? [60, 0, 0]
        : [60, 0, 0, -60]
  );

  // Scale: slight zoom in
  const scale = useTransform(
    progress,
    isFirst ? [0, 0.01] : [Math.max(0, start - segmentSize * 0.1), fadeInEnd],
    isFirst ? [1, 1] : [0.96, 1]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, y, scale }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left: Big Number + Title */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Floating number */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="text-sm font-mono font-bold text-yellow-600 tracking-widest">
                {point.id}
              </span>
              <div className="w-12 h-[1px] bg-yellow-600/40"></div>
              <span className="text-[10px] font-bold text-slate-600 tracking-[0.15em] uppercase">
                / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.08] tracking-tight whitespace-pre-line">
              {point.title}
            </h3>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="w-16 h-[1px] bg-slate-700 mb-8 mx-auto lg:mx-0"></div>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
              {point.body}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDots({
  total,
  progress,
}: {
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    const segmentSize = 1 / total;
    const idx = Math.min(Math.floor(latest / segmentSize), total - 1);
    setActiveIndex(idx);
  });

  return (
    <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-500 ${
            i === activeIndex
              ? "w-2 h-6 bg-yellow-500"
              : "w-2 h-2 bg-slate-700 hover:bg-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="bg-[#030712] relative"
      style={{ height: `${(manifestoPoints.length + 1) * 60}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Label - always visible */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-yellow-600/70 uppercase">
            THE RonaOS MANIFESTO
          </span>
        </div>

        {/* Cards */}
        {manifestoPoints.map((point, index) => (
          <SlideCard
            key={point.id}
            point={point}
            index={index}
            total={manifestoPoints.length}
            progress={scrollYProgress}
          />
        ))}

        {/* Progress Dots */}
        <ProgressDots total={manifestoPoints.length} progress={scrollYProgress} />

        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-900/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/50 to-transparent"></div>
      </div>
    </section>
  );
}
