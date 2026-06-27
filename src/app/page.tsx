"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Smartphone, Check, ArrowUpRight, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import LiveAIScannerDemo from '@/components/home/LiveAIScannerDemo';
import { useStore } from '@/store/useStore';
import { MOCK_DOCTORS } from '@/lib/mockData';

export default function Home() {
  const router = useRouter();
  const { setAdminDoctorId, resetPatientData } = useStore();

  const handleLaunchPatientApp = () => {
    resetPatientData();
    useStore.getState().clearCart();
    router.push('/patient');
  };

  const handleLaunchAdmin = (doctorId: string | null) => {
    setAdminDoctorId(doctorId);
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans selection:bg-yellow-400/30">
      
      {/* 1. Minimalist Navbar */}
      <nav className="fixed top-0 w-full bg-[#F9F8F6]/90 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-medium text-2xl tracking-tight">Aura<span className="text-yellow-600">OS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-500">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Benefits</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <a href="#demo" className="text-xs font-semibold uppercase tracking-widest border-b border-slate-900 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
            View Demo
          </a>
        </div>
      </nav>

      {/* 2. Editorial Hero Section */}
      <section className="pt-40 pb-24 px-6 relative border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-4"
              >
                <span className="w-8 h-[1px] bg-yellow-500"></span>
                Software for Aesthetics
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1.05] tracking-tight mb-8"
              >
                The operating <br /> system for premium <br />
                <span className="italic text-slate-500">clinics.</span>
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 pb-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-slate-600 mb-8 leading-relaxed"
              >
                Tingkatkan <i>patient experience</i> dan efisiensi operasional klinik Anda dengan platform <i>all-in-one</i>. Menggabungkan AI terkini dengan keanggunan desain minimalis.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a href="#demo" className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-4 text-sm font-medium hover:bg-slate-800 transition-colors">
                  Explore Platform <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Live Metrics & Grand Reveal */}
      <section className="pt-10 pb-10 md:pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Logo Marquee */}
          <div className="mb-24 border-y border-slate-200 py-10 relative overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent opacity-50 -z-10"></div>
            
            {/* Gradient masks for smooth fade at edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F9F8F6] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F9F8F6] to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              className="flex whitespace-nowrap items-center w-max opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            >
              {/* Set 1 */}
              <div className="flex gap-16 md:gap-28 items-center shrink-0 px-8 md:px-14">
                <Image src="/logo.png" alt="Aura Aesthetic" width={300} height={100} className="h-20 md:h-28 w-auto object-contain brightness-0 shrink-0 scale-125 md:scale-150" />
                <span className="font-serif text-3xl md:text-4xl font-medium tracking-tight shrink-0">LUMIÈRE</span>
                <Image src="/liceria.png" alt="Liceria" width={300} height={100} className="h-20 md:h-28 w-auto object-contain brightness-0 shrink-0 scale-125 md:scale-150" />
                <span className="font-sans text-2xl md:text-3xl font-light tracking-[0.2em] uppercase shrink-0">Aesthetica</span>
                <span className="font-serif text-3xl md:text-4xl italic shrink-0">DermaHaus</span>
                <span className="font-sans text-2xl md:text-3xl font-bold tracking-tighter shrink-0">SKIN<span className="font-light">CLINIC</span></span>
              </div>
              {/* Set 2 (Duplicate for infinite loop) */}
              <div className="flex gap-16 md:gap-28 items-center shrink-0 px-8 md:px-14">
                <Image src="/logo.png" alt="Aura Aesthetic" width={300} height={100} className="h-20 md:h-28 w-auto object-contain brightness-0 shrink-0 scale-125 md:scale-150" />
                <span className="font-serif text-3xl md:text-4xl font-medium tracking-tight shrink-0">LUMIÈRE</span>
                <Image src="/liceria.png" alt="Liceria" width={300} height={100} className="h-20 md:h-28 w-auto object-contain brightness-0 shrink-0 scale-125 md:scale-150" />
                <span className="font-sans text-2xl md:text-3xl font-light tracking-[0.2em] uppercase shrink-0">Aesthetica</span>
                <span className="font-serif text-3xl md:text-4xl italic shrink-0">DermaHaus</span>
                <span className="font-sans text-2xl md:text-3xl font-bold tracking-tighter shrink-0">SKIN<span className="font-light">CLINIC</span></span>
              </div>
            </motion.div>
          </div>

          {/* Live AI Scanner Demo */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-5xl mx-auto flex items-center justify-center mt-10 md:mt-0"
          >
            <LiveAIScannerDemo />
          </motion.div>
        </div>
      </section>

      {/* 3. Features Bento Grid */}
      <section id="features" className="py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <h2 className="text-4xl md:text-6xl font-serif leading-tight">
               Built for scale.<br/>Designed for <i className="text-yellow-600">beauty.</i>
             </h2>
             <p className="max-w-sm text-sm text-slate-500 leading-relaxed">
               Didesain khusus buat klinik estetika modern. AuraOS mengeliminasi sistem konvensional yang kaku menjadi ekosistem digital yang <i>seamless</i>.
             </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {/* Feature 1 */}
            <div className="w-[85vw] sm:w-[60vw] shrink-0 md:w-auto snap-center md:snap-align-none bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase mb-4 block">01 / AI Scanner</span>
                <h3 className="text-3xl font-serif mb-4">Precision Analysis</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-12 max-w-sm">
                  Analisa kondisi kulit pasien secara instan pakai <i>proprietary AI algorithm</i> kita. Otomatis menghasilkan <i>treatment plan</i> yang akurat.
                </p>
              </div>
              <div className="mt-auto pt-8">
                <Image src="/images/bento-ai-scanner.png" alt="AI Scanner Interface" width={800} height={600} className="w-full aspect-video object-cover border border-slate-200 shadow-sm" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="w-[85vw] sm:w-[60vw] shrink-0 md:w-auto snap-center md:snap-align-none bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase mb-4 block">02 / EMR System</span>
                <h3 className="text-3xl font-serif mb-4">Electronic Records</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-12 max-w-sm">
                  Data rekam medis pasien yang <i>secure</i>, <i>encrypted</i>, dan tertata secara visual. Akses kapanpun dari <i>device</i> apapun.
                </p>
              </div>
              <div className="mt-auto pt-8">
                <Image src="/images/bento-emr-system.png" alt="EMR System Dashboard" width={800} height={600} className="w-full aspect-video object-cover border border-slate-200 shadow-sm" />
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="w-[85vw] sm:w-[60vw] shrink-0 md:w-auto snap-center md:snap-align-none bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase mb-4 block">03 / Smart Booking</span>
                <h3 className="text-3xl font-serif mb-4">Frictionless Flow</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-12 max-w-sm">
                  Kurangi <i>no-shows</i> lewat fitur <i>automated reminders</i>. Pasien Anda bisa <i>booking</i> dari HP semudah belanja <i>online</i>.
                </p>
              </div>
              <div className="mt-auto pt-8">
                <Image src="/images/bento-smart-booking.png" alt="Smart Booking App" width={800} height={600} className="w-full aspect-video object-cover border border-slate-200 shadow-sm" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="w-[85vw] sm:w-[60vw] shrink-0 md:w-auto snap-center md:snap-align-none bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase mb-4 block">04 / Analytics</span>
                <h3 className="text-3xl font-serif mb-4">Actionable Insights</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-12 max-w-sm">
                  Pantau <i>revenue</i>, demografi pasien, sampai status stok <i>inventory</i> lewat <i>dashboard</i> estetik yang sangat detail.
                </p>
              </div>
              <div className="mt-auto pt-8">
                <Image src="/images/bento-analytics.png" alt="Analytics Dashboard" width={800} height={600} className="w-full aspect-video object-cover border border-slate-200 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Payment Gateway (New Fintech Section) */}
      <section id="fintech" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase block">Fintech Integration</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Frictionless Payment, <br/>Zero No-Shows.
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-lg">
              Ubah cara pasien bertransaksi. AuraOS dilengkapi infrastruktur Payment Gateway terintegrasi atas nama klinik Anda. Terapkan sistem Down Payment (DP) otomatis via QRIS & Virtual Account untuk mengeliminasi pembatalan sepihak. Rekonsiliasi keuangan berjalan otomatis, dan dana cair langsung ke rekening klinik Anda tanpa campur tangan manual.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-slate-900 text-sm font-medium">100% White-labeled (Transaksi masuk atas nama klinik Anda)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-slate-900 text-sm font-medium">Auto-Reconciliation (Lupakan cek mutasi manual)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-slate-900 text-sm font-medium">Secure Payouts (Dana disalurkan oleh lembaga perbankan resmi)</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-slate-50 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl"></div>
             
             {/* Modern Sleek Receipt UI */}
             <div className="relative z-10 w-full max-w-sm bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white flex flex-col items-center transform transition-transform hover:scale-105 duration-500">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h4 className="text-2xl font-serif text-slate-900 mb-1">Payment Received</h4>
                <p className="text-sm text-slate-500 mb-8 font-medium">Aura Aesthetics - Kemang</p>
                
                <div className="w-full border-t border-dashed border-slate-200 mb-6 relative">
                  <div className="absolute -left-10 -top-3 w-6 h-6 rounded-full bg-slate-50"></div>
                  <div className="absolute -right-10 -top-3 w-6 h-6 rounded-full bg-slate-50"></div>
                </div>
                
                <div className="w-full flex justify-between items-center mb-6">
                  <span className="text-sm text-slate-500">Total Amount</span>
                  <span className="text-xl font-medium text-slate-900">Rp 1.250.000</span>
                </div>
                
                <div className="w-full bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-0.5">Auto-Reconciled</span>
                    <span className="text-[11px] text-slate-500">Instantly settled to Bank Account</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Value Proposition (Typography focus) */}
      <section id="benefits" className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-slate-800 pt-16">
            <div>
              <ShieldCheck className="w-6 h-6 text-yellow-500 mb-6" />
              <h4 className="text-xl font-serif mb-4">Bank-grade Security</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Semua data pasien dienkripsi penuh (<i>at rest</i> & <i>in transit</i>). <i>Fully compliant</i> standar internasional.</p>
            </div>
            <div>
              <Smartphone className="w-6 h-6 text-yellow-500 mb-6" />
              <h4 className="text-xl font-serif mb-4">White-label Experience</h4>
              <p className="text-sm text-slate-400 leading-relaxed"><i>Your brand, our technology</i>. Kasih pasien Anda <i>mobile web app</i> dengan logo dan warna klinik Anda sendiri.</p>
            </div>
            <div>
              <Zap className="w-6 h-6 text-yellow-500 mb-6" />
              <h4 className="text-xl font-serif mb-4">Zero Latency</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Dibangun di atas teknologi terkini. Rasakan navigasi super cepat dan sinkronisasi data <i>real-time</i>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Minimalist Pricing */}
      <section id="pricing" className="py-32 px-6 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-10">
            <h2 className="text-4xl md:text-5xl font-serif">Clear investment.</h2>
            <p className="text-sm text-slate-500 max-w-xs md:text-right mt-4 md:mt-0">
              Pilih lisensi yang paling pas buat skala operasional klinik Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
            {/* Starter */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Starter</h3>
              <p className="text-xs text-slate-500 mb-12">Cocok buat praktisi independen.</p>
              <div className="mb-12">
                <span className="text-4xl font-serif">Rp 1.5M</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {['1 Doctor Account', 'Basic EMR', 'Smart Booking', 'Standard Support'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition-colors">Select Plan</button>
            </div>

            {/* Professional */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                Popular
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Professional</h3>
              <p className="text-xs text-slate-500 mb-12">Buat klinik yang lagi <i>scale up</i>.</p>
              <div className="mb-12">
                <span className="text-4xl font-serif">Rp 3.5M</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {['Up to 5 Doctors', 'AI Skin Scanner (1000 scans/mo)', 'Advanced Analytics', 'Inventory Management', 'Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-900 font-medium">
                    <Check className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Select Plan</button>
            </div>

            {/* Enterprise */}
            <div className="p-10 flex flex-col">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Enterprise</h3>
              <p className="text-xs text-slate-500 mb-12">Jaringan klinik skala besar.</p>
              <div className="mb-12">
                <span className="text-4xl font-serif">Custom</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {['Unlimited Doctors', 'Custom AI Scan Quota', 'White-label Patient App', 'Dedicated Account Manager', 'Custom API Access'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-slate-200 text-slate-400 text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Live Interactive Demo */}
      <section id="demo" className="py-32 px-6 border-t border-slate-200/50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold text-yellow-600 tracking-[0.2em] uppercase mb-4 block">Interactive Prototype</span>
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tight">Experience the platform.</h2>
          <p className="text-sm text-slate-500 mb-16 max-w-xl mx-auto leading-relaxed">
            Cobain langsung interaksi aplikasinya. Rasakan betapa <i>smooth</i>-nya alur pasien dan kepraktisan tim medis Anda dalam satu ekosistem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex flex-col h-full">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex-1 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-yellow-50 rounded-full blur-3xl group-hover:bg-yellow-100 transition-colors pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-105 transition-transform">
                    <Smartphone className="w-7 h-7 text-yellow-600" />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">Patient App</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                    Booking treatment & AI Scanner dari sisi pandang pasien.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-8">
                    <h4 className="text-xs font-bold text-yellow-800 uppercase tracking-widest mb-1">Auto-Reset</h4>
                    <p className="text-xs text-yellow-700/70">State otomatis dibersihkan saat simulasi dimulai.</p>
                  </div>

                  <button 
                    onClick={handleLaunchPatientApp}
                    className="w-full flex items-center justify-between p-4 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 transition-all active:scale-[0.98] group/btn"
                  >
                    <span className="font-medium text-sm">Launch Portal</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 shadow-xl flex-1 flex flex-col relative overflow-hidden">
                <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-slate-800 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                    <LayoutDashboard className="w-7 h-7 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-2">Clinic Admin</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8">
                    Manajemen EMR, jadwal dokter, dan laporan finansial klinik.
                  </p>

                  <div className="space-y-3 mt-auto">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Login As Role:</div>
                    
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
                          <div className="text-sm font-medium text-slate-300">Front Desk / Admin</div>
                          <div className="text-[10px] text-slate-500">Default View</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover/role:text-emerald-400 group-hover/role:translate-x-1 group-hover/role:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-16 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl tracking-tight text-slate-900 block mb-2">Aura<span className="text-yellow-600">OS</span></span>
            <p className="text-sm text-slate-500 font-medium mb-1">Built for scale. Designed for excellence.</p>
            <p className="text-xs text-slate-400 mt-2">© 2026 PT Studio Satu Akun. All rights reserved.</p>
            <p className="text-xs text-slate-400 mt-1">auraos.com</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-yellow-600 transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Refund Policy</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
