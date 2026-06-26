"use client";

import { useState } from 'react';
import { MOCK_PATIENTS } from '@/lib/mockData';
import { Search, FileText, ImageIcon, Activity } from 'lucide-react';

export function EMRTab() {
  const [selectedPatientId, setSelectedPatientId] = useState(MOCK_PATIENTS[0].id);
  const selectedPatient = MOCK_PATIENTS.find(p => p.id === selectedPatientId);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex h-[700px]">
      {/* Patient List (Left) */}
      <div className="w-80 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border bg-muted/20">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search patients..." 
              className="w-full bg-white border border-border rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {MOCK_PATIENTS.map(patient => (
            <div 
              key={patient.id}
              onClick={() => setSelectedPatientId(patient.id)}
              className={`p-4 border-b border-border/50 cursor-pointer transition-colors flex items-center space-x-3 ${selectedPatientId === patient.id ? 'bg-gold/5 border-l-4 border-l-gold' : 'hover:bg-muted/30 border-l-4 border-l-transparent'}`}
            >
              <img src={patient.avatar} alt={patient.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="font-medium text-sm text-charcoal">{patient.name}</div>
                <div className="text-xs text-foreground/50 mt-0.5">Last visit: {patient.lastVisit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Detail (Right) */}
      {selectedPatient && (
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="p-8 border-b border-border flex items-start justify-between bg-muted/10">
            <div className="flex items-center space-x-6">
              <img src={selectedPatient.avatar} alt={selectedPatient.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
              <div>
                <h2 className="text-2xl font-medium text-charcoal">{selectedPatient.name}</h2>
                <div className="flex items-center space-x-4 mt-2 text-sm text-foreground/60">
                  <span>ID: #{selectedPatient.id.padStart(5, '0')}</span>
                  <span>DOB: 12 Oct 1988</span>
                </div>
              </div>
            </div>
            <button className="bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-charcoal/90 transition-colors active:scale-95">
              New Note
            </button>
          </div>

          {/* Content Grid */}
          <div className="p-8 grid grid-cols-2 gap-8">
            {/* Notes Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-charcoal font-medium">
                <FileText className="w-5 h-5 text-gold" />
                <h3>Recent Notes</h3>
              </div>
              <div className="bg-white border border-border p-5 rounded-xl shadow-sm space-y-3">
                <div className="text-xs font-medium text-gold bg-gold/10 inline-block px-2 py-1 rounded">
                  {selectedPatient.lastVisit}
                </div>
                <p className="text-sm text-charcoal leading-relaxed">
                  {selectedPatient.notes}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-charcoal font-medium mt-8">
                <Activity className="w-5 h-5 text-gold" />
                <h3>Latest AI Analysis</h3>
              </div>
              <div className="bg-blush/30 border border-blush p-5 rounded-xl space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-foreground/50 block text-xs">Hydration</span>
                    <span className="font-medium text-charcoal">45% (Low)</span>
                  </div>
                  <div>
                    <span className="text-foreground/50 block text-xs">Acne</span>
                    <span className="font-medium text-charcoal">Mild</span>
                  </div>
                  <div>
                    <span className="text-foreground/50 block text-xs">Pigmentation</span>
                    <span className="font-medium text-charcoal">Moderate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-charcoal font-medium">
                <div className="flex items-center space-x-2">
                  <ImageIcon className="w-5 h-5 text-gold" />
                  <h3>Clinical Photos</h3>
                </div>
                <span className="text-xs text-gold cursor-pointer hover:underline">View All</span>
              </div>
              
              <div className="bg-white border border-border p-4 rounded-xl shadow-sm">
                <div className="text-sm font-medium text-charcoal mb-4">Before / After</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300&h=400" 
                      alt="Before" 
                      className="w-full aspect-[3/4] object-cover rounded-lg filter sepia-[0.2]"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">Before</div>
                  </div>
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300&h=400" 
                      alt="After" 
                      className="w-full aspect-[3/4] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">After</div>
                  </div>
                </div>
                <p className="text-xs text-foreground/50 text-center mt-3">Treatment: Laser Rejuvenation</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
