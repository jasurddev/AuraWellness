"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const coresData = [
  {
    id: "ai",
    label: "01 / AI CORE",
    title: "Clinical Intelligence.",
    description: "Bukan sekadar scanner wajah. Core ini membaca histori, SOP, pain points, dan lifestyle pasien untuk menghasilkan diagnosis serta rekomendasi treatment yang presisi.",
    image: "/images/bento-ai-scanner.png"
  },
  {
    id: "clinical",
    label: "02 / CLINICAL CORE",
    title: "The Living Record.",
    description: "Arsitektur pengelola pasien dan dokter. Rekam medis yang secure, encrypted, dan terus berevolusi seiring dengan setiap treatment pasien Anda.",
    image: "/images/bento-emr-system.png"
  },
  {
    id: "growth",
    label: "03 / GROWTH CORE",
    title: "Frictionless Conversion.",
    description: "Infrastruktur pencetak revenue Anda. Memaksimalkan booking, mengeliminasi no-shows dengan presisi, dan memberikan pengalaman transaksi semulus aplikasi B2C.",
    image: "/images/bento-smart-booking.png"
  },
  {
    id: "business",
    label: "04 / BUSINESS CORE",
    title: "Absolute Clarity.",
    description: "One Source of Truth untuk optimasi profit. Pantau revenue, demografi pasien, hingga pergerakan inventory dengan visualisasi tingkat tinggi.",
    image: "/images/bento-analytics.png"
  }
];

export default function FourCoresAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#F9F8F6] border border-slate-200/60 p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
      
      {/* Left Column: Accordion List */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <div className="space-y-2">
          {coresData.map((core, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={core.id} 
                className={`border-b border-slate-200 last:border-0 overflow-hidden transition-all duration-300 ${isActive ? 'pb-8 pt-4' : 'py-6'}`}
              >
                <button 
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left flex items-center justify-between group outline-none"
                >
                  <div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase block mb-2 transition-colors duration-300 ${isActive ? 'text-yellow-600' : 'text-slate-400 group-hover:text-yellow-600'}`}>
                      {core.label}
                    </span>
                    <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700'}`}>
                      {core.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 shrink-0 transition-transform duration-500 ${isActive ? 'rotate-180 text-yellow-600' : 'text-slate-300 group-hover:text-yellow-600'}`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <p className="pt-6 text-slate-600 leading-relaxed font-sans pr-4">
                        {core.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Image Display */}
      <div className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-white border border-slate-200/60 overflow-hidden flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image 
              src={coresData[activeIndex].image} 
              alt={coresData[activeIndex].title}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
