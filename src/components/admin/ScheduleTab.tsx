"use client";
import { useState } from 'react';
import { MOCK_TIME_SLOTS, MOCK_PATIENTS, MOCK_DOCTORS } from '@/lib/mockData';
import { Calendar as CalendarIcon, Clock, MoreVertical, User, CheckCircle, Plus, CalendarPlus, ChevronRight } from 'lucide-react';

export function ScheduleTab() {
  const [selectedSlotId, setSelectedSlotId] = useState(MOCK_TIME_SLOTS[0].id);
  
  const selectedSlot = MOCK_TIME_SLOTS.find(s => s.id === selectedSlotId) || MOCK_TIME_SLOTS[0];
  const selectedIndex = MOCK_TIME_SLOTS.findIndex(s => s.id === selectedSlotId);
  const isSelectedBooked = !selectedSlot.available;
  const selectedPatient = isSelectedBooked ? MOCK_PATIENTS[selectedIndex % MOCK_PATIENTS.length] : null;
  const selectedDoctor = isSelectedBooked ? MOCK_DOCTORS[selectedIndex % MOCK_DOCTORS.length] : null;

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-full min-h-[700px]">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-muted rounded-lg">
            <CalendarIcon className="w-5 h-5 text-charcoal" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Today's Schedule</h2>
        </div>
        <div className="text-sm font-medium bg-gold/10 text-gold px-4 py-2 rounded-full">
          Thursday, Oct 26
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-8">
        {/* Top: Grid Time Slots */}
        <div>
          <h3 className="text-sm font-semibold text-charcoal mb-4">Select Time Slot</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {MOCK_TIME_SLOTS.map((slot, index) => {
              const isBooked = !slot.available;
              const isSelected = selectedSlotId === slot.id;
              const timeMain = slot.time.split(' ')[0];
              const timeAmPm = slot.time.split(' ')[1];

              return (
                <div 
                  key={slot.id} 
                  onClick={() => setSelectedSlotId(slot.id)}
                  className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    isSelected 
                    ? 'border-gold shadow-md bg-gold/5 scale-[1.02]' 
                    : isBooked 
                      ? 'border-slate-200 bg-white hover:border-gold/40 hover:shadow-sm'
                      : 'border-dashed border-slate-200 bg-slate-50/50 hover:border-gold/40 hover:bg-white'
                  }`}
                >
                  {/* Status Indicator */}
                  {isBooked ? (
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  ) : (
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-300" />
                  )}

                  <div className="flex flex-col items-center justify-center text-center space-y-1">
                    <div className={`text-xl font-bold ${isSelected ? 'text-charcoal' : 'text-slate-600'}`}>
                      {timeMain}
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? 'text-gold' : 'text-slate-400'}`}>
                      {timeAmPm}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" />

        {/* Bottom: Detail Pane */}
        <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-8">
          <h3 className="text-sm font-semibold text-slate-500 mb-6 flex items-center gap-2">
            Slot Details <ChevronRight className="w-4 h-4 text-slate-400" /> {selectedSlot.time}
          </h3>

          {isSelectedBooked && selectedPatient ? (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Image Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl" />
                <img 
                  src={selectedPatient.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250'} 
                  alt={selectedPatient.name} 
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250' }}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white relative z-10 shadow-lg" 
                />
              </div>
              
              {/* Info Section */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-3xl font-serif text-charcoal">{selectedPatient.name}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm bg-white text-slate-600 px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5">
                      <User className="w-4 h-4 text-gold" /> 
                      Handled by {selectedDoctor?.name}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 font-medium mb-1">Treatment</div>
                    <div className="font-semibold text-charcoal">Laser Rejuvenation</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs text-slate-400 font-medium mb-1">Duration</div>
                    <div className="font-semibold text-charcoal flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold" /> 45 Minutes
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button className="bg-charcoal text-white px-6 py-2.5 rounded-xl font-medium shadow-md hover:bg-charcoal/90 transition-all active:scale-95 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Start Appointment
                  </button>
                  <button className="bg-white text-charcoal border border-slate-200 px-6 py-2.5 rounded-xl font-medium shadow-sm hover:bg-slate-50 transition-all active:scale-95">
                    View EMR Record
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-6">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                <CalendarPlus className="w-10 h-10 text-slate-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Slot Available</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  This time slot at {selectedSlot.time} is open. You can schedule a new patient appointment now.
                </p>
              </div>
              <button className="bg-gold text-white px-8 py-3 rounded-xl font-medium shadow-[0_4px_14px_0_rgba(250,204,21,0.39)] hover:shadow-[0_6px_20px_rgba(250,204,21,0.23)] hover:bg-yellow-400 transition-all active:scale-95 flex items-center gap-2">
                <Plus className="w-5 h-5" /> Book Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
