"use client";

import { ReactNode, useState } from 'react';
import { PieChart, CalendarDays, FolderHeart, Activity, PackageOpen, Menu, X } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { activeTab, setActiveTab } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: PieChart },
    { id: 'schedule', label: 'Schedule', icon: CalendarDays },
    { id: 'emr', label: 'Patients (EMR)', icon: FolderHeart },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'inventory', label: 'Inventory', icon: PackageOpen },
  ];

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false); // Close menu on mobile after selection
  };

  return (
    <div className="flex h-screen bg-muted/30 relative overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 w-64 bg-charcoal text-white flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 flex flex-col border-b border-white/10 relative">
          <button 
            className="absolute top-5 right-5 md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center mb-1 h-16">
            <img src="/logo.png" alt="Aura Logo" className="h-full w-auto object-contain brightness-0 invert opacity-90" />
          </div>
          <span className="text-[10px] text-white/50 tracking-wide uppercase mt-3">by Studio Satu Akun</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto scrollbar-hide">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <div 
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all active:scale-[0.98] ${isActive ? 'bg-white/10 text-white shadow-sm' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-gold' : ''}`} strokeWidth={isActive ? 2 : 1.5} />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 md:px-8 shadow-sm z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 -ml-2 text-charcoal/70 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="font-serif font-medium text-lg text-charcoal capitalize tracking-wide">{activeTab}</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block text-sm font-medium text-foreground/80">Dr. Sarah Lee</div>
            <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-medium text-sm shadow-sm cursor-pointer hover:bg-gold/20 transition-colors">
              SL
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F9F8F6]">
          {children}
        </main>
      </div>
    </div>
  );
}
