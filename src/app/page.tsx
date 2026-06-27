"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Smartphone, LayoutDashboard, ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { MOCK_DOCTORS } from '@/lib/mockData';

export default function DemoHub() {
  const router = useRouter();
  const { setAdminDoctorId, resetPatientData } = useStore();

  const handleLaunchPatientApp = () => {
    // Reset all patient state to give a fresh demo experience
    resetPatientData();
    useStore.getState().clearCart(); // Call clearCart directly from getState since it's not destructured above if not needed
    router.push('/patient');
  };

  const handleLaunchAdmin = (doctorId: string | null) => {
    setAdminDoctorId(doctorId);
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans selection:bg-yellow-400/30 flex flex-col">
      
      {/* Header */}
      <nav className="w-full bg-[#F9F8F6]/90 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-medium text-2xl tracking-tight">Aura<span className="text-yellow-600">OS</span></span>
            <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ml-2">
              Demo Portal
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Secure Sandbox Environment</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight"
          >
            Select your journey.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-500 leading-relaxed"
          >
            Pilih portal di bawah ini untuk memulai presentasi. Sisi Pasien akan mereset data setiap kali diluncurkan agar demo terasa seperti pengguna baru.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          
          {/* Patient Portal */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex-1 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-yellow-50 rounded-full blur-3xl group-hover:bg-yellow-100 transition-colors pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-7 h-7 text-yellow-600" />
                </div>
                
                <h2 className="text-2xl font-serif text-slate-900 mb-3">Patient App (B2C)</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                  Simulasikan *flow* pasien mulai dari buka aplikasi, analisa wajah AI, pemilihan dokter spesialis, checkout treatment, hingga masuk ke Skincare Shop.
                </p>

                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-8">
                  <h4 className="text-xs font-bold text-yellow-800 uppercase tracking-widest mb-2">Auto-Reset Enabled</h4>
                  <p className="text-xs text-yellow-700/70">Setiap kali lo klik tombol di bawah, keranjang dan jadwal booking sebelumnya akan dikosongkan otomatis.</p>
                </div>

                <button 
                  onClick={handleLaunchPatientApp}
                  className="w-full flex items-center justify-between p-4 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 transition-all active:scale-[0.98] group/btn"
                >
                  <span className="font-medium text-sm">Launch Patient App</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Admin Portal */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 shadow-xl flex-1 flex flex-col relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-slate-800 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                  <LayoutDashboard className="w-7 h-7 text-yellow-400" />
                </div>
                
                <h2 className="text-2xl font-serif text-white mb-3">Clinic Admin (B2B)</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  Masuk ke dashboard klinik. Cek jadwal, sistem rekam medis (EMR), penjualan *skincare* online, dan atur profil dokter untuk di-*share*.
                </p>

                <div className="space-y-3 mt-auto">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Login As Role:</div>
                  
                  {MOCK_DOCTORS.map((doctor) => (
                    <button 
                      key={doctor.id}
                      onClick={() => handleLaunchAdmin(doctor.id)}
                      className="w-full flex items-center justify-between p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 rounded-xl transition-all active:scale-[0.98] group/role"
                    >
                      <div className="flex items-center gap-3">
                        <img src={doctor.imageUrl} alt={doctor.name} className="w-8 h-8 rounded-full object-cover border border-slate-600 grayscale group-hover/role:grayscale-0 transition-all" />
                        <div className="text-left">
                          <div className="text-sm font-medium text-white">{doctor.name}</div>
                          <div className="text-[10px] text-slate-400">{doctor.specialty}</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/role:text-yellow-400 group-hover/role:translate-x-1 group-hover/role:-translate-y-1 transition-transform" />
                    </button>
                  ))}

                  <button 
                    onClick={() => handleLaunchAdmin(null)}
                    className="w-full flex items-center justify-between p-3 bg-transparent hover:bg-slate-800 border border-slate-700 border-dashed rounded-xl transition-all active:scale-[0.98] group/role mt-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <ShieldCheck className="w-4 h-4 text-slate-400 group-hover/role:text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-slate-300">Front Desk / Super Admin</div>
                        <div className="text-[10px] text-slate-500">Default View</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover/role:text-emerald-400 group-hover/role:translate-x-1 group-hover/role:-translate-y-1 transition-transform" />
                  </button>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="w-full py-6 text-center border-t border-slate-200 mt-auto">
        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          AuraOS Demo Portal © 2026 PT Studio Satu Akun
        </p>
      </footer>

    </div>
  );
}
