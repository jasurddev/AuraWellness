"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Smartphone, Check, ArrowUpRight, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
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

      {/* 3. Refined Features Showcase */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <h2 className="text-4xl md:text-6xl font-serif leading-tight">
               Built for scale.<br/>Designed for <i className="text-yellow-600">beauty.</i>
             </h2>
             <p className="max-w-sm text-sm text-slate-500 leading-relaxed">
               Didesain khusus buat klinik estetika modern. AuraOS mengeliminasi sistem konvensional yang kaku menjadi ekosistem digital yang <i>seamless</i>.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {/* Feature 1 */}
            <div className="bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
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
            <div className="bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
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
            <div className="bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
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
            <div className="bg-[#F9F8F6] p-12 lg:p-16 flex flex-col justify-between h-full">
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

      {/* 4. Value Proposition (Typography focus) */}
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
                {['Up to 5 Doctors', 'AI Skin Scanner', 'Advanced Analytics', 'Inventory Management', 'Priority Support'].map((feature, i) => (
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
                {['Unlimited Doctors', 'Full White-label App', 'Custom Integrations', 'Dedicated Account Manager'].map((feature, i) => (
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <Link 
              href="/patient"
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
              href="/admin"
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
      <footer className="py-12 px-6 border-t border-slate-200 text-center">
        <span className="font-serif text-lg tracking-tight text-slate-900 block mb-2">Aura<span className="text-yellow-600">OS</span></span>
        <p className="text-xs text-slate-400 uppercase tracking-widest">© 2026 Studio Satu Akun.</p>
      </footer>
    </div>
  );
}
