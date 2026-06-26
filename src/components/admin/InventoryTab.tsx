import { Package, AlertCircle, Plus } from 'lucide-react';

export function InventoryTab() {
  const inventory = [
    { id: 1, name: "Vitamin C Serum 15%", stock: 45, status: "Good", category: "Serum" },
    { id: 2, name: "Retinol 0.5% Cream", stock: 12, status: "Low Stock", category: "Cream" },
    { id: 3, name: "Hydrating Toner", stock: 89, status: "Good", category: "Toner" },
    { id: 4, name: "Gentle Cleanser", stock: 5, status: "Critical", category: "Cleanser" },
    { id: 5, name: "Sunscreen SPF 50", stock: 120, status: "Good", category: "Sun Protection" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-charcoal">Inventory Management</h2>
        <button className="bg-gold text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gold/90 transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <Package className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Items</div>
            <div className="text-xl font-semibold">271</div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Low Stock</div>
            <div className="text-xl font-semibold text-amber-600">8 Items</div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Out of Stock</div>
            <div className="text-xl font-semibold text-red-600">2 Items</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center bg-muted/20">
          <h3 className="font-semibold text-charcoal">Skincare Stock Level</h3>
          <input 
            type="text" 
            placeholder="Search items..." 
            className="text-sm border border-border rounded-lg px-3 py-1.5 focus:outline-none focus:border-gold"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/10 text-muted-foreground">
              <tr>
                <th className="p-4 font-medium">Item Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Stock Level</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-charcoal">{item.name}</td>
                  <td className="p-4 text-muted-foreground">{item.category}</td>
                  <td className="p-4 font-medium">{item.stock} units</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Good' ? 'bg-emerald-50 text-emerald-600' :
                      item.status === 'Low Stock' ? 'bg-amber-50 text-amber-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gold hover:underline text-xs font-medium">Restock</button>
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
