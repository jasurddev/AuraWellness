"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Stethoscope,
  Clock,
  HeartHandshake,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Shield,
} from "lucide-react";

const manifestoPoints = [
  {
    id: "01",
    title: "One Patient — One Journey",
    body: "Setiap pasien memiliki cerita. RonaOS memastikan seluruh perjalanan tersebut tetap utuh—mulai dari assessment, medical records, treatment, products, after care, hingga follow-up.",
    icon: Stethoscope,
  },
  {
    id: "02",
    title: "Every Appointment Has Value",
    body: "Melalui Smart Booking, pembayaran terintegrasi, dan konfirmasi otomatis, RonaOS membantu memastikan setiap jadwal benar-benar bernilai—lebih sedikit no-show, lebih banyak kepastian.",
    icon: Clock,
  },
  {
    id: "03",
    title: "Care Beyond The Clinic",
    body: "AI Post-Care membantu klinik tetap hadir melalui edukasi, monitoring perkembangan, pengingat, hingga rekomendasi treatment berikutnya. Loyalitas sejati dibangun setelah pasien pulang.",
    icon: HeartHandshake,
  },
  {
    id: "04",
    title: "One Intelligence, Every Department",
    body: "AI memahami SOP klinik, riwayat treatment, data pasien, inventory, performa dokter, transaksi, hingga revenue. Semakin lama digunakan, semakin dalam pemahamannya.",
    icon: BrainCircuit,
  },
  {
    id: "05",
    title: "Designed Around Your Brand",
    body: "Pasien mengenal brand Anda, bukan brand kami. Seluruhnya dibangun menggunakan identitas klinik Anda secara eksklusif. Invisible technology, visible excellence.",
    icon: Sparkles,
  },
  {
    id: "06",
    title: "Enterprise by Design",
    body: "Keamanan, kecepatan, dan reliabilitas dirancang sejak awal—bukan fitur tambahan, melainkan fondasi utama. Klinik premium butuh infrastruktur yang mutlak dapat dipercaya.",
    icon: ShieldCheck,
  },
  {
    id: "07",
    title: "Intelligence Everywhere",
    body: "AI bukan fitur sisipan, melainkan fondasi dari setiap keputusan. Dari AI Assessment hingga business intelligence—semuanya saling terhubung dalam satu intelligence layer.",
    icon: Shield,
  },
];

/* ─── Desktop: Horizontal Scroll-Jacking ─── */
function DesktopManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 7 cards × 340px + gaps + left panel ≈ need to shift ~2800px total
  // We translate the card track from 0 to roughly -(totalWidth - viewport)
  // Using percentage of the flex container works best
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section
      ref={sectionRef}
      className="hidden md:block bg-[#030712] relative"
      style={{ height: "300vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Card track: title + cards in one horizontal flex container */}
        <motion.div
          style={{ x }}
          className="flex items-center will-change-transform"
        >
          {/* Left Panel: Title */}
          <div className="w-[45vw] shrink-0 px-12 lg:px-20 flex flex-col justify-center items-center text-center">
            <div className="max-w-lg flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.25em] text-yellow-600 uppercase mb-6 block">
                THE RonaOS MANIFESTO
              </span>
              <h2 className="text-5xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight uppercase">
                Excellence is an{" "}
                <i className="text-yellow-500 font-light normal-case">
                  Architecture.
                </i>
              </h2>
            </div>
            <p className="text-lg text-slate-400 max-w-sm leading-relaxed mt-6 mx-auto">
              Tujuh pilar fundamental yang menjadi fondasi setiap keputusan di
              dalam ekosistem RonaOS.
            </p>
          </div>

          {/* Cards */}
          <div className="flex gap-5 pr-[20vw] items-center">
            {manifestoPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.id}
                  className="w-[340px] shrink-0 bg-[#0B1120] border border-slate-800/60 p-8 rounded-3xl hover:border-slate-600 transition-all duration-300 group flex flex-col min-h-[420px] relative overflow-hidden cursor-default"
                >
                  {/* Ambient corner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-[40px] group-hover:bg-white/[0.06] transition-colors" />

                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center justify-center text-white mb-8 group-hover:border-slate-700 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-yellow-500 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white uppercase tracking-wide mb-4 leading-snug pr-4">
                    {point.title}
                  </h3>

                  {/* Body */}
                  <p className="text-slate-400 text-sm leading-relaxed font-light flex-grow">
                    {point.body}
                  </p>

                  {/* Footer */}
                  <div className="pt-6 border-t border-slate-800/60 mt-6">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[9px] font-bold text-slate-600 tracking-[0.2em] uppercase">
                        RONAOS CORE {point.id}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-900/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
      </div>
    </section>
  );
}

/* ─── Mobile: Simple Vertical Grid ─── */
function MobileManifesto() {
  return (
    <section className="block md:hidden bg-[#030712] py-20 px-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-[10px] font-bold tracking-[0.25em] text-yellow-600 uppercase mb-4 block">
          THE RonaOS MANIFESTO
        </span>
        <h2 className="text-3xl font-serif text-white tracking-tight leading-tight">
          Excellence is an{" "}
          <i className="text-yellow-500 font-light">Architecture.</i>
        </h2>
        <p className="text-sm text-slate-500 max-w-xs leading-relaxed mt-4 mx-auto">
          Tujuh pilar fundamental yang menjadi fondasi setiap keputusan di dalam
          ekosistem RonaOS.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {manifestoPoints.map((point) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-[#0B1120] border border-slate-800/60 p-6 rounded-2xl flex flex-col min-h-[200px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] blur-[30px]" />

              <div className="w-10 h-10 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-center text-white mb-4">
                <Icon className="w-4 h-4 text-slate-300" />
              </div>

              <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2 leading-snug">
                {point.title}
              </h3>

              <p className="text-slate-400 text-xs leading-relaxed font-light flex-grow">
                {point.body}
              </p>

              <div className="pt-4 border-t border-slate-800/60 mt-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-600/40 rounded-full" />
                  <span className="text-[8px] font-bold text-slate-600 tracking-[0.2em] uppercase">
                    RONAOS CORE {point.id}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export default function ManifestoSection() {
  return (
    <>
      <DesktopManifesto />
      <MobileManifesto />
    </>
  );
}
