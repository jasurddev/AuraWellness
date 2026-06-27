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
            <div key={slot.id} className="flex space-x-4">
              <div className="w-20 text-right text-sm text-foreground/50 font-medium pt-3">
                {slot.time}
              </div>
              <div className="flex-1 relative">
                {/* Time line indicator */}
                <div className="absolute top-5 left-0 right-0 h-px bg-border -z-10" />
                
                <div className={`p-4 rounded-xl border ${isBooked ? 'bg-blush/30 border-blush shadow-sm' : 'bg-transparent border-transparent'} flex items-center justify-between`}>
                  {isBooked && patient ? (
                    <>
                      <div className="flex items-center space-x-4">
                        <img 
                          src={patient.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250'} 
                          alt={patient.name} 
                          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250' }}
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div>
                          <div className="font-medium text-charcoal flex items-center gap-2">
                            {patient.name}
                            {assignedDoctor && (
                              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1 border border-slate-200">
                                <User className="w-3 h-3" /> {assignedDoctor.name}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-foreground/50 flex items-center space-x-1 mt-0.5">
                            <Clock className="w-3 h-3" />
                            <span>45 mins</span>
                            <span className="px-1">•</span>
                            <span className="text-gold font-medium">Laser Rejuvenation</span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white rounded-full transition-colors text-foreground/40">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <div className="text-sm text-foreground/30 flex items-center h-10">Available</div>
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
