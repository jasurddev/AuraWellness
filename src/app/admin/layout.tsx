"use client";

import { ReactNode } from 'react';
import { LayoutDashboard, Calendar, Users, Sparkles } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { activeTab, setActiveTab } = useStore();

  return (
    <div className="flex h-screen bg-muted/30">
      <aside className="w-64 bg-charcoal text-white flex flex-col shadow-xl z-10">
        <div className="p-6 flex flex-col border-b border-white/10">
          <div className="flex items-center space-x-3 mb-1">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-semibold text-lg tracking-wider">AURA</span>
          </div>
          <span className="text-[10px] text-white/50 tracking-wide uppercase">by Studio Satu Akun</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <div 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${activeTab === 'overview' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
          >
            <LayoutDashboard className={`w-5 h-5 ${activeTab === 'overview' ? 'text-gold' : ''}`} />
            <span className="font-medium">Dashboard</span>
          </div>
          <div 
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${activeTab === 'schedule' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
          >
            <Calendar className={`w-5 h-5 ${activeTab === 'schedule' ? 'text-gold' : ''}`} />
            <span className="font-medium">Schedule</span>
          </div>
          <div 
            onClick={() => setActiveTab('emr')}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${activeTab === 'emr' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
          >
            <Users className={`w-5 h-5 ${activeTab === 'emr' ? 'text-gold' : ''}`} />
            <span className="font-medium">Patients (EMR)</span>
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-8 shadow-sm z-0">
          <div className="font-medium text-charcoal capitalize">{activeTab}</div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-foreground/60">Dr. Sarah Lee</div>
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold font-medium text-sm">
              SL
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
