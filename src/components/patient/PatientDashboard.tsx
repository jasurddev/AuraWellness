"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Circle, Clock, Calendar, ChevronRight, Activity, Leaf } from 'lucide-react';
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
    <div className="min-h-full flex flex-col bg-[#F9F8F6]">
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
        <div className="flex items-center gap-4 mb-8">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250" alt="Patient" className="w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover" />
          <div>
            <h2 className="text-xl font-serif text-primary">Emma Watson</h2>
            <div className="flex items-center gap-1 mt-1 text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full w-fit">
              <Leaf className="w-3 h-3" /> Happy Aging Member
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
