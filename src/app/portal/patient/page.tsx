"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Smartphone,
  RotateCcw,
  ShoppingBag,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useStore } from "@/store/useStore";

export default function PatientPortal() {
  const router = useRouter();
  const { resetPatientData, clearCart } = useStore();

  const handleLaunchFresh = () => {
    resetPatientData();
    clearCart();
    router.push("/patient");
  };

  const handleLaunchStore = () => {
    // Optionally pre-fill some data if needed, but for now just navigate to patient app
    router.push("/patient");
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-100/40 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-slate-200/50 blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="font-serif font-medium text-4xl tracking-tight text-slate-900">Aura<span className="text-yellow-600">OS</span></span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ml-2">
              B2C
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Patient <span className="text-yellow-600 italic">Experience</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            Pilih skenario simulasi pasien untuk mendemokan alur booking treatment dan e-commerce.
          </p>
        </motion.div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          
          {/* New Patient Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button 
              onClick={handleLaunchFresh}
              className="w-full h-full text-left bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-105 bg-emerald-50 border-emerald-100">
                  <RotateCcw className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">New Patient</h3>
                <p className="text-sm text-slate-500 mb-8 flex-1">
                  Mulai simulasi dari awal. Sistem akan otomatis membersihkan keranjang belanja dan riwayat booking sebelumnya.
                </p>
                
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto group-hover:text-emerald-600 transition-colors">
                  <span>Start Fresh Simulation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </motion.div>

          {/* E-Commerce Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={handleLaunchStore}
              className="w-full h-full text-left bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-yellow-50 rounded-full blur-2xl group-hover:bg-yellow-100 transition-colors"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-105 bg-yellow-50 border-yellow-100">
                  <Smartphone className="w-8 h-8 text-yellow-600" />
                </div>
                
                <h3 className="text-2xl font-serif text-slate-900 mb-2">Returning Patient</h3>
                <p className="text-sm text-slate-500 mb-8 flex-1">
                  Lanjutkan simulasi dengan data yang sudah ada tanpa menghapus keranjang atau jadwal yang tersimpan.
                </p>
                
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto group-hover:text-yellow-600 transition-colors">
                  <span>Continue Simulation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </motion.div>

        </div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-xs text-slate-400">
            AuraOS Demo Portal © 2026 PT Studio Satu Akun
          </p>
        </motion.div>

      </div>
    </div>
  );
}
