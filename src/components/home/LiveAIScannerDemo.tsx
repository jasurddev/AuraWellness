"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScanFace, ArrowLeft, ChevronRight, Activity, Calendar, Stethoscope, Sparkles, BarChart3, Clock, TrendingUp } from 'lucide-react';

const getScoreColor = (score: number) => {
  if (score <= 30) return 'text-green-600 bg-green-50 border-green-200';
  if (score <= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  return 'text-red-600 bg-red-50 border-red-200';
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

const PatientScannerMockup = () => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 flex items-center justify-between border-b border-white/40 bg-white/30">
      <ArrowLeft className="w-5 h-5 text-slate-400" />
      <div className="font-serif font-medium text-slate-800 text-sm">Patient App (AI)</div>
      <div className="w-5" />
    </div>

    <div className="flex-1 overflow-y-auto pb-6 scrollbar-hide">
      <div className="px-6 flex items-center gap-3 mb-4 mt-4">
        <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center">
          <ScanFace className="w-5 h-5 text-slate-600" />
        </div>
        <div>
          <h3 className="font-serif text-lg text-slate-800 leading-none">Holistic Result</h3>
          <p className="text-[10px] text-slate-500 mt-1">Kondisi Anda saat ini</p>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2">
          <Activity className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[11px] font-medium text-amber-900">Holistic Insight</h4>
            <p className="text-[9px] text-amber-700 mt-1 leading-relaxed">Tingkat stres tinggi (4/5) dan kurang tidur (2/5) memicu peningkatan sebum dan memperburuk inflamasi jerawat.</p>
          </div>
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-md mx-4 rounded-xl p-3 shadow-sm border border-white/60 mb-4">
        <div className="flex justify-between items-center mb-3">
           <div className="text-[11px] text-slate-800 font-medium">Identified Concerns</div>
           <div className="text-[9px] font-bold bg-accent/20 text-accent px-2 py-0.5 rounded-full">AI Confidence: 92%</div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: 'Acne', value: 65 },
            { label: 'Scarring', value: 30 },
            { label: 'Pigmentation', value: 55 },
            { label: 'Dehydration', value: 50 },
            { label: 'Texture', value: 60 },
            { label: 'Oiliness', value: 70 }
          ].map(m => (
            <div key={m.label} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
               <div className="text-[9px] text-slate-500 mb-1">{m.label}</div>
               <div className={`font-semibold text-xs inline-block px-1.5 py-0.5 rounded border ${getScoreColor(m.value)}`}>
                 {m.value}<span className="text-[8px] font-normal opacity-70">/100</span>
               </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-1.5">
           {['Moderate Acne', 'PIH', 'Sebum Excess'].map(c => (
             <span key={c} className="px-2 py-0.5 bg-[#F9F8F6] text-slate-600 text-[9px] rounded-full font-medium border border-slate-200">{c}</span>
           ))}
        </div>
      </div>

      <div className="px-4">
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
      </div>
    </div>
  </MockupContainer>
);

const FrontdeskMockup = () => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 border-b border-white/40 flex justify-between items-center bg-white/30">
      <div className="font-serif font-medium text-slate-800 text-sm">Frontdesk Portal</div>
      <Calendar className="w-4 h-4 text-slate-400" />
    </div>
    <div className="p-4 bg-slate-50/50 flex-1">
      <div className="text-[10px] font-medium text-slate-500 mb-3 flex items-center justify-between">
        <span>Today, 28 Jun 2026</span>
        <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-[8px] font-bold">12 Appointments</span>
      </div>
      <div className="space-y-2">
        <div className="bg-white p-3 rounded-xl border-l-4 border-l-accent shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1"><Clock className="w-3 h-3"/> 09:00 AM</div>
            <div className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Checked In</div>
          </div>
          <div className="text-[11px] font-medium text-slate-800 mt-2">Sarah Johnson</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Laser Fractional • Dr. Emily</div>
        </div>
        
        <div className="bg-white p-3 rounded-xl border-l-4 border-l-yellow-400 shadow-sm relative overflow-hidden opacity-70">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1"><Clock className="w-3 h-3"/> 10:30 AM</div>
            <div className="text-[8px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-bold">Waiting</div>
          </div>
          <div className="text-[11px] font-medium text-slate-800 mt-2">Michael Chen</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Acne Consultation • Dr. Sarah</div>
        </div>
        
        <div className="bg-white p-3 rounded-xl border-l-4 border-l-slate-300 shadow-sm relative overflow-hidden opacity-50">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1"><Clock className="w-3 h-3"/> 13:00 PM</div>
            <div className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">Scheduled</div>
          </div>
          <div className="text-[11px] font-medium text-slate-800 mt-2">Amanda Putri</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Hydrafacial • Nurse Linda</div>
        </div>
      </div>
      
      <div className="mt-6">
         <div className="text-[10px] font-medium text-slate-800 mb-2">Quick Actions</div>
         <div className="grid grid-cols-2 gap-2">
            <button className="bg-white py-2 rounded-lg text-[9px] font-medium shadow-sm border border-slate-100 text-slate-700">Walk-in Patient</button>
            <button className="bg-white py-2 rounded-lg text-[9px] font-medium shadow-sm border border-slate-100 text-slate-700">Process Payment</button>
         </div>
      </div>
    </div>
  </MockupContainer>
);

const DoctorEMRMockup = () => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 border-b border-white/40 flex justify-between items-center bg-white/30">
      <div className="font-serif font-medium text-slate-800 text-sm">Doctor EMR</div>
      <Stethoscope className="w-4 h-4 text-slate-400" />
    </div>
    <div className="p-4 bg-slate-50/50 flex-1 space-y-3">
      <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3 items-center border border-slate-100">
        <div className="w-10 h-10 bg-slate-200 rounded-full shrink-0"></div>
        <div>
          <div className="text-[11px] font-bold text-slate-800">Sarah Johnson</div>
          <div className="text-[9px] text-slate-500">ID: P-9821 • Female • 28yo</div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 shadow-sm">
        <div className="text-[10px] font-bold text-blue-900 mb-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3"/> AI Pre-Assessment
        </div>
        <p className="text-[9px] text-blue-800 leading-relaxed">
          High stress level detected. AI suggests adding Hydration therapy to the Laser Fractional session due to a 50/100 dehydration score and recent sleep deprivation.
        </p>
      </div>

      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
        <div className="text-[10px] font-medium text-slate-800 mb-2 border-b border-slate-50 pb-2">Treatment Plan</div>
        <div className="space-y-2 pt-1">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <div className="text-[9px] font-medium text-slate-700">Laser Fractional (Face)</div>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <div className="text-[9px] font-medium text-slate-700">Hyaluronic Acid Infusion</div>
           </div>
        </div>
      </div>

      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
        <div className="text-[10px] font-medium text-slate-800 mb-2">Prescription</div>
        <div className="flex items-center justify-between border-b border-slate-50 pb-2 mb-2">
          <div className="text-[9px] text-slate-600">Salicylic Acid 2%</div>
          <div className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Night</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[9px] text-slate-600">Niacinamide 10%</div>
          <div className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Morning</div>
        </div>
      </div>
      
      <button className="w-full mt-2 py-2.5 bg-slate-900 text-white text-[10px] font-medium rounded-lg shadow-sm">Save Medical Record</button>
    </div>
  </MockupContainer>
);

const AnalyticsMockup = () => (
  <MockupContainer>
    <div className="pt-8 pb-4 px-6 border-b border-white/40 flex justify-between items-center bg-white/30">
      <div className="font-serif font-medium text-slate-800 text-sm">Ops & Analytics</div>
      <BarChart3 className="w-4 h-4 text-slate-400" />
    </div>
    <div className="p-4 bg-slate-50/50 flex-1 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
          <div className="text-[9px] text-slate-500">Today's Revenue</div>
          <div className="text-sm font-bold text-slate-800 mt-1">Rp 12.5M</div>
          <div className="text-[8px] font-medium text-green-600 mt-1 flex items-center gap-0.5"><TrendingUp className="w-2 h-2"/> 15% vs ytd</div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
          <div className="text-[9px] text-slate-500">Total Patients</div>
          <div className="text-sm font-bold text-slate-800 mt-1">42</div>
          <div className="text-[8px] font-medium text-green-600 mt-1 flex items-center gap-0.5"><TrendingUp className="w-2 h-2"/> 5 new</div>
        </div>
      </div>

      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
        <div className="text-[10px] font-medium text-slate-800 mb-3">Popular Treatments (This Week)</div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[9px] mb-1 font-medium text-slate-600"><span>Laser Fractional</span> <span>65%</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-accent w-[65%] h-full rounded-full"></div></div>
          </div>
          <div>
            <div className="flex justify-between text-[9px] mb-1 font-medium text-slate-600"><span>Acne Peeling</span> <span>45%</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-amber-400 w-[45%] h-full rounded-full"></div></div>
          </div>
          <div>
            <div className="flex justify-between text-[9px] mb-1 font-medium text-slate-600"><span>Hydrafacial</span> <span>30%</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-blue-400 w-[30%] h-full rounded-full"></div></div>
          </div>
        </div>
      </div>
      
      <div className="bg-red-50 p-3 rounded-xl shadow-sm border border-red-100">
         <div className="text-[10px] font-bold text-red-800 mb-1 flex items-center gap-1">Inventory Alert</div>
         <p className="text-[9px] text-red-700">Salicylic Acid 2% Serum is running low (12 units left). Reorder recommended to avoid stockout.</p>
      </div>
    </div>
  </MockupContainer>
);

export default function LiveAIScannerDemo() {
  return (
    <div className="w-full relative pt-12 md:pt-20 pb-12 md:pb-16 mt-10 md:mt-0 overflow-hidden">
      
      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Container */}
      <div className="w-full mx-auto max-w-[1400px] relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 xl:justify-center items-center pb-8 scrollbar-hide w-full" style={{ scrollPaddingLeft: '24px' }}>
          <PatientScannerMockup />
          <FrontdeskMockup />
          <DoctorEMRMockup />
          <AnalyticsMockup />
        </div>
      </div>
    </div>
  );
}
