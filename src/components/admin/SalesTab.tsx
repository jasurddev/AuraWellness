"use client";

import { ShoppingBag, TrendingUp, Package, Clock, ExternalLink, Activity } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/mockData';

export function SalesTab() {
  // Static mock data for MVP
  const mockOrders = [
    {
      id: 'ORD-2026-9921',
      date: 'Today, 10:45 AM',
      customer: 'Sarah Jenkins',
      items: [
        { product: MOCK_PRODUCTS[0], qty: 2 },
        { product: MOCK_PRODUCTS[2], qty: 1 }
      ],
      total: 935000,
      status: 'Ready to Ship'
    },
    {
      id: 'ORD-2026-9920',
      date: 'Today, 09:15 AM',
      customer: 'Emily Watson',
      items: [
        { product: MOCK_PRODUCTS[1], qty: 1 }
      ],
      total: 465000,
      status: 'Shipped'
    },
    {
      id: 'ORD-2026-9919',
      date: 'Yesterday, 16:30 PM',
      customer: 'Michael Chang',
      items: [
        { product: MOCK_PRODUCTS[3], qty: 2 }
      ],
      total: 375000,
      status: 'Delivered'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground/60">Today's Sales</h3>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-serif text-charcoal mb-1">Rp 1.400.000</div>
          <div className="text-xs text-green-600 font-medium">+15% from yesterday</div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground/60">Total Orders</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-serif text-charcoal mb-1">12</div>
          <div className="text-xs text-blue-600 font-medium">+3 new orders</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground/60">To Ship</h3>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-serif text-charcoal mb-1">4</div>
          <div className="text-xs text-amber-600 font-medium">Needs attention</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground/60">Avg. Order Value</h3>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-serif text-charcoal mb-1">Rp 485.000</div>
          <div className="text-xs text-foreground/50">Across all time</div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-serif text-charcoal">Recent Online Orders</h2>
          <button className="text-sm text-gold font-medium hover:underline flex items-center gap-1">
            View All <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/20 text-xs uppercase tracking-wider text-foreground/50 border-b border-border">
                <th className="p-4 font-medium">Order ID & Time</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Total</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-charcoal">{order.id}</div>
                    <div className="text-xs text-foreground/50 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {order.date}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm font-medium text-charcoal">{order.customer}</div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm text-foreground/80 space-y-1">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="font-medium text-xs bg-muted px-1.5 py-0.5 rounded text-charcoal">{item.qty}x</span>
                          <span className="truncate max-w-[150px]" title={item.product.name}>{item.product.name}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-charcoal">Rp {order.total.toLocaleString('id-ID')}</div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      order.status === 'Ready to Ship' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      order.status === 'Shipped' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-green-50 text-green-700 border-green-200'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-xs font-medium text-charcoal bg-white border border-border hover:bg-muted px-3 py-1.5 rounded-lg transition-colors">
                      Process
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
