"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, LayoutDashboard, ArrowRight, ShieldCheck, Zap, Smartphone, CheckCircle2, ChevronRight, Activity, CalendarDays, PieChart } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-400/30">
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="font-bold text-xl tracking-tight">Aura<span className="text-yellow-500">OS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Benefits</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <a href="#demo" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/20">
            View Live Demo
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-40 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            AuraOS v2.0 is now available
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
          >
            The Modern Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Premium Clinics</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Elevate patient experience and streamline operations with our all-in-one platform. Featuring an AI-powered Patient App and a comprehensive Admin Dashboard.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#demo" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 text-lg">
              Try Live Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg">
              Explore Features
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. Bento Grid Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-slate-600">Built specifically for aesthetic and dermatology clinics, AuraOS combines powerful tools into one seamless experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Main Feature: AI Scanner */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md mb-6">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">AI-Powered Skin Scanner</h3>
                  <p className="text-slate-400 max-w-md text-lg">Analyze patient skin conditions instantly with our proprietary AI algorithm. Generate personalized treatment plans automatically.</p>
                </div>
                {/* Abstract UI representation */}
                <div className="mt-8 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl flex-1 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-slate-700 rounded-lg animate-pulse" />
                     <div className="space-y-2">
                       <div className="w-32 h-3 bg-slate-700 rounded-full" />
                       <div className="w-24 h-2 bg-slate-600 rounded-full" />
                     </div>
                   </div>
                   <div className="space-y-3">
                     <div className="w-full h-8 bg-yellow-400/20 border border-yellow-400/30 rounded-lg" />
                     <div className="w-3/4 h-8 bg-slate-700 rounded-lg" />
                     <div className="w-5/6 h-8 bg-slate-700 rounded-lg" />
                   </div>
                </div>
              </div>
            </div>

            {/* Smart Booking */}
            <div className="bg-yellow-400 rounded-3xl p-8 relative overflow-hidden">
              <div className="bg-white/30 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md mb-6">
                <CalendarDays className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Booking</h3>
              <p className="text-slate-800">Reduce no-shows by 40% with automated reminders and intuitive multi-step booking.</p>
            </div>

            {/* Electronic Medical Records */}
            <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
                <Activity className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Cloud EMR</h3>
              <p className="text-slate-600">Secure, encrypted, and instantly accessible patient medical records from any device.</p>
            </div>

            {/* Financial Analytics */}
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center gap-8">
               <div className="flex-1">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  <PieChart className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-time Analytics</h3>
                <p className="text-slate-600 mb-6">Track revenue, patient demographics, and inventory levels with beautiful, actionable dashboards.</p>
               </div>
               <div className="w-full sm:w-1/2 h-full bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col justify-end gap-2">
                 {/* Fake Chart */}
                 <div className="flex items-end justify-between h-32 px-2">
                   {[40, 70, 45, 90, 65, 100].map((h, i) => (
                     <div key={i} className="w-8 bg-slate-200 rounded-t-sm" style={{ height: `${h}%` }}>
                       <div className="w-full bg-yellow-400 rounded-t-sm transition-all" style={{ height: `${h * 0.8}%` }} />
                     </div>
                   ))}
                 </div>
                 <div className="flex justify-between text-[10px] text-slate-400 px-2 font-medium">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition */}
      <section id="benefits" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Bank-grade Security</h4>
              <p className="text-slate-400 leading-relaxed">All patient data is encrypted at rest and in transit. Fully compliant with international healthcare data standards.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">White-label Patient App</h4>
              <p className="text-slate-400 leading-relaxed">Your brand, our technology. Provide your patients with a premium mobile web app featuring your clinic's logo and colors.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Lightning Fast</h4>
              <p className="text-slate-400 leading-relaxed">Built on Next.js 15 and React 19. Experience zero-latency navigation and instant data sync across all your devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section id="pricing" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Simple, transparent pricing</h2>
            <p className="text-slate-600">Choose the perfect plan for your clinic's size and needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6">For independent practitioners.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">Rp 1.5M</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['1 Doctor Account', 'Basic EMR', 'Smart Booking', 'Standard Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition-colors">Get Started</button>
            </div>

            {/* Professional */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-slate-400 text-sm mb-6">For growing aesthetic clinics.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">Rp 3.5M</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 5 Doctors', 'AI Skin Scanner', 'Advanced Analytics', 'Inventory Management', 'Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-yellow-400 font-medium text-slate-900 hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/20">Get Started</button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">For large clinic chains.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited Doctors', 'Full White-label App', 'Custom Integrations', 'Dedicated Account Manager'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Demo Access (Interactive Portals) */}
      <section id="demo" className="py-24 px-6 bg-yellow-400">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Experience the magic</h2>
          <p className="text-slate-800 text-lg mb-12 max-w-2xl mx-auto">
            Try out our interactive prototypes. See exactly what your patients will experience, and how your team will manage the clinic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/patient"
              className="group bg-white rounded-2xl p-6 w-full max-w-sm flex flex-col items-center gap-4 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Patient Portal Demo</h3>
                <p className="text-sm text-slate-500">Mobile-first web application</p>
              </div>
              <div className="mt-2 text-yellow-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Launch Demo <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link 
              href="/admin"
              className="group bg-slate-900 rounded-2xl p-6 w-full max-w-sm flex flex-col items-center gap-4 hover:shadow-2xl transition-all hover:-translate-y-1 shadow-xl shadow-slate-900/10"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <LayoutDashboard className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Admin Dashboard Demo</h3>
                <p className="text-sm text-slate-400">Comprehensive management</p>
              </div>
              <div className="mt-2 text-yellow-400 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Launch Demo <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Aura<span className="text-yellow-500">OS</span></span>
        </div>
        <p className="text-sm">© 2026 Studio Satu Akun. All rights reserved.</p>
      </footer>
    </div>
  );
}
