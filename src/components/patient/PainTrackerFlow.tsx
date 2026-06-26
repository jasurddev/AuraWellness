"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, ChevronRight, Check } from 'lucide-react';
import { useStore } from '@/store/useStore';

const BODY_PARTS = [
  { id: 'neck', name: 'Leher', top: '15%', left: '50%' },
  { id: 'shoulders', name: 'Bahu', top: '22%', left: '50%' },
  { id: 'upper_back', name: 'Punggung Atas', top: '35%', left: '50%' },
  { id: 'lower_back', name: 'Pinggang', top: '55%', left: '50%' },
];

export function PainTrackerFlow({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
  const { painAreas, togglePainArea, setBookingData } = useStore();

  const handleProceed = () => {
    // Pre-fill booking with a pain management treatment (e.g., t3)
    setBookingData({ treatmentId: 't3' });
    onComplete();
  };

  return (
    <div className="h-full flex flex-col bg-[#F9F8F6] relative">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-md z-20">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-secondary text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="font-serif font-medium text-primary">Pain Tracker</div>
        <div className="w-9" />
      </div>

      <div className="flex-1 px-6 pb-24 overflow-y-auto scrollbar-hide">
        <div className="mb-6">
          <h2 className="text-2xl font-serif text-primary mb-2">Area Keluhan</h2>
          <p className="text-sm text-muted-foreground">Ketuk area tubuh yang terasa kaku atau nyeri. Kami akan merekomendasikan terapi yang tepat.</p>
        </div>

        {/* Interactive Body Map */}
        <div className="relative w-full h-[400px] bg-white rounded-3xl shadow-sm border border-border/50 flex items-center justify-center overflow-hidden mb-6">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            {/* Minimalist Abstract Body Silhouette */}
            <svg viewBox="0 0 100 250" className="h-full w-auto" fill="currentColor">
               <path d="M50 10 C40 10 35 18 35 25 C35 32 40 38 45 40 C35 42 20 45 15 60 C10 75 12 110 15 130 C18 150 25 240 25 240 L40 240 L45 140 L55 140 L60 240 L75 240 C75 240 82 150 85 130 C88 110 90 75 85 60 C80 45 65 42 55 40 C60 38 65 32 65 25 C65 18 60 10 50 10 Z" />
            </svg>
          </div>

          {/* Interactive Dots */}
          {BODY_PARTS.map((part) => {
            const isSelected = painAreas.includes(part.id);
            return (
              <motion.button
                key={part.id}
                onClick={() => togglePainArea(part.id)}
                whileTap={{ scale: 0.9 }}
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: part.top, left: part.left }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${isSelected ? 'bg-primary/90 text-white shadow-lg scale-110' : 'bg-white/80 text-primary border border-primary/20 shadow-sm'}`}>
                  {isSelected ? <Check className="w-5 h-5" /> : <Activity className="w-5 h-5 opacity-50" />}
                </div>
                <div className={`mt-2 text-xs font-medium px-2 py-1 rounded-full transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-white text-primary shadow-sm'}`}>
                  {part.name}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selection Summary */}
        {painAreas.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-4 rounded-2xl">
            <h4 className="text-sm font-medium text-primary mb-2">Area Terpilih:</h4>
            <div className="flex flex-wrap gap-2">
              {painAreas.map(id => {
                const part = BODY_PARTS.find(p => p.id === id);
                return (
                  <span key={id} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary border border-border/50 shadow-sm">
                    {part?.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-10 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6] to-transparent z-30">
        <button
          onClick={handleProceed}
          disabled={painAreas.length === 0}
          className="w-full py-4 bg-primary text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          Cari Terapi Relief <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
