import { TrendingUp, Users, DollarSign, Activity, UserPlus, RefreshCw } from 'lucide-react';

export function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-charcoal">Financial & Patient Analytics</h2>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Revenue (MTD)", value: "Rp 128.5M", icon: DollarSign, trend: "+12%" },
          { title: "New Patients", value: "84", icon: Users, trend: "+5%" },
          { title: "Treatments Done", value: "312", icon: Activity, trend: "+18%" },
          { title: "Growth Rate", value: "14.2%", icon: TrendingUp, trend: "+2%" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-1">{stat.title}</div>
              <div className="text-2xl font-semibold text-charcoal">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Charts Dummy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col">
          <h3 className="font-semibold text-charcoal mb-6">Revenue Trend (6 Months)</h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {[45, 55, 40, 70, 65, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center space-y-2 h-full">
                <div className="w-full h-full bg-muted/30 rounded-t-lg relative group overflow-hidden">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-blue-400 rounded-t-lg transition-all duration-500"
                    style={{ height: `${height}%` }}
                  />
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-2 left-1/2 -translate-x-1/2 bg-charcoal text-white text-[10px] py-1 px-2 rounded transition-opacity whitespace-nowrap z-10">
                    Rp {height}M
                  </div>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Demographics */}
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col">
          <h3 className="font-semibold text-charcoal mb-6">Treatment Demographics</h3>
          <div className="flex-1 flex flex-col justify-center space-y-5">
            {[
              { label: 'Laser & Light Therapy', value: 45, color: 'bg-amber-400' },
              { label: 'Injectables (Botox/Filler)', value: 30, color: 'bg-emerald-400' },
              { label: 'Facials & Peels', value: 15, color: 'bg-blue-400' },
              { label: 'Body Contouring', value: 10, color: 'bg-purple-400' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-charcoal">{item.label}</span>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
                <div className="w-full bg-muted/40 h-2.5 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Acquisition */}
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col">
          <h3 className="font-semibold text-charcoal mb-6">Patient Retention</h3>
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-medium text-charcoal flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-emerald-500" /> New Patients
                </span>
                <span className="text-muted-foreground font-semibold text-sm">45%</span>
              </div>
              <div className="w-full bg-muted/40 h-3 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-emerald-400" style={{ width: '45%' }}></div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">124 pasien baru bulan ini</p>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-medium text-charcoal flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-blue-500" /> Repeat Patients
                </span>
                <span className="text-muted-foreground font-semibold text-sm">55%</span>
              </div>
              <div className="w-full bg-muted/40 h-3 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-blue-400" style={{ width: '55%' }}></div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">152 pasien kembali bulan ini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
