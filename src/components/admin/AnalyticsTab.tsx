import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

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

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-80 flex flex-col">
          <h3 className="font-semibold text-charcoal mb-4">Revenue Trend</h3>
          <div className="flex-1 bg-muted/30 rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground">
            [Chart Area: Revenue over last 6 months]
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-80 flex flex-col">
          <h3 className="font-semibold text-charcoal mb-4">Treatment Demographics</h3>
          <div className="flex-1 bg-muted/30 rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground">
            [Chart Area: Treatment Popularity Pie Chart]
          </div>
        </div>
      </div>
    </div>
  );
}
