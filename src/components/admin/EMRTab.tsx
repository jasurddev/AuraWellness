"use client";

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { MOCK_PATIENTS, Patient, MOCK_DOCTORS } from '@/lib/mockData';
import { Search, FileText, ImageIcon, Activity, CheckCircle, User } from 'lucide-react';

export function EMRTab() {
  const { scanResult, wellnessData, bookingData, resetPatientData } = useStore();
  
  // Inject live demo patient if scanResult OR bookingData exists
  const hasLivePatient = scanResult || bookingData?.treatmentId;
  const allPatients: Patient[] = hasLivePatient ? [
    {
      id: 'demo-live',
      name: scanResult ? 'New Patient (Live AI Scan)' : 'New Patient (Live Booking)',
      avatar: scanResult ? scanResult.imageUrl : 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250',
      lastVisit: 'Just Now',
      notes: scanResult 
        ? 'Patient completed AI Face Scan from mobile app. Awaiting expert review.' 
        : 'Patient booked an appointment via mobile app. No AI scan provided.',
    },
    ...MOCK_PATIENTS
  ] : MOCK_PATIENTS;

  const [selectedPatientId, setSelectedPatientId] = useState(allPatients[0].id);
  const selectedPatient = allPatients.find(p => p.id === selectedPatientId) || allPatients[0];
  const isLiveDemo = selectedPatient.id === 'demo-live' && hasLivePatient;

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
          {allPatients.map((patient, index) => {
            const assignedDoctor = MOCK_DOCTORS[index % MOCK_DOCTORS.length];
            return (
              <div 
                key={patient.id}
                onClick={() => setSelectedPatientId(patient.id)}
                className={`p-4 border-b border-border/50 cursor-pointer transition-colors flex items-center space-x-3 ${selectedPatientId === patient.id ? 'bg-gold/5 border-l-4 border-l-gold' : 'hover:bg-muted/30 border-l-4 border-l-transparent'} ${patient.id === 'demo-live' ? 'bg-blue-50/50 hover:bg-blue-50' : ''}`}
              >
                <div className="relative">
                  <img 
                    src={patient.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250'} 
                    alt={patient.name} 
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250' }}
                    className="w-10 h-10 rounded-full object-cover bg-slate-100" 
                  />
                  {patient.id === 'demo-live' && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
                  )}
                </div>
                <div>
                  <div className={`font-medium text-sm ${patient.id === 'demo-live' ? 'text-blue-700' : 'text-charcoal'}`}>
                    {patient.name}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md flex items-center gap-1 border border-slate-200">
                      <User className="w-2.5 h-2.5" /> {assignedDoctor.name}
                    </span>
                  </div>
                  <div className="text-xs text-foreground/50 mt-1">Last visit: {patient.lastVisit}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Patient Detail (Right) */}
      {selectedPatient && (
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="p-8 border-b border-border flex items-start justify-between bg-muted/10">
            <div className="flex items-center space-x-6">
              <img 
                src={selectedPatient.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250'} 
                alt={selectedPatient.name} 
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250' }}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md bg-slate-100" 
              />
              <div>
                <h2 className="text-2xl font-medium text-charcoal flex items-center gap-2">
                  {selectedPatient.name}
                  {isLiveDemo && <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Live</span>}
                </h2>
                <div className="flex items-center space-x-4 mt-2 text-sm text-foreground/60">
                  <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md flex items-center gap-1 border border-slate-200">
                    <User className="w-3.5 h-3.5" /> 
                    Handled by: {MOCK_DOCTORS[allPatients.findIndex(p => p.id === selectedPatient.id) % MOCK_DOCTORS.length]?.name}
                  </span>
                  <span>ID: #{isLiveDemo ? '99999' : selectedPatient.id.padStart(5, '0')}</span>
                  <span>DOB: 12 Oct 1988</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-border text-charcoal px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors active:scale-95">
                New Note
              </button>
              {isLiveDemo && (
                <button onClick={resetPatientData} className="bg-charcoal flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-charcoal/90 transition-colors active:scale-95">
                  <CheckCircle className="w-4 h-4" /> Finish Appointment
                </button>
              )}
            </div>
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
                  {isLiveDemo ? (
                    <>
                      <div>
                        <span className="text-foreground/50 block text-xs">Acne Score</span>
                        <span className="font-medium text-charcoal">{scanResult?.hautAiMetrics?.metrics.acne ?? 0}/100</span>
                      </div>
                      <div>
                        <span className="text-foreground/50 block text-xs">Hydration</span>
                        <span className="font-medium text-charcoal">{scanResult?.hautAiMetrics?.metrics.hydration ?? 0}/100</span>
                      </div>
                      <div>
                        <span className="text-foreground/50 block text-xs">Pigmentation</span>
                        <span className="font-medium text-charcoal">{scanResult?.hautAiMetrics?.metrics.pigmentation ?? 0}/100</span>
                      </div>
                      <div>
                        <span className="text-foreground/50 block text-xs">Stress Level (Reported)</span>
                        <span className="font-medium text-charcoal">{wellnessData?.stress ?? 0}/5</span>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
                <div className="text-sm font-medium text-charcoal mb-4">{isLiveDemo && scanResult ? 'AI Scan Capture' : 'Clinical Photos'}</div>
                
                {isLiveDemo && scanResult ? (
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={scanResult.imageUrl || 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300&h=400'} 
                      alt="Live Scan" 
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300&h=400' }}
                      className="w-full aspect-square md:aspect-[3/4] object-cover bg-slate-100"
                    />
                    <div className="absolute bottom-2 left-2 bg-blue-600/90 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">AI Analyzed</div>
                    
                    {/* Render bounding boxes if issues exist */}
                    {scanResult?.issues.map((issue, idx) => (
                      <div 
                        key={idx}
                        className="absolute w-8 h-8 md:w-12 md:h-12 border-2 border-red-500 rounded-full animate-pulse"
                        style={{
                          top: `${30 + (idx * 15)}%`,
                          left: `${40 + (idx % 2 === 0 ? 10 : -10)}%`
                        }}
                      ></div>
                    ))}
                  </div>
                ) : (
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
                )}
                
                {isLiveDemo && scanResult ? (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold text-charcoal">AI Recommended Treatment:</p>
                    {scanResult.recommendedTreatments.map(t => (
                      <div key={t.id} className="text-xs bg-muted/30 p-2 rounded border border-border">
                        {t.name}
                      </div>
                    ))}
                  </div>
                ) : isLiveDemo && !scanResult ? (
                  <p className="text-xs text-foreground/50 text-center mt-3">Patient booked without AI Scan. Please request photos upon arrival.</p>
                ) : (
                  <p className="text-xs text-foreground/50 text-center mt-3">Treatment: Laser Rejuvenation</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
