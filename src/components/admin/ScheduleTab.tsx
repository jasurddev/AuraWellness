import { MOCK_TIME_SLOTS, MOCK_PATIENTS, MOCK_DOCTORS } from '@/lib/mockData';
import { Calendar as CalendarIcon, Clock, MoreVertical, User } from 'lucide-react';

export function ScheduleTab() {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-full min-h-[600px]">
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

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {MOCK_TIME_SLOTS.map((slot, index) => {
          const isBooked = !slot.available;
          // Assign mock patients to booked slots for visual effect
          const patient = isBooked ? MOCK_PATIENTS[index % MOCK_PATIENTS.length] : null;
          const assignedDoctor = isBooked ? MOCK_DOCTORS[index % MOCK_DOCTORS.length] : null;

          return (
            <div key={slot.id} className="flex space-x-6 relative group/slot">
              {/* Time Column */}
              <div className="w-24 text-right pt-4 relative">
                <div className="text-sm font-semibold text-charcoal">{slot.time.split(' ')[0]}</div>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{slot.time.split(' ')[1]}</div>
              </div>
              
              {/* Card Container */}
              <div className="flex-1 relative pb-6">
                {/* Time line indicator */}
                <div className="absolute top-6 left-0 right-0 h-px bg-slate-200 -z-10 group-hover/slot:bg-gold/30 transition-colors" />
                <div className={`absolute top-[1.35rem] -left-[5px] w-2.5 h-2.5 rounded-full border-2 border-white z-10 ${isBooked ? 'bg-gold' : 'bg-slate-300'}`} />
                
                <div 
                  className={`p-4 rounded-2xl border transition-all duration-300 group-hover/slot:shadow-md ${
                    isBooked 
                    ? 'bg-gradient-to-r from-stone-50 to-white border-stone-200 hover:border-gold/40 hover:-translate-y-0.5' 
                    : 'bg-slate-50/50 border-2 border-dashed border-slate-200 hover:border-gold/40 hover:bg-white cursor-pointer flex items-center justify-center'
                  }`}
                >
                  {isBooked && patient ? (
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center space-x-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold/20 rounded-full blur-sm" />
                          <img 
                            src={patient.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250'} 
                            alt={patient.name} 
                            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250' }}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white relative z-10 shadow-sm" 
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-charcoal text-base flex items-center gap-2 mb-1">
                            {patient.name}
                            {assignedDoctor && (
                              <span className="text-[10px] bg-white text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1 border border-slate-200 shadow-sm">
                                <User className="w-3 h-3 text-gold" /> {assignedDoctor.name}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center space-x-1.5 font-medium">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>45 mins</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-gold bg-gold/10 px-2 py-0.5 rounded-md">Laser Rejuvenation</span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-charcoal active:scale-95">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-sm font-medium text-slate-400 flex items-center h-12">
                      <span className="group-hover/slot:text-gold transition-colors">+ Book Appointment</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
