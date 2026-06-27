"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScanFace } from 'lucide-react';

const PATIENTS = [
  {
    id: 1,
    image: '/images/face_acne.png',
    name: 'Patient A',
    concerns: ['Acne Vulgaris', 'Mild Inflammation'],
    metrics: { acne: 75, dehydration: 40, pigmentation: 20, wrinkles: 15 },
  },
  {
    id: 2,
    image: '/images/face_freckles.png',
    name: 'Patient B',
    concerns: ['Noticeable Freckling', 'Pigmentation'],
    metrics: { acne: 5, dehydration: 25, pigmentation: 80, wrinkles: 10 },
  },
  {
    id: 3,
    image: '/images/face_dry.png',
    name: 'Patient C',
    concerns: ['Severe Dehydration', 'Extreme Dryness'],
    metrics: { acne: 10, dehydration: 90, pigmentation: 15, wrinkles: 5 },
  },
];

// Odometer Component for animating numbers
const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(0);
    const duration = 1500; // 1.5s
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

export default function LiveAIScannerDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Start scanning
      setIsScanning(true);
      
      // Wait for scan animation to finish (2s)
      await new Promise(r => setTimeout(r, 2000));
      setIsScanning(false);
      
      // Show results for 5s
      await new Promise(r => setTimeout(r, 5000));
      
      // Move to next patient
      setCurrentIndex((prev) => (prev + 1) % PATIENTS.length);
    };

    sequence();
  }, [currentIndex]);

  const patient = PATIENTS[currentIndex];

  const getScoreColor = (score: number) => {
    if (score <= 30) return 'text-green-600 bg-green-50 border-green-200';
    if (score <= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="relative w-full max-w-sm mx-auto bg-[#F9F8F6] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-900 h-[700px] flex flex-col group">
      
      {/* Top Header like a phone */}
      <div className="pt-8 pb-4 px-6 flex items-center justify-center bg-white z-20 relative shadow-sm">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full"></div>
        <div className="font-serif font-medium text-slate-900 flex items-center gap-2 mt-4">
          <ScanFace className="w-5 h-5 text-yellow-600" /> Live AI Analysis
        </div>
      </div>

      {/* Image Area with Laser */}
      <div className="relative h-[300px] w-full bg-slate-200 overflow-hidden shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={patient.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <Image 
              src={patient.image} 
              alt={patient.name} 
              fill 
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Laser Scanner Animation */}
        {isScanning && (
          <motion.div
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-yellow-400 shadow-[0_0_20px_4px_rgba(250,204,21,0.5)] z-10"
          />
        )}
      </div>

      {/* Results Area */}
      <div className="flex-1 bg-white p-6 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isScanning && (
            <motion.div
              key={`result-${patient.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col h-full"
            >
              <div className="mb-4">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Identified Concerns</div>
                <div className="flex flex-wrap gap-2">
                  {patient.concerns.map(c => (
                    <span key={c} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { label: 'Acne Score', value: patient.metrics.acne },
                  { label: 'Dehydration', value: patient.metrics.dehydration },
                  { label: 'Pigmentation', value: patient.metrics.pigmentation },
                  { label: 'Wrinkles', value: patient.metrics.wrinkles }
                ].map((metric) => (
                  <div key={metric.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100 shadow-sm">
                    <div className="text-[11px] text-slate-500 mb-2 font-medium">{metric.label}</div>
                    <div className={`font-bold text-lg inline-block px-2 py-0.5 rounded-lg border ${getScoreColor(metric.value)}`}>
                      <AnimatedNumber value={metric.value} />
                      <span className="text-xs font-normal opacity-70">/100</span>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {isScanning && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-20">
            <div className="w-10 h-10 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-medium text-slate-600 animate-pulse">Running AI Model...</p>
          </div>
        )}
      </div>

    </div>
  );
}
