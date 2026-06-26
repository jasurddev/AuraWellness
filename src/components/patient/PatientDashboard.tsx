"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Circle, Clock, Calendar, ChevronRight, Activity, Leaf, Droplets, MapPin } from 'lucide-react';
import { MOCK_PRESCRIPTIONS, MOCK_JOURNEY } from '@/lib/mockData';

export function PatientDashboard({ onBack }: { onBack: () => void }) {
  const [prescriptions, setPrescriptions] = useState(MOCK_PRESCRIPTIONS);

  const togglePrescription = (id: string) => {
    setPrescriptions(prev => 
      prev.map(p => p.id === id ? { ...p, completed: !p.completed } : p)
    );
  };

  const morningRx = prescriptions.filter(p => p.time === 'Morning');
  const nightRx = prescriptions.filter(p => p.time === 'Night');

  return (
    <div className="h-full flex flex-col bg-[#F9F8F6]">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-md z-20">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-secondary text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="font-serif font-medium text-primary">My Journey</div>
        <div className="w-9" />
      </div>

      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        
        {/* Profile Summary */}
        <div className="flex items-center gap-4 mb-6">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250" alt="Patient" className="w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover" />
          <div>
            <h2 className="text-xl font-serif text-primary">Emma Watson</h2>
            <div className="flex items-center gap-1 mt-1 text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full w-fit">
              <Leaf className="w-3 h-3" /> Happy Aging Member
            </div>
          </div>
        </div>

        {/* Holistic Progress Widget */}
        <div className="glass-panel p-5 rounded-2xl mb-8">
          <h3 className="text-sm font-serif font-medium text-primary mb-4 flex items-center justify-between">
            <span>Skin & Wellness Score</span>
            <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">Good</span>
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-muted-foreground flex items-center gap-1"><Droplets className="w-3 h-3 text-blue-400" /> Hydration</span>
                <span className="font-medium text-primary">85%</span>
              </div>
              <div className="w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-muted-foreground flex items-center gap-1"><Activity className="w-3 h-3 text-amber-500" /> Stress Level</span>
                <span className="font-medium text-primary">Low</span>
              </div>
              <div className="w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointment */}
        <div className="mb-8">
          <h3 className="text-lg font-serif text-primary mb-3">Upcoming Visit</h3>
          <div className="bg-charcoal text-white rounded-2xl p-5 shadow-lg relative overflow-hidden border border-charcoal/80">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div>
                <div className="text-xs text-white/70 mb-1.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> Tomorrow, 10:00 AM</div>
                <h4 className="font-medium text-[15px] leading-snug">Holistic Skin Rejuvenation</h4>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <Clock className="w-4 h-4 text-gold" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2.5">
                <img src="https://images.unsplash.com/photo-1594824436998-d14c2db4c0c4?auto=format&fit=crop&q=80&w=100&h=100" alt="Dr. Sarah" className="w-7 h-7 rounded-full object-cover border border-white/20" />
                <span className="text-xs text-white/80">Dr. Sarah Lee</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-medium text-gold uppercase tracking-wider">
                <MapPin className="w-3 h-3" /> Aura Clinic
              </div>
            </div>
          </div>
        </div>

        {/* E-Prescription Routine */}
        <div className="mb-10">
          <h3 className="text-lg font-serif text-primary mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" /> Daily Routine
          </h3>
          
          <div className="space-y-4">
            {/* Morning */}
            <div className="glass-panel p-4 rounded-2xl">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Morning Care</h4>
              <div className="space-y-3">
                {morningRx.map(rx => (
                  <div key={rx.id} onClick={() => togglePrescription(rx.id)} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`transition-colors ${rx.completed ? 'text-primary' : 'text-border group-hover:text-primary/50'}`}>
                      {rx.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                    </div>
                    <span className={`text-sm transition-all ${rx.completed ? 'text-muted-foreground line-through' : 'text-primary font-medium'}`}>
                      {rx.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Night */}
            <div className="glass-panel p-4 rounded-2xl">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Night Care</h4>
              <div className="space-y-3">
                {nightRx.map(rx => (
                  <div key={rx.id} onClick={() => togglePrescription(rx.id)} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`transition-colors ${rx.completed ? 'text-primary' : 'text-border group-hover:text-primary/50'}`}>
                      {rx.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                    </div>
                    <span className={`text-sm transition-all ${rx.completed ? 'text-muted-foreground line-through' : 'text-primary font-medium'}`}>
                      {rx.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <h3 className="text-lg font-serif text-primary mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" /> Timeline
          </h3>
          
          <div className="relative border-l-2 border-border/50 ml-3 space-y-6">
            {MOCK_JOURNEY.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-accent" />
                <div className="text-xs text-muted-foreground font-medium mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.date}
                </div>
                <div className="bg-white p-3 rounded-xl border border-border/40 shadow-sm">
                  <h4 className="text-sm font-medium text-primary">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground capitalize mt-1 flex items-center gap-1">
                    {item.type === 'treatment' ? <Leaf className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
                    {item.type} Completed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
