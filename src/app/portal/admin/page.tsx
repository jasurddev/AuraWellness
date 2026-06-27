"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Building2, 
  Stethoscope, 
  Wallet,
  ArrowRight,
  LayoutDashboard
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { MOCK_DOCTORS } from "@/lib/mockData";

export default function AdminPortal() {
  const router = useRouter();
  const { setAdminDoctorId, setActiveTab } = useStore();

  const handleLogin = (doctorId: string | null, tab: 'overview' | 'schedule' | 'emr' | 'analytics' | 'inventory' | 'sales' | 'profile' = 'overview') => {
    setAdminDoctorId(doctorId);
    setActiveTab(tab);
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-yellow-100/40 blur-[120px]"></div>
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-200/50 blur-[100px]"></div>
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
            <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ml-2">
              B2B
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Aura Aesthetic <span className="text-yellow-600 italic">System</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            Pilih modul portal akses (Role) untuk mendemokan sistem manajemen klinik terintegrasi secara Real-Time.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          
          {/* Default Admin / Front Desk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button 
              onClick={() => handleLogin(null, 'overview')}
              className="w-full h-full text-left bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-105 bg-slate-50 border-slate-200`}>
                <Wallet className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-1">Front Desk</h3>
              <p className="text-xs text-slate-500 mb-8 flex-1">Akses resepsionis, antrean, dan sistem kasir / pembayaran.</p>
              
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto group-hover:text-yellow-600 transition-colors">
                <span>Enter Module</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>

          {/* Doctor Pad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => handleLogin(MOCK_DOCTORS[0].id, 'emr')} // Default ke dokter pertama
              className="w-full h-full text-left bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-105 bg-indigo-50 border-indigo-100`}>
                <Stethoscope className="w-8 h-8 text-indigo-500" />
              </div>
              
              <h3 className="text-xl font-serif text-slate-900 mb-1">Doctor Pad</h3>
              <p className="text-xs text-slate-500 mb-8 flex-1">Akses khusus dokter untuk melihat rekam medis (EMR) dan jadwal.</p>
              
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto group-hover:text-indigo-600 transition-colors">
                <span>Enter Module</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>

          {/* Manager Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={() => handleLogin(null, 'analytics')}
              className="w-full h-full text-left bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-105 bg-emerald-50 border-emerald-100`}>
                <LayoutDashboard className="w-8 h-8 text-emerald-500" />
              </div>
              
              <h3 className="text-xl font-serif text-slate-900 mb-1">Manager Hub</h3>
              <p className="text-xs text-slate-500 mb-8 flex-1">Akses *owner* untuk melihat *analytics* penjualan dan operasional.</p>
              
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto group-hover:text-emerald-600 transition-colors">
                <span>Enter Module</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>

        </div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
