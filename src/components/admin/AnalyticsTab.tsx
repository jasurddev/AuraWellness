import { TrendingUp, Users, DollarSign, Activity, UserPlus, RefreshCw, ShoppingBag, Award, Star } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { MOCK_DOCTORS } from '@/lib/mockData';

export function AnalyticsTab() {
  const { adminRole, adminDoctorId } = useStore();
  
  const loggedInDoctor = (adminDoctorId) 
    ? (MOCK_DOCTORS.find(d => d.id === adminDoctorId) || MOCK_DOCTORS[0])
    : MOCK_DOCTORS[0];

  // ==========================================
  // DOCTOR VIEW (MY PERFORMANCE)
  // ==========================================
  if (adminRole === 'doctor') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-serif text-charcoal">My Performance</h2>
            <p className="text-muted-foreground mt-1">Monthly KPI & Analytics for {loggedInDoctor.name}</p>
          </div>
          <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl border border-yellow-200 flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span className="font-semibold text-sm">Estimated Bonus: Rp 12.500.000</span>
          </div>
        </div>
        
        {/* Quick Stats for Doctor */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: "Treatments Revenue", value: "Rp 45.2M", icon: DollarSign, trend: "+8%" },
            { title: "Treatments Done", value: "112", icon: Activity, trend: "+12%" },
            { title: "Product Sales", value: "Rp 8.5M", icon: ShoppingBag, trend: "+15%" },
            { title: "Patient Satisfaction", value: "4.9/5", icon: Star, trend: "+0.1" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600" />
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

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patient Acquisition (Doctor Specific) */}
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col">
            <h3 className="font-semibold text-charcoal mb-6">Patient Acquisition (Your Patients)</h3>
            <div className="flex-1 flex flex-col justify-center space-y-8">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium text-charcoal flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-emerald-500" /> New Patients
                  </span>
                  <span className="text-muted-foreground font-semibold text-sm">38%</span>
                </div>
                <div className="w-full bg-muted/40 h-3 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-400" style={{ width: '38%' }}></div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">42 pasien baru bulan ini</p>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium text-charcoal flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-500" /> Repeat/Returning Patients
                  </span>
                  <span className="text-muted-foreground font-semibold text-sm">62%</span>
                </div>
                <div className="w-full bg-muted/40 h-3 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-blue-400" style={{ width: '62%' }}></div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">70 pasien kembali bulan ini</p>
              </div>
            </div>
          </div>

          {/* Treatment Demographics */}
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col">
            <h3 className="font-semibold text-charcoal mb-6">Top Treatments Performed</h3>
            <div className="flex-1 flex flex-col justify-center space-y-5">
              {[
                { label: 'Injectables (Botox/Filler)', value: 45, color: 'bg-emerald-400' },
                { label: 'Laser & Light Therapy', value: 30, color: 'bg-amber-400' },
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
        </div>
      </div>
    );
  }

  // ==========================================
  // MANAGER VIEW (GLOBAL ANALYTICS)
  // ==========================================
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-charcoal">Global Financial & Analytics</h2>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Revenue (MTD)", value: "Rp 128.5M", icon: DollarSign, trend: "+12%" },
          { title: "Total New Patients", value: "84", icon: Users, trend: "+5%" },
          { title: "Total Treatments", value: "312", icon: Activity, trend: "+18%" },
          { title: "Overall Growth", value: "14.2%", icon: TrendingUp, trend: "+2%" },
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
          <h3 className="font-semibold text-charcoal mb-6">Global Patient Retention</h3>
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

      {/* Doctor Performance Leaderboard */}
      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
        <h3 className="font-semibold text-charcoal mb-6">Doctor Performance Leaderboard</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="pb-4 font-medium pl-4">Doctor Name</th>
                <th className="pb-4 font-medium text-right">Treatments</th>
                <th className="pb-4 font-medium text-right">Tx Revenue</th>
                <th className="pb-4 font-medium text-right">Product Sales</th>
                <th className="pb-4 font-medium text-right">Est. Bonus</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 pl-4 font-medium text-charcoal flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">SL</div>
                  Dr. Sarah Lee
                </td>
                <td className="py-4 text-right text-slate-600">112</td>
                <td className="py-4 text-right text-slate-600">Rp 45.2M</td>
                <td className="py-4 text-right text-slate-600">Rp 8.5M</td>
                <td className="py-4 text-right font-medium text-emerald-600">Rp 12.5M</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 pl-4 font-medium text-charcoal flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold">MK</div>
                  Dr. Michael Kim
                </td>
                <td className="py-4 text-right text-slate-600">95</td>
                <td className="py-4 text-right text-slate-600">Rp 38.0M</td>
                <td className="py-4 text-right text-slate-600">Rp 4.2M</td>
                <td className="py-4 text-right font-medium text-emerald-600">Rp 8.2M</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 pl-4 font-medium text-charcoal flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">EJ</div>
                  Dr. Emily Chen
                </td>
                <td className="py-4 text-right text-slate-600">105</td>
                <td className="py-4 text-right text-slate-600">Rp 42.5M</td>
                <td className="py-4 text-right text-slate-600">Rp 6.8M</td>
                <td className="py-4 text-right font-medium text-emerald-600">Rp 10.4M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
