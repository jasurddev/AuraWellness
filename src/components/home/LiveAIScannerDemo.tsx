"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScanFace, ArrowLeft, ChevronRight } from 'lucide-react';

const PATIENTS = [
  {
    id: 1,
    image: '/images/face_acne.png',
    name: 'Patient A',
    concerns: ['Acne Vulgaris', 'Inflammation'],
    metrics: { acne: 75, dehydration: 40, pigmentation: 20, wrinkles: 15 },
    treatment: 'Holistic Acne Clear',
  },
  {
    id: 2,
    image: '/images/face_freckles.png',
    name: 'Patient B',
    concerns: ['Noticeable Freckles', 'Uneven Tone'],
    metrics: { acne: 5, dehydration: 25, pigmentation: 80, wrinkles: 10 },
    treatment: 'Pigmentation Laser',
  },
  {
    id: 3,
    image: '/images/face_dry.png',
    name: 'Patient C',
    concerns: ['Severe Dehydration', 'Flaky Skin'],
    metrics: { acne: 10, dehydration: 90, pigmentation: 15, wrinkles: 5 },
    treatment: 'Deep Hydration Facial',
  },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(0);
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += value / steps;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

const ScannerPhone = ({ patient }: { patient: typeof PATIENTS[0] }) => {
  const [step, setStep] = useState<'scanning' | 'results'>('scanning');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep('results');
    }, 3500); // 3.5 seconds of scanning
    return () => clearTimeout(timer);
  }, []);

  const getScoreColor = (score: number) => {
    if (score <= 30) return 'text-green-600 bg-green-50 border-green-200';
    if (score <= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: -50 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      className="relative w-[320px] shrink-0 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-white/50 h-[650px] flex flex-col group snap-center"
    >
      {/* Top Header (Phone Notch & App Header) */}
      <div className="pt-6 pb-4 px-6 flex items-center justify-between bg-transparent z-20 relative border-b border-white/40">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-xl z-30"></div>
        <ArrowLeft className="w-5 h-5 text-slate-400 mt-4" />
        <div className="font-serif font-medium text-slate-800 mt-4 text-sm">Holistic AI Scan</div>
        <div className="w-5" />
      </div>

      <div className="flex-1 relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          
          {step === 'scanning' && (
            <motion.div 
              key="scanning"
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center w-full mt-10 px-6"
            >
              {/* Circle Image Wrapper */}
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-slate-200">
                <Image 
                  src={patient.image} 
                  alt={patient.name} 
                  fill 
                  className="object-cover"
                />
                
                {/* Laser Line inside circle */}
                <motion.div
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                  className="absolute left-0 right-0 h-[2px] bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] z-10"
                />
                <motion.div
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/30 z-0 -translate-y-full"
                />
              </div>

              <h3 className="mt-12 text-xl font-serif text-slate-800">Menganalisa Holistik...</h3>
              <p className="mt-2 text-xs text-slate-500 text-center leading-relaxed">
                Mengkombinasikan data stres, tidur, dan tekstur kulit Anda.
              </p>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col w-full h-full pb-4"
            >
              <div className="px-6 flex items-center gap-3 mb-6 mt-2">
                <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center">
                  <ScanFace className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-800 leading-none">Holistic Result</h3>
                  <p className="text-[10px] text-slate-500 mt-1">Kondisi Anda saat ini</p>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-md mx-4 rounded-2xl p-4 shadow-sm border border-white/60 mb-4 flex-1">
                <div className="text-xs text-slate-800 font-medium mb-3">Identified Concerns</div>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Acne Score', value: patient.metrics.acne },
                    { label: 'Dehydration', value: patient.metrics.dehydration },
                    { label: 'Pigmentation', value: patient.metrics.pigmentation },
                    { label: 'Wrinkles', value: patient.metrics.wrinkles }
                  ].map((metric) => (
                    <div key={metric.label} className="bg-white rounded-xl p-2 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                      <div className="text-[10px] text-slate-500 mb-1">{metric.label}</div>
                      <div className={`font-semibold text-sm inline-block px-1.5 py-0.5 rounded-md border ${getScoreColor(metric.value)}`}>
                        <AnimatedNumber value={metric.value} /><span className="text-[10px] font-normal opacity-70">/100</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {patient.concerns.map(c => (
                    <span key={c} className="px-2.5 py-1 bg-[#F9F8F6] text-slate-600 text-[10px] rounded-full font-medium border border-slate-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4 mt-auto">
                <div className="text-xs font-medium text-slate-800 mb-2 px-1">Rekomendasi Treatment</div>
                <div className="bg-white/50 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-white/60 flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden relative shrink-0">
                    <Image src="/images/bento-smart-booking.png" alt="Treatment" fill className="object-cover opacity-80" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 line-clamp-1">{patient.treatment}</div>
                    <div className="text-[9px] text-slate-500 mt-0.5 line-clamp-1">Perawatan optimal untuk hasil maksimal.</div>
                  </div>
                </div>
                
                <button className="w-full mt-3 py-3.5 bg-[#4A5542] hover:bg-[#3D4736] text-white text-[11px] font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors">
                  Book Recommended Treatment <ChevronRight className="w-3 h-3" />
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function LiveAIScannerDemo() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    // If 3 phones are visible, wait 10 seconds before resetting. Otherwise wait 7 seconds.
    const delay = visibleCount >= 3 ? 10000 : 7000;
    
    const timer = setTimeout(() => {
      setVisibleCount(prev => {
        if (prev >= 3) {
          // Reset back to 1 phone, increment loopCount to force remount
          setLoopCount(c => c + 1);
          return 1;
        }
        return prev + 1;
      });
    }, delay); 
    return () => clearTimeout(timer);
  }, [visibleCount, loopCount]);

  return (
    <div className="w-full relative pt-12 md:pt-20 pb-4 md:pb-8 mt-10 md:mt-0 overflow-hidden">
      
      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Container */}
      <div className="w-full mx-auto relative z-10">
        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 px-6 md:px-0 md:justify-center items-center pb-4 scrollbar-hide w-full">
          <AnimatePresence>
            {PATIENTS.slice(0, visibleCount).map((patient) => (
              <ScannerPhone key={`${patient.id}-${loopCount}`} patient={patient} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
