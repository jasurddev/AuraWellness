"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Smartphone, Check, ArrowUpRight, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import LiveAIScannerDemo from "@/components/home/LiveAIScannerDemo";
import FourCoresAccordion from "@/components/home/FourCoresAccordion";
import Chatbot from "@/components/shared/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans selection:bg-yellow-400/30">
      
      {/* 1. Minimalist Navbar */}
      <nav className="fixed top-0 w-full bg-[#F9F8F6]/90 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-medium text-2xl tracking-tight">Rona<span className="text-yellow-600">OS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-500">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Benefits</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <a href="#demo" className="text-xs font-semibold uppercase tracking-widest border-b border-slate-900 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
            Book Private Demo
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
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-4"
              >
                <span className="w-8 h-[1px] bg-yellow-500"></span>
                AI Operating System for Aesthetic & Wellness
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1.05] tracking-tight mb-8"
              >
                The Intelligence <br /> Behind Every <br />
                <span className="italic text-yellow-700">Exceptional Clinic.</span>
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 pb-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-slate-600 mb-8 leading-relaxed space-y-4"
              >
                <p><b>RonaOS</b> adalah AI-native Operating System yang dirancang untuk klinik <i>aesthetic & wellness</i> modern.</p>
                <p>Menghubungkan setiap perjalanan pasien—mulai dari AI Assessment, Smart Booking, EMR, Revenue Engine, AI Post-Care, hingga Business Intelligence—dalam satu ekosistem yang bekerja secara <i>real-time</i>.</p>
                <p className="font-semibold text-slate-900 pt-2 tracking-wide">Lebih dari sekadar software. Sebuah operating system untuk klinik yang ingin menjadi benchmark.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a href="#demo" className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-4 text-sm font-medium hover:bg-slate-800 transition-colors">
                  Explore Architecture <ArrowRight className="w-4 h-4" />
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

      {/* 2.7 Manifesto Section */}
      <section className="py-32 md:py-48 px-6 bg-[#0B0F19] text-white selection:bg-yellow-500/30 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Left side: Sticky Headline */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-yellow-500 mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-yellow-500"></span>
                  AESTHETIC-NATIVE AI
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                  Pertumbuhan tidak terjadi <br/>
                  <i className="text-yellow-500/90 font-light">dengan bekerja lebih keras.</i>
                </motion.h2>
              </div>
            </div>

            {/* Right side: Body Text */}
            <div className="lg:col-span-6 lg:col-start-7 pt-8 lg:pt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                <p className="text-3xl md:text-4xl font-sans font-light text-slate-200 leading-snug">
                  Pertumbuhan terjadi ketika seluruh operasional bekerja sebagai satu ekosistem.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-12 border-t border-slate-800/80">
                <p className="text-xl md:text-2xl font-sans font-light text-slate-400 leading-relaxed mb-6">
                  <strong className="text-white font-medium">RonaOS</strong> adalah Kecerdasan Buatan yang didesain secara spesifik, eksklusif, dan mendalam hanya untuk menguasai industri klinik estetika.
                </p>
                <p className="text-xl md:text-2xl font-sans font-light text-slate-400 leading-relaxed">
                  Kami menghubungkan setiap pasien, dokter, <i>treatment</i>, transaksi, dan <i>inventory</i> ke dalam satu <i>AI Operating System</i>.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-12 border-t border-slate-800/80 relative">
                <div className="absolute left-0 top-12 w-1 h-full max-h-[80px] bg-yellow-500"></div>
                <p className="text-2xl md:text-4xl font-serif text-white leading-snug pl-8">
                  Dirancang untuk membantu klinik Anda beroperasi lebih efisien, berekspansi lebih cerdas, dan menetapkan <i className="text-yellow-500">benchmark baru</i> di industri.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Architecture (Four Cores) */}
      <section id="features" className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-slate-200 pb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-600 mb-6 block">THE ARCHITECTURE</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Four Cores.<br/>One Unified <i className="text-yellow-600">Ecosystem.</i>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-slate-500 leading-relaxed font-medium">
              RonaOS dibangun di atas empat pilar arsitektur utama yang bekerja tersinkronisasi untuk menggerakkan seluruh skala bisnis estetika Anda.
            </p>
          </div>

          <FourCoresAccordion />
        </div>
      </section>

      {/* 4. Payment Gateway (New Fintech Section) */}
      <section id="fintech" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase block">INVISIBLE COMMERCE</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Transactions should be felt, <br/>not seen.
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-lg">
              RonaOS mengubah proses pembayaran menjadi pengalaman tak kasat mata. Infrastruktur Payment Gateway terintegrasi penuh atas nama klinik Anda. Terapkan sistem auto-deposit dan rekonsiliasi instan untuk memusnahkan potensi <i>no-shows</i>. Uang Anda mengalir semulus pengalaman pasien Anda.
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
                <p className="text-sm text-slate-500 mb-8 font-medium">Rona Aesthetics - Kemang</p>
                
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
            <h2 className="text-4xl md:text-5xl font-serif">Transparent by design.</h2>
            <p className="text-sm text-slate-500 max-w-xs md:text-right mt-4 md:mt-0 font-medium">
              Pilih arsitektur yang paling sesuai dengan skala visi klinik Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white shadow-sm">
            {/* Boutique */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Boutique</h3>
              <p className="text-xs text-slate-500 mb-12">For the purist independent practitioner.</p>
              <div className="mb-12">
                <span className="text-4xl font-serif">Rp 1.5M</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {['1 Doctor License', 'Basic EMR Architecture', 'Smart Booking Flow', 'Standard Support'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition-colors">Select Architecture</button>
            </div>

            {/* Scale */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                Popular
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Scale</h3>
              <p className="text-xs text-slate-500 mb-12">For high-growth aesthetic centers.</p>
              <div className="mb-12">
                <span className="text-4xl font-serif">Rp 3.5M</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {['Up to 5 Doctor Licenses', 'AI Clinical Intelligence', 'Advanced Analytics Suite', 'Inventory Orchestration', 'Priority Access'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-900 font-medium">
                    <Check className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Select Architecture</button>
            </div>

            {/* Enterprise */}
            <div className="p-10 flex flex-col">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Enterprise</h3>
              <p className="text-xs text-slate-500 mb-12">For regional and global clinic networks.</p>
              <div className="mb-12">
                <span className="text-4xl font-serif">Custom</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {['Unlimited Licenses', 'Custom AI Infrastructure', 'White-label Patient Ecosystem', 'Dedicated Success Manager', 'Custom API Architecture'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-slate-200 text-slate-400 text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors">Request Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing Section */}
      <section id="demo" className="py-32 px-6 border-t border-slate-200/50 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 tracking-tight leading-tight">
            The Benchmark for Modern <br/><i className="text-yellow-600">Aesthetic & Wellness Clinics.</i>
          </h2>
          <div className="text-lg md:text-xl text-slate-600 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            <p className="mb-4">RonaOS bukan sekadar membantu klinik beroperasi.</p>
            <p>RonaOS membantu klinik bertumbuh, meredefinisi pengalaman pasien, dan menetapkan standar baru bagi industri.</p>
          </div>
          
          <button className="bg-slate-900 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
            Book a Private Demo
          </button>
        </div>

        <div className="max-w-4xl mx-auto mt-32 pt-16 border-t border-slate-200/50">
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-10 font-bold">Or Explore The Interactive Prototypes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Link 
              href="/demo/portal/patient"
              className="group bg-white border border-slate-200 p-8 hover:border-slate-900 transition-all flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <Smartphone className="w-6 h-6 text-slate-400 mb-6 group-hover:text-yellow-600 transition-colors" />
                <h3 className="text-2xl font-serif text-slate-900 mb-2">Patient App</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Booking treatment & AI Scanner dari sisi pandang pasien.</p>
              </div>
              <div className="mt-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Launch Portal <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            <Link 
              href="/demo/portal/admin"
              className="group bg-slate-900 text-white p-8 hover:bg-slate-800 transition-all flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <LayoutDashboard className="w-6 h-6 text-slate-500 mb-6 group-hover:text-yellow-500 transition-colors" />
                <h3 className="text-2xl font-serif text-white mb-2">Clinic Admin</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Manajemen EMR, jadwal dokter, dan laporan finansial klinik.</p>
              </div>
              <div className="mt-8 text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Open Dashboard <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-16 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl tracking-tight text-slate-900 block mb-2">Rona<span className="text-yellow-600">OS</span></span>
            <p className="text-sm text-slate-500 font-medium mb-1">Built for scale. Designed for excellence.</p>
            <p className="text-xs text-slate-400 mt-2">© 2026 PT Studio Satu Akun. All rights reserved.</p>
            <p className="text-xs text-slate-400 mt-1">ronaos.com</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-yellow-600 transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Refund Policy</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}
