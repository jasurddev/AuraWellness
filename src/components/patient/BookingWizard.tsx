"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Calendar as CalendarIcon, Clock, Leaf, ExternalLink } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { MOCK_TREATMENTS, MOCK_DOCTORS } from '@/lib/mockData';
import Link from 'next/link';

export function BookingWizard({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
  const [step, setStep] = useState(1);
  const { setBookingData, bookingData } = useStore();

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="h-full flex flex-col bg-[#F9F8F6] relative">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-md z-20">
        <button 
          onClick={() => step === 1 ? onBack() : setStep(step - 1)} 
          className="p-2 -ml-2 rounded-full hover:bg-secondary text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="font-serif font-medium text-primary">
          {step === 1 ? 'Select Treatment' : step === 2 ? 'Choose Expert' : step === 3 ? 'Schedule' : 'Secure Checkout'}
        </div>
        <div className="w-9 text-xs font-medium text-muted-foreground">{step}/4</div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 mb-6">
        <div className="h-1 bg-border/50 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: '25%' }}
            animate={{ width: `${(step / 4) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex-1 px-6 pb-24 overflow-y-auto scrollbar-hide">
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
                    <div className="flex-1">
                      <h4 className="font-medium text-primary text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">{doc.specialty}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full w-fit">
                          <Leaf className="w-3 h-3" /> Expert
                        </div>
                        <Link 
                          href={`/doctor/${doc.slug}`} 
                          target="_blank" 
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-[10px] font-medium text-primary bg-secondary/80 hover:bg-secondary px-2 py-0.5 rounded-full w-fit transition-colors"
                        >
                          View Profile <ExternalLink className="w-3 h-3" />
                        </Link>
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

          {/* STEP 4: Payment */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 flex flex-col items-center pt-4"
            >
              <div className="text-center mb-2">
                <h3 className="text-xl font-serif text-primary mb-1">Down Payment</h3>
                <p className="text-sm text-muted-foreground">Selesaikan pembayaran untuk mengonfirmasi jadwal Anda.</p>
              </div>
              
              <div className="glass-panel w-full rounded-3xl p-6 flex flex-col items-center border border-border/50 shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Total DP (20%)</div>
                <div className="text-3xl font-serif text-primary mb-6 text-accent">Rp 250.000</div>
                
                <div className="w-48 h-48 border-[6px] border-slate-900 rounded-2xl flex items-center justify-center relative mb-6 shadow-sm bg-white">
                  <div className="w-24 h-24 bg-slate-900 rounded-sm"></div>
                  {/* Decorative corners */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[6px] border-l-[6px] border-yellow-400"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-[6px] border-r-[6px] border-yellow-400"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-[6px] border-l-[6px] border-yellow-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[6px] border-r-[6px] border-yellow-400"></div>
                </div>
                
                <div className="w-full bg-white rounded-xl p-3 border border-border/40 text-center mb-2">
                   <p className="text-xs text-primary font-medium">Aura Aesthetics - Kemang</p>
                   <p className="text-[10px] text-muted-foreground mt-0.5">NMID: ID1029384756</p>
                </div>
                <p className="text-[10px] text-muted-foreground text-center">Scan QRIS ini menggunakan m-BCA, GoPay, OVO, atau Dana.</p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-10 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6] to-transparent z-30">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-primary text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {step === 4 ? 'Saya Sudah Bayar' : step === 3 ? 'Continue to Payment' : 'Continue'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
