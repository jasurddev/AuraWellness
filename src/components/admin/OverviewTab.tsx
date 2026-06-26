import { Users, CreditCard, Sparkles, TrendingUp } from 'lucide-react';

export function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-foreground/50 mb-1">Total Patients Today</div>
            <div className="text-2xl font-semibold text-charcoal">24</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-foreground/50 mb-1">Revenue Today</div>
            <div className="text-2xl font-semibold text-charcoal">Rp 65.5M</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blush/50 text-gold flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-foreground/50 mb-1">AI Scans Today</div>
            <div className="text-2xl font-semibold text-charcoal">12</div>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-charcoal">Weekly Appointments</h3>
          <div className="flex items-center space-x-2 text-sm text-green-500 bg-green-50 px-3 py-1 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span>+12%</span>
          </div>
        </div>
        
        {/* Simple CSS Bar Chart */}
        <div className="h-64 flex items-end justify-between space-x-2 pt-4">
          {[40, 60, 45, 80, 55, 30, 70].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center space-y-2">
              <div className="w-full bg-muted rounded-t-lg relative group overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gold rounded-t-lg transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
                {/* Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-charcoal text-white text-xs py-1 px-2 rounded transition-opacity">
                  {height} pts
                </div>
              </div>
              <div className="text-xs text-foreground/50">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
