"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Calendar as CalendarIcon, Clock, Leaf } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { MOCK_TREATMENTS, MOCK_DOCTORS } from '@/lib/mockData';

export function BookingWizard({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
  const [step, setStep] = useState(1);
  const { setBookingData, bookingData } = useStore();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="min-h-full flex flex-col bg-[#F9F8F6]">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-md z-20">
        <button 
          onClick={() => step === 1 ? onBack() : setStep(step - 1)} 
          className="p-2 -ml-2 rounded-full hover:bg-secondary text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="font-serif font-medium text-primary">
          {step === 1 ? 'Select Treatment' : step === 2 ? 'Choose Expert' : 'Schedule'}
        </div>
        <div className="w-9 text-xs font-medium text-muted-foreground">{step}/3</div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 mb-6">
        <div className="h-1 bg-border/50 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: '33%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Treatments */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {MOCK_TREATMENTS.map(t => {
                const isSelected = bookingData.treatmentId === t.id;
                return (
                  <div 
                    key={t.id}
                    onClick={() => setBookingData({ treatmentId: t.id })}
                    className={`relative overflow-hidden rounded-2xl p-4 cursor-pointer transition-all border ${isSelected ? 'border-primary bg-white shadow-md' : 'border-border/40 bg-white/50 hover:bg-white'}`}
                  >
                    <div className="flex gap-4">
                      <img src={t.imageUrl} alt={t.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-primary text-sm">{t.name}</h4>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-primary" />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t.description}</p>
                        <div className="mt-2 text-sm font-semibold text-accent">{t.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* STEP 2: Doctors */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {MOCK_DOCTORS.map(doc => {
                const isSelected = bookingData.doctorId === doc.id;
                return (
                  <div 
                    key={doc.id}
                    onClick={() => setBookingData({ doctorId: doc.id })}
                    className={`relative rounded-2xl p-4 cursor-pointer transition-all border ${isSelected ? 'border-primary bg-white shadow-md' : 'border-border/40 bg-white/50 hover:bg-white'} flex items-center gap-4`}
                  >
                    <div className="relative">
                      <img src={doc.imageUrl} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                      {isSelected && (
                        <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">{doc.specialty}</p>
                      <div className="flex items-center gap-1 mt-1 text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full w-fit">
                        <Leaf className="w-3 h-3" /> Expert
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Date Selection */}
              <div>
                <h4 className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-accent" /> Select Date
                </h4>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {[1, 2, 3, 4, 5].map(day => {
                    const date = `2026-06-0${day}`;
                    const isSelected = bookingData.date === date;
                    return (
                      <div
                        key={day}
                        onClick={() => setBookingData({ date })}
                        className={`flex-shrink-0 w-16 p-3 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all border ${isSelected ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-border/50 text-primary'}`}
                      >
                        <span className="text-xs opacity-80 mb-1">Jun</span>
                        <span className="text-lg font-serif font-medium">0{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h4 className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" /> Select Time
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {['09:00', '10:30', '13:00', '14:30', '16:00', '17:30'].map(time => {
                    const isSelected = bookingData.time === time;
                    return (
                      <div
                        key={time}
                        onClick={() => setBookingData({ time })}
                        className={`py-2 text-center rounded-xl cursor-pointer text-sm font-medium transition-all border ${isSelected ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-border/50 text-primary'}`}
                      >
                        {time}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 w-full max-w-[400px] p-6 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6] to-transparent z-30">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-primary text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {step === 3 ? 'Confirm Booking' : 'Continue'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
