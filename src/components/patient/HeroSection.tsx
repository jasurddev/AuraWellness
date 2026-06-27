"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Droplets, Activity, History } from 'lucide-react';

interface HeroProps {
  onStartScan: () => void;
  onStartBooking: () => void;
  onStartPainTracker: () => void;
  onStartDashboard: () => void;
  onStartShop: () => void;
}

export function HeroSection({ onStartScan, onStartBooking, onStartPainTracker, onStartDashboard, onStartShop }: HeroProps) {
  return (
    <div className="min-h-full flex flex-col relative bg-[#F9F8F6] overflow-y-auto pb-6 scrollbar-hide">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#EFECE5] to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="px-6 pt-16 pb-12 flex flex-col items-center z-10 min-h-max">
        
        {/* Aura Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-0 relative flex items-center justify-center shrink-0"
        >
          <div className="h-20 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Aura Aesthetics by Studio Satu Akun" 
              className="h-full w-auto object-contain scale-125"
            />
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-3 mb-6 shrink-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[10px] font-medium tracking-wider text-primary border border-primary/10 shadow-sm uppercase">
            Happy Aging Philosophy
          </span>
          <h1 className="text-3xl font-serif font-medium text-primary leading-tight">
            Holistic <br />
            <span className="italic text-accent">Beauty</span> Care
          </h1>
          <p className="text-[11px] text-muted-foreground px-4 leading-relaxed max-w-[260px] mx-auto">
            Merawat kecantikan dari dalam hingga luar. Hadirkan versi terbaik diri Anda dengan sentuhan estetika medis berstandar internasional.
          </p>
        </motion.div>

        {/* Action Buttons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full grid grid-cols-1 gap-3 shrink-0"
        >
          <button
            onClick={onStartScan}
            className="group relative w-full flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">AI Skin Analyzer</div>
                <div className="text-[10px] text-white/80">Analisa wajah & kesehatan</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onStartPainTracker}
            className="group relative w-full flex items-center justify-between p-4 bg-accent text-white rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">Body Pain Tracker</div>
                <div className="text-[10px] text-white/80">Manajemen nyeri inovatif</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-2 gap-3 mt-1">
            <button
              onClick={onStartBooking}
              className="group flex flex-col items-center justify-center p-4 bg-white text-primary border border-border/60 rounded-2xl shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-medium text-xs">Book Appt</div>
              </div>
            </button>

            <button
              onClick={onStartDashboard}
              className="group flex flex-col items-center justify-center p-4 bg-white text-primary border border-border/60 rounded-2xl shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <History className="w-5 h-5 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-medium text-xs">My Journey</div>
              </div>
            </button>
          </div>

          <button
            onClick={onStartShop}
            className="group mt-1 relative w-full flex items-center justify-between p-4 bg-white border border-border/60 text-primary rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border/50">
                <span className="text-xl">🛍️</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-sm text-primary">Aura Skincare Shop</div>
                <div className="text-[10px] text-muted-foreground">Buy recommended products</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 relative z-10 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
