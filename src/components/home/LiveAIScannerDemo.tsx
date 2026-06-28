"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScanFace, ArrowLeft, ChevronRight, Activity, Calendar, Stethoscope, Sparkles, BarChart3, Clock, TrendingUp } from 'lucide-react';

const getScoreColor = (score: number) => {
  if (score <= 30) return 'text-green-600 bg-green-50 border-green-200';
  if (score <= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  return 'text-red-600 bg-red-50 border-red-200';
};

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

const MockupContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative w-[260px] lg:w-[280px] shrink-0 bg-white/70 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] border-white/50 h-[560px] lg:h-[600px] flex flex-col snap-center"
  >
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-xl z-30"></div>
    {children}
  </motion.div>
);

const PatientScannerMockup = ({ loopKey }: { loopKey: number }) => {
  const [step, setStep] = useState<'scanning' | 'results'>('scanning');

  useEffect(() => {
    setStep('scanning');
    const timer = setTimeout(() => setStep('results'), 3500);
    return () => clearTimeout(timer);
  }, [loopKey]);

  return (
    <MockupContainer>
      <div className="pt-8 pb-4 px-6 flex items-center justify-between border-b border-white/40 bg-white/30 z-20 relative">
        <ArrowLeft className="w-5 h-5 text-slate-400" />
        <div className="font-serif font-medium text-slate-800 text-sm">Patient App (AI)</div>
        <div className="w-5" />
      </div>

      <div className="flex-1 overflow-y-auto pb-6 scrollbar-hide relative flex flex-col">
        <AnimatePresence mode="wait">
          {step === 'scanning' && (
            <motion.div 
              key="scanning"
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center w-full mt-10 px-6 absolute inset-0 z-10"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-slate-200">
                <Image src="/images/face_acne.png" alt="Patient" fill className="object-cover" />
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
                
                {/* Advanced Facial Tracking Effect */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <motion.div
                    animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-4 border-2 border-white/20 rounded-full"
                    style={{ clipPath: 'polygon(0 0, 20% 0, 20% 100%, 0 100%, 0 0, 100% 0, 100% 20%, 0 20%, 0 80%, 100% 80%, 100% 100%, 80% 100%, 80% 0)' }}
                  />
                  {[
                    { top: '35%', left: '35%' }, { top: '35%', right: '35%' }, 
                    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, 
                    { top: '65%', left: '40%' }, { top: '65%', right: '40%' }, 
                    { top: '45%', left: '20%' }, { top: '45%', right: '20%' }, 
                    { top: '80%', left: '50%', transform: 'translate(-50%, 0)' }, 
                  ].map((pos, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0.5, 1, 0], scale: [0, 1.2, 1, 1.2, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3, times: [0, 0.2, 0.5, 0.8, 1] }}
                      className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_8px_#facc15]"
                      style={pos}
                    >
                      <div className="absolute inset-0 w-full h-full border border-yellow-400 rounded-full animate-ping opacity-50" />
                    </motion.div>
                  ))}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full"
                  />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-serif text-slate-800">Menganalisa Holistik...</h3>
              <p className="mt-2 text-[10px] text-slate-500 text-center leading-relaxed animate-pulse">
                Mengkombinasikan data stres, tidur, dan tekstur kulit Anda.
              </p>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 pt-4"
            >
              <div className="px-6 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center">
                  <ScanFace className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-800 leading-none">Holistic Result</h3>
                  <p className="text-[10px] text-slate-500 mt-1">Kondisi Anda saat ini</p>
                </div>
              </div>

              <div className="px-4 mb-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                  className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2"
                >
                  <Activity className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] font-medium text-amber-900">Holistic Insight</h4>
                    <p className="text-[9px] text-amber-700 mt-1 leading-relaxed">Tingkat stres tinggi (4/5) dan kurang tidur (2/5) memicu peningkatan sebum dan memperburuk inflamasi jerawat.</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-white/50 backdrop-blur-md mx-4 rounded-xl p-3 shadow-sm border border-white/60 mb-4">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-[11px] text-slate-800 font-medium">Identified Concerns</div>
                   <div className="text-[9px] font-bold bg-accent/20 text-accent px-2 py-0.5 rounded-full">AI Confidence: 92%</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { label: 'Acne', value: 65, delay: 0.3 },
                    { label: 'Scarring', value: 30, delay: 0.4 },
                    { label: 'Pigmentation', value: 55, delay: 0.5 },
                    { label: 'Dehydration', value: 50, delay: 0.6 },
                    { label: 'Texture', value: 60, delay: 0.7 },
                    { label: 'Oiliness', value: 70, delay: 0.8 }
                  ].map(m => (
                    <motion.div 
                      key={m.label} 
                      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: m.delay }}
                      className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm"
                    >
                       <div className="text-[9px] text-slate-500 mb-1">{m.label}</div>
                       <div className={`font-semibold text-xs inline-block px-1.5 py-0.5 rounded border ${getScoreColor(m.value)}`}>
                         <AnimatedNumber value={m.value} /><span className="text-[8px] font-normal opacity-70">/100</span>
                       </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                   {['Moderate Acne', 'PIH', 'Sebum Excess'].map((c, i) => (
                     <motion.span 
                       key={c} 
                       initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + (i * 0.1) }}
                       className="px-2 py-0.5 bg-[#F9F8F6] text-slate-600 text-[9px] rounded-full font-medium border border-slate-200"
                     >
                       {c}
                     </motion.span>
                   ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                className="px-4"
              >
                 <div className="text-[11px] font-medium text-slate-800 mb-2 px-1">Rekomendasi Treatment</div>
                 <div className="bg-white/50 p-2.5 rounded-xl border border-white/60 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 relative shrink-0">
                       <Image src="/images/bento-smart-booking.png" fill alt="treatment" className="object-cover opacity-80" />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold text-slate-800">Acne Peeling Series</div>
                       <div className="text-[8px] text-slate-500">Meredakan inflamasi & kontrol minyak</div>
                    </div>
                 </div>
                 
                 <button className="w-full mt-3 py-3 bg-[#4A5542] text-white text-[10px] font-medium rounded-lg flex justify-center items-center gap-2">Book Treatment <ChevronRight className="w-3 h-3"/></button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MockupContainer>
  );
};

const FrontdeskMockup = ({ loopKey }: { loopKey: number }) => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 border-b border-white/40 flex justify-between items-center bg-white/30">
      <div className="font-serif font-medium text-slate-800 text-sm">Frontdesk Portal</div>
      <Calendar className="w-4 h-4 text-slate-400" />
    </div>
    <div className="p-4 bg-slate-50/50 flex-1">
      <div className="text-[10px] font-medium text-slate-500 mb-3 flex items-center justify-between">
        <span>Today, 28 Jun 2026</span>
        <motion.span 
          key={loopKey}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
          className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-[8px] font-bold"
        >
          12 Appointments
        </motion.span>
      </div>
      <div className="space-y-2">
        <motion.div key={`fd1-${loopKey}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white p-3 rounded-xl border-l-4 border-l-accent shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1"><Clock className="w-3 h-3"/> 09:00 AM</div>
            <div className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Checked In</div>
          </div>
          <div className="text-[11px] font-medium text-slate-800 mt-2">Sarah Johnson</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Laser Fractional • Dr. Emily</div>
        </motion.div>
        
        <motion.div key={`fd2-${loopKey}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white p-3 rounded-xl border-l-4 border-l-yellow-400 shadow-sm relative overflow-hidden opacity-70">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1"><Clock className="w-3 h-3"/> 10:30 AM</div>
            <div className="text-[8px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-bold">Waiting</div>
          </div>
          <div className="text-[11px] font-medium text-slate-800 mt-2">Michael Chen</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Acne Consultation • Dr. Sarah</div>
        </motion.div>
        
        <motion.div key={`fd3-${loopKey}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-white p-3 rounded-xl border-l-4 border-l-slate-300 shadow-sm relative overflow-hidden opacity-50">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1"><Clock className="w-3 h-3"/> 13:00 PM</div>
            <div className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">Scheduled</div>
          </div>
          <div className="text-[11px] font-medium text-slate-800 mt-2">Amanda Putri</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Hydrafacial • Nurse Linda</div>
        </motion.div>
      </div>
      
      <motion.div key={`fd4-${loopKey}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-6">
         <div className="text-[10px] font-medium text-slate-800 mb-2">Quick Actions</div>
         <div className="grid grid-cols-2 gap-2">
            <button className="bg-white py-2 rounded-lg text-[9px] font-medium shadow-sm border border-slate-100 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all">Walk-in Patient</button>
            <button className="bg-white py-2 rounded-lg text-[9px] font-medium shadow-sm border border-slate-100 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all">Process Payment</button>
         </div>
      </motion.div>
    </div>
  </MockupContainer>
);

const DoctorEMRMockup = ({ loopKey }: { loopKey: number }) => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 border-b border-white/40 flex justify-between items-center bg-white/30">
      <div className="font-serif font-medium text-slate-800 text-sm">Doctor EMR</div>
      <Stethoscope className="w-4 h-4 text-slate-400" />
    </div>
    <div className="p-4 bg-slate-50/50 flex-1 space-y-3">
      <motion.div key={`emr1-${loopKey}`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-3 rounded-xl shadow-sm flex gap-3 items-center border border-slate-100">
        <div className="w-10 h-10 bg-slate-200 rounded-full shrink-0"></div>
        <div>
          <div className="text-[11px] font-bold text-slate-800">Sarah Johnson</div>
          <div className="text-[9px] text-slate-500">ID: P-9821 • Female • 28yo</div>
        </div>
      </motion.div>
      
      <motion.div 
        key={`emr2-${loopKey}`} 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} 
        className="bg-blue-50 border border-blue-100 rounded-xl p-3 shadow-sm relative overflow-hidden"
      >
        <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        <div className="text-[10px] font-bold text-blue-900 mb-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3"/> AI Pre-Assessment
        </div>
        <p className="text-[9px] text-blue-800 leading-relaxed">
          High stress level detected. AI suggests adding Hydration therapy to the Laser Fractional session due to a 50/100 dehydration score and recent sleep deprivation.
        </p>
      </motion.div>

      <motion.div key={`emr3-${loopKey}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
        <div className="text-[10px] font-medium text-slate-800 mb-2 border-b border-slate-50 pb-2">Treatment Plan</div>
        <div className="space-y-2 pt-1">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              <div className="text-[9px] font-medium text-slate-700">Laser Fractional (Face)</div>
           </motion.div>
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="text-[9px] font-medium text-slate-700">Hyaluronic Acid Infusion</div>
           </motion.div>
        </div>
      </motion.div>

      <motion.div key={`emr4-${loopKey}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
        <div className="text-[10px] font-medium text-slate-800 mb-2">Prescription</div>
        <div className="flex items-center justify-between border-b border-slate-50 pb-2 mb-2">
          <div className="text-[9px] text-slate-600">Salicylic Acid 2%</div>
          <div className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Night</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[9px] text-slate-600">Niacinamide 10%</div>
          <div className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Morning</div>
        </div>
      </motion.div>
      
      <motion.button key={`emr5-${loopKey}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="w-full mt-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-medium rounded-lg shadow-sm transition-all active:scale-95">Save Medical Record</motion.button>
    </div>
  </MockupContainer>
);

const AnalyticsMockup = ({ loopKey }: { loopKey: number }) => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 border-b border-white/40 flex justify-between items-center bg-white/30">
      <div className="font-serif font-medium text-slate-800 text-sm">Ops & Analytics</div>
      <BarChart3 className="w-4 h-4 text-slate-400" />
    </div>
    <div className="p-4 bg-slate-50/50 flex-1 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <motion.div key={`a1-${loopKey}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
          <div className="text-[9px] text-slate-500">Today's Revenue</div>
          <div className="text-sm font-bold text-slate-800 mt-1">Rp <AnimatedNumber value={12.5}/>M</div>
          <div className="text-[8px] font-medium text-green-600 mt-1 flex items-center gap-0.5"><TrendingUp className="w-2 h-2"/> 15% vs ytd</div>
        </motion.div>
        <motion.div key={`a2-${loopKey}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
          <div className="text-[9px] text-slate-500">Total Patients</div>
          <div className="text-sm font-bold text-slate-800 mt-1"><AnimatedNumber value={42}/></div>
          <div className="text-[8px] font-medium text-green-600 mt-1 flex items-center gap-0.5"><TrendingUp className="w-2 h-2"/> 5 new</div>
        </motion.div>
      </div>

      <motion.div key={`a3-${loopKey}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
        <div className="text-[10px] font-medium text-slate-800 mb-3">Popular Treatments</div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[9px] mb-1 font-medium text-slate-600"><span>Laser Fractional</span> <span>65%</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 1, delay: 0.8 }} className="bg-accent h-full rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[9px] mb-1 font-medium text-slate-600"><span>Acne Peeling</span> <span>45%</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ duration: 1, delay: 0.9 }} className="bg-amber-400 h-full rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[9px] mb-1 font-medium text-slate-600"><span>Hydrafacial</span> <span>30%</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} animate={{ width: '30%' }} transition={{ duration: 1, delay: 1.0 }} className="bg-blue-400 h-full rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div key={`a4-${loopKey}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="bg-red-50 p-3 rounded-xl shadow-sm border border-red-100 relative overflow-hidden">
         <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-red-400/20" />
         <div className="text-[10px] font-bold text-red-800 mb-1 flex items-center gap-1 relative z-10">Inventory Alert</div>
         <p className="text-[9px] text-red-700 relative z-10">Salicylic Acid 2% Serum is running low (12 units left). Reorder recommended to avoid stockout.</p>
      </motion.div>
    </div>
  </MockupContainer>
);

export default function LiveAIScannerDemo() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    // If 4 mockups are visible, wait longer before resetting. Otherwise wait 5 seconds.
    const delay = visibleCount >= 4 ? 12000 : 5000;
    
    const timer = setTimeout(() => {
      setVisibleCount(prev => {
        if (prev >= 4) {
          setLoopKey(c => c + 1);
          return 1;
        }
        return prev + 1;
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleCount, loopKey]);

  const mockups = [
    <PatientScannerMockup key={`patient-${loopKey}`} loopKey={loopKey} />,
    <FrontdeskMockup key={`fd-${loopKey}`} loopKey={loopKey} />,
    <DoctorEMRMockup key={`emr-${loopKey}`} loopKey={loopKey} />,
    <AnalyticsMockup key={`analytics-${loopKey}`} loopKey={loopKey} />
  ];

  return (
    <div className="w-full relative pt-12 md:pt-20 pb-12 md:pb-16 mt-10 md:mt-0 overflow-hidden">
      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Container */}
      <div className="w-full mx-auto max-w-[1400px] relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 md:justify-center items-center pb-8 scrollbar-hide w-full" style={{ scrollPaddingLeft: '24px' }}>
          <AnimatePresence mode="popLayout">
            {mockups.slice(0, visibleCount)}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
