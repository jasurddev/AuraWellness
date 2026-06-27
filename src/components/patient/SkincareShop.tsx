"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Plus, Star, Info } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import { useStore } from '@/store/useStore';

export function SkincareShop({ onBack, onOpenCart }: { onBack: () => void, onOpenCart: () => void }) {
  const { addToCart, cartItems } = useStore();
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="h-full flex flex-col bg-[#F9F8F6]">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-md z-20">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-secondary text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="font-serif font-medium text-primary">Aura Pharmacy</div>
        <button onClick={onOpenCart} className="p-2 -mr-2 rounded-full hover:bg-secondary text-primary transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex-1 px-6 pb-24 overflow-y-auto scrollbar-hide">
        {/* Banner */}
        <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-8 shadow-sm">
          <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600" alt="Skincare" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="font-serif text-xl mb-1">Dermatologist Approved</h2>
            <p className="text-xs text-white/80">Skincare routine tailored for your skin.</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {MOCK_PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 flex flex-col group"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/50">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-medium text-primary flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-accent fill-accent" /> {product.rating}
                </div>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-1">{product.category}</div>
                <h3 className="text-sm font-medium text-primary leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <div className="text-xs font-semibold text-accent mb-3 mt-auto">
                  Rp {product.price.toLocaleString('id-ID')}
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-2 bg-primary text-white text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm hover:bg-primary/90"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
